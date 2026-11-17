import Link from 'next/link';

/**
 * Published 18 November 2026 with the site owner's approval. Every amount here is
 * set in the Immigration Rules, so it may be printed: Appendix Student ST 12.3 and
 * ST 12.4 (the student), ST 33.2 and ST 37.2 (partner and child). The new amounts
 * come from Statement of Changes HC 584 (laid 3 September 2026), paragraphs
 * APP ST8 to APP ST10, which take effect on 30 November 2026; applications made
 * before then are decided under the rules in force on 29 November 2026. "Date of
 * application" for entry clearance is the date the fee is paid (Immigration Rules,
 * Introduction). The 28-day and 31-day rules, account-holder rules and currency
 * conversion are from Appendix Finance; the mistakes list is from Appendix Finance,
 * ST 12.7 and GOV.UK's financial-evidence guidance. All read on 18 November 2026.
 *
 * Our own: the nine-month totals (arithmetic from the monthly amounts), and the
 * suggestions to top up now if applying in early December, to keep a margin for
 * the rupee rate, and not to rush an incomplete application to beat the date.
 * No visa fee or Immigration Health Surcharge is printed. After 30 November,
 * check that GOV.UK's Money page shows £1,570 and £1,203, and move `updated`.
 */
const a = 'font-semibold';

const HC584 =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible';
const HC584_EM =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/explanatory-memorandum-to-the-statement-of-changes-in-immigration-rules-hc-584-3-september-2026-accessible';
const APP_STUDENT = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student';
const APP_FINANCE = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance';
const RULES_INTRO = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction';
const MONEY = 'https://www.gov.uk/student-visa/money';
const FAMILY = 'https://www.gov.uk/student-visa/family-members';
const EVIDENCE = 'https://www.gov.uk/guidance/financial-evidence-for-student-and-child-student-route-applicants';

const AMOUNTS: [string, string, string][] = [
  ['Studying in London, per month', '£1,529', '£1,570'],
  ['Studying outside London, per month', '£1,171', '£1,203'],
  ['London, for nine months (the most you need)', '£13,761', '£14,130'],
  ['Outside London, for nine months', '£10,539', '£10,827'],
  ['Most you can deduct for a university accommodation deposit already paid', '£1,529', '£1,570'],
];

const MISTAKES: [string, string][] = [
  ['A dip in the balance.', 'If the money falls below the amount on any day, you have not held it for 28 days in a row.'],
  ['An old statement.', 'The closing balance must be dated within 31 days before the day you apply.'],
  [
    'The wrong account holder.',
    'Use your own account, a parent’s or legal guardian’s, or a partner’s if they are applying too or already have permission. An uncle’s or sibling’s account does not count.',
  ],
  [
    'A parent’s account without the paperwork.',
    'You need proof of the relationship and the parent’s written consent to your using the money.',
  ],
  [
    'Money that does not count.',
    'Overdrafts, cryptocurrency, stocks and shares, pensions and promises of future support are all excluded.',
  ],
  [
    'Money you cannot reach.',
    'The account must give immediate access. Money in a bank that is not regulated, or that UKVI cannot verify, is not counted.',
  ],
  [
    'A statement missing the basics.',
    'It must show your name, the bank’s name and how much money is in the account.',
  ],
  [
    'Spending the money too soon.',
    'If the balance is far lower by the decision date, the officer must be satisfied it went on fees, a deposit or study costs.',
  ],
];

export default function UkStudentVisaFunds30November2026() {
  return (
    <>
      <p>
        <strong>
          From 30 November 2026, a UK Student visa applicant must show £1,570 a month to study in
          London, or £1,203 a month elsewhere.
        </strong>{' '}
        The amount covers each month of the course, up to nine, on top of any course fees still unpaid.
        Applications made before 30 November use the old amounts of £1,529 and £1,171.
      </p>
      <p>
        Pakistan is not on the list of countries excused from sending bank evidence upfront. So you must
        send proof that you held the full amount for 28 days in a row.
      </p>
      <p>
        Here is what changes, as of 18 November 2026, and how to get the evidence right. Our{' '}
        <Link href="/uk" className={a}>
          UK guide
        </Link>{' '}
        covers the visas that can follow your studies.
      </p>

      <h2>What exactly changes on 30 November 2026?</h2>
      <p>
        The Home Office laid{' '}
        <a href={HC584} rel="noopener noreferrer" target="_blank" className={a}>
          Statement of Changes HC 584
        </a>{' '}
        before Parliament on 3 September 2026. Paragraphs APP ST8 to APP ST10 raise the monthly amounts
        in rule ST 12.3 of{' '}
        <a href={APP_STUDENT} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Student
        </a>{' '}
        and the deposit cap in ST 12.4. The{' '}
        <a href={HC584_EM} rel="noopener noreferrer" target="_blank" className={a}>
          explanatory memorandum
        </a>{' '}
        says the amounts now match the maintenance loans for home students in 2026/27.
      </p>
      <div role="region" aria-label="UK Student visa living-cost amounts before and from 30 November 2026, as set in Appendix Student and HC 584" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            UK Student visa living-cost amounts before and from 30 November 2026, as set in Appendix Student and HC 584
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Living costs</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Applied before 30 Nov</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Applied 30 Nov or later</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {AMOUNTS.map(([what, before, after]) => (
              <tr key={what}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{what}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{before}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The nine-month totals are our own arithmetic. A course that includes part of a month is rounded up
        to the next full month. You count as studying in London when your CAS places your study, or most
        of it, in Greater London.
      </p>
      <p>
        On 18 November 2026, GOV.UK’s{' '}
        <a href={MONEY} rel="noopener noreferrer" target="_blank" className={a}>
          Money you need page
        </a>{' '}
        still showed the old amounts. The memorandum explains that guidance is updated only when a rules
        change takes effect.
      </p>

      <h2>Which amount applies to your application?</h2>
      <p>
        HC 584 says applications made before 30 November 2026 are decided under the rules in force on 29
        November. So the date you apply decides the amount, not your course start date or the decision
        date.
      </p>
      <p>
        For a visa applied for from Pakistan, the{' '}
        <a href={RULES_INTRO} rel="noopener noreferrer" target="_blank" className={a}>
          Immigration Rules’ definition
        </a>{' '}
        makes the date of application the day you pay the visa fee. Your later appointment at the visa
        centre does not move it. Pay on or before 29 November and the old amounts apply.
      </p>
      <p>
        Do not rush an incomplete application to beat the date. The difference is at most £369 over nine
        months. A complete, correct application matters far more.
      </p>

      <h2>How does the 28-day rule work?</h2>
      <p>
        Rule ST 12.6 asks you to have held “the required level of funds” for 28 days. Under{' '}
        <a href={APP_FINANCE} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Finance
        </a>
        , the 28 days are counted back from the closing balance on your most recent statement. That
        statement must be dated within 31 days before the day you apply.
      </p>
      <p>
        If you apply on or after 30 November, the required level is the new amount, for all 28 days.
        Someone applying in early December may already be inside that window. If that is you, top up now.
      </p>
      <p>
        If your money is in rupees, it is converted into pounds at the OANDA spot rate for the date you
        apply. You cannot know that rate in advance, so keep a margin above the amount.
      </p>

      <h2>Do Pakistani students have to send bank evidence?</h2>
      <p>
        Yes. Rule ST 22.1 lets nationals of certain countries apply without sending financial evidence,
        although UKVI may still ask for it. Pakistan is not on that list, as of 18 November 2026.
      </p>
      <p>
        So you must send the evidence with the application. It can be bank statements, a student loan
        letter, or a letter from an official financial sponsor such as a government or university. The
        exemption for anyone with 12 months on a UK visa applies only inside the UK, not from Pakistan.
      </p>

      <h2>How much more do you need for a spouse or children?</h2>
      <p>
        Few students can bring family. GOV.UK’s{' '}
        <a href={FAMILY} rel="noopener noreferrer" target="_blank" className={a}>
          partner and children page
        </a>{' '}
        allows it for government-sponsored students on courses over six months. Otherwise you must be a
        full-time postgraduate on a PhD, another doctorate or a research-based higher degree.
      </p>
      <p>
        A taught master’s does not qualify. If you do qualify, rules ST 33.2 and ST 37.2 add £845 a month
        in London, or £680 elsewhere, per partner or child. The amounts cover up to nine months, are
        unchanged by HC 584 and must also be held for 28 days.
      </p>

      <h2>Which bank-evidence mistakes should you avoid?</h2>
      <p>
        These come from Appendix Finance, rule ST 12.7 and GOV.UK’s{' '}
        <a href={EVIDENCE} rel="noopener noreferrer" target="_blank" className={a}>
          financial evidence guidance
        </a>
        :
      </p>
      <ul>
        {MISTAKES.map(([t, d]) => (
          <li key={t}>
            <strong>{t}</strong> {d}
          </li>
        ))}
      </ul>

      <h2>What should you do before you apply?</h2>
      <ol>
        <li>Check your CAS for where you will study, your course length and any fees still unpaid.</li>
        <li>Work out the total: unpaid fees, plus the monthly amount for up to nine months.</li>
        <li>Hold that total, with a margin, for 28 days in a row, then get a statement that covers all 28 days.</li>
        <li>Pay the visa fee within 31 days of that statement’s date, and keep the money in place until the decision.</li>
      </ol>
      <p>
        If your course ends in 2027 or later, see how{' '}
        <Link href="/blog/uk-graduate-visa-18-months-2027" className={a}>
          the Graduate visa falls to 18 months
        </Link>
        . For the work routes that come after a Graduate visa, read our{' '}
        <Link href="/uk" className={a}>
          UK guide
        </Link>
        .
      </p>
    </>
  );
}
