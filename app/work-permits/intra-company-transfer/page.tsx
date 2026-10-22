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

/**
 * Intra-company transfers (ICT).
 *
 * The job of this page is to stop two expensive misunderstandings before they
 * cost anyone money: that "LMIA-exempt" means "easier", and that a company can
 * be assembled on paper in order to produce a transferee. Both beliefs are
 * common in the Pakistani market and both end in refusal.
 */
export const metadata: Metadata = {
  title: 'Intra-Company Transfers to Canada',
  description:
    'Intra-company transfers to a Canadian branch: the qualifying company relationship, the three worker categories, and why a shell set up to enable one fails.',
  alternates: { canonical: '/work-permits/intra-company-transfer' },
};

const PAGE = 'work-permits-intra-company-transfer';

const CATEGORIES = [
  {
    icon: 'star' as const,
    kicker: 'Category one',
    title: 'Executive',
    body: 'You primarily direct the management of the organisation or a major component of it, set goals and policy, and work with wide latitude in your own decision-making. Supervision over you is general, from higher executives, a board or shareholders.',
  },
  {
    icon: 'user' as const,
    kicker: 'Category two',
    title: 'Senior managerial',
    body: 'You manage the organisation, a department or a function — or you manage an essential function without direct reports, at a senior level within the structure. Managing ordinary line staff is not, by itself, this category.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Category three',
    title: 'Specialised knowledge',
    body: 'You hold advanced proprietary knowledge of the organisation’s products, services, research, techniques, equipment or management that is genuinely uncommon, and an advanced level of expertise gained through significant and recent experience inside that organisation.',
  },
];

const RELATIONSHIP = [
  ['Parent', 'The foreign company owns and controls the Canadian entity.'],
  ['Subsidiary', 'The Canadian entity is owned and controlled by the foreign company.'],
  ['Branch', 'The Canadian operation is an office or division of the same legal entity, not a separate company.'],
  ['Affiliate', 'Both entities are owned and controlled by the same parent, or by the same group of owners in substantially the same proportions.'],
];

const STEPS = [
  {
    title: 'Establish the corporate relationship on paper',
    body: 'Ownership and control between the foreign employer and the Canadian entity have to be documented — incorporation records, share registers, group structure charts, audited statements. A vague assertion of “group company” is not a relationship.',
  },
  {
    title: 'Show both entities are actually doing business',
    body: 'Both sides must be regularly and continuously providing goods or services. A registered address, a mailbox or a dormant registration in Canada does not meet this. Neither does a foreign parent that exists only on the letterhead.',
  },
  {
    title: 'Establish your qualifying employment abroad',
    body: 'You must have been employed continuously and full-time by the related foreign company, in a capacity that matches the category you are transferring under, for a qualifying period ending recently. IRCC publishes the current required period and window.',
  },
  {
    title: 'Define the Canadian position honestly',
    body: 'The role in Canada must sit in one of the three categories in substance, not in job title. A support letter has to describe duties, reporting lines, decision-making authority, and how the position fits the Canadian operation.',
  },
  {
    title: 'Apply to IRCC for the work permit',
    body: 'You apply — from outside Canada, or at a port of entry where you are eligible to do so — with the corporate evidence, your employment history with the group, and the support letter. There is no separate labour market application.',
  },
  {
    title: 'Decision, and an employer-specific permit',
    body: 'If approved, the permit is tied to the named employer and position. Renewal is not automatic — the qualifying relationship and the operations on both sides have to still hold at the time you ask, and where the transfer was into a newly established Canadian operation IRCC expects to see what has actually happened since. IRCC publishes the current renewal requirements.',
  },
];

const FAQS = [
  {
    q: 'Does an intra-company transfer need an LMIA?',
    a: 'No. It falls under the LMIA-exempt work permits, on the basis that the transfer brings a significant benefit to Canada. That removes one government decision from the sequence — it does not remove the assessment of you, your employment history, the corporate relationship, or your admissibility.',
  },
  {
    q: 'Does LMIA-exempt mean this route is easier?',
    a: 'No, and treating it that way is the most common reason files fail. The evidentiary burden simply moves. Instead of an employer proving a labour shortage, you and the group have to prove a real corporate relationship, real operations on both sides, and real qualifying employment. Officers scrutinise exactly the places where the story is most often thin.',
  },
  {
    q: 'Can my employer open a Canadian company so I can transfer there?',
    a: 'Opening a genuine Canadian operation as part of a real expansion is a recognised commercial step, and there is a route for transfers into a start-up operation. Incorporating a shell so that someone becomes eligible to move is not. Officers look at whether physical premises have been secured, whether the operation is realistically financed and staffed, and whether the plan is commercially credible. Where the only apparent purpose of the Canadian entity is to generate a transferee, the application does not survive that examination.',
  },
  {
    q: 'I own the foreign company. Can I transfer myself?',
    a: 'Ownership is not a bar in itself, and owner-managers do transfer. But it raises the standard of evidence considerably, because the arrangement is entirely within your control. You will need to show the foreign business genuinely operates and will continue to, that your own role there was substantive, and that the Canadian entity has a real commercial purpose beyond your relocation.',
  },
  {
    q: 'What counts as specialised knowledge?',
    a: 'Knowledge that is genuinely uncommon within the industry and proprietary to that organisation — its own methods, systems, products, research or equipment — combined with an advanced level of expertise built inside the company. Ordinary professional competence, familiarity with widely used commercial software, or seniority alone do not qualify, however capable you are. It is the category IRCC gives officers the most detailed assessment instructions for, and in our own casework it is the one where files most often come apart.',
  },
  {
    q: 'How long can I stay, and can it lead to permanent residence?',
    a: 'Initial permits and total maximum durations differ by category, and IRCC publishes the current limits. There is no permanent residence built into this route. Canadian work experience gained on the permit can support a separate permanent residence application later, but that is a distinct application on its own criteria — nothing about the transfer creates an entitlement.',
  },
  {
    q: 'Can my spouse work and my children study?',
    a: 'Accompanying family members generally apply separately, and eligibility for an open work permit for a spouse depends on rules that IRCC revises from time to time. Check the current position before you plan around it rather than assuming what applied to someone who moved earlier still applies.',
  },
  {
    q: 'Can you guarantee approval?',
    a: 'No, and no one honestly can. An officer assesses the corporate relationship, your employment history and your admissibility, and that decision is not ours to make. What we can do is tell you before you spend money whether the relationship and the role are strong enough to be worth filing.',
  },
];

export default function IntraCompanyTransferPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Intra-company transfers"
        title={
          <>
            Moving within a company that{' '}
            <span className="text-gold-300">genuinely exists</span>
          </>
        }
        subtitle={
          <>
            An intra-company transfer moves an existing senior or specialised employee from a foreign
            company to a related Canadian branch, subsidiary or affiliate. No labour market
            assessment is required — which means the scrutiny lands on the company instead.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IT IS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The route, plainly"
          title="What an intra-company transfer actually is"
        />
        <Prose>
          <p>
            Canada allows multinational employers to move key people into their Canadian operations
            without going through the labour market process, on the reasoning that transferring
            leadership and proprietary expertise into a Canadian business benefits Canada. It sits
            among the{' '}
            <Link href="/work-permits/lmia-exempt" className="font-semibold text-accent-500 link-underline">
              LMIA-exempt work permits
            </Link>
            , not the{' '}
            <Link href="/work-permits/lmia" className="font-semibold text-accent-500 link-underline">
              LMIA-based ones
            </Link>
            .
          </p>
          <p>
            Three things have to be true at once. There must be a qualifying corporate relationship
            between the company you work for now and the company you are moving to. Both companies
            must actually be doing business. And you must already be an employee of the foreign
            company, in an executive, senior managerial or specialised-knowledge capacity, and have
            been for a qualifying period.
          </p>
          <p>
            If any one of those three fails, the route fails — regardless of how strong the other
            two are. Most of the work of preparing one of these files is proving the parts that feel
            obvious to the people inside the business and are not obvious to a visa officer reading
            it cold.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE RELATIONSHIP ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The first requirement"
              title="A qualifying relationship between the two companies"
            />
            <Prose>
              <p>
                The two entities must be related in one of a defined set of ways. A commercial
                partnership, a franchise arrangement, a distribution agreement or a shared brand is
                not a qualifying relationship, however close the working relationship is in practice.
                What matters is ownership and control.
              </p>
              <p>
                Beyond the relationship itself, both entities must be doing business — regularly and
                continuously providing goods or services. This is the point where files most often
                come apart. A Canadian registration with no premises, no staff, no revenue and no
                trading history is not an operation; it is a registration.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Recognised forms" title="How the entities can be related" />
            <ul className="mt-6 space-y-4">
              {RELATIONSHIP.map(([term, def]) => (
                <li key={term} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-ink-900">{term}</p>
                    <p className="mt-1 text-ink-600 text-pretty">{def}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===================== THE CATEGORIES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The second requirement"
          title="Three categories of transferee, and only three"
          subtitle="The category is judged on the substance of the role, not on the job title printed on a letter."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <FeatureCard key={c.title} icon={<Icon name={c.icon} />} kicker={c.kicker} title={c.title}>
              {c.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Specialised knowledge is narrower than it sounds">
            <p>
              Being highly skilled is not the test. The knowledge has to be proprietary to that
              organisation and genuinely uncommon in the wider labour market, and your expertise has
              to have been built inside the company through significant and recent experience with
              it. An excellent engineer using industry-standard tools is an excellent engineer, not a
              specialised-knowledge transferee.
            </p>
            <p>
              This is where we see files come apart. Applications describe general competence in
              elevated language and an officer reads it as exactly that. If the knowledge cannot be
              named — this system, this process, this product line, developed here — the category is
              probably the wrong one.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== QUALIFYING EMPLOYMENT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The third requirement"
          title="A genuine period of employment abroad"
        />
        <Prose>
          <p>
            You must already have been employed by the related foreign company, continuously and
            full-time, in a capacity matching the category you are transferring under, for a
            qualifying period that ended recently. This exists to make the route what it says it is:
            a transfer of an existing employee, not a hiring channel.
          </p>
          <p>
            In practice that means the employment has to be evidenced the way real employment is
            evidenced — payroll records, tax filings, social security or provident fund records,
            bank credits of salary, appointment and promotion letters, and an organisational chart
            that places you where you say you sat. A letter from a director asserting your role,
            unsupported by anything else, carries very little weight.
          </p>
          <p>
            IRCC sets the current length of the qualifying period and the window it must fall
            within, and revises them from time to time. We do not print those figures here; read them
            at the source on the day you need them.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="How a transfer is actually assembled"
          subtitle="No labour market application sits in this sequence — which is why every other element has to be documented properly."
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

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>A Canadian company created to enable the transfer.</strong> The most frequent one,
            and the least survivable. An entity incorporated shortly before the application, with no
            premises, no financing, no customers and no plan beyond the applicant’s arrival, reads
            exactly as what it is. Officers examine incorporation dates, leases, funding and staffing
            precisely because this pattern is well known to them.
          </p>
          <p>
            <strong>A relationship that is commercial, not corporate.</strong> Long-standing partners,
            agents, distributors and franchisees are not parents, subsidiaries, branches or
            affiliates. Where the ownership documents do not show control, no amount of history
            between the businesses substitutes for it.
          </p>
          <p>
            <strong>A title that outruns the duties.</strong> Retitling someone as “Director” or
            “Head of” shortly before the transfer draws attention rather than deflecting it. The
            duties, reporting lines and authority described have to be consistent with payroll,
            structure and the size of the business.
          </p>
          <p>
            <strong>Employment abroad that cannot be evidenced.</strong> Undocumented family-business
            employment, cash salary, or a period on the books that does not match tax and payroll
            records. This is a common problem for applicants from Pakistan and it is worth resolving
            honestly before filing rather than being asked about it afterwards.
          </p>
          <p>
            <strong>Specialised knowledge asserted rather than shown.</strong> Covered above, and worth
            repeating: in our experience this is the category where files are most exposed, because it
            is the one where an assertion is easiest to make and hardest to evidence.
          </p>
          <p>
            <strong>Assuming the permit is portable or leads somewhere.</strong> The permit is tied to
            the named employer and position, and it confers no permanent status. If your objective is
            settlement, that is a{' '}
            <Link href="/immigration-programs" className="font-semibold text-accent-500 link-underline">
              separate conversation about routes to permanent residence
            </Link>
            .
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If the company was built for the visa, this will not work">
            <p>
              We are asked regularly whether a company can be set up in Canada so that someone can
              transfer into it. The honest answer is that a structure assembled for the purpose of
              producing a transferee does not withstand examination, and pursuing it risks more than
              the fee — statements that misrepresent the nature of a business carry consequences for
              future applications, not just this one.
            </p>
            <p>
              This route also does not suit you if you have no existing employer abroad, if your
              employment there is recent or part-time, if the Canadian entity is a registration
              rather than an operation, if the two businesses are commercial partners rather than
              commonly owned, or if your role is skilled but ordinary. Skilled professionals with no
              multinational employer are usually better served by{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>{' '}
              or a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee route
              </Link>
              , and people whose real plan is to run a business in Canada should look at{' '}
              <Link href="/business-immigration" className="font-semibold text-accent-500 link-underline">
                business immigration
              </Link>{' '}
              instead of dressing that plan as a transfer.
            </p>
            <p>
              We would rather tell you on the first call that this does not fit than take a fee for a
              file that was never going to work. The decision is an officer’s, not ours, which is why
              we publish a{' '}
              <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 link-underline">
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Where the current details live" title="Fees, durations and requirements" />
        <Prose>
          <p>
            Application fees, the length of the qualifying employment period, initial permit lengths
            and maximum total durations all change, and they differ between the categories. We
            deliberately do not publish those figures here, because a number that is right today is a
            liability on a page you might read next year.
          </p>
          <p>
            IRCC publishes the current requirements — including which exemption code applies to which
            kind of transfer, and how officers are told to assess specialised knowledge — under{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/hire-temporary-foreign/international-mobility-program.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              the International Mobility Program on canada.ca
            </a>
            . Note that IRCC has reorganised the intra-company transfer instructions and the exemption
            codes attached to them more than once, so guidance written even a year or two ago may cite
            codes that no longer exist. The underlying authority sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Read the figures at the source, on the day you need them.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you restructure anything"
        title="Find out whether your company relationship actually qualifies"
        subtitle="Tell us how the two companies are owned, how long you have worked for the foreign one, and what you actually do there. We will tell you honestly whether a transfer is realistic — and if it is not, which route is."
        page={PAGE}
        waMessage="Hi, I’d like to know whether an intra-company transfer to Canada is realistic in my situation."
      />
    </>
  );
}
