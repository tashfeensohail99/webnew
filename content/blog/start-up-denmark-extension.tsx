import Link from 'next/link';

/**
 * Published 17 November 2026 on the firm's instruction. From the Start-up
 * Denmark programme's extension guide and SIRI's Start-up Denmark page, as they
 * stood on 17 November 2026. The "keep from day one" list is our practical
 * advice drawn from what the extension guide asks for, and is framed that way.
 */
const a = 'font-semibold';

const EXTENSION = 'https://startupdenmarkprogramme.dk/application-guide-extension';
const SIRI = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark';
const DECREE = 'https://www.retsinformation.dk/eli/lta/2022/969';

const OUTCOMES: [string, string][] = [
  ['Approved', 'You receive an approval letter from the secretariat. It entitles you to apply to SIRI for the extension, but is not the extension itself.'],
  ['Rejected', 'You can appeal once to the Danish Business Authority. A panel representative who was not involved in the first assessment reassesses it, and that decision stands.'],
  ['Unclear', 'You may be called to an interview with the panel representative assessing your report, and are told the outcome in writing afterwards.'],
];

const KEEP: [string, string][] = [
  ['Company registration', 'Your CVR number, and proof the company is active and not in dissolution or bankruptcy.'],
  ['Accounts', 'Each year’s financial statements, kept with the bookkeeping behind them.'],
  ['Staff', 'Who you have employed, when, and on what terms.'],
  ['Customers', 'Contracts, invoices, pilot agreements and anything else that shows people are buying.'],
  ['Investment', 'Agreements and transfers for any money raised, from investors or grants.'],
  ['Changes to the plan', 'A short note each time the business changes direction, and why, because you must account for every change since your original application.'],
];

export default function StartUpDenmarkExtension() {
  return (
    <>
      <p>
        <strong>
          To extend a Start-up Denmark permit, you need two approvals again: the expert panel must
          approve a progress report on your company, and then SIRI must grant the extension.
        </strong>{' '}
        You can apply to SIRI no earlier than three months before your permit expires, and you may do so
        while still waiting for the panel. If you apply in time, you can stay in Denmark while SIRI
        decides. Extensions are granted for up to three years at a time. This is how it worked on 17
        November 2026.
      </p>

      <h2>What does the panel want in the progress report?</h2>
      <p>
        The{' '}
        <a href={EXTENSION} rel="noopener noreferrer" target="_blank" className={a}>
          programme’s extension guide
        </a>{' '}
        says you complete an online template with questions about how the company has progressed, and
        upload documents. Its examples are:
      </p>
      <ul>
        <li>the company’s latest financial statement,</li>
        <li>the number of employees,</li>
        <li>documentation of customers, and</li>
        <li>investments.</li>
      </ul>
      <p>
        The panel compares this with your original application. Its question is whether the company is
        established and follows the business plan the panel first approved. Where the business has
        changed, it is your job to explain how and why. The company must be formally registered with a
        CVR number, and must not be in compulsory dissolution or bankruptcy.
      </p>

      <h2>What are the possible outcomes?</h2>
      <p>One panel member evaluates the report, with three possible results:</p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Possible outcomes of a Start-up Denmark progress report</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Outcome</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What happens next</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {OUTCOMES.map(([o, next]) => (
              <tr key={o}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{o}</th>
                <td className="px-3 py-3 sm:px-4">{next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What happens at the interview?</h2>
      <p>
        Interviews are generally scheduled for 45 minutes. You present the business for the first 15,
        then answer questions about its progress for the remaining 30. The panel representative
        responsible for your report runs it, a government official from Start-up Denmark attends as an
        observer, and the interview is recorded and logged. Prepare the way you would for an investor
        meeting: know your numbers, and be ready to explain every difference between the plan and what
        happened.
      </p>

      <h2>When should you apply to SIRI?</h2>
      <p>
        No earlier than three months before your permit expires, and before it expires. Because you can
        apply to SIRI while the panel is still deciding, the practical plan is to send the progress report
        early enough that the panel’s answer is likely to arrive in that three-month window, and to file
        with SIRI as soon as the window opens. SIRI’s{' '}
        <a href={SIRI} rel="noopener noreferrer" target="_blank" className={a}>
          Start-up Denmark page
        </a>{' '}
        sets the rest: extensions of up to three years at a time, never past three months before your
        passport expires. Renew a short passport before you apply.
      </p>

      <h2>What should you keep from your first day in Denmark?</h2>
      <p>
        The progress report is far easier to write if the evidence has been collected as you go. Based on
        what the extension guide asks for, keep:
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Records to keep for a Start-up Denmark extension</caption>
          <tbody className="divide-y divide-rule">
            {KEEP.map(([what, detail]) => (
              <tr key={what}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{what}</th>
                <td className="px-3 py-3 sm:px-4">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What can end the permit before you get there?</h2>
      <ul>
        <li>
          <strong>Time abroad.</strong> More than six months in a row outside Denmark makes the permit
          lapse, unless SIRI grants an exception you asked for in advance.
        </li>
        <li>
          <strong>Public benefits.</strong> Receiving benefits under the Active Social Policy Act can lead
          to the permit being revoked.
        </li>
        <li>
          <strong>Other work.</strong> The permit covers only your business. A salaried job, a sideline
          job or a different business needs its own permit.
        </li>
        <li>
          <strong>A different business.</strong> If the business changes significantly, you need a new
          permit, not an extension.
        </li>
      </ul>
      <p>
        Extensions rest on § 9 a of the Danish Aliens Act, and the scheme’s own rules are in its{' '}
        <a href={DECREE} rel="noopener noreferrer" target="_blank" className={a}>
          decree
        </a>{' '}
        (in Danish). For the first application, start with{' '}
        <Link href="/blog/start-up-denmark-eligibility" className={a}>
          who qualifies
        </Link>
        ; for the whole route, read our{' '}
        <Link href="/europe/denmark-startup-visa" className={a}>
          Start-up Denmark guide
        </Link>
        .
      </p>
    </>
  );
}
