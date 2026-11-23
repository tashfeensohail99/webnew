import Link from 'next/link';

/**
 * Published 23 November 2026. Written from the Government of Prince Edward
 * Island's Office of Immigration pages on princeedwardisland.ca as they stood on
 * 23 November 2026: Expression of Interest Draws (published 20 November 2026),
 * Anticipated Invitation to Apply Schedule (7 January 2026), Submit Your
 * Expression of Interest Profile (21 October 2026), the seven worker-stream pages
 * and the Work Permit Stream page, the Atlantic Immigration Program EOI
 * Endorsement page (5 November 2026) and International Recruitment Events; the
 * PEI Workforce Application Guide (January 2026); the population framework news
 * release (22 February 2024); and the 2025 Budget Paper on the Economy. The
 * site's pages block automated readers, so they were read in an ordinary browser.
 *
 * Figures: the invitation counts and draw dates are PEI's own published
 * statistics. The 600 points are set by s. 28(1) of the Ministerial Instructions
 * respecting the Express Entry system. The day limits and eligibility rules are
 * programme rules from PEI's pages and guide, printed as the Nova Scotia post
 * prints its programme rules. The application fees, the business net-worth
 * minimum and the size of the federal cut appear only on web pages or in a
 * budget paper, not in a PEI regulation, so they are left out.
 *
 * Our own reading: that a job offer from an employer PEI has approved is the
 * realistic route from Pakistan, and the "From Pakistan?" column of the streams
 * table, are our inferences from the stream criteria and the 2026 draws, not
 * statements PEI makes. Re-check monthly; PEI draws run monthly.
 */
const a = 'font-semibold';

const DRAWS = 'https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws';
const SCHEDULE =
  'https://www.princeedwardisland.ca/en/information/office-of-immigration/anticipated-invitation-to-apply-schedule';
const EOI = 'https://www.princeedwardisland.ca/en/service/submit-your-expression-of-interest-profile';
const OUTSIDE = 'https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-outside-canada';
const WORK_PERMIT = 'https://www.princeedwardisland.ca/en/information/office-of-immigration/work-permit-stream';
const WAG = 'https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf';
const AIP_PEI =
  'https://www.princeedwardisland.ca/en/information/office-of-immigration/atlantic-immigration-program-eoi-endorsement';
const EVENTS = 'https://www.princeedwardisland.ca/en/information/office-of-immigration/international-recruitment-events';
const FRAMEWORK =
  'https://www.princeedwardisland.ca/en/news/province-launches-peis-population-framework-and-introduces-measures-to-slow-down-population';
const BUDGET = 'https://www.princeedwardisland.ca/sites/default/files/publications/2025_budget_paper_on_the_economy.pdf';
const IRCC_PNP = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';

const CHANGES: [string, string][] = [
  ['22 February 2024', 'A population framework: PEI cut its use of federal nominations for 2024 and aligned the rest with priority sectors.'],
  ['Winter 2024', 'Ottawa cut provincial nominee numbers for 2025 to 2027, PEI’s 2025 budget paper says. It expected this to push nominees below its revised targets.'],
  ['1 November 2025', 'Invited candidates get 30 calendar days to submit a complete application, not 60. Late applications are not accepted.'],
  ['7 January 2026', 'A monthly invitation schedule for 2026. PEI says it does not guarantee selection.'],
  ['21 October 2026', 'New profile questions in every worker stream. People with a submitted profile are asked to log in and update it.'],
  ['5 November 2026', 'A new expression of interest system for Atlantic Immigration Program endorsements, in a soft launch.'],
];

const DRAW_ROWS: [string, string, string][] = [
  ['17 September 2026', '195', '0'],
  ['7 October 2026', '90', '0'],
  ['16 October 2026', '164', '0'],
  ['9 November 2026', '192', '0'],
  ['20 November 2026', '116', '0'],
];

const STREAMS: [string, string, string][] = [
  ['Skilled Workers Outside Canada', 'A TEER 0–3 job offer from a PEI employer the province approved first', 'Yes; it is built for this'],
  ['Occupations in Demand', 'A permanent job in a listed occupation, such as nurse aide or truck driver', 'Only with an approved employer, case by case'],
  ['Intermediate Experience', 'A TEER 4 job offer and six months of Canadian work on an LMIA-based work permit', 'Only with that Canadian experience and an approved employer'],
  ['PEI Express Entry', 'A federal Express Entry profile', 'Open, but PEI prioritises people living and working there'],
  ['Skilled Workers in PEI', 'People working for a PEI employer on a work permit', 'No'],
  ['Critical Workers', 'People working full-time in PEI in a TEER 4 or 5 job', 'No'],
  ['International Graduates', 'Graduates of a publicly funded PEI institution, with a post-graduation work permit', 'No'],
  ['Work Permit Stream (business)', 'Business owners or managers starting a PEI business', 'On paper; none invited in 2026'],
];

export default function PeiPnp2026() {
  return (
    <>
      <p>
        <strong>
          Yes, but from Pakistan the realistic route is a job offer from a PEI employer that the province
          has approved to hire abroad.
        </strong>{' '}
        As of 23 November 2026, PEI had sent 1,791 invitations this year, none of them to business
        applicants. It is prioritising health care, trades and other shortage sectors, and says sales and
        service workers may not be invited.
      </p>

      <h2>What changed in the PEI PNP in 2025 and 2026?</h2>
      <p>
        The background is PEI’s{' '}
        <a href={FRAMEWORK} rel="noopener noreferrer" target="_blank" className={a}>
          February 2024 population framework
        </a>
        , which cut its use of federal nominations to ease pressure on public services and
        infrastructure.
      </p>
      <div role="region" aria-label="Changes to the PEI Provincial Nominee Program from February 2024 to November 2026, as published by Prince Edward Island" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Changes to the PEI Provincial Nominee Program from February 2024 to November 2026, as published by Prince Edward Island</caption>
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
        Ottawa’s cut is described in PEI’s{' '}
        <a href={BUDGET} rel="noopener noreferrer" target="_blank" className={a}>
          2025 Budget Paper on the Economy
        </a>
        . PEI’s priority sectors vary slightly by page: the draws page adds manufacturing, the stream
        pages childcare. All warn that people in sales and service may not be invited.
      </p>

      <h2>How many people has PEI invited in 2026?</h2>
      <p>
        PEI’s{' '}
        <a href={DRAWS} rel="noopener noreferrer" target="_blank" className={a}>
          draws page
        </a>
        , dated 20 November 2026, lists 13 rounds and 1,791 invitations this year. None went to the
        business stream.
      </p>
      <div role="region" aria-label="The five latest PEI invitation rounds to 20 November 2026, from PEI’s Expression of Interest Draws page" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">The five latest PEI invitation rounds to 20 November 2026, from PEI’s Expression of Interest Draws page</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Round</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Labour and Express Entry invitations</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Business invitations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {DRAW_ROWS.map(([when, labour, business]) => (
              <tr key={when}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{when}</th>
                <td className="px-3 py-3 sm:px-4">{labour}</td>
                <td className="px-3 py-3 sm:px-4">{business}</td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">All 13 rounds in 2026</th>
              <td className="px-3 py-3 sm:px-4">1,791</td>
              <td className="px-3 py-3 sm:px-4">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        PEI says it invited individuals working in priority occupations and sectors, judged by their economic impact
        on the Island. Graduates of UPEI, Holland College and Collège de l’Île were prioritised.
      </p>
      <p>
        The rounds on 7 October and 9 November were not on the{' '}
        <a href={SCHEDULE} rel="noopener noreferrer" target="_blank" className={a}>
          published schedule
        </a>
        . Its next date is 17 December 2026.
      </p>

      <h2>How does a PEI expression of interest get selected?</h2>
      <p>
        An expression of interest (EOI) is a profile, not an application. PEI ranks profiles on language,
        education, skill level, work experience and its own strategic priorities. A PEI job offer and
        Canadian work experience also count.
      </p>
      <p>
        A profile stays active for six months, and you can have only one at a time. Under the{' '}
        <a href={EOI} rel="noopener noreferrer" target="_blank" className={a}>
          expression of interest page
        </a>
        , an invited candidate has 30 calendar days to submit a complete application. PEI advises preparing
        your documents before you submit a profile.
      </p>
      <p>
        One point matters for Pakistani degrees. The points grid in PEI’s{' '}
        <a href={WAG} rel="noopener noreferrer" target="_blank" className={a}>
          Workforce Application Guide
        </a>{' '}
        rewards a foreign qualification verified by the regulated body in PEI. It says an educational
        credential assessment (ECA) does not earn those points.
      </p>
      <p>
        Documents not in English or French, such as Urdu certificates, need a certified translation and a
        copy of the original. PEI refuses an application for misrepresentation and bars the applicant
        from applying again for two years.
      </p>
      <p>
        Creating a profile is free. If invited, you pay a non-refundable fee when you submit. The amount
        is on each stream page; we found it in no PEI regulation, so it is not printed here.
      </p>

      <h2>Which PEI PNP streams can you use from Pakistan?</h2>
      <p>
        As of 23 November 2026, the{' '}
        <Link href="/pnp/prince-edward-island" className={a}>
          Prince Edward Island PNP
        </Link>{' '}
        has seven worker streams and one business stream. The right-hand column is our reading of each
        stream page.
      </p>
      <div role="region" aria-label="PEI Provincial Nominee Program streams as of 23 November 2026, who each is for, and whether it fits an applicant in Pakistan" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">PEI Provincial Nominee Program streams as of 23 November 2026, who each is for, and whether it fits an applicant in Pakistan</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Stream</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Who it is for</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">From Pakistan?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {STREAMS.map(([stream, who, fromPk]) => (
              <tr key={stream}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{stream}</th>
                <td className="px-3 py-3 sm:px-4">{who}</td>
                <td className="px-3 py-3 sm:px-4">{fromPk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        On 23 November 2026, the{' '}
        <a href={OUTSIDE} rel="noopener noreferrer" target="_blank" className={a}>
          Skilled Workers Outside Canada page
        </a>{' '}
        asked for:
      </p>
      <ul>
        <li>a full-time, non-seasonal TEER 0–3 job offer, permanent or for at least two years;</li>
        <li>an employer approved by PEI’s Office of Immigration before it makes the offer;</li>
        <li>two years of full-time work in the past five, and a post-secondary degree or diploma from a programme of at least two years;</li>
        <li>an age of 18 to 59, and legal status in your country of residence;</li>
        <li>CLB 4 in an IRCC-approved test from the past two years, or the employer’s confirmation on its job offer form;</li>
        <li>enough money to settle, and a genuine intention to live in PEI.</li>
      </ul>
      <p>
        With the employer’s approval in place, PEI provides a Work Permit Support Letter for your work
        permit application. If you already have a federal Express Entry profile, PEI says to submit under
        PEI Express Entry instead.
      </p>
      <p>
        PEI checks employers too. Its guide requires a business that has run in PEI for at least two
        years and could not fill the job in Canada. Our post on{' '}
        <Link href="/blog/fake-canada-job-offers-2026" className={a}>
          fake Canadian job offers
        </Link>{' '}
        explains how to check an offer from Pakistan.
      </p>
      <p>
        PEI’s{' '}
        <a href={EVENTS} rel="noopener noreferrer" target="_blank" className={a}>
          recruitment events page
        </a>{' '}
        listed no upcoming events on 23 November 2026. None of the past missions it lists was in Pakistan.
      </p>

      <h2>Is the PEI business stream still open?</h2>
      <p>
        PEI’s only business route is the{' '}
        <a href={WORK_PERMIT} rel="noopener noreferrer" target="_blank" className={a}>
          Work Permit Stream
        </a>
        . You get a work permit, move to PEI and run your business under a performance agreement. Only
        then may you be nominated.
      </p>
      <p>
        The stream page is still live, but the 2026 draws table shows no business invitations to 20
        November. The page sets a minimum net worth, checked by a designated verifier, and an application
        fee.
      </p>
      <p>Both amounts appear only on the stream page, so they are left out here.</p>

      <h2>What about the Atlantic Immigration Program in PEI?</h2>
      <p>
        The Atlantic Immigration Program (AIP) is a separate, employer-driven route. On its{' '}
        <a href={AIP_PEI} rel="noopener noreferrer" target="_blank" className={a}>
          5 November 2026 endorsement page
        </a>
        , PEI said it accepts endorsements only for workers in health care, construction and manufacturing.
      </p>
      <p>
        PEI is not accepting transport truck drivers (NOC 73300) under the AIP. It charges no provincial
        fee for endorsement, and designated employers can now submit an EOI profile for each candidate.
      </p>
      <p>
        How the federal side works is in our{' '}
        <Link href="/atlantic-immigration-program" className={a}>
          Atlantic Immigration Program guide
        </Link>
        .
      </p>

      <h2>What happens after a PEI nomination?</h2>
      <p>
        PEI’s guide says you must apply to IRCC for permanent residence within six months of receiving the
        nomination certificate. Until you become a permanent resident, you must keep the nomination’s
        conditions and stay with the same employer.
      </p>
      <p>
        A nomination through PEI Express Entry adds 600 points under section 28(1) of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        . Nominees in the other streams apply to IRCC with their certificate, and IRCC’s{' '}
        <a href={IRCC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          provincial nominee page
        </a>{' '}
        explains both routes. IRCC makes the final decision.
      </p>
      <p>
        Other provinces are compared in{' '}
        <Link href="/pnp" className={a}>
          how the PNP works
        </Link>
        . How nomination works, and who PEI does not suit, is in our{' '}
        <Link href="/pnp/prince-edward-island" className={a}>
          Prince Edward Island PNP guide
        </Link>
        .
      </p>
    </>
  );
}
