import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { SERVICE } from '@/lib/site';

/**
 * The USA page leads with the correction, not the pitch.
 *
 * Two things are true at once in 2026 and almost nobody separates them: Pakistan
 * is NOT on the travel ban, but Pakistani immigrant visas ARE paused. A worried
 * applicant googling this gets the wrong answer today. Being the page that sorts
 * it out is worth more than any brochure — it is useful, it is checkable, and it
 * is the kind of thing only a firm with lawyers bothers to write.
 *
 * ⚠️ LAWYER REVIEW REQUIRED. See lib/facts.ts: the E-2 treaty position and the
 * immigrant-visa pause both carry needsLawyer:true. travel.state.gov blocks
 * automated fetching, so the DOS treaty table was never read directly and at
 * least one law-firm table omits Pakistan. The firm has already sold 2 E-2
 * engagements — a human must open the DOS table before this page ships.
 */
export const metadata: Metadata = {
  title: 'US Visas from Pakistan',
  description:
    'Pakistan is not on the US travel ban — but immigrant visas are paused. What that actually means for investors, students and visitors in 2026.',
  alternates: { canonical: '/usa' },
};

const PAGE = 'usa';

export default function UsaPage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            US visas from Pakistan, in 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200 text-pretty">
            Two things are true at the same time, and almost nobody separates them properly. Start
            here before you spend anything.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        {/* The corrective block. This is the reason to build the page. */}
        <div className="rounded border border-rule bg-approve-wash p-6">
          <h2 className="font-serif text-2xl text-balance">
            You are <em className="not-italic text-approve">not</em> on the US travel ban
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Pakistan is not on it. Not in the June 2025 proclamation, not in the December 2025
            expansion, not on the USCIS adjudication pause. If you have read otherwise online, that
            was wrong.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            Visitor visas, student visas and business visas are all still available to Pakistani
            nationals. The interview queue in Islamabad is another matter — but you are not banned.
          </p>
        </div>

        <div className="mt-6 rounded border border-rule bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">
            But immigrant visas <em className="not-italic text-accent-500">are</em> paused
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Since January 2026, Pakistan is one of 75 countries under a US immigrant visa pause. It
            is indefinite. In plain terms: routes that end in a green card issued by the consulate in
            Islamabad are not currently completing.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            This is the single most confusing thing in the market right now, and it catches people
            out: <strong className="text-ink-900">your priority date can be current while your visa
            still isn’t being issued.</strong> Those are two different things.
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            It is reported that people already lawfully inside the United States, adjusting status
            there, are not affected in the same way. If that is your situation, it is worth a proper
            conversation rather than a web page.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">So what is actually open?</h2>

        <h3 className="mt-8 text-lg font-semibold">Investing in a US business (the E-2)</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          Most people searching for this don’t call it an E-2 — they search “USA investor visa” or
          “invest and get America visa”. It is a non-immigrant visa for someone investing a
          substantial amount in a real, operating US business.
        </p>
        <p className="mt-3 text-ink-600 text-pretty">
          It is only open to nationals of countries with the right treaty with the United States.{' '}
          <strong className="text-ink-900">Pakistan has one</strong> — the Treaty of Friendship and
          Commerce, in force since 1961. Some agents will tell you otherwise, and some law-firm
          tables leave Pakistan off by mistake.
        </p>
        <p className="mt-3 text-ink-600 text-pretty">
          There is no official minimum investment. Anyone quoting you a fixed figure is guessing —
          what matters is whether the investment is substantial <em>relative to</em> the business,
          and whether the business can support more than just you and your family.
        </p>

        <h3 className="mt-8 text-lg font-semibold">Moving within your own company (the L-1)</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          If you already run a business in Pakistan and want to open or staff a US arm, a transfer
          route may fit. It is not a general work visa and it does not apply to a job you found
          online.
        </p>

        <h3 className="mt-8 text-lg font-semibold">Visiting (the B1/B2)</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          Available, and heavily refused. Most Pakistani refusals come under one section — the
          officer isn’t satisfied you’ll return. Reapplying without changing what caused that is
          usually just paying the fee twice.
        </p>

        <h3 className="mt-8 text-lg font-semibold">The green-card routes (EB-5, EB2-NIW)</h3>
        <p className="mt-3 text-ink-600 text-pretty">
          Honestly: mostly stuck from Pakistan while the immigrant visa pause holds, because they
          finish at the consulate. We would rather tell you that now than take a fee to start
          something that cannot currently finish.
        </p>
        <p className="mt-3 text-ink-600 text-pretty">
          If you are already in the US lawfully, the picture is different. That is worth a
          conversation.
        </p>

        <ReviewedBy updated="[date of last legal review]" />
      </article>

      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-serif text-3xl text-balance">Ask us about your situation</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Tell us whether you are in Pakistan, the Gulf, or already in the US — it changes the
            answer more than anything else.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta
              intent={{
                service: SERVICE.WORK_PERMIT,
                page: PAGE,
                targetCountry: 'United States',
                message: 'Hi, I’d like to ask about a US visa from Pakistan.',
              }}
            >
              Ask about a US visa
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
