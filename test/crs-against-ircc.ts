/**
 * Compares the CRS engine with IRCC's own published tables, cell by cell.
 *
 * Run with:  npm run test:crs:ircc     (needs network; read-only)
 *
 * The other CRS tests pin what the code should do. This one asks whether that is
 * still what IRCC says. Run it after any IRCC announcement: a failure means the
 * page moved and the grid in lib/crs-grid.ts needs re-checking. It reads the
 * tables by position, so a redesign of IRCC's page also fails here, loudly,
 * rather than passing by accident.
 */

import { scoreCrs, type CrsInput, type AbilityScores, type EducationLevel } from '../lib/crs-grid.ts';
import { HIGH_WAGE_LIST_URL, HIGH_WAGE_OCCUPATIONS } from '../lib/crs-high-wage.ts';

const CRITERIA_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36';

const clean = (s: string) =>
  s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

async function tables(url: string): Promise<{ caption: string; rows: string[][] }[]> {
  const res = await fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  const html = await res.text();
  return [...html.matchAll(/<table[\s\S]*?<\/table>/gi)].map((m) => ({
    caption: clean(m[0].match(/<caption[\s\S]*?<\/caption>/i)?.[0] ?? ''),
    rows: [...m[0].matchAll(/<tr[\s\S]*?<\/tr>/gi)].map((tr) =>
      [...tr[0].matchAll(/<t[dh][\s\S]*?<\/t[dh]>/gi)].map((c) => clean(c[0])),
    ),
  }));
}

let pass = 0;
let fail = 0;
const eq = (name: string, got: unknown, want: unknown) => {
  if (got === want) pass++;
  else {
    fail++;
    console.log(`FAIL ${name}: engine ${got}, IRCC ${want}`);
  }
};

const blank: AbilityScores = { speaking: '', listening: '', reading: '', writing: '' };
const clb = (n: number): AbilityScores => ({
  speaking: String(n),
  listening: String(n),
  reading: String(n),
  writing: String(n),
});
const base: CrsInput = {
  maritalStatus: 'single',
  spouseComingAlong: false,
  age: 30,
  education: 'none',
  firstLanguage: 'english',
  firstTest: 'clb',
  first: blank,
  hasSecondLanguage: false,
  second: blank,
  canadianWorkYears: 0,
  canadianHighWageLevel: 0,
  jobOfferLevel: 0,
  foreignWorkYears: 0,
  certificateOfQualification: false,
  spouseEducation: 'none',
  spouseClb: blank,
  spouseCanadianWorkYears: 0,
  provincialNomination: false,
  siblingInCanada: false,
  canadianStudy: 'none',
};
const partnered: CrsInput = { ...base, maritalStatus: 'partnered', spouseComingAlong: true };
const line = (input: CrsInput, label: string) =>
  scoreCrs(input).lines.find((l) => l.label === label)?.points ?? 0;
const num = (s: string) => Number(s);

const EDU_ROWS: EducationLevel[] = ['none', 'secondary', 'oneYear', 'twoYear', 'bachelor', 'twoOrMore', 'masters', 'doctoral'];

const T = (await tables(CRITERIA_URL)).map((t) => t.rows);
if (T.length !== 22) throw new Error(`IRCC's page now has ${T.length} tables, not 22: re-map this test`);

// Summary: section maximums.
eq('summary age', T[0][1].slice(1).join(), '100,110');
eq('summary education', T[0][2].slice(1).join(), '140,150');
eq('summary language', T[0][3].slice(1).join(), '150,160');
eq('summary labour market', T[0][4].slice(1).join(), '140,150');

// Age. Rows run 17 or less, 18, 19, 20-29, 30 ... 44, 45 or more.
const ages = [17, 18, 19, 25, ...Array.from({ length: 15 }, (_, i) => 30 + i), 45];
ages.forEach((age, i) => {
  const row = T[1][i + 1];
  eq(`age ${age} with spouse`, line({ ...partnered, age }, 'Age'), num(row[1]));
  eq(`age ${age} without spouse`, line({ ...base, age }, 'Age'), num(row[2]));
});

// Education.
EDU_ROWS.forEach((education, i) => {
  const row = T[2][i + 1];
  eq(`education ${education} with spouse`, line({ ...partnered, education }, 'Education'), num(row[1]));
  eq(`education ${education} without spouse`, line({ ...base, education }, 'Education'), num(row[2]));
});

// First language: points are per ability, four abilities.
[3, 4, 6, 7, 8, 9, 10].forEach((level, i) => {
  const row = T[3][i + 1];
  eq(`first language CLB ${level} with spouse`, line({ ...partnered, first: clb(level) }, 'First official language'), num(row[1]) * 4);
  eq(`first language CLB ${level} without spouse`, line({ ...base, first: clb(level) }, 'First official language'), num(row[2]) * 4);
});
eq('first language CLB 5 shares the CLB 4 band', line({ ...base, first: clb(5) }, 'First official language'), num(T[3][2][2]) * 4);

// Second language: per ability, with the with-spouse section capped at 22.
[4, 5, 7, 9].forEach((level, i) => {
  const row = T[4][i + 1];
  const withSecond = { hasSecondLanguage: true, second: clb(level) };
  eq(`second language CLB ${level} with spouse`, line({ ...partnered, ...withSecond }, 'Second official language'), Math.min(num(row[1]) * 4, 22));
  eq(`second language CLB ${level} without spouse`, line({ ...base, ...withSecond }, 'Second official language'), num(row[2]) * 4);
});

// Canadian work: length.
[0, 1, 2, 3, 4, 5].forEach((years, i) => {
  const row = T[5][i + 1];
  eq(`Canadian work ${years}y with spouse`, line({ ...partnered, canadianWorkYears: years }, 'Canadian work experience'), num(row[1]));
  eq(`Canadian work ${years}y without spouse`, line({ ...base, canadianWorkYears: years }, 'Canadian work experience'), num(row[2]));
});

// High-wage experience: rows run highest level first.
([3, 2, 1] as const).forEach((level, i) => {
  const row = T[6][i + 1];
  const input = { canadianWorkYears: 1, canadianHighWageLevel: level };
  eq(`high-wage work level ${level} with spouse`, line({ ...partnered, ...input }, 'High-wage occupation experience'), num(row[1]));
  eq(`high-wage work level ${level} without spouse`, line({ ...base, ...input }, 'High-wage occupation experience'), num(row[2]));
});

// Job offer.
([3, 2, 1, 0] as const).forEach((level, i) => {
  eq(`job offer level ${level}`, line({ ...base, jobOfferLevel: level }, 'High-wage job offer'), num(T[7][i + 1][1]));
});

// Spouse factors.
EDU_ROWS.forEach((spouseEducation, i) => {
  eq(`spouse education ${spouseEducation}`, line({ ...partnered, spouseEducation }, 'Spouse — education'), num(T[9][i + 1][1]));
});
[4, 5, 7, 9].forEach((level, i) => {
  eq(`spouse language CLB ${level}`, line({ ...partnered, spouseClb: clb(level) }, 'Spouse — language'), num(T[10][i + 1][1]) * 4);
});
[0, 1, 2, 3, 4, 5].forEach((years, i) => {
  eq(`spouse Canadian work ${years}y`, line({ ...partnered, spouseCanadianWorkYears: years }, 'Spouse — Canadian work experience'), num(T[11][i + 1][1]));
});

// Skill transferability. Each case isolates one sub-table.
const transfer = (input: Partial<CrsInput>) => line({ ...base, ...input }, 'Skill transferability');
const TIER_EDU: EducationLevel[] = ['secondary', 'bachelor', 'twoOrMore', 'masters', 'doctoral'];
TIER_EDU.forEach((education, i) => {
  const lang = T[15][i + 1];
  eq(`education + CLB 7 (${education})`, transfer({ education, first: clb(7) }), num(lang[1]));
  eq(`education + CLB 9 (${education})`, transfer({ education, first: clb(9) }), num(lang[2]));
  const work = T[16][i + 1];
  eq(`education + 1y Canada (${education})`, transfer({ education, canadianWorkYears: 1 }), num(work[1]));
  eq(`education + 2y Canada (${education})`, transfer({ education, canadianWorkYears: 2 }), num(work[2]));
});
[0, 1, 3].forEach((foreignWorkYears, i) => {
  const lang = T[17][i + 1];
  eq(`foreign ${foreignWorkYears}y + CLB 7`, transfer({ foreignWorkYears, first: clb(7) }), num(lang[1]));
  eq(`foreign ${foreignWorkYears}y + CLB 9`, transfer({ foreignWorkYears, first: clb(9) }), num(lang[2]));
  const work = T[18][i + 1];
  eq(`foreign ${foreignWorkYears}y + 1y Canada`, transfer({ foreignWorkYears, canadianWorkYears: 1 }), num(work[1]));
  eq(`foreign ${foreignWorkYears}y + 2y Canada`, transfer({ foreignWorkYears, canadianWorkYears: 2 }), num(work[2]));
});
eq('certificate + CLB 5', transfer({ certificateOfQualification: true, first: clb(5) }), num(T[19][1][1]));
eq('certificate + CLB 7', transfer({ certificateOfQualification: true, first: clb(7) }), num(T[19][1][2]));

// Additional points.
eq('sibling', line({ ...base, siblingInCanada: true }, 'Sibling in Canada'), num(T[21][1][1]));
const french = { firstLanguage: 'french' as const, first: clb(7) };
eq('French, English CLB 4 or lower', line({ ...base, ...french, hasSecondLanguage: true, second: clb(4) }, 'French-language ability'), num(T[21][2][1]));
eq('French, English CLB 5 or higher', line({ ...base, ...french, hasSecondLanguage: true, second: clb(5) }, 'French-language ability'), num(T[21][3][1]));
eq('study, one or two years', line({ ...base, canadianStudy: 'short' }, 'Study in Canada'), num(T[21][4][1]));
eq('study, three years or longer', line({ ...base, canadianStudy: 'long' }, 'Study in Canada'), num(T[21][5][1]));
eq('nomination', line({ ...base, provincialNomination: true }, 'Provincial nomination'), num(T[21][6][1]));

// The high-wage occupation list.
const listed = (await tables(HIGH_WAGE_LIST_URL)).map((t) => t.rows.slice(1));
if (listed.length !== 3) throw new Error(`IRCC's high-wage page has ${listed.length} tables, not 3`);
const live = new Map<string, { level: number; title: string }>();
listed.forEach((rows, i) => rows.forEach(([noc, title]) => live.set(noc, { level: 3 - i, title })));
eq('high-wage list length', HIGH_WAGE_OCCUPATIONS.length, live.size);
for (const o of HIGH_WAGE_OCCUPATIONS) {
  eq(`NOC ${o.noc} level`, o.level, live.get(o.noc)?.level);
  eq(`NOC ${o.noc} title`, o.title, live.get(o.noc)?.title);
}

console.log(`${pass} matched IRCC, ${fail} differ`);
if (fail) process.exit(1);
