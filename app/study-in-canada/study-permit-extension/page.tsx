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
 * Extending a study permit.
 *
 * The one thing this page has to land: a study permit is a deadline, not a
 * document. Almost every serious problem in this area comes from applying late
 * — or not at all — and everything else on the page is downstream of that.
 */
export const metadata: Metadata = {
  title: 'Extending a Study Permit in Canada',
  description:
    'When and how to extend a study permit, what maintained status protects while a decision is pending, and how restoration works if a permit expires first.',
  alternates: { canonical: '/study-in-canada/study-permit-extension' },
};

const PAGE = 'study-permit-extension';

const WHEN_TO_EXTEND = [
  {
    icon: 'doc' as const,
    kicker: 'Programme runs longer',
    title: 'Your studies outlast the permit',
    body: 'A study permit is issued with an expiry date, not for “the length of your degree”. If your programme, a failed course, a co-op term or a thesis extension pushes you past that date, you need a new permit.',
  },
  {
    icon: 'building' as const,
    kicker: 'Change of institution',
    title: 'You are moving school or level',
    body: 'Moving to a different designated learning institution, or from one level of study to another, generally means applying for a new study permit — and current IRCC guidance expects that application to be approved before you begin at the new school. It is not something the permit you already hold simply absorbs. Confirm the current rule and the exceptions on IRCC’s change-schools page before you commit to a transfer.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Change of conditions',
    title: 'The conditions on your permit no longer fit',
    body: 'Conditions printed on the permit — the institution named, or restrictions on where and whether you may study — bind you. Changing what you actually do without changing the permit is a compliance problem.',
  },
  {
    icon: 'plane' as const,
    kicker: 'Onward plans',
    title: 'Your studies are ending and nothing is lined up',
    body: 'Graduating does not extend anything — a study permit stops being valid once you finish, and often earlier than the printed date. Staying on means holding some other status. That is usually a work permit or visitor status rather than an extension, which is why this is a planning conversation to have before the permit runs down, not after.',
  },
];

const STEPS = [
  {
    title: 'Work out when your permit actually ends',
    body: 'Start with the expiry date printed on the permit itself — not on your visa, not on your letter of acceptance. Then check it against your programme end date, because a study permit can stop being valid a set period after you complete your studies even if the printed date is later. The earlier of the two is the date that governs you.',
  },
  {
    title: 'Confirm you still meet the requirements',
    body: 'You must still be enrolled at a designated learning institution, still actively pursuing your studies, and still able to support yourself. An extension is not a formality — it is a fresh assessment.',
  },
  {
    title: 'Gather the enrolment and funds evidence',
    body: 'A current letter of enrolment or acceptance for the continuing programme, evidence of how the remaining period is funded, and identity documents valid for the period you are asking for.',
  },
  {
    title: 'Apply from inside Canada, before expiry',
    body: 'Extensions are filed online through IRCC. The single most important thing about the application is that it is received before your current permit expires.',
  },
  {
    title: 'Keep studying under maintained status',
    body: 'If your application was received in time and you stay in Canada, you may continue on the terms of the expired permit until a decision is made. That protection is conditional — see below.',
  },
  {
    title: 'Act on the decision',
    body: 'If approved, check the new permit line by line for the institution named, the expiry date, and any conditions on working. If refused, your status ends and the clock starts running immediately.',
  },
];

const FAQS = [
  {
    q: 'How early should I apply to extend?',
    a: 'Well before expiry — early enough that a missing document, a slow enrolment letter or a payment problem does not push you past the date. There is no advantage in waiting, and the entire protection of maintained status depends on IRCC receiving the application while your permit is still valid.',
  },
  {
    q: 'What exactly is maintained status?',
    a: 'If you applied to extend before your permit expired and you remain in Canada, you may generally continue under the conditions of your expired permit while the application is pending. It is a continuation of what you already had — not an upgrade. It does not let you start studying at an institution the old permit did not authorise, and it does not give you conditions you did not previously hold.',
  },
  {
    q: 'Can I travel while my extension is pending?',
    a: 'This is where students most often get caught. Maintained status depends on remaining in Canada. If you leave, you may well be able to re-enter — assuming your travel document or visa is valid — but the protection that let you keep studying does not come back with you. The usual outcome is that you are in Canada lawfully and cannot resume studying until a decision is made. Do not treat a pending extension as travel insurance. Take advice before booking.',
  },
  {
    q: 'My permit expired before I applied. What now?',
    a: 'You are out of status, and you should get advice the same week rather than the same month. The Immigration and Refugee Protection Regulations provide for restoration — an application to have status restored — but it is available only within a short fixed window after status is lost, and only if you still meet the requirements of the stay and have not breached other conditions. It is discretionary. Nobody can promise it will succeed.',
  },
  {
    q: 'Can I keep studying or working while out of status?',
    a: 'No. Once status is lost, the authorisation to study and any work authorisation attached to it end with it. Continuing to study or work after that point is a further breach, and it makes the restoration application materially harder. Stop, then get advice.',
  },
  {
    q: 'Does an extension application affect my post-graduation work permit?',
    a: 'It can. Eligibility for a post-graduation work permit depends heavily on holding valid status at the right moments and on studying at an eligible institution under a valid permit throughout. A gap in status during your studies is one of the things that most reliably causes problems later, long after the gap itself is closed.',
  },
  {
    q: 'Will you tell me how long an extension takes?',
    a: 'No, and you should be wary of anyone who does. IRCC publishes current processing times on its own site and they move. Any number we printed here would be wrong within months and you might plan a travel booking or a job start around it.',
  },
  {
    q: 'Can you guarantee my extension will be approved?',
    a: 'No. An extension is a fresh decision by an officer, assessed against the same requirements as the original permit. We can tell you honestly whether your file is in reasonable shape and what is likely to be questioned. We publish a no-guarantee policy for precisely this reason.',
  },
];

export default function StudyPermitExtensionPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permit extension"
        title={
          <>
            Your permit has an expiry date.{' '}
            <span className="text-gold-300">Everything depends on it</span>
          </>
        }
        subtitle={
          <>
            Applying in time keeps your options open. Applying late closes most of them. This page
            explains the sequence, what maintained status actually protects, and what happens if a
            permit expires first — not whether any particular application will be approved.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHY IT MATTERS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The point of the page"
          title="A study permit is a deadline, not a document"
        />
        <Prose>
          <p>
            A study permit authorises you to study in Canada until a stated point, under stated
            conditions. It does not stretch to fit your programme, it does not renew because you are
            still enrolled, and it does not pause because your university is slow with a letter. When
            that point passes without a decision or a valid application behind it, your legal status in
            Canada ends. And the point is not always the date printed on the permit — completing your
            studies can bring it forward.
          </p>
          <p>
            That matters more than students usually expect, because status is cumulative. A gap now is
            not a self-contained problem that closes when you get a new permit. It sits in your
            immigration history and resurfaces later — in a work permit application, in a permanent
            residence application, at a port of entry, sometimes years afterwards.
          </p>
          <p>
            Letting status lapse is one of the most damaging things an international student can do to
            their own file, and it is almost always avoidable. It is nearly always the result of
            leaving the extension too late rather than of any hard eligibility problem.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHEN TO EXTEND ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="When an extension is needed"
          title="Four situations that require action"
          subtitle="Some of these are obvious. The ones that catch people are the changes that feel administrative rather than immigration-related."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHEN_TO_EXTEND.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Two documents, and a date that can arrive early">
            <p>
              The document in your passport that let you travel to Canada and the study permit that
              authorises you to study here are two different things with two different dates. Students
              regularly plan around the visa. The permit is the one that governs your right to study.
            </p>
            <p>
              There is a second trap underneath that. A study permit does not always run to its printed
              date: under IRCC’s rules it also stops being valid a set period after you complete your
              programme, whichever comes first — and completion can be triggered by something as
              ordinary as your school issuing final results. Students who finish early are the ones
              this catches. Check the current rule on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                IRCC’s study permit extension page
              </a>{' '}
              rather than assuming the printed date is yours to use.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How an extension runs, in order"
          subtitle="Step four is the one everything else depends on. Steps one to three exist to make sure step four happens on time."
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

      {/* ===================== MAINTAINED STATUS ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="While a decision is pending"
              title="What maintained status is"
            />
            <Prose>
              <p>
                If IRCC receives your extension application before your current permit expires, and you
                remain in Canada, you may generally continue under the conditions of that expiring
                permit until a decision is made. This is usually called maintained status; older
                material calls it implied status.
              </p>
              <p>
                It is a continuation, not a new authorisation. It carries forward the conditions you
                already held — the institution named on the old permit, and any work authorisation that
                came with it — and nothing more. If you are asking IRCC for something different from
                what you had, maintained status does not give it to you early.
              </p>
              <p>
                The conditions attached to this protection have been adjusted by IRCC more than once.
                Check the current position on the IRCC page before relying on it, rather than on what a
                classmate did two intakes ago.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Its limits" title="What it does not do" />
            <ul className="mt-6 space-y-4">
              {[
                ['It does not survive a late application', 'The protection exists only if the application was received while the permit was still valid. A day late is not a technicality — it is the difference between having status and not having it.'],
                ['It does not survive leaving Canada', 'It depends on your physical presence in Canada. Departing generally ends it, and re-entry is a fresh examination.'],
                ['It does not expand your conditions', 'You cannot begin studying somewhere the old permit did not authorise, or start working on rights the old permit did not carry.'],
                ['It does not survive a refusal', 'If the extension is refused, the protection ends with the decision. There is no cushion afterwards.'],
                ['It is not a document', 'There is no card or letter proving it. Employers, institutions and border officers will ask for evidence — keep the application submission confirmation.'],
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

      {/* ===================== RESTORATION ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="If the permit expired first"
          title="Restoration, and why it is not a safety net"
        />
        <Prose>
          <p>
            If your permit expired and no valid application was in place, you are out of status. The
            Immigration and Refugee Protection Regulations provide a route back: an application to
            restore temporary resident status. It exists, it is real, and it should not be thought of as
            a fallback plan.
          </p>
          <p>
            Three features of restoration matter. It is <strong>time-limited</strong> — the Regulations
            set a short fixed window after status is lost, and once that window closes the route closes
            with it. It is <strong>conditional</strong> — you must still meet the requirements of the
            stay you are asking to have restored, and you must not have breached other conditions
            imposed on you. And it is <strong>discretionary</strong> — an officer decides. A complete,
            timely restoration application is not the same thing as a restored status.
          </p>
          <p>
            While you are out of status you have no authorisation to study and no authorisation to work.
            Continuing to do either is a further breach, and it is one of the more common reasons a
            restoration application fails. If you have already lost status, stop studying and stop
            working first, then get advice — in that order, and quickly, because the window is short.
          </p>
          <p>
            The specific window, the current fee and the current process are published by IRCC and set
            out in{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-182.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              section 182 of the Regulations
            </a>
            . Read them at source on the day you need them.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>Waiting for the university letter.</strong> Students delay applying because a
            department has not issued the enrolment confirmation. The permit expires while they wait.
            Chase the letter and file on time; a follow-up document is a smaller problem than a lapse.
          </p>
          <p>
            <strong>Reading the visa date instead of the permit date.</strong> Two documents, two dates.
            This mistake is common and entirely preventable.
          </p>
          <p>
            <strong>Assuming the printed expiry date is yours to use.</strong> Finishing your programme
            early can end the permit before the date on its face. Students who accelerate, transfer
            credits or complete over a summer term are the ones who lose status while still holding a
            permit that looks valid.
          </p>
          <p>
            <strong>Travelling while the extension is pending.</strong> A trip home over a break,
            booked before the application was filed, ends the protection that was doing the work.
          </p>
          <p>
            <strong>Changing institution quietly.</strong> Moving school or level of study without
            addressing the conditions on the permit is treated as a compliance issue, not a paperwork
            one — and it surfaces later, at exactly the wrong moment. The requirements here have been
            tightened, and there are exceptions; read{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/change-schools.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC on changing your school or programme
            </a>{' '}
            before you accept an offer elsewhere, and check whether a{' '}
            <Link href="/study-in-canada/provincial-attestation-letter" className="font-semibold text-accent-500 link-underline">
              provincial attestation letter
            </Link>{' '}
            is required for the new application.
          </p>
          <p>
            <strong>Assuming a gap can be papered over.</strong> Restoration, where it succeeds, restores
            status. It does not erase the fact that status was lost. Later applications ask about it,
            and answering inaccurately turns a compliance problem into a misrepresentation problem —
            which is a far heavier consequence. See{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              what misrepresentation means
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="When an extension is the wrong request" />
        <div className="mt-8">
          <Callout title="An extension will not fix a study plan that has stopped being one">
            <p>
              An extension asks an officer to accept that you are still a genuine student, actively
              pursuing studies, funded for the period ahead. If you have stopped attending, if you have
              been withdrawn, or if you are enrolled mainly to hold status while you work, an extension
              is not the right application — and filing it anyway invites a refusal that then sits on
              your record.
            </p>
            <p>
              It also does not suit students who have finished their programme and simply want to stay
              longer. Once studies are complete, the honest questions are about a{' '}
              <Link href="/work-permits/post-graduation" className="font-semibold text-accent-500 link-underline">
                post-graduation work permit
              </Link>{' '}
              or another route entirely, not about extending a permit whose purpose has ended. And if
              you have already been refused, extending is not the remedy —{' '}
              <Link href="/study-in-canada/refusals" className="font-semibold text-accent-500 link-underline">
                study permit refusals
              </Link>{' '}
              is the more useful starting point.
            </p>
            <p>
              We would rather tell you at the first consultation that the application you are asking for
              is the wrong one than take a fee for it. That is also why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Where the current details live" title="Fees, timelines and requirements" />
        <Prose>
          <p>
            Application fees, processing times, the exact restoration window and the current rules on
            maintained status all change. We deliberately do not publish those figures here — a number
            that is correct today becomes a liability on a page you might read next year, and a student
            planning around a stale timeline is exactly how status gets lost.
          </p>
          <p>
            IRCC publishes the current requirements for extending a study permit on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and the underlying rules sit in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Your institution’s international student office is also a legitimate first stop and costs
            you nothing.
          </p>
          <p>
            Related pages:{' '}
            <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
              the study permit itself
            </Link>
            ,{' '}
            <Link href="/study-in-canada/working-while-studying" className="font-semibold text-accent-500 link-underline">
              working while studying
            </Link>
            , and{' '}
            <Link href="/study-in-canada/study-to-permanent-residence" className="font-semibold text-accent-500 link-underline">
              from studying to permanent residence
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="The questions students actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before your permit expires"
        title="Get the extension filed in time"
        subtitle="Tell us your permit expiry date, your programme end date and whether anything has changed since the permit was issued. If you have already lost status, say so on the first message — the window for restoration is short."
        page={PAGE}
        waMessage="Hi, I need help extending my Canadian study permit."
      />
    </>
  );
}
