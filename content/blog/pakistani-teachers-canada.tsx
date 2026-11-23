import Link from 'next/link';

/**
 * Published 23 November 2026 on the owner's instruction. Everything below was read on
 * 23 November 2026, from these official sources:
 * - IRCC: the category-based selection page (page details 2026-11-18); the backgrounder
 *   of 18 February 2026 naming education occupations a renewed 2026 category; the
 *   rounds page, whose table loads IRCC's ee_rounds_123_en.json (read through a
 *   page-fetch tool, because canada.ca resets scripted downloads); the ECA and
 *   language test pages (both 2026-10-16); the high-wage occupations page (in force
 *   3 November 2026; page details 2026-10-16); and the news release of 16 October 2026.
 * - Law: IRPR s. 75 (Justice Laws, current to 2026-10-29); Ontario Regulation 176/10,
 *   ss. 1, 6, 7, 11 and 12 (e-Laws, consolidated from 23 September 2026) and Ontario
 *   Regulation 271/19, s. 2 (consolidated from 30 May 2024), both read from e-Laws'
 *   Word versions; Alberta Regulation 123/2022, s. 7 (King's Printer, current as of
 *   1 June 2026).
 * - ESDC's NOC 2021 Version 1.0 pages for 41220, 41221 and 42202.
 * - Ontario College of Teachers: internationally educated teachers overview, language
 *   requirements, Pakistan statement of professional standing page, mathematics
 *   proficiency test page, and its general education registration guide (2026 edition).
 * - Alberta Education: teacher certification page. Pathways to Teach Canada: Get
 *   Certified to Teach page.
 * - British Columbia: www2.gov.bc.ca reset every automated connection, so the two BC
 *   pages were read from Wayback Machine copies: Certificate of Qualification
 *   requirements (captured 13 March 2026, last updated 26 February 2026) and required
 *   documents details (captured 20 April 2026, last updated 27 March 2026). The post
 *   dates BC by those update dates, not by 23 November 2026.
 *
 * Figures printed: 90 post-secondary credits (O. Reg. 176/10, s. 1(1)); two years for
 * the mathematics test (O. Reg. 271/19, s. 2(4)); 80 days, five years and a one-year
 * extension (O. Reg. 176/10, s. 12(2), (5) and (6)); NOC codes and TEER levels (the
 * official classification); round numbers, invitations and lowest scores (IRCC's
 * rounds data; each round is set by Ministerial Instructions). No fees, processing
 * times, test scores, wages, or BC and Alberta course or year counts: those appear
 * only on web pages. IRCC's category experience rule is linked, not printed, because
 * no 2026 education round has set it in Ministerial Instructions.
 *
 * Our own suggestions, marked on the page: asking the regulator how a two-year BA or
 * BSc counts, and planning a separate Express Entry test if BC or Alberta asks for one.
 * Re-check the category list and the rounds monthly.
 */
const a = 'font-semibold';

const IRPR_75 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html';
const NOC_41220 = 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=41220&version=2021.0';
const NOC_41221 = 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=41221&version=2021.0';
const NOC_42202 = 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=42202&version=2021.0';
const ECA = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html';
const IRCC_TESTS = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const OCT_IET = 'https://www.oct.ca/en-ca/becoming-a-teacher/requirements/internationally-educated-teachers/overview';
const OCT_GUIDE =
  'https://sc.oct.ca/-/media/PDF/Requirements%20General%20Education%20Teacher/EN/general_education_teacher_e.pdf';
const OCT_LANG = 'https://www.oct.ca/en-ca/becoming-a-teacher/requirements/language-requirements';
const OCT_PK =
  'https://www.oct.ca/en-ca/becoming-a-teacher/requirements/internationally-educated-teachers/country-specific-information/sops-pakistan';
const ON_REG_176 = 'https://www.ontario.ca/laws/regulation/100176';
const ON_REG_271 = 'https://www.ontario.ca/laws/regulation/190271';
const BC_COQ = 'https://www2.gov.bc.ca/gov/content/education-training/k-12/teach/become-a-teacher/types/coq-requirements';
const BC_DOCS =
  'https://www2.gov.bc.ca/gov/content/education-training/k-12/teach/your-application/submit-documents/documents-details';
const AB_CERT = 'https://www.alberta.ca/teacher-certification';
const AB_REG = 'https://kings-printer.alberta.ca/documents/Regs/2022_123.pdf';
const PATHWAYS = 'https://pathwaystoteach.ca/get-certified-to-teach';
const CATEGORIES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const BACKGROUNDER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/attracting-the-worlds-best-talent-to-fill-canadas-labour-gaps-and-build-our-economy.html';
const ROUNDS = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html';
const CRS_CHANGE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/canada-refocusing-express-entry-on-top-talent-that-drives-economic-growth.html';
const HIGH_WAGE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html';

type Province = { name: string; regulator: string; requirement: string; sources: [string, string][] };

const PROVINCES: Province[] = [
  {
    name: 'Ontario',
    regulator: 'Ontario College of Teachers',
    requirement:
      'A degree of at least 90 post-secondary credits or the equivalent, and a teacher education programme the College finds not substantially different from Ontario’s. You must also pass a mathematics test, though a teacher certified abroad may be certified first and given up to two years.',
    sources: [
      ['O. Reg. 176/10, ss. 1 and 11', ON_REG_176],
      ['O. Reg. 271/19, s. 2', ON_REG_271],
    ],
  },
  {
    name: 'British Columbia',
    regulator: 'Ministry of Education and Child Care, under BC Teachers’ Council standards',
    requirement:
      'A programme at an accredited institution, with a supervised practicum in a K-12 school, that authorises you to teach where you trained. If you trained outside Canada, you also need a “familiarization course” approved by the Council.',
    sources: [['Certificate of Qualification requirements (updated 26 February 2026)', BC_COQ]],
  },
  {
    name: 'Alberta',
    regulator: 'Alberta Education (the Registrar)',
    requirement:
      'A degree that includes or adds an acceptable teacher preparation programme meeting certification rules where you completed it, plus English or French. Certificates go only to Canadian citizens or people lawfully permitted to work in Canada.',
    sources: [['Alberta Regulation 123/2022, s. 7', AB_REG]],
  },
];

/** IRCC's Education category, as listed on its category page (page details 2026-11-18). */
const CODES: [string, string, string][] = [
  ['41220', 'Secondary school teachers', '1'],
  ['41221', 'Elementary school and kindergarten teachers', '1'],
  ['42202', 'Early childhood educators and assistants', '2'],
  ['42203', 'Instructors of persons with disabilities', '2'],
  ['43100', 'Elementary and secondary school teacher assistants', '3'],
];

export default function PakistaniTeachersCanada() {
  return (
    <>
      <p>
        <strong>
          You need no Canadian teaching certificate to qualify for Express Entry, but you need one to teach
          in a Canadian public school.
        </strong>{' '}
        Each province certifies its own teachers, separately from IRCC. On 23 November 2026, IRCC’s
        Education category listed school teachers and early childhood educators, but no education round had
        been held in 2026.
      </p>

      <h2>Is a teaching certificate part of your PR application?</h2>
      <p>
        No.{' '}
        <a href={IRPR_75} rel="noopener noreferrer" target="_blank" className={a}>
          Section 75 of the Regulations
        </a>{' '}
        asks Federal Skilled Workers for TEER 0 to 3 work experience, a language test and an assessed
        education credential. A teaching certificate is not on the list.
      </p>
      <p>
        Teaching itself is regulated. ESDC’s NOC pages for{' '}
        <a href={NOC_41220} rel="noopener noreferrer" target="_blank" className={a}>
          secondary
        </a>{' '}
        and{' '}
        <a href={NOC_41221} rel="noopener noreferrer" target="_blank" className={a}>
          elementary
        </a>{' '}
        teachers say a provincial teaching certificate is required. IRCC’s{' '}
        <a href={ECA} rel="noopener noreferrer" target="_blank" className={a}>
          ECA page
        </a>{' '}
        says a licence for a regulated job must come from the province or territory you plan to settle in.
      </p>
      <p>
        The two tracks do meet. Ontario’s College says{' '}
        <a href={OCT_IET} rel="noopener noreferrer" target="_blank" className={a}>
          you can apply from outside Canada
        </a>
        . Under{' '}
        <a href={AB_REG} rel="noopener noreferrer" target="_blank" className={a}>
          Alberta’s regulation
        </a>
        , an interim professional certificate goes only to a Canadian citizen or someone lawfully permitted
        to work in Canada (s. 7(5)).
      </p>
      <p>
        <a href={PATHWAYS} rel="noopener noreferrer" target="_blank" className={a}>
          Pathways to Teach Canada
        </a>{' '}
        also says some provinces may require a work permit before certification. Nurses and engineers face
        the same split, as our posts on{' '}
        <Link href="/blog/pakistani-nurses-canada" className={a}>
          Pakistani nurses
        </Link>{' '}
        and{' '}
        <Link href="/blog/pakistani-engineers-canada" className={a}>
          Pakistani engineers
        </Link>{' '}
        explain.
      </p>

      <h2>What do Ontario, British Columbia and Alberta require?</h2>
      <p>
        Each province sets its own rules, and the table covers three. Ontario and Alberta were read on 23
        November 2026. British Columbia’s row is from its pages as last updated in February and March 2026.
      </p>
      <div
        role="region"
        aria-label="Who certifies teachers, and the key requirement for teachers educated outside Canada, in Ontario, British Columbia and Alberta"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Who certifies teachers, and the key requirement for teachers educated outside Canada, in Ontario,
            British Columbia (as updated February 2026) and Alberta (as read on 23 November 2026)
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Province and regulator</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Key requirement</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {PROVINCES.map((p) => (
              <tr key={p.name}>
                <th scope="row" className="px-3 py-3 align-top font-medium text-ink-900 sm:px-4">
                  {p.name}
                  <span className="mt-1 block font-normal text-ink-600">{p.regulator}</span>
                </th>
                <td className="px-3 py-3 align-top sm:px-4">{p.requirement}</td>
                <td className="px-3 py-3 align-top sm:px-4">
                  {p.sources.map(([label, href]) => (
                    <a key={href} href={href} rel="noopener noreferrer" target="_blank" className={`block ${a}`}>
                      {label}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Ontario’s{' '}
        <a href={OCT_GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          2026 registration guide
        </a>{' '}
        adds that your programme must lead to certification or authorisation to teach where you completed
        it. Each regulator judges whether your B.Ed. or M.Ed. is an acceptable teacher education programme.
      </p>
      <p>
        If your programme falls short of Ontario’s, the College may grant a certificate with conditions.{' '}
        <a href={ON_REG_176} rel="noopener noreferrer" target="_blank" className={a}>
          Section 12 of its regulation
        </a>{' '}
        allows this only if you already meet one of two sets of requirements: the listed teaching
        qualifications, a practicum of at least 80 days and a programme of the required length; or the
        required educational theory and foundation courses. What is missing is recorded as a condition.
        The certificate expires five years after it is granted unless you meet the conditions, and the
        Registrar may extend it by one year only for exceptional circumstances.
      </p>

      <h2>What will a teacher trained in Pakistan need to send?</h2>
      <p>
        Ontario wants a statement of professional standing from where you trained, even if you never taught
        there. It confirms your right to teach was never suspended, cancelled or revoked. The College’s{' '}
        <a href={OCT_PK} rel="noopener noreferrer" target="_blank" className={a}>
          Pakistan page
        </a>{' '}
        says you can get it from the last school where you taught.
      </p>
      <p>
        That page says the principal, director, headmaster or headmistress must sign it.{' '}
        <a href={AB_CERT} rel="noopener noreferrer" target="_blank" className={a}>
          Alberta
        </a>{' '}
        accepts a letter of reference from the head of your school where a jurisdiction issues no
        certification. The head must send it directly and confirm you left in good standing.
      </p>
      <p>
        British Columbia’s{' '}
        <a href={BC_DOCS} rel="noopener noreferrer" target="_blank" className={a}>
          document list
        </a>{' '}
        asks schools where you taught without registering for a letter on your standing and dates. None of
        the three accepts transcripts sent by you, even in a sealed envelope.
      </p>
      <p>
        Our suggestion: if your BA or BSc took two years, ask the regulator how it counts before you apply.
        Our{' '}
        <Link href="/express-entry/credential-assessment" className={a}>
          credential assessment guide
        </Link>{' '}
        covers the two-year degree question for Express Entry, and HEC attestation.
      </p>

      <h2>Will you need an English test?</h2>
      <p>
        Possibly two. Pakistan is not on Ontario’s list of countries whose English-language teacher
        programmes meet its{' '}
        <a href={OCT_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          language requirement
        </a>{' '}
        automatically. If yours was taught entirely in English, the head of the institution can confirm
        this to the College by letter.
      </p>
      <p>
        Ontario’s test list includes IELTS General Training, CELPIP-General and PTE Core, the English tests{' '}
        <a href={IRCC_TESTS} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC accepts
        </a>{' '}
        for Express Entry. Alberta’s list names IELTS Academic and TOEFL iBT. British Columbia’s names those
        two and LCATP, and none of these is on IRCC’s list.
      </p>
      <p>
        Both of those provinces also accept other evidence in some cases. Our suggestion: if British
        Columbia or Alberta asks you for a test, plan on a separate one for Express Entry.
      </p>

      <h2>Is the regulator’s assessment the same as your ECA?</h2>
      <p>
        No. Your Educational Credential Assessment (ECA) serves IRCC’s eligibility and points, and IRCC says
        it does not guarantee a licence. Its list of designated organisations includes no teaching body.
      </p>
      <p>
        Regulators assess you themselves. Alberta says Alberta Education is the only body that can assess
        credentials for teaching in Alberta, and it does so course by course.
      </p>
      <p>
        <a href={PATHWAYS} rel="noopener noreferrer" target="_blank" className={a}>
          Pathways to Teach Canada
        </a>{' '}
        assesses credentials and language for participating provinces and territories. They include British
        Columbia, Manitoba, Saskatchewan and the four Atlantic provinces, but not Ontario or Alberta.
        Pathways itself grants no certification.
      </p>

      <h2>Which NOC codes fit teaching jobs?</h2>
      <p>
        Express Entry matches your duties, not your title, to a five-digit NOC 2021 code. Each code below is
        in IRCC’s Education category, as listed on its{' '}
        <a href={CATEGORIES} rel="noopener noreferrer" target="_blank" className={a}>
          category page
        </a>{' '}
        dated 18 November 2026.
      </p>
      <div
        role="region"
        aria-label="NOC 2021 codes in IRCC’s Education category on 23 November 2026, with their TEER levels"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            NOC 2021 codes in IRCC’s Education category on 23 November 2026, with their TEER levels
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">NOC 2021</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Unit group</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">TEER</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CODES.map(([code, title, teer]) => (
              <tr key={code}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium tabular-nums text-ink-900 sm:px-4">
                  {code}
                </th>
                <td className="px-3 py-3 sm:px-4">{title}</td>
                <td className="px-3 py-3 tabular-nums sm:px-4">{teer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        All five are TEER 1, 2 or 3, so they can count for the Federal Skilled Worker Program. The{' '}
        <a href={NOC_42202} rel="noopener noreferrer" target="_blank" className={a}>
          NOC
        </a>{' '}
        says early childhood educators need a licence in Ontario, certification in British Columbia, and
        usually a licence elsewhere.
      </p>
      <p>
        How to match your duties is in our{' '}
        <Link href="/express-entry/noc-codes" className={a}>
          NOC codes guide
        </Link>
        . Being in a category matters only when IRCC holds a round for it, as our guide to{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          Express Entry category-based draws
        </Link>{' '}
        explains.
      </p>

      <h2>Has IRCC held education draws?</h2>
      <p>
        Not in 2026. IRCC’s{' '}
        <a href={BACKGROUNDER} rel="noopener noreferrer" target="_blank" className={a}>
          backgrounder of 18 February 2026
        </a>{' '}
        named education occupations among the renewed 2026 categories. Your experience must be in one listed
        occupation, and the category page sets how much counts and how recent it must be.
      </p>
      <p>
        IRCC’s{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds data
        </a>
        , read on 23 November 2026, shows no education round this year. The latest round was #453 on 28
        October 2026. In 2025, the category had two rounds.
      </p>
      <p>
        Round #344 on 1 May 2025 issued 1,000 invitations, with a lowest score of 479. Round #367 on 17
        September 2025 issued 2,500, with a lowest score of 462.
      </p>
      <p>
        Those rounds came before IRCC{' '}
        <a href={CRS_CHANGE} rel="noopener noreferrer" target="_blank" className={a}>
          changed how CRS points are awarded
        </a>{' '}
        from 3 November 2026. Secondary and elementary teachers are on its{' '}
        <a href={HIGH_WAGE} rel="noopener noreferrer" target="_blank" className={a}>
          high-wage occupation list
        </a>{' '}
        in force from that date. IRCC says that list brings extra points for Canadian work experience or a
        qualifying job offer.
      </p>
      <p>
        A category does not promise a round, as our{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          category-based draws guide
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
