import Link from 'next/link';
import type { ReactNode } from 'react';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { SERVICE } from '@/lib/site';

/**
 * The premium component library. Every page composes these so the whole site
 * reads as one considered, high-end brand — not a set of documents.
 *
 * Rules baked in: navy + gold, Fraunces display / Inter body, generous space,
 * soft depth, gold used as accent not fill. All server-rendered, zero client JS
 * (the FAQ uses native <details>). No external images — SVG/CSS only.
 */

/* --------------------------------- Monogram -------------------------------- */

export function MonogramWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      aria-hidden="true"
      className={`pointer-events-none absolute text-white/[0.035] ${className}`}
      fill="currentColor"
    >
      <path d="M14 16 H114 V34 L92 56 H78 L70 104 L64 116 L58 104 L50 56 H36 L14 34 Z" />
    </svg>
  );
}

/* --------------------------------- PageHero -------------------------------- */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <MonogramWatermark className="-right-10 -top-16 h-[30rem] w-[30rem]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
        <h1 className="mt-6 max-w-3xl font-serif text-[2.5rem] font-medium leading-[1.07] tracking-tight text-balance sm:text-[3.4rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200 text-pretty">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

/* ------------------------------ SectionHeading ----------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p> : null}
      <h2 className="mt-4 font-serif text-3xl leading-tight text-balance sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-ink-600 text-pretty">{subtitle}</p> : null}
    </div>
  );
}

/* -------------------------------- Section ---------------------------------- */

export function Section({
  children,
  tone = 'paper',
  className = '',
}: {
  children: ReactNode;
  tone?: 'paper' | 'alt' | 'navy';
  className?: string;
}) {
  const bg =
    tone === 'navy'
      ? 'bg-navy text-white'
      : tone === 'alt'
        ? 'border-y border-rule bg-paper-alt'
        : 'bg-paper';
  return (
    <section className={bg}>
      <div className={`mx-auto max-w-6xl px-4 py-20 sm:py-28 ${className}`}>{children}</div>
    </section>
  );
}

/* ------------------------------- FeatureCard ------------------------------- */

export function FeatureCard({
  icon,
  kicker,
  title,
  children,
  href,
  cta,
}: {
  icon?: ReactNode;
  kicker?: string;
  title: ReactNode;
  children: ReactNode;
  href?: string;
  cta?: string;
}) {
  const inner = (
    <>
      {icon ? (
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
          {icon}
        </span>
      ) : null}
      {kicker ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 ${icon ? 'mt-6' : ''}`}>
          {kicker}
        </p>
      ) : null}
      <h3 className={`font-serif text-2xl ${kicker ? 'mt-2' : icon ? 'mt-6' : ''}`}>{title}</h3>
      <div className="mt-3 flex-1 text-ink-600 text-pretty">{children}</div>
      {href && cta ? (
        <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
          {cta}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      ) : null}
    </>
  );
  if (href) {
    return (
      <Link href={href} className="card group flex flex-col p-7">
        {inner}
      </Link>
    );
  }
  return <div className="card flex flex-col p-7">{inner}</div>;
}

/* --------------------------------- StatBand -------------------------------- */

export function StatBand({ items }: { items: { big: string; label: string; desc: string }[] }) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-3">
        {items.map((s) => (
          <div key={s.label} className="border-l-2 border-gold-500/60 pl-5">
            <p className="font-serif text-4xl text-gold-300">{s.big}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">{s.label}</p>
            <p className="mt-3 text-sm text-ink-200 text-pretty">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Callout --------------------------------- */

export function Callout({ children, title }: { children: ReactNode; title?: ReactNode }) {
  return (
    <div className="card border-l-[3px] border-l-gold-500 p-7 sm:p-8">
      {title ? <p className="font-serif text-2xl text-balance">{title}</p> : null}
      <div className={`text-ink-600 text-pretty ${title ? 'mt-3' : ''}`}>{children}</div>
    </div>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

export function FAQ({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="divide-y divide-rule overflow-hidden rounded-2xl border border-rule bg-paper shadow-soft">
      {items.map((it, i) => (
        <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink-900">
            {it.q}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule text-gold-600 transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 text-ink-600 text-pretty">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

/* -------------------------------- CTASection ------------------------------- */

export function CTASection({
  eyebrow = 'Start with a conversation',
  title,
  subtitle,
  waMessage = 'Hi, I’d like to book a consultation.',
  page = 'cta',
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  waMessage?: string;
  page?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <MonogramWatermark className="-left-16 -bottom-20 h-[28rem] w-[28rem]" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
        <p className="eyebrow eyebrow--light justify-center">{eyebrow}</p>
        <h2 className="mt-5 font-serif text-3xl leading-tight text-balance sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mx-auto mt-4 max-w-xl text-ink-200 text-pretty">{subtitle}</p> : null}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/book-consultation" className="btn btn-gold">
            Book a consultation
            <span aria-hidden="true">→</span>
          </Link>
          <WhatsAppCta
            variant="ghost"
            intent={{ service: SERVICE.WORK_PERMIT, page, targetCountry: 'Canada', message: waMessage }}
          >
            Ask on WhatsApp
          </WhatsAppCta>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Prose ---------------------------------- */

/** Refined reading column for text-heavy pages (policy, privacy, terms). */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-lux mx-auto max-w-3xl px-4 py-16 sm:py-20">{children}</div>
  );
}

/* ---------------------------------- Icons ---------------------------------- */

export function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  const p = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
  };
  switch (name) {
    case 'permit':
      return (<svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>);
    case 'plane':
      return (<svg {...p}><path d="M2 12l19-7-7 19-2.5-8.5L2 12z" /></svg>);
    case 'refresh':
      return (<svg {...p}><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" /></svg>);
    case 'scale':
      return (<svg {...p}><path d="M12 3v18M7 7h10M6 7l-3 6a3 3 0 0 0 6 0L6 7zM18 7l-3 6a3 3 0 0 0 6 0l-3-6zM8 21h8" /></svg>);
    case 'shield':
      return (<svg {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" /></svg>);
    case 'doc':
      return (<svg {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6" /></svg>);
    case 'globe':
      return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" /></svg>);
    case 'building':
      return (<svg {...p}><path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M14 9h4a2 2 0 0 1 2 2v10M3 21h18M8 7h2M8 11h2M8 15h2" /></svg>);
    case 'check':
      return (<svg {...p}><path d="M20 6L9 17l-5-5" /></svg>);
    case 'chat':
      return (<svg {...p}><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" /></svg>);
    case 'star':
      return (<svg {...p}><path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 21l1.1-6.5L2.6 9.8l6.5-.9L12 3z" /></svg>);
    case 'user':
      return (<svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>);
    case 'calculator':
      return (<svg {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" /></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="9" /></svg>);
  }
}

export type IconName =
  | 'permit' | 'plane' | 'refresh' | 'scale' | 'shield' | 'doc'
  | 'globe' | 'building' | 'check' | 'chat' | 'star' | 'user' | 'calculator';
