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
  Prose,
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * Express Entry — the system, not a programme.
 *
 * The single most common misunderstanding we hear on calls is that Express Entry
 * is something you "apply for". It isn't. It's the intake system that manages
 * three federal programmes, ranks everyone who qualifies, and invites from the
 * top. This page is written to fix that misunderstanding first, because almost
 * every bad decision downstream follows from it.
 */
export const metadata: Metadata = {
  title: 'Express Entry',
  description:
    'Express Entry is a system for three federal programmes, not one you apply to. How the pool, the CRS ranking and the invitation actually work.',
  alternates: { canonical: '/express-entry' },
};

const PAGE = 'express-entry';

/**
 * Official sources. We deliberately publish no fee, cut-off, processing time or
 * fund amount on this page — those move, and a stale number on a consultancy's
 * website is worse than no number. Every place a reader might want one, we send
 * them to IRCC instead.
 */
const IRCC = {
  rounds:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
  categories:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
  crs: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html',
  proofOfFunds:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html',
  fees: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/fees.html',
  processingTimes:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
  whoCanApply:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html',
} as const;

function Official({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="font-semibold text-accent-500 link-underline"
    >
      {children}
    </a>
  );
}

/* The three programmes Express Entry manages. Structural distinctions only. */
const PROGRAMMES = [
  {
    icon: 'globe' as const,
    kicker: 'Federal Skilled Worker',
    title: 'Skilled work experience abroad',
    body: 'The route most of the people who write to us from Pakistan fall under. Skilled work experience in a qualifying occupation, language testing, and an education assessment for a foreign degree. No Canadian work history is required.',
  },
  {
    icon: 'building' as const,
    kicker: 'Canadian Experience Class',
    title: 'Skilled work already done in Canada',
    body: 'For people who have already worked in Canada in a skilled occupation — usually former students or work-permit holders. If you’ve never worked in Canada, this one isn’t open to you.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Federal Skilled Trades',
    title: 'A qualified skilled trade',
    body: 'For qualified tradespeople. It carries its own requirement: a certificate of qualification issued by a Canadian provincial, territorial or federal authority, or a qualifying job offer in the trade. Getting certified is itself a process, and it is done through the province, not through IRCC.',
  },
];

/* The mechanics, in sequence. */
const STEPS = [
  {
    title: 'Check you qualify for a programme',
    body: 'Before anything else, you must meet the criteria of at least one of the three programmes. If you meet none of them, there is nothing to enter — this is where a lot of people are quietly stuck.',
  },
  {
    title: 'Take the tests, get the assessment',
    body: 'An approved language test, and — for a degree earned outside Canada — an Educational Credential Assessment. These take real time and money, and they come before the profile, not after.',
  },
  {
    title: 'Create your profile',
    body: 'You submit a profile describing your age, education, language results, work history, and your spouse’s if you have one. The profile is not an application. Nothing is decided at this stage.',
  },
  {
    title: 'Sit in the pool with a CRS score',
    body: 'Your profile is scored under the Comprehensive Ranking System and ranked against everyone else in the pool. Profiles expire, so the clock runs while you wait.',
  },
  {
    title: 'Receive an Invitation to Apply',
    body: 'IRCC holds rounds of invitations. In a general round it invites from the top of the pool down. In a category-based round it first filters the pool to a targeted group, then invites from the top of that group.',
  },
  {
    title: 'File the actual application',
    body: 'Only once invited do you file a permanent residence application, with police certificates, medicals, proof of funds and evidence for every claim you made in the profile. Claims you can’t prove are what sink files at this stage.',
  },
];

const FAQS = [
  {
    q: 'Can I apply for Express Entry?',
    a: 'Not directly — and this is the most useful thing to understand about it. Express Entry is the system that manages three federal programmes. You qualify for one of those programmes, enter the pool, get ranked, and only apply for permanent residence once you’re invited. Being in the pool is not an application and carries no promise of one.',
  },
  {
    q: 'What CRS score do I need?',
    a: (
      <>
        There is no fixed number, and anyone quoting you one is guessing. The cut-off is set by each
        round of invitations and moves with the pool, so we don’t print one here. IRCC publishes the
        result of every round —{' '}
        <Official href={IRCC.rounds}>rounds of invitations on canada.ca</Official> — and that is the
        only place worth reading them from — our{' '}
        <Link href="/express-entry/draws" className="font-semibold text-accent-500 link-underline">
          Express Entry draws page
        </Link>{' '}
        lists every round, read automatically from that same IRCC data. What we can do is work out
        your score honestly and tell you where it sits.{' '}
        <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
          Estimate your CRS score
        </Link>
        .
      </>
    ),
  },
  {
    q: 'What is category-based selection?',
    a: (
      <>
        Some rounds of invitations are not open to the whole pool. IRCC selects a targeted group
        first — for example, candidates with work experience in a named occupational field, or strong
        French — and then invites from the top of that filtered group. It can favour people a general
        round would never reach. The categories are set by ministerial instruction and are revised,
        with occupations added and dropped, so check the live list rather than any summary:{' '}
        <Official href={IRCC.categories}>category-based selection on canada.ca</Official>.
      </>
    ),
  },
  {
    q: 'Does a provincial nomination help?',
    a: (
      <>
        Yes — it is the largest single addition available to a CRS score, and in practice the most
        decisive factor in the ranking. It does not decide the permanent residence application
        itself, which is still assessed on its merits. A nomination is also competitive in its own
        right, with its own streams and criteria, and it is not something you can simply choose to
        have. IRCC sets out how the additional points work in the{' '}
        <Official href={IRCC.crs}>CRS criteria</Official>.
      </>
    ),
  },
  {
    q: 'How much money do I need to show?',
    a: (
      <>
        Federal Skilled Worker and Federal Skilled Trades applicants generally have to prove
        settlement funds, scaled to family size. Canadian Experience Class applicants are exempt, as
        are applicants who are authorised to work in Canada and hold a valid job offer. The amounts
        are set and updated by IRCC —{' '}
        <Official href={IRCC.proofOfFunds}>proof of funds on canada.ca</Official> — and we confirm
        the figure that applies to your family once we see your case.
      </>
    ),
  },
  {
    q: 'What does it cost and how long does it take?',
    a: (
      <>
        Two separate things: government fees paid to IRCC, and our professional fee. We won’t print a
        number here that you’d plan your life around, because both change and a stale figure on a
        website is worse than none. IRCC publishes its own{' '}
        <Official href={IRCC.fees}>fee list</Official> and its{' '}
        <Official href={IRCC.processingTimes}>current processing times</Official>. Our fee is quoted
        in writing for your file before you sign anything, and our{' '}
        <Link href="/fees" className="font-semibold text-accent-500 link-underline">
          fees page
        </Link>{' '}
        explains how we charge.
      </>
    ),
  },
  {
    q: 'My score is low and I have no way to raise it. What now?',
    a: 'Then Express Entry is probably not your route, and we would rather say so. Depending on your profile the honest alternatives are a provincial stream that targets your occupation, a study route that builds Canadian experience and language first, a work-permit route such as C11 if you run your own business, or another country entirely. Sitting in the pool hoping the cut-off falls to meet you is not a plan.',
  },
];

export default function ExpressEntryPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · permanent residence"
        title={
          <>
            Express Entry is a <span className="text-gold-300">system</span>, not a programme
          </>
        }
        subtitle={
          <>
            You don’t apply to Express Entry. You qualify for one of three federal programmes, sit in
            a ranked pool, and apply only once you’re invited. Almost every expensive mistake we see
            starts with missing that distinction.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your profile checked — free
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/tools/crs-calculator" className="btn btn-ghost">
          Estimate your CRS score
        </Link>
      </PageHero>

      {/* ===================== WHAT IT ACTUALLY IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The distinction that matters"
          title="What Express Entry actually is"
        />
        <Prose>
          <p>
            Express Entry is an intake and management system run by IRCC. It does not have its own
            eligibility criteria and it does not grant permanent residence. What it does is hold
            candidates who already qualify for one of three federal economic programmes, rank them
            against each other, and periodically invite the highest-ranked to apply.
          </p>
          <p>
            So the question “do I qualify for Express Entry?” is really two questions. First: do I
            meet the requirements of one of the three programmes it manages? If not, there is no pool
            to enter. Second: if I do qualify, does my ranking realistically reach an invitation? A
            profile can be perfectly valid and still never be invited. Both questions have to be
            answered honestly, and the second one is the one people skip.
          </p>
          <p>
            Everything else — the profile, the CRS score, the rounds of invitations, the category
            draws — is machinery sitting on top of those two questions.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE THREE PROGRAMMES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The three programmes"
          title="Which one might you fall under?"
          subtitle="You need to meet the criteria of at least one. Most people writing to us from Pakistan are looking at the first."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROGRAMMES.map((p) => (
            <FeatureCard key={p.title} icon={<Icon name={p.icon} />} kicker={p.kicker} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Callout title="A note on occupations and evidence">
            <p>
              All three programmes turn on how your work is classified under Canada’s National
              Occupational Classification, and on your ability to prove it — letters on company
              letterhead, with duties, hours and dates. A job title you can’t evidence in the format
              an officer expects is a weak claim, whatever the reality of your career. That evidence
              problem is worth solving before you build a profile around it, not after you’re invited.
            </p>
            <p className="mt-3">
              The eligibility criteria for all three programmes — work-experience thresholds,
              language minimums, the qualifying occupation lists — are set and updated by IRCC. Read
              them at source:{' '}
              <Official href={IRCC.whoCanApply}>who can apply for Express Entry</Official>. Anything
              on this page is an explanation of how the system works, not a substitute for the
              official criteria or for advice on your own file.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="From eligibility to a decision"
          subtitle="Six stages. The application everyone talks about is the sixth one — and you can’t reach it without an invitation."
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

      {/* ===================== CRS + CATEGORIES ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The ranking" title="What the CRS rewards" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                The Comprehensive Ranking System scores your profile and ranks it against everyone
                else in the pool. Broadly it rewards being younger, more educated, more proficient in
                English or French, and more experienced — plus specific additional factors such as a
                provincial nomination, French ability, a sibling in Canada, or study completed in
                Canada. We don’t reproduce the points table here — IRCC maintains it and revises it,
                so read it at source: <Official href={IRCC.crs}>the CRS criteria on canada.ca</Official>.
              </p>
              <p>
                It is a relative ranking, not a pass mark. Your score doesn’t need to be “good”; it
                needs to be higher than most of the pool on the day a round runs. That is why a score
                that was competitive once may not be later, without anything about you changing.
              </p>
              <p>
                Some factors you can move — a better language result is usually the fastest and
                cheapest lever, and often the only one. Age moves against you every year. Being clear
                about which of your factors can actually change is the whole of a realistic plan.
              </p>
              <p>
                <Link
                  href="/tools/crs-calculator"
                  className="font-semibold text-accent-500 link-underline"
                >
                  Work out your CRS score
                </Link>{' '}
                before you spend anything.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Not every round is open" title="Category-based selection" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                IRCC runs two kinds of rounds. A general round invites from the top of the whole pool.
                A category-based round first narrows the pool to a targeted group set by ministerial
                instruction, then invites from the top of that group.
              </p>
              <p>
                Categories have covered things like strong French-language ability and work experience
                in named occupational fields — healthcare and social services, trades, education,
                STEM, transport — and the list is revised as Canada’s labour needs change. Because
                the filtered group is smaller, a category round can reach candidates a general round
                would not.
              </p>
              <p>
                Two honest cautions. Being in a targeted field usually still means meeting a defined
                work-experience requirement in a qualifying occupation, not simply working in the
                sector. And categories are policy, not entitlement — they can be added, changed or
                dropped, so a plan that only works if a particular category keeps running is fragile.
                IRCC publishes the{' '}
                <Official href={IRCC.categories}>current categories</Official> and the{' '}
                <Official href={IRCC.rounds}>results of every round</Official> on its own site.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== WHO IT DOESN'T SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Be honest with yourself"
          title="When Express Entry is not your route"
        />
        <div className="mt-8 max-w-3xl">
          <Callout title="If your score is low and nothing can raise it">
            <p>
              A profile in the pool is not progress. If you don’t qualify for any of the three
              programmes, or you qualify but your ranking is far off and every factor that could lift
              it is fixed — your age won’t improve, your education is done, your language result is
              already near your ceiling, you have no realistic provincial angle — then waiting is not
              a strategy. It costs you years and testing fees to arrive where you started.
            </p>
          </Callout>
        </div>
        <div className="mt-10 max-w-3xl space-y-4 text-ink-600 text-pretty leading-relaxed">
          <p>What we would look at instead, depending on who you are:</p>
          <ul className="space-y-4">
            {[
              [
                'A provincial stream',
                'Provinces run their own nominee programs, some outside Express Entry entirely, with criteria built around a specific occupation or a connection to the province. A nomination changes the arithmetic more than anything else available.',
              ],
              [
                'A work-permit route',
                'If you own or run a business, a work permit argued on significant benefit to Canada is a different question altogether — no ranking, no pool, no waiting for a round.',
              ],
              [
                'Study, then experience',
                'Studying in Canada can build the Canadian work experience and the language results that Express Entry rewards. It is a long, expensive route and it should be chosen deliberately, not as a fallback.',
              ],
              [
                'A different country',
                'Sometimes the honest answer is that Canada is not the strongest fit for your profile right now. We would rather tell you that than sell you a place in a queue.',
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
          <p>
            If a work permit is the closer fit,{' '}
            <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
              read how that route works
            </Link>
            . And whatever we recommend, we can’t promise you an outcome —{' '}
            <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
              our no-guarantee policy
            </Link>{' '}
            says exactly why.
          </p>
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
        eyebrow="Find out where you stand"
        title="Get an honest read on your Express Entry chances"
        subtitle="Tell us your age, education, work history and language results and we’ll tell you which programme you might fall under, roughly where you’d rank, and whether that is realistically enough. If it isn’t, we’ll say so and tell you what else to look at."
        page={PAGE}
        waMessage="Hi, I’d like to know whether Express Entry is realistic for me. Can you assess my profile?"
      />
    </>
  );
}
