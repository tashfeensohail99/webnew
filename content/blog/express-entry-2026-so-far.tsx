import Link from 'next/link';

/**
 * Figures read from IRCC's published rounds data on 23 October 2026 (latest
 * round #450, 16 October 2026). They are a snapshot and stay as written — the
 * live numbers are on /express-entry/draws.
 */
const ROWS: [string, number, string, string, string][] = [
  ['Canadian Experience Class', 18, '57,750', '507–523', 'Canadian work experience'],
  ['French-language proficiency', 11, '55,500', '382–435', 'FSW, CEC and FST'],
  ['Healthcare and social services', 3, '11,500', '467–475', 'FSW, CEC and FST'],
  ['Provincial Nominee Program', 20, '10,022', '697–805', 'A provincial nomination'],
  ['Trades occupations', 2, '6,500', '476–477', 'FSW, CEC and FST'],
  ['Senior managers (Canadian experience)', 3, '1,000', '389–429', 'Canadian work experience'],
  ['Physicians (Canadian experience)', 3, '891', '169–223', 'Canadian work experience'],
  ['Transport occupations', 1, '300', '470', 'FSW, CEC and FST'],
  ['Skilled military recruits', 1, '4', '368', '—'],
];

const a = 'font-semibold';

export default function ExpressEntry2026() {
  return (
    <>
      <p>
        By 16 October 2026, IRCC had held <strong>62 Express Entry rounds</strong> this year and issued{' '}
        <strong>143,467 invitations to apply</strong> — almost double the 74,183 it had issued by the same
        point in 2025, across 43 rounds. More invitations sounds like good news, and for some candidates
        it is.
      </p>
      <p>
        But for someone applying from Pakistan, the more important number this year is a different one:{' '}
        <strong>zero</strong>. That is how many rounds in 2026 were open to the whole pool.
      </p>

      <h2>Every round in 2026 was targeted</h2>
      <p>
        Each round this year invited from one group only: candidates with Canadian work experience,
        candidates with a provincial nomination, or candidates in a category IRCC chose — French speakers,
        or people working in a named field. Here is how the year divides, from IRCC’s own data:
      </p>

      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Express Entry rounds in 2026, by round type, to 16 October 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Round type</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Rounds</th>
              <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell">Invitations</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">CRS cut-offs</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">Open to</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {ROWS.map(([type, rounds, inv, crs, open]) => (
              <tr key={type}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{type}</th>
                <td className="px-3 py-3 text-right tabular-nums sm:px-4">{rounds}</td>
                <td className="hidden px-4 py-3 text-right tabular-nums sm:table-cell">{inv}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{crs}</td>
                <td className="hidden px-4 py-3 md:table-cell">{open}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The two biggest groups — Canadian Experience Class and French — account for 113,250 of the
        year’s invitations between them. Provincial Nominee Program rounds were the most frequent, but
        small; their cut-offs look high because a nomination adds 600 points to a CRS score.
      </p>

      <h2>What this means if you are applying from Pakistan</h2>
      <p>
        Most applicants in Pakistan or the Gulf enter the pool under the Federal Skilled Worker Program,
        without Canadian work experience. For them, 2026 has worked like this:
      </p>
      <ul>
        <li>
          <strong>The largest single share of invitations was not open to you.</strong> Canadian
          Experience Class rounds need Canadian work experience, and so did the senior-manager and
          physician rounds.
        </li>
        <li>
          <strong>What was open:</strong> the French-language rounds, the occupation rounds for
          healthcare, trades and transport — IRCC published all of these as open to Federal Skilled
          Worker, Canadian Experience Class and Federal Skilled Trades candidates — and provincial
          nomination.
        </li>
        <li>
          <strong>A high score on its own was not enough.</strong> With no round open to everyone, a
          Federal Skilled Worker candidate who fitted no category, had no French result and held no
          nomination had no round this year to be invited in — whatever their score.
        </li>
      </ul>
      <p>
        So the useful questions are not “what was the cut-off?” but these: does your work history
        genuinely sit inside one of the{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          categories IRCC selects by
        </Link>
        ? Would French be realistic for you? And is a{' '}
        <Link href="/pnp" className={a}>
          provincial nomination
        </Link>{' '}
        a route you could actually qualify for?
      </p>

      <h2>The pool you are competing with</h2>
      <p>
        IRCC’s snapshot of the pool on 12 October 2026 counted <strong>229,456 candidates</strong>. Of
        those, 22,387 scored above 500 — 749 of them above 600 — and another 71,612 scored between 451 and
        500. The live figures, and every round since, are on our{' '}
        <Link href="/express-entry/draws" className={a}>
          Express Entry draws page
        </Link>
        , which reads IRCC’s data every hour.
      </p>

      <h2>What a year of rounds does not tell you</h2>
      <p>
        None of this is a forecast. IRCC publishes no schedule, the categories are set by the Minister and
        can be added, changed or dropped, and a past cut-off commits IRCC to nothing. 2026 has been a year
        of targeted rounds; 2027 may not be. A plan that only works if this year’s pattern repeats is a
        fragile plan.
      </p>
      <p>
        What does carry over is the method: know your score precisely, know which programmes and
        categories you genuinely meet, and know which provincial streams fit your profile.{' '}
        <Link href="/tools/crs-calculator" className={a}>
          Work out your CRS score
        </Link>{' '}
        first — then the rounds above tell you something real about your position.
      </p>
    </>
  );
}
