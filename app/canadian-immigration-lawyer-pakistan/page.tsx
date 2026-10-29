import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, FAQ, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';
import { site, founder } from '@/lib/site';

/**
 * The page for "best Canadian immigration lawyer in Pakistan".
 *
 * Nobody ranks them, and this site never grades itself (see the JSON-LD notes
 * in components/StructuredData.tsx). So the page answers the question the only
 * honest way: with Canada's rule on who may be paid to represent an applicant,
 * the public registers where a name can be checked, and the questions to ask
 * before paying anyone — including us. Every IRCC fact is from IRCC's own pages
 * on representatives (page details 2026-08-18 and 2026-06-04). Firm facts come
 * from lib/site.ts only.
 */
export const metadata: Metadata = {
  title: { absolute: 'Best Canadian Immigration Lawyer in Pakistan: How to Check (2026)' },
  description:
    'No one ranks Canadian immigration lawyers in Pakistan. What you can check: who may represent you before IRCC, and how to verify a name in two minutes.',
  alternates: { canonical: '/canadian-immigration-lawyer-pakistan' },
};

const PAGE = 'canadian-immigration-lawyer-pakistan';

const IRCC = {
  representatives:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html',
  authorized:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html',
  imm5476:
    'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5476.html',
  cicc: 'https://www.college-ic.ca/protecting-the-public/find-an-immigration-consultant',
} as const;

function Official({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent-500 link-underline">
      {children}
    </a>
  );
}

const CHECKS: { title: string; body: ReactNode; href: string; cta: string }[] = [
  {
    title: 'Immigration consultants',
    body: 'Licensed consultants (RCICs) are on the public register of the College of Immigration and Citizenship Consultants. Search the name; the register shows whether the licence is active.',
    href: IRCC.cicc,
    cta: 'Search the CICC register →',
  },
  {
    title: 'Lawyers licensed in Canada',
    body: 'Every Canadian law society has a public directory, and IRCC links all of them from one page. Check the name, and that the member is in good standing.',
    href: IRCC.authorized,
    cta: 'IRCC: the law society directories →',
  },
  {
    title: 'Lawyers licensed in Pakistan',
    body: 'Ask which bar council they are enrolled with and for the enrolment number. That confirms they are a lawyer in Pakistan — then go back to the first question: who is authorised before IRCC?',
    href: IRCC.representatives,
    cta: 'IRCC: who can be paid to represent you →',
  },
];

const QUESTIONS: [string, string][] = [
  ['Who, by name, will handle my file?', 'A name, not “our team”. You are paying a person, and you need to be able to look that person up.'],
  ['Where can I verify you?', 'A public register and a licence number. If the answer is a certificate on the wall, keep asking.'],
  ['Will you be named on my IMM 5476?', 'Yes — and they will sign it. IRCC requires the Use of a Representative form for anyone who helps you, paid or not. Someone who prepares your file but tells you to say you had no help is asking you to misrepresent.'],
  ['What does the fee cover, in writing?', 'A written agreement that separates the firm’s fee from IRCC’s own fees, and says what happens if the application is refused.'],
  ['What will you tell me if my case is weak?', '“Don’t apply yet” is a legitimate answer. A firm that has never said it to anyone is not assessing cases; it is taking them.'],
  ['Who controls my IRCC account?', 'You should. Know your own login, see what is submitted in your name, and keep copies of everything.'],
  ['What happens if I am refused?', 'A plan, not a shrug: the GCMS notes, a re-application that answers the refusal, or judicial review — a court case, where only a lawyer can act for you.'],
];

const RED_FLAGS: [string, string][] = [
  ['A guarantee', 'Visas are decided by visa officers. Nobody in Pakistan can promise one, and the firms that do are the ones people lose money to.'],
  ['A success rate', 'Unverifiable, and usually invented. Ask instead how many clients they told not to apply.'],
  ['A contact at the High Commission', 'There is no back door at IRCC. Claiming one is a sign of either dishonesty or fantasy.'],
  ['Cash, no receipt, no contract', 'If the money leaves no trace, neither will they when it goes wrong.'],
  ['“Say you did it yourself”', 'A representative who hides from the form is hiding from IRCC. If it goes wrong, the misrepresentation is yours.'],
  ['A job offer for a fee', 'Selling Canadian job offers is a known fraud pattern. A genuine employer does not charge the worker for the offer.'],
];

const FAQS = [
  {
    q: 'Who is the best Canadian immigration lawyer in Pakistan?',
    a: 'No independent body ranks them, and any firm calling itself the best is grading itself. The useful test is whether the person who will handle your file is authorised to represent you before IRCC — a lawyer in good standing with a Canadian law society, or a consultant licensed by the College of Immigration and Citizenship Consultants — and whether you can confirm that yourself on a public register before you pay.',
  },
  {
    q: 'Do I need a lawyer, or is a Canadian immigration consultant enough?',
    a: 'Both can be authorised: IRCC accepts paid representation from lawyers and paralegals licensed by a Canadian law society, Quebec notaries, and consultants licensed by the CICC. What matters is that the person is authorised and knows your type of case. One difference: a judicial review of a refusal is a case at the Federal Court, and only a lawyer can act for you there.',
  },
  {
    q: 'Can a lawyer in Pakistan represent me in a Canadian immigration application?',
    a: 'Only if that lawyer is also licensed in Canada — by a provincial or territorial law society or by the CICC. A Pakistani law degree and bar enrolment make someone a lawyer in Pakistan; they do not make them an authorised representative for IRCC. IRCC says it will not deal with paid representatives who are not authorised, in Canada or abroad, and may return or refuse an application prepared by one.',
  },
  {
    q: 'How do I check an immigration consultant or lawyer before paying?',
    a: 'Ask for the full name as it appears on their licence and the licence number. Consultants are on the CICC’s public register; lawyers are in their law society’s directory, and IRCC links every directory from one page. The check takes two minutes. If a firm will not give you a name to check, that is your answer.',
  },
  {
    q: 'What should a Canadian immigration lawyer in Pakistan cost?',
    a: 'It depends on the application, so judge the agreement rather than the number: it should be in writing, separate the firm’s fee from IRCC’s own fees, and say what happens if you are refused. Be wary of fees quoted only in cash, and of a very low fee that becomes a series of extras. Our own fees are published on this site.',
  },
  {
    q: `Is the consultation with ${site.shortName} free?`,
    a: `Yes. ${site.consult.promise} If the honest answer is that you should not apply, or not yet, you will hear that too — before you have paid anything.`,
  },
  {
    q: 'Is this page current for 2026 and 2027?',
    a: 'The rule that paid representatives must be authorised is Canadian law, not an IRCC policy of the year, so it does not change from 2026 to 2027. We re-check this page against IRCC’s own pages on representatives; the date at the bottom is when we last did.',
  },
];

export default function CanadianImmigrationLawyerPakistanPage() {
  const offices = site.offices.filter((o) => o.address);

  return (
    <>
      <PageHero
        eyebrow="Choosing a representative · from Pakistan"
        title={
          <>
            The best Canadian immigration lawyer in Pakistan is{' '}
            <span className="text-gold-300">one you can look up.</span>
          </>
        }
        subtitle="There is no official ranking, and Pakistan has no licensing body for immigration advice. What there is: Canada’s rule on who may be paid to represent you, and public registers where you can check a name in two minutes."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
        <a href={IRCC.representatives} rel="noopener noreferrer" target="_blank" className="btn btn-ghost">
          IRCC: who can represent you
        </a>
      </PageHero>

      {/* ===================== THE RULE ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Canada’s rule" title="Paid help must be authorised help" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                Anyone who is paid — or, in IRCC’s words, compensated in any way — to help with an
                application to Immigration, Refugees and Citizenship Canada must be an{' '}
                <strong className="text-ink-900">authorised representative</strong>: a lawyer or
                paralegal in good standing with a Canadian provincial or territorial law society, a
                notary of the Chambre des notaires du Québec, or an immigration consultant licensed by
                the College of Immigration and Citizenship Consultants (CICC).
              </p>
              <p>
                IRCC says it won’t deal with representatives who charge a fee but are not authorised,
                and that if you use one — in Canada or abroad — it may return your application or
                refuse it. <Official href={IRCC.representatives}>IRCC: learn about representatives</Official>.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="In Lahore or Islamabad" title="A lawyer here is not automatically a lawyer there" />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">
              <p>
                A Pakistani law degree and bar enrolment make someone a lawyer in Pakistan. On their
                own, they do not make that person someone IRCC will recognise as your paid
                representative. Firms here are run by Pakistani advocates, by Canadian-licensed
                lawyers, by licensed consultants, or by none of these — and the signboard rarely says
                which.
              </p>
              <p>
                So ask any firm, including us: who will be named on the{' '}
                <Official href={IRCC.imm5476}>Use of a Representative form (IMM 5476)</Official>, and
                where can I look them up?
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== CHECK ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Two minutes, before you pay"
          title="Where to check a name"
          subtitle="These are the public registers IRCC itself points to. A real credential is on one of them; a certificate on an office wall is not a credential."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {CHECKS.map((c) => (
            <li key={c.title} className="card flex flex-col p-7">
              <p className="font-serif text-2xl">{c.title}</p>
              <p className="mt-3 flex-1 text-ink-600 text-pretty">{c.body}</p>
              <div className="pt-5">
                <Official href={c.href}>{c.cta}</Official>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===================== QUESTIONS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="At the first meeting"
          title="Seven questions to ask before you pay anyone"
          subtitle="And what a good answer sounds like. We expect to be asked all seven."
        />
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {QUESTIONS.map(([q, a]) => (
            <div key={q} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{q}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-3xl text-sm text-ink-500 text-pretty">
          On the third question: a false statement or a hidden representative is{' '}
          <Link href="/refusals/misrepresentation" className="font-semibold text-accent-500 link-underline">
            misrepresentation
          </Link>
          , and it is the applicant — not the agent — who carries the ban.
        </p>
      </Section>

      {/* ===================== RED FLAGS ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Walk away" title="Six things no honest firm will say" />
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {RED_FLAGS.map(([t, d]) => (
            <div key={t} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-serif text-xl">{t}</dt>
              <dd className="mt-1.5 text-ink-600 text-pretty">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ===================== US ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The same test, applied to us"
          title={`${site.name}, in checkable terms`}
          subtitle="We would be a poor guide if we told you to check everyone except us."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card p-7">
            <p className="font-serif text-2xl">Who we are</p>
            <p className="mt-3 text-ink-600 text-pretty">
              {site.name}, founded and run by {founder.name}, {founder.title}. Offices you can walk
              into in {offices.map((o) => o.city).join(' and ')}, and an office in Mississauga, Canada.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              {offices.map((o) => (
                <li key={o.city}>
                  <strong className="text-ink-700">{o.city}:</strong> {o.address}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <p className="font-serif text-2xl">Who handles your file</p>
            <p className="mt-3 text-ink-600 text-pretty">
              Every case here is reviewed by a qualified lawyer. Ask us who, and we will tell you by
              name — and where to check them — before you pay anything.
            </p>
            <p className="mt-4">
              <Link href="/about/our-team" className="font-semibold text-accent-500 link-underline">
                Our lawyers →
              </Link>
            </p>
          </div>
          <div className="card p-7">
            <p className="font-serif text-2xl">What we promise — and don’t</p>
            <p className="mt-3 text-ink-600 text-pretty">
              {site.consult.promise} No guarantee of an outcome, because no honest firm can give one.
              Fees in writing.
            </p>
            <p className="mt-4 space-x-4">
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                No-guarantee policy →
              </Link>
              <Link href="/fees" className="font-semibold text-accent-500 link-underline">
                Fees →
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Callout title="Already been quoted by someone else?">
            Bring what you were told — the fee, the promise, the name. We will tell you whether the
            person is authorised and whether the plan is real, even if the honest answer means you go
            elsewhere.
          </Callout>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="Questions people ask before choosing a lawyer" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="eyebrow">Official pages this is based on</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['IRCC — Learn about representatives', IRCC.representatives],
              ['IRCC — Find out if your representative is authorized (with every law society directory)', IRCC.authorized],
              ['IRCC — Use of a Representative form (IMM 5476)', IRCC.imm5476],
              ['College of Immigration and Citizenship Consultants — Find an immigration consultant', IRCC.cicc],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} rel="noopener noreferrer" target="_blank" className="text-ink-600 underline underline-offset-2 hover:text-ink-900">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="October 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Start by checking us"
        title="Ask us who will handle your case — then look them up"
        subtitle="The consultation is free and ends with a written summary of where you stand. Bring the seven questions; we expect them."
        page={PAGE}
        waMessage="Hi, I’d like to know who would handle my Canadian case and where I can verify them."
      />
    </>
  );
}
