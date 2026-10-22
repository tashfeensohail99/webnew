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
 * Global Talent Stream.
 *
 * The job of this page is to stop applicants from trying to "apply to the GTS".
 * It is an employer stream inside the Temporary Foreign Worker Program. The
 * employer is the applicant, the employer signs the benefits plan, and the
 * employer carries the obligations afterwards. No number on this page.
 */
export const metadata: Metadata = {
  title: 'Global Talent Stream Work Permits for Canada',
  description:
    'How the Global Talent Stream works: the employer categories ESDC runs, the Labour Market Benefits Plan it requires, and why a worker cannot start it alone.',
  alternates: { canonical: '/work-permits/global-talent-stream' },
};

const PAGE = 'work-permits-global-talent-stream';

const CATEGORIES = [
  {
    icon: 'building' as const,
    kicker: 'The referral route',
    title: 'Referred high-growth companies',
    body: 'An employer cannot walk into this route on its own. It has to be referred to ESDC by an organisation ESDC has designated as a referral partner, and the role must be for unique and specialised talent the company needs in order to scale. Which organisations hold that designation is set by ESDC and changes, so check the current roster on its site rather than any list reproduced elsewhere.',
  },
  {
    icon: 'doc' as const,
    kicker: 'The occupations route',
    title: 'Occupations on the published list',
    body: 'An employer hiring into an occupation that appears on the occupations list ESDC maintains for the stream can apply without a referral. Occupations are added to and removed from that list, so the only version worth relying on is the live one on ESDC’s site.',
  },
];

const STEPS = [
  {
    title: 'A Canadian employer decides to hire',
    body: 'The starting point is an employer with a specific role it wants filled and a business case for filling it from outside Canada. There is no step before this one that a worker can take.',
  },
  {
    title: 'The employer establishes which category applies',
    body: 'Either it secures a referral from a designated referral partner for unique and specialised talent, or the role falls within an occupation on the published list. Different categories, different entry conditions.',
  },
  {
    title: 'The employer builds a Labour Market Benefits Plan',
    body: 'This is developed with ESDC, not filed at it. The employer sets out what lasting benefit the hire will produce for Canadian workers and the Canadian labour market, and commits to it in writing.',
  },
  {
    title: 'ESDC assesses and issues a decision',
    body: 'The assessment goes to the employer, along with the terms of the plan it has committed to. A negative outcome means there is nothing for you to apply on the strength of; what the employer can do next is a decision for the employer and its own advisers.',
  },
  {
    title: 'You apply to IRCC for the work permit',
    body: 'Only now does an application of yours exist. IRCC assesses you separately: your ability to actually do the job, admissibility, and the usual medical and security requirements as they apply to you.',
  },
  {
    title: 'The employer keeps reporting afterwards',
    body: 'The commitments in the benefits plan are reviewed with ESDC over time. Continued access to the stream depends on the employer showing it did what it said it would.',
  },
];

const FAQS = [
  {
    q: 'Can I apply to the Global Talent Stream myself?',
    a: 'No. The Global Talent Stream is a stream of the Temporary Foreign Worker Program in which the applicant is a Canadian employer. There is no worker-side application, no worker-side portal and no fee you can pay to enter it. Your side of the process begins only after an employer has been through theirs.',
  },
  {
    q: 'Someone has offered to place me in the Global Talent Stream for a fee. Is that legitimate?',
    a: 'Treat it as a serious warning sign. The employer is the applicant here, the employer carries the assessment costs, and the employer is barred from recovering those costs from the worker. An offer to sell you entry to a stream you cannot apply to is either theft, an invented employer, or a real employer being induced to breach its obligations. All three end badly for you, and misrepresentation on an immigration application carries a bar on applying again.',
  },
  {
    q: 'What is a Labour Market Benefits Plan?',
    a: 'It is a written commitment by the employer, developed with ESDC, describing the lasting benefit that hiring the worker will create for Canadians and permanent residents. Each category carries a different mandatory commitment — job creation for Canadians and permanent residents in the referred category, and investment in skills and training for Canadians and permanent residents in the occupations-list category — plus additional complementary commitments with concrete activities attached to each. Progress against the plan is reviewed with ESDC afterwards.',
  },
  {
    q: 'Does the employer still have to advertise the job to Canadians first?',
    a: 'The standard recruitment test that applies to most Labour Market Impact Assessments is handled differently here — the benefits plan, rather than a recruitment file, carries the obligation to Canadian workers. That is a design difference in the stream, not an absence of obligation, and ESDC sets the current expectations for each category on its own site.',
  },
  {
    q: 'How fast is it, and what does it cost?',
    a: 'We do not publish service standards or fees on this page. Both change, and a figure that is correct today becomes a liability on a page you might read next year. ESDC and IRCC publish the current fees and current service standards on their own sites. In any case the assessment fee is the employer’s to pay.',
  },
  {
    q: 'I work in technology. Does that make me eligible?',
    a: 'Not by itself. Eligibility attaches to a specific role at a specific employer, not to a profession or an industry. A senior engineer with no Canadian employer has no route here; a mid-level specialist with a referred employer and a matching role may have one.',
  },
  {
    q: 'Is this a route to permanent residence?',
    a: 'It is a temporary work permit route. Canadian skilled work experience can matter later in permanent residence routes, but nothing about this stream converts automatically. Anyone describing it as permanent residence is describing a different thing.',
  },
  {
    q: 'Can you guarantee me a Global Talent Stream work permit?',
    a: 'No, and no one honestly can. Two separate government decisions sit between you and the permit, plus an employer decision before either of them, and none of the three is ours to make.',
  },
];

export default function GlobalTalentStreamPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Global Talent Stream"
        title={
          <>
            An employer route that{' '}
            <span className="text-gold-300">you cannot start</span>
          </>
        }
        subtitle={
          <>
            The Global Talent Stream is an employer stream for specific in-demand occupations and for
            referred high-growth companies. The applicant is the employer. Your part begins only after
            theirs has succeeded.
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
          title="What the Global Talent Stream is"
        />
        <Prose>
          <p>
            The Global Talent Stream sits inside the Temporary Foreign Worker Program. Like other{' '}
            <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
              LMIA-based routes
            </Link>
            , it produces a labour market assessment that a Canadian employer holds and that a worker
            then uses to apply for a work permit. What distinguishes it is the trade the employer makes.
          </p>
          <p>
            In place of the standard recruitment file — advertise, record who applied, explain why no
            Canadian was hired — the employer commits to a Labour Market Benefits Plan: a set of
            undertakings about what the hire will do for Canadian workers, agreed with Employment and
            Social Development Canada and reviewed afterwards. The obligation to the Canadian labour
            market does not disappear. It changes shape, from a backward-looking record into a
            forward-looking commitment.
          </p>
          <p>
            Because the commitment is ongoing, the employer is taking on something real. That is why
            this stream is used by companies with an actual growth plan, and why it does not behave
            like a route an intermediary can arrange on your behalf.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE TWO CATEGORIES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Two doors in"
          title="The categories, and who opens each"
          subtitle="ESDC currently operates the stream through two entry routes, and it defines what each one requires. Both are entered by the employer. They differ in what qualifies the employer to be there at all — check the current definitions on ESDC’s site before relying on either."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <FeatureCard key={c.title} icon={<Icon name={c.icon} />} kicker={c.kicker} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Neither category has a worker-side entrance">
            <p>
              A referral in the first category is a referral of a company, not of a person. An
              occupation on the list in the second category qualifies a vacancy at an employer, not a
              candidate’s CV. In both cases the assessment is about the employer and the role. You are
              assessed later, separately, by IRCC.
            </p>
            <p>
              This matters practically. People from Pakistan write to us describing their occupation and
              asking how to enter the stream. There is no answer to that question, because the question
              has the sequence backwards.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE BENEFITS PLAN ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The employer’s commitment"
              title="What a Labour Market Benefits Plan actually is"
            />
            <Prose>
              <p>
                The plan is developed with ESDC rather than simply submitted to it. The employer sets
                out the lasting positive effect the hire is meant to have on the Canadian labour market
                and commits to specific activities that will produce it.
              </p>
              <p>
                Each category carries its own mandatory commitment. An employer referred as a
                high-growth company commits to creating jobs for Canadians and permanent residents. An
                employer hiring into an occupation on the published list commits to increasing its
                investment in skills and training for Canadians and permanent residents.
              </p>
              <p>
                On top of the mandatory commitment, the employer agrees to further complementary
                benefits, each with concrete activities attached rather than a statement of intent.
                Progress is then reviewed with ESDC, and continued access to the stream depends on the
                employer having done what it undertook to do.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What that means for you" title="Consequences worth understanding" />
            <ul className="mt-6 space-y-4">
              {[
                ['The employer carries a long obligation', 'Their commitments outlast your arrival. An employer treating the paperwork as a formality is a risk to your file, not just to theirs.'],
                ['The role is defined before you are', 'The assessment describes a specific position. Your permit follows that position, not your general profile.'],
                ['You are still assessed on your own merits', 'IRCC decides your permit separately — whether you can genuinely do the job, and whether you are admissible.'],
                ['The permit is employer-specific', 'It is normally tied to the named employer and occupation. Changing employers generally means new authorisation, not a resignation letter.'],
                ['Nothing here is portable to another candidate', 'An assessment obtained for one worker is not an asset that can be transferred or sold on.'],
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

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="The sequence, and only one stage of it is yours"
          subtitle="The stages before yours belong to the employer, and the employer’s obligations continue after you have arrived."
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
            <strong>Paying to be “placed” in the stream.</strong> The most common and the most
            expensive. There is no worker-side application to place you into, so there is no product to
            deliver and usually no agent left to find afterwards.
          </p>
          <p>
            <strong>Treating an occupation list as a personal eligibility test.</strong> Finding your
            job title on a published list tells you what an employer could hire for. It tells you
            nothing about whether any employer wants to.
          </p>
          <p>
            <strong>Experience that does not match the role.</strong> The assessment is issued for a
            specific position. If your documented history does not credibly show you can do that
            specific job, IRCC can refuse the permit even though the employer’s side succeeded.
          </p>
          <p>
            <strong>Documents arranged by someone else.</strong> An offer letter or experience letter
            produced by a third party, containing claims you cannot support, is misrepresentation
            whether or not you wrote it. The consequence lands on you, not on them — and if that has
            already happened, it is a matter to take to a licensed representative rather than to
            handle from a web page. We set out how we approach it on our{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              misrepresentation page
            </Link>
            .
          </p>
          <p>
            <strong>Assuming speed means certainty.</strong> ESDC describes this stream as a faster route
            for employers who qualify, and publishes whatever service standard currently applies on its
            own site. Whatever that standard says, moving quickly is not the same as being likely, and it
            is not a reason to skip checking whether the employer and the role are real.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If you have no Canadian employer, this is not your route">
            <p>
              Everything on this page begins with a company that has already decided to hire you. If no
              such company exists, there is no first step available to you here — not a form, not a
              registration, not a fee. This is the single most common reason we tell people the Global
              Talent Stream is the wrong conversation.
            </p>
            <p>
              It also tends not to suit workers whose occupation sits outside the specialised and
              in-demand roles the stream exists for, workers whose experience is real but poorly
              documented, and anyone hoping to arrive on one employer’s assessment and immediately move
              to another. If you are self-employed or running your own business, an employer-driven
              stream is likely the wrong frame entirely.
            </p>
            <p>
              If you have no employer, the more useful starting points are the{' '}
              <Link href="/work-permits/lmia-exempt" className="font-semibold text-accent-500 link-underline">
                LMIA-exempt routes
              </Link>{' '}
              or a permanent residence route such as{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>
              , neither of which requires a Canadian job offer to begin. We would rather tell you that on
              the first call than take a fee for a file that was never going to work — which is why we
              publish a{' '}
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
        <SectionHeading eyebrow="Where the current details live" title="Lists, fees and requirements" />
        <Prose>
          <p>
            The occupations list, the roster of designated referral partners, the wage rules, the
            processing fees and the service standards all change. We deliberately do not reproduce them
            here, because a figure that is right today is a liability on a page you might read next year.
          </p>
          <p>
            ESDC publishes the current programme requirements for the Global Talent Stream on{' '}
            <a
              href="https://www.canada.ca/en/employment-social-development/services/foreign-workers/global-talent.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            . The occupations list, the roster of designated referral partners and the wage and
            recruitment expectations for each category sit in its{' '}
            <a
              href="https://www.canada.ca/en/employment-social-development/services/foreign-workers/global-talent/requirements.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              programme requirements
            </a>
            , and the obligations that bind employers of temporary foreign workers sit in the{' '}
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
        title="Find out whether an employer route is even the right question"
        subtitle="Tell us your occupation, your experience and whether a Canadian employer has actually offered you a role. We will tell you honestly whether this stream is relevant — and if it is not, whether any other route realistically is."
        page={PAGE}
        waMessage="Hi, I’d like to understand whether the Global Talent Stream is realistic in my situation."
      />
    </>
  );
}
