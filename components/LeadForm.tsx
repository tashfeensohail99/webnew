'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The website enquiry form.
 *
 * WhatsApp is the primary channel and stays that way — it is where the team
 * actually works, where the bot and the templates live, and where a reply can
 * happen in seconds. This form exists for the people who will not use WhatsApp:
 * desktop visitors, anyone who prefers email, and anyone who wants to write out
 * their situation properly. It sits BELOW the WhatsApp button by design.
 *
 * It posts to POST /public/leads/website, which creates a lead in the CRM and
 * round-robins it to a sales agent. Two spam defences are cooperative with the
 * server and both are invisible to a real person:
 *
 *   - `company` is a honeypot. Rendered off-screen and hidden from assistive
 *     tech, with autocomplete off so a browser never fills it. Any value means
 *     a bot.
 *   - `elapsedMs` is how long the form has been on screen. The server rejects
 *     anything under three seconds.
 *
 * The server answers identically whether it accepted, deduped, or silently
 * dropped a bot — so this component cannot and does not try to distinguish
 * those cases. It says "we have it" and gets out of the way.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? 'https://backend-production-5a89.up.railway.app';

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

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function LeadForm({ page = 'contact' }: { page?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const mountedAt = useRef<number>(0);

  // Set on mount rather than at module scope: a prerendered page would
  // otherwise carry the build time and every submission would look instant.
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get('firstName') ?? '').trim(),
      lastName: String(fd.get('lastName') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim() || undefined,
      targetCountry: String(fd.get('targetCountry') ?? '') || undefined,
      serviceInterest: String(fd.get('serviceInterest') ?? '') || undefined,
      message: String(fd.get('message') ?? '').trim() || undefined,
      company: String(fd.get('company') ?? ''), // honeypot
      elapsedMs: mountedAt.current ? Date.now() - mountedAt.current : undefined,
      page,
    };

    try {
      const res = await fetch(`${API_BASE}/public/leads/website`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // 429 is the throttle. Treat it as an error the person can act on
      // (they can use WhatsApp) rather than a silent failure.
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-l-[3px] border-l-emerald-500 bg-emerald-50/60 p-7 sm:p-8">
        <h3 className="font-serif text-2xl">We have your enquiry</h3>
        <p className="mt-3 leading-relaxed text-ink-700 text-pretty">
          Someone from the team will come back to you. If you would rather not wait,
          message us on WhatsApp — it is the fastest way to reach us, and the same people
          answer.
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
          hint="Include your country code — for example +92 or +1."
        />
        <Field label="Email (optional)" name="email" type="email" autoComplete="email" />

        <div>
          <label htmlFor="targetCountry" className="block text-sm font-medium text-ink-900">
            Where are you hoping to go?
          </label>
          <select id="targetCountry" name="targetCountry" className="mt-2 w-full rounded-xl border border-rule bg-paper px-4 py-2.5 text-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20">
            <option value="">Select…</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-ink-900">
            What is this about?
          </label>
          <select id="serviceInterest" name="serviceInterest" className="mt-2 w-full rounded-xl border border-rule bg-paper px-4 py-2.5 text-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20">
            <option value="">Select…</option>
            {INTERESTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-ink-900">
          Tell us your situation
        </label>
        <p className="mt-1 text-xs text-ink-400 text-pretty">
          The more honest you are — including anything that has gone wrong before — the
          more useful our answer will be.
        </p>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1200}
          className="mt-2 w-full rounded-xl border border-rule bg-paper px-4 py-3 text-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      {/* Honeypot. Off-screen rather than display:none — some bots skip hidden
          inputs but happily fill positioned ones. aria-hidden + tabIndex keep it
          away from keyboard and screen-reader users. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' ? (
        <p className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 text-pretty">
          That did not send. Please try again in a moment, or message us on WhatsApp —
          that always works and reaches the same team.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-navy mt-6 w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send my enquiry'}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-400 text-pretty">
        We use what you send here to answer your enquiry, and we do not sell it to anyone.
        Sending this does not create a client relationship, and nothing here is advice
        until someone qualified has read your documents.
      </p>
    </form>
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
        className="mt-2 w-full rounded-xl border border-rule bg-paper px-4 py-2.5 text-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
      />
      {hint ? <p className="mt-1 text-xs text-ink-400 text-pretty">{hint}</p> : null}
    </div>
  );
}
