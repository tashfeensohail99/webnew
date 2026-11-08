/**
 * The Federal Skilled Worker 100-point selection grid (67-point pass mark).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS NOT THE CRS SCORE. It is the pass/fail ELIGIBILITY test for the FSW
 * class, set in the Immigration and Refugee Protection Regulations ss.75-83.
 * The CRS score out of 1,200 is a separate ranking applied afterwards, inside
 * the Express Entry pool. Confusing the two is the single most common
 * misunderstanding in this area, which is why they are separate modules.
 *
 * PROVENANCE. Derived twice independently and reconciled against IRPR
 * (SOR/2002-227), consolidation current to 26 May 2026, read directly on
 * laws-lois.justice.gc.ca — which, unlike canada.ca, does not block automated
 * access. Every value below is traceable to a numbered section.
 *
 * ARITHMETIC CHECK, which closes exactly:
 *   language 28 + education 25 + experience 15 + age 12
 *   + arranged employment 10 + adaptability 10 = 100
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * FOUR TRAPS. Each was caught by reconciliation, not by either derivation alone.
 *
 * 1. "WORK PERMIT" IS NOT THE WHOLE TEST. s.83(1)(c) reads "under a work permit
 *    OR AUTHORIZED UNDER SECTION 186". BOTH independent derivations wrote "work
 *    permit only". A tool that asks only "did you hold a work permit?" awards
 *    zero to genuinely qualifying applicants. The same phrase appears in
 *    s.83(1)(c.1) for the spouse, and s.83(2) has the equivalent "or under
 *    section 188" for study.
 *
 * 2. COUSINS DO NOT QUALIFY. s.83(5)(vi) is "child of the father or mother of
 *    their father or mother, other than their father or mother" — an aunt or
 *    uncle. An automated summary glossed this as "cousins". It is not.
 *
 * 3. ARRANGED EMPLOYMENT IS WORTH 10 HERE. What the CRS does with a job offer is
 *    a separate question (lib/crs-grid.ts, trap 6). Changes to it did NOT touch
 *    s.82(2), which is part of this grid. A qualifying offer is
 *    worth 10 here plus 5 under adaptability s.83(1)(e) — 15 in total, subject
 *    to the adaptability cap.
 *
 * 4. ADAPTABILITY MUST BE CAPPED, NOT NORMALISED. The seven elements sum to 40
 *    against a hard maximum of 10. Sum them, then truncate.
 */

export const FSW_GRID_VERIFIED_ON = '20 July 2026';
export const FSW_PASS_MARK = 67;
export const FSW_MAX = 100;

export const IRPR_URL = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/';
export const IRCC_FSW_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html';

export type EducationLevel =
  | 'none'
  | 'secondary'
  | 'oneYear'
  | 'twoYear'
  | 'threeYear'
  | 'twoOrMore'
  | 'masters'
  | 'doctoral';

export type FswInput = {
  /** Lowest CLB across the four abilities in the first official language. */
  firstLanguageClb: number;
  /** True only if CLB 5 or higher in ALL FOUR abilities of the other language. */
  secondLanguageClb5: boolean;
  education: EducationLevel;
  /** Years of skilled work experience (TEER 0/1/2/3) in the last 10 years. */
  experienceYears: number;
  age: number;
  arrangedEmployment: boolean;
  /** Applicant worked full-time in Canada 1yr+ under a permit OR s.186 authority. */
  ownCanadianWork: boolean;
  /** Applicant studied full-time in Canada, 2+ academic years, permit or s.188. */
  ownCanadianStudy: boolean;
  spouseAccompanying: boolean;
  spouseLanguageClb4: boolean;
  spouseCanadianWork: boolean;
  spouseCanadianStudy: boolean;
  /** Parent, grandparent, child, grandchild, sibling, aunt/uncle, niece/nephew. NOT cousins. */
  relativeInCanada: boolean;
};

/** s.79(3)(a) — points PER SKILL AREA, four skill areas, against the CLB 7 threshold. */
function firstLanguagePerAbility(clb: number): number {
  if (clb < 7) return 0; // below the threshold in any ability scores nil for the factor
  if (clb === 7) return 4;
  if (clb === 8) return 5;
  return 6; // CLB 9 or higher
}

/** s.78(1). Highest-scoring credential only, per s.78(2). */
const EDUCATION: Record<EducationLevel, number> = {
  none: 0,
  secondary: 5,
  oneYear: 15,
  twoYear: 19,
  threeYear: 21,
  twoOrMore: 22,
  masters: 23,
  doctoral: 25,
};

export const EDUCATION_LABELS: { value: EducationLevel; label: string }[] = [
  { value: 'none', label: 'No secondary school credential' },
  { value: 'secondary', label: 'Secondary school credential' },
  { value: 'oneYear', label: 'One-year post-secondary credential' },
  { value: 'twoYear', label: 'Two-year post-secondary credential' },
  { value: 'threeYear', label: 'Post-secondary credential of three years or longer' },
  {
    value: 'twoOrMore',
    label: 'Two or more post-secondary credentials, one of three years or longer',
  },
  {
    value: 'masters',
    label: 'Master’s level, or an entry-to-practice professional degree requiring provincial licensing',
  },
  { value: 'doctoral', label: 'Doctoral level' },
];

/** s.80(1). Bands are NOT linear in years — never interpolate. */
function experiencePoints(years: number): number {
  if (years >= 6) return 15;
  if (years >= 4) return 13;
  if (years >= 2) return 11;
  if (years >= 1) return 9;
  return 0;
}

/** s.81. Every age is separately enumerated in the regulation. */
function agePoints(age: number): number {
  if (age < 18) return 0;
  if (age <= 35) return 12;
  if (age >= 47) return 0;
  return 12 - (age - 35); // 36 -> 11, 46 -> 1
}

export type FswBreakdown = {
  total: number;
  passes: boolean;
  lines: { label: string; points: number; max: number }[];
  /** Set when the applicant fails the language floor, which is disqualifying. */
  languageFloorFailed: boolean;
};

export function scoreFsw(input: FswInput): FswBreakdown {
  const clb = Number.isFinite(input.firstLanguageClb) ? input.firstLanguageClb : 0;
  const perAbility = firstLanguagePerAbility(clb);
  const first = perAbility * 4;
  const second = input.secondLanguageClb5 ? 4 : 0;
  const language = first + second;

  const education = EDUCATION[input.education] ?? 0;
  const experience = experiencePoints(input.experienceYears);
  const age = agePoints(input.age);
  const arranged = input.arrangedEmployment ? 10 : 0;

  // s.83(1). Seven elements summing to 40, hard-capped at 10.
  const spouse = input.spouseAccompanying;
  const adaptabilityRaw =
    (input.ownCanadianWork ? 10 : 0) +
    (spouse && input.spouseLanguageClb4 ? 5 : 0) +
    (input.ownCanadianStudy ? 5 : 0) +
    (spouse && input.spouseCanadianStudy ? 5 : 0) +
    (spouse && input.spouseCanadianWork ? 5 : 0) +
    (input.relativeInCanada ? 5 : 0) +
    (input.arrangedEmployment ? 5 : 0);
  const adaptability = Math.min(adaptabilityRaw, 10);

  const total = language + education + experience + age + arranged + adaptability;

  return {
    total,
    passes: total >= FSW_PASS_MARK && perAbility > 0,
    languageFloorFailed: perAbility === 0,
    lines: [
      { label: 'Language', points: language, max: 28 },
      { label: 'Education', points: education, max: 25 },
      { label: 'Work experience', points: experience, max: 15 },
      { label: 'Age', points: age, max: 12 },
      { label: 'Arranged employment', points: arranged, max: 10 },
      { label: 'Adaptability', points: adaptability, max: 10 },
    ],
  };
}
