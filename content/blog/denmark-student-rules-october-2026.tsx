import Link from 'next/link';

/**
 * Published 22 November 2026 on the firm's instruction. From SIRI's pages as they
 * stood on 22 November 2026: Higher educational programmes, the two job-seeking
 * pages and Work permit during the job seeking period (all last updated
 * 01-10-2026), Accompanying family to students and PhD students, and the news
 * items of 30-09-2026, 01-05-2025 (updated 25-04-2026) and 01-04-2023. Legal text
 * read on Retsinformation the same day, in Danish: BEK nr 829 af 24/09/2026
 * (§ 5 job seeking, § 10 family, § 16 work, § 17 transition; in force 1 October
 * 2026), BEK nr 950 af 25/06/2025 § 5(2) (the 3-year rule it replaced) and
 * BEK nr 423 af 30/04/2025 (in force 2 May 2025). Pakistan submission point from
 * the Danish Embassy in Islamabad's residence-permit page.
 *
 * Every number printed is set in those executive orders. No fees or funds are
 * printed; the post links SIRI for them. Our own suggestions, not SIRI's: check a
 * programme's status before accepting a place, plan as if family cannot join, and
 * ask SIRI before changing programme.
 */
const a = 'font-semibold';

const HIGHER_ED = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education';
const NEWS_2026 = 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende';
const NEWS_2025 = 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2025/05/Nye-regler-ikkestatsligt-godkendte-udd';
const FAMILY = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---study-and-PhD/';
const JOB_SEEKING = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Study---job-seeking/Study---3-years-job-seeking';
const UNLIMITED = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Work-permit--job-seeking/';
const ORDER_2026 = 'https://www.retsinformation.dk/eli/lta/2026/829';
const ORDER_2025 = 'https://www.retsinformation.dk/eli/lta/2025/423';
const EMBASSY = 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/';

const STATE_APPROVED: [string, string, string][] = [
  ['Work during term, September to May', 'Up to 90 hours a month', 'Unchanged: up to 90 hours a month'],
  ['Work in June, July and August', 'Full time', 'Unchanged: full time'],
  ['Job seeking after a bachelor’s, professional bachelor’s or master’s', 'Up to 3 years', 'Up to 1 year'],
  ['Job seeking after an academy profession (AP) degree', '6 months', 'Unchanged: 6 months'],
  ['Spouse or partner', 'Allowed, if the spouse also applied before 1 October 2026', 'Not allowed'],
  ['Children under 18', 'Allowed, even if the child applies later', 'Not allowed'],
  ['PhD students', 'Up to 3 years’ job seeking; family can join', 'Unchanged'],
];

const NON_STATE: [string, string, string][] = [
  ['Work while studying', 'Limited work permit', 'No right to work'],
  ['Job seeking after graduating', '6 months', 'None'],
  ['Spouse or partner', 'Allowed, if they also applied before 2 May 2025', 'Not allowed'],
  ['Children under 18', 'Allowed, even if the child applies later', 'Not allowed'],
];

function RuleTable({ caption, before, after, rows }: { caption: string; before: string; after: string; rows: [string, string, string][] }) {
  return (
    <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
          <tr>
            <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Rule</th>
            <th scope="col" className="px-3 py-3 font-semibold sm:px-4">{before}</th>
            <th scope="col" className="px-3 py-3 font-semibold sm:px-4">{after}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-rule">
          {rows.map(([rule, was, now]) => (
            <tr key={rule}>
              <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{rule}</th>
              <td className="px-3 py-3 sm:px-4">{was}</td>
              <td className="px-3 py-3 sm:px-4">{now}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DenmarkStudentRulesOctober2026() {
  return (
    <>
      <p>
        <strong>
          Since 1 October 2026, most new student applicants in Denmark get a shorter job-seeking permit
          and cannot bring a spouse or children.
        </strong>{' '}
        After a state-approved bachelor’s or master’s, you now get up to 1 year to look for work, not up
        to 3. Work hours are unchanged, and the date you submit your
        application decides which rules apply.
      </p>
      <p>
        This post sets out the rules as SIRI and Danish law stated them on 22 November 2026. Fees and the
        funds you must show are not covered here; SIRI lists them.
      </p>

      <h2>What changed on 1 October 2026?</h2>
      <p>
        SIRI, Denmark’s Agency for International Recruitment and Integration,{' '}
        <a href={NEWS_2026} rel="noopener noreferrer" target="_blank" className={a}>
          announced the change on 30 September 2026
        </a>
        . The legal text is a new{' '}
        <a href={ORDER_2026} rel="noopener noreferrer" target="_blank" className={a}>
          Executive Order on Study
        </a>{' '}
        (BEK 829 of 24 September 2026, in Danish), in force from 1 October 2026. It covers students
        from outside the EU, EEA and Switzerland, so it covers Pakistani citizens.
      </p>
      <p>
        The table compares state-approved programmes below PhD level, plus PhDs for contrast. SIRI names
        an exception for some Turkish citizens; it does not extend to Pakistanis.
      </p>
      <RuleTable
        caption="Danish student rules for state-approved programmes, before and after 1 October 2026, as stated by SIRI and BEK 829 of 2026"
        before="Student applied before 1 Oct 2026"
        after="Student applied on or after 1 Oct 2026"
        rows={STATE_APPROVED}
      />
      <p>
        The 3-year job-seeking period itself dated from 1 April 2023; before that, graduates got 6 months.
        Our{' '}
        <Link href="/europe" className={a}>
          Europe guide
        </Link>{' '}
        covers the other European routes from Pakistan.
      </p>

      <h2>Which rules apply to you?</h2>
      <p>
        It depends on the date your application was submitted, not the date SIRI decides it. SIRI’s
        announcement is explicit on this point. These are the common cases:
      </p>
      <ul>
        <li>
          <strong>You applied before 1 October 2026.</strong> After a bachelor’s or master’s, you keep up
          to 3 years to look for work. Your children under 18 can still join you, even if they apply later.
        </li>
        <li>
          <strong>You applied before, but your spouse had not.</strong> A spouse or partner who applies on
          or after 1 October 2026 cannot get a family permit through you.
        </li>
        <li>
          <strong>You apply now, for example for a 2027 start.</strong> The new rules apply in full: up to
          1 year to look for work, and no family permits.
        </li>
      </ul>
      <p>
        The Executive Order keeps the old job-seeking rule for anyone who applied for, or was granted, a
        student permit before 1 October 2026. Changing programme needs a new application, so ask SIRI how
        the date rule applies to you before you switch.
      </p>

      <h2>How many hours can you work while you study?</h2>
      <p>
        The October change did not touch work rights. Section 16 of the Executive Order lets most
        students work up to 90 hours a month, counted per calendar month.
      </p>
      <p>
        They may also work full time in June, July and August. SIRI’s{' '}
        <a href={HIGHER_ED} rel="noopener noreferrer" target="_blank" className={a}>
          higher education page
        </a>{' '}
        applies the 90 hours to the normal study period, September to May.
      </p>
      <p>
        Permits issued before 1 July 2024 were written as 20 hours a week, and the Executive Order lets
        their holders use either measure. Working beyond your limit is illegal work. SIRI says it can lead
        to a warning, a fine or the loss of your permit.
      </p>

      <h2>Can your spouse or children come with you?</h2>
      <p>
        Not if you apply from 1 October 2026 for a state-approved programme below PhD level. The Executive
        Order now gives family permits to the family of PhD students and of people seeking a Danish
        professional authorisation, not other students. SIRI’s{' '}
        <a href={FAMILY} rel="noopener noreferrer" target="_blank" className={a}>
          accompanying-family page
        </a>{' '}
        applies this to spouses, registered and cohabiting partners, and children under 18.
      </p>
      <p>
        The transition rules differ for partners and children. A spouse or partner needs both your
        application and theirs to be in before 1 October 2026. A child under 18 needs only yours to be in
        before that date.
      </p>
      <p>
        If your family planned to move with you, settle that before you accept a place. A spouse could
        still apply for a permit in their own right, for example with a job offer, under that scheme’s
        rules.
      </p>

      <h2>How long can you stay to look for work after graduating?</h2>
      <p>
        SIRI grants the job-seeking permit together with your student permit, if your passport is valid
        long enough. Its{' '}
        <a href={JOB_SEEKING} rel="noopener noreferrer" target="_blank" className={a}>
          job-seeking page
        </a>{' '}
        and section 5 of the Executive Order set the length by degree and application date:
      </p>
      <ul>
        <li>Bachelor’s, professional bachelor’s or master’s, applied from 1 October 2026: up to 1 year.</li>
        <li>The same degrees, applied before 1 October 2026: up to 3 years.</li>
        <li>Academy profession degree, or master’s for working professionals: 6 months.</li>
        <li>PhD: up to 3 years, whatever the date.</li>
      </ul>
      <p>
        During that period you keep the student limit of 90 hours a month and full time in summer.
        Graduates of a bachelor’s, professional bachelor’s, master’s or PhD can apply for a{' '}
        <a href={UNLIMITED} rel="noopener noreferrer" target="_blank" className={a}>
          work permit without limitations
        </a>{' '}
        for the period; AP graduates cannot. A job offer lets you apply for a work permit, and a business
        you start in Denmark may qualify for{' '}
        <Link href="/europe/denmark-startup-visa" className={a}>
          Start-up Denmark
        </Link>
        .
      </p>

      <h2>What changed for programmes that are not state-approved?</h2>
      <p>
        A separate change came earlier, on 2 May 2025, under{' '}
        <a href={ORDER_2025} rel="noopener noreferrer" target="_blank" className={a}>
          BEK 423 of 30 April 2025
        </a>
        . It hit programmes that are not approved by a state authority but hold an advisory statement
        instead. SIRI’s{' '}
        <a href={NEWS_2025} rel="noopener noreferrer" target="_blank" className={a}>
          news item
        </a>{' '}
        says the aim is to grant permits only to students whose real intention is to study.
      </p>
      <RuleTable
        caption="Danish student rules for non-state-approved programmes, before and after 2 May 2025, as stated by SIRI"
        before="Applied before 2 May 2025"
        after="Applied on or after 2 May 2025"
        rows={NON_STATE}
      />
      <p>
        So check a programme’s status before you accept a place. Since 15 September 2026, advisory
        statements come from the secretariat to the Danish Accreditation Council. The Danish Evaluation
        Institute, which issued them before, closed on 1 July 2026.
      </p>

      <h2>What should you check before applying from Pakistan?</h2>
      <ul>
        <li>
          <strong>The programme’s status.</strong> State-approved, or only an advisory statement? The
          answer decides your work and job-seeking rights.
        </li>
        <li>
          <strong>Your family plans.</strong> Every new application now falls under the 1 October 2026
          rules, so plan as if your spouse and children cannot join you.
        </li>
        <li>
          <strong>Fees and funds.</strong> SIRI lists the processing fee and the money you must show on
          its{' '}
          <a href={HIGHER_ED} rel="noopener noreferrer" target="_blank" className={a}>
            higher education page
          </a>
          . Read them on the day you apply.
        </li>
        <li>
          <strong>Where to submit.</strong> The Danish Embassy in Islamabad’s{' '}
          <a href={EMBASSY} rel="noopener noreferrer" target="_blank" className={a}>
            residence-permit page
          </a>{' '}
          says study applications are handed in in person at the Gerry’s/VFS visa centre.
        </li>
      </ul>
      <p>
        A student residence permit is a different application from a short-stay Schengen visa. Denmark’s
        visit-visa figures for Pakistan are in{' '}
        <Link href="/blog/schengen-visa-refusals-pakistan-2025" className={a}>
          Schengen visa refusals in Pakistan
        </Link>
        , and the wider picture is in our{' '}
        <Link href="/europe" className={a}>
          Europe guide
        </Link>
        .
      </p>
    </>
  );
}
