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
 * Caregiver work permits — home child care and home support work.
 *
 * Two things this page must land. First: the employer here is usually a private
 * household, which changes what gets assessed and how fragile the arrangement is.
 * Second: caregiver routes attract placement-fee fraud and "just do a bit extra"
 * employers, and both of those destroy the permanent residence side later.
 */
export const metadata: Metadata = {
  title: 'Caregiver Work Permits for Canada',
  description:
    'Work permits for home child care and home support: the job offer, a household as employer, language and education, and the placement-fee risks to avoid.',
  alternates: { canonical: '/work-permits/caregivers' },
};

const PAGE = 'work-permits-caregivers';

const THE_TWO_ROLES = [
  {
    icon: 'user' as const,
    kicker: 'Home child care',
    title: 'Caring for children in a home',
    body: 'Supervising and caring for children in the child’s own home — routines, meals, school runs, hygiene, activities, and the household tasks that relate directly to the children.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Home support',
    title: 'Caring for adults in a home',
    body: 'Assisting a person who is elderly, convalescent, disabled or otherwise in need of care, in their own home — personal care, mobility, meals, medication reminders, companionship.',
  },
  {
    icon: 'building' as const,
    kicker: 'Who employs you',
    title: 'A household, or an agency',
    body: 'The employer may be the family itself, or an agency or care organisation that places you. The two are assessed very differently, and they carry different risks for you.',
  },
  {
    icon: 'doc' as const,
    kicker: 'What you actually hold',
    title: 'A permit with conditions on it',
    body: 'Your permit names what you may do, for whom, and where. Those conditions are the boundary of what you are lawfully allowed to work at — not a formality.',
  },
];

const STEPS = [
  {
    title: 'A household or organisation needs care',
    body: 'The route begins with a real, identified person needing care — a specific child, or a specific adult who needs support at home. There is no caregiver permit without one.',
  },
  {
    title: 'The employer obtains labour market approval',
    body: 'In most cases the employer applies to ESDC for a Labour Market Impact Assessment covering the caregiving position, including the wage and the working conditions they are committing to.',
  },
  {
    title: 'A written offer of employment',
    body: 'You receive a signed offer setting out the duties, hours, wage, overtime, time off, and the address where the work is performed. Read it as the document you will be held to.',
  },
  {
    title: 'You apply to IRCC for the permit',
    body: 'Your own application: the offer, the labour market approval reference, evidence of relevant training or experience, language evidence where the route calls for it, and medical and police requirements.',
  },
  {
    title: 'Medical and background checks',
    body: 'Caregiving involves close contact with children or vulnerable adults, so an upfront medical examination is normal, and background checks are taken seriously.',
  },
  {
    title: 'The permit is issued, with conditions',
    body: 'If approved, the permit is issued naming the employer and occupation. Working outside those terms is unauthorised work, whoever asked you to do it.',
  },
];

const FAQS = [
  {
    q: 'Do I need to live in the employer’s home?',
    a: 'Generally no. ESDC has moved away from live-in-only arrangements and may refuse to process an employer’s labour market assessment application for an in-home caregiver position offered exclusively on a live-in basis. A live-in arrangement is possible where it genuinely suits both sides, but it should be by agreement and there are conditions attached. If an offer states that you must live in, question it before you sign anything, and read the current employer requirements on canada.ca.',
  },
  {
    q: 'What education and language level do I need?',
    a: 'Caregiving is assessed on whether you can actually do the work: relevant training or documented experience in child care or home support, and enough English or French to take instructions, follow medical or safety directions, and communicate in an emergency. The formal thresholds differ between the temporary work permit and the permanent residence side, and they are revised — IRCC publishes the current requirements for whichever route you are applying under.',
  },
  {
    q: 'An agency in Pakistan wants a fee to arrange a caregiver placement in Canada. Is that legitimate?',
    a: 'Treat it as a serious warning sign. Under the employer conditions in the Immigration and Refugee Protection Regulations, an employer — and anyone recruiting on their behalf — must not charge or recover recruitment fees from the worker, and must not recover the labour market assessment processing fee from you either. Several provinces additionally license recruiters and restrict what they may charge, so check the rules of the province you would be working in. Money paid abroad to secure a Canadian caregiving job frequently buys either nothing at all or a fabricated employer, and a fabricated employer can become a misrepresentation finding against you. Nobody can sell you a place in this route.',
  },
  {
    q: 'My employer wants me to clean their office or care for a relative on weekends. Can I?',
    a: 'Not unless your permit covers it. Your permit names an employer, an occupation and normally a location. Work outside those terms is unauthorised work even when your employer asks for it, even if you are paid, and even if it seems small. It can cost you your status and it can damage a later permanent residence application. Raise it, get advice, and do not simply comply.',
  },
  {
    q: 'Does the work permit lead to permanent residence?',
    a: 'Caregiving experience in Canada has historically been a route to permanent residence, but the federal caregiver pathways have been redesigned more than once and their intake status changes. Do not accept a caregiver posting on the assumption that permanent residence automatically follows — check what is actually open at the time you would be applying.',
  },
  {
    q: 'Can I bring my spouse and children?',
    a: 'Whether family members can accompany you, and whether your spouse can obtain an open work permit, depends on the occupation, the wage level and the rules in force when you apply. Some caregiver postings support family accompaniment and some do not, so establish this before you accept a job rather than after you arrive.',
  },
  {
    q: 'Can I change employers if the household is not what I expected?',
    a: 'An employer-specific permit ties you to the named employer, so moving generally requires a new authorisation rather than simply resigning. There are also protections for workers in abusive situations, which exist precisely because this route creates dependence on a single household. If a placement has gone wrong, get advice quickly rather than staying because you believe you have no option.',
  },
  {
    q: 'Can you guarantee me a caregiver placement or a permit?',
    a: 'No. We do not place workers with employers and we do not sell job offers. What we can do is assess whether an offer you have been given is credible, whether your experience supports the occupation, and whether the route is realistic for you before you spend money on it.',
  },
];

export default function CaregiverWorkPermitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Caregiver work permits"
        title={
          <>
            Caring for a family in Canada —{' '}
            <span className="text-gold-300">and what protects you while you do it</span>
          </>
        }
        subtitle={
          <>
            Work permits for home child care and home support work rest on one household needing one
            person. That makes the arrangement personal rather than corporate — and it leaves you
            exposed if the offer is fake or the duties quietly expand.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT THE ROUTE IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="What a caregiver work permit actually is"
        />
        <Prose>
          <p>
            Canada allows foreign workers to come and provide care inside a private home. In practice
            that covers two kinds of work: caring for children in the child’s own home, and supporting
            an adult who is elderly, ill, convalescent or disabled in their own home.
          </p>
          <p>
            The mechanics are the same as any other employer-driven work permit. A Canadian employer
            needs the role filled, obtains labour market approval for it in most cases, and issues a
            written offer. You then apply to IRCC for a permit on the strength of that offer. If the
            employer’s side has not happened, you do not yet have an application —{' '}
            <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
              how the labour market assessment works
            </Link>{' '}
            explains why that step is not yours to buy or to arrange.
          </p>
          <p>
            What makes caregiving different is who the employer is. Very often it is not a company
            with an HR department and a payroll system. It is a family. That changes what gets
            examined, and it changes what can go wrong once you are living inside the arrangement.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE PIECES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The moving parts"
          title="The role, the employer, and the conditions on your permit"
          subtitle="Most caregiver problems we are asked about trace back to one of these four being misunderstood at the start."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {THE_TWO_ROLES.map((r) => (
            <FeatureCard key={r.title} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== HOUSEHOLD AS EMPLOYER ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="A household is not a company"
              title="How the employer side is assessed"
            />
            <Prose>
              <p>
                When the employer is a private family, the assessment is still about whether the
                position is genuine and whether the terms are acceptable — but the evidence looks
                different. There has to be a real person needing care, a household that can actually
                pay the wage it is promising, and working conditions that meet Canadian standards
                rather than whatever the family finds convenient.
              </p>
              <p>
                Fee treatment also differs for households: some families hiring in-home care are
                relieved of the employer processing fee, depending on who is being cared for and, in
                some cases, household income. ESDC publishes the current criteria and amounts, and
                those costs are the employer’s concern in any event — never yours to pay.
              </p>
              <p>
                Whether the employer is a family or an agency matters to you. An agency placement can
                be more stable and better documented; it can also mean the entity on your permit is not
                the household you actually work in. Establish which one you are dealing with before you
                sign.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading
              eyebrow="What you should be able to point to"
              title="Before you accept an offer"
            />
            <ul className="mt-6 space-y-4">
              {[
                ['A named person needing care', 'A specific child, or a specific adult with an identified need — not a vague household role.'],
                ['A written offer you have read', 'Duties, hours, wage, overtime, rest days, and the address where the work is performed, in writing.'],
                ['Employment standards, not goodwill', 'Hours, overtime and time off are governed by the provincial employment standards where you will live, not by what the family prefers.'],
                ['No live-in-only arrangement', 'Live-in should not be imposed as a condition of the job. If you do live in, it should be by agreement and on set terms — check the current ESDC employer requirements.'],
                ['No fee flowing from you', 'You should not be paying a recruitment or placement fee, and you should never be repaying the employer’s costs.'],
                ['Evidence you can do the work', 'Training or documented caregiving experience that matches the occupation on the offer.'],
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
          title="How the process runs, in order"
          subtitle="The first three steps belong to the employer. You have an application of your own only at step four."
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

      {/* ===================== LANGUAGE AND EDUCATION ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Language and education"
          title="What is expected of you, and why"
        />
        <Prose>
          <p>
            Caregiving is assessed on capability rather than prestige. An officer is asking a practical
            question: can this person actually perform this job, safely, in a Canadian home?
          </p>
          <p>
            That means <strong>relevant training or experience</strong> — formal caregiving,
            nursing-assistant or early-childhood training, or documented employment doing the same work
            elsewhere. Experience letters should come from the employer who actually employed you, on
            their letterhead, describing duties that match the occupation. Letters written to order by
            a third party are a credibility problem, and an officer who doubts your experience
            evidence can refuse on that basis.
          </p>
          <p>
            It also means <strong>enough English or French</strong> to be safe. A caregiver has to
            understand instructions about a child’s allergy or an adult’s medication, and be able to
            reach emergency services and explain the situation. Where a test result is required, the
            accepted tests and the level are set by the route you are applying under, and both are
            revised periodically — read them at IRCC rather than from a recruiter’s message.
          </p>
          <p>
            And it means <strong>education that supports the claim</strong>. Where a route sets an
            education requirement, foreign credentials are normally supported by an assessment against
            Canadian standards. The requirement is not universal across every caregiver route, which is
            exactly why you should confirm which route your offer sits under before you invest in
            paperwork.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE TWO WARNINGS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Read this part twice"
          title="The two things that ruin caregiver files"
        />

        <div className="mt-8 space-y-8">
          <Callout title="Never pay for a caregiver placement">
            <p>
              Caregiver postings are an easy target for placement fraud, because the offer is simple
              to fake — one family, one letter, no company to check. Fake caregiving offers sold to
              applicants in Pakistan are something we are asked about regularly.
            </p>
            <p>
              The position is straightforward. Under the employer conditions in the{' '}
              <a
                href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Immigration and Refugee Protection Regulations
              </a>
              , an employer and anyone recruiting for them must not charge or recover recruitment fees
              from the worker, and must not recover the labour market assessment processing fee from
              you. Several provinces additionally license recruiters and restrict what they may
              charge. So a demand for payment to secure a caregiving placement is either theft, an
              invented employer, or a real employer being pushed into breaking the rules that bind
              them. Any of the three can end with a misrepresentation finding and a bar on applying
              again — against you, not against the person who took the money.
            </p>
            <p>
              A legitimate recruiter is paid by the employer. If the money is flowing from you, stop.
            </p>
          </Callout>

          <Callout title="Do not work outside the terms of your permit">
            <p>
              This is the quieter risk, and it usually arrives with kindness rather than pressure. The
              family asks you to clean their second property. To help at the shop on Saturdays. To care
              for a grandparent in another house. To stay on unpaid after the hours you were contracted
              for, because you are already there.
            </p>
            <p>
              Your permit names an employer, an occupation and normally a location. Work outside those
              terms is unauthorised work even when your employer asked for it, even when you are paid
              for it, and even when refusing feels ungrateful. It puts your status at risk, and it can
              undermine a later permanent residence application built on this same experience.
            </p>
            <p>
              Two practical habits protect you: keep your own record of hours worked and duties
              performed from day one, and raise a change in duties when it starts rather than after a
              year of it. If an employer is withholding your documents, threatening your status, or
              expecting work you were never hired for, that is a situation with remedies — take advice
              rather than enduring it.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you are treating caregiving as a shortcut, reconsider">
            <p>
              This route does not suit people who have no genuine caregiving background and are looking
              at it because they believe the standard is low. The work is physically and emotionally
              demanding, the experience letters are checked, and an occupation that does not match your
              documented history is a refusal waiting to happen.
            </p>
            <p>
              It does not suit people who have no real employer. There is no caregiver application you
              can file on your own, and nothing you can buy that creates one.
            </p>
            <p>
              It does not suit someone taking the job purely as a route to permanent residence. The
              federal caregiver pathways have been redesigned more than once and their intake status
              changes; committing years of your life to a household on the assumption that a specific
              pathway will be open at the end of it is a risk you should take with your eyes open. See{' '}
              <Link href="/caregivers" className="font-semibold text-accent-500 link-underline">
                the permanent residence side of caregiving
              </Link>{' '}
              for how that part works.
            </p>
            <p>
              And it does not suit anyone who cannot accept working alone inside one household, often
              far from a community, dependent on a single employer for status. That dependence is real,
              and it is the reason we would rather talk you out of an unsuitable placement than process
              it. It is also why we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>
              . If an employer-driven route is not right for you, the{' '}
              <Link
                href="/work-permit-canada"
                className="font-semibold text-accent-500 link-underline"
              >
                wider work permit picture
              </Link>{' '}
              is the better starting point.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Requirements, fees and intake status"
        />
        <Prose>
          <p>
            Language levels, education requirements, fee exemptions for households, and which caregiver
            pathways are accepting applications all change. We deliberately do not print those figures
            here, because a number that is correct today becomes a liability on a page you might read
            next year.
          </p>
          <p>
            IRCC publishes the current caregiver requirements and intake status on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/caregivers.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , ESDC publishes the employer-side rules for{' '}
            <a
              href="https://www.canada.ca/en/employment-social-development/services/foreign-workers/caregiver/requirements.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              hiring an in-home caregiver
            </a>
            , and the conditions imposed on employers sit in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . If you are in an abusive situation with an employer, IRCC publishes what is available to
            you through the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/vulnerable-workers.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              open work permit for vulnerable workers
            </a>
            . Your day-to-day rights at work — hours, overtime, rest days, notice — come from the
            employment standards legislation of the province you will live in. Read all of it at the
            source, on the day you need it.
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
        eyebrow="Before you sign or pay anything"
        title="Have the offer checked before you commit years to it"
        subtitle="Send us the offer, the employer’s details and your caregiving history. We will tell you whether it is credible, whether your experience supports the occupation, and what the conditions on the permit would actually mean for you."
        page={PAGE}
        waMessage="Hi, I have a caregiver job offer for Canada and I’d like it reviewed before I commit."
      />
    </>
  );
}
