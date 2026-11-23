import Link from 'next/link';

/**
 * Published 23 November 2026. Written from official sources read that day:
 * - Citizenship Act (R.S.C. 1985, c. C-29), ss. 3, 5, 21 and 22, on Justice Laws
 *   (current to 29 October 2026, last amended 15 December 2025, the day Bill C-3,
 *   An Act to amend the Citizenship Act (2025), took effect);
 * - Citizenship Regulations (SOR/93-246), ss. 14, 15, 31 to 33 and the Schedule, and
 *   Citizenship Regulations, No. 2 (SOR/2015-124), ss. 2 and 4 (both current to
 *   29 October 2026);
 * - Service Fees Act, s. 17 (current to 29 October 2026). The Canada Gazette Part I
 *   notice of 15 March 2025 confirms s. 17 applies to the right of citizenship fee;
 *   the post does not cite it;
 * - Immigration and Refugee Protection Act, s. 28 (current to 29 October 2026);
 * - IRCC: eligibility (2026-04-21), language proof (2025-09-11), citizenship test
 *   (2026-03-31), fee list (2026-11-10), right of citizenship fee notice (27 March
 *   2026) and the 2025 citizenship rule changes (2025-12-24);
 * - Pakistan Citizenship Act 1951, ss. 14 and 14A (Pakistan Code consolidated
 *   PDF), and DGI&P's dual nationality page (last modified 9 January 2026) and
 *   renunciation page (last modified 4 October 2023);
 * - Global Affairs Canada: Pakistan travel advice (19 October 2026) and the dual
 *   citizenship page (2026-08-13).
 *
 * Every number is set in law: 1,095 days, five years, half a day and 365 days
 * (Citizenship Act s. 5(1)(c) and (1.001)); three tax years (s. 5(1)(c)(iii)); 18
 * to 54 (s. 5(1)(d) and (e)); 14 (s. 3(1)(c)); four years (s. 22(3)); $530 and $100
 * (Citizenship Regulations, Schedule items 1, 1.1 and 2, and s. 32); 1,095 days
 * before a birth (s. 3(3)); 21 and one year (Pakistan Citizenship Act s. 14A(2)).
 * The 730 days is IRCC's restatement of 1,095 minus 365. 31 March 2026 is the date
 * of the latest indexation, from IRCC's notice of 27 March 2026. 15 December 2025
 * is when Bill C-3 took effect (IRCC; Justice Laws last-amended date).
 *
 * Not printed: the current right of citizenship fee and IRCC's adult total, because
 * the 2026 amount is only on IRCC's notice and fee list (the Regulations still
 * print $100, indexed yearly under the Service Fees Act); the test pass mark and
 * the language benchmark (IRCC pages only); and how many countries DGI&P lists.
 * The Gazette notification under s. 14(3) of Pakistan's Act was not found, so
 * Pakistan's position rests on the Act and DGI&P's list.
 *
 * Our own reading, not an official statement: the Lahore example in "Do days in
 * Pakistan count?" and the student example in the first section.
 */
const a = 'font-semibold';

const ACT_S5 = 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html';
const ACT_S3 = 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-3.html';
const ACT_S21 = 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-21.html';
const ACT_S22 = 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-22.html';
const REGS = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-246/FullText.html';
const REGS2 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-124/FullText.html';
const SFA = 'https://laws-lois.justice.gc.ca/eng/acts/S-8.4/section-17.html';
const IRPA_S28 = 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-28.html';
const ELIGIBILITY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility.html';
const LANGUAGE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof.html';
const TEST =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-test.html';
const FEES = 'https://ircc.canada.ca/english/information/fees/fees.asp';
const FEE_NOTICE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/right-citizenship-fee-increasing.html';
const RULES_2025 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/act-changes/rules-2025.html';
const PCA = 'https://www.pakistancode.gov.pk/pdffiles/administratora2b6f3407a109a491d47d649f6ff0c01.pdf';
const DGIP_DUAL = 'https://dgip.gov.pk/immigration/dual_nationality.php';
const DGIP_RENOUNCE = 'https://dgip.gov.pk/immigration/renunciation.php';
const GAC_PAKISTAN = 'https://travel.gc.ca/destinations/pakistan';
const GAC_DUAL = 'https://travel.gc.ca/travelling/documents/dual-citizenship';

const REQUIREMENTS: [string, string, string][] = [
  ['Status', 'A permanent resident on the date you apply, with no unfulfilled conditions and no removal order', 'Citizenship Act s. 5(1)(c) and (f)'],
  ['Time in Canada', '1,095 days in the five years before you apply; days before PR count as half days, up to 365', 's. 5(1)(c)(i) and (1.001)'],
  ['Taxes', 'Any returns the Income Tax Act required, for three tax years within those five years', 's. 5(1)(c)(iii)'],
  ['Language', 'If aged 18 to 54: adequate English or French, shown by test results or other evidence', 's. 5(1)(d); Citizenship Regulations s. 14'],
  ['Knowledge test', 'If aged 18 to 54: knowledge of Canada and of a citizen’s responsibilities and privileges, in English or French', 's. 5(1)(e); Citizenship Regulations s. 15'],
  ['Criminal record', 'No grant while charged, serving a sentence, or on probation or parole, or within four years of certain convictions, including abroad', 's. 22'],
  ['Oath', 'If aged 14 or over, you become a citizen only once you take the oath', 's. 3(1)(c)'],
  ['Fees', 'Adults: a $530 processing fee plus the right of citizenship fee. Under 18: $100', 'Citizenship Regulations ss. 31 and 32, Schedule'],
];

export default function CanadianCitizenshipAfterPrPakistan() {
  return (
    <>
      <p>
        <strong>
          You can apply for Canadian citizenship once you have at least 1,095 days of physical presence in
          Canada, as the Act counts them, in the five years before applying.
        </strong>{' '}
        Days before PR, as a visitor, student, worker or protected person, count as half days, up to 365. As
        of 23 November 2026, becoming Canadian does not end your Pakistani citizenship, because Pakistan
        allows dual nationality with Canada.
      </p>

      <h2>How many days in Canada do you need?</h2>
      <p>
        Section 5(1)(c) of the{' '}
        <a href={ACT_S5} rel="noopener noreferrer" target="_blank" className={a}>
          Citizenship Act
        </a>{' '}
        asks for at least 1,095 days of physical presence in the five years immediately before you apply. You
        must also still be a permanent resident on that date.
      </p>
      <p>
        Section 5(1.001) sets how the days add up. Each day in Canada since you became a PR counts as one.
        Each day in Canada before PR, as a temporary resident or protected person, counts as half a day, up to
        365 in total.
      </p>
      <p>
        Only days within the same five years count. So at least 730 of your days must be as a PR, as{' '}
        <a href={ELIGIBILITY} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s eligibility page
        </a>{' '}
        (updated 21 April 2026) points out. For example, two years in Canada as a student inside that window
        give the full 365, leaving 730 to earn as a PR.
      </p>

      <h2>Do days in Pakistan count?</h2>
      <p>
        Usually not, and this is where citizenship differs from keeping PR. For PR,{' '}
        <a href={IRPA_S28} rel="noopener noreferrer" target="_blank" className={a}>
          section 28 of the Immigration and Refugee Protection Act
        </a>{' '}
        counts days abroad with a Canadian citizen spouse. Our{' '}
        <Link href="/canada-immigration-from-pakistan/pr-card-residency" className={a}>
          PR card and residency guide
        </Link>{' '}
        explains that rule; the Citizenship Act has no equivalent.
      </p>
      <p>
        Its sections 5(1.01) to 5(1.03) count days abroad only for Canadian government service. They cover a
        PR employed outside Canada by the Canadian Armed Forces, the federal public administration or a
        provincial public service. They also cover a spouse, partner or child living with such a PR, or a spouse
        or partner living with a citizen so employed.
      </p>
      <p>
        Locally engaged staff are excluded. So, on our reading, a year in Lahore with a Canadian spouse in
        private work counts for PR but not for citizenship.{' '}
        <a href={ACT_S21} rel="noopener noreferrer" target="_blank" className={a}>
          Section 21
        </a>{' '}
        also excludes any time on probation, on parole or in prison under Canadian law.
      </p>

      <h2>What else does the Citizenship Act require?</h2>
      <p>
        Here is the full list for an adult, from the law as current to 29 October 2026.
      </p>
      <div role="region" aria-label="Requirements for a grant of Canadian citizenship to an adult permanent resident, as in the law on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Requirements for a grant of Canadian citizenship to an adult permanent resident, as in the law on 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Requirement</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Rule</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {REQUIREMENTS.map(([req, rule, src]) => (
              <tr key={req}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{req}</th>
                <td className="px-3 py-3 sm:px-4">{rule}</td>
                <td className="px-3 py-3 sm:px-4">{src}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        On taxes, the Act asks only for returns you were legally required to file. The{' '}
        <a href={REGS2} rel="noopener noreferrer" target="_blank" className={a}>
          Citizenship Regulations, No. 2
        </a>{' '}
        (section 2) ask for your social insurance or tax number, and consent to share your tax data with
        IRCC. Without such a number, you declare that you did not need to file.
      </p>
      <p>
        Charges in Pakistan count too.{' '}
        <a href={ACT_S22} rel="noopener noreferrer" target="_blank" className={a}>
          Section 22
        </a>{' '}
        bars a grant while you face a charge abroad for an offence that would be indictable in Canada, unless
        waived. A conviction abroad for such an offence, in the four years before you apply or while you
        wait, bars it even after a pardon.
      </p>

      <h2>How do you show your English and pass the test?</h2>
      <p>
        Both apply only if you are 18 to 54 on the date you apply. Section 14 of the{' '}
        <a href={REGS} rel="noopener noreferrer" target="_blank" className={a}>
          Citizenship Regulations
        </a>{' '}
        defines adequate knowledge as basic communication: short routine conversations, simple instructions,
        and basic grammar and vocabulary in speech.
      </p>
      <p>
        <a href={LANGUAGE} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s language proof page
        </a>{' '}
        (updated 11 September 2025) accepts proof of a secondary or post-secondary programme taught in English
        or French. A diploma, transcript or certificate will do, and the programme can be outside Canada, so
        an English-medium programme in Pakistan can count.
      </p>
      <p>
        The knowledge test covers the subjects in section 15: national symbols, history, geography, the system
        of government, and the responsibilities and privileges of citizenship.{' '}
        <a href={TEST} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s test page
        </a>{' '}
        (updated 31 March 2026) says the test may be online, in person or by Microsoft Teams. It also gives
        the pass mark, which the law does not set.
      </p>

      <h2>What does it cost?</h2>
      <p>
        The schedule to the Citizenship Regulations, current to 29 October 2026, sets the processing fees.
        They are $530 for an adult and $100 for a child under 18. Section 31(2) charges nothing for the oath.
      </p>
      <p>
        Adults also pay a right of citizenship fee under section 32, refunded if citizenship is not granted.
        The Regulations print $100, but section 17 of the{' '}
        <a href={SFA} rel="noopener noreferrer" target="_blank" className={a}>
          Service Fees Act
        </a>{' '}
        indexes it to inflation each year, most recently on{' '}
        <a href={FEE_NOTICE} rel="noopener noreferrer" target="_blank" className={a}>
          31 March 2026
        </a>
        . So pay the total on{' '}
        <a href={FEES} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s fee list
        </a>{' '}
        (updated 10 November 2026), not the figure in the Regulations.
      </p>

      <h2>Do you lose your Pakistani citizenship?</h2>
      <p>
        No, not by becoming Canadian. Section 14(1) of{' '}
        <a href={PCA} rel="noopener noreferrer" target="_blank" className={a}>
          Pakistan’s Citizenship Act 1951
        </a>{' '}
        ends Pakistani citizenship for anyone who also holds another, unless they renounce the other one.
        Section 14(3) exempts citizens of the United Kingdom and Colonies, and of countries the federal
        government names in the official Gazette.
      </p>
      <p>
        Pakistan’s Directorate General of Immigration and Passports (DGI&amp;P) lists Canada among the
        countries with which Pakistan has dual nationality arrangements. Its{' '}
        <a href={DGIP_DUAL} rel="noopener noreferrer" target="_blank" className={a}>
          dual nationality page
        </a>{' '}
        was last modified on 9 January 2026. We could not find the Gazette notification itself.
      </p>
      <p>
        Canada does not ask you to give up Pakistani citizenship either. Section 5 of the Citizenship Act sets
        no such condition, and Global Affairs Canada’s{' '}
        <a href={GAC_DUAL} rel="noopener noreferrer" target="_blank" className={a}>
          dual citizenship page
        </a>{' '}
        says Canada allows multiple citizenships. The same page says you need a valid Canadian passport to fly
        back to Canada.
      </p>
      <p>
        Renouncing is your choice. Under section 14A, it is a declaration on Form X made through a Pakistani
        mission, as DGI&amp;P’s{' '}
        <a href={DGIP_RENOUNCE} rel="noopener noreferrer" target="_blank" className={a}>
          renunciation page
        </a>{' '}
        explains. When a man renounces, his minor children living outside Pakistan lose citizenship too,
        though each can resume it within one year of turning 21.
      </p>
      <p>
        Global Affairs Canada’s{' '}
        <a href={GAC_PAKISTAN} rel="noopener noreferrer" target="_blank" className={a}>
          Pakistan travel advice
        </a>{' '}
        (updated 19 October 2026) says dual citizenship is legally recognised in Pakistan. A dual citizen
        entering on a Canadian passport needs a valid National Identity Card for Overseas Pakistanis (NICOP)
        or a visa. Canada’s ability to help dual citizens while they are in Pakistan may be limited.
      </p>

      <h2>What about your children?</h2>
      <p>
        A parent who is a citizen can apply for a child under 18 who is a PR, under section 5(2). That route
        has no physical-presence, language or test requirement, and the fee is $100. A child of 14 or over
        countersigns the application and takes the oath.
      </p>
      <p>
        A child born in Pakistan after you become Canadian is a citizen by descent under{' '}
        <a href={ACT_S3} rel="noopener noreferrer" target="_blank" className={a}>
          section 3(1)(b)
        </a>
        . The rule for the next generation changed on 15 December 2025, when Bill C-3 took effect, as{' '}
        <a href={RULES_2025} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s page on the 2025 changes
        </a>{' '}
        confirms. Your grandchild born abroad to that child is generally Canadian only if your child first
        spent 1,095 days in Canada.
      </p>
      <p>
        Until you apply, keep your PR safe: the residency obligation still applies while you build up your
        days. Our{' '}
        <Link href="/canada-immigration-from-pakistan/pr-card-residency" className={a}>
          PR card and residency guide
        </Link>{' '}
        covers it, and{' '}
        <Link href="/canada-immigration-from-pakistan" className={a}>
          immigrating to Canada from Pakistan
        </Link>{' '}
        covers the routes to PR in the first place.
      </p>
    </>
  );
}
