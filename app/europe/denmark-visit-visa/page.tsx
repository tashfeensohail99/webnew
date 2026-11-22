import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { OnThisPage } from '@/components/OnThisPage';
import { CompareTable } from '@/components/CompareTable';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection, Prose, ShortAnswer } from '@/components/ui';
import { SERVICE } from '@/lib/site';

/**
 * Denmark visit visa (Schengen short-stay "C" visa) from Pakistan.
 *
 * Written on the owner's instruction on 22 November 2026 (batch 27), from the
 * official pages as they stood that day:
 * - Embassy of Denmark in Pakistan (um.dk): the Visa, Document checklists, FAQ,
 *   Appeal and "Red Carpet Programme - How to enroll" pages, and the embassy's
 *   "Visit Family/Friends" and "Business visit" checklists (both dated
 *   10 January 2024). The Ministry of Foreign Affairs' "Where to apply" list.
 * - The Danish Immigration Service (Udlændingestyrelsen) on nyidanmark.dk:
 *   private and tourist visits and business visits (both updated 30 June 2026),
 *   invitation of a visa applicant (4 June 2026), "You have got a no to visa"
 *   (8 June 2026). Visas are decided by the embassy or the Immigration Service,
 *   not by SIRI.
 * - The Danish Visa Executive Order, BEK nr 1327 af 17/11/2025, sections 28-29
 *   (who decides; the 8-week appeal deadline), on Retsinformation.
 * - The EU Visa Code, Regulation (EC) No 810/2009, consolidated version of
 *   28 June 2024 on EUR-Lex: Articles 2, 5, 6, 9, 10, 12, 13, 14, 15, 16, 23, 32.
 *   The EUR 90 fee is from Commission Delegated Regulation (EU) 2024/1415; the
 *   consolidated text of 11 June 2024 is the first to show it (EUR 80 before).
 * - Official statistics: the European Commission's 2025 consulate file, row
 *   Denmark / PAKISTAN / ISLAMABAD (5,539 applied, 1,173 issued, 1 LTV, 4,325 not
 *   issued, rate 0.7865), opened on 22 November 2026. The 2024 rate and the 45.9%
 *   total for Pakistan are from /blog/schengen-visa-refusals-pakistan-2025.
 *
 * Not printed, because they appear only on web pages: the visa centre's service
 * charge, the embassy's processing estimates, the Immigration Service's daily
 * funds guide, the look-back periods in the embassy checklists, the deadline for
 * missing documents and the online invitation's validity period.
 *
 * The country groups are the Immigration Service's own published practice,
 * quoted, not interpreted: the statistics record no reasons for refusals.
 * Our own suggestions: keep every document consistent; read the refusal letter
 * for the route and deadline before acting; ask the embassy before relying on
 * the Red Carpet programme. Re-check the statistics when the 2026 file is out
 * (May 2027), and the checklists whenever their date changes.
 */
export const metadata: Metadata = {
  title: 'Denmark Visit Visa from Pakistan: How to Apply',
  description:
    'Applying for a Danish Schengen visit visa from Pakistan: ApplyVisa, the visa centres, documents, the host’s invitation, refusal rates and the 8-week appeal.',
  alternates: { canonical: '/europe/denmark-visit-visa' },
};

const PAGE = 'europe-denmark-visit';
const CHECKED = '22 November 2026';
const a = 'font-semibold text-accent-500 link-underline';

const SRC = {
  embassy: 'https://um.dk/pakistan/en/travel-and-residence/visa/',
  checklists: 'https://um.dk/pakistan/en/travel-and-residence/visa/document-checklists/',
  familyList: 'https://um.dk/media/zuugmp15/checklist-familyvisit-10012024.pdf',
  businessList: 'https://um.dk/media/ahzigvdh/checklist-business-visit-10012024.pdf',
  faq: 'https://um.dk/pakistan/en/travel-and-residence/visa/faq/',
  appeal: 'https://um.dk/pakistan/en/travel-and-residence/visa/appeal/',
  redCarpet: 'https://um.dk/pakistan/en/travel-and-residence/visa/red-carpet-programme-how-to-enroll/',
  whereToApply: 'https://um.dk/en/travel-and-residence/where-to-apply',
  applyVisa: 'https://applyvisa.um.dk/NVP.App/frontpage',
  disPrivate: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Private-visits-and-tourist-visits-',
  disBusiness: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Business-visits',
  disInvite: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Invitation-of-a-visa-applicant',
  disRefusal: 'https://nyidanmark.dk/en-GB/You-have-received-an-answer/Short-stay-visa/No-to-visa',
  visaOrder: 'https://www.retsinformation.dk/eli/lta/2025/1327',
  visaCode: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
  stats: 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en',
} as const;

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
      {children}
    </a>
  );
}

const STEPS: [string, string][] = [
  ['Time it', 'Apply no more than six months, and as a rule at least 15 calendar days, before the trip (Visa Code, Article 9).'],
  ['Get the invitation ID', 'For a family or business visit, your host fills in an invitation and sends you its ID.'],
  ['Apply and pay online', 'Fill in the form and pay the fee on ApplyVisa, then print and sign its cover letter.'],
  ['Book the visa centre', 'Applications go to a Gerry’s/VFS centre in Islamabad, Lahore or Karachi, not to the embassy.'],
  ['Attend in person', 'Hand in your documents and give your photo and fingerprints. Children under 12 give no fingerprints (Article 13).'],
  ['Wait for the decision', 'Article 23 sets 15 calendar days from an admissible application, extendable to 45 in individual cases.'],
];

/** Document, why it is asked for, Pakistan notes: the embassy checklist, with the Visa Code article. */
const DOCS: [string, string, string][] = [
  ['Application and cover letter', 'The application itself, made on ApplyVisa', 'Print, sign and bring the cover letter.'],
  ['Passport, and earlier passports', 'Article 12: valid at least three months beyond your departure, two blank pages, issued in the last 10 years', 'Add copies of earlier visas and stamps.'],
  ['One passport photo', 'Article 10: every application needs one', 'Colour, light background, recent.'],
  ['Travel medical insurance', 'Article 15: all Schengen states, the whole stay, cover of at least EUR 30,000', 'Must show the policy number, dates and benefits, and cover COVID-19 treatment.'],
  ['Copy of your CNIC', 'Article 6: you apply where you legally live', 'Non-Pakistanis show their Pakistani visa or residence permit.'],
  ['Return flight reservation', 'Shows the trip fits the visa', 'Do not buy the ticket before the visa is granted.'],
  ['Proof of accommodation', 'Article 14: where you will stay', 'A hotel booking, or proof you will stay with your host.'],
  ['NADRA Family Registration Certificate, in English', 'Your family ties, and your link to a family host', 'Listed for every applicant.'],
  ['Bank statements, NTN certificate, FBR tax-return acknowledgements', 'Article 14: money for the stay and the journey home', 'Statements signed and stamped by the bank; the checklist sets the period.'],
  ['Proof of work, business or pension', 'Shows you will return', 'Payslips, contract and leave letter; company registration; a No Objection Certificate for government staff; pension statements.'],
  ['Child not travelling with both parents', 'Both parents agree to the trip', 'Consent affidavit, the other parent’s CNIC and passport, proof of school enrolment, any guardianship order.'],
  ['Your host’s papers', 'Who invited you, and their status in Denmark', 'Invitation ID or signed invitation, a colour passport copy and, if not Danish, their residence permit. For a spouse: the Nikah Nama and the Union Council’s Marriage Registration Certificate, in English.'],
];

const FORMS: [string, string][] = [
  ['VU2: family or friends', 'Your host fills it in online with MitID and sends you the ID. A host without a registered Danish address uses the printable VU2.'],
  ['VU1: business visit', 'Filled in by the Danish company, online with MitID Erhverv or on paper.'],
];

const GROUNDS: string[] = [
  'uses a false, counterfeit or forged travel document;',
  'does not justify the purpose and conditions of the stay;',
  'does not show enough money for the stay and the return;',
  'has already used 90 days of the current 180-day period;',
  'has a Schengen Information System alert to refuse entry;',
  'is considered a threat to public policy, security, health or international relations;',
  'lacks adequate travel medical insurance.',
];

const FAQS = [
  {
    q: 'Can Pakistani citizens get a Denmark visit visa?',
    a: 'Yes, but the rules are strict. The Danish Immigration Service puts Pakistan in Group 5, where, as a starting point, visas are granted only in extenuating circumstances.',
  },
  {
    q: 'How much is the Denmark visa fee?',
    a: 'EUR 90 under the EU Visa Code, or EUR 45 for children aged 6 to 11; children under 6 pay nothing. The visa centre adds its own service fee.',
  },
  {
    q: 'How long does a Danish visa decision take?',
    a: 'The Visa Code sets 15 calendar days from an admissible application, extendable to 45 in individual cases.',
  },
  {
    q: 'Do I need an invitation from someone in Denmark?',
    a: 'Usually. The Danish Immigration Service says Pakistani citizens normally need a host in Denmark for a private or tourist visit. For a business visit, the Danish company must confirm it.',
  },
  {
    q: 'Can I appeal a Danish visa refusal?',
    a: 'Yes. Appeal an embassy refusal to the Danish Immigration Service, and a refusal by the Service to the Immigration Appeals Board. Each is due within 8 weeks of receiving the decision, and your refusal letter states the route.',
  },
  {
    q: 'Should I use an agent for a Danish visa?',
    a: 'You do not need one. The embassy asks applicants not to contact agents, warning that they charge high prices for false documents that usually lead to refusal.',
  },
];

export default function DenmarkVisitVisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Europe · Denmark · Visit visa"
        title={
          <>
            Denmark visit visa from Pakistan:{' '}
            <span className="text-gold-300">the rules, the papers and the refusals</span>
          </>
        }
        subtitle="A Schengen visa for up to 90 days in any 180, applied for online and handed in at a visa centre in Islamabad, Lahore or Karachi."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a free consultation <span aria-hidden="true">→</span>
        </Link>
        <Link href="/europe" className="btn btn-ghost">
          All of Europe from Pakistan
        </Link>
      </PageHero>
      <ShortAnswer question="How do I apply for a Denmark visit visa from Pakistan, and why are so many refused?">
        Apply and pay on ApplyVisa, then hand in your documents and give fingerprints at a Gerry’s/VFS
        centre in Islamabad, Lahore or Karachi. In 2025 Denmark did not issue a visa in 78.7% of its
        decisions in Pakistan. The figures record no reasons, but the Danish Immigration Service puts
        Pakistan in its most restricted country group.
      </ShortAnswer>
      <OnThisPage path="/europe/denmark-visit-visa" />

      {/* ===================== WHERE + WHO ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Before you apply"
          title="Which country do you apply to, and who decides?"
          subtitle="Your trip decides the country. The embassy or the Danish Immigration Service decides the case."
        />
        <Prose>
          <p>
            A Danish visit visa is a uniform Schengen “C” visa. Under Article 2 of the{' '}
            <Out href={SRC.visaCode}>EU Visa Code</Out>, it covers up to 90 days in any 180-day period. It
            is not a work permit.
          </p>
          <p>
            Article 5 decides the country: your only destination or, on a longer trip, your main one by
            days of stay or purpose. So your trip decides, not a country’s refusal rate.
          </p>
          <p>
            The Embassy of Denmark in Islamabad decides most applications. Section 28 of the{' '}
            <Out href={SRC.visaOrder}>Danish Visa Executive Order</Out> sends some to the Danish
            Immigration Service, for example when another Schengen state objects. SIRI, which handles work
            permits, does not decide visit visas.
          </p>
          <p>
            To live in Denmark rather than visit, you need a residence permit; for founders, that can be{' '}
            <Link href="/europe/denmark-startup-visa" className={a}>
              Start-up Denmark
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== STEPS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Step by step"
          title="How do you apply for a Denmark visit visa from Pakistan?"
          subtitle={
            <>
              From the embassy’s <Out href={SRC.checklists}>checklists</Out> and <Out href={SRC.faq}>FAQ</Out>,
              and the Ministry’s <Out href={SRC.whereToApply}>where to apply</Out> list.
            </>
          }
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="card p-7">
              <p className="font-serif text-4xl leading-none text-gold-600">{i + 1}</p>
              <p className="mt-4 font-serif text-xl">{t}</p>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-10 max-w-3xl">
          <Callout title="The visa fee, as set in law">
            <p>
              Article 16 of the Visa Code sets the fee at EUR 90, and EUR 45 for children aged 6 to 11.
              Children under 6 pay nothing. The EUR 90 applies from 11 June 2024, under Commission
              Delegated Regulation (EU) 2024/1415. It is not refunded after a refusal, and the visa centre
              adds a service fee.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== DOCUMENTS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="From the embassy’s checklist"
          title="What documents does the Danish embassy ask for?"
          subtitle={
            <>
              The embassy’s <Out href={SRC.familyList}>Visit Family/Friends checklist</Out>, dated 10 January
              2024 and still linked on {CHECKED}; the <Out href={SRC.businessList}>business checklist</Out>{' '}
              differs mainly on invitations.
            </>
          }
        />
        <div className="not-prose mt-8 rounded-2xl border border-rule bg-paper">
          <table role="table" className="block w-full text-left text-sm sm:table">
            <caption className="sr-only">
              Documents the Danish embassy asks for, why, and notes for Pakistan
            </caption>
            <thead role="rowgroup" className="hidden border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500 sm:table-header-group">
              <tr role="row">
                {['Document', 'Why', 'Pakistan notes'].map((c) => (
                  <th key={c} role="columnheader" scope="col" className="px-4 py-3 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup" className="block divide-y divide-rule sm:table-row-group">
              {DOCS.map(([doc, why, note]) => (
                <tr key={doc} role="row" className="block px-4 py-4 sm:table-row sm:p-0">
                  <th role="rowheader" scope="row" className="block font-semibold text-ink-900 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                    {doc}
                  </th>
                  <td role="cell" className="mt-3 block text-ink-600 sm:mt-0 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-600 sm:hidden">Why</span>
                    {why}
                  </td>
                  <td role="cell" className="mt-3 block text-ink-600 sm:mt-0 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-600 sm:hidden">Pakistan notes</span>
                    {note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          Documents in Urdu need a translation, and missing papers not handed in promptly lead to refusal.
          Our suggestion: make the form, invitation, bookings and bank statements tell one story; Article
          32 lets the embassy refuse where it doubts a document.
        </p>
      </Section>

      {/* ===================== INVITATION ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Your host in Denmark"
          title="What does the invitation from a Danish host involve?"
          subtitle={
            <>
              The forms are the Danish Immigration Service’s, on its{' '}
              <Out href={SRC.disInvite}>invitation page</Out> (updated 4 June 2026).
            </>
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FORMS.map(([t, d]) => (
            <div key={t} className="card p-7">
              <h3 className="font-serif text-xl text-ink-900">{t}</h3>
              <p className="mt-2 text-ink-600 text-pretty">{d}</p>
            </div>
          ))}
        </div>
        <Prose>
          <p>
            An invitation is recommended, not required; without one, the Immigration Service must contact
            your host and the case takes longer.
          </p>
          <p>
            For <Out href={SRC.disPrivate}>private and tourist visits</Out>, the Service says citizens of its
            groups 2 to 5, Pakistan included, normally need a host in Denmark. The host must confirm the
            visit, have a permanent home in Denmark, and normally be a citizen or resident.
          </p>
          <p>
            For a <Out href={SRC.disBusiness}>business visit</Out>, the Danish company must be registered in
            the CVR business register and already trade with yours. For Pakistani citizens, the Service says
            business visas may be granted in specific justified cases.
          </p>
        </Prose>
        <div className="mx-auto max-w-3xl">
          <Callout title="The Red Carpet Programme: listed, not confirmed">
            <p>
              On {CHECKED} the embassy still lists a <Out href={SRC.redCarpet}>Red Carpet Programme</Out>{' '}
              for companies that do business with a Danish company. Its terms did not open and the page does
              not say whether it is taking companies, so ask the embassy first.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== STATISTICS + GROUPS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Official statistics and published rules"
          title="How often does Denmark refuse visas in Pakistan?"
          subtitle="Outcomes, not reasons: we do not guess at why."
        />
        <Prose>
          <p>
            The European Commission’s <Out href={SRC.stats}>visa statistics</Out> show that in 2025
            Denmark’s consulate in Islamabad received 5,539 short-stay applications. It issued 1,173 visas
            and did not issue one in 4,325 cases: 78.7% of decisions. The rate was 78.6% in 2024, and 45.9%
            across all Schengen consulates in Pakistan in 2025.
          </p>
          <p>
            <Link href="/blog/schengen-visa-refusals-pakistan-2025" className={a}>
              Our 2025 Schengen refusals report
            </Link>{' '}
            explains the limits: “not issued” includes discontinued cases, and no reasons are recorded.
          </p>
          <h3>What the Danish rules say</h3>
          <p>
            The Danish Immigration Service says you can normally get a visa if you undoubtedly intend to go
            home on time. If there are doubts, it weighs which of five country groups you belong to.
          </p>
          <p>
            Pakistan is in Group 5. The Service describes it as countries whose citizens present a
            particularly high risk of illegal immigration, or cannot easily be returned. As a starting
            point, their citizens qualify only in extenuating circumstances, such as the death or terminal
            illness of a family member in Denmark.
          </p>
          <p>
            The embassy adds that visas for siblings, cousins, aunts, uncles and friends are not commonly
            granted, though there may be exceptions. The Service calls the groups a rough guide: every case
            is judged on its own facts, including earlier Schengen visas used correctly.
          </p>
        </Prose>
      </Section>

      {/* ===================== REFUSAL + APPEAL ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Refusals and appeals"
          title="Why can a visa be refused, and how do you appeal?"
          subtitle={
            <>
              The grounds are EU law; the appeal route is Danish, as on the Immigration Service’s{' '}
              <Out href={SRC.disRefusal}>refusal page</Out> (updated 8 June 2026).
            </>
          }
        />
        <Prose>
          <p>Under Article 32 of the Visa Code, a visa is refused if the applicant:</p>
          <ul>
            {GROUNDS.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>
            It is also refused where there are reasonable doubts about your documents, statements or
            intention to leave in time. Article 32 gives you the reasons on a standard EU form, and a right
            of appeal under Danish law.
          </p>
          <p>
            <strong>Refused by the embassy?</strong> Appeal to the Danish Immigration Service within 8 weeks
            of receiving the decision. Section 29 of the Visa Executive Order sets that limit, and the Service
            may accept a late appeal in special cases. The embassy’s <Out href={SRC.appeal}>appeal page</Out>{' '}
            says there is no fee; send it by the Service’s contact form or by post, with your case number and
            grounds.
          </p>
          <p>
            <strong>Refused by the Immigration Service?</strong> Appeal to the Immigration Appeals Board, also
            within 8 weeks. The embassy says some refusals go to an automatic appeal, where you need do
            nothing; your letter says which applies.
          </p>
          <p>
            <strong>Refused because something was missing?</strong> Ask the authority that refused you to
            reopen the case, with documents about the facts at the time. If your circumstances have changed,
            apply again. A civil case in the Danish courts is possible, at your own cost.
          </p>
        </Prose>
        <CompareTable
          caption="Where to take a refused Danish visit visa, as the Danish Immigration Service sets it out"
          columns={['Your situation', 'What to do', 'What the rules say']}
          rows={[
            {
              label: 'Refused by the embassy in Islamabad',
              cells: ['Appeal to the Danish Immigration Service', 'Within 8 weeks of receiving the decision; no fee'],
            },
            {
              label: 'Refused by the Danish Immigration Service',
              cells: ['Appeal to the Immigration Appeals Board', 'Within 8 weeks of receiving the decision'],
            },
            {
              label: 'Refused because information was missing',
              cells: ['Ask the authority that refused you to reopen the case', 'New documents must concern the facts at the time of the decision'],
            },
          ]}
        />
        <p className="mt-8 max-w-3xl text-ink-600 text-pretty">
          Our suggestion: answer the ground your refusal letter gives. No one can promise an appeal will
          succeed; see our{' '}
          <Link href="/no-guarantee-policy" className={a}>
            no-guarantee policy
          </Link>
          .
        </p>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Read it at the source"
          title="What do the official sources say?"
          subtitle={`As they stood on ${CHECKED}. Check them on the day you apply.`}
        />
        <Prose>
          <ul>
            <li>
              Embassy of Denmark in Pakistan: <Out href={SRC.embassy}>Visa</Out>,{' '}
              <Out href={SRC.checklists}>Document checklists</Out>, <Out href={SRC.faq}>FAQ</Out>,{' '}
              <Out href={SRC.appeal}>Appeal</Out>, <Out href={SRC.redCarpet}>Red Carpet Programme</Out>, and
              the <Out href={SRC.familyList}>family</Out> and <Out href={SRC.businessList}>business</Out>{' '}
              checklists (10 January 2024)
            </li>
            <li>
              Ministry of Foreign Affairs of Denmark: <Out href={SRC.whereToApply}>Where to apply</Out> and{' '}
              <Out href={SRC.applyVisa}>ApplyVisa</Out>
            </li>
            <li>
              Danish Immigration Service: <Out href={SRC.disPrivate}>Private and tourist visits</Out> and{' '}
              <Out href={SRC.disBusiness}>Business visits</Out> (updated 30 June 2026),{' '}
              <Out href={SRC.disInvite}>Invitation of a visa applicant</Out> (4 June 2026) and{' '}
              <Out href={SRC.disRefusal}>You have got a no to visa</Out> (8 June 2026)
            </li>
            <li>
              Retsinformation: <Out href={SRC.visaOrder}>Visa Executive Order, BEK nr 1327 af 17/11/2025</Out>,
              sections 28 and 29 (in Danish)
            </li>
            <li>
              EUR-Lex: <Out href={SRC.visaCode}>the Visa Code, Regulation (EC) No 810/2009</Out>, consolidated
              28 June 2024
            </li>
            <li>
              European Commission: <Out href={SRC.stats}>Statistics on short-stay visas</Out>, 2025 consulate file
            </li>
          </ul>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="What else do applicants from Pakistan ask?" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="22 November 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you apply"
        title="Have your Denmark visit file checked first"
        subtitle="Tell us who you are visiting and why. We will tell you honestly how Denmark’s rules apply to you. No one can guarantee a visa, and we won’t."
        page={PAGE}
        service={SERVICE.VISIT_VISA}
        targetCountry="Denmark"
        waMessage="Hi, I’d like to ask about a Denmark visit visa."
      />
    </>
  );
}
