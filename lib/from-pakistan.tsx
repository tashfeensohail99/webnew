/**
 * Official, Pakistan-specific facts shared by several Canada guides (GEO plan
 * G05). Each is recorded in lib/facts.ts under the same name (pk*), read from the
 * official page on the date below. No fees, processing times or fund amounts.
 * Re-check with the monthly accuracy run (R18).
 */
export const PAKISTAN_CHECKED = '17 November 2026';

export type PakistanFact = {
  key: string;
  title: string;
  text: string;
  sources: { label: string; href: string }[];
  more?: { label: string; href: string };
};

const IRCC_VAC = 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html';

export const PK: Record<'vac' | 'translations' | 'medical' | 'police' | 'visaOffice' | 'representatives', PakistanFact> = {
  vac: {
    key: 'vac',
    title: 'Visa application centres: Islamabad, Lahore and Karachi',
    text: 'You give biometrics, and hand in your passport when IRCC asks for it, at one of these three centres. They are private companies under contract with Canada, run in Pakistan by VFS Global. They collect documents but play no part in the decision, which an IRCC officer makes.',
    sources: [
      { label: 'IRCC, find a visa application centre', href: IRCC_VAC },
      { label: 'VFS Global, Canada in Pakistan', href: 'https://visa.vfsglobal.com/pak/en/can/about-vfs' },
    ],
    more: { label: 'Biometrics from Pakistan', href: '/canada-immigration-from-pakistan/biometrics' },
  },
  translations: {
    key: 'translations',
    title: 'Documents in Urdu need a certified translation',
    text: 'Any document not in English or French, stamps and seals included, needs an English or French translation, the translator’s affidavit and a certified copy of the original. You and your relatives cannot translate your own documents, and outside Canada the translator swears the affidavit before a notary public.',
    sources: [
      { label: 'IRCC Help Centre', href: 'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=018&top=4' },
      { label: 'IRCC guide 5256', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5256-applying-visitor-visa-temporary-resident-visa.html' },
    ],
  },
  medical: {
    key: 'medical',
    title: 'Medical exams: an IRCC panel physician only',
    text: 'If you need an immigration medical exam, only a panel physician approved by IRCC can do it, not your own doctor. On 17 November 2026, IRCC’s search listed panel physicians in Pakistan in Islamabad, Karachi and Lahore.',
    sources: [
      { label: 'IRCC, medical exams', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html' },
      { label: 'IRCC panel physician search', href: 'https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home' },
    ],
    more: { label: 'Medical exams from Pakistan', href: '/canada-immigration-from-pakistan/medical-exam' },
  },
  police: {
    key: 'police',
    title: 'Police certificates come from Pakistani police, not Canada',
    text: 'Pakistan’s certificate is the Police Character Certificate, issued by your province’s police service. If you live abroad, you apply through a Pakistani embassy or consulate. The Canadian High Commission cannot issue one or help you get it.',
    sources: [
      { label: 'IRCC, police certificates: Pakistan', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html' },
    ],
    more: { label: 'Police certificates from Pakistan', href: '/canada-immigration-from-pakistan/police-certificate' },
  },
  visaOffice: {
    key: 'visaOffice',
    title: 'Your visa office is Islamabad',
    text: 'When a checklist or form asks for your visa office, IRCC lists Islamabad for Pakistan. IRCC asks you not to contact the office unless it contacts you first.',
    sources: [
      { label: 'IRCC, international visa offices', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices.html' },
    ],
  },
  representatives: {
    key: 'representatives',
    title: 'You do not need an agent',
    text: 'IRCC says you do not need a representative. If you pay one, only Canadian lawyers and paralegals, Quebec notaries and consultants licensed by the CICC may charge you. IRCC may return or refuse an application that used anyone else.',
    sources: [
      { label: 'IRCC, learn about representatives', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html' },
    ],
    more: { label: 'How to check a representative', href: '/canadian-immigration-lawyer-pakistan' },
  },
};
