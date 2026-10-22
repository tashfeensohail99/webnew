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
 * Designated learning institutions.
 *
 * The job of this page is to separate two things students routinely merge:
 * "can I get a study permit to go here" and "will this get me a work permit
 * afterwards". The first is about the institution. The second is about the
 * institution AND the programme. An agent with a commission has an incentive
 * to let you keep confusing them.
 */
export const metadata: Metadata = {
  title: 'Designated Learning Institutions (DLI) in Canada',
  description:
    'What DLI status means, why a study permit is impossible without it, why PGWP eligibility depends on it, and how to verify a school on IRCC’s own list.',
  alternates: { canonical: '/study-in-canada/designated-learning-institutions' },
};

const PAGE = 'study-dli';

const WHAT_IT_GOVERNS = [
  {
    icon: 'building' as const,
    kicker: 'Provinces designate',
    title: 'The province approves the school',
    body: 'Designation is granted by the province or territory where the school operates, against its own criteria. It is not a federal quality ranking and it is not an accreditation of every course the school sells.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Study permit',
    title: 'No DLI, no permit',
    body: 'A study permit application rests on an acceptance letter from a designated institution, identified by its DLI number. An acceptance from a school that is not designated cannot support an application at all.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Work permit after',
    title: 'PGWP depends on more than DLI status',
    body: 'Designation alone does not make a graduate eligible for a post-graduation work permit. The institution type and the specific programme both matter, and many designated schools offer programmes that lead nowhere afterwards.',
  },
  {
    icon: 'shield' as const,
    kicker: 'It can change',
    title: 'Designation is not permanent',
    body: 'A province can withdraw designation. Students already enrolled are affected — most obviously in what happens when the permit needs extending, and in what the credential is worth for a later work permit.',
  },
];

const CHECK_STEPS = [
  {
    title: 'Find the school on IRCC’s own list',
    body: 'IRCC publishes the list of designated institutions by province and territory. That list, and not the school’s own website or a brochure, is the source. Search the legal name of the institution, not a campus brand or a trading name.',
  },
  {
    title: 'Match the campus, not just the name',
    body: 'Institutions run multiple campuses and some are designated while others are not. Confirm that the campus you would actually attend appears, and note the DLI number attached to it.',
  },
  {
    title: 'Check whether the DLI number matches your acceptance letter',
    body: 'The DLI number on your letter of acceptance should be identical to the one on the list. A mismatch is either a clerical error worth fixing before you file, or a sign the letter did not come from where you were told it came from.',
  },
  {
    title: 'Check the programme separately',
    body: 'IRCC’s list carries an institution-level indicator for whether a school offers any programmes that can lead to a post-graduation work permit. IRCC states that a “yes” at the institution level does not mean every programme there qualifies. Check the current requirements on IRCC’s post-graduation work permit eligibility pages against the exact programme you are enrolling in.',
  },
  {
    title: 'Confirm what the school itself says in writing',
    body: 'Ask the admissions office directly, in writing, whether the specific programme you have been offered is eligible for a post-graduation work permit. Keep the reply. A verbal assurance from an agent is worth nothing later.',
  },
  {
    title: 'Re-check before you pay a deposit',
    body: 'Status and programme eligibility can change between the day you were advised and the day you transfer money. Check again immediately before any non-refundable payment.',
  },
];

const FAQS = [
  {
    q: 'What does DLI status actually mean?',
    a: 'It means the province or territory has approved the institution to host international students. That is all it means. It is not a statement about the quality of the teaching, the value of the credential in the Canadian labour market, or your prospects afterwards.',
  },
  {
    q: 'Can I get a study permit for a school that is not a DLI?',
    a: 'No. Post-secondary study permit applications rest on an acceptance from a designated institution. Without designation there is no application to make.',
  },
  {
    q: 'If the school is a DLI, am I guaranteed a work permit after I graduate?',
    a: 'No, and it is a costly misunderstanding. Post-graduation work permit eligibility depends on the type of institution, on the specific programme and its field of study, on how the programme was delivered, and on requirements IRCC has revised more than once. A designated school can lawfully enrol you on a programme that leads to no work permit at all. Read the current requirements on IRCC’s post-graduation work permit eligibility pages, and our own post-graduation work permit page, and confirm the specific programme before you commit.',
  },
  {
    q: 'Are private colleges designated?',
    a: 'Some are and some are not, and designation is decided province by province. Private career colleges are the category where the gap between "designated" and "leads to a work permit" is widest. Arrangements where a private college delivers a public institution’s curriculum under licence have been a specific area of restriction — treat any such arrangement as something to verify carefully rather than assume.',
  },
  {
    q: 'How do I know my agent is not steering me?',
    a: 'Ask a direct question: how are you paid if I enrol here. Recruiters are commonly paid a commission by the institution, and the schools that pay the most are not usually the ones with the strongest outcomes. If the answer is evasive, or if every student in the office is being sent to the same two colleges, you are being placed rather than advised.',
  },
  {
    q: 'What happens if my school loses its designation while I am studying?',
    a: 'It affects you directly, and the practical consequences fall on the permit and on the credential rather than being resolved by the school. This is a situation to get advice on immediately rather than to wait out, because the options narrow as your permit runs down. IRCC publishes guidance on what students in this position should do.',
  },
  {
    q: 'Does the DLI number matter on the application?',
    a: 'Yes. It identifies the institution to IRCC, and it must correspond to the school and campus on your acceptance letter. Errors here are worth catching before filing rather than explaining afterwards.',
  },
  {
    q: 'Can I change schools after I arrive?',
    a: 'Not by simply telling IRCC you have moved. For post-secondary students, IRCC’s rules require you to apply for — and be approved for — a new study permit before you begin studying at a different designated institution; carrying on at a new school without that approval puts you out of status. The current procedure is set out on IRCC’s "Changing your school or program" page, and it should be read there rather than taken from an agent. Moving can also affect your later work permit eligibility, so it is not an administrative transfer and it should not be your fallback for a school you already doubt.',
  },
];

export default function DliPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permits"
        title={
          <>
            A designated school is the floor,{' '}
            <span className="text-gold-300">not the finish line</span>
          </>
        }
        subtitle={
          <>
            You cannot get a study permit without an acceptance from a designated learning
            institution. But designation alone tells you almost nothing about what happens after you
            graduate — and that gap is where most money is lost.
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
          eyebrow="The term, plainly"
          title="What a designated learning institution is"
        />
        <Prose>
          <p>
            Education in Canada is a provincial responsibility. Immigration is federal. A designated
            learning institution is where the two meet: the province or territory approves a school
            to host international students, and IRCC then accepts an acceptance letter from that
            school as the basis for a study permit application.
          </p>
          <p>
            Every designated institution is given a DLI number. That number goes on your acceptance
            letter and on your application, and it is how IRCC identifies where you say you are
            going. IRCC publishes the full list of designated institutions, arranged by province and
            territory, on its own site.
          </p>
          <p>
            What designation is not: it is not a quality rating, it is not an assurance that the
            credential is respected by Canadian employers, and it is not a promise that the
            programme you have been sold leads anywhere. Provinces designate schools against
            administrative criteria. A school can be perfectly properly designated and still be a
            poor use of several years and a great deal of money.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT IT GOVERNS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Two different questions"
          title="What DLI status decides, and what it does not"
          subtitle="Students routinely treat “is it a DLI” and “will I get a work permit afterwards” as one question. They are separate, and they are decided by different things."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_IT_GOVERNS.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Designation gets you in. The programme decides what you leave with.">
            <p>
              A post-graduation work permit is not granted because your school was designated. It
              depends on the kind of institution, on the specific programme and its level, on how
              and where that programme was delivered, and on requirements IRCC has revised more than
              once in recent years — including requirements tied to what the programme prepares you
              for.
            </p>
            <p>
              This means a designated college can lawfully enrol you, take your fees, and graduate
              you into no work permit at all. Nothing improper has occurred. You simply did not ask
              the second question.{' '}
              <Link
                href="/work-permits/post-graduation"
                className="font-semibold text-accent-500 link-underline"
              >
                Read the post-graduation work permit requirements
              </Link>{' '}
              before you accept an offer, not after.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW TO CHECK ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Verification"
          title="How to check a school properly"
          subtitle="Six steps, in this order. None of them takes long, and each is a check you can do yourself at the source."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHECK_STEPS.map((s, i) => (
            <li key={s.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Prose>
            <p>
              The list itself is published by IRCC at{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                the designated learning institutions list on canada.ca
              </a>
              . We do not reproduce any part of it here. It changes, and a copied list is a
              liability rather than a service — check it at the source on the day you need it.
            </p>
            <p>
              The two other pages worth reading at the source, rather than from us or from an agent,
              are IRCC’s{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                post-graduation work permit eligibility
              </a>{' '}
              requirements, and its guidance on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/change-schools.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                changing your school or program
              </a>
              . Both carry requirements, thresholds and lists that IRCC revises, so we state no
              figures, cut-offs or timelines for them here.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== THE COMMISSION PROBLEM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="Why you were sent to that particular college"
        />
        <Prose>
          <p>
            <strong>Commission, not fit.</strong> International student recruitment runs on
            commission paid by institutions to agents. That is legal and openly practised. But it
            means the recommendation you receive is shaped by what the school pays, and the schools
            that pay most are rarely the ones with the strongest graduate outcomes. If every student
            walking out of an office is heading to the same two private colleges, the selection was
            not made on merit.
          </p>
          <p>
            <strong>“It’s on the DLI list” used as the whole answer.</strong> It is a true statement
            that answers a narrower question than the one you were asking. Ask instead whether the
            specific programme supports a post-graduation work permit, and get the answer from the
            institution in writing.
          </p>
          <p>
            <strong>A programme chosen for admission, not for a career.</strong> Some programmes are
            easy to get into precisely because demand for them is thin. A cheap, quick, easily
            accepted credential in a field with no Canadian demand tends to leave you with debt, a
            qualification employers do not recognise, and no route onward.
          </p>
          <p>
            <strong>Campus and delivery not checked.</strong> Designation attaches to institutions
            and campuses. Where a programme is delivered, and by whom, can change the outcome
            entirely — most visibly where a private college delivers another institution’s
            curriculum under an arrangement between them.
          </p>
          <p>
            <strong>An acceptance letter nobody verified.</strong> Fraudulent and altered acceptance
            letters exist, and IRCC verifies letters with institutions. Presenting one — even one
            you were handed in good faith by an agent — is misrepresentation, and the consequence
            lands on you, not on the agent.{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              What misrepresentation means in practice
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="When studying in Canada is the wrong route" />
        <div className="mt-8">
          <Callout title="If the point is immigration, study may be the expensive way round">
            <p>
              A great many people we speak to do not want to study. They want to live in Canada, and
              study has been sold to them as the way in. It can be a route, but it is one of the
              most expensive and least certain ones: tuition at international rates, living costs,
              years out of the workforce, and a work permit at the end that is conditional rather
              than assured.
            </p>
            <p>
              This route particularly does not suit someone with strong existing work experience and
              a good language score, who may already be closer to a{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                permanent residence route
              </Link>{' '}
              than a study permit would ever take them. It does not suit someone who cannot fund the
              programme without borrowing against the assumption of a work permit that may not
              arrive. And it does not suit someone whose genuine intention will not withstand an
              officer’s scrutiny — purpose of visit and a weak study plan are among the refusal
              grounds we see most often in the files clients bring us, and they are grounds IRCC
              sets out in its own study permit guidance.
            </p>
            <p>
              We would rather tell you on the first call that a college diploma is not your best
              path than take a fee for an application that was never the right question. We publish
              a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>{' '}
              for the same reason.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== RELATED ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Next" title="The rest of the study route" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            href="/study-in-canada/study-permit"
            cta="Read more"
            icon={<Icon name="permit" />}
            kicker="The application"
            title="Study permits"
          >
            What the application involves, what an officer is assessing, and what a genuine study
            plan looks like.
          </FeatureCard>
          <FeatureCard
            href="/study-in-canada/provincial-attestation-letter"
            cta="Read more"
            icon={<Icon name="doc" />}
            kicker="Provincial layer"
            title="Provincial attestation letters"
          >
            The provincial document that sits alongside your acceptance, and where students get
            caught out by it.
          </FeatureCard>
          <FeatureCard
            href="/work-permits/post-graduation"
            cta="Read more"
            icon={<Icon name="refresh" />}
            kicker="Afterwards"
            title="Post-graduation work permits"
          >
            What actually determines eligibility once you graduate — the question DLI status does
            not answer.
          </FeatureCard>
          <FeatureCard
            href="/study-in-canada/proof-of-funds"
            cta="Read more"
            icon={<Icon name="calculator" />}
            kicker="Money"
            title="Proof of funds"
          >
            How funds are assessed, and why the source of the money matters as much as the balance.
          </FeatureCard>
          <FeatureCard
            href="/study-in-canada/refusals"
            cta="Read more"
            icon={<Icon name="scale" />}
            kicker="If it goes wrong"
            title="Study permit refusals"
          >
            The common refusal grounds from Pakistan and what can honestly be done about each.
          </FeatureCard>
          <FeatureCard
            href="/study-in-canada/study-to-permanent-residence"
            cta="Read more"
            icon={<Icon name="globe" />}
            kicker="The long view"
            title="Study to permanent residence"
          >
            How the study route connects to permanent residence, and where the connection is weaker
            than people assume.
          </FeatureCard>
        </div>
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
        title="Have the school and the programme checked first"
        subtitle="Send us the institution, the campus and the exact programme name on your offer. We will go through IRCC’s list and its current published requirements with you, show you what the institution and the programme do and do not establish, and tell you honestly where the plan looks weak. We cannot promise an outcome, and we will not pretend otherwise."
        page={PAGE}
        waMessage="Hi, I’d like to check whether a school and programme I’ve been offered is a DLI and what it means for a work permit afterwards."
      />
    </>
  );
}
