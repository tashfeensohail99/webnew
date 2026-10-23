import Link from 'next/link';

/**
 * Written from ontario.ca's OINP pages as they stood on 23 October 2026
 * (2026 updates page, updated 16 October; Ontario Workforce Priority stream
 * page, updated 20 October). We do not say what the top band was before
 * 5 October: Ontario's update does not state it, and the only sources that do
 * are consultants'.
 */
const BANDS: [string, string][] = [
  ['$80,000 or more', '10'],
  ['$70,000 – $79,999', '8'],
  ['$50,000 – $69,999', '6'],
  ['$30,000 – $49,999', '4'],
  ['Under $30,000', '0'],
];

const a = 'font-semibold';

export default function OntarioHigherEarners() {
  return (
    <>
      <p>
        A lot of people saw the headline this month: Ontario is giving higher earners more points. That
        is true. But the detail decides who it actually helps — and for most people applying from
        Pakistan or the Gulf, the honest answer is: not yet.
      </p>

      <h2>What changed on 5 October</h2>
      <p>
        Ontario now runs one main nomination stream, the <strong>Ontario Workforce Priority</strong>{' '}
        stream, which replaced its eight former streams. The regulation came into force on 25 June 2026 —
        Ontario calls it the first of a two-phase redesign — and the Expression of Interest system for
        the stream opened on 4 August.
      </p>
      <p>
        On 5 October 2026, Ontario updated one factor in how those Expressions of Interest are scored:{' '}
        <strong>Canadian work experience — earnings history</strong>. The change was applied
        automatically to every existing Expression of Interest, so nobody already registered needs to do
        anything. The points now look like this, for your highest earnings in a single year within the
        past five years:
      </p>

      <div className="overflow-hidden rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Ontario Workforce Priority stream: earnings history points from 5 October 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Earnings in a single year (past 5 years)</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {BANDS.map(([band, pts]) => (
              <tr key={band}>
                <th scope="row" className="px-4 py-3 font-medium text-ink-900">{band}</th>
                <td className="px-4 py-3 text-right font-serif text-lg text-ink-900">{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What the $80,000 is — and what it isn’t</h2>
      <ul>
        <li>
          <strong>It is a points band, not a requirement.</strong> You do not need to earn $80,000 to
          apply. Earning it gets you the maximum points for this one factor.
        </li>
        <li>
          <strong>It is Canadian income.</strong> Ontario checks it against a Canada Revenue Agency
          Notice of Assessment from the past five years — the tax assessment you receive after filing a
          Canadian tax return.
        </li>
        <li>
          <strong>It is separate from the wage rule.</strong> The job offer itself must pay at least the
          median wage for that job in its region, using Job Bank data. That is an eligibility condition;
          the earnings points are on top.
        </li>
      </ul>

      <h2>Who this actually helps</h2>
      <p>
        People already working in Canada, with Canadian tax history. Someone who has never filed a
        Canadian return has no Notice of Assessment, so scores <strong>zero</strong> on this factor —
        and, on Ontario’s score sheet, zero for legal status in Canada and for Ontario work experience
        too.
      </p>
      <p>
        That does not shut out applicants abroad. The stream can be used from outside Canada — Ontario
        has a recruitment-effort rule for employers that applies precisely when the candidate is living
        outside Canada. But it starts with a genuine job offer, and the earnings change does nothing for
        a candidate in Lahore or Dubai.
      </p>

      <h2>What the stream asks for</h2>
      <p>
        Every route through the Ontario Workforce Priority stream starts with a{' '}
        <strong>full-time, permanent job offer in Ontario</strong>. The employer starts the process; once
        they submit the offer, you have 30 days to register your Expression of Interest. (The one
        exception Ontario lists is self-employed physicians with an OHIP billing number.) Beyond the
        offer:
      </p>
      <ul>
        <li>
          <strong>Jobs in TEER 0–3:</strong> language at CLB 6 (CLB 5 for listed trades), a post-secondary
          credential, and either 6 months in the position or 2 years in the same occupation within the
          past 5 years.
        </li>
        <li>
          <strong>Jobs in TEER 4–5:</strong> language at CLB 4, a high school diploma, and 9 months in the
          position within the past 2 years.
        </li>
      </ul>
      <p>
        Registering is not an invitation. Ontario ranks Expressions of Interest from time to time — all
        at once or targeting particular traits — and an Expression of Interest expires after 12 months. As
        of 23 October 2026, Ontario had not yet published any invitation rounds for this stream, so
        there is no cut-off score to quote.
      </p>

      <h2>After a nomination</h2>
      <p>
        A nomination is not permanent residence. You apply to IRCC within six months, and IRCC makes the
        final decision. Nominees in TEER 0–3 jobs may be able to go through Express Entry, where a
        nomination adds 600 points to a CRS score — which is why Provincial Nominee Program cut-offs on
        our{' '}
        <Link href="/express-entry/draws" className={a}>
          Express Entry draws page
        </Link>{' '}
        look so high.
      </p>

      <h2>What to do with this</h2>
      <p>
        If you are already working in Ontario, check the earnings on your Notice of Assessment against
        the bands above — the change may already have moved your score. If you are in Pakistan or the
        Gulf, the question is not your salary but whether a genuine Ontario employer will offer you a
        full-time, permanent job. No consultant can register you for this stream without one.
      </p>
      <p>
        And keep the date in mind. This is phase one of Ontario’s redesign; phase two has not been
        published, and Ontario notes that its Act and regulations take precedence over its web pages.
        For how provincial nomination works in general — and how to tell a live stream from a closed
        one — read our{' '}
        <Link href="/pnp" className={a}>
          provincial nomination guide
        </Link>
        .
      </p>
    </>
  );
}
