import Link from 'next/link';

/**
 * Published 23 November 2026, approved by the owner on 23 November 2026. Every
 * figure is set in law or in the ministries' official operating instructions:
 * the DPCM of 2 October 2025 on 2026–2028 entry flows (GU Serie Generale n. 240
 * of 15 October 2025), arts 5–8, read in the Gazzetta Ufficiale issue PDF; and
 * the joint circular no. 7185 of 1 October 2026 (Interior, Labour, Agriculture,
 * Tourism), read as the PDF linked from the Ministry of Labour's page of the same
 * day. Who applies, the confirmation and contract deadlines, the six-month
 * validity and the fraud rules are from art. 22 of Legislative Decree 286/1998
 * on Normattiva (text in force from 4 June 2026). The Pakistan risk rule is art. 3
 * of Decree-Law 145/2024 on Normattiva (text in force from 11 December 2024).
 *
 * Embassy of Italy in Islamabad pages read on 23 November 2026: the work-visa
 * checklist (updated 4 June 2026), "Dove chiedere un visto" (updated 16 June
 * 2026, which still lists Multan and Faisalabad), and the notices of 25 July,
 * 4 September and 7 September 2026. No fee or processing time is printed. The
 * Interior Ministry's own news page returned 403 and was not used.
 *
 * Our own reading, not a source's words: "do not let it lapse" on the six-month
 * validity, and the closing reading that anyone selling a "quota" is selling what
 * only an employer in Italy can apply for. Re-check when the 2028 circular
 * appears, and whether the Foreign Ministry decree under art. 3 of DL 145/2024
 * has been published.
 */
const a = 'font-semibold';

const MINLAVORO = 'https://www.lavoro.gov.it/priorita/pagine/decreto-flussi-2027-pubblicata-la-circolare-con-le-indicazioni-operative';
const CIRCOLARE = 'https://www.lavoro.gov.it/documenti-e-norme/normativa/CC-7185-del-01102026';
const DPCM = 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg';
const ART22 = 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22';
const DL145 = 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-10-11;145~art3';
const ALI = 'https://portaleservizi.dlci.interno.it/AliSportello/ali/home.htm';
const CHECKLIST = 'https://ambislamabad.esteri.it/wp-content/uploads/2026/06/MI06_VISTO-PER-LAVORO-SUBORDINATO_ITA_Islamabad.rev_.pdf';
const WHERE = 'https://ambislamabad.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/dove-chiedere-un-visto/';
const BOOKING = 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/07/want-to-apply-for-an-italian-visa-heres-how-to-book-an-appointment/';
const CENTRES = 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/09/avviso-pubblico-8/';
const NOTICE = 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/09/avviso-pubblico-9/';

const CLICK_DAYS: [string, string, string][] = [
  ['12 January 2027', 'Seasonal work in agriculture (form C-Stag agricolo)', '89,000 seasonal places, shared with tourism; 47,000 go first to requests filed through named farmers’ organisations'],
  ['9 February 2027', 'Seasonal work in tourism (form C-Stag turistico)', 'The same 89,000; 14,000 go first to requests filed through national employers’ organisations'],
  ['16 February 2027', 'Non-seasonal work in the sectors the DPCM lists (form B2020)', 'Part of 76,200 non-seasonal places; 25,000 are reserved for listed countries, Pakistan among them'],
  ['18 February 2027', 'Non-seasonal home care, “assistenza familiare” (form A-bis)', '14,000, counted within the 76,200'],
  ['No separate day in the circular', 'Self-employment', '650'],
];

const DOCUMENTS: string[] = [
  'the visa application form and a recent photo;',
  'proof that you live in the embassy’s consular district: a residence certificate and a copy of your CNIC;',
  'your passport, meeting the checklist’s validity rule, and a flight booking;',
  'the nulla osta and the contract document, both issued by the immigration desk in Italy;',
  'a copy of the employer’s ID, plus a Chamber of Commerce extract for a company, or the latest tax certificate or return and a family certificate for an individual;',
  'a police character certificate from the Pakistani authorities, with an apostille;',
  'health insurance, if the contract does not cover it and your flight stops in the Schengen area.',
];

export default function ItalyClickDays2027Pakistan() {
  return (
    <>
      <p>
        <strong>
          Italy’s 2027 click days are 12 January and 9, 16 and 18 February, and for a job only the
          employer in Italy can apply.
        </strong>{' '}
        The employer asks for a work authorisation, the nulla osta, for a named worker, who then applies
        for an Italian visa. As of 23 November 2026, Italy’s quota decree allows 165,850
        work entries in 2027, and Pakistan is among the countries with reserved places.
      </p>

      <h2>What are the 2027 click days?</h2>
      <p>
        The dates are set in law by the{' '}
        <a href={DPCM} rel="noopener noreferrer" target="_blank" className={a}>
          Decree of the President of the Council of Ministers (DPCM) of 2 October 2025
        </a>
        . It covers legal entry flows for 2026 to 2028 and was published in the Gazzetta Ufficiale on 15
        October 2025. The{' '}
        <a href={CIRCOLARE} rel="noopener noreferrer" target="_blank" className={a}>
          joint circular no. 7185 of 1 October 2026
        </a>{' '}
        confirms the 2027 dates and gives the forms.
      </p>
      <div role="region" aria-label="Italy’s 2027 click days, the work each covers and its places, from the DPCM of 2 October 2025 and the joint circular of 1 October 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Italy’s 2027 click days, the work each covers and its places, from the DPCM of 2 October 2025 and the joint circular of 1 October 2026</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Click day, from 9:00 Italian time</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Work it covers</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">2027 places</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CLICK_DAYS.map(([day, work, places]) => (
              <tr key={day}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium text-ink-900 sm:px-4">{day}</th>
                <td className="px-3 py-3 sm:px-4">{work}</td>
                <td className="px-3 py-3 sm:px-4">{places}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Each window stays open until 31 December 2027, but only while places remain. Requests still
        without a place six months after that date lapse, and so does a nulla osta not followed by a
        visa. Of the 650 self-employment places, 500 are for named groups such as investors, company
        officers and founders of innovative start-ups.
      </p>

      <h2>Who applies on a click day: you or the employer?</h2>
      <p>
        The employer. Under{' '}
        <a href={ART22} rel="noopener noreferrer" target="_blank" className={a}>
          article 22 of Italy’s immigration law
        </a>{' '}
        (Legislative Decree 286/1998), an employer in Italy hiring someone who lives abroad sends the
        request online. It goes to the immigration desk, the Sportello unico per l’immigrazione, in
        the employer’s province.
      </p>
      <p>
        The request names the worker. It must include papers on the worker’s housing and a proposed
        contract, with the employer’s promise to pay the return journey. Before filing, the employer must
        check with the local job centre that no worker already in Italy is available.
      </p>
      <p>
        Employers can file directly or through an employers’ organisation, an authorised professional
        such as a labour consultant, or a registered Italian staffing agency. The law gives no filing role
        to the worker, or to anyone acting for the worker. A nulla osta therefore belongs to one employer’s
        request for one named person.
      </p>

      <h2>How many places are there, and is Pakistan on the list?</h2>
      <p>
        For 2027 the DPCM allows 165,850 work entries: 76,200 for non-seasonal jobs, 89,000 for seasonal
        jobs and 650 for self-employment. The 76,200 include 14,000 places for home care. These are
        ceilings, not promises of a job.
      </p>
      <p>
        Within the non-seasonal places, article 6(2)(a) reserves 25,000, shared among citizens of a named
        list of countries that cooperate with Italy on migration. Pakistan is on that list, with Bangladesh, India,
        Sri Lanka and others. Another 26,000 are for countries whose agreements come into force during 2026
        to 2028.
      </p>
      <p>
        Under article 7, seasonal places are open only to citizens of the countries on those two lists.
        Because Pakistan is on the first, Pakistani workers can be hired for seasonal jobs as well. The
        joint circular adds Kenya to the countries of origin from 2027.
      </p>

      <h2>What is open now, before the click days?</h2>
      <p>
        Pre-filling. The circular opened it on the Interior Ministry’s{' '}
        <a href={ALI} rel="noopener noreferrer" target="_blank" className={a}>
          ALI portal
        </a>{' '}
        from 9:00 on 23 October 2026 to 20:00 on 7 December 2026, Italian time. From 9 to 13 December 2026
        the portal reopens only to finish and save forms already started; no new forms can be added.
      </p>
      <p>
        Pre-filling is also the employer’s job. A completed form is only marked ready to send; it goes in
        from the click day, while places last. The{' '}
        <a href={MINLAVORO} rel="noopener noreferrer" target="_blank" className={a}>
          Ministry of Labour’s notice of 1 October 2026
        </a>{' '}
        sets out the same dates.
      </p>

      <h2>What do you do at the Italian Embassy in Islamabad?</h2>
      <p>
        Once the nulla osta is issued, you apply for a long-stay (type D) work visa. A nulla osta is valid
        for no more than six months from issue, so do not let it lapse. This is a national visa, separate
        from the short-stay Schengen visa covered in{' '}
        <Link href="/blog/schengen-visa-refusals-pakistan-2025" className={a}>
          Schengen visa refusals in Pakistan
        </Link>
        .
      </p>
      <p>
        The embassy’s{' '}
        <a href={CHECKLIST} rel="noopener noreferrer" target="_blank" className={a}>
          work-visa checklist
        </a>
        , updated 4 June 2026, asks for:
      </p>
      <ul>
        {DOCUMENTS.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p>
        Pakistani documents need an apostille, and papers must be in English or translated into Italian.
        The embassy takes applications only from people who live permanently in its district. Its{' '}
        <a href={WHERE} rel="noopener noreferrer" target="_blank" className={a}>
          where-to-apply page
        </a>{' '}
        sends residents of the Consulate General in Karachi’s district, with centres in Karachi and Quetta,
        to the consulate.
      </p>
      <p>
        You book through the embassy’s outsourced visa centres. Its{' '}
        <a href={BOOKING} rel="noopener noreferrer" target="_blank" className={a}>
          notice of 25 July 2026
        </a>{' '}
        says a waiting list is in place for work visas because of high demand. Since 6 September 2026,
        booking and the waiting list are only at the Islamabad and Lahore centres, says its{' '}
        <a href={CENTRES} rel="noopener noreferrer" target="_blank" className={a}>
          notice of 4 September
        </a>
        .
      </p>
      <p>
        After the visa checks, the employer has 15 days to confirm the request to the immigration desk.
        Without that confirmation, the request counts as refused and the nulla osta is revoked; with it,
        the consulate issues the visa. Within 15 days of your arrival, you and the employer sign the
        contract of residence, which the employer sends on for your residence permit.
      </p>

      <h2>What warnings have Italian authorities given?</h2>
      <p>
        The embassy says it knows of intermediaries and agencies that illegally offer visa appointments for
        money. Its words are plain: “Visa appointments should never be purchased.” It asks you to report any
        such offer to the embassy straight away.
      </p>
      <p>
        Pakistan has been singled out for checks before.{' '}
        <a href={DL145} rel="noopener noreferrer" target="_blank" className={a}>
          Article 3 of Decree-Law 145 of 11 October 2024
        </a>{' '}
        covers countries with a high risk of applications using forged documents. Until 31 December 2025,
        pending a Foreign Ministry decree naming them, it applied to Bangladesh, Pakistan and Sri Lanka.
      </p>
      <p>
        For those workers, a nulla osta could be issued only after the National Labour Inspectorate had
        checked the requirements. Those already issued, without a visa yet, were suspended until the
        immigration desk confirmed the checks. The embassy’s{' '}
        <a href={NOTICE} rel="noopener noreferrer" target="_blank" className={a}>
          notice of 7 September 2026
        </a>{' '}
        says applicants archived over a suspension can book again once the desk reactivates their nulla
        osta.
      </p>
      <p>
        Article 22 adds that a nulla osta is refused, or revoked, if documents were obtained by fraud or
        forged. Anyone selling you a “quota” or a click-day slot is selling something only an employer in
        Italy can apply for. Other European offers that are no longer real are listed in our{' '}
        <Link href="/europe" className={a}>
          Europe and Schengen guide
        </Link>
        .
      </p>
      <p>
        Austria runs a points-based work permit; see{' '}
        <Link href="/blog/austria-red-white-red-card" className={a}>
          Austria’s Red-White-Red Card from Pakistan
        </Link>
        . For visits, refusals and the rest of Europe, read{' '}
        <Link href="/europe" className={a}>
          Europe and Schengen from Pakistan
        </Link>
        .
      </p>
    </>
  );
}
