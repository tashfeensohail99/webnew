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
 * Business visitors.
 *
 * The whole page turns on one distinction: business VISITOR activity versus WORK
 * that needs a permit. Getting it wrong is not a paperwork error — it is a status
 * breach, and it is discovered at the port of entry or afterwards. Everything else
 * on this page is in service of making that line legible.
 */
export const metadata: Metadata = {
  title: 'Business Visitors to Canada',
  description:
    'The line between business visitor activity and work needing a permit: the tests officers apply, and why crossing it is a status breach, not paperwork.',
  alternates: { canonical: '/visitor-visa/business-visitor' },
};

const PAGE = 'visitor-visa-business-visitor';

const TESTS = [
  {
    icon: 'scale' as const,
    kicker: 'Test one',
    title: 'No entry into the Canadian labour market',
    body: 'The statutory phrase is that you seek to engage in international business activities without directly entering the Canadian labour market. In practice that means you are not being placed into the day-to-day productive work of a Canadian business: the activity connects a foreign business to Canada rather than staffing a Canadian one.',
  },
  {
    icon: 'globe' as const,
    kicker: 'Test two',
    title: 'Your pay comes from outside Canada',
    body: 'Your primary source of remuneration for the activity stays outside Canada. Being paid by a Canadian entity for the work you do here points hard in the other direction.',
  },
  {
    icon: 'building' as const,
    kicker: 'Test three',
    title: 'Your employer and profits stay outside Canada',
    body: 'Your principal place of business, and where the profits of the activity actually accrue, remain predominantly outside Canada. You remain an employee of the foreign business throughout.',
  },
  {
    icon: 'doc' as const,
    kicker: 'And the obvious one',
    title: 'You still need entry status',
    body: 'Business visitor is a category of visitor, not a separate visa. You still need a temporary resident visa or an electronic travel authorisation as applicable to your nationality, and you are still assessed as a genuine temporary visitor.',
  },
];

const VISITOR_SIDE = [
  ['Meetings and negotiations', 'Attending business meetings, negotiating a contract, or meeting a Canadian client or supplier on behalf of your foreign employer.'],
  ['Conferences and trade fairs', 'Attending a conference, convention or trade fair, or exhibiting on behalf of a business based outside Canada.'],
  ['Buying Canadian goods or services', 'Coming to purchase goods or services on behalf of a foreign business — inspecting product, meeting vendors, placing orders.'],
  ['Receiving training or instruction', 'Being trained by a Canadian business that sold products or services to your foreign employer, so that you can use them abroad.'],
  ['After-sales service under an existing agreement', 'Servicing, repairing or supervising work on specialised equipment or software, where that service is part of the original sale, lease, warranty or service contract from a business outside Canada.'],
  ['Training within a parent or subsidiary', 'Receiving or giving training within a Canadian parent or subsidiary of the corporation that employs you outside Canada, where any production of goods or services resulting from the training is incidental. The corporate relationship matters — the regulation speaks of a parent or subsidiary, not of loosely related or partner companies.'],
];

const WORK_SIDE = [
  ['Doing the productive work itself', 'Performing hands-on work that forms part of a Canadian business’s output — building, installing, producing, serving customers — rather than supporting a foreign business’s dealings with Canada.'],
  ['Installation outside a warranty or sale', 'The same technical work becomes work requiring a permit once it falls outside the original sale, lease, warranty or service agreement. Free-standing installation contracts are not business visitor activity.'],
  ['Being paid by the Canadian entity', 'Once the Canadian company is your paymaster for the activity, you have entered the Canadian labour market on the ordinary reading of it.'],
  ['Filling a role a Canadian could hold', 'Stepping into a vacancy, covering a shift, or being embedded in a Canadian team on the same footing as its employees.'],
  ['Managing Canadian operations day to day', 'Directing a Canadian business’s ongoing operations, as distinct from visiting it, is the classic point at which a visit becomes a posting.'],
  ['Open-ended presence', 'A stay that stretches until your work is in substance being done in Canada, for a Canadian operation, no longer sits inside the definition however it started.'],
];

const FAQS = [
  {
    q: 'Is “business visitor” a separate visa I apply for?',
    a: 'No. It is a category of visitor. You apply for the same temporary resident visa, or travel on an electronic travel authorisation if your nationality and circumstances allow it, and you are admitted as a business visitor by the officer at the port of entry based on what you are actually coming to do. Which document applies to you depends on your citizenship and on how you are travelling, and IRCC revises those lists from time to time — check your own position on IRCC’s entry-requirements tool before you plan around either one.',
  },
  {
    q: 'Who decides whether I am a business visitor or a worker?',
    a: 'Ultimately the border services officer at the port of entry, on the day, based on your documents and your answers. A visa in your passport is permission to travel and be examined — it is not a ruling that your planned activity is visitor activity.',
  },
  {
    q: 'My Canadian client wants to pay me directly for the days I am there. Is that a problem?',
    a: 'It works directly against you. One of the tests is that your primary remuneration for the activity comes from outside Canada. Payment from the Canadian entity for the work performed here is exactly the fact pattern that suggests you have entered the Canadian labour market. Structure the commercial relationship as a payment from the Canadian business to your foreign employer, not to you.',
  },
  {
    q: 'I am going to install machinery my company sold to a Canadian buyer. Do I need a permit?',
    a: 'It depends on the contract, not on the machinery. If the installation, commissioning or servicing is part of the original sale, lease, warranty or service agreement between the foreign seller and the Canadian buyer, it is generally business visitor activity. If it is a separate job you were engaged for outside that agreement, it generally is not. Carry the contract.',
  },
  {
    q: 'What happens if I get this wrong?',
    a: 'Working without authorisation is a breach of the conditions of your stay, not a technicality. It can lead to removal, and it is a fact that must be disclosed on future applications. Separately, misrepresenting what you came to do can lead to a finding of misrepresentation and a period of inadmissibility — and a finding does not require that you intended to mislead, which is why an inaccurate description matters even when it was careless rather than dishonest. This is the reason to resolve the question before you fly, not at the counter.',
  },
  {
    q: 'What should I be carrying with me?',
    a: 'A letter from your employer outside Canada stating your position, that you remain their employee and that they continue to pay you; a letter from the Canadian party explaining the purpose of the visit; and the underlying commercial document — the purchase order, sales contract, warranty or service agreement — where the activity depends on one. Officers ask for the document, not the description.',
  },
  {
    q: 'Can a business visitor stay long term and then apply from inside Canada?',
    a: 'That is not what the category is for, and treating it as a back door is a common way people lose status. A business visitor activity is discrete and connected to a business outside Canada. If your intention is to be in Canada working, the honest route is a work permit — a different application with different requirements.',
  },
  {
    q: 'Can you guarantee I will be admitted as a business visitor?',
    a: 'No. Admission is decided by an officer at the port of entry and that decision is not ours to make. What we can do is assess honestly whether your planned activity sits inside the definition, and tell you plainly when it does not.',
  },
];

export default function BusinessVisitorPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Business visitors"
        title={
          <>
            Where business visiting ends and{' '}
            <span className="text-gold-300">work begins</span>
          </>
        }
        subtitle={
          <>
            A business visitor may carry out certain activities in Canada without a work permit.
            Step across the line into work, and you are not short a document — you are in breach of
            your status. This page is about knowing exactly where that line runs.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== THE DISTINCTION ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The distinction that matters"
          title="Not a lighter kind of work permit"
        />
        <Prose>
          <p>
            Canadian immigration law separates two things that sound similar and are treated very
            differently. One is <strong>work</strong> — activity that requires authorisation, normally
            a work permit. The other is <strong>business visitor activity</strong> — a defined set of
            international business dealings that a visitor may carry out without one.
          </p>
          <p>
            Business visitor status is not a permit you hold, and not a lighter category of work
            permit you can be granted. It is a description of what you are doing. Either your activity
            falls inside the definition, in which case no permit is needed, or it does not, in which
            case you needed a permit and did not have one.
          </p>
          <p>
            That is why this distinction carries more weight than most of what is written about
            visitor visas. A refused visa costs you an application. Being admitted as a business
            visitor and then doing work is unauthorised work: it can end your stay, and it becomes a
            disclosed fact on every application you ever make afterwards.
          </p>
        </Prose>
      </Section>

      {/* ===================== THE TESTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What officers actually assess"
          title="The tests behind the definition"
          subtitle="The underlying idea is a single one: you are engaging in international business activity in Canada without directly entering the Canadian labour market."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTS.map((t) => (
            <FeatureCard key={t.title} icon={<Icon name={t.icon} />} kicker={t.kicker} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="The centre of gravity has to stay abroad">
            <p>
              Read the three substantive tests together and one picture emerges. Your employer is
              abroad, your pay is abroad, the profits of the activity land abroad, and your presence
              in Canada is a discrete piece of that foreign business’s dealings with Canada. Shift any
              one of those anchors into Canada and the description starts to fail — not because of a
              rule about that one factor, but because the activity has stopped being international and
              started being Canadian employment.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== EACH SIDE OF THE LINE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Examples, side by side"
          title="Which side is your activity on?"
          subtitle="These are illustrations of the principle, not a checklist. Two people can attend the same site for the same week and land on different sides of the line depending on who pays them and what contract they are there under."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-serif text-xl text-ink-900">
              Generally business visitor activity
            </p>
            <ul className="mt-6 space-y-4">
              {VISITOR_SIDE.map(([term, def]) => (
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

          <div>
            <p className="font-serif text-xl text-ink-900">
              Generally work requiring a permit
            </p>
            <ul className="mt-6 space-y-4">
              {WORK_SIDE.map(([term, def]) => (
                <li key={term} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-200 text-ink-700">
                    <Icon name="shield" className="h-4 w-4" />
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

      {/* ===================== HOW IT RUNS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="How it runs in practice"
          title="From invitation to port of entry"
          subtitle="There is no business visitor application to file. The sequence below is about establishing the facts, not about a form."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Characterise the activity honestly',
              body: 'Before anything else, decide what you are actually going to do in Canada, who is paying you for it, and under what contract. If that analysis produces work, the rest of this page does not apply to you.',
            },
            {
              title: 'Get the paperwork from both ends',
              body: 'A letter from your employer outside Canada confirming your role, continued employment and continued pay. A letter from the Canadian business explaining the purpose and duration of the visit.',
            },
            {
              title: 'Assemble the underlying contract',
              body: 'Where the activity depends on a commercial relationship — after-sales service, training on purchased equipment, a purchase mission — the contract, warranty or purchase order is the evidence. Descriptions without documents carry little weight.',
            },
            {
              title: 'Apply for the entry document',
              body: 'A temporary resident visa, or an electronic travel authorisation where your citizenship and circumstances permit it — confirm which applies to you on IRCC’s entry-requirements tool, as those lists are revised periodically. The purpose stated must match the letters.',
            },
            {
              title: 'Show ties and a defined visit',
              body: 'You are still assessed as a genuine temporary visitor: a clear purpose, a defined end date, and reasons you will return. A vague, open-ended business trip is a refusal risk on ordinary visitor grounds.',
            },
            {
              title: 'Be examined at the port of entry',
              body: 'The border services officer decides admission and the terms of your stay. Carry the letters and contracts in hand luggage, and be able to explain in one clear sentence what you will and will not be doing.',
            },
          ].map((s, i) => (
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
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>Using the category as a shortcut to work.</strong> The most damaging one. Someone
            is told that entering as a business visitor lets them start work while a permit is sorted
            out. It does not. The activity is either visitor activity or it is unauthorised work, and
            the intention behind it makes the second version worse rather than better.
          </p>
          <p>
            <strong>Technical work outside the warranty.</strong> A technician travels believing that
            servicing equipment is always permitted. It is permitted where it sits inside the original
            sale, lease, warranty or service agreement. Engaged separately for an installation job, the
            same person needs a permit. The document decides it.
          </p>
          <p>
            <strong>Being paid locally for convenience.</strong> A Canadian client offers to settle
            fees or per-diems directly because it is simpler. It quietly moves the source of
            remuneration into Canada and undermines the basis on which you were admitted.
          </p>
          <p>
            <strong>The visit that never ends.</strong> A defined trip extends, then extends again,
            until the person is in substance running or staffing a Canadian operation. The category
            does not stretch to fit; the description simply stops being true.
          </p>
          <p>
            <strong>Arriving with a story instead of documents.</strong> Officers assess what you can
            show. An articulate explanation with no employer letter, no Canadian letter and no
            contract is a weak position at the port of entry.
          </p>
          <p>
            <strong>Describing it one way on the application and another at the border.</strong> The
            two accounts are compared. A mismatch is not merely awkward — a material misdescription can
            support a finding of misrepresentation and a resulting period of inadmissibility, whether or
            not you meant to mislead. If you have
            already been refused, our page on{' '}
            <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
              refusals
            </Link>{' '}
            and on{' '}
            <Link href="/refusals/gcms-notes" className="font-semibold text-accent-500 link-underline">
              GCMS notes
            </Link>{' '}
            explains how to find out what the officer actually recorded.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this route does not suit" />
        <div className="mt-8">
          <Callout title="If the plan is to work in Canada, this is not it">
            <p>
              Business visitor status does not suit anyone whose real intention is employment in
              Canada, however short. It does not suit a technician engaged for an installation
              contract that is separate from the original sale. It does not suit someone whose Canadian
              client will be paying them. It does not suit a person hoping to arrive, look for work and
              regularise afterwards, and it does not suit anyone who wants an open-ended presence in
              Canada.
            </p>
            <p>
              It also does not help with the ordinary problem of proving you are a genuine visitor. A
              business purpose does not substitute for ties, funds and a credible reason to return —
              those are assessed the same way as on any{' '}
              <Link
                href="/canada-visit-visa"
                className="font-semibold text-accent-500 link-underline"
              >
                visit visa application
              </Link>
              .
            </p>
            <p>
              Where the honest answer is that you need authorisation, the conversation belongs on{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                work permits
              </Link>{' '}
              — including the{' '}
              <Link
                href="/work-permits/lmia-exempt"
                className="font-semibold text-accent-500 link-underline"
              >
                permit-required but LMIA-exempt routes
              </Link>{' '}
              such as{' '}
              <Link
                href="/work-permits/intra-company-transfer"
                className="font-semibold text-accent-500 link-underline"
              >
                intra-company transfers
              </Link>
              , which are frequently what a company actually needs when it thought it needed a business
              visitor. We would rather say that on the first call than let you travel on a description
              that will not hold, which is also why we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Fees, documents and the rule itself" />
        <Prose>
          <p>
            Application fees, biometric requirements, processing information and the current
            operational guidance all change, and we deliberately do not reproduce those figures here.
            Read them at the source on the day you need them.
          </p>
          <p>
            The definition of a business visitor, and the work-permit exemption that goes with it, sit
            in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-187.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . IRCC publishes the current application requirements and fees on its{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/business.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              business visitors pages
            </a>
            , and whether your citizenship calls for a visa or an electronic travel authorisation is set
            out on IRCC’s{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              entry-requirements tool
            </a>
            . Any maximum length of stay, fee or processing figure you see quoted elsewhere should be
            confirmed against those pages on the day you rely on it.
          </p>
        </Prose>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Straight answers" title="The questions people actually ask" />
        <div className="mt-10">
          <FAQ items={FAQS} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <ReviewedBy updated="July 2026" />
        </div>
      </Section>

      <CTASection
        eyebrow="Before you book the flight"
        title="Have the activity assessed before you travel, not at the counter"
        subtitle="Tell us what you will be doing in Canada, who is paying you for it and under what contract. We will tell you honestly whether it sits inside the business visitor definition — and if it does not, what you actually need."
        page={PAGE}
        waMessage="Hi, I’d like to check whether my planned activity in Canada counts as a business visit or needs a work permit."
      />
    </>
  );
}
