import type { Metadata } from 'next';
import Link from 'next/link';
import { OfficeLanding } from '@/components/OfficeLanding';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  // Absolute for the same reason as the Lahore page.
  title: { absolute: 'Canada Visa Consultants & Immigration Lawyers in Islamabad' },
  description:
    'Our Islamabad office at the World Trade Centre, Giga Mall, DHA Phase 2 — Canada, UK, USA and Europe immigration, lawyer-reviewed. Free consultation.',
  alternates: { canonical: '/immigration-consultant-islamabad' },
};

const office = site.offices.find((o) => o.city === 'Islamabad')!;

export default function IslamabadOfficePage() {
  return (
    <OfficeLanding
      office={office}
      page="immigration-consultant-islamabad"
      eyebrow="Islamabad office · Giga Mall, DHA Phase 2"
      subtitle="At the World Trade Centre, Giga Mall — for clients across Islamabad and Rawalpindi. The consultation is free, and you leave with a written summary of where you stand."
      other={{ href: '/immigration-consultant-lahore', city: 'Lahore' }}
      intro={
        <>
          <p>
            If you have already been through an agent — paid, waited months, and come away with a
            refusal or with nothing at all — you are far from alone. It is the most common story in
            immigration in Pakistan, and it happens because anyone can call themselves a consultant:
            there is no licensing body to stop them.
          </p>
          <p>
            What we do differently starts before any money changes hands: a qualified lawyer reads
            your file, tells you honestly where you stand, and puts it in writing. If the right
            answer is to wait, fix something first, or not apply, that is what you will hear.
          </p>
          <p>
            Before you pay anyone in Islamabad — including us — read{' '}
            <Link href="/canadian-immigration-lawyer-pakistan" className="font-semibold text-accent-500 link-underline">
              how to check a Canadian immigration lawyer in Pakistan
            </Link>
            .
          </p>
        </>
      }
      faqs={[
        {
          q: 'Where exactly is the Islamabad office?',
          a: `${office.address}. Use the Google Maps link on this page for directions — it opens our listing directly.`,
        },
        {
          q: 'I live in Rawalpindi. Is Islamabad the right office for me?',
          a: 'Usually, yes — it is the closer of our two Pakistan offices. If travelling is difficult, the consultation can also be held remotely.',
        },
        {
          q: 'Is the consultation free?',
          a: 'Yes. No fee for the consultation, nothing owed unless you decide to go ahead, and a written summary of where you stand either way.',
        },
        {
          q: 'Can you help with a study permit or a family case, not just work?',
          a: 'Yes. The Islamabad office handles every route we file — study, work, visit, family sponsorship, permanent residence and refusals — for Canada, the UK, the United States and Europe.',
        },
      ]}
    />
  );
}
