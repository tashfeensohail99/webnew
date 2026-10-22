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
 * including ours. That is stronger anyway: it invites the reader to audit us,
 * and it needs no maintenance.
 *
 * Do not reintroduce a comparative claim without evidence verified down to the
 * scoring behaviour of each named tool.
 */
export const metadata: Metadata = {
  title: 'CRS Calculator — Express Entry Points',
  description:
    'Free Express Entry CRS calculator on IRCC’s current grid, including the March 2025 removal of job-offer points. Check our arithmetic against IRCC’s tool.',
  alternates: { canonical: '/tools/crs-calculator' },
};

const FAQS = [
  {
    q: 'Why is my score different from another calculator?',
    a: 'The most common reason is job-offer points. On 25 March 2025 IRCC stopped awarding the CRS bonus for arranged employment — previously 50 or 200 points depending on the occupation. If a calculator still adds points for a job offer, it is applying a rule that no longer exists. You can test that yourself: run any calculator twice with identical answers, changing only the job-offer question. If the total moves, that tool is out of date. Run the same test on ours.',
  },
  {
    q: 'So a job offer counts for nothing now?',
    a: 'Not quite, and this is a distinction worth getting right. What was removed was the CRS bonus — the score that ranks you inside the Express Entry pool. Arranged employment still earns up to 10 points on the separate Federal Skilled Worker 67-point eligibility grid, which decides whether you qualify at all. A calculator showing "arranged employment — 10 points" on the 67-point grid is correct, not stale. A job offer can also still matter for some provincial streams.',
  },
  {
    q: 'What score do I need?',
    a: 'There is no fixed number. The cut-off changes with almost every round of invitations and differs between general draws and category-based draws. Anyone quoting you a single guaranteed number is guessing. IRCC publishes the result of each round, and that is the only honest place to look.',
  },
  {
    q: 'Is this the official calculator?',
    a: 'No, and you should not treat it as one. We rebuild the grid from IRCC’s published tables and check it by hand. Run your numbers through IRCC’s own calculator before relying on them — if the two disagree, IRCC is right.',
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
        subtitle="Work out your Comprehensive Ranking System score against the grid as it stands today — then test our arithmetic against IRCC’s own calculator. We will show you how."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-5xl">
          <CrsCalculator digits={digits} />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What changed"
            title="The CRS bonus for a job offer was removed"
            subtitle="On 25 March 2025 IRCC stopped awarding the arranged-employment bonus — previously 50 or 200 points depending on the occupation."
          />
          <div className="mt-8 space-y-4 leading-relaxed text-ink-600 text-pretty">
            <p>
              If you have been told your score sits comfortably above the cut-off because of
              a job offer, it is worth recalculating. People have paid real money for
              LMIA-backed offers partly for points that no longer apply to the CRS.
            </p>
            <p>
              Be careful with the opposite mistake too. A job offer was not deleted from
              Canadian immigration scoring altogether — it still earns up to 10 points on the
              Federal Skilled Worker 67-point eligibility grid, and it can still matter for
              some provincial streams. Only the CRS bonus went.
            </p>
            <p>
              IRCC called the removal temporary and has not set an end date. It has since
              signalled an interest in reintroducing job-offer points for high-wage
              occupations only, and consulted on it in 2026 — but nothing is settled: no
              values, no date, and any change has to appear in the Canada Gazette first. We
              would not plan around the points coming back.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="How to test any CRS calculator, including this one">
              Run it twice with identical answers, changing only the job-offer question. If
              your total moves, that tool is still applying a rule IRCC removed in March 2025.
              Do it to ours. We would rather you checked than trusted us.
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
