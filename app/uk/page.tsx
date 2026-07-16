import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { SERVICE } from '@/lib/site';

/**
 * The UK page's job is to kill two myths that are sold hard in Pakistan:
 * "self-sponsorship" as though it were a visa category, and the Expansion Worker
 * route as though it led to settlement. Both cost people real money.
 *
 * Only gov.uk-verified figures appear here (see lib/facts.ts). The £34,830 PhD
 * rate, £30,960 new-entrant rate and £25,000 floor are all in circulation, all
 * contradicted between sources, and none are stated on this page — copying a
 * competitor's numbers inherits their errors and their liability.
 */
export const metadata: Metadata = {
  title: 'UK Visas from Pakistan',
  description:
    'The £41,700 reality of the UK Skilled Worker route, why "self-sponsorship" is not a visa, and why the Expansion Worker route does not lead to settlement.',
  alternates: { canonical: '/uk' },
};

const PAGE = 'uk';

export default function UkPage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            UK visas from Pakistan — the honest version
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200 text-pretty">
            The UK got substantially harder in 2025. Two of the routes most heavily advertised in
            Pakistan don’t work the way they’re being sold.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-serif text-3xl text-balance">The Skilled Worker reality check</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          This is the main UK work route, and the numbers are the numbers:
        </p>
        <ul className="mt-5 space-y-2 text-ink-600">
          {[
            'The salary must be at least £41,700 — or the going rate for that occupation, whichever is HIGHER. Not whichever is lower.',
            'The job must be at degree level (RQF 6). Around 180 occupations were removed from the route on 22 July 2025.',
            'You need a licensed UK sponsor with a genuine vacancy. Not a favour, not a paper job.',
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span className="text-pretty">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-ink-600 text-pretty">
          If someone is offering you a UK job below those thresholds, one of you is going to have a
          problem — and it will be you.
        </p>

        {/* Myth 1 */}
        <div className="mt-12 rounded border border-rule border-l-[3px] border-l-accent-500 bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">
            “Self-sponsorship” is not a UK visa
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            There is no such category. Look at the UK government’s list of visas — it isn’t there.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            What people mean by it is: set up a UK company, get it licensed as a sponsor, and have it
            sponsor you on a Skilled Worker visa. That is a real thing. But it does not escape any of
            the rules above — the same £41,700, the same degree-level requirement, and a genuine
            vacancy that survives Home Office scrutiny.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            It is sold in Pakistan as a shortcut around the salary rules. It is the opposite: it is
            the same rules, plus you now also have to run a real company.
          </p>
        </div>

        {/* Myth 2 */}
        <div className="mt-6 rounded border border-rule border-l-[3px] border-l-accent-500 bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">
            The Expansion Worker route does not lead to settlement
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            It is for sending someone to set up a UK branch of an existing overseas business. It is
            capped at two years and it does not lead to indefinite leave to remain.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            It is routinely mis-sold in Pakistan as a settlement route. It isn’t one. If your goal is
            to settle in the UK, this is not the door.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">On the “10-year settlement” news</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          You may have read that the UK is extending settlement from 5 years to 10. As things stand
          it is a <strong className="text-ink-900">proposal, not law</strong>. The consultation closed
          in February 2026, no government response has been published, and no rules have been laid.
          A House of Lords committee came out against it in June.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Anyone telling you it is already the law is wrong. Anyone telling you it definitely won’t
          happen is also guessing. We’ll update this page when there is something real to report.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What we help with</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Visitor visas, and refusals. If your UK visit visa was refused, the letter names a ground —
          and that ground tells you whether reapplying is worth it or whether you are about to waste
          another fee. Send it to us.
        </p>

        <ReviewedBy updated="[date of last legal review]" />
      </article>

      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-serif text-3xl text-balance">Been quoted a UK route?</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Send us what you were told and what you were quoted. We’ll tell you whether it is real.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta
              intent={{
                service: SERVICE.VISIT_VISA,
                page: PAGE,
                targetCountry: 'United Kingdom',
                message: 'Hi, I’d like to ask about a UK visa from Pakistan.',
              }}
            >
              Ask about the UK
            </WhatsAppCta>
            <Link
              href="/book-consultation"
              className="rounded border border-rule bg-paper px-5 py-3 font-semibold text-ink-800 hover:bg-paper-alt"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
