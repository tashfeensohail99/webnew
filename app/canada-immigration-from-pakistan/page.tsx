import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { SERVICE } from '@/lib/site';

/**
 * The "start here" page for the single biggest question this audience searches:
 * how do I get from Pakistan to Canada?
 *
 * It is a MAP, not another programme page. Every route gets two lines — who it
 * suits and where to read more — and the depth lives on the pages it links to.
 * Same evergreen rule as the rest of the site (see lib/nav.ts): no fees, no
 * processing times, no draw cut-offs, no fund amounts. Every one of those links
 * out to IRCC, because a stale number on a consultancy's site is worse than none.
 */
export const metadata: Metadata = {
  title: 'How to Immigrate to Canada from Pakistan',
  description:
    'Every realistic route from Pakistan to Canada — Express Entry, provincial nomination, study, work and family sponsorship — and what each one asks of you.',
  alternates: { canonical: '/canada-immigration-from-pakistan' },
};

const PAGE = 'canada-immigration-from-pakistan';

const IRCC = {
  languageTests:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html',
  eca: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessed.html',
  police:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates.html',
  medical:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html',
  proofOfFunds:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html',
  fees: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/fees.html',
  processingTimes:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
} as const;

function Official({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

/** The three shapes almost every successful plan from Pakistan takes. */
const SHAPES = [
  {
    n: '1',
    title: 'Straight to permanent residence',
    body: 'Through Express Entry or a provincial nomination, applying from Pakistan or from the Gulf. Built for people with a degree, strong language scores and skilled work experience.',
  },
  {
    n: '2',
    title: 'Study first, then stay',
    body: 'A study permit, then a post-graduation work permit, then Canadian work experience that counts toward permanent residence. Longer — but it is how many young applicants get there.',
  },
  {
    n: '3',
    title: 'Work first, then stay',
    body: 'A work permit — through a Canadian employer, or through your own business — and then Canadian experience. The employer route has to be genuine; more on that below.',
  },
];

const ROUTES = [
  {
    href: '/express-entry',
    icon: 'globe' as const,
    kicker: 'Permanent residence',
    title: 'Express Entry',
    body: 'Skilled workers with a degree, good language scores and at least a year of skilled work. Everyone eligible is ranked; the highest scores are invited to apply.',
    cta: 'How Express Entry works',
  },
  {
    href: '/pnp',
    icon: 'building' as const,
    kicker: 'Permanent residence',
    title: 'Provincial nomination',
    body: 'A province chooses you for its own labour needs. Some streams run through Express Entry, others stand alone — and some suit profiles Express Entry ranks low.',
    cta: 'How the PNP works',
  },
  {
    href: '/study-in-canada',
    icon: 'doc' as const,
    kicker: 'Temporary → permanent',
    title: 'Study in Canada',
    body: 'A real study plan at a designated school, money to support it, and a reason the course makes sense for you. Refused most often on that last point.',
    cta: 'Studying in Canada',
  },
  {
    href: '/work-permits',
    icon: 'permit' as const,
    kicker: 'Temporary → permanent',
    title: 'Work permits',
    body: 'An employer-backed permit — usually after the employer gets an LMIA — or one of the routes that need no Canadian employer at all.',
    cta: 'Work permit routes',
  },
  {
    href: '/work-permit-canada',
    icon: 'scale' as const,
    kicker: 'If you run a business',
    title: 'C11 work permit',
    body: 'If you own a business in Pakistan, there is a way to work in Canada by running one there. Most agents never file it.',
    cta: 'The C11, explained',
  },
  {
    href: '/family-sponsorship',
    icon: 'user' as const,
    kicker: 'Permanent residence',
    title: 'Family sponsorship',
    body: 'Your spouse, partner, child, parent or grandparent is a Canadian citizen or permanent resident and can sponsor you.',
    cta: 'How sponsorship works',
  },
  {
    href: '/atlantic-immigration-program',
    icon: 'star' as const,
    kicker: 'Employer-driven',
    title: 'Atlantic & rural programmes',
    body: 'Programmes for smaller communities that need workers. Overlooked by most applicants — which is part of why they are worth a look.',
    cta: 'Atlantic Immigration Program',
  },
  {
    href: '/canada-visit-visa',
    icon: 'plane' as const,
    kicker: 'Not a route to stay',
    title: 'Visit visa',
    body: 'To see family, travel or attend business meetings. It is not a way to move to Canada — and an application that reads like one is refused.',
    cta: 'What a visit visa takes',
  },
];

const DOCUMENTS: { title: string; body: ReactNode; guide?: string }[] = [
  {
    title: 'A valid passport',
    body: 'Renew early if it is close to expiry — a permit generally cannot run past the date your passport does.',
  },
  {
    title: 'A language test',
    body: (
      <>
        For Express Entry: IELTS General Training, CELPIP or PTE Core for English; TEF Canada or TCF
        Canada for French. Results must come from an{' '}
        <Official href={IRCC.languageTests}>approved test</Official> and still be valid when you apply.
      </>
    ),
  },
  {
    title: 'An education assessment',
    body: (
      <>
        A Pakistani degree usually needs an{' '}
        <Official href={IRCC.eca}>Educational Credential Assessment</Official> from an
        IRCC-designated organisation before it counts in Express Entry.
      </>
    ),
  },
  {
    title: 'Police certificates',
    guide: '/canada-immigration-from-pakistan/police-certificate',
    body: (
      <>
        For permanent residence, from Pakistan and from{' '}
        <Official href={IRCC.police}>every country you have lived in</Official> for six months or
        more since you turned 18 — which, for most of our Gulf clients, means two countries at least.
      </>
    ),
  },
  {
    title: 'A medical exam',
    guide: '/canada-immigration-from-pakistan/medical-exam',
    body: (
      <>
        Done by an <Official href={IRCC.medical}>IRCC panel physician</Official> — not your own
        doctor — when your application calls for one.
      </>
    ),
  },
  {
    title: 'Biometrics',
    guide: '/canada-immigration-from-pakistan/biometrics',
    body: 'Fingerprints and a photo, given in person at a Visa Application Centre. There are centres in Pakistan; you can also give them where you live in the Gulf.',
  },
  {
    title: 'Proof of funds',
    body: (
      <>
        For Federal Skilled Worker and for study, money that is genuinely yours and available.{' '}
        <Official href={IRCC.proofOfFunds}>IRCC publishes the amounts</Official> — and a large
        deposit with no history is read as borrowed.
      </>
    ),
  },
  {
    title: 'Translations',
    body: 'Anything in Urdu — a nikah nama, a family registration certificate, a degree transcript — needs a certified translation into English or French.',
  },
];

const MISTAKES = [
  {
    kicker: 'Mistake one',
    title: 'Using a visit visa as a plan to stay',
    body: (
      <>
        Officers read a visit application for one thing: will this person go home? A file built
        around staying answers that question for them.{' '}
        <Link href="/canada-visit-visa" className="font-semibold text-accent-500 link-underline">
          What a visit visa actually takes
        </Link>
        .
      </>
    ),
  },
  {
    kicker: 'Mistake two',
    title: 'Buying a job offer',
    body: (
      <>
        Genuine Canadian employers do not sell job offers, and an employer may not make a worker pay
        for its LMIA. A purchased offer is usually fake — and a fake document can mean a{' '}
        <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
          misrepresentation finding
        </Link>{' '}
        and a five-year ban.
      </>
    ),
  },
  {
    kicker: 'Mistake three',
    title: 'Leaving out an old refusal',
    body: 'Applications ask whether any country has ever refused you a visa. Leaving out a UK or Schengen refusal is misrepresentation in its own right — the omission does more damage than the refusal would have.',
  },
  {
    kicker: 'Mistake four',
    title: '“Parking” money before applying',
    body: 'Funds that appear in an account weeks before an application, with no history behind them, are read as a loan. Savings need a story the officer can follow.',
  },
];

const FAQS = [
  {
    q: 'Can I immigrate to Canada from Pakistan without IELTS?',
    a: 'Without IELTS, yes — without a language test, usually not. Express Entry and most provincial streams require an approved test, but IELTS is only one of them: CELPIP and PTE Core are accepted for English, and TEF Canada and TCF Canada for French. Some temporary routes, like a visit visa, do not ask for a test at all.',
  },
  {
    q: 'Do I need a job offer to move to Canada?',
    a: 'Not for Express Entry’s Federal Skilled Worker programme, which is built for people applying from abroad without one. Some provincial streams and every employer-backed work permit do need one — and it has to be genuine.',
  },
  {
    q: 'Can my wife or husband and children come with me?',
    a: 'Yes. On a permanent residence application you include your spouse or common-law partner and dependent children. On many work and study permits, family can come with you on their own permits.',
  },
  {
    q: 'How much money do I need?',
    a: 'It depends on the route. Federal Skilled Worker and study permits have minimum funds that IRCC sets and updates — we link to the current figures rather than copy them here, because a stale number is worse than none. What matters as much as the amount is being able to show where it came from.',
  },
  {
    q: 'I live in Saudi Arabia or the UAE. Can I still apply?',
    a: 'Yes — most of our clients apply from the Gulf. You apply online from where you live, give biometrics there, and include police certificates from the Gulf country as well as Pakistan.',
  },
  {
    q: 'How long does it take?',
    a: 'It varies by route and changes month to month. IRCC publishes current processing times, and we will tell you in your consultation what is realistic for your route — including the time it takes to get a file ready, which most people underestimate.',
  },
  {
    q: 'Can you guarantee my visa?',
    a: 'No — and neither can anyone else. A visa officer decides every application. What we can do is tell you honestly whether your case is strong, fix what is weak before it is filed, and present it properly.',
  },
];

export default function CanadaFromPakistanPage() {
  return (
    <>
      <PageHero
        eyebrow="Pakistan → Canada · Start here"
        title={
          <>
            How to immigrate to Canada <span className="text-gold-300">from Pakistan.</span>
          </>
        }
        subtitle="There is no single “Canada visa”. There are a handful of real routes, each built for a different kind of person — and picking the right one first saves you a year and a refusal."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: PAGE,
            targetCountry: 'Canada',
            message: 'Hi, I’d like to know which route to Canada fits me.',
          }}
        >
          Ask on WhatsApp
        </WhatsAppCta>
      </PageHero>

      {/* ======================= THE SHAPE OF IT ======================= */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Start here"
          title="Two kinds of route — and why the difference matters"
          subtitle="Permanent residence lets you live in Canada for good and leads to citizenship. Temporary status — study, work, a visit — runs out, and only some of it builds toward permanent residence. Nearly every plan that works from Pakistan takes one of three shapes."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {SHAPES.map((s) => (
            <li key={s.n} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {s.n}
              </span>
              <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          And a fourth, if it applies to you: if your spouse, partner, parent or child is already a
          Canadian citizen or permanent resident,{' '}
          <Link href="/family-sponsorship" className="font-semibold text-accent-500 link-underline">
            family sponsorship
          </Link>{' '}
          may be the most direct route of all.
        </p>
      </Section>

      {/* ========================= EVERY ROUTE ========================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Every route"
          title="Who each route is actually for"
          subtitle="Two lines each. The page behind every card goes into the detail — requirements, process, and where applications from Pakistan tend to go wrong."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((r) => (
            <FeatureCard key={r.href} href={r.href} cta={r.cta} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ======================== WHAT YOU NEED ======================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Paperwork"
          title="What almost every file from Pakistan needs"
          subtitle="Which of these apply depends on your route — but most people need most of them, and several take weeks to get. Starting them early is the cheapest way to save time."
        />
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {DOCUMENTS.map((d) => (
            <div key={d.title} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{d.title}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{d.body}</dd>
              {d.guide ? (
                <dd className="mt-2">
                  <Link href={d.guide} className="text-sm font-semibold text-accent-500 link-underline">
                    Step by step from Pakistan →
                  </Link>
                </dd>
              ) : null}
            </div>
          ))}
        </dl>
      </Section>

      {/* ========================== MISTAKES ========================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where it goes wrong"
          title="Four mistakes we see from Pakistan again and again"
          subtitle="None of them is about a missing form. Each one is avoidable — and each one can follow you into every application you make afterwards."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {MISTAKES.map((m) => (
            <FeatureCard key={m.title} kicker={m.kicker} title={m.title}>
              {m.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ======================= COST AND TIME ======================= */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Cost and time"
            title="The numbers we won’t print — and where to find them"
            subtitle="Government fees and processing times change, sometimes several times a year. A figure copied onto a consultancy’s website goes stale quietly, and people plan their lives around it."
          />
          <Callout title="Where the real figures live">
            <p>
              IRCC publishes its <Official href={IRCC.fees}>current fees</Official> and{' '}
              <Official href={IRCC.processingTimes}>processing times</Official>. On top of the
              government fee, most routes involve a language test, an education assessment, a medical
              exam, biometrics, police certificates and translations.
            </p>
            <p className="mt-3">
              Our own fee is on our{' '}
              <Link href="/fees" className="font-semibold text-accent-500 link-underline">
                fees page
              </Link>
              , in writing, before you commit to anything.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ============================ FAQ ============================ */}
      <Section tone="alt">
        <SectionHeading eyebrow="Questions" title="What people in Pakistan ask us first" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <ReviewedBy updated="October 2026" />
      </Section>

      <CTASection
        title="Not sure which route is yours?"
        subtitle="That is what the free consultation is for. You leave with a written summary of where you stand — including if the honest answer is not yet."
        page={PAGE}
        waMessage="Hi, I’d like to know which route to Canada fits me."
      />
    </>
  );
}
