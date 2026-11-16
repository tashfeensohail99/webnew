import Link from 'next/link';

/**
 * Published 17 November 2026 on the firm's instruction. Figures printed with the
 * owner's approval, dated, from SIRI's pages as they stood on 17 November 2026:
 * Start-up Denmark (last updated 29-06-2026), Self-support, and Accompanying
 * family (last updated 24-08-2026). SIRI still lists the self-support amounts at
 * the "2025 level". Pakistan submission details are from the Danish Embassy in
 * Islamabad's residence-permit and application-fee pages. Re-check monthly
 * (roadmap R18) and move `updated` in lib/blog.ts when the figures are re-checked.
 */
const a = 'font-semibold';

const SIRI = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark';
const SELF_SUPPORT = 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Self-support---SIRI/';
const FAMILY = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---work';
const EMBASSY = 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/';
const EMBASSY_FEE = 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/application-fee/';

const TOGETHER: [string, string][] = [
  ['You alone', 'DKK 153,240'],
  ['You and your spouse or partner', 'DKK 306,480'],
  ['You, your spouse or partner, and one or more children', 'DKK 356,904'],
  ['You and one or more children', 'DKK 203,664'],
];

const LATER: [string, string][] = [
  ['Spouse or partner', 'DKK 153,240'],
  ['Spouse or partner and one or more children', 'DKK 203,664'],
  ['One or more children only', 'DKK 50,424'],
];

const STEPS: [string, string][] = [
  ['Create a case order ID', 'on SIRI’s Start-up Denmark page. The ID links your payment to your application.'],
  ['Pay the fee', 'DKK 3,060, as listed on 17 November 2026, and keep the receipt.'],
  ['Collect your documents', 'see the list below. Some may need translating.'],
  ['Fill in the online application form', 'and sign it. Without a Danish MitID, you sign the declaration and attach it instead.'],
  ['Submit, and give your biometrics', 'your photo and fingerprints must be recorded within 14 days of submitting. If you cannot get an appointment in time, SIRI asks you to email it the date you have booked.'],
  ['Wait for the decision', 'normally 2 months, and up to 4 if SIRI needs more information. The residence card is posted to your registered Danish address, so put your name on the letterbox.'],
];

export default function StartUpDenmarkResidencePermitSiri() {
  return (
    <>
      <p>
        <strong>
          Once the expert panel approves your business, you apply to SIRI, Denmark’s Agency for
          International Recruitment and Integration, for the residence and work permit.
        </strong>{' '}
        On 17 November 2026, SIRI listed a processing fee of DKK 3,060 and a normal processing time of 2
        months, up to 4. A founder coming alone had to show DKK 153,240 to support themselves. The first
        permit lasts up to 2 years. From Pakistan, you submit the application in person at the Gerry’s/VFS
        visa centre. Here is the whole process.
      </p>

      <h2>What does SIRI check?</h2>
      <p>
        <a href={SIRI} rel="noopener noreferrer" target="_blank" className={a}>
          SIRI’s Start-up Denmark page
        </a>{' '}
        sets these conditions:
      </p>
      <ul>
        <li>The expert panel appointed by the Danish Business Authority has approved your business idea.</li>
        <li>The business is innovative and has development potential, not an ordinary restaurant or shop.</li>
        <li>You are a full or partial owner. SIRI assesses ownership case by case.</li>
        <li>Your presence is necessary for the business. A purely financial interest does not count, and holding companies are excluded.</li>
        <li>You can support yourself, and any family coming with you.</li>
        <li>The yearly limit of 75 permits under the scheme has not been reached.</li>
      </ul>

      <h2>How do you apply, step by step?</h2>
      <ol>
        {STEPS.map(([t, d]) => (
          <li key={t}>
            <strong>{t}</strong>: {d}
          </li>
        ))}
      </ol>

      <h2>Which documents do you need?</h2>
      <ul>
        <li>The receipt for the fee.</li>
        <li>A copy of every page of your passport.</li>
        <li>The expert panel’s approval.</li>
        <li>Proof that you can support yourself, usually a bank statement in your name.</li>
        <li>Proof that you own the company.</li>
      </ul>
      <p>
        Check the passport date first. SIRI will not issue a permit that runs past the date three months
        before your passport expires, so a passport with little time left shortens your permit.
      </p>

      <h2>How much money must you show?</h2>
      <p>
        SIRI asks for disposable funds to support yourself and any family who come with you. On its{' '}
        <a href={SELF_SUPPORT} rel="noopener noreferrer" target="_blank" className={a}>
          self-support page
        </a>
        , checked on 17 November 2026, the amounts were still listed at the 2025 level:
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Start-up Denmark self-support amounts when the family applies together, as listed by SIRI on 17 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Applying together</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Funds to show</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {TOGETHER.map(([who, amt]) => (
              <tr key={who}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{who}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        If your family follow after your own permit is granted, SIRI’s{' '}
        <a href={FAMILY} rel="noopener noreferrer" target="_blank" className={a}>
          accompanying-family page
        </a>{' '}
        lists these amounts instead, also at the 2025 level:
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Start-up Denmark self-support amounts when family apply later, as listed by SIRI on 17 November 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Family applying later</th>
              <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">Funds to show</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {LATER.map(([who, amt]) => (
              <tr key={who}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{who}</th>
                <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums sm:px-4">{amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The usual proof is a bank statement in your name that shows the currency, the date it was issued
        and you as the account holder. Cryptocurrency, including stablecoins, is not accepted; SIRI says
        it must be exchanged into Danish kroner or another currency first. Money held in a parent’s or
        sibling’s account is not in your name, so move it well before you apply.
      </p>

      <h2>Can your family come with you?</h2>
      <p>
        Yes. Your spouse, registered or cohabiting partner, and children under 18 who live at home can
        apply as accompanying family. On 17 November 2026 SIRI listed their processing fee as DKK 3,080
        and normal processing as 2 months, up to 3. You must show you can support them with a bank
        statement that includes your full name, at the amounts above.
      </p>

      <h2>How do you submit from Pakistan?</h2>
      <p>
        The Danish Embassy in Islamabad’s{' '}
        <a href={EMBASSY} rel="noopener noreferrer" target="_blank" className={a}>
          residence-permit page
        </a>{' '}
        says every residence-permit application, including work permits, must be submitted in person at
        the Gerry’s/VFS visa centre, and the embassy forwards it to Denmark for a decision. Its{' '}
        <a href={EMBASSY_FEE} rel="noopener noreferrer" target="_blank" className={a}>
          fee page
        </a>{' '}
        names centres in Islamabad, Lahore and Karachi, says the permit fee is paid to the Danish
        authorities, and says the visa centre charges its own service fee on top. Ask the centre to
        confirm where and when your biometrics will be taken, so you meet SIRI’s 14-day limit.
      </p>
      <p>
        The same page warns applicants not to use agents, who it says charge high prices for false
        documents that usually lead to a refusal. Every document in this application is yours: your
        passport, your bank statement, your company. Nobody needs to “arrange” any of them.
      </p>

      <h2>What does the permit let you do?</h2>
      <ul>
        <li>Work only in the business the permit covers, plus unpaid voluntary work. A job or a sideline job needs a separate permit.</li>
        <li>Travel in the Schengen area for up to 90 days in any 180, without working there.</li>
        <li>Stay up to 2 years at first, then extend for up to 3 years at a time.</li>
      </ul>
      <p>
        The permit lapses if you spend more than six months in a row outside Denmark, and receiving
        benefits under the Active Social Policy Act can lead to it being revoked. Those rules, and what
        to keep for the extension, are in{' '}
        <Link href="/blog/start-up-denmark-extension" className={a}>
          extending a Start-up Denmark permit
        </Link>
        . The full route, from eligibility to extension, is in our{' '}
        <Link href="/europe/denmark-startup-visa" className={a}>
          Start-up Denmark guide
        </Link>
        .
      </p>
    </>
  );
}
