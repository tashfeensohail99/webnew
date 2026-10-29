import type { Metadata } from 'next';
import Link from 'next/link';
import { OfficeLanding } from '@/components/OfficeLanding';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Immigration Lawyers & Consultants in Lahore',
  description:
    'Our Lahore office in Haly Tower, DHA Phase 2 — Canada, UK, USA and Europe immigration, reviewed by lawyers. Free consultation. Address and hours.',
  alternates: { canonical: '/immigration-consultant-lahore' },
};

const office = site.offices.find((o) => o.city === 'Lahore')!;

export default function LahoreOfficePage() {
  return (
    <OfficeLanding
      office={office}
      page="immigration-consultant-lahore"
      eyebrow="Lahore office · DHA Phase 2"
      subtitle="An office you can walk into — Haly Tower, DHA Phase 2. The consultation is free, and you leave with a written summary of where you stand."
      other={{ href: '/immigration-consultant-islamabad', city: 'Islamabad' }}
      intro={
        <>
          <p>
            Lahore has no shortage of immigration consultants. Most of them are agents: anyone can
            rent a room, print a banner with a maple leaf and start taking deposits, because Pakistan
            has no licensing body for immigration advice. That is how so many families here have lost
            money to a “guaranteed” visa.
          </p>
          <p>
            Our Lahore office is different in the one way you can check: your file is reviewed by a
            qualified lawyer, someone accountable to a regulator, who will tell you plainly whether
            your case is strong — and will tell you not to apply if it isn’t.
          </p>
          <p>
            Before you pay anyone in Lahore — including us — read{' '}
            <Link href="/canadian-immigration-lawyer-pakistan" className="font-semibold text-accent-500 link-underline">
              how to check a Canadian immigration lawyer in Pakistan
            </Link>
            .
          </p>
        </>
      }
      faqs={[
        {
          q: 'Is the consultation at the Lahore office really free?',
          a: 'Yes. You pay nothing for the consultation and nothing unless you decide to go ahead — and you leave with a written summary of where you stand either way.',
        },
        {
          q: 'Do I need an appointment?',
          a: 'Book ahead. It means the person you meet has already looked at your situation before you sit down, so the hour is spent on your case rather than on paperwork.',
        },
        {
          q: 'Do you only handle Canada from Lahore?',
          a: 'No. Canada is what we file most, but the Lahore office handles the UK, the United States and Europe as well — the same lawyers review every file.',
        },
        {
          q: 'I was refused before. Should I still come in?',
          a: 'Especially then. Bring the refusal letter. A refusal is not the end of it, but the next application has to deal with it head-on — and the letter is where we start.',
        },
      ]}
    />
  );
}
