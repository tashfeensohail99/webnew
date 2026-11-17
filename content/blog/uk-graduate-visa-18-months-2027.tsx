import Link from 'next/link';

/**
 * Published 18 November 2026 with the site owner's approval. The Graduate visa
 * lengths are set in the Immigration Rules, Appendix Graduate GR 8.1, as
 * substituted by Statement of Changes HC 1333 (laid 14 October 2025), paragraph
 * APP GR3, in force 11 November 2025: 3 years for a PhD or other doctorate;
 * 2 years for other qualifications if the application is made before 1 January
 * 2027; 18 months if it is made on or after that date. "Date of application" for
 * permission to stay is the date the online form is submitted and the fee paid
 * (Immigration Rules, Introduction). The 4 months a Student visa runs past a
 * course of 12 months or more is in Appendix Student ST 25.3. What the visa allows, the travel warning
 * and the switching note are from GOV.UK's Graduate visa pages (last updated
 * 13 November 2026). Settlement: only what Appendix Graduate itself says. All
 * read on 18 November 2026; no later Statement of Changes alters GR 8.1.
 *
 * Our own: the scenario table applies GR 8.1 to example course dates (the dates
 * are illustrations, not data), and the advice to ask the university when it will
 * report completion and to apply before travelling home in December. No visa
 * fee, Immigration Health Surcharge or processing time is printed.
 */
const a = 'font-semibold';

const GRADUATE = 'https://www.gov.uk/graduate-visa';
const COURSE = 'https://www.gov.uk/graduate-visa/course-you-studied';
const APPLY = 'https://www.gov.uk/graduate-visa/apply';
const FAMILY = 'https://www.gov.uk/graduate-visa/your-partner-and-children';
const APP_GRADUATE = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate';
const APP_STUDENT = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student';
const RULES_INTRO = 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction';
const HC1333 =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025-accessible-version';
const HC1333_EM =
  'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025/explanatory-memorandum-to-the-statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025-accessible';

const SCENARIOS: [string, string, string][] = [
  ['Master’s ended in 2026, and the university has reported completion', 'By 31 December 2026', '2 years'],
  ['Course ended in 2026, but completion is reported in January 2027', '2027', '18 months'],
  ['September 2026 start, one-year master’s', 'In 2027, after you finish', '18 months'],
  ['January 2027 start, one-year master’s', 'Late 2027 or 2028, after you finish', '18 months'],
  ['Two-year master’s or a bachelor’s ending in 2027 or later', '2027 or later', '18 months'],
  ['PhD or other doctorate', 'Any date', '3 years'],
];

export default function UkGraduateVisa18Months2027() {
  return (
    <>
      <p>
        <strong>
          If you start a UK master’s now, you will apply for your Graduate visa in 2027 or later, so it
          will last 18 months.
        </strong>{' '}
        The Immigration Rules give 2 years only to applications made before 1 January 2027. PhD and other
        doctoral graduates keep 3 years.
      </p>
      <p>
        What counts is the date you apply, not when your course started or ended. Here is how the rule
        works, and who can still get 2 years, as of 18 November 2026. Our{' '}
        <Link href="/uk" className={a}>
          UK guide
        </Link>{' '}
        covers the work visas you might move to afterwards.
      </p>

      <h2>What did the rules change, and when?</h2>
      <p>
        <a href={HC1333} rel="noopener noreferrer" target="_blank" className={a}>
          Statement of Changes HC 1333
        </a>
        , laid on 14 October 2025, rewrote rule GR 8.1 of{' '}
        <a href={APP_GRADUATE} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Graduate
        </a>{' '}
        from 11 November 2025. Doctoral graduates keep 3 years. Everyone else, including bachelor’s and
        master’s graduates, gets 2 years if they apply before 1 January 2027, and 18 months if they apply
        later.
      </p>
      <p>
        The{' '}
        <a href={HC1333_EM} rel="noopener noreferrer" target="_blank" className={a}>
          explanatory memorandum
        </a>{' '}
        gives the reason. It says too many graduates were not moving into graduate-level jobs, which the
        route was meant to lead to. No later Statement of Changes, up to 18 November 2026, alters the rule.
      </p>

      <h2>Who keeps 2 years, and who gets 18 months?</h2>
      <p>
        The rule turns on one date: the day you apply. Applied to the timings a student from Pakistan is
        likely to face, it works out like this:
      </p>
      <div role="region" aria-label="Graduate visa length by when you apply, under Appendix Graduate GR 8.1 as of 18 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Graduate visa length by when you apply, under Appendix Graduate GR 8.1 as of 18 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Your situation</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">When you apply</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Visa length</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {SCENARIOS.map(([who, when, length]) => (
              <tr key={who}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{who}</th>
                <td className="px-3 py-3 sm:px-4">{when}</td>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The course dates are examples. Check your own end date, and ask your university when it will
        report your completion.
      </p>

      <h2>What counts as the date you apply?</h2>
      <p>
        Under the{' '}
        <a href={RULES_INTRO} rel="noopener noreferrer" target="_blank" className={a}>
          Immigration Rules’ definition
        </a>
        , an application made in the UK dates from the day you submit the online form and pay. The
        application is valid only once the fee and the Immigration Health Charge are paid.
      </p>
      <p>
        You cannot apply early, though.{' '}
        <a href={GRADUATE} rel="noopener noreferrer" target="_blank" className={a}>
          GOV.UK’s Graduate visa page
        </a>{' '}
        says you can apply only once your university has told the Home Office you have successfully
        completed the course. You do not have to wait for graduation or your certificate.
      </p>
      <p>
        The visa runs from the day the application is approved. So a 2-year visa applied for in December
        2026 still lasts 2 years, even if the decision comes in 2027.
      </p>

      <h2>How can you make sure you are covered?</h2>
      <p>
        Under rule ST 25.3 of{' '}
        <a href={APP_STUDENT} rel="noopener noreferrer" target="_blank" className={a}>
          Appendix Student
        </a>
        , a Student visa runs 4 months past the end of a course of 12 months or more. So a one-year
        master’s ending in September 2026 can leave your visa valid into 2027. Do not wait for it to run
        down: an application made after 31 December gets 18 months.
      </p>
      <ul>
        <li>Ask your university whether it has reported your completion, and if not, when it will.</li>
        <li>Submit and pay by 31 December 2026, while you are in the UK and your Student visa is still valid.</li>
        <li>
          Do not travel home in December with an application pending. GOV.UK’s{' '}
          <a href={APPLY} rel="noopener noreferrer" target="_blank" className={a}>
            apply page
          </a>{' '}
          says leaving the UK, Ireland, the Channel Islands or the Isle of Man before a decision withdraws
          it.
        </li>
        <li>
          If a government or international scholarship paid both your fees and living costs in the last 12
          months, get its written consent first.
        </li>
      </ul>
      <p>
        Your partner and children can stay only if they hold dependant visas on your Student visa. A child
        born in the UK during your stay can also apply. GOV.UK’s{' '}
        <a href={FAMILY} rel="noopener noreferrer" target="_blank" className={a}>
          partner and children page
        </a>{' '}
        says their visas end on the same date as yours.
      </p>

      <h2>What can you do on a Graduate visa?</h2>
      <p>
        The route is unsponsored, so you need no job offer or employer to apply. To qualify, you must have
        completed an eligible course at a university with a track record of compliance. The{' '}
        <a href={COURSE} rel="noopener noreferrer" target="_blank" className={a}>
          course rules
        </a>{' '}
        also require at least 12 months of study in the UK, or the whole course if it was shorter.
      </p>
      <ul>
        <li>You can work in most jobs, look for work, be self-employed and do unpaid voluntary work.</li>
        <li>You can travel abroad and return to the UK.</li>
        <li>You cannot claim most benefits (public funds) or work as a professional sportsperson.</li>
        <li>You can study only a course that would not qualify for a Student visa.</li>
      </ul>

      <h2>Can you extend it, or settle on it?</h2>
      <p>
        No. GOV.UK says you cannot extend a Graduate visa, and rule GR 1.4 bars anyone who has held one
        before. Appendix Graduate states plainly that the route is not a route to settlement.
      </p>
      <p>
        To stay longer, you would need to switch to another visa, such as Skilled Worker. Our{' '}
        <Link href="/uk" className={a}>
          UK guide
        </Link>{' '}
        sets out that route’s salary and job rules. If you have not yet applied for your Student visa, read
        about{' '}
        <Link href="/blog/uk-student-visa-funds-30-november-2026" className={a}>
          the funds you must show from 30 November 2026
        </Link>{' '}
        first.
      </p>
    </>
  );
}
