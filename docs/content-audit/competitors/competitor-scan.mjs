// Read-only scan of competitors' public pages. Records signals, never page copy.
import fs from 'node:fs';
const out = process.argv[2];
const SITES = ['https://www.amirismail.com', 'https://euroimmiconsultant.pk', 'https://lalaniassociates.com', 'https://zallp.com', 'https://ma-law.org.pk', 'https://immigrationexperts.pk', 'https://visawala.pk', 'https://migracon.com', 'https://makimmigration.ca', 'https://sobirovs.com', 'https://tashfeenimmigrationsolutions.com'];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
const get = async (u) => {
  try {
    const r = await fetch(u, { headers: { 'user-agent': UA, accept: 'text/html,application/xml' }, signal: AbortSignal.timeout(25000), redirect: 'follow' });
    return { status: r.status, url: r.url, body: await r.text() };
  } catch (e) { return { status: 'ERR ' + (e.cause?.code || e.name), url: u, body: '' }; }
};
const text = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const tag = (h, re) => (h.match(re)?.[1] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 130);
const all = (h, re) => [...h.matchAll(re)].map((m) => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);

async function sitemapCount(base) {
  for (const p of ['/sitemap.xml', '/sitemap_index.xml', '/wp-sitemap.xml']) {
    const r = await get(base + p);
    if (r.status !== 200 || !/<(urlset|sitemapindex)/.test(r.body)) continue;
    const kids = [...r.body.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    if (!kids.length) return { from: p, urls: [...r.body.matchAll(/<url>/g)].length, sample: [...r.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]) };
    let n = 0; const sample = [];
    for (const k of kids.slice(0, 25)) {
      const c = await get(k);
      const locs = [...c.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      n += locs.length; sample.push(...locs);
    }
    return { from: p, children: kids.length, urls: n, sample };
  }
  return { from: null, urls: null, sample: [] };
}

const res = [];
await Promise.all(SITES.map(async (base) => {
  const h = await get(base + '/');
  const t = text(h.body);
  const sm = await sitemapCount(base);
  const paths = sm.sample.map((u) => { try { return new URL(u).pathname; } catch { return ''; } });
  const count = (re) => paths.filter((p) => re.test(p)).length;
  const schema = [...new Set(all(h.body, /"@type"\s*:\s*"([^"]+)"/g))].slice(0, 12);
  res.push({
    base, status: h.status, finalUrl: h.url,
    title: tag(h.body, /<title[^>]*>([\s\S]*?)<\/title>/i),
    desc: tag(h.body, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i),
    h1: all(h.body, /<h1[^>]*>([\s\S]*?)<\/h1>/gi).slice(0, 2).map((s) => s.slice(0, 110)),
    h2count: (h.body.match(/<h2[\s>]/gi) || []).length,
    words: t.split(' ').length,
    schema,
    sitemap: { from: sm.from, urls: sm.urls },
    sections: { blog: count(/blog|news|article|insight|post/i), canada: count(/canada/i), city: count(/lahore|islamabad|karachi|rawalpindi|faisalabad|peshawar|multan/i), c11: count(/c-?11/i), refusal: count(/refus|gcms|judicial|appeal/i), study: count(/study|student/i), expressEntry: count(/express-?entry/i), pnp: count(/pnp|nominee/i), tools: count(/calculator|tool|assessment/i) },
    signals: {
      rNumber: [...new Set(t.match(/\bR\d{6}\b/g) || [])].slice(0, 5),
      rcic: /\bRCIC\b/.test(t), cicc: /\bCICC\b|College of Immigration/i.test(t), lawSociety: /Law Society|\bLSO\b|LSBC|Barrister\s*(?:&|and)\s*Solicitor/i.test(t), pakistaniBar: /High Court|Bar Council|Advocate/i.test(t),
      registerLink: /college-ic\.ca|lso\.ca|lawsociety/i.test(h.body), testimonials: /testimonial|client stor|success stor|reviews?\b/i.test(t),
      successRate: /\b\d{2,3}\s?%\s*(success|approval|visa)/i.test(t) || /success rate/i.test(t), guarantee: /guarantee/i.test(t), yearsClaim: (t.match(/\b(?:since\s+(?:19|20)\d\d|\d{1,2}\+?\s+years)/i) || [''])[0], clientsClaim: (t.match(/\b[\d,]+\+?\s*(?:families|clients|cases|applicants)/i) || [''])[0],
      video: /youtube\.com\/embed|youtu\.be|youtube-nocookie/i.test(h.body), whatsapp: /wa\.me|api\.whatsapp/i.test(h.body), urdu: /[؀-ۿ]{3,}/.test(t), fees: /\bfees?\b.*\b(PKR|Rs\.?|CAD)\b/i.test(t), author: /written by|reviewed by|author/i.test(t),
    },
    sampleTopPaths: [...new Set(paths.map((p) => p.split('/').filter(Boolean)[0]).filter(Boolean))].slice(0, 16),
  });
}));
res.sort((a, b) => a.base.localeCompare(b.base));
fs.writeFileSync(out, JSON.stringify(res, null, 1));
for (const r of res) {
  console.log(`\n## ${r.base} [${r.status}] words ${r.words} h2 ${r.h2count} sitemap ${r.sitemap.urls}`);
  console.log(' title:', r.title, '\n h1:', r.h1.join(' || '));
  console.log(' schema:', r.schema.join(','));
  console.log(' sections:', JSON.stringify(r.sections));
  console.log(' signals:', JSON.stringify(r.signals));
  console.log(' paths:', r.sampleTopPaths.join(' '));
}
