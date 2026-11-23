import Link from 'next/link';

/**
 * Published 23 November 2026. Everything here was read on GOV.UK that day.
 * The brake itself is in the Immigration Rules: Appendix Student ST 3.3 and
 * Appendix Skilled Worker SW 3.3 (both pages last updated 8 October 2026),
 * inserted by Statement of Changes HC 1691 (laid 5 March 2026), paragraphs
 * APP ST1 and APP SW1, in force 26 March 2026; applications made before then
 * are decided under the rules in force on 25 March 2026. The later Statements
 * of Changes, HC 259 (9 July 2026) and HC 584 (3 September 2026), do not touch
 * either rule, and GOV.UK's collection listed none later on 23 November 2026.
 * How the brake works: GOV.UK's "Visa brake" guidance (last updated 26 March
 * 2026) and the Student caseworker guidance (16 October 2026, dual nationals).
 * Why and how countries are chosen: the HC 1691 explanatory memorandum (5.1 to
 * 5.4) and the visa brake impact assessment (paragraphs 19 to 22 and annex
 * paragraphs 8 to 11). Sponsor compliance: Student sponsor compliance guidance,
 * paragraphs 2.12 to 2.55 and 2.87 to 2.88 (updated 6 November 2026).
 *
 * Not printed, because they are neither law nor official statistics: the impact
 * assessment's threshold numbers and its 18-month initial review period, the
 * press release's asylum percentages, and the Basic Compliance Assessment
 * percentages (sponsor guidance only). Our own: the Pakistan row in the table
 * (our reading of ST 3.3 and SW 3.3), the Afghan-national-in-Pakistan example
 * (applies GOV.UK's "does not depend on where you live"), the point that a
 * refused visa gives universities a reason to check applicants carefully, and
 * the advice to check the rules rather than rumours. Re-check ST 3.3, SW 3.3 and
 * the GOV.UK visa brake page monthly, and move `updated` when re-checked.
 */
const a = 'font-semibold';

const BRAKE = 'https://www.gov.uk/guidance/visa-brake-changes-to-the-uk-visa-system';
const APP_STUDENT = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student';
const APP_SW = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-worker';
const HC1691 =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1619-5-march-2026/statement-of-changes-to-the-immigration-rules-hc-1691-5-march-2026-accessible-version';
const HC1691_EM =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1619-5-march-2026/explanatory-memorandum-to-the-statement-of-changes-in-the-immigration-rules-hc-1691-5-march-2026-accessible';
const IA =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1619-5-march-2026/impact-assessment-visa-brake-accessible-version';
const NEWS = 'https://www.gov.uk/government/news/visa-brake-imposed-on-4-countries-after-widespread-visa-abuse';
const CHANGES = 'https://www.gov.uk/government/collections/immigration-rules-statement-of-changes';
const CASEWORKER = 'https://www.gov.uk/government/publications/student-route-caseworker-guidance/student-and-child-student';
const STATS =
  'https://www.gov.uk/government/statistics/monthly-entry-clearance-visa-applications-october-2026/monthly-entry-clearance-visa-applications-october-2026';
const COMPLIANCE = 'https://www.gov.uk/government/publications/student-sponsor-guidance/student-sponsor-compliance-accessible';
const SPONSOR_NEWS = 'https://www.gov.uk/government/news/universities-face-ban-on-international-students-over-visa-abuse';

const LIST: [string, string, string, string][] = [
  ['Afghanistan', 'Student and Skilled Worker, applied for outside the UK', '26 March 2026', 'Appendix Student ST 3.3; Appendix Skilled Worker SW 3.3'],
  ['Cameroon', 'Student, applied for outside the UK', '26 March 2026', 'Appendix Student ST 3.3'],
  ['Myanmar', 'Student, applied for outside the UK', '26 March 2026', 'Appendix Student ST 3.3'],
  ['Sudan', 'Student, applied for outside the UK', '26 March 2026', 'Appendix Student ST 3.3'],
  ['Pakistan', 'None', 'Not on the list', 'Not named in ST 3.3 or SW 3.3'],
];

export default function UkVisaBrakePakistan() {
  return (
    <>
      <p>
        <strong>
          No: as of 23 November 2026, Pakistan is not on the UK’s “visa brake” list, so Pakistanis can
          apply for UK visas as normal.
        </strong>{' '}
        Since 26 March 2026, the brake has refused Student visas to nationals of Afghanistan, Cameroon,
        Myanmar and Sudan who apply from outside the UK. It also refuses Skilled Worker visas to Afghan
        nationals.
      </p>
      <p>
        Here is what the brake is, how a country ends up on it, and which UK changes do affect
        applicants from Pakistan. Our{' '}
        <Link href="/uk" className={a}>
          UK visas guide
        </Link>{' '}
        covers the main routes.
      </p>

      <h2>What is the UK visa brake?</h2>
      <p>
        GOV.UK’s{' '}
        <a href={BRAKE} rel="noopener noreferrer" target="_blank" className={a}>
          visa brake page
        </a>{' '}
        describes it as a restriction that refuses certain visas to certain nationalities. It applies
        where high numbers and proportions of people issued visas later claim asylum.
      </p>
      <p>
        It covers only applications made outside the UK, known as entry clearance, and looks at the main
        applicant’s nationality. For a listed nationality, a valid CAS or Certificate of Sponsorship does
        not help.
      </p>
      <p>
        The brake is in the Immigration Rules.{' '}
        <a href={HC1691} rel="noopener noreferrer" target="_blank" className={a}>
          Statement of Changes HC 1691
        </a>
        , laid on 5 March 2026, added rule ST 3.3 to Appendix Student and SW 3.3 to Appendix Skilled
        Worker. Both took effect on 26 March 2026, and earlier applications were decided under the old
        rules.
      </p>

      <h2>Which countries and visas does it cover?</h2>
      <p>These are the only entries, as both rules read on 23 November 2026:</p>
      <div role="region" aria-label="UK visa brake: countries, visas affected and dates, from the Immigration Rules as read on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            UK visa brake: countries, visas affected and dates, from the Immigration Rules as read on 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Nationality</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Visas refused</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">From</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {LIST.map(([country, visas, from, source]) => (
              <tr key={country}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{country}</th>
                <td className="px-3 py-3 sm:px-4">{visas}</td>
                <td className="whitespace-nowrap px-3 py-3 sm:px-4">{from}</td>
                <td className="px-3 py-3 sm:px-4">{source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        GOV.UK says other visa routes and nationalities are not affected. The Home Office’s{' '}
        <a href={STATS} rel="noopener noreferrer" target="_blank" className={a}>
          monthly visa statistics
        </a>{' '}
        of 12 November 2026 add that these nationalities are a small proportion of sponsored study
        applications.
      </p>

      <h2>Is Pakistan on the list?</h2>
      <p>
        No. Pakistan is not named in rule ST 3.3 of{' '}
        <a href={APP_STUDENT} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Student
        </a>{' '}
        or SW 3.3 of{' '}
        <a href={APP_SW} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Skilled Worker
        </a>
        , read on 23 November 2026. GOV.UK’s visa brake page, last updated on 26 March 2026, names the
        same four countries.
      </p>
      <p>
        We also checked the{' '}
        <a href={CHANGES} rel="noopener noreferrer" target="_blank" className={a}>
          Statements of Changes
        </a>{' '}
        laid since: HC 259 on 9 July 2026 and HC 584 on 3 September 2026. Neither changes the brake. The
        Home Office’s{' '}
        <a href={NEWS} rel="noopener noreferrer" target="_blank" className={a}>
          announcement of 4 March 2026
        </a>{' '}
        also named only these four countries.
      </p>
      <p>
        So an application made on a Pakistani passport is, in GOV.UK’s words, processed as normal. The
        usual requirements and refusal grounds still apply.
      </p>

      <h2>Does it matter where you apply from?</h2>
      <p>
        No. GOV.UK says the brake depends on nationality, not on where you live or where you apply. So an
        Afghan national living in Pakistan who applies there for a Student or Skilled Worker visa is caught
        by it.
      </p>
      <p>
        It uses the main nationality given on the application form. The Home Office’s{' '}
        <a href={CASEWORKER} rel="noopener noreferrer" target="_blank" className={a}>
          Student caseworker guidance
        </a>{' '}
        adds that a dual national applying on another country’s passport is assessed on that
        nationality.
      </p>
      <p>
        If you already hold a UK visa, the brake does not cancel it. GOV.UK says you can still apply from
        inside the UK to extend, or to switch to another route, if you are eligible.
      </p>

      <h2>How does a country end up on the list?</h2>
      <p>
        The{' '}
        <a href={HC1691_EM} rel="noopener noreferrer" target="_blank" className={a}>
          explanatory memorandum
        </a>{' '}
        to HC 1691 says the four countries had some of the highest proportions of asylum claims to visas
        issued. The Student route produced the highest number and proportion of their claims. For Afghan
        nationals, the Skilled Worker route also produced a high number.
      </p>
      <p>
        The Home Office’s{' '}
        <a href={IA} rel="noopener noreferrer" target="_blank" className={a}>
          impact assessment
        </a>{' '}
        sets a threshold for considering a brake. It counts asylum claims linked to one nationality’s
        visas on one route, as a yearly number and as a share of visas issued.
      </p>
      <p>
        Meeting the threshold only triggers a wider assessment with other government departments. That
        weighs migration, national security and growth before any decision is made. GOV.UK says the
        brake is not permanent, will be reviewed regularly, and will end when the government considers
        it appropriate.
      </p>

      <h2>Which UK changes do affect Pakistani applicants?</h2>
      <p>These apply to every nationality, Pakistanis included:</p>
      <ul>
        <li>
          <strong>Student funds.</strong> The living-cost amount you must show rises for applications made
          from 30 November 2026. See{' '}
          <Link href="/blog/uk-student-visa-funds-30-november-2026" className={a}>
            the funds you must show from 30 November 2026
          </Link>
          .
        </li>
        <li>
          <strong>Graduate visa length.</strong> Applications made from 1 January 2027 get 18 months, not 2
          years, unless you hold a PhD or other doctorate. See{' '}
          <Link href="/blog/uk-graduate-visa-18-months-2027" className={a}>
            the Graduate visa falls to 18 months
          </Link>
          .
        </li>
        <li>
          <strong>Stricter checks on universities.</strong> The Home Office announced these on{' '}
          <a href={SPONSOR_NEWS} rel="noopener noreferrer" target="_blank" className={a}>
            4 June 2026
          </a>
          , as set out below.
        </li>
      </ul>
      <p>
        Every licensed student sponsor goes through a yearly Basic Compliance Assessment. Under the{' '}
        <a href={COMPLIANCE} rel="noopener noreferrer" target="_blank" className={a}>
          student sponsor compliance guidance
        </a>
        , assessments applied for from 1 June 2026 set tighter limits on visa refusals and enrolment.
        A tighter course-completion limit applies from 1 June 2027.
      </p>
      <p>
        Each sponsor now gets a red, amber or green rating. A red rating brings an action plan and a
        smaller CAS allocation next time, and serious or repeated failure can cost the licence. Ratings will
        be published on the Register of Student Sponsors once every sponsor has had its first one.
      </p>
      <p>
        A refused visa counts against the sponsor that issued the CAS. That gives universities a reason
        to check applicants carefully before issuing one.
      </p>

      <h2>How can you check the list yourself?</h2>
      <p>
        Do not rely on social media posts or an agent’s word. The list sits in the Immigration Rules, so
        adding a country means amending them.
      </p>
      <p>
        Check rule ST 3.3 of Appendix Student and rule SW 3.3 of Appendix Skilled Worker. GOV.UK’s visa
        brake page says any updates will be published on GOV.UK. The current brake was announced on 4
        March 2026 and applied from 26 March.
      </p>
      <p>
        For the routes that remain open from Pakistan, and what each one requires, see our{' '}
        <Link href="/uk" className={a}>
          UK visas guide
        </Link>
        .
      </p>
    </>
  );
}
