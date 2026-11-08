#!/usr/bin/env node
/**
 * Content audit crawler — read-only, no dependencies.
 *
 *   node scripts/content-audit.mjs                      # audits the live site
 *   node scripts/content-audit.mjs http://localhost:3918 # audits a local build
 *   TEXT_DIR=/tmp/pages node scripts/content-audit.mjs   # also dumps each page's text
 *
 * Writes docs/content-audit/inventory.json and inventory.csv: one row per URL,
 * with what a crawler sees (status, title, headings, canonical, schema, links)
 * plus what a repeat run needs to spot regressions. Re-run after every batch and
 * diff the two files — that is the check that nothing broke.
 *
 * It measures; it does not judge. Word counts and pattern hits are leads for a
 * human reader, never a verdict on a page.
 */
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'docs', 'content-audit');
const PROD = 'https://tashfeenimmigrationsolutions.com';
const BASE = (process.argv[2] || PROD).replace(/\/$/, '');
const TEXT_DIR = process.env.TEXT_DIR;
const CONCURRENCY = 4;

const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

/** Leads for a reader. Each hit is a sentence to look at, not an error. */
const PATTERNS = {
  outcome: /\bguarante\w*|\b100\s?%|\bsuccess rate|\bassured\b|\bsure[- ]shot\b/gi,
  superlative: /\b(best|leading|top[- ]rated|no\.?\s?1|number one|#1|unmatched|premier)\b/gi,
  firmClaim:
    /\b\d[\d,.]*\s?[KkMm]?\+?\s+(clients?|cases?|years?|families|followers|applications?|approvals?)\b|\bthree offices\b|\btwo continents\b|\bMississauga\b|\blicen[sc]ed\b|\bRCIC\b|\bCICC\b|\bLaw Society\b|\bbarristers?\b/gi,
  stock:
    /\bdelve\b|\btapestry\b|\bin today'?s\b|\bit(?:'|’)?s important to note\b|\bit is important to note\b|\bembark\b|\bunlock\b|\bseamless\w*|\brobust\b|\bstreamlin\w*|\bgame[- ]changer\b|\bnavigat\w+ the\b/gi,
  volatile: /\b(?:CAD|C\$|US\$|USD|GBP|EUR|PKR|Rs\.?)\s?\d[\d,.]*|\$\d[\d,.]*|\b\d+(?:\.\d+)?\s?%|\b20(?:2[0-5])\b/g,
  placeholder: /\bTODO\b|\bPLACEHOLDER\b|\blorem ipsum\b|\bcoming soon\b/gi,
};

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'", '#x27': "'", '#x2F': '/' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) => {
    if (ENTITIES[e] != null) return ENTITIES[e];
    if (e[0] === '#') {
      const n = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    return m;
  });
const strip = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const words = (s) => (s.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;
const norm = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}=("([^"]*)"|'([^']*)')`, 'i'));
  return m ? decode(m[2] ?? m[3]) : null;
};
const metaByName = (html, name) => {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    if ((attr(tag, 'name') || attr(tag, 'property')) === name) return attr(tag, 'content');
  }
  return null;
};

function appRoutes(dir = join(ROOT, 'app'), prefix = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      const seg = name.startsWith('(') ? '' : `/${name}`;
      out.push(...appRoutes(p, prefix + seg));
    } else if (name === 'page.tsx') {
      out.push(prefix || '/');
    }
  }
  return out;
}

const routeTable = () =>
  [...readFileSync(join(ROOT, 'lib', 'routes.ts'), 'utf8').matchAll(/path:\s*'([^']+)',\s*reviewed:\s*'([^']+)'/g)].map((m) => ({
    path: m[1],
    reviewed: m[2],
  }));

async function get(url) {
  // redirect:'manual' so a redirect is reported rather than silently followed.
  const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'site-content-audit/1.0' } });
  return { status: res.status, location: res.headers.get('location'), robots: res.headers.get('x-robots-tag'), html: await res.text() };
}

async function mapLimit(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const k = i++;
        out[k] = await fn(items[k], k);
      }
    }),
  );
  return out;
}

const toPath = (href, base) => {
  try {
    const u = new URL(href, base);
    return { host: u.host, path: u.pathname.replace(/\/$/, '') || '/', href: u.href };
  } catch {
    return null;
  }
};

function analyse(url, path, res) {
  const html = res.html;
  const noScript = html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
  const mainMatch = noScript.match(/<main\b[^>]*>([\s\S]*)<\/main>/i);
  const main = mainMatch ? mainMatch[1] : noScript;
  // Link blocks inside <main> (the route ticker, breadcrumbs) are navigation, not copy.
  const prose = main.replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ');

  const headings = [...prose.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ level: +m[1], text: strip(m[2]) }));
  const h1s = [...noScript.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1]));
  const skips = headings.filter((h, i) => i > 0 && h.level > headings[i - 1].level + 1).length;

  // Split on block boundaries, not on <p>: card bodies and FAQ answers are plain
  // <div>s here, and matching only <p>/<li> silently drops them.
  const blocks = prose
    .replace(/<h([1-6])\b[^>]*>/gi, '\n[H$1] ')
    .replace(/<\/?(?:p|div|li|ul|ol|h[1-6]|summary|details|section|article|aside|header|footer|table|thead|tbody|tr|td|th|blockquote|figure|figcaption|dl|dt|dd|br|hr)\b[^>]*>/gi, '\n')
    .split('\n')
    .map(strip)
    .filter(Boolean);
  const text = strip(prose);
  const wc = words(text);
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => words(s) > 2);

  const hits = {};
  const hitLines = {};
  for (const [k, re] of Object.entries(PATTERNS)) {
    const found = text.match(re) || [];
    hits[k] = found.length;
    if (found.length) {
      hitLines[k] = sentences.filter((s) => s.search(new RegExp(re.source, re.flags.replace('g', ''))) >= 0).slice(0, 12);
    }
  }

  const schema = [];
  let schemaInvalid = 0;
  const schemaDates = {};
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const walk = (n) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (n && typeof n === 'object') {
          if (n['@type']) schema.push(...[].concat(n['@type']));
          if (n.datePublished) schemaDates.published = n.datePublished;
          if (n.dateModified) schemaDates.modified = n.dateModified;
          Object.values(n).forEach(walk);
        }
      };
      walk(JSON.parse(m[1]));
    } catch {
      schemaInvalid++;
    }
  }

  const collect = (block) => {
    const internal = new Set();
    const external = new Set();
    for (const m of block.matchAll(/<a\b[^>]*>/gi)) {
      const href = attr(m[0], 'href');
      if (!href || /^(#|mailto:|tel:|javascript:)/i.test(href)) continue;
      const t = toPath(href, url);
      if (!t) continue;
      if (t.host === new URL(BASE).host || t.host === new URL(PROD).host) internal.add(t.path);
      else external.add(t.href);
    }
    return { internal, external };
  };
  const inCopy = collect(prose);
  const anywhere = collect(noScript);

  const imgs = [...main.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const noAlt = imgs.filter((t) => attr(t, 'alt') == null).length;

  return {
    path,
    url,
    status: res.status,
    location: res.location,
    robotsHeader: res.robots,
    metaRobots: metaByName(html, 'robots'),
    title: decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim(),
    description: metaByName(html, 'description') ?? '',
    canonical: (() => {
      const tag = (html.match(/<link\b[^>]*>/gi) || []).find((t) => attr(t, 'rel') === 'canonical');
      return tag ? attr(tag, 'href') : null;
    })(),
    ogTitle: metaByName(html, 'og:title'),
    ogImage: metaByName(html, 'og:image'),
    h1s,
    headings,
    headingSkips: skips,
    wordCount: wc,
    avgSentence: sentences.length ? Math.round(sentences.reduce((a, s) => a + words(s), 0) / sentences.length) : 0,
    blocks,
    hits,
    hitLines,
    schema: [...new Set(schema)].sort(),
    schemaInvalid,
    schemaDates,
    internalInCopy: [...inCopy.internal],
    internalAll: [...anywhere.internal],
    external: [...inCopy.external],
    images: imgs.length,
    imagesNoAlt: noAlt,
    text,
  };
}

function crossPage(pages) {
  const ok = pages.filter((p) => p.status === 200);
  const copyOf = (p) => [...new Set(p.blocks.filter((b) => !b.startsWith('[H')).map(norm))];
  const live = new Set(ok.map((p) => p.path));

  for (const p of ok) {
    p.inboundCopy = ok.filter((q) => q !== p && q.internalInCopy.includes(p.path)).map((q) => q.path);
    p.inboundAll = ok.filter((q) => q !== p && q.internalAll.includes(p.path)).length;
    p.brokenInternal = p.internalAll.filter((t) => !live.has(t));
  }

  const same = (key) => {
    const seen = new Map();
    for (const p of ok) if (p[key]) seen.set(p[key], [...(seen.get(p[key]) || []), p.path]);
    return [...seen.entries()].filter(([, v]) => v.length > 1).map(([value, urls]) => ({ value, urls }));
  };

  // Sentences repeated across pages. Boilerplate (the same CTA everywhere) is
  // reported separately so it doesn't drown out real duplication.
  const owners = new Map();
  for (const p of ok) {
    for (const b of copyOf(p)) {
      if (b.split(' ').length < 10) continue;
      owners.set(b, [...(owners.get(b) || []), p.path]);
    }
  }
  const shared = [...owners.entries()].filter(([, v]) => v.length > 1);
  const BOILERPLATE = 6;
  const boilerplate = shared.filter(([, v]) => v.length >= BOILERPLATE);
  const repeated = shared.filter(([, v]) => v.length < BOILERPLATE);
  const boilerplateSet = new Set(boilerplate.map(([b]) => b));

  for (const p of ok) {
    const own = copyOf(p).filter((b) => !boilerplateSet.has(b));
    p.uniqueWords = own.join(' ').split(' ').filter(Boolean).length;
    p.repeatedBlocks = repeated.filter(([, v]) => v.includes(p.path)).length;
  }

  // Page pairs that share long runs of wording, ignoring site-wide boilerplate.
  const SHINGLE = 8;
  const shingles = new Map();
  for (const p of ok) {
    const set = new Set();
    for (const b of copyOf(p)) {
      if (boilerplateSet.has(b)) continue;
      const w = b.split(' ');
      for (let i = 0; i + SHINGLE <= w.length; i++) set.add(w.slice(i, i + SHINGLE).join(' '));
    }
    shingles.set(p.path, set);
  }
  const overlaps = [];
  for (let i = 0; i < ok.length; i++) {
    for (let j = i + 1; j < ok.length; j++) {
      const a = shingles.get(ok[i].path);
      const b = shingles.get(ok[j].path);
      if (!a.size || !b.size) continue;
      let n = 0;
      for (const s of a) if (b.has(s)) n++;
      const share = n / Math.min(a.size, b.size);
      if (n >= 15 && share >= 0.05) overlaps.push({ a: ok[i].path, b: ok[j].path, shared: n, share: +share.toFixed(2) });
    }
  }
  overlaps.sort((x, y) => y.share - x.share);

  return {
    duplicateTitles: same('title'),
    duplicateDescriptions: same('description'),
    duplicateH1s: (() => {
      const seen = new Map();
      for (const p of ok) if (p.h1s[0]) seen.set(p.h1s[0], [...(seen.get(p.h1s[0]) || []), p.path]);
      return [...seen.entries()].filter(([, v]) => v.length > 1).map(([value, urls]) => ({ value, urls }));
    })(),
    boilerplate: boilerplate.map(([text, urls]) => ({ text, pages: urls.length })).sort((a, b) => b.pages - a.pages),
    repeated: repeated.map(([text, urls]) => ({ text, urls })).sort((a, b) => b.urls.length - a.urls.length),
    overlaps,
  };
}

const csvCell = (v) => {
  const s = Array.isArray(v) ? v.join(' | ') : String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

async function main() {
  const sitemapXml = (await get(`${BASE}/sitemap.xml`)).html;
  const sitemap = new Map(
    [...sitemapXml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
      const loc = m[1].match(/<loc>(.*?)<\/loc>/)[1];
      const lastmod = m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.slice(0, 10) ?? null;
      return [new URL(loc).pathname.replace(/\/$/, '') || '/', lastmod];
    }),
  );
  const reviewed = new Map(routeTable().map((r) => [r.path, r.reviewed]));
  const code = appRoutes().filter((p) => !p.includes('['));

  // Everything the site says exists, plus whatever those pages link to.
  const queue = [...new Set([...sitemap.keys(), ...code])];
  const seen = new Set(queue);
  const pages = [];
  while (queue.length) {
    const batch = queue.splice(0);
    const got = await mapLimit(batch, CONCURRENCY, async (path) => {
      const url = `${BASE}${path === '/' ? '/' : path}`;
      return analyse(url, path, await get(url));
    });
    pages.push(...got);
    for (const p of got) {
      for (const t of p.status === 200 ? p.internalAll : []) {
        if (!seen.has(t) && !/\.[a-z0-9]{2,5}$/i.test(t) && !t.startsWith('/_next') && !t.startsWith('/api')) {
          seen.add(t);
          queue.push(t);
        }
      }
    }
  }
  pages.sort((a, b) => a.path.localeCompare(b.path));

  const cross = crossPage(pages);
  for (const p of pages) {
    p.inSitemap = sitemap.has(p.path);
    p.sitemapLastmod = sitemap.get(p.path) ?? null;
    p.reviewed = reviewed.get(p.path) ?? null;
    p.inCode = code.includes(p.path) || p.path.startsWith('/blog/');
    const expected = `${PROD}${p.path === '/' ? '' : p.path}`;
    const issues = [];
    if (p.status !== 200) issues.push(`status ${p.status}`);
    if (p.status === 200) {
      if (p.h1s.length !== 1) issues.push(`${p.h1s.length} H1s`);
      if (!p.title) issues.push('no title');
      if (p.title.length > TITLE_MAX) issues.push(`title ${p.title.length} chars`);
      if (!p.description) issues.push('no description');
      else if (p.description.length < DESC_MIN || p.description.length > DESC_MAX) issues.push(`description ${p.description.length} chars`);
      if (p.canonical !== expected) issues.push(`canonical ${p.canonical}`);
      if (/noindex/i.test(`${p.metaRobots} ${p.robotsHeader}`)) issues.push('noindex');
      if (!p.inSitemap) issues.push('not in sitemap');
      if (p.schemaInvalid) issues.push('invalid JSON-LD');
      if (p.headingSkips) issues.push(`${p.headingSkips} heading skips`);
      if (p.imagesNoAlt) issues.push(`${p.imagesNoAlt} images without alt`);
      if (p.brokenInternal.length) issues.push(`broken links: ${p.brokenInternal.join(' ')}`);
      if (!p.inboundCopy.length) issues.push('no in-copy inbound links');
      if (p.hits.placeholder) issues.push('placeholder text');
    }
    p.issues = issues;
  }

  mkdirSync(OUT, { recursive: true });
  if (TEXT_DIR) {
    mkdirSync(TEXT_DIR, { recursive: true });
    for (const p of pages.filter((x) => x.status === 200)) {
      const name = p.path === '/' ? 'home' : p.path.slice(1).replace(/\//g, '__');
      const outline = p.headings.map((h) => `${'  '.repeat(h.level - 1)}H${h.level} ${h.text}`).join('\n');
      writeFileSync(
        join(TEXT_DIR, `${name}.txt`),
        `URL: ${p.path}\nTITLE: ${p.title}\nDESCRIPTION: ${p.description}\nWORDS: ${p.wordCount}\n\nOUTLINE\n${outline}\n\nCOPY\n${p.blocks.join('\n')}\n\nEXTERNAL LINKS\n${p.external.join('\n')}\n`,
      );
    }
  }

  const summary = {
    base: BASE,
    crawled: new Date().toISOString(),
    total: pages.length,
    ok: pages.filter((p) => p.status === 200).length,
    inSitemap: sitemap.size,
    routesInCode: code.length,
    sitemapOnly: [...sitemap.keys()].filter((p) => !pages.some((q) => q.path === p && q.status === 200)),
    notInSitemap: pages.filter((p) => p.status === 200 && !p.inSitemap).map((p) => p.path),
    notInRouteTable: code.filter((p) => !reviewed.has(p)),
    ...cross,
  };

  const lean = pages.map(({ text, blocks, ...rest }) => rest);
  writeFileSync(join(OUT, 'inventory.json'), `${JSON.stringify({ summary, pages: lean }, null, 1)}\n`);

  const cols = [
    ['url', (p) => p.path],
    ['status', (p) => p.status],
    ['title', (p) => p.title],
    ['title_len', (p) => p.title.length],
    ['h1', (p) => p.h1s],
    ['description', (p) => p.description],
    ['desc_len', (p) => p.description.length],
    ['canonical', (p) => p.canonical],
    ['indexable', (p) => (/noindex/i.test(`${p.metaRobots} ${p.robotsHeader}`) ? 'no' : 'yes')],
    ['in_sitemap', (p) => (p.inSitemap ? 'yes' : 'no')],
    ['sitemap_lastmod', (p) => p.sitemapLastmod],
    ['date_published', (p) => p.schemaDates.published],
    ['date_modified', (p) => p.schemaDates.modified],
    ['words', (p) => p.wordCount],
    ['words_excl_boilerplate', (p) => p.uniqueWords],
    ['h2s', (p) => p.headings.filter((h) => h.level === 2).length],
    ['schema', (p) => p.schema],
    ['inbound_copy_links', (p) => p.inboundCopy?.length],
    ['outbound_copy_links', (p) => p.internalInCopy.length],
    ['external_sources', (p) => p.external.length],
    ['issues', (p) => p.issues],
  ];
  const csv = [cols.map(([h]) => h).join(','), ...pages.map((p) => cols.map(([, f]) => csvCell(f(p))).join(','))].join('\n');
  writeFileSync(join(OUT, 'inventory.csv'), `${csv}\n`);

  console.log(JSON.stringify({
    total: summary.total,
    ok: summary.ok,
    sitemap: summary.inSitemap,
    sitemapOnly: summary.sitemapOnly,
    notInSitemap: summary.notInSitemap,
    notInRouteTable: summary.notInRouteTable,
    dupTitles: summary.duplicateTitles.length,
    dupDescriptions: summary.duplicateDescriptions.length,
    dupH1s: summary.duplicateH1s.length,
    boilerplateBlocks: summary.boilerplate.length,
    repeatedBlocks: summary.repeated.length,
    overlappingPairs: summary.overlaps.length,
    pagesWithIssues: pages.filter((p) => p.issues.length).length,
  }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
