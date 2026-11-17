#!/usr/bin/env node
/**
 * Files the AI-visit lines that middleware.ts writes to the server log (GEO plan G06).
 *
 *   railway logs --json --lines 5000 --filter ai-visit \
 *     --project <id> --service <id> --environment production \
 *     | node scripts/geo-visits.mjs <records folder>/geo/ai-visits.csv
 *
 * Railway keeps logs only for the current deployment, so run this daily and right
 * before every push. Each run appends the lines it has not seen (the CSV is the
 * history), then prints counts for the last seven days. It never prints anything
 * about a visitor: the log lines carry only time, kind, tool and page.
 */
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import readline from 'node:readline';

const out = process.argv[2];
if (!out) {
  console.error('usage: node scripts/geo-visits.mjs <path to ai-visits.csv>');
  process.exit(1);
}

const HEADER = 'timestamp,kind,tool,path';
if (!existsSync(out)) writeFileSync(out, `${HEADER}\n`);
const seen = new Set(readFileSync(out, 'utf8').split('\n').slice(1).filter(Boolean));
const csv = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

let added = 0;
const rl = readline.createInterface({ input: process.stdin });
for await (const line of rl) {
  let entry;
  try {
    entry = JSON.parse(line);
  } catch {
    continue;
  }
  const msg = typeof entry.message === 'string' ? entry.message : '';
  let v;
  try {
    v = JSON.parse(msg);
  } catch {
    continue;
  }
  if (v?.geo !== 'ai-visit' || !entry.timestamp) continue;
  const row = [entry.timestamp, v.kind, v.tool, v.path].map((x) => csv(String(x ?? ''))).join(',');
  if (seen.has(row)) continue;
  seen.add(row);
  appendFileSync(out, `${row}\n`);
  added++;
}

const since = Date.now() - 7 * 24 * 3600 * 1000;
const week = [...seen]
  .map((r) => r.split(','))
  .filter(([t]) => Date.parse(t) >= since);
const count = (rows, key) =>
  Object.entries(rows.reduce((m, r) => ((m[key(r)] = (m[key(r)] || 0) + 1), m), {})).sort((a, b) => b[1] - a[1]);

console.log(`added ${added} new lines; ${seen.size} in total`);
console.log('last 7 days, crawler visits by tool:', JSON.stringify(count(week.filter((r) => r[1] === 'crawler'), (r) => r[2])));
console.log('last 7 days, visits from AI tools:', JSON.stringify(count(week.filter((r) => r[1] === 'referral'), (r) => r[2])));
console.log('last 7 days, top pages for AI crawlers:', JSON.stringify(count(week.filter((r) => r[1] === 'crawler' && !/Googlebot|bingbot/.test(r[2])), (r) => r[3]).slice(0, 10)));
