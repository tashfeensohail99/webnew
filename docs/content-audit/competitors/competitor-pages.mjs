// Compare one landing page per topic across competitors and the firm's own site. Records structure only.
import fs from 'node:fs';
const out = process.argv[2];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
const SITES = { amir: 'https://www.amirismail.com', euro: 'https://euroimmiconsultant.pk', migracon: 'https://migracon.com', mak: 'https://makimmigration.ca', sobirovs: 'https://sobirovs.com', experts: 'https://immigrationexperts.pk', visawala: 'https://visawala.pk' };
const OWN = { lawyer: '/canadian-immigration-lawyer-pakistan', lahore: '/immigration-consultant-lahore', c11: '/work-permit-canada', refusal: '/canada-visa-refused' };
const TOPICS = { lahore: /lahore/i, c11: /c-?11/i, refusal: /refus/i, lawyer: /lawyer|rcic|consultant-pakistan|about|team/i };
const get = async (u) => { try { const r = await fetch(u, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(25000), redirect: 'follow' }); return { status: r.status, url: r.url, body: await r.text() }; } catch (e) { return { status: 'ERR', url: u, body: '' }; } };
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const tx = (h) => strip(h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<(nav|footer|header)[\s\S]*?<\/\1>/gi, ' '));
async function urls(base) {
  for (const p of ['/sitemap.xml', '/sitemap_index.xml', '/wp-sitemap.xml']) {
    const r = await get(base + p); if (r.status !== 200 || !/<(urlset|sitemapindex)/.test(r.body)) continue;
    const kids = [...r.body.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    if (!kids.length) return [...r.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const all = []; for (const k of kids.slice(0, 25)) { const c = await get(k); all.push(...[...c.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])); } return all;
  }
  return [];
}
function analyse(u, r) {
  const h = r.body; const t = tx(h);
  const host = new URL(r.url || u).host;
  const inLinks = [...h.matchAll(/<a[^>]+href=["']([^"'#]+)/gi)].map((m) => m[1]).filter((x) => x.startsWith('/') || x.includes(host)).length;
  const offical = [...h.matchAll(/href=["'](https?:\/\/[^"']*(canada\.ca|laws-lois|college-ic)[^"']*)/gi)].length;
  return {
    url: r.url, status: r.status,
    title: strip(h.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').slice(0, 90),
    h1: strip(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '').slice(0, 90),
    h2: [...h.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1]).slice(0, 60)).filter(Boolean).slice(0, 9),
    h2count: (h.match(/<h2[\s>]/gi) || []).length,
    words: t.split(' ').length, internalLinks: inLinks, officialLinks: offical,
    faq: /FAQPage/.test(h), date: (h.match(/"dateModified"\s*:\s*"([^"]{10})/) || [])[1] || '', author: /"author"|Reviewed by|Written by/i.test(h),
    rNumber: [...new Set(t.match(/\bR\d{6}\b/g) || [])].slice(0, 3),
  };
}
const res = {};
for (const [k, base] of Object.entries(SITES)) {
  const list = await urls(base);
  res[k] = { urls: list.length };
  for (const [topic, re] of Object.entries(TOPICS)) {
    const cand = list.filter((u) => re.test(new URL(u).pathname));
    const pick = cand.sort((a, b) => a.length - b.length)[0];
    if (!pick) { res[k][topic] = null; continue; }
    res[k][topic] = analyse(pick, await get(pick));
  }
}
res.tashfeen = {};
for (const [topic, p] of Object.entries(OWN)) { const u = 'https://tashfeenimmigrationsolutions.com' + p; res.tashfeen[topic] = analyse(u, await get(u)); }
fs.writeFileSync(out, JSON.stringify(res, null, 1));
for (const [k, v] of Object.entries(res)) for (const [t, a] of Object.entries(v)) { if (!a || t === 'urls') continue; console.log(`${k.padEnd(9)} ${t.padEnd(8)} w${String(a.words).padEnd(6)} h2:${String(a.h2count).padEnd(3)} int:${String(a.internalLinks).padEnd(4)} off:${String(a.officialLinks).padEnd(3)} faq:${a.faq ? 'y' : 'n'} auth:${a.author ? 'y' : 'n'} ${a.date} ${a.rNumber.join(',')} | ${a.url.replace(/^https?:\/\/(www\.)?/, '').slice(0, 60)} | H1: ${a.h1.slice(0, 60)}`); }
