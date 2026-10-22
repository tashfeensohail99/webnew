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
  Prose,
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

/**
 * Judicial review at the Federal Court.
 *
 * High stakes, and the page's job is to correct two beliefs at once: that this
 * is an "appeal" that gets you a visa, and that it is something a consultant
 * can run. It is neither. The Court reviews the decision, not the application,
 * and litigation before the Federal Court is a lawyer's work.
 *
 * Deliberately no fee figures, no cost estimates, no leave-grant rates, and no
 * day counts printed on the page — the statutory periods are short, differ by
 * where the decision was made, and must be read at the source on the day you
 * need them.
 */
export const metadata: Metadata = {
  title: 'Judicial review at the Federal Court',
  description:
    'What judicial review of an IRCC decision is: a check on whether it was reasonable and fair, not a reapplication. Deadlines, and why it needs a lawyer.',
  alternates: { canonical: '/refusals/judicial-review' },
};

const PAGE = 'refusals-judicial-review';

const WHAT_THE_COURT_DOES = [
  {
    icon: 'scale' as const,
    kicker: 'What is reviewed',
    title: 'The decision, not your case',
    body: 'The Court examines how the officer reached the decision — whether the reasoning holds together, whether it accounts for the evidence that was before the officer, and whether the process was fair. It is not a fresh assessment of whether you deserve a visa.',
  },
  {
    icon: 'doc' as const,
    kicker: 'What the Court sees',
    title: 'The record that existed then',
    body: 'The argument is built on the material the officer actually had. Documents you wish you had filed, or obtained afterwards, generally cannot be introduced to improve the application at this stage.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'What success looks like',
    title: 'Sent back, not granted',
    body: 'If the application succeeds, the usual result is that the decision is set aside and the matter is returned to IRCC to be decided again, normally by a different officer. The Court does not issue the visa or the permit itself.',
  },
  {
    icon: 'shield' as const,
    kicker: 'What it is not',
    title: 'Not an appeal on the merits',
    body: 'A disagreement with the outcome is not a ground. There has to be an identifiable error — in the reasoning, in the treatment of the evidence, or in the fairness of the process — that a court can act on.',
  },
];

const STEPS = [
  {
    title: 'Counsel assesses whether there is a reviewable error',
    body: 'A lawyer reads the refusal, the officer’s notes and the file as it was filed, and forms a view on whether the decision contains an error a court could act on. Many refusals, honestly read, do not.',
  },
  {
    title: 'The application for leave is filed in time',
    body: 'Judicial review is commenced by an application for leave to the Federal Court. The statutory period is short and begins running from when you are notified of, or otherwise become aware of, the decision — not from when you decide to act.',
  },
  {
    title: 'The record and written argument are perfected',
    body: 'Counsel requests the decision-maker’s reasons and record, then files affidavit evidence and a written memorandum setting out the alleged errors. The Minister files a response.',
  },
  {
    title: 'A judge decides leave, on paper',
    body: 'Leave is decided in writing, without anyone appearing. If leave is refused, the matter ends there — and the Act provides no appeal from that decision.',
  },
  {
    title: 'If leave is granted, the hearing',
    body: 'A hearing date is set and counsel argues the case before a judge of the Federal Court.',
  },
  {
    title: 'The judgment, then redetermination',
    body: 'If the application is allowed, the decision is quashed and the matter goes back to IRCC to be decided again, usually by a different officer, sometimes with directions from the Court. That new decision can still be a refusal.',
  },
];

const FAQS = [
  {
    q: 'If I win, do I get the visa?',
    a: 'Almost never directly. The ordinary remedy is that the refusal is set aside and your application returns to IRCC to be decided afresh, normally by a different officer. You get a new decision, not a guaranteed positive one. Occasionally a court gives directions that narrow what the next officer may do, but that is exceptional and it is not something anyone can promise you at the outset.',
  },
  {
    q: 'What is “leave” and why does it exist?',
    a: 'Immigration matters cannot go straight to a hearing. The Act requires you first to obtain the Court’s permission — leave — to proceed. A judge reviews the written material and decides whether the case is arguable enough to be heard. Leave is decided on paper, no one appears, reasons are not normally given, and the Act provides no appeal from a refusal of leave.',
  },
  {
    q: 'How long do I have to file?',
    a: 'Not long, and the period differs depending on whether the matter arose inside or outside Canada. The clock starts when you are notified of the decision or otherwise become aware of it. We do not print either period here, and we will not tell you which one applies to you — both are set by statute, both are unforgiving, and getting that wrong ends the remedy. Read them at the source in section 72 of the Immigration and Refugee Protection Act, linked below, and put the question to Canadian counsel immediately rather than after you have finished thinking it over. A judge may allow an extended time for special reasons, but that is an argument counsel has to win, not an entitlement.',
  },
  {
    q: 'Can an immigration consultant file this for me?',
    a: 'No. Judicial review is litigation before the Federal Court of Canada. The Court’s own guidance on who may represent you is explicit: you may act in person or be represented by a lawyer in good standing with a Canadian law society, and a citizenship or immigration consultant may neither represent you in a Federal Court proceeding nor advise you on it. That page is linked in the sources section below — read it yourself. If anyone offers to run this for you without being a Canadian lawyer, that alone tells you what you need to know about them.',
  },
  {
    q: 'Should I wait for the officer’s notes before deciding?',
    a: 'Counsel will usually want to see them, because the refusal letter alone rarely shows whether there is a reviewable error. But the filing period runs regardless of whether you have obtained anything. Do not let a pending notes request consume your deadline — raise both with a lawyer at the same time.',
  },
  {
    q: 'What does it cost?',
    a: 'We do not publish figures for this. Court fees are set out in the tariff to the Federal Courts Rules and published by the Federal Court itself — read them there, on the day. Legal fees depend on the file, on counsel and on how far the matter goes — a case that ends at the leave stage and one that runs to a hearing are not comparable. Any Canadian counsel you instruct should give you a written scope and fee arrangement before you commit. Be wary of a single flat figure quoted before anyone has read your file.',
  },
  {
    q: 'Is reapplying a better option?',
    a: 'For a great many refusals, yes. A fresh application lets you fix the actual weakness and put new evidence before an officer, which judicial review does not. Judicial review is for cases where the decision itself was flawed — not for cases where the file was thin. That is a diagnosis, and it should be made before you spend anything.',
  },
  {
    q: 'Can I appeal if the Federal Court dismisses my case?',
    a: 'Only in narrow circumstances. There is no appeal from a refusal of leave. Where an application is heard and dismissed, an appeal to the Federal Court of Appeal is available only if the judge certifies a serious question of general importance. Most matters end at the Federal Court.',
  },
];

export default function JudicialReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="After a refusal · Federal Court"
        title={
          <>
            The Court reviews the decision.{' '}
            <span className="text-gold-300">It does not make a new one.</span>
          </>
        }
        subtitle={
          <>
            Judicial review asks whether an IRCC officer decided your case reasonably and fairly. If
            it succeeds, your file usually goes back to be decided again by a different officer — it
            does not produce a visa. It requires a lawyer, and the deadline is short and already
            running.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your refusal assessed
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IT IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The remedy, plainly"
          title="What judicial review actually is"
        />
        <Prose>
          <p>
            Most immigration refusals carry no appeal. There is no tribunal that rehears a refused
            visitor visa or study permit and substitutes its own answer. What exists instead is
            supervision by the courts: the Federal Court of Canada can examine whether the officer’s
            decision was <em>reasonable</em> and whether the process leading to it was{' '}
            <em>procedurally fair</em>.
          </p>
          <p>
            That distinction governs everything else on this page. The judge is not deciding whether
            you should be admitted to Canada. The judge is deciding whether the decision that was
            made can stand — whether the reasoning is coherent and justified on the record, whether
            central evidence was ignored, whether a concern that you had no chance to answer was held
            against you.
          </p>
          <p>
            So a strong case for judicial review is not the same thing as a sympathetic case. Files
            that are genuinely deserving but were simply weakly documented usually do not have a
            reviewable error in them. Files that were refused on reasoning that does not survive
            reading sometimes do, regardless of how the applicant comes across.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT THE COURT DOES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Four things to be clear about"
          title="What the Federal Court will and will not do"
          subtitle="These are the points most often misunderstood before people reach counsel — and misunderstanding them is what makes this route feel like a disappointment even when it succeeds."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_THE_COURT_DOES.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Winning means being sent back, not being approved">
            <p>
              This is the single most important sentence on the page. When an application for
              judicial review is allowed, the refusal is quashed and the matter is remitted to IRCC
              for a fresh decision, normally by a different officer. Your application is alive again.
              It has not been granted.
            </p>
            <p>
              The new officer decides on the record as it stands, and can refuse again — sometimes on
              the same broad ground, better reasoned. People who go into this expecting a court to
              hand them a visa come out of a technical success feeling cheated. Go in understanding
              what the remedy is.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== LEAVE AND TIME ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The first gate" title="Leave: permission to be heard at all" />
            <Prose>
              <p>
                Immigration matters do not proceed straight to a hearing. The Act requires you to
                apply for the Court’s <strong>leave</strong> — its permission — before the case can
                be argued. A judge reads the written material and decides whether the application is
                arguable enough to go forward.
              </p>
              <p>
                Leave is decided on paper. Nobody appears, no one gives oral evidence, and reasons
                are not normally provided. If leave is refused, the matter ends and the Act gives no
                appeal from that determination.
              </p>
              <p>
                This is why the written work matters so much. The leave stage is often the whole
                case, and it is won or lost on a record and a memorandum drafted by counsel — not on
                how compelling your circumstances are in conversation.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="The second gate" title="Time, and why it is already running" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                The Act sets a filing period for the application for leave, and it is short. Two
                different periods exist: one for matters arising <strong>inside Canada</strong> and
                one for matters arising <strong>outside Canada</strong>. We do not print either
                period here, and we will not tell you which applies to your decision — that is a
                legal question, and getting it wrong ends the remedy. Counsel answers it.
              </p>
              <p>
                The period runs from the day you are notified of the decision, or otherwise become
                aware of it. Not from when you understood what it meant, not from when you obtained
                the officer’s notes, and not from when you finished deciding what to do. It is
                running now.
              </p>
              <p>
                A judge may allow an extended time for special reasons. That is a discretionary
                application counsel has to argue and win, and delay caused by shopping around for
                advice is not a strong reason. Treat the deadline as real.
              </p>
              <p>
                Because both periods are statutory and unforgiving, read them at the source rather
                than from any website, this one included.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How a judicial review runs"
          subtitle="Each stage is a filter. Most applications do not reach the last one."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>The deadline is spent deciding.</strong> The most common way this route is lost
            is not in court. It is weeks of consulting friends, ordering the officer’s notes, and
            waiting for a clearer picture — while a statutory period that was never long expires
            quietly.
          </p>
          <p>
            <strong>Treating it as a second application.</strong> People assemble the bank statements
            and employment letters they wish they had filed and expect the Court to look at them.
            Judicial review is generally argued on the record that was before the officer. New
            evidence belongs in a new application, not here.
          </p>
          <p>
            <strong>Confusing disagreement with error.</strong> “The officer was wrong about me” is
            not a ground. The reasoning has to be shown to be unreasonable or the process unfair.
            That is a legal assessment, and it is why the first step is having a lawyer read the
            file, not deciding to sue.
          </p>
          <p>
            <strong>Being taken to court by someone who cannot go there.</strong> Agents and
            consultants sometimes take money to “file in Federal Court”. They cannot conduct that
            litigation. What follows is either nothing filed, or something filed badly, in a
            proceeding where a missed step cannot be undone.
          </p>
          <p>
            <strong>Winning and being refused again.</strong> A redetermination is a genuine second
            decision, not a formality. Where the underlying file was thin, the second officer often
            reaches the same destination by a better route. If the weakness was evidentiary rather
            than legal, litigation was never the fix.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="For most refusals, this is not the answer">
            <p>
              It does not suit you if your file was simply under-documented. If the honest diagnosis
              is that the officer had too little to work with, the remedy is a better application,
              not a court challenge — and a court challenge will not let you supply what was missing.
            </p>
            <p>
              It does not suit you if what you want is speed. This route adds a legal proceeding in
              front of your immigration matter, and even complete success returns you to the start of
              an IRCC decision rather than to an approval.
            </p>
            <p>
              It does not suit you if a simpler step has not been tried and is still open. For some
              refusals a{' '}
              <Link href="/refusals/reconsideration" className="font-semibold text-accent-500 link-underline">
                request for reconsideration
              </Link>{' '}
              or a properly rebuilt{' '}
              <Link href="/refusals/re-applying" className="font-semibold text-accent-500 link-underline">
                fresh application
              </Link>{' '}
              is the proportionate response. Start by finding out what the refusal actually said —{' '}
              <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
                the officer’s notes
              </Link>{' '}
              usually say more than the letter.
            </p>
            <p>
              And it does not suit anyone who wants a promised result. Two separate judicial
              decisions and then a fresh officer’s decision sit between you and any outcome, and none
              of them belongs to your representative. That is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== REPRESENTATION ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Who can act for you"
          title="This is a lawyer’s work, and we are not pretending otherwise"
        />
        <Prose>
          <p>
            An application for leave and judicial review is litigation in the Federal Court of
            Canada. In that court you may act in person or be represented by a lawyer in good
            standing with a law society in Canada. The Federal Court states plainly, in its own{' '}
            <a
              href="https://www.fct-cf.ca/en/pages/who-may-represent-you-in-an-immigration-refugee-protection-or-citizenship-matter-in-federal-court"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              guidance on who may represent you
            </a>
            , that a citizenship or immigration consultant may neither represent you in a Federal
            Court proceeding nor give you legal advice about it. That includes us. Anyone who says
            otherwise is either misdescribing what they will do or misleading you outright.
          </p>
          <p>
            What we can honestly do is the part that comes first, and it is not a small part: read
            the refusal and the officer’s notes and tell you what was actually decided and on what
            basis, so that your file is intelligible when it reaches a lawyer. Whether there is a
            reviewable error, which filing period applies, and what should be filed are questions for
            Canadian counsel — not for us, and nothing on this page is legal advice about your
            proceeding. Where the refusal reads like a documentation problem rather than a
            decision-making one, we will say so plainly and put our effort into a better application
            instead.
          </p>
          <p>
            If you are already close to your deadline, contact a Canadian immigration lawyer now and
            do the diagnosis in parallel. The one thing that cannot be recovered is the time.
          </p>
        </Prose>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Where the current rules live" title="Read the deadlines at the source" />
        <Prose>
          <p>
            The leave requirement, the filing periods and the power to extend time are set out in
            section 72 of the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Immigration and Refugee Protection Act
            </a>
            . The procedure itself is governed by the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-22/"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal Courts Citizenship, Immigration and Refugee Protection Rules
            </a>
            , and the Court publishes its own guidance, forms and fees at the{' '}
            <a
              href="https://www.fct-cf.ca/"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal Court of Canada
            </a>
            . The right of appeal from a judgment on judicial review — available only where the judge
            certifies a serious question of general importance — is in{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-74.html"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              section 74 of the same Act
            </a>
            .
          </p>
          <p>
            On who may act for you, the Federal Court publishes{' '}
            <a
              href="https://www.fct-cf.ca/en/pages/who-may-represent-you-in-an-immigration-refugee-protection-or-citizenship-matter-in-federal-court"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              its own statement of who may represent you
            </a>{' '}
            in an immigration, refugee protection or citizenship matter. If you take one link from
            this page, take that one.
          </p>
          <p>
            We deliberately do not print court fees, cost estimates or the day counts here. The
            periods are short enough that a stale or mis-transcribed number on a website could cost
            you the remedy entirely — read them at the source, on the day, and confirm with counsel
            which one applies to your decision.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before the deadline runs"
        title="Find out whether this is a decision problem or an evidence problem"
        subtitle="Send us the refusal letter, the date you were notified, and anything else IRCC sent you. We will tell you honestly whether this looks like something for Canadian counsel — or whether a better application is the real answer."
        page={PAGE}
        waMessage="Hi, my Canada application was refused and I want to know whether judicial review at the Federal Court is realistic in my case."
      />
    </>
  );
}
