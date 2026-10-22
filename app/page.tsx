import Link from 'next/link';
import type { Metadata } from 'next';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { DestinationGrid } from '@/components/DestinationGrid';
import { HeroGlobe } from '@/components/HeroGlobe';
import { FounderFeature } from '@/components/FounderFeature';
import { SocialProof } from '@/components/SocialProof';
import { SplitSection, FAQ, Icon } from '@/components/ui';
import { site, SERVICE, leadLawyer } from '@/lib/site';

export const metadata: Metadata = {
  description:
    'Lawyer-led Canada immigration from Pakistan — work permits, study, visit visas, Express Entry and refusals. Offices in Lahore & Islamabad. Free consultation.',
  alternates: { canonical: '/' },
};

const SERVICES = [
  {
    href: '/work-permit-canada',
    icon: 'permit' as const,
    kicker: 'Canada · No job offer needed',
    title: 'C11 Work Permit',
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

/** The scrolling strip under the hero — every link a real guide. */
const TICKER: [string, string][] = [
  ['/express-entry', 'Express Entry'],
  ['/pnp', 'Provincial nomination'],
  ['/study-in-canada/study-permit', 'Study permits'],
  ['/work-permits', 'Work permits'],
  ['/work-permit-canada', 'C11 work permit'],
  ['/canada-visit-visa', 'Visit visas'],
  ['/visitor-visa/super-visa', 'Super Visa'],
  ['/family-sponsorship/spouse-partner', 'Spouse sponsorship'],
  ['/work-permits/post-graduation', 'Post-graduation work permit'],
  ['/refusals/judicial-review', 'Judicial review'],
  ['/refusals/gcms-notes', 'GCMS notes'],
  ['/tools/crs-calculator', 'CRS calculator'],
  ['/uk', 'United Kingdom'],
  ['/usa', 'United States'],
  ['/europe', 'Europe & Schengen'],
];

const STEPS = [
  ['Tell us where you are', 'On WhatsApp, by phone, or at our Lahore or Islamabad office — wherever is easiest for you.'],
  ['A lawyer reads your history', 'Refusals, gaps, funds, the awkward parts. The things agents skip are where files fail.'],
  ['You get it in writing', 'Which route fits, what is weak, and what it would take — a written summary, free.'],
  ['Then you decide', 'Only then do fees come up, in writing. If the honest answer is “not yet”, that is what you hear.'],
];

/** "Every route, explained" — the guides people search for, grouped the way they ask. */
const GUIDES: { heading: string; href: string; links: [string, string][] }[] = [
  {
    heading: 'Permanent residence',
    href: '/immigration-programs',
    links: [
      ['/express-entry', 'Express Entry'],
      ['/express-entry/federal-skilled-worker', 'Federal Skilled Worker'],
      ['/pnp', 'Provincial Nominee Programs'],
      ['/pnp/ontario', 'Ontario (OINP)'],
      ['/atlantic-immigration-program', 'Atlantic Immigration Program'],
      ['/business-immigration', 'Business & investment'],
    ],
  },
  {
    heading: 'Work in Canada',
    href: '/work-permits',
    links: [
      ['/work-permits/lmia', 'LMIA work permits'],
      ['/work-permit-canada', 'C11 work permit (own business)'],
      ['/work-permits/spousal-open-work-permit', 'Spousal open work permit'],
      ['/work-permits/post-graduation', 'Post-graduation work permit'],
      ['/work-permits/lmia-exempt', 'LMIA-exempt permits'],
    ],
  },
  {
    heading: 'Study in Canada',
    href: '/study-in-canada',
    links: [
      ['/study-in-canada/study-permit', 'Study permits'],
      ['/study-in-canada/proof-of-funds', 'Proving your funds'],
      ['/study-in-canada/provincial-attestation-letter', 'Provincial attestation letter'],
      ['/study-in-canada/refusals', 'Study permit refusals'],
      ['/study-in-canada/study-to-permanent-residence', 'From study to PR'],
    ],
  },
  {
    heading: 'Family & visits',
    href: '/family-sponsorship',
    links: [
      ['/family-sponsorship/spouse-partner', 'Sponsor a spouse or partner'],
      ['/family-sponsorship/parents-grandparents', 'Parents & grandparents'],
      ['/visitor-visa/super-visa', 'Super Visa'],
      ['/canada-visit-visa', 'Canada visitor visa'],
      ['/visitor-visa/invitation-letter', 'Invitation letters'],
    ],
  },
  {
    heading: 'After a refusal',
    href: '/canada-visa-refused',
    links: [
      ['/canada-visa-refused', 'What to do after a refusal'],
      ['/refusals/gcms-notes', 'Get the officer’s notes'],
      ['/refusals/re-applying', 'Re-applying'],
      ['/refusals/judicial-review', 'Judicial review'],
      ['/refusals/misrepresentation', 'Misrepresentation findings'],
    ],
  },
];

const TOOLS = [
  ['/tools/crs-calculator', 'CRS calculator', 'Your Express Entry score, line by line.'],
  ['/tools/fsw-67-calculator', 'FSW 67-point calculator', 'Do you clear the Federal Skilled Worker pass mark?'],
  ['/tools/clb-converter', 'Score to CLB converter', 'IELTS, CELPIP, PTE, TEF or TCF — what your result is worth.'],
  ['/tools/work-permit-eligibility', 'Work without a job offer', 'Whether the owner-operator route is worth a closer look.'],
  ['/tools/visit-visa-refusal-risk', 'Visit visa risk check', 'The weak spots an officer will see in your visit application.'],
];

/** Offices with a confirmed address, each with its own landing page. */
const OFFICE_PAGES: Record<string, string> = {
  Lahore: '/immigration-consultant-lahore',
  Islamabad: '/immigration-consultant-islamabad',
};
const OFFICES = site.offices
  .filter((o) => o.address && OFFICE_PAGES[o.city])
  .map((o) => ({ ...o, page: OFFICE_PAGES[o.city]! }));

/** Plain-text answers: rendered on the page AND emitted as FAQPage JSON-LD. */
const HOME_FAQS = [
  {
    q: 'Is the consultation really free?',
    a: 'Yes. It costs nothing, you owe nothing unless you decide to go ahead, and you leave with a written summary of where you stand — including if the honest answer is not to apply yet.',
  },
  {
    q: 'Can you guarantee me a visa?',
    a: 'No, and neither can anyone else. A visa officer decides every application. Anyone promising a guaranteed visa is either mistaken or lying to you.',
  },
  {
    q: 'Do you only handle Canada?',
    a: 'Canada is what we file most, but we also handle the United Kingdom, the United States and Europe — and we will tell you plainly which destination actually fits your profile.',
  },
  {
    q: 'I live in Saudi Arabia, the UAE or Qatar. Can you still help?',
    a: 'Yes. Many of our clients apply from the Gulf. Consultations can be held remotely, and we handle the Pakistan side of your paperwork while you stay where you are.',
  },
  {
    q: 'I was refused before. Is it worth applying again?',
    a: 'Sometimes — but never by sending the same file again. The first step is finding out the real reason, usually from the officer’s GCMS notes. Then you know whether to fix and re-apply, or challenge the decision.',
  },
  {
    q: 'How do I know you are not a scam?',
    a: 'Check us before you pay — that is our advice about anyone. Visit our offices in Lahore or Islamabad, ask for the licence number of the lawyer reviewing your file, and look it up yourself.',
  },
];

export default function HomePage() {
  const lead = leadLawyer();

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-center lg:gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] xl:gap-10">
          {/* Text column. */}
          <div>
            <p className="eyebrow eyebrow--light">Immigration, by qualified lawyers</p>
            {/* At lg+ the headline shares the row with the globe, so it has
                to accept a slightly tighter cap than the standalone display-1
                clamp — otherwise "Canadian immigration," splits mid-phrase. */}
            <h1 className="display-1 mt-6 lg:!text-[3.3rem] lg:!leading-[1.03] xl:!text-[3.7rem]">
              Canadian immigration, handled by{' '}
              <span className="text-gold-300">real lawyers.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl !text-ink-200">
              Offices in Pakistan and Canada. The consultation is free, and you leave with a written
              summary of where you actually stand — including if the honest answer is don’t apply.
            </p>

            <div className="hero-rise hero-rise-2 mt-9 flex flex-wrap items-center gap-3">
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
            <div className="hero-rise hero-rise-3 mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
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

          {/* Globe column — hidden below lg where the headline needs the full
              width. From lg up it is a real part of the grid, so the headline
              never fights it. The negative mr allows the globe to bleed a
              little past the content container's right edge for presence.
              aspect-square reserves the globe's box before it loads
              (HeroGlobe is client-only), so its arrival shifts nothing. */}
          <div className="relative hidden aspect-square lg:block lg:mr-[-4rem] lg:scale-[1.06] xl:mr-[-3rem] xl:scale-110">
            <HeroGlobe />
          </div>
        </div>
      </section>

      {/* ========================= ROUTE TICKER =========================
          Every route we handle, drifting past under the hero — the quickest
          way to show breadth without another grid. Plain links (crawlable);
          the second copy that makes the loop seamless is hidden from
          assistive tech and the tab order. Pauses on hover/focus, and stops
          entirely under reduced motion (globals.css). */}
      <nav aria-label="Popular routes" className="ticker overflow-hidden border-b border-rule bg-paper-alt">
        <div className="ticker-track py-3.5">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
              {TICKER.map(([href, label]) => (
                <li key={href} className="flex items-center">
                  <Link
                    href={href}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="whitespace-nowrap px-5 text-sm font-medium text-ink-600 transition-colors hover:text-gold-600"
                  >
                    {label}
                  </Link>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold-500" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>

      {/* ======================== SOCIAL PROOF ========================
          The firm's real reach (~890K followers) — the strongest trust signal
          it has, and one the site never showed. */}
      <SocialProof />

      {/* ===================== GLOBAL DESTINATIONS ===================== */}
      <section className="cv-auto bg-paper">
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
      <section className="border-y border-rule bg-paper-alt">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:flex sm:items-center sm:justify-between sm:gap-6">
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
            className="mt-3 tap shrink-0 font-semibold text-accent-500 link-underline sm:mt-0"
          >
            Meet the team →
          </Link>
        </div>
      </section>

      {/* =========================== SERVICES ===========================
          Split layout: the heading sits BESIDE the cards and stays put as they
          scroll, rather than sitting on top of yet another three-up grid. This
          is the section that most made the page read as a template — the same
          heading-over-grid silhouette repeated down the page. Below lg it
          collapses back to the stacked order, which is correct on a phone. */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <SplitSection
          aside={
            <>
              <p className="eyebrow">What we do</p>
              <h2 className="display-2 mt-4">The routes we file most — and file well</h2>
              <p className="lede mt-4">
                We don’t list fifty services to look big. These are the cases we handle every week.
              </p>
            </>
          }
        >
        <div className="grid gap-6 sm:grid-cols-2">
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
        </SplitSection>

        {/* Start-here banner: the one page that answers the question most
            visitors arrive with. */}
        <Link
          href="/canada-immigration-from-pakistan"
          className="card group mt-14 flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">New to all of this? Start here</p>
            <p className="mt-2 font-serif text-2xl text-balance sm:text-3xl">
              How to immigrate to Canada from Pakistan — every route on one page
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
            Read the guide
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section className="cv-auto reveal border-y border-rule bg-paper-alt">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="display-2 mt-4">From first message to a straight answer</h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="card relative flex flex-col overflow-hidden p-7">
                <span aria-hidden="true" className="step-numeral font-serif text-6xl leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-serif text-xl">{title}</h3>
                <p className="mt-2.5 flex-1 text-ink-600 text-pretty">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================ FOUNDER ============================
          The firm's founder, photographed at the Lahore office — the one face
          on the site, and the answer to "who is actually behind this?". */}
      <section className="cv-auto reveal relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <FounderFeature />
        </div>
      </section>

      {/* ===================== CREDIBILITY BAND =====================
          Given real weight rather than treated as a footnote strip. For an
          audience that has been warned about immigration scams their whole
          lives, "real doors on two continents" is the strongest thing this
          page says — it was previously the quietest element on it. Bigger
          numerals, more air, and a rule that reads as a deliberate divider
          rather than a leftover border. */}
      <section className="cv-auto relative overflow-hidden bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {[
              ['3', 'offices', 'Lahore, Islamabad & Mississauga — real doors, not a mailbox.'],
              ['4', 'countries', 'Canada, the USA, the UK and Europe — plus investor routes, one firm.'],
              ['Free', 'consultation', 'And a written summary of where you stand, before money is discussed.'],
            ].map(([big, small, desc]) => (
              <div key={small as string} className="border-t-2 border-gold-500/70 pt-5">
                <p className="font-serif text-5xl leading-none text-gold-300 sm:text-6xl">{big}</p>
                <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-300">
                  {small}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-200 text-pretty">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EVERY ROUTE, EXPLAINED =====================
          The homepage linked to 11 pages before this — so the 70-odd guides
          behind it got almost none of its weight, and a visitor who didn't
          use the menu never found them. Grouped the way people ask. */}
      <section className="cv-auto reveal mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Free guides</p>
            <h2 className="display-2 mt-4">Every route, explained in plain language</h2>
          </div>
          <p className="max-w-sm text-ink-600 text-pretty">
            What each route asks of you, how it runs, and where applications from Pakistan go wrong —
            written by people who file them.
          </p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {GUIDES.map((g) => (
            <div key={g.heading}>
              <h3 className="border-b border-rule pb-3 font-serif text-xl">
                <Link href={g.href} className="transition-colors hover:text-gold-600">
                  {g.heading}
                </Link>
              </h3>
              <ul className="mt-2">
                {g.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="tap text-[0.95rem] text-ink-600 transition-colors hover:text-gold-600">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== FREE TOOLS ========================== */}
      <section className="cv-auto reveal border-y border-rule bg-paper-alt">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Free tools</p>
              <h2 className="display-2 mt-4">Run the numbers yourself</h2>
            </div>
            <Link href="/tools" className="tap shrink-0 font-semibold text-accent-500 link-underline">
              All tools →
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TOOLS.map(([href, title, body]) => (
              <Link key={href} href={href} className="card group flex flex-col p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
                  <Icon name="calculator" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg leading-snug">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-600 text-pretty">{body}</p>
                <span className="mt-4 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= HONESTY BLOCK ======================= */}
      <section className="cv-auto mx-auto max-w-6xl px-4 py-20 sm:py-24">
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
              className="mt-6 tap font-semibold text-accent-500 link-underline"
            >
              Read our no-guarantee policy →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================== WHY US ========================== */}
      <section className="cv-auto border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Why people choose us</p>
            <h2 className="mt-4 font-serif text-3xl text-balance sm:text-4xl">
              The difference is who reads your file
            </h2>
          </div>
          {/* A list, not a <dl>: the check icon and the wrapper div sat
              between <dl> and its <dt>/<dd>, which is invalid markup and the
              one accessibility failure Lighthouse reported on this page. */}
          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY.map(([term, def]) => (
              <li key={term} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-serif text-xl">{term}</h3>
                  <p className="mt-1.5 text-ink-600 text-pretty">{def}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================== OFFICES ===========================
          Name, address and hours on the homepage, from the same record the
          LocalBusiness JSON-LD uses — consistent NAP is most of local SEO. */}
      <section className="cv-auto reveal mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Visit us</p>
          <h2 className="display-2 mt-4">Real offices you can walk into</h2>
          <p className="lede mt-4">
            In Lahore and Islamabad — and in Mississauga, Canada. Come in, or talk to us from wherever
            you are.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {OFFICES.map((o) => (
            <div key={o.city} className="card flex flex-col p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">{o.city} office</p>
              <p className="mt-3 font-serif text-xl leading-snug">{o.address}</p>
              <p className="mt-3 text-sm text-ink-600">{o.hours}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <Link href={o.page} className="tap font-semibold text-accent-500 link-underline">
                  About the {o.city} office →
                </Link>
                {o.mapUrl ? (
                  <a href={o.mapUrl} rel="noopener noreferrer" target="_blank" className="tap font-semibold text-ink-700 link-underline">
                    Directions
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section className="cv-auto reveal border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
          <p className="eyebrow">Questions</p>
          <h2 className="display-2 mt-4">What people ask us first</h2>
          <div className="mt-10">
            <FAQ items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="cv-auto relative overflow-hidden bg-hero text-white">
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

      <WhatsAppFloat
        intent={{
          service: SERVICE.WORK_PERMIT,
          page: 'home-float',
          message: 'Hi, I’d like some advice about my immigration options.',
        }}
      />
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
