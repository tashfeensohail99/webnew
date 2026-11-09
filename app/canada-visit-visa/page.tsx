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
  Prose,
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
 *
 * Absorbed /visitor-visa on 9 November 2026, on the owner's decision: the route
 * picker, the officer's test, the visitor record and five FAQs moved here, and
 * /visitor-visa now redirects to this page. Its child guides keep their addresses.
 */
export const metadata: Metadata = {
  title: 'Canada Visit Visa from Pakistan',
  description:
    'What a Canadian visitor visa requires from Pakistani applicants, the four ways to visit Canada, why applications are refused, and what to do after a refusal.',
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
    body: 'Your father’s account, your brother’s account. Money from a relative or host is not disqualifying, but it needs a documented source and a clear reason.',
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

/** The four routes people confuse. Carried over from /visitor-visa. */
const WAYS = [
  {
    icon: 'plane' as const,
    kicker: 'Visitor visa (TRV)',
    title: 'The route for Pakistani passport holders',
    body: 'A counterfoil placed in your passport before you travel. Pakistan is a visa-required country, so this is the route that applies to almost everyone reading this page.',
  },
  {
    icon: 'globe' as const,
    kicker: 'eTA',
    title: 'For visa-exempt nationalities only',
    body: 'An electronic authorisation linked to a passport, for citizens of visa-exempt countries flying to Canada. It is not a cheaper visitor visa — it is a different regime you either fall into or you don’t.',
    href: '/visitor-visa/eta',
    cta: 'What an eTA is',
  },
  {
    icon: 'user' as const,
    kicker: 'Super Visa',
    title: 'Parents and grandparents',
    body: 'A multiple-entry route for parents and grandparents of Canadian citizens and permanent residents, allowing a materially longer stay per entry than an ordinary visitor visa — with its own medical-insurance and host-income conditions.',
    href: '/visitor-visa/super-visa',
    cta: 'Super Visa rules',
  },
  {
    icon: 'building' as const,
    kicker: 'Business visitor',
    title: 'Meetings, not employment',
    body: 'You may attend meetings, conferences, negotiations and after-sales work as a visitor. What you may not do is enter the Canadian labour market. That line is narrower than most people assume.',
    href: '/visitor-visa/business-visitor',
    cta: 'Business visitors',
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
        as such — so anyone quoting you a precise “rate for Pakistanis” should be able to show how
        they worked it out from IRCC’s data. Global rates also move from year to year and say nothing about your file. What
        actually decides it is the strength of your specific application, not a statistic.
      </>
    ),
  },
  {
    q: 'The bank balance is really the whole thing?',
    a: (
      <>
        It matters, but it is never the whole thing. The
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
    q: 'Do I need a visitor visa or an eTA?',
    a: 'If you hold a Pakistani passport, you need a visitor visa. An eTA is only for citizens of visa-exempt countries, and mostly only when flying. You apply for one or the other, never both. If you hold a second nationality, that can change the answer, and it is worth checking before you file anything.',
  },
  {
    q: 'Does wanting to immigrate later ruin my visitor application?',
    a: 'Not by itself. Canadian law recognises dual intent: wanting permanent residence eventually does not disqualify you from temporary status, provided the officer is satisfied you will leave at the end of the stay you are asking for. What does damage a case is concealing the intention and being caught, or asking to visit when what you actually want is to stay.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'There is no published figure to hit, and we won’t invent one. What matters is that the funds are proportionate to the trip you have described, that they are yours, and that they have a traceable history. A large balance with no explanation hurts more than a modest one that clearly came from your salary.',
  },
  {
    q: 'What does it cost and how long does it take?',
    a: 'Two separate things: the government fee paid to IRCC, and our professional fee. Both the fee schedule and the current processing times are published by IRCC and both change, so we point you at the source rather than print a number here that may be wrong by the time you read it — see the IRCC fee list at ircc.canada.ca/english/information/fees/fees.asp and the processing-times tool at canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html. Our own fee is quoted in writing for your file before you commit.',
  },
  {
    q: 'Can I work or study on a visitor visa?',
    a: 'No. A visitor is not authorised to work, and study is limited to short courses under the rules in force. Business visitors are an exception only in a narrow sense — you may conduct business here for a foreign employer, but you may not take up employment in Canada. If the real plan is to work, the visitor route is the wrong application and filing it can damage the right one.',
  },
  {
    q: 'My visa was already refused — should I just reapply?',
    a: (
      <>
        Not blindly. Refusals since July 2025 usually come with a note from the officer, so check
        everything IRCC sent you first. If you need more, you can request the fuller GCMS notes.
        Reapplying without reading the officer’s reasons is guessing, and a second refusal makes the third attempt harder.{' '}
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
        subtitle="What a Canadian visitor visa asks of you, what an officer has to be satisfied about, and what to do if you have been refused."
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
          Talk to a lawyer — free
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
                IRCC does not publish a Pakistan approval rate as such.
              </strong>{' '}
              So anyone who quotes you a precise “approval rate for Pakistanis” should be able to show
              how they worked it out from IRCC’s data. What decides your case is not a statistic — it is how well your
              application answers the one doubt in the officer’s mind.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHICH ROUTE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Which route is yours"
          title="Four ways people visit Canada"
          subtitle="Most confusion at the start of a visit application is people applying under the wrong heading. These are the headings."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WAYS.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title} href={w.href} cta={w.cta}>
              {w.body}
            </FeatureCard>
          ))}
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
            desc: 'Most people assemble documents. An officer has to be able to follow why your evidence shows you will leave.',
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
        <Prose>
          <p>
            Canadian regulations require an officer to be satisfied that a temporary resident will
            leave Canada by the end of the period authorised for their stay. The officer does not
            have to prove you will overstay. You have to satisfy them that you won’t. A file that is
            merely not suspicious is not the same as a file that is convincing, and that gap is where
            most refusals live.
          </p>
          <p>
            The law also recognises what people call dual intent: wanting to become a permanent
            resident one day does not, on its own, bar you from temporary status. What matters is
            whether the officer believes you will comply with the temporary status you are asking for
            right now.
          </p>
          <p>
            Refusal is a common outcome on this route, and the reason is structural. Permanent
            residence streams like Express Entry are largely scored: the criteria are published, and
            you meet them or you don’t. A visitor application is judged on an officer’s assessment of
            your intentions, and it carries no appeal to the Immigration Appeal Division, only
            judicial review in the Federal Court. IRCC publishes operational data on visitor visas,
            including by source country, which moves year to year. If you want the current picture,
            read it from the{' '}
            <a
              href="https://open.canada.ca/data/en/dataset/9b34e712-513f-44e9-babf-9df4f7256550"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-500 link-underline"
            >
              Open Government portal
            </a>
            .
          </p>
          <p>
            A weak application filed today sits on your immigration record for years and has to be
            declared on everything you file afterwards. Before you file, read{' '}
            <Link href="/visitor-visa/invitation-letter" className="font-semibold text-accent-500 link-underline">
              what an invitation letter can and cannot do
            </Link>{' '}
            and try our{' '}
            <Link href="/tools/visit-visa-refusal-risk" className="font-semibold text-accent-500 link-underline">
              refusal-risk questionnaire
            </Link>
            .
          </p>
        </Prose>
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
          subtitle="What is within your control is the file itself. Here is what the work actually looks like."
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

      {/* ===================== AFTER YOU ARRIVE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="After you arrive"
          title="Status, extensions and the visitor record"
          subtitle="The visa gets you to the border. What happens after that is a separate set of rules people routinely miss."
        />
        <Prose>
          <p>
            A visitor visa is travel permission, not status. The officer at the port of entry decides
            how long you may stay, and that period, not the expiry date printed on the visa, is what
            governs you.
          </p>
          <p>
            To stay longer you apply from inside Canada, before your status expires, for a{' '}
            <em className="not-italic font-semibold text-ink-900">visitor record</em>. It is not a visa
            and it does not let you re-enter Canada.{' '}
            <Link href="/visitor-visa/extension" className="font-semibold text-accent-500 link-underline">
              Our guide to extending your stay
            </Link>{' '}
            covers the process.
          </p>
        </Prose>
        <div className="mt-10">
          <Callout title="Where the visitor route is the wrong application">
            <p>
              If your actual plan is to work in Canada, to study a full programme, or to remain
              permanently, the visitor route is not a way in and we will tell you so rather than file
              it. Officers read intent, and a visit application made by someone who plainly intends to
              stay is both likely to fail and likely to make the correct application harder later. If
              that is you, look at{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                work permits
              </Link>{' '}
              instead, or{' '}
              <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
                book a consultation
              </Link>{' '}
              and we will tell you which application actually fits.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ========================= GULF SECTION ========================= */}
      <Section tone="paper">
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
      <Section tone="alt">
        <div className="card border-l-[3px] border-l-gold-500 p-8 sm:p-10">
          <p className="eyebrow">Already refused?</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-balance">
            Then don’t reapply yet — start somewhere else
          </h2>
          <p className="mt-5 max-w-2xl text-ink-600 text-pretty">
            Check everything IRCC sent you first: refusals since July 2025 usually include a note from
            the officer. If you need more, you can request the fuller GCMS notes. Reapplying without
            reading the officer’s reasons is guessing, and a second refusal makes the third attempt harder.
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
      <Section tone="paper">
        <SectionHeading
          eyebrow="Straight answers"
          title="Questions about the Canada visit visa"
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
        subtitle="And whether you’ve ever been refused — by any country. That last one changes everything. The consultation is free, and you leave with our read in writing."
        page={PAGE}
        service={SERVICE.VISIT_VISA}
        waMessage="Hi, I’d like to apply for a Canada visit visa."
      />
    </>
  );
}
