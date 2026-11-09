import type { Metadata } from 'next';
import { OnThisPage } from '@/components/OnThisPage';
import Link from 'next/link';
import { CompareTable } from '@/components/CompareTable';
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
 * The work-permit hub. Two axes, explained once and properly:
 *   1. Employer-specific vs open  — what the permit lets you DO.
 *   2. LMIA-based vs LMIA-exempt  — how the permit gets JUSTIFIED.
 *
 * Deliberately carries no fees, no processing times, no salary thresholds.
 * Those change; the structure does not. Where a number matters, we name the
 * thing and send the reader to IRCC.
 */
export const metadata: Metadata = {
  title: 'Canada Work Permits: Open or Employer-Specific',
  description:
    'How Canadian work permits work: employer-specific versus open, LMIA-based versus exempt, and why buying a job offer risks a misrepresentation bar.',
  alternates: { canonical: '/work-permits' },
};

const PAGE = 'work-permits';

const ROUTES = [
  {
    icon: 'building' as const,
    kicker: 'LMIA-exempt · significant benefit',
    title: 'Work permit without a job offer',
    body: 'For business owners and the self-employed, argued on significant benefit to Canada rather than on an employer. No LMIA, no job offer to chase.',
    href: '/work-permit-canada',
    cta: 'Read the full route',
  },
  {
    icon: 'refresh' as const,
    kicker: 'LMIA-exempt · intra-company',
    title: 'Intra-company transfer',
    body: 'For executives, managers and specialised-knowledge staff moved from a qualifying business abroad to a related Canadian entity. The relationship between the two companies has to be real and documented.',
    href: '/work-permits/intra-company-transfer',
    cta: 'How transfers work',
  },
  {
    icon: 'scale' as const,
    kicker: 'LMIA-exempt · trade agreements',
    title: 'Trade-agreement professionals',
    body: 'Canada’s free-trade agreements carry work-permit provisions for nationals of the countries they cover. Canada has no bilateral trade agreement with Pakistan, so this route is generally relevant only if you hold another nationality. Any access under the wider General Agreement on Trade in Services would be narrow and needs checking by a licensed representative.',
  },
  {
    icon: 'doc' as const,
    kicker: 'LMIA-based',
    title: 'Employer-sponsored, with an LMIA',
    body: 'A Canadian employer tests the labour market, receives a positive LMIA, and you apply on the strength of it. The employer starts this — you cannot buy your way into it.',
    href: '/work-permits/lmia',
    cta: 'How an LMIA works',
  },
  {
    icon: 'user' as const,
    kicker: 'Open · status-derived',
    title: 'Spousal and family open permits',
    body: 'Open permits that flow from someone else’s status in Canada — a spouse working or studying there, in the categories IRCC specifies. You qualify through the relationship, not through a job.',
    href: '/work-permits/spousal-open-work-permit',
    cta: 'Spousal open work permits',
  },
  {
    icon: 'permit' as const,
    kicker: 'Open · after study',
    title: 'Post-graduation work permit',
    body: 'For people who complete an eligible programme at an eligible Canadian institution. The eligibility rules attach to the school and the programme, so they must be checked before you enrol, not after.',
    href: '/work-permits/post-graduation',
    cta: 'Post-graduation rules',
  },
];

const STEPS = [
  {
    title: 'Establish which axis you are on',
    body: 'Before anything else: is there a real employer, or is your case argued on your own business? That single answer decides which body of rules applies to you and rules out most of what you have been told.',
  },
  {
    title: 'Test the route against your actual facts',
    body: 'Your work history, your ownership of a business, your funds, your family’s status in Canada, your refusal history. A route either fits those facts or it does not — hope is not an input.',
  },
  {
    title: 'Fix what is weak before filing',
    body: 'Thin evidence of running a business, funds that appeared last month, gaps in employment history. These are fixable before submission and very expensive to argue about afterwards.',
  },
  {
    title: 'Assemble the file as one argument',
    body: 'A work permit application is read by an officer as a whole. Documents that contradict each other — different job titles, different dates, different names — do more damage than missing documents.',
  },
  {
    title: 'File, and disclose everything',
    body: 'Previous refusals, from any country, are disclosed. So is anything else the forms ask. Concealment is what turns a refusal into a misrepresentation finding, and those consequences last years.',
  },
];

const FAQS = [
  {
    q: 'Can I buy an LMIA or a job offer?',
    a: 'No. Selling a job offer or an LMIA position is illegal in Canada, and paying for one puts you on the wrong side of the Immigration and Refugee Protection Act as well. Employers are also barred from recovering LMIA or recruitment costs from the worker — ESDC sets that out in the Temporary Foreign Worker Program requirements on canada.ca. Submitting a purchased or fabricated offer is misrepresentation, which carries a bar on entering Canada in addition to the refusal; IRCC publishes the current bar period on its inadmissibility pages. If someone in Pakistan is quoting you a price for an LMIA, that is the scam, not a shortcut.',
  },
  {
    q: 'What is the difference between an open and an employer-specific permit?',
    a: 'An employer-specific permit names one employer and usually one location and occupation; you cannot lawfully work elsewhere on it, and changing jobs means a new application. An open permit lets you work for most employers. Open permits are not applied for on their own merits — they exist only in defined categories, most of which derive from someone else’s status or from study in Canada.',
  },
  {
    q: 'Does an LMIA-exempt permit mean it is easier?',
    a: 'No. It means the labour-market test is skipped because the category itself is considered to benefit Canada. The evidentiary burden simply moves onto you — you have to prove the category applies, which for something like a significant-benefit case means building and defending a genuine business argument.',
  },
  {
    q: 'How much are the fees, and how long does it take?',
    a: 'We do not publish either on this page, because both change and a stale number on a website is worse than no number. IRCC publishes current fees and processing times on canada.ca, and they are the only reliable source for them. Our own professional fee is quoted in writing for your specific file before you commit to anything.',
  },
  {
    q: 'Does a work permit lead to permanent residence?',
    a: 'Not automatically. They are separate applications under separate rules. Canadian work experience can strengthen some permanent-residence routes, but no work permit converts into PR on its own, and anyone telling you otherwise is selling you something.',
  },
  {
    q: 'I have been refused before. Is that fatal?',
    a: 'Usually not, but it changes how the file has to be built. What matters is why you were refused and whether the underlying problem has been addressed. What is fatal is hiding it — a previous refusal you did not disclose is far more damaging than the refusal itself.',
  },
];

export default function WorkPermitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · work permits"
        title={
          <>
            Canadian work permits, <span className="text-gold-300">explained properly</span>
          </>
        }
        subtitle={
          <>
            Almost every question about working in Canada comes down to two splits: whether your
            permit ties you to one employer, and whether it needs an LMIA. Understand those and most
            of the noise you have been sold falls away.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/tools/work-permit-eligibility" className="btn btn-ghost">
          Check which route fits
        </Link>
      </PageHero>
      <OnThisPage path="/work-permits" />

      {/* ============ THE TWO AXES ============ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Start here"
          title="Two questions decide everything"
          subtitle="Every Canadian work permit sits somewhere on these two axes. They are independent of each other."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Axis one</p>
            <h3 className="mt-3 font-serif text-2xl text-ink-900 text-balance">
              Employer-specific, or open?
            </h3>
            <div className="mt-5 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                An <strong className="font-semibold text-ink-900">employer-specific</strong> permit
                names the employer, and usually the occupation and the location, on the permit
                itself. You may work for that employer and no one else. If you leave, you need a new
                application before you can lawfully start somewhere new.
              </p>
              <p>
                An <strong className="font-semibold text-ink-900">open</strong> permit lets you work
                for most employers in Canada. This is the one everybody wants — and the one most
                misunderstood. You do not apply for an open permit because you would prefer one.
                Open permits exist only in defined categories, most of which derive from something
                else: a spouse’s status, study completed in Canada, or a specific programme you were
                selected into.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Axis two</p>
            <h3 className="mt-3 font-serif text-2xl text-ink-900 text-balance">
              LMIA-based, or LMIA-exempt?
            </h3>
            <div className="mt-5 space-y-4 text-ink-600 text-pretty leading-relaxed">
              <p>
                <strong className="font-semibold text-ink-900">LMIA-based</strong> permits sit under
                the Temporary Foreign Worker Program. A Canadian employer must first obtain a
                positive Labour Market Impact Assessment for the specific role before you can apply.
              </p>
              <p>
                <strong className="font-semibold text-ink-900">LMIA-exempt</strong> permits sit under
                the International Mobility Program. No labour-market test is required, because the
                category itself is treated as benefiting Canada — trade agreements, intra-company
                transfers, significant benefit, permits derived from family status, and others.
              </p>
              <p>
                Exempt does not mean easier. It means the burden moves from the employer’s
                advertising file onto your evidence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ WHAT AN LMIA IS ============ */}
      <Section tone="alt">
        <SectionHeading eyebrow="The thing everyone asks about" title="What an LMIA actually is" />
        <Prose>
          <p>
            A Labour Market Impact Assessment is a decision by Employment and Social Development
            Canada about a job, not about a person: the employer applies, after advertising the role
            in Canada. A positive LMIA is evidence you then use in your own work permit application
            to IRCC, and you cannot start one yourself or move it to another job.
          </p>
          <p>
            <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
              Read how an LMIA works, who pays and why it cannot be bought
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ============ THE ROUTES ============ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The main routes"
          title="Where most real cases land"
          subtitle="Not an exhaustive list — the International Mobility Program alone contains dozens of exemption categories. These are the ones that come up in practice."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((r) => (
            <FeatureCard
              key={r.title}
              icon={<Icon name={r.icon} />}
              kicker={r.kicker}
              title={r.title}
              href={r.href}
              cta={r.cta}
            >
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <h3 className="mt-14 font-serif text-2xl">The main routes side by side</h3>
        <CompareTable
          caption="The main Canadian work permit routes, compared"
          columns={['Route', 'LMIA needed?', 'Open or tied?', 'Starts from']}
          rows={[
            { label: 'Work permit without a job offer', cells: ['No', 'Built around your own business', 'A business you own or run, argued on significant benefit to Canada'] },
            { label: 'Intra-company transfer', cells: ['No', 'Tied to the named employer and position', 'A qualifying business abroad and a related Canadian entity'] },
            { label: 'Employer-sponsored', cells: ['Yes', 'Tied to that employer and occupation', 'A Canadian employer that receives a positive LMIA'] },
            { label: 'Spousal and family open permits', cells: ['No', 'Open', 'A spouse’s status in Canada, in the categories IRCC specifies'] },
            { label: 'Post-graduation work permit', cells: ['No', 'Open', 'An eligible programme completed at an eligible Canadian institution'] },
          ]}
        />
        <p className="mx-auto mt-10 max-w-3xl text-center text-ink-600 text-pretty">
          Other routes:{' '}
          <Link href="/work-permits/lmia-exempt" className="font-semibold text-accent-500 link-underline">LMIA-exempt permits</Link>,{' '}
          <Link href="/work-permits/global-talent-stream" className="font-semibold text-accent-500 link-underline">Global Talent Stream</Link>,{' '}
          <Link href="/work-permits/international-experience-canada" className="font-semibold text-accent-500 link-underline">International Experience Canada</Link>,{' '}
          <Link href="/work-permits/bridging-open-work-permit" className="font-semibold text-accent-500 link-underline">bridging open work permits</Link> and{' '}
          <Link href="/work-permits/caregivers" className="font-semibold text-accent-500 link-underline">caregiver work permits</Link>. Coming only for meetings or after-sales
          work? That may be <Link href="/visitor-visa/business-visitor" className="font-semibold text-accent-500 link-underline">business visitor status</Link>, with no work permit at all.
        </p>
      </Section>

      {/* ============ THE SCAM ============ */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Read this before you pay anyone"
          title="The LMIA-for-sale trap"
          subtitle="This pattern targets Pakistani applicants heavily, and it is one of the most expensive mistakes you can make."
        />
        <Prose>
          <p>
            The offer sounds reasonable at first. Someone will arrange a Canadian job offer for you,
            or an LMIA position with a real company, for a fee — often a very large one, sometimes
            staged across payments, sometimes with a photograph of an approval letter as proof. The
            company name may even be genuine.
          </p>
          <p>
            Selling a job offer or an LMIA position is illegal in Canada. That is not a technicality
            about the seller’s conduct that leaves you clean. When you submit that offer to IRCC, you
            are the one submitting it. If the offer is fabricated, or the job does not really exist,
            or you paid for a position that was never advertised in good faith, that is
            misrepresentation under the Immigration and Refugee Protection Act.
          </p>
          <p>
            The consequence is not simply a refusal. A misrepresentation finding makes you inadmissible for
            five years under section 40 of the Immigration and Refugee Protection Act, attaches to you
            personally, and follows you into every future application — including ones you would
            otherwise have qualified for honestly. IRCC sets this out at{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility/reasons.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              canada.ca
            </a>
            . People lose the study permit, the visit visa and the spouse’s application too.
            Meanwhile the money is gone and there is no one to recover it from, because you paid a
            person in Pakistan for an illegal act in Canada.
          </p>
          <p>The signals are consistent and worth memorising:</p>
          <ul>
            <li>
              You are asked to pay for a job offer, an LMIA, or a &ldquo;position&rdquo;. Legitimate
              Canadian employers do not charge you to hire you.
            </li>
            <li>
              An LMIA number or approval letter is shown to you as proof, but you are not put in
              direct contact with the employer.
            </li>
            <li>
              There is no interview, or an interview so cursory that the employer plainly does not
              care whether you can do the job.
            </li>
            <li>
              Payment is requested in cash, to a personal account, or through a third country, and
              nothing is put in writing.
            </li>
            <li>
              You are told the permit or permanent residence is guaranteed. Nobody can guarantee an
              officer’s decision.
            </li>
            <li>
              You are advised to leave a previous refusal, a previous name, or a relative in Canada
              off the forms.
            </li>
          </ul>
          <p>
            If you are already in one of these arrangements, stop before anything is filed. A
            situation you have not yet submitted is recoverable. A misrepresentation finding largely
            is not.
          </p>
        </Prose>

        <div className="mt-10">
          <Callout title="Who these routes do not suit">
            <p>
              If you have no employer, no business of your own, no family member with status in
              Canada, and no completed Canadian study — there may be no work-permit route open to you
              right now, and we will tell you that rather than sell you a file. Wanting to work in
              Canada is not itself an eligibility category. In that position the honest options are
              usually a permanent-residence route based on your skills, or building the underlying
              facts first. Paying someone to manufacture the missing piece is how people end up
              barred.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ============ HOW WE WORK A FILE ============ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How a work-permit file is built"
          title="Sequence matters more than speed"
          subtitle="Most refusals we are asked to fix were decided long before submission."
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

        <p className="mt-10 max-w-3xl text-ink-600 text-pretty leading-relaxed">
          We cannot guarantee an outcome and we do not claim to — the decision belongs to an IRCC
          officer.{' '}
          <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
            Read our no-guarantee policy
          </Link>
          . If you have already been refused,{' '}
          <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
            start here instead
          </Link>
          .
        </p>
      </Section>

      {/* ============ FAQ ============ */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Questions about Canadian work permits" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Find the route that fits your facts"
        title="Which work permit is actually open to you?"
        subtitle="Tell us about your work, your business and your family situation, and we will tell you honestly which route applies — including when the answer is none of them yet."
        page={PAGE}
        waMessage="Hi, I’d like to know which Canadian work permit route fits my situation."
      />
    </>
  );
}
