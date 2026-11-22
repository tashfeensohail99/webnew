import Link from 'next/link';

/**
 * Published 18 November 2026 on the firm's instruction. Official statistics,
 * printed with their source and date: the European Commission's (DG HOME) visa
 * statistics for consulates, 2025 and 2024 files, both downloaded on
 * 18 November 2026 from its "Statistics on short-stay visas" page.
 *
 * Files and sheet: 2025-consulates-schengen-visa-statistics.xlsx and
 * 2024-schengen-visa-statistics-consulates_en.xlsx, sheet "Data for consulates".
 * Method: every row whose "Country where consulate is located" is PAKISTAN,
 * summed by Schengen State. Uniform (C) visas only; airport transit visas are
 * left out. The rate is the file's own formula: uniform visas not issued /
 * (uniform visas issued + LTVs issued + uniform visas not issued). Our totals
 * equal the PAKISTAN line of each file's "Totals - third country" sheet.
 *
 * Definitions are from the Commission's "Visa statistics - quality and metadata
 * reporting" note (last update 9 November 2026). Refusal grounds, the appeal right
 * and the competent state are from Regulation (EC) No 810/2009 (Visa Code),
 * consolidated version of 28 June 2024 on EUR-Lex, read 18 November 2026.
 *
 * Our own choices and suggestions: the 1,000-application line used when naming
 * the highest and lowest rates, and the advice to keep documents consistent.
 * The note says the data are disseminated in May: re-check for 2026 figures in
 * May 2027, and add a new post rather than rewriting this one.
 */
const a = 'font-semibold';

const STATS = 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en';
const METADATA =
  'https://home-affairs.ec.europa.eu/document/download/b4626219-fa37-4650-8216-0c2bda466c74_en?filename=visa_statistics_-_quality_and_metadata_reporting.pdf';
const VISA_CODE = 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628';

/** Measure, 2024, 2025, change. Consulates located in Pakistan, uniform short-stay visas. */
const TOTALS: [string, string, string, string][] = [
  ['Applications', '78,362', '89,270', '+13.9%'],
  ['Uniform visas issued', '38,097', '45,970', '+20.7%'],
  ['… of which multiple-entry', '17,833', '18,771', '+5.3%'],
  ['Visas with limited territorial validity', '795', '1,251', '+57.4%'],
  ['Not issued', '35,139', '40,026', '+13.9%'],
  ['Not-issued rate', '47.5%', '45.9%', '−1.6 points'],
];

/** State, consulates, applications 2025, issued 2025, not issued 2025, rate 2025, rate 2024. */
const STATES: [string, string, string, string, string, string, string][] = [
  ['Germany', 'Islamabad, Karachi', '18,792', '14,040', '4,597', '24.2%', '31.6%'],
  ['Netherlands', 'Islamabad', '13,108', '5,952', '6,914', '53.4%', '51.0%'],
  ['Spain', 'Islamabad', '12,296', '4,269', '5,600', '55.5%', '56.0%'],
  ['Italy', 'Islamabad, Karachi', '10,809', '6,439', '4,370', '39.2%', '31.7%'],
  ['France', 'Islamabad', '9,503', '5,975', '3,575', '37.2%', '41.7%'],
  ['Denmark', 'Islamabad', '5,539', '1,173', '4,325', '78.7%', '78.6%'],
  ['Belgium', 'Islamabad', '4,987', '2,032', '2,807', '57.4%', '61.1%'],
  ['Switzerland', 'Islamabad', '4,682', '2,253', '2,351', '50.2%', '34.9%'],
  ['Austria', 'Islamabad', '2,543', '636', '1,758', '73.3%', '83.5%'],
  ['Portugal', 'Islamabad', '2,300', '1,181', '1,119', '48.0%', '45.5%'],
  ['Hungary', 'Islamabad', '1,701', '544', '1,114', '67.2%', '53.2%'],
  ['Romania', 'Islamabad', '801', '238', '563', '70.3%', '49.0%'],
  ['Poland', 'Islamabad', '690', '206', '480', '67.7%', '70.9%'],
  ['Greece', 'Islamabad', '631', '398', '226', '36.0%', '68.5%'],
  ['Czech Republic', 'Islamabad', '398', '350', '48', '12.1%', '23.5%'],
  ['Bulgaria', 'Islamabad', '393', '196', '173', '46.8%', '38.9%'],
  ['Sweden', 'Islamabad', '97', '88', '6', '6.4%', '1.9%'],
];

const GROUNDS: string[] = [
  'presents a false, counterfeit or forged travel document;',
  'does not justify the purpose and conditions of the intended stay;',
  'does not show enough money for the stay and the return journey, or a lawful way to get it;',
  'has already stayed 90 days in the current 180-day period on a uniform or limited-validity visa;',
  'has an alert in the Schengen Information System (SIS) for refusal of entry;',
  'is considered a threat to public policy, internal security, public health or a member state’s international relations;',
  'does not show adequate and valid travel medical insurance, where it is required.',
];

export default function SchengenVisaRefusalsPakistan2025() {
  return (
    <>
      <p>
        <strong>
          In 2025, Schengen consulates in Pakistan received 89,270 short-stay visa applications and did
          not issue a visa in 40,026 cases: 45.9% of decisions.
        </strong>{' '}
        That is the European Commission’s official figure, read on 18 November 2026, against 47.5% in
        2024 and 14.6% worldwide in 2025. Among states with over 1,000 applications, Denmark (78.7%) and Austria
        (73.3%) had the highest rates, and Germany the lowest (24.2%).
      </p>

      <h2>What do the 2025 figures show?</h2>
      <p>
        Every Schengen state reports its visa figures to the European Commission each year, as Article 46
        of the Visa Code requires. The Commission publishes them on its{' '}
        <a href={STATS} rel="noopener noreferrer" target="_blank" className={a}>
          short-stay visa statistics page
        </a>
        , with one row per consulate. We added up the rows for consulates in Pakistan in the 2025 and 2024
        files.
      </p>
      <div role="region" aria-label="Schengen short-stay visa figures for consulates in Pakistan, 2024 and 2025, from the European Commission’s visa statistics" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Schengen short-stay visa figures for consulates in Pakistan, 2024 and 2025, from the European
            Commission’s visa statistics
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Consulates in Pakistan</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">2024</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">2025</th>
              <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {TOTALS.map(([measure, y24, y25, change]) => (
              <tr key={measure}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{measure}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{y24}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{y25}</td>
                <td className="hidden whitespace-nowrap px-4 py-3 text-right tabular-nums sm:table-cell">{change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Our totals match the Pakistan line that the Commission prints in the same files. Worldwide, the
        2025 file records 12,201,026 applications and a not-issued rate of 14.6%, so Pakistan’s rate was
        about three times the world figure. Source:{' '}
        <a href={STATS} rel="noopener noreferrer" target="_blank" className={a}>
          European Commission visa statistics
        </a>
        , 2024 and 2025 consulate files, read 18 November 2026.
      </p>

      <h2>Which Schengen countries refuse most in Pakistan?</h2>
      <p>
        The table lists every Schengen state with a consulate row in Pakistan, sorted by 2025
        applications. All 17 report from Islamabad, and Germany and Italy also report from Karachi. The
        files have no Lahore row.
      </p>
      <div role="region" aria-label="Schengen short-stay visas at consulates in Pakistan by Schengen state, 2025, with the 2024 not-issued rate, from the European Commission’s visa statistics" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Schengen short-stay visas at consulates in Pakistan by Schengen state, 2025, with the 2024
            not-issued rate, from the European Commission’s visa statistics
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Schengen state</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Applications 2025</th>
              <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell">Issued</th>
              <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell">Not issued</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Rate 2025</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Rate 2024</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {STATES.map(([state, where, apps, issued, notIssued, r25, r24]) => (
              <tr key={state}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">
                  {state}
                  <span className="block text-xs font-normal text-ink-500">{where}</span>
                </th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{apps}</td>
                <td className="hidden whitespace-nowrap px-4 py-3 text-right tabular-nums sm:table-cell">{issued}</td>
                <td className="hidden whitespace-nowrap px-4 py-3 text-right tabular-nums sm:table-cell">{notIssued}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{r25}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{r24}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t border-rule">
            <tr>
              <th scope="row" className="px-3 py-3 font-semibold text-ink-900 sm:px-4">All consulates in Pakistan</th>
              <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums sm:px-4">89,270</td>
              <td className="hidden whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums sm:table-cell">45,970</td>
              <td className="hidden whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums sm:table-cell">40,026</td>
              <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums sm:px-4">45.9%</td>
              <td className="whitespace-nowrap px-3 py-3 text-right font-semibold tabular-nums sm:px-4">47.5%</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p>
        By rate, Denmark, Austria, Romania, Poland and Hungary did not issue a visa in more than two-thirds
        of their decisions. By number, the Netherlands (6,914), Spain (5,600) and Germany (4,597) had the
        most cases without a visa. Germany received the most applications, 18,792, and had the lowest rate
        of any state with over 1,000.
      </p>
      <p>
        What Denmark’s own rules say about applicants from Pakistan, and how to appeal a Danish refusal,
        is in our{' '}
        <Link href="/europe/denmark-visit-visa" className={a}>
          Denmark visit visa guide
        </Link>
        .
      </p>
      <p>
        Small numbers move easily: Sweden’s 6.4% rests on 97 applications. Eleven Schengen states have no
        Pakistan row at all: Croatia, Estonia, Finland, Iceland, Latvia, Lithuania, Luxembourg, Malta,
        Norway, Slovakia and Slovenia.
      </p>

      <h2>How did 2025 compare with 2024?</h2>
      <p>
        Applications rose 13.9% and visas issued rose 20.7%, and the overall rate fell 1.6 points, from
        47.5% to 45.9%. Germany’s rate fell from 31.6% to 24.2%, Austria’s from 83.5% to 73.3%, and
        Greece’s from 68.5% to 36.0%. Rates rose in Switzerland (34.9% to 50.2%), Hungary (53.2% to 67.2%)
        and Romania (49.0% to 70.3%).
      </p>
      <p>
        Two comparisons are not like for like. The 2025 file has a row for Italy’s consulate in Karachi,
        with 6,846 applications, and the 2024 file has none. Most of Italy’s rise, from 3,433 to 10,809,
        is that new row.
      </p>
      <p>
        Bulgaria’s and Romania’s 2024 rows cover only the period after 31 March 2024. The file lists their
        national visas before that date on a separate sheet, which we left out.
      </p>

      <h2>What can these numbers not tell you?</h2>
      <p>
        The Commission’s{' '}
        <a href={METADATA} rel="noopener noreferrer" target="_blank" className={a}>
          quality and metadata note
        </a>{' '}
        defines what the files count. It matters before you read anything into a single rate.
      </p>
      <ul>
        <li>
          <strong>Where, not who.</strong> Figures are by the country where the application is made, not
          the applicant’s nationality. A Pakistani who applies in Dubai is not in these numbers; a
          non-Pakistani who applies in Islamabad is.
        </li>
        <li>
          <strong>Not issued is not only refused.</strong> The note says “not issued” covers refused visas
          and applications whose examination was discontinued.
        </li>
        <li>
          <strong>Applications, not people.</strong> Each application is one person, children included.
          The files count applications, so someone who applied twice in a year counts twice.
        </li>
        <li>
          <strong>No reasons, no purpose.</strong> The files do not split figures by refusal ground or by
          purpose of travel. A state’s rate mixes tourists, business travellers, family visits and
          everyone else.
        </li>
        <li>
          <strong>Decisions, not applications.</strong> The rate divides visas not issued by all
          decisions: visas issued, limited-validity visas and visas not issued. The 2025 Pakistan rows
          show 87,247 decisions against 89,270 applications.
        </li>
        <li>
          <strong>The past, not your case.</strong> A rate describes a year of decisions at one
          consulate. It says nothing about how any one application will be decided.
        </li>
      </ul>

      <h2>Why are Schengen visas refused?</h2>
      <p>
        Article 32 of the{' '}
        <a href={VISA_CODE} rel="noopener noreferrer" target="_blank" className={a}>
          EU Visa Code
        </a>
        , Regulation (EC) No 810/2009, lists the grounds. We read the consolidated version of 28 June 2024
        on 18 November 2026. In plain terms, a visa is refused if the applicant:
      </p>
      <ul>
        {GROUNDS.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>
        A visa is also refused where there are reasonable doubts about the documents or their contents.
        The same applies to doubts about the applicant’s statements, or about whether they will leave
        before the visa expires. The statistics do not say which of these grounds applied in Pakistan.
      </p>

      <h2>Can you appeal a Schengen refusal?</h2>
      <p>
        Yes. Under Article 32, you get the refusal and its reasons on a standard form, in the deciding
        state’s language and another official EU language. Refused applicants have a right to appeal
        against the state that took the final decision, under that state’s own law.
      </p>
      <p>
        That state must tell you the procedure to follow. Because each state’s law sets the procedure,
        read your refusal form closely: the ground it gives is the one to answer. Our{' '}
        <Link href="/europe" className={a}>
          Europe guide
        </Link>{' '}
        covers Schengen visitor visas from Pakistan in more detail.
      </p>

      <h2>What can you do before you apply?</h2>
      <p>
        Apply to the right state. Article 5 makes your sole destination competent or, on a trip to several
        states, your main destination by days of stay or by purpose. With no main destination, it is the
        state where you will first enter the Schengen area.
      </p>
      <p>
        So a lower refusal rate elsewhere is not a reason to apply there; your trip decides the state.
        Article 6 adds that you apply at that state’s consulate for the place where you legally live.
      </p>
      <p>
        Keep every document consistent. Article 32 lets a consulate refuse where it doubts your
        documents, your statements or your plan to leave. Our suggestion: check that your form, itinerary,
        bookings, letters and bank statements tell the same story.
      </p>
      <p>
        For the wider picture, see our{' '}
        <Link href="/europe" className={a}>
          Europe guide
        </Link>
        . We report{' '}
        <Link href="/canada-immigration-statistics-pakistan" className={a}>
          IRCC’s figures for Pakistanis going to Canada
        </Link>{' '}
        the same way: official counts, with a date and a source.
      </p>
    </>
  );
}
