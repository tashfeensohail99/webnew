/**
 * The Express Entry Comprehensive Ranking System grid.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PROVENANCE — read this before changing a single number.
 *
 * Every table below was derived TWICE independently and then reconciled cell by
 * cell (2026-07-20). The controlling primary text is the Ministerial Instructions
 * respecting the Express Entry system, as reproduced in Canada Gazette Part I,
 * Vol. 148, Extra No. 10, plus the amending instruction of March 2025.
 *
 * IMPORTANT CAVEAT: canada.ca returns HTTP 403 to automated fetching, so NO cell
 * here was read off a live IRCC web page. Values rest on the Gazette text plus
 * multi-source corroboration. Four independent arithmetic checks close exactly,
 * which is strong evidence against transcription error:
 *
 *     110 + 150 + 136 + 24 + 80 = 500   (IRCC's stated core max, no spouse)
 *     100 + 140 + 128 + 22 + 70 = 460   (IRCC's stated core max, with spouse)
 *     460 + 40                  = 500   (core + spouse section)
 *     500 + 100 + 50 + 30 + 15  = 695   (max attainable without a nomination)
 *
 * The 460 only closes because the with-spouse second-language section is capped
 * at 22 even though 6 × 4 abilities = 24. That cap is real — see LANG2_CAP.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * TRAPS THAT HAVE ALREADY BITTEN. Do not "simplify" these away:
 *
 *  1. CLB 4 and CLB 5 are ONE BAND worth 6 points. Only BELOW CLB 4 scores zero.
 *     Writing "CLB 4 or less = 0" under-scores every low-band applicant.
 *  2. The two age columns are NOT a constant offset. The gap is 9-10 points at
 *     ages 18-40 but 4/3/2/1 at 41/42/43/44. Never derive one column from the
 *     other by subtraction — that is exactly how a bogus "29 at age 41" arose.
 *  3. Skill transferability sub-caps are COMBINED, not per-table: C1+C2 ≤ 50 and
 *     C3+C4 ≤ 50 and C5 ≤ 50, and only then is the total truncated to 100.
 *     Applying 50 to each of the five tables yields 150 and is wrong.
 *  4. Language conversion is a STRICT FLOOR lookup, never interpolation or
 *     rounding up. IELTS Listening jumps 6.0 → 7.5 between CLB 7 and CLB 8;
 *     Listening 6.5 and 7.0 are both CLB 7. Rounding up silently over-scores.
 *  5. Abilities are scored INDEPENDENTLY and never averaged. The IELTS overall
 *     band is irrelevant and must be ignored.
 *  6. Arranged employment / job offer is worth ZERO since March 2025. Many
 *     published calculators still award 50-200 points. Do not "restore" it.
 */

export const CRS_GRID_VERIFIED_ON = '20 July 2026';

export const OFFICIAL_CALCULATOR_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html';

export const OFFICIAL_ROUNDS_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html';

/* ------------------------------- input model ------------------------------ */

export type EducationLevel =
  | 'none'
  | 'secondary'
  | 'oneYear'
  | 'twoYear'
  | 'bachelor'
  | 'twoOrMore'
  | 'masters'
  | 'doctoral';

export type LanguageTest = 'ielts' | 'celpip' | 'pte' | 'clb';

export type Ability = 'speaking' | 'listening' | 'reading' | 'writing';

export type AbilityScores = Record<Ability, string>;

export type CrsInput = {
  maritalStatus: 'single' | 'partnered';
  /** Drives which column is used. A spouse who is a Canadian citizen/PR, or who
   *  is not accompanying, means the applicant is scored as single throughout. */
  spouseComingAlong: boolean;
  age: number;
  education: EducationLevel;
  firstLanguage: 'english' | 'french';
  firstTest: LanguageTest;
  first: AbilityScores;
  hasSecondLanguage: boolean;
  second: AbilityScores;
  canadianWorkYears: number;
  foreignWorkYears: number;
  certificateOfQualification: boolean;
  spouseEducation: EducationLevel;
  spouseClb: AbilityScores;
  spouseCanadianWorkYears: number;
  provincialNomination: boolean;
  siblingInCanada: boolean;
  canadianStudy: 'none' | 'short' | 'long';
};

export type CrsBreakdown = {
  total: number;
  realisticMax: number;
  lines: { label: string; points: number }[];
};

const ABILITIES: Ability[] = ['speaking', 'listening', 'reading', 'writing'];

/* ------------------------- language test conversion ------------------------ */

/**
 * Minimum raw score required to reach each CLB level, per ability.
 * Lookup is a strict floor: the highest CLB whose minimum you meet or beat.
 * Anything below the CLB 4 row is "below CLB 4" and returns 0 — we never
 * compute or display a CLB below 4 because IRCC publishes no such row.
 */
const TEST_MINIMA: Record<
  Exclude<LanguageTest, 'clb'>,
  Record<Ability, Record<number, number>>
> = {
  // IELTS General Training only. IRCC does not accept IELTS Academic.
  ielts: {
    speaking: { 4: 4.0, 5: 5.0, 6: 5.5, 7: 6.0, 8: 6.5, 9: 7.0, 10: 7.5 },
    listening: { 4: 4.5, 5: 5.0, 6: 5.5, 7: 6.0, 8: 7.5, 9: 8.0, 10: 8.5 },
    reading: { 4: 3.5, 5: 4.0, 6: 5.0, 7: 6.0, 8: 6.5, 9: 7.0, 10: 8.0 },
    writing: { 4: 4.0, 5: 5.0, 6: 5.5, 7: 6.0, 8: 6.5, 9: 7.0, 10: 7.5 },
  },
  // CELPIP-General (2014 version) maps 1:1 across the whole published range.
  celpip: {
    speaking: { 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
    listening: { 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
    reading: { 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
    writing: { 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
  },
  pte: {
    speaking: { 4: 42, 5: 51, 6: 59, 7: 68, 8: 76, 9: 84, 10: 89 },
    listening: { 4: 28, 5: 39, 6: 50, 7: 60, 8: 71, 9: 82, 10: 89 },
    reading: { 4: 33, 5: 42, 6: 51, 7: 60, 8: 69, 9: 78, 10: 88 },
    writing: { 4: 41, 5: 51, 6: 60, 7: 69, 8: 79, 9: 88, 10: 90 },
  },
};

/**
 * Convert a raw test score to a CLB level. Returns 0 for "below CLB 4".
 * CLB 10 is terminal — the CRS awards nothing above it, so higher scores clamp.
 */
export function clbFromTest(test: LanguageTest, ability: Ability, raw: string): number {
  if (test === 'clb') {
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 4) return 0;
    return Math.min(Math.floor(n), 10);
  }
  const n = Number(raw);
  if (!Number.isFinite(n)) return 0;
  const minima = TEST_MINIMA[test][ability];
  let best = 0;
  for (const lvl of [4, 5, 6, 7, 8, 9, 10]) {
    if (n >= minima[lvl]) best = lvl;
  }
  return best;
}

function clbSet(test: LanguageTest, scores: AbilityScores): Record<Ability, number> {
  return {
    speaking: clbFromTest(test, 'speaking', scores.speaking),
    listening: clbFromTest(test, 'listening', scores.listening),
    reading: clbFromTest(test, 'reading', scores.reading),
    writing: clbFromTest(test, 'writing', scores.writing),
  };
}

const minClb = (s: Record<Ability, number>) => Math.min(...ABILITIES.map((a) => s[a]));

/* --------------------------------- tables --------------------------------- */

/** Age → [without spouse, with spouse]. Ages 20-29 share one bracket. */
const AGE: Record<number, [number, number]> = {
  17: [0, 0],
  18: [99, 90],
  19: [105, 95],
  20: [110, 100], // 20-29 all identical
  30: [105, 95],
  31: [99, 90],
  32: [94, 85],
  33: [88, 80],
  34: [83, 75],
  35: [77, 70],
  36: [72, 65],
  37: [66, 60],
  38: [61, 55],
  39: [55, 50],
  40: [50, 45],
  41: [39, 35],
  42: [28, 25],
  43: [17, 15],
  44: [6, 5],
  45: [0, 0], // 45 and above
};

function agePoints(age: number, withSpouse: boolean): number {
  const key = age <= 17 ? 17 : age >= 45 ? 45 : age >= 20 && age <= 29 ? 20 : age;
  const row = AGE[key] ?? [0, 0];
  return withSpouse ? row[1] : row[0];
}

/** Education → [without spouse, with spouse]. */
const EDUCATION: Record<EducationLevel, [number, number]> = {
  none: [0, 0],
  secondary: [30, 28],
  oneYear: [90, 84],
  twoYear: [98, 91],
  bachelor: [120, 112],
  twoOrMore: [128, 119],
  masters: [135, 126],
  doctoral: [150, 140],
};

/** Spouse's education (section B1, sub-max 10). */
const SPOUSE_EDUCATION: Record<EducationLevel, number> = {
  none: 0,
  secondary: 2,
  oneYear: 6,
  twoYear: 7,
  bachelor: 8,
  twoOrMore: 9,
  masters: 10,
  doctoral: 10,
};

/** First official language, points PER ABILITY. Note CLB 4 and 5 share a band. */
function lang1PerAbility(clb: number, withSpouse: boolean): number {
  if (clb < 4) return 0;
  if (clb <= 5) return 6; // CLB 4 OR 5 — identical in both columns
  if (clb === 6) return withSpouse ? 8 : 9;
  if (clb === 7) return withSpouse ? 16 : 17;
  if (clb === 8) return withSpouse ? 22 : 23;
  if (clb === 9) return withSpouse ? 29 : 31;
  return withSpouse ? 32 : 34; // CLB 10 or more
}

/** Second official language, points PER ABILITY (identical in both columns). */
function lang2PerAbility(clb: number): number {
  if (clb <= 4) return 0;
  if (clb <= 6) return 1;
  if (clb <= 8) return 3;
  return 6;
}

/** Section cap. 6 × 4 = 24, but the with-spouse column is capped at 22. */
const LANG2_CAP = { withSpouse: 22, withoutSpouse: 24 };

/** Spouse's first official language, points PER ABILITY (B2, sub-max 20). */
function spouseLangPerAbility(clb: number): number {
  if (clb <= 4) return 0;
  if (clb <= 6) return 1;
  if (clb <= 8) return 3;
  return 5;
}

const CANADIAN_WORK: [number, number][] = [
  [0, 0], // none / under a year
  [40, 35],
  [53, 46],
  [64, 56],
  [72, 63],
  [80, 70], // 5+
];

const SPOUSE_CANADIAN_WORK = [0, 5, 7, 8, 9, 10];

/* -------------------------- skill transferability -------------------------- */

/**
 * Education tiers used by the transferability tables — deliberately coarser than
 * the core education table. Note a single bachelor's sits in the MIDDLE tier:
 * the top tier needs two-or-more credentials, a master's, or a doctorate.
 */
function eduTier(e: EducationLevel): 0 | 1 | 2 {
  if (e === 'none' || e === 'secondary') return 0;
  if (e === 'oneYear' || e === 'twoYear' || e === 'bachelor') return 1;
  return 2;
}

/** Shared 0 / 13-25 / 25-50 shape used by C1-C4. */
function transferCell(tier: 0 | 1 | 2, high: boolean): number {
  if (tier === 0) return 0;
  if (tier === 1) return high ? 25 : 13;
  return high ? 50 : 25;
}

/* --------------------------------- scoring -------------------------------- */

export function scoreCrs(input: CrsInput): CrsBreakdown {
  const withSpouse = input.maritalStatus === 'partnered' && input.spouseComingAlong;

  const first = clbSet(input.firstTest, input.first);
  const second = input.hasSecondLanguage ? clbSet('clb', input.second) : null;
  const firstMin = minClb(first);

  const lines: { label: string; points: number }[] = [];
  const push = (label: string, points: number) => {
    if (points > 0) lines.push({ label, points });
  };

  /* --- A. Core / human capital (cap 500 without spouse, 460 with) --- */
  const age = agePoints(input.age, withSpouse);
  const edu = EDUCATION[input.education][withSpouse ? 1 : 0];
  const lang1 = ABILITIES.reduce((t, a) => t + lang1PerAbility(first[a], withSpouse), 0);
  const lang2Raw = second ? ABILITIES.reduce((t, a) => t + lang2PerAbility(second[a]), 0) : 0;
  const lang2 = Math.min(lang2Raw, withSpouse ? LANG2_CAP.withSpouse : LANG2_CAP.withoutSpouse);
  const cdnWork = CANADIAN_WORK[clampIdx(input.canadianWorkYears, 5)][withSpouse ? 1 : 0];

  const coreRaw = age + edu + lang1 + lang2 + cdnWork;
  const core = Math.min(coreRaw, withSpouse ? 460 : 500);

  push('Age', age);
  push('Education', edu);
  push('First official language', lang1);
  push('Second official language', lang2);
  push('Canadian work experience', cdnWork);

  /* --- B. Spouse factors (cap 40) --- */
  let spouse = 0;
  if (withSpouse) {
    const sEdu = SPOUSE_EDUCATION[input.spouseEducation];
    const sClb = clbSet('clb', input.spouseClb);
    const sLang = Math.min(
      ABILITIES.reduce((t, a) => t + spouseLangPerAbility(sClb[a]), 0),
      20,
    );
    const sWork = SPOUSE_CANADIAN_WORK[clampIdx(input.spouseCanadianWorkYears, 5)];
    spouse = Math.min(sEdu + sLang + sWork, 40);
    push('Spouse — education', sEdu);
    push('Spouse — language', sLang);
    push('Spouse — Canadian work experience', sWork);
  }

  /* --- C. Skill transferability (C1+C2 ≤ 50, C3+C4 ≤ 50, C5 ≤ 50, total ≤ 100) --- */
  const tier = eduTier(input.education);
  const langHigh = firstMin >= 9; // all four abilities at CLB 9+
  const langMid = firstMin >= 7; // all four at CLB 7+, at least one under 9

  const c1 = langMid ? transferCell(tier, langHigh) : 0;
  const c2 =
    input.canadianWorkYears >= 1 ? transferCell(tier, input.canadianWorkYears >= 2) : 0;
  const eduTransfer = Math.min(c1 + c2, 50);

  const fTier: 0 | 1 | 2 =
    input.foreignWorkYears >= 3 ? 2 : input.foreignWorkYears >= 1 ? 1 : 0;
  const c3 = langMid ? transferCell(fTier, langHigh) : 0;
  const c4 = input.canadianWorkYears >= 1 ? transferCell(fTier, input.canadianWorkYears >= 2) : 0;
  const workTransfer = Math.min(c3 + c4, 50);

  // C5 uses its own thresholds: CLB 7+ across all four → 50, CLB 5+ → 25.
  let certTransfer = 0;
  if (input.certificateOfQualification) {
    if (firstMin >= 7) certTransfer = 50;
    else if (firstMin >= 5) certTransfer = 25;
  }

  const transfer = Math.min(eduTransfer + workTransfer + certTransfer, 100);
  push('Skill transferability', transfer);

  /* --- D. Additional points (cap 600) --- */
  // French is scored on whichever language is French, English on whichever is English.
  const frenchSet = input.firstLanguage === 'french' ? first : second;
  const englishSet = input.firstLanguage === 'english' ? first : second;
  let french = 0;
  if (frenchSet && minClb(frenchSet) >= 7) {
    // 50 if English is also CLB 5+ across the board; 25 if English is CLB 4 or
    // lower, or no English test was taken at all.
    french = englishSet && minClb(englishSet) >= 5 ? 50 : 25;
  }

  const study = input.canadianStudy === 'long' ? 30 : input.canadianStudy === 'short' ? 15 : 0;
  const sibling = input.siblingInCanada ? 15 : 0;
  const pnp = input.provincialNomination ? 600 : 0;
  const additional = Math.min(french + study + sibling + pnp, 600);

  push('French-language ability', french);
  push('Study in Canada', study);
  push('Sibling in Canada', sibling);
  push('Provincial nomination', pnp);

  return {
    total: core + spouse + transfer + additional,
    realisticMax: input.provincialNomination ? 1200 : 695,
    lines,
  };
}

function clampIdx(n: number, max: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(Math.floor(n), max);
}
