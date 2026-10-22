import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, FeatureCard, Callout, FAQ, CTASection, Icon, type IconName } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * C11 spoke: the business plan.
 *
 * Every point on this page is taken from IRCC's own instructions to officers
 * for R205(a) – C11 (linked below, last modified 27 May 2025) — the checklist an
 * officer is actually told to apply. Nothing here comes from case law we could
 * not read at source, and there is no template: IRCC publishes none, and a
 * template plan is the thing officers learn to recognise first.
 *
 * Same evergreen rule as the rest of the site: no dollar figures. The support
 * funds are LICO-based and IRCC moves them; we link instead of printing them.
 */
export const metadata: Metadata = {
  title: 'C11 Business Plan: What IRCC Officers Look For',
  description:
    'What a C11 business plan must show an IRCC officer — concrete start-up steps, location, costs, wages, customers and the source of your funds.',
  alternates: { canonical: '/work-permit-canada/business-plan' },
};

const PAGE = 'work-permit-canada-business-plan';

const IRCC_C11 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html';

function Official({ children }: { children: ReactNode }) {
  return (
    <a href={IRCC_C11} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

/** What IRCC tells officers to weigh in the plan — in its order, in plain words. */
const CHECKS: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: 'doc',
    kicker: 'The first question',
    title: 'Concrete steps, not a market report',
    body: 'IRCC asks officers whether the plan sets out concrete steps to start the business, or is simply a detailed market analysis. Pages of industry statistics do not answer it. What you will do in the first weeks and months — premises, registration, suppliers, first hires, first sales — does.',
  },
  {
    icon: 'building',
    kicker: 'Location',
    title: 'Why there, and not somewhere else',
    body: 'Where the business will operate is on IRCC’s list, and it can decide the case. IRCC’s own example: a convenience store competing with established Canadian businesses in a large market may not qualify, while the same store in a remote area may.',
  },
  {
    icon: 'globe',
    kicker: 'Sourcing',
    title: 'Where your product comes from',
    body: 'If you will import, the plan has to show it — including import costs and duties. A margin that only works before duty is paid is a margin an officer can check.',
  },
  {
    icon: 'calculator',
    kicker: 'Finances',
    title: 'Start-up costs, wages — and whether your money covers them',
    body: 'IRCC lists start-up costs, wages, and whether the funds cover them. The arithmetic has to close: every cost in the plan should be paid for by money you can show.',
  },
  {
    icon: 'chat',
    kicker: 'Marketing and customers',
    title: 'Who buys, and how they find you',
    body: 'A named customer base and a realistic way of reaching it. “Everyone in Canada” is not a customer base.',
  },
  {
    icon: 'user',
    kicker: 'Jobs',
    title: 'Jobs that matter for the area, at fair pay',
    body: 'Officers consider whether the business will be viable and create jobs significant for the area, at the median wage or higher so that it does not depress wages. Show the roles, when you will hire, and what you will pay.',
  },
];

const FAQS = [
  {
    q: 'Is there a minimum investment for a C11 work permit?',
    a: 'No. IRCC’s instructions set no minimum investment, and they say plainly that neither the type of business nor the amount spent is what makes it significant — what matters is how your work benefits Canadians, permanent residents or a local economy. Officers do have discretion to judge how much money it really takes to establish and run your business, so the plan’s costs have to be realistic.',
  },
  {
    q: 'Does IRCC have a business plan template?',
    a: 'No. IRCC publishes the points officers consider — start-up steps, location, sourcing, finances, marketing and customers, jobs and wages — not a template. A plan built around those points answers the officer’s questions; a generic template usually answers none of them.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'Two separate amounts. The business funds the plan says it needs, with proof of where that money came from. And personal funds to support yourself and your family, which IRCC ties to the low-income cut-off for your family size, for at least 18 months or the length of your stay if shorter. IRCC updates that figure, so check it on IRCC’s page rather than trusting a number on any website, ours included.',
  },
  {
    q: 'Do I have to hire Canadians?',
    a: 'There is no fixed number. Job creation is one of the benefits IRCC lists, and officers consider whether the business will create jobs significant for the area at the median wage or higher. A plan that hires no one has to show its benefit to Canada some other way — market expansion, innovation, exports or keeping Canadians in work.',
  },
  {
    q: 'How long should the plan cover?',
    a: 'At least the length of the permit you are asking for. IRCC says the work should normally not exceed 18 months; asking for longer means showing a definite plan to move out of managing the business, such as hiring a manager. Seasonal businesses are treated as temporary by nature; a year-round business needs that exit plan.',
  },
  {
    q: 'Can someone else write my business plan?',
    a: 'You can get help, but the plan has to be yours. The officer is assessing whether you can make this business work — IRCC lists your skills and language ability among the factors — so every number and every step in it should be something you can explain.',
  },
];

export default function C11BusinessPlanPage() {
  return (
    <>
      <PageHero
        eyebrow="C11 work permit · Business plan"
        title={
          <>
            A C11 business plan is a start-up plan,{' '}
            <span className="text-gold-300">not a market report.</span>
          </>
        }
        subtitle="IRCC tells its officers what to look for in a C11 business plan. Here is that checklist in plain words — and what each point means for yours."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your plan read
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/work-permit-canada" className="btn btn-ghost">
          C11 work permit guide
        </Link>
      </PageHero>

      {/* ===================== THE CHECKLIST ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What the officer checks"
          title="Six things IRCC tells officers to look at"
          subtitle={
            <>
              From IRCC’s{' '}
              <Official>instructions to officers for C11 work permits</Official> (last modified 27 May
              2025). Read them yourself — they are short, public and the only rules that count.
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHECKS.map((c) => (
            <FeatureCard key={c.title} icon={<Icon name={c.icon} />} kicker={c.kicker} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== THE MONEY ===================== */}
      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The money" title="Two pots of money, both proven" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                IRCC wants the money for the business kept separate from the money you will live on —
                and both shown.
              </p>
              <p>
                <strong className="text-ink-900">Business funds</strong> are whatever your plan says
                it takes to start and run the business. You must prove where the money you will
                invest came from. Money that appears in an account shortly before you apply, with no
                trail behind it, is exactly what that requirement exists to test.
              </p>
              <p>
                <strong className="text-ink-900">Personal support funds</strong> are tied to the
                low-income cut-off for your family size, for at least 18 months or your length of stay
                if that is shorter. IRCC moves the figure, so{' '}
                <Official>check it at the source</Official>.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="The test it serves" title="“Significant benefit” is what the plan has to prove" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                A C11 permit is issued because your work brings a significant benefit to Canada. IRCC
                names the kinds of benefit it means: market expansion, job creation, new products or
                services, export growth, or keeping Canadians in work.
              </p>
              <p>
                It also names what does not count on its own: the type of business, or the amount you
                spend. The plan has to connect your business to one of those benefits — and connect
                you to the business, because IRCC also weighs whether your skills and language
                ability make it more likely to succeed.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== TEMPORARY ===================== */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Callout title="Built for a temporary stay">
            <p>
              C11 is for business owners seeking only temporary residence. IRCC says the work should
              normally not exceed 18 months; a longer request needs a definite plan to step back from
              managing the business, such as hiring a manager. Seasonal businesses are temporary by
              nature — a year-round one needs that plan written in.
            </p>
            <p className="mt-4">
              If what you really want is to settle in Canada, IRCC points business owners to other
              routes — provincial business programmes and the Start-up Visa among them.{' '}
              <Link href="/business-immigration" className="font-semibold text-accent-500 link-underline">
                See the business immigration routes
              </Link>
              . And you must control at least 51% of the business for C11 at all; below that, you
              would apply as an employee.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="C11 business plan questions" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-ink-600 text-pretty">
          Already refused?{' '}
          <Link href="/work-permit-canada/refusals" className="font-semibold text-accent-500 link-underline">
            Why C11 applications are refused, and what to do next
          </Link>
          .
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you file"
        title="Have your plan read against IRCC’s checklist"
        subtitle="Bring your draft plan and your proof of funds. We’ll tell you where an officer is likely to stop — and whether C11 is the right route for you at all. No one can guarantee an outcome, and we won’t."
        page={PAGE}
        waMessage="Hi, I’m preparing a C11 business plan and would like it reviewed."
      />
    </>
  );
}
