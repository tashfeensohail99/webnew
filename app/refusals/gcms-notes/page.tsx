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
import { SERVICE } from '@/lib/site';

/**
 * The refusal-letter-vs-officer-notes page.
 *
 * Deliberately explains the CONCEPT and not a click-by-click process. Access
 * rules turn on who the requester is and which statute the request falls under,
 * and both of those move. What does not move is the reason the notes matter:
 * refusal letters are written in categories, and categories hide the actual
 * finding.
 */
export const metadata: Metadata = {
  title: 'GCMS Notes After a Canada Refusal: What They Show',
  description:
    'Most IRCC refusals now come with an officer decision note. When GCMS notes still help, what they settle, who may request them and the court deadline risk.',
  alternates: { canonical: '/refusals/gcms-notes' },
};

const PAGE = 'refusals-gcms-notes';

/* What the letter hides — each of these is a real ambiguity, not a scare story. */
const AMBIGUITIES = [
  {
    icon: 'scale' as const,
    kicker: 'Ties to your home country',
    title: '“Not satisfied you will leave”',
    body: 'This single line can mean your employment looked thin, your family situation looked mobile, your travel history looked absent, or your stated purpose did not match your finances. Four different problems. One sentence.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Money',
    title: '“Personal assets and financial status”',
    body: 'Sometimes the officer doubted the amount. Sometimes the officer doubted where it came from, or who it really belonged to. Adding more money fixes the first and can make the second worse.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Purpose',
    title: '“Purpose of visit”',
    body: 'This can mean the trip was not credible, or that the documents supporting it were not credible, or that the stated purpose did not fit the permit class applied for. The remedies are unrelated to one another.',
  },
  {
    icon: 'shield' as const,
    kicker: 'The serious one',
    title: 'A credibility or misrepresentation concern',
    body: 'A concern about a document’s authenticity is a different order of problem from a weak file, and it carries different consequences. You want to know which one you are dealing with before you file anything else.',
  },
];

const FAQS = [
  {
    q: 'What are GCMS notes, exactly?',
    a: 'IRCC officers work inside the Global Case Management System (GCMS), and they record entries as they process a file — what was reviewed, what was verified, what concerned them, and the reasoning that led to the decision. The refusal letter you received is a summary written from that record. The record itself is usually longer and more specific.',
  },
  {
    q: 'Why doesn’t the refusal letter just say all that?',
    a: 'The grounds on a refusal letter come from a standard list, often as ticked boxes, and one ground can cover several very different findings. That is why IRCC now sends an officer decision note with most refusals. The letter tells you the category. The decision note explains the decision, and the GCMS record can add more detail.',
  },
  {
    q: 'Will the notes tell me how to win next time?',
    a: 'No. They are a record of what an officer thought about the application you filed — not advice, and not a checklist. What they do is stop you guessing. Fixing the right weakness is your own work after that, and there is still no guaranteed outcome.',
  },
  {
    q: 'Can I request them myself from Pakistan?',
    a: 'For your own personal information, yes — IRCC states that Canadian citizens, permanent residents and foreign nationals can request their personal information under the Privacy Act regardless of where they are located. The narrower route is the Access to Information Act, which is limited to Canadian citizens, permanent residents and people present in Canada; if you are none of those, that request has to go through a representative who is, with your written consent. So the honest answer is that you can very likely do the personal-information request yourself. Check the eligibility on IRCC’s own pages before you pay anyone — including us — to do it for you.',
  },
  {
    q: 'Is there a fee?',
    a: 'It depends on the route. IRCC states that there is no processing fee for a request under the Privacy Act; the Access to Information Act route carries an application fee set by the Government of Canada. We don’t print government figures here, because they change and a stale number on a website is worse than no number — check the current amount on the official page linked above. If we file on your behalf we’ll tell you the route and the cost before anything goes in.',
  },
  {
    q: 'Should I just reapply instead and save the time?',
    a: 'Sometimes that is genuinely the right call — if the weakness was obvious and you have since fixed it. But reapplying into an unread refusal is how people file the same application twice and collect a second refusal, which is a worse starting position than the first. If you cannot say in one sentence what went wrong, you are not ready to reapply.',
  },
  {
    q: 'Do I always need to order them?',
    a: 'Not always. IRCC now sends an officer decision note with the refusal letter for most temporary resident applications (since 29 July 2025) and most permanent resident applications (since 26 May 2026). Electronic travel authorizations, temporary resident permits and humanitarian and compassionate applications are not covered, and IRCC says it may remove portions of a note to protect secure, private or other sensitive information. So read everything IRCC actually sent you, attachments included, before you pay anyone to fetch anything. Order the GCMS notes if your refusal is older, if no note came with it, or if you need the fuller record. Bring us the full letter and any attachments and we’ll tell you whether there is anything left worth requesting.',
  },
  {
    q: 'Does requesting the notes pause the Federal Court deadline?',
    a: 'No. The time limit to apply to the Federal Court for leave and judicial review is 15 days for a matter arising in Canada and 60 days for a matter arising outside Canada, after the day you are notified of the decision or otherwise become aware of it. A request for your notes does not pause it, and waiting for a reply can use up much of the time you have. If you may want a court to look at the decision, speak to a Canadian lawyer now and order the notes alongside that, not before it.',
  },
  {
    q: 'How long does a request take?',
    a: 'The Privacy Act sets a time limit for responding, but IRCC warns that high request volumes may affect its ability to meet it. Plan for a wait, and do not build anything time-sensitive around a reply arriving by a certain date.',
  },
];

export default function GcmsNotesPage() {
  return (
    <>
      <PageHero
        eyebrow="GCMS notes · After a refusal"
        title={
          <>
            GCMS notes: the refusal letter is the summary.{' '}
            <span className="text-gold-300">The officer’s notes are the reasoning.</span>
          </>
        }
        subtitle={
          <>
            Behind every IRCC decision there is a record of what the officer actually did and
            actually thought. Most refusals now come with a decision note written by the officer,
            and the full record can say more. Read what you were sent before you pay anyone for
            anything.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Have your refusal read
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE GAP ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Why the letter isn’t enough"
          title="A category is not a reason"
        />
        <Prose>
          <p>
            When an application is refused, IRCC sends a letter setting out the ground or grounds
            for the decision. Those grounds come from a standard list. They are accurate, and they
            are also broad enough that two applicants refused for the identical stated reason can
            have had entirely different things go wrong.
          </p>
          <p>
            Since 29 July 2025 for most temporary resident applications, and since 26 May 2026 for
            most permanent resident applications, IRCC also sends an{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/officer-decision-notes.html"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              officer decision note
            </a>{' '}
            written by the officer who made the final decision. If you were refused recently, look
            for it first: you may already hold the reasoning. It does not cover eTAs, temporary
            resident permits or humanitarian and compassionate applications, and IRCC says it may
            remove portions of a note.
          </p>
          <p>
            Behind that, and continuously while your file was being worked, the officer was writing
            in IRCC’s Global Case Management System — which is why these are usually called GCMS
            notes: what documents were opened, what was checked against what, where the file was
            sent for further review, which specific element raised doubt, and the reasoning that
            closed the case. That record exists whether or not you ever ask for it.
          </p>
          <p>
            The gap between a standard ground and the actual reasoning is where money gets wasted. People read a one-line
            ground, form a theory about what it meant, and spend the next several months and a
            significant amount of money building a solution to a problem they guessed at.
          </p>
        </Prose>
        <div className="mt-10">
          <Callout title="Asking for your notes does not stop the court clock">
            <p>
              An application to the Federal Court for leave and judicial review must be filed within
              15 days for a matter arising in Canada, or 60 days for a matter arising outside Canada,
              after the day you are notified of the decision or otherwise become aware of it (
              <a
                href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html"
                className="font-semibold text-accent-500 link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                section 72 of the Act
              </a>
              , read at the source on 8 November 2026). Requesting your notes does not pause that, and
              waiting for a reply can use up much of it. If you may want a court to look at this decision, read about{' '}
              <Link href="/refusals/judicial-review" className="font-semibold text-accent-500 link-underline">
                judicial review
              </Link>{' '}
              and speak to a Canadian lawyer now.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE AMBIGUOUS GROUNDS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What the ambiguity looks like"
          title="Four grounds that can each mean several different things"
          subtitle="These are the ones people most often misread — and the misreadings are expensive, because the fixes point in opposite directions."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {AMBIGUITIES.map((a) => (
            <FeatureCard key={a.title} icon={<Icon name={a.icon} />} kicker={a.kicker} title={a.title}>
              {a.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== WHAT THEY SETTLE ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="What the notes can settle" title="Questions worth answering before you spend again" />
            <ul className="mt-6 space-y-4">
              {[
                ['Which weakness actually decided it', 'Files often have more than one soft spot. Only one of them usually carried the decision.'],
                ['Whether a document was doubted', 'A concern about authenticity is a different problem from a concern about sufficiency, and needs a different response entirely.'],
                ['Whether the file was ever reviewed in depth', 'A file closed quickly on one point tells you something different from one that was worked through carefully.'],
                ['Whether reapplying is sensible at all', 'Sometimes the notes make it plain that the same application, filed again, gets the same answer.'],
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
            <SectionHeading eyebrow="What they won’t do" title="Set your expectations honestly" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                The notes are a record, not a remedy. Reading them does not reopen your application,
                does not oblige IRCC to reconsider, and does not improve your position by itself.
              </p>
              <p>
                They can also be shorter or blunter than you hoped. Some entries are terse. Some
                material is withheld under the exemptions in the governing legislation. Anyone who
                tells you the notes will contain a tidy explanation of exactly how to succeed is
                selling you something.
              </p>
              <p>
                What they can do, when they are detailed, is replace a guess with something closer
                to a fact — which is often the difference between fixing your file and rebuilding
                the wrong part of it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== WHO MAY ASK ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The part people get wrong"
          title="Who is allowed to ask depends on who you are"
        />
        <Prose>
          <p>
            Access to Canadian federal records is governed by two different statutes, and they do
            not have the same entry requirements. A request for <em>your own personal information</em>{' '}
            falls under the <strong>Privacy Act</strong>, and IRCC states that Canadian citizens,
            permanent residents and foreign nationals can use it regardless of where they are
            located. A broader request for departmental records falls under the{' '}
            <strong>Access to Information Act</strong>, which IRCC states is open to Canadian
            citizens, permanent residents and people present in Canada — and if you are none of
            those, that request has to be made by a representative who is, with your written
            consent.
          </p>
          <p>
            The practical upshot is the opposite of what a lot of agents will tell you: if you are
            in Pakistan asking about your own refused application, the personal-information route is
            very likely open to you directly. Whose information you are asking for is the real
            constraint — a file that names your spouse or a child aged 16 or older is not simply
            yours to request, and IRCC requires a signed consent form (IMM 5744) for each of them.
          </p>
          <p>
            Check the current rules, forms and fees on IRCC’s own pages before relying on anything
            else — a forum post or an older step-by-step guide can be confidently wrong:{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/access-information-privacy/request-privacy-act.html"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              who can request under the Privacy Act
            </a>{' '}
            and{' '}
            <a
              href={'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=458&top=1'}
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              who can request under the Access to Information Act
            </a>
            . Requests are submitted through the Government of Canada’s{' '}
            <a
              href="https://atip-aiprp.apps.gc.ca/atip/welcome.do"
              className="font-semibold text-accent-500 link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ATIP online request service
            </a>
            . IRCC warns that high request volumes may affect its ability to respond on time, so
            allow for a wait.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Who this page isn’t for">
            <p>
              This route doesn’t suit you if any of the following is true. If you already know
              precisely why you were refused — the officer said it plainly, you recognise it, and
              you can state it in one sentence — you may not need the notes at all. If IRCC sent an
              officer decision note with your refusal letter and it answers your question, you are
              already holding the reasoning; don’t pay anyone, including us, to fetch more. If you are comfortable filing the
              personal-information request yourself, do that — it is your own record and the
              official pages linked above set out how.
            </p>
            <p>
              It also doesn’t suit anyone hoping the notes will produce a reversal. They are a
              record of a closed decision, not an appeal, and reading them does not oblige IRCC to
              do anything.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW WE HANDLE IT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="How we work on a refusal" title="Read it first, then decide" />
        <Prose>
          <p>
            We start by reading what you already have. Often that is enough to tell you whether
            anything further is worth requesting, and occasionally it is enough to tell you the
            answer outright.
          </p>
          <p>
            If the notes are worth obtaining, we confirm which access route applies to you before
            anything is filed, and we tell you what it involves and what it costs. If they are not
            worth obtaining, we say so. And if the honest reading is that the route you applied
            under was never going to fit you, we will tell you that too — that conversation is
            cheaper than a second refusal on your record.
          </p>
          <p>
            We cannot guarantee an outcome on any application, and no consultant can.{' '}
            <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
              Read our no-guarantee policy
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Questions about GCMS notes" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you reapply"
        title="Find out what your refusal actually said"
        subtitle="Send us the refusal letter and anything that came with it. We’ll tell you what it does and doesn’t establish, whether the officer’s notes are worth obtaining, and whether reapplying makes sense at all."
        page={PAGE}
        service={SERVICE.JR_RESUBMISSION}
        waMessage="Hi, my Canada application was refused and I’d like to understand the real reason before I reapply."
      />
    </>
  );
}
