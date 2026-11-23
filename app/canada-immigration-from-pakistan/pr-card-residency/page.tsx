import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { OnThisPage } from '@/components/OnThisPage';
import { CompareTable } from '@/components/CompareTable';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection, Prose, Icon, ShortAnswer } from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * From Pakistan: keeping Canadian permanent residence while living in Pakistan.
 * The PR card, the 730-day residency obligation, the PR travel document (PRTD)
 * and what happens when a PRTD is refused.
 *
 * Written on the owner's instruction (approved 22 November 2026) from official
 * sources read that day:
 * - the Immigration and Refugee Protection Act, ss. 27, 28, 31, 41, 46, 63, 67
 *   and 72, and the Regulations (SOR/2002-227), ss. 54, 61 and 130, on Justice
 *   Laws (both current to 29 October 2026);
 * - the Immigration and Refugee Board of Canada Rules (SOR/2022-277), rule 16,
 *   which is where the 60-day appeal deadline is set (IRPA s. 63(4) gives the
 *   right of appeal but no deadline);
 * - IRCC: Understand PR status, the PRTD page and Guide IMM 5529, the urgent
 *   page, PR card renewal and eligibility, travelling outside Canada, the
 *   "permanent residents need a PR card" page, the previous-PRs page, the PR
 *   card departmental policy, the Help Centre answer on time abroad, the
 *   biometrics "who needs to give" page, the visa offices list, the visa
 *   application centre finder and renunciation Guide 5781;
 * - the IRB page on appealing a residency decision made outside Canada.
 *
 * The VFS Global Pakistan site refused automated reading (HTTP 403), so this page
 * says nothing about how the Pakistani centres take PRTD paperwork beyond what
 * IRCC itself states.
 *
 * No fees and no processing times: IRCC's PRTD fee and card renewal timing are
 * web-page figures, so they are linked, not printed. Every number here is set in
 * law: 730 days and five years (IRPA s. 28), under 22 (IRPR s. 61(6)), five
 * years and one year (IRPR s. 54), 365 days (IRPA s. 31(3)(c)), and 60 and 30
 * days (IRB Rules r. 16).
 *
 * Our own suggestions, not IRCC's: the order of the pre-flight checklist, the
 * caution about remote work for a Canadian employer, and the "what to do next"
 * column of the scenarios table. Nothing here promises an outcome.
 */
export const metadata: Metadata = {
  title: 'Canadian PR in Pakistan: 730 Days, PR Card, PRTD',
  description:
    'Living in Pakistan as a Canadian PR: the 730-day rule, which days abroad count, an expired PR card, the PR travel document, and the 60-day appeal.',
  alternates: { canonical: '/canada-immigration-from-pakistan/pr-card-residency' },
};

const PAGE = 'pakistan-pr-card-residency';
const CHECKED = '22 November 2026';
const a = 'font-semibold text-accent-500 link-underline';

const LAW = {
  irpa28: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-28.html',
  irpa31: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-31.html',
  irpa46: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-46.html',
  irpa63: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-63.html',
  irpa67: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-67.html',
  irpa72: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-72.html',
  irpr54: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-54.html',
  irpr61: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-61.html',
  irpr130: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-130.html',
  irbRule16: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2022-277/section-16.html',
} as const;

const IRCC = {
  status: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/status.html',
  timeAbroad: 'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1466&top=10',
  prtd: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/travel-document.html',
  guide5529:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5529-applying-permanent-resident-travel-document.html',
  urgent: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/card/urgent.html',
  previousPr:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/status/previous-permanent-residents.html',
  renew: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/card/apply.html',
  cardEligibility: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/card/eligibility.html',
  travelOutside: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/travel-outside-canada.html',
  boarding: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/permanent-residents.html',
  cardPolicy:
    'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/card/departmental-policy.html',
  biometrics: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/who-needs-to-give.html',
  visaOffices: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices.html',
  vac: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html',
  renounce: 'https://ircc.canada.ca/english/information/applications/guides/5781ETOC.asp',
  journal:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/record-trips-outside-canada.html',
  fees: 'https://ircc.canada.ca/english/information/fees/fees.asp',
  times: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
  iad: 'https://www.irb-cisr.gc.ca/en/making-immigration-appeal/Pages/residency-obligation-outside-canada.aspx',
} as const;

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
      {children}
    </a>
  );
}

const COUNTS: [string, string][] = [
  [
    'Living with a Canadian citizen spouse or parent',
    'Each day you ordinarily live outside Canada with a spouse or common-law partner who is a Canadian citizen counts. So does each day a child lives abroad with a Canadian citizen parent. The citizen does not need to be working.',
  ],
  [
    'Working full-time abroad for a Canadian employer',
    'You must be employed by, or under contract to, a Canadian business or the federal or a provincial public service. As a term of that job, you must be assigned full-time to a position, an affiliate or a client outside Canada.',
  ],
  [
    'Living with a PR who works abroad that way',
    'Days count while you accompany a PR spouse, partner or parent who is assigned abroad full-time by a Canadian business or public service. That person must also be meeting the residency obligation.',
  ],
];

const CHECKLIST: [string, string][] = [
  ['Check the expiry date', 'A PR card is valid for five years from issue, or one year in a few cases. It must still be valid on the day you fly.'],
  ['If it has expired, get a PRTD first', 'You cannot renew from Pakistan. IRCC advises not booking travel until you have the travel document.'],
  ['Carry a valid passport', 'You need it with the card or PRTD. An approved PRTD is placed in your passport.'],
  ['Don’t rely on landing papers', 'IRCC says a Record of Landing or Confirmation of Permanent Residence is not valid for travel to Canada.'],
  ['Check transit rules', 'IRCC reminds PRs to check the visa rules of every country they visit or pass through.'],
  ['Travelling with children', 'A child under 18 flying alone needs details of the adult responsible for them. A child with one parent needs proof of custody or the other parent’s consent.'],
  ['Count your days', 'Keep a record of trips and proof of time in Canada. IRCC suggests a travel journal.'],
];

const STEPS: [string, string][] = [
  ['Read the guide and checklist', 'Guide IMM 5529 and checklist IMM 5644 list the documents, including evidence of your time in Canada.'],
  ['Fill in IMM 5444 in the PR Portal', 'IRCC prefers online applications. Paper is for people who need an accommodation, and you must contact the visa application centre first.'],
  ['One application per person', 'Each family member who needs a PRTD makes a complete application of their own, children included.'],
  ['Pay the fee and attach the receipt', 'The amount is on IRCC’s fee list. It is not refunded once processing starts.'],
  ['Answer the residency questions', 'If you are short of 730 days, use the form’s humanitarian section to explain why, and what losing status would mean.'],
  ['Send your passport when asked', 'If approved, IRCC emails instructions for submitting your passport. It comes back with the PRTD in it.'],
];

const FAQS = [
  {
    q: 'Do I lose my PR status when my PR card expires?',
    a: 'No. IRCC says an expired PR card does not end permanent resident status. You stay a PR until an officer makes a final decision, you renounce, a removal order takes effect or you become a citizen. You do need a valid card or a PR travel document to fly back.',
  },
  {
    q: 'Can I renew my PR card from Pakistan?',
    a: 'No. IRCC says a PR card can only be issued in Canada and is not mailed abroad. From Pakistan you apply for a PR travel document, fly back on it, and then apply for a new card in Canada.',
  },
  {
    q: 'How many days do I need in Canada to keep PR?',
    a: 'At least 730 days in every five-year period, under section 28 of the Immigration and Refugee Protection Act. The days do not need to be continuous. Days abroad count only in the situations the law names, such as living with a Canadian citizen spouse.',
  },
  {
    q: 'Does time in Pakistan with my Canadian citizen husband or wife count?',
    a: 'Yes. Each day you ordinarily live outside Canada with a spouse or common-law partner who is a Canadian citizen counts towards the 730 days. Your spouse does not need to be working. IRCC asks for proof of their citizenship and of your relationship.',
  },
  {
    q: 'Where do I apply for a PR travel document from Pakistan?',
    a: 'IRCC prefers online applications through the Permanent Residence Portal. Its list of visa offices names Islamabad as the office for Pakistan, and it lists visa application centres in Islamabad, Lahore and Karachi. Send your passport only when IRCC asks for it.',
  },
  {
    q: 'What if my PR travel document is refused?',
    a: 'You can appeal to the Immigration Appeal Division under section 63(4) of the Act. The appeal must reach the Division within 60 days after you receive the decision and any written reasons. IRCC says you remain a permanent resident while the appeal is pending.',
  },
  {
    q: 'Can I keep PR if I spent less than 730 days in Canada?',
    a: 'Possibly, on humanitarian and compassionate grounds. An officer, or the Immigration Appeal Division on appeal, can weigh your circumstances, including the best interests of any child affected. No one can promise that outcome.',
  },
  {
    q: 'Should I renounce my PR instead?',
    a: 'Only if you do not plan to live in Canada. Renouncing ends your status once an officer approves it, and it cannot be appealed to the Immigration Appeal Division. You would then visit Canada with whatever visa or eTA your passport needs.',
  },
  {
    q: 'Do I need biometrics for a PR travel document?',
    a: 'IRCC’s PRTD pages do not ask for biometrics, and its biometrics rules exempt most permanent residents. The exception is renewing or replacing a PR card in Canada if you were exempt by age when you applied for permanent residence.',
  },
];

export default function PakistanPrCardResidencyPage() {
  return (
    <>
      <PageHero
        eyebrow="From Pakistan · Keeping your PR"
        title={
          <>
            A Canadian PR living in Pakistan:{' '}
            <span className="text-gold-300">keep your status, and get back in.</span>
          </>
        }
        subtitle="Permanent residence does not expire with your card, but it can be lost if you stay away too long. The 730-day rule, the days abroad that count, and the travel document you need to fly home without a valid card."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a free consultation <span aria-hidden="true">→</span>
        </Link>
        <Link href="/canada-immigration-from-pakistan" className="btn btn-ghost">
          Canada from Pakistan: the full guide
        </Link>
      </PageHero>
      <ShortAnswer question="Can I lose Canadian PR while living in Pakistan, and how do I return with an expired card?">
        Yes, you can lose Canadian PR by staying away too long, but not automatically. The law asks for
        730 days in Canada in every five-year period, and some days abroad count. Your status ends only
        after an official decision; an expired card does not end it. To fly back without a valid card,
        you need a PR travel document.
      </ShortAnswer>
      <OnThisPage path="/canada-immigration-from-pakistan/pr-card-residency" />

      {/* ===================== THE RULE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The residency obligation"
          title="Can you lose Canadian PR by living in Pakistan?"
          subtitle={
            <>
              The rule is in <Out href={LAW.irpa28}>section 28 of the Immigration and Refugee Protection Act</Out>,
              read on {CHECKED}.
            </>
          }
        />
        <Prose>
          <p>
            <strong>Yes, but not automatically.</strong> Every permanent resident must be in Canada for at
            least 730 days in every five-year period. The days do not need to be continuous, and some days
            spent abroad count as days in Canada.
          </p>
          <p>
            Which five years count depends on how long you have been a PR. Under five years, you must show
            you can still reach 730 days within five years of becoming a PR. After five years, an officer
            looks at the five years just before the examination.
          </p>
          <p>
            That examination happens when you apply for a PR travel document from abroad, or when you
            arrive at the Canadian border. Falling short does not end your status on its own.{' '}
            <Out href={IRCC.status}>IRCC says</Out> you stay a PR until an official decision is made, and
            that it will tell you of any change.
          </p>
          <p>
            <Out href={LAW.irpa46}>Section 46 of the Act</Out> lists the ways status ends. For a PR in
            Pakistan, two matter: a final decision that you failed the residency obligation, or an approved
            request to renounce. An expired PR card is not on the list.
          </p>
          <p>
            How many Pakistani citizens become permanent residents each year is on our{' '}
            <Link href="/canada-immigration-statistics-pakistan" className={a}>
              Canada immigration statistics for Pakistan
            </Link>
            , taken from IRCC’s own tables.
          </p>
          <p>
            When your days in Canada add up to citizenship, and what happens to your Pakistani
            nationality, is in{' '}
            <Link href="/blog/canadian-citizenship-after-pr-pakistan" className="font-semibold text-accent-500 link-underline">
              Canadian citizenship after PR
            </Link>
            .
          </p>
        </Prose>
        <div className="mx-auto max-w-3xl">
          <Callout title="The card and the status are different things">
            <p>
              The card is proof of status. Under <Out href={LAW.irpr54}>section 54 of the Regulations</Out> it
              is valid for five years from issue, or one year in a few cases.
            </p>
            <p>
              The status is what the residency obligation protects. You can hold a valid card while short of
              730 days, or an expired card while fully meeting them.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== DAYS ABROAD ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Days abroad that count"
          title="Which days outside Canada count towards the 730?"
          subtitle={
            <>
              Section 28(2)(a) of the Act and <Out href={LAW.irpr61}>section 61 of the Regulations</Out> name
              three situations. Outside them, a day in Pakistan does not count.
            </>
          }
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {COUNTS.map(([t, d], i) => (
            <div key={t} className="card p-7">
              <p className="font-serif text-4xl leading-none text-gold-600">{i + 1}</p>
              <h3 className="mt-4 font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </div>
          ))}
        </div>
        <Prose>
          <p>Three details in the Regulations decide many cases:</p>
          <ul>
            <li>“Accompanying” means ordinarily living with the person, not just travelling with them.</li>
            <li>A “child” here is anyone under 22 who is not a spouse or common-law partner.</li>
            <li>A business set up mainly so a PR can meet the obligation from abroad is not a Canadian business.</li>
          </ul>
          <p>
            For the spouse route, IRCC’s <Out href={IRCC.guide5529}>Guide IMM 5529</Out> says proof of the
            citizen’s citizenship and of your relationship is mandatory. IRCC’s Help Centre gives the same
            three situations in plain terms in{' '}
            <Out href={IRCC.timeAbroad}>can my time abroad count</Out>.
          </p>
          <p>
            <strong>Our own caution:</strong> working remotely from Lahore for a Canadian company is not, by
            itself, what the Regulations describe. Section 61(3) speaks of being assigned abroad as a term of
            the job, so check what your contract says before you rely on it.
          </p>
          <p>
            If none of the three fits, an officer can still let you keep status on humanitarian and
            compassionate grounds. The best interests of any child directly affected are part of that
            decision. IRCC’s guide asks you to explain the circumstances beyond your control, and the hardship
            that losing status would cause.
          </p>
        </Prose>
      </Section>

      {/* ===================== SCENARIOS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Six common situations"
          title="What does your situation mean for your PR?"
          subtitle="Each row restates the rules on this page. The last column is our suggestion, not a decision on your case."
        />
        <CompareTable
          caption="Situations a Canadian permanent resident living in Pakistan faces, what the rules say, and suggested next steps"
          columns={['Your situation', 'What the rules say', 'What to do next']}
          rows={[
            {
              label: 'Valid PR card, planning to return',
              cells: [
                'The card and your passport let you board. At the border, an officer can still examine whether you meet the 730 days.',
                'Count your days before you fly, and carry proof of your time in Canada or of a situation that counts.',
              ],
            },
            {
              label: 'PR card expired while you are in Pakistan',
              cells: [
                'You are still a PR. A card is only issued in Canada and is not mailed abroad, so you cannot renew from Pakistan.',
                'Apply for a PR travel document from Pakistan, then apply for a new card once you are back.',
              ],
            },
            {
              label: 'Under 730 days in the five-year period',
              cells: [
                'You stay a PR until an officer decides. A PRTD application leads to that assessment.',
                'Explain any humanitarian reasons in the application. If it is refused, you have 60 days to appeal. If you will not move back, renouncing is the other route.',
              ],
            },
            {
              label: 'Living in Pakistan with a Canadian citizen spouse',
              cells: [
                'Each day you ordinarily live together abroad counts. Your spouse does not need to work for a Canadian employer.',
                'Keep proof of their citizenship and of your relationship. IRCC says both are mandatory.',
              ],
            },
            {
              label: 'Children who are PRs',
              cells: [
                'Each child has their own obligation. A child’s days count while living with a Canadian citizen parent, or with a PR parent assigned abroad by a Canadian employer.',
                'Make a separate PRTD application for each child, and carry custody or consent papers if one parent travels alone with them.',
              ],
            },
            {
              label: 'You no longer plan to live in Canada',
              cells: [
                'You can apply to renounce from Pakistan. Status ends when an officer approves it, with no appeal.',
                'Send the application to the visa office for your country. Afterwards you visit with whatever visa or eTA your passport needs.',
              ],
            },
          ]}
        />
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          One more limit, if you hope to sponsor family: a PR must live in Canada to be a sponsor.{' '}
          <Out href={LAW.irpr130}>Section 130 of the Regulations</Out> lets only Canadian citizens sponsor a
          spouse, partner or child while living abroad. Our{' '}
          <Link href="/family-sponsorship" className={a}>
            family sponsorship guide
          </Link>{' '}
          explains the routes.
        </p>
      </Section>

      {/* ===================== BEFORE YOU FLY ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Before you book"
          title="What should you check before booking a flight to Canada?"
          subtitle="Airlines check your documents before you board, so a problem shows up at the check-in desk in Pakistan, not on arrival in Canada."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <ul className="space-y-4 lg:col-span-3">
            {CHECKLIST.map(([t, d]) => (
              <li key={t} className="flex gap-3 text-ink-600 text-pretty">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                <span>
                  <strong className="text-ink-900">{t}.</strong> {d}
                </span>
              </li>
            ))}
          </ul>
          <div className="lg:col-span-2">
            <Callout title="No valid card or PRTD, no boarding">
              <p>
                <Out href={IRCC.boarding}>IRCC warns</Out> that without a PR card or a PRTD, you may not be
                able to board your flight to Canada.
              </p>
              <p>
                Its <Out href={IRCC.cardPolicy}>PR card policy</Out> says carriers must check proof of status
                before boarding anyone who says they are a PR. That duty comes from section 148 of the Act and
                section 259 of the Regulations.
              </p>
            </Callout>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          IRCC’s <Out href={IRCC.travelOutside}>travelling outside Canada</Out> page and its{' '}
          <Out href={IRCC.cardEligibility}>PR card eligibility</Out> page both say you must be in Canada to
          get a card. The checklist order is our suggestion. The renewal steps are on IRCC’s{' '}
          <Out href={IRCC.renew}>renew a PR card</Out> page.
        </p>
      </Section>

      {/* ===================== PRTD FROM PAKISTAN ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The PR travel document"
          title="How do you apply for a PR travel document from Pakistan?"
          subtitle="A PRTD is for a PR outside Canada without a valid card, returning by plane, boat, train or bus. It is normally valid for one entry."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="card p-7">
              <p className="font-serif text-4xl leading-none text-gold-600">{i + 1}</p>
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </li>
          ))}
        </ol>
        <Prose>
          <p>
            <strong>From Pakistan.</strong> IRCC’s <Out href={IRCC.visaOffices}>list of visa offices</Out>{' '}
            (updated 17 July 2026) names Islamabad as the office for Pakistan, and visa offices handle
            PRTDs. IRCC <Out href={IRCC.vac}>lists visa application centres</Out> in Islamabad, Lahore and
            Karachi, and taking PRTD applications is one of the services it says centres offer.
          </p>
          <p>
            Passports go to a centre only after IRCC asks for them. IRCC’s pages do not say how the Pakistani
            centres take PRTD paperwork, so check the centres’ own website before you go.
          </p>
          <p>
            <strong>Biometrics.</strong> IRCC’s PRTD pages do not ask for them, and its{' '}
            <Out href={IRCC.biometrics}>biometrics rules</Out> (updated 19 November 2026) exempt most
            permanent residents. The exception applies back in Canada: renewing or replacing a PR card if
            you were exempt by age when you applied for PR.
          </p>
          <p>
            <strong>Fees and timing.</strong> The fee is on IRCC’s <Out href={IRCC.fees}>fee list</Out>. The{' '}
            <Out href={IRCC.prtd}>PRTD page</Out> says applications are handled on a priority basis but times
            vary. If you must travel urgently, for example because of a serious illness, use IRCC’s{' '}
            <Out href={IRCC.urgent}>urgent process</Out>.
          </p>
        </Prose>
      </Section>

      {/* ===================== REFUSED ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="If the answer is no"
          title="What happens if your PR travel document is refused?"
          subtitle="A refusal usually means an officer found you did not meet the residency obligation. You can appeal, and the deadline is set in law."
        />
        <Prose>
          <p>
            The refusal letter gives the reasons and your appeal rights.{' '}
            <Out href={LAW.irpa63}>Section 63(4) of the Act</Out> lets a PR appeal a residency decision made
            outside Canada. The appeal goes to the Immigration Appeal Division (IAD) of the Immigration and
            Refugee Board.
          </p>
          <p>
            The deadline is in <Out href={LAW.irbRule16}>rule 16(c) of the Immigration and Refugee Board of
            Canada Rules</Out>, not in the Act. The IAD must receive your notice of appeal within 60 days
            after you receive the officer’s decision and any written reasons.
          </p>
          <p>
            <Out href={IRCC.previousPr}>IRCC says</Out> you keep PR status while the appeal is pending. If
            you do not appeal in time, the decision becomes final and your status ends.
          </p>
          <p>
            <Out href={LAW.irpa31}>Section 31(3)(c) of the Act</Out> gives one route home during an appeal. An
            officer must issue a travel document if you were in Canada at least once in the 365 days before
            the examination. Your appeal must also be pending, or still within its deadline.
          </p>
          <p>
            <Out href={LAW.irpa67}>Section 67</Out> lets the IAD allow an appeal for an error of law or fact, a
            breach of natural justice, or humanitarian reasons. The{' '}
            <Out href={IRCC.iad}>IRB’s own guidance</Out> advises preparing humanitarian reasons even if you
            argue that you met the 730 days.
          </p>
          <p>
            If the IAD dismisses the appeal, the next step is judicial review in the Federal Court, with the
            Court’s leave. <Out href={LAW.irpa72}>Section 72</Out> allows that only once appeal rights are
            used up, so the IAD comes first. Our{' '}
            <Link href="/refusals/judicial-review" className={a}>
              judicial review guide
            </Link>{' '}
            explains that step, and{' '}
            <Link href="/canada-visa-refused" className={a}>
              after a Canadian refusal
            </Link>{' '}
            covers the wider options.
          </p>
          <p>
            A finding made at a Canadian airport follows a different path: it can lead to a removal order. A
            PR can appeal that order to the IAD under section 63(3), within 30 days after receiving it (rule
            16(b)).
          </p>
          <p>
            <strong>Renouncing</strong> is the other choice, if you no longer plan to live in Canada. IRCC’s{' '}
            <Out href={IRCC.renounce}>Guide 5781</Out> says you send it to the visa office for your country.
            Status ends when an officer approves it, and it cannot be appealed.
          </p>
        </Prose>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow={`Read on ${CHECKED}`}
          title="What do the official sources say?"
          subtitle={
            <>
              Every rule on this page comes from these laws and pages, as they stood on {CHECKED}. Fees and
              processing times are only on IRCC’s <Out href={IRCC.fees}>fee list</Out> and{' '}
              <Out href={IRCC.times}>processing times</Out> pages.
            </>
          }
        />
        <Prose>
          <ul>
            <li>
              Immigration and Refugee Protection Act, current to 29 October 2026:{' '}
              <Out href={LAW.irpa28}>s. 28</Out>, <Out href={LAW.irpa31}>s. 31</Out>,{' '}
              <Out href={LAW.irpa46}>s. 46</Out>, <Out href={LAW.irpa63}>s. 63</Out>,{' '}
              <Out href={LAW.irpa67}>s. 67</Out> and <Out href={LAW.irpa72}>s. 72</Out>
            </li>
            <li>
              Immigration and Refugee Protection Regulations, current to 29 October 2026:{' '}
              <Out href={LAW.irpr54}>s. 54</Out>, <Out href={LAW.irpr61}>s. 61</Out> and{' '}
              <Out href={LAW.irpr130}>s. 130</Out>
            </li>
            <li>
              Immigration and Refugee Board of Canada Rules, current to 29 October 2026:{' '}
              <Out href={LAW.irbRule16}>rule 16</Out>
            </li>
            <li>
              IRCC, <Out href={IRCC.status}>Understand permanent resident status</Out> (modified 9 April 2026)
            </li>
            <li>
              IRCC, <Out href={IRCC.prtd}>Apply for a PR travel document</Out> (modified 30 October 2026) and{' '}
              <Out href={IRCC.guide5529}>Guide IMM 5529</Out> (modified 30 July 2025)
            </li>
            <li>
              IRCC, <Out href={IRCC.urgent}>Apply urgently for a PR card or PRTD</Out> (modified 17 October 2025)
            </li>
            <li>
              IRCC, <Out href={IRCC.renew}>Renew or replace a PR card</Out> (modified 4 August 2026) and{' '}
              <Out href={IRCC.cardEligibility}>who can apply</Out> (modified 28 May 2025)
            </li>
            <li>
              IRCC, <Out href={IRCC.travelOutside}>Travelling outside Canada as a PR</Out> (dated 7 August
              2025) and <Out href={IRCC.boarding}>PRs need a PR card or travel document</Out>
            </li>
            <li>
              IRCC, <Out href={IRCC.previousPr}>Travel to Canada without a valid PR card</Out> and{' '}
              <Out href={IRCC.cardPolicy}>PR card departmental policy</Out> (modified 31 March 2025)
            </li>
            <li>
              IRCC Help Centre, <Out href={IRCC.timeAbroad}>Can my time abroad count?</Out> (modified 3
              November 2026)
            </li>
            <li>
              IRCC, <Out href={IRCC.biometrics}>Who needs to give biometrics</Out> (modified 19 November 2026)
            </li>
            <li>
              IRCC, <Out href={IRCC.visaOffices}>Visa offices outside Canada</Out> (modified 17 July 2026) and{' '}
              <Out href={IRCC.vac}>Find a visa application centre</Out>
            </li>
            <li>
              IRCC, <Out href={IRCC.renounce}>Guide 5781: renouncing PR status</Out> (modified 19 June 2025)
            </li>
            <li>
              IRCC, <Out href={IRCC.journal}>Record your trips outside Canada</Out> (modified 11 September 2025)
            </li>
            <li>
              Immigration and Refugee Board, <Out href={IRCC.iad}>Appealing a residency obligation decision made
              outside Canada</Out> (modified 22 March 2023)
            </li>
          </ul>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="What else do PRs living in Pakistan ask?" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="22 November 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you apply"
        title="Get your residency facts in order first"
        subtitle="Bring your travel history, your card and any proof of time in Canada. We’ll go through which days count and what a travel document application would involve. No one can promise an outcome, and we won’t."
        page={PAGE}
        service={SERVICE.VISIT_VISA}
        targetCountry="Canada"
        waMessage="Hi, I’m a Canadian PR living in Pakistan and would like to ask about my PR card or a PR travel document."
      />
    </>
  );
}
