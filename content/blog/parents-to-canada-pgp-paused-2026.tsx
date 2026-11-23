import Link from 'next/link';

/**
 * Published 23 November 2026 on the owner's approval of that day.
 *
 * Figures set in law, read on Justice Laws (Act and Regulations current to
 * 2026-10-29) on 23 November 2026: the five-year super visa stay, IRPA s. 29(3);
 * insurers outside Canada approved by the Minister, IRPA s. 15.1; the sponsor
 * aged 18 and living in Canada, IRPR s. 130(1); the three tax years and the
 * notices of assessment, IRPR ss. 133(1)(j)(i)(B) and 134(1.1); the 20-year
 * undertaking, IRPR s. 132(1)(b)(iv); the six-month visitor stay and the ban on
 * work, IRPR s. 183; no biometrics over 79, IRPR s. 12.2(1)(b); medical exams,
 * IRPR s. 30(1)(a). The super visa host rules and the two-tax-year income test
 * are in IRCC's Ministerial Instructions on the super visa (2026), in effect
 * 31 March 2026.
 *
 * Left out on purpose: income amounts (IRPR's minimum necessary income and the
 * super visa minimum, both from LICO tables IRCC publishes), the share of the
 * minimum a super visa host must reach alone, fees, processing times, the
 * insurance amount and period, the super visa's maximum validity (on IRCC's pages
 * only, not in IRPA, IRPR or the 2026 Instructions), the 2025 invitation counts
 * and every levels-plan target.
 *
 * Everything else is from IRCC's pages as they stood on 23 November 2026, read
 * through a page-fetch tool because canada.ca timed out on scripted downloads.
 *
 * Our own suggestion, not IRCC's: treating any offer to "register" parents for a
 * future intake with suspicion, preparing through tax returns, checking the date
 * of old biometrics first, and sending a police certificate only if asked.
 */
const a = 'font-semibold';

const NOTICE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html';
const PGP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html';
const PGP_SELECTED =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents/selected.html';
const PGP_ELIGIBLE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents/eligibility.html';
const NOTICES = 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices.html';
const LEVELS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/immigration-system/levels/supplementary-immigration-levels-2027-2029.html';
const SV = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html';
const SV_WHO =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/eligibility.html';
const SV_STAY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/length-stay-canada.html';
const SV_DOCS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html';
const SV_APPLY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/apply.html';
const SV_INCOME =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/changes-parents-grandparents-super-visa-income-requirement-calculated.html';
const SV_MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/other-goals/super-visa-2026.html';
const VISITOR = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html';
const PR_STATUS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/understand-pr-status.html';
const BIO_WHERE = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/where-to-give.html';
const MEDICAL_LIST =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents/country-requirements.html';
const IRPA_29 = 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-29.html';
const IRPA_15_1 = 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-15.1.html';
const IRPR_12_2 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-12.2.html';
const IRPR_30 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-30.html';
const IRPR_130 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-130.html';
const IRPR_132 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-132.html';
const IRPR_133 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-133.html';
const IRPR_134 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-134.html';
const IRPR_183 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-183.html';

const COMPARE: [string, string, string, string][] = [
  ['Is it open now?', 'No. Paused since 15 July 2026, until further notice', 'Yes. Apply online when you are ready', 'Yes'],
  ['Status in Canada', 'Permanent resident', 'Visitor', 'Visitor'],
  ['Can they work?', 'Yes, anywhere in Canada', 'No, unless separately authorised', 'No, unless separately authorised'],
  ['How long can they stay?', 'Permanently, as residents', 'Up to five years per entry, and they can apply to extend from inside Canada', 'Six months, unless the officer sets another period'],
  ['Who in Canada must qualify?', 'A child or grandchild sponsor, 18 or over, living in Canada, who passes a three-year income test', 'A child or grandchild host, 18 or over, living in Canada, who meets an income minimum', 'Nobody. Your parents show they have enough money for the stay'],
  ['Medical exam', 'Yes', 'Yes, with a panel physician', 'Only in some cases, such as a stay over six months after living in Pakistan'],
];

export default function ParentsToCanadaPgpPaused2026() {
  return (
    <>
      <p>
        <strong>
          You cannot start a parent sponsorship today, and as of 23 November 2026 IRCC has announced no
          intake for 2027.
        </strong>{' '}
        On 15 July 2026, IRCC paused the Parents and Grandparents Program, with no new interest forms or
        invitations “until further notice”. Meanwhile, your parents in Pakistan can apply for a super
        visa, which allows stays of up to five years at a time.
      </p>

      <h2>What exactly did IRCC pause?</h2>
      <p>
        IRCC’s{' '}
        <a href={NOTICE} rel="noopener noreferrer" target="_blank" className={a}>
          notice of 15 July 2026
        </a>{' '}
        says it will not accept new interest to sponsor forms or invite potential sponsors to apply. It
        will keep processing the applications it already has. Its{' '}
        <a href={PGP} rel="noopener noreferrer" target="_blank" className={a}>
          program page
        </a>{' '}
        still showed the program as paused when we read it on 23 November 2026.
      </p>
      <p>
        The last round began on 28 July 2025, when IRCC{' '}
        <a href={PGP_SELECTED} rel="noopener noreferrer" target="_blank" className={a}>
          invited people who had submitted an interest form in 2020
        </a>
        . The last day to apply in that round was 9 October 2025. While the pause lasts, nobody can
        submit a new interest form, for you or for anyone else.
      </p>

      <h2>Will IRCC reopen it in 2027?</h2>
      <p>
        Nothing has been announced. On 23 November 2026, IRCC’s{' '}
        <a href={NOTICES} rel="noopener noreferrer" target="_blank" className={a}>
          notices page
        </a>{' '}
        had nothing on the program newer than the 15 July notice. The{' '}
        <a href={LEVELS} rel="noopener noreferrer" target="_blank" className={a}>
          supplementary information for the 2027–2029 levels plan
        </a>
        , posted on 5 November 2026, says nothing about a new intake either.
      </p>
      <p>
        A place in the levels plan is not the same as an open intake. In 2026, IRCC is approving parents
        from applications already submitted, while accepting no new forms. So nobody can tell you today
        whether you will be able to sponsor in 2027.
      </p>
      <p>
        If someone offers to “register” your parents for a future intake, remember that IRCC is not
        accepting interest forms from anyone. A reopening would come as an announcement from IRCC
        itself.
      </p>

      <h2>What can your parents do while sponsorship is paused?</h2>
      <p>
        Two routes stay open: the super visa and an ordinary visitor visa. Both make your parents
        visitors, not residents. The table sets them against sponsorship, as the rules stood on 23
        November 2026.
      </p>
      <div
        role="region"
        aria-label="Sponsorship (PGP) vs super visa vs regular visitor visa, as of 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Sponsorship (PGP) vs super visa vs regular visitor visa, as of 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Question</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Sponsorship (PGP)</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Super visa</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Visitor visa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {COMPARE.map(([q, pgp, sv, visitor]) => (
              <tr key={q}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{q}</th>
                <td className="px-3 py-3 sm:px-4">{pgp}</td>
                <td className="px-3 py-3 sm:px-4">{sv}</td>
                <td className="px-3 py-3 sm:px-4">{visitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Where each row comes from:</p>
      <ul>
        <li>
          Open now: IRCC’s 15 July notice and its{' '}
          <a href={SV_APPLY} rel="noopener noreferrer" target="_blank" className={a}>
            super visa application page
          </a>
          .
        </li>
        <li>
          Status and work: IRCC’s{' '}
          <a href={PR_STATUS} rel="noopener noreferrer" target="_blank" className={a}>
            permanent resident status page
          </a>{' '}
          and{' '}
          <a href={IRPR_183} rel="noopener noreferrer" target="_blank" className={a}>
            section 183 of the regulations
          </a>
          , which also sets the six-month visitor stay.
        </li>
        <li>
          Super visa stay:{' '}
          <a href={IRPA_29} rel="noopener noreferrer" target="_blank" className={a}>
            section 29(3) of the Immigration and Refugee Protection Act
          </a>{' '}
          and IRCC’s{' '}
          <a href={SV_STAY} rel="noopener noreferrer" target="_blank" className={a}>
            length-of-stay page
          </a>
          .
        </li>
        <li>
          Who must qualify: sections{' '}
          <a href={IRPR_130} rel="noopener noreferrer" target="_blank" className={a}>
            130
          </a>{' '}
          and{' '}
          <a href={IRPR_133} rel="noopener noreferrer" target="_blank" className={a}>
            133
          </a>{' '}
          of the regulations, the super visa’s 2026 Ministerial Instructions, and IRCC’s{' '}
          <a href={VISITOR} rel="noopener noreferrer" target="_blank" className={a}>
            visitor visa eligibility page
          </a>
          .
        </li>
        <li>
          Medical exam:{' '}
          <a href={IRPR_30} rel="noopener noreferrer" target="_blank" className={a}>
            section 30 of the regulations
          </a>{' '}
          and IRCC’s{' '}
          <a href={MEDICAL_LIST} rel="noopener noreferrer" target="_blank" className={a}>
            country list
          </a>
          , which includes Pakistan.
        </li>
      </ul>

      <h2>How does the super visa work now?</h2>
      <p>
        The host must be your parents’ child or grandchild, aged at least 18 and living in Canada. They
        must be a Canadian citizen, a permanent resident or a registered Indian. These conditions are in
        IRCC’s{' '}
        <a href={SV_MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions on the super visa
        </a>
        , in force since 31 March 2026.
      </p>
      <p>
        The host signs a letter of invitation that promises financial support and lists everyone counted
        for the income test. Those Instructions also eased that test: the host can meet the minimum in
        either of the two tax years before applying. A host who falls short can{' '}
        <a href={SV_INCOME} rel="noopener noreferrer" target="_blank" className={a}>
          add the visiting parents’ income
        </a>
        , once the host alone reaches a minimum share that IRCC sets.
      </p>
      <p>
        Your parents also need private health insurance and a medical exam, and must satisfy the officer
        that they are genuine visitors. Under{' '}
        <a href={IRPA_15_1} rel="noopener noreferrer" target="_blank" className={a}>
          section 15.1 of the Act
        </a>
        , the insurer can be Canadian or a company outside Canada approved by the Minister. Our{' '}
        <Link href="/visitor-visa/super-visa" className={a}>
          Super Visa guide
        </Link>{' '}
        covers the insurance in more detail.
      </p>
      <p>
        IRCC’s{' '}
        <a href={SV_DOCS} rel="noopener noreferrer" target="_blank" className={a}>
          documents page
        </a>{' '}
        says a foreign insurer must be authorised by Canada’s Office of the Superintendent of Financial
        Institutions (OSFI). It must also appear on OSFI’s list and issue the policy through its insurance
        business in Canada. A quote is not accepted: the policy must be paid in full, or in instalments
        with a deposit.
      </p>
      <p>
        A super visa allows up to five years per entry, a period set in{' '}
        <a href={IRPA_29} rel="noopener noreferrer" target="_blank" className={a}>
          section 29(3) of the Act
        </a>
        . It is a multiple-entry visa that can be valid for several years, and{' '}
        <a href={SV} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s super visa page
        </a>{' '}
        gives the current maximum. Meeting every condition is still not a promise: the Instructions say
        an officer “should consider” issuing one.
      </p>

      <h2>What is different when your parents apply from Pakistan?</h2>
      <p>
        Your parents apply online, from outside Canada. IRCC then sends a biometric instruction letter,
        and they give fingerprints and a photo at a visa application centre. IRCC{' '}
        <a href={BIO_WHERE} rel="noopener noreferrer" target="_blank" className={a}>
          lists centres
        </a>{' '}
        in Islamabad, Lahore and Karachi, and our{' '}
        <Link href="/canada-immigration-from-pakistan/biometrics" className={a}>
          biometrics guide
        </Link>{' '}
        has the steps.
      </p>
      <p>
        A parent over 79 on the day of applying does not give biometrics, under{' '}
        <a href={IRPR_12_2} rel="noopener noreferrer" target="_blank" className={a}>
          section 12.2 of the regulations
        </a>
        . If a parent gave biometrics for an earlier visa, check the date first. IRCC says a super visa
        cannot be valid for longer than those biometrics.
      </p>
      <p>
        The medical exam must be done by an IRCC-approved panel physician. Pakistan is on IRCC’s country
        list, so someone who has lived there can need one even for an ordinary visit of over six months.
        Our guide to{' '}
        <Link href="/canada-immigration-from-pakistan/medical-exam" className={a}>
          the medical exam in Pakistan
        </Link>{' '}
        explains how to find a panel physician.
      </p>
      <p>
        IRCC’s super visa documents page did not list a police certificate on 23 November 2026. Follow
        the checklist IRCC gives you, and send one only if you are asked. IRCC’s{' '}
        <a href={SV_WHO} rel="noopener noreferrer" target="_blank" className={a}>
          eligibility page
        </a>{' '}
        says officers weigh your parents’ ties to their home country, the purpose of the visit, and their
        family and finances.
      </p>

      <h2>How can you prepare in case sponsorship reopens?</h2>
      <p>
        When the program runs, the sponsor must be a Canadian citizen or permanent resident, aged at
        least 18, who lives in Canada. That is{' '}
        <a href={IRPR_130} rel="noopener noreferrer" target="_blank" className={a}>
          section 130 of the regulations
        </a>
        . IRCC’s{' '}
        <a href={PGP_ELIGIBLE} rel="noopener noreferrer" target="_blank" className={a}>
          eligibility page
        </a>{' '}
        also lists registered Indians.
      </p>
      <p>
        Under{' '}
        <a href={IRPR_133} rel="noopener noreferrer" target="_blank" className={a}>
          section 133
        </a>
        , the sponsor needs income at or above a set minimum for each of the three tax years before
        applying. For parents and grandparents, that minimum is higher than for other relatives.{' '}
        <a href={IRPR_134} rel="noopener noreferrer" target="_blank" className={a}>
          Section 134
        </a>{' '}
        takes the income from your Canadian notices of assessment, and adds a co-signer’s income if there
        is one.
      </p>
      <p>
        So the preparation is in your tax returns: file every year, on time. If you live in Quebec, IRCC
        says you must also meet Quebec’s own requirements.
      </p>
      <p>
        Weigh the commitment too. Under{' '}
        <a href={IRPR_132} rel="noopener noreferrer" target="_blank" className={a}>
          section 132
        </a>
        , the sponsor’s undertaking lasts 20 years from the day the parent becomes a permanent resident.
        Our{' '}
        <Link href="/family-sponsorship/parents-grandparents" className={a}>
          parents and grandparents guide
        </Link>{' '}
        explains the undertaking and the income test in full.
      </p>
      <p>
        For now, the route your family can actually use is a visit. Our{' '}
        <Link href="/visitor-visa/super-visa" className={a}>
          Super Visa guide
        </Link>{' '}
        covers the host’s side, the medical and the order of the steps.
      </p>
    </>
  );
}
