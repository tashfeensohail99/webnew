import Link from 'next/link';

/**
 * Published 23 November 2026. Written from IRCC's own pages as they stood on
 * 23 November 2026: the spouse application package page and its
 * country-specific requirements for Pakistan (page modified 6 October 2026),
 * the complete guide IMM 5289 (modified 23 April 2026) and the Document
 * Checklist IMM 5533 (edition 09-2022). canada.ca refuses scripted downloads, so
 * the exact wording of IMM 5289 and IMM 5533 was read from Wayback Machine copies
 * of 12 and 15 November 2026 and matched against the live pages.
 *
 * Pakistani side: Muslim Family Laws Ordinance, 1961, s. 5 (Pakistan Code text
 * updated to 10 March 2022); the Punjab Local Government and Community
 * Development Department's FAQ; NADRA's registration-ecosystem page and
 * Registration Policy RP-6.0.2 (18 September 2026), both read from Wayback copies
 * because nadra.gov.pk blocks automated reading. Divorce Act s. 22(1) for the
 * one-year rule. No fees or processing times.
 *
 * Our own suggestion, labelled as such in the text: upload the NADRA certificate
 * alongside the Nikah Nama.
 */
const a = 'font-semibold';

const IRCC_PACKAGE = 'https://ircc.canada.ca/english/information/applications/spouse.asp';
const IRCC_GUIDE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5289-sponsor-your-spouse-common-law-partner-conjugal-partner-dependent-child-complete-guide.html';
const IRCC_CHECKLIST =
  'https://www.canada.ca/content/dam/ircc/migration/ircc/english/pdf/kits/forms/imm5533e.pdf';
const MFLO = 'https://pakistancode.gov.pk/pdffiles/administratoreecaf3b490e2d43d2e3b50c0c068b5d7.pdf';
const PUNJAB_LG = 'https://lgcd.punjab.gov.pk/faq';
const NADRA_CRMS = 'https://www.nadra.gov.pk/ecosystem';
const NADRA_POLICY = 'https://www.nadra.gov.pk/assests/downloadsPdf/registration-policy-6-0-2-english.pdf';
const DIVORCE_ACT = 'https://laws-lois.justice.gc.ca/eng/acts/D-3.4/page-7.html';

const DOCS: [string, string, string, string][] = [
  [
    'Nikah Nama with the Nikah registry seal',
    'Nikah Registrar licensed by the union council',
    'Required: a copy, with the seal showing the marriage was registered',
    'IRCC Pakistan instructions',
  ],
  [
    'NADRA marriage certificate (computerised Marriage Registration Certificate)',
    'Union council or municipal committee, using CRMS, the system NADRA provides',
    'Optional: you can include it, but it is not enough on its own',
    'IRCC Pakistan instructions',
  ],
  [
    'Marriage certificate for a non-Muslim marriage',
    'The government office that registers marriages',
    'Should be provided',
    'IRCC Pakistan instructions',
  ],
  ['Affidavit of marriage', 'Not applicable', 'Not accepted as proof of marriage', 'IRCC Pakistan instructions'],
  [
    'English or French translation, translator’s affidavit and certified copy',
    'A translator; outside Canada, a notary public for the affidavit and copy',
    'Needed with any document not in English or French',
    'IRCC guide IMM 5289',
  ],
  [
    'MOFA attestation or apostille',
    'Ministry of Foreign Affairs, Pakistan',
    'Not mentioned',
    'IRCC Pakistan instructions, IMM 5289, IMM 5533',
  ],
];

export default function NadraMarriageCertificateCanadaSpouse() {
  return (
    <>
      <p>
        <strong>
          For a marriage in Pakistan, IRCC asks for the Nikah Nama and treats the NADRA marriage certificate
          as an optional extra.
        </strong>{' '}
        On 23 November 2026, IRCC’s Pakistan instructions said you must submit a copy of the Nikah Nama
        with the Nikah registry seal. You can add the NADRA certificate too, but IRCC says it “is not
        enough on its own to show the marriage is valid”.
      </p>

      <h2>What does IRCC ask for in every spouse application?</h2>
      <p>
        IRCC’s{' '}
        <a href={IRCC_CHECKLIST} rel="noopener noreferrer" target="_blank" className={a}>
          Document Checklist – Spouse (Including Dependent Children) (IMM 5533)
        </a>
        , edition 09-2022, is the list you upload with the application. It asks for your marriage
        certificate, or other proof the marriage was legally registered where it took place.
      </p>
      <p>
        IRCC’s{' '}
        <a href={IRCC_GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          Complete Guide (IMM 5289)
        </a>{' '}
        says the documents “must show that the marriage was legally registered with the government where
        it took place.” A record of solemnisation obtained in Canada, or a marriage licence, is not accepted.
      </p>
      <p>
        Both documents then send you to IRCC’s country-specific requirements. The guide says to check them
        for the country that issued each document, not only the country where your spouse lives. A couple
        married in Pakistan and now living in the Gulf still follow the Pakistan instructions for the Nikah
        Nama.
      </p>

      <h2>What do IRCC’s instructions for Pakistan say?</h2>
      <p>
        On IRCC’s{' '}
        <a href={IRCC_PACKAGE} rel="noopener noreferrer" target="_blank" className={a}>
          spouse application page
        </a>{' '}
        (modified 6 October 2026), choosing Pakistan opens a section headed “Identity and civil status
        documents issued by Pakistan”. On 23 November 2026 it said:
      </p>
      <ul>
        <li>
          Documents must show the applicant’s name. They must be endorsed by the government office that
          issues them in the district where the event took place.
        </li>
        <li>For a marriage in Pakistan, you must submit a copy of the “Nikkah Nama”, as IRCC spells it.</li>
        <li>
          The Nikah Nama must include the “Nikkah registry seal”. This shows the union council or proper
          government office registered the marriage.
        </li>
        <li>
          You can include the marriage certificate issued by NADRA, but it is not enough on its own to
          show the marriage is valid.
        </li>
        <li>Non-Muslims should provide certificates from the government office that registers marriages.</li>
        <li>IRCC does not accept affidavits to prove marriage, divorce, death or custody.</li>
      </ul>
      <p>
        The section ends with a warning. Marriage or divorce certificates that do not comply with Pakistan’s
        Muslim Family Laws Ordinance, 1961 can delay the application or lead to refusal.
      </p>
      <p>
        If you married by local rites and customs, the same section asks for photos with relatives and
        friends. They should cover the Nikah signing, the Rukhsati or reception, and the two of you on
        other occasions. Label each photo in English or French with the names, the date and the occasion.
      </p>

      <h2>What is the NADRA marriage certificate, and who issues it?</h2>
      <p>
        <a href={MFLO} rel="noopener noreferrer" target="_blank" className={a}>
          Section 5 of the Muslim Family Laws Ordinance, 1961
        </a>{' '}
        says every marriage solemnised under Muslim law must be registered. The union council licenses
        Nikah Registrars to do it. Anyone may obtain a copy of an entry in the union council’s records.
      </p>
      <p>
        The certificate comes afterwards. Punjab’s{' '}
        <a href={PUNJAB_LG} rel="noopener noreferrer" target="_blank" className={a}>
          Local Government and Community Development Department
        </a>{' '}
        says the Nikah Khuwan has the Nikah Nama registered with the Nikah Registrar for the area. The union
        council or municipal committee then issues a computerised Marriage Registration Certificate.
      </p>
      <p>
        In Punjab, the application needs a copy of the registered Nikah Nama, both spouses’ identity cards
        and copies of their parents’ CNICs. So the certificate is a later record, issued on the strength of
        the registered Nikah Nama.
      </p>
      <p>
        NADRA’s part is the technology. Its{' '}
        <a href={NADRA_CRMS} rel="noopener noreferrer" target="_blank" className={a}>
          registration-ecosystem page
        </a>{' '}
        says union councils use the provincial Civil Registration and Management System (CRMS) to issue
        marriage and divorce certificates. NADRA provides the technology under agreements with provincial and
        local governments.
      </p>
      <p>
        NADRA’s own{' '}
        <a href={NADRA_POLICY} rel="noopener noreferrer" target="_blank" className={a}>
          Registration Policy
        </a>{' '}
        (18 September 2026) points the same way. To change marital status on a CNIC, it asks for the
        marriage certificate from the union council, municipal committee or cantonment.
      </p>

      <h2>Which documents should you upload?</h2>
      <p>
        The table sets out each document as IRCC described it on 23 November 2026. Uploading the NADRA
        certificate alongside the Nikah Nama is our suggestion, not an IRCC requirement.
      </p>
      <div role="region" aria-label="Pakistani marriage documents for a Canadian spouse sponsorship, as IRCC described them on 23 November 2026" tabIndex={0} className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Pakistani marriage documents for a Canadian spouse sponsorship, as IRCC described them on 23
            November 2026
          </caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Document</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Who issues it</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What IRCC says</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {DOCS.map(([doc, issuer, says, source]) => (
              <tr key={doc}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{doc}</th>
                <td className="hidden px-4 py-3 sm:table-cell">{issuer}</td>
                <td className="px-3 py-3 sm:px-4">{says}</td>
                <td className="hidden px-4 py-3 md:table-cell">{source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        A valid certificate proves the marriage is legal, not that it is genuine. Officers assess that
        separately, and our{' '}
        <Link href="/family-sponsorship/spouse-partner" className={a}>
          spouse and partner sponsorship guide
        </Link>{' '}
        explains what they look for.
      </p>

      <h2>Does an Urdu Nikah Nama need translating?</h2>
      <p>Yes. With any document not in English or French, the complete guide asks for three things:</p>
      <ul>
        <li>a certified copy of the original;</li>
        <li>the English or French translation;</li>
        <li>an affidavit from the translator, unless they are a Canadian certified translator.</li>
      </ul>
      <p>
        Anyone fluent in both languages may translate. Outside Canada, the affidavit is sworn before a
        notary public. The applicant and their family may not translate, and IRCC’s list includes the
        spouse and first cousins, so the sponsor cannot do it either.
      </p>
      <p>
        For a certified copy, an authorised person compares the copy with the original. On the copy they
        print: “I certify that this is a true copy of the original document”. They add the document’s name,
        the date, and their name, title and signature.
      </p>
      <p>
        Outside Canada, IRCC names a notary public for this. Other copies need no certification. IRCC now
        accepts copies instead of originals, but says to keep the originals in case it asks for them.
      </p>

      <h2>Does IRCC ask for MOFA attestation?</h2>
      <p>
        Not on the pages that govern this application. On 23 November 2026, IRCC’s Pakistan instructions,
        the complete guide and the IMM 5533 checklist did not mention attestation, legalisation or an
        apostille. What they ask for is registration, shown by the Nikah registry seal.
      </p>
      <p>
        IRCC can still ask for more documents during processing. If it, or another body, asks for
        attestation, our post on{' '}
        <Link href="/blog/mofa-online-attestation" className={a}>
          MOFA online attestation
        </Link>{' '}
        explains how it works.
      </p>

      <h2>What if either of you was married before?</h2>
      <p>
        IMM 5533 asks both of you to show any earlier marriage ended, with a final divorce, annulment or
        death certificate. For a divorce in Pakistan, IRCC’s Pakistan instructions add:
      </p>
      <ul>
        <li>The divorce certificate must come from the proper union council or government office.</li>
        <li>You must include the Certificate of Talaq issued by the union council.</li>
        <li>The NADRA divorce certificate can be included, but is not enough on its own.</li>
        <li>For Khula, also include the decree of Khula issued by the Family Court.</li>
      </ul>
      <p>
        If the sponsor divorced in Pakistan while living in Canada, IRCC asks for proof of a link to Pakistan.
        Either spouse must have lived there for at least one year before the divorce. Otherwise, either must
        have had a substantial connection, such as frequent visits, property or a business there.
      </p>
      <p>
        The one-year test is also in{' '}
        <a href={DIVORCE_ACT} rel="noopener noreferrer" target="_blank" className={a}>
          section 22(1) of Canada’s Divorce Act
        </a>
        . It recognises a foreign divorce if either spouse was habitually resident in that country for at
        least one year before proceedings began. Undisclosed earlier marriages carry their own risks,
        covered in our{' '}
        <Link href="/family-sponsorship/spouse-partner" className={a}>
          spouse and partner sponsorship guide
        </Link>
        .
      </p>
    </>
  );
}
