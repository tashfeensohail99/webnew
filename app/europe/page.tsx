import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { SERVICE } from '@/lib/site';

/**
 * Europe is the page where honesty is worth the most, because this is where
 * Pakistani applicants are most heavily mis-sold: Portugal's "5 years to
 * citizenship" (now 10), Malta passports (ruled illegal), Spain's Golden Visa
 * (abolished), Hungary work permits (never available to Pakistanis), Caribbean
 * passports for Schengen (on an EU phase-out clock).
 *
 * Every one of those corrections costs a sale and buys the next ten. No
 * competitor will publish them, because their business depends on not doing so.
 *
 * All facts here are the 'primary' entries in lib/facts.ts. Nothing unverified
 * is stated. See lib/facts.ts for sources and dates.
 */
export const metadata: Metadata = {
  title: 'Europe & Schengen from Pakistan',
  description:
    'Schengen visitor visas, and the truth about European residence routes — including what has closed. Portugal now takes 10 years to citizenship, not 5.',
  alternates: { canonical: '/europe' },
};

const PAGE = 'europe';

const CLOSED = [
  [
    'Malta passports',
    'Ruled unlawful by the EU’s highest court in April 2025. That ended the last citizenship-by-investment scheme in the European Union. If anyone is still selling you a Maltese passport, walk away.',
  ],
  [
    'Spain’s Golden Visa',
    'Abolished. It stopped accepting new applications on 3 April 2025.',
  ],
  [
    'Hungary work permits',
    'Hungary has not accepted guest worker permits since June 2026 — and Pakistan was never on its eligible list in the first place. It covered Armenia, Georgia and the Philippines. It is still advertised across Pakistan. It was never available to you.',
  ],
  [
    'Vanuatu passports',
    'Vanuatu permanently lost Schengen visa-free access for every one of its passport holders in December 2024. People paid for that passport specifically to travel to Europe.',
  ],
];

export default function EuropePage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Europe and Schengen, from Pakistan
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200 text-pretty">
            More Pakistanis are mis-sold European routes than any other destination. Before we tell
            you what works, here is what doesn’t.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        {/* The Portugal correction — the single most valuable thing on this page. */}
        <div className="rounded border border-rule border-l-[3px] border-l-accent-500 bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">
            Portugal now takes 10 years to citizenship. Not 5.
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            The law changed on 19 May 2026. For Pakistani nationals, naturalisation now requires{' '}
            <strong className="text-ink-900">ten years</strong> of residence, and the clock starts
            from the day your first residence permit is issued — not the day you apply.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            It applies the same way to the D7 and to the Golden Visa. Only applications already filed
            before 19 May 2026 keep the old terms.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            <strong className="text-ink-900">Most consultants in Pakistan are still selling the
            five-year story.</strong> Some don’t know. Some do. Either way, if someone quotes you five
            years for Portugal today, you have learned something useful about them.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">What has closed</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          These are still advertised in Pakistan. None of them are available to you.
        </p>
        <dl className="mt-6 space-y-5">
          {CLOSED.map(([term, def]) => (
            <div key={term} className="border-l-2 border-rule pl-4">
              <dt className="font-semibold">{term}</dt>
              <dd className="mt-1 text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>

        {/* Caribbean — the disclosure that makes selling it defensible, or not. */}
        <h2 className="mt-12 font-serif text-3xl text-balance">
          Caribbean passports are on a clock
        </h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Antigua, Dominica, Grenada, St Kitts and St Lucia all sell citizenship. Almost every
          Pakistani buyer wants one for the same reason: visa-free travel to Europe.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          In June 2026 the European Commission wrote to all five demanding they{' '}
          <strong className="text-ink-900">phase these schemes out by 1 June 2028</strong>, with
          interim measures due this September and a review in December.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Nobody can tell you exactly how that ends. But you already know the EU follows through —
          because it did it to Vanuatu in 2024, permanently, to everyone holding that passport. If
          you are considering six figures on a Caribbean passport for European access, that timeline
          belongs in your decision, not in a footnote after you’ve paid.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What we do help with</h2>
        <h3 className="mt-6 text-lg font-semibold">Schengen visitor visas</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          The most common thing people actually need, and heavily refused for Pakistani applicants.
          One thing worth knowing before you start: you are supposed to apply to your{' '}
          <em>main destination</em>, not to whichever country is rumoured to be easiest. Picking the
          “easy” consulate is itself a refusal risk.
        </p>
        <h3 className="mt-6 text-lg font-semibold">Portugal residence — with the real timeline</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          Still a genuine route to living in Europe. Just not a five-year one. If a ten-year path
          works for your family, we will tell you honestly what it costs and how long it takes.
        </p>
        <h3 className="mt-6 text-lg font-semibold">If you were refused</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          A Schengen refusal has its own appeal route and its own deadlines, and they differ by
          country. Send us the letter.
        </p>

        <ReviewedBy updated="[date of last legal review]" />
      </article>

      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-serif text-3xl text-balance">Before you pay anyone</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            If you have been quoted a European route, send us what you were told. We will tell you
            whether it is real — even if the answer means we don’t get the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta
              intent={{
                service: SERVICE.VISIT_VISA,
                page: PAGE,
                targetCountry: 'Europe',
                message: 'Hi, I’d like to ask about a European / Schengen visa.',
              }}
            >
              Ask about Europe
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
