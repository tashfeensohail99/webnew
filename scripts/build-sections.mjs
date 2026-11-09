// Writes lib/page-sections.json: the contents list for every page that shows <OnThisPage>.
// Runs before each build, so the list cannot drift from the page's headings.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
// Must match headingId in components/ui.tsx.
const headingId = (t) => t.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : e.name === 'page.tsx' ? [join(d, e.name)] : []));

const out = {};
for (const file of walk(join(ROOT, 'app'))) {
  const src = readFileSync(file, 'utf8');
  const path = (src.match(/<OnThisPage path="([^"]+)"/) || [])[1];
  if (!path) continue;
  const seen = new Set();
  const items = [];
  for (const m of src.matchAll(/<SectionHeading[\s\S]*?\/>/g)) {
    const label = (m[0].match(/\btitle="([^"]+)"/) || [])[1];
    if (!label) continue;
    const id = headingId(label);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    items.push({ id, label });
  }
  out[path] = items;
}
writeFileSync(join(ROOT, 'lib/page-sections.json'), JSON.stringify(out, null, 1) + '\n');
console.log(`page-sections: ${Object.keys(out).length} pages`);
