import Link from 'next/link';

/**
 * Published 18 November 2026 on the firm's instruction. Written from official
 * sources as they stood on 18 November 2026: the visa bond final rule (Federal
 * Register, 3 August 2026, 22 CFR 41.11(c)); the State Department's visa bond
 * fact sheet of 18 March 2026; Proclamations 10998 and 11069 (Federal Register);
 * the State Department's media note of 18 June 2025 on online presence review;
 * Public Law 119-21, section 100007, and the DHS notice of 22 July 2025; the US
 * Embassy in Pakistan's visa pages (visas page updated 16 November 2026); the US
 * Embassy in Bangladesh's visa page; and the official appointment service for
 * Pakistan (ustraveldocs.com). Bond amounts are printed because they are set in
 * the regulation. No visa integrity fee amount is printed: the law indexes it
 * each year and no official page showed it being collected.
 *
 * travel.state.gov showed a human-verification check and could not be read, so
 * the current bond country list and the State Department's immigrant-visa
 * notice were not read directly. The 30 March 2026 vetting date was read from an
 * archived copy of the State Department's own page (last updated 25 March 2026).
 * The pause wording states only what the embassy's pages show; /usa and
 * /blog/eb2-niw-pakistan carry the fuller record. Our own suggestion: the advice
 * that online profiles should match the DS-160. Re-check monthly.
 */
const a = 'font-semibold';

const BOND_RULE = 'https://www.federalregister.gov/documents/2026/08/03/2026-15726/visas-visa-bond-program';
const BOND_FACTS =
  'https://www.state.gov/releases/office-of-the-spokesperson/2026/03/state-department-expands-visa-bonds-to-combat-illegal-overstay-rates';
const BOND_LIST = 'https://travel.state.gov/content/travel/en/News/visas-news/countries-subject-to-visa-bonds.html';
const EMBASSY_BD = 'https://bd.usembassy.gov/visas/';
const P10998 =
  'https://www.federalregister.gov/documents/2025/12/19/2025-23570/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states';
const P11069 =
  'https://www.federalregister.gov/documents/2026/09/23/2026-19554/restriction-on-entry-of-certain-nonimmigrant-workers';
const EMBASSY = 'https://pk.usembassy.gov/visas/';
const EMBASSY_IV = 'https://pk.usembassy.gov/immigrant-visas/';
const EMBASSY_NIV = 'https://pk.usembassy.gov/nonimmigrant-visas/';
const VETTING_2025 =
  'https://www.state.gov/releases/office-of-the-spokesperson/2025/06/announcement-of-expanded-screening-and-vetting-for-visa-applicants';
const IV_NOTICE =
  'https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html';
const VIF_LAW = 'https://www.govinfo.gov/app/details/PLAW-119publ21';
const VIF_NOTICE =
  'https://www.federalregister.gov/documents/2025/07/22/2025-13738/uscis-immigration-fees-required-by-hr-1-reconciliation-bill';
const FEES = 'https://www.ustraveldocs.com/pk/en/step-3';
const DS160 = 'https://www.ustraveldocs.com/pk/en/step-2';

const RULES: [string, string, string, string][] = [
  [
    'Visa bond for B-1/B-2 visitors',
    'Not shown. Pakistan was not among the countries covered from 2 April 2026, and the US Embassy in Pakistan shows no bond notice.',
    'State Department fact sheet, 18 March 2026',
    BOND_FACTS,
  ],
  [
    'Travel ban (Proclamation 10998)',
    'No. Pakistan is not among the 39 countries.',
    'Proclamation 10998, Federal Register',
    P10998,
  ],
  [
    'Social media (online presence) review',
    'Yes, for students, exchange visitors and the other listed visas. B-1/B-2 visitor visas are not listed.',
    'US Embassy in Pakistan, visas page',
    EMBASSY,
  ],
  [
    'Immigrant-visa pause',
    'It named Pakistan from 21 January 2026. The embassy’s pause notice has since been removed.',
    'US Embassy in Pakistan, visas page',
    EMBASSY,
  ],
  [
    'Visa integrity fee',
    'Not shown as charged. A 2025 law requires it, but the fee page for Pakistan did not list it.',
    'Public Law 119-21, section 100007',
    VIF_LAW,
  ],
];

export default function UsVisaRulesPakistan2026() {
  return (
    <>
      <p>
        <strong>
          As of 18 November 2026, Pakistan is not on the US travel ban, and the US Embassy in Pakistan
          shows no visa bond notice.
        </strong>{' '}
        The social media review does apply to Pakistani students, exchange visitors and many workers,
        though not to B-1/B-2 visitors. The immigrant-visa pause that named Pakistan from 21 January
        2026 is no longer shown on the embassy’s visa page.
      </p>

      <h2>What applies to Pakistani applicants on 18 November 2026?</h2>
      <p>Here is each rule, whether it reaches Pakistani applicants, and where to check it.</p>
      <div role="region" aria-label="US visa rules and whether they apply to Pakistani applicants, as of 18 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            US visa rules and whether they apply to Pakistani applicants, as of 18 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Rule</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Applies to Pakistanis?</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Official source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {RULES.map(([rule, applies, label, href]) => (
              <tr key={rule}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{rule}</th>
                <td className="px-3 py-3 sm:px-4">{applies}</td>
                <td className="px-3 py-3 sm:px-4">
                  <a href={href} rel="noopener noreferrer" target="_blank" className={a}>
                    {label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Does the visa bond apply to Pakistanis?</h2>
      <p>
        A visa bond is money some B-1/B-2 visitors must post before their visa is issued. A{' '}
        <a href={BOND_RULE} rel="noopener noreferrer" target="_blank" className={a}>
          State Department final rule
        </a>
        , in force from 3 August 2026, made it permanent in 22 CFR 41.11(c). The regulation sets the
        bond at $10,000, $15,000 or $20,000, as the consular officer decides.
      </p>
      <p>
        It applies only to nationals of the countries the State Department names. Its{' '}
        <a href={BOND_FACTS} rel="noopener noreferrer" target="_blank" className={a}>
          fact sheet of 18 March 2026
        </a>{' '}
        listed every country covered from 2 April 2026. Bangladesh, Bhutan and Nepal were on it;
        Pakistan was not.
      </p>
      <p>
        The final rule kept those countries in, and a new country must be named at least 15 days before
        its bond starts. The{' '}
        <a href={EMBASSY_BD} rel="noopener noreferrer" target="_blank" className={a}>
          US Embassy in Bangladesh’s visa page
        </a>{' '}
        carries a bond notice for Bangladeshis. The US Embassy in Pakistan’s page, updated on 16 November
        2026, carries none.
      </p>
      <p>
        The bond follows nationality, not where you apply. Before you book, check the State Department’s{' '}
        <a href={BOND_LIST} rel="noopener noreferrer" target="_blank" className={a}>
          current list of countries subject to visa bonds
        </a>
        .
      </p>

      <h2>Is Pakistan on the US travel ban?</h2>
      <p>
        No.{' '}
        <a href={P10998} rel="noopener noreferrer" target="_blank" className={a}>
          Proclamation 10998
        </a>{' '}
        has been in force since 1 January 2026. It suspends or limits entry for nationals of 39
        countries, and Pakistan is not one of them.
      </p>
      <p>
        We found no later proclamation in the Federal Register that changes the list, up to 18 November
        2026. The ban goes by nationality, so an Afghan national applying in Islamabad is covered.
        A dual national travelling on the passport of an unlisted country is exempt.
      </p>
      <p>
        One other entry restriction does reach Pakistanis, because it goes by visa type.{' '}
        <a href={P11069} rel="noopener noreferrer" target="_blank" className={a}>
          Proclamation 11069
        </a>{' '}
        of 18 September 2026 restricts new H-1B workers entering from abroad unless their employer has
        made an extra payment with the petition.
      </p>

      <h2>Who faces the social media checks?</h2>
      <p>
        The State Department calls this online presence review. Applicants in the covered categories
        are told to set all their social media accounts to “public” or “open”. It{' '}
        <a href={VETTING_2025} rel="noopener noreferrer" target="_blank" className={a}>
          began with students and exchange visitors
        </a>{' '}
        in June 2025.
      </p>
      <p>
        From 30 March 2026 it was widened to more categories, including fiancé(e)s and religious
        workers. Since July 2026, the embassy’s list has also gained I, TN and TD visas. The{' '}
        <a href={EMBASSY} rel="noopener noreferrer" target="_blank" className={a}>
          US Embassy in Pakistan’s visa page
        </a>
        , updated on 16 November 2026, lists:
      </p>
      <ul>
        <li>students and exchange visitors: F, M and J;</li>
        <li>temporary workers and their families: H-1B, H-3 and H-4, Q, and R-1 and R-2;</li>
        <li>fiancé(e)s and spouses of US citizens, and their children: K-1, K-2 and K-3;</li>
        <li>journalists and media workers: I;</li>
        <li>some domestic staff (A-3, G-5, and C-3 domestic workers), plus S, T, TN, TD and U visas.</li>
      </ul>
      <p>
        B-1/B-2 visitor visas are not on that list. Even so, the State Department says it uses all
        available information when it screens visa applicants.
      </p>

      <h2>What happened to the immigrant-visa pause?</h2>
      <p>
        From 21 January 2026, the State Department paused immigrant visa issuance for nationals of 75
        countries, Pakistan among them. Under that notice, applicants could still apply and attend
        interviews, but no immigrant visas would be issued to them. In July 2026, the US Embassy in Pakistan’s visa page carried
        a notice of the pause that named Pakistan.
      </p>
      <p>
        By 18 November 2026 that notice had gone. The page now links to the{' '}
        <a href={IV_NOTICE} rel="noopener noreferrer" target="_blank" className={a}>
          State Department’s notice on immigrant visa processing
        </a>{' '}
        instead. Read that notice on the day, before you pay for anything that ends at the consulate.
      </p>
      <p>
        The embassy’s{' '}
        <a href={EMBASSY_IV} rel="noopener noreferrer" target="_blank" className={a}>
          immigrant visa page
        </a>{' '}
        also warns of significant backlogs and lengthy interview waits. Our{' '}
        <Link href="/usa" className={a}>
          US guide
        </Link>{' '}
        sets out what this means for green-card routes, and our post on the{' '}
        <Link href="/blog/eb2-niw-pakistan" className={a}>
          EB-2 NIW from Pakistan
        </Link>{' '}
        covers the queue.
      </p>

      <h2>Is the visa integrity fee being charged?</h2>
      <p>
        Section 100007 of{' '}
        <a href={VIF_LAW} rel="noopener noreferrer" target="_blank" className={a}>
          Public Law 119-21
        </a>
        , signed on 4 July 2025, requires a visa integrity fee from anyone issued a nonimmigrant visa.
        The law adjusts the amount for inflation each year. In July 2025, the Department of Homeland
        Security{' '}
        <a href={VIF_NOTICE} rel="noopener noreferrer" target="_blank" className={a}>
          said the fee needed coordination between agencies
        </a>{' '}
        and would be implemented in a future publication.
      </p>
      <p>
        On 18 November 2026, neither the US Embassy in Pakistan’s visa pages nor the{' '}
        <a href={FEES} rel="noopener noreferrer" target="_blank" className={a}>
          official appointment service’s fee page for Pakistan
        </a>{' '}
        mentioned it. Check that fee page before you pay.
      </p>

      <h2>What should you do before you apply?</h2>
      <ul>
        <li>
          <strong>Check the official pages the week you apply.</strong> Start with the embassy’s visa
          page and the State Department notices it links to. These rules changed several times in 2026.
        </li>
        <li>
          <strong>Do not buy fixed tickets first.</strong> The US mission’s{' '}
          <a href={EMBASSY_NIV} rel="noopener noreferrer" target="_blank" className={a}>
            nonimmigrant visa page
          </a>{' '}
          advises against non-refundable or non-changeable tickets before your visa is issued.
        </li>
        <li>
          <strong>Expect an interview.</strong> Since 11 August 2025, nonimmigrant applicants in
          Pakistan generally need an in-person interview, with limited exceptions.
        </li>
        <li>
          <strong>Answer the DS-160 truthfully.</strong> The{' '}
          <a href={DS160} rel="noopener noreferrer" target="_blank" className={a}>
            appointment service
          </a>{' '}
          says signing it certifies that everything in it is true. Misrepresenting facts could make
          you ineligible to enter the United States.
        </li>
        <li>
          <strong>Keep your online profiles honest and consistent.</strong> Your profiles and your
          DS-160 should describe the same job, studies and travel plans. If your visa is on the list
          above, set every account to public before your interview.
        </li>
      </ul>
      <p>
        For the visa routes themselves, from visitor and student visas to green cards, read our{' '}
        <Link href="/usa" className={a}>
          US guide
        </Link>
        .
      </p>
    </>
  );
}
