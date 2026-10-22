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
 * Canadian study permit — the application end to end.
 *
 * The organising idea: applicants treat this as a document-collection exercise,
 * and officers treat it as a credibility assessment. The page exists to move the
 * reader from the first view to the second, because that is where refusals come
 * from. Deliberately no fund amounts, no fees, no processing times, no dates of
 * past rule changes, and no fixed list of attestation-letter exemptions — that
 * list is revised periodically. Everything volatile is linked to IRCC instead.
 */
export const metadata: Metadata = {
  title: 'Canadian Study Permit',
  description:
    'How a study permit application works: acceptance from a DLI, the attestation letter, proof of funds, medicals, and the study plan officers assess.',
  alternates: { canonical: '/study-in-canada/study-permit' },
};

const PAGE = 'study-in-canada-study-permit';

const BUILDING_BLOCKS = [
  {
    icon: 'building' as const,
    kicker: 'The school',
    title: 'Acceptance from a DLI',
    body: 'Only a designated learning institution can host an international student. An acceptance letter from a school that is not designated cannot support a permit, however genuine the offer is.',
    href: '/study-in-canada/designated-learning-institutions',
    cta: 'How designation works',
  },
  {
    icon: 'doc' as const,
    kicker: 'The province',
    title: 'The attestation letter',
    body: 'For many post-secondary applicants the province or territory must confirm your place against its own allocation. Some categories of applicant are exempt, and IRCC revises which ones. Check the current position before you assume you need one.',
    href: '/study-in-canada/provincial-attestation-letter',
    cta: 'What a PAL is',
  },
  {
    icon: 'calculator' as const,
    kicker: 'The money',
    title: 'Proof of funds',
    body: 'You must show you can pay tuition and support yourself without working. What matters is not only the balance but where the money came from and how long it has been there.',
    href: '/study-in-canada/proof-of-funds',
    cta: 'How funds are assessed',
  },
  {
    icon: 'scale' as const,
    kicker: 'The officer',
    title: 'Genuine intent to study',
    body: 'The officer must be satisfied you are coming to study, that the programme makes sense for you, and that you will leave at the end of your authorised stay. This is the part no document supplies.',
  },
];

const STEPS = [
  {
    title: 'Choose the programme before the country',
    body: 'Work backwards from what you want to be doing in five years, not from which school replies fastest. A programme that does not follow from your record is the single hardest thing to defend later.',
  },
  {
    title: 'Apply to the institution and get accepted',
    body: 'You apply to the school directly. Confirm it is a designated learning institution before you pay anything. Acceptance normally comes with tuition deposit terms and a start date.',
  },
  {
    title: 'Obtain the attestation letter, if you need one',
    body: 'Where it applies, it comes from the province or territory — in most cases requested through the institution and passed to you. It is not something an agent can obtain on your behalf. Ask the school how it handles this and confirm against IRCC’s current guidance.',
  },
  {
    title: 'Assemble funds and evidence of their origin',
    body: 'Bank records, the source of the money, and the relationship of whoever is funding you. Money that appears shortly before filing, with no explanation, is read as arranged for the application.',
  },
  {
    title: 'Write the study plan',
    body: 'Your own account of why this programme, why Canada, why now, how it builds on what you have already done, and what you intend to do with it afterwards. Written by you, in your words.',
  },
  {
    title: 'File, give biometrics, complete medicals',
    body: 'You submit the application to IRCC, attend a biometrics appointment at the designated collection point, and complete an immigration medical examination with a panel physician where required.',
  },
  {
    title: 'Decision, then the permit at the border',
    body: 'Approval comes as a letter of introduction, not the permit itself. A border services officer decides on arrival whether to issue the permit and admit you, and the permit then carries conditions — the institution, the level, and what work it does or does not allow.',
  },
];

const FAQS = [
  {
    q: 'What is the most common reason study permits from Pakistan are refused?',
    a: 'In our experience the reasoning most often turns on purpose of visit — the officer is not satisfied the studies are the real reason for the trip, or that the programme is a sensible step for someone with your record. Financial reasoning and weak ties to Pakistan appear frequently as well, and often alongside it. These are judgement findings, not missing-document findings, which is why they cannot be cured by adding paperwork.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'There is a required amount, it varies by circumstances such as where you will study and how many people are coming with you, and IRCC revises it. We do not print it here because a figure that is correct today becomes a trap on a page you read next year. Read the current requirement on IRCC’s own site on the day you prepare your file — and understand that meeting the number is the floor, not the argument.',
  },
  {
    q: 'How long does a study permit take?',
    a: 'IRCC publishes current processing times by country and updates them, and they move with volume and season. Any timeline quoted to you privately by an agent is a guess. Plan around your programme start date and apply as early as your acceptance allows.',
  },
  {
    q: 'Do I need a provincial attestation letter?',
    a: 'Many post-secondary applicants do, but several categories of applicant are exempt, and IRCC has revised which categories those are more than once. Because it changes, check the current position on IRCC’s attestation-letter page and ask the institution, which is usually the party that actually requests it.',
  },
  {
    q: 'Can I work while I study?',
    a: 'A study permit can carry work authorisation as a condition, on and off campus, subject to limits on hours and to remaining enrolled and in good standing. Whether it applies to you, and what the limit is, is set by IRCC and has been changed more than once — read the current rule on IRCC’s working-while-studying page rather than relying on what a previous cohort was allowed. Never plan your finances on the assumption that part-time work will cover the gap — officers expect you to be funded without it.',
  },
  {
    q: 'Does a study permit lead to permanent residence?',
    a: 'It is not a permanent residence application and does not become one automatically. Canadian study and subsequent Canadian work experience can strengthen a later application through several routes, but each has its own requirements and none is promised to you by being admitted to a course.',
  },
  {
    q: 'My previous study permit was refused. Can I apply again?',
    a: 'Yes, but only if something has genuinely changed. Re-filing the same file with a longer letter attached usually produces the same result, and a pattern of refusals becomes its own problem. The first step is to obtain the officer’s actual reasoning through the notes before deciding anything.',
  },
  {
    q: 'Can you guarantee my study permit will be approved?',
    a: 'No, and nobody can. The decision is a visa officer’s judgement about you, made on the file in front of them. What we can do is tell you before you spend money whether the plan you are describing is one an officer is likely to find coherent.',
  },
];

export default function StudyPermitPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permits"
        title={
          <>
            The documents get you considered.{' '}
            <span className="text-gold-300">The plan is what gets assessed.</span>
          </>
        }
        subtitle={
          <>
            A study permit application is assembled from an acceptance letter, an attestation letter,
            proof of funds, medicals and biometrics. But what the officer actually decides is whether
            this course of study makes sense for this person — and no document answers that.
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
        <SectionHeading eyebrow="The route, plainly" title="What a study permit is, and what it is not" />
        <Prose>
          <p>
            A study permit is temporary authorisation to study in Canada at a designated learning
            institution. It is issued for a purpose and a period, it names conditions, and it expects
            you to leave at the end of the time allowed unless you have obtained some other status by
            then.
          </p>
          <p>
            That last point is where most applicants are surprised. The governing regulation requires
            the officer to be satisfied that you will depart Canada by the end of your authorised
            stay. So the officer is weighing two things at once: that you are a genuine student, and
            that you are a temporary one. Applicants who present the permit as a first step to
            settling in Canada are answering the second question badly without realising it.
          </p>
          <p>
            The permit is also not a visa on its own. Where a visa or electronic authorisation is
            required for travel, that is issued alongside it. What an approval gives you is a letter of
            introduction; the permit itself is issued by a border services officer when you arrive in
            Canada, and that officer makes the final decision on admitting you.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE BUILDING BLOCKS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What the application is made of"
          title="Four things, and the last one is the hard one"
          subtitle="The first three are obtainable. The fourth is an assessment of you, and it is where files are lost."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUILDING_BLOCKS.map((b) => (
            <FeatureCard
              key={b.title}
              icon={<Icon name={b.icon} />}
              kicker={b.kicker}
              title={b.title}
              href={b.href}
              cta={b.cta}
            >
              {b.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== WHAT OFFICERS ASSESS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What is actually being decided"
              title="The question behind the question"
            />
            <Prose>
              <p>
                An officer reading your file is not auditing a checklist. They are forming a view about
                whether the story holds together: this person, with this education and this work
                history, choosing this programme, at this school, at this stage of their life, funded
                this way, and returning to this.
              </p>
              <p>
                When any one of those elements sits oddly against the others, the whole file weakens.
                A graduate with a master’s degree enrolling in an unrelated entry-level diploma. An
                applicant whose funding appears from a relative with no obvious reason to fund them.
                A programme available at home for a fraction of the cost, with no explanation of what
                the Canadian version adds.
              </p>
              <p>
                None of these are dishonest. They are simply incoherent, and incoherence reads as
                something else being the real purpose of the trip.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="The factors" title="What is weighed" />
            <ul className="mt-6 space-y-4">
              {[
                ['Coherence of the study plan', 'Whether the programme is a reasonable next step given your qualifications, academic record and career so far.'],
                ['Ability to fund the stay', 'Whether tuition and living costs are covered, from a source that is explained and established.'],
                ['Language and academic readiness', 'Whether you can realistically complete the programme you have been admitted to.'],
                ['Ties to your home country', 'Employment, family, property and obligations that give you a reason and a means to return.'],
                ['Immigration and travel history', 'Previous refusals, previous compliance, and whether what you have said before matches what you say now.'],
                ['Admissibility', 'Medical and security requirements, assessed separately from the merits of the study plan.'],
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

        <div className="mt-12">
          <Callout title="No document fixes an incoherent plan">
            <p>
              This is the point applicants resist most. When a study plan does not make sense for the person presenting it, adding
              documents does not repair it. A larger bank balance, a longer letter, more property
              papers, an additional affidavit — none of it addresses the officer’s actual concern,
              which is about the logic of the plan rather than the volume of the file.
            </p>
            <p>
              If your programme choice cannot be explained in three honest sentences that a stranger
              would find sensible, the answer is to change the programme, not to thicken the
              application.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How the application runs, in order"
          subtitle="Steps one to three happen with the institution and the province. IRCC does not see your file until step six."
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
            <strong>A study plan written by somebody else.</strong> Consultant-drafted statements share
            a vocabulary and a shape that officers read constantly. Worse, they contain claims about
            your motivations that you cannot support if asked. Your own plainer words are stronger.
          </p>
          <p>
            <strong>A programme chosen because it was easy to get into.</strong> Admission is not the
            test. If the course does not follow from your degree, your job, or a stated change of
            direction you can explain, the acceptance letter works against you rather than for you.
          </p>
          <p>
            <strong>Funds that arrived last month.</strong> A sudden deposit with no traceable origin
            is the most common financial finding. Officers look at the history of the account and the
            plausibility of the sponsor, not the closing balance on the day you took the statement.
          </p>
          <p>
            <strong>Documents obtained rather than earned.</strong> An arranged experience letter, an
            inflated transcript, an unearned language result. This is misrepresentation, and it carries
            a bar on future applications that outlasts the course you were applying for.
          </p>
          <p>
            <strong>Reapplying without knowing why you were refused.</strong> The letter you receive is
            a summary. The officer’s reasoning sits in the notes on file, and reapplying without it is
            guessing.{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              Get the notes first
            </Link>
            .
          </p>
          <p>
            <strong>Treating the permit as the destination.</strong> The conditions on the permit — the
            institution named, the level of study, enrolment requirements, what work is permitted —
            continue to bind you after you arrive. Breaching them affects everything that comes
            afterwards.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you do not actually want to study, do not use this route">
            <p>
              A study permit is a poor immigration strategy for someone whose real objective is to
              work or settle. It is expensive, it commits you to years of tuition, the plan has to
              withstand a credibility assessment you cannot fake convincingly, and the conditions
              follow you after arrival. Where the stated purpose and the real one diverge, that is
              exactly what the credibility assessment is looking for — and applicants who get through
              on a plan they did not want are often unhappy with what they committed to.
            </p>
            <p>
              It also tends not to suit applicants whose chosen programme is a clear step down from
              qualifications they already hold; applicants who cannot fund the stay without relying on
              part-time work; applicants who would need to abandon a settled career for a course with
              no connection to it; and applicants whose funding cannot be explained by the ordinary
              circumstances of the person providing it.
            </p>
            <p>
              If work is the actual goal, say so and we will look at{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                work permit routes
              </Link>
              {' '}instead. If permanent residence is the goal, the honest starting point is{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>
              {' '}or a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee programme
              </Link>
              . We would rather say this on the first call than take a fee for a file that was never
              going to work, which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== NUMBERS AND SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Fees, funds and timelines" />
        <Prose>
          <p>
            Application fees, biometrics fees, the required proof-of-funds amount, processing times,
            attestation-letter exemptions and work-hour limits all change, and several of them have
            been revised more than once in recent years. We deliberately do not publish those figures
            here, because a number that is right today is a liability on a page you read next year.
          </p>
          <p>
            IRCC publishes the current requirements on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and the test the officer applies sits in the{' '}
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
        title="Find out whether your study plan holds together"
        subtitle="Tell us your education, your work history and the programme you are considering. We will go through the plan with you, show you where it is weak against the things officers assess, and say plainly if we think it does not hold together. The decision is always the officer’s, and we cannot predict it."
        page={PAGE}
        waMessage="Hi, I’d like to know whether my study permit plan for Canada is realistic."
      />
    </>
  );
}
