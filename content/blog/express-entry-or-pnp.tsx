import Link from 'next/link';

/**
 * Published 23 November 2026 on the site owner's request of the same day for
 * more posts. Every source was read on 23 November 2026:
 * - IRCC's provincial nominee pages: the landing page (page details 2026-09-14),
 *   the Express Entry process's eligibility (2026-05-21), nomination
 *   (2026-03-24) and permanent-residence (2026-03-24) pages, and the
 *   non-Express Entry process's eligibility and apply pages (2026-06-05).
 * - IRCC's Express Entry who-can-apply page (2026-10-16), CRS criteria page
 *   (2026-11-03), rounds page (2026-10-16) and processing-times tool (2026-11-13).
 * - The Ministerial Instructions respecting the Express Entry system, current
 *   version in force since 17 November 2026 (page modified 2026-11-18), ss. 8(2)(d)
 *   and 28(1). The 17 November amendment (2026-2) changes only ss. 15.1, 15.2 and
 *   19 (NOC 41200), not the nomination points.
 * - IRPR s. 87 (Justice Laws, current to 2026-10-29) and IRCC's operational
 *   instructions on determining membership in the provincial nominee class (2026-04-17).
 * - Manitoba's Skilled Worker Overseas eligibility page (modified 22 May 2026) and
 *   WelcomeBC's For workers page (last updated 28 May 2026). Saskatchewan was
 *   dropped as an example: its Occupation In-Demand page describes a no-job-offer
 *   route, but its release of 27 March 2025 said such applications without a
 *   Saskatchewan job offer would be returned, and we could not confirm which
 *   holds now.
 *
 * Round figures: IRCC's rounds page fills its table by script, so they were read
 * from the data file it loads (ee_rounds_123_en.json, latest round #453 on
 * 28 October 2026) and match /express-entry/draws. Rounds are official
 * statistics; 600 is set by s. 28(1). The "without the 600" column is our own
 * arithmetic: additional points are capped at 600 (s. 8(2)(d)), so a nominee's
 * other points are the cut-off minus 600. Provincial fees, points minimums and
 * caps appear only on provincial web pages and are left out, as are IRCC's
 * processing times (linked, not printed).
 *
 * Our own suggestion, not IRCC's or a province's: choose a province where you
 * would really live. Re-check when IRCC holds its next PNP round.
 */
const a = 'font-semibold';

const IRCC_PNP = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const PNP_EE_ELIGIBILITY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/eligibility.html';
const PNP_NOMINATION =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/get-confirm-nomination.html';
const PNP_BASE_APPLY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/non-express-entry/apply.html';
const PNP_BASE_ELIGIBILITY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/non-express-entry/eligibility.html';
const WHO_CAN_APPLY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const CRS_CRITERIA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html';
const ROUNDS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html';
const TIMES = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html';
const IRPR_87 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.html';
const OFFICERS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes/provincial-nominees/base-determining-membership-class.html';
const MB_SWO = 'https://immigratemanitoba.com/mpnp/skilled-worker/swo/eligibility/';
const BC_WORKERS = 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers';

const PNP_ROUNDS: [string, string, string, string][] = [
  ['26 October 2026', '792', '761', '161'],
  ['13 October 2026', '752', '772', '172'],
  ['28 September 2026', '733', '725', '125'],
  ['14 September 2026', '576', '734', '134'],
  ['31 August 2026', '562', '697', '97'],
];

const ROUTES: [string, string, string, string, string][] = [
  [
    'Express Entry alone',
    'IRCC ranks the pool, invites, and decides your application.',
    'One of the three Express Entry programmes, and a score that reaches a round you are eligible for.',
    'An Express Entry profile, then an online application in your IRCC account.',
    'Not applicable',
  ],
  [
    'Enhanced PNP',
    'The province nominates. IRCC invites and decides your application.',
    'One of the three programmes, a provincial stream you fit, and a nomination you accept in your profile.',
    'With the province, directly or after its notification of interest; then through Express Entry.',
    '600',
  ],
  [
    'Base PNP',
    'The province nominates. IRCC decides your application.',
    'A provincial stream you fit and a nomination. No Express Entry programme is needed.',
    'With the province; then online through IRCC’s Permanent Residence Portal, outside Express Entry.',
    'None, as it is outside Express Entry',
  ],
];

export default function ExpressEntryOrPnp() {
  return (
    <>
      <p>
        <strong>
          If you qualify for Express Entry, you can wait in the pool and seek a provincial nomination at the
          same time.
        </strong>{' '}
        As of 23 November 2026, a nomination through a province’s Express Entry stream adds 600 points to
        your CRS score. Without Express Entry eligibility, your PNP route is a base stream, and many need a
        job offer, study, work or family in the province.
      </p>

      <h2>What is the difference between an enhanced and a base stream?</h2>
      <p>
        <a href={IRCC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s provincial nominee page
        </a>{' '}
        describes two processes, and says the province tells you which one applies. Our{' '}
        <Link href="/pnp" className={a}>
          Provincial Nominee Programs guide
        </Link>{' '}
        calls them enhanced and base.
      </p>
      <ul>
        <li>
          <strong>Enhanced, IRCC’s “Express Entry process”:</strong> for people who fit a provincial stream
          and also qualify for an Express Entry programme. The nomination is added to your Express Entry
          profile.
        </li>
        <li>
          <strong>Base, the “non-Express Entry process”:</strong> for people who fit a provincial stream but
          no Express Entry programme. After nomination, you apply online through IRCC’s{' '}
          <a href={PNP_BASE_APPLY} rel="noopener noreferrer" target="_blank" className={a}>
            Permanent Residence Portal
          </a>
          .
        </li>
      </ul>
      <p>
        The three Express Entry programmes are the Federal Skilled Worker Program, the Federal Skilled Trades
        Program and the Canadian Experience Class. IRCC’s{' '}
        <a href={PNP_EE_ELIGIBILITY} rel="noopener noreferrer" target="_blank" className={a}>
          eligibility page for enhanced nominees
        </a>{' '}
        sets three conditions. You fit a provincial stream, the province nominates you, and you qualify for
        one of those programmes.
      </p>

      <h2>How many CRS points does a nomination add?</h2>
      <p>
        The 600 points are set by section 28(1) of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        , in force in their current form since 17 November 2026. They apply to a nomination under a
        province’s Express Entry stream, once the province verifies it and you accept it. IRCC’s{' '}
        <a href={CRS_CRITERIA} rel="noopener noreferrer" target="_blank" className={a}>
          CRS criteria page
        </a>{' '}
        lists the same 600.
      </p>
      <p>
        Section 8(2)(d) caps additional points at 600, so a nomination reaches the cap on its own. IRCC’s{' '}
        <a href={PNP_NOMINATION} rel="noopener noreferrer" target="_blank" className={a}>
          nomination page
        </a>{' '}
        confirms that the 600 can be awarded only once. A base nomination earns no CRS points, because section
        28(1) covers only nominations under a province’s Express Entry stream.
      </p>
      <p>
        You can hold only one nomination at a time, though several provinces may contact you. To accept a
        different province’s nomination, IRCC says you must first reject the one you have.
      </p>
      <p>
        The 600 is why Provincial Nominee Program rounds show such high scores. In 2026, up to 26 October, IRCC
        held 21 of them and invited 10,814 candidates, with lowest scores from 697 to 805. These are the last
        five, from IRCC’s{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds data
        </a>
        :
      </p>
      <div
        role="region"
        aria-label="IRCC’s last five Provincial Nominee Program rounds before 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            IRCC’s last five Provincial Nominee Program rounds before 23 November 2026, with the lowest score
            invited and that score without the 600 nomination points
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Round</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Invitations</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Lowest score invited</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Without the 600</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {PNP_ROUNDS.map(([date, invited, crs, rest]) => (
              <tr key={date}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{date}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{invited}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{crs}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{rest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The last column is our own arithmetic: the lowest-ranked nominee’s points from everything except the
        nomination. All five rounds used the points in force before{' '}
        <Link href="/blog/express-entry-november-2026-crs-change" className={a}>
          IRCC’s 3 November 2026 CRS change
        </Link>
        . As of 23 November 2026, IRCC’s data showed no round of any kind after 28 October.
      </p>
      <p>
        Our{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>{' '}
        shows your score with and without a nomination.
      </p>

      <h2>Who decides: the province or IRCC?</h2>
      <p>
        Both, at different stages. The province decides whether to nominate you, and under{' '}
        <a href={IRPR_87} rel="noopener noreferrer" target="_blank" className={a}>
          section 87(3) of the Immigration and Refugee Protection Regulations
        </a>{' '}
        it alone assesses two things. They are your ability to become economically established in Canada, and
        your intention to live in that province.
      </p>
      <p>
        IRCC’s{' '}
        <a href={OFFICERS} rel="noopener noreferrer" target="_blank" className={a}>
          instructions to its officers
        </a>{' '}
        say that since 30 March 2026, officers cannot redo that assessment. IRCC still decides on permanent
        residence: it assesses whether you are admissible to Canada. If the province revokes your nomination,
        IRCC refuses the application.
      </p>
      <p>
        Provinces say the same from their side.{' '}
        <a href={MB_SWO} rel="noopener noreferrer" target="_blank" className={a}>
          Manitoba
        </a>{' '}
        warns that even an invitation to apply guarantees neither a provincial approval nor approval of the
        separate federal application.
      </p>

      <h2>Do you need a connection to the province?</h2>
      <p>
        Often, yes. Under section 87(2)(c), a nomination rests on your ability to become economically
        established and your intention to live in that province. IRCC’s{' '}
        <a href={PNP_BASE_ELIGIBILITY} rel="noopener noreferrer" target="_blank" className={a}>
          base-stream eligibility page
        </a>{' '}
        adds that provinces weigh their own immigration needs.
      </p>
      <p>
        So many streams ask for a tie: a job offer, past study or work in the province, family there, or an
        occupation it wants. Two examples, as read on 23 November 2026:
      </p>
      <ul>
        <li>
          <strong>Manitoba, Skilled Worker Overseas:</strong> you need family or friends settled in Manitoba,
          past study or work there, or an invitation from its recruitment initiatives.{' '}
          <a href={MB_SWO} rel="noopener noreferrer" target="_blank" className={a}>
            Manitoba’s eligibility page
          </a>{' '}
          says that without one, you cannot apply, whatever your points.
        </li>
        <li>
          <strong>British Columbia, Skilled Worker and Health Authority streams:</strong> both need a
          full-time job offer with no end date, from an eligible B.C. employer or a B.C. health authority.{' '}
          <a href={BC_WORKERS} rel="noopener noreferrer" target="_blank" className={a}>
            WelcomeBC
          </a>{' '}
          says your employer must back your application.
        </li>
      </ul>
      <p>
        Both B.C. streams also have an Express Entry BC option for people already in the federal pool.
        WelcomeBC says a nomination through it gives your federal profile more points, and may speed up
        federal processing. So one stream can lead to either kind of nomination, depending on that option.
      </p>

      <h2>How do the three routes compare?</h2>
      <div
        role="region"
        aria-label="Express Entry alone, an enhanced PNP nomination and a base PNP nomination compared, as of 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Express Entry alone, an enhanced PNP nomination and a base PNP nomination compared, as of 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Route</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Who decides</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What you need</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Where you apply</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">CRS points from a nomination</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROUTES.map(([route, who, need, where, points]) => (
              <tr key={route}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{route}</th>
                <td className="px-3 py-3 sm:px-4">{who}</td>
                <td className="px-3 py-3 sm:px-4">{need}</td>
                <td className="px-3 py-3 sm:px-4">{where}</td>
                <td className="hidden px-4 py-3 md:table-cell">{points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What if you are applying from Pakistan with no Canadian connection?</h2>
      <p>
        Then the Canadian Experience Class is closed to you, because IRCC’s{' '}
        <a href={WHO_CAN_APPLY} rel="noopener noreferrer" target="_blank" className={a}>
          who-can-apply page
        </a>{' '}
        says it needs Canadian work experience. That leaves the Federal Skilled Worker Program, which accepts
        foreign work experience, or the Federal Skilled Trades Program, which also needs a Canadian job
        offer or a certificate of qualification issued by a Canadian province, territory or federal
        authority.
      </p>
      <p>
        In 2026, a good score was not enough on its own. IRCC’s data shows 65 rounds up to 28
        October, and none was open to the whole pool. Each invited one group, such as Canadian Experience Class
        candidates, provincial nominees, French speakers or a named occupation.
      </p>
      <p>
        A nomination puts you in one of those groups. While you wait, you can mark interest in one province or
        all of them in your profile. IRCC’s nomination page says provinces can then search the pool and send a
        notification of interest, which is not a nomination.
      </p>
      <p>
        With no family, friends, study or work in Manitoba, its Skilled Worker Overseas pathway is open to you
        only through a Manitoba invitation. B.C.’s worker streams start with a job offer from a B.C. employer.
        Provinces revise these pages, so check the province’s own site on the day.
      </p>
      <p>
        If you do not qualify for Express Entry at all, a base stream is processed outside it. IRCC’s{' '}
        <a href={TIMES} rel="noopener noreferrer" target="_blank" className={a}>
          processing-times tool
        </a>{' '}
        lists provincial nominees with and without Express Entry separately. IRCC’s provincial nominee page
        says times may rise when more people apply than there are places.
      </p>

      <h2>So should you wait in the pool or apply to a province?</h2>
      <p>
        If you qualify for Express Entry, you do not have to choose: a profile in the pool can still receive a
        nomination. Our suggestion is to pick a province where you would really live, not the one that looks
        easiest. Intention to live there is part of the legal test, and the province alone judges it.
      </p>
      <p>
        How the pool, the score and the rounds work is in our{' '}
        <Link href="/express-entry" className={a}>
          Express Entry guide
        </Link>
        . Streams, intention to settle and each province’s programme are in our{' '}
        <Link href="/pnp" className={a}>
          Provincial Nominee Programs guide
        </Link>
        .
      </p>
    </>
  );
}
