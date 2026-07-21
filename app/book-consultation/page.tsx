import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { LeadForm } from '@/components/LeadForm';
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
import { site, SERVICE } from '@/lib/site';

/**
 * The consultation. Free since 2026-07-21 — see lib/site.ts for why the
 * honesty anchor moved from the fee to a written summary.
 *
 * The fee's job is QUALIFICATION, not revenue. A small paid step is the cheapest
 * filter there is between a serious enquiry and the WhatsApp firehose, and — for
 * a buyer who has been warned about immigration scams their whole life — a fee
 * that credits back reads as confidence rather than a toll.
 *
 * WhatsApp leads, and the form sits below it — for the audience in Pakistan and the
 * Gulf, WhatsApp beats a form on every axis: less friction, a 24-hour service
 * window, and no reply forced into a paid template.
 *
 * The form is for the people who won't use it, and since the consultation went
 * free it carries the qualifying weight the PKR 5,000 fee used to. It asks the
 * questions a lawyer asks first — refusals above all — so effort filters where
 * price used to. Still NO identity documents: no CNIC, no passport. Those belong
 * at retainer, behind auth, not on a public page.
 */
export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'A free consultation with a qualified lawyer, and a written summary of where you stand — even when that summary says do not apply.',
  alternates: { canonical: '/book-consultation' },
};

const PAGE = 'book-consultation';

const STEPS: [string, string][] = [
  [
    'You tell us your situation',
    'What you do, where you want to go, what you’ve tried, and whether you’ve ever been refused. That last one matters more than people expect.',
  ],
  [
    'A lawyer looks at it',
    'Not a salesperson. If your case touches a refusal or a court deadline, that is a legal question and it gets a legal answer.',
  ],
  [
    'You get a straight answer',
    'Which routes are realistically open to you, which are not, what it would cost, and roughly how long. Including “none of them, here’s why” if that’s the truth.',
  ],
  [
    'You decide — not us',
    'If you go ahead, the fee comes off your bill. If you don’t, you still leave knowing where you stand, and you owe us nothing further.',
  ],
];

const FAQ_ITEMS = [
  {
    q: 'Can you guarantee I’ll get the visa?',
    a: (
      <>
        No — and neither can anyone else. Your application is decided by a visa officer, and no firm
        can overrule that. What the consultation buys you is an honest read on whether your case is
        worth filing at all.{' '}
        <Link href="/no-guarantee-policy" className="link-underline font-semibold text-accent-500">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'What does the fee actually get me?',
    a: 'A qualified lawyer’s honest assessment of your options — which routes are realistically open, which are not, roughly what it would cost and how long. If you go ahead, the fee comes straight off your bill.',
  },
  {
    q: 'What if you tell me not to apply?',
    a: 'Then that’s what the fee earned — you avoided a refusal on your record, and those stay with you for years. You leave knowing exactly where you stand, and you owe us nothing further.',
  },
  {
    q: 'Do I need to come to an office?',
    a: 'No. A large share of the people we work with are in Saudi Arabia, the UAE and the wider Gulf. We arrange a time that works around your week — including Fridays, when you’re off and we’re open.',
  },
  {
    q: 'Will you ask for my CNIC or passport to book?',
    a: 'No. Your name, a number we can reach you on, and which country you’re asking about is all it takes. No legitimate firm needs your identity documents before it has even spoken to you.',
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Free consultation"
        title="Find out where you actually stand"
        subtitle={
          <>
            Free, and you leave with a written summary of where you stand — even when that
            summary says don’t apply.
          </>
        }
      >
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: PAGE,
            message: 'Hi, I’d like to book a consultation.',
          }}
        >
          Start on WhatsApp
        </WhatsAppCta>
        <Link href="/about/our-team" className="btn btn-ghost-light">
          See who you’ll speak to
        </Link>
      </PageHero>

      {/* ========================= ENQUIRY FORM =========================
          Deliberately BELOW the WhatsApp CTA in the hero. WhatsApp is where
          the team actually works and where a reply can happen in seconds;
          this is for people who won't use it. The form creates a lead in the
          CRM and routes it to a sales agent exactly like any other channel. */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Or write it out"
            title="Tell us the awkward parts too"
            subtitle="Three minutes, and it reaches the same team. These are the questions a lawyer asks in the first five — answering them here means the reply you get is about your case, not a request for more information."
          />
          <div className="mt-10">
            <LeadForm page="contact" />
          </div>
        </div>
      </Section>

      {/* ===================== WHY WE CHARGE FOR IT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The honest bit"
          title="Why it costs nothing"
          subtitle="We used to charge PKR 5,000 for this. The reasoning was sound — it just put a price on the question itself."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:items-start">
          <div className="space-y-5 lg:col-span-3">
            <p className="text-ink-600 text-pretty">
              The old argument was a fair one: a firm that earns nothing until you sign has every
              reason to tell you that you qualify. We are not going to pretend that problem
              disappeared when the fee did. So the answer is written down instead of paid for.
            </p>
            <p className="text-ink-600 text-pretty">
              You get our read on your case in writing — what looks realistically open to you, what
              doesn’t, and what we would need to see before anyone can say more. It goes in the same
              WhatsApp thread you keep, before money is discussed. You don’t have to take our word
              for how honest we are; you’ll have it in text, and you’re free to have anyone else
              check it.
            </p>
          </div>
          <div className="lg:col-span-2">
            <Callout title="What it costs you">
              {site.consult.costsYou} If you go ahead afterwards, the work is paid — and you’ll know
              the price before you commit to anything.
            </Callout>
          </div>
        </div>
      </Section>

      <StatBand
        items={[
          {
            big: 'Free',
            label: 'consultation',
            desc: 'And a written summary of where you stand, before money is discussed.',
          },
          {
            big: 'A name & a number',
            label: 'to book',
            desc: 'That, and the country you’re asking about — nothing more to get started.',
          },
          {
            big: 'Zero',
            label: 'documents up front',
            desc: 'No CNIC, no passport to book a meeting. Identity papers belong at retainer, not here.',
          },
        ]}
      />

      {/* ======================= WHAT HAPPENS ======================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What actually happens"
          title="A straight conversation, in four steps"
          subtitle="No script, no pressure, no upsell — just a qualified read on your situation."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {STEPS.map(([term, def], i) => (
            <li key={term} className="card flex gap-5 p-7">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-semibold text-ink-950"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl">{term}</h3>
                <p className="mt-2 text-ink-600 text-pretty">{def}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ==================== WHAT WE NEED / GULF ==================== */}
      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="card flex flex-col p-8 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
              <Icon name="shield" />
            </span>
            <h2 className="mt-6 font-serif text-2xl text-balance">What we need from you</h2>
            <p className="mt-3 text-ink-600 text-pretty">
              Your name, a number we can reach you on, and which country you’re asking about. That’s
              it.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              <strong className="text-ink-900">
                We won’t ask for your CNIC or passport to book a meeting.
              </strong>{' '}
              No legitimate firm needs your identity documents before it has even spoken to you — and
              if anyone asks you for them up front, that alone should give you pause.
            </p>
          </div>

          <div className="card flex flex-col p-8 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
              <Icon name="globe" />
            </span>
            <h2 className="mt-6 font-serif text-2xl text-balance">If you’re outside Pakistan</h2>
            <p className="mt-3 text-ink-600 text-pretty">
              A large share of the people we work with are in Saudi Arabia, the UAE and the wider
              Gulf. You don’t need to fly home.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              Message us and we’ll arrange a time that works around your week — including Fridays,
              when you’re off and we’re open.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================= FAQ ============================= */}
      <Section tone="alt">
        <SectionHeading eyebrow="Before you book" title="Questions people ask first" />
        <div className="mt-12">
          <FAQ items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* ============================= BOOK ============================= */}
      <CTASection
        eyebrow="Book it"
        title="Message us and we’ll set it up"
        subtitle="Tell us which country you’re asking about and we’ll put you with the right person. No one can guarantee the outcome of a visa application — not us, not anyone."
        page={PAGE}
        waMessage="Hi, I’d like to book a consultation."
      />
    </>
  );
}
