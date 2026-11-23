import Link from 'next/link';

/**
 * Published 23 November 2026 with the site owner's approval, given that day.
 * Read on 23 November 2026: IRCC's backgrounder of 16 October 2026, its
 * Express Entry job offer page (modified 2026-11-18), the current Ministerial
 * Instructions respecting the Express Entry system (s. 15.2), its news release
 * of 23 December 2024, its online-scams, unauthorized-work, fraud-consequences
 * and reporting pages, and its list of non-compliant employers (modified
 * 2026-11-18). ESDC's high-wage programme requirements (modified 2026-11-10),
 * workers' rights page and report-abuse page. IRPR ss. 200(3)(h), 209.2, 209.3
 * and 209.95, and IRPA s. 40, on Justice Laws (current to 2026-10-29). Job
 * Bank's safety tips, wage search and job search; the Canadian Anti-Fraud
 * Centre's job-scam and reporting pages; the FIA's complaint portal and its
 * Anti Human Trafficking and Smuggling Wing page.
 *
 * canada.ca times out on scripted downloads, so its pages were read through a
 * page-fetch tool, not saved. The CRS points are restated exactly as in
 * /blog/express-entry-november-2026-crs-change. No fee amounts are printed.
 * A news report of a Karachi "Canada work visa" arrest (30 September 2026) is
 * not used: no FIA statement on it was found.
 *
 * Our own suggestion, not any authority's: the order of the checks, finding the
 * employer's contact details yourself, keeping messages and receipts, paying
 * nothing more once you suspect a scam, and the point that a name missing from
 * the non-compliant list proves nothing.
 */
const a = 'font-semibold';

const BACKGROUNDER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html';
const JOB_OFFER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const RELEASE_2024 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2024/12/canada-takes-action-to-reduce-fraud-in-express-entry-system.html';
const ESDC_HIGH_WAGE =
  'https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage/high/requirements.html';
const ESDC_RIGHTS = 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/protected-rights.html';
const ESDC_REPORT = 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/report-abuse.html';
const IRPR_209_3 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.3.html';
const IRPR_209_2 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.2.html';
const IRPR_200 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-200.html';
const IRPR_209_95 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.95.html';
const IRPA_40 = 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html';
const NON_COMPLIANT =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/employers-non-compliant.html';
const SCAMS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html';
const UNAUTHORIZED_WORK =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement/consequences-unauthorized-work.html';
const CONSEQUENCES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html';
const REPORT = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html';
const JOB_BANK_SAFETY = 'https://www.jobbank.gc.ca/findajob/resources/safety-tips';
const JOB_BANK_WAGES = 'https://www.jobbank.gc.ca/trend-analysis/search-wages';
const JOB_BANK_SEARCH = 'https://www.jobbank.gc.ca/jobsearch';
const CAFC_JOBS = 'https://antifraudcentre-centreantifraude.ca/scams-fraudes/job-emploi-eng.htm';
const CAFC_REPORT = 'https://antifraudcentre-centreantifraude.ca/report-signalez-eng.htm';
const FIA_PORTAL = 'https://complaint.fia.gov.pk/';
const FIA_AHS = 'https://www.fia.gov.pk/fia-new/public/htsw';

type Source = [string, string];

const SIGNS: [string, string, string, Source[]][] = [
  [
    'Who pays',
    'The employer pays the LMIA fee and its own recruitment costs.',
    'You are asked to pay for the job offer or the LMIA.',
    [['ESDC', ESDC_HIGH_WAGE]],
  ],
  [
    'Promises',
    'Nobody promises you a visa. An IRCC officer decides.',
    'A guaranteed job or visa.',
    [['IRCC', SCAMS]],
  ],
  [
    'Pay',
    'A wage in line with the occupation and the city.',
    'A salary that seems too high to be real.',
    [
      ['IRCC', SCAMS],
      ['Job Bank', JOB_BANK_WAGES],
    ],
  ],
  [
    'The employer',
    'A real business with an official website and phone number you can check.',
    'Contact only through a web-based email, not a company domain.',
    [['CAFC', CAFC_JOBS]],
  ],
  [
    'How it reaches you',
    'An offer for a job you applied for.',
    'An offer you never applied for, or requests for documents or payment through social media.',
    [
      ['CAFC', CAFC_JOBS],
      ['IRCC', UNAUTHORIZED_WORK],
    ],
  ],
  [
    'Compliance record',
    'An employer that is not barred from hiring foreign workers.',
    'An employer on IRCC’s non-compliant list with a ban.',
    [
      ['IRCC', NON_COMPLIANT],
      ['Ministerial Instructions', MI],
    ],
  ],
  [
    'The paperwork',
    'A written offer that sets out the pay, duties and hours.',
    'Upfront deposits or fees before you start.',
    [
      ['IRCC', JOB_OFFER],
      ['CAFC', CAFC_JOBS],
    ],
  ],
];

export default function FakeCanadaJobOffers2026() {
  return (
    <>
      <p>
        <strong>No genuine Canadian employer can sell you a job offer or an LMIA.</strong> Since 3
        November 2026, an offer in an occupation on IRCC’s high-wage list can add 50, 70 or 100 CRS points
        without an LMIA. As of 23 November 2026, an officer must still find each offer genuine, and IRCC
        treats paying for one as a scam sign.
      </p>

      <h2>What changed for job offers on 3 November 2026?</h2>
      <p>
        IRCC’s{' '}
        <a href={BACKGROUNDER} rel="noopener noreferrer" target="_blank" className={a}>
          backgrounder of 16 October 2026
        </a>{' '}
        said that from 3 November an LMIA would not be required for a qualifying job offer. Its{' '}
        <a href={JOB_OFFER} rel="noopener noreferrer" target="_blank" className={a}>
          job offer page
        </a>{' '}
        now says an LMIA adds no points or priority. Points go only to offers in occupations on IRCC’s
        high-wage list, as our post on{' '}
        <Link href="/blog/express-entry-november-2026-crs-change" className={a}>
          the November CRS change
        </Link>{' '}
        explains.
      </p>
      <p>
        In spring 2025, IRCC had stopped giving points for job offers. Its{' '}
        <a href={RELEASE_2024} rel="noopener noreferrer" target="_blank" className={a}>
          news release
        </a>{' '}
        said the aim was to remove the incentive to illegally buy or sell LMIAs. The backgrounder says
        limiting the new points to high-wage occupations also supports verification.
      </p>
      <p>
        As of 23 November 2026, IRCC’s online profile still asks whether a positive LMIA was issued. The
        job offer page says the system has not caught up, and tells you what to enter. That question is
        no reason to buy an LMIA.
      </p>

      <h2>Can an employer or agent legally sell you a job offer or an LMIA?</h2>
      <p>
        No, because an LMIA is the employer’s own application to Employment and Social Development
        Canada (ESDC). ESDC’s{' '}
        <a href={ESDC_HIGH_WAGE} rel="noopener noreferrer" target="_blank" className={a}>
          requirements for high-wage positions
        </a>{' '}
        say the processing fee cannot be paid by or recovered from the worker. Nor can the employer charge
        you recruitment fees, directly or indirectly; ESDC says breaking this leads to a negative LMIA
        decision.
      </p>
      <p>
        <a href={IRPR_209_3} rel="noopener noreferrer" target="_blank" className={a}>
          Section 209.3
        </a>{' '}
        of the Immigration and Refugee Protection Regulations covers employers of LMIA work-permit
        holders. It bars them, while you work under the permit, from charging you or recovering from you
        the LMIA fee or recruitment fees. They must also make sure their recruiter charges you nothing for them.
      </p>
      <p>
        <a href={IRPR_209_2} rel="noopener noreferrer" target="_blank" className={a}>
          Section 209.2
        </a>{' '}
        sets a matching rule for employer-specific permits issued without an LMIA. The narrow exceptions
        include the government fees for your own visa and work permit. ESDC’s{' '}
        <a href={ESDC_RIGHTS} rel="noopener noreferrer" target="_blank" className={a}>
          rights page
        </a>{' '}
        tells foreign workers they pay only for their work permit, medical exam and biometrics, if
        required.
      </p>
      <p>
        IRCC lists anyone who{' '}
        <a href={UNAUTHORIZED_WORK} rel="noopener noreferrer" target="_blank" className={a}>
          promises you a work permit or job offer if you pay them
        </a>{' '}
        as a warning sign of a scam. Its{' '}
        <a href={CONSEQUENCES} rel="noopener noreferrer" target="_blank" className={a}>
          fraud page
        </a>{' '}
        counts false job offers as fraud. A finding of misrepresentation makes you inadmissible for five
        years under{' '}
        <a href={IRPA_40} rel="noopener noreferrer" target="_blank" className={a}>
          section 40 of the Act
        </a>
        .
      </p>
      <p>
        How a real LMIA works, and why only the employer can apply, is in our{' '}
        <Link href="/work-permits/lmia" className={a}>
          LMIA work permits guide
        </Link>
        .
      </p>

      <h2>How does IRCC decide whether an offer is genuine?</h2>
      <p>
        Under section 15.2 of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        , an offer counts only if an officer finds it genuine. The officer looks at whether the employer is
        actively in business, needs the role and can meet the offer’s terms. They also weigh the
        employer’s record with employment and recruitment laws.
      </p>
      <p>
        Your side is checked too. The officer must be satisfied, from your past work or education, that
        you can do the job and are likely to take it. The job offer page asks you to add supporting
        documents that show the offer is genuine.
      </p>
      <p>
        For offers in TEER 0 to 3 jobs and skilled trades, the same section shuts out employers named
        in{' '}
        <a href={IRPR_200} rel="noopener noreferrer" target="_blank" className={a}>
          section 200(3)(h)
        </a>{' '}
        of the Regulations. These are employers made ineligible under{' '}
        <a href={IRPR_209_95} rel="noopener noreferrer" target="_blank" className={a}>
          section 209.95
        </a>{' '}
        for breaking the rules on employing foreign workers, or in default on a penalty. An offer that is
        revoked stops counting.
      </p>

      <h2>What does a genuine offer look like, and what are the warning signs?</h2>
      <div role="region" aria-label="A genuine Canadian job offer compared with warning signs, from official sources read on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            A genuine Canadian job offer compared with warning signs, from official sources read on 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Check</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Genuine offer</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Warning sign</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {SIGNS.map(([check, genuine, warning, sources]) => (
              <tr key={check}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{check}</th>
                <td className="px-3 py-3 sm:px-4">{genuine}</td>
                <td className="px-3 py-3 sm:px-4">{warning}</td>
                <td className="px-3 py-3 sm:px-4">
                  {sources.map(([label, href], i) => (
                    <span key={href}>
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

      <h2>How can you check the employer and the job yourself?</h2>
      <ul>
        <li>
          <strong>Find the employer yourself.</strong> The Canadian Anti-Fraud Centre’s{' '}
          <a href={CAFC_JOBS} rel="noopener noreferrer" target="_blank" className={a}>
            job-scam page
          </a>{' '}
          advises checking the company’s official website and calling its official phone number. Look
          these up on your own, not from the seller’s message.
        </li>
        <li>
          <strong>Check IRCC’s list.</strong> IRCC publishes the{' '}
          <a href={NON_COMPLIANT} rel="noopener noreferrer" target="_blank" className={a}>
            employers found non-compliant
          </a>
          , some of them banned from hiring temporary workers for a period. A name missing from it does not
          prove an employer is genuine.
        </li>
        <li>
          <strong>Check the pay.</strong> Job Bank, the Government of Canada’s job site, has a{' '}
          <a href={JOB_BANK_WAGES} rel="noopener noreferrer" target="_blank" className={a}>
            wage search
          </a>{' '}
          by occupation and location. IRCC’s{' '}
          <a href={SCAMS} rel="noopener noreferrer" target="_blank" className={a}>
            scams page
          </a>{' '}
          warns about salaries that seem too high to be real.
        </li>
        <li>
          <strong>Check the advert.</strong> For a high-wage LMIA, ESDC requires the employer to advertise
          on Job Bank before applying. You can{' '}
          <a href={JOB_BANK_SEARCH} rel="noopener noreferrer" target="_blank" className={a}>
            search Job Bank
          </a>{' '}
          by keyword and location. Its{' '}
          <a href={JOB_BANK_SAFETY} rel="noopener noreferrer" target="_blank" className={a}>
            safety page
          </a>{' '}
          says Job Bank does not deal with immigration, so a posting is not a visa.
        </li>
        <li>
          <strong>Check the occupation.</strong> CRS points need an occupation on IRCC’s high-wage list.
          To see which code your own work fits, use{' '}
          <Link href="/express-entry/noc-codes" className={a}>
            finding your NOC code and TEER
          </Link>
          .
        </li>
      </ul>

      <h2>How do you check the person selling it?</h2>
      <p>
        Whatever they call themselves, a person who promises a job offer for money is showing IRCC’s
        warning sign. If they also offer to handle your application, check that they are allowed to charge
        you at all. Our guide on{' '}
        <Link href="/canadian-immigration-lawyer-pakistan" className={a}>
          how to check a representative
        </Link>{' '}
        shows the public registers to search.
      </p>
      <p>
        Who may charge you, and what Canada’s new penalties mean for you, are in our post on{' '}
        <Link href="/blog/canada-fines-unauthorised-immigration-agents" className={a}>
          Canada’s fines for unauthorised agents
        </Link>
        .
      </p>

      <h2>What should you do if you have been targeted?</h2>
      <ul>
        <li>
          <strong>Stop paying.</strong> Keep the messages, receipts and offer letter, because a report
          needs them.
        </li>
        <li>
          <strong>Report it in Canada.</strong> IRCC’s{' '}
          <a href={REPORT} rel="noopener noreferrer" target="_blank" className={a}>
            reporting page
          </a>{' '}
          points online scams to the Canadian Anti-Fraud Centre. It tells people outside Canada with fake
          documents to report there and to local police, among other steps. The Centre’s{' '}
          <a href={CAFC_REPORT} rel="noopener noreferrer" target="_blank" className={a}>
            reporting page
          </a>{' '}
          takes reports online from victims and witnesses.
        </li>
        <li>
          <strong>Report the employer.</strong> ESDC’s rights page says an employer cannot make you pay
          to get a job. Its{' '}
          <a href={ESDC_REPORT} rel="noopener noreferrer" target="_blank" className={a}>
            reporting page
          </a>{' '}
          says anyone can report abuse of the Temporary Foreign Worker Program.
        </li>
        <li>
          <strong>Report it in Pakistan.</strong> The FIA’s{' '}
          <a href={FIA_PORTAL} rel="noopener noreferrer" target="_blank" className={a}>
            online complaint portal
          </a>{' '}
          takes complaints about unlawful activity within its remit. Its{' '}
          <a href={FIA_AHS} rel="noopener noreferrer" target="_blank" className={a}>
            Anti Human Trafficking and Smuggling Wing
          </a>{' '}
          handles immigration, human trafficking and migrant smuggling crimes.
        </li>
      </ul>
      <p>
        How the employer’s side of an LMIA works, from recruitment to the decision, is in our{' '}
        <Link href="/work-permits/lmia" className={a}>
          LMIA work permits guide
        </Link>
        .
      </p>
    </>
  );
}
