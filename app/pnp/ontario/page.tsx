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
 * Deliberately contains no stream list. Ontario replaced its entire stream
 * framework in 2026 — any page naming streams and their criteria is wrong
 * within a season. What is stable is the shape of the thing: what a province
 * is buying when it nominates, how enhanced and base nomination differ, and
 * the intent-to-settle expectation. Everything current lives on ontario.ca.
 */
export const metadata: Metadata = {
  title: 'Ontario Provincial Nomination (OINP)',
  description:
    'How Ontario’s nominee programme works: what the province looks for, enhanced versus base nomination, and the intent-to-settle expectation.',
  alternates: { canonical: '/pnp/ontario' },
};

const PAGE = 'pnp-ontario';

const OFFICIAL_OINP = 'https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp';
const OFFICIAL_UPDATES = 'https://www.ontario.ca/page/2026-ontario-immigrant-nominee-program-updates';
const IRCC_PNP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const IRCC_STATS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/reports-statistics.html';

const STREAM_KINDS = [
  {
    icon: 'building' as const,
    kicker: 'Category',
    title: 'Employer-driven',
    body: 'Built around a named Ontario employer with a role they cannot fill locally. The employer’s legitimacy, the wage and the location of the job are all assessed alongside you.',
  },
  {
    icon: 'permit' as const,
    kicker: 'Category',
    title: 'In-demand occupation',
    body: 'Targets whichever occupations the province has currently identified as short-staffed. Which occupations those are is revised as labour-market conditions change, so it is a moving target by design — the province publishes the list in force, and that is the only version to work from.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Category',
    title: 'Graduate and student',
    body: 'For people who studied in Ontario at a recognised institution and are already in the province’s labour market. Provinces treat local study as strong evidence of settlement intent.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'Category',
    title: 'Entrepreneur and investment',
    body: 'For people establishing or buying an Ontario business, usually with a performance agreement and a nomination only after the business actually operates. This is a business file, not a points file.',
  },
  {
    icon: 'chat' as const,
    kicker: 'Category',
    title: 'Francophone',
    body: 'Many provinces run a French-language route reflecting federal francophone-immigration objectives. Ontario has a sizeable francophone population outside Toronto.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Category',
    title: 'Regional and community',
    body: 'Some provinces steer nomination toward areas outside the largest city, where labour shortages are sharper and retention is the province’s real concern.',
  },
];

const STEPS = [
  {
    title: 'Establish the connection first',
    body: 'A nomination follows a genuine link to Ontario — an offer from an Ontario employer, study or work already completed there, or a business you are actually establishing. The link is the substance of the application, not a formality attached to it.',
  },
  {
    title: 'Check what is open today',
    body: 'Ontario publishes which routes are accepting applications, and this changes. Confirm on the province’s own site on the day you plan to act, not from a summary page written months earlier.',
  },
  {
    title: 'Register interest, or apply directly',
    body: 'Provinces typically use one of two mechanics: an expression-of-interest pool from which the province invites candidates it wants, or a direct application window that opens and closes. Which applies depends on the route.',
  },
  {
    title: 'Submit the provincial application',
    body: 'This is a separate application to the province, with its own forms, evidence and fee. Employment evidence, credentials, language results and proof of your connection to Ontario are the usual weight of it.',
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
    a: 'An enhanced nomination is aligned with Express Entry: you must already have an eligible Express Entry profile, and the nomination attaches to it. A base nomination sits outside Express Entry — you are nominated by the province and then file a paper-based permanent residence application to IRCC through a different route. The evidence the province wants is broadly similar; the federal path afterwards is not.',
  },
  {
    q: 'Which Ontario streams are open right now, and what are the criteria?',
    a: 'We deliberately do not list them. Ontario has restructured its nomination framework before — most recently in 2026, when its existing streams were replaced — and provincial streams open, close, pause and are replaced without much notice. Any page naming streams and their criteria is a page that will mislead somebody. Ontario publishes what is open on its own programme pages — read it there, on the day.',
  },
  {
    q: 'Do I need a job offer to be nominated by Ontario?',
    a: 'It depends entirely on the route. Employer-driven routes are built around one; graduate, occupation-targeted and francophone routes may not require one. What is constant is that a job offer used in a provincial application has to be real, verifiable and from an employer who will withstand the province’s scrutiny.',
  },
  {
    q: 'Can I get nominated by Ontario and then move to another province?',
    a: 'Legally, permanent residents have mobility rights once status is granted. But you are asked at application stage whether you intend to live in the nominating province, and answering yes when you do not is misrepresentation. Provinces track retention and assess intent seriously. Treat the question as meaning what it says.',
  },
  {
    q: 'My occupation is not on any in-demand list. Is that fatal?',
    a: 'For occupation-targeted routes, usually yes for now — those lists exist precisely to exclude. It does not necessarily end provincial nomination generally, and it says nothing about federal Express Entry, where the criteria are different. The honest first question is whether a provincial route is the right one for you at all.',
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
            Ontario nominates people it expects{' '}
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
            Ontario also has a settlement concern, not only a hiring one. Provinces are measured on
            whether the people they nominate stay. Evidence that you are connected to the province —
            you have worked there, studied there, have family there, hold a genuine offer there —
            is not a bonus. For many routes it is the substance of the case.
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
                Which mechanic applies is a property of the route, not a choice you make. Check it
                before you assume your{' '}
                <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                  Express Entry
                </Link>{' '}
                profile is relevant.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="How candidates are selected" title="Interest, or direct application" />
            <ul className="mt-6 space-y-4">
              {[
                [
                  'Expression of interest',
                  'You register in a pool describing your profile. The province invites candidates it wants, when it wants them. Registering is not applying, and being in the pool is not a queue you advance in by waiting.',
                ],
                [
                  'Direct application window',
                  'Some routes open for applications for a defined period and close again, sometimes on volume. Missing a window is a common and entirely avoidable failure.',
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
          eyebrow="Categories, not a current list"
          title="The kinds of stream a province runs"
          subtitle="These are the recurring shapes of provincial nomination routes across Canada. They are not a list of what Ontario is running today — for that, read the province’s own page."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STREAM_KINDS.map((s) => (
            <FeatureCard key={s.title} icon={<Icon name={s.icon} />} kicker={s.kicker} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Why we do not list Ontario’s streams here">
            <p>
              Provincial streams open, pause, close on volume, and are replaced outright. Ontario
              rebuilt its nomination framework in 2026, replacing the streams it had been running —
              routes that had been described on hundreds of advisory pages ceased to exist, and
              those pages did not update. People prepared applications for streams that were no
              longer there. It has changed before and will change again.
            </p>
            <p>
              A page that names streams and their criteria has a shelf life measured in months. This
              one is written to survive that. The province publishes what is open, what has changed
              and what the current criteria are on its own site, and that is the only version worth
              relying on.
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
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Preparing for a stream that no longer exists.</strong> The most expensive mistake
            on this route, and it has nothing to do with your qualifications. People work from an
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
            filed application and does not accrue seniority. Waiting in a pool while a direct-application
            window opens and closes elsewhere is a real and recurring loss.
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
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no genuine connection to Ontario, this is the wrong province">
            <p>
              Nominating provinces expect you to live there. Choosing a province you have no link to
              because it appears to have lower requirements this quarter is one of the most common and
              most expensive mistakes we see. The application asks you to demonstrate intent to settle;
              with nothing to demonstrate, you are paying a provincial fee to have that gap noticed.
              Answering the intent question untruthfully is worse — that is misrepresentation, and it
              carries a bar on future applications.
            </p>
            <p>
              This route also tends not to suit people whose occupation is well supplied in Ontario, or
              who have no Ontario employer, study or work history and no realistic way to acquire one.
              If you are strong on age, education and language but have no provincial tie at all,{' '}
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
              And if you are running a business rather than seeking employment, an entrepreneur route is
              a business file with a performance agreement behind it — not a faster version of a skilled
              worker application.{' '}
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
            Everything that changes — which routes are accepting applications, what the criteria are,
            which occupations are targeted, what the provincial fee is — lives on Ontario’s own site.
            We do not reproduce it, because a figure or a stream name that is right today is a
            liability on a page you might read next year.
          </p>
          <p>
            Ontario publishes the programme and its{' '}
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
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
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
