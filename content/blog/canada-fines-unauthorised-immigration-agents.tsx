import Link from 'next/link';

/**
 * Published 18 November 2026 on the firm's instruction.
 *
 * Penalty amounts are set in law: Immigration and Refugee Protection
 * Regulations, Part 19.2 (ss. 315.44 to 315.6), added by SOR/2026-220. It was
 * registered on 23 October 2026 and came into force that day (its s. 2), and was
 * published in the Canada Gazette, Part II, on 4 November 2026. Read on the
 * Gazette and on Justice Laws (consolidation dated 2026-11-16) on 18 November
 * 2026. Who may be paid: IRPA s. 91. Five-year inadmissibility: IRPA s. 40(2)(a).
 *
 * Everything else is from IRCC's pages as they stood on 18 November 2026: the
 * news release of 28 October 2026 (it has no separate backgrounder), the
 * representatives pages and the fraud pages. canada.ca times out on scripted
 * downloads, so those pages were read through a page-fetch tool, not saved.
 *
 * Our own suggestion, not IRCC's: the order of the five checking steps, and the
 * point that a name missing from the future penalty list proves nothing. IRCC's
 * pages say nothing about getting money back, so the post does not either.
 */
const a = 'font-semibold';

const RELEASE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/new-penalties-for-fraudulent-and-unauthorized-immigration-and-citizenship-representatives.html';
const GAZETTE = 'https://gazette.gc.ca/rp-pr/p2/2026/2026-11-04/html/sor-dors220-eng.html';
const IRPR_AMOUNTS = 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-315.54.html';
const IRPA_91 = 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-91.html';
const IRPA_40 = 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html';
const BREAK_RULES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/partners-service-providers/break-rules-advice-representation.html';
const LEARN =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html';
const CHOOSE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html';
const AUTHORIZED =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html';
const CANCEL =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/change-cancel.html';
const CICC = 'https://www.college-ic.ca/protecting-the-public/find-an-immigration-consultant';
const SCAMS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html';
const JOB_SCAM =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement/consequences-unauthorized-work.html';
const CONSEQUENCES =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html';
const REPORT = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html';

const PENALTIES: [string, string, string][] = [
  ['Being paid to represent or advise you, or offering to, without being authorised', 'C$5,000', '315.47'],
  ['Knowingly counselling or helping you to misrepresent or hide material facts', 'C$15,000', '315.48(a)'],
  ['Knowingly misrepresenting or hiding material facts themselves', 'C$15,000', '315.48(b)'],
  ['Knowingly giving false or misleading information to encourage or deter immigration to Canada', 'C$15,000', '315.48(c)'],
  ['Not handing over documents an officer asks for during an inspection', 'C$10,000', '315.49(3), 315.55'],
];

const REGISTERS: [string, string, string][] = [
  ['Immigration consultant', 'College of Immigration and Citizenship Consultants (CICC)', 'The CICC’s public register'],
  ['Lawyer', 'A Canadian provincial or territorial law society', 'That law society’s member directory; IRCC links every one'],
  ['Paralegal', 'Law Society of Ontario, the only one IRCC lists', 'The Law Society of Ontario’s directory, linked from IRCC'],
  ['Quebec notary', 'Chambre des notaires du Québec', 'Its notary finder, in French, linked from IRCC'],
  ['Lawyer licensed only in Pakistan', 'No Canadian regulator', 'Not authorised to charge you for a Canadian application'],
];

export default function CanadaFinesUnauthorisedImmigrationAgents() {
  return (
    <>
      <p>
        <strong>
          Since 23 October 2026, Canada can fine unauthorised immigration agents who charge for their
          help, including agents in Pakistan.
        </strong>{' '}
        The baseline penalty is C$5,000 for unauthorised paid help and C$15,000 for knowingly taking part
        in misrepresentation, up to C$1.5 million per notice. The fines fall on the agent, not on you, but
        IRCC may still return or refuse an application made through one.
      </p>

      <h2>What changed in October 2026?</h2>
      <p>
        Canada added a new Part 19.2 to the Immigration and Refugee Protection Regulations. The{' '}
        <a href={GAZETTE} rel="noopener noreferrer" target="_blank" className={a}>
          regulation, SOR/2026-220
        </a>
        , came into force when it was registered on 23 October 2026. IRCC{' '}
        <a href={RELEASE} rel="noopener noreferrer" target="_blank" className={a}>
          announced the penalties
        </a>{' '}
        on 28 October, and the Canada Gazette published them on 4 November.
      </p>
      <p>
        Charging for immigration help without authorisation was already a crime under the Act. What is new
        is that IRCC officers can now impose fines themselves, without a court case. IRCC says the{' '}
        <a href={BREAK_RULES} rel="noopener noreferrer" target="_blank" className={a}>
          new rules
        </a>{' '}
        cover only conduct after they came into force.
      </p>
      <div role="region" aria-label="Baseline administrative penalties for paid immigration representatives, Immigration and Refugee Protection Regulations, in force 23 October 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Baseline administrative penalties for paid immigration representatives, Immigration and Refugee
            Protection Regulations, in force 23 October 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Violation</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Baseline</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Violation in section</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {PENALTIES.map(([what, amount, section]) => (
              <tr key={section}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{what}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{amount}</td>
                <td className="hidden whitespace-nowrap px-4 py-3 tabular-nums sm:table-cell">{section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Under{' '}
        <a href={IRPR_AMOUNTS} rel="noopener noreferrer" target="_blank" className={a}>
          section 315.54
        </a>
        , each baseline is only a starting point. If a misrepresentation caused an error, such as a wrong
        approval, C$15,000 is added. Any money the person received for the violation is added too.
      </p>
      <p>
        The total is then halved for a first violation, kept as it is after one earlier notice, and
        multiplied by 1.5 after more. All the violations in one notice are capped at C$1.5
        million.
      </p>

      <h2>Who pays the penalty: the agent or you?</h2>
      <p>
        The penalties fall on people who represent or advise for payment, or offer to. That includes
        licensed consultants and lawyers who misrepresent, as well as unauthorised agents. The regulation
        expressly covers violations committed outside Canada.
      </p>
      <p>
        IRCC’s page on{' '}
        <a href={CHOOSE} rel="noopener noreferrer" target="_blank" className={a}>
          choosing a representative
        </a>{' '}
        says the rules apply wherever the person is located. Someone who breaks them from outside Canada
        will still be fined and named.
      </p>
      <p>
        You are not fined under these rules, but you are not safe either. IRCC says it{' '}
        <a href={LEARN} rel="noopener noreferrer" target="_blank" className={a}>
          may return or refuse your application
        </a>{' '}
        if you use an unauthorised paid representative, in Canada or abroad. It also holds you{' '}
        <a href={CONSEQUENCES} rel="noopener noreferrer" target="_blank" className={a}>
          responsible for everything in your application
        </a>
        , even if a representative filled it in.
      </p>
      <p>
        A finding of misrepresentation makes you inadmissible to Canada for five years, under{' '}
        <a href={IRPA_40} rel="noopener noreferrer" target="_blank" className={a}>
          section 40 of the Act
        </a>
        . During that time you cannot apply for permanent residence.
      </p>

      <h2>Who is allowed to charge you?</h2>
      <p>
        <a href={IRPA_91} rel="noopener noreferrer" target="_blank" className={a}>
          Section 91 of the Immigration and Refugee Protection Act
        </a>{' '}
        lists who may be paid to represent or advise you:
      </p>
      <ul>
        <li>lawyers and paralegals in good standing with a Canadian provincial or territorial law society;</li>
        <li>notaries in good standing with the Chambre des notaires du Québec;</li>
        <li>consultants in good standing with the College of Immigration and Citizenship Consultants.</li>
      </ul>
      <p>
        The Act also allows law students supervised by a lawyer, and organisations working under an
        agreement with the Government of Canada. A lawyer licensed only in Pakistan is not on the list: the
        law society has to be Canadian.
      </p>
      <p>
        Family and friends may help you for free. IRCC says you do not need a representative at all, and
        that using one does not draw special attention to your application.
      </p>

      <h2>How do you check a name, step by step?</h2>
      <ol>
        <li>Ask for the full name of the person who will handle your file, and their licence or membership number.</li>
        <li>
          Search that name on the right register, from the table below. IRCC’s page on{' '}
          <a href={AUTHORIZED} rel="noopener noreferrer" target="_blank" className={a}>
            checking a representative
          </a>{' '}
          links every one.
        </li>
        <li>
          For a consultant, check that “Entitled to Practise” says Yes on the{' '}
          <a href={CICC} rel="noopener noreferrer" target="_blank" className={a}>
            CICC’s register
          </a>
          . The College says anyone marked No cannot legally give immigration advice or services.
        </li>
        <li>
          Make sure the same person signs your Use of a Representative form (IMM 5476).{' '}
          <a href={CANCEL} rel="noopener noreferrer" target="_blank" className={a}>
            IRCC says
          </a>{' '}
          a representative who tells you to leave their details out is wrong.
        </li>
        <li>Get a written contract that lists the services and the fee, and read it before you sign, as IRCC advises.</li>
      </ol>
      <div role="region" aria-label="Who may be paid to represent you before IRCC, their regulator and where to check them, as of 18 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Who may be paid to represent you before IRCC, their regulator and where to check them, as of 18
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Representative</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Regulator</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Where to check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {REGISTERS.map(([who, regulator, where]) => (
              <tr key={who}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{who}</th>
                <td className="hidden px-4 py-3 sm:table-cell">{regulator}</td>
                <td className="px-3 py-3 sm:px-4">{where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The questions to ask at a first meeting are in our guide on{' '}
        <Link href="/canadian-immigration-lawyer-pakistan" className={a}>
          how to check a representative
        </Link>
        .
      </p>

      <h2>What warning signs does IRCC list?</h2>
      <ul>
        <li>
          <strong>A guarantee.</strong> IRCC’s{' '}
          <a href={SCAMS} rel="noopener noreferrer" target="_blank" className={a}>
            scams page
          </a>{' '}
          says: “No one can guarantee you a job or a visa to Canada.” Our page on{' '}
          <Link href="/no-guarantee-policy" className={a}>
            visa guarantees
          </Link>{' '}
          explains why.
        </li>
        <li>
          <strong>A job offer for sale.</strong> IRCC warns about anyone who{' '}
          <a href={JOB_SCAM} rel="noopener noreferrer" target="_blank" className={a}>
            promises a work permit or job offer
          </a>{' '}
          if you pay them.
        </li>
        <li>
          <strong>Advice to lie.</strong> IRCC lists representatives who tell you to lie on your
          application. Giving false or misleading information is against the law.
        </li>
        <li>
          <strong>Money into a personal account.</strong> IRCC fees are paid to the Receiver General for
          Canada. IRCC never asks you to pay into a personal bank account or through a private transfer
          service.
        </li>
        <li>
          <strong>“Free” help that turns paid.</strong> IRCC warns about representatives who advertise
          free services and later ask for a fee.
        </li>
        <li>
          <strong>Faster biometrics for a fee.</strong> IRCC lists claims to speed up your biometrics
          appointment for money as a warning sign.
        </li>
      </ul>

      <h2>What if you have already paid an unauthorised person?</h2>
      <p>IRCC’s guidance points to these steps:</p>
      <ul>
        <li>
          <strong>Cancel them as your representative.</strong> IRCC says you can cancel a representative
          at any time, by sending a new IMM 5476 through its web form.
        </li>
        <li>
          <strong>Report them.</strong> Use IRCC’s{' '}
          <a href={REPORT} rel="noopener noreferrer" target="_blank" className={a}>
            reporting page
          </a>
          , and tell the Canada Border Services Agency’s Border Watch Line. The page gives the same steps
          for people outside Canada.
        </li>
        <li>
          <strong>Complain to their regulator.</strong> If the person is a consultant, IRCC points you to
          the CICC. If they are a lawyer or paralegal, it points you to their law society.
        </li>
        <li>
          <strong>Fake documents.</strong> IRCC also tells people outside Canada to report these to the
          Canadian Anti-Fraud Centre and their local police.
        </li>
      </ul>
      <p>
        IRCC says its aim is to stop the people committing fraud, not to punish those who were misled. Its
        pages do not say how to get your money back. If your application was refused, see{' '}
        <Link href="/canada-visa-refused" className={a}>
          what to do after a Canadian refusal
        </Link>
        .
      </p>

      <h2>When will penalised names be made public?</h2>
      <p>
        The regulation requires IRCC to publish each penalised person’s name, business name and address,
        the violation, the penalty, and whether it was paid. Nothing is published until the 30-day window
        to request a review has passed.
      </p>
      <p>
        IRCC expects the online registry to launch in 2027, after the first penalties are issued. A name
        missing from it will not prove that someone is authorised. The registers above remain the check
        that counts, and our guide on{' '}
        <Link href="/canadian-immigration-lawyer-pakistan" className={a}>
          how to check a representative
        </Link>{' '}
        walks through it.
      </p>
    </>
  );
}
