import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
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

const SKILLED_WORKER = [
  {
    kicker: 'The salary floor',
    title: '£41,700 — or higher',
    body:
      'The salary must be at least £41,700, or the going rate for that occupation, whichever is HIGHER. Not whichever is lower.',
  },
  {
    kicker: 'The skill level',
    title: 'Degree-level jobs only',
    body:
      'The job must be at degree level (RQF 6). Around 180 occupations were removed from the route on 22 July 2025.',
  },
  {
    kicker: 'The sponsor',
    title: 'A genuine vacancy',
    body:
      'You need a licensed UK sponsor with a real, genuine vacancy. Not a favour, not a paper job that has to survive Home Office scrutiny.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Is “self-sponsorship” a UK visa?',
    a: (
      <>
        No. There is no such category — it isn’t on the UK government’s list of visas. What people
        mean by it is setting up a UK company, getting it licensed as a sponsor, and having it
        sponsor you on a Skilled Worker visa. That is real, but it does not escape any of the Skilled
        Worker rules: the same £41,700, the same degree-level requirement, and a genuine vacancy.
      </>
    ),
  },
  {
    q: 'Does the Expansion Worker route lead to settlement?',
    a: (
      <>
        No. It is for sending someone to set up a UK branch of an existing overseas business. It is
        capped at two years and does not lead to indefinite leave to remain. If your goal is to
        settle in the UK, this is not the door — despite how it is routinely mis-sold in Pakistan.
      </>
    ),
  },
  {
    q: 'Is UK settlement now 10 years instead of 5?',
    a: (
      <>
        As things stand it is a <strong className="text-ink-900">proposal, not law</strong>. The
        consultation closed in February 2026, no government response has been published, and no rules
        have been laid. A House of Lords committee came out against it in June. Anyone telling you it
        is already law is wrong; anyone telling you it definitely won’t happen is also guessing.
      </>
    ),
  },
  {
    q: 'My UK visit visa was refused — is it worth reapplying?',
    a: (
      <>
        It depends on the ground. Your refusal letter names a specific reason, and that reason tells
        you whether reapplying is worth it or whether you are about to waste another fee. Send us the
        letter and we’ll tell you honestly which it is.
      </>
    ),
  },
  {
    q: 'Can you guarantee me a UK visa?',
    a: (
      <>
        No — and neither can anyone else. Your visa is decided by a visa officer. What we can do is
        tell you honestly whether a route is real, whether your case is strong, and whether it is
        worth applying at all before you pay a fee.
      </>
    ),
  },
];

export default function UkPage() {
  return (
    <>
      <PageHero
        eyebrow="United Kingdom · from Pakistan"
        title={
          <>
            UK visas from Pakistan —{' '}
            <span className="text-gold-300">the honest version.</span>
          </>
        }
        subtitle="The UK got substantially harder in 2025. Two of the routes most heavily advertised in Pakistan don’t work the way they’re being sold."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.VISIT_VISA,
            page: PAGE,
            targetCountry: 'United Kingdom',
            message: 'Hi, I’d like to ask about a UK visa from Pakistan.',
          }}
        >
          Ask about the UK
        </WhatsAppCta>
      </PageHero>

      {/* ===================== SKILLED WORKER REALITY ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The main work route"
          title="The Skilled Worker reality check"
          subtitle="This is the main UK work route, and the numbers are the numbers."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLED_WORKER.map((s) => (
            <FeatureCard
              key={s.title}
              icon={<Icon name="building" />}
              kicker={s.kicker}
              title={s.title}
            >
              {s.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-8">
          <Callout title="If the offer is below these thresholds, you’re the one at risk">
            If someone is offering you a UK job below those thresholds, one of you is going to have a
            problem — and it will be you.
          </Callout>
        </div>
      </Section>

      {/* ========================= THE TWO MYTHS ========================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What’s being mis-sold"
          title="Two myths that cost people real money"
          subtitle="Both are advertised hard in Pakistan. Neither works the way it is described."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FeatureCard
            icon={<Icon name="shield" />}
            kicker="Myth 1"
            title="“Self-sponsorship” is not a UK visa"
          >
            <p>
              There is no such category. Look at the UK government’s list of visas — it isn’t there.
            </p>
            <p className="mt-4">
              What people mean by it is: set up a UK company, get it licensed as a sponsor, and have
              it sponsor you on a Skilled Worker visa. That is a real thing. But it does not escape
              any of the rules above — the same £41,700, the same degree-level requirement, and a
              genuine vacancy that survives Home Office scrutiny.
            </p>
            <p className="mt-4">
              It is sold in Pakistan as a shortcut around the salary rules. It is the opposite: the
              same rules, plus you now also have to run a real company.
            </p>
          </FeatureCard>

          <FeatureCard
            icon={<Icon name="scale" />}
            kicker="Myth 2"
            title="The Expansion Worker route does not lead to settlement"
          >
            <p>
              It is for sending someone to set up a UK branch of an existing overseas business. It is
              capped at two years and it does not lead to indefinite leave to remain.
            </p>
            <p className="mt-4">
              It is routinely mis-sold in Pakistan as a settlement route. It isn’t one. If your goal
              is to settle in the UK, this is not the door.
            </p>
          </FeatureCard>
        </div>
      </Section>

      {/* ==================== 10-YEAR SETTLEMENT NEWS ==================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="In the news"
          title="On the “10-year settlement” news"
          subtitle="A proposal is not a law — and the difference matters before you plan around it."
        />
        <div className="mt-10 max-w-3xl space-y-4 text-ink-600 text-pretty">
          <p>
            You may have read that the UK is extending settlement from 5 years to 10. As things stand
            it is a <strong className="text-ink-900">proposal, not law</strong>. The consultation
            closed in February 2026, no government response has been published, and no rules have been
            laid. A House of Lords committee came out against it in June.
          </p>
          <p>
            Anyone telling you it is already the law is wrong. Anyone telling you it definitely won’t
            happen is also guessing. We’ll update this page when there is something real to report.
          </p>
        </div>
      </Section>

      {/* ======================= WHAT WE HELP WITH ======================= */}
      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Where we can help"
            title="Visitor visas, and refusals"
            subtitle="The two UK cases we take on — and the one that most often gets people to reapply blind."
          />
          <div className="space-y-4 text-ink-600 text-pretty">
            <p>
              If your UK visit visa was refused, the letter names a ground — and that ground tells you
              whether reapplying is worth it or whether you are about to waste another fee.
            </p>
            <p>Send it to us and we’ll tell you honestly which one it is.</p>
            <WhatsAppCta
              intent={{
                service: SERVICE.VISIT_VISA,
                page: PAGE,
                targetCountry: 'United Kingdom',
                message: 'Hi, my UK visit visa was refused and I’d like it reviewed.',
              }}
            >
              Send us your refusal
            </WhatsAppCta>
          </div>
        </div>
        <div className="mt-12">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      {/* ============================== FAQ ============================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Straight answers"
          title="UK questions, answered honestly"
          subtitle="The questions we get asked most about UK routes from Pakistan."
        />
        <div className="mt-12">
          <FAQ items={FAQ_ITEMS} />
        </div>
      </Section>

      <CTASection
        eyebrow="Been quoted a UK route?"
        title="Send us what you were told"
        subtitle="Send us what you were told and what you were quoted. We’ll tell you whether it is real."
        page={PAGE}
        waMessage="Hi, I’d like to ask about a UK visa from Pakistan."
      />
    </>
  );
}
