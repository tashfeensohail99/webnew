'use client';

import { useState } from 'react';

/**
 * The visit-visa refusal-risk self-check.
 *
 * Visit visas are the volume service and the most commonly refused. This tool is
 * deliberately built to find WEAK POINTS rather than to flatter — an honest
 * "here is what an officer will doubt about your file" is far more useful to the
 * reader, and far more credible, than a reassuring score.
 *
 * Anyone who says they were previously refused is bridged to the refusal practice,
 * which is where the firm can genuinely help most.
 */

type Choice = { value: string; label: string; score: number; weak?: string };
type Question = { id: string; label: string; help?: string; choices: Choice[] };

const QUESTIONS: Question[] = [
  {
    id: 'history',
    label: 'Have you applied for a Canadian visa before?',
    choices: [
      { value: 'approved', label: 'Yes — and I was approved', score: 3 },
      { value: 'never', label: 'No, this would be my first', score: 2 },
      { value: 'refused1', label: 'Yes — I was refused once', score: 0, weak: 'A previous refusal stays on your record. The new application has to answer the old refusal directly, not ignore it.' },
      { value: 'refused2', label: 'Yes — refused more than once', score: 0, weak: 'Repeat refusals rarely fix themselves. The GCMS notes need reading before anything is re-filed.' },
    ],
  },
  {
    id: 'ties',
    label: 'What keeps you in your home country?',
    help: 'The officer’s single biggest question is whether you will come back.',
    choices: [
      { value: 'business', label: 'I own a business here', score: 3 },
      { value: 'job', label: 'Steady job I can prove', score: 3 },
      { value: 'family', label: 'Family responsibilities / property', score: 2 },
      { value: 'student', label: 'I’m a student', score: 1, weak: 'Students are seen as mobile. Enrolment proof and a clear return plan matter more for you.' },
      { value: 'none', label: 'Nothing substantial right now', score: 0, weak: 'Weak home ties is the most common reason visitor visas are refused.' },
    ],
  },
  {
    id: 'funds',
    label: 'Can you show consistent bank history for the last 6 months?',
    help: 'Consistency matters far more than a big number.',
    choices: [
      { value: 'yes', label: 'Yes — steady, explainable balances', score: 3 },
      { value: 'partly', label: 'Partly — some large recent deposits', score: 1, weak: 'Sudden large deposits before applying read as borrowed funds. They need explaining with evidence.' },
      { value: 'no', label: 'No', score: 0, weak: 'Unverifiable funds is a frequent refusal ground.' },
    ],
  },
  {
    id: 'travel',
    label: 'Have you travelled abroad before?',
    choices: [
      { value: 'strong', label: 'Yes — US / UK / Schengen / Australia', score: 3 },
      { value: 'some', label: 'Yes — other countries', score: 2 },
      { value: 'none', label: 'No international travel yet', score: 0, weak: 'No travel history isn’t fatal, but it means everything else has to be stronger.' },
    ],
  },
  {
    id: 'canadaFamily',
    label: 'Do you have family in Canada?',
    choices: [
      { value: 'none', label: 'No', score: 2 },
      { value: 'extended', label: 'Extended family (sibling, cousin, uncle)', score: 1 },
      { value: 'immediate', label: 'Immediate family (spouse, child, parent)', score: 0, weak: 'Close family in Canada can cut both ways — it explains the visit, but raises the “will they stay?” question. It has to be handled openly.' },
    ],
  },
  {
    id: 'purpose',
    label: 'Why do you want to visit?',
    choices: [
      { value: 'business', label: 'Business meeting / conference', score: 3 },
      { value: 'tourism', label: 'Tourism', score: 2 },
      { value: 'family', label: 'Visiting family', score: 2 },
      { value: 'event', label: 'A wedding or specific event', score: 2 },
      { value: 'unsure', label: 'I’m not sure yet', score: 0, weak: 'A vague purpose with no dates or plan is hard for an officer to assess favourably.' },
    ],
  },
];

const MAX = QUESTIONS.reduce((t, q) => t + Math.max(...q.choices.map((c) => c.score)), 0);

export function VisitVisaRiskChecker({ digits }: { digits: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const answered = QUESTIONS.filter((q) => answers[q.id]).length;
  const complete = answered === QUESTIONS.length;

  const picked = QUESTIONS.map((q) => ({
    q,
    choice: q.choices.find((c) => c.value === answers[q.id]),
  }));
  const score = picked.reduce((t, p) => t + (p.choice?.score ?? 0), 0);
  const pct = Math.round((score / MAX) * 100);
  const wasRefused = answers.history === 'refused1' || answers.history === 'refused2';

  const band =
    pct >= 70
      ? {
          title: 'Your file looks relatively strong',
          body: 'Nothing here is an obvious refusal trigger. That is not the same as approved — files still fail on how they are presented, not just on what is in them.',
        }
      : pct >= 45
        ? {
            title: 'Mixed — there are things an officer will question',
            body: 'There is a real case here, but also specific weak points. Most refusals we see were avoidable: the evidence existed, it just wasn’t put in front of the officer properly.',
          }
        : {
            title: 'On this picture, refusal risk looks high',
            body: 'We would rather say that plainly. Filing now would likely put a refusal on your record — which makes every future application harder. Fix the weak points first.',
          };

  const weaknesses = picked.filter((p) => p.choice?.weak).map((p) => p.choice!.weak!);

  const waMessage = [
    'Hi, I used the visit-visa refusal-risk checker on your site.',
    '',
    ...picked.map((p) => `• ${p.q.label} ${p.choice?.label ?? '—'}`),
    '',
    `Result: ${band.title}`,
    '',
    'I’d like to talk through my case.',
    '',
    '[Ref: VV-TOOL]',
  ].join('\n');

  const waHref = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}` : undefined;

  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-100">
          <div
            className="h-full rounded-full bg-gold-500 transition-all duration-500"
            style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-sm font-semibold text-ink-400">
          {answered} / {QUESTIONS.length}
        </span>
      </div>

      <ol className="space-y-6">
        {QUESTIONS.map((q, i) => (
          <li key={q.id} className="card p-6 sm:p-7">
            <p className="flex gap-3 font-serif text-xl text-balance">
              <span className="text-gold-500">{i + 1}.</span>
              <span>{q.label}</span>
            </p>
            {q.help ? <p className="mt-2 pl-8 text-sm text-ink-400 text-pretty">{q.help}</p> : null}
            <div className="mt-4 grid gap-2 pl-8 sm:grid-cols-2">
              {q.choices.map((c) => {
                const on = answers[q.id] === c.value;
                return (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: c.value }))}
                    aria-pressed={on}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      on
                        ? 'border-gold-500 bg-gold-50 font-semibold text-ink-900 shadow-soft'
                        : 'border-rule bg-paper text-ink-600 hover:border-ink-300 hover:bg-paper-alt'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        {complete ? (
          <div className="rounded-2xl border border-l-[3px] border-l-gold-500 bg-paper-alt p-7 sm:p-8">
            <p className="eyebrow">Your indicative result</p>
            <h3 className="mt-3 font-serif text-2xl text-balance sm:text-3xl">{band.title}</h3>
            <p className="mt-3 text-ink-600 text-pretty">{band.body}</p>

            {weaknesses.length ? (
              <div className="mt-6">
                <p className="text-sm font-semibold text-ink-900">
                  What an officer is most likely to question:
                </p>
                <ul className="mt-2 space-y-2">
                  {weaknesses.map((w) => (
                    <li key={w} className="flex gap-2 text-sm text-ink-600 text-pretty">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {wasRefused ? (
              <div className="mt-6 rounded-xl border border-rule bg-paper p-5">
                <p className="font-serif text-lg">You’ve been refused before</p>
                <p className="mt-2 text-sm text-ink-600 text-pretty">
                  That changes the approach entirely — the first step is reading the officer’s actual
                  reasons in your GCMS notes, not guessing at them.
                </p>
                <a
                  href="/canada-visa-refused"
                  className="mt-3 inline-block text-sm font-semibold text-accent-500 link-underline"
                >
                  What to do after a refusal →
                </a>
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              {waHref ? (
                <a
                  href={waHref}
                  rel="noopener"
                  className="btn text-white [background-image:linear-gradient(180deg,#26b862,#1fa855)]"
                >
                  Send this result to us on WhatsApp
                </a>
              ) : null}
              <a href="/book-consultation" className="btn btn-navy">
                Book a consultation
              </a>
              <button type="button" onClick={() => setAnswers({})} className="btn btn-ghost">
                Start again
              </button>
            </div>

            <p className="mt-6 border-t border-rule pt-4 text-xs text-ink-400 text-pretty">
              This is an indicative self-assessment, not legal advice, and not a prediction. Your
              application is decided by a visa officer — nobody can guarantee the outcome.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-rule p-7 text-center">
            <p className="text-ink-400">
              Answer all {QUESTIONS.length} questions to see your indicative result.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
