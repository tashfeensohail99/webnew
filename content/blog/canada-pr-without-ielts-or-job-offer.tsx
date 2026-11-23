import Link from 'next/link';

/**
 * Published 23 November 2026 on the site owner's request of that day. Every
 * fact was read on 23 November 2026 from:
 *  - the Immigration and Refugee Protection Regulations on Justice Laws
 *    (current to 2026-10-29): ss. 74, 75, 76, 78–83, 87, 87.1, 87.2, 87.3,
 *    87.4, 117 and 209.3;
 *  - the Immigration and Refugee Protection Act on Justice Laws (current to
 *    2026-10-29): ss. 40 and 96;
 *  - IRCC's language test page (page details 2026-10-16), its Federal Skilled
 *    Worker, six selection factors, skilled trades and proof of funds pages
 *    (page details 2026-11-18), and its program delivery instruction
 *    "Federal skilled workers selection criteria: Official language
 *    proficiency" (page details 2026-06-23).
 * canada.ca pages were read through a page-fetch tool, not saved.
 *
 * Numbers printed are set in law only: 10 points for arranged employment
 * (IRPR s. 82(2)), 28 for language (s. 79(3)), the 100-point total of
 * ss. 78–83, one year in ten (s. 75(2)(a)), two years for test results
 * (s. 75(2)(d)), one year in three (s. 87.1(2)(a)), two years in five
 * (s. 87.2(3)(b)), "half" the minimum necessary income (s. 76(1)(b)) and the
 * five-year bar (IRPA s. 40(2)(a)).
 *
 * Not printed: the CLB minimums and the FSW pass mark. IRPR ss. 74(1) and 76(2)
 * have the Minister fix them and make them public; they appear on IRCC's pages,
 * not in the text of the Regulations or the current Ministerial Instructions
 * (signed 17 November 2026), so the post links IRCC's pages for them. No fund
 * amounts are printed.
 *
 * Our own reading, not any authority's: that a Pakistani trade certificate is
 * not a Canadian certificate of qualification; that paying for an offer does
 * not make the job real; and the wording of the myth column in the table.
 */
const a = 'font-semibold';

const IRCC_LANG =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const IRCC_PDI_LANG =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/standard-requirements/language-requirements/federal-skilled-workers-selection-criteria-official-proficiency.html';
const IRCC_FSW =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html';
const IRCC_FACTORS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers/six-selection-factors-federal-skilled-workers.html';
const IRCC_FST =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/skilled-trades.html';
const IRCC_FUNDS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html';

const IRPR = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-';
const IRPR_74 = `${IRPR}74.html`;
const IRPR_75 = `${IRPR}75.html`;
const IRPR_76 = `${IRPR}76.html`;
const IRPR_78 = `${IRPR}78.html`;
const IRPR_79 = `${IRPR}79.html`;
const IRPR_82 = `${IRPR}82.html`;
const IRPR_87 = `${IRPR}87.html`;
const IRPR_87_1 = `${IRPR}87.1.html`;
const IRPR_87_2 = `${IRPR}87.2.html`;
const IRPR_87_3 = `${IRPR}87.3.html`;
const IRPR_87_4 = `${IRPR}87.4.html`;
const IRPR_117 = `${IRPR}117.html`;
const IRPR_209_3 = `${IRPR}209.3.html`;
const IRPA_40 = 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html';
const IRPA_96 = 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-96.html';

type Law = [string, string];

const MYTHS: [string, string, Law[]][] = [
  [
    '“You can get PR without IELTS.”',
    'Only in a narrow sense. Four other approved tests can replace IELTS, but you still need one.',
    [
      ['IRPR s. 74', IRPR_74],
      ['s. 75(2)(d)', IRPR_75],
    ],
  ],
  [
    '“Your English-medium degree replaces the test.”',
    'No. Approved test results are the conclusive evidence of your language ability.',
    [['IRPR s. 74(7)', IRPR_74]],
  ],
  [
    '“Trades applicants skip the language test.”',
    'No. The trades class needs an approved test in all four skills.',
    [['IRPR s. 87.2(3)(a)', IRPR_87_2]],
  ],
  [
    '“FSW needs a job offer.”',
    'No. A qualifying offer adds 10 of the grid’s 100 points; it is not a minimum requirement.',
    [
      ['IRPR s. 75(2)', IRPR_75],
      ['s. 82(2)', IRPR_82],
    ],
  ],
  [
    '“A job offer means you need no funds.”',
    'Only if you can already work in Canada. From Pakistan, without a Canadian work permit, you still show funds.',
    [
      ['IRPR s. 76(1)(b)', IRPR_76],
      ['s. 87.2(5)', IRPR_87_2],
    ],
  ],
  [
    '“Canadian Experience Class needs no job offer.”',
    'True, but it needs a year of skilled work in Canada within the last three years.',
    [['IRPR s. 87.1(2)(a)', IRPR_87_1]],
  ],
  [
    '“Trades always needs a job offer.”',
    'Not always. A Canadian certificate of qualification can take its place.',
    [['IRPR s. 87.2(3)(d)', IRPR_87_2]],
  ],
  [
    '“We can get you a job offer for a fee.”',
    'An offer counts only if you can do the job and are likely to take it. A false one risks a five-year bar.',
    [
      ['IRPR s. 82(2)', IRPR_82],
      ['IRPA s. 40', IRPA_40],
    ],
  ],
];

export default function CanadaPrWithoutIeltsOrJobOffer() {
  return (
    <>
      <p>
        <strong>
          Every Express Entry programme needs an approved language test, but IELTS is only one of the five
          tests IRCC accepts.
        </strong>{' '}
        The Federal Skilled Worker Program (FSW) does not need a job offer, but you must then show
        settlement funds. That is the law and IRCC’s guidance as read on 23 November 2026.
      </p>

      <h2>Is “PR without IELTS” true?</h2>
      <p>
        Only in a narrow sense. On 23 November 2026,{' '}
        <a href={IRCC_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s language test page
        </a>{' '}
        listed five approved tests. In English they are IELTS General Training, CELPIP-General and PTE
        Core; in French, TEF Canada and TCF Canada.
      </p>
      <p>
        So you can skip IELTS, but not the test. The Regulations require approved test results for each
        Express Entry class. For federal skilled workers that is{' '}
        <a href={IRPR_75} rel="noopener noreferrer" target="_blank" className={a}>
          section 75(2)(d)
        </a>
        ; for the Canadian Experience Class,{' '}
        <a href={IRPR_87_1} rel="noopener noreferrer" target="_blank" className={a}>
          section 87.1(2)(d)
        </a>
        ; for trades,{' '}
        <a href={IRPR_87_2} rel="noopener noreferrer" target="_blank" className={a}>
          section 87.2(3)(a)
        </a>
        .
      </p>
      <p>
        An English-medium degree does not replace a test either. Under{' '}
        <a href={IRPR_74} rel="noopener noreferrer" target="_blank" className={a}>
          section 74(7)
        </a>
        , approved test results are conclusive evidence of your language ability. IRCC’s{' '}
        <a href={IRCC_PDI_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          instructions to its officers
        </a>{' '}
        add: “No other documentary evidence or explanation will be considered.”
      </p>
      <p>
        Section 74(1) has the Minister fix the minimum level for each class, in each of the four skills.
        IRCC publishes it on its language test page, and for the Canadian Experience Class it depends on
        your job’s TEER category.
      </p>
      <p>
        For Federal Skilled Worker applicants, results must also be less than two years old on the day you
        apply. Our{' '}
        <Link href="/tools/clb-converter" className={a}>
          CLB converter
        </Link>{' '}
        turns each score into a level, skill by skill. Our post on{' '}
        <Link href="/blog/ielts-pte-core-celpip-pakistan" className={a}>
          IELTS, PTE Core or CELPIP
        </Link>{' '}
        covers which tests run in Pakistan and how they differ.
      </p>

      <h2>Is there any route to PR with no language test?</h2>
      <p>
        Yes, but not through the Express Entry classes. A spouse, partner or dependent child joins the family class
        through their relationship to a sponsor, under{' '}
        <a href={IRPR_117} rel="noopener noreferrer" target="_blank" className={a}>
          section 117(1)
        </a>
        . Refugee protection rests on a well-founded fear of persecution, under{' '}
        <a href={IRPA_96} rel="noopener noreferrer" target="_blank" className={a}>
          section 96 of the Act
        </a>
        .
      </p>
      <p>
        Provincial nominations work differently again. Under{' '}
        <a href={IRPR_87} rel="noopener noreferrer" target="_blank" className={a}>
          section 87(3)
        </a>
        , the province assesses you against criteria the Minister has approved in writing. Check the
        language rule in the stream’s own criteria, starting from our guide to{' '}
        <Link href="/pnp" className={a}>
          how the PNP works
        </Link>
        .
      </p>

      <h2>Is “PR without a job offer” true?</h2>
      <p>
        For the Federal Skilled Worker Program, yes. The minimum requirements in section 75(2) are skilled
        work experience, an approved test and an education credential, assessed if it is foreign. A job
        offer is not among them.
      </p>
      <p>
        You need at least one year of continuous full-time skilled work, or the part-time equivalent, within
        the last ten years. IRCC’s{' '}
        <a href={IRCC_FSW} rel="noopener noreferrer" target="_blank" className={a}>
          Federal Skilled Worker page
        </a>{' '}
        says it can be gained in Canada or abroad, so work in Pakistan counts.
      </p>
      <p>
        A job offer is one of six selection factors instead. The grid in{' '}
        <a href={IRPR_78} rel="noopener noreferrer" target="_blank" className={a}>
          sections 78 to 83
        </a>{' '}
        adds up to 100 points, and a qualifying offer is worth 10 of them under section 82(2). Language alone
        carries up to 28, under{' '}
        <a href={IRPR_79} rel="noopener noreferrer" target="_blank" className={a}>
          section 79(3)
        </a>
        .
      </p>
      <p>
        Section 76(2) has the Minister fix the pass mark, and IRCC publishes it on its{' '}
        <a href={IRCC_FACTORS} rel="noopener noreferrer" target="_blank" className={a}>
          six selection factors page
        </a>
        . Our{' '}
        <Link href="/express-entry/federal-skilled-worker" className={a}>
          Federal Skilled Worker guide
        </Link>{' '}
        explains each factor and how the grid differs from your CRS score.
      </p>
      <p>
        The Canadian Experience Class needs no job offer either. But{' '}
        <a href={IRPR_87_1} rel="noopener noreferrer" target="_blank" className={a}>
          section 87.1(2)(a)
        </a>{' '}
        asks for a year of skilled work in Canada within the last three years. With no work history in
        Canada, you cannot use it from Pakistan.
      </p>
      <p>
        The Atlantic and rural community classes each require a job offer, under sections{' '}
        <a href={IRPR_87_3} rel="noopener noreferrer" target="_blank" className={a}>
          87.3(2)(d)
        </a>{' '}
        and{' '}
        <a href={IRPR_87_4} rel="noopener noreferrer" target="_blank" className={a}>
          87.4(2)(d)
        </a>
        .
      </p>

      <h2>What do you need instead of a job offer?</h2>
      <p>
        Money of your own. Under{' '}
        <a href={IRPR_76} rel="noopener noreferrer" target="_blank" className={a}>
          section 76(1)(b)
        </a>
        , you must hold transferable, available funds, free of debts, equal to half the “minimum necessary
        income” for your family. IRCC lists the current amounts on its{' '}
        <a href={IRCC_FUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          proof of funds page
        </a>
        .
      </p>
      <p>
        That page says you cannot borrow the money from another person or use equity in property. It asks
        for official letters from every bank or financial institution where you hold an account. If you
        apply from Pakistan, that includes your Pakistani banks.
      </p>
      <p>
        A job offer removes the funds rule only in narrow cases. Section 76(1)(b)(ii) exempts you if your
        offer earns points under section 82(2)(a), (b) or (d). Each of those needs a valid work permit or
        authorisation to work in Canada.
      </p>
      <p>
        IRCC’s proof of funds page puts it the same way: you must be authorised to work in Canada and hold a
        valid offer. So from Pakistan, without a Canadian work permit, an offer does not replace the funds.
      </p>

      <h2>Does the trades programme need a job offer?</h2>
      <p>
        Not always.{' '}
        <a href={IRPR_87_2} rel="noopener noreferrer" target="_blank" className={a}>
          Section 87.2(3)(d)
        </a>{' '}
        asks for either a qualifying job offer or a certificate of qualification in your trade. The
        certificate must come from a competent provincial or federal authority, and{' '}
        <a href={IRCC_FST} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s skilled trades page
        </a>{' '}
        adds territorial bodies.
      </p>
      <p>
        A trade certificate from Pakistan is not that certificate on its own. IRCC says the Canadian
        authority must assess your training, trade experience and skills. You may have to go to the
        province or territory for that.
      </p>
      <p>
        You need at least two years of full-time work in the trade, or the part-time equivalent, within the
        last five years, under section 87.2(3)(b). Unless you already have a valid offer and the right to
        work in Canada, section 87.2(5) asks for funds on the FSW formula. Our{' '}
        <Link href="/express-entry/federal-skilled-trades" className={a}>
          Federal Skilled Trades guide
        </Link>{' '}
        covers the certificate route.
      </p>

      <h2>Can you buy a job offer that counts?</h2>
      <p>
        No. Under{' '}
        <a href={IRPR_82} rel="noopener noreferrer" target="_blank" className={a}>
          section 82(2)
        </a>
        , an offer earns points only if you can do the job and are likely to accept and carry it out.
        Paying for an offer does not make the job real.
      </p>
      <p>
        For workers on LMIA-based work permits,{' '}
        <a href={IRPR_209_3} rel="noopener noreferrer" target="_blank" className={a}>
          section 209.3
        </a>{' '}
        bars the employer, with narrow exceptions, from charging or recovering recruitment fees from them.
        Misrepresenting a material fact makes you inadmissible under{' '}
        <a href={IRPA_40} rel="noopener noreferrer" target="_blank" className={a}>
          section 40 of the Act
        </a>
        . The bar lasts five years, and you cannot apply for permanent residence during it.
      </p>
      <p>
        The warning signs, and how to check an employer yourself, are in our post on{' '}
        <Link href="/blog/fake-canada-job-offers-2026" className={a}>
          fake Canadian job offers
        </Link>
        .
      </p>

      <h2>Myth or fact: what do these claims really mean?</h2>
      <div
        role="region"
        aria-label="Common claims about Canadian PR without IELTS or a job offer, checked against the law on 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Common claims about Canadian PR without IELTS or a job offer, checked against the law on 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">The claim</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">The fact</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Law</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {MYTHS.map(([claim, fact, laws]) => (
              <tr key={claim}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{claim}</th>
                <td className="px-3 py-3 sm:px-4">{fact}</td>
                <td className="px-3 py-3 sm:px-4">
                  {laws.map(([label, href], i) => (
                    <span key={label}>
                      {i > 0 ? ', ' : null}
                      <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
                        {label}
                      </a>
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        You can apply without IELTS if you sit another approved test. For FSW, you can apply without a job
        offer if you meet the minimum requirements, pass the grid and show the funds. The full route is in
        our{' '}
        <Link href="/express-entry/federal-skilled-worker" className={a}>
          Federal Skilled Worker guide
        </Link>
        .
      </p>
    </>
  );
}
