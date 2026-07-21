import Link from 'next/link';
import type { Metadata } from 'next';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { DestinationGrid } from '@/components/DestinationGrid';
import { site, SERVICE, leadLawyer } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const SERVICES = [
  {
    href: '/work-permit-canada',
    icon: 'permit' as const,
    kicker: 'Canada · C11',
    title: 'Canada Work Permit',
    body: 'You do not need a job offer to work in Canada. If you own a business or you are self-employed, there is a route most agents in Pakistan don’t know how to file.',
    cta: 'See if it fits you',
  },
  {
    href: '/canada-visit-visa',
    icon: 'visit' as const,
    kicker: 'Canada · TRV',
    title: 'Canada Visit Visa',
    body: 'The most common Canadian visa — and the most commonly refused. Most of the refusals we see were avoidable with the right file.',
    cta: 'What it actually takes',
  },
  {
    href: '/canada-visa-refused',
    icon: 'refused' as const,
    kicker: 'Refusals · Judicial Review',
    title: 'Your visa was refused',
    body: 'A refusal is not the end of it. Get your GCMS notes, find the real reason, and know whether reapplying or the Federal Court is your move.',
    cta: 'Start here',
  },
];

const WHY = [
  ['A lawyer reviews your file', 'Not a salesperson working to a target — someone qualified who reads your case.'],
  ['We tell you when not to apply', 'A weak application filed today is a refusal on your record for years.'],
  ['You can check us', 'Named people, real offices on two continents. Verify us before you pay anyone.'],
  ['Honest before you pay', 'We tell you whether your case is strong before you owe us a rupee.'],
];

export default function HomePage() {
  const lead = leadLawyer();

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-hero text-white">
        <MonogramWatermark />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="eyebrow eyebrow--light">Immigration, by qualified lawyers</p>
          <h1 className="display-1 mt-6 max-w-4xl">
            Canadian immigration, handled by{' '}
            <span className="text-gold-300">real lawyers.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl !text-ink-200">
            Offices in Pakistan and Canada. The consultation is free, and you leave with a written
            summary of where you actually stand — including if the honest answer is don’t apply.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/book-consultation" className="btn btn-gold">
              Talk to a lawyer — free
              <span aria-hidden="true">→</span>
            </Link>
            <WhatsAppCta
              variant="ghost"
              intent={{
                service: SERVICE.WORK_PERMIT,
                page: 'home',
                targetCountry: 'Canada',
                message: 'Hi, I’d like to ask about immigrating to Canada.',
              }}
            >
              Start on WhatsApp
            </WhatsAppCta>
          </div>

          {/* Trust bar */}
          <div className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
            {[
              ['Two continents', 'Offices in Pakistan & Canada'],
              ['Lawyer-led', 'Every case reviewed by counsel'],
              ['No false hope', 'We’ll tell you not to apply'],
            ].map(([h, s]) => (
              <div key={h} className="bg-ink-950/30 px-5 py-5">
                <p className="font-serif text-lg text-white">{h}</p>
                <p className="mt-1 text-sm text-ink-300">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL DESTINATIONS ===================== */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Global destinations</p>
              <h2 className="display-2 mt-4 max-w-2xl">Opportunity has more than one address</h2>
            </div>
            <p className="max-w-sm text-ink-600 text-pretty">
              Canada is what we file most, and it is where our Canadian office is. The
              other routes are real too — we will tell you plainly which one fits.
            </p>
          </div>
          <div className="mt-12">
            <DestinationGrid />
          </div>
        </div>
      </section>

      {/* ========================= TRUST STRIP ========================= */}
      <section className="border-b border-rule bg-paper-alt">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="text-ink-700 text-pretty">
            {lead ? (
              <>
                Every case is reviewed by a qualified lawyer —{' '}
                <strong className="font-semibold text-ink-900">{lead.name}</strong>
                {lead.credential ? `, ${lead.credential}` : ''}.
              </>
            ) : (
              <>
                Every case is reviewed by a qualified lawyer — not an agent, and not a call centre.
                Someone who will read your file and tell you the truth about it.
              </>
            )}
          </p>
          <Link
            href="/about/our-team"
            className="mt-3 inline-block shrink-0 font-semibold text-accent-500 link-underline sm:mt-0"
          >
            Meet the team →
          </Link>
        </div>
      </section>

      {/* =========================== SERVICES =========================== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="display-2 mt-4">The routes we file most — and file well</h2>
          <p className="lede mt-4">
            We don’t list fifty services to look big. These are the cases we handle every week.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="card group flex flex-col p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
                <ServiceIcon name={s.icon} />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">
                {s.kicker}
              </p>
              <h3 className="display-3 mt-2">{s.title}</h3>
              <p className="mt-3 flex-1 text-ink-600 text-pretty">{s.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
                {s.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===================== CREDIBILITY BAND ===================== */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-3">
          {[
            ['3', 'offices', 'Lahore, Islamabad & Mississauga — real doors, not a mailbox.'],
            ['4', 'destinations', 'Canada, the USA, the UK and Europe — one firm, checked facts.'],
            ['Free', 'consultation', 'And a written summary of where you stand, before money is discussed.'],
          ].map(([big, small, desc]) => (
            <div key={small as string} className="border-l-2 border-gold-500/60 pl-5">
              <p className="font-serif text-4xl text-gold-300">{big}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">{small}</p>
              <p className="mt-3 text-sm text-ink-200 text-pretty">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= HONESTY BLOCK ======================= */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="card overflow-hidden md:grid md:grid-cols-5">
          <div className="border-b border-rule bg-paper-alt p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <p className="eyebrow">The honest bit</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">
              “Can you guarantee me a visa?”
            </h2>
            <p className="mt-5 font-serif text-2xl text-gold-600">No. And neither can anyone else.</p>
          </div>
          <div className="p-8 md:col-span-3 md:p-10">
            <p className="text-ink-600 text-pretty">
              Your visa is decided by a visa officer. No consultant in Pakistan — including us — can
              overrule that officer, and anyone who tells you otherwise is either lying to you or
              about to.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              What we <em>can</em> do: tell you honestly whether your case is strong, fix what’s weak
              before it’s filed, and put it in front of that officer properly. And if we don’t think
              you’ll succeed, we’ll say so — before you’ve paid us anything.
            </p>
            <Link
              href="/no-guarantee-policy"
              className="mt-6 inline-block font-semibold text-accent-500 link-underline"
            >
              Read our no-guarantee policy →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================== WHY US ========================== */}
      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Why people choose us</p>
            <h2 className="mt-4 font-serif text-3xl text-balance sm:text-4xl">
              The difference is who reads your file
            </h2>
          </div>
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY.map(([term, def]) => (
              <div key={term} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                  <CheckIcon />
                </span>
                <div>
                  <dt className="font-serif text-xl">{term}</dt>
                  <dd className="mt-1.5 text-ink-600 text-pretty">{def}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative overflow-hidden bg-hero text-white">
        <MonogramWatermark />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
          <p className="eyebrow eyebrow--light justify-center">Start with a conversation</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-balance sm:text-4xl">
            Find out where you actually stand
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-200 text-pretty">
            The consultation is free. You leave with a written summary of where you stand — what is
            realistically open to you, what isn’t, and what we’d need to see before anyone can say
            more. From a lawyer, not a salesperson.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/book-consultation" className="btn btn-gold">
              Talk to a lawyer — free
              <span aria-hidden="true">→</span>
            </Link>
            <WhatsAppCta
              variant="ghost"
              intent={{
                service: SERVICE.WORK_PERMIT,
                page: 'home-cta',
                targetCountry: 'Canada',
                message: 'Hi, I’d like to book a consultation.',
              }}
            >
              Ask on WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------- bits ---------------------------------- */

function MonogramWatermark() {
  return (
    <svg
      viewBox="0 0 128 128"
      aria-hidden="true"
      className="pointer-events-none absolute -right-10 -top-10 h-[26rem] w-[26rem] text-white/[0.03] sm:-right-4"
      fill="currentColor"
    >
      <path d="M14 16 H114 V34 L92 56 H78 L70 104 L64 116 L58 104 L50 56 H36 L14 34 Z" />
    </svg>
  );
}

function ServiceIcon({ name }: { name: 'permit' | 'visit' | 'refused' }) {
  const common = { className: 'h-6 w-6', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'permit')
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </svg>
    );
  if (name === 'visit')
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M2 12l19-7-7 19-2.5-8.5L2 12z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  );
}
