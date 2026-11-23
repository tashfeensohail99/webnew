import Link from 'next/link';

/**
 * Published 23 November 2026 on the firm's instruction. Everything below was read on
 * 23 November 2026, from these official sources:
 * - IRCC: the category-based selection page (page details 2026-11-18); the backgrounder
 *   of 18 February 2026 naming STEM a renewed 2026 category; the news release of
 *   16 October 2026 (points change from 3 November 2026); the ECA page (2026-10-16);
 *   and the rounds page, whose table loads IRCC's ee_rounds_123_en.json. canada.ca
 *   times out on scripted downloads, so these were read through a page-fetch tool.
 * - Law: IRPR s. 75 (Justice Laws, current to 2026-10-29); Ontario's Professional
 *   Engineers Act ss. 12 and 40, and Regulation 941 s. 33 as consolidated from
 *   1 July 2026 (e-Laws, read from its Word versions because the HTML pages build
 *   with scripts); Alberta's Engineering and Geoscience Professions Act ss. 2, 3
 *   and 3.1 (King's Printer, current as of 7 December 2023).
 * - Regulators and bodies: Engineers Canada (licensing overview, Washington Accord,
 *   regulators); Engineers and Geoscientists BC (apply page, registration FAQs,
 *   unauthorized practice FAQs); ESDC's foreign credential recognition page
 *   (2026-11-12); the International Engineering Alliance's Washington Accord page;
 *   PEC's Programs under Level-II page (SRO 1809(I)/2025 of 17 September 2025);
 *   Statistics Canada's NOC 2021 Version 1.0, sub-major group 213 (modified 2022-03-14).
 * PEO's and APEGA's own sites returned a bot challenge, so nothing here comes from
 * them: Ontario and Alberta are described from their laws only.
 *
 * Figures printed: 24 months (Ontario Reg. 941 s. 33(1)), $10,000 (Ontario Act
 * s. 40(2)), and the round numbers, invitations and lowest score from IRCC's rounds
 * data (each round is set by Ministerial Instructions). No fees, processing times or
 * wages. IRCC's category experience rule is linked, not printed, because it appears
 * only on its web page.
 *
 * Our own suggestions, marked on the page: checking your intake batch on PEC's list,
 * and reading the provincial regulator's rules before you plan.
 */
const a = 'font-semibold';

const IRPR_75 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html';
const ESDC_FCR = 'https://www.canada.ca/en/employment-social-development/programs/foreign-credential-recognition.html';
const EC_LICENSING = 'https://engineerscanada.ca/become-an-engineer/overview-of-licensing-process';
const EC_REGULATORS = 'https://engineerscanada.ca/regulatory-excellence/engineering-regulators';
const EC_WA = 'https://engineerscanada.ca/accreditation/the-washington-accord';
const ON_ACT = 'https://www.ontario.ca/laws/statute/90p28';
const ON_REG = 'https://www.ontario.ca/laws/regulation/900941';
const AB_ACT = 'https://kings-printer.alberta.ca/documents/Acts/E11.pdf';
const EGBC_APPLY =
  'https://www.egbc.ca/how-to-apply/register-as-an-engineer/professional-engineer/apply-to-be-a-professional-engineer-in-bc';
const EGBC_FAQ = 'https://www.egbc.ca/how-to-apply/registration-faqs';
const EGBC_TITLE =
  'https://www.egbc.ca/complaints-discipline/unauthorized-practice-or-title/unauthorized-practice-misuse-of-title/unauthorized-practice-or-title-faqs';
const IEA_WA = 'https://www.internationalengineeringalliance.org/accords/washington-accord';
const PEC_L2 = 'https://www.pec.org.pk/accredition/programs-under-level-2/';
const ECA = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html';
const STATCAN_213 =
  'https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVDStruct&TVD=1322554&CVD=1322615&CPV=213&CST=01052021&CLV=2&MLV=5';
const CATEGORIES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const BACKGROUNDER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/attracting-the-worlds-best-talent-to-fill-canadas-labour-gaps-and-build-our-economy.html';
const ROUNDS = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html';
const CRS_CHANGE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/canada-refocusing-express-entry-on-top-talent-that-drives-economic-growth.html';

type Province = { name: string; regulator: string; law: string; href: string; protects: string; before: string };

const PROVINCES: Province[] = [
  {
    name: 'Ontario',
    regulator: 'Professional Engineers Ontario (PEO)',
    law: 'Professional Engineers Act, ss. 12 and 40',
    href: ON_ACT,
    protects:
      'Practising, or holding yourself out as practising, needs a licence. Protected: “professional engineer” or an abbreviation, and “engineer” used to suggest you may practise.',
    before: 'Engineering acts are allowed where a licensed engineer takes responsibility for the work (s. 12(3)(b)).',
  },
  {
    name: 'Alberta',
    regulator: 'APEGA',
    law: 'Engineering and Geoscience Professions Act, ss. 2, 3 and 3.1',
    href: AB_ACT,
    protects:
      'Only a professional engineer or another authorised holder may practise. Protected: “professional engineer”, “P.Eng.”, and “engineer” with words implying a licence. “Software engineer” has been exempt since 2023.',
    before: 'An engineer-in-training supervised and controlled by a professional engineer may practise (s. 2(4)(b)).',
  },
  {
    name: 'British Columbia',
    regulator: 'Engineers and Geoscientists BC (EGBC)',
    law: 'Professional Governance Act, Part 5, as EGBC explains it',
    href: EGBC_TITLE,
    protects:
      'Reserved: “Professional Engineer”, “P.Eng.” and “Engineer-in-Training”, plus “engineer” where it implies a right to practise. Showing your degree, such as “B.Sc.”, is allowed.',
    before:
      'All engineering work needs registration, even if unstamped or used only inside your company. You can register as an engineer-in-training once you meet the academic requirements.',
  },
];

/** Every unit group in NOC 2021 sub-major group 213, and whether IRCC's STEM category listed it on 23 November 2026. */
const CODES: [string, string, boolean][] = [
  ['21300', 'Civil engineers', true],
  ['21301', 'Mechanical engineers', true],
  ['21310', 'Electrical and electronics engineers', true],
  ['21311', 'Computer engineers (except software engineers and designers)', false],
  ['21320', 'Chemical engineers', false],
  ['21321', 'Industrial and manufacturing engineers', true],
  ['21322', 'Metallurgical and materials engineers', false],
  ['21330', 'Mining engineers', false],
  ['21331', 'Geological engineers', true],
  ['21332', 'Petroleum engineers', false],
  ['21390', 'Aerospace engineers', false],
  ['21399', 'Other professional engineers', false],
];

export default function PakistaniEngineersCanada() {
  return (
    <>
      <p>
        <strong>
          You need no Canadian engineering licence to qualify for Express Entry, but you need one to
          practise engineering or call yourself an engineer.
        </strong>{' '}
        Licences come from a regulator in each province or territory, separately from IRCC. On 23
        November 2026, IRCC’s STEM category listed civil, mechanical, electrical, industrial and
        geological engineers, but no STEM round had been held in 2026.
      </p>

      <h2>Is a licence part of your immigration application?</h2>
      <p>
        No. The Federal Skilled Worker requirements in{' '}
        <a href={IRPR_75} rel="noopener noreferrer" target="_blank" className={a}>
          section 75 of the Regulations
        </a>{' '}
        are work experience, a language test, and an education credential with its assessment. A
        Canadian licence is not among them.
      </p>
      <p>
        Working as an engineer is different. ESDC’s{' '}
        <a href={ESDC_FCR} rel="noopener noreferrer" target="_blank" className={a}>
          foreign credential recognition page
        </a>{' '}
        names engineers among the regulated professions, where you need a licence before you can work.
        It suggests contacting the regulator, ideally before you arrive in Canada.
      </p>
      <p>
        <a href={EC_LICENSING} rel="noopener noreferrer" target="_blank" className={a}>
          Engineers Canada
        </a>{' '}
        says the requirements vary by regulator. Generally they cover an accredited or equivalent degree,
        work experience, a professional practice exam, good character and English or French. Engineers
        Canada itself does not grant licences.
      </p>

      <h2>Which work and which titles need a licence?</h2>
      <p>
        Each province and territory has its own law and regulator, and{' '}
        <a href={EC_REGULATORS} rel="noopener noreferrer" target="_blank" className={a}>
          Engineers Canada lists them
        </a>
        . Here is how three provinces handle it, as read on 23 November 2026. The others differ.
      </p>
      <div
        role="region"
        aria-label="What the law protects and what you may do before you are licensed, in Ontario, Alberta and British Columbia, as read on 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            What the law protects and what you may do before you are licensed, in Ontario, Alberta and
            British Columbia, as read on 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Province and law</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What is protected</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Before you are licensed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {PROVINCES.map((p) => (
              <tr key={p.name}>
                <th scope="row" className="px-3 py-3 align-top font-medium text-ink-900 sm:px-4">
                  {p.name}
                  <span className="mt-1 block font-normal text-ink-600">{p.regulator}</span>
                  <a href={p.href} rel="noopener noreferrer" target="_blank" className={`mt-1 block ${a}`}>
                    {p.law}
                  </a>
                </th>
                <td className="px-3 py-3 align-top sm:px-4">{p.protects}</td>
                <td className="hidden px-4 py-3 align-top sm:table-cell">{p.before}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Misusing a title is an offence. In Ontario, a first conviction can bring a fine of up to $10,000
        under section 40(2). EGBC says a job title your employer gave you is no excuse.
      </p>
      <p>
        EGBC’s{' '}
        <a href={EGBC_TITLE} rel="noopener noreferrer" target="_blank" className={a}>
          title FAQs
        </a>{' '}
        also say that registration in another jurisdiction gives no title rights in British Columbia. Apart
        from a very limited exception, on our reading that covers Pakistan Engineering Council
        registration. Our suggestion: in BC, use your degree, such as “B.Sc. (Civil Engineering)”, not
        “Civil Engineer”, until you are registered.
      </p>

      <h2>Does the Washington Accord help a Pakistani degree?</h2>
      <p>
        It can help with the academic part. The{' '}
        <a href={IEA_WA} rel="noopener noreferrer" target="_blank" className={a}>
          International Engineering Alliance
        </a>{' '}
        lists the Pakistan Engineering Council (PEC) as a full Washington Accord signatory since 2017.
        Under the Accord, signatories recognise each other’s accredited engineering degree programmes.
      </p>
      <p>
        Two limits matter.{' '}
        <a href={EC_WA} rel="noopener noreferrer" target="_blank" className={a}>
          Engineers Canada
        </a>{' '}
        lists 2017 as the first year of Pakistani graduates the Accord applies to. PEC names the
        programmes it treats as “substantially equivalent to Washington Accord” on its{' '}
        <a href={PEC_L2} rel="noopener noreferrer" target="_blank" className={a}>
          Level-II list
        </a>
        , by university and intake batch.
      </p>
      <p>
        Our suggestion: check that your programme and your intake batch both appear there. The list cites
        an SRO dated 17 September 2025, and some programmes reached Level II only from a later batch.
      </p>
      <p>
        The Accord is still not a licence.{' '}
        <a href={EGBC_APPLY} rel="noopener noreferrer" target="_blank" className={a}>
          EGBC
        </a>{' '}
        says a degree recognised through a Washington Accord signatory generally may not need academic
        exams. It confirms this after reviewing your application, and its experience, exam and character
        requirements still apply.
      </p>

      <h2>Is the regulator’s assessment the same as your ECA?</h2>
      <p>
        No. Your Educational Credential Assessment (ECA) serves IRCC’s eligibility and points. IRCC’s{' '}
        <a href={ECA} rel="noopener noreferrer" target="_blank" className={a}>
          ECA page
        </a>{' '}
        says it does not guarantee a licence for a regulated profession, which you get in the province or
        territory.
      </p>
      <p>
        Regulators run their own review. EGBC’s{' '}
        <a href={EGBC_FAQ} rel="noopener noreferrer" target="_blank" className={a}>
          registration FAQs
        </a>{' '}
        say it does not accept evaluations from WES or ICES, and evaluates degrees itself with Engineers
        Canada. It will treat transcripts inside a WES ICAP package as official if WES first received
        official transcripts.
      </p>
      <p>
        In Ontario,{' '}
        <a href={ON_REG} rel="noopener noreferrer" target="_blank" className={a}>
          Regulation 941
        </a>{' '}
        requires an accredited Canadian degree or equivalent qualifications recognised by PEO’s Council.
        IRCC’s list of designated organisations includes no engineering body, so engineers use the general
        ones, such as WES. Our{' '}
        <Link href="/express-entry/credential-assessment" className={a}>
          credential assessment guide
        </Link>{' '}
        covers them and HEC attestation.
      </p>

      <h2>What else will a regulator ask for?</h2>
      <p>
        In Ontario, section 33 of Regulation 941, as consolidated from 1 July 2026, requires at least 24
        months of engineering experience after your degree. You must also complete a competency-based
        assessment and pass the professional practice examination.
      </p>
      <p>
        In British Columbia,{' '}
        <a href={EGBC_APPLY} rel="noopener noreferrer" target="_blank" className={a}>
          EGBC
        </a>{' '}
        assesses experience by competencies, including knowledge of Canadian regulations, codes and
        standards. It says that experience can be gained in Canada or abroad, and that you can apply with
        no Canadian work experience. It also says it does not consider visa status.
      </p>
      <p>
        Our suggestion: read the rules of the regulator in the province you are aiming for before you plan.
        Its requirements, not IRCC’s, decide when you can work as an engineer.
      </p>

      <h2>Which NOC code fits your engineering job?</h2>
      <p>
        Express Entry matches your work to a five-digit NOC 2021 code by your duties, not your title.{' '}
        <a href={STATCAN_213} rel="noopener noreferrer" target="_blank" className={a}>
          Statistics Canada
        </a>{' '}
        places professional engineers in group 213, and every code in it is TEER 1. How to match your
        duties is in our{' '}
        <Link href="/express-entry/noc-codes" className={a}>
          NOC codes guide
        </Link>
        .
      </p>
      <div
        role="region"
        aria-label="Professional engineering codes in NOC 2021, and whether IRCC’s STEM category listed them on 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Professional engineering codes in NOC 2021, and whether IRCC’s STEM category listed them on 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">NOC 2021</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Unit group</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">On the STEM list</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CODES.map(([code, title, listed]) => (
              <tr key={code}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium tabular-nums text-ink-900 sm:px-4">
                  {code}
                </th>
                <td className="px-3 py-3 sm:px-4">{title}</td>
                <td className="px-3 py-3 sm:px-4">{listed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The category also listed civil, mechanical, and electrical and electronics engineering
        technologists and technicians (22300, 22301 and 22310), which are TEER 2. Software engineers have
        their own code outside group 213.
      </p>

      <h2>Are there Express Entry draws for engineers in 2026?</h2>
      <p>
        There is a category, but no round yet this year. IRCC’s{' '}
        <a href={BACKGROUNDER} rel="noopener noreferrer" target="_blank" className={a}>
          backgrounder of 18 February 2026
        </a>{' '}
        named STEM occupations among the renewed 2026 categories. Its{' '}
        <a href={CATEGORIES} rel="noopener noreferrer" target="_blank" className={a}>
          category page
        </a>
        , dated 18 November 2026, lists the engineering codes marked “Yes” above.
      </p>
      <p>
        To be invited in a STEM round, your recent experience must be in one listed occupation. You must
        also qualify for an Express Entry programme. The category page sets how much experience counts and
        how recent it must be.
      </p>
      <p>
        IRCC’s{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds data
        </a>
        , read on 23 November 2026, shows no STEM round in 2026; the latest round was #453 on 28 October
        2026. The last STEM round was #293 on 11 April 2024, with 4,500 invitations and a lowest score of
        491.
      </p>
      <p>
        That round used the occupation list in force then, and IRCC{' '}
        <a href={CRS_CHANGE} rel="noopener noreferrer" target="_blank" className={a}>
          changed how CRS points are awarded
        </a>{' '}
        from 3 November 2026. A category does not promise a round, as our{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          guide to category-based draws
        </Link>{' '}
        explains. Start by confirming your code in the{' '}
        <Link href="/express-entry/noc-codes" className={a}>
          NOC codes for Express Entry
        </Link>{' '}
        guide.
      </p>
    </>
  );
}
