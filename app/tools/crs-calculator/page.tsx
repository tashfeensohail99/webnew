import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { CrsCalculator } from '@/components/tools/CrsCalculator';
import { getWhatsAppChannel } from '@/lib/wa-channel';
import { CRS_GRID_VERIFIED_ON, OFFICIAL_CALCULATOR_URL } from '@/lib/crs-grid';

/**
 * The CRS calculator page.
 *
 * The highest-search-volume tool in this industry, and the one most competitors get
 * wrong — a large number of published calculators still award points for a job offer,
 * which stopped counting in March 2025. Being right about that is the whole reason
 * this page is worth having.
 */
export const metadata: Metadata = {
  title: 'CRS Calculator — Express Entry Points (Updated)',
  description:
    'Free Express Entry CRS score calculator, rebuilt from IRCC’s current grid — including the 2025 removal of job-offer points that most calculators still get wrong.',
  alternates: { canonical: '/tools/crs-calculator' },
};

const FAQS = [
  {
    q: 'Why is my score lower here than on other websites?',
    a: 'Most likely because they are still awarding you points for a job offer. Those points were removed from the CRS grid in March 2025, and a lot of published calculators were never updated. If another site gives you 50 or 200 points for arranged employment, that site is out of date.',
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
            Express Entry CRS calculator, <span className="text-gold-300">actually up to date</span>
          </>
        }
        subtitle="Work out your Comprehensive Ranking System score against the grid as it stands today — including the 2025 changes that a lot of calculators still haven’t caught up with."
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
            title="Job-offer points are gone"
            subtitle="In March 2025 IRCC removed the points previously awarded for arranged employment. A great many calculators online never updated."
          />
          <div className="mt-8 space-y-4 leading-relaxed text-ink-600 text-pretty">
            <p>
              If you have been told your score is comfortably above the cut-off because of a
              job offer, check it again here. People have paid for LMIA-backed offers on the
              strength of points that no longer exist — which is an expensive way to find out
              a website was stale.
            </p>
            <p>
              The grid also moves in quieter ways. IRCC can change it through ministerial
              instructions with very little notice, so we date every check rather than
              claiming the page is permanently current.
            </p>
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
