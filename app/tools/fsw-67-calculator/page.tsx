import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { FswCalculator } from '@/components/tools/FswCalculator';
import { getWhatsAppChannel } from '@/lib/wa-channel';
import { FSW_GRID_VERIFIED_ON } from '@/lib/fsw-grid';

/**
 * The FSW 67-point eligibility calculator.
 *
 * Exists largely to separate two things people merge: the ELIGIBILITY grid that
 * decides whether the Federal Skilled Worker class is open to you at all, and
 * the CRS RANKING score that decides your position once you are in the pool.
 */
export const metadata: Metadata = {
  title: 'FSW 67-Point Calculator (Federal Skilled Worker)',
  description:
    'Work out your Federal Skilled Worker points against the 67-point pass mark set in the immigration regulations. Not the same as your CRS score.',
  alternates: { canonical: '/tools/fsw-67-calculator' },
};

const FAQS = [
  {
    q: 'How is this different from the CRS calculator?',
    a: 'They answer different questions. This grid decides whether the Federal Skilled Worker class is open to you at all — it is a pass or fail against a fixed mark. The CRS score decides where you rank among everyone already in the Express Entry pool. You need to clear this first; the CRS number only matters afterwards.',
  },
  {
    q: 'A job offer still counts here? I read that those points were removed.',
    a: 'Both are true, and the distinction matters. In March 2025 IRCC removed the job-offer bonus from the CRS ranking score. It did not remove arranged employment from this eligibility grid, which is set in the Regulations. So a qualifying offer helps you clear the pass mark here while adding nothing to your CRS ranking.',
  },
  {
    q: 'I never had a work permit, so I answered no to Canadian work experience.',
    a: 'Check that again. The Regulations say work "under a work permit or authorized under section 186" — section 186 covers work you were allowed to do without a permit. If you worked in Canada lawfully without needing a permit, that can still count. The same applies to study authorised without a study permit.',
  },
  {
    q: 'Does my cousin in Toronto count as a relative?',
    a: 'No. The qualifying list is parent, grandparent, child, grandchild, sibling, aunt or uncle, and niece or nephew — of you or your accompanying partner. Cousins are not on it, despite a lot of websites saying otherwise.',
  },
  {
    q: 'I cleared the pass mark. What happens next?',
    a: 'It means the class is open to you, not that you have been invited. You would still need your credentials assessed, your language results in hand, and a profile in the Express Entry pool — where your CRS score determines whether an invitation follows. Clearing this grid is the beginning of the process, not the end of it.',
  },
];

export default async function FswCalculatorPage() {
  const { digits } = await getWhatsAppChannel();

  return (
    <>
      <PageHero
        eyebrow={`Free tool · grid checked ${FSW_GRID_VERIFIED_ON}`}
        title={
          <>
            The 67-point test, <span className="text-gold-300">before the CRS score</span>
          </>
        }
        subtitle="Whether the Federal Skilled Worker class is open to you at all is decided by a separate grid set in the Regulations. This works it out."
      />

      <Section tone="paper">
        <div className="mx-auto max-w-5xl">
          <FswCalculator digits={digits} />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Two scoreboards"
            title="Eligibility first, ranking second"
            subtitle="Almost every confusion in this area comes from treating one number as the other."
          />
          <div className="mt-8 space-y-4 leading-relaxed text-ink-600 text-pretty">
            <p>
              This grid is a gate. You either clear the pass mark or the Federal Skilled
              Worker class is not open to you, and no amount of ranking points changes that.
              It is set in the Regulations, so it moves rarely.
            </p>
            <p>
              The CRS score is a queue position. It only exists once you are in the pool, it
              is compared against everyone else in it, and IRCC can change how it works with
              relatively little notice — as it did in March 2025 when job-offer points came
              out of the ranking but stayed in this grid.
            </p>
          </div>
          <div className="mt-8">
            <Callout title="If you fell short on language">
              Falling below the threshold in even one ability scores nil for the entire
              language factor, which is 28 of the 100 points on offer. That sounds harsh, and
              it is also the most improvable thing on the page — one focused retake on your
              weakest ability can move a failing profile to a passing one.
            </Callout>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/tools/crs-calculator" className="btn btn-navy">
              Now check your CRS ranking
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/tools/clb-converter" className="btn btn-ghost">
              Convert my test scores to CLB
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
        eyebrow="Clearing the gate is not the same as getting in"
        title="Whether this is your route is a different question"
        subtitle="Plenty of people clear the pass mark and still have no realistic path through Express Entry. We would rather tell you that early."
        page="tool-fsw"
        waMessage="Hi, I used the FSW 67-point calculator on your site and I’d like to discuss my options."
      />
    </>
  );
}
