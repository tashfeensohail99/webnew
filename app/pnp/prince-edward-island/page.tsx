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
 * Prince Edward Island Provincial Nominee Program.
 *
 * Deliberately does NOT name current streams or their criteria. Provincial
 * stream frameworks are revised, consolidated and replaced on each province's
 * own schedule, so a page listing them ages into misinformation. We describe the KINDS of
 * stream a province runs, and send the reader to PEI's own programme page for
 * what is open on the day they read it.
 */
export const metadata: Metadata = {
  title: 'Prince Edward Island Nominee Program (PEI PNP)',
  description:
    'How Prince Edward Island’s Provincial Nominee Program works: expression of interest, enhanced and base nomination, and the intent-to-settle expectation.',
  alternates: { canonical: '/pnp/prince-edward-island' },
};

const PAGE = 'pnp-prince-edward-island';

const WHAT_PEI_LOOKS_FOR = [
  {
    icon: 'building' as const,
    kicker: 'A small, employer-led labour market',
    title: 'Connection to an Island employer',
    body: 'PEI is Canada’s smallest province by population. Its selection has long leaned on candidates an Island employer actually wants, rather than on volume. A real, verifiable connection to the province carries weight that a strong profile alone does not.',
  },
  {
    icon: 'globe' as const,
    kicker: 'The sectors that run the province',
    title: 'Work the Island economy depends on',
    body: 'Agriculture and food processing, fisheries and aquaculture, tourism and hospitality, health and care work, skilled trades and construction, and a smaller technology and bioscience base. Provincial priorities move within those sectors, so read the province’s current guidance rather than assuming.',
  },
  {
    icon: 'user' as const,
    kicker: 'People who stay',
    title: 'Genuine intent to live in PEI',
    body: 'A nomination is the province spending part of its own allocation on you. Retention is the measure it is judged on, so evidence that you intend to settle on the Island — not use it as an entry point — sits at the centre of the assessment.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Establishment',
    title: 'Ability to economically establish',
    body: 'Language, education, work history and the transferability of your occupation into a small provincial economy. An occupation with few employers on the Island is harder to place, regardless of how senior you are elsewhere.',
  },
];

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'Job offer from a provincial employer',
    body: 'The most common shape of provincial nomination. A local employer offers a role, and the province assesses the offer, the employer and you together.',
  },
  {
    icon: 'permit' as const,
    kicker: 'In-demand occupation',
    title: 'Occupation the province is short of',
    body: 'Selection weighted toward specific occupations or sectors. Which occupations qualify is revised as labour needs change — this is the category that moves most.',
  },
  {
    icon: 'star' as const,
    kicker: 'Graduate',
    title: 'Graduates of local institutions',
    body: 'Provinces routinely reserve a route for people who studied in the province and are working there. PEI has consistently treated retention of its own graduates as a priority.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Entrepreneur',
    title: 'Business ownership and investment',
    body: 'Routes for people intending to buy, start or run a business in the province, normally with an active management requirement and a period of operating the business before nomination.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Francophone',
    title: 'French-speaking candidates',
    body: 'Many provinces run or weight a route for French speakers as part of federal and provincial francophone-community commitments.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Aligned with Express Entry',
    title: 'Enhanced nomination',
    body: 'Streams designed to nominate candidates who already hold a federal Express Entry profile, so the nomination feeds into that system rather than running beside it.',
  },
];

const STEPS = [
  {
    title: 'Check what is actually open',
    body: 'Streams open, pause, close and get replaced. Before anything else, read the province’s own programme page for what exists on the day you are applying and what its current criteria are.',
  },
  {
    title: 'Establish the connection',
    body: 'For most routes this means a genuine offer from a PEI employer, study and work history on the Island, or a business plan you intend to operate there yourself.',
  },
  {
    title: 'Register an expression of interest',
    body: 'For its main routes, PEI operates an expression-of-interest pool. You register a profile against a stream. This is not an application and it does not, by itself, give you any status or entitlement. Registered profiles also expire after a set period if they are not selected — check the province’s current rule on that before you assume yours is still live.',
  },
  {
    title: 'Wait to be selected from the pool',
    body: 'The province runs periodic selection rounds and invites profiles from the pool against its own criteria, which it does not publish in full. Nobody is invited automatically, selection is not a queue you move up by waiting, and no adviser controls whether or when you are selected.',
  },
  {
    title: 'Submit the provincial application',
    body: 'Being selected produces an invitation — provinces use different names for it — which opens a full application to the province, with documents, employer confirmations and evidence supporting your intent to settle. The province assesses it and decides whether to nominate.',
  },
  {
    title: 'Apply to IRCC for permanent residence',
    body: 'A nomination is a provincial endorsement, not permanent residence. IRCC makes the final decision — admissibility, medicals, security, and the genuineness of everything you have said.',
  },
];

const FAQS = [
  {
    q: 'What streams does PEI have right now, and what are the cut-offs?',
    a: 'We do not publish that here, deliberately. Provincial streams and their criteria change on the province’s own schedule, and selection thresholds move round to round. A page that listed them would be wrong within months and you might rely on it. Read the current position on the Prince Edward Island Office of Immigration’s own programme page, on the day you need it.',
  },
  {
    q: 'What is the difference between an enhanced and a base nomination?',
    a: 'An enhanced nomination is issued through a stream aligned with the federal Express Entry system, to a candidate who has a profile in the Express Entry pool — the nomination then operates within that system. A base nomination is issued outside Express Entry, and permanent residence is applied for through the separate non-Express-Entry provincial nominee route. The provincial assessment is similar in kind; what differs is the federal process that follows. IRCC publishes current processing information for each route on its own site.',
  },
  {
    q: 'Is an expression of interest an application?',
    a: 'No. It is a profile registered in a pool so the province can consider you in its selection rounds. It creates no status, no entitlement and no queue position you can rely on. Many people register and are never invited.',
  },
  {
    q: 'Do I need a job offer in PEI?',
    a: 'For most provincial nomination routes in most provinces, an offer from a local employer is either required or heavily weighted, and PEI’s selection has long leaned on employer connection. Some routes are structured differently. Which of those applies to you is exactly the thing to check on the province’s current programme page rather than assume.',
  },
  {
    q: 'Can I get nominated by PEI and then move to Toronto?',
    a: 'A nomination is granted on the basis that you intend to live and work in that province. Signalling otherwise undermines the application, and if the province concludes the stated intent was not genuine, that is a serious problem — potentially a misrepresentation one, which carries a bar on future applications. Choose a province you actually intend to live in.',
  },
  {
    q: 'Is PEI easier to get into than a larger province?',
    a: 'That framing is the mistake. PEI is small, so its nomination capacity is small and its labour market is narrow — an occupation with few employers on the Island is harder to place there than in a large province, not easier. "Easier" is not a property a province has; fit is.',
  },
  {
    q: 'Can you guarantee me a provincial nomination?',
    a: 'No, and nobody honestly can. Selection from the pool is the province’s decision and permanent residence is IRCC’s. Neither is ours to make. We publish a no-guarantee policy for that reason.',
  },
];

export default function PeiPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            Prince Edward Island wants people{' '}
            <span className="text-gold-300">who will stay</span>
          </>
        }
        subtitle={
          <>
            PEI is Canada’s smallest province, and it nominates accordingly — narrow labour market,
            heavy weight on employer connection, and a real expectation that you intend to live
            there. Here is how the process works, structurally, and who it does not suit.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT A NOMINATION IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What this actually is"
          title="A nomination is a province’s endorsement, not permanent residence"
        />
        <Prose>
          <p>
            Most Canadian provinces and territories hold an agreement with the federal government
            allowing them to nominate a limited number of economic immigrants each year — people the
            province judges able to establish themselves there and intending to stay. Quebec is
            outside this system and selects its own economic immigrants under a separate agreement,
            and not every territory runs a nominee programme. Prince Edward Island’s programme is
            administered by its Office of Immigration.
          </p>
          <p>
            Two decisions follow one another. The province decides whether to nominate you. IRCC
            then decides, separately, whether to grant permanent residence — assessing admissibility,
            health, security and the truthfulness of what you have filed. A nomination is a strong
            step, and it is not the end of the process.
          </p>
          <p>
            Provincial allocations are finite. They are set with the federal government, they are
            revised from year to year, and in a province this small the absolute number of
            nominations available is not large. IRCC and the province publish the current position;
            we do not reproduce the figures here because they move. That constraint shapes
            everything about how PEI selects: it can afford to be specific
            about occupation, employer and intent in a way a large province cannot.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT PEI LOOKS FOR ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The province’s point of view"
          title="What Prince Edward Island is generally looking for"
          subtitle="Not a checklist of criteria — those change. The underlying logic, which does not."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_PEI_LOOKS_FOR.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Categories, not a list"
          title="The kinds of stream a province runs"
          subtitle="We do not list PEI’s current streams here. They are revised on the province’s own schedule — an entire provincial framework can be replaced in a single year — so any list we published would become wrong without warning. These are the recurring shapes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Read the current position at the source">
            <p>
              What is open today, what each route requires and how the province is currently
              selecting is published by the{' '}
              <a
                href="https://www.princeedwardisland.ca/en/information/office-of-immigration/provincial-nominee-program"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Prince Edward Island Office of Immigration
              </a>
              . The federal side — how a nomination is used in an application for permanent residence
              — is published by IRCC on its{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                provincial nominees
              </a>{' '}
              pages. Anything you read about PEI on a third-party site, including this one, should be
              checked against those two before you act on it.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW THE PROCESS RUNS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How the process runs, in order"
          subtitle="Some provincial routes take a direct application instead of a pool. PEI operates an expression-of-interest pool for its main routes — the structure below reflects that."
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

      {/* ===================== ENHANCED VS BASE ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Two federal pathways"
              title="Enhanced and base nomination"
            />
            <Prose>
              <p>
                Provincial streams are described as <strong>enhanced</strong> when they are aligned
                with the federal{' '}
                <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                  Express Entry
                </Link>{' '}
                system. To use one you generally need to be eligible for one of the federal Express
                Entry programmes and have a profile in the pool. The nomination is then recorded
                against that profile and the permanent-residence application runs through Express
                Entry.
              </p>
              <p>
                A <strong>base</strong> nomination sits outside Express Entry. It is available to
                people who do not qualify for a federal Express Entry programme, and permanent
                residence is applied for through the separate non-Express-Entry provincial nominee
                route. The two routes are processed differently and on different timelines. We do
                not publish processing times here because they are revised continually — IRCC
                publishes the current figures on its{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  processing times
                </a>{' '}
                tool.
              </p>
              <p>
                Which of the two is relevant depends on the stream you use, not on your preference.
                Working out whether you are Express-Entry-eligible at all is the first question, and
                our{' '}
                <Link
                  href="/tools/crs-calculator"
                  className="font-semibold text-accent-500 link-underline"
                >
                  CRS calculator
                </Link>{' '}
                is a starting point for it.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading
              eyebrow="What commonly goes wrong"
              title="The failure patterns we see"
            />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Shopping for the "easiest" province',
                  'Picking PEI because a forum called it easy, with no employer, no study history and no reason to be there. Provinces assess intent, and a shopped application reads as one.',
                ],
                [
                  'Treating an EOI as an application',
                  'A registered profile is not a file in progress. People wait years on the assumption something is being processed when nothing is.',
                ],
                [
                  'An offer that does not survive checking',
                  'Provinces verify the employer and the role. An arranged offer, or one paid for, fails and takes the applicant down with it.',
                ],
                [
                  'An occupation the Island barely employs',
                  'A senior profile in a field with a handful of PEI employers is a hard nomination, no matter how strong it looks on paper.',
                ],
                [
                  'Stale criteria from a third-party site',
                  'Applying against requirements that were replaced. The province’s own page is the only current record.',
                ],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-4">
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
          </div>
        </div>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no intention of living in Prince Edward Island, do not apply to it">
            <p>
              This is the single most expensive mistake in provincial nomination, and it is made
              constantly. People choose a province because it looks like a shorter queue, not because
              they intend to live there. Nominating provinces are explicitly selecting for people who
              will settle and stay, and they assess intent as a live question — connections, plans,
              why this province and not another. A file with no answer to that question is weak from
              the start, and stating an intent you do not hold is misrepresentation, which carries a
              bar on future applications rather than just a refusal.
            </p>
            <p>
              PEI in particular tends not to suit people whose occupation has almost no employer base
              on the Island, people with no employer connection and no study or work history there,
              and people who need a large urban labour market, a specific professional regulator or a
              particular community to build a life around. None of that is a criticism of the Island
              — it is a small province and it does not pretend to be a large one.
            </p>
            <p>
              If a nomination is not realistic for you, other routes may be.{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Federal Express Entry
              </Link>{' '}
              needs no province at all, the{' '}
              <Link
                href="/atlantic-immigration-program"
                className="font-semibold text-accent-500 link-underline"
              >
                Atlantic Immigration Program
              </Link>{' '}
              is an employer-driven route covering PEI and the other Atlantic provinces, and{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                other provinces
              </Link>{' '}
              may be a genuinely better fit for your occupation. We would rather say so on the first
              call than take a fee for a file that was never going to work — which is why we publish
              a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you register anything"
        title="Find out whether Prince Edward Island is a realistic province for you"
        subtitle="Tell us your occupation, your experience, and whether you have any genuine connection to the Island. We will tell you honestly whether a PEI nomination is worth pursuing — and if it is not, which route might be."
        page={PAGE}
        waMessage="Hi, I’d like to know whether a Prince Edward Island provincial nomination is realistic in my situation."
      />
    </>
  );
}
