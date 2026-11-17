import Link from 'next/link';

/**
 * Published 18 November 2026 on the firm's instruction. Every fact was read on
 * 18 November 2026 from:
 *  - IRCC's Express Entry language test page (page dated 2026-10-16), including
 *    its per-ability conversion tables;
 *  - the Immigration and Refugee Protection Regulations, ss. 74 and 75 (current
 *    to 2026-10-29);
 *  - the Ministerial Instructions respecting the Express Entry system in force
 *    since 3 November 2026: s. 3(3)-(4) (results under two years old with the
 *    profile), s. 12(3) (points stop at two years), s. 13 (points per skill),
 *    s. 32 (French points);
 *  - IRCC's category-based selection page (French-language proficiency category);
 *  - the providers' own sites: British Council Pakistan and IDP Pakistan (IELTS),
 *    Pearson's PTE Core page, FAQ and test-centre search, CELPIP's overview and
 *    test-date finder, CCI Paris Île-de-France's TEF Canada page and centre
 *    finder, and the Alliance Française de Lahore and de Karachi exam pages.
 * The cities in the table are what those finders and pages showed that day.
 * France Éducation International's TCF Canada page ran an automated bot check
 * and was not read, so the post points readers to it rather than quoting it.
 * IRCC's standalone "language test equivalency charts" page returned 404 that
 * day; the post links the conversion tables on the Express Entry page instead.
 *
 * No fees, result times or test durations: those appear only on provider pages.
 * Numbers printed: the two-year validity (IRPR s. 75(2)(d); MI s. 3, 12(3)) and
 * the French points and levels (MI s. 32). Our own suggestions are marked
 * "Our suggestion".
 */
const a = 'font-semibold';

const IRCC_LANG =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html';
const IRPR_74 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-74.html';
const IRPR_75 = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const CATEGORIES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html';
const BC_IELTS = 'https://www.britishcouncil.pk/exam/ielts/dates-locations';
const IDP_IELTS = 'https://ielts.idp.com/pakistan/test-dates';
const PTE_CORE = 'https://www.pearsonpte.com/pte-core';
const CELPIP_DATES = 'https://www.celpip.ca/take-celpip/find-a-test-date/';
const CELPIP_OVERVIEW = 'https://www.celpip.ca/take-celpip/overview/';
const TEF_CENTRES = 'https://francais.cci-paris-idf.fr/candidat';
const TCF_FEI = 'https://www.france-education-international.fr/en/test/tcf-canada';

const TESTS: [string, string, string, string][] = [
  [
    'IELTS',
    'IELTS General Training',
    'Yes. British Council and IDP centres in many cities, including Lahore, Islamabad, Rawalpindi, Karachi, Peshawar, Multan and Quetta',
    'On computer at a test centre. Speaking is a live conversation with an examiner',
  ],
  [
    'PTE',
    'PTE Core',
    'Yes. Pearson’s centre search found Lahore, Islamabad, Karachi and Peshawar',
    'One sitting on computer at a test centre, including Speaking',
  ],
  [
    'CELPIP',
    'CELPIP-General',
    'Yes. CELPIP’s date finder listed Lahore, Islamabad, Rawalpindi, Karachi and Peshawar',
    'One sitting on computer at a test centre. You answer Speaking prompts on screen',
  ],
  [
    'TEF',
    'TEF Canada',
    'Yes. CCI Paris Île-de-France lists the Alliance Française in Lahore and Karachi',
    'Four compulsory parts. Karachi runs it on computer',
  ],
  [
    'TCF',
    'TCF Canada',
    'The Alliance Française in Lahore and Karachi list it. Check France Éducation International’s site',
    'Four compulsory parts. Karachi runs it on computer',
  ],
];

export default function IeltsPteCoreCelpipPakistan() {
  return (
    <>
      <p>
        <strong>
          IRCC accepts five tests for Express Entry: IELTS General Training, PTE Core and CELPIP-General in
          English, and TEF Canada and TCF Canada in French.
        </strong>{' '}
        On 18 November 2026, centres in Pakistan offered all five, and no test earns more points than
        another at the same level. Choose by format and nearby dates, and keep your results under two years
        old from profile to application.
      </p>

      <h2>Which tests count, and can you take them in Pakistan?</h2>
      <p>
        <a href={IRCC_LANG} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC’s language test page
        </a>{' '}
        names the version of each test that counts. Under{' '}
        <a href={IRPR_74} rel="noopener noreferrer" target="_blank" className={a}>
          section 74 of the Regulations
        </a>
        , only approved tests from designated organisations are accepted. This is what the providers’ own
        finders showed for Pakistan on 18 November 2026:
      </p>
      <div role="region" aria-label="Language tests IRCC accepts for Express Entry, the version that counts, and availability in Pakistan on 18 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Language tests IRCC accepts for Express Entry, the version that counts, and availability in
            Pakistan on 18 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Test</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Version that counts</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">In Pakistan?</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Format</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {TESTS.map(([test, version, where, format]) => (
              <tr key={test}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{test}</th>
                <td className="px-3 py-3 sm:px-4">{version}</td>
                <td className="px-3 py-3 sm:px-4">{where}</td>
                <td className="px-3 py-3 sm:px-4">{format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Every one of these is taken at a centre, not at home. The{' '}
        <a href={BC_IELTS} rel="noopener noreferrer" target="_blank" className={a}>
          British Council
        </a>{' '}
        runs IELTS on computer in Pakistan and offers paper only to candidates approved for special
        arrangements on medical grounds.{' '}
        <a href={IDP_IELTS} rel="noopener noreferrer" target="_blank" className={a}>
          IDP
        </a>{' '}
        lists its IELTS General Training on computer too.
      </p>
      <p>
        Centres and dates change. Check the provider’s own finder for{' '}
        <a href={PTE_CORE} rel="noopener noreferrer" target="_blank" className={a}>
          PTE Core
        </a>
        ,{' '}
        <a href={CELPIP_DATES} rel="noopener noreferrer" target="_blank" className={a}>
          CELPIP
        </a>{' '}
        or{' '}
        <a href={TEF_CENTRES} rel="noopener noreferrer" target="_blank" className={a}>
          TEF Canada
        </a>{' '}
        before you plan travel.
      </p>

      <h2>Which versions do people book by mistake?</h2>
      <ul>
        <li>
          <strong>IELTS Academic.</strong> IRCC says you must take the General Training option. Some booking
          pages suggest Academic for anyone planning to work abroad, but Canadian permanent residence is not
          one of those cases.
        </li>
        <li>
          <strong>IELTS One Skill Retake.</strong> Both IELTS providers in Pakistan offer it with IELTS on
          computer. IRCC does not accept it for Express Entry, so retake the full test.
        </li>
        <li>
          <strong>PTE Academic.</strong> Pearson says PTE Academic is accepted for university study, and PTE
          Core for Canadian permanent residence. IRCC asks for PTE Core.
        </li>
        <li>
          <strong>CELPIP-General LS.</strong> CELPIP says this version tests only listening and speaking, for
          citizenship. Express Entry needs CELPIP-General, which covers all four skills.
        </li>
        <li>
          <strong>Other French tests.</strong> TCF Tout Public, TEF Québec, DELF and DALF are not on IRCC’s
          list. For TEF Canada, IRCC says to enter the scores from the “Équivalence ancien score” column.
        </li>
      </ul>

      <h2>When must your results be valid?</h2>
      <p>
        Before you create your profile. Section 3 of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions for Express Entry
        </a>{' '}
        says results must be less than two years old when you submit it. You cannot enter the pool first and
        add a test later.
      </p>
      <p>
        Results can also expire while you wait in the pool. Section 3(4) then treats you as no longer
        meeting the requirements tied to them, and section 12(3) stops your language points.
      </p>
      <p>
        For Federal Skilled Workers,{' '}
        <a href={IRPR_75} rel="noopener noreferrer" target="_blank" className={a}>
          section 75 of the Regulations
        </a>{' '}
        also requires results under two years old on the day you apply. IRCC says it will refuse an
        application made with expired results.
      </p>
      <p>
        If your results will expire before you can apply, IRCC suggests three ways out. Test again, apply
        before they expire, or decline the invitation and return to the pool.
      </p>
      <p>
        Our suggestion: work out the expiry date the day you get your results. If it is close, book the next
        test before you need it, not after.
      </p>

      <h2>How do test scores become CLB levels?</h2>
      <p>
        IRCC measures English in Canadian Language Benchmarks (CLB) and French in Niveaux de compétence
        linguistique canadiens (NCLC). Every approved test gives a separate result for reading, writing,
        listening and speaking. IRCC’s tables turn each of those four results into a level of its own.
      </p>
      <p>
        Each skill has its own row in IRCC’s table, so the same IELTS band can give different levels in
        different skills. CELPIP says its levels are calibrated against CLB, level for level.
      </p>
      <p>
        The levels are never averaged. Programme minimums apply to each skill, and section 13 of the
        Ministerial Instructions gives points for each skill by its level. So an IELTS overall band plays no
        part, and one weak skill can hold back a strong result.
      </p>
      <p>
        Our{' '}
        <Link href="/tools/clb-converter" className={a}>
          CLB converter
        </Link>{' '}
        does the conversion skill by skill, from IRCC’s tables. Our{' '}
        <Link href="/express-entry/federal-skilled-worker" className={a}>
          Federal Skilled Worker guide
        </Link>{' '}
        explains where that programme’s language minimum fits.
      </p>

      <h2>Is a French test worth adding?</h2>
      <p>
        It can be, on top of English. Under section 32 of the Ministerial Instructions, NCLC 7 or higher in
        all four French skills earns 25 extra CRS points. A further 25 follow if your English is also at CLB
        5 or higher in all four.
      </p>
      <p>
        French is also one of IRCC’s{' '}
        <a href={CATEGORIES} rel="noopener noreferrer" target="_blank" className={a}>
          categories for targeted rounds
        </a>
        , and that category asks for the same French level in all four abilities. Our{' '}
        <Link href="/express-entry/category-based-draws" className={a}>
          category-based draws guide
        </Link>{' '}
        explains how those rounds work.
      </p>
      <p>
        In Pakistan, CCI Paris Île-de-France’s finder listed TEF Canada at the Alliance Française in Lahore
        and Karachi. Both centres list TCF Canada on their own pages. For the official TCF centre list, check{' '}
        <a href={TCF_FEI} rel="noopener noreferrer" target="_blank" className={a}>
          France Éducation International’s site
        </a>
        .
      </p>

      <h2>So which English test should you choose?</h2>
      <p>
        Not the one rumoured to be easiest. Under section 74(7) of the Regulations, results from any
        designated test are conclusive evidence of your ability. CRS points follow the level, not the test,
        so three practical points matter more:
      </p>
      <ul>
        <li>
          <strong>How you speak.</strong> IELTS Speaking is a live conversation with an examiner, in person or
          by video call at the centre. It may fall on a different day. In{' '}
          <a href={CELPIP_OVERVIEW} rel="noopener noreferrer" target="_blank" className={a}>
            CELPIP
          </a>{' '}
          and PTE Core, you speak to a computer in a single sitting.
        </li>
        <li>
          <strong>How you are marked.</strong> IDP says IELTS is marked by people. Pearson says PTE Core is
          scored by its AI-powered scoring engine.
        </li>
        <li>
          <strong>Where and when.</strong> IELTS had the widest spread, with British Council centres from Swat
          to Sukkur. On 18 November 2026, PTE Core and CELPIP were only in larger cities, so check dates
          before you prepare for one format.
        </li>
      </ul>
      <p>
        Our suggestion: try each provider’s free practice material, then book the format you handle best,
        leaving time for a retake. When your results arrive, put them through the{' '}
        <Link href="/tools/clb-converter" className={a}>
          CLB converter
        </Link>
        , then the{' '}
        <Link href="/tools/crs-calculator" className={a}>
          CRS calculator
        </Link>{' '}
        to see what they are worth.
      </p>
    </>
  );
}
