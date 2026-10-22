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
 * Post-graduation work permit.
 *
 * The job of this page is to move one belief: that "studying in Canada" earns
 * a work permit. It does not. Eligibility attaches to the institution AND the
 * specific programme, and the permit is once in a lifetime — so the decision
 * that matters is the one made before enrolment, not after graduation.
 *
 * Deliberately no durations, no field-of-study lists, no language benchmarks,
 * no application windows. All of those are revised and all of them are on IRCC.
 */
export const metadata: Metadata = {
  title: 'Post-Graduation Work Permit (PGWP) for Canada',
  description:
    'What the post-graduation work permit is, why eligibility depends on the institution and programme, how its length is set, and why it is once in a lifetime.',
  alternates: { canonical: '/work-permits/post-graduation' },
};

const PAGE = 'work-permits-post-graduation';

const TESTS = [
  {
    icon: 'building' as const,
    kicker: 'Test one',
    title: 'The institution',
    body: 'The school must be a designated learning institution whose graduates can be considered for this permit at all. Being designated to host international students is not the same thing as being eligible for the permit — some designated schools are not.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Test two',
    title: 'The programme',
    body: 'The specific programme you completed must qualify in its own right. For some categories of study this is automatic; for others it depends on whether the programme falls within the fields IRCC currently accepts. Both tests must pass.',
  },
  {
    icon: 'check' as const,
    kicker: 'Test three',
    title: 'How you studied',
    body: 'You must have held valid status as a student, completed the programme, and studied in the way the rules require — including expectations about full-time enrolment and the share of the programme completed in Canada.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Test four',
    title: 'Language',
    body: 'A language result in English or French is now part of the application, at a level that depends on your level of study. There is no exemption for first-language speakers. IRCC publishes the accepted tests and the required level.',
  },
];

const STEPS = [
  {
    title: 'Check eligibility before you enrol',
    body: 'This is the step that decides everything and the one most people skip. Confirm that the institution is eligible and that the exact programme is eligible, in writing, before you accept an offer or pay a deposit.',
  },
  {
    title: 'Study on valid status, full-time',
    body: 'Maintain your study permit, remain enrolled as required, and keep your enrolment records. Gaps in status and unauthorised part-time study are among the most common reasons a graduate later finds they do not qualify.',
  },
  {
    title: 'Complete the programme and get confirmation',
    body: 'You need proof from the institution that you finished — an official final transcript, or a letter or diploma confirming completion. The clock for applying runs from your final marks or official confirmation of completion, whichever reaches you first. It does not wait for your convocation ceremony, and draft transcripts or an adviser’s email do not start it either.',
  },
  {
    title: 'Sit the language test',
    body: 'Book an accepted test early. Results must be valid at the time you apply, so a test taken years earlier at the start of your studies may not still count.',
  },
  {
    title: 'Apply within the window',
    body: 'There is a limited period after your final results in which the application can be made, and conditions attached to what status you must hold. IRCC publishes the current window. Missing it is serious and the options that remain are narrow, so treat the date as fixed.',
  },
  {
    title: 'Work while the decision is pending',
    body: 'If you applied while holding a valid study permit and met the conditions, you may be authorised to work while waiting. This is conditional, not automatic — confirm it applies to you before you start a job.',
  },
];

const FAQS = [
  {
    q: 'How long a permit will I get?',
    a: 'The length is tied to the length of the programme you completed, within a maximum. Shorter programmes produce shorter permits, and there are separate rules for certain levels of study. Because both the bands and the maximum are set by policy and revised, IRCC’s own page is the only place to read the current position — we will not print a figure here that you might rely on two years from now.',
  },
  {
    q: 'Can I get a second one after another course?',
    a: 'No. It is a once-in-a-lifetime permit. Completing a second programme in Canada does not produce a second post-graduation work permit. This is the single most consequential fact on this page, because it means the permit has to be planned for before the first enrolment, not after it.',
  },
  {
    q: 'My college is on the designated learning institution list. Am I covered?',
    a: 'Not necessarily. Appearing on the designated list means the school may host international students. Whether its graduates can be considered for this permit is a separate question, and whether your particular programme qualifies is a third. All three have to be satisfied. Verify each one against IRCC before you enrol.',
  },
  {
    q: 'Does my field of study matter?',
    a: 'It depends on the credential, not on you. For some levels of qualification the field of study is not assessed at all; for others the programme must fall within the fields IRCC accepts, and which programmes those are is reviewed and republished. It also depends on when you applied for your study permit, because the requirement was introduced part-way through and applicants before that point are treated differently. Which side of that line you fall on is the thing to establish first — check it against IRCC’s current field-of-study page rather than against advice given to a friend in a different intake year.',
  },
  {
    q: 'Is the permit tied to one employer?',
    a: 'No. It is an open work permit, so it is not tied to a named employer or occupation, though a small number of employers are off-limits to open work permit holders and IRCC maintains that list. That openness is what makes it valuable — it lets you take the Canadian work experience that several permanent residence routes are built around.',
  },
  {
    q: 'Does the permit lead to permanent residence?',
    a: 'Not by itself. It is a bridge, not a destination. What it gives you is time and authorisation to gain skilled Canadian work experience, which several federal and provincial routes weigh heavily. Whether that converts depends on the work you actually get, your language results and your wider profile.',
  },
  {
    q: 'I studied online from Pakistan. Does that time count?',
    a: 'It depends on when the study took place and under which policy. Rules on distance and online learning have changed more than once, and time spent studying outside Canada is treated differently from time spent in Canada. This needs to be checked against the policy in force for your specific period of study.',
  },
  {
    q: 'Can you guarantee I will get one after I graduate?',
    a: 'No. Eligibility depends on decisions made by your institution, by policy, and by an officer, and none of those are ours. What we can do — and what actually helps — is check the institution and the programme against the current rules before you commit money to a course.',
  },
];

export default function PostGraduationWorkPermitPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Post-graduation work permit"
        title={
          <>
            You get this permit{' '}
            <span className="text-gold-300">once in your life</span>
          </>
        }
        subtitle={
          <>
            The post-graduation work permit is the reason most people study in Canada in the first
            place. Eligibility depends on the institution and the specific programme — and the
            decision that determines whether you get one is made before you enrol, not after you
            graduate.
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
          eyebrow="The permit, plainly"
          title="What a post-graduation work permit is"
        />
        <Prose>
          <p>
            A post-graduation work permit is an open work permit granted to certain international
            graduates of certain Canadian institutions. Open means it is not tied to a named employer
            or a named occupation: you can work for almost any employer, change jobs, and take the
            role you can actually get rather than the one written on a piece of paper before you
            arrived.
          </p>
          <p>
            That openness is the whole point. Several routes to permanent residence — federal and
            provincial — are built around skilled work experience gained in Canada. The permit is what
            buys you the authorisation and the time to accumulate it. It is a bridge between finishing
            a course and having something an immigration route can weigh.
          </p>
          <p>
            It is also, and this is the part that surprises people, granted once. Not once per
            qualification, not once per institution. Once. A second diploma does not produce a second
            permit. Every decision about where and what to study should be made with that in mind.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE TWO TESTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where people get caught"
          title="Four separate tests, and all of them have to pass"
          subtitle="As the rules tightened, students who had checked one of these discovered too late that another had failed."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTS.map((t) => (
            <FeatureCard key={t.title} icon={<Icon name={t.icon} />} kicker={t.kicker} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="“My college is on the list” is not the same as “my course qualifies”">
            <p>
              Being a designated learning institution means a school is approved to host international
              students. It does not, on its own, mean its graduates can be considered for this permit,
              and it says nothing at all about whether your particular programme qualifies. These are
              three different questions with three different answers.
            </p>
            <p>
              Recruiters have sold courses on the strength of the first question alone. Students have
              completed those courses, applied, and been refused — with the tuition spent, the years
              gone, and no second attempt available, because the permit is once in a lifetime. Get
              confirmation on all three points, in writing, before you pay a deposit.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== LENGTH & SEQUENCE ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How long it lasts"
              title="Length follows the programme you completed"
            />
            <Prose>
              <p>
                The permit’s validity is tied to the length of the programme you finished, subject to a
                maximum. A longer programme produces a longer permit, up to that ceiling; a short
                programme produces a short one, and below a certain length no permit at all.
              </p>
              <p>
                This matters more than it looks. Permanent residence routes that value Canadian work
                experience generally want a meaningful period of it, and that period has to fit inside
                the permit you were granted. A permit that expires before you have accumulated what a
                route requires leaves you with the experience but not the status — which is a bad place
                to be, and a common one.
              </p>
              <p>
                The bands, the ceiling, and the treatment of particular levels of study are set by
                policy and have been revised. IRCC publishes the current position, and that is where
                the number should come from — on the day you need it, for your own programme.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What an officer is checking" title="The core conditions" />
            <ul className="mt-6 space-y-4">
              {[
                ['An eligible institution', 'The school’s graduates can be considered for this permit — a narrower question than being designated.'],
                ['An eligible programme', 'The specific programme qualifies, either automatically for your level of study or by falling within the accepted fields.'],
                ['Completed, with proof', 'Final transcript and written confirmation from the institution that you finished the programme.'],
                ['Valid status while studying', 'Continuous, authorised student status throughout, with full-time enrolment as required.'],
                ['Language result', 'A valid result in English or French at the level required for your level of study, with no first-language exemption.'],
                ['Applied in time', 'The application made within the period allowed after your final results, holding the status the rules require.'],
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

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="Six steps, and the first one is years before the last"
          subtitle="Almost every problem we see on this permit was created at step one and discovered at step five."
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
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Choosing the course on a recruiter’s word.</strong> The commission is paid on
            enrolment, not on your permit. We have sat with graduates who were told a programme
            qualified, kept no written confirmation, and had no recourse once the refusal arrived.
          </p>
          <p>
            <strong>Enrolling on rules that applied to someone else.</strong> Eligibility depends in
            part on when you applied for your study permit, because requirements were phased in. A
            cousin who graduated from the same college two intakes earlier may have been assessed under
            a different rule entirely. Their outcome tells you nothing about yours.
          </p>
          <p>
            <strong>Breaking status mid-course.</strong> Dropping to part-time without authorisation,
            letting a study permit lapse, or taking an unapproved break can disqualify a graduate who is
            otherwise fine on every other test. It is discovered at the end, when it cannot be repaired.
          </p>
          <p>
            <strong>Leaving the language test until the application.</strong> The test is now part of
            the application and results have a validity period. Booking dates in Pakistan and in Canada
            are not always available at short notice, and the application window after graduation is not
            generous.
          </p>
          <p>
            <strong>Spending the permit on work that does not count.</strong> The permit is open, so any
            job is lawful — but not every job builds the kind of experience a permanent residence route
            weighs. People work for the full validity of the permit and reach the end with nothing a
            route can use.
          </p>
          <p>
            <strong>Planning a second course as a backup.</strong> There is no second permit. A further
            qualification may be worth doing for its own sake, but it will not renew this.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If studying is only a means to a work permit, think again">
            <p>
              This route does not suit someone who does not actually want the qualification. Study in
              Canada is expensive, it takes years, and the permit at the end is conditional on the
              institution, the programme, your status throughout and a language result. If the course
              itself has no value to you, you are paying a great deal for a permit you may not receive.
            </p>
            <p>
              It also tends not to suit people who already hold strong skilled experience and good
              language results — for them, applying directly through an economic route is often faster
              and cheaper than spending years and tuition to arrive at the same starting line. And it
              does not suit anyone whose plan depends on a short, low-cost programme, since below a
              certain programme length no permit is issued at all.
            </p>
            <p>
              If you have already studied in Canada and used this permit, it is not available again —
              the conversation then is about{' '}
              <Link
                href="/express-entry/canadian-experience-class"
                className="font-semibold text-accent-500 link-underline"
              >
                converting the experience you have
              </Link>
              , a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nomination
              </Link>
              , or an{' '}
              <Link
                href="/work-permits/bridging-open-work-permit"
                className="font-semibold text-accent-500 link-underline"
              >
                extension of status while a permanent residence application is pending
              </Link>
              .
            </p>
            <p>
              We would rather raise a doubt about a programme before you enrol than take a fee
              afterwards. We cannot decide eligibility — only IRCC does that — but we can tell you what
              the current published rules say and where your plan looks exposed. That is also why we
              publish a{' '}
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

      {/* ===================== RELATED ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Before and after"
          title="Where this sits in the study-to-residence path"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            href="/study-in-canada/designated-learning-institutions"
            cta="Check institutions"
            icon={<Icon name="building" />}
            kicker="Before you enrol"
            title="Designated learning institutions"
          >
            What designation means, what it does not mean, and how to verify a school and a programme
            before you commit money.
          </FeatureCard>
          <FeatureCard
            href="/study-in-canada/working-while-studying"
            cta="Read the rules"
            icon={<Icon name="permit" />}
            kicker="During your studies"
            title="Working while studying"
          >
            What you may do on a study permit, and how unauthorised work or study affects your standing
            at graduation.
          </FeatureCard>
          <FeatureCard
            href="/study-in-canada/study-to-permanent-residence"
            cta="See the path"
            icon={<Icon name="refresh" />}
            kicker="After you graduate"
            title="Study to permanent residence"
          >
            How Canadian study and work experience feed into economic routes — and where the path
            commonly breaks.
          </FeatureCard>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Durations, eligible fields and language levels"
        />
        <Prose>
          <p>
            Permit durations, the list of eligible fields of study, the language levels and accepted
            tests, and the window for applying are all set by policy and reviewed. We deliberately do
            not publish those figures here, because a figure that is correct today is a liability on a
            page you might read in two years — and this is a permit you only get one attempt at.
          </p>
          <p>
            IRCC publishes the current eligibility rules on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , including the separate{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility/field-of-study.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              field-of-study requirement
            </a>{' '}
            and the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              designated learning institutions list
            </a>
            . Read them at the source, for your own programme, on the day you need them — and ask your
            institution to confirm its position in writing.
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
        eyebrow="Before you pay a deposit"
        title="Check the course before you commit the money"
        subtitle="Tell us the institution and the exact programme you are considering, and where you are in the process. We will go through it against the rules IRCC publishes today, show you where the risk sits, and say plainly if your profile looks strong enough that the detour may not be worth it."
        page={PAGE}
        waMessage="Hi, I’d like to check whether the course I’m considering in Canada leads to a post-graduation work permit."
      />
    </>
  );
}
