'use client';

import { useMemo, useState } from 'react';
import {
  toClb,
  readLevels,
  TEST_LABELS,
  INPUT_HINT,
  IS_FRENCH,
  ABILITY_LABELS,
  CLB_TABLES_VERIFIED_ON,
  type AnyTest,
  type Ability,
} from '@/lib/clb';

/**
 * Language test → CLB / NCLC converter.
 *
 * Small tool, but it carries the one insight most applicants get wrong: almost
 * every programme is assessed on your LOWEST ability, not your average and not
 * your overall band. So the result leads with the weakest of the four.
 *
 * Conversion tables live in lib/clb.ts, which delegates the English tests to
 * lib/crs-grid.ts rather than keeping a second copy that could drift.
 */

const TESTS: AnyTest[] = ['ielts', 'celpip', 'pte', 'tef', 'tcf'];
const EMPTY: Record<Ability, string> = { speaking: '', listening: '', reading: '', writing: '' };

export function ClbConverter() {
  const [test, setTest] = useState<AnyTest>('ielts');
  const [scores, setScores] = useState<Record<Ability, string>>(EMPTY);

  const levels = useMemo(
    () =>
      ABILITY_LABELS.reduce(
        (acc, a) => ({ ...acc, [a.key]: toClb(test, a.key, scores[a.key]) }),
        {} as Record<Ability, number>,
      ),
    [test, scores],
  );

  const anyEntered = ABILITY_LABELS.some((a) => scores[a.key].trim() !== '');
  const allEntered = ABILITY_LABELS.every((a) => scores[a.key].trim() !== '');
  const reading = allEntered ? readLevels(levels) : null;
  const french = IS_FRENCH[test];
  const scale = french ? 'NCLC' : 'CLB';

  return (
    <div>
      <div className="card p-6 sm:p-7">
        <p className="text-sm font-medium text-ink-900">Which test did you take?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TESTS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTest(t);
                setScores(EMPTY);
              }}
              aria-pressed={test === t}
              className={`rounded-xl border px-4 py-2.5 text-sm transition-all ${
                test === t
                  ? 'border-gold-500 bg-gold-50 font-semibold text-ink-900 shadow-soft'
                  : 'border-rule bg-paper text-ink-600 hover:border-ink-300 hover:bg-paper-alt'
              }`}
            >
              {TEST_LABELS[t]}
            </button>
          ))}
        </div>

        {/* The input hint is not decoration. For TEF it is the difference between
            a right and a wrong answer. */}
        <div className="mt-4 rounded-xl border border-l-[3px] border-l-gold-500 bg-paper-alt p-4">
          <p className="text-sm leading-relaxed text-ink-700 text-pretty">{INPUT_HINT[test]}</p>
        </div>
      </div>

      <div className="mt-6 card p-6 sm:p-7">
        <p className="text-sm font-medium text-ink-900">Enter your four scores</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {ABILITY_LABELS.map((a) => {
            const lvl = levels[a.key];
            const entered = scores[a.key].trim() !== '';
            return (
              <div key={a.key}>
                <label className="text-sm text-ink-600">
                  {a.en}
                  {french ? <span className="ml-1.5 text-xs text-ink-400">{a.fr}</span> : null}
                </label>
                <div className="mt-1.5 flex items-center gap-2">
                  <input
                    type="text"
                    inputMode="decimal"
                    value={scores[a.key]}
                    onChange={(e) => setScores((s) => ({ ...s, [a.key]: e.target.value }))}
                    className="w-full rounded-xl border border-rule bg-paper px-3 py-2.5 text-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  />
                  {entered ? (
                    <span
                      className={`shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                        lvl === 0 ? 'bg-rose-50 text-rose-700' : 'bg-paper-alt text-ink-700'
                      }`}
                    >
                      {lvl === 0 ? `below ${scale} 4` : `${scale} ${lvl}${lvl === 10 ? '+' : ''}`}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        {reading ? (
          <div className="rounded-2xl border border-l-[3px] border-l-gold-500 bg-paper-alt p-7 sm:p-8">
            <p className="eyebrow">Your result</p>
            <h3 className="mt-3 font-serif text-2xl text-balance sm:text-3xl">
              {reading.headline.replace('level', scale)}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-600 text-pretty">{reading.detail}</p>

            <dl className="mt-6 grid gap-2 sm:grid-cols-2">
              {ABILITY_LABELS.map((a) => (
                <div
                  key={a.key}
                  className="flex items-baseline justify-between gap-3 rounded-xl bg-paper px-4 py-2.5"
                >
                  <dt className="text-sm text-ink-600">{a.en}</dt>
                  <dd className="text-sm font-semibold tabular-nums text-ink-900">
                    {levels[a.key] === 0 ? `below ${scale} 4` : `${scale} ${levels[a.key]}${levels[a.key] === 10 ? '+' : ''}`}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 border-t border-rule pt-4 text-xs leading-relaxed text-ink-400 text-pretty">
              Conversion tables last checked {CLB_TABLES_VERIFIED_ON}. This converts a
              score — it does not tell you whether you qualify for anything, and IRCC’s
              own equivalency chart is the authority. Levels above 10 are reported as
              10, because no programme counts higher.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-rule p-7 text-center">
            <p className="text-ink-400">
              {anyEntered
                ? 'Enter all four scores to see the full picture.'
                : `Enter your four scores to convert them to ${scale} levels.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
