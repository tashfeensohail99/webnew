import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  StatBand,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * The USA page leads with the correction, not the pitch.
 *
 * Two things get blurred in 2026 and almost nobody separates them: Pakistan is
 * NOT on the travel ban, and the immigrant-visa pause that DID cover Pakistan
 * from 21 January 2026 was ended by a federal court order on 21 August 2026.
 * A worried applicant googling this gets the wrong answer today. Being the page
 * that sorts it out is worth more than any brochure.
 *
 * The pause wording is deliberately written to stay true whichever way the
 * litigation goes: it states the record with dates and sends the reader to the
 * State Department's notice and the US Embassy's visa page on the day. Updated
 * 24 October 2026 on the firm's instruction (see lib/facts.ts).
 *
 * ⚠️ LAWYER REVIEW REQUIRED for the E-2 treaty position (lib/facts.ts):
 * travel.state.gov blocks automated fetching, so the DOS treaty table was never
 * read directly and at least one law-firm table omits Pakistan. The firm has
 * already sold 2 E-2 engagements — a human must open the DOS table.
 */
const OFFICIAL = {
  ivNotice:
    'https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html',
  embassy: 'https://pk.usembassy.gov/visas/',
} as const;

function Official({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}
export const metadata: Metadata = {
  title: 'US Visas from Pakistan',
  description:
    'Pakistan is not on the US travel ban, and a court ended the 2026 immigrant-visa pause. What it means for visitors, students, investors and green cards.',
  alternates: { canonical: '/usa' },
};

const PAGE = 'usa';

const ROUTES = [
  {
    icon: 'building' as const,
    kicker: 'Investors · E-2',
    title: 'Investing in a US business',
    body: (
      <>
        <p>
          Most people searching for this don’t call it an E-2 — they search “USA investor visa” or
          “invest and get America visa”. It is a non-immigrant visa for someone investing a
          substantial amount in a real, operating US business.
        </p>
        <p className="mt-3">
          It is only open to nationals of countries with the right treaty with the United States.{' '}
          <strong className="text-ink-900">Pakistan has one</strong> — the Treaty of Friendship and
          Commerce, in force since 1961. Some agents will tell you otherwise, and some law-firm
          tables leave Pakistan off by mistake.
        </p>
      </>
    ),
  },
  {
    icon: 'refresh' as const,
    kicker: 'Business owners · L-1',
    title: 'Moving within your own company',
    body: (
      <p>
        If you already run a business in Pakistan and want to open or staff a US arm, a transfer
        route may fit. It is not a general work visa and it does not apply to a job you found
        online.
      </p>
    ),
  },
  {
    icon: 'plane' as const,
    kicker: 'Visitors · B1/B2',
    title: 'Visiting the United States',
    body: (
      <p>
        Available, and heavily refused. Most Pakistani refusals come under one section — the officer
        isn’t satisfied you’ll return. Reapplying without changing what caused that is usually just
        paying the fee twice.
      </p>
    ),
  },
  {
    icon: 'doc' as const,
    kicker: 'Green card · EB-5, EB2-NIW',
    title: 'The green-card routes',
    body: (
      <>
        <p>
          These finish at the consulate, so the immigrant-visa pause stopped them. A court order
          ended that pause on 21 August 2026 — but they move slowly: EB-2 is backlogged, interview
          scheduling has not simply snapped back, and the position can change. Filing the petition
          with USCIS itself was never paused for Pakistanis.
        </p>
        <p className="mt-3">
          We will tell you honestly whether yours can realistically finish before you pay for it.{' '}
          <Link href="/blog/eb2-niw-pakistan" className="font-semibold text-accent-500 link-underline">
            Where the EB-2 NIW stands from Pakistan
          </Link>
          .
        </p>
      </>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: 'Is Pakistan on the US travel ban?',
    a: (
      <p>
        No. Pakistan is not in the June 2025 proclamation, not in the December 2025 expansion, and
        was not covered by the USCIS holds on pending cases — which courts have since vacated and
        blocked anyway. Visitor, student and business visas all remain available to Pakistani
        nationals.
      </p>
    ),
  },
  {
    q: 'My priority date is current — so why isn’t my visa being issued?',
    a: (
      <p>
        Because those are two different things. A current priority date means the queue has reached
        you; the consulate still has to be able to issue. From 21 January 2026 Pakistan was one of
        75 countries under a US immigrant visa pause. A federal court order ended it on 21 August
        2026, but interview scheduling has not simply returned to normal and the position can
        change. Check the <Official href={OFFICIAL.ivNotice}>State Department’s notice</Official>{' '}
        and the <Official href={OFFICIAL.embassy}>US Embassy in Pakistan’s visa page</Official>{' '}
        on the day.
      </p>
    ),
  },
  {
    q: 'Can Pakistani nationals apply for the E-2 investor visa?',
    a: (
      <p>
        Yes. Pakistan holds the Treaty of Friendship and Commerce with the United States, in force
        since 1961, which is what the E-2 requires. Some agents and even some law-firm tables leave
        Pakistan off by mistake. Because the treaty position matters so much here, this is a case to
        have confirmed by a lawyer against the official Department of State list before you commit.
      </p>
    ),
  },
  {
    q: 'How much do I have to invest for an E-2?',
    a: (
      <p>
        There is no official minimum. Anyone quoting you a fixed figure is guessing. What matters is
        whether the investment is substantial relative to the business, and whether the business can
        support more than just you and your family.
      </p>
    ),
  },
  {
    q: 'I’m already in the US lawfully — does the pause affect me?',
    a: (
      <p>
        People lawfully inside the United States may be able to apply for a green card there
        (adjustment of status) rather than at a consulate. Don’t treat that as automatic: a May 2026
        USCIS memo describes adjustment as discretionary relief and lists factors that can count
        against an applicant. If that is your situation, it is worth a proper conversation rather
        than a web page.
      </p>
    ),
  },
  {
    q: 'Can you guarantee me a US visa?',
    a: (
      <p>
        No — and neither can anyone else. Your visa is decided by a US officer. What we can do is
        tell you honestly whether a route is even open to you right now, and say so before you’ve
        paid us anything if it isn’t.
      </p>
    ),
  },
];

export default function UsaPage() {
  return (
    <>
      <PageHero
        eyebrow="United States · 2026"
        title={
          <>
            US visas from Pakistan, <span className="text-gold-300">sorted out honestly</span>
          </>
        }
        subtitle="Two things are true at the same time, and almost nobody separates them properly. Start here before you spend anything."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: PAGE,
            targetCountry: 'United States',
            message: 'Hi, I’d like to ask about a US visa from Pakistan.',
          }}
        >
          Ask on WhatsApp
        </WhatsAppCta>
      </PageHero>

      {/* ===================== THE TWO CORRECTIVE TRUTHS ===================== */}
      <Section>
        <SectionHeading
          eyebrow="What’s actually happening"
          title="Two facts, held apart"
          subtitle="If you’ve read a scary headline this week, it probably blurred these together. Here they are, separated."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card border-l-[3px] border-l-approve p-7 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-approve-wash text-approve ring-1 ring-approve/20">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-2xl text-balance">
              You are <em className="not-italic text-approve">not</em> on the US travel ban
            </h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Pakistan is not on it. Not in the June 2025 proclamation, not in the December 2025
              expansion, and not covered by the USCIS holds on pending cases. If you have read
              otherwise online, that was wrong.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              Visitor visas, student visas and business visas are all still available to Pakistani
              nationals. The interview queue in Islamabad is another matter — but you are not banned.
            </p>
          </div>

          <div className="card border-l-[3px] border-l-gold-500 p-7 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-2xl text-balance">
              And the immigrant-visa pause <em className="not-italic text-gold-600">has ended</em> —
              for now
            </h3>
            <p className="mt-4 text-ink-600 text-pretty">
              From 21 January 2026, Pakistan was one of 75 countries under a US immigrant visa pause.
              A federal court order ended it on 21 August 2026, and the State Department says it is no
              longer in effect.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              <strong className="text-ink-900">It can change.</strong> Court-ordered changes can be
              appealed, and interview scheduling has not simply snapped back. Before you pay for
              anything that ends at the consulate, check the{' '}
              <Official href={OFFICIAL.ivNotice}>State Department’s notice</Official> and the{' '}
              <Official href={OFFICIAL.embassy}>US Embassy in Pakistan’s visa page</Official> on the
              day.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Callout title="Already lawfully inside the US? Your answer is different.">
            <p>
              People lawfully inside the United States may be able to apply for a green card there,
              without going through a consulate — but USCIS treats that as discretionary, not
              automatic. If that is your situation, it is worth a proper conversation rather than a
              web page.
            </p>
          </Callout>
        </div>
      </Section>

      <StatBand
        items={[
          {
            big: '21 Aug',
            label: 'pause ended',
            desc: 'A court order ended the 75-country immigrant visa pause, which covered Pakistan, on 21 August 2026. It can change — check the State Department’s notice.',
          },
          {
            big: '1961',
            label: 'E-2 treaty in force',
            desc: 'Pakistan holds the Treaty of Friendship and Commerce — the treaty the investor visa requires.',
          },
          {
            big: 'No',
            label: 'fixed E-2 minimum',
            desc: 'There is no official minimum investment. Anyone quoting a fixed figure is guessing.',
          },
        ]}
      />

      {/* =========================== WHAT’S OPEN =========================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The routes"
          title="So what is actually open?"
          subtitle="Non-immigrant routes run as normal. Green-card routes can move again, slowly. We’ll tell you which is realistic for you before you spend anything."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ROUTES.map((r) => (
            <FeatureCard key={r.title} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-6">
          <Callout title="The E-2 is a case for a lawyer, not a table.">
            <p>
              The treaty position is exactly the kind of detail agents get wrong and even published
              law-firm tables sometimes omit. Before anyone commits money to a US business on the
              strength of it, it should be confirmed by a lawyer against the official Department of
              State list — not a screenshot.
            </p>
          </Callout>
        </div>
      </Section>

      {/* =============================== FAQ =============================== */}
      <Section>
        <SectionHeading
          eyebrow="Straight answers"
          title="The questions people actually ask"
          subtitle="Short, honest, and the same answer we’d give you on the phone."
        />
        <div className="mt-10">
          <FAQ items={FAQ_ITEMS} />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      {/* ==================== US-SPECIFIC WHATSAPP INTENT ==================== */}
      <Section tone="alt">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            center
            eyebrow="Tell us where you are"
            title="Ask us about your situation"
            subtitle="Tell us whether you are in Pakistan, the Gulf, or already in the US — it changes the answer more than anything else."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
            <Link href="/book-consultation" className="btn btn-navy">
              Talk to a lawyer — free
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Start with a conversation"
        title="Find out which US route is really open to you"
        subtitle="A lawyer-reviewed answer on where you actually stand — and an honest no if the route you want isn’t realistic right now."
        page="usa-cta"
        waMessage="Hi, I’d like to book a consultation about a US visa."
      />
    </>
  );
}
