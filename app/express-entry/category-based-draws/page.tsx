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
 * Category-based selection in Express Entry.
 *
 * The point people misunderstand: a category is not a programme you apply to.
 * It is a filter IRCC applies to the existing pool. You either fall inside the
 * definition or you do not — you cannot pick one, and you cannot be placed in one.
 * We deliberately name no current category and no cut-off score, and we do not assert what a
 * category may be based on — IRPA leaves the criteria to the Minister. Everything current is
 * linked out to IRCC. Do not reintroduce category names, cut-offs, or occupation lists here.
 */
export const metadata: Metadata = {
  title: 'Category-Based Express Entry Draws',
  description:
    'How IRCC invites Express Entry candidates by category rather than score, how categories are set, and why you cannot choose the one you fall into.',
  alternates: { canonical: '/express-entry/category-based-draws' },
};

const PAGE = 'express-entry-category-based-draws';

const MECHANICS = [
  {
    icon: 'doc' as const,
    kicker: 'Step one',
    title: 'You are in the pool already',
    body: 'A category changes nothing about how you get into Express Entry. You still have to be eligible for one of the underlying programmes and hold a valid profile in the pool.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Step two',
    title: 'IRCC applies a filter',
    body: 'When a category round is run, the department narrows the pool to candidates whose profiles satisfy that category’s definition. Nobody opts in. The filter reads what your profile already says.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Step three',
    title: 'Ranking still applies',
    body: 'Inside that narrower group, candidates are still ranked by Comprehensive Ranking System score and invited from the top down. The category decides who is eligible to be ranked, not who wins.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Step four',
    title: 'The application is the same',
    body: 'An invitation from a category round leads to the same permanent-residence application, under the same programme, with the same documentary and admissibility requirements as any other invitation.',
  },
];

const FAQS = [
  {
    q: 'Can I choose which category I am considered under?',
    a: 'No. There is no field to select and no application to file. IRCC reads the profile you have already submitted and decides whether it meets a category’s definition. You either fall inside that definition or you do not. If your work history genuinely sits in a named field, the useful work is making sure your profile and supporting documents describe it accurately — not asking to be moved into a category.',
  },
  {
    q: 'Which categories are open right now?',
    a: 'We do not publish the list here. Categories are established by the Minister and can be added, changed or dropped, and the occupations inside a category can be revised. IRCC maintains the current list on its category-based selection page, which is the only place to read it on the day you need it.',
  },
  {
    q: 'Does a category round always have a lower cut-off than a general round?',
    a: 'Not necessarily, and it is a mistake to plan on it. A category round draws from a smaller group, which can mean a different cut-off, but it depends entirely on how many eligible candidates are sitting in that group and how many invitations are issued — neither of which is knowable in advance. A category can be narrow and still be crowded with well-scored candidates. IRCC publishes the outcome of every round, including the category and the cut-off, on its rounds-of-invitations page; that record is the only honest guide, and past rounds do not commit the department to anything. Treat category eligibility as a possible additional route to an invitation, not as a discount.',
  },
  {
    q: 'How are categories decided?',
    a: 'The legislation requires the Minister to set out, in the instruction, the economic goal the category is meant to support, and to run a public consultation process with stakeholders — provinces and territories, industry, unions, employers, workers and worker advocacy groups, settlement provider organisations, and immigration researchers and practitioners. A report listing the categories, the selection criteria and the process applied must then be tabled before Parliament. It is a policy instrument that is reviewed and revised, not a fixed part of the programme. IRCC describes the current process, and publishes the consultation and parliamentary reports, on its own site.',
  },
  {
    q: 'Is French-language ability worth pursuing for this?',
    a: 'Only if you would genuinely reach a usable standard. Official-language ability is assessed by a designated test across all four abilities — reading, writing, listening and speaking — and IRCC publishes which tests it accepts and the minimum result any given category requires. Reaching that level from a standing start is a serious undertaking, not a short course, and how long it takes depends entirely on you; nobody can promise you a timeline. Ability in a second official language can also raise your ranking score independently of any category. If you already speak French, get tested. If you do not, be honest with yourself about the commitment before you build a plan on it.',
  },
  {
    q: 'Does a category invitation give me a different or faster status?',
    a: 'No. The invitation is to apply under the same programme you were already eligible for. Nothing about the application, the assessment or the resulting status differs because the invitation came from a category round.',
  },
  {
    q: 'My occupation was in a category last year. Does that carry over?',
    a: 'It does not carry a guarantee. Categories are set for a period and reviewed, and the occupations inside a category can be revised when it is. A profile that qualified in one cycle may not in the next, and no one can tell you in advance which way that will go.',
  },
  {
    q: 'Can you guarantee me an invitation through a category?',
    a: 'No. Whether a category exists, whether a round is held under it, how many invitations are issued and where the cut-off falls are all decisions we have no part in. We can tell you honestly whether your documented history plausibly meets a category definition, and what it would take to evidence it.',
  },
];

export default function CategoryBasedDrawsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Express Entry"
        title={
          <>
            Invited by category, <span className="text-gold-300">not by score alone</span>
          </>
        }
        subtitle={
          <>
            IRCC can run rounds that invite candidates who work in a named field, or who speak
            French, instead of simply taking the highest-ranked candidates in the pool. It changes
            strategy for some people and nothing at all for others. Here is how to tell which you are.
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
          eyebrow="The mechanism, plainly"
          title="What category-based selection actually is"
        />
        <Prose>
          <p>
            Express Entry is a pool. Candidates who are eligible for one of the federal economic
            programmes submit a profile, receive a Comprehensive Ranking System score, and wait. In a
            general round, the department sets a number of invitations and issues them to the
            highest-ranked candidates. Your score is the only thing that decides whether you are in.
          </p>
          <p>
            Category-based selection sits on top of that. Amendments to the{' '}
            <em>Immigration and Refugee Protection Act</em> allow the Minister to establish
            categories of candidates and to run rounds that invite from within a category rather than
            from the pool at large. The Act does not restrict what a category may be built on: it
            leaves the Minister to set the eligibility criteria, subject to the conditions described
            further down this page. In practice categories have been framed around things like work
            experience and official-language ability, but the basis, the definitions and the list
            itself are all revisable — read the current criteria on IRCC’s{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              category-based selection page
            </a>
            .
          </p>
          <p>
            The practical consequence is straightforward. If your profile falls inside a category
            being drawn from, you are competing against a smaller group. If it does not, category
            rounds are simply not events that concern you, and your plan has to rest on your score,
            on{' '}
            <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
              provincial nomination
            </Link>
            , or on another route entirely.
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW A ROUND RUNS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How a category round runs"
          title="A filter on the pool, not a separate programme"
          subtitle="Nothing here is an application you file. Every step happens to a profile you have already submitted."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MECHANICS.map((m) => (
            <FeatureCard key={m.title} icon={<Icon name={m.icon} />} kicker={m.kicker} title={m.title}>
              {m.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="You cannot choose a category">
            <p>
              This is the single point people get wrong. There is no box to tick, no category to
              request, and no one who can place you inside one. IRCC assesses whether the profile you
              submitted meets a category’s definition. If your work history is in the field, it is; if
              it is not, no filing strategy changes that.
            </p>
            <p>
              Which means the only legitimate work available to you is accuracy — that your occupation
              is correctly identified, that the duties you performed are described as you actually
              performed them, and that your reference letters and employment records support what the
              profile claims. Stretching a job description to reach a category is{' '}
              <Link
                href="/refusals/misrepresentation"
                className="font-semibold text-accent-500 link-underline"
              >
                misrepresentation
              </Link>
              , and the consequences of a finding are set out in the legislation and are severe.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHY IT CHANGES STRATEGY ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="What it changes for a candidate whose score is short"
            />
            <Prose>
              <p>
                A great many Pakistani candidates sit in the pool with a respectable score that is
                nonetheless short of the cut-offs recent general rounds have produced — you can read
                those cut-offs yourself in IRCC’s published{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  record of rounds of invitations
                </a>
                , and they move. The conventional advice is
                to raise the score: retake the language test, add a credential, secure a provincial
                nomination.
              </p>
              <p>
                Category-based selection adds a second question that is worth asking first, because it
                costs nothing to answer. Does your existing work history already place you inside a
                field the Minister has named? If so, the smaller comparison group may matter more than
                the extra points you were planning to chase.
              </p>
              <p>
                It does not replace score-building. It reorders it. Confirm whether a category
                plausibly applies to you before you spend money on a strategy built entirely around
                raising a number.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Before you plan around it" title="What to check honestly" />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Your actual occupation',
                  'Not your job title, but the duties you performed and can evidence. Categories are defined by field of work, and titles across Pakistani employers vary widely.',
                ],
                [
                  'Whether you can document it',
                  'Reference letters on company letterhead setting out duties, dates, hours and remuneration. A category claim you cannot evidence is worse than no claim.',
                ],
                [
                  'The recency of the experience',
                  'Category criteria have generally looked at experience gained within a defined recent window rather than across a whole career, and may specify where that experience was gained. Older experience may not count. Check the window that applies to the category you think fits on IRCC’s category-based selection page before relying on it.',
                ],
                [
                  'Whether French is realistic',
                  'Tested ability across all four abilities, not conversational comfort. Either you can reach the standard or you cannot.',
                ],
                [
                  'That you still qualify underneath',
                  'A category is worthless if you are not eligible for one of the Express Entry programmes in the first place. That eligibility comes first, always.',
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

      {/* ===================== HOW CATEGORIES ARE SET ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where categories come from"
          title="Set by the Minister, after consultation, and revisable"
        />
        <Prose>
          <p>
            Categories are not written into the immigration regulations and are not permanent. The
            Minister establishes them by instruction, and the legislation imposes conditions on doing
            so: the instruction must state the economic goal the category is meant to support, and
            the Minister must consult before establishing one — provinces and territories, industry
            bodies, unions, employers, worker representatives, settlement organisations, and
            researchers and practitioners.
          </p>
          <p>
            The Minister must also table a report before Parliament listing the categories
            established, the selection criteria and the process applied. Those reports are public,
            and they are the clearest available account of why a given category exists. The
            instructions themselves are published too, as{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              ministerial instructions respecting invitations to apply
            </a>
            , round by round.
          </p>
          <p>
            Two things follow from that design, and both matter to you. First, categories are
            reviewed and revised — a field named in one cycle may be narrowed, broadened or dropped in
            the next, and the occupations inside a category can change with it. Second, a category
            existing is not a commitment that a round will be held under it, or that any particular
            number of invitations will be issued.
          </p>
          <p>
            This is why we name no categories on this page. IRCC publishes the current categories,
            their definitions and the eligible occupations on its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              category-based selection page
            </a>
            , and the underlying authority sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Act
            </a>
            . Read the list at the source, on the day you need it.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>Treating a category as an application.</strong> People ask to be “put into” a
            category, or pay someone who says they will do it. There is nothing to put you into. The
            filter reads your existing profile.
          </p>
          <p>
            <strong>Reshaping a job description to fit.</strong> Rewriting duties, or obtaining a
            reference letter that describes work you did not do, to land inside a named field. This
            is misrepresentation. It is also easy to test against your other documents, and a finding
            carries consequences well beyond the refusal of the application in front of you — see{' '}
            <Link
              href="/refusals/misrepresentation"
              className="font-semibold text-accent-500 link-underline"
            >
              misrepresentation
            </Link>
            .
          </p>
          <p>
            <strong>Acting on a category list from a forum or an agent.</strong> Category definitions
            and eligible occupations are revised. Second-hand lists go stale quietly, and people build
            year-long plans on them.
          </p>
          <p>
            <strong>Assuming a lower cut-off.</strong> A smaller pool does not automatically mean an
            easier one. Some categories attract very large numbers of well-scored candidates.
          </p>
          <p>
            <strong>Abandoning score-building entirely.</strong> Candidates stop improving their
            language results or drop a provincial nomination effort because they expect a category
            round. If the category changes, they are left with the score they had.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this does not help" />
        <div className="mt-8">
          <Callout title="If you are not already eligible for Express Entry, none of this applies">
            <p>
              Category-based selection operates entirely inside the Express Entry pool. If you do not
              qualify for one of the federal economic programmes — the{' '}
              <Link
                href="/express-entry/federal-skilled-worker"
                className="font-semibold text-accent-500 link-underline"
              >
                Federal Skilled Worker
              </Link>{' '}
              programme, the{' '}
              <Link
                href="/express-entry/canadian-experience-class"
                className="font-semibold text-accent-500 link-underline"
              >
                Canadian Experience Class
              </Link>{' '}
              or the{' '}
              <Link
                href="/express-entry/federal-skilled-trades"
                className="font-semibold text-accent-500 link-underline"
              >
                Federal Skilled Trades
              </Link>{' '}
              programme — there is no profile for a category to filter. Fix eligibility first;
              categories are a later question.
            </p>
            <p>
              It also does nothing for candidates whose work history sits outside every named field
              and who have no realistic path to French. That is not a small group, and pretending
              otherwise wastes years. For those candidates the honest conversation is usually about{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nomination
              </Link>
              , a{' '}
              <Link
                href="/work-permit-canada"
                className="font-semibold text-accent-500 link-underline"
              >
                work-permit route
              </Link>
              , or{' '}
              <Link
                href="/study-in-canada/study-to-permanent-residence"
                className="font-semibold text-accent-500 link-underline"
              >
                study leading to residence
              </Link>
              .
            </p>
            <p>
              And it does not suit anyone who needs certainty about timing. Whether a round is held,
              how many invitations are issued and where the cut-off falls are not ours to influence or
              predict, which is why we publish a{' '}
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
        eyebrow="Before you build a plan on it"
        title="Find out whether a category plausibly applies to you"
        subtitle="Tell us what you actually did at work, for how long and how recently, and what you can evidence. We will tell you honestly whether a category is a realistic part of your strategy — or whether your effort belongs somewhere else."
        page={PAGE}
        waMessage="Hi, I’d like to know whether I fall into an Express Entry category based on my work experience."
      />
    </>
  );
}
