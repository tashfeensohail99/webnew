import Link from 'next/link';

/**
 * Published 18 November 2026 with the site owner's approval. Every CRS figure
 * is from the Ministerial Instructions respecting the Express Entry system in
 * force since 3 November 2026 (ss. 8, 10–15.2, 17, 21–25), read on 18 November
 * 2026 and compared with the archived version in force from 25 March 2025 to
 * 2 November 2026. They match IRCC's CRS criteria page (modified 2026-11-03),
 * lib/crs-grid.ts and lib/crs-high-wage.ts. Also read that day: IRCC's
 * backgrounder of 16 October 2026, its 2026-changes, high-wage occupations, job
 * offer and rounds pages, and two fraud pages.
 *
 * The three profiles are made up and scored on that grid (checked against
 * scoreCrs). Our own suggestion, not IRCC's: check an offer's NOC code against
 * the list yourself, and make sure its duties match work you have really done.
 * Re-check when IRCC holds its first round on the new points or changes the list.
 */
const a = 'font-semibold';

const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const MI_ARCHIVED =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/25-march-2025-2-november-2026.html';
const BACKGROUNDER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html';
const CRS_CRITERIA =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html';
const CHANGES = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html';
const HIGH_WAGE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html';
const JOB_OFFER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html';
const ROUNDS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html';
const IRCC_CALCULATOR =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html';
const SCAMS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html';
const FRAUD =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html';

const LEVELS: [string, string, string][] = [
  ['2 times the median wage or more', '100', '70'],
  ['1.5 times, but under 2 times', '70', '40'],
  ['1.3 times, but under 1.5 times', '50', '20'],
  ['Not on the list', '0', '0'],
];

const EXAMPLES: [string, string, string, string][] = [
  ['Age', '110', '110', '80'],
  ['Education', '120', '120', '112'],
  ['First official language', '124 (4 × 31)', '124 (4 × 31)', '88 (4 × 22)'],
  ['Labour Market Integration', '0', '70', '0'],
  ['Spouse factors', '—', '—', '8'],
  ['Skill transferability', '75 (25 + 50)', '75 (25 + 50)', '38 (13 + 25)'],
];

export default function ExpressEntryNovember2026CrsChange() {
  return (
    <>
      <p>
        <strong>
          If you have never worked in Canada, IRCC’s new points factor helps you only through a job offer
          in a high-wage occupation.
        </strong>{' '}
        Without one, your CRS score is the same as it was before 3 November 2026. A genuine offer in an
        occupation on IRCC’s list adds 50, 70 or 100 points, and it no longer needs an LMIA.
      </p>

      <h2>What changed on 3 November 2026?</h2>
      <p>
        On that date, new{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>{' '}
        replaced the Canadian work experience factor with a Labour Market Integration factor. It sits in
        the core of the score, beside age, education and language. You get the greater of two scores,
        never both:
      </p>
      <ul>
        <li>
          <strong>Canadian work experience:</strong> the same length-of-work points as before, plus 20, 40
          or 70 for a year in a high-wage occupation.
        </li>
        <li>
          <strong>A qualifying job offer</strong> in a high-wage occupation: 50, 70 or 100 points,
          depending on the occupation’s level.
        </li>
      </ul>
      <p>
        The factor is capped at 150 points without an accompanying spouse or partner, and 140 with one.
        That raised the highest possible CRS score from 1,200 under the{' '}
        <a href={MI_ARCHIVED} rel="noopener noreferrer" target="_blank" className={a}>
          previous instructions
        </a>{' '}
        to 1,270. Everything else in the grid, from age to provincial nomination, reads exactly as before.
      </p>
      <p>
        IRCC sorts high-wage occupations into three levels, by how far the occupation’s median wage sits
        above the median wage of the whole Canadian workforce:
      </p>
      <div role="region" aria-label="Labour Market Integration points by high-wage occupation level, from the Ministerial Instructions in force since 3 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Labour Market Integration points by high-wage occupation level, from the Ministerial
            Instructions in force since 3 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Occupation’s level</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Job offer</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Extra for a year’s Canadian work in it</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {LEVELS.map(([level, offer, work]) => (
              <tr key={level}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{level}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{offer}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{work}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The work points are on top of length-of-work points, which reach 80 for five years without a
        spouse. Months at different levels can be combined, as IRCC’s{' '}
        <a href={CRS_CRITERIA} rel="noopener noreferrer" target="_blank" className={a}>
          CRS criteria page
        </a>{' '}
        explains.
      </p>

      <h2>Does the new factor help if you have never worked in Canada?</h2>
      <p>
        Only through a job offer. Under the Ministerial Instructions, Canadian work experience means work
        done in Canada in the last 10 years, while you held temporary resident status. Years worked in
        Lahore, Karachi or Dubai are not Canadian work, so the new factor does not count them.
      </p>
      <p>
        Foreign work still earns points where it always did: under skill transferability, paired with
        your language results. IRCC’s{' '}
        <a href={CHANGES} rel="noopener noreferrer" target="_blank" className={a}>
          page on the 2026 changes
        </a>{' '}
        says those rules are not changing. So with no Canadian work and no qualifying offer, the change
        gives you nothing and takes nothing away.
      </p>

      <h2>Which job offers earn points, and is an LMIA still needed?</h2>
      <p>
        No LMIA is needed. Since 3 November 2026, IRCC’s{' '}
        <a href={JOB_OFFER} rel="noopener noreferrer" target="_blank" className={a}>
          job offer page
        </a>{' '}
        says an offer qualifies without one, and having one adds no points or priority. The offer can be
        for a new position, with a new employer.
      </p>
      <p>
        To earn CRS points, the offer must be in an occupation on IRCC’s high-wage list. Under the
        Ministerial Instructions, it must also be for full-time work, at least 30 hours a week. It must
        last at least a year from the day your permanent resident visa is issued.
      </p>
      <p>
        An offer outside the list earns no CRS points. It can still help you qualify for the Federal
        Skilled Worker or Federal Skilled Trades Program, which IRCC assesses separately. As of 18 November
        2026, IRCC’s online profile may still ask for LMIA details, so follow its instructions when you add
        an offer.
      </p>

      <h2>Where do you find the list of eligible occupations?</h2>
      <p>
        IRCC publishes it on its{' '}
        <a href={HIGH_WAGE} rel="noopener noreferrer" target="_blank" className={a}>
          high-wage occupations page
        </a>
        , in three tables by level, with each occupation’s five-digit NOC code. The list in force since 3
        November 2026 can change. If it changes after you are invited, IRCC keeps the level that applied
        on the day of your invitation.
      </p>
      <p>
        The level belongs to the occupation’s NOC code, not to your salary, so a high salary in an
        unlisted occupation earns nothing. Related jobs can fall either side of the line. Financial
        auditors and accountants (NOC 11100) are listed at the lowest level; accounting technicians and
        bookkeepers (NOC 12200) are not listed.
      </p>
      <p>
        Our{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>{' '}
        lets you choose an offer’s occupation from the same list and adds the matching points.
      </p>

      <h2>How do the new points work out for three example profiles?</h2>
      <p>
        These profiles are made up, to show the arithmetic. Each is scored on the grid in force since 3
        November 2026. None has a sibling in Canada, French, Canadian study or a provincial nomination.
      </p>
      <ul>
        <li>
          <strong>A:</strong> aged 29 and single, with a three-year bachelor’s degree, CLB 9 in all four
          abilities and three years’ work in Pakistan. No Canadian work and no job offer.
        </li>
        <li>
          <strong>B:</strong> the same person, with a genuine offer as a software engineer (NOC 21231, the
          middle level).
        </li>
        <li>
          <strong>C:</strong> aged 33 and married, with a three-year bachelor’s degree, CLB 8 in all four
          abilities and four years’ bookkeeping in Pakistan. The spouse is coming too, has a bachelor’s
          degree and has no language test. C holds an offer as a bookkeeper (NOC 12200).
        </li>
      </ul>
      <div role="region" aria-label="CRS points for three made-up profiles on the grid in force since 3 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            CRS points for three made-up profiles on the grid in force since 3 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Factor</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">A</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">B</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">C</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {EXAMPLES.map(([factor, pa, pb, pc]) => (
              <tr key={factor}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{factor}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{pa}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{pb}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{pc}</td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="px-3 py-3 font-semibold text-ink-900 sm:px-4">Total</th>
              <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums sm:px-4">429</td>
              <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums sm:px-4">499</td>
              <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums sm:px-4">326</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A scores 110 + 120 + 124 + 75 = 429, exactly as before 3 November. Transferability gives 25 for
        the degree with CLB 9, and 50 for three years’ foreign work with CLB 9. B adds the offer’s 70
        points in the core factors, for 499; transferability never counts job offers, so it stays at 75.
      </p>
      <p>
        C scores 80 + 112 + 88 + 8 + 38 = 326, with or without the offer, because bookkeeping is not on the
        list. The 38 is 13 for the degree with CLB 8, and 25 for three or more years’ foreign work with CLB
        8. A genuine offer as a financial auditor or accountant (NOC 11100) would add 50, if C’s
        background fits that code.
      </p>
      <p>
        Your own profile will differ. Enter it in our{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>
        , then check the result on{' '}
        <a href={IRCC_CALCULATOR} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s own calculator
        </a>
        .
      </p>

      <h2>What does the change not do?</h2>
      <ul>
        <li>
          <strong>It does not guarantee an invitation.</strong> IRCC’s{' '}
          <a href={BACKGROUNDER} rel="noopener noreferrer" target="_blank" className={a}>
            backgrounder of 16 October 2026
          </a>{' '}
          says extra points do not guarantee one. Each round still has its own requirements and cut-off.
        </li>
        <li>
          <strong>It does not count work done outside Canada</strong> in the new factor, and it never adds
          job offer points to Canadian work points.
        </li>
        <li>
          <strong>It does not change the rest of the grid.</strong> Age, education, language, spouse,
          transferability and additional points are unchanged.
        </li>
      </ul>
      <p>
        IRCC paused rounds while its system recalculated existing profiles. On 18 November 2026, its{' '}
        <a href={ROUNDS} rel="noopener noreferrer" target="_blank" className={a}>
          rounds page
        </a>{' '}
        still listed 28 October 2026 as the latest round. There is no cut-off on the new points yet.
      </p>
      <p>
        A higher score also helps only in rounds you are eligible for. Which rounds were open to
        applicants abroad this year is covered in{' '}
        <Link href="/blog/express-entry-2026-so-far" className={a}>
          Express Entry in 2026 so far
        </Link>
        .
      </p>

      <h2>How can you tell whether a job offer is genuine?</h2>
      <p>
        An IRCC officer must be satisfied that an offer is genuine before it counts, for eligibility or for
        points. Under the Ministerial Instructions, the officer considers whether the employer is actively
        in business, needs the role and can meet the offer’s terms. They also look at whether you are
        qualified and likely to take the job, and at the employer’s record with employment laws.
      </p>
      <p>
        A revoked offer stops counting. IRCC’s{' '}
        <a href={SCAMS} rel="noopener noreferrer" target="_blank" className={a}>
          scam guidance
        </a>{' '}
        is plain: “No one can guarantee you a job or a visa to Canada.” It also warns about salaries that
        seem too high to be real.
      </p>
      <p>
        Its{' '}
        <a href={FRAUD} rel="noopener noreferrer" target="_blank" className={a}>
          fraud page
        </a>{' '}
        counts false job offers as fraud, and lists refusal and a possible ban from Canada among the
        consequences. Before you rely on an offer, check its NOC code against IRCC’s list yourself. Make
        sure the duties match work you have really done.
      </p>
      <p>
        How the whole route works, from eligibility to the pool, is in our{' '}
        <Link href="/express-entry" className={a}>
          Express Entry guide
        </Link>
        . To see where you stand on the new grid, start with the{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>
        .
      </p>
    </>
  );
}
