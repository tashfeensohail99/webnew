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
 * Caregiver immigration routes.
 *
 * Two things this page has to do. First, describe the route structurally, because
 * the named programmes in this space are pilots — they open, fill, close, and get
 * replaced under new names. Naming one as though it were permanent is the single
 * easiest way to mislead a reader here.
 *
 * Second, and more urgently: caregiver placement is one of the most heavily
 * defrauded areas in Pakistani migration. Sold job offers, invented families,
 * "registration fees" for intakes that are not open. That warning is the reason
 * the page exists.
 */
export const metadata: Metadata = {
  title: 'Caregiver Immigration Routes to Canada',
  description:
    'How Canadian caregiver routes work: home child care and home support, the job offer, language and education rules, and a warning on paid placements.',
  alternates: { canonical: '/caregivers' },
};

const PAGE = 'caregivers';

const TWO_KINDS = [
  {
    icon: 'user' as const,
    kicker: 'Care for children',
    title: 'Home child care',
    body: 'Caring for children in a private home — the family’s home, not a nursery or daycare centre. The work is supervision, routine, meals, safety and daily care of the child, in the household setting.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Care for people with high needs',
    title: 'Home support work',
    body: 'Supporting an elderly person, or a person with a disability or a chronic illness, in their own home. Personal care, mobility, medication routine, household tasks that make independent living possible.',
  },
];

const REQUIREMENT_KINDS = [
  {
    icon: 'doc' as const,
    kicker: 'The offer',
    title: 'A genuine offer of home care work',
    body: 'Work in a private home, from an employer who actually needs the care provided — a family, or in some designs an organisation placing workers into homes. Not agency care, not a facility. How many hours the offer must be for is set by the route in force.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Language',
    title: 'Tested English or French',
    body: 'A result from an IRCC-approved test. The minimum band, the skills tested and how recent the result must be are set by whichever route is open — and they have changed between programmes. It is a tested minimum, never a self-assessment.',
  },
  {
    icon: 'building' as const,
    kicker: 'Education',
    title: 'Education, assessed against Canadian standards',
    body: 'A Canadian education equivalency is required. The level demanded has moved between programmes, so read it at IRCC for the route that is open. A Pakistani certificate is proved by an educational credential assessment from a designated organisation, not by the certificate alone.',
  },
  {
    icon: 'check' as const,
    kicker: 'Experience or training',
    title: 'Relevant care experience or training',
    body: 'Recent, provable, paid experience doing this kind of work — or recognised training in it. Care for your own family members is normally not what is meant.',
  },
];

const STEPS = [
  {
    title: 'Establish that a route is actually open',
    body: 'Caregiver routes are usually run as pilots with a defined application window and a limit on how many applications are accepted. There have been long stretches with no open intake at all. This is the first question, not the last.',
  },
  {
    title: 'Find real work, through a real employer',
    body: 'A household or organisation that genuinely needs home care and is willing to employ you on written terms. Depending on the route in force, an employer may or may not need a labour market assessment behind the offer.',
  },
  {
    title: 'Prove language and education',
    body: 'Book the approved language test. Get the credential assessment started early — assessments depend on Pakistani institutions releasing documents directly, which is often the slowest part of the file.',
  },
  {
    title: 'Assemble the experience record',
    body: 'Employment letters with duties, dates, hours and pay, from employers who can be contacted. Vague letters are the most common weakness in Pakistani caregiver files.',
  },
  {
    title: 'File within the window',
    body: 'An intake with a cap closes once the cap is reached, and that can happen quickly. A file already assembled when the window opens is in a very different position from one being started then.',
  },
  {
    title: 'Assessment, admissibility, decision',
    body: 'Medical examination and police certificates apply. Caregiving involves vulnerable people, so admissibility is examined carefully.',
  },
];

const FAQS = [
  {
    q: 'Someone is offering me a caregiver job in Canada for a fee. Should I pay?',
    a: 'No. A person who genuinely needs care in their home does not sell the job to the worker. Canadian provinces regulate recruitment and generally prohibit a recruiter from charging a worker to find them employment — the detail varies by province, and the province you would work in publishes its own rules. Separately, where the offer involves a labour market impact assessment, Employment and Social Development Canada prohibits the employer or their representative from recovering that cost from the worker. Caregiver placement is among the most heavily defrauded areas we see from Pakistan. Treat a price attached to a job offer as the reason to stop.',
  },
  {
    q: 'How do I check whether the job offer is real?',
    a: 'Speak directly to the household or organisation you would work for, by video, without the agent present or interpreting. Ask who you would be caring for, where, and on what hours and wage. A genuine employer answers those questions easily. An arrangement where all contact runs through a middleman, or where the employer is unreachable until you have paid, is not one to proceed on.',
  },
  {
    q: 'Can I apply as a caregiver without any job offer?',
    a: 'Generally no. Caregiver routes are built around care that someone in Canada actually needs. Where no caregiver intake is open, the alternatives are the ordinary work permit and permanent residence routes, which assess you on different criteria entirely.',
  },
  {
    q: 'Does looking after my own parents or children count as experience?',
    a: 'Normally not. These routes look for paid work as a caregiver, provable through an employer. Unpaid family care is real work but it is usually not what the requirement means, and presenting it as employment creates a misrepresentation problem.',
  },
  {
    q: 'Do these routes lead to permanent residence?',
    a: 'That has been the design intent of recent caregiver programmes, and the more recent ones were built to grant permanent residence at or near arrival rather than after years of work in Canada. But the structure differs from programme to programme, and older versions required qualifying work in Canada first. Which structure applies to you depends entirely on which route is in force when you apply.',
  },
  {
    q: 'Can my family come with me?',
    a: 'Caregiver routes have commonly allowed a spouse or partner and dependent children to be included, in a way that many work permit routes do not. The specific entitlement varies by programme and is set out in the instructions for the route that is open. Confirm it before you plan around it.',
  },
  {
    q: 'What are the current caps, fees and language scores?',
    a: 'IRCC publishes those, and they change with each version of the programme. We do not print them here, because a caregiver applicant relying on a figure from an expired pilot is exactly how people file the wrong thing. Read them at the source on the day you apply.',
  },
  {
    q: 'Can you guarantee me a caregiver visa?',
    a: 'No. No one can. Whether an intake is even open is not within anyone’s control, and the decision is a visa officer’s. What we can do is tell you before you spend money whether your experience, language and education realistically fit this route.',
  },
];

export default function CaregiversPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Caregiver routes"
        title={
          <>
            Caring for children or for people who{' '}
            <span className="text-gold-300">need help at home</span>
          </>
        }
        subtitle={
          <>
            Canada has long run immigration routes for caregivers working in private homes. The named
            programmes change often — they open, fill and close. The structure underneath them is
            stable, and that is what this page explains.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE WARNING, FIRST ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Read this before anything else"
          title="Nobody should be selling you a caregiver job"
        />
        <div className="mt-8">
          <Callout title="A price attached to a caregiver placement is the warning sign">
            <p>
              A family that needs someone to look after their child, or their elderly mother, does not
              charge the worker for the privilege. Nor does a legitimate home care employer. Canadian
              provinces regulate recruitment and generally prohibit charging a worker a fee to find
              them employment — the employer pays the recruiter, not the worker. The precise rule is
              provincial, and the province you would work in publishes it. Where a labour market
              impact assessment sits behind the offer,{' '}
              <a
                href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Employment and Social Development Canada
              </a>{' '}
              separately prohibits the employer or their representative from recovering that cost
              from you.
            </p>
            <p>
              This is, in our experience, the most heavily defrauded area of Pakistani migration to
              Canada. The recurring patterns are an invented family, a real family who never agreed to
              anything, a “registration fee” for an intake that is not open, and an offer letter that
              exists only as a PDF. Money paid for these is not recovered. Worse, a file built on
              documents you did not write is misrepresentation, and that carries a bar on applying
              again — which lands on you, not on the agent.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE TWO KINDS OF WORK ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What the work is"
          title="Two kinds of care, both inside a private home"
          subtitle="Canadian caregiver routes have consistently distinguished between these two occupations. Which one your experience falls under matters, because the offer, the duties and the evidence all follow from it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TWO_KINDS.map((k) => (
            <FeatureCard key={k.title} icon={<Icon name={k.icon} />} kicker={k.kicker} title={k.title}>
              {k.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              The distinction that trips people up is the setting. These are routes for care delivered
              in someone’s home. Working as an attendant in a hospital, a long-term care facility or a
              licensed daycare centre is care work, but it is generally assessed under different
              occupations and different immigration routes. If that describes your experience, say so
              early — it changes which route you should be looking at.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== WHAT IS REQUIRED, IN KIND ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What is required, in kind"
          title="The four things these routes have consistently asked for"
          subtitle="The thresholds move with each programme, and only IRCC’s page for the open route states the current ones. The categories have been more stable."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REQUIREMENT_KINDS.map((r) => (
            <FeatureCard key={r.title} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              We do not print the thresholds — the test score, the education level, how much
              experience and over what period — because they have been reset with each version of the
              programme, and an applicant preparing against an expired pilot’s numbers is the single
              most common way money gets wasted here. The binding figures for whatever route is open
              are published by IRCC on its{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/caregivers.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                caregiver immigration pages
              </a>
              . Read them there, on the day you apply.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== HOW PROGRAMME DESIGN HAS MOVED ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why we will not name a programme"
              title="These routes are pilots, and pilots end"
            />
            <Prose>
              <p>
                Caregiver immigration in Canada has been delivered through a long succession of
                time-limited pilot programmes. Each has its own name, its own eligibility settings, its
                own application window and usually its own cap on how many applications are accepted.
                When a pilot ends it is sometimes replaced, sometimes after a gap, and sometimes on
                materially different terms.
              </p>
              <p>
                So a page that tells you “apply to programme X” is worth very little six months later,
                and a great deal of harm in this space is done by advice that is simply out of date.
                What we can tell you reliably is the shape of the thing: home-based care work, a genuine
                employer, tested language, assessed education, provable experience.
              </p>
              <p>
                Whether an intake is open on the day you read this is a question for IRCC’s own pages,
                and it is the first thing we check before anyone starts spending.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading
              eyebrow="The direction of travel"
              title="Permanent residence, earlier"
            />
            <Prose>
              <p>
                Older caregiver programmes worked on a two-stage model: you came on a work permit,
                completed a qualifying period of caregiving work in Canada, and only then applied for
                permanent residence. The weakness of that model was well documented — a worker whose
                status depended on completing hours for a particular employer was in a poor position to
                complain about how they were treated.
              </p>
              <p>
                More recent programme design has moved away from that, toward granting permanent
                residence at or close to arrival, so that the worker is not dependent on finishing a
                period of work to secure status. Whether that holds in the next redesign is not
                something anyone can tell you in advance.
              </p>
              <p>
                It is a direction, not a promise. Which model applies to you is set by the route that is
                actually open when you apply, and you should read that route’s own instructions rather
                than assume.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How a caregiver file is actually built"
          subtitle="Most of this work happens before an intake opens. That is the point."
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
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Paying for the job.</strong> The dominant pattern, and the most expensive. The fee
            is charged, the employer is unreachable, and there was never a household expecting you.
          </p>
          <p>
            <strong>Experience letters that prove nothing.</strong> A letter saying someone “worked as
            a caregiver” with no duties, no hours, no wage and no contactable employer does not
            establish experience. Care work in Pakistan is frequently informal and cash-paid, which
            makes this genuinely hard — but it is better to face that early than to submit a file that
            cannot survive verification.
          </p>
          <p>
            <strong>Facility experience presented as home care.</strong> Hospital, clinic or daycare
            work is not home-based care. Restating it as though it were is a misrepresentation risk,
            and it is easily checked.
          </p>
          <p>
            <strong>Starting when the window opens.</strong> Language tests and credential assessments
            sit with third parties and are not quick. Where an intake is capped, it can close well
            before a file started at announcement is ready.
          </p>
          <p>
            <strong>Assuming last year’s rules.</strong> Applicants regularly prepare against a pilot
            that has already been replaced, then file against criteria that no longer exist.
          </p>
          <p>
            <strong>Ignoring how you will be treated.</strong> Live-in arrangements with a single
            private employer can leave a worker isolated. Written terms, agreed hours, a clear wage and
            somewhere to raise a problem are not luxuries in this route — they are the difference
            between a good outcome and a bad one.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="This is care work, and it is assessed as care work">
            <p>
              It does not suit someone who has never done this work and is looking at it as the easiest
              available door into Canada. The experience requirement is real and it is verified, and
              manufacturing it is the fastest way to a misrepresentation finding. If your background is
              in another field, look at the routes built for that field instead — the{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>{' '}
              routes, a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee
              </Link>{' '}
              stream, or an{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                employer-based work permit
              </Link>
              .
            </p>
            <p>
              It does not suit someone unwilling or unable to take a tested language result and a
              credential assessment. Both are hard requirements, not paperwork that can be argued
              around.
            </p>
            <p>
              It does not suit someone who needs certainty of timing. Intake windows and caps are set by
              policy, not by effort, and there have been extended periods with nothing open at all.
            </p>
            <p>
              And it does not suit anyone whose only route to a job offer runs through a person charging
              them for it. We would rather tell you that on the first call than take a fee for a file
              built on a document that was never real. That is why we publish a{' '}
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
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Programme status, criteria and fees"
        />
        <Prose>
          <p>
            Whether an intake is open, what it is called, what the language and education thresholds
            are, how many applications will be accepted and what it costs — all of that is set by IRCC
            and changes with each version of the programme. We deliberately do not reproduce those
            figures, because in this particular area an out-of-date number is what causes people to file
            the wrong thing or pay the wrong person.
          </p>
          <p>
            IRCC publishes the current caregiver programme position on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/caregivers.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and the underlying law sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Recruitment and employment standards are provincial — the province you would work in
            publishes the rules on what a recruiter may and may not charge you.
          </p>
          <p>
            If no caregiver intake is open, the honest alternatives are the ordinary{' '}
            <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
              work permit
            </Link>{' '}
            routes — including the{' '}
            <Link
              href="/work-permits/caregivers"
              className="font-semibold text-accent-500 link-underline"
            >
              caregiver work permit
            </Link>{' '}
            position — and{' '}
            <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
              provincial nominee
            </Link>{' '}
            streams, some of which recruit in health and care occupations. Those are assessed on
            entirely different criteria, and they are worth looking at properly rather than waiting
            indefinitely for a pilot to reopen.
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
        eyebrow="Before you pay anyone"
        title="Check whether a caregiver route is open, and whether you fit it"
        subtitle="Tell us what care work you have actually done, for whom, and what you can prove. We will tell you honestly whether this route is realistic for you — and if it is not, which one might be."
        page={PAGE}
        waMessage="Hi, I’d like to know whether a Canadian caregiver route is realistic in my situation."
      />
    </>
  );
}
