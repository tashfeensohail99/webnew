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
 * Atlantic Immigration Program.
 *
 * Two jobs on this page. First, explain an employer-driven permanent-residence
 * route accurately: designation, endorsement, settlement plan, no LMIA. Second,
 * kill the belief that the job offer is purchasable. The absence of an LMIA is
 * routinely mis-sold in Pakistan as "no employer needed" — the opposite is true.
 */
export const metadata: Metadata = {
  title: 'Atlantic Immigration Program',
  description:
    'A permanent, employer-driven PR route in the four Atlantic provinces: designated employers, endorsement, a settlement plan, and no LMIA required.',
  alternates: { canonical: '/atlantic-immigration-program' },
};

const PAGE = 'atlantic-immigration-program';

const PARTIES = [
  {
    icon: 'building' as const,
    kicker: 'The employer',
    title: 'Must be designated first',
    body: 'A business in one of the four Atlantic provinces applies to that province to become a designated employer. Designation is granted to the business, before any candidate exists, and can be withdrawn.',
  },
  {
    icon: 'scale' as const,
    kicker: 'The province',
    title: 'Endorses the job offer',
    body: 'Once a designated employer selects a candidate, the province assesses the pair — the vacancy and the person — and issues an endorsement. Without it there is no application.',
  },
  {
    icon: 'chat' as const,
    kicker: 'A settlement organisation',
    title: 'Writes the settlement plan',
    body: 'An approved immigrant settlement service provider works with you and your accompanying family and produces a settlement plan. An endorsement application without one is not processed.',
  },
  {
    icon: 'shield' as const,
    kicker: 'IRCC',
    title: 'Decides permanent residence',
    body: 'The federal application is assessed separately — admissibility, medicals, security, and whether you meet the programme requirements. The province recommends; IRCC decides.',
  },
];

const STEPS = [
  {
    title: 'An employer obtains designation',
    body: 'A business in Nova Scotia, New Brunswick, Prince Edward Island or Newfoundland and Labrador applies to its provincial immigration office. It must be in good standing with labour and occupational health and safety authorities and commit to supporting newcomers.',
  },
  {
    title: 'The employer makes a job offer',
    body: 'The offer must be non-seasonal, at a skill level the programme recognises, and for a duration the programme specifies. It is made directly to you. There is no Labour Market Impact Assessment step.',
  },
  {
    title: 'You complete a settlement plan',
    body: 'The employer refers you to an approved settlement service provider — a pre-arrival provider if you are outside Canada. The plan covers you and any accompanying family, and is a mandatory part of the file.',
  },
  {
    title: 'The employer applies for endorsement',
    body: 'Employer and candidate each complete their part of a provincial endorsement application. The province reviews the vacancy, your credentials and the settlement plan together.',
  },
  {
    title: 'You apply to IRCC for permanent residence',
    body: 'With the endorsement in hand you file the federal permanent-residence application: language results, an educational credential assessment where required, proof of work experience, funds, and the usual medical and police requirements.',
  },
  {
    title: 'Optional temporary work permit',
    body: 'An endorsed candidate may be able to apply for a temporary work permit to start the job while permanent residence is processed. It is a bridge, not a substitute, and it is conditional.',
  },
];

const REQUIREMENTS = [
  ['A job offer from a designated employer', 'Not any employer — one that already holds designation from the province in which the job sits.'],
  ['Qualifying work experience', 'Paid experience in an occupation the programme accepts, matched to the offer. Certain graduates of recognised Atlantic post-secondary institutions may be exempt from the experience requirement.'],
  ['Education and credential assessment', 'A qualifying credential. Where it was earned outside Canada, an educational credential assessment is normally required.'],
  ['Language ability', 'A test result from an approved English or French test, at the level the programme sets for the occupation.'],
  ['Settlement funds', 'Proof you can support yourself and your family on arrival, unless you are already working in Canada on a valid permit.'],
  ['A completed settlement plan', 'Prepared with an approved settlement service provider — a document, not a formality, and a condition of processing.'],
];

const FAQS = [
  {
    q: 'If no LMIA is needed, does that mean I do not need an employer?',
    a: 'No — it means the opposite. The programme replaces the labour market test with employer designation. The employer still has to exist, still has to be approved by the province in advance, and still has to make you a real offer. Removing the LMIA removes a step for the employer, not the requirement of an employer for you.',
  },
  {
    q: 'Can I buy a job offer from a designated employer?',
    a: 'No. Paying for a job offer is fraud, whether the employer is real or invented. If it is invented, you lose the money. If it is real, you have induced a designated employer to breach the commitments their designation rests on, which puts their designation and your application at risk. Misrepresentation on an immigration application carries a bar on applying again. There is no version of this that ends well.',
  },
  {
    q: 'Can I apply on my own, without an employer, and find work later?',
    a: 'No. There is no candidate-first entry to this programme. The sequence begins with a designated employer and a job offer, and every subsequent step depends on it. If you have no Atlantic employer, this is not your route today — a different one may be.',
  },
  {
    q: 'Do I have to stay in the Atlantic province?',
    a: 'The programme is built around settling in the province that endorsed you, and your application asks you to confirm that intention. Permanent residence itself carries mobility rights under the Charter, but applying with no intention of living there is misrepresentation. Do not treat the Atlantic provinces as a doorway to Toronto.',
  },
  {
    q: 'What is a settlement plan, and who pays for it?',
    a: 'It is a document prepared with an approved immigrant settlement service provider that identifies what you and your family will need on arrival — language, schooling, credential recognition, community connections — and which services exist locally. Settlement service organisations are funded to provide it. Be sceptical of anyone charging you separately for one.',
  },
  {
    q: 'What are the language and education requirements?',
    a: 'Both are set by the programme and vary by the skill category of the job offer, and both are revised from time to time. IRCC publishes the current thresholds and the list of accepted tests and credential-assessment bodies. We will not print numbers here that you might rely on a year from now.',
  },
  {
    q: 'How long does it take and what does it cost?',
    a: 'IRCC publishes current processing times and fees, and both change. Ask us for the position on the day you are ready to file rather than relying on a figure printed on any consultant’s website, including this one.',
  },
  {
    q: 'Can you guarantee an endorsement or permanent residence?',
    a: 'No. Two separate government decisions sit between you and permanent residence — a provincial endorsement and a federal approval — and neither is ours to make. What we can do is tell you before you spend money whether your profile and your job offer are realistic.',
  },
];

export default function AtlanticImmigrationProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Atlantic Immigration Program"
        title={
          <>
            Permanent residence that starts with{' '}
            <span className="text-gold-300">a real Atlantic employer</span>
          </>
        }
        subtitle={
          <>
            An employer-driven permanent route into Nova Scotia, New Brunswick, Prince Edward Island
            and Newfoundland and Labrador. No Labour Market Impact Assessment is required — which is
            precisely why it is mis-sold. Here is how it actually works.
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
          eyebrow="The route, plainly"
          title="What the Atlantic Immigration Program is"
        />
        <Prose>
          <p>
            The Atlantic Immigration Program is a permanent federal programme, run in partnership with
            the four Atlantic provinces, that leads directly to permanent residence rather than to a
            temporary permit. It exists because employers in Atlantic Canada have persistent difficulty
            filling roles locally, and because the region wants newcomers who stay.
          </p>
          <p>
            It works differently from most employer-led routes. Instead of testing each vacancy through
            a Labour Market Impact Assessment, the programme approves the employer once, in advance.
            A business applies to its province to become a{' '}
            <strong>designated employer</strong>. Designation says the province has looked at that
            business — its standing with labour and occupational health and safety authorities, its
            record, and its willingness to support newcomers — and is prepared to let it hire through
            the programme.
          </p>
          <p>
            After that, each hire is assessed as a pair: the job and the person. The province issues an{' '}
            <strong>endorsement</strong>, and the endorsement is what allows a federal permanent
            residence application to be filed. Alongside it sits a <strong>settlement plan</strong>,
            prepared with an approved settlement organisation, covering you and any family coming with
            you.
          </p>
          <p>
            The programme is one of several routes that do not run through Express Entry. If you are
            weighing it against others, our{' '}
            <Link href="/immigration-programs" className="font-semibold text-accent-500 link-underline">
              overview of Canadian immigration programmes
            </Link>{' '}
            sets out where each one fits.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO DOES WHAT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Four parties"
          title="Who does what, and in what order"
          subtitle="Only one of these four decisions is yours to make, and it is not the first one."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTIES.map((p) => (
            <FeatureCard key={p.title} icon={<Icon name={p.icon} />} kicker={p.kicker} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="No LMIA does not mean no employer">
            <p>
              This is the single most exploited sentence in the programme. Because no Labour Market
              Impact Assessment is required, agents describe the route as open, or as something you can
              enter with an application and sort out the job later. You cannot. The programme replaced
              the labour market test with employer designation — it did not replace the employer.
            </p>
            <p>
              Every step after the job offer depends on the offer existing. If you have no designated
              Atlantic employer, you have no file. If someone offers to supply one for a fee, that is
              the point at which to stop, not to negotiate. See how the equivalent misconception plays
              out on the{' '}
              <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
                LMIA route
              </Link>
              , where the same money is lost every week.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How the process runs, start to finish"
          subtitle="Steps one and two belong to the employer. You have no application of your own until an endorsement exists."
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

      {/* ===================== REQUIREMENTS + PROVINCES ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="What you need" title="The candidate requirements, in kind" />
            <ul className="mt-6 space-y-4">
              {REQUIREMENTS.map(([term, def]) => (
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

          <div>
            <SectionHeading
              eyebrow="Where it applies"
              title="The four Atlantic provinces"
              subtitle="Each province runs its own designation and endorsement process, with its own forms, contacts and priorities. The federal requirements are shared; the provincial administration is not."
            />
            <Prose>
              <p>
                The programme covers Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland
                and Labrador. Your employer’s province determines which office designates it, which
                office endorses you, and which settlement organisations you are referred to.
              </p>
              <p>
                That provincial administration is not static, and this matters more than most pages
                admit. Provinces periodically pause new employer designations, close the programme to
                particular occupations or sectors, restrict endorsement of candidates who are outside
                Canada, or change how endorsement applications are selected. A route that was open to
                your occupation last year may not be open to it now. Before you act on anything here,
                check the current notices published by the province your employer is in — the links
                below go to those offices.
              </p>
              <p>
                Each of those provinces also runs a separate provincial nominee stream, which is a
                different route with different rules — worth understanding if the Atlantic Immigration
                Program does not fit but the region still appeals to you:
              </p>
              <ul>
                <li>
                  <Link href="/pnp/nova-scotia" className="font-semibold text-accent-500 link-underline">
                    Nova Scotia Nominee Program
                  </Link>
                </li>
                <li>
                  <Link href="/pnp/new-brunswick" className="font-semibold text-accent-500 link-underline">
                    New Brunswick Provincial Nominee Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pnp/prince-edward-island"
                    className="font-semibold text-accent-500 link-underline"
                  >
                    Prince Edward Island Provincial Nominee Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pnp/newfoundland-labrador"
                    className="font-semibold text-accent-500 link-underline"
                  >
                    Newfoundland and Labrador Provincial Nominee Program
                  </Link>
                </li>
              </ul>
            </Prose>
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
            <strong>Paying for a job offer.</strong> The most common and the most damaging. Sometimes
            the employer does not exist. Sometimes it exists but is not designated. Sometimes it is
            designated and the arrangement destroys its designation along with your application.
          </p>
          <p>
            <strong>An employer that is not designated.</strong> A genuine Atlantic employer with a
            genuine vacancy is still not enough on its own. Designation is a separate approval the
            business must already hold. Confirm it with the provincial office before you build plans
            around an offer.
          </p>
          <p>
            <strong>Experience that does not match the offer.</strong> Endorsement assesses the pairing.
            A general work history that does not clearly evidence the specific occupation on the offer
            is a routine reason a file stalls, and experience letters written by someone else are worse
            than useless.
          </p>
          <p>
            <strong>Treating the settlement plan as paperwork.</strong> An endorsement application
            without a completed settlement plan is not processed. It is prepared with an approved
            settlement organisation, and the employer has a commitment to help you access those
            services.
          </p>
          <p>
            <strong>Intending to leave immediately.</strong> The programme is about staying. Applying
            for an Atlantic endorsement while planning to relocate on landing is a misrepresentation
            risk, and it is one people talk themselves into casually.
          </p>
          <p>
            <strong>Confusing the temporary permit with the outcome.</strong> The optional work permit
            lets you start earlier. It does not decide your permanent residence, and it comes with
            conditions. If the permanent application is refused, the permit does not save it.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no designated Atlantic employer, this is not your route">
            <p>
              There is no candidate-first entry here. Without a job offer from an employer that already
              holds designation in one of the four provinces, there is no step you can take to begin,
              and no fee that creates one. That is the honest answer, and it is the one most often
              withheld from people who have already paid.
            </p>
            <p>
              It also tends not to suit people whose occupation sits outside the skill categories the
              programme recognises — and provinces additionally close the route to particular
              occupations and sectors from time to time, so an occupation that qualifies federally may
              still not be endorsed where your employer is. It does not suit people whose documented
              experience does not match the job title on
              the offer, and people who intend to settle elsewhere in Canada — the programme is designed
              around remaining in the Atlantic region, and applying otherwise carries real risk.
            </p>
            <p>
              If you have strong language results and skilled experience but no Canadian employer,{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>{' '}
              or a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee programme
              </Link>{' '}
              is usually the more useful conversation. If you have an employer but outside Atlantic
              Canada, the{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                work permit routes
              </Link>{' '}
              are the place to start. We would rather say so on the first call than take a fee for a
              file that was never going to work — which is why we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
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
          title="Fees, thresholds and provincial forms"
        />
        <Prose>
          <p>
            Language thresholds, education requirements, settlement fund levels, fees and processing
            times all change. We deliberately do not publish those figures here, because a number that
            is right today becomes a liability on a page you might read next year.
          </p>
          <p>
            IRCC publishes the federal requirements for the{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Atlantic Immigration Program
            </a>
            . Designation and endorsement are administered provincially — by{' '}
            <a
              href="https://liveinnovascotia.com/atlantic-immigration-program"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nova Scotia
            </a>
            ,{' '}
            <a
              href="https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/atlantic-immigration-program.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              New Brunswick
            </a>
            ,{' '}
            <a
              href="https://www.princeedwardisland.ca/en/topic/atlantic-immigration-program"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Prince Edward Island
            </a>
            , and{' '}
            <a
              href="https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/atlantic-immigration-program/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Newfoundland and Labrador
            </a>
            . Each of those offices publishes its own current notices — occupation restrictions,
            pauses on designation or endorsement intake, and how candidates are selected. Read the
            notice page for the relevant province, and check whether a prospective employer holds
            current designation with that province directly, on the day it matters.
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
        eyebrow="Before you pay anyone"
        title="Find out whether an Atlantic route is realistic for you"
        subtitle="Tell us your occupation, your experience, your language results, and whether you actually have an offer from a designated Atlantic employer. We will tell you honestly whether this fits — and if it does not, which route might."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether the Atlantic Immigration Program is realistic in my situation."
      />
    </>
  );
}
