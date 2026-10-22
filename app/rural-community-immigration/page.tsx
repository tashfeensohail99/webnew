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
 * Rural and northern immigration — community-driven routes.
 *
 * The job of this page is to explain a structure that is genuinely unusual:
 * a local community sits between you and the federal decision. And to say
 * plainly that these routes are built around settling in a small place, which
 * is exactly why they suit a narrow group of people and no one else.
 *
 * Participating communities, their occupation lists and their local criteria
 * are deliberately not named — they are set locally and revised, and printing
 * them here would be wrong within months.
 */
export const metadata: Metadata = {
  title: 'Rural and Northern Immigration Routes to Canada',
  description:
    'How community-driven immigration works: a job offer from a designated employer, a community recommendation, then a federal PR application.',
  alternates: { canonical: '/rural-community-immigration' },
};

const PAGE = 'rural-community-immigration';

const WHO_DOES_WHAT = [
  {
    icon: 'building' as const,
    kicker: 'The community',
    title: 'Designates employers',
    body: 'Each participating community runs a local economic development body that decides which local employers may hire through the route, and which occupations the community actually needs filled.',
  },
  {
    icon: 'doc' as const,
    kicker: 'A designated employer',
    title: 'Makes the job offer',
    body: 'The offer must come from an employer the community has designated, for work in that community. An offer from anywhere else does not open this route.',
  },
  {
    icon: 'check' as const,
    kicker: 'The community again',
    title: 'Recommends the candidate',
    body: 'The community assesses whether the offer is genuine, whether you meet its local criteria, and whether you and your family are realistically going to stay. If satisfied, it issues a recommendation.',
  },
  {
    icon: 'shield' as const,
    kicker: 'IRCC',
    title: 'Decides permanent residence',
    body: 'The recommendation is not the decision. A federal officer separately assesses the federal requirements, your admissibility, medicals and documents.',
  },
];

const STEPS = [
  {
    title: 'Check the community is participating',
    body: 'These are pilot programmes with a defined list of participating communities, set federally and revised over time. If a place is not on the current list, there is no route there under this heading, whatever a recruiter says.',
  },
  {
    title: 'Find a designated employer with a real vacancy',
    body: 'Participating communities publish which employers are designated and, usually, the occupations they prioritise. The vacancy has to be real, in that community, and one the community wants filled.',
  },
  {
    title: 'Secure a genuine job offer',
    body: 'A written offer for the role, on terms the community and IRCC will both scrutinise. Ordinary employer-driven checks apply: does the wage match the occupation, is the employer a real operating business.',
  },
  {
    title: 'Meet the federal requirements in your own right',
    body: 'Work experience of the kind the route calls for, language ability tested by an approved test, education assessed where required, and funds to settle unless you are already working in Canada.',
  },
  {
    title: 'Apply to the community for a recommendation',
    body: 'The community applies its own criteria on top of the federal ones — priority occupations, ties to the area, and evidence you intend to live there. This is a separate application with its own local process.',
  },
  {
    title: 'Apply to IRCC for permanent residence',
    body: 'With the recommendation in hand you file the federal permanent residence application. A separate employer-specific work permit exists for people at this stage so they can start the job while the PR application is assessed, but it has its own conditions and is not automatic — check the current criteria with IRCC before counting on it.',
  },
];

const FAQS = [
  {
    q: 'Can I apply without a job offer?',
    a: 'No. These routes begin with an offer from an employer the community has designated. There is no expression of interest, no pool and no draw you can enter on your profile alone. If you have no Canadian employer, the honest starting point is a different route.',
  },
  {
    q: 'Is the community recommendation the same as permanent residence?',
    a: 'No. It is one required document in a federal application. A recommendation does not commit IRCC to approving you, and it does not cure a problem with admissibility, medicals, documents or the genuineness of the offer.',
  },
  {
    q: 'Can I move to Toronto or Vancouver after I land?',
    a: 'Permanent residents have mobility rights once status is granted, but that is not the point. You are assessed on your intention to live in the community, and stating an intention you do not hold is misrepresentation — which carries a bar on future applications and can cost you the status itself. If your actual plan is a large city, apply through a route built for that.',
  },
  {
    q: 'Which communities are participating, and what do they require?',
    a: 'The list of participating communities is set federally, and each community sets its own priority occupations and local criteria. Both change. We do not publish them here because a list that is right today misleads someone reading next year. IRCC publishes the current communities, and each community publishes its own criteria and designated employers on its own site.',
  },
  {
    q: 'How is this different from a provincial nominee programme?',
    a: 'A provincial nominee programme is run by a province and can nominate for anywhere in that province, often without a specific small-town tie. These routes are run at the level of a single community, which does its own screening and issues its own recommendation. The gatekeeper is local, and the settlement expectation is much narrower.',
  },
  {
    q: 'How is it different from the Atlantic route?',
    a: 'Both are employer-driven and regionally anchored, but the Atlantic route is province-wide across the Atlantic provinces and turns on a designated employer plus an endorsement from the province — which involves a settlement plan — rather than a single community recommending you. Which one applies depends entirely on where the employer is. Confirm the current requirements for either with IRCC and the relevant province or community before you rely on the comparison.',
  },
  {
    q: 'Are these programmes permanent?',
    a: 'They are pilots. Pilots run for a defined period, can be extended, replaced or allowed to expire, and an earlier rural pilot has already been succeeded by a newer one. Build your plan around the offer and the community being current at the time you apply, not around a programme name you read about years ago.',
  },
  {
    q: 'Can you guarantee a recommendation?',
    a: 'No. Two separate bodies decide — a local community and a federal officer — and neither decision is ours. What we can do is tell you before you spend money whether your occupation, your experience and your genuine willingness to live in a small community make this realistic.',
  },
];

export default function RuralCommunityImmigrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Rural and northern routes"
        title={
          <>
            A community decides first,{' '}
            <span className="text-gold-300">then Ottawa</span>
          </>
        }
        subtitle={
          <>
            Canada’s rural and northern routes let a participating community recommend people who
            have a job offer there and genuinely intend to settle. They are a route to applying for
            permanent residence — suited to a narrow group of people, and no one else.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IT IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The idea behind it"
          title="Immigration designed around a place, not a points score"
        />
        <Prose>
          <p>
            Most of Canada’s economic immigration is national or provincial. You are ranked against
            other candidates, or nominated by a province, and where exactly you end up living is
            largely your own affair. Rural and northern routes invert that. They exist because small
            and remote communities lose working-age people to the big cities and cannot fill jobs
            locally, and because those communities argued they were better placed than a federal
            officer to judge who would actually stay.
          </p>
          <p>
            So the structure is unusual. A participating community — through a local economic
            development organisation — is given a role in the immigration process. It designates
            which local employers may hire through the route. It sets priority occupations reflecting
            what the local economy is short of. It reviews candidates who hold an offer from one of
            those employers, and it issues a recommendation to the ones it wants.
          </p>
          <p>
            Only then does the federal application begin. The recommendation is a required document,
            not a decision. Immigration, Refugees and Citizenship Canada assesses the federal
            requirements and your admissibility independently, and can refuse an application the
            community was happy with.
          </p>
        </Prose>
      </Section>

      {/* ===================== FOUR PARTIES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Who decides what"
          title="Two gatekeepers, in sequence"
          subtitle="Understanding which body is assessing what — and in what order — is where most of the wasted effort we see on these files could have been avoided."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_DOES_WHAT.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="The employer has to be designated — not just willing">
            <p>
              A Canadian employer being keen to hire you is not enough here. The employer must be one
              the community has designated for this route, in that community. An offer from an
              undesignated employer, or from a business in a city outside the programme, does not
              open this door — it points you towards an{' '}
              <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
                LMIA-based work permit
              </Link>{' '}
              or a different route entirely.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How the route runs, in order"
          subtitle="Each step gates the next. Skipping ahead — for example paying for document preparation before there is a designated employer — is how money gets wasted."
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

      {/* ===================== WHAT IS ASSESSED ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What is being tested"
              title="Federal requirements, in kind"
            />
            <Prose>
              <p>
                The federal side of these routes looks broadly like other economic programmes: paid
                work experience of a relevant kind, or in some cases a recent Canadian credential
                obtained in the community instead; language ability demonstrated through an approved
                test; education assessed against Canadian standards where the occupation calls for
                it; and enough money to establish yourself and your family, unless you are already
                working in Canada.
              </p>
              <p>
                The thresholds attached to each of those — the level of language required for a given
                occupation, the amount of settlement funds, the length of work experience, the fees —
                are set federally and revised. We do not print them here. IRCC publishes the{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  current eligibility requirements on canada.ca
                </a>
                , and those are the ones that will be applied to your file.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What the community weighs" title="The local layer" />
            <ul className="mt-6 space-y-4">
              {[
                ['Priority occupation', 'Whether your occupation is one the community has identified as short-staffed. A perfectly good job may simply not be on its list.'],
                ['Genuineness of the offer', 'Whether the designated employer’s vacancy is real, ongoing, and on the terms stated.'],
                ['Ability to do the job', 'Whether your documented experience and credentials actually match the role you have been offered.'],
                ['Intention to settle', 'Ties to the area, whether you have visited, what your family needs, and whether your plan holds together as a life rather than a landing.'],
                ['Local criteria of its own', 'Communities may add their own requirements and their own application process. These are set locally and change.'],
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

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Paying for a “rural job offer”.</strong> The single most common approach we are
            asked about, and the most expensive. A designated employer hires because they need the
            work done. An offer bought through an intermediary is either invented, or is an employer
            being induced into arrangements that will not survive scrutiny — and misrepresentation
            lands on you, not on the person who sold it.
          </p>
          <p>
            <strong>An offer from the wrong employer or the wrong place.</strong> People secure a
            genuine offer from a Canadian business and only then discover the employer is not
            designated, or the town is not participating. The offer may still be useful — but through
            a different route.
          </p>
          <p>
            <strong>An occupation outside the community’s priorities.</strong> Communities publish
            what they are short of. Strong experience in an occupation the community has not
            prioritised does not become eligible because the applicant is otherwise well qualified.
          </p>
          <p>
            <strong>Treating the recommendation as the finish line.</strong> A recommendation is one
            document. Weak proof of experience, an unexplained gap, a document you did not personally
            verify, or an admissibility issue will still end the federal application.
          </p>
          <p>
            <strong>A settlement plan nobody believes.</strong> Assessors read intention through
            evidence: whether you have researched the place, what your spouse would do, whether you
            have looked at schools and winter and travel. An application that says the right words
            and shows no thought behind them reads exactly as it is.
          </p>
          <p>
            <strong>Assuming a pilot will still be there.</strong> These are time-limited programmes.
            An earlier rural pilot has already been succeeded, and community lists are revised.
            Confirm what is current at the point you apply, not at the point you first read about it.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If your real plan is Toronto or Vancouver, this is not your route">
            <p>
              The entire design of these programmes is retention. A community screens you because it
              wants people who will still be there years from now — running a business, raising
              children, filling a job it cannot fill locally. Applying with the private intention of
              moving to a big city as soon as status is granted is not a clever strategy. It is a
              misrepresentation of your intention, it carries a bar on future applications, and it is
              precisely the pattern communities and officers are looking for.
            </p>
            <p>
              It also does not suit people with no Canadian employer at all, people whose occupation
              is not on a community’s priority list, or people who have never seriously considered
              what living in a small, cold, remote town means for a spouse’s career, for schooling,
              for medical access, or for being far from an established Pakistani community. Those are
              real considerations, and they are better faced now than after landing.
            </p>
            <p>
              If a large city is what you want, say so and we will look at the routes built for that
              —{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>{' '}
              or a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee programme
              </Link>
              . If the Atlantic provinces are the fit, the{' '}
              <Link
                href="/atlantic-immigration-program"
                className="font-semibold text-accent-500 link-underline"
              >
                Atlantic route
              </Link>{' '}
              works on similar employer-driven lines over a wider area. We would rather tell you on
              the first call that this does not fit than take a fee for a file that was never going
              to work, which is why we publish a{' '}
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
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Communities, occupations, thresholds and fees"
        />
        <Prose>
          <p>
            Which communities participate, which employers they have designated, which occupations
            they prioritise, the local application processes, the federal language and funds
            thresholds and the fees are all subject to change — some of them locally, at short notice.
            We deliberately do not reproduce them here, because a figure or a list that is correct
            today becomes a liability on a page you might read next year.
          </p>
          <p>
            IRCC publishes the current programme requirements and the list of participating
            communities on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and each participating community publishes its own criteria, priority occupations and
            designated employers on its own website. Read both at the source, on the day you need
            them.
          </p>
        </Prose>
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
        eyebrow="Before you pay anyone for a job offer"
        title="Find out whether a community route is realistic for you"
        subtitle="Tell us your occupation, your experience, and whether you would genuinely live in a small Canadian town for the long term. We will tell you honestly whether this route fits — and if it does not, which one might."
        page={PAGE}
        waMessage="Hi, I’d like to know whether a rural or community-based immigration route is realistic in my situation."
      />
    </>
  );
}
