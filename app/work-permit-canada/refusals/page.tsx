import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, FeatureCard, Callout, FAQ, CTASection, Icon, type IconName } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * C11 spoke: refusals.
 *
 * Each reason below is one of the rules a C11 officer applies — the
 * Regulations (R200, R205(a)) and IRCC's own C11 instructions — not a
 * statistic and not a summary of court cases. We name no decisions: we could
 * not read them at source, and a case cited wrongly is worse than none.
 *
 * Same evergreen rule as /refusals/*: no deadlines or bar lengths printed here.
 * Those live on the pages this one links to, which point to the source.
 */
export const metadata: Metadata = {
  title: 'C11 Work Permit Refused? The Usual Reasons',
  description:
    'Why IRCC refuses C11 work permits — significant benefit, the business plan, funds, temporary intent, ownership — and what to do after a refusal.',
  alternates: { canonical: '/work-permit-canada/refusals' },
};

const PAGE = 'work-permit-canada-refusals';

const IRCC_C11 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html';

/** The rules a C11 decision turns on, and how each one fails. */
const REASONS: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: 'star',
    kicker: 'R205(a)',
    title: 'No significant benefit shown',
    body: 'The core test. The officer was not persuaded your business will benefit Canadians — through jobs, market expansion, innovation, exports or keeping Canadians in work. A business that only competes with established ones in a crowded market is IRCC’s own example of one that may not qualify.',
  },
  {
    icon: 'doc',
    kicker: 'The plan',
    title: 'A market report, not a start-up plan',
    body: 'IRCC asks whether the plan sets out concrete steps or is simply a detailed market analysis. Plans fall here when they describe an industry but not the business — no location, no suppliers, no hiring timeline, costs that do not add up.',
  },
  {
    icon: 'calculator',
    kicker: 'Money',
    title: 'Funds not shown, not separate, or not traced',
    body: 'Three different failures: not enough to live on for the stay, business money mixed with personal support money, or no proof of where the money you will invest came from.',
  },
  {
    icon: 'plane',
    kicker: 'R200(1)(b)',
    title: 'Not satisfied you will leave',
    body: 'C11 is for owners seeking only temporary residence. A year-round business with no plan to step back from managing it, or a file that reads as a move rather than a stay, fails here.',
  },
  {
    icon: 'user',
    kicker: 'R200(3)(a)',
    title: 'Not shown you can do the work',
    body: 'The officer must refuse if there are reasonable grounds to believe you cannot perform the work. For an owner that means running this business — IRCC weighs your skills, experience and language ability against it.',
  },
  {
    icon: 'scale',
    kicker: 'Control',
    title: 'Less than 51% — or control not proven',
    body: 'C11 is only for owners who control at least 51% of the business. Below that, IRCC treats you as an employee, and a different permit applies. Ownership on paper has to match the documents behind it.',
  },
];

const AFTER: { href: string; title: string; body: string }[] = [
  {
    href: '/refusals/gcms-notes',
    title: 'Read the officer’s notes',
    body: 'The letter names a ground. The notes say what the officer actually found — usually the difference between fixing the right thing and the wrong one.',
  },
  {
    href: '/refusals/re-applying',
    title: 'Re-apply with the weakness fixed',
    body: 'Often the right move, but only once you can say in one sentence what went wrong — and the new file answers it.',
  },
  {
    href: '/refusals/reconsideration',
    title: 'Ask IRCC to look again',
    body: 'A narrow route for a clear mistake, such as a document the officer overlooked. Not a second chance to argue the same file.',
  },
  {
    href: '/refusals/judicial-review',
    title: 'Challenge it in Federal Court',
    body: 'For an unreasonable or unfair decision. The deadline is short and runs from the day you are told — decide quickly.',
  },
];

const FAQS = [
  {
    q: 'Can I re-apply after a C11 refusal?',
    a: 'IRCC states that if an application is refused you can apply again at any time unless your decision letter says otherwise — so read your own letter first. The exception that matters is misrepresentation: a finding of misrepresentation carries a statutory bar, and re-applying into it makes things worse.',
  },
  {
    q: 'Will showing more money fix a C11 refusal?',
    a: 'Only if money was the problem. More funds do not answer a finding that the business brings no significant benefit, or that the plan is not credible. And a large new deposit with no history behind it can raise the question of where it came from — which is a funds problem of its own.',
  },
  {
    q: 'My refusal letter just ticks boxes. How do I know the real reason?',
    a: 'Refusal letters are built from standard grounds, and one ground can cover several different findings. The officer’s notes on your file usually say more. For your own information you can generally request them yourself; our page on the officer’s notes explains how.',
  },
  {
    q: 'Is judicial review worth it for a C11 refusal?',
    a: 'Sometimes. The Federal Court does not re-decide your application or grant a permit; it asks whether the officer’s decision was reasonable and fair. If it was not, the usual result is that a different officer decides the file again. It needs a lawyer, and the filing deadline is short.',
  },
  {
    q: 'Should I switch to a different route instead?',
    a: 'Possibly. If you intend to settle in Canada, IRCC itself points business owners away from C11 to permanent routes such as provincial business programmes or the Start-up Visa. A refusal is a good moment to ask whether C11 was ever the right fit.',
  },
];

export default function C11RefusalsPage() {
  return (
    <>
      <PageHero
        eyebrow="C11 work permit · Refusals"
        title={
          <>
            Why C11 work permits are refused —{' '}
            <span className="text-gold-300">and what each reason means.</span>
          </>
        }
        subtitle="A C11 decision turns on six rules. Knowing which one your application failed decides whether you re-apply, ask IRCC to look again, go to court — or change route."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your refusal read
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/work-permit-canada/business-plan" className="btn btn-ghost">
          What a C11 plan needs
        </Link>
      </PageHero>

      {/* ===================== THE REASONS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The grounds"
          title="The six rules a C11 decision turns on"
          subtitle={
            <>
              From the Immigration and Refugee Protection Regulations and IRCC’s{' '}
              <a href={IRCC_C11} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
                instructions to officers for C11
              </a>
              . Your letter may cite more than one.
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <FeatureCard key={r.title} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Callout title="The serious one: a document IRCC doubts">
            A concern that a document is not genuine, or that something material was left out, is a
            different order of problem from a weak plan — it can lead to a finding of
            misrepresentation, which carries a bar on applying again.{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              Read about misrepresentation
            </Link>{' '}
            before you file anything else.
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT NEXT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="After a refusal"
          title="Four ways forward"
          subtitle="Which one fits depends on which rule your application failed — and on whether the officer got it wrong or the file was weak."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {AFTER.map((a) => (
            <FeatureCard key={a.href} title={a.title} href={a.href} cta="Read the guide">
              {a.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="C11 refusal questions" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you re-apply"
        title="Find out which rule your C11 failed"
        subtitle="Send us the refusal letter, your business plan and anything that came with the decision. We’ll tell you what the refusal does and doesn’t establish, and which way forward makes sense. No one can guarantee an outcome, and we won’t."
        page={PAGE}
        waMessage="Hi, my C11 work permit was refused and I’d like to understand why before I re-apply."
      />
    </>
  );
}
