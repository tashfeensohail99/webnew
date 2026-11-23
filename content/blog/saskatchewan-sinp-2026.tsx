import Link from 'next/link';

/**
 * Written 23 November 2026 from saskatchewan.ca as it stood that day: the SINP
 * International Skilled Worker pages (Employment Offer, Occupation In-Demand,
 * Saskatchewan Express Entry, the Health, Agriculture and Innovation and Tech
 * Talent Pathways, the EOI System page and the Procedures and Guidelines last
 * updated 29 April 2026), Assess Your Eligibility (the points grid), the
 * Immigration FAQs (updated 19 December 2025), SINP Processing Statistics,
 * Obtain SINP Approval for the Job Position, Occupation Restrictions and
 * Requirements, the news release of 27 March 2025, and the ministry's 2025-26
 * annual report. IRCC only for the federal step.
 *
 * Figures: the $500 and $250 fees are set by s. 29 of The Immigration Services
 * Regulations (SR 70/2024), as replaced by s. 8 of SR 13/2026 (filed 13 March
 * 2026, in force 1 April 2026, Saskatchewan Gazette Part II, 20 March 2026). The
 * points (60, 110, 80, 30, 20, 5) are from the grid the province publishes. The
 * draw results, the 2025 nomination counts and the 2026 year-to-date counts are
 * Saskatchewan's own published statistics. The 600 points are set by s. 28(1)
 * of the Ministerial Instructions respecting the Express Entry system.
 * Processing times on the statistics page are left out.
 *
 * Our own reading: that the four job-offer sub-categories are the realistic
 * routes from Pakistan, and that an EOI profile alone is a long shot, are our
 * inferences from the draw record, the 27 March 2025 release and the EPA rules.
 * The province does not publish a list for Pakistan. Re-check monthly.
 */
const a = 'font-semibold';

const EOI = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-eoi-system';
const RESULTS = 'https://publications.saskatchewan.ca/api/v1/products/102708/formats/113850/download';
const GRID = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/assess-your-eligibility';
const RELEASE = 'https://www.saskatchewan.ca/government/news-and-media/2025/march/27/government-announces-end-to-temporary-sinp-pause';
const FAQS = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/immigration-faqs';
const STATS = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/sinp-processing-statistics';
const EPA = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/hire-a-foreign-worker/recruit-and-hire-workers-with-sinp/hiring-workers-for-permanent-jobs/obtain-sinp-approval-for-the-job-position';
const EXCLUDED = 'https://publications.saskatchewan.ca/api/v1/products/123540/formats/149130/download';
const PROCEDURES = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/procedures-and-guidelines';
const OFFER = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-with-employment-offer';
const HEALTH_POOL = 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-healthcare-worker-eoi-pool';
const REPORT = 'https://publications.saskatchewan.ca/api/v1/products/129306/formats/156017/download';
const REGS = 'https://publications.saskatchewan.ca/api/v1/products/124783/formats/145602/download';
const GAZETTE = 'https://publications.saskatchewan.ca/api/v1/products/128295/formats/153819/download';
const FEES_SUMMARY = 'https://www.saskatchewan.ca/-/media/news-release-backgrounders/2026/mar/backgrounder---summary-of-2026-27-fees-and-charges.pdf';
const IRCC_PNP = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';

const CHANGES: [string, string][] = [
  ['27 March 2025', 'Recruitment from abroad prioritised for health, agriculture and the skilled trades. Other sectors limited to temporary residents already in Canada.'],
  ['27 March 2025', 'Express Entry and Occupation In-Demand applications without a Saskatchewan job offer to be returned. Entrepreneur and Farm categories closed for good.'],
  ['19 December 2025', 'The SINP FAQ set out the 2026 plan: seven priority sectors, and caps on accommodation and food services, trucking and retail trade.'],
  ['1 April 2026', 'SR 13/2026 in force. The application fee now covers worker applications with or without a job offer, and a review fee was added.'],
  ['12 August 2026', 'Date of the current list of business types and occupations that cannot get job-offer approval.'],
];

const DRAWS: [string, string, string][] = [
  ['12 September 2024', '88 (32 invited)', '88 (57 invited)'],
  ['13 June 2024', '88 (32 invited)', '88 (88 invited)'],
  ['7 March 2024', '89 (14 invited)', '89 (21 invited)'],
];

export default function SaskatchewanSinp2026() {
  return (
    <>
      <p>
        <strong>
          For most people in Pakistan, the Saskatchewan Immigrant Nominee Program (SINP) is worth
          applying to only with a Saskatchewan job offer.
        </strong>{' '}
        The province’s published results show no draw from its no-job-offer pool since 12 September
        2024. As of 23 November 2026, the routes in use from abroad start with an approved job offer,
        with priority sectors such as healthcare first.
      </p>

      <h2>What changed in the Saskatchewan nominee program in 2025 and 2026?</h2>
      <p>
        Saskatchewan published each change in a{' '}
        <a href={RELEASE} rel="noopener noreferrer" target="_blank" className={a}>
          news release
        </a>
        , its{' '}
        <a href={FAQS} rel="noopener noreferrer" target="_blank" className={a}>
          Immigration FAQs
        </a>
        , a regulation or a dated list.
      </p>
      <div role="region" aria-label="Changes to the Saskatchewan Immigrant Nominee Program from March 2025 to August 2026, as published by Saskatchewan" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Changes to the Saskatchewan Immigrant Nominee Program from March 2025 to August 2026, as published by Saskatchewan</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What changed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CHANGES.map(([when, what]) => (
              <tr key={what}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{when}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Saskatchewan’s FAQ also explains why the SINP replaced Job Approval Forms with Employer Position
        Assessments (EPAs). The aim was less duplication and stronger programme integrity. You, the
        candidate, now confirm the employer’s job details online before you apply.
      </p>

      <h2>Is the SINP expression of interest pool still worth entering?</h2>
      <p>
        The{' '}
        <a href={EOI} rel="noopener noreferrer" target="_blank" className={a}>
          expression of interest (EOI) pool
        </a>{' '}
        serves the two sub-categories that need no job offer: Occupation In-Demand and Saskatchewan
        Express Entry. To enter, you need at least 60 of the 110 points on the province’s{' '}
        <a href={GRID} rel="noopener noreferrer" target="_blank" className={a}>
          points grid
        </a>
        .
      </p>
      <p>
        Education, work experience, language and age give up to 80 points. For these two
        sub-categories, a close relative living in Saskatchewan adds 20, and past work or study there
        adds 5 each.
      </p>
      <p>
        Saskatchewan’s{' '}
        <a href={RESULTS} rel="noopener noreferrer" target="_blank" className={a}>
          EOI selection results
        </a>{' '}
        list three draws in 2024, and none since:
      </p>
      <div role="region" aria-label="SINP International Skilled Worker EOI draws in 2024: lowest score invited and number invited" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">SINP International Skilled Worker EOI draws in 2024: lowest score invited and number invited</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Draw</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Occupation In-Demand: lowest score</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Saskatchewan Express Entry: lowest score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {DRAWS.map(([when, oid, ee]) => (
              <tr key={when}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{when}</th>
                <td className="whitespace-nowrap px-3 py-3 tabular-nums sm:px-4">{oid}</td>
                <td className="whitespace-nowrap px-3 py-3 tabular-nums sm:px-4">{ee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        On 23 November 2026, the EOI page said there were no scheduled draws. The 27 March 2025 release
        had already said applications in these two sub-categories without a Saskatchewan job offer would
        be returned.
      </p>
      <p>
        You can still submit a profile, and it stays valid for a year. On our reading, treat it as a
        long shot, not as an application in progress.
      </p>

      <h2>Which SINP routes can you use from Pakistan in 2026?</h2>
      <p>
        The International Skilled Worker{' '}
        <a href={PROCEDURES} rel="noopener noreferrer" target="_blank" className={a}>
          procedures
        </a>
        , last updated 29 April 2026, list six sub-categories. Four need a Saskatchewan job offer and
        accept applicants living abroad:
      </p>
      <ul>
        <li>
          <strong>Employment Offer:</strong> a permanent, full-time job at TEER 0–3, and at least 60
          points on the grid. Truck drivers must use the Existing Work Permit route, which needs work in
          Saskatchewan.
        </li>
        <li>
          <strong>Health Talent Pathway:</strong> physicians, nurses and other listed health
          occupations. Health jobs in NOC category 3 must use this pathway, not Employment Offer.
        </li>
        <li>
          <strong>Agriculture Talent Pathway:</strong> listed farm, greenhouse and food-processing jobs,
          with high school as the minimum education.
        </li>
        <li>
          <strong>Innovation and Tech Talent Pathway:</strong> listed technology, engineering and science
          occupations.
        </li>
      </ul>
      <p>
        Health workers without an offer can join the{' '}
        <a href={HEALTH_POOL} rel="noopener noreferrer" target="_blank" className={a}>
          International Healthcare Worker EOI pool
        </a>
        . Saskatchewan health employers may contact people whose occupation matches, but the pool is not
        an application.
      </p>
      <p>
        The Entrepreneur and Farm categories have been closed since 27 March 2025. The Saskatchewan
        Experience routes need work or study in the province. On our reading, the four job-offer
        sub-categories are the realistic routes from Pakistan. How the programme is shaped is in our{' '}
        <Link href="/pnp/saskatchewan" className={a}>
          Saskatchewan SINP guide
        </Link>
        .
      </p>

      <h2>What must a Saskatchewan job offer meet now?</h2>
      <p>
        The employer needs a Saskatchewan Certificate of Registration and an approved EPA for the
        position. You then confirm the details in OASIS, the SINP’s online system, before applying.
      </p>
      <p>
        On 23 November 2026, the{' '}
        <a href={EPA} rel="noopener noreferrer" target="_blank" className={a}>
          EPA rules
        </a>{' '}
        also required:
      </p>
      <ul>
        <li>a permanent, full-time job at a physical workplace in Saskatchewan, not from home;</li>
        <li>a fair wage, measured against Job Bank’s regional median wage for the occupation;</li>
        <li>a real vacancy, such as a post recently or soon to be vacated by a full-time employee;</li>
        <li>
          a business and occupation not on the{' '}
          <a href={EXCLUDED} rel="noopener noreferrer" target="_blank" className={a}>
            job-offer exclusion list
          </a>
          , dated 12 August 2026.
        </li>
      </ul>
      <p>
        Employers outside the capped sectors may name overseas candidates for recent vacancies. In
        accommodation and food services, retail trade and trucking, the candidate must be a current
        employee. Those jobs are therefore closed to someone still in Pakistan.
      </p>
      <p>
        The FAQ says it is illegal to ask a foreign worker to pay for a job. Read{' '}
        <Link href="/blog/fake-canada-job-offers-2026" className={a}>
          fake Canadian job offers in 2026
        </Link>{' '}
        before paying anyone who promises an offer.
      </p>

      <h2>How many people is Saskatchewan nominating?</h2>
      <p>
        The ministry’s{' '}
        <a href={REPORT} rel="noopener noreferrer" target="_blank" className={a}>
          2025–26 annual report
        </a>{' '}
        says the SINP issued 5,061 nominations in 2025, 4,799 of them to applicants with job offers. Of
        those nominees, it says, 95 per cent were temporary residents at the time of nomination.
      </p>
      <p>
        On 23 November 2026, the{' '}
        <a href={STATS} rel="noopener noreferrer" target="_blank" className={a}>
          processing statistics page
        </a>{' '}
        showed 4,023 nominations issued in 2026, against an allocation of 5,261. It is updated quarterly
        and leaves out applications still in process.
      </p>
      <p>
        On those figures, most places go to people already in Canada. An applicant in Pakistan competes
        for what is left, almost always with an employer behind them.
      </p>

      <h2>What does an SINP application from Pakistan involve?</h2>
      <p>
        Since 1 April 2026, a worker application costs $500 (Canadian), with or without a job offer.
        Section 29 of{' '}
        <a href={REGS} rel="noopener noreferrer" target="_blank" className={a}>
          The Immigration Services Regulations
        </a>
        , as replaced by{' '}
        <a href={GAZETTE} rel="noopener noreferrer" target="_blank" className={a}>
          SR 13/2026
        </a>
        , sets that non-refundable fee. A review of an ineligibility decision costs $250, refunded if
        the decision is reversed.
      </p>
      <p>
        Before then, applications with a job offer were free, according to the province’s{' '}
        <a href={FEES_SUMMARY} rel="noopener noreferrer" target="_blank" className={a}>
          2026–27 fees summary
        </a>
        .
      </p>
      <p>
        The{' '}
        <a href={OFFER} rel="noopener noreferrer" target="_blank" className={a}>
          Employment Offer page
        </a>{' '}
        asks for a reference letter for each job, plus one government-issued proof of that employment.
        Accepted proofs include provident fund, social security and income tax records.
      </p>
      <p>
        If you claim a Pakistani degree or diploma, expect to need an{' '}
        <Link href="/express-entry/credential-assessment" className={a}>
          educational credential assessment
        </Link>{' '}
        (ECA). Documents in Urdu need an English or French translation that meets the SINP’s translator
        rules. An incomplete application is closed and cannot be reopened.
      </p>
      <p>
        False information in an EOI or application can bring a suspension from the SINP of two to five
        years.
      </p>

      <h2>What happens after a Saskatchewan nomination?</h2>
      <p>
        A nomination is not permanent residence. You must apply to IRCC within six months of nomination, and IRCC
        checks health, security and criminal records. If you are not yet working for your employer, the
        nomination also requires you to apply for an employer-specific work permit.
      </p>
      <p>
        Through Express Entry, a nomination is worth 600 points under section 28(1) of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        . Saskatchewan Express Entry and the Health and Innovation and Tech Talent Pathways all have
        Express Entry versions. IRCC’s{' '}
        <a href={IRCC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          provincial nominee page
        </a>{' '}
        describes both federal routes.
      </p>
      <p>
        The federal side is in our{' '}
        <Link href="/express-entry" className={a}>
          Express Entry guide
        </Link>
        , and our{' '}
        <Link href="/pnp" className={a}>
          provincial nominee overview
        </Link>{' '}
        compares provinces. How Saskatchewan selects, and who it does not suit, is in our{' '}
        <Link href="/pnp/saskatchewan" className={a}>
          Saskatchewan SINP guide
        </Link>
        .
      </p>
    </>
  );
}
