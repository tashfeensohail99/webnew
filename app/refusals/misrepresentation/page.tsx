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
 * Misrepresentation findings under IRPA s.40.
 *
 * This is the highest-stakes page on the site, and it is deliberately the least
 * prescriptive. A finding of misrepresentation carries a statutory bar, and the
 * response to a procedural fairness letter is squarely licensed-representative
 * work. The page therefore explains WHAT the provision is and WHY an agent's
 * conduct binds the applicant — and then stops, and routes the reader to a
 * licensed representative. It does not tell anyone how to answer a letter, and
 * it does not print the length of the bar as though it were settled on their
 * particular facts.
 */
export const metadata: Metadata = {
  title: 'Misrepresentation Findings in Canadian Immigration',
  description:
    'What misrepresentation means under section 40 of the IRPA, why an agent’s actions in your name can bind you, and why not to answer a fairness letter alone.',
  alternates: { canonical: '/refusals/misrepresentation' },
};

const PAGE = 'refusals-misrepresentation';

const ELEMENTS = [
  {
    icon: 'doc' as const,
    kicker: 'The conduct',
    title: 'Misrepresenting or withholding',
    body: 'The provision covers both an untrue statement and the omission of something that should have been disclosed. Silence is capable of being misrepresentation.',
  },
  {
    icon: 'user' as const,
    kicker: 'The route',
    title: 'Directly or indirectly',
    body: 'The words “directly or indirectly” are the reason an agent’s conduct in your name can be attributed to your application. It does not have to have come from your own hand.',
  },
  {
    icon: 'scale' as const,
    kicker: 'The subject matter',
    title: 'Material facts',
    body: 'The fact must be material — it must matter to a relevant matter in the application. Materiality is assessed by the decision-maker, not by the applicant, and it is broader than most people assume.',
  },
  {
    icon: 'shield' as const,
    kicker: 'The effect',
    title: 'Could induce an error',
    body: 'The test reaches conduct that could induce an error in the administration of the Act. An officer catching the problem does not remove the concern — the risk of error is what the provision targets.',
  },
];

const HOW_IT_ARISES = [
  {
    title: 'An agent files in your name',
    body: 'Forms completed, employment history inflated, or an address and travel history adjusted by someone acting for you. The application bears your signature and your declaration.',
  },
  {
    title: 'A document you did not create',
    body: 'An experience letter, bank statement, offer letter or enrolment letter arranged by a third party. Supporting documents may be verified with the issuer, and the document is submitted as part of your application.',
  },
  {
    title: 'An earlier refusal not disclosed',
    body: 'A prior refusal or visa application to any country, omitted because someone advised that it “would only hurt the case”. The omission is the problem, not the refusal.',
  },
  {
    title: 'A relationship or dependant not declared',
    body: 'A spouse, a child, or a change in marital status left out of a form — sometimes on advice, sometimes because a form was completed for the applicant.',
  },
  {
    title: 'Something true when filed, not updated',
    body: 'Circumstances change while an application is pending. Whether a duty to update applies depends on the situation, and this is a common route into a fairness letter.',
  },
  {
    title: 'Copy-forward across applications',
    body: 'An answer given in one application that does not match an answer given in another. Prior applications are held on record, and an inconsistency between them is one of the things that can prompt a closer look.',
  },
];

const FAQS = [
  {
    q: 'What is misrepresentation under Canadian immigration law?',
    a: 'Section 40 of the Immigration and Refugee Protection Act makes a person inadmissible for directly or indirectly misrepresenting or withholding material facts relating to a relevant matter, where doing so induces or could induce an error in the administration of the Act. The provision is short, and it is broad. The wording is published in full on the Justice Canada site and is the only text worth relying on.',
  },
  {
    q: 'I did not lie — my agent did. Does that protect me?',
    a: 'Not automatically. The provision reaches misrepresentation made directly or indirectly, and the application was submitted in your name with your declaration attached. This is the single most important reason not to use an unlicensed agent: their conduct can attach to you, and they carry none of the consequence. If this has happened, it is a matter for a licensed representative, not for a self-drafted explanation.',
  },
  {
    q: 'It was an honest mistake. Is that a defence?',
    a: 'Innocence is not an automatic answer. The provision is not written around intent, and applicants have been found inadmissible without any finding of deliberate deception. Canadian courts have recognised a narrow exception in genuinely exceptional circumstances, but it is narrow, it is fact-specific, and whether it could apply to your situation is a legal assessment — not something to conclude from a web page.',
  },
  {
    q: 'What is a procedural fairness letter?',
    a: 'Where an officer has a concern that could lead to a refusal or a finding against you, they may write to you setting out the concern and inviting a response before deciding. It is a real and meaningful opportunity, and it is time-limited. We deliberately do not publish guidance on how to answer one, because the content of that response can materially affect the outcome and depends entirely on your own facts. Take it to a licensed representative immediately, and work to the deadline stated in the letter itself rather than any period you have read elsewhere.',
  },
  {
    q: 'How long does inadmissibility last?',
    a: 'The Act sets a period of inadmissibility, and for a foreign national it also restricts applying for permanent resident status during that period. Note that the clock does not simply run from the decision: section 40 sets out different starting points depending on whether the person is inside or outside Canada, and getting that wrong is how people miscount by years. We do not print the length or the start date here, because the period that applies, when it begins, and what it bars in your particular case are exactly the questions people get wrong from summaries. Read section 40 at the source, and have a licensed representative apply it to your facts.',
  },
  {
    q: 'Can a misrepresentation finding be challenged?',
    a: 'There are avenues in the Canadian system for challenging decisions, and they have their own tests, deadlines and forums. Which — if any — is open to you depends on the decision made, where it was made, and what stage you are at. That assessment is licensed work. See our pages on reconsideration and judicial review for the general shape of those routes.',
  },
  {
    q: 'Should I just apply again and not mention it?',
    a: 'No. Prior applications and prior findings are held on record, and a new application that does not match them compounds the original problem rather than resolving it. If you are inadmissible, a fresh application filed as though nothing happened is the worst available step.',
  },
  {
    q: 'Can you make a misrepresentation finding go away?',
    a: 'No, and nobody honestly can. Anyone who tells you they can have a finding removed, expedited or overlooked for a fee is describing something that does not exist. We publish a no-guarantee policy for exactly this reason.',
  },
];

export default function MisrepresentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Refusals and findings"
        title={
          <>
            Misrepresentation is the one finding{' '}
            <span className="text-gold-300">you should never handle alone</span>
          </>
        }
        subtitle={
          <>
            A finding under section 40 of the Immigration and Refugee Protection Act carries a period
            of inadmissibility. It can arise from something an agent did in your name. This page
            explains what the provision is — and then tells you to stop reading and speak to a
            licensed representative.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Speak to someone licensed
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== READ THIS FIRST ===================== */}
      <Section tone="paper">
        <Callout title="This is not a page to act on by yourself">
          <p>
            If you have received a letter raising a concern about the truth or completeness of your
            application, or a decision that refers to misrepresentation, that is the point to obtain
            representation from someone licensed to give Canadian immigration advice — a member in
            good standing of the College of Immigration and Citizenship Consultants, or a lawyer
            entitled to practise in a Canadian province or territory.
          </p>
          <p>
            We do not publish model answers, template explanations or strategy for these letters.
            That is deliberate. The response often shapes the outcome, the deadline is set out in the
            letter itself, and a well-intentioned self-drafted reply can close options that a licensed
            representative would have kept open. If your matter is at that stage,{' '}
            <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
              book a consultation
            </Link>{' '}
            rather than reading further and acting on it.
          </p>
        </Callout>
      </Section>

      {/* ===================== WHAT THE PROVISION SAYS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The provision, plainly"
          title="What section 40 actually covers"
          subtitle="Four elements do all the work, and each one is wider than most applicants expect."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ELEMENTS.map((e) => (
            <FeatureCard key={e.title} icon={<Icon name={e.icon} />} kicker={e.kicker} title={e.title}>
              {e.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              Section 40 also reaches situations beyond a person’s own statements — including having
              been sponsored by someone found inadmissible for misrepresentation, a final
              determination vacating a refugee decision, and loss of citizenship in specified
              circumstances. The full wording, and the periods and restrictions attached to it, are
              set out in the{' '}
              <a
                href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Act itself
              </a>
              . Read the section rather than a summary of it — including ours.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== HOW IT ARISES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How people arrive here"
          title="The situations that produce these findings"
          subtitle="Very few of the people who reach us set out to deceive anyone. That is the point of the section below."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_ARISES.map((s, i) => (
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

      {/* ===================== THE AGENT PROBLEM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Why the agent question matters so much"
          title="“Directly or indirectly” is the whole problem"
        />
        <Prose>
          <p>
            When an application is filed, it carries a declaration that the information in it is
            truthful, complete and correct. If an unlicensed agent completes your forms, improves
            your employment history, produces a supporting document, or answers a question in a way
            you never saw, the application still went in under your name and your declaration.
          </p>
          <p>
            The provision covers misrepresentation made directly or indirectly. That wording exists
            precisely so that responsibility cannot be moved onto a third party by handing the file
            to them. In practice the agent is untraceable by the time a letter arrives, has no
            regulator, and bears none of the consequence. You bear all of it.
          </p>
          <p>
            This is the honest reason to care whether your representative is licensed. A member of
            the College of Immigration and Citizenship Consultants or a Canadian lawyer is on a
            public register, is subject to a complaints and discipline process, and can be sanctioned
            for the conduct that produces these findings. That is not a guarantee of good behaviour —
            it is a guarantee that there is somewhere to complain. Someone operating outside that
            system is accountable to no one, and the file is in your name.
          </p>
          <p>
            The related consequence is that you should personally read every form before it is
            submitted, and keep your own copy of what was filed. If a representative will not show
            you the complete application before signing, that alone is a reason to stop.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAIRNESS LETTERS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Before a decision is made"
          title="Procedural fairness letters exist — and they are time-limited"
        />
        <Prose>
          <p>
            Canadian decision-making includes a duty of fairness. Where an officer holds a concern
            that could lead to a finding against you, they may put that concern to you in writing and
            give you an opportunity to respond before deciding. That letter is not a decision. It is
            the opportunity that precedes one.
          </p>
          <p>
            Two things follow from that, and only two, because the rest is not ours to publish. The
            first is that the window is short and it is real — missing it generally means the decision
            is made without your side of it. The second is that what goes into the response is legal
            work, on your specific facts, and a well-meaning reply written at speed can make the
            position worse rather than better.
          </p>
          <p>
            We will not set out here what such a response should contain, what to concede, what to
            explain, or what evidence to attach. Any page that offers you that is offering legal
            advice about a case it has never seen. Take the letter, with your full application file,
            to a licensed representative.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO THIS DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this page does not help" />
        <div className="mt-8">
          <Callout title="If you want a shortcut, we are the wrong firm">
            <p>
              This page does not help anyone looking for a way to have a finding removed, reduced or
              overlooked. There is no such service, and any offer of one is the same category of
              conduct that caused the problem in the first place.
            </p>
            <p>
              It also does not suit anyone who wants to file again quickly and say nothing about what
              happened. A new application inconsistent with your own record compounds the issue rather
              than resolving it. And it does not suit anyone who wants us to confirm that an honest
              mistake ends the matter — it may be highly relevant, but it is not a switch that turns
              the provision off, and we will not tell you otherwise to make a call easier.
            </p>
            <p>
              What we can do is look at what was actually filed, tell you plainly what stage you are
              at, and help you get it in front of the right licensed person. We cannot promise an
              outcome, and we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>{' '}
              saying so. If you are still at the stage of understanding an ordinary refusal rather
              than a finding, start with{' '}
              <Link
                href="/refusals/gcms-notes"
                className="font-semibold text-accent-500 link-underline"
              >
                the officer’s own notes
              </Link>{' '}
              instead.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHERE TO READ THE LAW ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the authority lives" title="Read it at the source" />
        <Prose>
          <p>
            We do not publish the length of the inadmissibility period, the deadline on a fairness
            letter, or any figure attached to this subject. Those things are set out in the
            legislation and in the correspondence you receive, and a number remembered from a website
            is exactly how people miss a window that mattered.
          </p>
          <p>
            The provision is{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              section 40 of the Immigration and Refugee Protection Act
            </a>
            . Immigration consultants are regulated by the{' '}
            <a
              href="https://college-ic.ca/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              College of Immigration and Citizenship Consultants
            </a>
            , whose public register lets you check whether anyone advising you is licensed at all.
            Check it before you hand over documents, not after.
          </p>
          <p>
            If your matter has not reached this stage and you are simply working out why an
            application was refused, our pages on{' '}
            <Link href="/refusals/reconsideration" className="font-semibold text-accent-500 link-underline">
              reconsideration
            </Link>
            ,{' '}
            <Link href="/refusals/judicial-review" className="font-semibold text-accent-500 link-underline">
              judicial review
            </Link>{' '}
            and{' '}
            <Link href="/refusals/re-applying" className="font-semibold text-accent-500 link-underline">
              re-applying
            </Link>{' '}
            set out the general shape of those routes.
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
        eyebrow="Do not wait on this one"
        title="Bring us the letter and the full file"
        subtitle="If a concern has been raised about the truth or completeness of your application, the useful first step is a licensed person reading what was actually submitted in your name. Deadlines in these matters are short."
        page={PAGE}
        waMessage="Hi, I’ve received a letter about my application that mentions misrepresentation and I need to speak to someone licensed."
      />
    </>
  );
}
