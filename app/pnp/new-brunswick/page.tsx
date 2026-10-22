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
 * New Brunswick Provincial Nominee Program.
 *
 * Deliberately describes KINDS of stream rather than named streams. Provincial
 * stream lists change without notice, and a page that names them is wrong within
 * months. The durable content is: what the province is trying to solve, how a
 * nomination process works structurally, and the intent-to-settle expectation.
 */
export const metadata: Metadata = {
  title: 'New Brunswick Provincial Nomination (NBPNP)',
  description:
    'How New Brunswick’s nominee programme works: expression of interest, enhanced versus base nomination, the francophone dimension, and the intent to settle.',
  alternates: { canonical: '/pnp/new-brunswick' },
};

const PAGE = 'pnp-new-brunswick';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Employer-driven',
    title: 'You already have a job offer',
    body: 'The most common shape of a provincial stream. A New Brunswick employer offers you a permanent, full-time role, and the province nominates you because that employer could not fill it locally. The offer is the foundation — without one, most of the province’s capacity is closed to you.',
  },
  {
    icon: 'doc' as const,
    kicker: 'In-demand occupation',
    title: 'Your occupation is on a priority list',
    body: 'Some streams select for occupations the province has decided it needs — typically health care, education, construction trades, trucking and food processing. These lists are revised, sometimes annually, and an occupation that qualified last year may not this year.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Francophone',
    title: 'You work and live in French',
    body: 'New Brunswick is Canada’s only officially bilingual province, with a long-established Acadian French-speaking community. Sustaining that community is an explicit provincial priority, so French ability is not a decorative extra here — it can be the difference between a competitive profile and an ignored one.',
  },
  {
    icon: 'star' as const,
    kicker: 'Graduate',
    title: 'You studied in the province',
    body: 'Provinces reserve capacity for people who already studied there, on the reasoning that they have housing, a network and a reason to stay. Which institutions and which credentials count is defined narrowly and changes.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Entrepreneur',
    title: 'You will start or buy a business',
    body: 'Business streams involve a net worth test, a business plan, an exploratory visit and usually a period on a work permit before nomination is confirmed. They are slower and more document-heavy than most people expect.',
  },
  {
    icon: 'plane' as const,
    kicker: 'Federal, not provincial',
    title: 'The Atlantic route sits alongside',
    body: 'New Brunswick is one of the four Atlantic provinces covered by a separate federal-provincial programme run through designated employers. It is not part of the nominee programme, and for some employer-backed candidates it is the more direct route.',
  },
];

const STEPS = [
  {
    title: 'Check what is actually open',
    body: 'Before anything else, read the province’s own programme page on the day you are applying. Streams open, pause, fill their allocation and close. A stream described on a consultant’s website — including a page written months ago — may no longer exist.',
  },
  {
    title: 'Submit an expression of interest',
    body: 'For most streams you do not apply directly. You submit a profile through the province’s portal describing your age, language ability, education, work experience, any New Brunswick job offer and your connections to the province.',
  },
  {
    title: 'Sit in the candidate pool',
    body: 'Your profile is scored against the province’s selection factors and held in a pool for a limited validity period. Nothing is owed to you while you sit there. If your circumstances change — new language results, a new offer — you update the profile.',
  },
  {
    title: 'Receive an invitation, or do not',
    body: 'The province invites from the pool according to its labour market needs and its remaining federal allocation. Meeting the published criteria for a stream does not entitle you to an invitation, and the province says so plainly.',
  },
  {
    title: 'File the provincial application',
    body: 'An invitation gives you a fixed window to submit a complete application with evidence: identity, credentials, employment history, language results, funds, and material showing genuine intent to settle in the province. Incomplete files are the ordinary reason applications fail at this stage.',
  },
  {
    title: 'Nomination, then the federal decision',
    body: 'If nominated, you still apply to IRCC for permanent residence. The province assesses economic fit; the federal government assesses admissibility — medical, criminal, security and honesty. A nomination does not bind IRCC.',
  },
];

const FAQS = [
  {
    q: 'Which New Brunswick streams are open right now, and what are the criteria?',
    a: 'We deliberately do not list them here. Provincial streams open, pause and are replaced, and a list on a consultancy page is out of date faster than anyone updates it. The province publishes what is currently open, with the current criteria, on its own immigration site — that is the only list worth reading.',
  },
  {
    q: 'What is the difference between an enhanced and a base nomination?',
    a: 'An enhanced nomination is issued to someone who already has a profile in the federal Express Entry system. Once the nomination is accepted in the profile, it adds a large fixed points award to the comprehensive ranking score — IRCC publishes the current figure. What that award does is make you competitive; it does not schedule you an invitation. IRCC runs separate rounds restricted to candidates who already hold a nomination, and it decides when to hold them, how many to invite and what the cut-off is. A base nomination is for candidates outside Express Entry, and leads to a permanent residence application processed outside that system. IRCC publishes current processing times for both. Which one you are eligible for depends on whether you meet the federal criteria for an Express Entry programme at all.',
  },
  {
    q: 'Do I need a job offer from a New Brunswick employer?',
    a: 'For most of the province’s capacity, in practice yes. Small provinces nominate mainly to fill identified vacancies, so employer-backed candidates dominate. There are usually some routes that do not require an offer, but they are narrower and more competitive than people assume.',
  },
  {
    q: 'Can I get nominated by New Brunswick and then move to Toronto?',
    a: 'Nomination is granted on the basis that you intend to live and work in the province. You are asked to demonstrate that intent, and misrepresenting it is misrepresentation like any other — with the same consequences for future applications. Once you hold permanent residence your mobility rights are constitutional, but that is not a plan we will help you build, and provinces have become markedly more careful about assessing intent.',
  },
  {
    q: 'Does French really matter?',
    a: 'In New Brunswick it matters more than in most provinces. It is Canada’s only officially bilingual province and francophone immigration is an explicit part of how it maintains that character. If you have functional French, get it tested — it can change which routes are realistically available to you, provincially and federally.',
  },
  {
    q: 'How long does a New Brunswick nomination take, and what does it cost?',
    a: 'The province publishes its current fees and service standards, and IRCC publishes the federal ones separately. Both change. We will not print figures here that you might rely on a year from now.',
  },
  {
    q: 'Should I pick New Brunswick because it looks easier than Ontario?',
    a: 'That reasoning has cost people a great deal of money. A province you have no connection to will read as a province you have no connection to, and the intent-to-settle assessment is where those files come apart. Pick a province because your occupation, your language and your realistic employment prospects point there.',
  },
];

export default function NewBrunswickPnpPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            New Brunswick nominates people it believes will{' '}
            <span className="text-gold-300">actually stay</span>
          </>
        }
        subtitle={
          <>
            A small, ageing, officially bilingual province with real vacancies it cannot fill locally.
            Understanding what it is trying to solve tells you more about your chances than any list
            of streams — which is why this page does not print one.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT THE PROVINCE WANTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Start here"
          title="What New Brunswick is trying to solve"
        />
        <Prose>
          <p>
            Every province nominates for its own reasons, and those reasons shape who gets selected far
            more than any published points table does. New Brunswick’s reasons are demographic before
            they are economic.
          </p>
          <p>
            It is one of Canada’s smaller provinces by population, and an older one — the current
            population and age-structure figures are published by{' '}
            <a
              href="https://www.statcan.gc.ca/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Statistics Canada
            </a>
            , and we would rather you read them there than take a number from us. Its economy is
            not concentrated in one metropolitan centre — it runs across several mid-sized cities and a
            great many small communities, with forestry, fisheries and seafood processing, food
            manufacturing, trucking and logistics, construction, and a growing information technology
            sector alongside the health care and education systems that every ageing population strains.
          </p>
          <p>
            Two things follow from that. First, the province is looking for people who will fill
            identified vacancies, often outside the largest city, rather than for generalists with
            strong paper credentials. Second, it is looking for people who will still be there in ten
            years. Retention is the problem it is actually trying to solve, and it selects accordingly.
          </p>
          <p>
            New Brunswick is also Canada’s only officially bilingual province, home to a long-settled
            Acadian French-speaking community. Maintaining the francophone share of its population is a
            stated provincial priority, not a courtesy. If you speak French to a working standard, that
            is materially relevant here in a way it is not in most of the country.
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW NOMINATION WORKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The structure"
          title="Enhanced and base nomination"
          subtitle="This distinction survives every reshuffle of stream names, so it is worth understanding properly."
        />
        <Prose>
          <p>
            A provincial nomination is not permanent residence. It is a province telling the federal
            government that it wants you. The federal government still decides.
          </p>
          <p>
            <strong>Enhanced nomination</strong> attaches to a profile already in the federal Express
            Entry system. Once accepted in the profile, it adds a large fixed award to your
            comprehensive ranking score — the current figure is published by{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/criteria-comprehensive-ranking-system.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC
            </a>
            . Be clear about what that award does and does not do. It makes you competitive; it does not
            book you an invitation. Invitations to nominated candidates are issued through rounds that
            IRCC restricts to nominees, and IRCC alone decides when to hold one, how many candidates to
            invite and where the cut-off falls. It is also only available if you independently qualify
            for one of the federal Express Entry programmes.
          </p>
          <p>
            <strong>Base nomination</strong> is for candidates who are not in Express Entry. It leads to
            a permanent residence application processed outside that system, on its own timeline — IRCC
            publishes current processing times for each, and they move. For people whose age, language
            or education keeps them out of Express Entry, a
            base nomination is often the only realistic permanent residence route in existence — which
            is precisely why base streams attract far more applicants than they have capacity for.
          </p>
          <p>
            If you do not know which of the two applies to you, that is the first thing to establish. It
            changes the entire shape of the plan. Our{' '}
            <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
              CRS calculator
            </Link>{' '}
            gives you a starting read on the Express Entry side, and{' '}
            <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
              the Express Entry overview
            </Link>{' '}
            explains the federal programmes a nomination would sit on top of.
          </p>
        </Prose>
      </Section>

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Categories, not a list"
          title="The kinds of stream a province runs"
          subtitle="These categories are stable. The specific streams inside them are not — read the province’s own page for what exists today."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Why we will not list the current streams">
            <p>
              Provincial stream frameworks are rebuilt with little warning. Streams are renamed,
              restructured, paused mid-intake or withdrawn, and provinces are not obliged to give notice
              before doing it. A page that names streams and criteria is not merely stale when that
              happens; it is actively misleading, because it reads as current.
            </p>
            <p>
              So we describe the categories, which last, and send you to the source for the specifics.
              If any adviser quotes you stream criteria without opening the province’s own site in front
              of you, treat that as a warning about the adviser.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How the process runs, in order"
          subtitle="Two governments, two decisions. Neither is ours to make."
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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The expectation people underestimate"
              title="Intent to settle is assessed, not assumed"
            />
            <Prose>
              <p>
                A province nominates because it wants a resident. That is the whole bargain. So the
                question of whether you genuinely intend to live in New Brunswick is not a formality at
                the end of the form — it is one of the things being assessed.
              </p>
              <p>
                What supports it is ordinary and concrete: a job offer from an employer there, family or
                a spouse’s family in the province, study or previous work there, a documented
                exploratory visit, professional licensing steps taken with the relevant New Brunswick
                regulator, a housing search that looks real. What undermines it is equally ordinary — a
                profile whose every connection points at Toronto or Vancouver, and a New Brunswick
                address that appeared the week the application did.
              </p>
              <p>
                Stating an intention you do not hold is misrepresentation. It carries a bar on future
                applications, and it is not a risk worth taking on a route you were treating as a
                shortcut in the first place.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What is weighed" title="The selection factors, in kind" />
            <ul className="mt-6 space-y-4">
              {[
                ['Age', 'Weighted toward applicants with more working years ahead of them.'],
                ['Official language ability', 'English, French, or both — tested, not self-declared. French carries real weight in this province.'],
                ['Education', 'Assessed against Canadian equivalence, with regulated professions requiring separate licensing.'],
                ['Work experience', 'Continuity and relevance to the occupation you are claiming, evidenced by employer letters that match your claims.'],
                ['Employment in the province', 'A genuine offer from a New Brunswick employer carries substantial weight, and opens routes that are closed without one. How it is weighted is set by the province.'],
                ['Adaptability and connection', 'Prior study, prior work, family in the province, an exploratory visit — anything showing you will stay.'],
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
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Applying to a stream that closed.</strong> People arrive with a printout from a
            website describing a stream that no longer exists, having already paid someone to prepare
            for it. Check the province’s live page first, every time.
          </p>
          <p>
            <strong>Province-shopping.</strong> Choosing New Brunswick because it looks less competitive
            than Ontario, with no occupation match, no employer and no French. This is the most common
            and most expensive mistake on this route.
          </p>
          <p>
            <strong>A job offer that will not survive scrutiny.</strong> An offer bought from an agent,
            or from an employer who has never met you, fails on verification and takes the file with it.
            Provinces contact employers.
          </p>
          <p>
            <strong>Untested French.</strong> People with usable French never sit an approved test, and
            so it counts for nothing. In this province specifically, that is a wasted advantage.
          </p>
          <p>
            <strong>Assuming a nomination is permanent residence.</strong> It is not. The federal
            decision on admissibility, medicals and honesty is separate, and a nomination does not carry
            you through it. A previous refusal in your history does not disappear because a province
            said yes — see{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              GCMS notes
            </Link>{' '}
            if you have one.
          </p>
          <p>
            <strong>Letting the expression of interest go stale.</strong> A profile sits in the pool for
            a limited period and then lapses. New language results or a new offer are only counted if
            you update the profile.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who New Brunswick does not suit" />
        <div className="mt-8">
          <Callout title="If you have no connection to the province, this is probably the wrong door">
            <p>
              New Brunswick does not suit someone choosing it purely because it appears easier than a
              larger province. Nominating provinces expect genuine intent to settle, they assess it, and
              a profile with no employer, no family, no study history and no language fit there does not
              become stronger for being pointed at a smaller province.
            </p>
            <p>
              It also tends not to suit people whose occupation is urban and specialised in a way the
              provincial economy does not support, people who are unwilling to live outside a large
              metropolitan area, and people who need a fast answer — nomination adds a provincial stage
              before the federal one begins.
            </p>
            <p>
              And it does not suit anyone whose plan quietly depends on relocating elsewhere after
              landing. We will not build a file on that premise.
            </p>
            <p>
              If this is not your route, others may be.{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                Compare the provincial programmes
              </Link>
              ,{' '}
              <Link
                href="/atlantic-immigration-program"
                className="font-semibold text-accent-500 link-underline"
              >
                look at the Atlantic route
              </Link>{' '}
              if you have an employer in the region, or{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                assess Express Entry on its own merits
              </Link>
              . Neither the provincial nor the federal decision is ours to make, which is why we publish
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

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Where the current details live" title="Streams, criteria, fees and draws" />
        <Prose>
          <p>
            Open streams, selection criteria, points values, fees, allocation levels and invitation
            rounds all change, and we do not reproduce them here. A figure that is correct today becomes
            a liability on a page you might read next year.
          </p>
          <p>
            The province publishes what is currently open, and the criteria attached to it, on{' '}
            <a
              href="https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              the Government of New Brunswick immigration site
            </a>
            . The federal side of provincial nomination — how a nomination feeds into a permanent
            residence application — is published by IRCC on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            . Read both at the source, on the day you need them.
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
        title="Find out whether New Brunswick is a real fit or a wishful one"
        subtitle="Tell us your occupation, your language ability, and what — if anything — connects you to Atlantic Canada. We will tell you honestly whether this route is worth pursuing, and which province, if any, actually fits your profile."
        page={PAGE}
        waMessage="Hi, I’d like to know whether a New Brunswick provincial nomination is realistic in my situation."
      />
    </>
  );
}
