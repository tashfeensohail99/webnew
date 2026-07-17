import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  Icon,
} from '@/components/ui';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { site, SERVICE } from '@/lib/site';

/**
 * Cost is the first thing people search and the last thing this market answers.
 * Competitors hide it behind "contact us for a quote" because a number invites
 * comparison — which is exactly why publishing one is worth doing.
 *
 * The structure matters more than the figures: separating OUR fee from the
 * GOVERNMENT's fee is the single most useful thing on the page. Most people who
 * feel cheated by an agent were never told which part of their money the agent
 * kept, and a firm that itemises is making a claim the reader can check against
 * the government's own published fees.
 *
 * TODO(tashfeen): every [range] is a real number only the firm has. An invented
 * fee is worse than no page — prospects self-disqualify on a figure that isn't
 * yours, or hold you to one you never quoted.
 */
export const metadata: Metadata = {
  title: 'Our Fees',
  description:
    'What we charge, what the government charges, and why we separate the two. A paid consultation credited against your fee.',
  alternates: { canonical: '/fees' },
};

/*
  Source: crm agreements, live data pulled 2026-07-17. Active (non-cancelled,
  non-deleted) agreements with totalAmount > 0, grouped by categoryKey+currency.
  n is the real count. Zero-value drafts excluded.

  TODO(tashfeen): CONFIRM COMPOSITION before launch. This is Agreement.totalAmount —
  what the client contracts to pay the firm. If it already includes government
  fees passed through, then presenting it under "our fee" beside a separate
  "government fees" column double-counts and misleads. The whole point of this
  page is the split; getting the split wrong is worse than not publishing.

  Refresh: scripts/dig-real-outcomes.ts
*/
const FEE_ROWS: [string, string, string, string][] = [
  ['Canada visit visa', 'PKR 115,000 – 270,000', 'PKR 150,000', '51'],
  ['Canada work permit (C11)', 'PKR 2,600,000 – 3,000,000', 'PKR 2,600,000', '13'],
  ['Canada work permit (C11), billed in CAD', 'CAD 11,000 – 20,000', 'CAD 13,000', '10'],
  ['Judicial review after a refusal', 'PKR 350,000 – 650,000', 'PKR 450,000', '8'],
  ['US investor visa (E-2) · Canada C10', 'Too few cases to publish a range', '—', '2 each'],
];

const NO_CHARGE: [string, string][] = [
  [
    'We don’t charge on approval.',
    '“Pay us when your visa comes” sounds generous. It means the firm only earns if you’re approved — which is precisely the incentive that gets weak cases filed and documents “improved”. We bill for work done, not outcomes we don’t control.',
  ],
  [
    'We don’t take a percentage of your investment.',
    'If a route involves you investing money, that money is yours and goes into your business. Anyone taking a cut of it has an interest in the size of the investment, not in whether it’s right for you.',
  ],
  [
    'We don’t quote a fee before we know your case.',
    'Which is what the consultation is for. A number given before anyone has looked at your situation is a number invented to win you.',
  ],
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees, in the open"
        title="What this actually costs"
        subtitle="Most firms won’t put a number on a page. Here’s ours, and — more importantly — here’s which part of your money we keep and which part goes to a government."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: 'fees',
            message: 'Hi, I’d like to ask what my case would cost.',
          }}
        >
          Ask about fees
        </WhatsAppCta>
      </PageHero>

      {/* ===================== THE ONE REAL NUMBER ===================== */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Callout title={`The consultation: PKR ${site.consultFee.amount.toLocaleString()}`}>
            <p>
              Credited against your fee if you go ahead. If we tell you not to apply, that’s what the
              fee bought — an honest answer, and a refusal you didn’t put on your record.
            </p>
            <p className="mt-5">
              <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
                What happens in a consultation →
              </Link>
            </p>
          </Callout>
        </div>
      </Section>

      {/* ========================= TWO POCKETS ========================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where your money goes"
          title="Two different pockets"
          subtitle="Every immigration case involves at least two payments, and confusing them is how people get hurt."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <FeatureCard icon={<Icon name="building" />} kicker="Paid to us" title="Our professional fee">
            <p>
              What you pay us for the work — assessing, building and filing your case. This is the
              part we keep, and the part you should compare between firms.
            </p>
          </FeatureCard>
          <FeatureCard icon={<Icon name="scale" />} kicker="Paid to a government" title="Government fees">
            <p>
              Paid to IRCC, the Home Office, a consulate — not to us. These are published by those
              governments and you can look them up yourself. We pass them through at cost.
            </p>
          </FeatureCard>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Callout>
            <p>
              If a firm quotes you one lump sum and won’t break it down,{' '}
              <strong className="text-ink-900">you don’t know what you’re paying them.</strong> Ask.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ==================== WHAT WE HAVE CHARGED ==================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Real ranges, not a brochure"
          title="What we have actually charged"
          subtitle="Not a marketing range — these are the real spreads from agreements clients have signed with us. Where we have handled too few cases to show an honest range, we say so rather than inventing one."
        />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-rule bg-paper shadow-soft">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rule bg-paper-alt">
                <th className="p-4 font-semibold text-ink-900">Service</th>
                <th className="p-4 font-semibold text-ink-900">What clients have paid</th>
                <th className="p-4 font-semibold text-ink-900">Typical</th>
                <th className="p-4 font-semibold text-ink-900">Cases</th>
              </tr>
            </thead>
            <tbody className="text-ink-600">
              {FEE_ROWS.map(([svc, range, typical, cases]) => (
                <tr key={svc} className="border-b border-rule last:border-0">
                  <td className="p-4 font-medium text-ink-900">{svc}</td>
                  <td className="p-4">{range}</td>
                  <td className="p-4">{typical}</td>
                  <td className="p-4 tabular-nums">{cases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-ink-400 text-pretty">
          Government fees are on top of these and are paid to IRCC, not to us. Your own case may fall
          outside these ranges — they are what happened, not a quote.
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <Callout title="Why the visit visa spread is so wide">
            <p>
              Notice the spread on the visit visa: the cheapest case cost less than half the most
              expensive. That is not inconsistency — it is the difference between one straightforward
              applicant and a family with a refusal history. Anyone quoting you a single fixed number
              before looking at your file is quoting the wrong number.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ======================= HOW WE DON'T CHARGE ======================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The incentives we refuse"
          title="How we don’t charge"
          subtitle="How a firm structures its fee tells you what it’s optimising for. Here’s what we’ve deliberately ruled out — and why."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {NO_CHARGE.map(([term, def]) => (
            <FeatureCard key={term} icon={<Icon name="shield" />} title={term}>
              <p>{def}</p>
            </FeatureCard>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg text-ink-600 text-pretty">
          And the obvious one, which we’ll say again here:{' '}
          <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
            no fee buys you a visa
          </Link>
          . It buys you the work, done properly.
        </p>
      </Section>

      {/* ============================= CTA ============================= */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
          <p className="eyebrow eyebrow--light justify-center">Start with a conversation</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-balance sm:text-4xl">
            Ask what your case would cost
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-200 text-pretty">
            Tell us your situation and we’ll tell you the fee — and what the government will charge
            you on top.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppCta
              variant="ghost"
              intent={{
                service: SERVICE.WORK_PERMIT,
                page: 'fees',
                message: 'Hi, I’d like to ask what my case would cost.',
              }}
            >
              Ask about fees
            </WhatsAppCta>
            <Link href="/book-consultation" className="btn btn-gold">
              Book a consultation — PKR {site.consultFee.amount.toLocaleString()}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
