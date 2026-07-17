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
import { site, SERVICE } from '@/lib/site';

/**
 * The entry point — the visit-visa page most first-time enquirers meet the firm on.
 *
 * The strategically important part of the page is the refusal bridge near the
 * bottom, which walks a refused visitor across to the judicial-review practice.
 *
 * NO approval rate is stated anywhere on the page: IRCC does not publish
 * per-country visitor rates, and any Pakistan-specific number in circulation is
 * unsourced. See lib/facts.ts.
 */
export const metadata: Metadata = {
  title: 'Canada Visit Visa from Pakistan',
  description:
    'What a Canadian visitor visa actually requires from Pakistani applicants, why most refusals happen, and what to do if yours was refused.',
  alternates: { canonical: '/canada-visit-visa' },
};

const PAGE = 'canada-visit-visa';

const REFUSALS = [
  {
    icon: 'doc' as const,
    kicker: 'Bank statements',
    title: 'Money that appeared last month',
    body: 'A large balance with no history behind it reads as borrowed for the application — because it usually was. History matters more than the number.',
  },
  {
    icon: 'user' as const,
    kicker: 'Whose funds',
    title: 'Funds in someone else’s name',
    body: 'Your father’s account, your brother’s account. The officer wants to see that YOU can pay for this trip.',
  },
  {
    icon: 'plane' as const,
    kicker: 'The trip itself',
    title: 'A trip that doesn’t add up',
    body: 'A two-week holiday that costs more than you earn in a year, or leave your employer would never grant, invites exactly the doubt you are trying to remove.',
  },
  {
    icon: 'building' as const,
    kicker: 'Ties to home',
    title: 'Ties asserted, not evidenced',
    body: '“I have a job and a family in Pakistan” is a claim. A letter, a payslip history, and property papers are evidence. The officer reads evidence.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Consistency',
    title: 'Documents that contradict each other',
    body: 'A salary that doesn’t match the bank credits. Two dates that disagree. Small inconsistencies do disproportionate damage — and can look deliberate.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'We look before you apply',
    body: 'You tell us about the trip, the money, the ties, and any refusal by any country. We tell you honestly whether the file is ready — or what has to change first.',
  },
  {
    n: '2',
    title: 'We build the argument',
    body: 'Not a folder of documents, a case. Every payslip, letter and statement is there to answer the one question the officer is actually asking.',
  },
  {
    n: '3',
    title: 'We file it properly',
    body: 'The right forms, the right supporting letter, the right order — put in front of the officer the way it should be, so nothing avoidable trips it up.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Can you guarantee my visa will be approved?',
    a: (
      <>
        No. A visa officer decides your application, and no consultant in Pakistan can overrule that —
        anyone who promises you a visa is not being honest. What we can do is tell you whether your
        case is strong, fix what is weak before it is filed, and say so plainly if we don’t think you
        should apply yet.
      </>
    ),
  },
  {
    q: 'What approval rate does Canada have for visit visas?',
    a: (
      <>
        <strong className="text-ink-900">IRCC does not publish a Pakistan-specific approval rate</strong>{' '}
        — so anyone quoting you a precise “rate for Pakistanis” is repeating a number they cannot
        source. Global rates also move from year to year and say nothing about your file. What
        actually decides it is the strength of your specific application, not a statistic.
      </>
    ),
  },
  {
    q: 'The bank balance is really the whole thing?',
    a: (
      <>
        It’s the most common single reason we see files fall down, but it is never the whole thing. The
        officer weighs your funds, your ties, your travel history and whether the trip makes sense —
        together. A strong balance with a weak reason to return home does not save an application.
      </>
    ),
  },
  {
    q: 'Can I apply from the Gulf instead of Pakistan?',
    a: (
      <>
        Yes, and many of the people we work with do. If you live in Saudi Arabia, the UAE, Oman or
        Qatar, your residency, employer letter, salary transfers and police certificate come from where
        you live — while parts of your history stay Pakistani. You stay where you are; we handle the
        Pakistan side.
      </>
    ),
  },
  {
    q: 'My visa was already refused — should I just reapply?',
    a: (
      <>
        Not blindly. The refusal letter doesn’t tell you the real reason — the officer’s actual notes
        are in a separate file you are entitled to request. Reapplying without reading them is guessing,
        and a second refusal makes the third attempt harder.{' '}
        <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
          Start with what to do after a refusal
        </Link>
        .
      </>
    ),
  },
];

export default function VisitVisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Temporary Resident Visa"
        title={
          <>
            Canada visit visa, <span className="text-gold-300">from Pakistan.</span>
          </>
        }
        subtitle="The most common Canadian visa — and the most commonly refused. Most of the refusals we see were avoidable with the right file."
      >
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.VISIT_VISA,
            page: PAGE,
            targetCountry: 'Canada',
            message: 'Hi, I’d like to apply for a Canada visit visa.',
          }}
        >
          Ask about a visit visa
        </WhatsAppCta>
        <Link href="/book-consultation" className="btn btn-ghost-light">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT THIS VISA IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What it actually is"
          title="A visa to visit — not a route to stay"
          subtitle="A temporary resident visa lets you visit Canada: family, tourism, business meetings, a conference. It is not a work permit and not a path to staying — and applying as though it were is one of the reliable ways to be refused."
        />
        <div className="mt-10">
          <Callout title="Be wary of anyone quoting you an “approval rate”">
            <p>
              Visitor-visa approval rates move from year to year, and{' '}
              <strong className="text-ink-900">
                IRCC does not publish a Pakistan-specific figure at all.
              </strong>{' '}
              So anyone who quotes you a precise “approval rate for Pakistanis” is repeating a number
              they cannot source. What decides your case is not a statistic — it is how well your
              application answers the one doubt in the officer’s mind.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ================== THE REAL QUESTION (stat band) ================== */}
      <StatBand
        items={[
          {
            big: 'One',
            label: 'question underneath',
            desc: 'Everything the officer reads is evidence for or against a single question: will this person go home?',
          },
          {
            big: 'Evidence',
            label: 'over assertion',
            desc: 'Most people assemble documents. The ones who get approved build an argument the officer can follow.',
          },
          {
            big: 'You',
            label: 'not a statistic',
            desc: 'No published rate decides your case. One officer, reading your file, asking one question — that does.',
          },
        ]}
      />

      {/* ===================== WHAT THE OFFICER ASKS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What the officer is really asking"
          title="“Will this person go home?”"
          subtitle="One question sits underneath the whole application. Your job, your property, your family, your bank statements, your travel history — all of it is evidence for or against that one thing."
        />
      </Section>

      {/* ===================== WHERE FILES FALL DOWN ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where Pakistani applications fall down"
          title="The five ways a strong case still gets refused"
          subtitle="None of these is about a missing document. Each is about an argument that doesn’t hold together when the officer reads it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REFUSALS.map((r) => (
            <FeatureCard
              key={r.title}
              icon={<Icon name={r.icon} />}
              kicker={r.kicker}
              title={r.title}
            >
              {r.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== WHAT IT TAKES (steps) ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What it takes"
          title="How we put your file together"
          subtitle="A visit visa is won or lost before it is filed. Here is what the work actually looks like."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {s.n}
              </span>
              <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ========================= GULF SECTION ========================= */}
      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="If you’re in the Gulf"
              title="Apply from where you live — we handle the Pakistan side"
            />
            <p className="mt-6 text-ink-600 text-pretty">
              Many of the people we work with apply from Saudi Arabia, the UAE, Oman or Qatar. It
              changes the file: your residency status, your employer letter, your salary transfers and
              your police certificate all come from where you live, not from Pakistan — while parts of
              your history are still Pakistani.
            </p>
            <p className="mt-4 font-serif text-2xl text-gold-600">
              You stay where you are. We handle the Pakistan side.
            </p>
          </div>
          <Callout title="One file, two countries">
            <p>
              We build the file so the two halves of your life line up: a Gulf residency and salary
              that hold, and Pakistani ties that read as genuine reasons to return. Handled together,
              not as an afterthought.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== REFUSAL BRIDGE (to JR) ===================== */}
      <Section tone="paper">
        <div className="card border-l-[3px] border-l-gold-500 p-8 sm:p-10">
          <p className="eyebrow">Already refused?</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">
            Then don’t reapply yet — start somewhere else
          </h2>
          <p className="mt-5 max-w-2xl text-ink-600 text-pretty">
            The letter you received doesn’t tell you the real reason — the officer’s actual notes are in
            a separate file you are entitled to request. Reapplying without reading them is guessing,
            and a second refusal makes the third attempt harder.
          </p>
          <Link
            href="/canada-visa-refused"
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-500 link-underline"
          >
            What to do after a refusal
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      {/* ============================= FAQ ============================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Straight answers"
          title="Questions people actually ask us"
        />
        <div className="mt-10">
          <FAQ items={FAQ_ITEMS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      {/* ============================= CTA ============================= */}
      <CTASection
        eyebrow="Tell us about your trip"
        title="Where you’re going, why, and who’s paying"
        subtitle={`And whether you’ve ever been refused — by any country. That last one changes everything. A consultation is PKR ${site.consultFee.amount.toLocaleString()}, credited to your fee if you go ahead.`}
        page={PAGE}
        waMessage="Hi, I’d like to apply for a Canada visit visa."
      />
    </>
  );
}
