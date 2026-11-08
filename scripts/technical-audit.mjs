#!/usr/bin/env node
/**
 * Technical SEO checks the content crawler does not cover — read-only.
 *
 *   node scripts/technical-audit.mjs
 *
 * Reads docs/content-audit/inventory.json for the URL list, then tests how the
 * site answers at the edges: www and http variants, trailing slashes, query
 * strings, unknown URLs, legacy redirects, and every image on every page.
 * Writes docs/content-audit/technical.json.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'docs', 'content-audit');
const PROD = 'https://tashfeenimmigrationsolutions.com';
const HOST = 'tashfeenimmigrationsolutions.com';
const { pages } = JSON.parse(readFileSync(join(OUT, 'inventory.json'), 'utf8'));
const UA = 'site-technical-audit/1.0';

async function hop(url) {
  const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': UA }, signal: AbortSignal.timeout(25_000) });
  return { status: res.status, location: res.headers.get('location'), type: res.headers.get('content-type'), length: Number(res.headers.get('content-length')) || 0, body: res };
}
async function chain(url) {
  const hops = [];
  let cur = url;
  for (let i = 0; i < 8; i++) {
    const r = await hop(cur);
    hops.push({ url: cur.replace(PROD, ''), status: r.status });
    await r.body.body?.cancel();
    if (r.status < 300 || r.status >= 400 || !r.location) return { hops, final: cur.replace(PROD, ''), status: r.status, redirects: hops.length - 1 };
    cur = new URL(r.location, cur).href;
  }
  return { hops, final: cur.replace(PROD, ''), status: 'loop', redirects: hops.length };
}
async function mapLimit(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}

const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] ?? null;

async function main() {
  const variants = [
    ['http apex', `http://${HOST}/`],
    ['www', `https://www.${HOST}/`],
    ['http www', `http://www.${HOST}/`],
    ['www inner page', `https://www.${HOST}/fees`],
    ['trailing slash', `${PROD}/fees/`],
    ['uppercase path', `${PROD}/FEES`],
    ['double slash', `${PROD}//fees`],
    ['index.html', `${PROD}/index.html`],
    ['unknown URL', `${PROD}/this-page-does-not-exist`],
    ['old WordPress feed', `${PROD}/feed/`],
    ['old WordPress admin', `${PROD}/wp-admin/`],
    ['query string on page', `${PROD}/fees?utm_source=test`],
  ];
  const variantResults = await mapLimit(variants, 4, async ([label, url]) => ({ label, url, ...(await chain(url)) }));

  // Does a query-string URL still canonicalise to the clean page?
  const q = await (await fetch(`${PROD}/fees?utm_source=test`, { headers: { 'user-agent': UA } })).text();
  const queryCanonical = q.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1] ?? null;

  const cfg = readFileSync(join(ROOT, 'next.config.js'), 'utf8');
  const legacyPaths = [...cfg.matchAll(/\['(\/[^']+)',\s*'(\/[^']*)'\]/g)].map((m) => ({ from: m[1].replace(':rest(.*)', '-test'), to: m[2] }));
  const legacy = await mapLimit(legacyPaths, 4, async (r) => {
    const c = await chain(`${PROD}${r.from}`);
    return { ...r, ...c, ok: c.status === 200 && c.final === r.to.replace(/^\/$/, '/') };
  });
  const slashLegacy = await mapLimit(legacyPaths.slice(0, 6), 4, async (r) => ({ from: `${r.from}/`, ...(await chain(`${PROD}${r.from}/`)) }));

  // Every image on every page.
  const images = new Map();
  const perPage = await mapLimit(pages.filter((p) => p.status === 200), 6, async (p) => {
    const html = await (await fetch(`${PROD}${p.path === '/' ? '/' : p.path}`, { headers: { 'user-agent': UA } })).text();
    const clean = html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
    const tags = clean.match(/<img\b[^>]*>/gi) || [];
    const found = tags.map((t) => ({ src: attr(t, 'src'), alt: attr(t, 'alt'), width: attr(t, 'width'), height: attr(t, 'height'), loading: attr(t, 'loading') }));
    for (const f of found) if (f.src) images.set(f.src, [...(images.get(f.src) || []), p.path]);
    return { path: p.path, count: found.length, noAlt: found.filter((f) => f.alt == null).length, emptyAlt: found.filter((f) => f.alt === '').length, noDimensions: found.filter((f) => !f.width || !f.height).map((f) => f.src), lang: html.match(/<html[^>]*\blang="([^"]+)"/i)?.[1] ?? null, viewport: /<meta[^>]+name="viewport"/i.test(html), hreflang: /hreflang=/i.test(html), bytes: html.length };
  });
  const sized = await mapLimit([...images.keys()], 6, async (src) => {
    const url = new URL(src, PROD).href;
    let bytes = null; let type = null; let status = null;
    try {
      const r = await fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(25_000) });
      status = r.status; type = r.headers.get('content-type');
      bytes = (await r.arrayBuffer()).byteLength;
    } catch (e) { status = e.name; }
    return { src, status, type, kb: bytes == null ? null : Math.round(bytes / 1024), pages: images.get(src).length };
  });

  const out = { crawled: new Date().toISOString(), variants: variantResults, queryCanonical, legacy, slashLegacy, perPage, images: sized };
  writeFileSync(join(OUT, 'technical.json'), `${JSON.stringify(out, null, 1)}\n`);

  console.log('--- variants');
  for (const v of variantResults) console.log(`${v.label}: ${v.hops.map((h) => h.status).join(' > ')} -> ${v.final}`);
  console.log('query canonical:', queryCanonical);
  console.log('--- legacy redirects', legacy.length, 'failing:', legacy.filter((l) => !l.ok).map((l) => `${l.from} -> ${l.final} (${l.status})`).join(' | ') || 'none', '| max hops', Math.max(...legacy.map((l) => l.redirects)));
  console.log('trailing-slash legacy hops:', slashLegacy.map((l) => l.redirects).join(','));
  const P = perPage;
  console.log('--- pages', P.length, '| no lang', P.filter((p) => !p.lang).length, '| no viewport', P.filter((p) => !p.viewport).length, '| hreflang', P.filter((p) => p.hreflang).length, '| lang values', [...new Set(P.map((p) => p.lang))].join(','));
  console.log('images on page total', P.reduce((a, p) => a + p.count, 0), '| no alt attr', P.reduce((a, p) => a + p.noAlt, 0), '| empty alt', P.reduce((a, p) => a + p.emptyAlt, 0), '| missing dimensions', P.reduce((a, p) => a + p.noDimensions.length, 0));
  console.log('HTML KB: median', Math.round(P.map((p) => p.bytes).sort((a, b) => a - b)[P.length >> 1] / 1024), 'max', Math.round(Math.max(...P.map((p) => p.bytes)) / 1024));
  console.log('--- unique images'); for (const i of sized.sort((a, b) => (b.kb ?? 0) - (a.kb ?? 0))) console.log(`${i.kb}KB ${i.type} ${i.status} on ${i.pages} pages: ${i.src.slice(0, 90)}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
