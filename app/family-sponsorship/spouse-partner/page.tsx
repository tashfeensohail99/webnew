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
 * Spouse / partner sponsorship.
 *
 * The job of this page is to separate two things people constantly conflate:
 * whether a relationship is genuine, and whether it has been evidenced well
 * enough for a stranger to be satisfied of it. Genuine relationships get refused
 * on the second point every week. Everything else follows from that.
 */
export const metadata: Metadata = {
  title: 'Sponsoring a Spouse or Partner to Canada',
  description:
    'The three relationships Canada recognises, what evidences each, the inland versus outland trade-offs, and how officers assess whether one is genuine.',
  alternates: { canonical: '/family-sponsorship/spouse-partner' },
};

const PAGE = 'family-sponsorship-spouse-partner';

const RELATIONSHIP_TYPES = [
  {
    icon: 'doc' as const,
    kicker: 'Married spouse',
    title: 'A marriage Canada recognises',
    body: 'A marriage valid both where it took place and under Canadian law. Proxy, telephone and internet marriages where one party was not physically present are generally not accepted for immigration purposes. The certificate is the starting point, not the proof.',
  },
  {
    icon: 'building' as const,
    kicker: 'Common-law partner',
    title: 'Cohabitation, continuously',
    body: 'A partner you have lived with in a conjugal relationship for a continuous qualifying period defined in the Immigration and Refugee Protection Regulations. The evidence is documentary and mundane: a shared address on independent records, joint tenancy or utilities, shared finances, correspondence addressed to both of you at the same place.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Conjugal partner',
    title: 'Committed, but prevented',
    body: 'A partner outside Canada in a committed relationship of the qualifying duration set out in the Regulations, who could neither marry you nor live with you because of a serious barrier beyond your control. This is a narrow category, not a fallback for couples who simply have not got round to marrying.',
  },
];

const GENUINENESS = [
  ['How the relationship began', 'A coherent account of how you met, who introduced you, and how the relationship developed — one that both of you tell the same way.'],
  ['Communication over time', 'Contact that is continuous and two-way across the whole relationship, not a burst assembled shortly before filing.'],
  ['Time spent together', 'Visits, stays, travel — with the ordinary traces they leave: stamps, tickets, bookings, photographs with other people in them.'],
  ['Knowledge of each other', 'Each of you knowing the other’s family, work, circumstances and plans in the way people in a real relationship do.'],
  ['Recognition by others', 'Family and community treating you as a couple — invitations, ceremonies, correspondence, declarations to employers or institutions.'],
  ['Interdependence', 'Financial support, shared responsibilities, insurance and beneficiary designations, plans made jointly rather than in parallel.'],
];

const STEPS = [
  {
    title: 'Confirm the sponsor is eligible',
    body: 'A Canadian citizen, permanent resident or registered Indian, meeting the sponsorship undertaking requirements. Certain past defaults, some criminal convictions and previous sponsorships can bar a sponsor.',
  },
  {
    title: 'Decide inland or outland',
    body: 'This choice affects work authorisation, travel and appeal rights. It is made once, at the start, and is difficult to unwind later.',
  },
  {
    title: 'Build the relationship record',
    body: 'The heart of the file. Assembled around a timeline of the relationship rather than dumped in as an undifferentiated pile of screenshots.',
  },
  {
    title: 'File sponsor and applicant together',
    body: 'The sponsorship undertaking and the permanent residence application are assessed as one package. A weakness on either side stalls both.',
  },
  {
    title: 'Medicals, police and biometrics',
    body: 'Standard admissibility steps for the applicant and any accompanying dependants, requested on the department’s schedule.',
  },
  {
    title: 'Interview or further evidence, if asked',
    body: 'Not every file is interviewed. If yours is, or if a procedural fairness letter arrives, that is the moment the case is usually won or lost.',
  },
];

const FAQS = [
  {
    q: 'Is an arranged marriage treated as suspect?',
    a: 'No. An arranged marriage is a recognised way of forming a genuine relationship and is not a negative factor in itself. It is assessed on exactly the same test as any other marriage: is the relationship genuine, and was it entered into primarily for a purpose other than acquiring status. What does cause difficulty is not the arrangement but the evidence — a short courtship, limited direct contact, and few independent traces of a shared life leave an officer with little to weigh. That is a documentation problem rather than a problem with the marriage, and it is usually something that can be addressed before filing — though addressing it does not determine the outcome.',
  },
  {
    q: 'My relationship is real. Can it still be refused?',
    a: 'Yes, and this is the single most important thing to understand before you file. An officer does not know you. They decide on what is in the file. A genuine relationship that is thinly evidenced, inconsistently described, or presented without a coherent timeline can be refused — and the refusal is not a finding that you were lying, it is a finding that the officer was not satisfied. Prepare on the assumption that a sceptical stranger will read it.',
  },
  {
    q: 'Should I apply inland or outland?',
    a: 'It depends on where the applicant is, whether they hold valid status in Canada, how much they need to travel, and how much the right of appeal matters to them. Inland can bring the possibility of an open work permit while the application is processed; outland preserves a right of appeal to the Immigration Appeal Division if the sponsorship is refused, and does not tie the applicant to remaining in Canada. Neither is universally better. It is a decision to make deliberately at the start.',
  },
  {
    q: 'Can the applicant work while the application is processed?',
    a: 'Not automatically. An open work permit is available in defined circumstances connected to inland applications and existing status in Canada — it is not a feature of every spousal application, and it is not immediate. Treat any income during processing as uncertain until authorisation is actually in hand.',
  },
  {
    q: 'Can the applicant visit or stay in Canada while waiting?',
    a: 'Applying to sponsor a spouse does not create a right to enter Canada, and a pending permanent residence application can make a visitor visa harder rather than easier, because intent to leave is exactly what a visitor officer is assessing. Some applicants do hold both. Do not plan around it as though it were assured. See our page on the visitor route for how that assessment works.',
  },
  {
    q: 'What happens if we separate while the application is pending?',
    a: 'The relationship must exist at the time of the decision, not merely at the time of filing. A sponsor can also withdraw the undertaking before permanent residence is granted. Both situations end the application, and neither is a matter you should navigate without advice.',
  },
  {
    q: 'How long does it take and what does it cost?',
    a: 'Processing times and government fees change, and both differ by where the application is processed. IRCC publishes the current figures on its own site and that is the only place to read them. We do not print numbers here that you might rely on a year later.',
  },
  {
    q: 'Can you guarantee approval if the relationship is genuine?',
    a: 'No. The decision belongs to a visa officer, not to us. What we can do is tell you honestly whether the record supports the application before you file, and say so plainly if it does not yet.',
  },
];

export default function SpousePartnerSponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Family sponsorship"
        title={
          <>
            A genuine relationship can still be refused if it is{' '}
            <span className="text-gold-300">poorly evidenced</span>
          </>
        }
        subtitle={
          <>
            Canada recognises three kinds of partner relationship, and assesses all of them on the
            same question: is this real, and was it entered into for the reason you say. That
            question is answered by a stranger reading a file.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THREE RELATIONSHIP TYPES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The three categories"
          title="Which relationship you are actually in"
          subtitle="These are legal categories with different evidence requirements. Applying under the wrong one is a common and avoidable reason for delay."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {RELATIONSHIP_TYPES.map((r) => (
            <FeatureCard key={r.title} icon={<Icon name={r.icon} />} kicker={r.kicker} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            <p>
              The categories are not interchangeable, and you do not choose between them for
              convenience. A couple who have lived together for the required period are common-law
              partners whether or not they think of themselves that way. A couple who have never
              cohabited and face no genuine barrier to marrying or living together are generally
              neither common-law nor conjugal, however committed they are.
            </p>
            <p>
              The conjugal category in particular is misunderstood. It exists for couples kept apart
              by something serious — an immigration barrier, a legal prohibition on the marriage, or
              social or religious consequences of a severity a decision-maker will recognise.
              Distance, work, cost and family disapproval on their own are rarely enough. If you are
              considering it, the barrier itself has to be documented as carefully as the
              relationship.
            </p>
            <p>
              The qualifying periods and the precise wording of each definition are set out in the{' '}
              <a
                href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Immigration and Refugee Protection Regulations
              </a>{' '}
              and summarised by IRCC on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                canada.ca
              </a>
              . Check them there rather than relying on a figure quoted on any consultant’s page,
              including ours.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== INLAND VS OUTLAND ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The choice with real consequences"
          title="Inland or outland"
          subtitle="Not a filing formality. It determines whether the applicant can work, whether they can leave Canada, and what happens if the application is refused."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-serif text-2xl text-ink-900">Inland</h3>
            <Prose>
              <p>
                The applicant is in Canada with the sponsor and applies from within the country. The
                practical draw is that an open work permit may be available while the application is
                processed, which for many couples is the difference between one income and two.
              </p>
              <p>
                The costs are real. The applicant is expected to remain in Canada, and leaving during
                processing risks being unable to return — which matters if a parent falls ill or a
                sibling marries. And if the application is refused, an inland decision does not carry
                a right of appeal to the Immigration Appeal Division. The remaining route is judicial
                review at the Federal Court, which reviews how the decision was made rather than
                re-deciding the relationship.
              </p>
            </Prose>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-ink-900">Outland</h3>
            <Prose>
              <p>
                The application is processed through a visa office abroad, which is the usual route
                where the applicant is in Pakistan or elsewhere outside Canada. The applicant is not
                tied to staying in Canada and can travel, subject to holding whatever entry document
                they would otherwise need.
              </p>
              <p>
                The significant advantage is the right of appeal. If a family class sponsorship is
                refused, the sponsor can generally appeal to the Immigration Appeal Division, which
                can hear evidence and reach its own conclusion about the relationship — a
                fundamentally stronger remedy than judicial review. For a couple whose file rests on
                genuineness, that matters.
              </p>
              <p>
                What outland does not usually offer is work authorisation for an applicant who is not
                already in Canada with status.
              </p>
            </Prose>
          </div>
        </div>

        <div className="mt-10">
          <Callout title="Choose for your circumstances, not for speed">
            <p>
              Couples routinely pick a route on the basis of which they have heard is faster. Timing
              varies by office and changes; appeal rights and the ability to travel do not. If the
              relationship is one that will need to be explained — a short courtship, a large age
              difference, a previous sponsorship, an earlier refusal — the right of appeal is worth
              weighing heavily.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== GENUINENESS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The actual test"
              title="What genuineness means in practice"
            />
            <Prose>
              <p>
                The law asks two things about a partner relationship: whether it is genuine, and
                whether it was entered into primarily for the purpose of acquiring status or
                privilege under Canadian immigration law. A relationship that fails either limb is
                excluded.
              </p>
              <p>
                What an officer is doing is narrower than people imagine. They are not judging
                whether you love each other. They are asking whether the documents in front of them,
                read together, are consistent with two people who are actually in a relationship —
                and whether the account each of you gives holds up against the other’s.
              </p>
              <p>
                That is why volume does not help. A thousand chat screenshots from the last two
                months evidence the last two months. Six independent documents spread across three
                years evidence three years.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What gets weighed" title="The dimensions officers look at" />
            <ul className="mt-6 space-y-4">
              {GENUINENESS.map(([term, def]) => (
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

        <div className="mt-12">
          <Callout title="Arranged marriage is not a red flag. Thin evidence is.">
            <p>
              An arranged marriage is a normal way for a marriage to come about and is assessed on
              precisely the same genuineness test as any other. Nobody is entitled to treat it as
              suspect because of how the introduction happened.
            </p>
            <p>
              What does cause trouble is the evidentiary shape such a marriage often has: a short
              period between introduction and ceremony, limited contact before it, families who
              arranged matters between them, and few of the joint financial or residential records
              that a long cohabitation produces. None of that makes the marriage less real. All of it
              means the file has to be built deliberately — the ceremony documented properly, family
              involvement evidenced, contact from the introduction onwards preserved, and both
              spouses genuinely able to speak about each other’s circumstances if asked.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How the application runs"
          subtitle="Two applications assessed as one: the sponsor’s undertaking and the applicant’s permanent residence."
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
            <strong>Evidence that starts when the application does.</strong> A relationship record
            that begins a few weeks before filing invites the obvious inference. Contact and shared
            documents from the beginning of the relationship are worth more than anything gathered
            afterwards.
          </p>
          <p>
            <strong>Two versions of the same story.</strong> Where an interview happens, the spouses
            are often asked about the same events separately. Honest people contradict each other
            when they have never sat down and compared what they each remember. That is not
            coaching — it is preparation, and it is legitimate.
          </p>
          <p>
            <strong>A ceremony documented only by photographs.</strong> Photographs of the couple
            alone prove little. Registration documents, invitations, guests in the frame, and records
            from third parties who were involved carry far more weight.
          </p>
          <p>
            <strong>Assuming the marriage certificate settles it.</strong> A valid marriage
            establishes the legal relationship. It says nothing about genuineness, which is a
            separate finding an officer must make on separate evidence.
          </p>
          <p>
            <strong>An undisclosed prior relationship or dependant.</strong> Previous marriages,
            prior sponsorships and children who were not examined during an earlier application all
            have consequences. Concealing them converts a manageable problem into a misrepresentation
            finding.
          </p>
          <p>
            <strong>Documents someone else prepared.</strong> Statements, letters and affidavits
            arranged by a third party and containing claims you cannot personally support are
            misrepresentation whether or not you wrote them. The consequence lands on the applicant.{' '}
            <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
              What misrepresentation means
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="Some situations should not be filed yet — or at all">
            <p>
              A relationship entered into primarily so that one partner can come to Canada is
              excluded by law, and because that test looks at why the relationship was formed in the
              first place, later evidence of a shared life does not reliably cure it. If that is the
              actual arrangement, no amount of documentation makes it a spousal application, and pursuing it
              risks a misrepresentation finding that will follow the applicant for years.
            </p>
            <p>
              This route also does not suit a sponsor who cannot meet the undertaking requirements, a
              couple who have not yet accumulated any independent record of their relationship, or a
              couple considering the conjugal category with no barrier they can actually document.
              In several of those cases the right advice is to wait and build the record properly,
              not to file now and hope.
            </p>
            <p>
              And if the goal is simply to bring a partner to Canada quickly, sponsorship may not be
              the mechanism — a partner with their own qualifications may have a stronger and faster
              route in their own right.{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                See the skilled-worker routes
              </Link>
              .
            </p>
            <p>
              We would rather tell you on the first call that a file is not ready than take a fee for
              one that was going to be refused. That is why we publish a{' '}
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
        <SectionHeading eyebrow="Where the current details live" title="Fees, forms and processing" />
        <Prose>
          <p>
            Government fees, processing times, forms and document checklists change, and they differ
            by visa office. We deliberately do not publish those figures here, because a number that
            is right today is a liability on a page you read next year.
          </p>
          <p>
            IRCC publishes the current requirements for{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              family sponsorship on canada.ca
            </a>
            , and the definitions of spouse, common-law partner and conjugal partner — along with the
            exclusion for relationships entered into primarily for immigration purposes — sit in the{' '}
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
          <p>
            If a previous application was refused and you do not know why, the reasoning in the
            officer’s notes is usually the fastest way to understand what the file was missing.{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              How to obtain GCMS notes
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
        eyebrow="Before you file"
        title="Have the relationship record reviewed while it can still be fixed"
        subtitle="Tell us how the relationship began, where each of you is, and what documents you already hold. We will tell you honestly whether the file is ready, which route fits, and what is missing."
        page={PAGE}
        waMessage="Hi, I’d like to discuss sponsoring my spouse or partner to Canada."
      />
    </>
  );
}
