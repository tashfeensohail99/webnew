import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { site, SERVICE } from '@/lib/site';

/**
 * The volume leader — 55 signed agreements, ~PKR 167k each, 42% close.
 *
 * It is the entry rung, not the headline: most people meet the firm here. The
 * strategically important part of the page is the refusal bridge at the bottom,
 * which walks a refused visitor across to the JR practice (50% close, ~PKR 459k).
 *
 * The only approval figure stated is Canada's GLOBAL rate, which IRCC publishes.
 * Every Pakistan-specific number in circulation (35–50%) is unsourced — IRCC does
 * not publish per-country visitor rates — so none appears here. See lib/facts.ts.
 */
export const metadata: Metadata = {
  title: 'Canada Visit Visa from Pakistan',
  description:
    'What a Canadian visitor visa actually requires from Pakistani applicants, why most refusals happen, and what to do if yours was refused.',
  alternates: { canonical: '/canada-visit-visa' },
};

const PAGE = 'canada-visit-visa';

export default function VisitVisaPage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Canada visit visa, from Pakistan
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200 text-pretty">
            The most common Canadian visa — and the most commonly refused. Most of the refusals we
            see were avoidable.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-serif text-3xl text-balance">What this visa actually is</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          A temporary resident visa lets you visit Canada — family, tourism, business meetings, a
          conference. It is not a work permit and it is not a route to staying. Applying for it as
          though it were is one of the reliable ways to be refused.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Worldwide, Canada approved about <strong className="text-ink-900">49%</strong> of visitor
          visa applications as of late 2025. That is everyone, globally — not a Pakistan figure.
          Anyone quoting you a precise Pakistan approval rate is repeating something they cannot
          source, because IRCC does not publish it.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What the officer is really asking</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          One question sits underneath the whole application:{' '}
          <strong className="text-ink-900">will this person go home?</strong>
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Everything else — your job, your property, your family, your bank statements, your travel
          history — is evidence for or against that one question. Most people assemble documents.
          The ones who get approved build an argument.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">Where Pakistani applications fall down</h2>
        <dl className="mt-6 space-y-5">
          {[
            [
              'Money that appeared last month',
              'A large balance with no history behind it reads as borrowed for the application — because it usually was. History matters more than the number.',
            ],
            [
              'Funds in someone else’s name',
              'Your father’s account, your brother’s account. The officer wants to see that YOU can pay for this trip.',
            ],
            [
              'A trip that doesn’t add up',
              'A two-week holiday that costs more than you earn in a year, or leave your employer would never grant, invites exactly the doubt you are trying to remove.',
            ],
            [
              'Ties asserted rather than evidenced',
              '“I have a job and a family in Pakistan” is a claim. A letter, a payslip history, and property papers are evidence. The officer reads evidence.',
            ],
            [
              'Documents that contradict each other',
              'A salary that doesn’t match the bank credits. Two dates that disagree. Small inconsistencies do disproportionate damage — and can look deliberate.',
            ],
          ].map(([term, def]) => (
            <div key={term}>
              <dt className="font-semibold">{term}</dt>
              <dd className="mt-1 text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-serif text-3xl text-balance">If you’re in the Gulf</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Many of the people we work with apply from Saudi Arabia, the UAE, Oman or Qatar. It changes
          the file: your residency status, your employer letter, your salary transfers and your
          police certificate all come from where you live, not from Pakistan — while parts of your
          history are still Pakistani.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          You stay where you are. We handle the Pakistan side.
        </p>

        {/* The product ladder into the JR practice — the one sanctioned cross-hub link. */}
        <div className="mt-12 rounded border border-rule border-l-[3px] border-l-accent-500 bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">Already refused?</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Then start somewhere else. The letter you received doesn’t tell you the real reason — the
            officer’s actual notes are in a separate file you are entitled to request. Reapplying
            without reading them is guessing, and a second refusal makes the third attempt harder.
          </p>
          <p className="mt-4">
            <Link href="/canada-visa-refused" className="font-semibold text-accent-500 underline">
              What to do after a refusal →
            </Link>
          </p>
        </div>

        <ReviewedBy updated="[date of last legal review]" />
      </article>

      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-serif text-3xl text-balance">Tell us about your trip</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Where you’re going, why, who’s paying, and whether you’ve ever been refused — by any
            country. That last one changes everything.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta
              intent={{
                service: SERVICE.VISIT_VISA,
                page: PAGE,
                targetCountry: 'Canada',
                message: 'Hi, I’d like to apply for a Canada visit visa.',
              }}
            >
              Ask about a visit visa
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
