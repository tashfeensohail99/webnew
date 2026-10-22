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
 * Proof of funds for a study permit.
 *
 * The job of this page is to move people away from "how much do I need to show"
 * and towards the three things an officer is actually testing: existence,
 * availability, and explainable origin. Deliberately no amounts — IRCC revises
 * the figure and any number printed here would be a liability later.
 */
export const metadata: Metadata = {
  title: 'Proving Funds for a Canadian Study Permit',
  description:
    'What an officer tests when assessing your money: that it exists, is available, and has an explainable origin — plus evidence and sudden deposits.',
  alternates: { canonical: '/study-in-canada/proof-of-funds' },
};

const PAGE = 'study-in-canada-proof-of-funds';

const THREE_TESTS = [
  {
    icon: 'calculator' as const,
    kicker: 'Test one',
    title: 'The money exists',
    body: 'There are real balances, in real accounts, at institutions that can be verified. Not a projection, not an asset that would have to be sold first, not a figure on a letterhead with nothing behind it.',
  },
  {
    icon: 'user' as const,
    kicker: 'Test two',
    title: 'It is available to you',
    body: 'You, or a sponsor who has committed to you, can actually move it. Money locked in someone else’s business, tied up in property, or sitting in an account you have no claim on is not available in the sense the officer means.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Test three',
    title: 'Its origin is explainable',
    body: 'The balance has a history that matches the story you have told about who your family is and what they do. In our experience this is the test applicants prepare for least, and it is worth as much attention as the amount itself.',
  },
];

const EVIDENCE = [
  {
    icon: 'building' as const,
    kicker: 'Held in Canada',
    title: 'A Canadian instrument in your name',
    body: 'Funds transferred to a Canadian account in your own name, or a guaranteed investment certificate held with a Canadian financial institution, tend to answer all three tests at once. Which institutions and products IRCC will accept changes over time — check the current guidance before you buy anything.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Held at home',
    title: 'Bank statements and account histories',
    body: 'Statements covering a meaningful run of months, showing movement consistent with declared income — not a single closing-balance certificate issued the week you applied.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Borrowed',
    title: 'A sanctioned education loan',
    body: 'A student or education loan formally sanctioned by a bank or financial institution, evidenced by the sanction letter and the terms, not by an in-principle indication.',
  },
  {
    icon: 'check' as const,
    kicker: 'Already spent',
    title: 'Receipts for what you have paid',
    body: 'Proof that tuition, and housing where applicable, has already been paid. Money already delivered to the institution leaves an officer little to argue with.',
  },
  {
    icon: 'star' as const,
    kicker: 'Awarded',
    title: 'Scholarships and funded programmes',
    body: 'Where a Canadian institution, a government, or a programme is funding you, the award letter setting out what is covered and for how long.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Given',
    title: 'A sponsor’s written commitment',
    body: 'A letter from the person funding you, alongside their own financial and income evidence. The letter alone proves nothing; it is the paperwork behind it that does the work.',
  },
];

const SPONSOR_POINTS: [string, string][] = [
  [
    'Who they are to you',
    'The relationship should be one that plausibly carries an obligation to fund your education, and it should be documented.',
  ],
  [
    'What they earn',
    'Income evidence in whatever form their situation produces — employment records, business records, tax filings, rental or agricultural income documentation.',
  ],
  [
    'What they hold',
    'Their own account statements and holdings, showing a balance whose history is consistent with the income they have declared.',
  ],
  [
    'What they have committed to',
    'A signed statement of exactly what they will cover — tuition, living costs, travel — and for how long. Vague goodwill is not a commitment.',
  ],
  [
    'Who else depends on them',
    'A sponsor already supporting several dependants, or several students, has less capacity than the raw balance suggests. Officers do consider this.',
  ],
];

const FAQS = [
  {
    q: 'How much money do I have to show?',
    a: 'IRCC sets a minimum for living costs, separate from tuition and travel, and it is periodically updated. It also differs depending on how many family members are coming with you. We deliberately do not print the figure here, because a number that is right today would quietly mislead you next year. Read it on IRCC’s own study permit pages on the day you apply. And treat it as a floor, not a target: meeting the minimum exactly, with nothing behind it, is not a strong file.',
  },
  {
    q: 'Do I have to buy a GIC?',
    a: 'A guaranteed investment certificate is not the only acceptable evidence, and there are applicants for whom it is unnecessary. It is popular because it can answer all three tests at once — the money exists, it sits in a Canadian institution in your name, and these products typically release the funds to you in instalments after you arrive. The terms differ by institution, and the fast-track study stream that once made a GIC effectively compulsory for some applicants no longer exists, so check IRCC’s current study permit guidance rather than relying on what was true a couple of intakes ago.',
  },
  {
    q: 'My uncle is paying. Is that acceptable?',
    a: 'A sponsor who is not a parent is not automatically a problem, but it does raise the question of why. The file needs to make the relationship, the reason for the support and the sponsor’s own financial position all legible at once. A sponsor with a documented income, a clear stated relationship and a written commitment is far more persuasive than a closer relative with an unexplained balance.',
  },
  {
    q: 'A large amount was deposited recently. Will that be a problem?',
    a: 'It will be looked at. A large deposit shortly before applying is not fatal, but it is unexplained until you explain it. Show where it came from — a property sale with the deed and the transfer record, a matured investment with the statement, a gift with the giver’s own evidence. What sinks these files is not the deposit; it is the deposit with nothing attached to it.',
  },
  {
    q: 'Can I show property, gold or land instead of cash?',
    a: 'Assets can support the picture of a family that genuinely has resources, but they do not on their own satisfy the availability test, because they would have to be sold or borrowed against before they could pay anyone. Treat them as context, not as the answer. Where an asset has been converted, show the conversion.',
  },
  {
    q: 'Can I use a borrowed balance just for the application?',
    a: 'No. Money parked in an account to produce a statement and withdrawn afterwards is misrepresentation, not a technical error. The consequence is not simply a refusal — a finding of misrepresentation can make you inadmissible to Canada for a fixed period set out in the Immigration and Refugee Protection Act, which is a far worse outcome than being told to wait and build a genuine position. Read the current consequences on IRCC’s own pages, and if you have already been accused of it, speak to a licensed representative rather than acting on anything you read online.',
  },
  {
    q: 'I was refused for insufficient funds. Can I just add more money and reapply?',
    a: 'Sometimes, but usually the refusal was about the origin or the availability of the money rather than its quantity, and adding more of the same kind of evidence changes nothing. Order the officer’s notes and read what was actually said before you reapply. See our pages on GCMS notes and on re-applying.',
  },
  {
    q: 'Does showing strong funds mean I will be approved?',
    a: 'No. Funds are one part of the assessment. An officer is also weighing whether the programme makes sense given your history, and whether you will leave at the end of your authorised stay. A financially strong applicant with an incoherent study plan can still be refused. No one — us included — can promise you an outcome, a processing time, or an approval on this route.',
  },
];

export default function ProofOfFundsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permits"
        title={
          <>
            Officers are not counting your money.{' '}
            <span className="text-gold-300">They are reading it</span>
          </>
        }
        subtitle={
          <>
            Almost every conversation about proof of funds starts with “how much do I need to show”.
            That is the least important question. What decides the file is whether the money exists,
            whether it is genuinely available to you, and whether its origin makes sense.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IS BEING TESTED ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The actual question"
          title="What a visa officer is testing"
        />
        <Prose>
          <p>
            You must satisfy an officer that you can pay your tuition, support yourself and any
            family members who come with you for the period of study, and cover the journey home.
            That obligation sits in Canada’s immigration regulations, and IRCC publishes a minimum
            figure for living costs that it revises from time to time.
          </p>
          <p>
            But meeting that figure is the beginning of the assessment, not the end of it. A file that
            hits the number and fails on origin can still be refused, and so can a file comfortably
            above the number with a balance that appeared from nowhere. Officers assess the evidence as
            a whole rather than checking a total, so a financial position that does not hang together
            invites questions the amount alone will not answer.
          </p>
          <p>
            So it helps to stop thinking of proof of funds as a threshold and start thinking of it as
            three separate tests, all of which have to pass.
          </p>
        </Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THREE_TESTS.map((t) => (
            <FeatureCard key={t.title} icon={<Icon name={t.icon} />} kicker={t.kicker} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== EVIDENCE IN KIND ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Evidence, in kind"
          title="What actually counts as proof"
          subtitle="No single document is required. What matters is that the combination you submit answers all three tests without the officer having to guess."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVIDENCE.map((e) => (
            <FeatureCard key={e.title} icon={<Icon name={e.icon} />} kicker={e.kicker} title={e.title}>
              {e.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="A balance certificate is the weakest thing in the file">
            <p>
              A frequent mistake is submitting a one-page letter from a bank confirming a
              closing balance, and nothing else. It proves the money existed on one day. It says
              nothing about where it came from, whether it stayed, or whether you can use it — which
              means it fails two of the three tests on its own.
            </p>
            <p>
              A statement showing the account’s movement over a run of months does far more work,
              because it lets the officer see the balance being built rather than simply asserted.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SPONSORS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="When someone else is paying"
              title="Sponsors, and what they have to document"
            />
            <Prose>
              <p>
                Most Pakistani students are funded by family, and that is entirely normal. It is not
                treated with suspicion. What is treated with suspicion is a sponsor who appears in the
                file as a name and a signature and nothing more.
              </p>
              <p>
                The rule of thumb is simple: a sponsor has to be documented as thoroughly as the
                applicant would be. Their income, their holdings, their own history of that money, and
                a written statement of exactly what they are committing to. If the sponsor could not
                pass the three tests themselves, the sponsorship does not fix your file — it moves the
                weakness one step back.
              </p>
              <p>
                Where the sponsor’s income is informal — agricultural income, an unregistered business,
                remittances from relatives abroad — say so plainly and evidence it in whatever form
                genuinely exists. An honest explanation of irregular income is far stronger than
                paperwork constructed to look conventional.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="The sponsor’s file" title="Five things it has to make clear" />
            <ul className="mt-6 space-y-4">
              {SPONSOR_POINTS.map(([term, def]) => (
                <li key={term} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-ink-900">{term}</p>
                    <p className="mt-1 text-ink-600 text-pretty">{def}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===================== WHY SUDDEN DEPOSITS READ BADLY ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The origin test"
          title="Why a sudden large deposit reads badly"
        />
        <Prose>
          <p>
            An officer reading a statement is building a story about your household. Income arrives at
            intervals, expenses leave, and a balance accumulates in a way that is consistent with what
            you have said your family does. That coherence is the evidence. The closing figure is only
            the summary of it.
          </p>
          <p>
            A single large credit shortly before the application breaks that coherence. It might be
            entirely innocent — a property sale, a matured policy, a genuine gift from a relative
            abroad. But on the page it can look indistinguishable from money borrowed briefly to
            produce a statement, and the officer has only the document in front of them to go on.
          </p>
          <p>
            The fix is not to hide the deposit. It is to attach its origin to it: the sale deed and the
            transfer record, the maturity statement, the remitter’s own evidence and a letter
            explaining the gift. A large credit with a documented source is unremarkable. The same
            credit with nothing attached invites the officer to draw the least favourable conclusion
            available to them.
          </p>
          <p>
            Two related patterns cause the same damage. A balance that appears and then substantially
            disappears after the statement date suggests the funds were never yours. And funds spread
            thinly across many accounts, or moved between accounts in the weeks before applying,
            produce a picture that is difficult to follow — and an officer who cannot follow the money
            is not obliged to assume the best.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Meeting the minimum exactly.</strong> Treating IRCC’s published living-cost figure
            as a target rather than a floor. A file that clears it by a margin, with tuition already
            paid, reads very differently from one assembled to land precisely on the line.
          </p>
          <p>
            <strong>Forgetting everything except living costs.</strong> The living-cost figure sits
            alongside tuition and travel, not instead of them. Applicants regularly show the living
            amount and nothing for the fees.
          </p>
          <p>
            <strong>Not counting accompanying family.</strong> The requirement rises with each family
            member who comes with you, and it is easy to prepare a file for one person and then add a
            spouse to it late.
          </p>
          <p>
            <strong>An arranged balance.</strong> Money placed in an account for the application and
            removed afterwards. This is misrepresentation, not a shortcut, and the consequence extends
            well beyond the refusal itself.
          </p>
          <p>
            <strong>A sponsor with no file of their own.</strong> A signed affidavit of support with no
            income evidence, no statements and no explanation of the relationship. It carries almost no
            weight.
          </p>
          <p>
            <strong>Documents you did not assemble.</strong> Statements, income letters or sanction
            letters produced by an agent, containing figures you cannot substantiate. A misrepresentation
            finding lands on the applicant regardless of who prepared the paper.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="When you should not apply yet" />
        <div className="mt-8">
          <Callout title="If the money is not genuinely yours or your sponsor’s, wait">
            <p>
              This is the part of the study permit route where people are most often persuaded to do
              something they should not. If your family’s real financial position does not support the
              programme you are looking at, the honest options are a less expensive programme, a
              different intake once a genuine position has been built, or a different route entirely —
              not a constructed balance.
            </p>
            <p>
              Waiting costs you an intake. A{' '}
              <Link
                href="/refusals/misrepresentation"
                className="font-semibold text-accent-500 link-underline"
              >
                misrepresentation finding
              </Link>{' '}
              costs you considerably more than that, and it follows you into future applications to
              Canada, including ones you have not thought of yet.
            </p>
            <p>
              It is also worth being blunt that funds are not the whole assessment. If the programme
              does not connect sensibly to what you have already studied or done, strong finances will
              not carry the file.{' '}
              <Link
                href="/study-in-canada/refusals"
                className="font-semibold text-accent-500 link-underline"
              >
                See why study permits are refused
              </Link>
              . We would rather tell you on the first call that the timing is wrong than take a fee for
              a file that was never going to work — which is why we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== NUMBERS AND SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current figure lives" title="Amounts, and why they are not on this page" />
        <Prose>
          <p>
            IRCC sets the minimum you must show for living costs, separate from tuition and travel, and
            it varies with the number of family members accompanying you. That figure has been revised,
            and will be revised again. We do not print it here, because a number that is correct today
            becomes a quiet liability on a page you might read next year.
          </p>
          <p>
            The current amount, and the current document checklist, are published by IRCC on its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              study permit pages
            </a>
            , and the underlying obligation sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Read the figure at the source, on the day you apply.
          </p>
          <p>
            Funds are one component of a study permit application. The{' '}
            <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
              study permit process
            </Link>
            , your{' '}
            <Link
              href="/study-in-canada/provincial-attestation-letter"
              className="font-semibold text-accent-500 link-underline"
            >
              provincial attestation letter
            </Link>{' '}
            and your choice of{' '}
            <Link
              href="/study-in-canada/designated-learning-institutions"
              className="font-semibold text-accent-500 link-underline"
            >
              designated learning institution
            </Link>{' '}
            all sit alongside it. If you have already been refused, the officer’s{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              GCMS notes
            </Link>{' '}
            will usually tell you whether the problem was the amount or the explanation.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you assemble the file"
        title="Have your financial position looked at honestly"
        subtitle="Tell us where the money is, whose it is and how it got there. We will give you our honest assessment of how it is likely to read, what is missing, and whether this is the right intake to apply for. We cannot promise an approval, and we will say so if we think you should wait."
        page={PAGE}
        waMessage="Hi, I’d like to know whether my proof of funds is strong enough for a Canadian study permit."
      />
    </>
  );
}
