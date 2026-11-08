import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { CrsCalculator } from '@/components/tools/CrsCalculator';
import { getWhatsAppChannel } from '@/lib/wa-channel';
import { CRS_GRID_VERIFIED_ON, OFFICIAL_CALCULATOR_URL } from '@/lib/crs-grid';

/**
 * The CRS calculator page.
 *
 * NOTE ON COPY — READ BEFORE EDITING.
 *
 * An earlier draft of this page claimed that "most" (later "a lot of") published
 * calculators still award job-offer points. A verification pass refuted it: the
 * test used to reach that conclusion was invalid, because IRCC's Ministerial
 * Instructions retained the provisions *defining* arranged employment, so a
 * calculator may legitimately still ASK about a job offer and score it zero —
 * IRCC's own tool does. Two competitors were also misclassified as stale when
 * their scoring was in fact correct.
 *
 * So this page makes NO aggregate claim about competitors. It states what IRCC
 * changed, and it hands the reader a test they can run against ANY calculator
 * including ours. That is stronger anyway: it invites the reader to audit us.
 *
 * Do not reintroduce a comparative claim without evidence verified down to the
 * scoring behaviour of each named tool.
 */
export const metadata: Metadata = {
  title: 'CRS Calculator — Express Entry Points',
  description:
    'Free Express Entry CRS calculator on the grid in force since 3 November 2026, with high-wage work and job offers. Check it against IRCC’s own tables.',
  alternates: { canonical: '/tools/crs-calculator' },
};

const CRS_CHANGES_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html';
const JOB_OFFER_URL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment.html';

const FAQS = [
  {
    q: 'Why is my score different from another calculator?',
    a: 'The likeliest reason is the change IRCC made on 3 November 2026. A calculator not yet rebuilt for it will ignore high-wage Canadian work experience and high-wage job offers, or still treat every job offer the same. You can test any calculator yourself, including ours, using the check on this page.',
  },
  {
    q: 'Does a job offer earn CRS points?',
    a: 'Since 3 November 2026 it can, if the job is in an occupation on IRCC’s high-wage lists: 50, 70 or 100 points depending on the level. Any other job offer earns no CRS points. A job offer no longer needs an LMIA for Express Entry, and having one adds nothing. A valid offer still counts separately on the Federal Skilled Worker 67-point eligibility grid, and it can still matter for some provincial streams.',
  },
  {
    q: 'What score do I need?',
    a: 'There is no fixed number. The cut-off changes with almost every round of invitations and differs between types of round. Rounds held before 3 November 2026 also used the old points. Anyone quoting you a single guaranteed number is guessing. IRCC publishes the result of each round, and that is the only honest place to look.',
  },
  {
    q: 'Is this the official calculator?',
    a: 'No, and you should not treat it as one. We build the grid from IRCC’s published tables and compare it with them cell by cell. Run your numbers through IRCC’s own calculator before relying on them — if the two disagree, IRCC is right.',
  },
  {
    q: 'My score is low. Is that the end of it?',
    a: 'No. Express Entry is one route among several, and it is not the one we mainly file. A low CRS score often means your time is better spent on a work-permit route than on chasing points you cannot realistically gain.',
  },
  {
    q: 'Can you guarantee an invitation if I improve my score?',
    a: 'No. Nobody can. Improving your language scores genuinely does move the number — it is the biggest lever in the grid — but an invitation depends on the draws that actually happen, which are decided by IRCC.',
  },
];

export default async function CrsCalculatorPage() {
  const { digits } = await getWhatsAppChannel();

  return (
    <>
      <PageHero
        eyebrow={`Free tool · grid checked ${CRS_GRID_VERIFIED_ON}`}
        title={
          <>
            Express Entry CRS calculator, <span className="text-gold-300">and how to check it</span>
          </>
        }
        subtitle="Work out your Comprehensive Ranking System score on the grid IRCC has used since 3 November 2026, then test our arithmetic against IRCC’s own calculator. We will show you how."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-5xl">
          <CrsCalculator digits={digits} />
          <p className="mt-6 text-center text-ink-600">
            Got your score?{' '}
            <Link href="/express-entry/draws" className="font-semibold text-accent-500 link-underline">
              Compare it with the latest Express Entry draws →
            </Link>
          </p>
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What changed"
            title="Job offers can earn CRS points again, but only some of them"
            subtitle="On 3 November 2026 IRCC added a Labour Market Integration factor worth up to 150 points. Job-offer points had been gone since March 2025."
          />
          <div className="mt-8 space-y-4 leading-relaxed text-ink-600 text-pretty">
            <p>
              The new factor looks at two things and gives you the higher score, never both.
              One is Canadian work experience: the same length-of-work points as before, plus up
              to 70 for at least a year in an eligible high-wage occupation. The other is a job
              offer in an eligible high-wage occupation, worth 50, 70 or 100 points depending on
              its level.
            </p>
            <p>
              A job offer no longer needs an LMIA for Express Entry, and having one adds no extra
              points. An offer outside IRCC’s high-wage lists earns no CRS points at all, and an
              officer still has to be satisfied that any offer is genuine. IRCC’s online profile
              has not caught up with this and may still ask for LMIA details, so{' '}
              <a href={JOB_OFFER_URL} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
                follow IRCC’s instructions
              </a>{' '}
              when you enter an offer.
            </p>
            <p>
              If someone is selling you a job offer for the points, ask which occupation it is
              and check it against IRCC’s list yourself. The level depends on the occupation’s
              NOC code, not on the salary you are promised.{' '}
              <a href={CRS_CHANGES_URL} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
                Read IRCC’s explanation of the change
              </a>
              .
            </p>
            <p>
              A valid job offer also counts separately on the Federal Skilled Worker 67-point
              eligibility grid, and it can still matter for some provincial streams.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="How to test any CRS calculator, including this one">
              With no Canadian work experience entered, add a job offer in an occupation on IRCC’s
              high-wage list. The total should rise by 50, 70 or 100, depending on the occupation’s
              level. An offer in any other job should add nothing. If a calculator does something
              else, it is not on the grid IRCC has used since 3 November 2026. Do it to ours. We
              would rather you checked than trusted us.
            </Callout>
          </div>
          <div className="mt-8">
            <Callout title="Where the points actually are">
              Language is the biggest lever most people can still pull, and it is usually the
              cheapest. Retaking a test to move up a CLB band across all four abilities moves
              a score more than almost anything else within your control — a provincial
              nomination aside, and those are not something you simply decide to obtain.
            </Callout>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={OFFICIAL_CALCULATOR_URL}
              rel="noopener nofollow"
              target="_blank"
              className="btn btn-navy"
            >
              Cross-check on IRCC’s calculator
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/tools/work-permit-eligibility" className="btn btn-ghost">
              Or check the work-permit route
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Before you rely on a number" />
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="A number isn’t a plan"
        title="Knowing your score is the easy part"
        subtitle="What matters is whether Express Entry is your route at all — and if it isn’t, which one is. That is worth a proper conversation."
        page="tool-crs"
        waMessage="Hi, I used the CRS calculator on your site and I’d like to discuss my options."
      />
    </>
  );
}
