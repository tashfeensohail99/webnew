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
 * Reconsideration requests.
 *
 * The corrective job of this page: people treat reconsideration as a free
 * appeal, send a letter, and let the judicial review clock expire while they
 * wait for a reply that may never come. Reconsideration is discretionary, it is
 * treated as exceptional rather than routine, and asking for it stops nothing.
 * Everything on the page is written to make those three points land.
 *
 * No success rates, response times, filing deadlines or fee figures appear on
 * this page by design — those move, and the official source is linked instead.
 */
export const metadata: Metadata = {
  title: 'Reconsideration requests after an IRCC refusal',
  description:
    'What a reconsideration request is, why it is discretionary and exceptional, when it is worth attempting, and why the judicial review clock keeps running.',
  alternates: { canonical: '/refusals/reconsideration' },
};

const PAGE = 'refusals-reconsideration';

/* The narrow set of situations where a request has something real to work with. */
const WORTH_TRYING = [
  {
    icon: 'doc' as const,
    kicker: 'Something on file was missed',
    title: 'A document you submitted was not considered',
    body: 'You can show the item was properly filed before the decision — a submission receipt, an upload confirmation, a courier record — and the reasoning shows it was never taken into account. This is the strongest form of request, because it points to a specific error rather than a difference of opinion.',
  },
  {
    icon: 'scale' as const,
    kicker: 'The file was misread',
    title: 'A finding rests on a plain factual error',
    body: 'The officer recorded the wrong employer, the wrong dates, the wrong applicant, or read a figure incorrectly — and the error is demonstrable from the file itself rather than arguable. Not "the officer weighed it wrongly", but "the officer had the fact wrong".',
  },
  {
    icon: 'shield' as const,
    kicker: 'Procedural fairness',
    title: 'You were never given a chance to answer',
    body: 'Where a concern about your credibility or a document arose and no opportunity was given to respond, that can ground a request. It can also ground a judicial review, which is why the two need to be considered together and not one after the other.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Timing',
    title: 'A decisive fact existed but arrived late',
    body: 'New information that was capable of changing the result and relates to the position as it stood at decision. This is the narrowest and most often misused category — evidence you gathered after the refusal, to fix a weakness the officer identified, is usually a reason to file fresh, not to ask for reconsideration.',
  },
];

const STEPS = [
  {
    title: 'Read the actual reasoning first',
    body: 'You cannot argue that something was overlooked until you know what was considered. That means the refusal letter, everything attached to it, and where necessary the officer’s notes.',
  },
  {
    title: 'Identify the deadline, not the argument',
    body: 'Before drafting anything, work out the date by which a judicial review application would have to be filed. That date governs the whole strategy, and it does not move because you are writing a letter.',
  },
  {
    title: 'Decide between three options, not one',
    body: 'Reconsideration, a fresh application, or judicial review. They are alternatives with different costs, different timelines and different consequences — and for some files the honest answer is that none of them is worth the money.',
  },
  {
    title: 'Put the request through the right channel',
    body: 'A request has to reach the office that made the decision, referencing the file. IRCC’s own web form is the usual route for correspondence about a submitted application, and the accepted channels are set out on IRCC’s website rather than anywhere else. Wherever it is sent, it stands or falls on being specific — a general plea to look again is the version that gets no answer.',
  },
  {
    title: 'Protect the review route in parallel',
    body: 'Where the deadline is close and the grounds are real, the application to the Federal Court is filed on time regardless of whether the request has been answered. A request that has gone quiet is not a reason to let the deadline pass.',
  },
  {
    title: 'Accept the answer, or the silence',
    body: 'The office may reopen, may confirm the refusal, or may simply not reply. None of those is an appeal outcome, and none of them is owed to you.',
  },
];

const FAQS = [
  {
    q: 'Is a reconsideration request an appeal?',
    a: 'No. There is no right to it. In Canada (MCI) v. Kurukkal, 2010 FCA 230, the Federal Court of Appeal held that the doctrine of functus officio does not rigidly bar an immigration officer from revisiting a decision — the officer remains free to exercise discretion to reconsider, or to refuse to. Discretion is exactly what it is. IRCC is not obliged to reopen your file, is not obliged to give reasons for declining, and in many cases is not obliged to reply at all.',
  },
  {
    q: 'How likely is it to work?',
    a: 'We will not put a figure on it, and you should distrust anyone who does — nobody publishes reliable success rates for a discretionary request that generates no formal decision. What we can say is what the case law says: the discretion is understood to be for exceptional circumstances, and dissatisfaction or disagreement with the officer’s assessment does not by itself make a case exceptional. A request built on disagreement gives the discretion nothing to act on. Plan the file on the assumption that it will not be reopened.',
  },
  {
    q: 'Does asking for reconsideration pause the judicial review deadline?',
    a: 'No, and this is the single most expensive misunderstanding on this page. The deadline for applying to the Federal Court for leave and judicial review is set by statute and runs from the decision. Sending a letter to the visa office does not stop it, suspend it or extend it. An extension is possible only where the Court grants one, and that is a separate application you have to persuade a judge to allow. People routinely wait months for a reply that never comes and find the review route has closed behind them.',
  },
  {
    q: 'Should I ask for reconsideration or just apply again?',
    a: 'If the refusal identified a genuine weakness and you have since fixed it, a fresh application is usually the more honest route — reconsideration is not a mechanism for submitting the evidence you should have filed the first time. Reconsideration is for cases where the decision itself is flawed on its own terms: something on file was not considered, or a fact was recorded wrongly. If your argument is that the officer should have been more generous, that is not a reconsideration argument.',
  },
  {
    q: 'Can I do both — request reconsideration and file for judicial review?',
    a: 'It is possible to pursue reconsideration while a judicial review application is on foot, and where the deadline is close that is often the safer structure, because it preserves the route the clock would otherwise close. It also costs more and needs to be planned deliberately rather than drifted into. Decide the strategy before the deadline, not after it.',
  },
  {
    q: 'What if my refusal involved a misrepresentation finding?',
    a: 'Then this is the wrong first page. A misrepresentation finding carries consequences well beyond the single refusal and needs to be assessed on its own terms before you send anything to anyone, because a poorly-worded letter can make the record worse. Read our page on misrepresentation findings and get the file looked at before you write.',
  },
  {
    q: 'How long does IRCC take to answer a reconsideration request?',
    a: 'IRCC publishes processing times for applications, not for reconsideration requests — a request is not an application, so there is nothing for a published time to attach to. Some offices respond, some respond much later, and some do not respond. We will not quote you a typical wait, because there is no official figure to quote. Build your strategy on the assumption that no reply will arrive in time to help you.',
  },
  {
    q: 'Can you guarantee a reconsideration will succeed?',
    a: 'No. Nobody can, and a discretionary request is about the least guaranteeable thing in this field. What we can do is tell you honestly whether your file contains the kind of error a request can act on, and if it does not, say so before you spend money on one.',
  },
];

export default function ReconsiderationPage() {
  return (
    <>
      <PageHero
        eyebrow="After a refusal"
        title={
          <>
            Asking the office to look again —{' '}
            <span className="text-gold-300">and what that is not</span>
          </>
        }
        subtitle={
          <>
            A reconsideration request asks the deciding officer to revisit a decision, usually
            because something was overlooked or misapprehended. It is discretionary, the courts have
            described it as reserved for exceptional circumstances rather than routine second looks,
            and it does not stop the clock on your right to go to court.
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
          eyebrow="The route, plainly"
          title="What a reconsideration request actually is"
        />
        <Prose>
          <p>
            When a visa office refuses an application, the decision is made. Some refusals do carry a
            statutory right of appeal to the Immigration Appeal Division — refused{' '}
            <Link href="/family-sponsorship" className="font-semibold text-accent-500 link-underline">
              family sponsorships
            </Link>{' '}
            being the category most people encounter. Most temporary-residence refusals do not. Where
            no appeal right exists there is no tribunal to take it to and no second officer who
            reviews the file as a matter of course, so the first thing to establish is which of those
            you are in.
          </p>
          <p>
            What exists alongside that is a narrow discretion. In{' '}
            <em>Canada (MCI) v. Kurukkal</em>, 2010 FCA 230, the Federal Court of Appeal held that an
            immigration officer is not rigidly barred from revisiting a decision, and remains free to
            exercise discretion to reconsider — or to refuse to. A reconsideration request is simply
            you asking the office to exercise that discretion.
          </p>
          <p>
            Note the shape of that. It is a request, not a filing. It creates no obligation on IRCC
            to reopen anything, no obligation to explain a decision not to, and no entitlement to a
            reply. It is not adjudicated by anyone independent of the office that refused you. And
            because it is not an application, nothing about it is on a timetable you can rely on.
          </p>
          <p>
            That is not a reason never to send one. It is a reason to send one only when you have
            something specific for it to act on — and never as a substitute for the two routes that
            actually have teeth.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE CLOCK ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The mistake that costs the most"
          title="The judicial review clock keeps running while you wait"
        />
        <Prose>
          <p>
            The statutory route for challenging an IRCC decision is an application to the Federal
            Court for leave and judicial review. That route has a filing deadline fixed by
            legislation, running from when the decision was communicated to you, and it is short.
            The period differs depending on whether the matter arose inside or outside Canada — the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Immigration and Refugee Protection Act
            </a>{' '}
            sets both, and it is the only place worth reading them.
          </p>
          <p>
            Sending a reconsideration request has no effect on that deadline whatsoever. It does not
            pause it, restart it, or provide an excuse for missing it. The Court can extend time,
            but only if you ask and only if a judge is persuaded — which is a separate argument you
            then have to win before anyone looks at the merits of your case.
          </p>
          <p>
            The pattern we see is depressingly consistent. Someone is refused, sends a polite letter
            asking the office to reconsider, waits, sends a follow-up, waits again, and by the time
            they accept that no answer is coming, the deadline has gone. The reconsideration was
            never likely to succeed, and it quietly consumed the one route that might have.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Work out the deadline before you write anything">
            <p>
              Whatever you decide to do, establish the date by which a Federal Court application
              would have to be filed, and establish it first. Every other decision — request, fresh
              application, court — sits inside that constraint. If you are close to it, the request
              is the thing that waits, not the court filing.
            </p>
            <p>
              If you are already past the deadline, say so early. It changes what is available to
              you, and it is better known at the start of a conversation than discovered in the
              middle of one.{' '}
              <Link href="/refusals/judicial-review" className="font-semibold text-accent-500 link-underline">
                How judicial review works
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHEN IT IS WORTH TRYING ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="When it is genuinely worth attempting"
          title="Four situations with something real to argue"
          subtitle="The common thread is an identifiable defect in how the decision was reached — not a disagreement with the officer’s judgement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WORTH_TRYING.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="What makes a request weak" title="The versions that go nowhere" />
            <ul className="mt-6 space-y-4">
              {[
                ['“Please reconsider my case”', 'A request with no identified error is a request the office has no reason to act on. Specificity is the entire mechanism.'],
                ['Disagreeing with the weighing', 'That the officer should have found your ties stronger is an argument about judgement, and reconsideration is not the forum for it.'],
                ['New evidence curing the weakness', 'Documents assembled after the refusal, to answer the point the officer made, usually belong in a fresh application.'],
                ['Hardship as the whole argument', 'That the refusal is inconvenient, costly or upsetting does not identify anything wrong with the decision.'],
                ['Repetition of what was already filed', 'Restating material the officer already considered gives no basis to reopen. It has to be material that was not considered.'],
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

          <div>
            <SectionHeading eyebrow="Reconsideration, fresh file, or court" title="Three different tools" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                <strong className="text-ink-900">Reconsideration</strong> targets a defect in the
                decision itself. Cheap to attempt, discretionary, no timetable, and no obligation on
                anyone to answer. Worth doing when you can point at something concrete.
              </p>
              <p>
                <strong className="text-ink-900">A fresh application</strong> targets a weakness in
                the file. It is the right route when the officer was reasonable on the material in
                front of them and that material has since genuinely changed. It also means paying
                the fees again and starting over — and reapplying without first understanding why you
                were refused tends to reproduce the same problem.
              </p>
              <p>
                <strong className="text-ink-900">Judicial review</strong> targets legality: whether
                the decision was reasonable and whether the process was fair. It is the route with
                real force, the route with a hard deadline, and the most expensive of the three.
              </p>
              <p>
                These are not sequential steps. Choosing between them is the actual work, and it
                depends on what the reasoning says — which is why we read the refusal properly
                before advising anything.{' '}
                <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
                  Getting the officer’s notes
                </Link>
                {' · '}
                <Link href="/refusals/re-applying" className="font-semibold text-accent-500 link-underline">
                  Reapplying after a refusal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How this should run, in order"
          subtitle="The order matters more than the drafting. Most of the damage is done by getting steps one and two the wrong way round."
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

        <p className="mx-auto mt-10 max-w-3xl text-center text-ink-600 text-pretty">
          Channels, addresses and the accepted way to contact a visa office about a decided
          application change from time to time. Take them from{' '}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc.html"
            className="font-semibold text-accent-500 link-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRCC’s official contact page
          </a>{' '}
          and its{' '}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/web-form.html"
            className="font-semibold text-accent-500 link-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            web form
          </a>{' '}
          rather than from a page like this one.
        </p>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Treating the request as an appeal.</strong> People send it expecting a process:
            an acknowledgement, a file number, a review, a reply. None of that is owed. When nothing
            arrives, they assume it is still under review. Silence is not evidence that it is.
          </p>
          <p>
            <strong>Letting the court deadline lapse while waiting.</strong> The most costly error
            on this page, and the one that cannot be undone without persuading a judge to extend
            time.
          </p>
          <p>
            <strong>Sending the request without reading the reasoning.</strong> If you do not know
            what the officer considered, you cannot credibly claim something was overlooked. Requests
            drafted from the refusal letter alone tend to argue against findings the officer never
            made.
          </p>
          <p>
            <strong>Attaching a pile of new documents.</strong> A request that arrives with fresh
            bank statements and fresh employment letters reads as a second application, and risks
            being treated as one. It also tends to concede the officer’s point rather than
            challenge it — which, if that is where you actually are, is an argument for refiling.
          </p>
          <p>
            <strong>Agents selling it as a service with an implied outcome.</strong> Because a
            request is cheap to write and there is no formal decision to point to when it fails, it
            is easy to charge for and easy to blame on the office. If someone offers a
            reconsideration package and talks about success rates, ask them to put the discretionary
            nature of it in writing.
          </p>
          <p>
            <strong>Repeat requests.</strong> Sending a second and third letter after silence adds
            nothing to the file and consumes the weeks you needed for something else.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you cannot name the error, this is not your route">
            <p>
              A reconsideration request needs a specific, demonstrable defect in the decision —
              something on file that was not considered, or a fact recorded wrongly. If your position
              is that the officer was too strict, or that you deserve another chance, or that you can
              now provide what was missing, there is nothing here for the discretion to act on, and
              your time and money are almost certainly better spent on one of the other two routes.
            </p>
            <p>
              It also does not suit anyone close to the judicial review deadline who intends to wait
              for a reply before deciding — the waiting is the risk. It does not suit anyone whose
              refusal involves a{' '}
              <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
                misrepresentation finding
              </Link>
              , which needs separate handling before anything is sent. And it does not suit anyone
              who has simply not yet read what the officer actually wrote.
            </p>
            <p>
              We would rather tell you on the first call that a request has nothing to work with than
              take a fee for a letter that was never going to be answered. The discretion is not ours
              to exercise, which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW WE HANDLE IT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="How we work on this" title="Deadline first, then strategy, then drafting" />
        <Prose>
          <p>
            We start with the refusal and its date, and establish what your remaining options are and
            how long each of them is open for. That is a short conversation and it frequently changes
            what people were about to do.
          </p>
          <p>
            Then we read the reasoning — the letter, its attachments, and where it is warranted the
            officer’s notes — and decide whether there is a defect a request can act on, whether the
            file is better refiled, or whether the matter belongs in front of the Federal Court. If
            more than one of those is live, we say which order they go in.
          </p>
          <p>
            If a request is worth sending, it is drafted narrowly around the specific error, with the
            evidence that establishes it and nothing else. If it is not worth sending, we tell you,
            and we do not charge you to write it anyway.
          </p>
          <p>
            Our fees are published, and we do not take a file we do not think has a route.{' '}
            <Link href="/fees" className="font-semibold text-accent-500 link-underline">
              See our fees
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
        eyebrow="Before you send a letter"
        title="Find out whether you have anything worth reconsidering"
        subtitle="Send us the refusal, its date, and anything that came with it. We will tell you what your deadline is, whether a request has a real error to work with, and whether a fresh application or the Federal Court is the better use of your money."
        page={PAGE}
        waMessage="Hi, my Canada application was refused and I’d like to know whether a reconsideration request is worth sending."
      />
    </>
  );
}
