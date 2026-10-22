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
 * Working while studying in Canada.
 *
 * The one idea this page has to land: permission to work is a CONDITION PRINTED
 * ON THE STUDY PERMIT, not a right that comes with being a student. Everything
 * else — on-campus, off-campus, placements, breaks — is downstream of that.
 *
 * Deliberately no weekly hour figure anywhere on this page. The limit has moved
 * more than once, sources contradict each other, and a stale number here would
 * be read as advice. IRCC is linked instead.
 */
export const metadata: Metadata = {
  title: 'Working While Studying in Canada',
  description:
    'How work permission follows the conditions on your study permit: on-campus and off-campus work, placements, and why exceeding them breaches status.',
  alternates: { canonical: '/study-in-canada/working-while-studying' },
};

const PAGE = 'study-in-canada-working-while-studying';

const KINDS_OF_WORK = [
  {
    icon: 'building' as const,
    kicker: 'On campus',
    title: 'Work at your institution',
    body: 'Work located on the campus of the school you are enrolled at — the institution itself, a faculty member, a student organisation, or a business operating on the campus. Permitted only if your permit carries the on-campus condition and you remain an enrolled full-time student.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Off campus',
    title: 'Work for an outside employer',
    body: 'An ordinary job elsewhere in the city, with no separate work permit, if your study permit carries the off-campus condition and you continue to satisfy the eligibility criteria it refers to. A weekly hour ceiling applies during academic sessions.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Part of the programme',
    title: 'Co-op, internship, practicum',
    body: 'Work that your programme requires you to complete in order to graduate. This is treated differently from an ordinary job, because it is coursework that happens to be paid. Whether a separate document is needed on top of the study permit depends on your level of study and on IRCC policy in force at the time — confirm it on the IRCC page linked below rather than from older guidance.',
  },
  {
    icon: 'permit' as const,
    kicker: 'After you graduate',
    title: 'A separate permit entirely',
    body: 'Working long-term after graduation runs on a different document, applied for separately, with its own eligibility rules. There is also a separate rule that can authorise work in the interval after your programme ends, but only where a specific set of conditions is met — it is not automatic.',
  },
];

const CONDITION_CHECKS = [
  [
    'Read the conditions on the permit itself',
    'The permit document lists conditions in plain wording — whether you may accept employment on campus, off campus, or both. If a condition is not printed, you do not have it, however common it may be for others.',
  ],
  [
    'You must be enrolled and studying',
    'Off-campus permission is tied to being an actively enrolled full-time student at a designated learning institution, in a programme of the required length and type. Deferring, dropping to part-time or stopping attendance can end the permission without anything being sent to you.',
  ],
  [
    'It starts when your programme starts',
    'Permission to work off campus does not begin on arrival. It begins when you actually start the programme. Working in the gap between landing and the first day of classes is unauthorised work.',
  ],
  [
    'A Social Insurance Number is required',
    'You cannot legally be paid without a SIN, and Service Canada will look at the conditions on your permit before issuing one. A permit without the employment condition will not produce a SIN.',
  ],
  [
    'Language and short courses usually do not qualify',
    'Language training, general-interest and preparatory courses generally do not carry off-campus work permission, even where a study permit was issued. Check the conditions before you assume.',
  ],
];

const FAQS = [
  {
    q: 'How many hours a week can I work?',
    a: 'There is a weekly ceiling during academic sessions and a different treatment during scheduled breaks, but the figure has changed more than once in recent years and secondary sources routinely quote outdated numbers. We will not print one here that you might rely on a year from now. Read the current limit on the IRCC page linked on this page, on the day you need it, and re-check it before each academic year.',
  },
  {
    q: 'Does my study permit automatically let me work?',
    a: 'No. Permission to work is a condition printed on the permit. Most permits issued to eligible post-secondary students carry it, which is why people assume it is automatic — but the permit is the authority, not the assumption. If the condition is not on your document, you may be able to ask IRCC to add it, and until it is added you cannot work.',
  },
  {
    q: 'Can I work more hours during summer or winter break?',
    a: 'Scheduled breaks between academic sessions are treated differently from sessions in progress, provided you were studying full-time before the break and are enrolled to continue after it. A break you take for your own reasons is not a scheduled break, and a break at the very start or very end of your programme is not one either.',
  },
  {
    q: 'What counts as on-campus work?',
    a: 'Work physically located on the campus of the institution you are enrolled at — for the school, a faculty member, a student association, or a business operating on that campus. If your school has several campuses, on-campus work is generally limited to the one where you study, with narrow exceptions for teaching or research appointments.',
  },
  {
    q: 'Do I need a separate permit for my co-op or internship?',
    a: 'It depends on your level of study and on the policy in force when the placement starts — this is an area IRCC has changed, and a great deal of published advice about it is now out of date. The general shape is that a placement genuinely required to complete the programme, and forming only part of it rather than the bulk, is assessed differently from an ordinary job. Whether that means your study permit is enough, or a separate document is still needed, must be read on IRCC’s own student-work pages and confirmed with your institution’s international student office before the placement starts — not after.',
  },
  {
    q: 'What actually happens if I work beyond my conditions?',
    a: 'It is a breach of the conditions of your temporary status, not a minor administrative matter. Depending on the case, consequences can include loss of student status, refusal of a future study, work or permanent residence application, a finding of non-compliance or inadmissibility, and having to leave Canada. It can also surface much later: later applications ask about your work history, and answering them inaccurately raises a misrepresentation issue on top of the original breach. What follows in any individual case is IRCC’s decision, not something we or anyone else can predict for you.',
  },
  {
    q: 'My employer pays cash and says nobody checks. Is that safer?',
    a: 'No. Unreported cash work is still unauthorised work if it exceeds your conditions, and it leaves you with no employment record for later applications while still exposing you if the employer is ever audited. It also puts you in a position where the employer knows you cannot complain about anything.',
  },
  {
    q: 'Can my spouse work while I study?',
    a: 'That is a separate application with its own eligibility rules, which depend on your level of study and your programme, and which IRCC has narrowed and re-drawn more than once. It is not something your own permit conditions decide. Check the current eligibility on IRCC’s pages before either of you plans around it.',
  },
];

export default function WorkingWhileStudyingPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permits"
        title={
          <>
            Permission to work is a{' '}
            <span className="text-gold-300">condition on your permit</span>
          </>
        }
        subtitle={
          <>
            Being an international student does not, by itself, give you the right to work in Canada.
            The authority is the wording printed on your study permit — and working past it is a
            breach of status, not an overtime problem.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE CORE IDEA ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where the permission comes from"
          title="Read your permit before you read anything else"
        />
        <Prose>
          <p>
            A study permit is not only permission to study. It is a document that carries conditions,
            and those conditions are printed on it. Among them is whether you may accept employment,
            and where — on the campus of your institution, off campus, or both.
          </p>
          <p>
            This matters more than it sounds. Most permits issued to eligible post-secondary students
            do carry work conditions, which is exactly why students stop checking and start assuming.
            But the assumption is not the authority. If the condition is absent from your document,
            you have no permission to work, regardless of what your classmates’ permits say or what
            an employer tells you is normal.
          </p>
          <p>
            So the first step is not a search for jobs. It is reading the conditions on your own
            permit, in the wording IRCC actually used, and knowing what they allow. If the condition
            is missing and you believe you are eligible, there is a process for asking IRCC to amend
            the permit — and you cannot work while you wait for it.
          </p>
        </Prose>
      </Section>

      {/* ===================== FOUR KINDS OF WORK ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The categories"
          title="Four different things, governed differently"
          subtitle="Students routinely treat these as one topic. They are not, and the rules for one do not carry over to another."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KINDS_OF_WORK.map((k) => (
            <FeatureCard key={k.title} icon={<Icon name={k.icon} />} kicker={k.kicker} title={k.title}>
              {k.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Callout title="We do not publish the weekly hour limit here">
            <p>
              The ceiling on off-campus hours during an academic session has been changed more than
              once in recent years, and a great deal of what is written about it online — including on
              consultancy sites and student forums — is out of date. Sources currently in circulation
              contradict each other outright.
            </p>
            <p>
              We will not add another number to that pile. IRCC publishes the current limit on its own{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                off-campus work page
              </a>
              . Read it there, and read it again at the start of each academic year. Working to a
              figure you memorised two years ago is one of the more common ways students lose status
              without meaning to.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== CONDITIONS CHECKLIST ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Before your first shift"
              title="What has to be true for off-campus work"
            />
            <Prose>
              <p>
                Off-campus permission is conditional and continuing. It is not granted once and held
                forever — it depends on facts about your enrolment that can change during the year
                without any notice being issued to you.
              </p>
              <p>
                That is the trap. Nobody writes to tell a student that their permission lapsed when
                they dropped to part-time or paused a semester. The permission simply stops applying,
                and the shifts worked afterwards are unauthorised.
              </p>
              <p>
                If your enrolment status changes for any reason — a failed term, a medical leave, a
                transfer, a change of programme — treat your work permission as something to re-check
                rather than something to carry over.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="The checks" title="Five things students skip" />
            <ul className="mt-6 space-y-4">
              {CONDITION_CHECKS.map(([term, def]) => (
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

      {/* ===================== PLACEMENTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Co-op, internship, practicum"
          title="When work is part of the programme"
          subtitle="A required placement is coursework that happens to be paid. It is assessed differently from an ordinary job."
        />
        <Prose>
          <p>
            Some programmes cannot be completed without a work placement. Engineering co-ops, nursing
            and education practicums, hospitality placements and many applied diplomas are built that
            way: the placement is a graduation requirement, not an optional extra.
          </p>
          <p>
            Because the work is part of the curriculum, it is treated separately from ordinary
            off-campus employment. For a long time it required its own document, applied for alongside
            or after the study permit. IRCC has since revised that position, and it has not applied the
            same way at every level of study — so this is precisely the point on which older advice,
            including advice from people who studied in Canada a few years ago, goes wrong. Whether a
            separate permit is needed for your placement is a question to answer today, from{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC’s own student-work pages
            </a>
            , not from anything written a year ago — including this page.
          </p>
          <p>
            The conditions that have remained stable in kind are these: the placement must be genuinely
            required to complete the programme, your institution must be able to confirm that in
            writing, you must hold a valid study permit, the placement must form only part of the
            programme rather than the bulk of it (IRCC sets the exact proportion, and it is published on
            the page linked above), and certain placements — those in healthcare, childcare, or other
            settings where public health is a factor — can carry a medical examination requirement that
            has to be dealt with before the placement, not during it.
          </p>
          <p>
            Confirm the position with your institution’s international student office and with IRCC
            before the placement begins. A placement started on the wrong footing is difficult to
            unwind, because the work is already on your record and the term is already in progress.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="How students lose status without intending to"
        />
        <Prose>
          <p>
            <strong>Starting work before the programme starts.</strong> Off-campus permission runs from
            the actual start of studies. Shifts worked in the weeks between arrival and the first day
            of classes are unauthorised, and students take them precisely because money is tightest
            then.
          </p>
          <p>
            <strong>Two part-time jobs, counted separately.</strong> The weekly ceiling applies to all
            your off-campus work combined, not to each employer. Two employers who each keep you under
            the limit can still put you over it.
          </p>
          <p>
            <strong>Treating a personal break as a scheduled break.</strong> Full-time work during
            breaks depends on the break being a scheduled one in the academic calendar, with study
            either side of it. A semester you sat out is not a scheduled break.
          </p>
          <p>
            <strong>Continuing to work after enrolment changed.</strong> Dropping below full-time,
            taking leave, being withdrawn for academic reasons, or transferring institutions can end
            the permission. No letter arrives to say so.
          </p>
          <p>
            <strong>Assuming the study-permit conditions carry you past graduation.</strong> The
            interval between finishing your programme and holding a post-graduation work permit is
            governed by its own rule, not by the conditions that let you work as a student. That rule
            can authorise work while a post-graduation application is pending, but only where a
            specific set of requirements is met — about the permit you held, when you apply, and
            whether you stayed within your student work conditions throughout. It is not automatic, and
            assuming it applies to you is a common and expensive error. Check your own position against{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/after-you-apply.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC’s guidance on working after you apply
            </a>{' '}
            before you accept anything.
          </p>
          <p>
            <strong>Prioritising the job over the studies.</strong> The most damaging pattern we see is
            not a technical breach at all. It is a student working the maximum permitted hours,
            failing terms, losing full-time enrolment, and losing both the work permission and the
            study permit that depended on it. The permit exists to let you study.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this does not work for" />
        <div className="mt-8">
          <Callout title="If the plan is to fund the degree from part-time work, the plan is wrong">
            <p>
              We are asked regularly whether a student can cover tuition and living costs from
              permitted work in Canada. Realistically, no. Permitted student work is part-time during
              sessions, usually at entry-level wages, and Canadian tuition for international students
              plus rent in Toronto, Vancouver or Mississauga is not a part-time-wage problem. Students
              who arrive on that assumption tend to end up either in financial trouble or working
              beyond their conditions — and the second one puts their status in Canada at risk.
            </p>
            <p>
              It also does not suit anyone whose real objective is to work rather than to study. If the
              course is a means to a work permit and nothing more, a study permit application is the
              wrong application, an officer may well read it that way, and the honest route is to{' '}
              <Link
                href="/work-permit-canada"
                className="font-semibold text-accent-500 link-underline"
              >
                look at work permits directly
              </Link>
              . Study permit applications also require you to show{' '}
              <Link
                href="/study-in-canada/proof-of-funds"
                className="font-semibold text-accent-500 link-underline"
              >
                funds independent of any Canadian earnings
              </Link>{' '}
              — anticipated wages are not proof of funds.
            </p>
            <p>
              And it does not suit students in language, preparatory or general-interest courses, who
              generally do not receive off-campus work conditions at all.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current rules live" title="Read the limits at the source" />
        <Prose>
          <p>
            Hour ceilings, placement-permit requirements and eligibility criteria for off-campus work
            are all revised from time to time, sometimes with little notice and sometimes mid-academic
            year. We publish the structure here and deliberately leave the figures to IRCC.
          </p>
          <p>
            IRCC sets out the current position on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              working in Canada as an international student
            </a>
            , and the underlying conditions attached to study permits sit in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Your institution’s international student office is the other authority worth using — they
            deal with the same questions every term and they know your programme.
          </p>
          <p>
            Related pages:{' '}
            <Link href="/study-in-canada/study-permit" className="font-semibold text-accent-500 link-underline">
              the study permit itself
            </Link>
            ,{' '}
            <Link
              href="/study-in-canada/designated-learning-institutions"
              className="font-semibold text-accent-500 link-underline"
            >
              designated learning institutions
            </Link>
            ,{' '}
            <Link
              href="/work-permits/post-graduation"
              className="font-semibold text-accent-500 link-underline"
            >
              working after you graduate
            </Link>{' '}
            and{' '}
            <Link
              href="/study-in-canada/study-to-permanent-residence"
              className="font-semibold text-accent-500 link-underline"
            >
              studying as a path to permanent residence
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions students actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you accept a job"
        title="Check what your permit actually allows"
        subtitle="Send us the conditions printed on your study permit and tell us what you are enrolled in. We will go through what those conditions appear to allow, against the rules in force at the time — and point you to the IRCC source for each one so you can verify it yourself."
        page={PAGE}
        waMessage="Hi, I’d like to check what work my study permit conditions allow while I’m studying in Canada."
      />
    </>
  );
}
