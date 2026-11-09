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
 * Bridging open work permit (BOWP).
 *
 * This page exists to prevent one specific, expensive mistake: letting a work
 * permit run out while a permanent residence application is in the queue. The
 * BOWP is a narrow, conditional bridge — not a general extension. Who can use it
 * turns on the class, the stage the PR file has reached and the applicant's status.
 * IRCC publishes no timing window before expiry, so this page must not imply one.
 * Everything here is structural. No fees, no processing times, no thresholds.
 */
export const metadata: Metadata = {
  title: 'Bridging Open Work Permit (BOWP) for Canada',
  description:
    'A bridging open work permit lets eligible PR applicants keep working. Which classes qualify, the stage your file must reach, and options if your permit expired.',
  alternates: { canonical: '/work-permits/bridging-open-work-permit' },
};

const PAGE = 'work-permits-bowp';

const CONDITIONS = [
  {
    icon: 'globe' as const,
    kicker: 'Where you are',
    title: 'Physically in Canada',
    body: 'You must live in Canada when you apply and, for most classes, intend to live outside Quebec. It is not a route you can start from Pakistan, and leaving at the wrong moment can complicate it.',
  },
  {
    icon: 'permit' as const,
    kicker: 'What you hold',
    title: 'A work permit, maintained status or restoration',
    body: 'You must have valid temporary resident status and a valid work permit, have an expired permit but have maintained your status as a worker, or be eligible to restore your status and get a work permit.',
  },
  {
    icon: 'doc' as const,
    kicker: 'What you have filed',
    title: 'A PR application at the right stage',
    body: 'Filing alone is not enough. Your permanent residence application must have reached the processing stage IRCC specifies for your class before the bridge becomes available.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Whose application',
    title: 'You are the principal applicant',
    body: 'The bridging permit is for the principal applicant on the permanent residence application, not for a spouse or dependant listed on it.',
  },
];

const STEPS = [
  {
    title: 'You are working in Canada on a permit',
    body: 'The bridge assumes a lawful basis to work. Everything below is far simpler if that permit is still valid when you act.',
  },
  {
    title: 'You file for permanent residence',
    body: 'Under an economic class that the bridging measure covers. Filing starts the clock but does not by itself make you eligible.',
  },
  {
    title: 'Your file reaches the required stage',
    body: 'Each class has its own trigger point: a completeness check, an eligibility assessment, or approval in principle. An acknowledgement of receipt alone is not enough. IRCC also introduces temporary measures that move these trigger points, so confirm the trigger for your own class on IRCC’s current page.',
  },
  {
    title: 'You apply for the bridging permit online',
    body: 'Ideally before your current permit expires, because that is what lets you keep working. You apply from inside Canada, following IRCC’s instructions for extending or changing a work permit, and select an open work permit.',
  },
  {
    title: 'You keep working while it is assessed',
    body: 'A properly filed extension made before expiry normally lets you continue working under the conditions of your existing permit while the new one is decided. This protection depends on having filed in time.',
  },
  {
    title: 'If granted, it covers the gap',
    body: 'It is a holding measure while the permanent residence application is processed, not an outcome, and it is not open-ended — it is issued for a fixed validity period set by IRCC. If the PR decision has not arrived by the time it runs out, a further application may be needed. Nothing about it is automatic or guaranteed.',
  },
];

const FAQS = [
  {
    q: 'What does a bridging open work permit actually do?',
    a: 'It closes a gap. Permanent residence applications take longer to decide than a work permit lasts, so applicants who are already working in Canada can be left with a valid PR application and no right to work. The bridging permit lets certain applicants keep working while that application is decided, instead of losing their job or their status in the interval.',
  },
  {
    q: 'Which permanent residence applicants does it cover?',
    a: 'As of 8 November 2026, IRCC lists the Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program; the Provincial Nominee Program, through Express Entry or outside it; Quebec skilled workers and investors; the caring for children and high medical needs classes; the Home Child Care Provider and Home Support Worker pilots that opened from 2019 to 2024; and the Agri-Food Pilot. Applicants under the Home Care Worker Immigration pilots that opened in 2025 are not eligible. Family class and humanitarian applicants are dealt with under different rules. Each class has its own stage requirement, so check yours against IRCC’s current page for this permit.',
  },
  {
    q: 'I have a provincial nomination. Am I automatically eligible for an open permit?',
    a: 'Not automatically, and the distinction is sharper than most people expect. What matters is whether your nomination carries an employment restriction, not merely whether it names an employer or an occupation — a nomination can name both and still impose no restriction. Where the province has imposed an employment restriction, the open permit is generally not the available route at all; a separate employer-specific bridging permit is, and that has its own preconditions on the employer’s side. Read the wording of your own nomination letter before assuming you can change jobs.',
  },
  {
    q: 'When exactly should I apply?',
    a: 'IRCC does not set a window before your permit expires. Apply once your permanent residence file has reached the stage your class requires and, if you can, before your current permit expires, because that is what normally lets you keep working while the application is decided. If you are not yet eligible, IRCC’s advice is to extend your work permit rather than let it expire.',
  },
  {
    q: 'What happens if I let my permit expire first?',
    a: 'You lose the ability to keep working. You may still be able to apply if you maintained your status, or if you are eligible to restore your status and get a work permit. Restoration must be applied for within 90 days after losing status under section 182 of the Regulations, has its own fee, and you cannot work until you are authorised. It is one of the more damaging and avoidable outcomes.',
  },
  {
    q: 'Does the bridging permit improve my chances of permanent residence?',
    a: 'No. It has no bearing on the PR decision. It preserves your ability to work while that decision is made, nothing more. If the permanent residence application is refused, the bridge does not survive the refusal.',
  },
  {
    q: 'Can my spouse work while I hold a bridging permit?',
    a: 'A spouse’s ability to work depends on their own eligibility for an open work permit, which turns on your occupation and status rather than on the bridging permit itself. It is a separate application with separate requirements — see our page on spousal open work permits.',
  },
  {
    q: 'Can I apply for a bridging permit from Pakistan?',
    a: 'No. This is an in-Canada measure for people who already hold a work permit here. If you are in Pakistan and have not yet worked in Canada, the relevant conversation is about the underlying work permit or permanent residence route, not about bridging.',
  },
];

export default function BridgingOpenWorkPermitPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Bridging open work permit"
        title={
          <>
            Bridging open work permit: keep working while your PR{' '}
            <span className="text-gold-300">application is decided</span>
          </>
        }
        subtitle={
          <>
            A bridging open work permit closes the gap between a work permit that is running out and a
            permanent residence decision that has not arrived. It is narrow and conditional: it depends
            on your class, the stage your application has reached, and your status.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IT IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The measure, plainly"
          title="What a bridging open work permit is for"
        />
        <Prose>
          <p>
            Permanent residence is not decided overnight. A person can be working lawfully in Canada,
            file a well-prepared economic-class application, and still watch their work permit run out
            long before a decision is made. Without a remedy, that person stops being allowed to work —
            through no fault of theirs and while their own application is sitting in the queue.
          </p>
          <p>
            The bridging open work permit is that remedy. It allows certain permanent residence
            applicants who are already in Canada on a work permit to apply for a further permit that
            carries them through to the decision. In most cases it is open, meaning it is not tied to a
            single named employer, though there are situations where the permit that follows is
            employer-specific instead.
          </p>
          <p>
            Two things are worth being blunt about. First, it is a bridge and nothing more — it does not
            advance, strengthen or accelerate the permanent residence application underneath it.
            Second, it is not a general safety net. It covers particular classes of applicant, at a
            particular stage, with particular status. Falling outside any of those means it does not
            apply to you.
          </p>
        </Prose>
      </Section>

      {/* ===================== CONDITIONS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Four conditions, all of them"
          title="What has to be true at the moment you apply"
          subtitle="These are cumulative. Meeting three of the four is the same as meeting none."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONDITIONS.map((c) => (
            <FeatureCard key={c.title} icon={<Icon name={c.icon} />} kicker={c.kicker} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Do not let your permit lapse while you wait">
            <p>
              IRCC does not publish a window before expiry in which you must apply. What it does say is
              not to let your work permit expire while you wait to become eligible: extend it if you
              can, even if your employer needs a new LMIA or offer of employment to do so. Filing before
              expiry is also what normally lets you keep working while the application is assessed.
            </p>
            <p>
              If your permit has already expired you may still have options, because IRCC accepts
              applicants who have maintained their status or are eligible to restore it. But restoration
              must be applied for within 90 days after losing status, under{' '}
              <a
                href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-182.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                section 182 of the Regulations
              </a>
              , it has its own fee, and you must stop working until you are authorised. Treat the expiry
              date on your permit as a hard deadline you work backwards from.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How the bridge is reached, in order"
          subtitle="The bridge does not open when you file for permanent residence. It opens at a later, defined point."
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

      {/* ===================== WHICH ROUTES ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Which applicants, as a category"
              title="The classes the bridge is built around"
            />
            <Prose>
              <p>
                The measure is economic in character. It is built around applicants who came to Canada to
                work, worked here, and are now applying to stay permanently through an economic route —
                the{' '}
                <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                  Express Entry
                </Link>{' '}
                programs,{' '}
                <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                  provincial nominee
                </Link>{' '}
                applicants, Quebec’s own economic selection, and a number of federal pilots.
              </p>
              <p>
                It is not designed for every path to permanent residence. Family-class and humanitarian
                applicants are handled under separate rules that this page does not describe, and some
                pilots are expressly outside it.
              </p>
              <p>
                As of 8 November 2026, IRCC sets these stages:
              </p>
              <ul>
                <li>
                  <strong>Express Entry programs, and provincial nominees through Express Entry:</strong>{' '}
                  completeness check passed.
                </li>
                <li>
                  <strong>Provincial nominees outside Express Entry:</strong> eligibility assessment
                  passed.
                </li>
                <li>
                  <strong>Quebec skilled workers and investors:</strong> completeness check passed.
                </li>
                <li>
                  <strong>Caring classes, the 2019 to 2024 home care pilots and the Agri-Food Pilot:</strong>{' '}
                  approval in principle.
                </li>
                <li>
                  <strong>Home Care Worker Immigration pilots opened in 2025:</strong> not eligible.
                </li>
              </ul>
              <p>
                These are adjusted as pilots begin and end. Check your own class against{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/pr-work-permits/bridging.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IRCC’s current page for this permit
                </a>{' '}
                before you rely on being inside it.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Read the terms" title="Open is not always open" />
            <ul className="mt-6 space-y-4">
              {[
                ['Open, in the usual case', 'Not tied to one named employer, so you can generally change jobs without a fresh authorisation.'],
                ['Restricted, in some cases', 'Where a provincial nomination imposes an employment restriction, the open permit is generally not the route — a separate employer-specific bridging permit is, with additional steps required from the employer. Naming an employer and restricting employment are not the same thing; the nomination letter decides it.'],
                ['Not a status upgrade', 'It maintains your ability to work as a temporary resident. It confers nothing permanent.'],
                ['Tied to the PR application', 'It exists because of the application underneath it. If that application ends, so does the basis for the bridge.'],
                ['Not automatic', 'It is an application with its own requirements, assessed on its own merits, and it can be refused.'],
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

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns worth planning against"
        />
        <Prose>
          <p>
            <strong>Letting the permit expire while you wait.</strong> A damaging error. IRCC can still
            accept someone who maintained status or is eligible to restore it, but restoration has its
            own 90-day limit and you cannot work until you are authorised.
          </p>
          <p>
            <strong>Applying before the bridge has opened.</strong> Filing the moment the permanent
            residence application goes in, before it has reached the stage IRCC requires, tends to
            produce a refusal — and refusals consume time you may not have.
          </p>
          <p>
            <strong>Assuming a nomination means an open permit.</strong> Where the nomination carries an
            employment restriction, the route is a separate employer-specific permit rather than the open
            one, and it needs steps taken by the employer. People resign in anticipation of portability
            they do not have.
          </p>
          <p>
            <strong>Confusing this with a permit extension on the same basis.</strong> A bridging permit
            depends on a live permanent residence application at the right stage. If your PR application
            is not there yet, a different extension route may be the correct one — or there may be none.
          </p>
          <p>
            <strong>Travelling at the wrong moment.</strong> Leaving Canada while an in-Canada extension
            is pending can complicate both your re-entry and the application. Take advice before booking,
            not after.
          </p>
          <p>
            <strong>Letting the employer discover the problem first.</strong> Employers stop payroll when
            work authorisation lapses. Tell your employer your expiry date early so nobody is improvising
            in the last week.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who the bridging open work permit does not help" />
        <div className="mt-8">
          <Callout title="If you are reading this from Pakistan, this is probably not your page">
            <p>
              The bridging open work permit is an in-Canada measure for people who are already working
              here on a valid permit and already have a permanent residence application under way. If you
              have not yet come to Canada, there is nothing here for you to apply for — the relevant
              conversation is about the{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                underlying work permit
              </Link>{' '}
              or the{' '}
              <Link href="/immigration-programs" className="font-semibold text-accent-500 link-underline">
                permanent residence route
              </Link>{' '}
              itself.
            </p>
            <p>
              It also does not help people whose permanent residence application sits outside the covered
              economic classes, people with no work permit and no route to restoring one, and people whose
              permanent residence application has not reached the stage that opens the bridge. In each of those cases the answer is not a
              bridging permit — and pretending otherwise wastes the little time that is left.
            </p>
            <p>
              We will say so plainly if this does not fit your situation, and tell you what does. No
              application outcome is ours to promise, which is why we publish a{' '}
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
        <SectionHeading
          eyebrow="Where the current details live"
          title="Fees and covered classes"
        />
        <Prose>
          <p>
            The application fee and the open-work-permit holder fee where it applies are published by
            IRCC and change. We deliberately do not reproduce them here, because a
            figure that is correct today becomes a trap on a page you might read next year.
          </p>
          <p>
            IRCC publishes the current requirements for this permit on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/pr-work-permits/bridging.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and the underlying authority for work permits and status maintenance sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Read the figures at the source, on the day you need them.
          </p>
          <p>
            Related routes on this site:{' '}
            <Link href="/work-permits/post-graduation" className="font-semibold text-accent-500 link-underline">
              post-graduation work permits
            </Link>
            ,{' '}
            <Link
              href="/work-permits/spousal-open-work-permit"
              className="font-semibold text-accent-500 link-underline"
            >
              spousal open work permits
            </Link>{' '}
            and{' '}
            <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
              LMIA-based permits
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Questions about the bridging open work permit" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before your permit expires"
        title="Work backwards from your expiry date, not forwards from today"
        subtitle="Tell us what permit you hold, when it expires and where your permanent residence application has reached. We will tell you whether the bridge is open to you and when to move."
        page={PAGE}
        waMessage="Hi, I’d like advice on a bridging open work permit while my PR application is in process."
      />
    </>
  );
}
