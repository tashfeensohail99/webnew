import Link from 'next/link';

/**
 * Published 23 November 2026 on the firm's instruction. Written from these
 * official pages, all read on 23 November 2026:
 * - Immigration Rules: Appendix V: Visitor (V 4.1 to V 4.3, V 16.1), Appendix
 *   Visitor: Visa national list (VN 1.1), Appendix Finance (FIN 2.1) and Appendix
 *   Administrative Review (AR 1.1, AR 2.2), each "updated 29 October 2026".
 * - Nationality, Immigration and Asylum Act 2002, section 82(1), on legislation.gov.uk.
 * - UKVI, "Visit: caseworker guidance", version 18.0, published for Home Office
 *   staff on 8 October 2026: sections 6.1 to 6.3, 7.2, 7.3, 7.5, 8.1, 8.2 and 9.5.
 * - UKVI, "Visiting the UK: guide to supporting documents" (updated 8 October 2026),
 *   sections 3 and 13.
 * - GOV.UK pages on tribunal appeals, administrative review and reconsideration
 *   requests; the Upper Tribunal (IAC) page; the Pre-Action Protocol for Judicial
 *   Review (justice.gov.uk, paragraphs 4, 5 and 8).
 *
 * Statistics: Home Office, Immigration system statistics, year ending June 2026,
 * published 27 August 2026. The year-to-June-2026 column is table Vis_06 of the
 * visas summary tables (Pakistan: 148,810 applications, 85,750 granted, 65,175
 * refused, 57%; all nationalities 80%). The year-to-June-2025 column is our own sum
 * of the detailed datasets: Vis_D02 (outcomes) and Vis_D01 (applications),
 * nationality "Pakistan", visa type group "Visitor", 2024 Q3 to 2025 Q2, with the
 * Home Office's grant-rate method (grants / (grants + refusals)). The same sums for
 * 2025 Q3 to 2026 Q2 reproduce Vis_06 exactly. Data from 2026 Q1 are provisional.
 * The next release was due on 26 November 2026; keep these figures dated to the
 * year to June 2026 rather than rewriting them.
 *
 * Our own suggestions: the right-hand column of the evidence table, and the advice
 * to read the refusal letter first and to keep the sponsor's account consistent.
 */
const a = 'font-semibold';

const APP_V = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-v-visitor';
const VISA_NATIONALS = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-visitor-visa-national-list';
const FINANCE = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance';
const APP_AR = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-administrative-review';
const GUIDANCE = 'https://www.gov.uk/government/publications/visit-guidance/visit-caseworker-guidance-accessible--2';
const DOCS = 'https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk';
const S82 = 'https://www.legislation.gov.uk/ukpga/2002/41/section/82';
const ADMIN_REVIEW = 'https://www.gov.uk/ask-for-a-visa-administrative-review';
const RECONSIDERATION = 'https://www.gov.uk/visa-and-immigration-reconsideration-requests';
const UTIAC = 'https://www.gov.uk/courts-tribunals/upper-tribunal-immigration-and-asylum-chamber';
const JR_PROTOCOL = 'https://www.justice.gov.uk/courts/procedure-rules/civil/protocol/prot_jrv';
const STATS = 'https://www.gov.uk/government/statistical-data-sets/immigration-system-statistics-data-tables';

/** Concern, what the guidance says, evidence that may answer it (our suggestion). */
const EVIDENCE: [string, string, string][] = [
  [
    'Weak ties to Pakistan',
    'Sections 7.2 and 7.5: few family or economic ties at home, with several family members in the UK.',
    'Proof of the spouse, children or other family who stay in Pakistan; property papers; pension, business or job records.',
  ],
  [
    'Not enough money for the trip',
    'Section 8.1: income or savings, minus commitments at home, must cover the likely costs.',
    'Bank statements that show where the money came from; pension or rent income; a short note of monthly commitments.',
  ],
  [
    'A recent large deposit',
    'Section 8.1: money held only briefly may be checked for its origin. Section 6.1: documents must match the form.',
    'The document behind the deposit, such as a sale deed or pension payment record. Do not borrow money just to show it.',
  ],
  [
    'Unclear support from the sponsor',
    'V 4.3 and section 8.2: the relationship, the sponsor’s means and their lawful status in the UK.',
    'A sponsor’s letter saying what they will pay and how; their bank statements and payslips; proof of status and relationship.',
  ],
  [
    'Applicant and sponsor tell different stories',
    'Section 7.5: discrepancies, especially on points the sponsor should know.',
    'The same dates, address and purpose on the form and in the sponsor’s letter. Both should read the form before it is sent.',
  ],
  [
    'No previous travel',
    'Section 7.3: first-time travellers are assessed on other evidence.',
    'Stronger evidence of ties and funds. Include old passports if there was any earlier travel.',
  ],
  [
    'Information could not be verified',
    'Section 7.5: information the Home Office could not verify despite trying.',
    'Images of originals, not copies; statements from a regulated bank; full translations with the translator’s details.',
  ],
];

/** Measure, year to June 2025, year to June 2026. Pakistani nationals, visitor visas. */
const FIGURES: [string, string, string][] = [
  ['Applications', '156,862', '148,810'],
  ['Granted', '92,221', '85,750'],
  ['Refused', '64,443', '65,175'],
  ['Grant rate, Pakistani nationals', '59%', '57%'],
  ['Grant rate, all nationalities', '80%', '80%'],
];

export default function UkVisitVisaRefusedPakistan() {
  return (
    <>
      <p>
        <strong>
          A UK visit visa refused on the ‘genuine visitor’ test can almost never be appealed, and
          administrative review does not cover visitor visas.
        </strong>{' '}
        As of 23 November 2026, the usual next step is a new application that answers each reason in the
        refusal letter. In the year to June 2026, the Home Office granted 57% of visitor visa decisions for
        Pakistani nationals, against 80% for all nationalities.
      </p>

      <h2>What does “genuine visitor” mean in the Rules?</h2>
      <p>
        Pakistan is on the{' '}
        <a href={VISA_NATIONALS} rel="noopener noreferrer" target="_blank" className={a}>
          visa national list
        </a>{' '}
        (paragraph VN 1.1), so a Pakistani parent needs a visa before travelling. The test is in{' '}
        <a href={APP_V} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix V: Visitor
        </a>
        . Paragraph V 4.2 says the applicant must satisfy the decision maker that they are a genuine
        visitor, which means they:
      </p>
      <ul>
        <li>will leave the UK at the end of the visit;</li>
        <li>will not live in the UK for extended periods through frequent or successive visits, or make it their main home;</li>
        <li>are coming for a purpose the Visitor route permits;</li>
        <li>will not do prohibited activities, such as working; and</li>
        <li>have enough money for all reasonable costs, including the return journey, without working or claiming public funds.</li>
      </ul>
      <p>
        Under V 16.1, an application that fails any requirement is refused. The Rules we read were last
        updated on 29 October 2026.
      </p>

      <h2>What do visa officers weigh?</h2>
      <p>
        UKVI’s{' '}
        <a href={GUIDANCE} rel="noopener noreferrer" target="_blank" className={a}>
          Visit: caseworker guidance
        </a>{' '}
        (version 18.0, 8 October 2026) tells officers how to apply the test. The burden of proof is on the
        applicant, and the standard is the balance of probabilities: more likely than not. Officers must
        assess the applicant’s credibility and intentions from everything in the application.
      </p>
      <p>Section 7.2 lists the factors that help decide whether someone is a genuine visitor:</p>
      <ul>
        <li>previous immigration history, including visits to the UK and other countries;</li>
        <li>financial circumstances, and family, social and economic background;</li>
        <li>personal and economic ties to the country where they live;</li>
        <li>how much time they have recently spent in the UK; and</li>
        <li>whether the reasons for the visit are credible and fit their background.</li>
      </ul>
      <p>
        Past compliance with UK visas, or travel to places such as the USA, Canada or the Schengen area,
        may point to a genuine visitor. But travel history should not be the only consideration. For a
        first-time traveller, officers must rely on other evidence.
      </p>
      <p>
        Section 8.1 says there is no set level of funds. Officers weigh income or savings against
        commitments at home, such as rent and dependants. Money held only briefly may be checked for its
        origin. Section 6.1 adds that the documents should match the income and support declared on the
        form.
      </p>

      <h2>Can you appeal or ask for a review?</h2>
      <p>
        Almost never.{' '}
        <a href={S82} rel="noopener noreferrer" target="_blank" className={a}>
          Section 82
        </a>{' '}
        of the Nationality, Immigration and Asylum Act 2002 allows appeals only in protection and human
        rights cases. The caseworker guidance has a separate letter for visit refusals that carry a
        human-rights appeal; all others use a “no right of appeal” template.
      </p>
      <p>
        <a href={APP_AR} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Administrative Review
        </a>{' '}
        lists the routes whose decisions can be reviewed (AR 1.1), and Appendix V: Visitor is not among
        them. GOV.UK says your{' '}
        <a href={ADMIN_REVIEW} rel="noopener noreferrer" target="_blank" className={a}>
          decision letter tells you
        </a>{' '}
        whether review is open. A{' '}
        <a href={RECONSIDERATION} rel="noopener noreferrer" target="_blank" className={a}>
          reconsideration request
        </a>{' '}
        is only for people in the UK who applied there, so it does not help a parent refused in Pakistan.
      </p>
      <p>
        That leaves judicial review, where a judge reviews the lawfulness of a public body’s decision. The{' '}
        <a href={JR_PROTOCOL} rel="noopener noreferrer" target="_blank" className={a}>
          pre-action protocol
        </a>{' '}
        says it should be used only where no adequate alternative remedy exists, and strongly advises early
        legal advice. Most immigration judicial reviews go to the{' '}
        <a href={UTIAC} rel="noopener noreferrer" target="_blank" className={a}>
          Upper Tribunal (Immigration and Asylum Chamber)
        </a>
        .
      </p>

      <h2>Can a son or daughter in the UK pay for the visit?</h2>
      <p>
        Yes. Paragraph V 4.3 lets a third party pay for travel, maintenance and accommodation, but only if
        that person:
      </p>
      <ul>
        <li>has a genuine personal or professional relationship with the applicant;</li>
        <li>is not, and will not be, in breach of immigration laws at the decision or on arrival; and</li>
        <li>can and will support the applicant for the whole visit.</li>
      </ul>
      <p>
        Section 8.2 of the guidance says a sponsor must have enough to support themselves and their own
        dependants, as well as the visitor. Officers may look at the sponsor’s history of sponsoring
        visitors. Support not declared on the form is not counted if the applicant cannot show the money
        is really theirs.
      </p>
      <p>
        Do not offer a written promise to leave on time: officers must not ask for or accept a written
        guarantee or undertaking about the length of stay. Section 9.5 lets a visitor help look after a grandchild if the care is temporary
        and informal, not work as a child-minder or carer.
      </p>

      <h2>How do you answer each refusal reason?</h2>
      <p>
        Start with the refusal letter: as our{' '}
        <Link href="/uk" className={a}>
          UK visas guide
        </Link>{' '}
        says, the ground it names decides whether reapplying is worth it. The guidance says reasons must be
        factual, clear and relevant, and supported by evidence. The table pairs concerns named in the guidance with evidence that may
        answer them; the right-hand column is our suggestion, not Home Office wording.
      </p>
      <div role="region" aria-label="Common UK visit visa refusal concerns in the Home Office guidance, and evidence that may answer them (our suggestion)" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Common UK visit visa refusal concerns in the Home Office guidance, and evidence that may answer them (our suggestion)</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Concern</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">What the guidance says</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Evidence that may answer it (our suggestion)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {EVIDENCE.map(([concern, rule, evidence]) => (
              <tr key={concern}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{concern}</th>
                <td className="hidden px-4 py-3 md:table-cell">{rule}</td>
                <td className="px-3 py-3 sm:px-4">{evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        GOV.UK’s{' '}
        <a href={DOCS} rel="noopener noreferrer" target="_blank" className={a}>
          guide to supporting documents
        </a>{' '}
        lists hotel and flight bookings (unless you are transiting), personal photographs, travel insurance
        and a sponsor’s utility bills under “Documents you should not use as evidence”. Under{' '}
        <a href={FINANCE} rel="noopener noreferrer" target="_blank" className={a}>
          FIN 2.1 of Appendix Finance
        </a>
        , funds do not count if the Home Office cannot check them satisfactorily with the bank. The same
        applies if the bank is unregulated or keeps no electronic records.
      </p>

      <h2>How many Pakistani visitors are refused?</h2>
      <p>
        The Home Office’s{' '}
        <a href={STATS} rel="noopener noreferrer" target="_blank" className={a}>
          immigration system statistics
        </a>
        , published on 27 August 2026, run to June 2026. They count by nationality, including Pakistanis
        who applied elsewhere, and figures from January 2026 are provisional. They do not show why
        applications were refused.
      </p>
      <div role="region" aria-label="UK visitor visa applications and decisions for Pakistani nationals, years to June 2025 and June 2026, Home Office statistics" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">UK visitor visa applications and decisions for Pakistani nationals, years to June 2025 and June 2026, Home Office statistics</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Visitor visas</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Year to June 2025</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Year to June 2026</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {FIGURES.map(([measure, y2025, y2026]) => (
              <tr key={measure}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{measure}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{y2025}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{y2026}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Pakistan was the fifth-largest nationality for UK visitor visa applications in the year to June
        2026. The grant rate is grants divided by grants plus refusals. The 2025 column is our own sum of
        the Home Office’s detailed data, by the same method.
      </p>
      <p>
        Refusal rates for Europe are in{' '}
        <Link href="/blog/schengen-visa-refusals-pakistan-2025" className={a}>
          Schengen visa refusals in Pakistan
        </Link>
        . Canada’s options after a refusal are different; see{' '}
        <Link href="/canada-visa-refused" className={a}>
          Canada visa refused
        </Link>
        . The other UK routes, and the myths sold around them, are in our{' '}
        <Link href="/uk" className={a}>
          UK visas guide
        </Link>
        .
      </p>
    </>
  );
}
