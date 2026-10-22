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
 * Extending a visit to Canada.
 *
 * The core job of this page is to separate two documents people constantly
 * confuse: the visitor visa (a travel document that gets you to the border)
 * and the visitor record (a status document that governs how long you may
 * remain once you are inside). Almost every avoidable overstay we see traces
 * back to someone reading the expiry date on the wrong one.
 */
export const metadata: Metadata = {
  title: 'Extending a Visit to Canada — Visitor Records, Maintained Status and Restoration',
  description:
    'Visitor visa versus visitor record, how to extend before your status expires, what maintained status allows, and what restoration means if it has lapsed.',
  alternates: { canonical: '/visitor-visa/extension' },
};

const PAGE = 'visitor-visa-extension';

const TWO_DOCUMENTS = [
  {
    icon: 'plane' as const,
    kicker: 'Visitor visa (TRV)',
    title: 'Gets you to the border',
    body: 'A counterfoil in your passport issued by a visa office abroad. It authorises you to travel to Canada and seek entry. It says nothing about how long you may stay once you are admitted.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Visitor record',
    title: 'Governs your stay inside',
    body: 'A separate document issued inside Canada that sets the date by which you must leave. It is your status. It is not a travel document and will not get you back in if you leave.',
  },
  {
    icon: 'shield' as const,
    kicker: 'The officer at the port',
    title: 'Sets your authorised stay',
    body: 'A border services officer decides how long you may remain when you are admitted. That period may be shorter than your visa’s validity, and it is the period that binds you.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Extending',
    title: 'Is a new application',
    body: 'Staying longer means applying to IRCC from inside Canada for a new visitor record — before the current authorised period runs out.',
  },
];

const STEPS = [
  {
    title: 'Work out your real expiry date',
    body: 'Not the visa expiry. Look for the date on your visitor record, or the stamp in your passport. If you were admitted without either, the default authorised period applies from the date you entered — IRCC explains how to work it out.',
  },
  {
    title: 'Apply well before that date',
    body: 'The application must be submitted while you still hold status. Leave room for gathering documents, medicals if they apply to you, and payment problems. Applying on the final day is a risk with no upside.',
  },
  {
    title: 'Explain why you are staying longer',
    body: 'The officer is deciding whether you remain a genuine temporary visitor. A specific, verifiable reason — a family event, ongoing medical treatment, a delayed return — carries more weight than a general wish to stay.',
  },
  {
    title: 'Show you can support yourself and will leave',
    body: 'Funds for the extended period, ties that pull you home, and an account of what you have been doing in Canada. This is the same test as the original visit application, applied again.',
  },
  {
    title: 'Stay in Canada while it is pending',
    body: 'Maintained status only exists while you remain in Canada. Leaving while a decision is pending ends it, and re-entry then depends on your visa or eTA and the officer at the port.',
  },
  {
    title: 'Act on the decision',
    body: 'An approval arrives as a new visitor record with a new date. If the application is refused, maintained status ends with the decision — IRCC’s guidance is that you must then leave Canada, or apply for restoration if you are still within the period the regulations allow. Neither outcome is something you can wait out.',
  },
];

const FAQS = [
  {
    q: 'My visa is valid for years. Doesn’t that mean I can stay?',
    a: 'No — and it is a common misunderstanding. A visitor visa is permission to travel to Canada and ask to be let in. Permission to remain is set separately by the officer who admits you and recorded on a visitor record or a stamp. A multi-year visa with a short authorised stay is entirely normal.',
  },
  {
    q: 'What is a visitor record, exactly?',
    a: 'A document issued inside Canada that states the date by which you must leave, and any conditions attached to your stay. It is proof of status while you are here. It is not a visa and has no value for travel — if you leave Canada, you need a valid visitor visa or eTA to come back, regardless of what your visitor record says.',
  },
  {
    q: 'What does maintained status mean?',
    a: 'If you apply to extend before your current status expires and then stay in Canada, you may remain under the same conditions until a decision is made. Your original document may have expired on its face; your lawful presence has not. It applies only if the application went in on time and only while you remain in Canada.',
  },
  {
    q: 'Can I work or study while my extension is pending?',
    a: 'Maintained status carries the conditions you already had — no more. If you were admitted as a visitor, you remain a visitor while the application is pending. It does not create work or study rights you did not previously hold.',
  },
  {
    q: 'My status has already expired. What now?',
    a: 'There is a restoration mechanism in the Immigration and Refugee Protection Regulations for temporary residents who lose status, subject to a time limit set by the regulations that runs from the day status was lost. It is not automatic, IRCC charges a restoration fee on top of the extension fee, and it is refusable. Throughout that period you are out of status in Canada — restoration, if granted, gives you status going forward but does not erase the gap. Check the current time limit and fees on IRCC’s own pages before relying on either.',
  },
  {
    q: 'Is overstaying a small administrative matter?',
    a: 'No. Remaining in Canada without status can lead to removal, and it becomes part of your immigration history — available to officers assessing later applications to Canada, and often disclosable to other countries. A recorded overstay is difficult to explain away afterwards.',
  },
  {
    q: 'Can I extend from outside Canada?',
    a: 'No. A visitor record is issued to people inside Canada. If you have already left, the question is a fresh visit application from abroad, not an extension.',
  },
  {
    q: 'How much does it cost and how long does it take?',
    a: 'IRCC publishes the current fees and current processing times on its own site, and both change. We deliberately do not print them here. Check them at the source on the day you apply.',
  },
  {
    q: 'Will an extension improve my chances of staying permanently?',
    a: 'It does not create a path in itself. A visitor record is temporary status and is granted on the basis that you will leave. If permanent residence is the actual goal, that is a different conversation and should be planned as one.',
  },
];

export default function VisitorExtensionPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Extending a visit"
        title={
          <>
            Your visa is not{' '}
            <span className="text-gold-300">your permission to stay</span>
          </>
        }
        subtitle={
          <>
            A visitor visa gets you to the border. A visitor record governs how long you may remain
            once you are inside. Confusing the two is how ordinarily careful people end up
            overstaying — and an overstay follows you.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== VISA VS RECORD ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The distinction that matters most"
          title="Two different documents, two different jobs"
        />
        <Prose>
          <p>
            Canada separates the right to travel from the right to remain. The visitor visa in your
            passport is issued abroad and does one thing: it lets you board a flight and present
            yourself at a Canadian port of entry. It is not an admission and it does not fix the
            length of your stay.
          </p>
          <p>
            How long you may stay is decided at the border by an officer, and evidenced either by a
            stamp in your passport or by a visitor record — a separate document with its own expiry
            date. That date, not the visa expiry, is the one you must plan around.
          </p>
          <p>
            The practical consequence is uncomfortable. Someone holding a visa valid for several
            years may have been admitted for a much shorter period. They read the visa, assume they
            are covered, and are out of status without ever intending to break a rule. It is one of
            the most common ways an overstay happens by accident.
          </p>
        </Prose>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TWO_DOCUMENTS.map((d) => (
            <FeatureCard key={d.title} icon={<Icon name={d.icon} />} kicker={d.kicker} title={d.title}>
              {d.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Check your date now, not later">
            <p>
              If you are already in Canada, find your visitor record or your entry stamp and read the
              date on it. If there is neither, do not assume you have an open-ended stay — IRCC
              explains the default authorised period and how it is counted from the day you entered.
              Everything on this page depends on knowing that one date accurately.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== APPLYING IN TIME ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="Applying before your status expires"
          subtitle="An extension is a fresh assessment of whether you are still a genuine temporary visitor. It is not a formality."
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
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="While you wait"
              title="Maintained status"
            />
            <Prose>
              <p>
                If your extension application is submitted before your current status expires, and you
                stay in Canada, you may remain lawfully under the same conditions until a decision is
                made. This is maintained status — older material calls it implied status.
              </p>
              <p>
                It is worth being precise about what it is. It is not a new authorisation and it is
                not an approval. It is a continuation of what you already held, on the same terms, for
                as long as the file is open. It ends when the decision is made, and it ends if you
                leave Canada.
              </p>
              <p>
                It also depends entirely on the timing of the application. Filed one day late, it does
                not exist at all — and that is the difference between waiting lawfully and being in
                Canada without status.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What it does and does not do" title="The limits, stated plainly" />
            <ul className="mt-6 space-y-4">
              {[
                ['It requires an on-time application', 'Submitted while your existing status is still valid. Late means no maintained status.'],
                ['It requires you to remain in Canada', 'Leaving ends it. Re-entry is then a separate question decided at the port.'],
                ['It carries your existing conditions only', 'A visitor stays a visitor. It creates no work or study rights.'],
                ['It is not proof of approval', 'The application can still be refused. Maintained status ends with that decision, and IRCC’s guidance is that you must then leave Canada or seek restoration if you remain eligible.'],
                ['It is not a travel document', 'It does nothing for boarding a flight to Canada or for satisfying an airline.'],
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
      <Section tone="alt">
        <SectionHeading
          eyebrow="If the date has already passed"
          title="Restoration of status"
          subtitle="A narrower, harder and more expensive route than extending on time — and one with a deadline of its own."
        />
        <Prose>
          <p>
            The Immigration and Refugee Protection Regulations provide a mechanism for a temporary
            resident who has lost status to apply to have it restored, without leaving Canada. It is
            available only for a limited period running from the day status was lost, and only where
            the loss was for reasons the regulations cover — an expired authorised stay being the most
            common.
          </p>
          <p>
            Three things about restoration are consistently underestimated. First, it is discretionary
            and refusable; it is not a form you file to make the problem go away. Second, you are out
            of status throughout — restoration does not backdate anything, and there is no maintained
            status while it is pending. Third, the period you were out of status becomes part of your
            record. Restoration lets you carry on lawfully; it does not delete what happened.
          </p>
          <p>
            The deadline is fixed by regulation and runs from the date status was lost, not from the
            date you noticed — the current length of that window is published by{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay/after-apply.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC
            </a>
            . If you think you may have fallen out of status, the useful action is to
            establish the actual date immediately and take advice on the same day, not to wait and see
            whether anyone raises it.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="What an overstay actually costs you">
            <p>
              Remaining in Canada without status can lead to enforcement and removal. Beyond that, it
              becomes part of your immigration history — visible to officers assessing any future
              application to Canada, and relevant to other countries whose forms ask whether you have
              ever overstayed or been refused entry anywhere.
            </p>
            <p>
              People underestimate this because nothing visible happens at first. The consequence can
              surface years later, in an application that is then harder to argue. If you are
              close to your date, treat it as urgent while you still have the easier options.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>Reading the visa expiry instead of the status expiry.</strong> A frequent cause of
            avoidable overstays. The two dates are set separately and the visa is often the later of
            the two.
          </p>
          <p>
            <strong>Assuming no stamp means no limit.</strong> Being admitted without a stamp or a
            visitor record does not mean the stay is open-ended. A default authorised period applies.
          </p>
          <p>
            <strong>Filing on the last day.</strong> A payment failure, a portal problem or a missing
            document on the final day removes maintained status entirely and pushes you into
            restoration territory for the sake of a week’s planning.
          </p>
          <p>
            <strong>Leaving Canada while the extension is pending.</strong> This ends maintained
            status. Returning then depends on your travel document and the officer at the port, and
            people are surprised at the border.
          </p>
          <p>
            <strong>Thin reasons for staying longer.</strong> An extension is assessed on genuineness.
            A vague wish to stay, with no funds shown and weakening ties at home, reads as an intention
            to remain — which is the ground on which visitor applications are refused.
          </p>
          <p>
            <strong>Using extensions to stay indefinitely.</strong> Repeated extensions with no
            departure and no clear purpose invite the conclusion that you are not a temporary visitor.
            If your real goal is to remain in Canada, that needs a different plan.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="When extending is the wrong move" />
        <div className="mt-8">
          <Callout title="An extension is not a route to staying permanently">
            <p>
              A visitor record is temporary status granted on the understanding that you will leave. It
              does not build toward permanent residence, it does not authorise work, and stacking
              extensions to remain in Canada while something else is arranged tends to weaken rather
              than strengthen your position.
            </p>
            <p>
              If you want to work, the question is a work permit, not an extension —{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                see the work permit routes
              </Link>
              . If you want to study, that is a study permit —{' '}
              <Link
                href="/study-in-canada/study-permit"
                className="font-semibold text-accent-500 link-underline"
              >
                see study permits
              </Link>
              . If a parent or grandparent wants long visits rather than repeated extensions, the{' '}
              <Link
                href="/visitor-visa/super-visa"
                className="font-semibold text-accent-500 link-underline"
              >
                super visa
              </Link>{' '}
              is often the more honest answer, if the eligibility conditions are met. And if the goal
              is permanent residence, start{' '}
              <Link href="/immigration-programs" className="font-semibold text-accent-500 link-underline">
                with the programmes themselves
              </Link>
              .
            </p>
            <p>
              This also does not suit anyone who has already left Canada — an extension can only be
              applied for from inside the country. Officers decide these applications, not us, which is
              why we publish a{' '}
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
        <SectionHeading eyebrow="Where the current details live" title="Fees, timelines and deadlines" />
        <Prose>
          <p>
            Fees, processing times and application channels change. We do not print those figures here,
            because a number that is correct today becomes a liability on a page you might read next
            year. Read them at the source, on the day you apply.
          </p>
          <p>
            IRCC publishes the current requirements for{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              extending your stay as a visitor
            </a>
            , and the restoration mechanism and its time limit sit in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            .
          </p>
          <p>
            If you have not yet travelled, the starting point is the{' '}
            <Link href="/canada-visit-visa" className="font-semibold text-accent-500 link-underline">
              visit visa itself
            </Link>
            . If a previous application was refused, that history matters here too —{' '}
            <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
              see how we approach refusals
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
        eyebrow="Before your date passes"
        title="Find out where you actually stand"
        subtitle="Tell us the date on your visitor record or entry stamp, when you entered Canada, and why you need longer. We will tell you honestly whether an extension is realistic — and if your status has already lapsed, what your remaining options are."
        page={PAGE}
        waMessage="Hi, I’m in Canada as a visitor and I need advice about extending my stay."
      />
    </>
  );
}
