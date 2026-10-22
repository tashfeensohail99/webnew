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

export const metadata: Metadata = {
  title: 'Federal Skilled Worker Program',
  description:
    'How the Federal Skilled Worker Program works: the six selection factors, work and language requirements, credential assessment, funds, and how CRS differs.',
  alternates: { canonical: '/express-entry/federal-skilled-worker' },
};

const PAGE = 'express-entry-federal-skilled-worker';

/* The six selection factors — named, never scored. Points belong to IRCC's page, not ours. */
const FACTORS = [
  {
    icon: 'chat' as const,
    kicker: 'Factor one',
    title: 'Language ability',
    body: 'Your ability in English or French, proven by an approved test across all four abilities — reading, writing, listening and speaking. This is the heaviest factor on the grid, and there is a floor you cannot go below.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Factor two',
    title: 'Education',
    body: 'Your highest completed credential. Education earned outside Canada only counts once it has been assessed against Canadian standards.',
  },
  {
    icon: 'building' as const,
    kicker: 'Factor three',
    title: 'Skilled work experience',
    body: 'Paid work in a skilled occupation. More years score higher, but only years that fall inside the categories and the look-back window IRCC recognises count at all.',
  },
  {
    icon: 'user' as const,
    kicker: 'Factor four',
    title: 'Age',
    body: 'Younger applicants score more, and the score tapers as you get older until it reaches nothing. You cannot change this factor, so it is the one to plan around rather than argue with.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Factor five',
    title: 'Arranged employment in Canada',
    body: 'A qualifying job offer from a Canadian employer. It is a real offer meeting defined conditions — not a friend’s letter, and not an agent’s promise of one.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Factor six',
    title: 'Adaptability',
    body: 'Existing ties to Canada — a spouse’s language ability, past study or work in Canada, close relatives there, or a qualifying job offer. Ties you actually have, evidenced.',
  },
];

const STEPS = [
  {
    title: 'Check you clear the minimum requirements',
    body: 'Before the grid matters at all, you need qualifying skilled work experience, test results at or above the required language level, and — if you studied outside Canada — an assessed credential.',
  },
  {
    title: 'Sit an approved language test',
    body: 'IRCC accepts specific designated tests in English and French, and results have a shelf life. Book early: your band across all four abilities shapes both your eligibility and your ranking.',
  },
  {
    title: 'Get an Educational Credential Assessment',
    body: 'A Pakistani degree is assessed by an IRCC-designated organisation to say what it is equivalent to in Canada. This takes time and depends on your university releasing transcripts — start it before you need it.',
  },
  {
    title: 'Score yourself against the six factors',
    body: 'This is the eligibility test. Clear it and you may enter the Express Entry pool. Fail it and nothing else about your profile matters yet.',
  },
  {
    title: 'Create a profile and enter the pool',
    body: 'In the pool you are ranked against everyone else in it. Being in the pool is not an application, and it is not an approval — it is a queue you have to be competitive inside.',
  },
  {
    title: 'Invitation, then the real application',
    body: 'If you are invited to apply, you then file the permanent residence application itself with full documents, medicals, police certificates and proof of funds. In our experience this stage — not the profile — is where files come under real scrutiny.',
  },
];

const FAQS = [
  {
    q: 'What is the pass mark on the selection grid?',
    a: (
      <>
        There is a published pass mark and a published score for every factor, but we deliberately
        don’t reprint them here — grids get adjusted, and a stale number on a website is how people
        end up making a wrong decision. IRCC publishes the current grid and the current pass mark on
        its own page.{' '}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers/six-selection-factors-federal-skilled-workers.html"
          className="font-semibold text-accent-500 link-underline"
        >
          Read it on canada.ca
        </Link>
        .
      </>
    ),
  },
  {
    q: 'I clear the pass mark. Does that mean I’m getting an invitation?',
    a: 'No. Clearing the selection grid means you are eligible to enter the pool. Whether you are invited out of the pool depends on your Comprehensive Ranking System score against everyone else in it at that moment. These are two separate scoreboards, and confusing them is one of the most common mistakes we see.',
  },
  {
    q: 'Does my work experience have to be in Canada?',
    a: 'No — the Federal Skilled Worker Program is specifically the route built for people with foreign work experience, which is why it matters to applicants in Pakistan. The experience does have to be paid, in a skilled occupation IRCC recognises, and properly evidenced by employment letters that state your duties, hours and salary.',
  },
  {
    q: 'Which language test should I take?',
    a: (
      <>
        IRCC designates specific tests for English and French, and only results from those count.
        Academic versions of a test are not always the accepted version, and results expire. Check
        the current designated list before you book and pay.{' '}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html"
          className="font-semibold text-accent-500 link-underline"
        >
          IRCC’s language test page
        </Link>
        .
      </>
    ),
  },
  {
    q: 'How much money do I need to show?',
    a: (
      <>
        The settlement funds requirement scales with family size and is updated periodically, so we
        won’t print a figure you might act on months later. Some applicants — for example those
        already authorised to work in Canada with a qualifying offer — are exempt.{' '}
        <Link
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html"
          className="font-semibold text-accent-500 link-underline"
        >
          IRCC publishes the current amounts
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Can you guarantee permanent residence?',
    a: (
      <>
        No — and nobody honestly can. An IRCC officer decides your application, and no consultant in
        Pakistan or Canada can overrule that. What we can do is tell you whether your profile is
        realistically competitive, fix what is weak before you file, and say so plainly if it isn’t.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'My score isn’t competitive. Is that the end of it?',
    a: 'Not necessarily, but the honest answer is that some levers move and some don’t. Language results can improve with real preparation. A spouse’s test, a further credential, or a provincial nomination can change the picture. Age cannot be fixed, and no amount of paperwork substitutes for experience you don’t have.',
  },
];

export default function FederalSkilledWorkerPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Express Entry"
        title={
          <>
            The Federal Skilled Worker Program,{' '}
            <span className="text-gold-300">explained properly</span>
          </>
        }
        subtitle={
          <>
            The Express Entry route built for people whose skilled experience was earned outside
            Canada. Here is what it actually asks of you — and why passing the eligibility grid is
            not the same thing as being invited.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHO IT IS FOR ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Who it’s for"
          title="Skilled experience earned outside Canada"
        />
        <Prose>
          <p>
            Express Entry is not a programme. It’s the system Canada uses to manage several
            permanent residence programmes, and the Federal Skilled Worker Program is the one that
            accepts skilled work experience earned outside Canada — you do not need Canadian
            experience to use it. For many people applying from Pakistan, this is the relevant door.
          </p>
          <p>
            It suits a professional with real, documented, paid experience in a skilled occupation,
            a credential that stands up to assessment, and genuine ability in English or French.
            It does not require a job offer, and it does not require a Canadian employer to sponsor
            you. It does require you to be honestly competitive against a global pool of people
            trying to do the same thing.
          </p>
          <p>
            Everything below is about structure — what is asked, in what order, and where files
            fail. Fees, cut-off scores and processing times change; we link to IRCC for those rather
            than reprint a number that may be wrong by the time you read it.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE SIX FACTORS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The eligibility grid"
          title="The six selection factors"
          subtitle="Eligibility for this programme is assessed on a points grid built from six factors. We name them here; IRCC publishes what each is worth and what total you must reach."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACTORS.map((f) => (
            <FeatureCard
              key={f.title}
              icon={<Icon name={f.icon} />}
              kicker={f.kicker}
              title={f.title}
            >
              {f.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Callout title="Why we don’t print the points here">
            <p>
              Per-factor scores and the pass mark are set by IRCC and can be adjusted. A page that
              copies them today is a page that misleads someone next year. Read the current grid on{' '}
              <Link
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers/six-selection-factors-federal-skilled-workers.html"
                className="font-semibold text-accent-500 link-underline"
              >
                IRCC’s six selection factors page
              </Link>{' '}
              — and bring it to a consultation if you want it applied to your own facts.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== TWO SCOREBOARDS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The confusion that costs people money"
          title="Eligibility and ranking are two different scoreboards"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Scoreboard one</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">The selection grid — a gate</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              The six-factor grid answers one question: are you eligible for the Federal Skilled
              Worker Program at all? It is pass or fail. Passing it lets you into the Express Entry
              pool. It tells you nothing about your chances once you’re in there.
            </p>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Scoreboard two</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">
              The CRS — a ranking against others
            </h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Inside the pool, the Comprehensive Ranking System scores you against every other
              candidate. IRCC then invites from the top down, and sometimes within specific
              categories. A high grid score with a weak CRS means you are eligible and still
              waiting. Our{' '}
              <Link href="/tools/crs-calculator" className="font-semibold text-accent-500 link-underline">
                CRS calculator
              </Link>{' '}
              gives you an indicative ranking score to work from.
            </p>
          </div>
        </div>
        <Prose>
          <p className="mt-10">
            People are sold on the first scoreboard and quietly left to discover the second. If
            someone tells you that you “qualify for Canada” and stops there, ask them the follow-up
            question: qualify to enter the pool, or competitive enough to be invited out of it?
            Those are not the same claim.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT YOU HAVE TO PROVE ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="In practice" title="What you actually have to prove" />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Skilled work experience, evidenced',
                  'Paid work — volunteering and unpaid internships don’t count — in an occupation IRCC treats as skilled, backed by employment letters stating your duties, hours and salary.',
                ],
                [
                  'Language, by approved test only',
                  'A designated English or French test, all four abilities, at or above the required level. Self-assessment and old results are not accepted.',
                ],
                [
                  'Education, assessed',
                  'Foreign credentials go through an Educational Credential Assessment by an IRCC-designated organisation before they count.',
                ],
                [
                  'Settlement funds, unless exempt',
                  'Money available and accessible to you, documented by the institution holding it — not borrowed, and not someone else’s balance.',
                ],
                [
                  'Admissibility',
                  'Medicals and police certificates. Past refusals, misrepresentation or criminal history are dealt with honestly and early, or they end the file later.',
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

          <div>
            <SectionHeading eyebrow="Where files fail" title="What commonly goes wrong" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                <strong className="font-semibold text-ink-900">
                  Employment letters that don’t say enough.
                </strong>{' '}
                A letter confirming you worked somewhere is not evidence of what you did. Officers
                need duties that match the occupation you claimed, plus hours and salary.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">
                  Claiming the wrong occupation.
                </strong>{' '}
                People pick the occupation code that scores best rather than the one that matches
                their actual daily work. That is a misrepresentation risk, and it carries
                consequences well beyond a refusal.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">
                  Funds that appeared last month.
                </strong>{' '}
                Settlement funds are examined for where they came from and whether they’re genuinely
                yours. A large deposit shortly before filing invites exactly the question you don’t
                want asked.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">
                  Treating the pool as the finish line.
                </strong>{' '}
                A profile sits in the pool for a fixed period and then expires. People wait it out
                doing nothing when a retest or a credential could have moved them.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">Guessing on the profile.</strong>{' '}
                Details entered in an Express Entry profile have to be supportable by documents
                later. An optimistic entry now becomes an unanswerable question after an invitation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== HOW THE PROCESS RUNS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How the process actually runs"
          subtitle="In this order. Skipping ahead is what produces expensive surprises."
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

      {/* ===================== WHO IT DOESN'T SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight talk" title="Who this route does not suit" />
        <div className="mt-10">
          <Callout title="We’d rather tell you now">
            <p>
              This route is not for you if your work experience is unskilled, undocumented, or paid
              in cash without records an officer could verify. It is not for you if your English or
              French is below the required level and you are not willing to genuinely improve it —
              coaching a test result you can’t sustain helps nobody. It is not for you if you have no
              access to settlement funds in your own name and no exemption applies.
            </p>
            <p className="mt-4">
              And if you are older, with a modest credential and no Canadian ties, the honest
              conversation is that your ranking may never become competitive on this route alone. In
              that case a provincial route, a study pathway, or a work-permit route may fit better —
              or nothing may fit right now. We will tell you that on the call rather than take a fee
              to file something we expect to fail. A refusal follows you.
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
        eyebrow="Find out where you actually stand"
        title="Get your profile assessed against both scoreboards"
        subtitle="Tell us your experience, your education and your language results and we’ll tell you honestly whether you clear the eligibility grid — and whether your ranking is realistically competitive. If it isn’t, we’ll say so and tell you what would move it."
        page={PAGE}
        waMessage="Hi, I’d like my profile assessed for the Federal Skilled Worker Program under Express Entry."
      />
    </>
  );
}
