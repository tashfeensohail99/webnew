import Link from 'next/link';

/**
 * Published 23 November 2026 on the owner's instruction. Every fact is from an
 * official page read on 23 November 2026:
 * - IRCC: Category-based selection (page details 2026-11-18); the Express Entry
 *   rounds data and the Ministerial Instructions for rounds #398, #422 and #441
 *   (all three set the same membership rule and occupation table); the language
 *   test page and the ECA page (both 2026-10-16); entry requirements by country
 *   (2026-07-31).
 * - ESDC's NOC 2021 Version 1.0 pages for 31300, 31301, 31302, 32101 and 33102.
 * - NNAS: Our role (2026-05-06), Expedited Service (2026-09-11), Important
 *   documents (2026-08-04), Application process and timeline.
 * - CNO: registration guide for nurses educated outside Canada (2026-06-24),
 *   approved ECA providers (2026-06-02), proficiency in English or French
 *   (2026-06-04), authorization to work (2026-06-03), next steps for RN applicants.
 * - BCCNM: internationally educated nurses page. Inspire Global Assessments:
 *   British Columbia steps and English language proficiency pages.
 * - PNMC: home page (2026-07-14) and verification page (2026-01-27).
 * - WES: instructions for candidates registering with CNO.
 * - Alberta: Dedicated Health Care Pathway. WelcomeBC: BC PNP (last updated
 *   17 June 2026) and Skills Immigration (last updated 28 May 2026).
 * Not read: the OIIQ (Quebec) site, which blocked automated access, so Quebec is
 * described only from NNAS's own statement.
 *
 * Figures printed: NOC codes and TEER levels (the official classification); the
 * three 2026 healthcare rounds, their invitations and lowest scores (IRCC's
 * official rounds data; invitation numbers also set in each round's Ministerial
 * Instructions); one year within three years (the round instructions). No fees,
 * processing times, test scores or provincial thresholds: each body publishes
 * its own, and they are not set in law.
 *
 * Our own suggestions, marked in the text: checking which Ontario class a nursing
 * diploma fits before planning, and that a nurse bound for British Columbia may
 * need two English tests. Re-check the category list and the rounds monthly.
 */
const a = 'font-semibold';

const IRCC_ECA = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html';
const IRCC_TESTS = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const IRCC_VISA = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html';
const CATEGORY = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const ROUNDS = 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html';
const MI_441 = 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=441';
const NOC_31301 = 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=31301&version=2021.0';
const NNAS_ROLE = 'https://www.nnas.ca/our-role-in-canadian-healthcare/';
const NNAS_EXPEDITED = 'https://www.nnas.ca/expedited-service/';
const NNAS_DOCS = 'https://www.nnas.ca/documents/';
const NNAS_PROCESS = 'https://www.nnas.ca/application-process-timeline/';
const CNO_GUIDE = 'https://www.cno.org/become-a-nurse/registration-guides/outside-canada';
const CNO_ECA = 'https://www.cno.org/become-a-nurse/approved-educational-credential-assessment-service-providers';
const CNO_NEXT = 'https://cno.org/become-a-nurse/next-steps/next-steps-rn-in-the-general-class-internationally-educated-nurse';
const CNO_LANG = 'https://www.cno.org/become-a-nurse/registration-requirements/proficiency-in-english-or-french';
const CNO_AUTH = 'https://www.cno.org/become-a-nurse/registration-requirements/authorization-to-work';
const BCCNM = 'https://www.bccnm.ca/RN/applications_registration/how_to_apply/InternationalEN/Pages/Default.aspx';
const INSPIRE_BC = 'https://www.inspireassessments.org/british-columbia/';
const INSPIRE_ELP = 'https://www.inspireassessments.org/assessments/english-language-proficiency-documents/';
const WES_CNO = 'https://www.wes.org/evaluations-and-fees/education/instructions-for-the-candidates-for-registration-with-the-college-of-nurses-of-ontario/';
const PNMC = 'https://pnmc.gov.pk/';
const PNMC_VERIFY = 'https://pnmc.gov.pk/verification-registration-2/';
const ALBERTA = 'https://www.alberta.ca/dedicated-health-care-pathway';
const BC_SKILLS = 'https://www.welcomebc.ca/immigrate-to-b-c/skills-immigration';
const BC_PNP = 'https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program/the-bc-provincial-nominee-program';

/** Test, IRCC (Express Entry), CNO (Ontario), Inspire for BCCNM (British Columbia). */
const TESTS: [string, string, string, string][] = [
  ['IELTS General Training', 'Yes', 'Yes', 'No'],
  ['IELTS Academic', 'No', 'Yes', 'Yes'],
  ['PTE Core', 'Yes', 'Not listed', 'No'],
  ['PTE Academic', 'No', 'Yes', 'Yes'],
  ['CELPIP-General', 'Yes', 'Not listed', 'No'],
  ['CELBAN', 'No', 'Yes', 'Yes'],
  ['OET', 'No', 'Yes', 'Yes'],
  ['TEF Canada or TCF Canada (French)', 'Yes', 'Yes', 'No'],
];

const NURSING_CODES: [string, string, string][] = [
  ['31301', 'Registered nurses and registered psychiatric nurses', '1'],
  ['31302', 'Nurse practitioners', '1'],
  ['31300', 'Nursing coordinators and supervisors', '1'],
  ['32101', 'Licensed practical nurses', '2'],
  ['33102', 'Nurse aides, orderlies and patient service associates', '3'],
];

/** Date, round, invitations, lowest CRS score invited. From IRCC's rounds data. */
const ROUNDS_2026: [string, string, string, string][] = [
  ['20 February 2026', '#398', '4,000', '467'],
  ['25 June 2026', '#422', '4,000', '475'],
  ['4 September 2026', '#441', '3,500', '475'],
];

export default function PakistaniNursesCanada() {
  return (
    <>
      <p>
        <strong>
          A nurse in Pakistan needs two separate approvals, a provincial nursing licence and permanent
          residence from IRCC, and neither gives you the other.
        </strong>{' '}
        As of 23 November 2026, registered nurses (NOC 31301) and licensed practical nurses (NOC 32101)
        are on IRCC’s healthcare list for Express Entry. IRCC held three healthcare rounds in 2026, the
        latest on 4 September.
      </p>

      <h2>Why are the licence and permanent residence separate?</h2>
      <p>
        Each province regulates nursing, while IRCC handles immigration. IRCC’s{' '}
        <a href={IRCC_ECA} rel="noopener noreferrer" target="_blank" className={a}>
          ECA page
        </a>{' '}
        says an assessment of your degree does not guarantee a licence. For a regulated job, you must get
        the licence in the province or territory where you settle.
      </p>
      <p>
        Regulators work the other way round. Ontario’s College of Nurses (CNO) asks for{' '}
        <a href={CNO_AUTH} rel="noopener noreferrer" target="_blank" className={a}>
          proof of citizenship, permanent residence or a permit
        </a>{' '}
        that lets you practise nursing in Ontario. Without one, CNO can register you on condition that
        you do not practise until you provide it.
      </p>
      <p>
        So the two applications run side by side. The National Nursing Assessment Service (NNAS){' '}
        <a href={NNAS_PROCESS} rel="noopener noreferrer" target="_blank" className={a}>
          advises
        </a>{' '}
        starting its process before, or at the same time as, your immigration process.
      </p>

      <h2>Where does NNAS fit, and does every province use it?</h2>
      <p>
        NNAS collects and verifies nursing documents, then sends an Advisory Report to the regulators you
        choose. Its{' '}
        <a href={NNAS_ROLE} rel="noopener noreferrer" target="_blank" className={a}>
          own page
        </a>{' '}
        says it does not grant licences or decide them. Its reports are accepted by every nursing
        regulator in Canada except those in Québec and the territories.
      </p>
      <p>
        The{' '}
        <a href={NNAS_EXPEDITED} rel="noopener noreferrer" target="_blank" className={a}>
          Expedited Service
        </a>{' '}
        starts registered and licensed practical nursing in one application. You qualify if you completed
        college or university nursing education abroad and have been licensed as a nurse outside Canada.
        It asks for a course-by-course report from an IRCC-designated body, such as WES, ICAS or ICES.
      </p>
      <p>
        Two large provinces now also use other routes. CNO verifies education through{' '}
        <a href={CNO_ECA} rel="noopener noreferrer" target="_blank" className={a}>
          WES, ICAS or ICES
        </a>
        , and says it still accepts NNAS expedited reports. British Columbia uses Inspire Global
        Assessments, which accepts an education report from WES, ICAS, ICES, CES or NNAS. NNAS says CES
        is winding down, so check its status before you choose it.
      </p>
      <p>
        A licensing report is not your immigration ECA, which IRCC says must be “for immigration purposes”.{' '}
        <a href={WES_CNO} rel="noopener noreferrer" target="_blank" className={a}>
          WES’s instructions for Ontario nurses
        </a>{' '}
        treat its ECA for IRCC and its licensing report as separate reports. The ECA is covered in our{' '}
        <Link href="/express-entry/credential-assessment" className={a}>
          credential assessment guide
        </Link>
        .
      </p>

      <h2>Which documents must come from Pakistan?</h2>
      <p>
        Most NNAS documents must reach it from third parties, not from you. For the Expedited Service,
        the authorities that issued your first and current nursing licences complete NNAS’s form and
        send it directly. NNAS{' '}
        <a href={NNAS_DOCS} rel="noopener noreferrer" target="_blank" className={a}>
          adds
        </a>{' '}
        that if you were licensed as a midwife before you were licensed as a nurse, your first licence is
        the nursing one.
      </p>
      <p>
        In Pakistan, that authority is the{' '}
        <a href={PNMC} rel="noopener noreferrer" target="_blank" className={a}>
          Pakistan Nursing and Midwifery Council
        </a>{' '}
        (PNMC), which registers and licenses nurses to practise. Its{' '}
        <a href={PNMC_VERIFY} rel="noopener noreferrer" target="_blank" className={a}>
          verification page
        </a>{' '}
        offers a Verification of Registration or Good Standing Certificate for foreign regulators.
      </p>
      <p>
        For that, PNMC asks for its application form and fee, and the receiving regulator’s form or full
        address. It also wants copies of your registration card and all your nursing, midwifery and LHV
        diplomas and degrees. CNO and BCCNM likewise want employer and regulator forms sent straight from
        the source.
      </p>

      <h2>What do Ontario and British Columbia ask for?</h2>
      <p>
        <strong>Ontario:</strong> CNO’s{' '}
        <a href={CNO_GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          guide for nurses educated outside Canada
        </a>{' '}
        starts with nursing education, recent practice and a registration exam. It adds transition to
        practice, a jurisprudence exam, English or French, and authorisation to work. You also declare
        past offences, health and conduct, and submit a police criminal record check.
      </p>
      <p>
        Registered nurses sit the NCLEX-RN and practical nurses the REx-PN. CNO{' '}
        <a href={CNO_NEXT} rel="noopener noreferrer" target="_blank" className={a}>
          says
        </a>{' '}
        RN education must meet a nursing baccalaureate, and practical nursing a diploma. Our suggestion:
        if you hold a nursing diploma, ask CNO which class it fits before you plan around RN registration.
      </p>
      <p>
        Watch the letters. In Ontario, RPN means registered practical nurse, NOC 32101. In Manitoba,
        Saskatchewan, Alberta and British Columbia it can mean registered psychiatric nurse, part of{' '}
        <a href={NOC_31301} rel="noopener noreferrer" target="_blank" className={a}>
          NOC 31301
        </a>
        .
      </p>
      <p>
        <strong>British Columbia:</strong> the British Columbia College of Nurses and Midwives (BCCNM){' '}
        <a href={BCCNM} rel="noopener noreferrer" target="_blank" className={a}>
          recommends
        </a>{' '}
        applying to Inspire and BCCNM at the same time. Inspire checks your identity, English, education
        and nursing competence. BCCNM then assesses most nurses for LPN and RN licensure together,
        and says extra education will likely be needed before the exam.
      </p>
      <p>
        Inspire{' '}
        <a href={INSPIRE_BC} rel="noopener noreferrer" target="_blank" className={a}>
          warns
        </a>{' '}
        that you may have to come to Vancouver for an in-person assessment, and must arrange any visa
        yourself. Pakistani citizens need a{' '}
        <a href={IRCC_VISA} rel="noopener noreferrer" target="_blank" className={a}>
          visitor visa
        </a>{' '}
        for that trip; see our{' '}
        <Link href="/canada-visit-visa" className={a}>
          visitor visa guide
        </Link>
        .
      </p>
      <p>
        Other provinces set their own steps, so read your regulator’s page. CNO and BCCNM both say you
        must make the application yourself. BCCNM warns against agencies offering to complete BCCNM or
        Inspire applications for a fee.
      </p>

      <h2>Which English test counts, and for whom?</h2>
      <p>
        The lists do not match. As read on 23 November 2026, on{' '}
        <a href={IRCC_TESTS} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s
        </a>
        ,{' '}
        <a href={CNO_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          CNO’s
        </a>{' '}
        and{' '}
        <a href={INSPIRE_ELP} rel="noopener noreferrer" target="_blank" className={a}>
          Inspire’s
        </a>{' '}
        pages:
      </p>
      <div role="region" aria-label="Language tests accepted by IRCC for Express Entry, by CNO in Ontario and by Inspire for BCCNM in British Columbia, as read on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Language tests accepted by IRCC for Express Entry, by CNO in Ontario and by Inspire for BCCNM in British Columbia, as read on 23 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Test</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">IRCC (Express Entry)</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">CNO (Ontario)</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Inspire (B.C.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {TESTS.map(([test, ircc, cno, bc]) => (
              <tr key={test}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{test}</th>
                <td className="px-3 py-3 sm:px-4">{ircc}</td>
                <td className="px-3 py-3 sm:px-4">{cno}</td>
                <td className="px-3 py-3 sm:px-4">{bc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        CNO says it accepts tests approved for immigration once it has set its own benchmark for them,
        and that benchmark may differ from IRCC’s.
        Choosing between IRCC’s tests is covered in{' '}
        <Link href="/blog/ielts-pte-core-celpip-pakistan" className={a}>
          IELTS, PTE Core or CELPIP from Pakistan
        </Link>
        .
      </p>
      <p>
        Our suggestion: if you are heading to British Columbia, you may need two tests. Inspire takes
        IELTS and PTE only in their Academic versions, while IRCC takes IELTS only as General Training and
        PTE only as PTE Core. IRCC also accepts CELPIP-General, which Inspire does not list.
      </p>

      <h2>Is nursing on IRCC’s healthcare list, and how did 2026 go?</h2>
      <p>
        Yes. On 23 November 2026, IRCC’s{' '}
        <a href={CATEGORY} rel="noopener noreferrer" target="_blank" className={a}>
          Healthcare and social services occupations
        </a>{' '}
        category included these five nursing codes from NOC 2021:
      </p>
      <ul>
        {NURSING_CODES.map(([code, title, teer]) => (
          <li key={code}>
            <strong>{code}</strong> {title} (TEER {teer})
          </li>
        ))}
      </ul>
      <p>
        The code follows your duties, not your job title, as our{' '}
        <Link href="/express-entry/noc-codes" className={a}>
          NOC codes guide
        </Link>{' '}
        explains. The{' '}
        <a href={MI_441} rel="noopener noreferrer" target="_blank" className={a}>
          instructions
        </a>{' '}
        for each 2026 round required at least one year of full-time work, or the part-time equivalent, in
        one listed occupation. That work had to fall within the previous three years.
      </p>
      <p>
        IRCC’s category page says that work can be in Canada or abroad. Its{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds record
        </a>{' '}
        shows three healthcare rounds in 2026, each open to Federal Skilled Worker, Canadian Experience
        Class and Federal Skilled Trades candidates:
      </p>
      <div role="region" aria-label="Express Entry healthcare and social services rounds in 2026, from IRCC’s rounds data as read on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Express Entry healthcare and social services rounds in 2026, from IRCC’s rounds data as read on 23 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Round</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Invitations</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Lowest score invited</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROUNDS_2026.map(([date, round, invited, crs]) => (
              <tr key={round}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{date}</th>
                <td className="hidden px-4 py-3 tabular-nums sm:table-cell">{round}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{invited}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{crs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Those scores were set under the points in force before IRCC’s 3 November 2026 change. A past
        cut-off commits IRCC to nothing, and a category can be revised. How these rounds work is in our
        guide to{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          Express Entry category-based draws
        </Link>
        .
      </p>

      <h2>Do any provinces have streams for nurses?</h2>
      <p>
        Alberta and British Columbia name nurses directly, and both streams need a job offer in that
        province. Saskatchewan’s Health Talent Pathway also names nurses; see{' '}
        <Link href="/blog/saskatchewan-sinp-2026" className={a}>
          the SINP in 2026
        </Link>
        .
        Alberta’s{' '}
        <a href={ALBERTA} rel="noopener noreferrer" target="_blank" className={a}>
          Dedicated Health Care Pathway
        </a>{' '}
        lists registered and licensed practical nurses. It needs a job offer from an Alberta health-sector
        employer, and proof that you meet the regulator’s minimum requirements to practise.
      </p>
      <p>
        British Columbia’s{' '}
        <a href={BC_SKILLS} rel="noopener noreferrer" target="_blank" className={a}>
          Health Authority stream
        </a>{' '}
        needs a full-time, indeterminate job offer from a B.C. health authority. Its{' '}
        <a href={BC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          eligible occupations
        </a>{' '}
        include all five nursing codes above. Both provinces offer an Express Entry option.
      </p>
      <p>
        Start with your regulator and your PNMC verification, alongside immigration, as NNAS advises.
        Then check whether your work fits the healthcare category, using our guide to{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          Express Entry category-based draws
        </Link>
        .
      </p>
    </>
  );
}
