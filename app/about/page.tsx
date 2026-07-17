import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  StatBand,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { site, lawyers, SERVICE } from '@/lib/site';

/**
 * The trust page.
 *
 * The buyer's real question is never "are you skilled?" — every agent claims
 * that. It is "will you take my money and disappear?" Almost everyone in this
 * market answers with adjectives. This page answers with checkable facts:
 * three real offices on two continents, named lawyers, and an invitation to
 * verify us before paying. Those are things a scam cannot cheaply fake.
 */
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'An international immigration firm with lawyers, and offices in Lahore, Islamabad and Canada. Come and see us before you pay anyone.',
  alternates: { canonical: '/about' },
};

/** How we work — the four promises that separate a firm from an agent. */
const PRINCIPLES: [string, string][] = [
  [
    'We tell you if you don’t qualify',
    'Before you pay us anything. A weak application filed today is a refusal on your record for years — it is not a free lottery ticket.',
  ],
  [
    'We never promise an outcome',
    'Your visa is decided by a visa officer in another country. Nobody in Pakistan can overrule them, and anyone who says otherwise is selling you something.',
  ],
  [
    'Our fees are itemised',
    'Our professional fee and the government’s fee, listed separately, before you commit. You should always know which part of your money we keep.',
  ],
  [
    'A lawyer reviews the file',
    'Not a salesperson who has moved on to the next lead. Someone qualified reads your case and tells you the truth about it.',
  ],
];

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: 'Can you guarantee I’ll get a visa?',
    a: (
      <>
        No — and neither can anyone else. Your visa is decided by a visa officer in another country.
        No consultant in Pakistan, including us, can overrule that officer. What we can do is tell
        you honestly whether your case is strong, fix what’s weak before it’s filed, and put it in
        front of that officer properly.
      </>
    ),
  },
  {
    q: 'Are you actually regulated? How do I check?',
    a: (
      <>
        Pakistan has no licensing body for immigration advice — anyone can rent an office and call
        themselves a consultant, which is exactly why so many people get hurt. A lawyer is different:
        there is a regulator you can complain to, and a public register you can check in about thirty
        seconds. Ask us for the licence number and verify it yourself before you pay a rupee.
      </>
    ),
  },
  {
    q: 'Do I have to visit an office in person?',
    a: (
      <>
        You don’t have to, but you’re welcome to — we have offices in three cities, not a mailbox and
        a WhatsApp number. If you’re in the Gulf and can’t reach Lahore yourself, someone you trust
        very likely can visit us in Mississauga. Consultations can also be held remotely.
      </>
    ),
  },
  {
    q: 'What does a consultation cost, and is it refundable?',
    a: (
      <>
        A consultation is PKR {site.consultFee.amount.toLocaleString()}. It’s credited to your
        service fee if you decide to go ahead, so you only ever pay it once. Either way you leave
        knowing where you actually stand.
      </>
    ),
  },
  {
    q: 'What happens if you don’t think my case is strong?',
    a: (
      <>
        We tell you — before you owe us anything. We would rather lose the fee than file an
        application we don’t believe in and leave a refusal on your record. An honest “not yet” is
        worth more to you than a confident “yes”.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title={
          <>
            Three offices. Two continents.{' '}
            <span className="text-gold-300">Real lawyers.</span>
          </>
        }
        subtitle="You have almost certainly heard about someone losing their savings to an immigration agent. That fear is reasonable — so rather than ask you to trust us, we’ll give you things you can check."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: 'about',
            targetCountry: 'Canada',
            message: 'Hi, I’d like to ask about your firm before I book.',
          }}
        >
          Ask on WhatsApp
        </WhatsAppCta>
      </PageHero>

      {/* ===================== WHY THIS PAGE EXISTS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Why trust is the whole product"
              title="Anyone can claim to be good. We’d rather be checkable."
              subtitle="Every agent in this market answers the same way — with adjectives. We think the only answer that means anything is one you can verify without taking our word for it."
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Immigration is a decision people make once, with money they’ve saved for years. It
                attracts exactly the kind of operator you’re afraid of — a rented office, a brochure,
                a promise, and then silence. We can’t undo the stories you’ve heard. We can be the
                opposite of them, in ways you can confirm.
              </p>
              <p>
                So this page isn’t a sales pitch. It’s a short list of facts about us — real
                addresses, named lawyers, itemised fees — and an open invitation to check every one
                of them before you hand over a single rupee.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Callout title="Three things a scam can’t cheaply fake">
              <ul className="mt-2 space-y-3">
                {[
                  'Offices with doors, on two continents.',
                  'Lawyers who answer to a regulator you can complain to.',
                  'A licence number we’ll hand you to verify yourself.',
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 text-gold-600">
                      <Icon name="check" className="h-5 w-5" />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Callout>
          </div>
        </div>
      </Section>

      {/* ============================ OFFICES ============================ */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Come and see us"
          title="Not a mailbox. Not a WhatsApp number."
          subtitle="Offices with doors, in three cities across two continents. You’re welcome at any of them."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.offices.map((o) => (
            <li key={o.city} className="card flex flex-col p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
                <Icon name="building" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">
                {o.country}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{o.city}</h3>
              {o.address ? (
                <address className="mt-3 flex-1 not-italic text-ink-600 text-pretty leading-relaxed">
                  {o.address}
                </address>
              ) : (
                // Real office; full street address not yet in config. Honest, public copy —
                // never a dev note. Swap in the address in lib/site.ts when confirmed.
                <p className="mt-3 flex-1 text-ink-600 text-pretty leading-relaxed">
                  Open by appointment — we’ll confirm the exact address when you book.
                </p>
              )}
              {o.hours ? <p className="mt-4 text-sm text-ink-400">{o.hours}</p> : null}
              {o.mapUrl ? (
                <a
                  href={o.mapUrl}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 link-underline"
                  rel="noopener"
                  target="_blank"
                >
                  Open in Maps
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Callout>
            The Canadian office matters more than it looks. Most firms in Pakistan handling Canadian
            files have never been to Canada. If you’re in Riyadh or Dubai and can’t visit us in
            Lahore, someone you trust probably <em>can</em> visit us in Mississauga.
          </Callout>
        </div>
      </Section>

      {/* ========================= STAT BAND ========================= */}
      <StatBand
        items={[
          {
            big: String(site.offices.length),
            label: 'offices',
            desc: 'Lahore, Islamabad and Mississauga — real doors you can walk into, not a mailbox.',
          },
          {
            big: 'Two',
            label: 'continents',
            desc: 'A firm in Pakistan with an office in Canada — so a Canadian file is handled where it lands.',
          },
          {
            big: `PKR ${site.consultFee.amount.toLocaleString()}`,
            label: 'consultation',
            desc: 'Credited to your fee if you go ahead. An honest answer either way.',
          },
        ]}
      />

      {/* ============================ LAWYERS ============================ */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="The one thing agents can’t copy"
              title="We have lawyers. Most agents don’t."
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Pakistan has no licensing body for immigration advice. Anyone can rent an office,
                print a brochure and call themselves a consultant — which is exactly why so many
                people get hurt.
              </p>
              <p>
                A lawyer is different in one way that matters: there is a regulator you can complain
                to, and a public register you can check in about thirty seconds. An agent has
                neither.
              </p>
            </div>
            <p className="mt-8">
              <Link
                href="/about/our-team"
                className="inline-flex items-center gap-1.5 font-semibold text-accent-500 link-underline"
              >
                {lawyers.length > 0 ? 'Meet our lawyers — and go and check them' : 'Meet our lawyers'}
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
          <div className="lg:col-span-2">
            <Callout title="A regulator, not a review">
              <p className="mt-2">
                A five-star testimonial can be typed by anyone. A licence number sits on a public
                register that a firm cannot edit. That’s the difference we’re built on — and the
                difference you can verify yourself.
              </p>
            </Callout>
          </div>
        </div>
      </Section>

      {/* ========================== HOW WE WORK ========================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How we work"
          title="Four promises, in plain language"
          subtitle="None of these is a slogan. Each is something you can hold us to from the first conversation."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map(([term, def], i) => (
            <li key={term} className="card flex gap-5 p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl leading-tight">{term}</h3>
                <p className="mt-2 text-ink-600 text-pretty leading-relaxed">{def}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ========================== VERIFY US ========================== */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Callout title="Check us before you pay us">
            <p className="mt-2">
              Look our lawyers up. Come to the office. Ask for the licence number and go and verify
              it yourself on the public register. Any firm that won’t give you that is telling you
              something — and any firm worth your savings will welcome the question.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ============================= FAQ ============================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Straight answers"
          title="The questions people are right to ask"
          center
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ items={FAQS} />
        </div>
      </Section>

      <CTASection
        eyebrow="Start with a conversation"
        title="Find out where you actually stand"
        subtitle={`A paid consultation, PKR ${site.consultFee.amount.toLocaleString()}, credited to your fee if you go ahead. You leave knowing whether it’s worth applying — from a lawyer, not a salesperson.`}
        page="about-cta"
        waMessage="Hi, I’d like to book a consultation."
      />
    </>
  );
}
