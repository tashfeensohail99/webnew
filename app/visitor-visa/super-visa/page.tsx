import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHero,
  Section,
  SectionHeading,
  FeatureCard,
  Callout,
  FAQ,
  CTASection,
  Prose,
  Icon,
} from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';

export const metadata: Metadata = {
  title: 'Super Visa for parents and grandparents',
  description:
    'How the Super Visa differs from a visitor visa, what the inviting child or grandchild must prove, and how it compares with sponsoring parents for PR.',
  alternates: { canonical: '/visitor-visa/super-visa' },
};

const PAGE = 'visitor-visa-super-visa';

/* The four moving parts of a Super Visa file. */
const PARTS = [
  {
    icon: 'user' as const,
    kicker: 'The inviter',
    title: 'A child or grandchild in Canada',
    body: 'The invitation must come from your own child or grandchild who is a Canadian citizen or permanent resident. A cousin, a nephew, a family friend — none of those can invite you on this visa.',
  },
  {
    icon: 'calculator' as const,
    kicker: 'The income test',
    title: 'A minimum-income undertaking',
    body: 'Your host signs a written undertaking to support you, backed by proof their household income reaches a set minimum for a household of your combined size. It is assessed on filed Canadian tax records, not on a bank balance.',
  },
  {
    icon: 'shield' as const,
    kicker: 'The insurance',
    title: 'Private medical insurance',
    body: 'You must hold private health insurance covering healthcare, hospitalisation and repatriation, for the minimum coverage amount and the minimum period from your date of entry that IRCC sets. Both are published by IRCC and have been revised before.',
  },
  {
    icon: 'doc' as const,
    kicker: 'The medical',
    title: 'An immigration medical exam',
    body: 'Because the stay is long, an immigration medical exam by an IRCC-approved panel physician is required — not the optional step it can be on a short visitor visa.',
  },
];

const STEPS = [
  {
    title: 'Check the inviter first',
    body: 'Everything hangs on your child or grandchild in Canada — their status, their household size, and whether their filed income actually reaches the threshold. We start there, because if it doesn’t, nothing else matters yet.',
  },
  {
    title: 'Assemble the host’s side',
    body: 'The invitation letter, the undertaking of support, proof of status in Canada, and income evidence drawn from Canada Revenue Agency records rather than payslips alone.',
  },
  {
    title: 'Buy compliant insurance',
    body: 'A policy that meets IRCC’s coverage terms and is issued by an insurer IRCC accepts. Many cheap policies fail on an exclusion or a coverage gap, which is a refusal reason on its own.',
  },
  {
    title: 'Build the applicant’s side',
    body: 'Passport, ties to Pakistan, travel and refusal history, and the honest purpose of the visit. This is still a temporary-resident application, and an officer still has to believe you will leave.',
  },
  {
    title: 'Medical and biometrics',
    body: 'The panel-physician exam and biometrics are scheduled around the filing. We tell you the sequence so nothing expires while something else is pending.',
  },
  {
    title: 'File and wait',
    body: 'IRCC decides. Processing depends on the visa office and the file — anyone quoting you a fixed date is guessing, and we won’t.',
  },
];

const FAQS = [
  {
    q: 'How is this different from a normal visitor visa?',
    a: 'Two ways that matter. A normal visitor visa is open to anyone with a genuine reason to visit, and the stay authorised at the border is short — measured in months. A Super Visa is only for parents and grandparents of Canadian citizens and permanent residents, and it authorises a continuous stay measured in years per entry, extendable from inside Canada. In exchange, it asks for things an ordinary visitor visa does not: an income-backed undertaking from your host, private medical insurance, and an immigration medical exam.',
  },
  {
    q: 'How long can my parents stay, and how long is the visa valid?',
    a: (
      <>
        Both the per-entry stay and the maximum validity of the visa are set by IRCC and have been
        changed before, so we won’t print a number here that could be wrong when you read it. IRCC
        publishes the current stay length and validity on its{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html"
          rel="noopener"
        >
          Super Visa page
        </a>{' '}
        — we confirm both against it for your file.
      </>
    ),
  },
  {
    q: 'How much income does my child in Canada need to show?',
    a: (
      <>
        It depends on the size of the household once your parents are counted in it, and{' '}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html"
          rel="noopener"
        >
          IRCC publishes the table
        </a>
        . The rules for how that income is calculated have also been eased more than once in recent years, including which tax years count and whether the visiting parents’ own income can be added. We check the current rule against your host’s
        actual tax records rather than working from a figure someone remembered.
      </>
    ),
  },
  {
    q: 'Can we buy the insurance in Pakistan?',
    a: 'Not from just any insurer. IRCC has widened the rule beyond Canadian companies, but a foreign policy only counts if the insurer is authorised in the specific way IRCC requires. A policy that is cheaper and non-compliant is not a saving — it is a refusal. Confirm the insurer against IRCC’s current requirement before you pay a premium.',
  },
  {
    q: 'Does a Super Visa lead to permanent residence?',
    a: 'No. It is visitor status, for a long time. Your parents cannot work on it, and it does not accumulate toward permanent residence or citizenship. If permanent residence is the goal, sponsorship is the route designed for it — though selection and approval there are IRCC’s decision too. The Super Visa does not turn into permanent residence.',
  },
  {
    q: 'We were refused a visitor visa before. Is a Super Visa still possible?',
    a: (
      <>
        Possible, but the earlier refusal has to be dealt with rather than ignored. We ask what the
        refusal letter actually said, and whether the reason behind it has changed. If it hasn’t, we
        will tell you that before you spend money on insurance and a medical.{' '}
        <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
          More on refused Canadian visas
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Can you guarantee the visa?',
    a: (
      <>
        No. An IRCC officer decides your application, and no consultant in Pakistan can overrule that.
        What we can do is tell you honestly whether the file is strong and fix what is weak before it
        is filed.{' '}
        <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
          Read our no-guarantee policy
        </Link>
        .
      </>
    ),
  },
];

export default function SuperVisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Visitor visa"
        title={
          <>
            The Super Visa for{' '}
            <span className="text-gold-300">parents and grandparents</span>
          </>
        }
        subtitle={
          <>
            A long-stay visitor visa for the parents and grandparents of Canadians and permanent
            residents. It is built for long stays with family — not permanent residence — and it is
            your child or grandchild in Canada, not you, who has to qualify first.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk through a Super Visa — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IT IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="What a Super Visa actually is"
          subtitle="A visitor visa with a longer horizon — and a heavier set of conditions attached to it."
        />
        <div className="mt-8 max-w-3xl">
          <Prose>
            <p>
              An ordinary visitor visa lets you come to Canada for a short trip. The stay authorised
              when you land is measured in months, and each time you want longer you are back in front
              of the system asking for it.
            </p>
            <p>
              The Super Visa is narrower and longer. It is open only to the parents and grandparents
              of Canadian citizens and permanent residents, and it authorises a continuous stay
              measured in years per entry, on a visa valid for years beyond that, with the option to
              extend from inside Canada. For a family that wants a grandparent present for a
              grandchild’s childhood rather than for a wedding, that is the whole difference.
            </p>
            <p>
              What it is not is a path to staying. It is visitor status. Your parents cannot work on
              it, it does not accumulate toward permanent residence, and it does not convert into
              anything. It also carries conditions an ordinary visitor visa does not — an
              income-backed undertaking from the inviting child, private medical insurance, and an
              immigration medical exam.
            </p>
            <p>
              The specific numbers — the length of stay, the income threshold, the minimum insurance
              coverage, the government fee — are set by IRCC and have been revised more than once in
              recent years. We deliberately don’t print them here.{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html"
                rel="noopener"
              >
                IRCC publishes the current figures
              </a>{' '}
              and we check them against your file rather than against memory.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== THE FOUR PARTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What the file has to prove"
          title="Four requirements, and who carries each one"
          subtitle="Two of these sit with your child or grandchild in Canada. Applicants are often surprised by that."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTS.map((p) => (
            <FeatureCard key={p.title} icon={<Icon name={p.icon} />} kicker={p.kicker} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            <p>
              The undertaking is worth understanding properly, because families read it as paperwork
              and it is not. Your child in Canada is putting their name to a promise that they will
              support you financially while you are there, and IRCC tests that promise against their
              filed income for a household counted as if you were already living in it. Adding two
              parents to a household of four changes the number that has to be met. It is the single
              most common place a Super Visa file falls over.
            </p>
            <p>
              The insurance is the second. The requirement is not simply “have travel insurance” — the
              policy has to cover healthcare, hospitalisation and repatriation at IRCC’s minimum
              level, run for the minimum period from entry that IRCC sets, and come from an insurer
              IRCC accepts. That last point has changed: policies from outside Canada can now
              qualify, but only where the insurer is authorised in the particular way IRCC specifies.
              A cheap policy that fails that test costs you the application. The coverage amount, the
              minimum period and the insurer test are all published by IRCC on its{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html"
                rel="noopener"
              >
                Super Visa page
              </a>
              , and we check a policy against it before you pay a premium.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== HOW IT WORKS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to a decision"
          subtitle="The order matters. We check the inviter before anyone books a medical or buys a policy."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===================== SUPER VISA VS SPONSORSHIP ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The real decision"
          title="Super Visa or sponsorship for permanent residence?"
          subtitle="Most families are choosing between these two. They are not competing versions of the same thing."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Super Visa</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Long visits, available now</h3>
            <div className="mt-4 space-y-3 text-ink-600 text-pretty">
              <p>
                You can apply whenever you are ready — there is no intake window and no lottery. The
                status is temporary: visitor, no work, no route to citizenship, and private insurance
                to be maintained for as long as your parents keep coming.
              </p>
              <p>
                It suits families who want presence rather than permanence, or who need something in
                place while they wait for a sponsorship opportunity.
              </p>
            </div>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Parents and Grandparents sponsorship</p>
            <h3 className="mt-4 font-serif text-2xl text-balance">Permanent residence, if you get in</h3>
            <div className="mt-4 space-y-3 text-ink-600 text-pretty">
              <p>
                This gives permanent residence, with provincial health coverage, the right to work,
                and eventual eligibility for citizenship. The trade-offs are access and commitment:
                IRCC opens the intake periodically and selects from a pool of interested sponsors, so
                you cannot simply decide to apply, and the sponsor signs a support undertaking that
                runs for many years.
              </p>
              <p>
                It suits families whose goal is that the parents live in Canada, not visit it — and
                whose sponsor can meet a sustained income requirement.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            <p>
              In practice the two are often used together rather than chosen between: submit interest
              in sponsorship when the intake opens, and apply for the Super Visa so your parents may
              be able to be in Canada in the meantime. The two are separate applications, each
              assessed on its own merits by IRCC — and being in Canada as a visitor does not create a
              right to stay if the sponsorship does not come through.
            </p>
            <p>
              If you want to talk this through against your own household — who the sponsor would be,
              what their income looks like, whether your parents want to move or to visit — that is
              exactly what a consultation is for.{' '}
              <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
                Book one here
              </Link>
              .
            </p>
          </Prose>
        </div>
      </Section>

      {/* ===================== WHO IT DOESN'T SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight talk" title="Who should not pursue a Super Visa" />
        <div className="mt-8">
          <Callout title="We will tell you this on the call rather than take your money">
            <p>
              If the goal is for your parents to settle in Canada permanently, this is the wrong
              route — it does not lead there, and years on a Super Visa build nothing toward it. If
              your child in Canada cannot meet the income requirement for a household that includes
              your parents, the application fails on that alone, and buying insurance first is money
              thrown away. If you are looking for a way for a parent to work in Canada, this visa
              forbids it. And if the person inviting you is a sibling, an uncle, a cousin or a family
              friend rather than your own child or grandchild, you are not eligible at all — no matter
              how the relationship is described on the invitation letter.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions families actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Bring your parents over"
        title="Find out whether your family qualifies"
        subtitle="Tell us who is in Canada, what their household looks like, and what your parents actually want — a long visit or a move. We’ll tell you honestly which route fits, and if neither does, we’ll say that too."
        page={PAGE}
        waMessage="Hi, I’d like to apply for a Super Visa for my parents. My child/I am in Canada."
      />
    </>
  );
}
