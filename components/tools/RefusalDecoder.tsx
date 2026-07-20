'use client';

import { useMemo, useState } from 'react';
import {
  REASONS,
  verdictFor,
  DISCLAIMER,
  GCMS,
  DUAL_INTENT,
  CONTENT_VERIFIED_ON,
  type VisaType,
  type Fixability,
} from '@/lib/refusal-reasons';

/**
 * The refusal-letter decoder.
 *
 * The reader has already been refused, has probably already paid someone, and is
 * deciding whether to spend money again. That makes this the most consequential
 * thing on the site, and it is built accordingly:
 *
 *  - Every word of the reason content lives in lib/refusal-reasons.ts so it can be
 *    audited without reading any UI code, exactly like the CRS grid.
 *  - The tool is allowed to say "do not re-apply yet". If it could not say that, it
 *    would be a lead generator wearing a diagnostic costume.
 *  - It never predicts an outcome and never implies we can overturn a refusal.
 *
 * If you are editing this: the honest verdict is the product. Softening it to
 * increase enquiries is the one change that would make the tool worthless.
 */

const FIXABILITY_LABEL: Record<Fixability, string> = {
  fixable: 'Fixable with better evidence',
  'needs-time': 'Fixable, but not quickly',
  'material-change': 'Needs something in your life to actually change',
};

const FIXABILITY_STYLE: Record<Fixability, string> = {
  fixable: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  'needs-time': 'bg-amber-50 text-amber-800 border-amber-200',
  'material-change': 'bg-rose-50 text-rose-800 border-rose-200',
};

/**
 * Visitor visa only, deliberately. Study permits use a different reason list,
 * and no reliable copy of the WORK permit list could be obtained from any
 * source. Copying the visitor list across and guessing is exactly how this tool
 * would hurt someone, so it says so instead.
 */
const VISA_TYPES: { value: VisaType; label: string }[] = [
  { value: 'visitor', label: 'Visitor visa (TRV)' },
];

export function RefusalDecoder({ digits }: { digits: string }) {
  const [visaType, setVisaType] = useState<VisaType>('visitor');
  const [selected, setSelected] = useState<string[]>([]);

  const available = useMemo(() => REASONS.filter((r) => r.visaTypes.includes(visaType)), [visaType]);

  // Dropping the visa type must not leave reasons selected that no longer exist.
  const pickReasons = (t: VisaType) => {
    const ids = new Set(REASONS.filter((r) => r.visaTypes.includes(t)).map((r) => r.id));
    setSelected((s) => s.filter((id) => ids.has(id)));
    setVisaType(t);
  };

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const chosen = available.filter((r) => selected.includes(r.id));
  const verdict = useMemo(() => verdictFor(selected, visaType), [selected, visaType]);

  const waMessage = [
    'Hi, I used the refusal-letter decoder on your site.',
    '',
    `Refused for: ${VISA_TYPES.find((v) => v.value === visaType)?.label}`,
    'Reasons ticked on my letter:',
    ...chosen.map((r) => `• ${r.letterWording}`),
    '',
    `The tool's read: ${verdict?.title ?? '—'}`,
    '',
    'I’d like to know honestly whether it is worth re-applying.',
    '',
    '[Ref: RF-TOOL]',
  ].join('\n');

  const waHref = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}` : undefined;

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-l-[3px] border-l-gold-500 bg-paper-alt p-5 sm:p-6">
        <p className="font-serif text-lg">Before you start</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
          {DISCLAIMER} Content last checked {CONTENT_VERIFIED_ON}.
        </p>
      </div>

      <div className="card p-6 sm:p-7">
        <p className="text-sm font-medium text-ink-900">What were you refused for?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {VISA_TYPES.map((v) => (
            <button
              key={v.value}
              type="button"
              onClick={() => pickReasons(v.value)}
              aria-pressed={visaType === v.value}
              className={`rounded-xl border px-4 py-2.5 text-sm transition-all ${
                visaType === v.value
                  ? 'border-gold-500 bg-gold-50 font-semibold text-ink-900 shadow-soft'
                  : 'border-rule bg-paper text-ink-600 hover:border-ink-300 hover:bg-paper-alt'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-ink-400 text-pretty">
          Refused for a study or work permit? Those letters use a different list of
          reasons. We have not been able to obtain a reliable copy of the work-permit
          list, and we will not copy this one across and guess — so we would rather tell
          you that than show you something that might not apply to your letter.
        </p>
      </div>

      <div className="mt-6 card p-6 sm:p-7">
        <p className="text-sm font-medium text-ink-900">
          Tick every box that is ticked on your refusal letter
        </p>
        <p className="mt-1 text-xs text-ink-400 text-pretty">
          Use the letter itself, not what someone told you it said. The wording below
          mirrors the letter.
        </p>
        <ul className="mt-4 space-y-2">
          {available.map((r) => {
            const on = selected.includes(r.id);
            return (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => toggle(r.id)}
                  aria-pressed={on}
                  className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    on
                      ? 'border-gold-500 bg-gold-50 text-ink-900 shadow-soft'
                      : 'border-rule bg-paper text-ink-600 hover:border-ink-300 hover:bg-paper-alt'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold ${
                      on ? 'border-gold-600 bg-gold-500 text-white' : 'border-ink-300'
                    }`}
                  >
                    {on ? '✓' : ''}
                  </span>
                  <span className={on ? 'font-medium' : ''}>{r.letterWording}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10">
        {chosen.length ? (
          <div className="space-y-6">
            {verdict ? (
              <div
                className={`rounded-2xl border border-l-[3px] p-7 sm:p-8 ${
                  verdict.level === 'stop'
                    ? 'border-l-rose-500 bg-rose-50/60'
                    : verdict.level === 'fix-first'
                      ? 'border-l-amber-500 bg-amber-50/50'
                      : 'border-l-emerald-500 bg-emerald-50/50'
                }`}
              >
                <p className="eyebrow">What this adds up to</p>
                <h3 className="mt-3 font-serif text-2xl text-balance sm:text-3xl">{verdict.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-700 text-pretty">{verdict.body}</p>
              </div>
            ) : null}

            <div>
              <h3 className="font-serif text-xl">What each reason actually means</h3>
              <div className="mt-4 space-y-4">
                {chosen.map((r) => (
                  <article key={r.id} className="rounded-2xl border border-rule bg-paper p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <p className="font-serif text-lg text-balance">{r.letterWording}</p>
                      <span
                        className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${FIXABILITY_STYLE[r.fixability]}`}
                      >
                        {FIXABILITY_LABEL[r.fixability]}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-ink-600 text-pretty">{r.plainEnglish}</p>
                    <div className="mt-4 rounded-xl bg-paper-alt p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        What the officer was weighing
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600 text-pretty">
                        {r.whatWasAssessed}
                      </p>
                    </div>
                    <div className="mt-3 rounded-xl bg-paper-alt p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                        What would have to be different
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600 text-pretty">
                        {r.whatWouldNeedToChange}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-rule bg-paper p-6">
              <h3 className="font-serif text-xl">{GCMS.title}</h3>
              <div className="mt-3 space-y-3 leading-relaxed text-ink-600 text-pretty">
                {GCMS.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-rule bg-paper p-6">
              <h3 className="font-serif text-xl">{DUAL_INTENT.title}</h3>
              <div className="mt-3 space-y-3 leading-relaxed text-ink-600 text-pretty">
                {DUAL_INTENT.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {waHref ? (
                <a
                  href={waHref}
                  rel="noopener"
                  className="btn text-white [background-image:linear-gradient(180deg,#26b862,#1fa855)]"
                >
                  Send this to us on WhatsApp
                </a>
              ) : null}
              <a href="/book-consultation" className="btn btn-navy">
                Book a consultation
              </a>
              <button type="button" onClick={() => setSelected([])} className="btn btn-ghost">
                Start again
              </button>
            </div>

            <p className="border-t border-rule pt-5 text-xs leading-relaxed text-ink-400 text-pretty">
              {DISCLAIMER}
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-rule p-7 text-center">
            <p className="text-ink-400">
              Tick the reasons on your letter to see what each one means.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
