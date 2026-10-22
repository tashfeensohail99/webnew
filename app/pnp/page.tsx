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
 * The PNP explainer.
 *
 * Deliberately lists NO current streams, draws, cut-offs, fees, point values or
 * openings, and no dated examples of them. Provinces redesign and pause streams
 * on weeks of notice, so any page that lists “current openings” quietly misleads
 * people into applying to a stream that no longer exists — and a dated example of
 * that goes stale itself. What does not go stale is the structure: who nominates,
 * who decides, and why enhanced and base are two completely different timelines.
 * Anything live belongs behind a link to the province's own site or IRCC.
 */
export const metadata: Metadata = {
  title: 'Provincial Nominee Programs (PNP)',
  description:
    'How Provincial Nominee Programs work: provinces nominate, IRCC decides. Enhanced versus base streams, and why a nomination is the strongest CRS advantage.',
  alternates: { canonical: '/pnp' },
};

const PAGE = 'pnp';

const PILLARS = [
  {
    icon: 'building' as const,
    kicker: 'The province',
    title: 'Nominates you',
    body: 'A province assesses you against its own labour-market and settlement priorities and issues a nomination certificate. That is a recommendation — not a visa.',
  },
  {
    icon: 'scale' as const,
    kicker: 'The federal government',
    title: 'Decides you',
    body: 'IRCC runs the permanent-residence application: admissibility, medicals, security, criminality and document verification. A nomination does not bind that decision.',
  },
  {
    icon: 'plane' as const,
    kicker: 'Enhanced streams',
    title: 'Run through Express Entry',
    body: 'You must already have an eligible Express Entry profile. The nomination attaches to it, and the federal stage runs on Express Entry’s processing track.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Base streams',
    title: 'Run on paper, separately',
    body: 'No Express Entry profile involved. You apply to IRCC directly after nomination, on a slower paper-based track. Same destination, very different journey.',
  },
];

const STEPS = [
  {
    title: 'Work out which province you actually fit',
    body: 'Provinces nominate for their own needs, not yours. Your occupation, your work history, whether you studied or worked in that province, and whether you have family there all change which doors are even open.',
  },
  {
    title: 'Establish whether an enhanced route exists for you',
    body: 'If you can qualify for an Express Entry programme on your own, an enhanced stream is almost always the better play. If you cannot, base streams may be the only honest option — with the timeline that comes with them.',
  },
  {
    title: 'Register interest, or apply, on the province’s terms',
    body: 'Many provinces run an expression-of-interest pool and invite from it periodically. Others accept direct applications in windows that open and close. Neither is a queue you can join whenever you like.',
  },
  {
    title: 'Provincial assessment and nomination',
    body: 'The province checks that you meet its criteria and that you genuinely intend to settle there. Provinces do refuse, and they do revoke nominations where the evidence does not hold up.',
  },
  {
    title: 'Federal permanent-residence application',
    body: 'With a nomination in hand you file with IRCC. Enhanced nominees go through Express Entry; base nominees file a paper application. This stage is where admissibility is actually assessed.',
  },
  {
    title: 'Decision',
    body: 'IRCC approves or refuses. Nothing at the provincial stage guarantees this, and no consultant can promise it. Anyone who tells you a nomination makes PR automatic is selling you something.',
  },
];

const FAQS = [
  {
    q: 'Why doesn’t this page list which streams are open right now?',
    a: (
      <>
        Because it would be wrong by the time you read it. Provinces pause, redesign and retire
        streams frequently, and a province can rebuild its whole framework at once. A page listing
        “current openings” gives you false confidence in a door that may already be shut. Each
        province publishes its own live list, and IRCC publishes the federal side — see{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/apply.html"
          className="font-semibold text-accent-500 link-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRCC’s list of provincial and territorial nominee programs
        </a>
        . We check those sources at the time we assess your file.
      </>
    ),
  },
  {
    q: 'Does a nomination guarantee permanent residence?',
    a: (
      <>
        No. A nomination is a province telling the federal government it wants you. IRCC still runs
        admissibility — medical, criminal, security, and the honesty of your documents — and can
        refuse. Nominations can also be revoked by the province if the basis for them changes.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How much does a nomination help in Express Entry?',
    a: (
      <>
        Substantially. Under an enhanced stream a confirmed nomination adds a fixed block of points
        to your Comprehensive Ranking System score — more than any other single factor a candidate
        can obtain. IRCC publishes the exact value, and the criteria it sits in, in the{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/criteria-comprehensive-ranking-system/grid.html"
          className="font-semibold text-accent-500 link-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CRS criteria grid
        </a>
        . What it does not do is guarantee an invitation or fix when one arrives: IRCC decides which
        rounds it runs and what score they land at, and those move. It improves your position
        materially — it does not make the outcome certain.
      </>
    ),
  },
  {
    q: 'Am I legally required to live in the province that nominated me?',
    a: 'The obligation is at the point of application: you must genuinely intend to live and work in that province, and provinces ask you to demonstrate it. Once you are a permanent resident, Canada’s mobility rights mean you cannot be physically confined to one province. But applying with no real intention to settle there is misrepresentation, and misrepresentation carries consequences far worse than a refusal — including a bar on future applications.',
  },
  {
    q: 'Can I apply to several provinces at once?',
    a: 'Some provinces allow it, some prohibit it outright, and the ones that allow it still expect a coherent story about where you intend to settle. Firing applications at every province simultaneously tends to weaken all of them, because your stated intention stops being credible.',
  },
  {
    q: 'What about Quebec?',
    a: 'Quebec is not a Provincial Nominee Program. Under its own agreement with the federal government it selects economic immigrants through its own system with its own criteria, including French-language requirements. If Quebec is your target, this page is not the route you want.',
  },
  {
    q: 'I have no Canadian work or study history and no job offer. Is a PNP realistic?',
    a: 'Sometimes, but be careful. Many streams are built around people the province can already see — graduates of its institutions, people already working there, people with an employer willing to support them. Without any of those connections your options narrow sharply, and the streams that remain are usually the slow, competitive ones. We would rather tell you that on the call than take a fee to file something weak.',
  },
  {
    q: 'What does the government charge?',
    a: (
      <>
        There are two layers: a provincial application or processing charge set by the province, and
        the federal permanent-residence fees set by IRCC. Both change, so we do not print figures
        here that you might rely on months later. The federal side is published on{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/fees.html"
          className="font-semibold text-accent-500 link-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRCC’s fee list
        </a>
        , and the provincial side on the nominating province’s own site. Our own charges are on our{' '}
        <Link href="/fees" className="font-semibold text-accent-500 link-underline">
          fees page
        </Link>
        , and we itemise the government figures for your specific stream in writing before you
        commit.
      </>
    ),
  },
];

export default function PnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial Nominee Programs"
        title={
          <>
            A province nominates you.{' '}
            <span className="text-gold-300">Ottawa decides you.</span>
          </>
        }
        subtitle={
          <>
            Provincial Nominee Programs are the widest set of doors into Canadian permanent
            residence — and the least understood. Two governments are involved, and knowing which
            one does what is the difference between a route that fits you and a long stretch spent on
            the wrong one.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Find the right province — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE TWO-GOVERNMENT STRUCTURE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The structure"
          title="Two governments, two separate decisions"
          subtitle="Almost every PNP misunderstanding comes from collapsing these into one. They are not one."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <FeatureCard key={p.title} icon={<Icon name={p.icon} />} kicker={p.kicker} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Prose>
            <p>
              Canada’s provinces and territories each hold an agreement with the federal government
              that lets them nominate a set number of economic immigrants a year, chosen against
              their own priorities. A province that needs healthcare workers builds streams around
              healthcare workers. A province losing population from its rural towns builds streams
              that require you to settle in one.
            </p>
            <p>
              What a province cannot do is admit you to Canada. Nomination is a recommendation with
              real weight — but immigration admissibility is federal, and IRCC assesses it
              independently at the second stage. You need both to succeed. Either one can end it.
            </p>
            <p>
              Quebec sits outside this entirely, selecting under its own agreement, and one
              territory does not operate a nominee programme at all. Everywhere else, the two-stage
              shape above holds.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== ENHANCED VS BASE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The distinction that matters most"
          title="Enhanced versus base"
          subtitle="Same nomination. Radically different timelines. If you learn one thing on this page, learn this."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Enhanced streams</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Aligned to Express Entry</h3>
            <div className="mt-4 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                An enhanced stream requires you to already be eligible for, and in, the federal
                Express Entry pool on your own merits. The province nominates you inside that
                system.
              </p>
              <p>
                The nomination then adds more to your ranking score than any other factor available
                to a candidate, which moves you a long way up the pool. It does not, however,
                schedule your invitation: IRCC controls which rounds it runs and where they land.
                Its{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html"
                  className="font-semibold text-accent-500 link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  rounds-of-invitations page
                </a>{' '}
                is the live record.
              </p>
              <p>
                From there the federal stage runs on Express Entry’s processing track, which is
                generally the faster of the two. IRCC publishes current times in its{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
                  className="font-semibold text-accent-500 link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  processing-times tool
                </a>
                .
              </p>
            </div>
          </div>

          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Base streams</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Outside Express Entry, on paper</h3>
            <div className="mt-4 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                A base stream does not touch Express Entry. You do not need a profile, and for many
                people that is the entire point — base streams are how someone who cannot meet
                Express Entry’s own criteria still reaches permanent residence.
              </p>
              <p>
                After nomination you file a paper-based permanent-residence application directly with
                IRCC. It is a different, slower queue, and it does not benefit from Express Entry’s
                service standards.
              </p>
              <p>
                Base is not a lesser outcome. The permanent residence at the end is identical. What
                differs is how long you live with the uncertainty.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Callout title="Why this decides your strategy">
            <p>
              If you can qualify for Express Entry independently, an enhanced stream is almost always
              the stronger route — you keep the federal option alive while a nomination compounds it.
              If you cannot, chasing enhanced streams is chasing a door that will not open for you,
              and the honest answer is to build a base-stream case and plan for the longer timeline.
              Working that out correctly at the start is worth more than anything that happens later.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW IT RUNS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it runs"
          title="From choosing a province to a decision"
          subtitle="Six stages. The first two determine almost everything that follows."
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

      {/* ===================== INTENTION TO SETTLE ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The obligation people underestimate"
              title="You have to actually mean it"
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Every province nominates on the understanding that you intend to live and work
                there. They ask you to demonstrate it — through ties, a job, study history, family,
                a settlement plan, or a business you are genuinely establishing in that province.
              </p>
              <p>
                Some applicants treat a smaller province as a back door: nominate there, land, then
                move to Toronto or Vancouver. Understand what that is. Once you hold permanent
                residence, Canada’s mobility rights mean you cannot be physically held in one
                province. But stating an intention you never held is misrepresentation at the point
                of application.
              </p>
              <p>
                The consequence of misrepresentation is not a refusal you can refile after. It is a
                finding that follows you and bars further applications for years. We will not build a
                file on an intention you do not have.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="What provinces actually look at"
              title="What makes intention credible"
            />
            <ul className="mt-6 space-y-4">
              {[
                ['A connection that predates the application', 'Study, work, family or business already in that province — the strongest evidence there is.'],
                ['An occupation the province is asking for', 'Streams are built around specific labour needs. Fitting one is not a coincidence you can manufacture.'],
                ['A settlement plan that survives questions', 'Where you would live, how you would work, what you have researched. Vague answers read as vague intentions.'],
                ['Consistency across everything you file', 'Your provincial case and your federal case are read by different officers. They must tell the same story.'],
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

      {/* ===================== WHO IT DOESN'T SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Being straight with you"
          title="Who a PNP does not suit"
        />
        <div className="mt-8">
          <Callout title="If any of these is you, say so on the call">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You have already decided you are moving to Toronto or Vancouver regardless. A
                nomination from a province you have no intention of living in is not a strategy — it
                is a misrepresentation risk you are taking on knowingly.
              </li>
              <li>
                You need to be in Canada soon. A PNP is a permanent-residence route with two
                sequential government stages. If your need is to work in Canada in the near term, a{' '}
                <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
                  work-permit route
                </Link>{' '}
                is a different conversation.
              </li>
              <li>
                You are waiting for someone to name a province where you will definitely be selected.
                Nobody can. Streams open, close and change criteria, and provinces select against
                their needs, not your preference.
              </li>
              <li>
                Quebec is your destination. It selects under its own system, not a nominee programme.
              </li>
              <li>
                You have a refusal or an admissibility problem in your history that has not been
                addressed. That is a federal issue, and a nomination does not solve it. Deal with{' '}
                <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
                  the refusal
                </Link>{' '}
                first.
              </li>
            </ul>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHY THERE'S NO STREAM LIST ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="A deliberate omission"
          title="Why we don’t publish a list of open streams"
        />
        <div className="mt-8 max-w-3xl">
          <Prose>
            <p>
              Provincial streams change constantly. They pause when allocations run low, reopen on
              short notice, get retired entirely, and occasionally a province rebuilds its whole
              framework at once. Criteria move with them.
            </p>
            <p>
              So a page listing “streams currently open” is a page that is quietly wrong most of the
              time — and the harm is not abstract. Someone reads a stale list, builds a plan around a
              stream that closed two quarters ago, and loses months. We would rather this page stay
              true.
            </p>
            <p>
              Current openings, criteria and government charges live on each province’s own website
              and on IRCC’s. Those are the only sources worth relying on for a live figure, and they
              are where we check when we assess your file — not against a page we wrote once. Start
              at{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/apply.html"
                className="font-semibold text-accent-500 link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                IRCC’s directory of provincial and territorial nominee programs
              </a>
              , which links to each province’s own stream list.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Straight answers"
          title="The questions people actually ask"
        />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Find out which province fits"
        title="Get an honest read on whether a PNP is your route"
        subtitle="Tell us your occupation, your work history and any connection you have to Canada, and we’ll tell you which provinces are realistically open to you — enhanced or base — and if none of them are, what actually is."
        page={PAGE}
        waMessage="Hi, I’d like to know whether a Provincial Nominee Program is a realistic route for me."
      />
    </>
  );
}
