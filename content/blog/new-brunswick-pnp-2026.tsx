import Link from 'next/link';

/**
 * Published 23 November 2026. Written from the Government of New Brunswick's
 * immigration pages on gnb.ca (Immigration New Brunswick) as they stood on
 * 23 November 2026: the NBPNP page, the four stream pages, the Critical Worker
 * Pilot page (served from www2.gnb.ca), the Private Career College Graduate Pilot
 * page, the current and archived important notices, the invitation and selection
 * rounds page, the recruitment events page, the Atlantic Immigration Program page
 * and the "important information for every candidate" page; plus IRCC's
 * provincial nominee page and the Express Entry Ministerial Instructions.
 * gnb.ca and laws.gnb.ca sit behind a Cloudflare challenge that blocks scripted
 * reading, so they were read in an ordinary desktop browser, where the check
 * passed without interaction. The stream application guides are PDFs that could
 * not be read this way, so nothing here comes from them.
 *
 * Figures: the two fees are printed because New Brunswick Regulation 2012-36
 * (Financial Administration Act) sets them. The 600 points are set by s. 28(1)
 * of the Ministerial Instructions respecting the Express Entry system. The
 * invitation and selection counts are New Brunswick's own dated statistics. The
 * Business Immigration net-worth and investment minimums, and the points-grid
 * pass marks, appear only on the stream pages, so they are left out.
 *
 * Our own reading: which pathways work from Pakistan is our inference from each
 * pathway's residence and job-offer criteria, not a list the province publishes.
 * Re-check monthly; New Brunswick changes priorities by notice, without warning.
 */
const a = 'font-semibold';

const NBPNP = 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html';
const SKILLED =
  'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html';
const EE =
  'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/express-entry-stream.html';
const STRATEGIC =
  'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/strategic-initiative.html';
const BUSINESS =
  'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/business-immigration-stream.html';
const CRITICAL =
  'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-immigration-program-streams/nb-critical-workers-pilot.html';
const NOTICES = 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices.html';
const ARCHIVE =
  'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices/notices-archive-2025.html';
const ROUNDS = 'https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html';
const EVENTS = 'https://www.gnb.ca/en/topic/family-home-community/immigration/events-calendar.html';
const INFO = 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-information.html';
const NB_AIP = 'https://www.gnb.ca/en/topic/family-home-community/immigration/atlantic-immigration-program.html';
const FEES_REG = 'https://laws.gnb.ca/en/document/ar/2012-36';
const IRCC_PNP = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';

const CHANGES: [string, string][] = [
  ['Early 2025', 'Skilled Worker split into three pathways, including Priority Occupations. Express Entry was rebuilt as Employment in New Brunswick and New Brunswick Interest.'],
  ['4 April 2025', 'The Atlantic Immigration Program paused for the rest of 2025, its allocation used up.'],
  ['Through 2025', 'The Strategic Initiative, for French speakers, took no new EOIs. Its rounds resumed in January 2026.'],
  ['3 February 2026', 'Skilled Worker and Express Entry stopped considering accommodation and food services jobs, plus listed retail, cashier and food-processing jobs.'],
  ['3 February 2026', 'The Atlantic Immigration Program moved endorsements into a pool and paused new employer designations.'],
  ['4 May 2026', 'New Brunswick Experience invitations limited to health care, education and construction, as the stream’s allocation ran low.'],
  ['14 September 2026', 'The Atlantic Immigration Program designation pause extended to the end of 2026.'],
];

const STREAMS: [string, string, string][] = [
  ['Skilled Worker: New Brunswick Experience', 'Full-time workers already living in New Brunswick', 'No'],
  ['Skilled Worker: New Brunswick Graduates', 'New Brunswick graduates with a New Brunswick job, living there', 'No'],
  ['Skilled Worker: Priority Occupations', 'A job offer made through a Government of New Brunswick recruitment mission', 'Only through such a mission'],
  ['Express Entry: Employment in New Brunswick', 'Express Entry candidates living and working full time in New Brunswick', 'No'],
  ['Express Entry: New Brunswick Interest', 'Express Entry candidates sent a letter of interest by the province', 'Only with that letter'],
  ['Strategic Initiative', 'French speakers: workers, graduates and remote workers in the province, or letter holders', 'Only with a mission job offer or a letter of interest'],
  ['Business Immigration', 'Entrepreneurs who will start or buy, and run, a New Brunswick business', 'Yes'],
  ['Critical Worker Pilot', 'Workers recruited by six participating employers', 'Only through those employers'],
  ['Private Career College Graduate Pilot', 'Graduates of selected New Brunswick private career college programmes', 'No'],
];

export default function NewBrunswickPnp2026() {
  return (
    <>
      <p>
        <strong>Yes, but only through a few narrow routes.</strong> As of 23 November 2026, most New
        Brunswick Provincial Nominee Program (NBPNP) pathways are for people already living and working
        in New Brunswick. From Pakistan, the remaining routes need a job offer from a provincial
        recruitment mission, a letter of interest from the province, or a business.
      </p>

      <h2>What changed in the New Brunswick PNP in 2025 and 2026?</h2>
      <p>
        Immigration New Brunswick announces each change as a notice. The dates below come from its{' '}
        <a href={NOTICES} rel="noopener noreferrer" target="_blank" className={a}>
          current
        </a>{' '}
        and{' '}
        <a href={ARCHIVE} rel="noopener noreferrer" target="_blank" className={a}>
          archived notices
        </a>
        .
      </p>
      <div role="region" aria-label="Changes to the New Brunswick Provincial Nominee Program and the Atlantic Immigration Program in New Brunswick, 2025 to September 2026, as published by New Brunswick" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Changes to the New Brunswick Provincial Nominee Program and the Atlantic Immigration Program in New Brunswick, 2025 to September 2026, as published by New Brunswick</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What changed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CHANGES.map(([when, what]) => (
              <tr key={when + what}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{when}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The 3 February 2026 list also names cashiers, retail salespersons and fish plant workers in any
        sector. A cook or cleaner may still submit an EOI if the employer is outside that sector.
      </p>

      <h2>Which NBPNP streams are open, and who are they for?</h2>
      <p>
        As of 23 November 2026, the{' '}
        <Link href="/pnp/new-brunswick" className={a}>
          New Brunswick PNP
        </Link>{' '}
        has four streams and two pilots, listed on the province’s{' '}
        <a href={NBPNP} rel="noopener noreferrer" target="_blank" className={a}>
          programme page
        </a>
        . You choose a stream, and your answers decide which of its pathways you fit.
      </p>
      <div role="region" aria-label="New Brunswick Provincial Nominee Program streams and pathways as of 23 November 2026, who each is for, and whether it works for someone living in Pakistan" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">New Brunswick Provincial Nominee Program streams and pathways as of 23 November 2026, who each is for, and whether it works for someone living in Pakistan</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Stream or pathway</th>
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
        The last column is our reading of each pathway’s residence and job-offer rules.
      </p>

      <h2>How does New Brunswick select candidates now?</h2>
      <p>
        You submit a free expression of interest (EOI) through the INB portal. It joins a pool and
        stays valid for 365 days. The province says EOIs are not considered first come, first served.
      </p>
      <p>
        Invitations follow labour market needs, the province’s allocation and its priorities. Skilled
        Worker, Express Entry and the Strategic Initiative have scheduled draws. Meeting the criteria
        guarantees nothing.
      </p>
      <p>
        The{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          invitation rounds page
        </a>{' '}
        shows who was invited. On 13 November 2026, a Skilled Worker round issued 198 invitations in the
        New Brunswick Graduates and Experience pathways. On 2 November, a Strategic Initiative round
        issued 192.
      </p>
      <p>
        Every Express Entry stream round listed for 2025 and 2026 was for the Employment in New Brunswick
        pathway. The latest, on 17 September 2026, issued 102 invitations. That pathway is for people
        already living and working in the province.
      </p>
      <p>
        If invited, you pay a non-refundable fee before submitting the full application.{' '}
        <a href={FEES_REG} rel="noopener noreferrer" target="_blank" className={a}>
          New Brunswick Regulation 2012-36
        </a>{' '}
        sets it at $250 (Canadian) for a skilled worker application and $2,000 for a business
        application. The stream pages charge $250 for Skilled Worker, Express Entry and Strategic
        Initiative applications, and $2,000 for Business Immigration.
      </p>

      <h2>Can you apply to New Brunswick’s PNP from Pakistan?</h2>
      <p>
        Yes, but not through the pathways that issue most invitations. These routes remain open from
        outside Canada:
      </p>
      <ul>
        <li>
          <strong>Priority Occupations</strong> (
          <a href={SKILLED} rel="noopener noreferrer" target="_blank" className={a}>
            Skilled Worker
          </a>
          ): a job offer in a priority occupation, made directly through a provincial government
          recruitment mission.
        </li>
        <li>
          <strong>New Brunswick Interest</strong> (
          <a href={EE} rel="noopener noreferrer" target="_blank" className={a}>
            Express Entry
          </a>
          ): a letter of interest sent to your Express Entry profile, plus the federal proof of funds.
        </li>
        <li>
          <strong>
            <a href={STRATEGIC} rel="noopener noreferrer" target="_blank" className={a}>
              Strategic Initiative
            </a>
          </strong>
          , for French speakers: Francophone Workers with a recruitment-mission job offer, or
          Francophone Priorities with a letter of interest.
        </li>
        <li>
          <strong>
            <a href={BUSINESS} rel="noopener noreferrer" target="_blank" className={a}>
              Business Immigration
            </a>
          </strong>
          : once approved, you apply for a work permit, open the business and ask for nomination after
          six months of operating it.
        </li>
        <li>
          <strong>
            <a href={CRITICAL} rel="noopener noreferrer" target="_blank" className={a}>
              Critical Worker Pilot
            </a>
          </strong>
          : only through its six participating employers. The province does not accept direct
          applications.
        </li>
      </ul>
      <p>
        From abroad, recruitment missions are the way into Priority Occupations and Francophone
        Workers. On 23 November 2026, the province’s{' '}
        <a href={EVENTS} rel="noopener noreferrer" target="_blank" className={a}>
          recruitment events page
        </a>{' '}
        listed no virtual events. Its one international event runs in France and Belgium, 26 November
        to 7 December.
      </p>
      <p>
        The rounds page names Priority Occupations once, for 17 June 2025: 12 invitations, in health
        care. A 16–18 July 2026 round listed “New Brunswick Priorities” with New Brunswick Experience:
        58 invitations in all.
      </p>
      <p>
        On our reading, most applicants in Pakistan will need a job offer made through a provincial
        recruitment mission. A letter of interest comes at the province’s choice, and Business
        Immigration needs business experience and capital. An offer arranged by an agent does not meet
        the mission rule.
      </p>

      <h2>What about the Atlantic Immigration Program in New Brunswick?</h2>
      <p>
        The{' '}
        <Link href="/atlantic-immigration-program" className={a}>
          Atlantic Immigration Program
        </Link>{' '}
        is a separate route through{' '}
        <a href={NB_AIP} rel="noopener noreferrer" target="_blank" className={a}>
          employers designated by the province
        </a>
        . On 14 September 2026, New Brunswick kept new designations paused for the rest of 2026.
      </p>
      <p>
        Under the province’s notices of 14 September and 14 October 2026, endorsements for jobs offered
        to people living outside Canada are limited to Government of New Brunswick recruitment in health
        care, education and construction.
      </p>
      <p>
        TEER 5 jobs are not eligible, and endorsements are selected from a pool. On 6 and 16 November
        2026, the province selected 73 applications for processing.
      </p>

      <h2>What should you prepare if you apply from Pakistan?</h2>
      <p>
        New Brunswick’s{' '}
        <a href={INFO} rel="noopener noreferrer" target="_blank" className={a}>
          guidance for every candidate
        </a>{' '}
        applies to every stream. From Pakistan, these points matter most:
      </p>
      <ul>
        <li>Language: IELTS General Training, CELPIP or PTE Core for English; TEF Canada or TCF Canada for French. Results must be under two years old.</li>
        <li>Education: without a credential from a Canadian designated learning institution, you need an educational credential assessment (ECA).</li>
        <li>Translation: documents not in English or French, such as Urdu ones, need an independent translator. You, a relative or your representative’s staff cannot translate them.</li>
        <li>Your account: create your own INB profile with your own email. A representative is optional and gives no priority.</li>
        <li>Status: the province says not to apply if you are not living lawfully in your current country. That matters if you live outside Pakistan.</li>
      </ul>
      <p>
        False documents lead to refusal, a ban on reapplying and a report to IRCC. Our comparison of{' '}
        <Link href="/blog/ielts-pte-core-celpip-pakistan" className={a}>
          IELTS, PTE Core and CELPIP from Pakistan
        </Link>{' '}
        covers the English tests.
      </p>

      <h2>What happens after a New Brunswick nomination?</h2>
      <p>
        You apply to IRCC for permanent residence before the certificate expires, including all family
        members. New Brunswick says IRCC makes the final decision. Your certificate says whether you
        apply through Express Entry or outside it.
      </p>
      <p>
        An Express Entry nomination is worth 600 points under section 28(1) of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        . IRCC’s{' '}
        <a href={IRCC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          provincial nominee page
        </a>{' '}
        explains both routes, and our{' '}
        <Link href="/express-entry" className={a}>
          Express Entry guide
        </Link>{' '}
        covers the federal side.
      </p>
      <p>
        If New Brunswick does not fit,{' '}
        <Link href="/pnp" className={a}>
          compare the other provincial programmes
        </Link>
        . How nomination works there, and who it does not suit, is in our{' '}
        <Link href="/pnp/new-brunswick" className={a}>
          New Brunswick PNP guide
        </Link>
        .
      </p>
    </>
  );
}
