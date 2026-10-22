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
 * Alberta provincial nomination (AAIP).
 *
 * Deliberately contains no stream list and no criteria. Provincial streams are
 * revised, replaced and closed constantly; a page that names them is wrong within
 * months and reads as authoritative while being wrong. The page teaches the
 * STRUCTURE of provincial nomination — how a province selects, what kinds of
 * stream exist as categories, and what intent to settle actually means — and
 * sends the reader to Alberta's own programme page for what is open today.
 */
export const metadata: Metadata = {
  title: 'Alberta Provincial Nomination (AAIP)',
  description:
    'How the Alberta Advantage Immigration Program works: expression of interest and invitation, enhanced versus base nomination, and the intent to settle.',
  alternates: { canonical: '/pnp/alberta' },
};

const PAGE = 'pnp-alberta';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Category',
    title: 'Employer-driven',
    body: 'Built around a job offer from an employer in the province, usually for someone already working there. The offer, the employer and the occupation all have to hold up to scrutiny — not just exist on paper.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Category',
    title: 'In-demand occupation',
    body: 'Aimed at particular occupations or sectors the province has decided it needs. Which occupations sit inside the list is a policy choice the province revises, sometimes with little notice.',
  },
  {
    icon: 'star' as const,
    kicker: 'Category',
    title: 'Graduate',
    body: 'For people who studied at institutions in the province and want to stay. Provinces generally treat a local education as evidence of a genuine connection, which is part of why these categories exist.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Category',
    title: 'Entrepreneur and farm',
    body: 'For people buying or starting a business, or establishing a farm. These carry their own investment, net worth, business plan and performance-agreement requirements, and they are a different kind of file entirely.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Category',
    title: 'Rural and regional',
    body: 'Designed to direct newcomers to smaller communities rather than the two large cities. Usually involves a designated community as well as an employer, which adds a party you have to satisfy.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Category',
    title: 'Language-community streams',
    body: 'Some provinces run francophone or other language-community pathways. Whether one exists in Alberta at any given time, and on what terms, is for the province’s own page to tell you.',
  },
];

const STEPS = [
  {
    title: 'You establish a connection to Alberta',
    body: 'Working there, studying there, holding a genuine offer from an employer there, or having close family settled there. Almost every provincial route rests on some tie to the place.',
  },
  {
    title: 'You express interest, or apply directly',
    body: 'Alberta operates expression-of-interest pools for its worker and entrepreneur categories. You submit a profile with self-declared information; some categories instead take a direct application. Which applies depends on the category, and it changes.',
  },
  {
    title: 'Alberta selects from the pool',
    body: 'The province draws from the pool according to its own scoring and its own labour-market priorities at that moment. Being eligible is not being selected — the province chooses, and it is not obliged to choose you.',
  },
  {
    title: 'You are invited and file the nomination application',
    body: 'An invitation opens a window to file a full application with evidence for everything you declared. Anything you cannot document as declared is the usual point of failure.',
  },
  {
    title: 'Alberta assesses and, if satisfied, nominates',
    body: 'The province verifies your claims, your employer, and your intention to live in Alberta. A nomination is a provincial endorsement — it is not permanent residence and it is not a visa.',
  },
  {
    title: 'You apply to IRCC for permanent residence',
    body: 'The federal decision is separate. IRCC assesses admissibility, medicals, security, and the genuineness of the file. A province cannot make IRCC approve you.',
  },
];

const FAQS = [
  {
    q: 'What is the difference between an enhanced and a base nomination?',
    a: 'An enhanced nomination is aligned with Express Entry: you hold a profile in the federal pool, the province nominates you inside that system, and an accepted nomination adds points to your federal ranking. IRCC also runs invitation rounds restricted to candidates who already hold a provincial nomination. That combination makes an invitation likely rather than automatic — it is still IRCC that decides when to hold a round and where to set the cut-off, and there is a deadline to accept a nomination once it is issued. A base nomination sits outside Express Entry — you are nominated by the province and then file a permanent residence application directly with IRCC on the paper-based provincial nominee route, which is open to people who do not meet Express Entry criteria. The points value, the acceptance deadline and the processing times for each route are published by IRCC on its provincial nominees pages; read them there rather than relying on a figure quoted on any consultancy site.',
  },
  {
    q: 'Which AAIP streams are open right now, and what are the criteria?',
    a: 'We do not publish that here, on purpose. Provincial streams open, pause, close and are replaced outright — Ontario, for one, has withdrawn its established stream framework and rebuilt it, and provinces routinely suspend intake mid-year. Any list we printed would be a liability the moment it aged. Alberta publishes what is open, what is paused and the current criteria on its own site, and that is the only version worth relying on.',
  },
  {
    q: 'Does a nomination guarantee permanent residence?',
    a: 'No. A nomination is a province saying it wants you. Permanent residence is a separate federal decision on admissibility, medical and security grounds, and on whether the file is genuine. Nominations have been issued to people IRCC later refused. Anyone describing a nomination as a guaranteed outcome is misdescribing it.',
  },
  {
    q: 'Can I get a nomination from Alberta and then move to Toronto?',
    a: 'The nomination is issued on the basis that you intend to live and work in Alberta. Mobility rights mean nobody is physically confined to a province once they are a permanent resident — but stating an intention you do not hold is misrepresentation, and provinces do ask about, verify and follow up on settlement. Treating a province as a door to somewhere else is the version of this route that goes wrong most often.',
  },
  {
    q: 'Do I need a job offer in Alberta?',
    a: 'It depends entirely on the category. Some provincial categories are built around an employer and cannot proceed without one; others assess you on occupation, education or a connection to the province. What none of them do is treat a purchased or arranged offer as acceptable — an offer you paid for is a fraud risk, not a shortcut.',
  },
  {
    q: 'How many nominations does Alberta have, and what score do I need?',
    a: 'Allocation numbers, points grids and draw cut-offs move — sometimes several times a year, and the federal allocation to provinces is itself set annually. We will not print figures you might act on months later. Read the current numbers on Alberta’s own site on the day you need them.',
  },
  {
    q: 'Is a provincial route easier than Express Entry?',
    a: 'Not inherently. It is a different route with different gatekeepers, and it adds a decision-maker rather than removing one. Where it genuinely helps is when you have a real tie to a province — you work there, you studied there, you have family there — or when your occupation matches what that province is actively recruiting for. Where it does not help is as a way around a weak federal profile.',
  },
  {
    q: 'Can you guarantee a nomination?',
    a: 'No. The province decides whom it draws from its pool, on priorities it sets and revises, and IRCC decides permanent residence separately. Neither decision is ours. What we can do is tell you before you spend money whether a provincial route is realistic for your profile.',
  },
];

export default function AlbertaPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            Alberta nominates people it expects{' '}
            <span className="text-gold-300">to actually live there</span>
          </>
        }
        subtitle={
          <>
            The Alberta Advantage Immigration Program selects for the province’s own labour market and
            its own settlement priorities. This page explains how provincial nomination works
            structurally — not a stream list that will be wrong by the time you read it.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT ALBERTA WANTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The province, plainly"
          title="What Alberta is generally looking for"
        />
        <Prose>
          <p>
            Every province nominates for its own reasons. Alberta’s are shaped by an economy with a
            large energy and resource sector, substantial agriculture and agri-food processing,
            construction and skilled trades, transport and logistics across a large land area, a
            growing technology sector concentrated in Calgary and Edmonton, and — as everywhere in
            Canada — persistent health care staffing needs.
          </p>
          <p>
            Two features of that economy matter to you as an applicant. The first is that it is
            commodity-linked and therefore cyclical: what the province is recruiting for during an
            expansion is not what it recruits for during a downturn, and provincial priorities move
            with that cycle. The second is that a great deal of Alberta’s labour need sits outside
            Calgary and Edmonton, in smaller communities that struggle to attract and keep people. A
            good part of provincial immigration policy across Canada exists to address exactly that.
          </p>
          <p>
            So the question a province is really asking is narrower than the federal one. Express Entry
            asks whether you are likely to succeed economically anywhere in Canada. A province asks
            whether you fill a gap <em>it</em> has, and whether you will still be there years from now.
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW NOMINATION WORKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The mechanism"
          title="Enhanced and base — the two shapes a nomination takes"
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Prose>
              <p>
                <strong>Enhanced nomination</strong> runs through Express Entry. You must already hold
                a profile in the federal pool and be eligible for one of the federal programmes in your
                own right. The province nominates you inside that system, and an accepted nomination
                adds points to your federal ranking — enough that nominated candidates sit near the top
                of the pool. IRCC also holds invitation rounds open only to candidates who already hold
                a nomination. That makes an invitation likely, but IRCC still decides when to run a
                round and where the cut-off falls. The points value and the deadline for accepting a
                nomination are set by IRCC and published on its provincial nominees pages.
              </p>
              <p>
                <strong>Base nomination</strong> sits outside Express Entry. The province nominates
                you, and you then file a permanent residence application directly with IRCC on the
                paper-based provincial nominee route. It is open to people who do not meet Express
                Entry criteria. The two routes are processed differently and on different timelines;
                IRCC publishes current processing times for each, and those are the figures to check
                rather than anything quoted second-hand.
              </p>
              <p>
                Either way the two-decision structure is the same, and it is the thing to understand
                before anything else: the province endorses, the federal government decides. A
                nomination is not status, not a visa, and not a promise.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="How selection runs" title="Expression of interest, then invitation" />
            <Prose>
              <p>
                Alberta has generally run expression-of-interest pools for its worker and entrepreneur
                categories, though which categories use a pool is itself something the province
                revises. Where a pool applies, you submit a profile declaring your work, education,
                language ability and connection to the province. The profile is scored and ranked, and
                it sits in the pool.
              </p>
              <p>
                The province then draws from that pool — choosing whom to invite according to its own
                scoring and the sectors it is prioritising at that moment. This is the part applicants
                consistently misread. Meeting the published minimums makes you eligible to sit in a
                pool. It does not entitle you to an invitation, and a province is under no obligation
                to invite you at all. Some profiles sit and are never drawn.
              </p>
              <p>
                Some categories take a direct application instead. Which mechanism applies to which
                category is exactly the sort of thing Alberta revises, so read it there.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Categories, not a list"
          title="The kinds of stream a province runs"
          subtitle="These are the shapes provincial streams take. We do not name Alberta’s current streams here — they change, and a stale list is worse than none."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Why this page has no stream list">
            <p>
              Provincial streams are policy instruments, not fixed institutions. They open, pause
              intake mid-year, change their occupation lists, and are replaced outright — Ontario has
              withdrawn a long-established set of streams and rebuilt its framework from scratch,
              cancelling pending expressions of interest in the process. A page that names streams and
              criteria reads as authoritative for years after it stopped being true, and people make
              expensive decisions on it.
            </p>
            <p>
              Alberta publishes what is open, what is paused, and the criteria for each, on{' '}
              <a
                href="https://www.alberta.ca/alberta-advantage-immigration-program"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                its own programme page
              </a>
              . Check it on the day you act, not the day you plan.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How a provincial file actually runs"
          subtitle="Two governments, two decisions. The province’s endorsement is the middle of the process, not the end of it."
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

      {/* ===================== INTENT TO SETTLE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The expectation people underestimate"
          title="Intent to live in Alberta is a real requirement"
        />
        <Prose>
          <p>
            Provincial nomination exists so that immigration benefits the whole country and not only
            its largest cities. A province spends its limited allocation on people it expects to
            stay. That expectation is written into the process: you declare an intention to live and
            work in the province, and the province assesses whether that intention is credible.
          </p>
          <p>
            Credibility here is built from ordinary facts, not from a statement. Are you already
            working there. Did you study there. Do you have family or community there. Have you
            visited, researched employers, understood the winters, looked at housing and schools in the
            specific place you say you are moving to. An applicant who has never engaged with the
            province beyond ticking it on a form does not read as someone who intends to settle.
          </p>
          <p>
            Once you are a permanent resident, mobility rights apply and nobody is confined to a
            province. That is not the point. The point is what was true when you declared it. Declaring
            an intention you did not hold is misrepresentation, and misrepresentation carries a bar on
            future applications that outlasts the plan it was meant to serve.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Province shopping.</strong> Choosing whichever province currently looks like the
            softest target, with no tie to it and no intention of staying. It weakens the file at the
            provincial stage, it invites questions at the federal stage, and if it succeeds it lands
            you somewhere you did not want to be with a declaration on record that you did.
          </p>
          <p>
            <strong>Acting on a stale stream list.</strong> Building a plan — sometimes an expensive
            one — around a stream description found on a blog or an old page, only to find intake was
            paused or the stream no longer exists in that form.
          </p>
          <p>
            <strong>Buying a job offer.</strong> Employer-driven categories create a market in
            arranged offers. Paying for one is fraud, the employer is verified, and the consequence
            lands on you, not on the person who sold it.
          </p>
          <p>
            <strong>Declaring what you cannot document.</strong> Expression-of-interest profiles are
            self-declared and then scored. When the invitation arrives you must evidence every claim.
            Experience with no verifiable employer, or a role that does not match the duties you
            claimed, is where files collapse.
          </p>
          <p>
            <strong>Treating the nomination as the finish line.</strong> The federal application is a
            full assessment of admissibility, medicals, security and genuineness. People relax after a
            nomination and put a weak file in front of IRCC.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no connection to Alberta, think hard before starting">
            <p>
              The most common and most expensive mistake in provincial immigration is picking a
              province you have no relationship with because it appears easier. It rarely is easier,
              and it is structurally weaker: the province is selecting for people who will stay, and
              nothing in your file suggests you will.
            </p>
            <p>
              This route also tends not to suit people whose occupation is outside what the province is
              currently recruiting for — and that list moves with a commodity-linked economy. It does
              not suit people who expect a nomination to compensate for a fundamentally weak profile;
              it adds a decision-maker rather than removing one. And if your intention is really to
              live in a different part of Canada, an Alberta nomination is the wrong instrument, not a
              clever one.
            </p>
            <p>
              If you do have a genuine federal profile, the direct route may be the better
              conversation:{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>
              , or the{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial routes overview
              </Link>{' '}
              if another province fits you better. We would rather tell you on the first call that this
              does not fit than take a fee for a file that was never going to work, which is why we
              publish a{' '}
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

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Streams, criteria, fees and allocations"
        />
        <Prose>
          <p>
            Open streams, eligibility criteria, points grids, application fees, nomination allocations
            and processing information all change, sometimes at short notice and sometimes mid-year. We
            deliberately do not publish those here, because a figure that is right today is a liability
            on a page you might read next year.
          </p>
          <p>
            Alberta publishes the programme, its current streams and their status at{' '}
            <a
              href="https://www.alberta.ca/alberta-advantage-immigration-program"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              alberta.ca
            </a>
            , with a separate{' '}
            <a
              href="https://www.alberta.ca/aaip-updates"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              updates page
            </a>{' '}
            that is worth reading before you plan anything. The federal side of provincial nomination —
            how a nomination feeds into permanent residence, and what IRCC requires — is on the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC provincial nominees page
            </a>
            . Read the figures at the source, on the day you need them.
          </p>
        </Prose>
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
        eyebrow="Before you commit to a province"
        title="Find out whether a provincial route fits your profile at all"
        subtitle="Tell us your occupation, your experience, your language results and any real connection you have to Alberta. We will tell you honestly whether a provincial nomination is realistic — and if it is not, which route might be."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether an Alberta provincial nomination is realistic in my situation."
      />
    </>
  );
}
