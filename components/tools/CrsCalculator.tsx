'use client';

import { useMemo, useState } from 'react';
import {
  scoreCrs,
  clbFromTest,
  CRS_GRID_VERIFIED_ON,
  OFFICIAL_CALCULATOR_URL,
  OFFICIAL_ROUNDS_URL,
  type CrsInput,
  type EducationLevel,
  type LanguageTest,
  type AbilityScores,
} from '@/lib/crs-grid';

/**
 * The CRS calculator.
 *
 * Every point value lives in lib/crs-grid.ts, deliberately separated from this file
 * so the grid can be audited on its own without reading any UI code. This component
 * only collects input and renders what the grid returns.
 *
 * Two honesty rules are load-bearing here and should not be "tidied away":
 *
 *  1. We do not print a draw cut-off. Cut-offs move every couple of weeks and differ
 *     by category — a number baked into a static page is wrong within a fortnight.
 *     We link to IRCC's live rounds page instead.
 *  2. We say plainly that this is unofficial and link to IRCC's own calculator. A firm
 *     whose whole pitch is "verify us before you pay us" cannot ship a black box.
 */

const EDUCATION: { value: EducationLevel; label: string }[] = [
  { value: 'none', label: 'Less than secondary school' },
  { value: 'secondary', label: 'Secondary school (matric / FSc / A-levels)' },
  { value: 'oneYear', label: 'One-year post-secondary programme' },
  { value: 'twoYear', label: 'Two-year post-secondary programme' },
  { value: 'bachelor', label: "Bachelor's degree / three-or-more-year programme" },
  { value: 'twoOrMore', label: 'Two or more credentials (one being three years or longer)' },
  { value: 'masters', label: "Master's or professional degree" },
  { value: 'doctoral', label: 'Doctorate (PhD)' },
];

const TESTS: { value: LanguageTest; label: string }[] = [
  { value: 'ielts', label: 'IELTS General Training' },
  { value: 'celpip', label: 'CELPIP-General' },
  { value: 'pte', label: 'PTE Core' },
  { value: 'clb', label: 'I already know my CLB levels' },
];

const ABILITIES: { key: keyof AbilityScores; label: string }[] = [
  { key: 'speaking', label: 'Speaking' },
  { key: 'listening', label: 'Listening' },
  { key: 'reading', label: 'Reading' },
  { key: 'writing', label: 'Writing' },
];

const EMPTY: AbilityScores = { speaking: '', listening: '', reading: '', writing: '' };

const initial: CrsInput = {
  maritalStatus: 'single',
  spouseComingAlong: false,
  age: 30,
  education: 'bachelor',
  firstLanguage: 'english',
  firstTest: 'ielts',
  first: EMPTY,
  hasSecondLanguage: false,
  second: EMPTY,
  canadianWorkYears: 0,
  foreignWorkYears: 0,
  certificateOfQualification: false,
  spouseEducation: 'secondary',
  spouseClb: EMPTY,
  spouseCanadianWorkYears: 0,
  provincialNomination: false,
  siblingInCanada: false,
  canadianStudy: 'none',
};

export function CrsCalculator({ digits }: { digits: string }) {
  const [input, setInput] = useState<CrsInput>(initial);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const set = <K extends keyof CrsInput>(key: K, value: CrsInput[K]) =>
    setInput((s) => ({ ...s, [key]: value }));

  const usesSpouseColumn = input.maritalStatus === 'partnered' && input.spouseComingAlong;

  const result = useMemo(() => scoreCrs(input), [input]);

  const waMessage = [
    'Hi, I used the CRS calculator on your site.',
    '',
    `Indicative CRS score: ${result.total}`,
    `Age ${input.age} · ${EDUCATION.find((e) => e.value === input.education)?.label ?? ''}`,
    `Canadian work: ${input.canadianWorkYears} yr · Foreign work: ${input.foreignWorkYears} yr`,
    usesSpouseColumn ? 'Applying with an accompanying spouse' : 'Applying as a single applicant',
    '',
    'I’d like to know what my realistic options are.',
    '',
    '[Ref: CRS-TOOL]',
  ].join('\n');

  const waHref = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}` : undefined;

  return (
    <div>
      {/* The unofficial notice sits ABOVE the calculator, not buried under the result. */}
      <div className="mb-8 rounded-2xl border border-l-[3px] border-l-gold-500 bg-paper-alt p-5 sm:p-6">
        <p className="font-serif text-lg">This is an unofficial estimate</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
          We rebuild this from IRCC’s published grid and check it by hand — last checked{' '}
          <strong className="text-ink-900">{CRS_GRID_VERIFIED_ON}</strong>. It is not run by
          IRCC and it is not advice. Before you rely on a number, run it through{' '}
          <a
            href={OFFICIAL_CALCULATOR_URL}
            rel="noopener nofollow"
            target="_blank"
            className="font-semibold text-accent-500 link-underline"
          >
            IRCC’s own calculator
          </a>
          . If the two disagree, IRCC is right and we want to know about it.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="space-y-6">
          <Group title="About you">
            <Row label="Marital status">
              <Select
                value={input.maritalStatus}
                onChange={(v) => set('maritalStatus', v as CrsInput['maritalStatus'])}
                options={[
                  ['single', 'Single'],
                  ['partnered', 'Married or common-law'],
                ]}
              />
            </Row>
            {input.maritalStatus === 'partnered' ? (
              <Row
                label="Is your spouse coming with you?"
                help="If your spouse is already a Canadian citizen or permanent resident, or is not coming, you are scored as a single applicant."
              >
                <Select
                  value={input.spouseComingAlong ? 'yes' : 'no'}
                  onChange={(v) => set('spouseComingAlong', v === 'yes')}
                  options={[
                    ['yes', 'Yes, coming with me'],
                    ['no', 'No / they are already a Canadian citizen or PR'],
                  ]}
                />
              </Row>
            ) : null}
            <Row label="Your age">
              <Select
                value={String(input.age)}
                onChange={(v) => set('age', Number(v))}
                options={Array.from({ length: 39 }, (_, i) => {
                  const a = i + 17;
                  return [String(a), a === 17 ? '17 or younger' : a >= 55 ? '55 or older' : `${a}`] as [
                    string,
                    string,
                  ];
                })}
              />
            </Row>
            <Row label="Highest level of education">
              <Select
                value={input.education}
                onChange={(v) => set('education', v as EducationLevel)}
                options={EDUCATION.map((e) => [e.value, e.label] as [string, string])}
              />
            </Row>
          </Group>

          <Group
            title="Language"
            note="Language is the single biggest lever in the whole grid. It is usually the cheapest points to buy back."
          >
            <Row label="Your first official language">
              <Select
                value={input.firstLanguage}
                onChange={(v) => set('firstLanguage', v as CrsInput['firstLanguage'])}
                options={[
                  ['english', 'English'],
                  ['french', 'French'],
                ]}
              />
            </Row>
            <Row label="Which test did you take?">
              <Select
                value={input.firstTest}
                onChange={(v) => set('firstTest', v as LanguageTest)}
                options={TESTS.filter((t) =>
                  input.firstLanguage === 'french' ? t.value === 'clb' : true,
                ).map((t) => [t.value, t.label] as [string, string])}
              />
            </Row>
            <AbilityGrid
              test={input.firstTest}
              value={input.first}
              onChange={(v) => set('first', v)}
            />

            <Row label="Do you have a second official language test?">
              <Select
                value={input.hasSecondLanguage ? 'yes' : 'no'}
                onChange={(v) => set('hasSecondLanguage', v === 'yes')}
                options={[
                  ['no', 'No'],
                  ['yes', 'Yes'],
                ]}
              />
            </Row>
            {input.hasSecondLanguage ? (
              <AbilityGrid
                test="clb"
                value={input.second}
                onChange={(v) => set('second', v)}
                label="Second language — CLB / NCLC level per ability"
              />
            ) : null}
          </Group>

          <Group title="Work experience">
            <Row
              label="Skilled work experience IN Canada"
              help="Paid, full-time (or equivalent part-time) skilled work, done while authorised to work in Canada."
            >
              <Select
                value={String(input.canadianWorkYears)}
                onChange={(v) => set('canadianWorkYears', Number(v))}
                options={[
                  ['0', 'None or less than a year'],
                  ['1', '1 year'],
                  ['2', '2 years'],
                  ['3', '3 years'],
                  ['4', '4 years'],
                  ['5', '5 years or more'],
                ]}
              />
            </Row>
            <Row label="Skilled work experience OUTSIDE Canada">
              <Select
                value={String(input.foreignWorkYears)}
                onChange={(v) => set('foreignWorkYears', Number(v))}
                options={[
                  ['0', 'None or less than a year'],
                  ['1', '1 year'],
                  ['2', '2 years'],
                  ['3', '3 years or more'],
                ]}
              />
            </Row>
            <Row
              label="Do you hold a Canadian certificate of qualification in a trade?"
              help="This is issued by a Canadian province or territory after assessment — not a foreign trade certificate."
            >
              <Select
                value={input.certificateOfQualification ? 'yes' : 'no'}
                onChange={(v) => set('certificateOfQualification', v === 'yes')}
                options={[
                  ['no', 'No'],
                  ['yes', 'Yes'],
                ]}
              />
            </Row>
          </Group>

          {usesSpouseColumn ? (
            <Group title="Your spouse or partner">
              <Row label="Their highest level of education">
                <Select
                  value={input.spouseEducation}
                  onChange={(v) => set('spouseEducation', v as EducationLevel)}
                  options={EDUCATION.map((e) => [e.value, e.label] as [string, string])}
                />
              </Row>
              <AbilityGrid
                test="clb"
                value={input.spouseClb}
                onChange={(v) => set('spouseClb', v)}
                label="Their language ability — CLB level per ability"
              />
              <Row label="Their skilled work experience in Canada">
                <Select
                  value={String(input.spouseCanadianWorkYears)}
                  onChange={(v) => set('spouseCanadianWorkYears', Number(v))}
                  options={[
                    ['0', 'None or less than a year'],
                    ['1', '1 year'],
                    ['2', '2 years'],
                    ['3', '3 years'],
                    ['4', '4 years'],
                    ['5', '5 years or more'],
                  ]}
                />
              </Row>
            </Group>
          ) : null}

          <Group title="Extra points">
            <Row
              label="Do you have a provincial or territorial nomination?"
              help="Worth more than everything else in the grid combined. Almost nobody has one at this stage."
            >
              <Select
                value={input.provincialNomination ? 'yes' : 'no'}
                onChange={(v) => set('provincialNomination', v === 'yes')}
                options={[
                  ['no', 'No'],
                  ['yes', 'Yes'],
                ]}
              />
            </Row>
            <Row
              label="Do you have a sibling in Canada who is a citizen or permanent resident?"
              help="A brother or sister — including half- or step-sibling — of you or your spouse, living in Canada."
            >
              <Select
                value={input.siblingInCanada ? 'yes' : 'no'}
                onChange={(v) => set('siblingInCanada', v === 'yes')}
                options={[
                  ['no', 'No'],
                  ['yes', 'Yes'],
                ]}
              />
            </Row>
            <Row label="Did you study in Canada?">
              <Select
                value={input.canadianStudy}
                onChange={(v) => set('canadianStudy', v as CrsInput['canadianStudy'])}
                options={[
                  ['none', 'No'],
                  ['short', 'One- or two-year credential in Canada'],
                  ['long', 'Three-year-or-longer credential, or a Canadian master’s / PhD'],
                ]}
              />
            </Row>
          </Group>
        </div>

        {/* Result rail */}
        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border border-rule bg-navy p-6 text-white shadow-soft">
            <p className="eyebrow eyebrow--light">Indicative CRS score</p>
            <p className="mt-2 font-serif text-6xl leading-none text-gold-300">{result.total}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Out of a realistic maximum of {result.realisticMax}
              {input.provincialNomination ? '' : ' without a provincial nomination'}.
            </p>

            <button
              type="button"
              onClick={() => setShowBreakdown((s) => !s)}
              className="mt-5 w-full rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {showBreakdown ? 'Hide' : 'Show'} the breakdown
            </button>

            {showBreakdown ? (
              <dl className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
                {result.lines.map((l) => (
                  <div key={l.label} className="flex items-baseline justify-between gap-3">
                    <dt className="text-ink-300">{l.label}</dt>
                    <dd className="shrink-0 font-semibold tabular-nums">{l.points}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-3 border-t border-white/10 pt-2 font-semibold">
                  <dt>Total</dt>
                  <dd className="tabular-nums text-gold-300">{result.total}</dd>
                </div>
              </dl>
            ) : null}
          </div>

          <div className="mt-4 rounded-2xl border border-rule bg-paper p-5">
            <p className="text-sm font-semibold text-ink-900">Is that enough?</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
              We deliberately don’t print a cut-off here. It moves every couple of weeks and
              differs by category, so any number we hard-coded would be wrong by the time you
              read it.{' '}
              <a
                href={OFFICIAL_ROUNDS_URL}
                rel="noopener nofollow"
                target="_blank"
                className="font-semibold text-accent-500 link-underline"
              >
                IRCC publishes each round here
              </a>
              .
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {waHref ? (
              <a
                href={waHref}
                rel="noopener"
                className="btn w-full justify-center text-white [background-image:linear-gradient(180deg,#26b862,#1fa855)]"
              >
                Send my score to us on WhatsApp
              </a>
            ) : null}
            <a href="/tools/work-permit-eligibility" className="btn btn-ghost w-full justify-center">
              Check the work-permit route instead
            </a>
          </div>
        </aside>
      </div>

      <p className="mt-10 border-t border-rule pt-5 text-xs leading-relaxed text-ink-400 text-pretty">
        Express Entry is not the route we mainly file, and we will say so if it isn’t yours. A
        score here is an arithmetic estimate from the answers you gave — it is not an
        assessment of your eligibility, not advice, and not a prediction of any outcome. Grid
        last checked by hand on {CRS_GRID_VERIFIED_ON}.
      </p>
    </div>
  );
}

/* ---------- small presentational pieces ---------- */

function Group({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card p-6 sm:p-7">
      <h3 className="font-serif text-xl">{title}</h3>
      {note ? <p className="mt-1.5 text-sm text-ink-400 text-pretty">{note}</p> : null}
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

function Row({
  label,
  help,
  children,
}: {
  label: string;
  help?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-900">{label}</label>
      {help ? <p className="mt-1 text-xs text-ink-400 text-pretty">{help}</p> : null}
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: [string, string][];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-rule bg-paper px-4 py-2.5 text-sm text-ink-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
    >
      {options.map(([v, l]) => (
        <option key={v} value={v}>
          {l}
        </option>
      ))}
    </select>
  );
}

/**
 * Four ability inputs. When the applicant picked a real test we accept the raw test
 * score and convert; when they picked "I know my CLB" we take CLB directly. Showing
 * the derived CLB back to them is deliberate — it is the number the grid actually
 * uses, and seeing it is how someone notices a typo before it costs them 40 points.
 */
function AbilityGrid({
  test,
  value,
  onChange,
  label,
}: {
  test: LanguageTest;
  value: AbilityScores;
  onChange: (v: AbilityScores) => void;
  label?: string;
}) {
  const isRaw = test !== 'clb';
  return (
    <div>
      <p className="text-sm font-medium text-ink-900">
        {label ?? (isRaw ? 'Your test scores' : 'Your CLB level per ability')}
      </p>
      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        {ABILITIES.map((a) => {
          const raw = value[a.key];
          const clb = isRaw ? clbFromTest(test, a.key, raw) : Number(raw) || 0;
          return (
            <div key={a.key}>
              <label className="text-xs text-ink-400">{a.label}</label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="text"
                  inputMode="decimal"
                  value={raw}
                  placeholder={isRaw ? 'score' : 'CLB'}
                  onChange={(e) => onChange({ ...value, [a.key]: e.target.value })}
                  className="w-full rounded-xl border border-rule bg-paper px-3 py-2 text-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                />
                {isRaw && raw ? (
                  <span className="shrink-0 rounded-lg bg-paper-alt px-2 py-1 text-xs font-semibold text-ink-600">
                    {clb ? `CLB ${clb}` : '—'}
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
