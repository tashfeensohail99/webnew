/**
 * Tests for the language-score converter.
 *
 * Run with:  npm run test:clb
 *
 * The French tables are the reason this file exists. TCF marks speaking and
 * writing out of 20 but listening and reading on a /699 scale, and the
 * listening and reading boundaries are one apart from each other at the top
 * (listening NCLC 9 starts at 523, reading NCLC 9 starts at 524). Those are
 * exactly the cells a careless edit would "tidy" into agreement.
 */

import { toClb, readLevels, type Ability } from '../lib/clb.ts';

let pass = 0;
let fail = 0;
const t = (name: string, got: unknown, want: unknown) => {
  if (got === want) pass++;
  else {
    fail++;
    console.log(`FAIL ${name}: got ${got} want ${want}`);
  }
};

/* --- TEF Canada: speaking and writing share a scale, listening and reading do not --- */
t('TEF speaking 310 -> NCLC 7', toClb('tef', 'speaking', '310'), 7);
t('TEF speaking 309 -> NCLC 6', toClb('tef', 'speaking', '309'), 6);
t('TEF writing 349 -> NCLC 8', toClb('tef', 'writing', '349'), 8);
t('TEF listening 249 -> NCLC 7', toClb('tef', 'listening', '249'), 7);
t('TEF listening 248 -> NCLC 6', toClb('tef', 'listening', '248'), 6);
t('TEF reading 207 -> NCLC 7', toClb('tef', 'reading', '207'), 7);
t('TEF reading 121 -> NCLC 4', toClb('tef', 'reading', '121'), 4);
t('TEF reading 120 -> below 4', toClb('tef', 'reading', '120'), 0);
t('TEF speaking 450 clamps to 10', toClb('tef', 'speaking', '450'), 10);
t('TEF speaking 600 still clamps to 10', toClb('tef', 'speaking', '600'), 10);

/* --- TEF listening and reading are NOT the same scale --- */
t('TEF 250 is NCLC 7 listening', toClb('tef', 'listening', '250'), 7);
t('TEF 250 is NCLC 9 reading', toClb('tef', 'reading', '250'), 9);

/* --- TCF Canada: /20 for speaking+writing, /699 for listening+reading --- */
t('TCF speaking 6 -> NCLC 5 (single value, not a range)', toClb('tcf', 'speaking', '6'), 5);
t('TCF speaking 7 -> NCLC 6', toClb('tcf', 'speaking', '7'), 6);
t('TCF speaking 10 -> NCLC 7', toClb('tcf', 'speaking', '10'), 7);
t('TCF speaking 16 -> NCLC 10', toClb('tcf', 'speaking', '16'), 10);
t('TCF writing 4 -> NCLC 4', toClb('tcf', 'writing', '4'), 4);
t('TCF writing 3 -> below 4', toClb('tcf', 'writing', '3'), 0);

/* --- the one-apart boundary at the top of the TCF /699 scales --- */
t('TCF listening 522 -> NCLC 8', toClb('tcf', 'listening', '522'), 8);
t('TCF listening 523 -> NCLC 9', toClb('tcf', 'listening', '523'), 9);
t('TCF reading 523 -> NCLC 8 (NOT 9 — differs from listening)', toClb('tcf', 'reading', '523'), 8);
t('TCF reading 524 -> NCLC 9', toClb('tcf', 'reading', '524'), 9);
t('TCF listening 549 -> NCLC 10', toClb('tcf', 'listening', '549'), 10);

/* --- English tests still delegate correctly to the CRS grid tables --- */
t('IELTS listening 7.0 -> CLB 7 (no rounding up)', toClb('ielts', 'listening', '7.0'), 7);
t('IELTS listening 7.5 -> CLB 8', toClb('ielts', 'listening', '7.5'), 8);
t('CELPIP reading 9 -> CLB 9', toClb('celpip', 'reading', '9'), 9);
t('PTE listening 60 -> CLB 7', toClb('pte', 'listening', '60'), 7);
t('blank input -> 0', toClb('ielts', 'speaking', ''), 0);
t('nonsense input -> 0', toClb('tef', 'speaking', 'abc'), 0);

/* --- the headline reading: lowest ability gates, spread is called out --- */
const mk = (s: number, l: number, r: number, w: number): Record<Ability, number> => ({
  speaking: s,
  listening: l,
  reading: r,
  writing: w,
});
t('lowest ability is reported', readLevels(mk(9, 9, 9, 6)).lowest, 6);
t('a wide spread is flagged', /spread/i.test(readLevels(mk(10, 9, 9, 5)).detail), true);
t('a narrow spread is not flagged as a spread', /spread/i.test(readLevels(mk(8, 8, 9, 8)).detail), false);
t('a below-4 ability short-circuits', readLevels(mk(9, 9, 9, 0)).lowest, 0);
t('below-4 says there is nothing to convert', /nothing to convert/i.test(readLevels(mk(9, 9, 9, 0)).detail), true);

console.log(`\n${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
