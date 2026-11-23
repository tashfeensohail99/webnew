import Link from 'next/link';

/**
 * Published 23 November 2026 on the site owner's request of the same day for
 * more posts. Every source was read on 23 November 2026:
 *  - the Ministerial Instructions respecting the Express Entry system, current
 *    version signed 17 November 2026 (page details 2026-11-18): ss. 4(2), 8(2),
 *    10, 11, 12(3), 13, 14, 15, 15.1, 17, 18, 21, 23, 25, 28, 30, 31 and 32;
 *  - IRCC's CRS criteria page (page details 2026-11-03), which matches the MI
 *    and lib/crs-grid.ts cell for cell in every table this post uses;
 *  - IRCC's check-your-score page (2026-11-18): the pause while profiles are
 *    recalculated, and the age-on-invitation instruction;
 *  - IRCC's create-profile page (2026-11-18), ECA page (2026-10-16), language
 *    test page (2026-10-16) and category-based selection page (2026-11-18);
 *  - IRCC's rounds page (2026-10-16), whose table is filled by script from
 *    ee_rounds_123_en.json; the round figures were read from that file. Latest
 *    round listed: #453 on 28 October 2026. Rounds are official statistics.
 *  - IQAS's International Education Guide: Pakistan (no page date shown; it
 *    says it is not an official assessment).
 *
 * The made-up profile is scored on the grid in force since 3 November 2026 and
 * checked against scoreCrs in lib/crs-grid.ts (325, 418, 480, 451, 94 at 32).
 *
 * Our own suggestions, not IRCC's: the "Our note" column, retaking the full test
 * rather than relying on a single retake, treating French as a long project,
 * and finishing the steps you control before a birthday. Re-check when IRCC
 * holds its first round on the new grid, and whenever the MI change.
 */
const a = 'font-semibold';

const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const CRS_CRITERIA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html';
const IRCC_CALCULATOR =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html';
const CREATE_PROFILE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/create-profile.html';
const LANG =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const ECA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html';
const CATEGORIES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const ROUNDS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html';
const IQAS_PK = 'https://www.alberta.ca/iqas-education-guide-pakistan';

const LEVERS: [string, string, string, string][] = [
  [
    'English test results',
    'Up to 136, or 128 with a spouse (s. 13), plus transferability points at CLB 7 and 9 (ss. 21, 23)',
    'A new IELTS General Training, PTE Core or CELPIP-General result',
    'Usually the largest step you control',
  ],
  [
    'French as a second language',
    'Up to 24, or 22 with a spouse (s. 14), plus 50 (s. 32)',
    'TEF Canada or TCF Canada; NCLC 7 in all four skills for the 50',
    'Also opens French-language category rounds',
  ],
  [
    'A second credential',
    '128 instead of 120 for a single applicant (s. 11), and the top transferability tier (s. 21)',
    'An ECA for each credential',
    'Check how a two-year pass degree is read first',
  ],
  [
    'Spouse’s education and language',
    'Up to 10 and 20 (ss. 17, 18); spouse factors capped at 40',
    'An ECA for foreign education, and an approved test under two years old',
    'Only for a spouse or partner coming with you',
  ],
  [
    'Provincial nomination',
    '600 (s. 28)',
    'A province nominates you under its Express Entry stream, and you accept',
    'The province decides, not you',
  ],
  [
    'Sibling in Canada',
    '15 (s. 31)',
    'Your or your spouse’s brother or sister, 18 or older, a citizen or PR, living in Canada',
    'Claim it if it is true; it cannot be arranged',
  ],
  [
    'Foreign work',
    'Up to 50 with your language level (s. 23)',
    'Paid skilled work (TEER 0 to 3) outside Canada in the last 10 years',
    'Three years earns more than one or two',
  ],
  [
    'Canadian study',
    '15 or 30 (s. 30)',
    'At least eight months of full-time study, physically in Canada',
    'Only if you study there anyway',
  ],
  [
    'Canadian work or a high-wage job offer',
    'Up to 150, or 140 with a spouse (s. 15)',
    'Work in Canada with temporary resident status, or a qualifying offer',
    'Changed on 3 November 2026',
  ],
  ['Age', 'Up to 110, or 100 with a spouse (s. 10)', 'Nothing', 'Falls each year from 30; zero at 45'],
];

const CLB_STEPS: [string, string, string, string][] = [
  ['Below CLB 4', '0', '0', '0'],
  ['CLB 4 or 5', '6', '24', '24'],
  ['CLB 6', '9', '36', '32'],
  ['CLB 7', '17', '68', '64'],
  ['CLB 8', '23', '92', '88'],
  ['CLB 9', '31', '124', '116'],
  ['CLB 10 or more', '34', '136', '128'],
];

const OCTOBER_ROUNDS: [string, string, string, string][] = [
  ['28 October', 'Transport occupations (#453)', '150', '477'],
  ['27 October', 'French-language proficiency (#452)', '5,000', '407'],
  ['26 October', 'Provincial Nominee Program (#451)', '792', '761'],
  ['16 October', 'French-language proficiency (#450)', '5,000', '435'],
  ['15 October', 'Canadian Experience Class (#449)', '2,500', '519'],
  ['13 October', 'Provincial Nominee Program (#448)', '752', '772'],
  ['1 October', 'Trade occupations (#447)', '3,500', '476'],
];

export default function RaiseCrsScore2026() {
  return (
    <>
      <p>
        <strong>
          From Pakistan, your CRS score rises mainly through better test results, French, your education
          assessment, your spouse and a provincial nomination.
        </strong>{' '}
        As of 23 November 2026, the Ministerial Instructions give a nomination 600 points. For one made-up
        profile, reaching CLB 9 instead of CLB 7 in all four English abilities added 93, though no score
        guarantees an invitation.
      </p>

      <h2>Which points can you still add from Pakistan?</h2>
      <p>
        The current grid has applied since 3 November 2026. The{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>{' '}
        in force on 23 November 2026 were signed on 17 November, and IRCC’s{' '}
        <a href={CRS_CRITERIA} rel="noopener noreferrer" target="_blank" className={a}>
          CRS criteria page
        </a>{' '}
        lists the same points. Section numbers below are from those instructions.
      </p>
      <div
        role="region"
        aria-label="CRS points you can add from Pakistan, under the Ministerial Instructions in force on 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            CRS points you can add from Pakistan, what each takes, and our note, under the Ministerial
            Instructions in force on 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Lever</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Points available</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What it takes from Pakistan</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Our note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {LEVERS.map(([lever, points, takes, note]) => (
              <tr key={lever}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{lever}</th>
                <td className="px-3 py-3 sm:px-4">{points}</td>
                <td className="px-3 py-3 sm:px-4">{takes}</td>
                <td className="px-3 py-3 sm:px-4">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        To see which of these change your own total, enter your details in our{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>{' '}
        and change one answer at a time.
      </p>

      <h2>How many points does each CLB level add?</h2>
      <p>
        Section 13 scores each of the four abilities separately, so one weak skill holds back the total. These
        are the points for your first official language:
      </p>
      <div
        role="region"
        aria-label="First official language points by CLB level, from section 13 of the Ministerial Instructions in force on 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            First official language points by CLB level, from section 13 of the Ministerial Instructions in
            force on 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Level in each ability</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Per ability, single</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">All four, single</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">All four, with spouse</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CLB_STEPS.map(([level, per, single, spouse]) => (
              <tr key={level}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{level}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{per}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{single}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{spouse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Two thresholds matter beyond this table. Skill transferability points start when all four abilities
        reach CLB 7, and double when all four reach CLB 9 (sections 21 and 23).
      </p>
      <p>
        Take a made-up applicant: 31, single, a three-year bachelor’s with an ECA, three years’ skilled work in
        Pakistan and CLB 7 in all four. That scores 325. At CLB 9 in all four, the same person scores 418: 56
        more for language and 37 more for transferability.
      </p>
      <p>
        A new result counts only once it is in your profile. IRCC’s{' '}
        <a href={CREATE_PROFILE} rel="noopener noreferrer" target="_blank" className={a}>
          profile page
        </a>{' '}
        lists a new language test among the changes you must report. Under section 4(2), your points are then
        recalculated, and they stop once results are two years old (s. 12(3)).
      </p>
      <p>
        IRCC’s{' '}
        <a href={LANG} rel="noopener noreferrer" target="_blank" className={a}>
          language test page
        </a>{' '}
        says it does not accept IELTS One Skill Retake for Express Entry, so retake the full test. Where to sit
        each test is in{' '}
        <Link href="/blog/ielts-pte-core-celpip-pakistan" className={a}>
          IELTS, PTE Core or CELPIP from Pakistan
        </Link>
        .
      </p>

      <h2>Is French worth adding?</h2>
      <p>
        It can be, if you can reach NCLC 7 in all four skills. Section 14 gives a second official language up to
        6 points per ability, at NCLC 9 or higher.
      </p>
      <p>
        Section 32 adds 25 for NCLC 7 or higher in all four French skills. It adds 25 more if your English is
        CLB 5 or higher in all four.
      </p>
      <p>
        Take the profile above at CLB 9 in English. NCLC 7 in all four French skills adds 62: 12 for the second
        language and 50 under section 32. That takes it from 418 to 480.
      </p>
      <p>
        French-language proficiency is also one of the ten categories on IRCC’s{' '}
        <a href={CATEGORIES} rel="noopener noreferrer" target="_blank" className={a}>
          category-based selection page
        </a>
        . That category asks for NCLC 7 in all four abilities. Our suggestion: if you are starting from nothing,
        treat French as a long project, not a quick fix.
      </p>

      <h2>Can a second degree or your spouse add points?</h2>
      <p>
        Yes, if each credential is assessed. IRCC’s{' '}
        <a href={ECA} rel="noopener noreferrer" target="_blank" className={a}>
          ECA page
        </a>{' '}
        says points for two or more credentials need an assessment for each one. Under section 11, two or more
        credentials, one of three years or more, earn a single applicant 128 points, against 120 for one.
      </p>
      <p>
        The bigger gain is in skill transferability. Section 21 treats that combination as an advanced
        credential, worth 50 with CLB 9 in all four instead of 25. For the profile above at CLB 9, it adds 33.
      </p>
      <p>
        Check how your degrees will be read first.{' '}
        <a href={IQAS_PK} rel="noopener noreferrer" target="_blank" className={a}>
          IQAS’s education guide for Pakistan
        </a>{' '}
        says a two-year pass BA, BSc or BCom generally compares to a two-year diploma. A master’s after it,
        taken together with it, generally compares to a four-year bachelor’s.
      </p>
      <p>
        IQAS says its guide is not an official assessment; only your ECA report decides. The steps for a
        Pakistani degree are in our{' '}
        <Link href="/express-entry/credential-assessment" className={a}>
          credential assessment guide
        </Link>
        .
      </p>
      <p>
        A spouse or partner coming with you can add up to 40 points. Their education earns up to 10 under
        section 17, with an ECA for foreign credentials. Their test earns 1, 3 or 5 per ability from CLB 5, 7
        and 9, up to 20 under section 18.
      </p>
      <p>
        A spouse with an assessed bachelor’s and CLB 9 in all four earns 28 spouse points. But once your
        spouse comes with you, your own age, education and language are scored on the lower “with spouse”
        column: the profile above at CLB 9 would score 421, only 3 more than 418. Their results must also
        be under two years old.
      </p>

      <h2>What about a nomination, a sibling or time in Canada?</h2>
      <p>
        A provincial nomination adds 600 points under section 28, once the province verifies it and you accept
        it. The points go if the province revokes it or you decline it. Which provincial routes work from
        abroad is in{' '}
        <Link href="/blog/express-entry-or-pnp" className={a}>
          Express Entry or a PNP
        </Link>
        .
      </p>
      <p>
        A brother or sister in Canada adds 15 under section 31. The sibling can be yours or your accompanying
        spouse’s, and must be 18 or older, a citizen or permanent resident, and living in Canada.
      </p>
      <p>
        Canadian study and work count only if they happen in Canada. Study needs at least eight months
        full-time while physically there (s. 30). Work must be done in Canada with temporary resident status
        (s. 15.1).
      </p>
      <p>
        On 3 November 2026, IRCC changed how Canadian work and job offers score. An offer now earns points only
        in an occupation on IRCC’s high-wage list, and an LMIA adds nothing. The details are in{' '}
        <Link href="/blog/express-entry-november-2026-crs-change" className={a}>
          Express Entry’s 3 November CRS change
        </Link>
        .
      </p>

      <h2>What does age do to your score?</h2>
      <p>
        Age is the one factor you cannot work on. Under section 10, a single applicant gets 110 points from 20
        to 29.
      </p>
      <p>
        After that the points fall each year: 105 at 30, 99 at 31 and 50 at 40. They reach zero at 45, and with
        a spouse coming the most is 100.
      </p>
      <p>
        For the profile above, turning 32 costs 5 points. IRCC’s{' '}
        <a href={IRCC_CALCULATOR} rel="noopener noreferrer" target="_blank" className={a}>
          own calculator
        </a>{' '}
        says that once you are invited, you enter your age on the date of the invitation.
      </p>
      <p>
        Our suggestion: if a birthday is near, finish the steps you control first, such as the test and the
        ECA.
      </p>

      <h2>What scores did recent rounds need?</h2>
      <p>
        IRCC’s calculator page says rounds pause while its system recalculates existing profiles under the
        new grid. As of 23 November 2026, IRCC’s{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds data
        </a>{' '}
        listed round #453 on 28 October as the latest. These were all the rounds in October 2026:
      </p>
      <div
        role="region"
        aria-label="Express Entry rounds in October 2026, from IRCC’s rounds data as read on 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Express Entry rounds in October 2026, with invitations issued and the lowest score invited, from
            IRCC’s rounds data as read on 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date, 2026</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Round</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Invitations</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Lowest score invited</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {OCTOBER_ROUNDS.map(([date, round, invited, crs]) => (
              <tr key={round}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{date}</th>
                <td className="px-3 py-3 sm:px-4">{round}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{invited}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{crs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        All of them used the points in force before 3 November, so they cannot tell you where the next
        cut-off will fall. A category round is open only to candidates who fit the category, and IRCC ranks
        them by CRS score within it. How those rounds work is in our{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          category-based draws guide
        </Link>
        .
      </p>
      <p>
        No score guarantees an invitation. Work out yours in our{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>
        , then check it on IRCC’s calculator; IRCC says its system’s results govern.
      </p>
    </>
  );
}
