import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  Icon,
  MonogramWatermark,
  type IconName,
} from '@/components/ui';
import { site, SERVICE } from '@/lib/site';

/**
 * The refusal hub — for people who have just been refused and need a real path forward.
 *
 * These readers just had bad news and are frightened; several will have already
 * been burned by an agent promising a fix. Calm and useful outperforms urgent and
 * salesy here, and it is also simply the honest register for the subject.
 *
 * ⚠️ LEGAL REVIEW REQUIRED BEFORE PUBLISH: every statement about deadlines, what
 * the Federal Court can and cannot do, and misrepresentation consequences must be
 * signed off by a lawyer on the firm's team. These are drafted from general
 * knowledge of IRPA, not from the firm's practice. A reader who trusts a wrong
 * deadline here loses their only remedy.
 */
export const metadata: Metadata = {
  title: 'Canada Visa Refused? Your Real Options',
  description:
    'Refused a Canadian visa? How to read the officer’s decision note, when GCMS notes still help, and whether to reapply, seek review or stop.',
  alternates: { canonical: '/canada-visa-refused' },
};

const PAGE = 'canada-visa-refused';

const IRPA_S72 = 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html';

const REFUSAL_REASONS: { icon: IconName; term: string; def: string }[] = [
  {
    icon: 'globe',
    term: 'Ties to Pakistan judged too weak',
    def: 'The officer isn’t satisfied you’d come back. It’s about how you evidenced your job, property and family — not about who you are.',
  },
  {
    icon: 'building',
    term: 'Funds that don’t hold up',
    def: 'Money that appeared last month. Money in your father’s or brother’s account, not yours. A balance with no history behind it.',
  },
  {
    icon: 'plane',
    term: 'Purpose of visit not credible',
    def: 'The trip doesn’t add up against your income, your leave, or your invitation.',
  },
  {
    icon: 'doc',
    term: 'Documents that contradict each other',
    def: 'Two dates that don’t match. A salary that doesn’t match the bank credits.',
  },
  {
    icon: 'shield',
    term: 'Misrepresentation',
    def: 'The serious one. Even an “adjustment” someone else made to your file can make you inadmissible for five years under section 40 of the Act — and this is where a lawyer stops being optional.',
  },
];

const OPTIONS = [
  {
    title: 'Reapply, properly',
    body: (
      <>
        If the officer’s reasons show a fixable evidence problem, such as weak ties, a thin funds
        history or a bad employment letter, a fresh application lets you put in evidence a court
        would not look at. It is usually faster and cheaper too.{' '}
        <em>For many people, this is the right answer.</em>{' '}
        <Link href="/refusals/re-applying" className="font-semibold text-accent-500 link-underline">
          When re-applying makes sense
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Judicial review at the Federal Court',
    body: (
      <>
        If the officer made a legal error — ignored evidence, breached procedural fairness, reached a
        decision the record doesn’t support — you can ask a judge to review it. This is a court case,
        so you need a Canadian lawyer or must represent yourself. A consultant cannot do it for you.{' '}
        <Link href="/refusals/judicial-review" className="font-semibold text-accent-500 link-underline">
          How judicial review works
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Accept it and stop',
    body: (
      <>
        Sometimes the refusal was correct and no amount of money changes that. We will tell you when
        that’s the case. You’d be surprised how rarely anyone does.
      </>
    ),
  },
];

const FAQS = [
  {
    q: 'Does a refusal go on my record and hurt future applications?',
    a: (
      <>
        A refusal is part of your history, and future officers can see it. Reapplying blind and being
        refused again makes the next attempt harder, not easier — which is exactly why reading the
        officer’s reasons before you do anything matters so much.
      </>
    ),
  },
  {
    q: 'Can I get my GCMS notes myself?',
    a: (
      <>
        Yes, and you may not need to. IRCC now sends an officer decision note with most refusals, so
        read everything it sent you first. If you want the fuller record, you can request your own
        file from Pakistan under the Privacy Act, and IRCC charges no fee for that. Someone in Canada
        is only needed for the separate Access to Information route.{' '}
        <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
          How GCMS requests work
        </Link>
        . We’d genuinely rather you read your notes than pay us for a strategy built on a guess.
      </>
    ),
  },
  {
    q: 'If I win at the Federal Court, do I get my visa?',
    a: (
      <>
        No. A judge does not re-decide your application. If you win, your file is sent back to be
        decided again by a <em>different</em> officer — who can, lawfully, refuse you a second time.
        Judicial review is a remedy for a decision made <em>improperly</em>, not a way to appeal
        until you get a yes.
      </>
    ),
  },
  {
    q: 'Should I just reapply?',
    a: (
      <>
        For many people, yes, if the officer’s reasons show a fixable evidence problem. A fresh
        application lets you put in new evidence, which a court case does not, and it is usually
        faster and cheaper. But that only holds if you’ve read the reasons first. We’ll tell you
        honestly which of the three options is genuinely yours.
      </>
    ),
  },
  {
    q: 'Can an agent handle my Federal Court case?',
    a: (
      <>
        No. Judicial review is a proceeding in the Federal Court of Canada — a consultant cannot file
        it and cannot appear. An agent who offers to “handle your court case” is telling you something
        important about themselves.
      </>
    ),
  },
  {
    q: 'How long do I have to go to the Federal Court?',
    a: (
      <>
        15 days for a matter arising in Canada, or 60 days for a matter arising outside Canada, after
        the day you are notified of the decision or otherwise become aware of it. Those periods are
        in{' '}
        <a href={IRPA_S72} className="font-semibold text-accent-500 link-underline" target="_blank" rel="noopener noreferrer">
          section 72 of the Act
        </a>
        , read at the source on 8 November 2026. A Canadian lawyer should confirm which one applies
        to you and work out the date. Requesting GCMS notes does not pause it. If your refusal is
        recent, talk to someone this week, even if that someone isn’t us.
      </>
    ),
  },
];

export default function VisaRefusedPage() {
  return (
    <>
      <PageHero
        eyebrow="Refusals · Judicial Review"
        title={
          <>
            Your Canadian visa was refused.{' '}
            <span className="text-gold-300">Here’s what you can actually do.</span>
          </>
        }
        subtitle={
          <>
            Start with this: <strong className="font-semibold text-white">read everything IRCC sent
            you, not only the letter.</strong> Most refusals now come with a note written by the
            officer who decided your file. If yours didn’t, or you need the fuller record, you’re
            entitled to ask for it.
          </>
        }
      >
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.JR_RESUBMISSION,
            page: PAGE,
            targetCountry: 'Canada',
            message: 'Hi, my Canadian visa was refused. I’d like someone to look at the refusal letter.',
          }}
        >
          Send your refusal letter
        </WhatsAppCta>
        <Link href="/book-consultation" className="btn btn-gold">
          Have your refusal read — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ============== The letter is not the reason + GCMS tripwire ============== */}
      <Section tone="paper">
        <div className="lg:grid lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="First, the truth"
              title="Find the officer’s reasons before you do anything else"
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                The letter says something like <em>“I am not satisfied that you will leave Canada at
                the end of your stay.”</em> That’s a standard ground. On its own it can’t tell you
                what went wrong.
              </p>
              <p>
                IRCC now sends an <strong className="text-ink-900">officer decision note</strong>{' '}
                with most refusal letters: for most temporary resident applications since 29 July
                2025, including visitor visas, study permits and work permits, and for most permanent
                resident applications since 26 May 2026. It’s written by the officer who made the
                decision. That’s where you find out whether it was your bank statements, your travel
                history, your employment letter, an inconsistency between two documents, or something
                you never even thought about.
              </p>
              <p>
                Behind it sit the <strong className="text-ink-900">GCMS notes</strong>, the fuller
                record on your file. You’ll want them if your refusal is older, if no note came with
                it, or if IRCC removed parts of the note.
              </p>
              <p>
                <strong className="text-ink-900">Reapplying without reading the officer’s reasons is
                guessing.</strong>{' '}
                A second refusal on the same facts makes the next attempt harder, not easier.
              </p>
            </div>
          </div>

          {/* The tripwire: cheap, genuinely useful, and it self-qualifies. */}
          <div className="mt-10 lg:col-span-2 lg:mt-0">
            <Callout title="If you still need your GCMS notes">
              <p>
                You can request your own file yourself from Pakistan under the Privacy Act, and IRCC
                charges no fee for that. Only the separate Access to Information route needs someone
                in Canada and has a fee. Allow time for a reply, and remember that asking for notes
                does not pause the Federal Court time limit.{' '}
                <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
                  How GCMS requests work
                </Link>
                .
              </p>
              <p className="mt-3">
                We’ll do it for you for a fixed fee — or you can do it yourself. We’d genuinely rather
                you read your notes than pay us for a strategy built on a guess.
              </p>
            </Callout>
          </div>
        </div>
      </Section>

      {/* ========================= Why applications fail ========================= */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What actually happened"
          title="Why Pakistani applications actually get refused"
          subtitle="Five grounds that come up often. None of them is about who you are — all of them are about how the file was built."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REFUSAL_REASONS.map((r) => (
            <FeatureCard key={r.term} icon={<Icon name={r.icon} />} title={r.term}>
              {r.def}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ============================ Three options ============================ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Your move"
          title="You have three options. Not one."
          subtitle="Which one is yours depends entirely on what the officer’s reasons say. Two of these earn us less than a court case would — and we’ll still tell you when they’re the right answer."
        />
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {OPTIONS.map((o, i) => (
            <li key={o.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-2xl">{o.title}</h3>
              <p className="mt-3 flex-1 text-ink-600 text-pretty">{o.body}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-3xl text-center text-ink-600 text-pretty">
          Two narrower situations have their own pages:{' '}
          <Link href="/refusals/reconsideration" className="font-semibold text-accent-500 link-underline">
            asking the office to look again
          </Link>{' '}
          when something on file was plainly overlooked, and{' '}
          <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
            a misrepresentation finding
          </Link>
          , which you should read about before you file anything else.
        </p>
      </Section>

      {/* ================== What judicial review is NOT (weight) ================== */}
      <section className="relative overflow-hidden bg-navy text-white">
        <MonogramWatermark className="-right-16 -top-16 h-[26rem] w-[26rem]" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 sm:py-28">
          <p className="eyebrow eyebrow--light">Read this before you pay anyone</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-balance sm:text-4xl">
            What judicial review is <span className="text-gold-300">not</span>
          </h2>
          <div className="mt-6 space-y-4 text-ink-200 text-pretty">
            <p>
              <strong className="font-semibold text-white">The Federal Court will not give you a
              visa.</strong> A judge does not re-decide your application or overrule the officer’s
              judgement. If you win, the court sends your file back to be decided again by a{' '}
              <em>different</em> officer — who can, lawfully, refuse you a second time.
            </p>
            <p>
              So judicial review is not a way to “appeal until you get a yes”. It’s a remedy for a
              decision that was made <em>improperly</em>. If the officer applied the law correctly and
              simply wasn’t persuaded by your evidence, court is the wrong tool — and anyone selling
              it to you as a guaranteed fix is taking your money.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ The clock is real ============================ */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Timing" title="The clock is real" />
          <div className="mt-6 space-y-4 text-ink-600 text-pretty">
            <p>
              There is a strict deadline to apply to the Federal Court for leave and judicial review:{' '}
              <strong className="text-ink-900">15 days</strong> for a matter arising in Canada, or{' '}
              <strong className="text-ink-900">60 days</strong> for a matter arising outside Canada,
              after the day you are notified of the decision or otherwise become aware of it. Those
              periods are in{' '}
              <a href={IRPA_S72} className="font-semibold text-accent-500 link-underline" target="_blank" rel="noopener noreferrer">
                section 72 of the Act
              </a>
              , read at the source on 8 November 2026. A Canadian lawyer should confirm which one
              applies to your decision and work out the date.
            </p>
            <p>
              Waiting for GCMS notes does not pause it. Miss it and the door usually closes. Extensions exist but are not granted for the
              asking.{' '}
              <strong className="text-ink-900">
                If your refusal is recent, talk to someone this week — even if that someone isn’t us.
              </strong>
            </p>
          </div>
          {/* Periods printed on the site owner's instruction, 8 November 2026. A lawyer on
              the team has not yet confirmed the wording: see caFederalCourtPeriods in lib/facts.ts. */}
        </div>
      </Section>

      {/* ======================= Lawyer, not an agent ======================= */}
      <Section tone="alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Who handles it"
            title="Why this one needs a lawyer, not an agent"
          />
          <div className="mt-6 space-y-4 text-ink-600 text-pretty">
            <p>
              Judicial review is a proceeding in the Federal Court of Canada. A consultant cannot file
              it and cannot appear.{' '}
              <strong className="text-ink-900">
                An agent who offers to “handle your court case” is telling you something important
                about themselves.
              </strong>
            </p>
            <p>
              At Tashfeen, refusals are handled by our lawyers. They’ll read your GCMS notes, tell you
              which of the three options above is genuinely yours, and say so plainly if the answer is
              “reapply” or “let it go” — both of which earn us less than a court case would.{' '}
              <Link href="/about/our-team" className="font-semibold text-accent-500 link-underline">
                Meet them first
              </Link>
              .
            </p>
            <p>
              When you sit down with us, we’ll show you both kinds of outcome — files that were sent
              back for redetermination and files that were not — before you decide anything.
            </p>
          </div>
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      {/* ================================ FAQ ================================ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Straight answers"
          title="Questions people ask after a refusal"
          center
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ items={FAQS} />
        </div>
      </Section>

      {/* ================================ CTA ================================ */}
      <section className="relative overflow-hidden bg-hero text-white">
        <MonogramWatermark className="-left-16 -bottom-20 h-[28rem] w-[28rem]" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
          <p className="eyebrow eyebrow--light justify-center">Start with the letter</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-balance sm:text-4xl">
            Send us your refusal letter
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-200 text-pretty">
            We’ll read it, tell you what it actually means, and tell you which of the three options is
            realistically yours.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppCta
              variant="ghost"
              intent={{
                service: SERVICE.JR_RESUBMISSION,
                page: PAGE,
                targetCountry: 'Canada',
                message: 'Hi, my Canadian visa was refused. I’d like someone to look at the refusal letter.',
              }}
            >
              Send your refusal letter
            </WhatsAppCta>
            <Link href="/book-consultation" className="btn btn-gold">
              Have your refusal read — free
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
