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
 * Canadian Experience Class.
 *
 * The single most expensive misunderstanding on this route is what counts as
 * Canadian work experience. People spend years in Canada, then discover the
 * years they spent don't qualify. That section is the reason this page exists,
 * so it sits high on the page rather than buried near the FAQ.
 */
export const metadata: Metadata = {
  title: 'Canadian Experience Class (CEC)',
  description:
    'The Express Entry stream for people who have worked in Canada: what counts as Canadian experience, what does not, and the language requirement by TEER.',
  alternates: { canonical: '/express-entry/canadian-experience-class' },
};

const PAGE = 'express-entry-canadian-experience-class';

const PILLARS = [
  {
    icon: 'building' as const,
    kicker: 'Experience',
    title: 'Skilled work, done in Canada',
    body: 'Paid work in Canada in a skilled occupation, done while you held authorisation to do it. Experience earned abroad does nothing for this stream.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Language',
    title: 'A test result, in all four abilities',
    body: 'An approved English or French test, valid on the day you apply, meeting the benchmark set for your occupation’s TEER category.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Education',
    title: 'No degree requirement',
    body: 'CEC sets no minimum education to be eligible. Credentials still affect your ranking score in the pool — that is a different question from eligibility.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Funds',
    title: 'No proof of funds',
    body: 'CEC does not ask you to show settlement funds. You are already established in Canada — that is the logic of the stream.',
  },
];

const STEPS = [
  {
    title: 'Establish that your experience counts',
    body: 'Before anything else, we test your Canadian work against the rules — status at the time, occupation, hours, the recency window. This is where most CEC hopes end, and it is cheaper to find out here.',
  },
  {
    title: 'Classify the occupation',
    body: 'Your work is matched to a National Occupational Classification code by what you actually did day to day, not by your job title. The TEER category that follows sets your language benchmark.',
  },
  {
    title: 'Sit the language test',
    body: 'An IRCC-approved English or French test. Your result must still be valid when you submit, so timing matters — sitting it too early is a real and avoidable problem.',
  },
  {
    title: 'Create the Express Entry profile',
    body: 'You enter the pool with a Comprehensive Ranking System score. Being eligible for CEC gets you into the pool; it does not by itself get you an invitation.',
  },
  {
    title: 'Wait for an invitation to apply',
    body: 'IRCC invites candidates from the pool through rounds of invitations. Neither we nor anyone else controls whether or when your score is reached.',
  },
  {
    title: 'Submit the permanent residence application',
    body: 'If invited, you file the full application with the evidence behind every claim you made in the profile — reference letters, pay records, status documents, test results.',
  },
];

const FAQS = [
  {
    q: 'Can you guarantee me permanent residence through CEC?',
    a: (
      <>
        No. Eligibility is one thing; an invitation from the pool is another, and the final decision
        belongs to an IRCC officer. What we can do is confirm honestly whether your Canadian
        experience qualifies, and file a case that stands up.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'I worked in Canada while studying. Does that count?',
    a: 'Generally no. Work done while you were a full-time student — including a co-op or internship term that was part of your programme — does not count toward CEC. This is the single most common and most expensive misunderstanding on this route.',
  },
  {
    q: 'I was self-employed in Canada. Does that count?',
    a: 'No. Self-employment does not count toward CEC, however real the business and however skilled the work. If your Canadian time was self-employed, this stream is not your route and we will say so directly.',
  },
  {
    q: 'Does my work experience from Pakistan help?',
    a: 'Not for CEC eligibility — that requirement is Canadian experience only. Foreign experience can still affect your ranking score once you are in the Express Entry pool, and it matters for other Express Entry streams, so it is not wasted.',
  },
  {
    q: 'Do I need to show settlement funds?',
    a: 'Not for CEC. Proof of funds is required for some other Express Entry streams but not this one. If someone is asking you to arrange showable funds for a CEC application, ask them why.',
  },
  {
    q: 'What language score do I need?',
    a: 'It depends on the TEER category of your occupation — managerial and professional roles carry a higher benchmark than technical and skilled-trades roles, and the benchmark applies to all four abilities separately. IRCC publishes the current levels; we will not print a number here that you would plan a test date around.',
  },
  {
    q: 'What does it cost and how long does it take?',
    a: (
      <>
        Two separate things: our professional fee, and the government fees paid to IRCC rather than
        to us. We itemise our fee in writing before you sign anything, and we will not quote you a
        date that we cannot control — processing times move, and nobody outside IRCC sets them.{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
          className="font-semibold text-accent-500 link-underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          IRCC publishes its current fees and processing times
        </a>
        . Our side of it is set out on our{' '}
        <Link href="/fees" className="font-semibold text-accent-500 link-underline">
          fees page
        </Link>
        .
      </>
    ),
  },
  {
    q: 'I have never worked in Canada. Can I apply?',
    a: 'No. CEC exists specifically for people already working in Canada. If you are applying from Pakistan with no Canadian work history, a different route applies — that is a normal conversation for us to have, not a dead end.',
  },
];

export default function CanadianExperienceClassPage() {
  return (
    <>
      <PageHero
        eyebrow="Express Entry · Canadian Experience Class"
        title={
          <>
            You already worked in Canada.{' '}
            <span className="text-gold-300">Now make it count.</span>
          </>
        }
        subtitle={
          <>
            The Canadian Experience Class is the Express Entry stream for people who have already
            done skilled work in Canada. No settlement funds, no minimum degree — but strict rules
            about which Canadian work actually counts, and most people get those rules wrong.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE FOUR PILLARS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What CEC asks for"
          title="Four requirements, and two of them are absent"
          subtitle="CEC is a narrow stream. It asks less than the other Express Entry programmes in some ways, and far more in one."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <FeatureCard key={p.title} icon={<Icon name={p.icon} />} kicker={p.kicker} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== WHAT COUNTS / WHAT DOESN'T ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Read this part twice"
          title="Which Canadian experience actually counts"
          subtitle="This is where CEC applications die, and it is almost always discovered too late — after the years have already been spent."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">What counts</p>
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Skilled work, physically in Canada',
                  'The work must have been performed in Canada. Remote work you did for a Canadian employer while sitting in Pakistan does not become Canadian experience.',
                ],
                [
                  'Work you were authorised to do',
                  'You must have held temporary resident status with authorisation to work at the time. Work done without that authorisation cannot be counted, and disclosing it raises separate problems.',
                ],
                [
                  'Paid work',
                  'Wages or commission. Volunteering and unpaid internships do not count, however genuinely skilled the work was.',
                ],
                [
                  'A skilled occupation',
                  'The occupation must sit in one of the skilled TEER categories under the National Occupational Classification — judged on the duties you actually performed.',
                ],
                [
                  'Recent enough, and enough of it',
                  'CEC sets both a minimum amount of experience and a recency window that it has to fall inside. IRCC publishes the current hours and the current window on its Canadian Experience Class page — we check your history against that rule rather than against a rule of thumb.',
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
            <p className="eyebrow">What does not count</p>
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Work while you were a full-time student',
                  'Including a co-op or internship term that formed part of your programme. Students routinely assume those years are banked. They are not.',
                ],
                [
                  'Self-employment',
                  'Running your own business or contracting for yourself in Canada does not count toward CEC, no matter how skilled or how profitable.',
                ],
                [
                  'Work experience earned outside Canada',
                  'Your years in Pakistan or the Gulf do nothing for CEC eligibility. They may still help your ranking score and they matter for other streams.',
                ],
                [
                  'Work done without authorisation',
                  'Work performed while out of status, or outside what your permit allowed, cannot be counted.',
                ],
                [
                  'Unpaid work',
                  'Volunteer positions and unpaid placements, however senior, do not qualify.',
                ],
                [
                  'Experience that falls outside the window',
                  'Canadian work that is too old no longer counts, regardless of how much of it there was. Time is genuinely against you here.',
                ],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-300 text-ink-500">
                    <span aria-hidden="true" className="text-sm leading-none">
                      ×
                    </span>
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

        <p className="mt-10 text-sm text-ink-500">
          We deliberately do not print the qualifying hours, the length of the recency window or the
          language levels on this page — they change, and a stale number on a law firm’s website is
          how people plan around the wrong rule.{' '}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html"
            className="font-semibold text-accent-500 link-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            IRCC states the current Canadian Experience Class requirements here
          </a>
          .
        </p>

        <div className="mt-12">
          <Callout title="Who this route does not suit">
            <p>
              If you have never worked in Canada, if your Canadian time was spent studying, or if you
              worked for yourself while you were there, CEC is not your route. Nothing about how you
              present the file changes that — the exclusions are in the rules, not in the officer’s
              discretion. We would rather tell you on the first call than take a fee for an
              application that cannot succeed, and a refusal becomes part of your immigration
              history that later applications have to be declared against.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== LANGUAGE & TEER ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Language"
          title="Your occupation sets your language bar"
        />
        <Prose>
          <p>
            Every occupation in the National Occupational Classification carries a TEER category —
            a measure of the training, education, experience and responsibility the job involves.
            TEER 0 and TEER 1 cover management and professional roles. TEER 2 and TEER 3 cover
            technical occupations and the skilled trades.
          </p>
          <p>
            CEC sets a higher language benchmark for TEER 0 and TEER 1 work than for TEER 2 and
            TEER 3 work. The benchmark is expressed in Canadian Language Benchmarks and it applies
            separately to each of the four abilities — speaking, listening, reading and writing.
            Meeting it on average is not meeting it. One weak ability makes you ineligible even
            where the other three are comfortable.
          </p>
          <p>
            Two things follow. First, your NOC code is not cosmetic: it decides which bar you have
            to clear, and it is assigned on the duties you genuinely performed rather than on the
            title printed on your contract. Second, your test result has to still be valid on the
            day you apply, which makes when you sit it a real planning decision.{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC publishes the current benchmarks and the list of approved tests
            </a>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How it works"
          title="From your Canadian work history to a decision"
          subtitle="Six stages. The first one can end it, on purpose, before you have paid a service fee."
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

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failures we see repeatedly"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-ink-600 text-pretty leading-relaxed">
          <p>
            <strong className="font-semibold text-ink-900">Counting student years.</strong> Someone
            studies in Canada, works throughout, and assumes the whole period is banked. It is not,
            and the discovery usually comes at the worst possible moment.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">A reference letter that proves
            nothing.</strong> IRCC wants the duties, the hours, the period and the pay set out by
            the employer. A warm letter praising your character does not establish that your work
            was skilled.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">A NOC code chosen to flatter.</strong>{' '}
            Picking a higher code than your duties support raises the language bar you have to clear
            and invites a misrepresentation finding. That is a far worse outcome than a refusal.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">A language test that expires.</strong>{' '}
            Sitting the test early, then waiting in the pool, and finding the result no longer valid
            when the invitation finally arrives.
          </p>
          <p>
            <strong className="font-semibold text-ink-900">Status gaps nobody mentioned.</strong>{' '}
            Periods where the permit had lapsed, or where the work went beyond what the permit
            allowed, that only surface once the file is being assembled.
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
        eyebrow="Check before you count on it"
        title="Find out whether your Canadian experience qualifies"
        subtitle="Tell us what you did in Canada, when, and under what status. We will tell you honestly whether CEC is open to you — and if it is not, which route is."
        page={PAGE}
        waMessage="Hi, I’ve worked in Canada and want to know if I qualify for the Canadian Experience Class."
      />
    </>
  );
}
