/**
 * Named worked examples, used to blind-check the engine against hand calculation.
 *
 * Run with:  npm run test:profiles
 *
 * These are kept in the repo because they are the artefact a human actually needs
 * when re-verifying the grid: paste a profile into IRCC's official calculator,
 * compare the total, done. Deliberately chosen to exercise the parts of the grid
 * most likely to be got wrong rather than to flatter the engine.
 */

import { scoreCrs, type CrsInput } from '../lib/crs-grid.ts';

const blank = { speaking: '', listening: '', reading: '', writing: '' };

const base: CrsInput = {
  maritalStatus: 'single',
  spouseComingAlong: false,
  age: 30,
  education: 'bachelor',
  firstLanguage: 'english',
  firstTest: 'clb',
  first: blank,
  hasSecondLanguage: false,
  second: blank,
  canadianWorkYears: 0,
  foreignWorkYears: 0,
  certificateOfQualification: false,
  spouseEducation: 'secondary',
  spouseClb: blank,
  spouseCanadianWorkYears: 0,
  provincialNomination: false,
  siblingInCanada: false,
  canadianStudy: 'none',
};

const ielts = (s: string, l: string, r: string, w: string) => ({
  speaking: s,
  listening: l,
  reading: r,
  writing: w,
});
const clb = (n: number) => ({
  speaking: String(n),
  listening: String(n),
  reading: String(n),
  writing: String(n),
});

export const PROFILES: { id: string; description: string; input: CrsInput }[] = [
  {
    id: 'P1',
    description:
      'Single, 28, bachelor’s degree, IELTS General Training 7.0 speaking / 8.0 listening / 7.0 reading / 7.0 writing, 3 years foreign skilled work, no Canadian experience, no second language, no nomination, no sibling, no Canadian study.',
    input: { ...base, age: 28, education: 'bachelor', firstTest: 'ielts', first: ielts('7.0', '8.0', '7.0', '7.0'), foreignWorkYears: 3 },
  },
  {
    id: 'P2',
    description:
      'Single, 35, master’s degree, CLB 9 in all four abilities, 3 years foreign skilled work, 1 year Canadian skilled work, no second language, no nomination.',
    input: { ...base, age: 35, education: 'masters', first: clb(9), foreignWorkYears: 3, canadianWorkYears: 1 },
  },
  {
    id: 'P3',
    description:
      'Married with an accompanying spouse. Principal applicant 32, bachelor’s degree, CLB 8 all four. Spouse has a bachelor’s degree, CLB 7 all four, no Canadian work experience. Principal has 2 years foreign work, no Canadian work. No nomination.',
    input: {
      ...base,
      age: 32,
      maritalStatus: 'partnered',
      spouseComingAlong: true,
      education: 'bachelor',
      first: clb(8),
      foreignWorkYears: 2,
      spouseEducation: 'bachelor',
      spouseClb: clb(7),
      spouseCanadianWorkYears: 0,
    },
  },
  {
    id: 'P4',
    description:
      'Single, 41, two or more credentials with one being a three-year programme, CLB 7 all four, 3 years foreign work, no Canadian work. Tests the steep age drop at 41.',
    input: { ...base, age: 41, education: 'twoOrMore', first: clb(7), foreignWorkYears: 3 },
  },
  {
    id: 'P5',
    description:
      'Single, 26, bachelor’s degree, CLB 5 in all four abilities (a weak-English applicant), 1 year foreign work, no Canadian work. Tests that CLB 4/5 scores 6 per ability rather than zero.',
    input: { ...base, age: 26, education: 'bachelor', first: clb(5), foreignWorkYears: 1 },
  },
  {
    id: 'P6',
    description:
      'Single, 30, master’s degree, CLB 10 all four in English, plus a second official language (French) at NCLC 7 all four. 3 years foreign work, 2 years Canadian skilled work, sibling in Canada who is a permanent resident, and a two-year Canadian post-secondary credential. No nomination.',
    input: {
      ...base,
      age: 30,
      education: 'masters',
      first: clb(10),
      hasSecondLanguage: true,
      second: clb(7),
      foreignWorkYears: 3,
      canadianWorkYears: 2,
      siblingInCanada: true,
      canadianStudy: 'short',
    },
  },
  {
    id: 'P7',
    description:
      'Single, 33, two-year post-secondary diploma, CLB 6 all four, holds a Canadian provincial certificate of qualification in a skilled trade, 3 years foreign work, no Canadian work. Tests the trades table at the CLB 5-6 band.',
    input: { ...base, age: 33, education: 'twoYear', first: clb(6), certificateOfQualification: true, foreignWorkYears: 3 },
  },
  {
    id: 'P8',
    description:
      'Single, 29, bachelor’s degree, CLB 9 all four, 2 years Canadian skilled work, 2 years foreign work, and holds a provincial nomination.',
    input: { ...base, age: 29, education: 'bachelor', first: clb(9), canadianWorkYears: 2, foreignWorkYears: 2, provincialNomination: true },
  },
  {
    id: 'P9',
    description:
      'Married, but the spouse is a Canadian permanent resident and so the applicant is scored as single. 27, bachelor’s degree, CLB 8 all four, 1 year foreign work, no Canadian work.',
    input: {
      ...base,
      age: 27,
      maritalStatus: 'partnered',
      spouseComingAlong: false,
      education: 'bachelor',
      first: clb(8),
      foreignWorkYears: 1,
    },
  },
  {
    id: 'P10',
    description:
      'Single, 24, secondary school only, CLB 7 all four, 1 year foreign work. Tests that a secondary-only applicant earns no skill-transferability points at all.',
    input: { ...base, age: 24, education: 'secondary', first: clb(7), foreignWorkYears: 1 },
  },
];

if (process.argv[1]?.includes('crs-profiles')) {
  for (const p of PROFILES) {
    const r = scoreCrs(p.input);
    console.log(`\n${p.id}  TOTAL = ${r.total}`);
    for (const l of r.lines) console.log(`      ${String(l.points).padStart(4)}  ${l.label}`);
  }
}
