#!/usr/bin/env node
/**
 * Writes lib/lastmod.json: the date each page's content last really changed.
 *
 *   node scripts/build-lastmod.mjs
 *
 * Google uses a sitemap's lastmod only if it is "consistently and verifiably
 * accurate", and it counts changes to a page's main content, structured data or
 * links as significant. `reviewed` in lib/routes.ts cannot do that job: it is
 * the date a human last checked the page, and it stays put through edits no
 * human has reviewed.
 *
 * The date comes from git: the last commit that touched the page's own source,
 * or today if that source has uncommitted edits. A later `reviewed` date wins.
 * It is never a build timestamp. Railway builds from a snapshot with no git
 * history, so the output is committed, and the script leaves it alone when git
 * is unavailable.
 *
 * Commit messages containing [no-lastmod] are skipped, for mechanical edits that
 * touch many pages without changing what any of them says.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'lib', 'lastmod.json');

/** Pages whose words live outside their own page file. */
const SHARED = {
  '/immigration-consultant-lahore': ['components/OfficeLanding.tsx'],
  '/immigration-consultant-islamabad': ['components/OfficeLanding.tsx'],
  '/tools/crs-calculator': ['components/tools/CrsCalculator.tsx', 'lib/crs-grid.ts'],
  '/tools/fsw-67-calculator': ['components/tools/FswCalculator.tsx'],
  '/tools/clb-converter': ['components/tools/ClbConverter.tsx'],
  '/tools/visit-visa-refusal-risk': ['components/tools/VisitVisaRiskChecker.tsx'],
  '/tools/work-permit-eligibility': ['components/tools/WorkPermitChecker.tsx'],
  '/blog': ['lib/blog.ts'],
};

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

let shallow = 'true';
try {
  shallow = git(['rev-parse', '--is-shallow-repository']);
} catch {
  // No repository at all, which is how Railway builds.
}
if (shallow !== 'false') {
  console.log('build-lastmod: no full git history here, keeping the committed lib/lastmod.json');
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const routes = [...readFileSync(join(ROOT, 'lib', 'routes.ts'), 'utf8').matchAll(/path:\s*'([^']+)',\s*reviewed:\s*'(\d{4}-\d{2}-\d{2})'/g)].map((m) => ({ path: m[1], reviewed: m[2] }));
if (routes.length < 50) throw new Error(`build-lastmod: only ${routes.length} routes parsed from lib/routes.ts`);

const dirty = new Set(git(['status', '--porcelain', '--', 'app', 'components', 'lib']).split('\n').filter(Boolean).map((l) => l.slice(3).replace(/"/g, '')));
const seen = new Map();

function lastChange(file) {
  if (seen.has(file)) return seen.get(file);
  const date = dirty.has(file) ? today : git(['log', '-1', '--format=%cs', '--invert-grep', '--fixed-strings', '--grep=[no-lastmod]', '--', file]);
  seen.set(file, date);
  return date;
}

const out = {};
const missing = [];
for (const r of routes) {
  const page = r.path === '/' ? 'app/page.tsx' : `app${r.path}/page.tsx`;
  if (!existsSync(join(ROOT, page))) missing.push(page);
  const dates = [page, ...(SHARED[r.path] ?? [])].filter((f) => existsSync(join(ROOT, f))).map(lastChange).filter(Boolean);
  out[r.path] = [...dates, r.reviewed].sort().pop();
}
if (missing.length) throw new Error(`build-lastmod: no page file for ${missing.join(', ')}`);

const next = `${JSON.stringify(out, null, 1)}\n`;
if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== next) writeFileSync(OUT, next);
const counts = {};
for (const d of Object.values(out)) counts[d] = (counts[d] || 0) + 1;
console.log(`build-lastmod: ${routes.length} routes`, JSON.stringify(counts));
