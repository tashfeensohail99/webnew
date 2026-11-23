import Link from 'next/link';

/**
 * Published 23 November 2026 on the owner's request of the same day. Every page
 * below was read on 23 November 2026.
 *
 * IRCC: Live and work as a medical doctor in Canada (page details 2026-10-19), its
 * "haven't worked in Canada" page (2025-12-23) and "experience in Canada" page
 * (2026-10-19); Express Entry category-based selection (2026-11-18); Educational
 * Credential Assessment (2026-10-16); language tests (2026-10-16); the news
 * releases of 8 December 2025 and 18 February 2026. Ministerial Instructions for
 * rounds 397, 398, 421, 422, 440 and 441, read from the JSON files IRCC's rounds
 * pages load (the pages build their tables by script). Statistics Canada: NOC
 * 2021 Version 1.0, unit group 31102 (modified 2024-09-11) and major group 31.
 * Not printed on purpose: the 5,000 reserved nomination spaces and the 14-day
 * work-permit processing (IRCC web pages only, not law).
 *
 * Licensing: MCC pages on pathways for IMGs (last updated 21 July 2026),
 * acceptable schools, source verification, the MCCQE and its eligibility, LMCC,
 * ECA, Practice-Ready Assessment, pre-arrival steps (May 2025) and fees; CaRMS
 * R-1 eligibility for IMGs; the Royal College's approved jurisdictions; CPSBC's
 * assessment-class and certificate-of-professional-conduct pages; CPSA's PRA
 * page; the World Directory search page; PMDC Registration Regulations 2023,
 * regs 25 and 26. CPSO's pages were behind a bot check and were not read: the
 * post says nothing about Ontario beyond what MCC says.
 *
 * Figures printed: one year in three years (category Ministerial Instructions),
 * the round results (Ministerial Instructions for each round), six months
 * (PMDC regulation 25). No fees, wages, processing times, attempt limits or
 * programme lengths: those are only on web pages, so the post links them.
 *
 * Our own suggestions, not any body's: checking the World Directory listing
 * before paying for anything else, and asking the college whether it accepts
 * PMDC's good-standing certificate (CPSBC asks for certificates from each
 * jurisdiction practised in but does not name PMDC). Re-check the category list
 * and rounds monthly.
 */
const a = 'font-semibold';

const IRCC_DOCTORS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors.html';
const IRCC_NO_EXP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors/no-experience.html';
const IRCC_EXP =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors/experience.html';
const IRCC_NEWS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2025/12/targeted-immigration-measures-to-boost-canadas-supply-of-doctors.html';
const CATEGORIES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const ROUNDS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html';
const IRCC_ECA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html';
const IRCC_LANG =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const NOC_31102 =
  'https://www23.statcan.gc.ca/imdb/p3VD.pl?CLV=5&CPV=31102&CST=01052021&CVD=1322870&Function=getVD&MLV=5&TVD=1322554';
const MCC_PATHWAYS =
  'https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/';
const MCC_SCHOOLS =
  'https://mcc.ca/credentials-and-services/pathways-to-licensure/acceptable-medical-schools-and-medical-degrees/';
const MCC_SVR = 'https://mcc.ca/credentials-and-services/services/verification-of-credentials/';
const MCC_MCCQE = 'https://mcc.ca/examinations-assessments/mccqe/';
const MCC_LMCC = 'https://mcc.ca/credentials-and-services/pathways-to-licensure/lmcc/';
const MCC_ECA = 'https://mcc.ca/credentials-and-services/services/educational-credential-assessment/';
const MCC_PRA = 'https://mcc.ca/examinations-assessments/practice-ready-assessment/';
const MCC_PREARRIVAL =
  'https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/supporting-itps-before-arrival-in-canada/';
const MCC_FEES = 'https://mcc.ca/fees/';
const WDOMS = 'https://search.wdoms.org/';
const CARMS = 'https://www.carms.ca/match/r-1-main-residency-match/eligibility-criteria/';
const RCPSC_AJR =
  'https://www.royalcollege.ca/en/eligibility-and-exams/exam-eligibility/approved-jurisdiction-route/approved-jurisdictions.html';
const CPSBC_ASSESS = 'https://www.cpsbc.ca/licensees/licensing/itp/assessment';
const CPSBC_CPC = 'https://www.cpsbc.ca/registrants/current-registrants/registration-and-licensing/cpc';
const CPSA_PRA = 'https://cpsa.ca/physicians/registration/apply-to-practise/independent-practice/pra/';
const PMDC_REGS = 'https://pmdc.pk/Documents/law/Registration%20Regulations%202023.pdf';

/** MCC's description of each route, with what its own page or the linked body adds. */
const ROUTES: [string, string, string][] = [
  [
    'CaRMS residency match',
    'Graduates without postgraduate training, or trained abroad and willing to retrain',
    'Usually needs passes in the NAC exam and the MCCQE, and Canadian citizenship or PR. British Columbia, Alberta and Quebec need a provincial assessment first.',
  ],
  [
    'Practice-Ready Assessment',
    'Doctors who finished residency and practised independently abroad',
    'A supervised clinical assessment run by a province. Those who pass sign a return-of-service agreement to work in an area of need in that province.',
  ],
  [
    'Practice Eligibility Route',
    'Specialists who finished postgraduate training abroad in a recognised primary specialty',
    'MCC links to the Royal College of Physicians and Surgeons of Canada for the details.',
  ],
  [
    'Approved jurisdictions',
    'Doctors trained in jurisdictions deemed substantially equivalent to Canada',
    'Pakistan was not on the Royal College’s list on 23 November 2026. The training must be completed in the approved country.',
  ],
];

/** IRCC rounds data, read 23 November 2026. Each round's Ministerial Instructions set its size. */
const DRAWS: [string, string, string, string][] = [
  ['19 February 2026', 'Physicians with Canadian work experience', '391', '169'],
  ['20 February 2026', 'Healthcare and social services', '4,000', '467'],
  ['24 June 2026', 'Physicians with Canadian work experience', '271', '223'],
  ['25 June 2026', 'Healthcare and social services', '4,000', '475'],
  ['3 September 2026', 'Physicians with Canadian work experience', '229', '198'],
  ['4 September 2026', 'Healthcare and social services', '3,500', '475'],
];

export default function PakistaniDoctorsCanada() {
  return (
    <>
      <p>
        <strong>
          For an MBBS doctor from Pakistan, the licence to practise and permanent residence (PR) are
          separate tracks, run by different bodies.
        </strong>{' '}
        A provincial or territorial regulator grants the licence, usually after Medical Council of Canada
        (MCC) checks and exams. IRCC grants PR, and on 23 November 2026 its Express Entry healthcare category
        counted doctors’ work done outside Canada.
      </p>

      <h2>Why are the licence and PR separate?</h2>
      <p>
        IRCC’s{' '}
        <a href={IRCC_DOCTORS} rel="noopener noreferrer" target="_blank" className={a}>
          page for medical doctors
        </a>{' '}
        says you must first have your credentials assessed and be licensed by a provincial or
        territorial regulator. Its{' '}
        <a href={IRCC_NEWS} rel="noopener noreferrer" target="_blank" className={a}>
          December 2025 announcement
        </a>{' '}
        adds that credential recognition and licensing are each province’s responsibility. MCC says its
        credential report for immigration does not give you the right to practise either.
      </p>
      <p>
        The tracks still depend on each other. CaRMS, which matches doctors to residency posts, requires
        Canadian citizenship or PR, with some exceptions. MCC’s{' '}
        <a href={MCC_PREARRIVAL} rel="noopener noreferrer" target="_blank" className={a}>
          pre-arrival guidance
        </a>{' '}
        says a valid immigration status is also needed for some practice-ready routes.
      </p>

      <h2>Is your medical college on the list Canada uses?</h2>
      <p>
        MCC’s{' '}
        <a href={MCC_SCHOOLS} rel="noopener noreferrer" target="_blank" className={a}>
          acceptable schools page
        </a>{' '}
        accepts an international degree only from a school in the World Directory of Medical Schools
        with a Canada sponsor note. Your graduation date must fall within the years given in the school’s
        ECFMG sponsor note. The degree title must also be in the Reference Guide for Medical Education Credentials.
      </p>
      <p>
        The{' '}
        <a href={WDOMS} rel="noopener noreferrer" target="_blank" className={a}>
          directory’s search
        </a>{' '}
        lets you choose Pakistan and type your college’s name. It warns that a listing alone does not
        mean recognition. Our suggestion: confirm the Canada sponsor note before you pay for anything
        else.
      </p>

      <h2>What happens on physiciansapply.ca?</h2>
      <p>
        MCC’s services and exams run through a physiciansapply.ca account. The first step is a{' '}
        <a href={MCC_SVR} rel="noopener noreferrer" target="_blank" className={a}>
          source verification request
        </a>{' '}
        for your degree. MCC and ECFMG, a division of Intealth, send it to the institution that issued
        it, which must confirm it is genuine.
      </p>
      <p>
        For you, that institution is your university or college in Pakistan. MCC says response times
        vary and cannot be guaranteed, so it advises applying early and following up with the
        institution yourself. If you plan to practise only in Ontario, MCC says to ask Ontario’s
        college, the CPSO, for verification instead.
      </p>
      <p>
        Once that request is submitted and paid for, you can apply for the{' '}
        <a href={MCC_MCCQE} rel="noopener noreferrer" target="_blank" className={a}>
          MCCQE
        </a>
        , formerly the MCCQE Part I. It is a computer-based exam at Prometric test centres in Canada
        and abroad, and MCC limits the number of attempts. Since 26 January 2026,
        a pass and a source-verified degree are the main conditions for the{' '}
        <a href={MCC_LMCC} rel="noopener noreferrer" target="_blank" className={a}>
          LMCC
        </a>
        .
      </p>
      <p>
        MCC charges in Canadian dollars and takes Visa or MasterCard credit cards, including prepaid
        ones, but not debit cards. Its current amounts are on its{' '}
        <a href={MCC_FEES} rel="noopener noreferrer" target="_blank" className={a}>
          fees page
        </a>
        .
      </p>

      <h2>Which routes lead to a licence?</h2>
      <p>
        MCC’s{' '}
        <a href={MCC_PATHWAYS} rel="noopener noreferrer" target="_blank" className={a}>
          pathways page for international graduates
        </a>{' '}
        describes these routes and says others may exist. The last column adds detail from the{' '}
        <a href={CARMS} rel="noopener noreferrer" target="_blank" className={a}>
          CaRMS eligibility page
        </a>
        , MCC’s{' '}
        <a href={MCC_PRA} rel="noopener noreferrer" target="_blank" className={a}>
          PRA page
        </a>{' '}
        and the{' '}
        <a href={RCPSC_AJR} rel="noopener noreferrer" target="_blank" className={a}>
          Royal College’s list
        </a>
        .
      </p>
      <div role="region" aria-label="Routes to a medical licence in Canada for international medical graduates, as described on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Routes to a medical licence in Canada for international medical graduates, as described on 23 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Route</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Who it is for</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What to know</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROUTES.map(([route, who, note]) => (
              <tr key={route}>
                <th scope="row" className="px-3 py-3 align-top font-medium text-ink-900 sm:px-4">{route}</th>
                <td className="px-3 py-3 align-top sm:px-4">{who}</td>
                <td className="px-3 py-3 align-top sm:px-4">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        On 23 November 2026, MCC listed practice-ready programmes in every province except Prince
        Edward Island, and in none of the territories.
      </p>

      <h2>What do provincial colleges ask for?</h2>
      <p>
        In British Columbia, the{' '}
        <a href={CPSBC_ASSESS} rel="noopener noreferrer" target="_blank" className={a}>
          assessment licence
        </a>{' '}
        lets selected family doctors take PRA-BC, and only PRA-BC can refer you for it. Applicants need
        a listed school with a Canadian sponsor note, and training abroad that led to recognition as a
        family physician there. They also need English proficiency, and citizenship, PR or the right to
        live and work in BC.
      </p>
      <p>
        CPSBC also asks licence applicants for{' '}
        <a href={CPSBC_CPC} rel="noopener noreferrer" target="_blank" className={a}>
          certificates of professional conduct
        </a>{' '}
        from every jurisdiction where they have practised. In Pakistan, the Pakistan Medical and Dental
        Council (PMDC) keeps the register of doctors. Our suggestion: ask the college whether it
        accepts PMDC’s good-standing certificate.
      </p>
      <p>
        PMDC’s{' '}
        <a href={PMDC_REGS} rel="noopener noreferrer" target="_blank" className={a}>
          Registration Regulations 2023
        </a>{' '}
        say that certificate is valid for six months. Each one is issued for a single foreign regulator,
        which you name when you apply.
      </p>
      <p>
        Other colleges differ. In Alberta, you do not apply for a{' '}
        <a href={CPSA_PRA} rel="noopener noreferrer" target="_blank" className={a}>
          practice readiness assessment
        </a>{' '}
        yourself. CPSA first reviews your qualifications through physiciansapply.ca; you then need a
        sponsored job and, for family medicine, a pass in the TDM exam.
      </p>
      <p>
        Licensing and immigration also use different English tests. MCC says most provincial
        programmes accept IELTS Academic, OET Medicine or CELPIP-General, while IRCC’s{' '}
        <a href={IRCC_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          Express Entry test list
        </a>{' '}
        takes IELTS only as General Training and does not include OET. CELPIP-General is on both lists.
      </p>

      <h2>Can Express Entry work before you are licensed?</h2>
      <p>
        IRCC’s{' '}
        <a href={IRCC_NO_EXP} rel="noopener noreferrer" target="_blank" className={a}>
          page for doctors who have not worked in Canada
        </a>{' '}
        suggests Express Entry to those with experience as a doctor. You must qualify for one of its
        three programmes, and it is the option IRCC lists for doctors with no Canadian job offer yet.
      </p>
      <p>
        The healthcare and social services{' '}
        <a href={CATEGORIES} rel="noopener noreferrer" target="_blank" className={a}>
          category
        </a>{' '}
        counts work in Canada or abroad. The Ministerial Instructions for its 4 September 2026 round
        required one year of full-time work, or the equivalent, in the previous three years. The work had
        to match one listed occupation’s NOC lead statement and a substantial number of its main duties,
        including all essential ones.
      </p>
      <p>
        The list included specialists in clinical and laboratory medicine (31100), specialists in
        surgery (31101), and general practitioners and family physicians (31102). Statistics Canada
        gives “medical doctor” as an{' '}
        <a href={NOC_31102} rel="noopener noreferrer" target="_blank" className={a}>
          example title for 31102
        </a>
        . Matching your duties to the right code is covered in our{' '}
        <Link href="/express-entry/noc-codes" className={a}>
          NOC code guide
        </Link>
        .
      </p>
      <p>
        The physicians category, new in 2026, is narrower: IRCC’s{' '}
        <a href={IRCC_EXP} rel="noopener noreferrer" target="_blank" className={a}>
          page for doctors with Canadian experience
        </a>{' '}
        and the round instructions require the year to be worked in Canada. How categories filter the
        pool, and why you cannot choose one, is in{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          Express Entry category-based draws
        </Link>
        .
      </p>
      <p>
        Your Educational Credential Assessment (ECA) for Express Entry also comes from MCC:{' '}
        <a href={IRCC_ECA} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC says
        </a>{' '}
        a doctor whose primary occupation is 31100, 31101 or 31102 must use it. MCC issues{' '}
        <a href={MCC_ECA} rel="noopener noreferrer" target="_blank" className={a}>
          its report
        </a>{' '}
        only after source verification of your degree, or of a transcript confirming it, so one check
        serves both tracks. The rest of the ECA process is in our{' '}
        <Link href="/express-entry/credential-assessment" className={a}>
          credential assessment guide
        </Link>
        .
      </p>
      <p>
        With a job offer or letter of support, IRCC points doctors to provincial nomination instead.
        Provinces have federal spaces reserved for nominating doctors, and nominated doctors can get
        faster work-permit processing.
      </p>

      <h2>How have the 2026 rounds for doctors gone?</h2>
      <p>
        IRCC’s{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds of invitations
        </a>{' '}
        listed these category rounds in 2026, as of 23 November 2026:
      </p>
      <div role="region" aria-label="Express Entry healthcare and physician category rounds in 2026, from IRCC’s rounds data as of 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Express Entry healthcare and physician category rounds in 2026, from IRCC’s rounds data as of 23 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Category</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Invitations</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Lowest CRS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {DRAWS.map(([date, cat, n, crs]) => (
              <tr key={date}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{date}</th>
                <td className="px-3 py-3 sm:px-4">{cat}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{n}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{crs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The physician rounds needed Canadian experience, so they were not open to doctors whose work is
        all in Pakistan. IRCC says it may skip a category round when enough eligible candidates are
        invited through other rounds. Past rounds are no promise of future ones.
      </p>
      <p>
        The licence and PR tracks each have their own steps, and both can start from Pakistan. How
        category rounds choose who is invited is explained in our guide to{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          Express Entry category-based draws
        </Link>
        .
      </p>
    </>
  );
}
