/**
 * Language test → CLB / NCLC conversion.
 *
 * The English tables (IELTS General Training, CELPIP-General, PTE Core) already
 * live in lib/crs-grid.ts, where they were derived twice independently and
 * reconciled. This module does NOT duplicate them — it delegates — because two
 * copies of the same table is how they drift apart.
 *
 * What it adds is French: TEF Canada and TCF Canada, from the same verification
 * run.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * TWO TRAPS, BOTH LOAD-BEARING:
 *
 * 1. TEF INPUTS ARE ON THE OLD SCALE. In October 2019 the TEF provider re-scored
 *    the test onto a /699 scale. IRCC did NOT follow — it kept the previous scale
 *    for Express Entry, which the provider prints as "Équivalence ancien score".
 *    A converter that accepts the /699 number silently mis-scores every French
 *    candidate. The UI must say which number to read off the certificate.
 *
 * 2. TCF USES TWO DIFFERENT SCALES AT ONCE. Speaking and writing are marked out
 *    of 20; listening and reading are on the /699 scale. They are not
 *    interchangeable and must be collected as separate inputs.
 *
 * Abilities are never averaged and never rounded up. Lookup is a strict floor:
 * the highest level whose minimum you meet or beat.
 */

// Explicit .ts extension so Node can run the tests directly via type stripping.
// tsconfig has allowImportingTsExtensions; verified this still resolves in the
// Next build, which is the thing that would actually break.
import { clbFromTest as clbFromEnglishTest, type Ability } from './crs-grid.ts';

export type { Ability };

export const CLB_TABLES_VERIFIED_ON = '20 July 2026';

export type FrenchTest = 'tef' | 'tcf';
export type AnyTest = 'ielts' | 'celpip' | 'pte' | FrenchTest;

export const TEST_LABELS: Record<AnyTest, string> = {
  ielts: 'IELTS General Training',
  celpip: 'CELPIP-General',
  pte: 'PTE Core',
  tef: 'TEF Canada',
  tcf: 'TCF Canada',
};

export const IS_FRENCH: Record<AnyTest, boolean> = {
  ielts: false,
  celpip: false,
  pte: false,
  tef: true,
  tcf: true,
};

/** What the reader should physically look for on the certificate. */
export const INPUT_HINT: Record<AnyTest, string> = {
  ielts: 'Your band score for each of the four skills. Use your General Training result — IRCC does not accept IELTS Academic for Express Entry.',
  celpip: 'Your CELPIP level for each skill. These map to CLB one-for-one.',
  pte: 'Your score out of 90 for each of the four skills.',
  tef: 'Read the “Équivalence ancien score” figure, NOT the score out of 699. The provider re-scored the test in 2019; IRCC kept the earlier scale, so the /699 number will give you the wrong answer.',
  tcf: 'Speaking and writing are marked out of 20. Listening and reading are on the /699 scale. Enter each as it appears — they are different scales.',
};

/**
 * Minimum raw score for each level, per ability. Floor lookup only.
 * TEF: speaking and writing share a scale; listening and reading do not.
 * TCF: speaking and writing are /20; listening and reading are /699.
 */
const FRENCH_MINIMA: Record<FrenchTest, Record<Ability, Record<number, number>>> = {
  tef: {
    speaking: { 4: 181, 5: 226, 6: 271, 7: 310, 8: 349, 9: 371, 10: 393 },
    writing: { 4: 181, 5: 226, 6: 271, 7: 310, 8: 349, 9: 371, 10: 393 },
    listening: { 4: 145, 5: 181, 6: 217, 7: 249, 8: 280, 9: 298, 10: 316 },
    reading: { 4: 121, 5: 151, 6: 181, 7: 207, 8: 233, 9: 248, 10: 263 },
  },
  tcf: {
    speaking: { 4: 4, 5: 6, 6: 7, 7: 10, 8: 12, 9: 14, 10: 16 },
    writing: { 4: 4, 5: 6, 6: 7, 7: 10, 8: 12, 9: 14, 10: 16 },
    listening: { 4: 331, 5: 369, 6: 398, 7: 458, 8: 503, 9: 523, 10: 549 },
    reading: { 4: 342, 5: 375, 6: 406, 7: 453, 8: 499, 9: 524, 10: 549 },
  },
};

/**
 * Convert a raw test score to a CLB (English) or NCLC (French) level.
 * Returns 0 for "below level 4" — IRCC publishes no row beneath it, so we do not
 * invent one. Level 10 is terminal; higher scores clamp rather than extrapolate.
 */
export function toClb(test: AnyTest, ability: Ability, raw: string): number {
  if (test === 'tef' || test === 'tcf') {
    const n = Number(raw);
    if (!Number.isFinite(n)) return 0;
    const minima = FRENCH_MINIMA[test][ability];
    let best = 0;
    for (const lvl of [4, 5, 6, 7, 8, 9, 10]) if (n >= minima[lvl]) best = lvl;
    return best;
  }
  return clbFromEnglishTest(test, ability, raw);
}

export const ABILITY_LABELS: { key: Ability; en: string; fr: string }[] = [
  { key: 'speaking', en: 'Speaking', fr: 'Expression orale' },
  { key: 'listening', en: 'Listening', fr: 'Compréhension de l’oral' },
  { key: 'reading', en: 'Reading', fr: 'Compréhension écrite' },
  { key: 'writing', en: 'Writing', fr: 'Expression écrite' },
];

/**
 * What a set of levels actually means for eligibility, in plain terms.
 * Deliberately no programme cut-offs or points — the lowest ability is what
 * gates almost everything, and that is the point worth making.
 */
export function readLevels(levels: Record<Ability, number>): {
  lowest: number;
  headline: string;
  detail: string;
} {
  const vals = (['speaking', 'listening', 'reading', 'writing'] as Ability[]).map((a) => levels[a]);
  const lowest = Math.min(...vals);
  const highest = Math.max(...vals);

  if (lowest === 0) {
    return {
      lowest,
      headline: 'At least one ability is below level 4',
      detail:
        'IRCC publishes no equivalency below level 4, so there is nothing to convert. Your weakest ability is the one that counts for most programmes, so this is where any further work has to go.',
    };
  }

  const spread = highest - lowest;
  return {
    lowest,
    headline: `Your lowest ability is level ${lowest}`,
    detail:
      spread >= 2
        ? `Your abilities range from ${lowest} to ${highest}. That spread matters more than it looks: most programmes are assessed on your LOWEST ability, so a strong reading score does not carry a weak writing score. Raising the weakest one is usually the cheapest gain available.`
        : `Your four abilities are close together, between ${lowest} and ${highest}. Most programmes are assessed on the lowest of the four, so that is the number to work with.`,
  };
}
