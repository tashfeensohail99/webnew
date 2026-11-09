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
 * Ontario provincial nomination (OINP).
 *
 * Ontario replaced its entire stream framework in 2026 and now runs one stream,
 * named here with a date. Re-check it monthly against lib/facts.ts. Criteria,
 * scoring and deadlines stay on ontario.ca. What is stable is the shape of the
 * thing: what a province is buying when it nominates, how enhanced and base
 * nomination differ, and the intent-to-settle expectation.
 */
export const metadata: Metadata = {
  title: 'Ontario Immigrant Nominee Program (OINP)',
  description:
    'Ontario replaced its OINP streams in 2026 with one, the Ontario Workforce Priority stream. What that means from Pakistan, and who it does not suit.',
  alternates: { canonical: '/pnp/ontario' },
};

const PAGE = 'pnp-ontario';

const OFFICIAL_OINP = 'https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp';
const OFFICIAL_OWP = 'https://www.ontario.ca/page/ontario-workforce-priority-stream';
const OFFICIAL_UPDATES = 'https://www.ontario.ca/page/2026-ontario-immigrant-nominee-program-updates';
const IRCC_PNP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const IRCC_STATS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/reports-statistics.html';

const STREAM_FACTS = [
  {
    icon: 'building' as const,
    kicker: 'Start here',
    title: 'A job offer from an Ontario employer',
    body: 'Your employer starts the process through Ontario’s employer portal and must have the position approved. The one exception is eligible self-employed physicians, who do not need a job offer.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Then',
    title: 'An expression of interest',
    body: 'Once your employer has submitted the job offer, you register an expression of interest within the deadline Ontario sets. It is scored, and you can apply only if you are invited.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'How you are ranked',
    title: 'Points for the job and for you',
    body: 'Ontario scores factors including the TEER level and occupational category of the job, the wage, official languages and where in Ontario the job is. Jobs outside Toronto score higher on location.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Experience',
    title: 'Set by the TEER level of the job',
    body: 'The work experience you must show depends on the TEER category of the job offer. A licence can count where the job requires one. Ontario sets out each requirement on its stream page.',
  },
  {
    icon: 'plane' as const,
    kicker: 'Express Entry',
    title: 'An option for TEER 0 to 3',
    body: 'With a job offer in TEER 0, 1, 2 or 3 you can ask to be nominated through Express Entry, as long as you meet a federal Express Entry programme’s criteria and keep a valid profile.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Not open',
    title: 'No other stream',
    body: 'Ontario says all its other streams are closed. Guides that still describe separate employer, graduate, French-speaking or entrepreneur routes are out of date.',
  },
];

const STEPS = [
  {
    title: 'Find an Ontario employer first',
    body: 'The stream is built around a qualifying job offer. Without an Ontario employer willing to go through the process, there is no way in unless you are an eligible self-employed physician.',
  },
  {
    title: 'Check what is open today',
    body: 'Ontario publishes changes to the stream as they happen. Confirm on the province’s own site on the day you plan to act, not from a summary page written months earlier.',
  },
  {
    title: 'Your employer submits, then you register interest',
    body: 'Your employer submits the job offer through Ontario’s employer portal and you receive a job offer ID. You then register an expression of interest within Ontario’s deadline. Registering is not applying, and you can apply only if invited.',
  },
  {
    title: 'If invited, both of you apply',
    body: 'You apply for nomination and your employer applies for approval of the position, each within short deadlines. Both have to succeed. Employment evidence, credentials and language results are the usual weight of your side.',
  },
  {
    title: 'Provincial assessment and nomination',
    body: 'The province verifies the employer where one is involved, tests whether your experience genuinely matches the occupation, and forms a view on whether you intend to live in Ontario. A nomination is the province’s recommendation — not permanent residence.',
  },
  {
    title: 'Apply to IRCC for permanent residence',
    body: 'The federal decision is separate and independent. IRCC assesses admissibility — medical, criminal, security, and the truthfulness of what you filed. A nomination does not bind IRCC.',
  },
];

const FAQS = [
  {
    q: 'Does a provincial nomination guarantee permanent residence?',
    a: 'No. A nomination is a province telling the federal government it wants you. The permanent residence decision belongs to IRCC, which assesses admissibility and the accuracy of your application independently. Nominations have been issued to people who were later refused federally.',
  },
  {
    q: 'What is the difference between enhanced and base nomination?',
    a: 'An enhanced nomination is aligned with Express Entry: you must already have an eligible Express Entry profile, and the nomination attaches to it. A base nomination sits outside Express Entry — you are nominated by the province and then apply to IRCC through its non-Express Entry process, and IRCC sets how that application is submitted. Under the Ontario Workforce Priority stream, applicants with a TEER 0 to 3 job offer can ask for the Express Entry route if they meet a federal programme’s criteria.',
  },
  {
    q: 'Which Ontario streams are open right now, and what are the criteria?',
    a: 'As of 8 November 2026, one: the Ontario Workforce Priority stream. Ontario says all its other streams are closed. The criteria depend on the TEER category of your job offer and are set out on Ontario’s stream page. They can change, so read them there, on the day.',
  },
  {
    q: 'Do I need a job offer to be nominated by Ontario?',
    a: 'Almost always, yes. The Ontario Workforce Priority stream requires a qualifying job offer from an Ontario employer; the exception is eligible self-employed physicians. For most people in Pakistan, that means finding an Ontario employer before anything else. The offer has to be real and verifiable, and the employer has to apply for approval of the position.',
  },
  {
    q: 'Can I get nominated by Ontario and then move to another province?',
    a: 'Legally, permanent residents have mobility rights once status is granted. But Ontario’s stream requires an intention to live and work in Ontario, and answering yes when you do not is misrepresentation. Treat the question as meaning what it says.',
  },
  {
    q: 'How does Ontario rank candidates now?',
    a: 'By points on the expression of interest. Ontario scores factors including the TEER level and occupational category of the job offer, the wage, official languages and where in Ontario the job is, with jobs outside Toronto scoring higher on location. Ontario publishes the full scoring and has changed it since the stream opened, so read the current version on its stream page.',
  },
  {
    q: 'Is Ontario easier than other provinces?',
    a: 'No province is reliably easier, and chasing the one that looks easiest this quarter is how people end up filing weak applications in provinces they have no connection to. Ontario has a large economy and a correspondingly large pool of interested applicants, which cuts both ways — the province is also working within a nomination allocation it does not set itself. Every province publishes its own current criteria; that is the only basis on which to compare them.',
  },
  {
    q: 'How much does it cost and how long does it take?',
    a: 'Ontario publishes its own application fees and current processing information, and IRCC publishes the federal fees and timelines separately. Both change. We will not print figures here that you might rely on a year from now — read them at source before you budget.',
  },
];

export default function PnpOntarioPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Provincial nomination"
        title={
          <>
            The Ontario Immigrant Nominee Program nominates people it expects{' '}
            <span className="text-gold-300">to actually live there</span>
          </>
        }
        subtitle={
          <>
            The Ontario Immigrant Nominee Program lets the province recommend candidates to the
            federal government. What Ontario is assessing is not just whether you qualify on paper —
            it is whether you will settle, work and stay in Ontario.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT A NOMINATION IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="What a provincial nomination actually is"
        />
        <Prose>
          <p>
            Immigration in Canada is shared between the federal government and the provinces. Under
            that arrangement, provinces are allocated a number of nominations each year and may
            recommend candidates who meet their own economic needs. Ontario’s programme for doing
            this is the Ontario Immigrant Nominee Program, usually shortened to OINP.
          </p>
          <p>
            A nomination is a recommendation, not a decision. Ontario tells IRCC that it wants you;
            IRCC then makes the permanent residence decision on its own terms, assessing
            admissibility, security, medical requirements and the truthfulness of what you have
            filed. Two governments, two decisions, in that order.
          </p>
          <p>
            This matters practically. It means a nomination cannot be treated as an outcome, and it
            means a problem in your federal file — an old refusal, an undisclosed history, a
            document you did not write — is not cured by provincial support.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT ONTARIO IS LOOKING FOR ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The province’s side of it"
          title="What Ontario is looking for in an immigrant"
          subtitle="A province nominates to solve its own problems. Understanding what those are tells you more than any checklist."
        />
        <Prose>
          <p>
            Ontario has the largest provincial economy in Canada and takes in a large share of new
            permanent residents each year — IRCC publishes the{' '}
            <a
              href={IRCC_STATS}
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              admissions figures by province
            </a>{' '}
            if you want the current numbers. Its labour market is unusually broad: financial and
            professional services concentrated in the Greater Toronto Area, a large public health
            care system across the whole province, advanced manufacturing and automotive work in the
            southwest, agriculture and food processing in the rural south, and a technology sector
            spread across several cities rather than one.
          </p>
          <p>
            That breadth shapes what the province wants. Ontario is not short of applicants — it is
            short of specific workers in specific places. Persistent shortages sit in health care,
            in the skilled trades and construction, and in occupations that are hard to fill outside
            the largest urban centres. Nomination is the instrument the province uses to address
            those gaps, which is why occupation and location carry weight that a purely federal
            application does not give them.
          </p>
          <p>
            Ontario also has a settlement concern, not only a hiring one: its stream requires an
            intention to live and work in Ontario. Evidence that you are connected to the province —
            you have worked there, studied there, have family there, hold a genuine offer there —
            is not a bonus. It is part of the substance of the case.
          </p>
        </Prose>
      </Section>

      {/* ===================== ENHANCED VS BASE ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Two mechanics"
              title="Enhanced and base nomination"
            />
            <Prose>
              <p>
                Provincial nomination attaches to the federal system in one of two ways, and the
                difference decides what your file looks like.
              </p>
              <p>
                <strong>Enhanced</strong> nomination is aligned with Express Entry. You must already
                have an eligible Express Entry profile before the province can nominate you. The
                nomination attaches to that profile and you continue through the electronic Express
                Entry process.
              </p>
              <p>
                <strong>Base</strong> nomination sits outside Express Entry. The province nominates
                you directly, and you then file a separate permanent residence application to IRCC
                through the non-Express-Entry route. This matters for people who cannot meet Express
                Entry’s own entry requirements — base routes are the reason provincial nomination is
                sometimes available to candidates federal programmes will not take.
              </p>
              <p>
                Under the Ontario Workforce Priority stream, applicants with a TEER 0 to 3 job offer,
                and self-employed physicians, can ask to be nominated through{' '}
                <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                  Express Entry
                </Link>
                . You must meet a federal programme’s criteria and keep a valid profile while Ontario
                processes your application. Everyone else goes through the base route.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="How candidates are selected" title="Invited from a pool" />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Expression of interest',
                  'You register in a pool describing your profile. The province invites candidates it wants, when it wants them. Registering is not applying, and being in the pool is not a queue you advance in by waiting.',
                ],
                [
                  'No direct application',
                  'Under the only open stream you cannot apply unless Ontario invites you. There is no application window to watch for.',
                ],
                [
                  'Provincial verification',
                  'Where an employer is involved, the province checks the employer independently — that the business is real, operating, and offering what it claims.',
                ],
                [
                  'Intent to settle',
                  'Assessed on evidence, not assertion: where you have worked or studied, where family is, what ties you have actually formed.',
                ],
                [
                  'Federal decision, separately',
                  'IRCC assesses admissibility and accuracy independently of anything the province concluded.',
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

      {/* ===================== KINDS OF STREAM ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="As of 8 November 2026"
          title="One open stream: Ontario Workforce Priority"
          subtitle={
            <>
              Ontario says all its other streams are closed. This is what the stream asks for.
              Criteria can change, so confirm on{' '}
              <a href={OFFICIAL_OWP} className="font-semibold text-accent-500 link-underline" rel="noopener noreferrer" target="_blank">
                Ontario’s stream page
              </a>{' '}
              before you act.
            </>
          }
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_FACTS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="If someone offers you an older Ontario stream">
            <p>
              Ontario rebuilt its nomination framework in 2026, replacing the streams it had been
              running. Many advisory pages still describe routes that no longer exist. If an agent
              offers you anything other than the Ontario Workforce Priority stream, ask them to show
              it open on ontario.ca.
            </p>
            <p>
              The province publishes what is open, what has changed and what the current criteria are
              on its own site, and that is the only version worth relying on.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How a nomination file runs, in order"
          subtitle="Two applications to two governments. The provincial one comes first and does not substitute for the federal one."
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
          title="Where Ontario PNP applications go wrong"
        />
        <Prose>
          <p>
            <strong>Preparing for a stream that no longer exists.</strong> This has nothing to do with
            your qualifications. People work from an
            agent’s summary or a year-old article, assemble documents for criteria that were
            replaced, and discover it at the point of filing.
          </p>
          <p>
            <strong>Choosing a province with no connection to you.</strong> Applicants pick whichever
            province is described as easiest that season. The province then assesses intent to settle
            and finds nothing — no work history there, no study, no family, no offer. It reads exactly
            as what it is.
          </p>
          <p>
            <strong>Treating registration as application.</strong> An expression of interest is not a
            filed application and does not accrue seniority. If you are invited the deadlines are short,
            so have your documents ready before you register.
          </p>
          <p>
            <strong>A job offer that will not survive verification.</strong> Provinces contact employers.
            An offer arranged through a third party, from a business that is dormant or cannot explain
            the role, fails at the province and can contaminate your federal file as misrepresentation.
          </p>
          <p>
            <strong>Occupation stated to fit the list rather than the work.</strong> If your experience
            letters describe duties you did not perform in order to match a targeted occupation, that is
            misrepresentation — regardless of who drafted them. See{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              what misrepresentation costs
            </Link>
            .
          </p>
          <p>
            <strong>Assuming nomination ends the process.</strong> Federal admissibility is assessed
            afterwards and independently. A prior refusal, an undisclosed removal, a medical issue or a
            security concern is not resolved by provincial support.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who the Ontario PNP does not suit" />
        <div className="mt-8">
          <Callout title="If you have no genuine connection to Ontario, this is the wrong province">
            <p>
              Nominating provinces expect you to live there. Choosing a province you have no link to
              because it appears to have lower requirements this quarter is a costly mistake. The application asks you to demonstrate intent to settle;
              with nothing to demonstrate, you are paying a provincial fee to have that gap noticed.
              Answering the intent question untruthfully is worse — that is misrepresentation, and it
              carries five years of inadmissibility under section 40 of the Act.
            </p>
            <p>
              This route does not suit anyone without an Ontario employer willing to support them,
              apart from eligible self-employed physicians. If you are strong on age, education and language but have no provincial tie at all,{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                federal Express Entry
              </Link>{' '}
              is usually the more honest conversation. If your tie is to a smaller province or a rural
              community, look at{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                the other provincial programmes
              </Link>{' '}
              rather than assuming the largest province is the best odds.
            </p>
            <p>
              And if you are running a business rather than seeking employment, no business route is
              currently open in Ontario.{' '}
              <Link href="/business-immigration" className="font-semibold text-accent-500 link-underline">
                See business immigration
              </Link>
              . Neither government’s decision is ours to make, which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
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
          title="Open streams, criteria, fees and updates"
        />
        <Prose>
          <p>
            Everything that changes — the criteria, the scoring, the deadlines, what the provincial
            fee is — lives on Ontario’s own site. We name the current stream above, dated, and leave
            the rest there, because a figure that is right today is a liability on a page you might
            read next year.
          </p>
          <p>
            Ontario publishes the programme, the{' '}
            <a href={OFFICIAL_OWP} className="font-semibold text-accent-500 link-underline" rel="noopener noreferrer" target="_blank">
              stream requirements
            </a>{' '}
            and its{' '}
            <a
              href={OFFICIAL_UPDATES}
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              current programme updates
            </a>{' '}
            at{' '}
            <a
              href={OFFICIAL_OINP}
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              ontario.ca
            </a>
            . The federal side of provincial nomination — how nomination connects to permanent
            residence, and what IRCC decides — is published on the{' '}
            <a
              href={IRCC_PNP}
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC provincial nominees page
            </a>
            . Read both at source, on the day you plan to act.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="Questions about the Ontario PNP" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you file with any province"
        title="Find out whether Ontario is the right province for you"
        subtitle="Tell us your occupation, your experience, and what connection you actually have to Ontario. We will tell you honestly whether provincial nomination fits — and if it does not, which route might."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether Ontario provincial nomination is realistic in my situation."
      />
    </>
  );
}
