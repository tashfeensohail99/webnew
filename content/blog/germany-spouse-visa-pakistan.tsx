import Link from 'next/link';

/**
 * Published 23 November 2026. German law is quoted from gesetze-im-internet.de as read on
 * 23 November 2026: the Residence Act (AufenthG), last amended by Art. 5 of the Act of
 * 22 October 2026 (BGBl. 2026 I Nr. 318), ss. 2, 4a, 5, 6, 27, 28, 29 and 30; and the
 * Residence Ordinance (AufenthV), last amended by Art. 12(9) of the same Act, ss. 46 and 52.
 * The only fee printed (EUR 75) is the one set in AufenthV s. 46(2) no. 1.
 *
 * The Pakistan process is from the German Missions in Pakistan: the family reunion page
 * (dated 25.08.2026), the portal guide PDF (14.01.2026), the Legal page (14.04.2026), the
 * Visa: General Information page and the Consulate General Karachi page. Page-only fees,
 * document age limits and waiting times are deliberately left out.
 *
 * Our own suggestions, not from a source: find out which section your spouse's permit was
 * issued under, and check the work entry on your card. The table is our summary of
 * s. 30(1) and s. 28(1). Re-check the Embassy page and the Act's version line monthly.
 */
const a = 'font-semibold';

const S2 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__2.html';
const S4A = 'https://www.gesetze-im-internet.de/aufenthg_2004/__4a.html';
const S5 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__5.html';
const S6 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__6.html';
const S27 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__27.html';
const S28 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__28.html';
const S29 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__29.html';
const S30 = 'https://www.gesetze-im-internet.de/aufenthg_2004/__30.html';
const V46 = 'https://www.gesetze-im-internet.de/aufenthv/__46.html';
const V52 = 'https://www.gesetze-im-internet.de/aufenthv/__52.html';
const EMBASSY_FZ = 'https://pakistan.diplo.de/pk-en/service/1-visa-fz-seite-1676108';
const PORTAL_GUIDE =
  'https://pakistan.diplo.de/resource/blob/2751960/79cce75cc5ff84732d1a8b436981da09/guidelines-auslandsportal-data.pdf';
const EMBASSY_LEGAL = 'https://pakistan.diplo.de/pk-en/service/legal-uess-1680522';
const EMBASSY_GENERAL = 'https://pakistan.diplo.de/pk-en/service/2208622-2208622';
const KARACHI = 'https://pakistan.diplo.de/pk-en/vertretungen/generalkonsulat1';

const A1_TABLE: [string, string, string][] = [
  ['Student (s. 16b)', 'Yes, unless a general exception applies', 's. 30(1), sentence 1, no. 2'],
  ['Researcher (s. 18d) or mobile researcher (s. 18f)', 'No', 's. 30(1), sentence 3, no. 5'],
  ['Skilled worker with vocational training (s. 18a) or a degree (s. 18b)', 'No', 's. 30(1), sentence 3, no. 5'],
  ['EU Blue Card holder', 'No', 's. 30(1), sentence 3, no. 5'],
  ['Self-employed (s. 21)', 'No', 's. 30(1), sentence 3, no. 5'],
  ['Settlement permit holder', 'Yes, unless it was issued under s. 18c(3), or just before it they held an EU Blue Card or a permit under s. 18a, 18b, 18d, one of the listed s. 19c permits, or s. 21', 's. 30(1), sentence 3, nos. 5 and 7'],
  ['German citizen', 'Yes, unless a general exception applies', 's. 28(1), sentence 5'],
];

const STEPS: [string, string][] = [
  ['Fill in the Videx form', 'one for each applicant, completed on a computer and signed.'],
  ['Upload your documents', 'on the Consular Services Portal. The Embassy reviews them.'],
  ['Book the appointment', 'if all is in order, the Embassy sends you a booking link.'],
  ['Attend in person', 'show your originals, pay the fee and give your biometrics.'],
];

export default function GermanySpouseVisaPakistan() {
  return (
    <>
      <p>
        <strong>
          Germany’s Residence Act lets you join a spouse who studies, researches or works there, on a
          national (D) visa for family reunion.
        </strong>{' '}
        As of 23 November 2026, you usually need A1 German, but spouses of researchers, Blue Card holders
        and skilled workers are exempt. From Pakistan, you apply online to the Embassy in Islamabad, or in
        Karachi if you live in Sindh or Balochistan.
      </p>

      <h2>What does German law require?</h2>
      <p>
        Sections 27 to 30 of the Residence Act (Aufenthaltsgesetz) set the rules. We read them on
        gesetze-im-internet.de on 23 November 2026, in the version last amended on 22 October 2026. The
        main conditions are:
      </p>
      <ul>
        <li>
          both of you are at least 18 (
          <a href={S30} rel="noopener noreferrer" target="_blank" className={a}>
            s. 30
          </a>
          );
        </li>
        <li>
          your spouse holds a residence title, such as a residence permit, EU Blue Card or settlement permit
          (
          <a href={S29} rel="noopener noreferrer" target="_blank" className={a}>
            s. 29
          </a>
          );
        </li>
        <li>there is enough living space, unless an exemption applies (s. 29);</li>
        <li>
          your living costs are covered, as a rule, without public funds (
          <a href={S5} rel="noopener noreferrer" target="_blank" className={a}>
            s. 5
          </a>
          );
        </li>
        <li>you can communicate in basic German, unless an exception applies (s. 30).</li>
      </ul>
      <p>
        Reunion is refused if the marriage was made only to get you into Germany. It is also refused if
        facts suggest either spouse was forced to marry (
        <a href={S27} rel="noopener noreferrer" target="_blank" className={a}>
          s. 27(1a)
        </a>
        ). The national visa must be issued before you travel (
        <a href={S6} rel="noopener noreferrer" target="_blank" className={a}>
          s. 6(3)
        </a>
        ).
      </p>
      <p>
        This is a residence route, not a Schengen visit visa. Our{' '}
        <Link href="/europe" className={a}>
          Europe visas guide
        </Link>{' '}
        covers visit visas and the European routes that have closed.
      </p>

      <h2>Do you need A1 German?</h2>
      <p>
        Section 30 asks that you can communicate in German at least in a simple way.{' '}
        <a href={S2} rel="noopener noreferrer" target="_blank" className={a}>
          Section 2(9)
        </a>{' '}
        sets basic German at level A1 of the Common European Framework of Reference for Languages.
      </p>
      <p>You do not need it if your spouse holds one of these (s. 30(1), sentence 3, no. 5):</p>
      <ul>
        <li>an EU Blue Card, ICT Card or Mobile ICT Card;</li>
        <li>a skilled-worker permit (s. 18a or 18b), or a settlement permit for highly qualified graduates (s. 18c(3));</li>
        <li>a research permit (s. 18d) or a mobile researcher’s permit (s. 18f);</li>
        <li>a s. 19c(1) permit as an executive, manager, company specialist, scientist, guest scientist, teacher, or engineer or technician in a guest scientist’s team;</li>
        <li>a permit under s. 19c(2) (practical professional knowledge) or s. 19c(4), sentence 1 (civil servants);</li>
        <li>a self-employment permit (s. 21).</li>
      </ul>
      <p>
        Other exceptions apply whatever your spouse’s permit. They cover illness or disability (no. 2), and
        cases where learning German before entry is impossible or unreasonable (no. 6).
      </p>
      <p>
        You are also exempt if your integration need is clearly low, or you would have no right to an
        integration course (no. 3). Further exceptions cover spouses of some refugees and of some visa-free
        nationals (nos. 1 and 4).
      </p>
      <p>
        The Embassy’s family reunion page repeats the permit exemptions. It accepts A1 certificates from the
        Goethe-Institut, ÖSD, telc or TestDaF, and sets a maximum age for the certificate. Its printable
        leaflet is stricter and names only the Goethe-Institut for certificates issued in Pakistan, so ask
        the Embassy which it will accept before you book a test.
      </p>
      <div role="region" aria-label="Whether a spouse joining someone in Germany needs A1 German, by the residence title of the person in Germany, under the Residence Act as read on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Whether a spouse joining someone in Germany needs A1 German, by the residence title of the person in
            Germany, under the Residence Act as read on 23 November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Who is in Germany</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">A1 German needed?</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Source (Residence Act)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {A1_TABLE.map(([who, need, src]) => (
              <tr key={who}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{who}</th>
                <td className="px-3 py-3 sm:px-4">{need}</td>
                <td className="px-3 py-3 sm:px-4">{src}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        If your spouse is doing a PhD, find out which section their permit was issued under. A study permit
        and a research permit are treated differently. Spouses of German citizens fall under{' '}
        <a href={S28} rel="noopener noreferrer" target="_blank" className={a}>
          section 28
        </a>
        , which applies the same A1 rule but, as a rule, does not require your living costs to be covered
        (s. 28(1), sentence 3).
      </p>

      <h2>What must your spouse in Germany show?</h2>
      <p>
        If your spouse is a student, a skilled worker under ss. 18a or 18b, or self-employed, and has held a
        residence permit for less than two years, the marriage must as a rule have existed when their permit
        was issued, and their stay must be expected to last over a year (s. 30(1), no. 3(d) and (e)).
      </p>
      <p>
        If you married later, the authorities may waive those two conditions, but need not (s. 30(2)).
        Researchers and EU Blue Card holders do not face them (s. 30(1), no. 3(c) and (g)).
      </p>
      <p>
        The housing test asks for no more than would be enough in a publicly funded social rental flat. The
        home must still meet the occupancy and condition rules that apply to Germans, and children under 2
        are not counted (s. 2(4)). Spouses of the exempt permit holders listed above need not show housing
        (s. 29(5)).
      </p>
      <p>
        Living costs, including adequate health insurance, must as a rule be covered without public funds
        (ss. 5(1) and 2(3)).
        The Act sets no fixed sum for spouses, and family members’ contributions to household income count.
        Your permit can run no longer than your spouse’s (s. 27(4)).
      </p>

      <h2>How do you apply from Pakistan?</h2>
      <p>
        The{' '}
        <a href={EMBASSY_FZ} rel="noopener noreferrer" target="_blank" className={a}>
          Embassy’s family reunion page
        </a>{' '}
        is dated 25 August 2026. It says that since 15 January 2026, Islamabad has taken these applications
        only through the Consular Services Portal. Its appointment waiting list has been discontinued.
      </p>
      <ol>
        {STEPS.map(([t, d]) => (
          <li key={t}>
            <strong>{t}</strong>: {d}
          </li>
        ))}
      </ol>
      <p>
        The Embassy’s{' '}
        <a href={PORTAL_GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          portal guide
        </a>{' '}
        says incomplete uploads are deleted, and you go to the back of the waiting list. Upload only once
        you have every document, including any A1 certificate you need.
      </p>
      <p>
        If you live in Sindh or Balochistan, book at the{' '}
        <a href={KARACHI} rel="noopener noreferrer" target="_blank" className={a}>
          Consulate General in Karachi
        </a>{' '}
        instead. Bring your original documents and passports; the passport you will travel on stays there
        while your visa is processed.
      </p>
      <p>
        The national visa fee is €75, set in{' '}
        <a href={V46} rel="noopener noreferrer" target="_blank" className={a}>
          section 46(2) of the Residence Ordinance
        </a>
        . Spouses of German citizens are exempt, as are spouses covered by a scholarship from public funds (
        <a href={V52} rel="noopener noreferrer" target="_blank" className={a}>
          s. 52
        </a>
        ). Both missions take visa fees in rupees, in cash at the counter.
      </p>

      <h2>Which documents does the Embassy ask for?</h2>
      <p>On 23 November 2026, the Embassy’s list included:</p>
      <ul>
        <li>the Videx form, and biometric photos of you and your spouse;</li>
        <li>your spouse’s German registration certificate (Meldebescheinigung) and a copy of their residence permit;</li>
        <li>copies of both spouses’ passports, old and current, and of your CNIC;</li>
        <li>original NADRA computerised birth certificates for you both;</li>
        <li>your original Nikah Nama, in Urdu with an English translation;</li>
        <li>your original NADRA computerised marriage registration certificate;</li>
        <li>proof that any earlier marriage ended, travel insurance, and an A1 certificate if needed;</li>
        <li>extra proof of the relationship, such as photos, dated chat history and remittance records.</li>
      </ul>
      <p>
        The Embassy’s{' '}
        <a href={EMBASSY_LEGAL} rel="noopener noreferrer" target="_blank" className={a}>
          legal page
        </a>{' '}
        is dated 14 April 2026. It says the Embassy cannot attest or legalise documents issued by Pakistani
        authorities, such as birth or marriage registration certificates.
      </p>
      <p>
        After you apply, the mission may ask for more documents, another set of the application and a fee
        to verify your documents. Sign your passport, or add your thumb impression, before you apply: the{' '}
        <a href={EMBASSY_GENERAL} rel="noopener noreferrer" target="_blank" className={a}>
          Embassy
        </a>{' '}
        cannot print a visa in an unsigned passport.
      </p>

      <h2>Can you work once you arrive?</h2>
      <p>
        Yes.{' '}
        <a href={S4A} rel="noopener noreferrer" target="_blank" className={a}>
          Section 4a(1)
        </a>{' '}
        lets anyone with a residence title work, unless a law forbids or restricts it. Sections 27 to 30 set
        no such limit for spouses.
      </p>
      <p>
        Every residence title must show whether work is allowed, and any limits (s. 4a(3)). Check that entry
        on your card when you collect it in Germany.
      </p>

      <h2>Where can you read more?</h2>
      <p>
        If you only want to visit, a Schengen visa is a separate application; see{' '}
        <Link href="/blog/schengen-visa-refusals-pakistan-2025" className={a}>
          Schengen visa refusals in Pakistan
        </Link>
        . Austria has its own A1 rule for families, set out in{' '}
        <Link href="/blog/austria-red-white-red-card" className={a}>
          Austria’s Red-White-Red Card from Pakistan
        </Link>
        . For other routes into Europe, and those that have closed, see our{' '}
        <Link href="/europe" className={a}>
          Europe visas guide
        </Link>
        .
      </p>
    </>
  );
}
