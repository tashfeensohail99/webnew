import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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
 * The study route, written structurally.
 *
 * Deliberately carries no fees, no fund thresholds, no processing times, no PAL
 * allocation counts and no cut-off scores. Every one of those changes on a
 * government timetable we don't control — and a stale number on this page is a
 * person making a life decision on bad information. Where a figure matters, we
 * name the thing and send the reader to IRCC or the province.
 */
export const metadata: Metadata = {
  title: 'Study in Canada',
  description:
    'The Canadian study route end to end: choosing a DLI, the attestation letter, the study permit, proof of funds, working while studying, and the PGWP.',
  alternates: { canonical: '/study-in-canada' },
};

const PAGE = 'study-in-canada';

/** Outbound link to the authoritative government page. Used wherever a figure
 *  would otherwise have been printed. */
function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="font-semibold text-accent-500 link-underline"
    >
      {children}
    </a>
  );
}

const IRCC = {
  studyPermit:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
  dliList:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html',
  pal: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html',
  funds:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html',
  workOffCampus:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html',
  pgwp: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html',
  spouse:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
  conditions:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare-arrival/study-permit-conditions.html',
};

const FITS = [
  {
    icon: 'doc' as const,
    kicker: 'Studying to study',
    title: 'You want the qualification',
    body: 'The programme itself is worth what it costs you, on its own terms — before any talk of what comes after it.',
  },
  {
    icon: 'building' as const,
    kicker: 'Real admission',
    title: 'You can get admitted honestly',
    body: 'Your grades, your language test and your academic history support a genuine offer from a real institution.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Funded, provably',
    title: 'You can fund it and prove it',
    body: 'Tuition plus living costs, from a source you can document and explain — not money that appeared last month.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Eyes open',
    title: 'You accept the risk',
    body: 'You understand that a study permit is permission to study, not a reservation for permanent residence.',
  },
];

const STEPS = [
  {
    title: 'Choose the programme, then the school',
    body: 'Work out what you actually want to study and where that qualification is respected. Picking a school because it is easy to get into is how people end up with a credential nobody values.',
  },
  {
    title: 'Confirm the institution is a DLI',
    body: (
      <>
        Only a designated learning institution can host an international student. Check the school
        yourself against{' '}
        <Src href={IRCC.dliList}>IRCC’s designated learning institutions list</Src>, and check
        separately whether the specific programme leads to a post-graduation work permit.
      </>
    ),
  },
  {
    title: 'Apply for admission and accept the offer',
    body: 'Admission comes first. You normally need a letter of acceptance, and often a tuition deposit, before the immigration side can begin at all.',
  },
  {
    title: 'Obtain the attestation letter',
    body: (
      <>
        Most study permit applicants need a provincial or territorial attestation letter (a PAL or
        TAL). The school requests it from the province on your behalf once you have accepted. Some
        categories are exempt, and the exempt list has changed more than once —{' '}
        <Src href={IRCC.pal}>IRCC sets out who needs one</Src>.
      </>
    ),
  },
  {
    title: 'Assemble funds and intent evidence',
    body: 'Proof you can pay tuition and live in Canada, documented and explained, plus the material that shows an officer you are a genuine student. This is the part most refused applications get wrong.',
  },
  {
    title: 'File the study permit application',
    body: (
      <>
        Biometrics and a medical exam may be required depending on your situation. Government fees
        are paid to IRCC, not to us, and the current amounts are published on{' '}
        <Src href={IRCC.studyPermit}>IRCC’s study permit pages</Src>.
      </>
    ),
  },
  {
    title: 'Decision, then arrival',
    body: 'An approval abroad is a port-of-entry letter, not the permit itself — the study permit is issued when you enter Canada. Keep the paperwork you travel with.',
  },
];

const FAQS = [
  {
    q: 'Is a study permit a path to permanent residence?',
    a: 'It is a path that some people successfully walk, and it is not a guarantee of anything. A study permit gives you permission to study. What it can do is put you in a position to gain Canadian education and Canadian work experience, which are things several permanent residence streams value. Between there and PR sit a work permit you have to qualify for, a job you have to find, language results you have to earn, and selection criteria that the federal and provincial governments change regularly. Anyone who tells you studying leads to PR is selling you something.',
  },
  {
    q: 'How much money do I need to show?',
    a: (
      <>
        IRCC sets a cost-of-living figure for study permit applicants, it applies on top of your
        first year of tuition, and it has been revised upwards more than once. We will not print a
        number here that you might rely on months from now. Check the current requirement on{' '}
        <Src href={IRCC.funds}>IRCC’s proof of financial support page</Src>, and we will confirm the
        exact figure and how long it must be held for your own file.
      </>
    ),
  },
  {
    q: 'What is a provincial attestation letter and do I need one?',
    a: (
      <>
        It is a letter from the province confirming you have been counted within that province’s
        allocation for the year. Most study permit applicants need one, the school requests it from
        the province after you accept your offer, and certain categories are exempt. Both the
        exemptions and the allocations change year to year, so confirm the current position on{' '}
        <Src href={IRCC.pal}>IRCC’s attestation letter page</Src> rather than relying on what a
        friend did two intakes ago.
      </>
    ),
  },
  {
    q: 'Can I work while I study?',
    a: (
      <>
        Generally yes — eligible full-time students at eligible institutions may work off campus
        during class terms up to a weekly cap set by IRCC, and typically full time during scheduled
        breaks. That cap has changed, so check the current number on{' '}
        <Src href={IRCC.workOffCampus}>IRCC’s work off campus page</Src> rather than assuming.
        Working beyond what your permit allows is a status violation, not a technicality.
      </>
    ),
  },
  {
    q: 'Will I automatically get a post-graduation work permit?',
    a: (
      <>
        No. The PGWP has its own eligibility rules, and they have tightened. Your institution and
        your specific programme must qualify, and for some non-degree programmes the field of study
        also matters. Most applicants must now also prove their English or French, and the level
        required depends on the type of programme you completed — plan for a language test rather
        than assuming you are exempt. The permit length is tied to your programme. Confirm your
        programme’s eligibility in writing before you enrol, not after you graduate, and check the
        current rules on <Src href={IRCC.pgwp}>IRCC’s PGWP eligibility page</Src>.
      </>
    ),
  },
  {
    q: 'Can my spouse come with me and work?',
    a: (
      <>
        Spousal open work permits for the partners of students exist, but eligibility has been
        narrowed and is now tied to the level and type of programme you study. This is one of the
        most volatile parts of the study route. Check the current rules on{' '}
        <Src href={IRCC.spouse}>IRCC’s page for spouses and partners of students</Src> before you
        make family plans around it.
      </>
    ),
  },
  {
    q: 'My study permit was refused. What now?',
    a: 'Get the officer’s reasons — the refusal letter and, where appropriate, the GCMS notes. Refusals usually turn on funds, on ties to Pakistan, or on the officer not accepting that you are a genuine student. Re-filing the same application with a new date on it produces the same result. The point of getting the reasons is to know what has to change.',
  },
  {
    q: 'What does your service cost?',
    a: 'Two separate things: our professional fee, and the fees paid to the government and to your institution. We itemise both in writing before you commit to anything. No figure on this page substitutes for the quote we give you for your own file.',
  },
];

export default function StudyInCanadaPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permit"
        title={
          <>
            Study in Canada — <span className="text-gold-300">without the fairy tale</span>
          </>
        }
        subtitle={
          <>
            Choosing a school, the attestation letter, the permit, funds and genuine intent, working
            while you study, and what a post-graduation work permit does and doesn’t buy you. Told
            straight, including the part where studying is the wrong route for you.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk through your study plan — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHO IT FITS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Is this you?"
          title="Who the study route actually fits"
          subtitle="Studying in Canada is a large, real financial commitment. It works for people who want the education on its own merits."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FITS.map((f) => (
            <FeatureCard key={f.title} icon={<Icon name={f.icon} />} kicker={f.kicker} title={f.title}>
              {f.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="And who it isn’t for">
            <p>
              If you are enrolling in a programme you have no interest in, at whatever institution
              will admit you, because someone told you study is the cheap way into permanent
              residence — this route is not for you and we will say so. That plan fails in two
              places. An officer who does not believe you are a genuine student refuses the permit,
              and a refusal sits on your record for years. And if the permit is granted, you have
              bought a qualification you did not want, at foreign-student prices, with no PR at the
              end of it. This is the single most expensive mistake we see Pakistani families make.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE PIECES ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The route, plainly" title="What you are actually applying for" />
            <Prose>
              <p>
                A study permit is permission to study in Canada at a designated learning institution.
                It is not a visa in itself — an approved applicant is normally also issued the travel
                document they need, and the permit itself is issued when you arrive.
              </p>
              <p>
                An officer is deciding two things. First, whether you meet the requirements: a real
                acceptance from a designated institution, an attestation letter where one is
                required, the money to pay for it, and admissibility on medical and security grounds.
                Second, and this is where most Pakistani applications fail, whether you are a genuine
                student who will leave at the end of the authorised stay.
              </p>
              <p>
                That second test is a judgement call, and it is made by a human being reading your
                file. It is why two applicants with identical bank statements get different answers.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What a strong file is built on" title="The four pillars" />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'A programme that makes sense for you',
                  'An officer will ask why a person with your background is doing this course at this school. There has to be an answer that holds together.',
                ],
                [
                  'Funds, documented and explained',
                  'Not just the balance. Where it came from, whose it is, and how it got there. A sudden deposit raises more questions than it answers.',
                ],
                [
                  'Ties to Pakistan',
                  'Family, property, employment, a business — the reasons you have to come back. Weak ties are the most common reason a genuine-student test is failed.',
                ],
                [
                  'A consistent story',
                  'Your study history, your travel history, your visa refusals and your stated plan all have to say the same thing. Officers notice when they don’t.',
                ],
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

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="From choosing a course to landing"
          subtitle="Seven stages, in order. Skipping the second one is what turns a study plan into a wasted year."
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

      {/* ===================== AFTER YOU ARRIVE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Once you’re there"
          title="Working, staying compliant, and what comes after"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <p className="eyebrow">While you study</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Work is allowed, within limits</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Eligible full-time students may generally work on campus and off campus during class
              terms up to a weekly cap IRCC sets, and full time during scheduled breaks. That cap has
              been changed more than once — check the current figure on{' '}
              <Src href={IRCC.workOffCampus}>IRCC’s work off campus page</Src>. Some programmes also
              require a separate co-op or intern work permit for a mandatory placement.
            </p>
          </div>
          <div className="card p-8">
            <p className="eyebrow">Staying legal</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">You must keep actually studying</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              A study permit carries conditions. You have to remain enrolled and actively pursuing
              your studies at a designated institution, and institutions report on that. Dropping to
              part time, quietly transferring, or working more than you are allowed puts your status
              at risk — and status problems follow you into every application afterwards. The
              conditions attached to your permit are listed on{' '}
              <Src href={IRCC.conditions}>IRCC’s study permit conditions page</Src>.
            </p>
          </div>
          <div className="card p-8">
            <p className="eyebrow">After you graduate</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">The PGWP, if you qualify</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              A post-graduation work permit is an open work permit for eligible graduates of eligible
              programmes — you don’t need an employer to sponsor it. Eligibility is not automatic:
              the institution and the programme both have to qualify, some non-degree graduates face
              a field-of-study requirement, most applicants must prove their English or French at a
              level that depends on the programme they completed, and the permit’s length is tied to
              your programme. It is normally a once-in-a-lifetime permit. The current requirements
              are on <Src href={IRCC.pgwp}>IRCC’s PGWP eligibility page</Src>.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== STUDY AND PR ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The honest part"
          title="How study can lead toward PR — and how it doesn’t"
        />
        <Prose>
          <p>
            There is a real sequence here, and it is worth understanding properly rather than as a
            slogan. Study at a qualifying institution, graduate, obtain a post-graduation work
            permit if you are eligible, work in Canada, and then use that Canadian education and
            Canadian skilled work experience to apply under a federal express-entry stream or a
            provincial nominee programme. Both Canadian study and Canadian work experience carry
            genuine weight in how candidates are ranked and selected.
          </p>
          <p>
            Now the parts the brochure leaves out. Every step in that chain is a separate
            application with its own eligibility rules, and every one of them can end the chain.
            Selection thresholds move. Provinces change their streams, and some of them close
            streams without much notice. Federal selection has shifted toward particular occupations
            and toward French, and those priorities are reset periodically. The rules that apply to
            you when you graduate are not necessarily the rules that applied when you enrolled, and
            nobody — including us — can tell you what they will be three years out.
          </p>
          <p>
            So the sane way to make this decision is this: choose a programme that is worth its cost
            to you as an education. If the immigration outcome arrives, it is a substantial bonus. If
            you would not spend the money on the course without the promise of PR attached, that is a
            signal to look at a different route rather than a reason to go ahead.
          </p>
          <p>
            We would rather tell you that on a consultation call than take a service fee for a plan
            we don’t think is sound.{' '}
            <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
              Read our no-guarantee policy
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
        eyebrow="Before you pay a deposit"
        title="Find out whether studying is the right route for you"
        subtitle="Tell us what you want to study, what you can fund, and what you are really hoping happens afterwards. We’ll tell you honestly whether the study route fits — and if another route fits better, we’ll tell you that instead."
        page={PAGE}
        waMessage="Hi, I’d like to talk about studying in Canada and whether it’s the right route for me."
      />
    </>
  );
}
