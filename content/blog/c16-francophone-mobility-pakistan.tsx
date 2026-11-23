import Link from 'next/link';

/**
 * Published 23 November 2026. Every fact was read on 23 November 2026 from:
 *  - IRCC's Francophone Mobility pages for workers: "Check if you can apply"
 *    (page details 2026-04-20), "How to apply" (2026-04-21) and "After you
 *    apply" (2026-07-28), and the employer page "How to hire a French-speaking
 *    or bilingual foreign worker to work in Canada outside Quebec" (2026-04-28);
 *  - IRCC's program delivery instructions, "Francophone mobility [R205(c) – C16]"
 *    (page details 2026-06-23), and the LMIA exemption codes list (2026-09-23),
 *    which places C16 under R205(c)(ii), not R205(a);
 *  - IRCC's news release of 15 June 2023 announcing the wider rules;
 *  - IRCC's "Open work permits for family members of foreign workers: Who can
 *    apply" (2026-06-12);
 *  - IRCC's Express Entry language test page (2026-10-16), category-based
 *    selection page (2026-11-18) and the current Ministerial Instructions, s. 32;
 *  - Justice Laws, IRPR current to 2026-10-29: ss. 87.1, 200(1)(c)(ii.1) and
 *    200(3)(f.1), 205(c)(ii), 209.2(1)(a)(ix)-(x) and 303.1(1), (2) and (6).
 * canada.ca was read through a page-fetch tool, not saved.
 *
 * Figures printed: the C$230 employer compliance fee (IRPR s. 303.1(1)); the
 * one-year, three-year and TEER 0-3 rules for the Canadian Experience Class
 * (IRPR s. 87.1(2)); NCLC 7 for the French category and extra points (MI s. 32;
 * category page). NCLC 5 is printed because the topic brief asked for the level
 * on IRCC's own page. Not printed: processing times, the work permit fee, the
 * open work permit holder fee, and the minimum time a spouse's application needs
 * left on the worker's permit (on IRCC's page only). The 2023 release's
 * "period of two years" is described as "a fixed period".
 *
 * Not verified, so not stated: which centres in Pakistan offer TEF Canada or
 * TCF Canada today. CCI Paris Île-de-France's finder loads results by script,
 * and France Éducation International's site (and its Wayback copy) showed a bot
 * check. The post points to our 18 November 2026 language-test post and to the
 * two providers instead.
 *
 * Our own suggestions, marked "Our suggestion": taking TEF Canada or TCF Canada
 * rather than another version, and treating a paid "C16 job offer" as a warning
 * sign. "Nothing in IRCC's instructions limits C16 by citizenship" is our reading
 * of the program delivery instructions.
 */
const a = 'font-semibold';

const ELIGIBILITY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/francophone-mobility/eligibility.html';
const APPLY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/francophone-mobility/apply.html';
const AFTER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/francophone-mobility/after-apply.html';
const PDI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/canadian-interests-significant-benefit-mobilite-francophone-r205-exemption-code-c16.html';
const CODES_LIST =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes.html';
const EMPLOYER =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/hire-temporary-foreign/french-speaking-bilingual-workers-outside-quebec/hire.html';
const RELEASE_2023 =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2023/06/canada-expands-the-francophone-mobility-program-to-increase-francophone-immigration.html';
const FAMILY =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/spouses-dependent-children/eligibility.html';
const EE_LANG =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const CATEGORIES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const TIMES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html';
const IRPR_87_1 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.1.html';
const IRPR_200 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-200.html';
const IRPR_205 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-205.html';
const IRPR_209_2 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.2.html';
const IRPR_303_1 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-303.1.html';
const TEF_FINDER = 'https://francais.cci-paris-idf.fr/candidat';
const TCF_FEI = 'https://www.france-education-international.fr/en/test/tcf-canada';

/** Requirement, the rule as of 23 November 2026, and where it is set. */
const RULES: [string, string, string, string][] = [
  ['Where you work', 'Any province or territory except Quebec. Remote work for an employer based in Quebec does not count.', 'IRCC instructions', PDI],
  ['Type of job', 'Any TEER category, except primary agriculture jobs in TEER 4 and 5. You must meet the job’s NOC requirements.', 'IRCC instructions', PDI],
  ['French', 'NCLC 5 or higher in speaking and listening. You do not have to prove reading or writing.', 'IRCC, how to apply', APPLY],
  ['Language of the job', 'Does not need to be French.', 'IRCC instructions', PDI],
  ['Job offer', 'The employer submits it in the Employer Portal under code C16 and gives you the 7-digit offer number.', 'IRCC, eligibility', ELIGIBILITY],
  ['Employer compliance fee', 'C$230, paid by the employer before you apply.', 'IRPR s. 303.1', IRPR_303_1],
  ['Citizenship', 'No citizenship rule in IRCC’s instructions.', 'IRCC instructions', PDI],
  ['Permit length', 'Up to the length of the job offer, but not past your passport’s expiry.', 'IRCC instructions', PDI],
];

export default function C16FrancophoneMobilityPakistan() {
  return (
    <>
      <p>
        <strong>
          Yes, if an employer outside Quebec submits a C16 job offer for you, you show French at NCLC 5
          or higher in speaking and listening, and you meet the other conditions below.
        </strong>{' '}
        As of 23 November 2026, C16 covers jobs in any TEER category except primary agriculture in TEER
        4 and 5. Nothing in IRCC’s instructions limits C16 by citizenship, so Pakistani citizens can use
        it if they meet the conditions.
      </p>

      <h2>What is the Francophone Mobility work permit?</h2>
      <p>
        It is an employer-specific work permit that needs no Labour Market Impact Assessment. IRCC’s{' '}
        <a href={CODES_LIST} rel="noopener noreferrer" target="_blank" className={a}>
          LMIA exemption codes list
        </a>{' '}
        gives it the code C16. Its{' '}
        <a href={PDI} rel="noopener noreferrer" target="_blank" className={a}>
          instructions to officers
        </a>{' '}
        say the aim is “to promote the French language in Francophone minority communities outside
        Quebec”.
      </p>
      <p>
        For applications made since 15 June 2023, IRCC issues it under{' '}
        <a href={IRPR_205} rel="noopener noreferrer" target="_blank" className={a}>
          section 205(c)(ii) of the Regulations
        </a>
        . That paragraph covers work the Minister designates for public-policy reasons tied to Canada’s
        competitiveness. From 1 June 2016 to 14 June 2023 it came under 205(a), significant benefit, so
        older articles may cite that.
      </p>
      <p>
        IRCC{' '}
        <a href={RELEASE_2023} rel="noopener noreferrer" target="_blank" className={a}>
          announced the wider rules
        </a>{' '}
        on 15 June 2023 for a fixed period. Its eligibility page and instructions, read on 23 November
        2026, still apply them and give no end date. Our{' '}
        <Link href="/work-permits/lmia-exempt" className={a}>
          LMIA-exempt work permits guide
        </Link>{' '}
        explains what working without an LMIA involves.
      </p>

      <h2>Who qualifies as of 23 November 2026?</h2>
      <p>
        IRCC’s{' '}
        <a href={ELIGIBILITY} rel="noopener noreferrer" target="_blank" className={a}>
          eligibility page
        </a>{' '}
        and its instructions to officers set these conditions. You must also meet the general work
        permit requirements.
      </p>
      <div
        role="region"
        aria-label="Francophone Mobility (C16) work permit requirements and where each is set, as of 23 November 2026"
        tabIndex={0}
        className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper"
      >
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Francophone Mobility (C16) work permit requirements and where each is set, as of 23 November
            2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Requirement</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Rule</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {RULES.map(([req, rule, label, href]) => (
              <tr key={req}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{req}</th>
                <td className="px-3 py-3 sm:px-4">{rule}</td>
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
      <p>
        Officers also check that the pay meets the provincial or territorial minimum wage, is
        reasonable for the job, and is affordable for the employer.
      </p>

      <h2>How do you prove your French?</h2>
      <p>
        IRCC’s{' '}
        <a href={APPLY} rel="noopener noreferrer" target="_blank" className={a}>
          how-to-apply page
        </a>{' '}
        asks for proof of speaking and listening only. It accepts TEF or TCF results, written
        confirmation from a college or university of a French-language programme, or other proof of
        education in French.
      </p>
      <p>
        The officer decides whether your evidence is enough. If not, the officer may ask for more, such
        as TEF or TCF results, or assess your French orally.
      </p>
      <p>
        Our suggestion: if you studied in Pakistan in English or Urdu, a test result is the clearest
        proof. IRCC’s C16 pages do not name a version, but its{' '}
        <a href={EE_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          Express Entry language page
        </a>{' '}
        lists TEF Canada and TCF Canada. Taking one of those means the same result could also count for
        permanent residence while it is still valid.
      </p>
      <p>
        Our post on{' '}
        <Link href="/blog/ielts-pte-core-celpip-pakistan" className={a}>
          English and French tests
        </Link>{' '}
        records where TEF Canada and TCF Canada were offered in Pakistan on 18 November 2026. Centres
        change, so check{' '}
        <a href={TEF_FINDER} rel="noopener noreferrer" target="_blank" className={a}>
          CCI Paris Île-de-France’s finder
        </a>{' '}
        for TEF Canada and{' '}
        <a href={TCF_FEI} rel="noopener noreferrer" target="_blank" className={a}>
          France Éducation International
        </a>{' '}
        for TCF Canada.
      </p>

      <h2>What must the employer do, and who pays?</h2>
      <p>
        The employer acts first. IRCC’s{' '}
        <a href={EMPLOYER} rel="noopener noreferrer" target="_blank" className={a}>
          employer page
        </a>{' '}
        says it submits the offer in the Employer Portal under code C16 and pays the compliance fee. It
        then gives you the 7-digit offer number and a signed copy of the offer.
      </p>
      <p>
        The fee is C$230, set by{' '}
        <a href={IRPR_303_1} rel="noopener noreferrer" target="_blank" className={a}>
          section 303.1 of the Regulations
        </a>
        , read on 23 November 2026. It is due before you apply, and refunded to the employer if your
        permit is refused. Under{' '}
        <a href={IRPR_200} rel="noopener noreferrer" target="_blank" className={a}>
          section 200(3)(f.1)
        </a>
        , an officer must refuse your permit if the fee was unpaid, or the offer not submitted, when you
        applied.
      </p>
      <p>
        <a href={IRPR_209_2} rel="noopener noreferrer" target="_blank" className={a}>
          Section 209.2
        </a>{' '}
        bars the employer from charging you that fee or any recruitment fees. The employer must also
        make sure its recruiters do not. IRCC’s instructions also tell officers to ask whether an employer has recently hired
        many people from the same region for the same job.
      </p>
      <p>
        Our suggestion: treat anyone who asks you to pay for a “C16 job offer” as a warning sign. Our
        post on{' '}
        <Link href="/blog/lmia-exempt-work-permit-codes" className={a}>
          LMIA-exempt work permit codes
        </Link>{' '}
        explains how codes and offer numbers work.
      </p>

      <h2>How do you apply from Pakistan?</h2>
      <p>
        You apply online, from outside Canada, through an IRCC account. The how-to-apply page says to
        choose a work permit with an LMIA exemption and enter the 7-digit offer number. Your French
        evidence goes in the “Client information” upload field.
      </p>
      <p>
        IRCC’s{' '}
        <a href={AFTER} rel="noopener noreferrer" target="_blank" className={a}>
          after-you-apply page
        </a>{' '}
        says it checks for every document, including biometrics, and returns incomplete applications
        unprocessed. If you are approved, you receive a port of entry letter of introduction, which is
        not your work permit. The permit is issued at the port of entry when you arrive in Canada.
      </p>
      <p>
        This post does not quote processing times. Check{' '}
        <a href={TIMES} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s processing-times tool
        </a>
        , choosing “Work permit (from outside Canada)” and Pakistan as the country you apply from.
      </p>

      <h2>Can your spouse and children come with you?</h2>
      <p>
        It depends on your job. The after-you-apply page says your spouse, common-law partner or
        dependent children “may be able to apply for an open work permit”. IRCC’s{' '}
        <a href={FAMILY} rel="noopener noreferrer" target="_blank" className={a}>
          family members page
        </a>{' '}
        sets the rules.
      </p>
      <p>
        Your spouse or common-law partner can qualify if your job is in TEER 0 or 1. Selected TEER 2
        and 3 jobs, listed on that page, also count. Your permit must also have a minimum time left when
        IRCC receives their application.
      </p>
      <p>
        Since 21 January 2025, dependent children are no longer eligible under this measure. If your
        C16 job is in TEER 4 or 5, family members cannot get a new open work permit under it either.
        IRCC’s page treats workers on some pathways to permanent residence differently.
      </p>
      <p>
        Children can still go to school while you work, and may need a study permit. Our{' '}
        <Link href="/work-permits/spousal-open-work-permit" className={a}>
          spousal open work permit guide
        </Link>{' '}
        explains that route.
      </p>

      <h2>Can C16 work lead to permanent residence?</h2>
      <p>
        It can give you Canadian work experience, but C16 is a temporary permit and does not turn into
        permanent residence by itself. IRCC’s after-you-apply page says to apply for permanent
        residence “as soon as you meet the eligibility criteria”. Nobody can promise you an invitation.
      </p>
      <p>
        The{' '}
        <Link href="/express-entry/canadian-experience-class" className={a}>
          Canadian Experience Class
        </Link>{' '}
        is the closest fit. Under{' '}
        <a href={IRPR_87_1} rel="noopener noreferrer" target="_blank" className={a}>
          section 87.1 of the Regulations
        </a>
        , you need at least one year of full-time work in Canada, or the part-time equivalent. It must
        fall within the three years before you apply, in TEER 0, 1, 2 or 3.
      </p>
      <p>
        So a C16 job in TEER 4 or 5 does not count towards it, even though it qualifies for the permit.
        You also need approved language test results in all four skills, which C16 does not require.
      </p>
      <p>
        French can help too. IRCC’s{' '}
        <a href={CATEGORIES} rel="noopener noreferrer" target="_blank" className={a}>
          category-based selection page
        </a>
        , dated 18 November 2026, lists French-language proficiency as a category. It asks for NCLC 7
        or higher in all four abilities, more than C16’s NCLC 5 in two.
      </p>
      <p>
        The same level earns extra CRS points under section 32 of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        . Our{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          category-based draws guide
        </Link>{' '}
        explains those rounds. For the other ways to work in Canada without an LMIA, see our{' '}
        <Link href="/work-permits/lmia-exempt" className={a}>
          LMIA-exempt work permits guide
        </Link>
        .
      </p>
    </>
  );
}
