import Link from 'next/link';

/**
 * Published 23 November 2026 on the owner's approval of the same day. Written
 * from Live in Nova Scotia (liveinnovascotia.com, the Government of Nova
 * Scotia's official immigration site) as it stood on 23 November 2026: the NSNP
 * page, the four stream pages, the Critical Vacancies and EOI Selection pages
 * (last updated 19 November 2026), and the programme updates of 17 July 2025,
 * 28 November 2025, 18 February 2026, 27 April 2026 (two), 14 July 2026 and
 * 6 August 2026. novascotiaimmigration.com, the old address, timed out.
 *
 * Figures: the two fees are printed because N.S. Reg. 181/2026 (Royal Gazette
 * Part II, 21 August 2026) sets them. The 600 points are set by s. 28(1) of the
 * Ministerial Instructions respecting the Express Entry system. The selection
 * counts are Nova Scotia's own published statistics. The entrepreneur net-worth
 * and investment minimums appear only on the stream page, so they are left out.
 *
 * Our own reading: the "realistic from Pakistan" list is our inference from the
 * 27 April and 14 July 2026 priorities and the stream criteria, not a list the
 * province publishes. Re-check monthly; NSNP priorities move without notice.
 */
const a = 'font-semibold';

const NSNP = 'https://liveinnovascotia.com/nova-scotia-nominee-program';
const SKILLED = 'https://liveinnovascotia.com/skilled-worker';
const ENTREPRENEUR = 'https://liveinnovascotia.com/entrepreneur';
const CONSOLIDATED = 'https://liveinnovascotia.com/resources/nsnp-update-four-consolidated-streams';
const EOI = 'https://liveinnovascotia.com/eoi-process';
const VALIDITY = 'https://liveinnovascotia.com/resources/expression-interest-eoi-validity-period-and-transition-measures';
const PRIORITIES = 'https://liveinnovascotia.com/resources/nominee-program-priorities-nova-scotia';
const JULY = 'https://liveinnovascotia.com/resources/update-nova-scotia-nominee-program-and-atlantic-immigration-program-2026-selection';
const FEES = 'https://liveinnovascotia.com/resources/nsnp-update-application-fees-effective-september-1-2026';
const SELECTION = 'https://liveinnovascotia.com/eoi-selection';
const CRITICAL = 'https://liveinnovascotia.com/critical-vacancies';
const REG = 'https://novascotia.ca/JuST/regulations/rg2/2026/RG2-2026-08-21.pdf';
const IRCC_PNP = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';

const CHANGES: [string, string][] = [
  ['17 July 2025', 'Nova Scotia said it had more applications than it could approve in 2025. Most applications from outside Canada in non-priority sectors would not be processed.'],
  ['28 November 2025', 'A formal expression of interest process for every NSNP stream, and for Atlantic Immigration Program designations and endorsements.'],
  ['18 February 2026', 'Ten streams merged into four. Nova Scotia said the old eligibility rules carried over as sub-criteria.'],
  ['27 April 2026', 'Selection priorities published: healthcare and skilled trades first.'],
  ['1 May 2026', 'New EOIs expire after 12 months. EOIs submitted before 1 May 2024 were closed.'],
  ['14 July 2026', 'A one-time wider selection for people already living and working in Nova Scotia.'],
  ['1 September 2026', 'Application fees, charged only once an EOI is selected for assessment.'],
];

const STREAMS: [string, string, string][] = [
  ['Skilled Worker', 'A full-time, permanent job offer from a Nova Scotia employer', 'Critical Construction Worker Pilot (now the Construction sub-criteria); Physician'],
  ['Nova Scotia Graduate', 'Recent study at a Nova Scotia institution, and a full-time, permanent Nova Scotia job offer in a listed occupation', 'International Graduates in Demand'],
  ['Entrepreneur', 'Starting or buying a Nova Scotia business; by invitation only', 'International Graduate Entrepreneur'],
  ['Nova Scotia: Express Entry', 'A year of work in Nova Scotia and an Express Entry profile, or the physician sub-criteria', 'Nova Scotia Experience: Express Entry; Labour Market Priorities; Labour Market Priorities for Physicians'],
];

export default function NovaScotiaNomineeProgram2026() {
  return (
    <>
      <p>
        <strong>
          Yes, but for most people in Pakistan the Nova Scotia Nominee Program (NSNP) now starts with a
          Nova Scotia job offer.
        </strong>{' '}
        On 18 February 2026 the province merged ten streams into four, and every stream now selects from
        an expression of interest (EOI) pool. As of 23 November 2026, its recruitment from abroad focuses
        on healthcare, skilled trades and selected critical-service jobs.
      </p>

      <h2>What changed in the Nova Scotia nominee program in 2025 and 2026?</h2>
      <p>
        Nova Scotia announced each change on its official immigration site, Live in Nova Scotia.
      </p>
      <div role="region" aria-label="Changes to the Nova Scotia Nominee Program from July 2025 to September 2026, as published by Nova Scotia" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Changes to the Nova Scotia Nominee Program from July 2025 to September 2026, as published by Nova Scotia</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What changed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CHANGES.map(([when, what]) => (
              <tr key={when}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{when}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Under the{' '}
        <a href={VALIDITY} rel="noopener noreferrer" target="_blank" className={a}>
          EOI validity rules
        </a>
        , EOIs submitted between 1 May 2024 and 30 April 2026 expire on 30 April 2027 if not selected.
        Nova Scotia says an expired or closed EOI is not a refusal. You may submit a new one if you still
        qualify.
      </p>

      <h2>Which NSNP streams are open, and what replaced the old ones?</h2>
      <p>
        As of 23 November 2026, the{' '}
        <Link href="/pnp/nova-scotia" className={a}>
          Nova Scotia Nominee Program
        </Link>{' '}
        has four streams. Nova Scotia’s{' '}
        <a href={CONSOLIDATED} rel="noopener noreferrer" target="_blank" className={a}>
          18 February 2026 update
        </a>{' '}
        lists the former streams each one absorbed.
      </p>
      <div role="region" aria-label="The four Nova Scotia Nominee Program streams as of 23 November 2026, what each needs, and the former streams merged into it" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">The four Nova Scotia Nominee Program streams as of 23 November 2026, what each needs, and the former streams merged into it</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Stream</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What it needs</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Former streams merged in</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {STREAMS.map(([stream, needs, former]) => (
              <tr key={stream}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{stream}</th>
                <td className="px-3 py-3 sm:px-4">{needs}</td>
                <td className="px-3 py-3 sm:px-4">{former}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The Skilled Worker page also keeps an Occupations in Demand tab, which listed no occupations on
        23 November 2026. The Nova Scotia Graduate stream was open to four occupations, in healthcare and
        early childhood education.
      </p>

      <h2>How does the provincial nominee program in Nova Scotia select candidates now?</h2>
      <p>
        You choose a stream and submit an EOI online, with all the required documents. Nova Scotia
        closes an incomplete EOI. A complete one enters a pool, and the province runs draws based on its{' '}
        <a href={EOI} rel="noopener noreferrer" target="_blank" className={a}>
          priorities and capacity
        </a>
        .
      </p>
      <p>
        The{' '}
        <a href={NSNP} rel="noopener noreferrer" target="_blank" className={a}>
          programme page
        </a>{' '}
        lists the factors, including labour market needs, occupation, likely retention, intended region
        and your status in Canada. Selection is not first come, first served. If selected, you have 7
        calendar days to review your application, upload updated documents and pay the fee.
      </p>
      <p>
        From 1 September 2026,{' '}
        <a href={REG} rel="noopener noreferrer" target="_blank" className={a}>
          N.S. Reg. 181/2026
        </a>{' '}
        sets the fee at $1,000 (Canadian) for a worker stream and $2,000 for an entrepreneur stream.
        Nova Scotia’s{' '}
        <a href={FEES} rel="noopener noreferrer" target="_blank" className={a}>
          fee notice
        </a>{' '}
        says submitting an EOI is free and the fee is non-refundable. It does not apply to the Atlantic
        Immigration Program.
      </p>
      <p>
        Nova Scotia’s{' '}
        <a href={SELECTION} rel="noopener noreferrer" target="_blank" className={a}>
          EOI selection page
        </a>
        , last updated 19 November 2026, counts 363 candidates selected in January 2026 and 1,296 in
        October 2026. It says most came from healthcare and skilled trades occupations.
      </p>

      <h2>What are the NSNP requirements for the Skilled Worker stream?</h2>
      <p>
        On 23 November 2026, the{' '}
        <a href={SKILLED} rel="noopener noreferrer" target="_blank" className={a}>
          Skilled Worker page
        </a>{' '}
        asked for:
      </p>
      <ul>
        <li>a full-time, permanent job offer from a Nova Scotia employer;</li>
        <li>1 year of work experience related to the job, plus six months already with the employer for a TEER 4 or 5 job;</li>
        <li>an age of 21 to 55, and a high school diploma;</li>
        <li>CLB 5 for a TEER 0–3 job, or CLB 4 for TEER 4–5, with test results even if English is your first language;</li>
        <li>enough financial resources to settle in Nova Scotia.</li>
      </ul>
      <p>
        The Construction sub-criteria cover a named list of construction-sector occupations. They accept
        industry training in place of a high school diploma. Physicians need an approved opportunity with
        the Nova Scotia Health Authority or the IWK Health Centre.
      </p>
      <p>
        One older limit still stands. Since 17 April 2024, Nova Scotia has stopped accepting submissions
        in the Accommodation and Food Services sector, which covers hotels and restaurants. The notice
        was still on the Skilled Worker page on 23 November 2026.
      </p>

      <h2>Can you use the Nova Scotia PNP from Pakistan?</h2>
      <p>
        Nova Scotia’s{' '}
        <a href={PRIORITIES} rel="noopener noreferrer" target="_blank" className={a}>
          27 April 2026 priorities
        </a>{' '}
        set the limits. Healthcare and skilled trades jobs at TEER 0–4 may be considered for
        international applicants. Other occupations are limited to temporary residents already living
        and working in Nova Scotia.
      </p>
      <p>
        The{' '}
        <a href={JULY} rel="noopener noreferrer" target="_blank" className={a}>
          14 July 2026 update
        </a>{' '}
        widened selection only for people already in the province. For recruitment from abroad, it kept
        the focus on healthcare, skilled trades and selected critical-service occupations.
      </p>
      <p>On our reading of those rules, these are the realistic routes from Pakistan:</p>
      <ul>
        <li>
          <strong>Skilled Worker</strong>, with a genuine Nova Scotia job offer in a priority occupation.
        </li>
        <li>
          <strong>Physicians</strong> with an approved Nova Scotia Health Authority or IWK opportunity,
          under Skilled Worker or Nova Scotia: Express Entry.
        </li>
        <li>
          <strong>Entrepreneur</strong>, if you are invited to apply.
        </li>
      </ul>
      <p>
        The main Nova Scotia: Express Entry route needs a year of work in Nova Scotia at TEER 0–3.
        Nova Scotia Graduate needs study there. The province also{' '}
        <a href={CRITICAL} rel="noopener noreferrer" target="_blank" className={a}>
          searches the Express Entry pool
        </a>{' '}
        for critical vacancies, but says that contact is not an invitation to apply for a nomination.
      </p>

      <h2>What does the Entrepreneur stream need, including the minimum net worth?</h2>
      <p>
        The{' '}
        <a href={ENTREPRENEUR} rel="noopener noreferrer" target="_blank" className={a}>
          Entrepreneur stream
        </a>{' '}
        is for experienced business owners or senior managers who start or buy a Nova Scotia business.
        You submit an EOI and may apply only after an Invitation to Apply. After running the business for
        a year, you may be nominated.
      </p>
      <p>
        On 23 November 2026 the page asked for an age of 21 or over and CLB 5 in all four skills. You also
        need 3 years owning and managing a business, with at least one-third ownership, or more than 5
        years in senior management.
      </p>
      <p>
        The page also sets a minimum net worth and a minimum personal investment, both lower for a
        business outside Halifax Regional Municipality. This post leaves those amounts out, because they
        are on the programme page rather than in a Nova Scotia regulation. Read them there on the day you
        apply.
      </p>

      <h2>What happens after a Nova Scotia nomination?</h2>
      <p>
        You apply to IRCC for permanent residence within 12 months of receiving the nominee certificate.
        You and your family must meet medical, security and criminal admissibility rules. IRCC makes the
        final decision.
      </p>
      <p>
        A nomination made through Express Entry is worth 600 points under section 28(1) of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        . The province tells you which IRCC route to use, and IRCC’s{' '}
        <a href={IRCC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          provincial nominee page
        </a>{' '}
        describes both.
      </p>
      <p>
        The federal side is in our{' '}
        <Link href="/express-entry" className={a}>
          Express Entry guide
        </Link>
        . With a Nova Scotia job offer, compare this route with the{' '}
        <Link href="/atlantic-immigration-program" className={a}>
          Atlantic Immigration Program
        </Link>
        , which had no provincial fee on 23 November 2026. How nomination works, and who it does not
        suit, is in our{' '}
        <Link href="/pnp/nova-scotia" className={a}>
          Nova Scotia Nominee Program guide
        </Link>
        .
      </p>
    </>
  );
}
