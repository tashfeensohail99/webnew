'use client';

import { useState } from 'react';

/**
 * The C11 / work-permit-without-a-job-offer qualifier.
 *
 * This is the firm's flagship route, and the question every owner-operator
 * actually asks ("can I work in Canada without an employer sponsoring me?").
 * The tool answers it honestly in 60 seconds and hands the rep a QUALIFIED lead:
 * the WhatsApp message is pre-filled with the person's own answers, so the
 * conversation starts already knowing their situation.
 *
 * It reports a BAND, never a promise. Nothing here is advice, and the copy says so.
 */

type Choice = { value: string; label: string; score: number; note?: string };
type Question = { id: string; label: string; help?: string; choices: Choice[] };

const QUESTIONS: Question[] = [
  {
    id: 'role',
    label: 'What best describes you?',
    help: 'This route is built around people who own or run something.',
    choices: [
      { value: 'owner', label: 'I own a business (any size)', score: 3 },
      { value: 'director', label: 'I’m a director / partner in a business', score: 3 },
      { value: 'self', label: 'I’m self-employed / freelance professional', score: 2 },
      { value: 'senior', label: 'I’m a senior manager, but an employee', score: 1, note: 'Different route — an intra-company transfer may fit better.' },
      { value: 'employee', label: 'I’m an employee', score: 0, note: 'This particular route is unlikely; other options exist.' },
    ],
  },
  {
    id: 'years',
    label: 'How long have you run or owned it?',
    choices: [
      { value: '3plus', label: '3 years or more', score: 3 },
      { value: '1to3', label: '1–3 years', score: 2 },
      { value: 'under1', label: 'Less than a year', score: 1, note: 'A short track record is the most common weak point here.' },
      { value: 'none', label: 'Not applicable', score: 0 },
    ],
  },
  {
    id: 'capital',
    label: 'Could you fund a business operation in Canada?',
    help: 'Your own funds, business funds, or a mix — a realistic figure, not a stretch.',
    choices: [
      { value: 'strong', label: 'Yes, comfortably', score: 3 },
      { value: 'some', label: 'Yes, but it would be a stretch', score: 2 },
      { value: 'limited', label: 'Only a small amount', score: 1 },
      { value: 'no', label: 'No', score: 0, note: 'Funding capacity is usually decisive on this route.' },
    ],
  },
  {
    id: 'intent',
    label: 'Would you actually operate a business in Canada?',
    help: 'Running it yourself — not buying a passive investment.',
    choices: [
      { value: 'yes', label: 'Yes, I’d run it myself', score: 3 },
      { value: 'maybe', label: 'Possibly — I’d want advice first', score: 2 },
      { value: 'passive', label: 'I’d prefer a passive investment', score: 0, note: 'This route needs an active operator.' },
    ],
  },
  {
    id: 'language',
    label: 'How is your English (or French)?',
    choices: [
      { value: 'strong', label: 'Comfortable in business meetings', score: 2 },
      { value: 'ok', label: 'Workable, with effort', score: 1 },
      { value: 'weak', label: 'Limited', score: 0, note: 'Not fatal, but it needs planning.' },
    ],
  },
  {
    id: 'refused',
    label: 'Have you been refused a visa for Canada before?',
    choices: [
      { value: 'no', label: 'No', score: 1 },
      { value: 'once', label: 'Yes, once', score: 0, note: 'A past refusal must be addressed head-on in the new application.' },
      { value: 'multiple', label: 'Yes, more than once', score: 0, note: 'Multiple refusals need the file reviewed before anything is filed.' },
    ],
  },
];

const MAX = QUESTIONS.reduce((t, q) => t + Math.max(...q.choices.map((c) => c.score)), 0);

export function WorkPermitChecker({ digits }: { digits: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const answered = QUESTIONS.filter((q) => answers[q.id]).length;
  const complete = answered === QUESTIONS.length;

  const picked = QUESTIONS.map((q) => ({
    q,
    choice: q.choices.find((c) => c.value === answers[q.id]),
  }));
  const score = picked.reduce((t, p) => t + (p.choice?.score ?? 0), 0);
  const pct = Math.round((score / MAX) * 100);

  const band =
    pct >= 70
      ? {
          key: 'strong',
          title: 'This route looks worth a serious look',
          body: 'On what you’ve told us, your situation has the shape this route is designed for. The next step is a lawyer reading the actual detail — that is what decides it, not a questionnaire.',
          tone: 'bg-gold-50 border-gold-500',
        }
      : pct >= 45
        ? {
            key: 'possible',
            title: 'Possible — but it depends on the detail',
            body: 'There is something here, and there are also gaps. Cases like this turn on specifics a form can’t capture. Worth a proper conversation before you spend anything.',
            tone: 'bg-paper-alt border-ink-300',
          }
        : {
            key: 'unlikely',
            title: 'This particular route looks unlikely',
            body: 'We’d rather tell you now than take your money. That does not mean Canada is closed to you — it means this specific route probably isn’t the one. Other options may fit better.',
            tone: 'bg-paper-alt border-ink-300',
          };

  const flags = picked.filter((p) => p.choice?.note).map((p) => p.choice!.note!);

  const waMessage = [
    'Hi, I used the work-permit eligibility checker on your site.',
    '',
    ...picked.map((p) => `• ${p.q.label} ${p.choice?.label ?? '—'}`),
    '',
    `Result: ${band.title}`,
    '',
    'I’d like to discuss my case.',
    '',
    '[Ref: WP-TOOL]',
  ].join('\n');

  const waHref = digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}`
    : undefined;

  return (
    <div>
      {/* progress */}
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

      {/* result */}
      <div className="mt-10">
        {complete ? (
          <div className={`rounded-2xl border-l-[3px] border p-7 sm:p-8 ${band.tone}`}>
            <p className="eyebrow">Your indicative result</p>
            <h3 className="mt-3 font-serif text-2xl text-balance sm:text-3xl">{band.title}</h3>
            <p className="mt-3 text-ink-600 text-pretty">{band.body}</p>

            {flags.length ? (
              <div className="mt-6">
                <p className="text-sm font-semibold text-ink-900">Worth knowing about your answers:</p>
                <ul className="mt-2 space-y-1.5">
                  {flags.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-ink-600 text-pretty">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {f}
                    </li>
                  ))}
                </ul>
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
              <button
                type="button"
                onClick={() => setAnswers({})}
                className="btn btn-ghost"
              >
                Start again
              </button>
            </div>

            <p className="mt-6 border-t border-rule pt-4 text-xs text-ink-400 text-pretty">
              This is an indicative self-assessment, not legal advice, and not a decision. Nobody can
              guarantee a visa — your application is decided by a visa officer.
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
