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
 * LMIA-exempt work permits — the International Mobility Program, explained by
 * FAMILY rather than by exemption code. Codes get retired and renumbered (the
 * intra-company codes were restructured recently); the structural logic of each
 * family does not. Nothing dated, no fees, no durations, no thresholds.
 */
export const metadata: Metadata = {
  title: 'LMIA-Exempt Work Permits in Canada',
  description:
    'Some work permits need no LMIA: a benefit to Canada, a treaty, or reciprocity. The main exemption families, and why no LMIA does not mean no scrutiny.',
  alternates: { canonical: '/work-permits/lmia-exempt' },
};

const PAGE = 'work-permits-lmia-exempt';

const FAMILIES = [
  {
    icon: 'building' as const,
    kicker: 'Intra-company transfer',
    title: 'Moving within your own company',
    body: 'A company outside Canada moves an executive, a senior manager or a specialised-knowledge employee into a Canadian parent, branch, subsidiary or affiliate. The relationship between the two companies, and your role and length of service in the foreign one, are what the officer examines.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Treaty-based',
    title: 'Free trade agreements',
    body: 'Canada’s trade agreements create work categories for citizens of the partner countries — traders, investors, certain listed professions, and intra-company transfers. These turn on your citizenship, so for most Pakistani applicants they are not the route; they matter if you also hold another nationality.',
  },
  {
    icon: 'star' as const,
    kicker: 'Significant benefit',
    title: 'Benefit to Canada',
    body: 'A discretionary category for work whose social, cultural or economic benefit to Canada is clear enough that testing the labour market would be counterproductive. It is argued, not ticked off — and it is the family most often narrowed by policy changes.',
  },
  {
    icon: 'refresh' as const,
    kicker: 'Reciprocal',
    title: 'Reciprocal employment',
    body: 'Work that gives Canadians comparable opportunities abroad — exchange arrangements, some academic and research exchanges, and youth mobility arrangements with participating countries. Reciprocity has to be real and demonstrable, not merely asserted.',
  },
  {
    icon: 'user' as const,
    kicker: 'Owner-operator',
    title: 'Running your own Canadian business',
    body: 'You start or buy a Canadian business and operate it yourself. This sits inside the significant-benefit family rather than beside it, and it has been tightened repeatedly — ownership, genuine senior control and funding are all examined.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Status-based',
    title: 'Permits tied to your status',
    body: 'Some open work permits flow from a person’s situation rather than a job: certain spouses and partners, some post-graduation situations, and applicants already in a defined immigration process. Eligibility here is about status, not about an employer.',
  },
];

const STEPS = [
  {
    title: 'Identify the exemption honestly',
    body: 'The first question is not “how do I avoid an LMIA” — it is whether any exemption genuinely describes your situation. If none does, we say so.',
  },
  {
    title: 'Pick the right code',
    body: 'Each exemption has its own code and its own operational instructions. Filing under the wrong one can sink an application that would have succeeded under the right one.',
  },
  {
    title: 'Build the evidence to fit',
    body: 'A transfer file is corporate-structure evidence. A significant-benefit file is an argument. A treaty file is proof of citizenship and profession. They are not interchangeable.',
  },
  {
    title: 'Employer-side compliance',
    body: 'Most employer-specific exempt permits require the employer to submit an offer of employment through IRCC’s portal and pay the employer compliance fee before you apply. Miss that step and the application does not go anywhere.',
  },
  {
    title: 'File and respond',
    body: 'We submit, then handle what comes back — requests for further documents, and questions about the corporate relationship or the benefit claimed.',
  },
  {
    title: 'Stay compliant afterwards',
    body: 'Exempt permits carry conditions. Employers can be inspected, and business owners can be asked to show the business is real and operating as described.',
  },
];

const FAQS = [
  {
    q: 'Does LMIA-exempt mean easier?',
    a: 'No. It means a different test, not a lower one. You skip the labour-market test, but you take on the burden of proving that the exemption applies to you — and in the discretionary categories, an officer can simply disagree with your argument. Many LMIA-exempt files are harder to build than an LMIA-backed one.',
  },
  {
    q: 'Do I still need a job offer?',
    a: 'It depends on the family. Intra-company transfers and treaty categories are employer-specific and need an employer behind them. Owner-operator files have no third-party employer at all — you are the business. Status-based open permits need no employer.',
  },
  {
    q: 'Is this a permanent residence route?',
    a: 'It is a temporary work authorisation. Canadian work experience can strengthen a later permanent residence application, but a work permit does not convert into PR on its own and no one can promise you that it will. Treat them as two separate applications.',
  },
  {
    q: 'What are the government fees?',
    a: (
      <>
        There is a work permit processing fee, an open work permit holder fee where it applies, and
        an employer compliance fee on employer-specific exempt permits. We won’t print figures that
        can change — IRCC publishes the current amounts in its{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/fees.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent-500 link-underline"
        >
          official fee list on canada.ca
        </a>
        , and we itemise exactly what your file will cost before you pay anything.
      </>
    ),
  },
  {
    q: 'The exemption codes I read about online don’t match what you’ve said.',
    a: 'That happens, because IRCC restructures them. The intra-company transferee codes have been reorganised, and the significant-benefit instructions have been narrowed more than once. This is why we describe families rather than publish a code list — a stale code list is worse than none, and IRCC’s own programme delivery instructions are the only current source.',
  },
  {
    q: 'Can you guarantee the permit?',
    a: (
      <>
        No. An IRCC officer decides your application and no consultant can overrule that — least of
        all in the discretionary categories, where reasonable officers can differ.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
];

export default function LmiaExemptPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · International Mobility Program"
        title={
          <>
            Work permits that need{' '}
            <span className="text-gold-300">no LMIA</span>
          </>
        }
        subtitle={
          <>
            Not every Canadian work permit requires an employer to test the labour market. A whole
            programme sits outside it — for transfers within a company, for treaty nationals, for
            work of clear benefit to Canada, and for business owners. Exemption from the LMIA is not
            exemption from scrutiny.
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
          eyebrow="The idea, plainly"
          title="What the International Mobility Program is"
        />
        <Prose>
          <p>
            The default rule is that a Canadian employer must first show that hiring you will not
            displace a Canadian worker. That test is the Labour Market Impact Assessment, and it is
            the employer’s application, not yours.
          </p>
          <p>
            The International Mobility Program is the set of exceptions to that rule. Parliament and
            IRCC accepted that in some situations the labour-market test makes no sense: when a
            company is moving its own senior people into its own Canadian operation, when Canada has
            promised reciprocal access under a trade agreement, when the work brings a benefit that
            outweighs any labour-market concern, or when a person’s own status — not an employer’s
            need — is the basis for working.
          </p>
          <p>
            Two things follow from that, and both are easy to miss. First, an exemption is a claim
            you have to prove, and the burden sits on you rather than on an employer. Second, some of
            these categories are discretionary: the officer is not checking boxes, they are deciding
            whether they accept your argument.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE FAMILIES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The main families"
          title="Where the exemptions come from"
          subtitle="Codes get retired and renumbered. The underlying families are stable — start by working out which one, if any, describes you."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FAMILIES.map((f) => (
            <FeatureCard key={f.title} icon={<Icon name={f.icon} />} kicker={f.kicker} title={f.title}>
              {f.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== SCRUTINY ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The point people miss"
          title="No LMIA is not less scrutiny"
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Prose>
            <p>
              With an LMIA, an employer carries much of the evidentiary weight and the officer is
              largely reviewing a completed assessment. Without one, everything is yours to prove —
              and there is no assessment standing behind you.
            </p>
            <p>
              In the discretionary families, officers are alert to files built backwards: a shell
              company created so a transfer can be claimed, a business bought as a visa mechanism
              rather than to be run, a “benefit to Canada” asserted in general terms with nothing
              specific behind it. Officers look for exactly these patterns, and a file that shows
              them is a file in trouble.
            </p>
          </Prose>
          <ul className="mt-6 space-y-4 lg:mt-0">
            {[
              ['The corporate relationship is examined', 'For a transfer, the two companies must be genuinely related and both genuinely operating.'],
              ['The role has to be real', 'A title on an organisation chart is not seniority or specialised knowledge. The duties and the history behind them are what count.'],
              ['Funds must be documented and yours', 'Money that appears shortly before filing invites exactly the question you don’t want asked.'],
              ['Compliance continues after approval', 'Employers can be inspected, and business owners can be asked to show the business is operating as promised.'],
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

        <div className="mt-10">
          <Callout title="Who this route does not suit">
            <p>
              If you are a salaried employee looking for any Canadian employer to hire you, there is
              no exemption family that describes you — and no amount of file-building creates one.
              The same is true if you are being sold an “owner-operator” package around a business
              you have no intention of running, or a transfer from a company that exists mainly on
              paper. We will tell you this on the call rather than take your money. A refusal stays
              on your record and makes the next application harder.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== HOW WE WORK IT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How a file is built"
          title="From exemption to decision"
          subtitle="The order matters. In our experience the damage is usually done at step one or step two — the wrong exemption, or the right one filed under the wrong code."
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

      {/* ===================== RELATED ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Where to go next"
          title="The route most Pakistani applicants ask about"
        />
        <Prose>
          <p>
            Of the families above, the one we are asked about most often is the owner-operator
            situation — a business owner or self-employed professional in Pakistan who can build a
            credible case for a Canadian business. Our Canadian work permit page covers what a file
            without a conventional job offer actually requires, and who it doesn’t suit.
          </p>
        </Prose>
        <div className="mt-8">
          <Link href="/work-permit-canada" className="btn btn-gold">
            Work permit without a job offer
            <span aria-hidden="true">→</span>
          </Link>
        </div>
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
        eyebrow="Find out which family, if any, fits"
        title="Check whether an LMIA exemption genuinely applies to you"
        subtitle="Tell us about your employer, your business or your citizenship and we’ll tell you honestly whether an exemption describes your situation — and if none does, what your realistic options are."
        page={PAGE}
        waMessage="Hi, I’d like to know whether I qualify for an LMIA-exempt Canadian work permit."
      />
    </>
  );
}
