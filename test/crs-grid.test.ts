/**
 * Invariant tests for the CRS grid.
 *
 * Run with:  npm run test:crs        (Node strips the types natively)
 *
 * These are not unit tests in the usual sense — they are a tripwire. The point
 * values in lib/crs-grid.ts have to be re-verified against IRCC whenever the
 * grid moves, and the most dangerous kind of edit is one that looks reasonable
 * and quietly changes what an applicant is told.
 *
 * The strongest assertions here are the four maxima. A maxed-out profile must
 * land EXACTLY on the totals IRCC publishes (500 / 460 / 500 / 695 / 1200).
 * Almost any single mistyped cell in any table breaks at least one of them, so
 * if these five pass, the tables are very unlikely to contain a transcription
 * error. The rest of the tests pin the specific traps documented in the grid.
 */

import { scoreCrs, clbFromTest, type CrsInput, type AbilityScores } from '../lib/crs-grid.ts';

let pass = 0;
let fail = 0;
const t = (name: string, got: unknown, want: unknown) => {
  if (got === want) pass++;
  else {
    fail++;
    console.log(`FAIL ${name}: got ${got} want ${want}`);
  }
};

const base: CrsInput = {
  maritalStatus: 'single',
  spouseComingAlong: false,
  age: 30,
  education: 'bachelor',
  firstLanguage: 'english',
  firstTest: 'clb',
  first: { speaking: '', listening: '', reading: '', writing: '' },
  hasSecondLanguage: false,
  second: { speaking: '', listening: '', reading: '', writing: '' },
  canadianWorkYears: 0,
  foreignWorkYears: 0,
  certificateOfQualification: false,
  spouseEducation: 'secondary',
  spouseClb: { speaking: '', listening: '', reading: '', writing: '' },
  spouseCanadianWorkYears: 0,
  provincialNomination: false,
  siblingInCanada: false,
  canadianStudy: 'none',
};

const clb = (n: number): AbilityScores => ({
  speaking: String(n),
  listening: String(n),
  reading: String(n),
  writing: String(n),
});

const CORE = [
  'Age',
  'Education',
  'First official language',
  'Second official language',
  'Canadian work experience',
];
const sum = (r: ReturnType<typeof scoreCrs>, keys: string[]) =>
  r.lines.filter((l) => keys.includes(l.label)).reduce((a, b) => a + b.points, 0);
const one = (r: ReturnType<typeof scoreCrs>, label: string) =>
  r.lines.find((l) => l.label === label)?.points ?? 0;

/* --- the five maxima: the highest-value assertions in this file --- */

const maxSingle: CrsInput = {
  ...base,
  age: 25,
  education: 'doctoral',
  first: clb(10),
  hasSecondLanguage: true,
  second: clb(10),
  canadianWorkYears: 5,
};
const rs = scoreCrs(maxSingle);
t('core max, single = 500', sum(rs, CORE), 500);

const maxSpouse: CrsInput = {
  ...maxSingle,
  maritalStatus: 'partnered',
  spouseComingAlong: true,
  spouseEducation: 'doctoral',
  spouseClb: clb(10),
  spouseCanadianWorkYears: 5,
};
const rp = scoreCrs(maxSpouse);
const spouseSection = rp.lines
  .filter((l) => l.label.startsWith('Spouse'))
  .reduce((a, b) => a + b.points, 0);
t('core max, with spouse = 460', sum(rp, CORE), 460);
t('spouse section = 40', spouseSection, 40);
t('core + spouse = 500', sum(rp, CORE) + spouseSection, 500);

const maxNoPnp: CrsInput = {
  ...base,
  age: 25,
  education: 'doctoral',
  firstLanguage: 'french',
  first: clb(10),
  hasSecondLanguage: true,
  second: clb(10),
  canadianWorkYears: 5,
  foreignWorkYears: 3,
  certificateOfQualification: true,
  siblingInCanada: true,
  canadianStudy: 'long',
};
t('max without a nomination = 695', scoreCrs(maxNoPnp).total, 695);
t('max with a nomination = 1200', scoreCrs({ ...maxNoPnp, provincialNomination: true }).total, 1200);

/* --- trap 1: CLB 4 and 5 are one band; only below CLB 4 is zero --- */
t('CLB 4 first language = 24, not 0', one(scoreCrs({ ...base, first: clb(4) }), 'First official language'), 24);
t('CLB 5 first language = 24', one(scoreCrs({ ...base, first: clb(5) }), 'First official language'), 24);
t('CLB 3 first language = 0', one(scoreCrs({ ...base, first: clb(3) }), 'First official language'), 0);

/* --- trap 2: the two age columns are not a constant offset --- */
t('age 41, single = 39', one(scoreCrs({ ...base, age: 41 }), 'Age'), 39);
t(
  'age 41, with spouse = 35 (not 29)',
  one(scoreCrs({ ...base, age: 41, maritalStatus: 'partnered', spouseComingAlong: true }), 'Age'),
  35,
);
t('age 20 = 110', one(scoreCrs({ ...base, age: 20 }), 'Age'), 110);
t('age 29 = 110', one(scoreCrs({ ...base, age: 29 }), 'Age'), 110);
t('age 44 = 6', one(scoreCrs({ ...base, age: 44 }), 'Age'), 6);
t('age 45 = 0', one(scoreCrs({ ...base, age: 45 }), 'Age'), 0);

/* --- trap 3: transferability sub-caps combine, then truncate to 100 --- */
t(
  'everything maxed: transferability capped at 100, not 150',
  one(
    scoreCrs({
      ...base,
      education: 'doctoral',
      first: clb(10),
      canadianWorkYears: 5,
      foreignWorkYears: 3,
      certificateOfQualification: true,
    }),
    'Skill transferability',
  ),
  100,
);
t(
  'PhD + CLB 9 + 2yr Canadian: education pair capped at 50',
  one(scoreCrs({ ...base, education: 'doctoral', first: clb(9), canadianWorkYears: 2 }), 'Skill transferability'),
  50,
);
t(
  "bachelor sits in the middle tier: CLB 7 + 1yr = 26",
  one(scoreCrs({ ...base, education: 'bachelor', first: clb(7), canadianWorkYears: 1 }), 'Skill transferability'),
  26,
);
t(
  'secondary education earns no transferability at all',
  one(scoreCrs({ ...base, education: 'secondary', first: clb(10), canadianWorkYears: 2 }), 'Skill transferability'),
  0,
);

/* --- trap 4: strict floor conversion, never rounding up --- */
t('IELTS listening 6.0 -> CLB 7', clbFromTest('ielts', 'listening', '6.0'), 7);
t('IELTS listening 6.5 -> CLB 7', clbFromTest('ielts', 'listening', '6.5'), 7);
t('IELTS listening 7.0 -> CLB 7', clbFromTest('ielts', 'listening', '7.0'), 7);
t('IELTS listening 7.5 -> CLB 8', clbFromTest('ielts', 'listening', '7.5'), 8);
t('IELTS reading 3.5 -> CLB 4', clbFromTest('ielts', 'reading', '3.5'), 4);
t('IELTS reading 3.0 -> below CLB 4', clbFromTest('ielts', 'reading', '3.0'), 0);
t('IELTS reading 8.0 -> CLB 10', clbFromTest('ielts', 'reading', '8.0'), 10);
t('IELTS writing 7.0 -> CLB 9', clbFromTest('ielts', 'writing', '7.0'), 9);
t('IELTS speaking 9.0 clamps to CLB 10', clbFromTest('ielts', 'speaking', '9.0'), 10);
t('CELPIP 9 -> CLB 9', clbFromTest('celpip', 'reading', '9'), 9);
t('CELPIP 12 clamps to CLB 10', clbFromTest('celpip', 'reading', '12'), 10);
t('PTE listening 60 -> CLB 7', clbFromTest('pte', 'listening', '60'), 7);
t('PTE listening 59 -> CLB 6', clbFromTest('pte', 'listening', '59'), 6);
t('blank score -> 0', clbFromTest('ielts', 'speaking', ''), 0);

/* --- trap 5: abilities are independent; the weakest one gates the bands --- */
t(
  'one weak ability blocks the education x language pairing',
  one(
    scoreCrs({
      ...base,
      education: 'doctoral',
      first: { speaking: '9', listening: '9', reading: '9', writing: '6' },
    }),
    'Skill transferability',
  ),
  0,
);

/* --- trap 6: the second-language cap differs by column --- */
t('second language = 24 without a spouse', one(rs, 'Second official language'), 24);
t('second language capped at 22 with a spouse', one(rp, 'Second official language'), 22);

/* --- French tiers --- */
const fr: CrsInput = { ...base, firstLanguage: 'french', first: clb(7) };
t('NCLC 7, no English test = 25', one(scoreCrs(fr), 'French-language ability'), 25);
t(
  'NCLC 7 + English CLB 5 = 50',
  one(scoreCrs({ ...fr, hasSecondLanguage: true, second: clb(5) }), 'French-language ability'),
  50,
);
t(
  'NCLC 7 + English CLB 4 = 25',
  one(scoreCrs({ ...fr, hasSecondLanguage: true, second: clb(4) }), 'French-language ability'),
  25,
);
t('NCLC 6 = 0', one(scoreCrs({ ...base, firstLanguage: 'french', first: clb(6) }), 'French-language ability'), 0);

/* --- certificate of qualification thresholds --- */
t(
  'certificate + CLB 7 = 50',
  one(scoreCrs({ ...base, education: 'none', certificateOfQualification: true, first: clb(7) }), 'Skill transferability'),
  50,
);
t(
  'certificate + CLB 5 = 25',
  one(scoreCrs({ ...base, education: 'none', certificateOfQualification: true, first: clb(5) }), 'Skill transferability'),
  25,
);
t(
  'certificate + CLB 4 = 0',
  one(scoreCrs({ ...base, education: 'none', certificateOfQualification: true, first: clb(4) }), 'Skill transferability'),
  0,
);

/* --- accompanying rules --- */
t(
  'a spouse who is not coming means the single column is used',
  one(scoreCrs({ ...base, maritalStatus: 'partnered', spouseComingAlong: false, age: 25 }), 'Age'),
  110,
);
t(
  'no spouse lines appear when the spouse is not accompanying',
  scoreCrs({ ...base, maritalStatus: 'partnered', spouseComingAlong: false }).lines.filter((l) =>
    l.label.startsWith('Spouse'),
  ).length,
  0,
);

/* --- trap 7: job-offer points no longer exist as an input at all --- */
t('no job-offer field on the input model', /job|arranged|lmia/i.test(Object.keys(base).join(',')), false);

/* --- degenerate input must not throw or produce NaN --- */
const empty = scoreCrs(base);
t('a profile with no language scores is still a finite number', Number.isFinite(empty.total), true);
t('no language entered scores age + education only', empty.total, 225);
t('no language entered means no language line', one(empty, 'First official language'), 0);

console.log(`\n${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
