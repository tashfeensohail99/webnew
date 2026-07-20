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
 * The paid consultation.
 *
 * The fee's job is QUALIFICATION, not revenue. A small paid step is the cheapest
 * filter there is between a serious enquiry and the WhatsApp firehose, and — for
 * a buyer who has been warned about immigration scams their whole life — a fee
 * that credits back reads as confidence rather than a toll.
 *
 * Deliberately NOT a form. Most of the audience is in Pakistan + the Gulf, where a form
 * is strictly worse than WhatsApp: more friction, no 24-hour service window, and
 * replies get forced into paid templates. And we ask for the minimum — a name and
 * a number books a meeting. Identity verification belongs at retainer, behind
 * auth, not on a public page.
 */
export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'A paid consultation with a qualified lawyer, credited against your fee if you proceed. You will leave knowing whether you have a case — even if the answer is no.',
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
        eyebrow="Book a consultation"
        title="Find out where you actually stand"
        subtitle={
          <>
            PKR {site.consultFee.amount.toLocaleString()}, credited against your fee if you go ahead.
            You’ll leave knowing whether you have a case — even if the answer is no.
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
          Book on WhatsApp
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
            eyebrow="Or write to us"
            title="Send your details instead"
            subtitle="If you would rather not use WhatsApp, this reaches the same team. Tell us what you are trying to do and we will come back to you."
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
          title="Why we charge for it"
          subtitle="Free consultations aren’t free — they’re paid for by the people who get talked into applying when they shouldn’t."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:items-start">
          <div className="space-y-5 lg:col-span-3">
            <p className="text-ink-600 text-pretty">
              A firm that earns nothing until you sign has every reason to tell you that you qualify.
              We’d rather charge a small fee, give you an honest answer, and put it toward your file
              if you proceed.
            </p>
            <p className="text-ink-600 text-pretty">
              If we tell you not to apply, the fee is what we earned for saving you a refusal on your
              record — and those stay with you for years.
            </p>
          </div>
          <div className="lg:col-span-2">
            <Callout title="It credits back in full">
              Go ahead with your file and the PKR {site.consultFee.amount.toLocaleString()} comes
              straight off your bill. The fee is a filter, not a toll.
            </Callout>
          </div>
        </div>
      </Section>

      <StatBand
        items={[
          {
            big: `PKR ${site.consultFee.amount.toLocaleString()}`,
            label: 'consultation',
            desc: 'Credited against your fee if you go ahead. An honest answer either way.',
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
