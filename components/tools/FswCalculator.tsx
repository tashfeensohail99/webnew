'use client';

import { useMemo, useState } from 'react';
import {
  scoreFsw,
  EDUCATION_LABELS,
  FSW_PASS_MARK,
  FSW_MAX,
  FSW_GRID_VERIFIED_ON,
  IRPR_URL,
  IRCC_FSW_URL,
  type FswInput,
  type EducationLevel,
} from '@/lib/fsw-grid';

/**
 * The FSW 67-point eligibility calculator.
 *
 * Two things this UI must get right, both of which come from the reconciliation
 * notes rather than from the point values:
 *
 *  - The Canadian work and study questions ask about being AUTHORISED, not about
 *    holding a permit. IRPR s.83(1)(c) says "under a work permit or authorized
 *    under section 186", and s.83(2) has the same for study under s.188. Asking
 *    "did you have a work permit?" awards zero to people who qualify.
 *  - The relative question lists the seven relationships in s.83(5) and says
 *    explicitly that cousins do not count, because a widely-copied summary of
 *    that subsection gets it wrong.
 */

const initial: FswInput = {
  firstLanguageClb: 7,
  secondLanguageClb5: false,
  education: 'threeYear',
  experienceYears: 1,
  age: 30,
  arrangedEmployment: false,
  ownCanadianWork: false,
  ownCanadianStudy: false,
  spouseAccompanying: false,
  spouseLanguageClb4: false,
  spouseCanadianWork: false,
  spouseCanadianStudy: false,
  relativeInCanada: false,
};

export function FswCalculator({ digits }: { digits: string }) {
  const [input, setInput] = useState<FswInput>(initial);
  const set = <K extends keyof FswInput>(k: K, v: FswInput[K]) => setInput((s) => ({ ...s, [k]: v }));
  const result = useMemo(() => scoreFsw(input), [input]);

  const waMessage = [
    'Hi, I used the FSW 67-point calculator on your site.',
    '',
    `Score: ${result.total} of ${FSW_MAX} (pass mark ${FSW_PASS_MARK})`,
    `Age ${input.age} · lowest CLB ${input.firstLanguageClb} · ${input.experienceYears} yr skilled experience`,
    '',
    'I’d like to know whether this route is realistic for me.',
    '',
    '[Ref: FSW-TOOL]',
  ].join('\n');
  const waHref = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}` : undefined;

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-l-[3px] border-l-gold-500 bg-paper-alt p-5 sm:p-6">
        <p className="font-serif text-lg">This is not your CRS score</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
          This is the pass/fail eligibility test for the Federal Skilled Worker class,
          set in the Immigration and Refugee Protection Regulations. Clearing it is what
          lets you into the Express Entry pool. Your CRS score — the one out of 1,200 —
          is a separate ranking applied afterwards. People confuse the two constantly and
          it is an expensive mistake. Grid checked {FSW_GRID_VERIFIED_ON} against{' '}
          <a href={IRPR_URL} rel="noopener nofollow" target="_blank" className="font-semibold text-accent-500 link-underline">
            the Regulations
          </a>
          .
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
        <div className="space-y-6">
          <Group title="Language">
            <Row
              label="Your LOWEST ability in your first official language"
              help="Speaking, listening, reading and writing are scored separately, and falling below the threshold in any one of them scores nil for the whole factor. Enter your weakest."
            >
              <Select
                value={String(input.firstLanguageClb)}
                onChange={(v) => set('firstLanguageClb', Number(v))}
                options={[
                  ['4', 'CLB 4'],
                  ['5', 'CLB 5'],
                  ['6', 'CLB 6'],
                  ['7', 'CLB 7'],
                  ['8', 'CLB 8'],
                  ['9', 'CLB 9'],
                  ['10', 'CLB 10 or higher'],
                ]}
              />
            </Row>
            <Toggle
              label="CLB 5 or higher in all four abilities of the other official language"
              value={input.secondLanguageClb5}
              onChange={(v) => set('secondLanguageClb5', v)}
            />
          </Group>

          <Group title="Education, experience and age">
            <Row label="Highest credential">
              <Select
                value={input.education}
                onChange={(v) => set('education', v as EducationLevel)}
                options={EDUCATION_LABELS.map((e) => [e.value, e.label] as [string, string])}
              />
            </Row>
            <Row
              label="Years of skilled work experience"
              help="Full-time or the part-time equivalent, in TEER 0, 1, 2 or 3 work, within the ten years before you apply."
            >
              <Select
                value={String(input.experienceYears)}
                onChange={(v) => set('experienceYears', Number(v))}
                options={[
                  ['0', 'Less than a year'],
                  ['1', '1 year'],
                  ['2', '2 to 3 years'],
                  ['4', '4 to 5 years'],
                  ['6', '6 years or more'],
                ]}
              />
            </Row>
            <Row label="Your age when you apply">
              <Select
                value={String(input.age)}
                onChange={(v) => set('age', Number(v))}
                options={Array.from({ length: 36 }, (_, i) => {
                  const a = i + 17;
                  return [String(a), a === 17 ? '17 or younger' : a >= 47 ? '47 or older' : `${a}`] as [string, string];
                })}
              />
            </Row>
          </Group>

          <Group title="Arranged employment">
            <Toggle
              label="I have a qualifying job offer from a Canadian employer"
              help="Still worth points on THIS grid. The March 2025 change removed the job-offer bonus from the CRS score only — it did not touch the eligibility grid."
              value={input.arrangedEmployment}
              onChange={(v) => set('arrangedEmployment', v)}
            />
          </Group>

          <Group
            title="Adaptability"
            note="These are added together and then capped, so the total here never exceeds 10 however many apply."
          >
            <Toggle
              label="I worked full-time in Canada for at least a year"
              help="Under a work permit OR while otherwise authorised to work without one. Do not answer no just because you did not hold a permit."
              value={input.ownCanadianWork}
              onChange={(v) => set('ownCanadianWork', v)}
            />
            <Toggle
              label="I studied full-time in Canada for at least two academic years"
              help="Under a study permit OR while otherwise authorised to study without one, at a Canadian secondary or post-secondary institution."
              value={input.ownCanadianStudy}
              onChange={(v) => set('ownCanadianStudy', v)}
            />
            <Toggle
              label="I have a qualifying relative living in Canada"
              help="Parent, grandparent, child, grandchild, sibling, aunt or uncle, niece or nephew — of you or your accompanying spouse — who is 18 or older, a citizen or permanent resident, and living in Canada. Cousins do NOT qualify."
              value={input.relativeInCanada}
              onChange={(v) => set('relativeInCanada', v)}
            />
            <Toggle
              label="A spouse or common-law partner is coming with me"
              value={input.spouseAccompanying}
              onChange={(v) => set('spouseAccompanying', v)}
            />
            {input.spouseAccompanying ? (
              <div className="space-y-4 rounded-xl bg-paper-alt p-4">
                <Toggle
                  label="Their language is CLB 4 or higher in all four abilities"
                  value={input.spouseLanguageClb4}
                  onChange={(v) => set('spouseLanguageClb4', v)}
                />
                <Toggle
                  label="They worked full-time in Canada for at least a year"
                  value={input.spouseCanadianWork}
                  onChange={(v) => set('spouseCanadianWork', v)}
                />
                <Toggle
                  label="They studied full-time in Canada for at least two academic years"
                  value={input.spouseCanadianStudy}
                  onChange={(v) => set('spouseCanadianStudy', v)}
                />
              </div>
            ) : null}
          </Group>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div
            className={`rounded-2xl border p-6 shadow-soft ${
              result.passes ? 'border-rule bg-navy text-white' : 'border-rule bg-ink-900 text-white'
            }`}
          >
            <p className="eyebrow eyebrow--light">Selection points</p>
            <p className="mt-2 font-serif text-6xl leading-none text-gold-300">{result.total}</p>
            <p className="mt-2 text-sm text-ink-300">
              out of {FSW_MAX} · pass mark {FSW_PASS_MARK}
            </p>
            <p
              className={`mt-4 rounded-xl px-3 py-2 text-sm font-semibold ${
                result.passes ? 'bg-emerald-500/15 text-emerald-200' : 'bg-rose-500/15 text-rose-200'
              }`}
            >
              {result.passes ? 'Clears the pass mark' : 'Below the pass mark'}
            </p>

            <dl className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
              {result.lines.map((l) => (
                <div key={l.label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-ink-300">{l.label}</dt>
                  <dd className="shrink-0 tabular-nums">
                    <span className="font-semibold">{l.points}</span>
                    <span className="text-ink-400"> / {l.max}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {result.languageFloorFailed ? (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-semibold text-rose-900">Language is the blocker</p>
              <p className="mt-1.5 text-sm leading-relaxed text-rose-800 text-pretty">
                Below the threshold in even one ability, the language factor scores nothing
                and the class is not open to you — regardless of everything else. That also
                makes it the most improvable thing on this page.
              </p>
            </div>
          ) : null}

          <div className="mt-4 space-y-2">
            {waHref ? (
              <a href={waHref} rel="noopener" className="btn w-full justify-center text-white [background-image:linear-gradient(180deg,#26b862,#1fa855)]">
                Send this to us on WhatsApp
              </a>
            ) : null}
            <a href={IRCC_FSW_URL} rel="noopener nofollow" target="_blank" className="btn btn-ghost w-full justify-center">
              Check on IRCC’s site ↗
            </a>
          </div>
        </aside>
      </div>

      <p className="mt-10 border-t border-rule pt-5 text-xs leading-relaxed text-ink-400 text-pretty">
        An arithmetic estimate from the answers you gave, not an assessment of your
        eligibility and not advice. Clearing the pass mark means the class is open to you —
        it is not an invitation, and nobody can promise you an outcome. Grid checked{' '}
        {FSW_GRID_VERIFIED_ON}.
      </p>
    </div>
  );
}

function Group({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="card p-6 sm:p-7">
      <h3 className="font-serif text-xl">{title}</h3>
      {note ? <p className="mt-1.5 text-sm text-ink-400 text-pretty">{note}</p> : null}
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

function Row({ label, help, children }: { label: string; help?: string; children: React.ReactNode }) {
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
      className="w-full rounded-xl border border-rule bg-paper px-4 py-2.5 text-sm text-ink-900 transition-colors focus:border-gold-500"
    >
      {options.map(([v, l]) => (
        <option key={v} value={v}>
          {l}
        </option>
      ))}
    </select>
  );
}

function Toggle({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onChange(!value)}
        aria-pressed={value}
        className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
          value
            ? 'border-gold-500 bg-gold-50 text-ink-900 shadow-soft'
            : 'border-rule bg-paper text-ink-600 hover:border-ink-300 hover:bg-paper-alt'
        }`}
      >
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold ${
            value ? 'border-gold-600 bg-gold-500 text-white' : 'border-ink-300'
          }`}
        >
          {value ? '✓' : ''}
        </span>
        <span className={value ? 'font-medium' : ''}>{label}</span>
      </button>
      {help ? <p className="mt-1.5 pl-7 text-xs text-ink-400 text-pretty">{help}</p> : null}
    </div>
  );
}
