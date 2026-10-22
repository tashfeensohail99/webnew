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
 * Re-applying after a refusal.
 *
 * The job of this page is to slow people down. The instinct after a refusal is to
 * re-file immediately, usually with the same facts dressed up better. That produces
 * the same answer and adds a second refusal to the record. The page has to be willing
 * to say "not yet" and to explain the disclosure duty before someone quietly omits
 * the refusal from the next form.
 */
export const metadata: Metadata = {
  title: 'Re-applying After a Canadian Visa Refusal',
  description:
    'Applying again with the same facts usually brings the same answer. What counts as a genuine change, what does not, and why every refusal must be disclosed.',
  alternates: { canonical: '/refusals/re-applying' },
};

const PAGE = 'refusals-re-applying';

const BEFORE_YOU_REFILE = [
  {
    icon: 'doc' as const,
    kicker: 'First',
    title: 'Read the actual reasons',
    body: 'The refusal letter is a summary with boxes ticked. The officer’s reasoning sits in the notes on file. Without those you are guessing at what to fix, and a guess is how people re-file the same weakness twice.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Second',
    title: 'Separate fact from presentation',
    body: 'Ask honestly whether anything about your situation has changed, or whether only the paperwork would change. The distinction decides whether a new application is worth filing at all.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Third',
    title: 'Choose the right instrument',
    body: 'A fresh application is one of several responses to a refusal. If the officer made a legal or procedural error rather than a factual assessment, re-applying is the wrong tool.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Always',
    title: 'Disclose the refusal',
    body: 'Every refusal, from any country, gets declared on the next application. This is not optional and it is not a judgement call. Concealing one is a far worse problem than having one.',
  },
];

const REAL_CHANGE = [
  [
    'Your circumstances at home changed',
    'A new permanent job, a business you now own, property, a marriage, a child, a caring responsibility — something that objectively re-anchors you where you live.',
  ],
  [
    'Your finances changed in substance',
    'Not a larger balance moved in last week, but income and holdings that have existed long enough to have a traceable, explainable history.',
  ],
  [
    'The purpose of travel changed',
    'The reason for going is now different, definite and documented — not the same loose plan restated with more adjectives.',
  ],
  [
    'A gap in the record can now be filled',
    'A document that genuinely existed but was not produced, or a relationship or history you can now evidence properly rather than assert.',
  ],
  [
    'A factual error can be corrected',
    'The officer worked from something that was wrong — a misread date, a document misattributed — and you can show what the correct position is.',
  ],
];

const NOT_CHANGE = [
  [
    'A better-written letter',
    'The same facts explained more persuasively. Officers assess evidence, not prose.',
  ],
  [
    'More documents about the same facts',
    'Volume is not weight. Twenty pages evidencing a weak tie still evidence a weak tie.',
  ],
  [
    'Money placed in an account recently',
    'A balance with no history behind it tends to raise the concern it was meant to answer.',
  ],
  [
    'A different agent filing the same case',
    'The file is assessed, not the filer. IRCC’s own help centre states that applying again with the same information — including through a representative — will likely not change the decision.',
  ],
  [
    'A different visa office or a different form',
    'Your history follows you. There is no fresh start to be found by changing where the application is sent.',
  ],
];

const FAQS = [
  {
    q: 'How long do I have to wait before applying again?',
    a: 'IRCC states that if an application is refused you can apply again at any time unless your decision letter says otherwise — so read your own letter first, because it governs. That absence of a waiting period is precisely the trap. The right question is not how long to wait but what will be different. Wait until the change is real and evidenced, not until an interval has passed.',
  },
  {
    q: 'Does a previous refusal count against me forever?',
    a: 'A refusal is a decision on one application, not a permanent mark of character, and each new application is decided on its own merits. But the history remains visible to the officer, and a pattern of repeated near-identical applications tends to read badly — it suggests the underlying situation never changed. One refusal followed by a genuinely different application is an ordinary story. A run of near-identical refusals starts to be a story about the applicant rather than about any one file.',
  },
  {
    q: 'Do I have to declare a refusal from another country?',
    a: 'Yes. Canadian application forms ask about previous refusals of visas or permits, and about being denied entry to or ordered to leave any country — not only Canada. Answer the question that is asked, in full. If you are unsure whether an old event counts, disclose it and explain it rather than deciding for yourself that it does not.',
  },
  {
    q: 'What happens if I do not disclose a previous refusal?',
    a: 'The Immigration and Refugee Protection Act requires applicants to answer questions truthfully and to produce the evidence an officer reasonably requires. Withholding a material fact that could induce an error in administering the Act can support a finding of misrepresentation, which carries a period of inadmissibility set out in the Act — a bar on applying again, not merely a refusal. Assume the previous application is visible. Hiding a refusal converts a survivable problem into a serious one.',
  },
  {
    q: 'Should I ask for reconsideration instead of re-applying?',
    a: 'They answer different problems. Reconsideration asks the same office to look again at a decision already made; a fresh application asks for a decision on a changed set of facts. Which fits depends on what the notes on file actually say, which is why reading them comes first.',
  },
  {
    q: 'The refusal seems unfair. Can I challenge it rather than re-apply?',
    a: 'Possibly. Where the concern is that the decision was legally unreasonable or the process was unfair, the route runs through the Federal Court rather than through another application. That is a legal proceeding with its own deadlines and requirements and it is not a substitute for fixing a weak file.',
  },
  {
    q: 'Can you tell me whether my new application will succeed?',
    a: 'No. Nobody can, and anyone who does is telling you what you want to hear. What we can do is read the reasons for the refusal and tell you whether we think anything material has actually changed. Sometimes the useful advice is not to file yet.',
  },
];

export default function ReApplyingPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · After a refusal"
        title={
          <>
            The same facts usually get{' '}
            <span className="text-gold-300">the same answer</span>
          </>
        }
        subtitle={
          <>
            A new application is not an appeal. If nothing about your situation has genuinely
            changed, re-filing tends to produce a second refusal and a longer history to explain.
            Here is how to tell the difference between a real change and a better-dressed one.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your refusal read — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE CORE POINT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Start here"
          title="What a fresh application actually is"
        />
        <Prose>
          <p>
            A new application is a new decision on a new file. It is not a review of the old one and
            it is not an appeal. The officer deciding it will be able to see that you applied before
            and that you were refused, and will assess the new file against the same requirements as
            the last.
          </p>
          <p>
            That is why the instinct most people follow after a refusal — re-file quickly, add more
            documents, write a stronger cover letter — so often fails. It changes the presentation of
            a situation without changing the situation. IRCC itself puts the point bluntly in its{' '}
            <a
              href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1485&top=16"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              help centre
            </a>
            : applying again with the same information — including through a representative — will
            likely not change the decision. If the officer concluded that your ties at home were
            insufficient, a more eloquent explanation of the same ties is still the same ties.
          </p>
          <p>
            So the question to answer before you file anything is narrow and uncomfortable. What is
            materially different now? If the honest answer is nothing, the correct next step is not a
            better application. It is to wait until there is something different, or to accept that
            this route does not currently fit.
          </p>
        </Prose>
      </Section>

      {/* ===================== BEFORE YOU RE-FILE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Sequence"
          title="Four things to settle before you touch a form"
          subtitle="The step people most often skip is the first one — and it is the one that tells you whether the rest is worth doing."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BEFORE_YOU_REFILE.map((b) => (
            <FeatureCard key={b.title} icon={<Icon name={b.icon} />} kicker={b.kicker} title={b.title}>
              {b.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Read the reasons before you rewrite anything">
            <p>
              The refusal letter tells you which category of concern applied. It rarely tells you why
              the officer reached that view on your particular facts. Those working notes sit on the
              file and can be requested, and they routinely reveal that the real concern was something
              nobody guessed from the letter — a document that read as inconsistent, an employment
              history the officer did not accept, a sponsor’s circumstances rather than yours.
            </p>
            <p>
              Rebuilding a file without them is guesswork.{' '}
              <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
                How to obtain the notes on your file
              </Link>{' '}
              and{' '}
              <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
                what your options are after a refusal
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== REAL CHANGE VS PRESENTATION ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What counts"
              title="A genuine change in circumstances"
              subtitle="Something about your life is now factually different, and the difference can be evidenced by someone other than you."
            />
            <ul className="mt-6 space-y-4">
              {REAL_CHANGE.map(([term, def]) => (
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

          <div>
            <SectionHeading
              eyebrow="What does not count"
              title="Better presentation of the same facts"
              subtitle="Each of these is something we are regularly asked to do after a refusal. None of them changes what the officer was assessing."
            />
            <ul className="mt-6 space-y-4">
              {NOT_CHANGE.map(([term, def]) => (
                <li key={term} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-300 text-ink-500">
                    <span aria-hidden="true" className="text-lg leading-none">–</span>
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

        <div className="mt-12">
          <Prose>
            <p>
              The dividing line is simple to state and hard to accept: a change is real if it would
              still be true had you never been refused. A job you actually took, a business that
              actually trades, a marriage that actually happened. Anything assembled specifically to
              answer the refusal — and visibly assembled for that purpose — tends to confirm the
              officer’s concern rather than resolve it.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== DISCLOSURE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The duty that catches people out"
          title="You must declare the previous refusal"
        />
        <Prose>
          <p>
            Canadian application forms ask whether you have previously been refused a visa or permit,
            or refused entry to, or ordered to leave, Canada or any other country. The question is
            not limited to Canada and it is not limited to recent events. It has to be answered fully
            and accurately, including refusals arranged or filed by an agent on your behalf.
          </p>
          <p>
            A previous refusal is not, by itself, a bar to anything. Officers see them constantly. A
            file that says <em>I was refused, here is why, and here is what has changed</em> is an
            ordinary file and is dealt with as one.
          </p>
          <p>
            Concealing one is a different matter entirely. The Immigration and Refugee Protection Act
            obliges applicants to answer truthfully and to produce the evidence an officer reasonably
            requires, and withholding a material fact that could induce an error in administering the
            Act can support a finding of misrepresentation. That finding does not simply refuse the
            application — it carries a fixed period of inadmissibility set out in section 40 of the
            Act, during which further applications are barred. Read the current period at the source
            rather than taking anyone’s word for it. The refusal you were trying to hide was
            survivable on its own terms; a misrepresentation finding is a different order of problem,
            and it is one a licensed representative should look at before you file anything.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="If an agent told you to leave the refusal off the form">
            <p>
              This is among the most damaging advice an applicant can be given, and we are asked
              about it regularly. It is offered as a practical shortcut. It is not one. IRCC can see
              its own record of your prior applications, and the person who
              signs the declaration is you, not the agent who drafted it. The consequence lands on
              you and it lasts far longer than a refusal would have.
            </p>
            <p>
              The same applies to documents you did not prepare yourself. An experience letter, bank
              statement or invitation supplied by a third party, containing claims you cannot support,
              is misrepresentation whether or not you wrote it. If you do not know where a document in
              your own file came from, that is the thing to fix before you file again.{' '}
              <Link
                href="/refusals/misrepresentation"
                className="font-semibold text-accent-500 link-underline"
              >
                More on misrepresentation findings
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== OTHER ROUTES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Choosing the right instrument"
          title="Re-applying is one option, not the only one"
          subtitle="Which one fits depends on what the reasons on file actually say — not on which sounds fastest."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Icon name="doc" />}
            kicker="Understand it first"
            title="The notes on your file"
            href="/refusals/gcms-notes"
            cta="How to request them"
          >
            The officer’s reasoning, in their own words. Almost every sensible decision about what to
            do next depends on reading this first.
          </FeatureCard>
          <FeatureCard
            icon={<Icon name="refresh" />}
            kicker="Same decision, second look"
            title="Reconsideration"
            href="/refusals/reconsideration"
            cta="When it applies"
          >
            A request that the office revisit the decision it has already made. Narrow, discretionary,
            and suited to a specific kind of problem rather than a weak file.
          </FeatureCard>
          <FeatureCard
            icon={<Icon name="scale" />}
            kicker="Legal challenge"
            title="Judicial review"
            href="/refusals/judicial-review"
            cta="What it involves"
          >
            Where the concern is that the decision was legally unreasonable or the process unfair, the
            route runs through the Federal Court — a legal proceeding with its own deadlines and
            requirements, and one to take to a lawyer rather than a consultant.
          </FeatureCard>
        </div>

        <div className="mt-10">
          <Prose>
            <p>
              These are not alternatives to be picked by preference. A file refused because the
              evidence of ties was thin will not be rescued by the Federal Court. A decision reached
              on a misreading of the law will not be fixed by sending more bank statements. Diagnosis
              comes before treatment, and diagnosis means reading the reasons.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== WHO SHOULD NOT RE-APPLY YET ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who should not re-apply yet" />
        <div className="mt-8">
          <Callout title="Sometimes the right advice is: not now">
            <p>
              If you have not read the reasons for the refusal, you are not ready. If the only thing
              that would be different is the wording, you are not ready. If you are re-applying
              because a deadline is approaching rather than because your situation changed, the
              deadline is not a reason and the officer will not treat it as one.
            </p>
            <p>
              If you have already been refused several times on the same grounds without anything
              changing between attempts, another attempt is unlikely to help and the accumulating
              history is itself becoming a problem. And if the honest position is that the route
              simply does not fit your circumstances — that the ties, the funds or the purpose are not
              there — then the useful work is elsewhere, on a route that does fit, or on waiting until
              your circumstances are genuinely different.
            </p>
            <p>
              We would rather tell you on the first call that a new application is premature than take
              a fee for a file that repeats a refusal.{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                Read our no-guarantee policy
              </Link>
              . If the refusal was on a visitor visa, our{' '}
              <Link
                href="/tools/visit-visa-refusal-risk"
                className="font-semibold text-accent-500 link-underline"
              >
                refusal-risk questionnaire
              </Link>{' '}
              may help you see where the weakness sits before you spend anything.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the rules live" title="The primary sources" />
        <Prose>
          <p>
            We do not publish processing times, fees or waiting periods on this page, because those
            figures change and a number that is right today becomes a liability on a page you might
            read next year. Read them at the source on the day you need them.
          </p>
          <p>
            The duty to answer truthfully and the consequences of misrepresentation sit in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Act
            </a>
            — the duty to answer truthfully at{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-16.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              section 16
            </a>{' '}
            and misrepresentation, with its inadmissibility period, at{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              section 40
            </a>
            . IRCC’s own guidance on{' '}
            <a
              href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1485&top=16"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              whether to apply again after a refusal
            </a>{' '}
            and on{' '}
            <a
              href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=023&top=4"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              whether you must wait before re-applying
            </a>{' '}
            is published in its help centre. Where any of it bears on your own file, check it on the
            day you need it — and take a misrepresentation or Federal Court question to a licensed
            representative rather than acting on a web page.
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
        eyebrow="Before you file again"
        title="Find out whether anything has actually changed"
        subtitle="Send us the refusal letter and, if you have them, the notes from your file. We will tell you honestly whether a new application is worth making now, later, or at all."
        page={PAGE}
        waMessage="Hi, my Canadian application was refused and I’d like to know whether re-applying makes sense in my situation."
      />
    </>
  );
}
