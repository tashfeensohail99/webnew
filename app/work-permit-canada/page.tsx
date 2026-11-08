import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  StatBand,
  Callout,
  FAQ,
  CTASection,
  Icon,
} from '@/components/ui';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { ReviewedBy } from '@/components/ReviewedBy';
import { LiteYouTube } from '@/components/LiteYouTube';
import { site, SERVICE } from '@/lib/site';

/**
 * The flagship page — Canada's C11 work-permit route, the firm's most substantial service.
 *
 * The H1 now LEADS with "C11 work permit" and keeps the plain-language promise
 * ("without a job offer or an LMIA") beside it. The earlier version kept the
 * code out of the H1 on the theory that nobody searches it; the search results
 * say otherwise (2026-10-23: the ranking pages for this route are all titled
 * "C11 work permit"), and the firm asked to rank for the C11 search. Both
 * phrasings now appear, so both kinds of searcher land here.
 *
 * Every rule stated on this page is taken from IRCC's own program delivery
 * instructions for the C11 category (linked as IRCC.c11, last updated by IRCC
 * 2025-05-27). Re-check that page when reviewing this one.
 */
export const metadata: Metadata = {
  title: 'C11 Work Permit Canada: Requirements and Process',
  description:
    'What IRCC requires for a C11 work permit: 51% ownership, significant benefit, support and business funds, the Employer Portal offer and an exit plan.',
  alternates: { canonical: '/work-permit-canada' },
};

const PAGE = 'work-permit-canada';

const IRCC = {
  c11: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
  r205: 'https://laws-lois.justice.gc.ca/eng/regulations/sor-2002-227/section-205.html',
  portal: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/partners-service-providers/employer-portal/enrolment-guide.html',
  lico: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html',
  fees: 'https://ircc.canada.ca/english/information/fees/fees.asp',
  times: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
  biometrics: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/where-to-give.html',
  vac: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html',
  medical: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents.html',
  panel: 'https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home',
  police: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html',
} as const;

/** An official source, opened in a new tab. */
function Source({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

/** The firm's own explainer on its YouTube channel (published 2026-10-11). */
const VIDEO = {
  id: '9cXFhUmFZm4',
  title: 'Canada C-11 Work Permit: Start Your Own Business & Bring Your Family! | Requirements Explained',
  uploadDate: '2026-10-11T18:24:59+00:00',
} as const;

/**
 * "C11 at a glance" — the rules as IRCC states them, one line each. Written to
 * be quoted: short, sourced, no adjectives.
 */
const GLANCE: [string, string][] = [
  ['Ownership', 'You must control at least 51% of the Canadian business. An owner with less who works in it applies as an employee instead.'],
  ['Significant benefit', 'Jobs for Canadians, market or export growth, innovation, or keeping Canadians employed. IRCC is explicit that it is not the amount you spend that makes a business significant.'],
  ['Business plan', 'Concrete start-up steps — location, sourcing, costs, wages, marketing and customers. A detailed market analysis on its own is not a plan.'],
  ['Your funds', 'Business money kept separate from your family’s living funds, which must be at least the low-income cut-off for your family size for 18 months — with proof of where the money came from.'],
  ['Length of stay', 'The work should normally not exceed 18 months. Longer needs a definite plan to hand over the running of the business.'],
  ['Settling permanently', 'The C11 is a temporary permit. IRCC’s guidance points business owners who intend to settle to other routes, such as provincial entrepreneur streams.'],
];

/** What IRCC's instructions list under "Documentary evidence" for this category. */
const REQUIREMENTS: [string, ReactNode][] = [
  ['Offer of employment number', <>You submit an offer of employment for yourself through IRCC’s <Source href={IRCC.portal}>Employer Portal</Source>, choosing “C11 – Business Owner – Temporary Purpose”, and give the number it generates.</>],
  ['Employer compliance fee', 'Proof that you have paid it. You are the employer as well as the employee.'],
  ['Work permit application', 'Filed online under code C11, unless you are exempt from applying online.'],
  ['Proof of ownership', 'Documents showing your degree of ownership. IRCC considers a C11 only where you control at least 51% of the business.'],
  ['Evidence your stay is temporary', 'Enough to satisfy an officer that you will leave and are not trying to become a de facto resident.'],
  ['Evidence of significant benefit', 'How your work will create or maintain a significant economic, social or cultural benefit, such as market expansion, jobs in the area or advances in a Canadian industry.'],
  ['Support funds', <>Transferable, available and free of debts or other obligations, equal to the <Source href={IRCC.lico}>low-income cut-off</Source> for your family size for 18 months, or your stay if shorter.</>],
  ['Business funds', 'Separate from your support funds, with proof of where the money came from. Officers have discretion over how much a business needs.'],
];

/** The in-person steps for someone applying from Pakistan, each from an IRCC page. */
const FROM_PAKISTAN: [string, ReactNode][] = [
  ['Biometrics', <>Given at a visa application centre in Islamabad, Karachi or Lahore. <Source href={IRCC.biometrics}>IRCC says the appointment is free</Source>, so do not pay anyone for one.</>],
  ['The visa centre does not decide', <><Source href={IRCC.vac}>IRCC says visa application centres</Source> play no role in decisions and are forbidden from giving visa advice.</>],
  ['Medical exam', <>IRCC lists Pakistan among the countries where <Source href={IRCC.medical}>a medical exam applies to longer stays</Source>. Only a doctor on its <Source href={IRCC.panel}>panel physician list</Source> can do it.</>],
  ['Police certificate', <>IRCC requires one for some temporary residence programs, so check your application package. <Source href={IRCC.police}>The procedure in Pakistan</Source> depends on your province.</>],
];

/** Where to go when the C11 is the wrong route. */
const NOT_C11 = [
  { href: '/business-immigration', kicker: 'You plan to settle', title: 'Business immigration to Canada', body: 'IRCC’s instructions send owners who intend to become permanent residents to other routes, such as provincial and territorial business programs.' },
  { href: '/work-permits/lmia', kicker: 'You own less than 51%', title: 'LMIA work permits', body: 'A smaller owner who works in the business applies as an employee, which may mean an LMIA or another LMIA-exempt category.' },
  { href: '/work-permits/intra-company-transfer', kicker: 'Your company is sending you', title: 'Intra-company transfers', body: 'If an overseas company is moving you to a related Canadian business, this route may fit better.' },
  { href: '/work-permits', kicker: 'You are not an owner', title: 'All Canadian work permits', body: 'Start here if you are looking for a job in Canada or already have an employer.' },
];

/* Who this route actually fits — the qualify-in profiles. */
const FITS = [
  {
    icon: 'building' as const,
    kicker: 'Business owners',
    title: 'You run a business now',
    body: 'A registered business in Pakistan or the Gulf that you can prove you actually operate — accounts, dealings, history. It is the experience the officer weighs.',
  },
  {
    icon: 'user' as const,
    kicker: 'Majority owner',
    title: 'You’ll control the Canadian business',
    body: 'At least 51% of it, and you will be the one running it day to day — not a passive or minority investor.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Funds you can show',
    title: 'You have funds with a paper trail',
    body: 'Business money and your family’s living funds, in your own name, with a clear source — not borrowed for a photograph the week before filing.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Told “no”, wrongly',
    title: 'You were told to stop',
    body: 'You’ve been told “you need a job offer first” and stopped there — when this route needs no third-party employer at all.',
  },
];

/* The stages, described honestly — process, not a promise of outcome. */
const STEPS = [
  {
    title: 'Honest assessment',
    body: 'We look at your business, your funds and your history and tell you plainly whether a C11 is realistic. If it isn’t, that’s where it ends — before you’ve paid a service fee.',
  },
  {
    title: 'Build the business case',
    body: 'A C11 lives or dies on the strength of its business case for Canada. We build a genuine plan around what you actually do — never a template.',
  },
  {
    title: 'Assemble the evidence',
    body: 'Proof you’ve run a business, and funds that are transferable, available and not tied up by debts or other obligations, as IRCC requires. We tell you the exact figures for you.',
  },
  {
    title: 'Lawyer review',
    body: 'Before anything goes near IRCC, the file is reviewed by our lawyers. A C11 is an argument, not a form — so it’s argued by someone qualified to argue it.',
  },
  {
    title: 'File with IRCC',
    body: 'We submit the application and the business case together, with the offer of employment you submit for yourself through IRCC’s Employer Portal, and pay the government fees, including the employer compliance fee, on your behalf, itemised for you in advance.',
  },
  {
    title: 'Decision',
    body: 'The timeline depends on your case and IRCC. Anyone quoting you a fixed date is guessing — we’ll give you the honest picture, not a comfortable one.',
  },
];

const FAQS = [
  {
    q: 'Can you guarantee me the work permit?',
    a: (
      <>
        No — and neither can anyone else. Your application is decided by an IRCC officer, and no
        consultant in Pakistan can overrule that. What we can do is tell you honestly whether your
        case is strong, fix what’s weak before it’s filed, and argue it properly.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Do I really not need a job offer?',
    a: 'Correct — the C11 is a route that needs no third-party employer, no LMIA, and no job offer to chase. You are the applicant and, in effect, the employer, so you submit an offer of employment for yourself through IRCC’s Employer Portal and pay the employer compliance fee. That does not make it easy: it is a real business case argued on “significant benefit” to Canada, with real money behind it.',
  },
  {
    q: 'What is a C11 work permit?',
    a: 'The C11 is a Canadian work permit that needs no LMIA and no job offer. It is issued under paragraph 205(a) of the Immigration and Refugee Protection Regulations to a business owner whose work in Canada brings a significant economic, social or cultural benefit. IRCC lists it under business owners seeking only temporary residence. People often call it the C11 visa, but C11 is IRCC’s code for a category of work permit.',
  },
  {
    q: 'What are the C11 work permit requirements?',
    a: 'IRCC asks for an offer of employment you submit for yourself through its Employer Portal, proof you paid the employer compliance fee, a work permit application, documents showing you control at least 51% of the business, evidence that your stay is temporary, evidence of significant benefit to Canada, proof of support funds, and separate proof of business funds.',
  },
  {
    q: 'Can I apply for a C11 from Pakistan?',
    a: 'Yes. IRCC’s C11 instructions do not limit the route by nationality, and they expect applications to be filed online. If you apply from Pakistan, you give your biometrics at a visa application centre in Islamabad, Karachi or Lahore.',
  },
  {
    q: 'Am I self-employed or an entrepreneur for a C11?',
    a: 'IRCC treats you as self-employed if the business only employs you and your family, even if it is incorporated. An entrepreneur hires people outside the family to do the work while managing the business. The difference changes the occupation code on your offer and how the benefit to Canada is assessed.',
  },
  {
    q: 'What percentage of the business do I need to own?',
    a: 'At least 51%. IRCC’s instructions say a C11 should be considered only when the applicant controls at least 51% of the business. Someone with a smaller share who works in the business applies as an employee instead, which usually means an LMIA.',
  },
  {
    q: 'Do I need an IELTS band?',
    a: 'No fixed IELTS score is required for a C11. Language still matters: IRCC asks whether your skills and language abilities will help the business succeed, so a credible business case has to hold together — but you are not shut out for missing a set band.',
  },
  {
    q: 'How much money do I need to show?',
    a: 'Two separate amounts. First, funds to support your family: IRCC sets the floor at the low-income cut-off for your family size, for 18 months or the length of your stay if shorter. Second, the business funds your plan needs — there is no official minimum investment; the officer judges whether your money covers your plan and where it came from. We work out both figures with you for your own case.',
  },
  {
    q: 'How long does a C11 work permit last?',
    a: 'IRCC’s guidance says the work should normally not exceed 18 months. A longer period needs a definite plan for handing over the running of the business, such as hiring a manager.',
  },
  {
    q: 'Can a C11 work permit be extended?',
    a: 'It can, but not automatically. You apply in Canada and show what you did to carry out your business plan, the benefit your work delivered, why you need more time, and that you will still leave Canada. IRCC warns that repeated permits over several years with no break may no longer meet the requirement.',
  },
  {
    q: 'Is the C11 work permit still open?',
    a: 'When we read IRCC’s instructions on 9 November 2026, the C11 category was still published. IRCC’s closures for entrepreneurs name the Start-Up Visa and the Self-Employed Persons Program, not the C11. Rules can change, so check IRCC’s page before you apply.',
  },
  {
    q: 'Can a C11 lead to permanent residence?',
    a: 'Not on its own. The C11 is a temporary permit for business owners, and IRCC’s guidance directs owners who intend to settle permanently to other routes, such as provincial entrepreneur streams. Neither self-employed nor entrepreneur time on a C11 counts as work experience for the Canadian Experience Class. Some people go on to qualify for permanent residence through a separate application on their own merits — whether that is realistic for you depends on your profile, and we will tell you straight.',
  },
  {
    q: 'Can my spouse work and my children study?',
    a: 'A spouse does not get work rights automatically. Whether they qualify for an open work permit depends on IRCC’s rules for spouses of workers, which our spousal open work permit page explains. Minor children who intend to study should generally apply for a study permit before entering Canada.',
  },
  {
    q: 'What does it cost?',
    a: 'Two separate things: our professional fee, and the government fees paid to IRCC (not to us). We itemise both, in writing, before you sign anything — no figure on this page substitutes for the quote we give you for your own file.',
  },
  {
    q: 'How long does it take?',
    a: 'It varies with your case and with IRCC processing, and we won’t pretend otherwise. Anyone quoting you a guaranteed date is guessing — we’ll give you a realistic range once we understand your file.',
  },
  {
    q: 'I’m a salaried employee looking for any job in Canada — is this for me?',
    a: 'Honestly, no. The C11 is built around your own business case, not around finding an employer to hire you. We’ll tell you that on the call rather than take your money, and point you to a route that does fit.',
  },
];

export default function WorkPermitPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · C11 work permit · R205(a)"
        title={
          <>
            C11 work permit: work in Canada{' '}
            <span className="text-gold-300">without a job offer or an LMIA</span>
          </>
        }
        subtitle={
          <>
            If you run a business in Pakistan or the Gulf and will own and run one in Canada, the{' '}
            <strong className="font-semibold text-white">C11</strong> lets you work there with no
            employer, no LMIA and no fixed IELTS score. It is argued on one thing — significant benefit to Canada.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk through your business — free
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: PAGE,
            targetCountry: 'Canada',
            message:
              'Hi, I’d like to apply for a Canada work permit without a job offer. I run my own business.',
          }}
        >
          Ask about your case
        </WhatsAppCta>
      </PageHero>

      <StatBand
        items={[
          {
            big: 'C11',
            label: 'the route',
            desc: 'No LMIA, no job offer, no fixed IELTS score — a work permit argued on significant benefit to Canada.',
          },
          {
            big: 'Canada',
            label: 'office on the ground',
            desc: 'We have an office in Mississauga — not just a Pakistan shop filing a Canadian case blind.',
          },
          {
            big: 'Free',
            label: 'consultation',
            desc: 'You leave with our read in writing — an honest answer either way.',
          },
        ]}
      />

      {/* ======================= C11 AT A GLANCE =======================
          IRCC's own rules, one line each, with the source linked — the block
          a reader (or an AI answer) can lift as-is. */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="C11 at a glance"
          title="What the C11 is, in IRCC’s own terms"
        />
        <p className="lede mt-6 max-w-3xl">
          The C11 is an LMIA-exempt Canadian work permit, issued under{' '}
          <Source href={IRCC.r205}>paragraph 205(a) of the Immigration and Refugee Protection Regulations</Source>
          , for a business owner whose work in Canada
          will bring a <strong className="font-semibold text-ink-900">significant economic, social or cultural benefit</strong>.
          IRCC files it under business owners seeking only temporary residence.
        </p>
        <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {GLANCE.map(([term, def]) => (
            <div key={term} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{term}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-ink-500">
          Source:{' '}
          <a href={IRCC.c11} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
            IRCC program delivery instructions for C11
          </a>{' '}
          (last updated by IRCC on 27 May 2025). Want to settle permanently as a business owner? See{' '}
          <Link href="/business-immigration" className="font-semibold text-accent-500 link-underline">
            business immigration to Canada
          </Link>
          .
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link href="/work-permit-canada/business-plan" className="card group block p-6 transition-transform hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">Next: the plan</p>
            <p className="mt-2 font-serif text-xl">What a C11 business plan has to show →</p>
          </Link>
          <Link href="/work-permit-canada/refusals" className="card group block p-6 transition-transform hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">Already refused?</p>
            <p className="mt-2 font-serif text-xl">Why C11 applications are refused →</p>
          </Link>
        </div>
      </Section>

      {/* ===================== C11 REQUIREMENTS =====================
          IRCC's "Documentary evidence" list, in order. Answers "c11 requirements". */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="C11 requirements"
          title="What IRCC asks you to file"
          subtitle="You are both the employer and the employee on a C11, so you meet the requirements of both roles. It is on you to give the officer enough evidence."
        />
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
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
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          In the offer itself, the “requirements exemptions met” field is where you explain how the
          business will benefit Canada and not only you and your family. You can upload a longer
          explanation there, and your business plan with the work permit application.
        </p>
        <p className="mt-6 text-sm text-ink-500">
          Source: <Source href={IRCC.c11}>IRCC program delivery instructions for C11</Source>, read on 8 November 2026.
        </p>
      </Section>

      {/* ===================== WHO IT FITS (qualify-in) ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Is this you?"
          title="Who the C11 route actually fits"
          subtitle="We qualify people out before we qualify them in. If you recognise yourself here, keep reading."
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
              If you’re a salaried employee looking for any job in Canada, this route is not for you —
              and we’ll say so on the call rather than take your money. A weak application filed today
              is a refusal on your record for years.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT A C11 IS ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The route, plainly"
              title="What a C11 actually is"
            />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                Many employer-sponsored permits need an employer to show no Canadian could do the job —
                an LMIA. It’s slow, it’s expensive, and you can’t even start it without an employer who
                already wants you.
              </p>
              <p>
                The C11 skips that. It’s for someone who will bring{' '}
                <em className="not-italic font-semibold text-ink-900">significant benefit</em> to
                Canada — typically by starting or buying a business there. You are the applicant and,
                in effect, the employer. There’s no LMIA, and no job offer to chase.
              </p>
              <p>
                It is not a shortcut and it is not easy. It’s a real business case, argued properly,
                with real money behind it.
              </p>
              <p>
                Not a business owner? Start with our{' '}
                <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                  overview of Canadian work permits
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="What you’ll need"
              title="What a strong file is built on"
            />
            <ul className="mt-6 space-y-4">
              {[
                ['A genuine business plan for Canada', 'Built around what you actually do — never a template pulled off a shelf.'],
                ['Funds in your own name', 'Business funds, plus family living funds of at least the low-income cut-off for 18 months — with their source documented. We confirm your exact figures.'],
                ['Proof you’ve run a business', 'Real evidence you operate the business you claim — registration, dealings, history.'],
                ['A case that stands up', 'Everything above, assembled so it holds together as one argument to an officer.'],
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

      {/* ===================== SELF-EMPLOYED OR ENTREPRENEUR ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Which are you?"
          title="Self-employed or entrepreneur: IRCC treats them differently"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h3 className="font-serif text-2xl text-balance">Self-employed</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              You work for yourself as the owner, usually do the operational work yourself, and rarely
              hire anyone outside your family. If the business only employs you and your family, IRCC
              treats you as self-employed even if it is incorporated.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              Your job title and occupation code should match your real duties. Because a one-person
              business rarely benefits more than its owner, an officer may also weigh the benefit to
              your Canadian customers, particularly if you offer a service not normally found in that area.
            </p>
          </div>
          <div className="card p-8">
            <h3 className="font-serif text-2xl text-balance">Entrepreneur</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              You organise and run the business, take on greater than normal financial risk, and hire
              people outside your family to do the work while you manage it.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              IRCC’s instructions use the generic occupation code 88888 and the job title
              “Entrepreneur”. The officer looks at how many jobs you will create, what they pay and
              what the business does for the local economy.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-ink-600 text-pretty">
          Neither kind of work counts toward the Canadian Experience Class.
        </p>
      </Section>

      {/* ===================== SIGNIFICANT BENEFIT & TEMPORARY STAY ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Significant benefit" title="It is about effect, not how much you spend" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                IRCC tells officers that neither the type of business nor the amount spent makes it
                significant. What counts is how your work creates opportunities for Canadians or
                permanent residents, or benefits a local or regional economy, during the period of the
                work permit and not at some later time.
              </p>
              <p>
                Its own example is a small convenience store. On a busy Toronto street, hiring two
                people and competing with established shops, it may make no real difference. In a small
                rural area far from the nearest grocery store, it may be a benefit, because it hires
                from a small local pool and brings people to the businesses around it.
              </p>
              <p>
                Read{' '}
                <Link href="/work-permit-canada/business-plan" className="font-semibold text-accent-500 link-underline">
                  what a C11 business plan has to show
                </Link>{' '}
                for the questions officers are told to ask.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Temporary stay" title="You need a plan to leave, and a plan for the business" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                The offer of employment should be for no more than 18 months. A longer stay needs a
                definite plan to step back from running the business.
              </p>
              <p>
                IRCC gives seasonal businesses as examples of temporary work. Year-round businesses,
                such as auto repair shops, salons and IT companies, need more evidence that you only
                intend to stay for a temporary period.
              </p>
              <p>
                Either way, give a transition or exit plan, such as hiring a manager to run the business
                after you leave, and show that your stronger ties are outside Canada.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== HOW IT WORKS (numbered) ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to a decision"
          subtitle="Six stages. The first one can end it — on purpose, before you’ve paid a service fee."
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

      {/* ===================== FROM PAKISTAN ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="From Pakistan"
          title="Applying for a C11 from Pakistan"
          subtitle="IRCC’s C11 instructions do not limit the route by nationality, and they expect applications to be filed online unless you are exempt. These are the in-person steps."
        />
        <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {FROM_PAKISTAN.map(([term, def]) => (
            <div key={term} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{term}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ===================== COST & TIME ===================== */}
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">What it costs</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Two fees, both itemised in writing</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Our professional fee is quoted for your own file — not a number pulled off a page you’d
              base a life decision on. Separately, government fees are paid to IRCC, not to us. We put
              both in front of you, in writing, before you sign anything.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              The government costs to expect are the work permit fee, the employer compliance fee and
              the biometrics fee, all on <Source href={IRCC.fees}>IRCC’s fee list</Source>. A medical
              exam, if you need one, is paid to the doctor at your appointment.
            </p>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">How long it takes</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">No fixed date, and no promise</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Timelines depend on your case and on IRCC processing. Anyone quoting you a fixed date is
              guessing — once we understand your file, we’ll give you an honest range rather than a
              comfortable one.
            </p>
            <p className="mt-4 text-ink-600 text-pretty">
              IRCC publishes its current averages in its{' '}
              <Source href={IRCC.times}>processing times tool</Source>.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== NOT THE RIGHT ROUTE ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Not the right fit?" title="Where to look instead" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {NOT_C11.map((r) => (
            <Link key={r.href} href={r.href} className="card group block p-6 transition-transform hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">{r.kicker}</p>
              <p className="mt-2 font-serif text-xl">{r.title} →</p>
              <p className="mt-2 text-ink-600 text-pretty">{r.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ===================== WHY US ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Why file it with us"
          title="A C11 is an argument, not a form"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-ink-600 text-pretty leading-relaxed">
          <p>
            A C11 lives or dies on the strength of its business case — which is why it’s reviewed by
            our lawyers before it goes anywhere near IRCC, not filed by whoever answered the phone.
          </p>
          <p>
            We’ve filed these before. Some were approved and some were refused — and we’ll tell you
            what went wrong in the refusals, because you should know exactly what you’re buying before
            you buy it.
          </p>
        </div>
        <div className="mt-8">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      {/* ===================== VIDEO ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Watch"
              title="The C11, explained on our YouTube channel"
              subtitle="Who the route suits, what the business case needs, and what happens with your family — in our own explainer."
            />
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO.id}`}
              rel="noopener"
              target="_blank"
              className="tap mt-6 inline-flex font-semibold text-accent-500 link-underline"
            >
              Watch on YouTube →
            </a>
          </div>
          <div className="lg:col-span-3">
            <LiteYouTube id={VIDEO.id} title={VIDEO.title} />
          </div>
        </div>
        <script
          type="application/ld+json"
          // Static facts about the firm's own video — no user input.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: VIDEO.title,
              description:
                'An explainer on Canada’s C11 work permit for business owners, from the Tashfeen Immigration Solutions YouTube channel.',
              thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO.id}/hqdefault.jpg`,
              uploadDate: VIDEO.uploadDate,
              embedUrl: `https://www.youtube.com/embed/${VIDEO.id}`,
              url: `https://www.youtube.com/watch?v=${VIDEO.id}`,
              publisher: { '@id': `${site.url}/#organization` },
            }),
          }}
        />
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Straight answers"
          title="The questions people actually ask"
        />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
      </Section>

      <CTASection
        eyebrow="Where you actually stand"
        title="See whether a C11 is realistic for you"
        subtitle="Tell us about your business and your funds and we’ll tell you honestly whether this route fits — and if it doesn’t, what does. The consultation is free, and you get our read in writing."
        page={PAGE}
        waMessage="Hi, I’d like to apply for a Canada work permit without a job offer. I run my own business."
      />
    </>
  );
}
