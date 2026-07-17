import type { Metadata } from 'next';
import Link from 'next/link';
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

export default function FeesPage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            What this actually costs
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200 text-pretty">
            Most firms won’t put a number on a page. Here’s ours, and — more importantly — here’s
            which part of your money we keep and which part goes to a government.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        {/* The one number that is real today. */}
        <div className="rounded border border-rule border-l-[3px] border-l-accent-500 bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">
            The consultation: PKR {site.consultFee.amount.toLocaleString()}
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Credited against your fee if you go ahead. If we tell you not to apply, that’s what the
            fee bought — an honest answer, and a refusal you didn’t put on your record.
          </p>
          <p className="mt-4">
            <Link href="/book-consultation" className="font-semibold text-accent-500 underline">
              What happens in a consultation →
            </Link>
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">Two different pockets</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Every immigration case involves at least two payments, and confusing them is how people get
          hurt:
        </p>
        <dl className="mt-6 space-y-5">
          <div className="border-l-2 border-accent-500 pl-4">
            <dt className="font-semibold">Our professional fee</dt>
            <dd className="mt-1 text-ink-600 text-pretty">
              What you pay us for the work — assessing, building and filing your case. This is the
              part we keep, and the part you should compare between firms.
            </dd>
          </div>
          <div className="border-l-2 border-rule pl-4">
            <dt className="font-semibold">Government fees</dt>
            <dd className="mt-1 text-ink-600 text-pretty">
              Paid to IRCC, the Home Office, a consulate — not to us. These are published by those
              governments and you can look them up yourself. We pass them through at cost.
            </dd>
          </div>
        </dl>
        <p className="mt-5 text-ink-600 text-pretty">
          If a firm quotes you one lump sum and won’t break it down,{' '}
          <strong className="text-ink-900">you don’t know what you’re paying them.</strong> Ask.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">Our fees by service</h2>
        {/* TODO(tashfeen): real ranges. Do not publish this section until they exist. */}
        <div className="mt-6 rounded border border-dashed border-accent-500 bg-accent-50 p-5">
          <p className="text-sm text-ink-600">
            <strong className="text-ink-900">Not yet published.</strong> Real ranges required from
            the firm before this section ships — see <code className="font-mono text-xs">app/fees/page.tsx</code>.
            An invented figure is worse than none: prospects self-disqualify on a number that isn’t
            ours, or hold us to one we never quoted.
          </p>
        </div>
        <div className="mt-6 overflow-x-auto rounded border border-rule">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rule bg-paper-alt">
                <th className="p-3 font-semibold">Service</th>
                <th className="p-3 font-semibold">Our fee</th>
                <th className="p-3 font-semibold">Government fees</th>
              </tr>
            </thead>
            <tbody className="text-ink-600">
              {[
                ['Canada work permit (C11)', '[range]', '[amount] — paid to IRCC'],
                ['Canada visit visa', '[range]', '[amount] — paid to IRCC'],
                ['Visa refused — review of your case', '[range]', '—'],
                ['Judicial review (Federal Court)', '[range]', '[court filing fees]'],
              ].map(([svc, ours, govt]) => (
                <tr key={svc} className="border-b border-rule last:border-0">
                  <td className="p-3 font-medium text-ink-900">{svc}</td>
                  <td className="p-3">{ours}</td>
                  <td className="p-3">{govt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">How we don’t charge</h2>
        <dl className="mt-6 space-y-5">
          {[
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
          ].map(([term, def]) => (
            <div key={term}>
              <dt className="font-semibold">{term}</dt>
              <dd className="mt-1 text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-ink-600 text-pretty">
          And the obvious one, which we’ll say again here:{' '}
          <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 underline">
            no fee buys you a visa
          </Link>
          . It buys you the work, done properly.
        </p>
      </article>

      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-serif text-3xl text-balance">Ask what your case would cost</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Tell us your situation and we’ll tell you the fee — and what the government will charge
            you on top.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta
              intent={{
                service: SERVICE.WORK_PERMIT,
                page: 'fees',
                message: 'Hi, I’d like to ask what my case would cost.',
              }}
            >
              Ask about fees
            </WhatsAppCta>
            <Link
              href="/book-consultation"
              className="rounded border border-rule bg-paper px-5 py-3 font-semibold text-ink-800 hover:bg-paper-alt"
            >
              Book a consultation — PKR {site.consultFee.amount.toLocaleString()}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
