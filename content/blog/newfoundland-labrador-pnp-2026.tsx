import Link from 'next/link';

/**
 * Published 23 November 2026, at the site owner's request of that day. Written
 * from the Government of Newfoundland and Labrador's Office of Immigration and
 * Multiculturalism pages as they stood on 23 November 2026: the NLPNP overview,
 * the five category pages, the Skilled Worker and Express Entry Skilled Worker
 * eligibility policies (the latter updated 22 April 2026), the EOI overview and
 * EOI FAQs (updated 25 September 2026), the EOI prioritisation criteria (updated
 * 23 March 2026), the Invitations to Apply updates (updated 19 November 2026),
 * the candidate FAQs, the AIP workers page, the representatives page
 * (updated 29 October 2026) and the consultation page (updated 15 May 2026); and
 * the province's news releases of 13 April 2022, 31 January, 19 February,
 * 7 March, 27 March and 8 April 2025, and 15 May 2026. Federal parts: IRCC's
 * provincial nominee page, its Atlantic Immigration Program page, the Ministerial
 * Instructions respecting the Express Entry system (s. 28(1)) and IRCC's
 * backgrounder of 20 November 2026. canada.ca timed out on scripted downloads,
 * so its pages were read through a page-fetch tool.
 *
 * Figures: the 2024 and 2025 allocations and the 50 per cent cut are from the
 * province's release of 31 January 2025; the 75 per cent rule is the province's
 * own statement in its release of 7 March 2025. Invitation counts are the
 * province's published table; the yearly totals are our sums of that table. The
 * 600 points are set by s. 28(1) of the Ministerial Instructions. No fee,
 * processing time, settlement-fund, net-worth, investment or points-grid figure
 * is printed. No 2026 allocation for the province was found on gov.nl.ca.
 *
 * Our own reading: the list of realistic routes from Pakistan is our inference
 * from the category criteria and the EOI FAQs, not a list the province
 * publishes. Re-check monthly; the province adds invitation rounds most weeks.
 */
const a = 'font-semibold';

const OIM = 'https://www.gov.nl.ca/immigration';
const PNP = `${OIM}/immigrating-to-newfoundland-and-labrador/provincial-nominee-program`;
const OVERVIEW = `${PNP}/overview/`;
const EE_SKILLED = `${PNP}/applicants/express-entry-skilled-worker/`;
const EE_POLICY = `${OIM}/4-express-entry-skilled-worker-category-eligibility-criteria/`;
const ENTREPRENEUR = `${PNP}/entrepreneurs/international-entrepreneur/eligibility-criteria/`;
const EOI_FAQ = `${OIM}/faqs/expression-of-interest-model-faqs/`;
const PRIORITIES = `${OIM}/expression-of-interest-model-prioritization-criteria/`;
const ITA = `${OIM}/invitations-to-apply-updates/`;
const REPS = `${OIM}/immigrating-to-newfoundland-and-labrador/using-representatives-and-consultants/`;
const CONSULTATION = `${OIM}/strengthening-provincial-immigration-programs-and-foreign-worker-protections/`;
const SPACES = 'https://www.gov.nl.ca/releases/2025/exec/0131n03/';
const JVA_RULES = 'https://www.gov.nl.ca/releases/2025/ipgs/0307n07/';
const PASSIVE = 'https://www.gov.nl.ca/releases/2025/ipgs/0327n01/';
const FEES = 'https://www.gov.nl.ca/releases/2022/ipgs/0413n02/';
const IRCC_PNP = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html';
const MI =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html';
const LEVELS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/11/building-a-stronger-canada-through-a-well-managed-predictable-immigration-system.html';

const CHANGES: [string, string][] = [
  ['January 2025', 'Ottawa cut the province’s NLPNP and Atlantic Immigration Program (AIP) spaces by 50 per cent.'],
  ['31 January 2025', '1,000 spaces restored: 2,050 NLPNP spaces for 2025 (2,100 in 2024) and 475 AIP spaces.'],
  ['19 February 2025', 'The NLPNP and AIP moved to an EOI model.'],
  ['7 March 2025', 'New rules for Job Vacancy Assessments and AIP designations. The province said Ottawa required 75 per cent of nominees to be temporary residents already there.'],
  ['3 April 2025', 'First invitation round: 256 people.'],
  ['23 March 2026', 'Updated criteria for choosing EOIs, with health occupations first.'],
  ['15 May 2026', 'Consultation on possible provincial immigration legislation and foreign worker protections.'],
  ['By 25 September 2026', 'Time to file a full application after an invitation temporarily cut from 60 to 30 days.'],
];

const CATEGORIES: [string, string, string][] = [
  ['Skilled Worker', 'A full-time job offer at any TEER level; a language test for TEER 4 and 5 jobs', 'Yes, if the employer holds a Job Vacancy Assessment (JVA)'],
  ['Express Entry Skilled Worker', 'An Express Entry profile, a full-time TEER 0–3 offer, a Canadian credential or an ECA, and a minimum provincial points score', 'Possibly; see below'],
  ['International Graduate', 'A post-graduation work permit (PGWP) and a full-time job offer', 'No, it needs a PGWP'],
  ['International Entrepreneur', 'Business ownership or senior management experience, and starting or buying a local business', 'Yes, by EOI and invitation'],
  ['International Graduate Entrepreneur', 'A recent Memorial University or College of the North Atlantic credential, and a PGWP', 'No, it needs study in the province'],
];

export default function NewfoundlandLabradorPnp2026() {
  return (
    <>
      <p>
        <strong>
          Yes, but for most people in Pakistan the Newfoundland and Labrador PNP now starts with a local
          job offer.
        </strong>{' '}
        Since February 2025, every application begins with an expression of interest (EOI), and the
        province invites candidates in rounds. As of 23 November 2026, a worker’s EOI from outside Canada
        also needs the employer’s invite code.
      </p>

      <h2>What changed in the Newfoundland and Labrador PNP in 2025 and 2026?</h2>
      <p>
        The province published each change in a news release or on its Office of Immigration and
        Multiculturalism pages.
      </p>
      <div role="region" aria-label="Changes to the Newfoundland and Labrador Provincial Nominee Program from January 2025 to September 2026, as published by the province" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Changes to the Newfoundland and Labrador Provincial Nominee Program from January 2025 to September 2026, as published by the province</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What changed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CHANGES.map(([when, what]) => (
              <tr key={when}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{when}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The space figures and the 75 per cent rule are from the province’s releases of{' '}
        <a href={SPACES} rel="noopener noreferrer" target="_blank" className={a}>
          31 January
        </a>{' '}
        and{' '}
        <a href={JVA_RULES} rel="noopener noreferrer" target="_blank" className={a}>
          7 March 2025
        </a>
        . We found no 2026 allocation on its site.
      </p>

      <h2>Which NLPNP categories are open in November 2026?</h2>
      <p>
        On 23 November 2026, the province’s{' '}
        <a href={OVERVIEW} rel="noopener noreferrer" target="_blank" className={a}>
          NLPNP overview
        </a>{' '}
        listed the same five categories our{' '}
        <Link href="/pnp/newfoundland-labrador" className={a}>
          Newfoundland and Labrador PNP guide
        </Link>{' '}
        names.
      </p>
      <div role="region" aria-label="The five Newfoundland and Labrador Provincial Nominee Program categories on 23 November 2026, what each needs, and whether someone living in Pakistan can use it" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">The five Newfoundland and Labrador Provincial Nominee Program categories on 23 November 2026, what each needs, and whether someone living in Pakistan can use it</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Category</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What it needs</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">From Pakistan?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CATEGORIES.map(([category, needs, abroad]) => (
              <tr key={category}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{category}</th>
                <td className="px-3 py-3 sm:px-4">{needs}</td>
                <td className="px-3 py-3 sm:px-4">{abroad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The three worker categories ask for an age of 21 to 59, money to settle and a plan to live in the
        province permanently. The International Entrepreneur category has the same age range.
      </p>
      <p>
        The{' '}
        <a href={EE_SKILLED} rel="noopener noreferrer" target="_blank" className={a}>
          Express Entry Skilled Worker page
        </a>{' '}
        lists a valid work permit or authorisation to work in Canada. Its{' '}
        <a href={EE_POLICY} rel="noopener noreferrer" target="_blank" className={a}>
          detailed policy
        </a>
        , updated 22 April 2026, also accepts an offer from an employer with a valid JVA or LMIA. Ask the
        province which applies before you rely on it.
      </p>
      <p>
        The{' '}
        <a href={ENTREPRENEUR} rel="noopener noreferrer" target="_blank" className={a}>
          International Entrepreneur page
        </a>{' '}
        sets minimum assets and investment, left out here because they appear only on that page.
        Applicants from outside the province must visit it before applying.
      </p>

      <h2>How many invitations has the province issued?</h2>
      <p>
        The province lists every round on its{' '}
        <a href={ITA} rel="noopener noreferrer" target="_blank" className={a}>
          Invitations to Apply page
        </a>
        , last updated 19 November 2026. By our count of that table, it issued 3,376 invitations in 13
        rounds in 2025. There were no rounds between 12 November 2025 and 6 March 2026.
      </p>
      <p>
        From 6 March to 19 November 2026, it issued 3,479 invitations in 26 rounds: 2,941 for the NLPNP
        and 538 for the AIP. From September, rounds came most weeks, and none exceeded 131 invitations.
        The 19 November round invited 98 people, 32 of them for the NLPNP.
      </p>
      <p>
        The table gives no score or occupation for any round. An invitation is not a nomination: the
        province says a full application can still be closed or refused.
      </p>

      <h2>How does Newfoundland and Labrador choose whom to invite?</h2>
      <p>
        The province reviews the EOI pool and invites in batches. Its{' '}
        <a href={PRIORITIES} rel="noopener noreferrer" target="_blank" className={a}>
          prioritisation criteria
        </a>
        , updated 23 March 2026, say meeting a criterion does not guarantee an invitation. It may give
        priority to:
      </p>
      <ul>
        <li>health and health-related occupations;</li>
        <li>rural and regional jobs, including hard-to-fill sales and service roles;</li>
        <li>occupations it uses less than other provinces: business and finance, science and research, and trades and transport;</li>
        <li>employers with a good record on compliance and on keeping earlier hires;</li>
        <li>signs you will stay, such as community ties, earlier residence or family in the province;</li>
        <li>graduates of its own institutions, and candidates who strengthen Francophone communities.</li>
      </ul>
      <p>
        Sales and service jobs around St. John’s may get lower priority when programme use there is
        already high. An EOI stays in the pool for 12 months, then expires. The province’s{' '}
        <a href={EOI_FAQ} rel="noopener noreferrer" target="_blank" className={a}>
          EOI FAQs
        </a>{' '}
        say a second EOI from the same person does not help and may breach its policies.
      </p>

      <h2>Can you apply to the Newfoundland and Labrador PNP from Pakistan?</h2>
      <p>
        Not without an employer. The EOI FAQs say an EOI without a job or job offer from a Newfoundland
        and Labrador employer will not be considered. From outside Canada, an EOI without the employer’s
        invite code, which ties it to the employer’s JVA space, is invalid.
      </p>
      <p>
        The 75 per cent rule of March 2025 also favoured people already in the province. It was a federal
        condition on 2025 allocations, and we found no statement from the province that it applies in 2026.
      </p>
      <p>On our reading of the category rules, these are the realistic routes from Pakistan:</p>
      <ul>
        <li>
          <strong>Skilled Worker</strong>, with a genuine full-time offer from an employer that holds a JVA.
        </li>
        <li>
          <strong>Express Entry Skilled Worker</strong>, if you are already in the Express Entry pool and
          the province confirms that a JVA-backed offer is enough.
        </li>
        <li>
          <strong>International Entrepreneur</strong>, if you meet its business criteria and are invited.
        </li>
      </ul>
      <p>
        Two documents matter early. The Express Entry category needs a Canadian credential or an ECA, so a
        Pakistani degree needs an ECA. Every worker category asks for English or French translations of
        documents in other languages, such as Urdu.
      </p>

      <h2>How do you avoid fraud when applying from abroad?</h2>
      <p>
        The province’s{' '}
        <a href={REPS} rel="noopener noreferrer" target="_blank" className={a}>
          representatives page
        </a>
        , updated 29 October 2026, says you do not need a representative and that NLPNP and AIP forms are
        free. It removed its nominee application fees in{' '}
        <a href={FEES} rel="noopener noreferrer" target="_blank" className={a}>
          April 2022
        </a>
        .
      </p>
      <p>
        You are expected to submit your own application from your own account. A representative
        submitting under your name counts as impersonation under the province’s misrepresentation policy.
        Fraudulent documents may lead to a ban from both programmes.
      </p>
      <p>
        If an invitation or document reaches you through an employer or agent, the province suggests
        checking it by emailing immigration@gov.nl.ca.
      </p>
      <p>
        In March 2025 the province also{' '}
        <a href={PASSIVE} rel="noopener noreferrer" target="_blank" className={a}>
          warned against passive investment schemes
        </a>
        , which it says are strictly prohibited. In these, an investor pays into a business for permanent
        residence, without living in the province or running it. Our post on{' '}
        <Link href="/blog/fake-canada-job-offers-2026" className={a}>
          fake Canadian job offers
        </Link>{' '}
        explains how to check an offer from Pakistan.
      </p>

      <h2>What happens after a nomination, and what could change next?</h2>
      <p>
        A nomination under the Express Entry Skilled Worker category is worth 600 points under section
        28(1) of the{' '}
        <a href={MI} rel="noopener noreferrer" target="_blank" className={a}>
          Ministerial Instructions
        </a>
        . IRCC’s{' '}
        <a href={IRCC_PNP} rel="noopener noreferrer" target="_blank" className={a}>
          provincial nominee page
        </a>{' '}
        says the province decides whether you then apply through Express Entry or the separate process.
        The province says only IRCC officers decide permanent residence.
      </p>
      <p>
        On 20 November 2026,{' '}
        <a href={LEVELS} rel="noopener noreferrer" target="_blank" className={a}>
          IRCC said
        </a>{' '}
        its 2027–2029 levels plan increases planned PNP and AIP admissions. A time-limited measure will also
        give provinces extra nominee space for workers already in Canada. We found no provincial notice yet
        on how that space will be used.
      </p>
      <p>
        The province’s{' '}
        <a href={CONSULTATION} rel="noopener noreferrer" target="_blank" className={a}>
          May 2026 consultation
        </a>{' '}
        asked about licensing recruiters, an employer registry and penalties. We found no announced
        outcome by 23 November 2026.
      </p>
      <p>
        How nomination works, and who it does not suit, is in our{' '}
        <Link href="/pnp/newfoundland-labrador" className={a}>
          Newfoundland and Labrador PNP guide
        </Link>
        . With a designated employer, compare it with the{' '}
        <Link href="/atlantic-immigration-program" className={a}>
          Atlantic Immigration Program
        </Link>
        , which also takes applicants living abroad. Other provinces are compared in our{' '}
        <Link href="/pnp" className={a}>
          provincial nominee overview
        </Link>
        .
      </p>
    </>
  );
}
