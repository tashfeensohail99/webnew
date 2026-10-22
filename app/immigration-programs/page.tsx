import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  CTASection,
  Prose,
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * Orientation hub. The reader arrives not knowing which route applies to them —
 * often having been sold one by someone who only sells that one. This page's job
 * is to lay out the families structurally so they can self-identify, and to say
 * plainly that picking the wrong family costs years.
 *
 * Deliberately carries no fees, no cut-off scores, no processing times and no
 * fund thresholds. Those change, and a hub page is exactly where a stale number
 * does the most damage. Where a number matters, we name the source instead.
 */
export const metadata: Metadata = {
  title: 'Canada Immigration Programs: An Honest Overview',
  description:
    'The main routes to Canada: economic immigration, provincial nomination, family sponsorship, study-then-work, work permits and business routes.',
  alternates: { canonical: '/immigration-programs' },
};

const PAGE = 'immigration-programs';

/* The families. Structural descriptions only — no scores, no thresholds. */
const FAMILIES = [
  {
    icon: 'star' as const,
    kicker: 'Economic — federal',
    title: 'Express Entry',
    body: 'A ranked pool for skilled workers. You submit a profile, you are scored against everyone else in the pool, and rounds of invitations are issued from the top. Age, education, language test results, skilled work history and whether your spouse contributes all feed the score. It is competitive by design — being eligible to enter the pool is not the same as being invited from it.',
  },
  {
    icon: 'building' as const,
    kicker: 'Economic — provincial',
    title: 'Provincial nomination',
    body: 'Each province runs its own streams for the workers and business people it wants, and can nominate you. Some nominations attach to an Express Entry profile and lift it substantially; others run entirely outside it. Provinces open, close and redesign these streams frequently, sometimes replacing an entire stream set at once — so what qualified last year may not exist now. The province’s own programme page is the only reliable statement of what is currently open.',
  },
  {
    icon: 'user' as const,
    kicker: 'Family',
    title: 'Family sponsorship',
    body: 'A Canadian citizen or permanent resident sponsors a relative. Spouses and partners, dependent children, and parents and grandparents each run on different rules. The sponsor is assessed as seriously as the applicant — their income, their undertaking to support you, and their own eligibility to sponsor at all.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Study first',
    title: 'Study, then work, then PR',
    body: 'A study permit, then a post-graduation work permit, then Canadian work experience that can feed an economic application. It is a real pathway, but it is a chain — each link has its own conditions, and a break anywhere (wrong institution, wrong programme length, wrong work) can end the chain with the tuition already spent.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Work',
    title: 'Work permits',
    body: 'Temporary authorisation to work. Most routes need an employer and a labour market test; some are exempt from it, including routes built around your own business rather than an employer’s job offer. A work permit is not permanent residence — but the experience it produces can support a later application.',
    href: '/work-permit-canada',
    cta: 'Work permits without a job offer',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Business',
    title: 'Business and entrepreneur routes',
    body: 'Federal and provincial routes for people who will start, buy or invest in a Canadian business. They generally require capital you can prove is yours and lawfully sourced, a credible plan, and often a commitment to a specific province or region. They suit operators, not passive investors looking to buy a status.',
  },
];

/* How to think about it, in sequence. */
const STEPS = [
  {
    title: 'Start from your facts, not the programme',
    body: 'Age, education, language ability, actual skilled work history, funds in your own name, family already in Canada, and any refusal on your record. Every route reads these same facts differently.',
  },
  {
    title: 'Find the families you plausibly fit',
    body: 'Most people fit more than one. A qualified professional with a sibling in Canada may have a federal route, a provincial route and no family route at all — three different answers from one set of facts.',
  },
  {
    title: 'Rule out the ones you don’t',
    body: 'This is the step people skip. Ruling a route out early is worth more than adding a fifth maybe, because it stops you spending a year and a fee on it.',
  },
  {
    title: 'Fix what is weak before you file',
    body: 'Language results, a credential assessment, a documented funds history, a properly explained gap in employment. These are fixable in advance and very hard to fix after a refusal.',
  },
  {
    title: 'File one route properly',
    body: 'Filed carefully, with the evidence assembled as one coherent case. A thin application on the right route still gets refused.',
  },
  {
    title: 'Live with the decision timeline',
    body: 'The decision belongs to an IRCC officer. Anyone giving you a guaranteed date, or a guaranteed outcome, is selling you something they cannot deliver.',
  },
];

const FAQS = [
  {
    q: 'Which programme is the fastest?',
    a: 'There is no honest answer to that in the abstract, and we will not print one. Processing varies by route, by country of residence, by the completeness of your file, and by IRCC’s own workload. IRCC publishes current processing times on its own site, and that is the only figure worth relying on — anything a consultant quotes you from memory is a guess dressed up as knowledge.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'It depends entirely on which route you are on, how many people are in your family, and in some cases which province you are going to. Settlement fund requirements are published by IRCC and updated periodically. We confirm the current figure for your specific route and family size rather than putting a number on a web page you might read a year from now.',
  },
  {
    q: 'What do the government fees come to?',
    a: 'Government fees are set by IRCC and paid to IRCC, not to us. They differ by application type and by the number of people included. IRCC publishes the current fee schedule on its site. Separately, our professional fee is quoted in writing for your own file before you commit to anything.',
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
    q: 'Can you guarantee permanent residence?',
    a: (
      <>
        No. The decision is made by an IRCC officer and no consultant, in Pakistan or in Canada, can
        overrule that. What we can do is tell you honestly whether a route is realistic for you and
        say so when it is not.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Someone told me there is a programme with no requirements. Is there?',
    a: 'No. Every route into Canada has published eligibility rules, and every application is decided on evidence. If someone is describing a programme with no requirements, they are either describing something that does not exist or describing something that will end in a refusal on your record.',
  },
];

export default function ImmigrationProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · programme overview"
        title={
          <>
            Which Canadian route{' '}
            <span className="text-gold-300">actually applies to you</span>
          </>
        }
        subtitle={
          <>
            There is no single “Canada immigration programme”. There are several families of routes,
            each reading your same facts differently. Most people fit more than one — and choosing
            badly costs years, not weeks.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Find out which route fits — free
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/fees" className="btn btn-ghost">
          See our fees
        </Link>
      </PageHero>

      {/* ===================== WHY THIS PAGE EXISTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Before you pick"
          title="Most people are sold a route, not matched to one"
        />
        <div className="mt-8 max-w-3xl">
          <Prose>
            <p>
              An agent who only files one kind of application will find that you qualify for it. That
              is the single most expensive thing that happens to applicants from Pakistan — not fraud,
              just narrowness. You spend a year and a fee on the one route the person in front of you
              knew how to sell.
            </p>
            <p>
              The routes below are families, not products. Each one starts from the same set of facts
              about you — your age, your education, your language ability, your real work history,
              your funds, your relatives in Canada — and weighs them differently. A profile that is
              mediocre in one family can be strong in another.
            </p>
            <p>
              Read them to work out which families are even plausible for you. Then the useful
              question is not “can I get in?” but “which of these two or three should I actually
              file, and what do I have to fix first?”
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== THE FAMILIES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The main families"
          title="Six routes, described plainly"
          subtitle="What each one is for, and what it is really asking of you. No scores, no thresholds — those change, and the official source is the only one worth trusting for a number."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FAMILIES.map((f) => (
            <FeatureCard
              key={f.title}
              icon={<Icon name={f.icon} />}
              kicker={f.kicker}
              title={f.title}
              href={f.href}
              cta={f.cta}
            >
              {f.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            <p>
              Two things worth knowing about this list. First, the boundaries between families are
              porous — a work permit can produce the experience an economic route needs, and a
              provincial nomination can transform a federal profile. Second, the detailed rules
              inside each family change often, particularly at provincial level. Anything you read
              on any website, including this one, should be checked against{' '}
              <a
                href="https://www.canada.ca/en/services/immigration-citizenship.html"
                rel="noopener"
              >
                IRCC
              </a>{' '}
              and the{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
                rel="noopener"
              >
                relevant provincial programme page
              </a>{' '}
              before you act on it.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== SELF-IDENTIFY ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where do you sit?"
          title="Start from yourself, not from the programme"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            [
              'You have a degree and skilled work history',
              'Economic routes are your ground — federal and provincial both. Language testing is usually the first thing to sort out, because it moves your position more than almost anything else you control.',
            ],
            [
              'You own or run a business',
              'Business and entrepreneur routes, and work-permit routes that need no employer. Your case rests on what you actually operate and on funds you can document as yours.',
            ],
            [
              'You have close family in Canada',
              'Sponsorship may apply — but only for certain relationships, and your relative is assessed as closely as you are. A cousin or a sibling is usually not a sponsorship route, whatever you have been told.',
            ],
            [
              'You are young with limited work history',
              'The study-then-work chain is often the realistic route, provided you go in understanding it as a multi-year chain with real cost and real conditions at every link.',
            ],
            [
              'You already have a Canadian job offer',
              'That changes the picture considerably across several families at once. Bring the offer and the employer details to the first conversation.',
            ],
            [
              'You have been refused before',
              'The refusal has to be dealt with head-on in whatever you file next. Start there rather than starting again from scratch.',
            ],
          ].map(([term, def]) => (
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
              buy status without operating anything, none of these families will serve you and we are
              not the firm for you. If you cannot document where your funds came from, or you are
              being encouraged to submit an employment history that is not yours, stop — a
              misrepresentation finding is far worse than a refusal and follows you for years.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW TO CHOOSE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How to choose"
          title="Six steps, in this order"
          subtitle="The third one is the step almost everybody skips, and it is the one that saves the most money."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
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

      {/* ===================== NUMBERS ===================== */}
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Why there are no numbers here</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">
              Figures go stale; structure doesn’t
            </h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Fees, cut-off scores, settlement fund requirements and processing times all change, and
              a number sitting on a consultancy website is wrong more often than it is right. IRCC and
              the provinces publish the current figures themselves. We will confirm the ones that
              apply to your route and your family size when we speak.
            </p>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">What we will tell you</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">
              Including when the answer is no
            </h3>
            <p className="mt-4 text-ink-600 text-pretty">
              If none of these families realistically fits you right now, we would rather say so at
              the consultation than take a service fee to file something weak. A refusal on your
              record is a problem you carry into every application afterwards.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Work out which route fits"
        title="One conversation, an honest shortlist"
        subtitle="Tell us your age, education, work history, language results and whether you have family in Canada, and we’ll tell you which families are realistic for you — and which to stop spending money on."
        page={PAGE}
        waMessage="Hi, I’m not sure which Canadian immigration route applies to me. Can you help me work it out?"
      />
    </>
  );
}
