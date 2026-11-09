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
 *
 * Absorbed /immigration-programs on 9 November 2026, on the owner's decision: the
 * "start from yourself" grid, the six steps, the business route and three FAQs
 * moved here, and /immigration-programs now redirects to this page.
 */
export const metadata: Metadata = {
  title: 'How to Immigrate to Canada from Pakistan',
  description:
    'Every realistic route from Pakistan to Canada, from Express Entry and provincial nomination to study, work, business and family sponsorship, and how to choose.',
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
  fees: 'https://ircc.canada.ca/english/information/fees/fees.asp',
  processingTimes:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
  home: 'https://www.canada.ca/en/services/immigration-citizenship.html',
  provincial: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
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
    body: 'If you own a business in Pakistan, there is a way to work in Canada by running one there.',
    cta: 'The C11, explained',
  },
  {
    href: '/business-immigration',
    icon: 'calculator' as const,
    kicker: 'If you will start or invest',
    title: 'Business and entrepreneur routes',
    body: 'Federal and provincial routes for people who will start, buy or invest in a Canadian business. They suit operators, not passive investors looking to buy a status.',
    cta: 'Business routes',
  },
  {
    href: '/family-sponsorship',
    icon: 'user' as const,
    kicker: 'Permanent residence',
    title: 'Family sponsorship',
    body: 'If your spouse or partner, or your parent if you are their dependent child, is a Canadian citizen or permanent resident, they may be able to sponsor you. Sponsoring parents and grandparents is currently paused.',
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

/** Carried over from /immigration-programs. */
const WHERE_YOU_SIT: [string, string][] = [
  ['You have a degree and skilled work history', 'Economic routes are your ground — federal and provincial both. Language testing is usually the first thing to sort out, because it moves your position more than almost anything else you control.'],
  ['You own or run a business', 'Business and entrepreneur routes, and work-permit routes that need no employer. Your case rests on what you actually operate and on funds you can document as yours.'],
  ['You have close family in Canada', 'Sponsorship may apply — but only for certain relationships, and your relative is assessed as closely as you are. A cousin or a sibling is usually not a sponsorship route, whatever you have been told.'],
  ['You are young with limited work history', 'The study-then-work chain is often the realistic route, provided you go in understanding it as a multi-year chain with real cost and real conditions at every link.'],
  ['You already have a Canadian job offer', 'That changes the picture considerably across several routes at once. Bring the offer and the employer details to the first conversation.'],
  ['You have been refused before', 'The refusal has to be dealt with head-on in whatever you file next. Start there rather than starting again from scratch.'],
];

/** How to choose, in sequence. Carried over from /immigration-programs. */
const CHOOSING = [
  { title: 'Start from your facts, not the programme', body: 'Age, education, language ability, actual skilled work history, funds in your own name, family already in Canada, and any refusal on your record. Every route reads these same facts differently.' },
  { title: 'Find the routes you plausibly fit', body: 'Most people fit more than one. A qualified professional with a sibling in Canada may have a federal route, a provincial route and no family route at all — three different answers from one set of facts.' },
  { title: 'Rule out the ones you don’t', body: 'This is the step people skip. Ruling a route out early is worth more than adding a fifth maybe, because it stops you spending a year and a fee on it.' },
  { title: 'Fix what is weak before you file', body: 'Language results, a credential assessment, a documented funds history, a properly explained gap in employment. These are fixable in advance and very hard to fix after a refusal.' },
  { title: 'File one route properly', body: 'Filed carefully, with the evidence assembled as one coherent case. A thin application on the right route still gets refused.' },
  { title: 'Live with the decision timeline', body: 'The decision belongs to an IRCC officer. Anyone giving you a guaranteed date, or a guaranteed outcome, is selling you something they cannot deliver.' },
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
    a: 'Yes — many applicants apply from the Gulf. You apply online from where you live, give biometrics there, and include police certificates from the Gulf country as well as Pakistan.',
  },
  {
    q: 'Can I apply to more than one route at the same time?',
    a: 'Sometimes, and sometimes it is actively unwise — parallel applications can conflict, can raise questions about your stated intention, and can double your exposure if one goes wrong. It is a judgement call on your specific facts, not a general strategy to adopt by default.',
  },
  {
    q: 'I have a previous refusal. Does that close everything off?',
    a: 'Not automatically, but it does change how the next application has to be built. A refusal on your record is read by the next officer, and an application that ignores it rarely does well. It has to be addressed directly and honestly.',
  },
  {
    q: 'Someone told me there is a programme with no requirements. Is there?',
    a: 'No. Every route into Canada has published eligibility rules, and every application is decided on evidence. If someone is describing a programme with no requirements, they are either describing something that does not exist or describing something that will end in a refusal on your record.',
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
          And a fourth, if it applies to you: if your spouse or partner is already a Canadian citizen
          or permanent resident,{' '}
          <Link href="/family-sponsorship" className="font-semibold text-accent-500 link-underline">
            family sponsorship
          </Link>{' '}
          may be the most direct route of all. The route for sponsoring a parent or grandparent is{' '}
          <Link
            href="/family-sponsorship/parents-grandparents"
            className="font-semibold text-accent-500 link-underline"
          >
            currently paused
          </Link>
          .
        </p>
      </Section>

      {/* ========================= EVERY ROUTE ========================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Every route"
          title="Who each route is actually for"
          subtitle="Two lines each. The page behind every card goes into the detail — requirements, process, and where applications from Pakistan tend to go wrong."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((r) => (
            <FeatureCard key={r.href} href={r.href} cta={r.cta} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-ink-600 text-pretty">
          The boundaries between routes are porous: a work permit can produce the experience an
          economic route needs, and a provincial nomination can transform a federal profile. The
          detailed rules change often, particularly at provincial level, so check anything you read on
          any website, including this one, against <Official href={IRCC.home}>IRCC</Official> and the{' '}
          <Official href={IRCC.provincial}>relevant provincial programme page</Official>.
        </p>
      </Section>

      {/* ======================= WHERE DO YOU SIT ======================= */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where do you sit?"
          title="Start from yourself, not from the programme"
          subtitle="An agent who only files one kind of application will find that you qualify for it. Each route reads the same facts about you differently, and a profile that is mediocre in one can be strong in another."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {WHERE_YOU_SIT.map(([term, def]) => (
            <li key={term} className="card flex gap-4 p-6">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div>
                <p className="font-serif text-lg text-ink-900">{term}</p>
                <p className="mt-1 text-ink-600 text-pretty">{def}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Callout title="Who none of this suits">
            <p>
              If you are looking for a route with no requirements, a guaranteed outcome, or a way to
              buy status without operating anything, none of these routes will serve you and we are
              not the firm for you. If you cannot document where your funds came from, or you are
              being encouraged to submit an employment history that is not yours, stop — a
              misrepresentation finding is far worse than a refusal and follows you for years.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ======================== HOW TO CHOOSE ======================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How to choose"
          title="Six steps for choosing a route, in this order"
          subtitle="The third one is the step almost everybody skips, and it is the one that saves the most money."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHOOSING.map((s, i) => (
            <li key={s.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
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
