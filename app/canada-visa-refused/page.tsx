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
    'Your refusal letter doesn’t tell you the real reason. How to get your GCMS notes, what actually caused the refusal, and whether reapplying or judicial review is your move.',
  alternates: { canonical: '/canada-visa-refused' },
};

const PAGE = 'canada-visa-refused';

const REFUSAL_REASONS: { icon: IconName; term: string; def: string }[] = [
  {
    icon: 'globe',
    term: 'Ties to Pakistan judged too weak',
    def: 'The officer isn’t satisfied you’d come back. This is the most common one by far, and it’s about how you evidenced your job, property and family — not about who you are.',
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
    def: 'The serious one. Even an “adjustment” someone else made to your file can carry a long ban — and this is where a lawyer stops being optional.',
  },
];

const OPTIONS = [
  {
    title: 'Reapply, properly',
    body: (
      <>
        If the notes show a fixable evidence problem — weak ties, thin funds history, a bad
        employment letter — reapplying with that fixed is usually faster, cheaper and more likely to
        work than court. <em>For most people, this is the right answer.</em>
      </>
    ),
  },
  {
    title: 'Judicial review at the Federal Court',
    body: (
      <>
        If the officer made a legal error — ignored evidence, breached procedural fairness, reached a
        decision the record doesn’t support — you can ask a judge to review it. This is a court case.
        It needs a lawyer.
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
        refused again makes the next attempt harder, not easier — which is exactly why reading your
        GCMS notes before you do anything matters so much.
      </>
    ),
  },
  {
    q: 'Can I get my GCMS notes myself?',
    a: (
      <>
        Yes. Anyone can request them for a small fee paid to the Canadian government. The one part
        most applicants can’t do alone is that a Canadian citizen or permanent resident has to file
        the request on your behalf. We’d genuinely rather you read your notes than pay us for a
        strategy built on a guess.
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
        For most people, yes — if the notes show a fixable evidence problem, reapplying is usually
        faster, cheaper and more likely to work than court. But that only holds if you’ve read the
        notes first. We’ll tell you honestly which of the three options is genuinely yours.
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
        There is a strict deadline that runs from the day you receive the decision, and it is short —
        and different depending on whether the decision was made inside or outside Canada. If your
        refusal is recent, talk to someone this week, even if that someone isn’t us.
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
            Start with this: <strong className="font-semibold text-white">the letter you received
            does not tell you the real reason.</strong> It’s a template with boxes ticked. The
            officer’s actual reasoning is written somewhere else — and you’re entitled to read it.
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
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ============== The letter is not the reason + GCMS tripwire ============== */}
      <Section tone="paper">
        <div className="lg:grid lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="First, the truth"
              title="Your refusal letter is not your refusal reason"
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                The letter says something like <em>“I am not satisfied that you will leave Canada at
                the end of your stay.”</em> That’s a checkbox. It’s on thousands of letters this
                month.
              </p>
              <p>
                Behind it sit the <strong className="text-ink-900">GCMS notes</strong> — the visa
                officer’s actual notes on your file. That’s where you find out whether it was your
                bank statements, your travel history, your employment letter, an inconsistency
                between two documents, or something you never even thought about.
              </p>
              <p>
                <strong className="text-ink-900">Reapplying without reading those notes is
                guessing.</strong>{' '}
                Most of the refused applicants who come to us have already reapplied once, blind, and
                been refused again — which makes the third attempt harder, not easier.
              </p>
            </div>
          </div>

          {/* The tripwire: cheap, genuinely useful, and it self-qualifies. */}
          <div className="mt-10 lg:col-span-2 lg:mt-0">
            <Callout title="Step one: get your GCMS notes">
              <p>
                Anyone can request them. It costs a small fee paid to the Canadian government and
                takes several weeks. You need a Canadian citizen or permanent resident to file the
                request on your behalf — that’s the only part most applicants can’t do alone.
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
          subtitle="Almost every refusal we read comes down to one of these five. None of them is about who you are — all of them are about how the file was built."
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
          subtitle="Which one is yours depends entirely on what the GCMS notes say. Two of these earn us less than a court case would — and we’ll still tell you when they’re the right answer."
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
              There is a strict deadline to apply to the Federal Court for leave and judicial review,
              and it runs from the day you receive the decision. It is short — and it is different
              depending on whether the decision was made inside or outside Canada.
            </p>
            <p>
              Miss it and the door usually closes. Extensions exist but are not granted for the
              asking.{' '}
              <strong className="text-ink-900">
                If your refusal is recent, talk to someone this week — even if that someone isn’t us.
              </strong>
            </p>
          </div>
          {/* TODO(tashfeen): state the exact figures (in-Canada vs outside-Canada) here once
              a lawyer on the team has confirmed the numbers and the wording. Deliberately
              left qualitative rather than risk publishing a deadline that is wrong. */}
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
              Book a consultation — PKR {site.consultFee.amount.toLocaleString()}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
