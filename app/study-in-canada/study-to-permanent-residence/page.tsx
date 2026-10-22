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
 * Study → PR.
 *
 * The belief this page has to correct: that a Canadian study permit is a
 * purchased entry ticket to permanent residence. It is not. It is the first
 * of several independent decisions, each of which can end the sequence, and
 * choices made at admission stage silently decide whether the later stages
 * are even available.
 */
export const metadata: Metadata = {
  title: 'From Study to Permanent Residence in Canada',
  description:
    'The realistic sequence from study permit to PR: a PGWP, Canadian skilled experience, then Express Entry or a nomination — and where it breaks down.',
  alternates: { canonical: '/study-in-canada/study-to-permanent-residence' },
};

const PAGE = 'study-to-permanent-residence';

const STAGES = [
  {
    icon: 'doc' as const,
    kicker: 'Stage one',
    title: 'Study permit and study',
    body: 'A temporary permit to study a specific programme at a designated institution. It authorises study. It confers no right to remain afterwards and no claim on permanent residence.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Stage two',
    title: 'Post-graduation work permit',
    body: 'An open work permit some graduates can apply for after finishing an eligible programme. It is applied for, assessed and granted or refused — it is not automatic on graduation.',
  },
  {
    icon: 'building' as const,
    kicker: 'Stage three',
    title: 'Skilled Canadian work experience',
    body: 'You then have to actually find and hold skilled employment in Canada. In our experience this is the stage people plan for least, and it depends on a labour market no one can promise you.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Stage four',
    title: 'Express Entry or a provincial nomination',
    body: 'With qualifying experience you may become competitive under an economic programme, or eligible for a provincial graduate or in-demand-occupation stream. Neither is guaranteed by having reached this point.',
  },
];

const STEPS = [
  {
    title: 'Choose the institution and programme',
    body: 'This decision, made before you ever land, largely determines whether a post-graduation work permit is available to you at all. Not every institution and not every programme leads to one.',
  },
  {
    title: 'Study, full-time and continuously',
    body: 'Post-graduation work permit eligibility depends on how you actually studied — status maintained, study largely full-time, the programme completed. Breaks, part-time terms and status lapses cause problems years later.',
  },
  {
    title: 'Complete and receive confirmation',
    body: 'You need written confirmation from the institution that you have met the requirements of the programme. The clock for applying starts from that documentation, not from convocation.',
  },
  {
    title: 'Apply for the work permit in time',
    body: 'The application must be made within the window IRCC sets after completion, while you hold or have recently held valid status. Miss it and the route generally closes for good.',
  },
  {
    title: 'Find skilled work, not just work',
    body: 'Economic programmes count experience in skilled occupations. A job that pays your rent may not count at all toward permanent residence, and hours accumulated in the wrong occupation are not recoverable.',
  },
  {
    title: 'Apply under a federal or provincial programme',
    body: 'Only now do you have an economic immigration application. It is assessed on its own merits, against whatever the selection criteria are on that day.',
  },
];

const FAQS = [
  {
    q: 'Does studying in Canada lead to permanent residence?',
    a: 'It can, but nothing about a study permit creates an entitlement to it. A study permit is temporary authorisation to study. Permanent residence is a separate decision, under a separate programme, made years later against criteria that will have changed in the meantime. People do make the transition every year; people also finish, fail to find skilled work, and go home.',
  },
  {
    q: 'Is a post-graduation work permit automatic once I graduate?',
    a: 'No. It is an application that can be refused. Eligibility depends on the institution, the programme, how you studied, your status at the time and — for some categories of programme — the field of study and language requirements IRCC applies. Many refusals trace back to a choice made at admission stage, before the applicant knew any of this mattered.',
  },
  {
    q: 'How long does the whole path take?',
    a: 'Longer than most people are told, and we will not print a figure. Study is followed by a work permit application, then by a period of qualifying employment, then by a permanent residence application with its own processing. Plan on years, and plan for the possibility that it does not complete.',
  },
  {
    q: 'Does the work I do while studying count toward permanent residence?',
    a: 'Generally not for the economic route international graduates most often use. Experience gained while you were a full-time student, including co-op placements, is normally excluded from the qualifying Canadian experience that class counts. IRCC sets out the exclusions on its Canadian Experience Class eligibility page at canada.ca, and they are worth reading before you rely on part-time hours.',
  },
  {
    q: 'Does any programme at any school qualify?',
    a: 'No. The institution must be designated, and beyond that only certain programmes lead to a post-graduation work permit. For some categories of programme, eligibility is tied to a published list of fields linked to labour shortages, and that list is revised. Verify the specific programme against IRCC’s current requirements before you pay a deposit — not after.',
  },
  {
    q: 'An agent has offered me a study-to-PR package. Is that real?',
    a: 'No one can package a permanent residence outcome, because it depends on multiple independent government decisions and on your own performance in the Canadian labour market. What can be sold honestly is admission support, an application prepared properly, and an assessment of whether the plan is realistic. Any offer that describes permanent residence as included is describing something the seller cannot deliver.',
  },
  {
    q: 'What happens if I finish and cannot find skilled work?',
    a: 'The work permit expires and you are expected to leave. This is an ordinary outcome, not an exotic failure case, and it is why the honest question to ask before enrolling is whether you could afford the study on its own terms if permanent residence never followed.',
  },
];

export default function StudyToPermanentResidencePage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study to permanent residence"
        title={
          <>
            A study permit is not{' '}
            <span className="text-gold-300">a purchased PR pathway</span>
          </>
        }
        subtitle={
          <>
            The route from studying in Canada to permanent residence is real, but it is a sequence of
            separate decisions across several years, and it can end at any one of them. Here is how it
            actually runs, and where it breaks.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE SHAPE OF THE ROUTE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="Four stages, four separate decisions"
        />
        <Prose>
          <p>
            International graduates do become permanent residents of Canada. The mechanism is not a
            student-to-resident programme, though — there is no such thing. What exists is a chain: you
            study, you apply for a work permit that some graduates qualify for, you use it to build
            skilled Canadian work experience, and that experience is what an economic immigration
            programme values.
          </p>
          <p>
            Each link is its own application, assessed on its own criteria, by a decision-maker who owes
            nothing to the previous stage. Completing a degree does not entitle you to the work permit.
            Holding the work permit does not entitle you to skilled employment. Holding skilled
            employment does not entitle you to permanent residence.
          </p>
          <p>
            That is not pessimism, it is the structure. Understanding it changes the decisions you make
            at the very start — which institution, which programme, which province — because those are
            the choices that quietly determine whether the later stages are available to you at all.
          </p>
        </Prose>
      </Section>

      {/* ===================== STAGES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What each stage actually is"
          title="Nothing here carries over automatically"
          subtitle="Every stage is applied for. Every stage can be refused. The one people assume is automatic is the second."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="The decision that matters most is made before you leave Pakistan">
            <p>
              Whether a post-graduation work permit will be available to you depends on the institution
              being designated, on the programme itself being one that leads to a permit, and — for
              certain categories of programme — on the field of study and on language requirements IRCC
              applies to the permit application. Those rules have been revised more than once, and IRCC
              can revise them again.
            </p>
            <p>
              A great many people discover this after enrolling. The fee is paid, the year is spent, and
              the permit that the whole plan rested on is not available for that programme. Verify the
              specific programme at the specific institution against IRCC’s current requirements before
              you pay anything, and see{' '}
              <Link
                href="/study-in-canada/designated-learning-institutions"
                className="font-semibold text-accent-500 link-underline"
              >
                designated learning institutions
              </Link>{' '}
              and{' '}
              <Link
                href="/work-permits/post-graduation"
                className="font-semibold text-accent-500 link-underline"
              >
                the post-graduation work permit
              </Link>{' '}
              for the detail.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="In this order, and each step gates the next"
          subtitle="There is no way to skip forward, and several of the steps have deadlines that cannot be reopened once missed."
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

      {/* ===================== WHERE PR IS DECIDED ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The final stage"
              title="Where permanent residence is actually decided"
            />
            <Prose>
              <p>
                Two broad doors are open to graduates who have built Canadian experience. The federal one
                is Express Entry, where{' '}
                <Link
                  href="/express-entry/canadian-experience-class"
                  className="font-semibold text-accent-500 link-underline"
                >
                  the Canadian Experience Class
                </Link>{' '}
                is aimed at exactly this profile: skilled work performed in Canada. Its eligibility
                requirements — including how much experience is required, and what role a job offer or
                formal education plays — are set by IRCC and are{' '}
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/works.html"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  published and revised by IRCC
                </a>
                . Check them at the source before you build a plan around them.
              </p>
              <p>
                The other is a{' '}
                <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                  provincial nomination
                </Link>
                . Most provinces operate streams aimed at graduates of their own institutions or at
                occupations they are short of. This is why the province you study in is a strategic
                choice rather than a lifestyle one — and why staying in that province afterwards usually
                matters to the stream you are relying on.
              </p>
              <p>
                Selection criteria, categories and stream definitions change. We do not publish scores,
                thresholds or category lists on this page, because a figure that is correct today is a
                trap on a page you read next year.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What the experience has to look like" title="Not all work counts" />
            <ul className="mt-6 space-y-4">
              {[
                ['Skilled occupation', 'Economic programmes count experience in skilled occupational categories. Work outside them may not count toward the route at all, however hard it was.'],
                ['Performed in Canada', 'For the class most graduates use, the experience must have been gained in Canada, not abroad.'],
                ['Properly authorised', 'The work must have been done with authorisation. Hours worked outside the conditions of your permit do not become valid later.'],
                ['Not while a full-time student', 'Experience gained while studying full-time, including co-op terms, is normally excluded — one of the most common miscalculations we see.'],
                ['Documented as you go', 'Reference letters, pay records and contracts describing real duties. Reconstructing years of employment evidence at the end is where files fall apart.'],
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
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>The programme never led to a work permit.</strong> The single most expensive mistake.
            An institution or programme was chosen on price, on ease of admission, or on an agent’s
            recommendation, and it turns out not to support a post-graduation work permit. The money is
            gone and the plan has no second stage.
          </p>
          <p>
            <strong>Status lapsed somewhere in the middle.</strong> A permit not extended in time, a term
            taken part-time, a gap between programmes. These feel minor while they are happening and are
            fatal to eligibility later. See{' '}
            <Link
              href="/study-in-canada/study-permit-extension"
              className="font-semibold text-accent-500 link-underline"
            >
              study permit extensions
            </Link>
            .
          </p>
          <p>
            <strong>The work permit application window was missed.</strong> There is a limited period
            after you receive written confirmation of completion in which the application can be made,
            and there are conditions on the status you must have held during it. It is not extendable on
            sympathy, and people lose the route to an administrative delay in getting a transcript. The
            current length of that window, and the status conditions attached to it, are published by
            IRCC on its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              post-graduation work permit pages
            </a>
            .
          </p>
          <p>
            <strong>Years of work that do not count.</strong> Graduates take whatever employment is
            available, work extremely hard, and discover at the permanent residence stage that the
            occupation sits outside the skilled categories the programme counts. Nothing about that
            experience can be converted retroactively.
          </p>
          <p>
            <strong>The study permit itself was built as a PR application.</strong> A study permit is a
            temporary-residence application, and the officer has to be satisfied you would leave at the
            end of your authorised stay. To be clear about a point that is widely misstated: hoping to
            immigrate later does not by itself sink a study permit. Canadian law expressly contemplates
            &ldquo;dual intent&rdquo; — under{' '}
            <a
              href="https://laws.justice.gc.ca/eng/acts/i-2.5/section-22.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              section 22(2) of the Immigration and Refugee Protection Act
            </a>
            , an intention to become a permanent resident does not preclude you from becoming a temporary
            resident, provided the officer is satisfied you will leave if required. What does sink files
            is a study plan, a funding picture or a choice of programme that does not hold together as a
            genuine reason to study. See{' '}
            <Link
              href="/study-in-canada/refusals"
              className="font-semibold text-accent-500 link-underline"
            >
              study permit refusals
            </Link>
            .
          </p>
          <p>
            <strong>Documents someone else prepared.</strong> Inflated funds, invented experience letters,
            an admission arranged with claims you cannot support. Misrepresentation lands on the
            applicant, carries a bar on future applications, and can surface at any stage of the
            multi-year sequence — including after you have already built a life in Canada. If this has
            already happened to you, do not try to resolve it from a web page: see{' '}
            <Link
              href="/refusals/misrepresentation"
              className="font-semibold text-accent-500 link-underline"
            >
              misrepresentation
            </Link>{' '}
            and get advice from a licensed representative.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you could not accept finishing with only the qualification, do not start">
            <p>
              This route does not suit anyone who is borrowing heavily, selling property, or committing
              family savings on the understanding that permanent residence is the return. It is a
              multi-year sequence with a real chance of ending at any stage, and the only thing you are
              certain to receive in exchange for the money is the education itself.
            </p>
            <p>
              It also tends not to suit applicants who already hold strong skilled experience and
              language results — for them, applying directly under an economic programme may be a
              shorter and less expensive question to ask first, before paying for a degree they may not
              need. It does not suit people whose
              intended occupation is not one Canadian provinces are short of, and it does not suit anyone
              choosing a programme for admission ease rather than for what it leads to.
            </p>
            <p>
              We would rather tell you on the first call that studying is the wrong instrument for your
              goal than take a fee for a plan that was never going to reach the end of the chain. If your
              real objective is permanent residence, start at{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>{' '}
              and see whether you already qualify. Several government decisions sit between you and this
              outcome and none of them is ours to make, which is why we publish a{' '}
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

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Requirements, lists and criteria"
        />
        <Prose>
          <p>
            Eligible programmes and fields of study, language requirements, application windows,
            selection criteria and provincial stream definitions all change, sometimes at short notice
            and sometimes mid-way through a student’s programme. We deliberately do not publish those
            details here, because a page you read a year from now would be quietly wrong.
          </p>
          <p>
            IRCC publishes the current post-graduation work permit requirements, the designated
            institution list and the economic programme criteria on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
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
            . Provincial nomination criteria are published by each province separately. Check them at the
            source, on the day you need them, and again before each stage of the sequence.
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
        eyebrow="Before you pay a tuition deposit"
        title="Find out whether studying is the right instrument for your goal"
        subtitle="Tell us your qualifications, your work history and your budget. We will tell you honestly whether the study route makes sense for you, whether a direct economic application is the better question, and what the realistic sequence looks like."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether studying in Canada is a realistic route to permanent residence in my situation."
      />
    </>
  );
}
