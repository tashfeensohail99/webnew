'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The website enquiry form.
 *
 * WhatsApp is still primary and this still sits BELOW it. What changed is what
 * the form asks. The consultation used to cost PKR 5,000, and that fee was the
 * filter — it separated a serious enquiry from the firehose. Free means the
 * filter has to be EFFORT instead: this asks the questions a lawyer would ask
 * in the first five minutes, so the enquiry that lands is already worth
 * reading, and the person who won't spend three minutes on it self-selects out.
 *
 * The questions are not busywork. Each one changes the answer:
 *   - refusal history is the single biggest one, and the thing people hide
 *   - who is travelling changes the route entirely (spouse/children)
 *   - "what have you already done" surfaces the half-finished file, the agent
 *     who disappeared, the application already in progress
 *
 * WHY IT ALL GOES INTO `message`:
 * The backend runs a global ValidationPipe with forbidNonWhitelisted: true, and
 * CreateWebsiteLeadDto accepts a fixed field list. Any NEW key in this payload
 * is a 400 and a LOST ENQUIRY — not a degraded one. So the answers are composed
 * into the existing `message` string, which the CRM already writes into the
 * lead's notes where a rep reads them. This ships against the live backend with
 * no CRM change and no deploy ordering to get wrong. If these ever need to be
 * queryable columns, that is a DTO change first, then this.
 *
 * `message` is @MaxLength(1200) server-side, so the composed block is clamped
 * below that — overrunning it would 400 the whole submission, which is exactly
 * the failure this form exists to avoid.
 *
 * Spam defences unchanged: `company` honeypot (off-screen, not display:none,
 * since some bots skip hidden inputs but fill positioned ones) and `elapsedMs`
 * set on mount rather than at module scope, so a prerendered page doesn't carry
 * the build timestamp and make every submission look instant.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? 'https://backend-production-5a89.up.railway.app';

/** Server DTO caps `message` at 1200. Stay clear of it. */
const MESSAGE_LIMIT = 1150;
/** Free-text the visitor types, before we add the structured answers. */
const SITUATION_MAX = 700;

const DESTINATIONS = ['Canada', 'United Kingdom', 'United States', 'Europe', 'Not sure yet'];

const INTERESTS = [
  'Work permit',
  'Visitor visa',
  'Study permit',
  'Express Entry / PR',
  'Family sponsorship',
  'Business or investment',
  'I was refused',
  'Something else',
];

const REFUSED = [
  'No, never',
  'Yes — Canada',
  'Yes — another country',
  'Yes — more than one',
  'I’m not sure',
];

const WHO = ['Just me', 'Me and my spouse', 'Me and my family', 'Someone else, not me'];

const STAGE = [
  'Just starting to look into it',
  'I’ve done some research',
  'I have documents ready',
  'An application is already in progress',
  'I used an agent before and it went wrong',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function LeadForm({ page = 'contact' }: { page?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [refused, setRefused] = useState('');
  const mountedAt = useRef<number>(0);
  const sentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  // On success the form is REPLACED, so focus falls back to <body> and a
  // keyboard or screen-reader user is left with no idea anything happened —
  // they tab from the top of the page again. Move focus to the confirmation
  // and it is both announced and the next Tab continues from the right place.
  useEffect(() => {
    if (status === 'sent') sentRef.current?.focus();
  }, [status]);

  const showRefusalDetail = refused.startsWith('Yes');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    const val = (k: string) => String(fd.get(k) ?? '').trim();

    // Structured answers first — a rep skimming the note sees the decisive
    // facts before the prose. Blank answers are dropped rather than written as
    // empty labels.
    const composed = [
      val('whoFor') ? `Who it's for: ${val('whoFor')}` : null,
      val('refused') ? `Previously refused: ${val('refused')}` : null,
      val('refusalDetail') ? `Refusal detail: ${val('refusalDetail')}` : null,
      val('stage') ? `Where they are: ${val('stage')}` : null,
      val('situation') ? `\nIn their words:\n${val('situation')}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const payload = {
      firstName: val('firstName'),
      lastName: val('lastName'),
      phone: val('phone'),
      email: val('email') || undefined,
      targetCountry: val('targetCountry') || undefined,
      serviceInterest: val('serviceInterest') || undefined,
      // Clamped: exceeding the server's 1200 would reject the whole enquiry.
      message: composed ? composed.slice(0, MESSAGE_LIMIT) : undefined,
      company: val('company'), // honeypot
      elapsedMs: mountedAt.current ? Date.now() - mountedAt.current : undefined,
      page,
    };

    try {
      const res = await fetch(`${API_BASE}/public/leads/website`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div
        ref={sentRef}
        role="status"
        tabIndex={-1}
        className="rounded-2xl border border-l-[3px] border-l-emerald-500 bg-emerald-50/60 p-7 sm:p-8"
      >
        <h3 className="font-serif text-2xl">We have it — thank you for being straight with us</h3>
        <p className="mt-3 leading-relaxed text-ink-700 text-pretty">
          Someone will read this properly and come back to you with where you stand. If you would
          rather not wait, message us on WhatsApp — it is the fastest way to reach us, and the same
          people answer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" required autoComplete="family-name" />
        <Field
          label="Phone (WhatsApp if possible)"
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          hint="Include your country code — for example +92 or +971."
        />
        <Field label="Email (optional)" name="email" type="email" autoComplete="email" />

        <Select label="Where are you hoping to go?" name="targetCountry" options={DESTINATIONS} />
        <Select label="What is this about?" name="serviceInterest" options={INTERESTS} />
        <Select label="Who would be going?" name="whoFor" options={WHO} />
        <Select label="Where are you up to?" name="stage" options={STAGE} />
      </div>

      {/* ───────────────── The question that changes everything ───────────────
          Given its own block, required, and framed so telling the truth feels
          safe. People hide refusals, then a rep finds out at document stage
          and the whole file has to be rebuilt. */}
      <div className="mt-6 rounded-xl border border-gold-500/25 bg-gold-50/50 p-5">
        <label htmlFor="refused" className="block text-sm font-semibold text-ink-900">
          Have you ever been refused a visa — by any country?
        </label>
        <p id="refused-hint" className="mt-1 text-xs leading-relaxed text-ink-500 text-pretty">
          A past refusal is not a dealbreaker. Not telling us about one is — it changes what you can
          apply for, and we would rather know now than at the document stage.
        </p>
        <select
          id="refused"
          name="refused"
          required
          aria-describedby="refused-hint"
          value={refused}
          onChange={(e) => setRefused(e.target.value)}
          className="mt-3 w-full rounded-xl border border-rule bg-paper min-h-11 px-4 py-2.5 text-sm transition-colors focus:border-gold-500"
        >
          <option value="">Select…</option>
          {REFUSED.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        {showRefusalDetail ? (
          <div className="mt-4">
            <label htmlFor="refusalDetail" className="block text-sm font-medium text-ink-900">
              Which country, roughly when, and what reason were you given?
            </label>
            <input
              id="refusalDetail"
              name="refusalDetail"
              maxLength={200}
              placeholder="Canada, 2024, insufficient ties to home country"
              className="mt-2 w-full rounded-xl border border-rule bg-paper min-h-11 px-4 py-2.5 text-sm transition-colors focus:border-gold-500"
            />
          </div>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="situation" className="block text-sm font-medium text-ink-900">
          Anything else we should know
        </label>
        <p id="situation-hint" className="mt-1 text-xs text-ink-400 text-pretty">
          Your work, your funds, anything that has gone wrong before. The more honest this is, the
          more useful our answer will be.
        </p>
        <textarea
          id="situation"
          name="situation"
          rows={5}
          maxLength={SITUATION_MAX}
          aria-describedby="situation-hint"
          className="mt-2 w-full rounded-xl border border-rule bg-paper px-4 py-3 text-sm transition-colors focus:border-gold-500"
        />
      </div>

      {/* Honeypot. Off-screen rather than display:none — some bots skip hidden
          inputs but happily fill positioned ones. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 text-pretty"
        >
          That did not send. Please try again in a moment, or message us on WhatsApp — that always
          works and reaches the same team.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-navy mt-6 w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send this to a lawyer — free'}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-400 text-pretty">
        No payment, and no card. We use what you send here to answer your enquiry and we do not sell
        it to anyone. Sending this does not create a client relationship, and nothing here is advice
        until someone qualified has read your documents. Please don’t send passport or CNIC scans
        yet — we don’t need them to tell you where you stand.
      </p>
    </form>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-900">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full rounded-xl border border-rule bg-paper min-h-11 px-4 py-2.5 text-sm transition-colors focus:border-gold-500"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Field({
  label,
  name,
  hint,
  ...rest
}: { label: string; name: string; hint?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...rest}
        // Without this the hint is an orphan paragraph: it sits next to the
        // input visually but is not part of the input's accessible description,
        // so a screen reader reading the form field-by-field never says
        // "include your country code" — the exact instruction that stops a
        // phone number arriving un-diallable.
        aria-describedby={hint ? `${name}-hint` : undefined}
        className="mt-2 w-full rounded-xl border border-rule bg-paper min-h-11 px-4 py-2.5 text-sm transition-colors focus:border-gold-500"
      />
      {hint ? (
        <p id={`${name}-hint`} className="mt-1 text-xs text-ink-400 text-pretty">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
