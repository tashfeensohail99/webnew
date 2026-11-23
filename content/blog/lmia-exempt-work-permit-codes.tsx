import Link from 'next/link';

/**
 * Published 23 November 2026 on the owner's approval of the same day. Codes,
 * their regulation paragraphs and the
 * 15 December 2022 code change are from IRCC's LMIA exemption codes list (page
 * details 2026-09-23) and the program delivery instructions for each code named,
 * as they stood on 23 November 2026. canada.ca was read through a page-fetch
 * tool, not saved.
 *
 * Regulation text from Justice Laws, IRPR current to 2026-10-29: ss. 200(1)(c)(ii.1),
 * 200(3)(f.1), 204, 205, 209.2(1)(a)(ix) and (x), and 303.1. The only figure
 * printed, the C$230 employer compliance fee, is set in IRPR s. 303.1(1).
 * (S. 303.2 is the separate open work permit holder fee; the post does not
 * print it.) Pakistan's WTO membership is from the WTO's members page.
 *
 * Our own suggestion, not IRCC's: the "From Pakistan?" column, which is our
 * reading of each code's instructions, and the advice to treat a paid
 * "LMIA-exempt job offer" as a warning sign. Conditions that are only on IRCC's
 * pages (qualifying periods, months left on a permit, programme lengths) are
 * left out on purpose. IRCC renumbers codes: re-read the codes list first when
 * re-checking this post.
 */
const a = 'font-semibold';

const CODES_LIST =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes.html';
const ICT =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/intra-company-transferees.html';
const C11 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html';
const C10 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/canadian-interests-significant-benefit-general-guidelines-r205-c10.html';
const C41 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/public-policy-competitiveness-economy/spouses-common-law-authorized-work-high-skilled-occupations.html';
const C42 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/public-policy-competitiveness-economy/c42.html';
const PGWP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/study-permits/post-graduation-work-permit-program.html';
const BOWP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/provincial-nominees-permanent-resident-applicants/bridging-open-work-permits.html';
const CUSMA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/cusma.html';
const CETA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/canada-eu.html';
const CPTPP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/trans-pacific.html';
const GATS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/general-agreement-trade-services.html';
const WTO = 'https://www.wto.org/english/thewto_e/whatis_e/tif_e/org6_e.htm';
const HOW_TO_HIRE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/hire-temporary-foreign/international-mobility-program/how-to-hire.html';
const FEE_EXEMPTIONS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/hire-temporary-foreign/find-need-labour-market-impact-assessment/employer-compliance-exemptions.html';
const SCAMS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html';
const IRPR_200 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-200.html';
const IRPR_204 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-204.html';
const IRPR_205 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-205.html';
const IRPR_209_2 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.2.html';
const IRPR_303_1 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-303.1.html';

/** Code, what it covers (with its IRPR paragraph), who it suits, and our reading for Pakistani citizens. */
const CODES: [string, string, string, string][] = [
  ['C10', 'Significant benefit, general (205(a))', 'Work with a clear, documented benefit to Canada', 'Depends on the facts'],
  ['C11', 'Business owners seeking only temporary residence (205(a))', 'Someone who will set up or run their own Canadian business', 'Yes, if you qualify; no citizenship rule'],
  ['C61, C62, C63 (formerly C12)', 'Intra-company transferees (205(a))', 'Existing staff of a company with a related Canadian business', 'Depends on the facts'],
  ['C20', 'Reciprocal employment (205(b))', 'Work that creates or keeps similar jobs for Canadians abroad', 'Depends on the facts'],
  ['C41', 'Spouses of workers in high-skilled jobs (205(c)(ii))', 'The spouse or partner of a qualifying worker', 'Depends on the worker’s job'],
  ['C42', 'Spouses of study permit holders (205(c)(ii))', 'The spouse or partner of a student in an eligible program', 'Depends on the student’s program'],
  ['C43', 'Post-graduation work permit (205(c)(ii))', 'Graduates of an eligible Canadian institution', 'Only after studying in Canada'],
  ['A75', 'Bridging open work permit (205(a))', 'Certain permanent residence applicants already in Canada', 'No, not from outside Canada'],
  ['T33', 'GATS professionals (204(a))', 'Listed professions on short contracts', 'Possibly; Pakistan is a WTO member'],
  ['T34–T38', 'CUSMA (204(a))', 'US and Mexican citizens', 'No, unless also a US or Mexican citizen'],
  ['T41–T48', 'CETA (204(a))', 'Citizens of EU countries', 'No, unless also an EU citizen'],
  ['T50–T55', 'CPTPP (204(a))', 'Citizens of the other signatory countries', 'No, unless also a citizen of one'],
];

export default function LmiaExemptWorkPermitCodes() {
  return (
    <>
      <p>
        <strong>
          An LMIA exemption code is IRCC’s label for one kind of work permit that needs no Labour
          Market Impact Assessment.
        </strong>{' '}
        As of 23 November 2026, C11 is for business owners, and the old C12 has become C61, C62 and
        C63 for intra-company transferees. Those codes have no citizenship rule, but trade-agreement
        codes such as CUSMA and CETA are closed to Pakistanis without a partner country’s
        citizenship.
      </p>

      <h2>What is an LMIA exemption code?</h2>
      <p>
        Normally a Canadian employer needs an{' '}
        <Link href="/work-permits/lmia" className={a}>
          LMIA
        </Link>{' '}
        before hiring a foreign worker. The International Mobility Program holds the exceptions, and
        each has a code on IRCC’s{' '}
        <a href={CODES_LIST} rel="noopener noreferrer" target="_blank" className={a}>
          LMIA exemption codes list
        </a>
        . Our guide to{' '}
        <Link href="/work-permits/lmia-exempt" className={a}>
          LMIA-exempt work permits
        </Link>{' '}
        explains the families they fall into.
      </p>
      <p>
        IRCC calls them administrative codes. The employer chooses one in IRCC’s Employer Portal, and
        the officer decides whether your facts fit it. A code is not a permit, a visa, or something
        anyone can sell you.
      </p>
      <p>
        Each code rests on the Immigration and Refugee Protection Regulations.{' '}
        <a href={IRPR_204} rel="noopener noreferrer" target="_blank" className={a}>
          Section 204
        </a>{' '}
        covers international and provincial agreements and youth mobility.{' '}
        <a href={IRPR_205} rel="noopener noreferrer" target="_blank" className={a}>
          Section 205
        </a>{' '}
        covers work in Canada’s interests, in four paragraphs:
      </p>
      <ul>
        <li><strong>205(a)</strong>: significant benefit to Canada.</li>
        <li><strong>205(b)</strong>: reciprocal employment for Canadians abroad.</li>
        <li><strong>205(c)</strong>: work the Minister designates, such as research or public-policy work.</li>
        <li><strong>205(d)</strong>: religious or charitable work.</li>
      </ul>
      <p>
        IRCC changed several codes and added new ones on 15 December 2022. Older articles may still
        cite codes that no longer exist.
      </p>

      <h2>What do the main codes mean?</h2>
      <p>
        This table lists the codes people search for most, as IRCC’s list stood on 23 November 2026.
        The last column is our reading of IRCC’s instructions, not IRCC’s own wording.
      </p>
      <div
        role="region"
        aria-label="Common LMIA exemption codes, what they cover and whether a Pakistani citizen can use them, as of 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Common LMIA exemption codes, what they cover and whether a Pakistani citizen can use them,
            as of 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Code</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What it covers (IRPR)</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Who it suits</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">From Pakistan?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CODES.map(([code, covers, suits, pakistan]) => (
              <tr key={code}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{code}</th>
                <td className="px-3 py-3 sm:px-4">{covers}</td>
                <td className="hidden px-4 py-3 sm:table-cell">{suits}</td>
                <td className="px-3 py-3 sm:px-4">{pakistan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        IRCC’s full list has many more codes, including A-codes such as A70, A75 and A76. A75 does
        exist: it is the code for bridging open work permits, among other uses.
      </p>

      <h2>What happened to C12?</h2>
      <p>
        C12 was the intra-company transferee code until 14 December 2022. The codes list now shows
        three codes in its place, all under section 205(a):
      </p>
      <ul>
        <li><strong>C61</strong>: establishing a branch, subsidiary or affiliate in Canada.</li>
        <li><strong>C62</strong>: executives and managers.</li>
        <li><strong>C63</strong>: specialised knowledge workers.</li>
      </ul>
      <p>
        <a href={ICT} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s transferee instructions
        </a>{' '}
        set no citizenship rule. You must already work for the foreign company, and the two companies
        must be related.
      </p>
      <p>
        One rule matters for business owners. IRCC says controlling owners who want to start a new
        business in Canada are not eligible, unless their company is a multinational. That
        means it earns revenue from operations in a country other than its home country.
      </p>
      <p>
        So the owner of a company that trades only in Pakistan cannot use C61 to open a Canadian
        branch. Our{' '}
        <Link href="/work-permits/intra-company-transfer" className={a}>
          intra-company transfer guide
        </Link>{' '}
        covers the rest.
      </p>

      <h2>What are C11 and C10?</h2>
      <p>
        <a href={C11} rel="noopener noreferrer" target="_blank" className={a}>
          C11
        </a>{' '}
        is for business owners seeking only temporary residence, under section 205(a). It covers
        people who will set up or run their own business in Canada. Its requirements, from ownership
        to funds, are in our{' '}
        <Link href="/work-permit-canada" className={a}>
          C11 work permit guide
        </Link>
        .
      </p>
      <p>
        IRCC says owners who intend to settle should be assessed under other codes instead. Those are
        C60, for provincial business candidates and Quebec self-employed applicants, and A77, for
        start-up visa applicants.
      </p>
      <p>
        <a href={C10} rel="noopener noreferrer" target="_blank" className={a}>
          C10
        </a>{' '}
        is the general significant-benefit code, also under 205(a). IRCC describes it as flexibility
        for unique or exceptional situations, and tells officers not to use it for convenience. The
        benefit to Canada has to be clear and documented.
      </p>

      <h2>Which codes depend on your citizenship?</h2>
      <p>
        Codes under Canada’s trade agreements, mostly T- and F-codes under section 204(a), depend on
        citizenship. IRCC’s pages make these limits clear:
      </p>
      <ul>
        <li>
          <a href={CUSMA} rel="noopener noreferrer" target="_blank" className={a}>
            CUSMA
          </a>{' '}
          (T34 to T38) is for citizens of the United States and Mexico. Permanent residents of those
          countries are excluded.
        </li>
        <li>
          <a href={CETA} rel="noopener noreferrer" target="_blank" className={a}>
            CETA
          </a>{' '}
          (T41 to T48) is for citizens of European Union countries.
        </li>
        <li>
          <a href={CPTPP} rel="noopener noreferrer" target="_blank" className={a}>
            CPTPP
          </a>{' '}
          (T50 to T55) is for citizens of its signatory countries other than Canada. Pakistan is not
          on IRCC’s list.
        </li>
      </ul>
      <p>
        One trade code is open to Pakistani citizens.{' '}
        <a href={GATS} rel="noopener noreferrer" target="_blank" className={a}>
          GATS professionals
        </a>{' '}
        (T33) is for citizens of World Trade Organization members, and Pakistan has been a{' '}
        <a href={WTO} rel="noopener noreferrer" target="_blank" className={a}>
          WTO member
        </a>{' '}
        since 1 January 1995.
      </p>
      <p>
        It is narrow, though. It covers only listed professions, such as engineers and architects, on
        short contracts that cannot be extended.
      </p>
      <p>
        Two more codes are out of reach from Pakistan. IRCC’s{' '}
        <a href={BOWP} rel="noopener noreferrer" target="_blank" className={a}>
          A75 instructions
        </a>{' '}
        are for people already in Canada, and exclude applications made at a visa office. C43 is only
        for graduates of an eligible Canadian institution.
      </p>

      <h2>Are C41, C42 and C43 all spousal codes?</h2>
      <p>
        No, only two are.{' '}
        <a href={C41} rel="noopener noreferrer" target="_blank" className={a}>
          C41
        </a>{' '}
        is for spouses or common-law partners of workers in TEER 0 or 1 jobs, or selected TEER 2 or 3
        jobs.{' '}
        <a href={C42} rel="noopener noreferrer" target="_blank" className={a}>
          C42
        </a>{' '}
        is for spouses or common-law partners of study permit holders in eligible programs, such as a
        doctorate.
      </p>
      <p>
        Both give an open work permit under section 205(c)(ii), and IRCC narrowed the rules for both
        on 21 January 2025. Dependent children cannot use C42. Check the current conditions on the
        day you apply.
      </p>
      <p>
        <a href={PGWP} rel="noopener noreferrer" target="_blank" className={a}>
          C43
        </a>{' '}
        is the post-graduation work permit, also under 205(c)(ii). It is for graduates of an eligible
        Canadian designated learning institution, not for spouses.
      </p>

      <h2>Who files what, and who pays?</h2>
      <p>
        For an employer-specific permit, the employer acts first. IRCC’s{' '}
        <a href={HOW_TO_HIRE} rel="noopener noreferrer" target="_blank" className={a}>
          hiring steps
        </a>{' '}
        say it pays the employer compliance fee and submits an offer of employment in the Employer
        Portal. It then gives you the 7-digit offer of employment number.
      </p>
      <p>
        IRCC’s pages mention no separate “LMIA-exempt number”. The offer number is what your
        application asks for.
      </p>
      <p>
        The fee is C$230, set by{' '}
        <a href={IRPR_303_1} rel="noopener noreferrer" target="_blank" className={a}>
          section 303.1 of the Regulations
        </a>
        , read on 23 November 2026, unless the case is exempt. Under{' '}
        <a href={IRPR_200} rel="noopener noreferrer" target="_blank" className={a}>
          section 200(3)(f.1)
        </a>
        , an officer must refuse your permit if the employer had not paid it, or submitted the offer,
        before you applied.
      </p>
      <p>
        IRCC lists the{' '}
        <a href={FEE_EXEMPTIONS} rel="noopener noreferrer" target="_blank" className={a}>
          fee exemptions
        </a>
        , and open work permits need neither the offer nor the fee. For C11 you are your own
        employer, so you submit the offer and pay the fee yourself.
      </p>
      <p>
        Under{' '}
        <a href={IRPR_209_2} rel="noopener noreferrer" target="_blank" className={a}>
          section 209.2
        </a>
        , an employer must not charge you that fee or recruitment fees, and must make sure its
        recruiters do not either. If someone in Pakistan asks you to pay for an “LMIA-exempt job offer” or a code,
        treat it as a warning sign.
      </p>
      <p>
        IRCC’s{' '}
        <a href={SCAMS} rel="noopener noreferrer" target="_blank" className={a}>
          scams page
        </a>{' '}
        is plain: “No one can guarantee you a job or a visa to Canada.” Our post on{' '}
        <Link href="/blog/canada-fines-unauthorised-immigration-agents" className={a}>
          Canada’s fines for unauthorised agents
        </Link>{' '}
        explains how to check who you are paying.
      </p>
      <p>
        Codes change, so read IRCC’s list on the day you apply. The routes behind them are explained
        in our{' '}
        <Link href="/work-permits/lmia-exempt" className={a}>
          LMIA-exempt work permits guide
        </Link>
        .
      </p>
    </>
  );
}
