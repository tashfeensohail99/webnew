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
 * LMIA-based work permits.
 *
 * The single most important job of this page is to correct a belief that costs
 * Pakistani applicants real money every week: that an LMIA is something you buy.
 * It isn't. It's an employer's application about their own labour need. Everything
 * else on the page follows from getting that one point across.
 */
export const metadata: Metadata = {
  title: 'LMIA-Based Work Permits for Canada',
  description:
    'What a Labour Market Impact Assessment is, why it is the employer’s application not yours, and why nobody can legally sell you one.',
  alternates: { canonical: '/work-permits/lmia' },
};

const PAGE = 'work-permits-lmia';

const WHO_DOES_WHAT = [
  {
    icon: 'building' as const,
    kicker: 'The employer',
    title: 'Applies for the LMIA',
    body: 'A Canadian employer applies to Employment and Social Development Canada, about their own business and their own hiring need. They pay the processing fee — and by law they cannot recover it from you.',
  },
  {
    icon: 'scale' as const,
    kicker: 'ESDC',
    title: 'Assesses the labour market',
    body: 'ESDC decides whether hiring a foreign worker would have a neutral or positive effect on the Canadian labour market. The decision is about the job, not about you as a person.',
  },
  {
    icon: 'user' as const,
    kicker: 'You',
    title: 'Apply for the work permit',
    body: 'Only once a positive assessment exists do you apply to IRCC for the work permit, using the employer’s assessment and a written job offer.',
  },
  {
    icon: 'shield' as const,
    kicker: 'IRCC',
    title: 'Decides the permit',
    body: 'A visa officer assesses you separately — admissibility, medicals, ability to do the job, and whether you will leave at the end of your authorised stay.',
  },
];

const STEPS = [
  {
    title: 'A real employer, a real vacancy',
    body: 'Everything starts with a Canadian employer who actually needs the role filled and is actively engaged in the business. Without that, there is nothing to assess.',
  },
  {
    title: 'The employer recruits Canadians first',
    body: 'The employer must show genuine effort to hire or train Canadian citizens and permanent residents — advertising the role, for a set period, through the channels ESDC requires for that occupation and stream.',
  },
  {
    title: 'The employer files with ESDC',
    body: 'The employer submits the application, the recruitment record, the wage they will pay and the working conditions. They pay the processing fee themselves.',
  },
  {
    title: 'ESDC issues a decision',
    body: 'A positive or neutral assessment goes to the employer, who shares the reference details and a signed job offer with you. A negative one ends the route for that vacancy.',
  },
  {
    title: 'You apply to IRCC',
    body: 'Now — and only now — your application exists. Forms, the offer, the assessment reference, proof you can actually do the job, police and medical requirements as they apply to you.',
  },
  {
    title: 'Decision, then the permit itself',
    body: 'If approved you are issued the authorisation to travel and the permit is issued at the port of entry. It is tied to that employer and that occupation.',
  },
];

const FAQS = [
  {
    q: 'Can I apply for my own LMIA?',
    a: 'No. The assessment is requested by a Canadian employer about their own business — it is not an application an individual can file. Anyone telling you they will "get you an LMIA" is describing something that does not exist in the way they are describing it.',
  },
  {
    q: 'Someone is offering to sell me an LMIA. Should I pay?',
    a: 'No. An employer is legally prohibited from recovering the assessment fee from the worker, so a payment to obtain one is either outright fraud or is inducing an employer to break the conditions they are bound by. The usual outcomes are that you lose the money, or you arrive to a job that was never real, or you are found to have misrepresented and face a bar on future applications. Report it rather than pay it.',
  },
  {
    q: 'Is a job offer the same as an LMIA?',
    a: 'No. A job offer is a document from an employer. The assessment is a separate decision by ESDC about whether filling that job with a foreign worker is acceptable for the Canadian labour market. You can hold a genuine offer and still have no assessment behind it.',
  },
  {
    q: 'How much does an LMIA cost and how long does it take?',
    a: 'ESDC publishes the current processing fee and current service standards on its own site, and both change. We will not print a number here that you might rely on months later. In any case the fee is the employer’s to pay, not yours.',
  },
  {
    q: 'Do all Canadian work permits need an LMIA?',
    a: 'No. A substantial set of routes is exempt — intra-company transfers, certain free-trade professionals, spousal open work permits, and permits argued on significant benefit to Canada, among others. If you have no employer at all, an exempt route is usually the more honest conversation to have.',
  },
  {
    q: 'Once I have the permit, can I change jobs?',
    a: 'An LMIA-based permit is normally tied to the named employer and occupation. Moving to a different employer generally means a new authorisation, not simply resigning and starting elsewhere. Plan for that before you accept the role.',
  },
  {
    q: 'Can you guarantee me an LMIA-based work permit?',
    a: 'No, and no one honestly can. Two separate government decisions sit between you and the permit, and neither is ours to make. What we can do is tell you whether your situation is realistic before you spend money on it.',
  },
];

export default function LmiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · LMIA-based work permits"
        title={
          <>
            An LMIA is not something{' '}
            <span className="text-gold-300">you can buy</span>
          </>
        }
        subtitle={
          <>
            A Labour Market Impact Assessment is an employer’s application about an employer’s
            vacancy. You cannot file one, and anyone selling you one is committing or facilitating
            fraud. Here is how the route actually works.
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
          title="What a Labour Market Impact Assessment is"
        />
        <Prose>
          <p>
            Most Canadian work permits rest on a simple principle: a Canadian employer should hire a
            Canadian first. A Labour Market Impact Assessment — an LMIA — is the mechanism that tests
            whether that has genuinely been tried.
          </p>
          <p>
            The employer applies to Employment and Social Development Canada. ESDC assesses whether
            filling the vacancy with a foreign worker would have a neutral or positive effect on the
            Canadian labour market: whether it fills a real shortage, whether the wage matches what
            the occupation actually pays in that region, whether working conditions meet accepted
            Canadian standards, and whether the employer made reasonable efforts to hire or train
            Canadians first.
          </p>
          <p>
            Notice what is absent from that list. None of it is about you. The assessment is about the
            job and the employer. You enter the picture afterwards, at a second and separate decision
            made by a different department.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHOSE OBLIGATION ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Whose obligation is whose"
          title="Four parties, and only one of them is you"
          subtitle="In our own consultations, this is the point people have most often been misled about before they reach us."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_DOES_WHAT.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Nobody can sell you an LMIA">
            <p>
              The regulations bind the employer directly: they must be actively engaged in the
              business, they must provide the job on the terms that were offered, they must follow the
              federal and provincial laws governing employment and recruitment, and they must not
              charge or recover the assessment fee from the worker, directly or indirectly.
            </p>
            <p>
              So an offer to sell you an LMIA for a fee is one of three things — a straightforward
              theft, an invented employer, or a real employer being induced to break the conditions
              they are legally bound by. All three end badly for you, and misrepresentation on an
              immigration application carries a bar on applying again. If someone quotes you a price
              for an LMIA, that is the moment to walk away, not to negotiate.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE EMPLOYER'S RECRUITMENT ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Before anything is filed"
              title="What the employer has to do first"
            />
            <Prose>
              <p>
                The recruitment test is the heart of the assessment. In substance, the employer has to
                advertise the vacancy so that Canadians and permanent residents have a fair chance at
                it — through the channels ESDC specifies for that occupation and stream, for a minimum
                period, and at the wage the job will actually pay.
              </p>
              <p>
                They then have to account for what happened: how many Canadians applied, who was
                interviewed, and why none was hired. A recruitment record that reads as a formality
                rather than a genuine search is a common reason an assessment fails.
              </p>
              <p>
                The exact advertising channels, durations and exemptions differ by stream and by
                occupation, and they are revised periodically. ESDC publishes the current requirements
                — that is the only place to read them.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What ESDC weighs" title="The factors in the assessment" />
            <ul className="mt-6 space-y-4">
              {[
                ['Genuine labour shortage', 'Whether the vacancy reflects a real gap the local labour market cannot fill.'],
                ['Wage and working conditions', 'Whether the wage matches prevailing rates for that occupation and region, and conditions meet accepted Canadian standards.'],
                ['Recruitment effort', 'Whether the employer genuinely tried to hire or train Canadians and permanent residents first.'],
                ['Benefit to Canadians', 'Whether the hire creates or retains jobs, or transfers skills, for Canadian workers.'],
                ['Past commitments kept', 'Whether the employer delivered on what they promised in any previous assessment.'],
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

      {/* ===================== THE TWO-STEP SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="Two applications, in this order, never the other way round"
          subtitle="Steps one to four are the employer’s. You have no application of your own until step five."
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
            <strong>Paying an agent for an LMIA.</strong> The pattern we are asked about most often.
            There is no product to deliver, so there is nothing to complain about later — and often no
            agent to find.
          </p>
          <p>
            <strong>An assessment that exists but does not fit you.</strong> A positive assessment is
            for a specific occupation. If your qualifications and work history do not credibly show you
            can do that job, IRCC can refuse the permit even though the employer’s side succeeded.
          </p>
          <p>
            <strong>An employer who cannot withstand scrutiny.</strong> The employer must be actively
            engaged in a real business and is subject to inspection afterwards. A shell arranged to
            produce paperwork tends to fail, and it takes your application down with it.
          </p>
          <p>
            <strong>Assuming the permit is portable.</strong> An LMIA-based permit is normally tied to
            the named employer and occupation. People accept roles on the assumption they will switch
            employers on arrival and find that they cannot simply do so.
          </p>
          <p>
            <strong>Documents you did not write.</strong> An offer letter or experience letter arranged
            by a third party, containing claims you cannot support, is misrepresentation whether or not
            you drafted it. The consequence lands on you.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no employer, this is not your route">
            <p>
              An LMIA-based work permit begins with a Canadian employer who already wants to hire you
              for a specific role. If you do not have one, there is no step you can take to start this
              process — and no fee you can pay to create one. Being told otherwise is what most often
              costs people money before they reach us.
            </p>
            <p>
              It also tends not to suit people whose occupation is well supplied in Canada, or whose
              documented experience does not clearly match the job title on the offer. And if you own or
              run a business, or you are self-employed, the LMIA route may be the wrong question
              entirely — there are routes that need no employer and no assessment at all.
            </p>
            <p>
              We would rather tell you on the first call that this does not fit than take a fee for a
              file that was never going to work.{' '}
              <Link
                href="/work-permit-canada"
                className="font-semibold text-accent-500 link-underline"
              >
                See the route that needs no employer
              </Link>
              . Two government decisions sit between you and this permit, and neither is ours to make
              — which is why we publish a{' '}
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

      {/* ===================== NUMBERS AND SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Fees, timelines and requirements" />
        <Prose>
          <p>
            Processing fees, service standards, advertising durations, stream definitions and wage
            rules all change, sometimes at short notice. We deliberately do not publish those figures
            here, because a number that is right today is a liability on a page you might read next
            year.
          </p>
          <p>
            ESDC and IRCC publish the current requirements on{' '}
            <a
              href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , and the underlying obligations sit in the{' '}
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
        eyebrow="Before you pay anyone"
        title="Find out whether an LMIA route is even the right question"
        subtitle="Tell us your occupation, your experience and whether you actually have a Canadian employer. We will tell you honestly whether this route fits — and if it does not, which one might."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether an LMIA-based work permit is realistic in my situation."
      />
    </>
  );
}
