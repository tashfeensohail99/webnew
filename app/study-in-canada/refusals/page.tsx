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
 * Study permit refusals.
 *
 * The job of this page is to translate the refusal letter. Applicants read the
 * ticked boxes as the reasons; they are categories, not reasoning. The reasoning
 * is in the officer's notes. Second job: kill the reflex to re-file the same
 * file the following week, which is the single most common and most expensive
 * mistake we see after a study permit refusal.
 */
export const metadata: Metadata = {
  title: 'Canada Study Permit Refusals',
  description:
    'What each ticked box on a study permit refusal means, why the officer’s notes say far more, and why resubmitting the same file rarely changes it.',
  alternates: { canonical: '/study-in-canada/refusals' },
};

const PAGE = 'study-permit-refusals';

const GROUNDS = [
  {
    icon: 'doc' as const,
    kicker: 'Purpose of visit',
    title: 'The study plan did not convince',
    body: 'The officer was not persuaded that studying is the real reason for the trip, or that this programme makes sense for you. This is the ground with no visitor-visa equivalent, and it is the one people misread most.',
  },
  {
    icon: 'plane' as const,
    kicker: 'Travel history',
    title: 'No record of leaving and returning',
    body: 'Nothing in your history demonstrates that you have travelled and come home. A thin passport is not fatal, but it removes a piece of evidence the officer would otherwise weigh in your favour.',
  },
  {
    icon: 'user' as const,
    kicker: 'Family ties',
    title: 'Ties in Canada versus ties at home',
    body: 'The officer weighed what holds you in Pakistan against what pulls you to Canada. Close relatives already in Canada are not disqualifying, but they change the balance the officer is assessing.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Financial status',
    title: 'Funds not shown to the officer’s satisfaction',
    body: 'Either the amount, the source, or the history of the money did not hold up. Funds that appear shortly before filing, with no explanation of where they came from, routinely fail here.',
  },
  {
    icon: 'building' as const,
    kicker: 'Employment situation',
    title: 'Nothing substantial to return to',
    body: 'The officer saw no employment, business or career path in Pakistan that a reasonable person would return for after the programme ends.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Documents',
    title: 'Something was missing, unclear or doubted',
    body: 'A required document was absent, illegible, inconsistent with the rest of the file, or the officer had concerns about its authenticity — a materially different and far more serious situation.',
  },
];

const STEPS = [
  {
    title: 'Read the letter for what it is',
    body: 'The ticked boxes are categories drawn from a standard list. They tell you the headings under which the officer had concerns. They do not tell you what the officer actually thought.',
  },
  {
    title: 'Get the officer’s notes',
    body: 'The reasoning sits in the officer’s entry in IRCC’s case management system, obtained through an access-to-information request. Applicants outside Canada usually cannot file that request themselves and go through a representative in Canada — check the current eligibility rules on the ATIP portal before you start.',
  },
  {
    title: 'Identify what is fixable',
    body: 'Separate the findings you can change with better evidence from the ones that are structural. A weak explanation of fund sources is fixable. A programme that makes no sense against your career history is not fixable by adding documents.',
  },
  {
    title: 'Choose a route deliberately',
    body: 'A fresh application, a request for reconsideration, or an application to the Federal Court are different remedies with different tests and different windows. They are not interchangeable, and the wrong one wastes both time and the intake you were aiming for.',
  },
  {
    title: 'Rebuild rather than resubmit',
    body: 'If a fresh application is right, it should answer the officer’s finding directly, on the face of the file. Any adviser who tells you to re-file the same package with a new fee receipt is not giving you advice.',
  },
];

const FAQS = [
  {
    q: 'The letter has four boxes ticked. Are those my four reasons?',
    a: 'Those are four headings. Refusal letters are generated from a fixed list, and an officer ticks the categories their concerns fall under. The reasoning — the sentence or two explaining what the officer actually concluded about your file — is recorded separately in the officer’s notes. Reading only the letter, most people guess wrong about which concern was decisive.',
  },
  {
    q: 'What does "purpose of visit" mean on a study permit refusal?',
    a: 'It means the officer was not satisfied that the study itself makes sense as the reason for coming. Typically the concern is that the programme does not follow from your existing education or career, that it repeats a qualification you already hold, that it represents a step backwards, or that a comparable programme was available closer to home. It is a reasonableness assessment of the study plan, and it has no equivalent on a visitor visa file — which is why applicants who have been refused a visit visa before often do not recognise it.',
  },
  {
    q: 'Can I just apply again with the same documents?',
    a: 'You can, and the answer is usually the same. A fresh application is assessed by a fresh officer on the file in front of them, but the previous application and its notes remain visible. If nothing in the new file addresses what the last officer found, there is no reason for a different outcome — and each refusal adds to a pattern that becomes harder to argue against later.',
  },
  {
    q: 'How soon can I re-apply?',
    a: 'IRCC’s general position is that you may apply again at any time unless your own decision letter says otherwise — read your letter, and check IRCC’s help centre for the current rule. The real constraint is whether you have anything new to say. Filing again a week later with the same evidence tends to buy a second refusal rather than an earlier start date.',
  },
  {
    q: 'Does a refusal count against my Express Entry or work permit applications later?',
    a: 'A refusal itself is not a bar and does not have to be hidden. It becomes a problem when it is not disclosed on later applications that ask about it, or when the reasoning behind it — for instance a finding about documents — was never dealt with. Disclose it accurately and address the underlying finding.',
  },
  {
    q: 'The officer doubted a document. Is that the same as any other refusal?',
    a: 'No. A concern about the genuineness of a document is a materially more serious matter than an unconvincing study plan, because a finding of misrepresentation carries a period of inadmissibility set by law. If your notes point in that direction, treat it as urgent, do not simply re-file, and get advice from a licensed representative — a Canadian immigration lawyer or an RCIC — before you respond to anything.',
  },
  {
    q: 'Can you tell me my chances of success on a second application?',
    a: 'No, and we would not put a figure on it. What we can do is read the officer’s notes with you and tell you honestly whether the finding is one that better evidence can answer — and, when it is not, say so before you spend money on a second attempt.',
  },
];

export default function StudyPermitRefusalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permit refusals"
        title={
          <>
            The letter tells you the headings.{' '}
            <span className="text-gold-300">The notes tell you the reason.</span>
          </>
        }
        subtitle={
          <>
            A study permit refusal arrives as a page of ticked boxes. Those boxes are categories, not
            reasoning. Until you have read what the officer actually wrote, you are guessing at what
            to fix — and re-filing the same file usually produces the same answer.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your refusal read — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT THE LETTER IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Start here"
          title="What the refusal letter actually is"
        />
        <Prose>
          <p>
            A study permit refusal letter is a standard form. The officer works through a fixed list
            of headings and marks the ones under which they had concerns. The letter that reaches you
            is therefore a summary of categories — it is not a written decision in the sense a lawyer
            or a court would use the term.
          </p>
          <p>
            The decision itself lives in the officer’s entry in IRCC’s case management system. That
            entry is typically brief — often a few sentences — but it is where the officer sets out
            what they weighed and what they concluded. Two applicants can receive letters with
            identical boxes ticked and have entirely different underlying findings.
          </p>
          <p>
            This matters because almost every decision you make next depends on which finding was
            decisive. Those notes are released through an access-to-information request rather than
            handed to you with the letter, and applicants outside Canada generally need a
            representative in Canada to file it — the eligibility rules and the current process are
            set out on the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/access-information-privacy.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC access to information and privacy pages
            </a>
            . We explain the practical side on{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              requesting the officer’s notes
            </Link>
            . Deciding first and reading later is how people end up with two refusals instead of one.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE GROUNDS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The common grounds"
          title="What each heading tends to mean"
          subtitle="These are the categories that appear most often on study permit refusals. What follows is what officers are generally weighing under each one — your own notes may say something narrower."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUNDS.map((g) => (
            <FeatureCard key={g.title} icon={<Icon name={g.icon} />} kicker={g.kicker} title={g.title}>
              {g.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== THE STUDY PLAN GROUND ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The ground people misread"
              title="Study-plan reasonableness"
            />
            <Prose>
              <p>
                Underlying most study permit refusals is a single statutory question: is the officer
                satisfied that you will leave Canada at the end of the period authorised for your
                stay. That question also sits behind visitor visa refusals, and applicants who have
                been refused a visit visa often assume this is the same assessment.
              </p>
              <p>
                It is not. On a study permit the officer has an additional angle available to them —
                whether the course of study itself is a reasonable thing for you to be doing. If the
                programme does not follow from your qualifications, repeats something you already
                hold, is a step down from your existing level, or is available on comparable terms
                closer to home, the officer can conclude that study is not the real purpose of the
                trip.
              </p>
              <p>
                No amount of additional bank documentation answers that finding. It is answered, if it
                can be answered at all, by explaining the logic of the programme against your actual
                career — or by choosing a different programme.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What officers tend to probe" title="Inside the study plan" />
            <ul className="mt-6 space-y-4">
              {[
                ['Progression', 'Whether the programme is a sensible next step from what you have already completed, rather than a repeat or a step backwards.'],
                ['Career logic', 'Whether the qualification connects to work you have done or intend to do, in a way an outsider can follow.'],
                ['Local alternatives', 'Whether a comparable programme was available in Pakistan, and if so why this one was worth the cost of leaving.'],
                ['Cost against benefit', 'Whether the expense is proportionate to the outcome the programme realistically produces.'],
                ['Plans after graduation', 'What you say you will do afterwards, and whether the file supports it.'],
              ].map(([term, def]) => (
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

      {/* ===================== WHAT TO DO ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="What to do, in this order"
          subtitle="The order matters more than the speed. Working through these before you re-file is what gives a second attempt something new to say."
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

        <div className="mt-10">
          <Callout title="Re-filing the same package is not a strategy">
            <p>
              The most common reaction to a study permit refusal is to submit again immediately, with
              the same documents and a new fee. It is understandable — there is usually a term start
              date bearing down on you. It also rarely works.
            </p>
            <p>
              A new officer looks at the new file, but your previous application and the notes on it
              remain on the record. If nothing in the new submission engages with what the last
              officer found, there is no mechanism by which the outcome should change. Meanwhile each
              refusal becomes part of a pattern that later officers see, and that a reconsideration
              request or a court application becomes harder to argue against.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== ROUTES AFTER REFUSAL ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Your options are not interchangeable"
          title="Three different remedies, three different tests"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            href="/refusals/re-applying"
            cta="How re-applying works"
            icon={<Icon name="refresh" />}
            kicker="A fresh application"
            title="Answer the finding"
          >
            Appropriate when the officer’s concern is one that better evidence or a better-argued study
            plan can genuinely address. It is a new file, assessed on its own merits.
          </FeatureCard>
          <FeatureCard
            href="/refusals/reconsideration"
            cta="About reconsideration"
            icon={<Icon name="chat" />}
            kicker="Reconsideration"
            title="Ask the officer to look again"
          >
            A request to IRCC to revisit the decision. It is discretionary, narrow, and not a route for
            simply disagreeing with how the evidence was weighed.
          </FeatureCard>
          <FeatureCard
            href="/refusals/judicial-review"
            cta="About judicial review"
            icon={<Icon name="scale" />}
            kicker="Federal Court"
            title="Challenge the decision"
          >
            A court application about whether the decision was reasonable and fairly made — not a
            second chance to present a better file. It runs to strict filing deadlines that differ
            depending on where you applied from, and it is work for a Canadian lawyer rather than a
            consultancy. Check the current deadline on the Federal Court’s own materials and take
            legal advice early.
          </FeatureCard>
        </div>
        <Prose>
          <p>
            If a document was doubted rather than merely missing, read{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              misrepresentation
            </Link>{' '}
            before you do anything else — the consequences and the timeline there are different in
            kind. For the general principles that apply across all Canadian refusals, including visit
            and work permit files, see{' '}
            <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
              refused a Canadian visa
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO THIS DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="When a second attempt is not the answer" />
        <div className="mt-8">
          <Callout title="Some refusals should not be re-filed at all">
            <p>
              If the officer’s finding is that the programme itself does not make sense for you, a
              second application for the same programme is unlikely to go differently. The honest
              options there are a different programme, a different route, or accepting that study in
              Canada is not the right vehicle for what you are trying to achieve.
            </p>
            <p>
              The same applies where the underlying finding is about the source of funds and there is
              no documentary answer to give, or where a document was doubted and the concern is real.
              Re-filing in those situations tends to repeat the outcome, and can leave the next file
              in a worse position than before.
            </p>
            <p>
              And if what you actually want is to work in Canada rather than to study, the study
              permit route may have been the wrong question from the start. A{' '}
              <Link href="/work-permit-canada" className="font-semibold text-accent-500 link-underline">
                work-based route
              </Link>{' '}
              is assessed on entirely different grounds. We would rather tell you that on the first
              call than take a fee for a second application we do not believe in, which is why we
              publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Requirements, forms and deadlines" />
        <Prose>
          <p>
            Fees, processing standards, form versions and the deadlines that apply to court
            applications all change. We deliberately do not print those figures here, because a number
            that is correct today is a liability on a page you might read next year.
          </p>
          <p>
            IRCC publishes the current study permit requirements and application steps on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and the legal test an officer applies to a study permit sits in{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2002-227/section-216.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              section 216 of the Immigration and Refugee Protection Regulations
            </a>
            . Whether and when you may apply again after a refusal is answered in{' '}
            <a
              href={'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=023&top=4'}
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC’s help centre
            </a>
            . Read these at the source, on the day you need them. Before a second attempt, it is also
            worth revisiting the{' '}
            <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
              study permit requirements
            </Link>{' '}
            and{' '}
            <Link href="/study-in-canada/proof-of-funds" className="font-semibold text-accent-500 link-underline">
              how funds are assessed
            </Link>
            .
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
        eyebrow="Before you re-apply"
        title="Have the refusal read properly before you spend money again"
        subtitle="Send us the refusal letter and, if you have them, the officer’s notes. We will tell you what the finding actually was and whether a second attempt is realistic — or whether it is not."
        page={PAGE}
        waMessage="Hi, my Canadian study permit was refused and I’d like to understand the reasons before re-applying."
      />
    </>
  );
}
