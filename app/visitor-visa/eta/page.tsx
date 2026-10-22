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
 * Electronic Travel Authorisation (eTA).
 *
 * The job of this page is to close a false hope rather than open a route.
 * People arrive here having read that Canada has a "quick online authorisation"
 * and hoping it replaces the visitor visa they were refused or fear applying
 * for. For a Pakistani passport holder it does not. The page has to say that
 * plainly, explain the narrow exceptions honestly, and send the reader to the
 * visitor visa page rather than leave them hunting for a shortcut.
 */
export const metadata: Metadata = {
  title: 'Electronic Travel Authorisation (eTA) for Canada',
  description:
    'What an eTA is, and why a Pakistani passport holder normally needs a visitor visa — plus the narrow case where a visa-required national may use one.',
  alternates: { canonical: '/visitor-visa/eta' },
};

const PAGE = 'visitor-visa-eta';

const TWO_SYSTEMS = [
  {
    icon: 'globe' as const,
    kicker: 'Visa-exempt nationality',
    title: 'eTA',
    body: 'An electronic authorisation linked to your passport, applied for online. It is a pre-boarding screening measure for travellers whose nationality does not require a visa for Canada.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Visa-required nationality',
    title: 'Temporary resident visa',
    body: 'A counterfoil placed in your passport after a full application — biometrics, supporting documents, and an officer’s assessment of your purpose, ties and means. Pakistani passport holders sit here.',
  },
  {
    icon: 'plane' as const,
    kicker: 'What decides which',
    title: 'Your nationality, not your itinerary',
    body: 'Which system applies is set by the passport you hold, not by how long you plan to stay, how much you are spending, or how urgent the trip is.',
  },
  {
    icon: 'shield' as const,
    kicker: 'What neither one is',
    title: 'A guarantee of entry',
    body: 'An eTA and a visa both authorise you to travel to Canada. Neither authorises you to enter. A border services officer makes that decision when you arrive.',
  },
];

const STEPS = [
  {
    title: 'Establish which system applies to you',
    body: 'IRCC publishes an entry-requirements tool that takes your nationality, your status in the country you are travelling from, and how you will arrive. That tool — not an agent, not a forum — is the authority on which document you need.',
  },
  {
    title: 'If you are visa-required, apply for the visa',
    body: 'For a Pakistani passport holder this is normally the answer. There is no online authorisation that substitutes for it, and no version of the eTA application that will produce one.',
  },
  {
    title: 'If an exception applies, confirm it in writing',
    body: 'The exceptions turn on documented status — a green card, or a category of national listed by IRCC. Confirm your exact situation against the official criteria before you buy a ticket.',
  },
  {
    title: 'Apply on the official site only',
    body: 'The eTA application is made through IRCC’s own website. Third-party sites replicate the form, charge a markup on top of the government fee, and add nothing.',
  },
  {
    title: 'Travel with the passport it is linked to',
    body: 'An eTA is tied electronically to one passport. Renew or replace that passport and the authorisation does not follow you to the new one.',
  },
];

const FAQS = [
  {
    q: 'I hold a Pakistani passport. Can I apply for an eTA instead of a visitor visa?',
    a: 'Normally no. Pakistan is a visa-required nationality for Canada, which means the visitor visa is the route. The eTA exists for travellers whose nationality does not require a visa, and applying for one you are not eligible for does not create eligibility. No usable authorisation results from it.',
  },
  {
    q: 'I was refused a visitor visa. Can I use an eTA instead?',
    a: 'No. This is the most common reason people reach this page, and it is worth being blunt: the eTA is not an alternative channel, an appeal, or a second attempt. If you were refused, the honest next step is to understand why the officer refused you and whether that concern can be answered.',
  },
  {
    q: 'I am a Pakistani citizen but a permanent resident of the United States. What applies to me?',
    a: 'Documented US permanent resident status changes what is required at the Canadian border, and the rules for that group have themselves changed in recent years. Because the requirement differs by how you arrive and what you can produce, check your exact situation against IRCC’s current entry-requirements tool rather than relying on what applied to someone else, or on what applied a few years ago.',
  },
  {
    q: 'I hold a valid US visitor visa. Does that let me use an eTA?',
    a: 'Only for citizens of a specific set of visa-required countries that IRCC has designated for this arrangement, and only for air travel. Pakistan is not among them. Holding a US visa does not on its own change which document Canada requires of you.',
  },
  {
    q: 'Do I need an eTA if I am only changing planes in Canada?',
    a: 'Transit is governed by its own set of rules rather than treated as an ordinary visit, and IRCC operates a separate transit visa alongside the eTA. Which of the two applies — and whether any transit exemption covers you — depends on your nationality, how you arrive and where you are going. Do not assume that changing planes needs nothing. Check your route on IRCC’s transit page before you book, because the airline enforces this at check-in.',
  },
  {
    q: 'A website is offering to get me an eTA quickly for a fee. Is that legitimate?',
    a: 'The application is made on IRCC’s own website, and the government fee is published there. Sites that charge a premium to submit the same form are reselling something you can do yourself, and some collect passport details without any authority to do so. If a site promises an eTA to a nationality that is not eligible for one, it is selling something that does not exist.',
  },
  {
    q: 'How much does an eTA cost and how long is it valid?',
    a: 'IRCC publishes the current fee and the validity period on its own site, and both are subject to change. We do not print those figures here, because a number that is correct today becomes a liability on a page you might read next year. Take them from canada.ca on the day you apply.',
  },
  {
    q: 'I hold an eTA. Does that mean I will be let into Canada?',
    a: 'No. An eTA authorises you to board a flight to Canada. Admission is decided separately by a border services officer at the port of entry, who may ask about your purpose, your funds and your intention to leave.',
  },
];

export default function EtaPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Electronic Travel Authorisation"
        title={
          <>
            An eTA is not a shortcut around{' '}
            <span className="text-gold-300">a visitor visa</span>
          </>
        }
        subtitle={
          <>
            The eTA exists for travellers whose nationality does not require a visa for Canada.
            Pakistani passport holders are not in that group. Here is what an eTA actually is, the
            narrow exceptions that exist, and why the visitor visa remains the route for most people
            reading this.
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
          eyebrow="The document, plainly"
          title="What an Electronic Travel Authorisation is"
        />
        <Prose>
          <p>
            Canada screens travellers before they board, not only when they land. For people who need
            a visa, that screening happens through the visa application itself. For people whose
            nationality does not require a visa, there was historically no pre-boarding check at all —
            and the eTA was introduced to close that gap.
          </p>
          <p>
            An eTA is an electronic record linked to a specific passport, applied for online, that
            authorises a visa-exempt traveller to board a flight to Canada. It is a light-touch check
            against admissibility and security records. It is not an assessment of your ties, your
            funds, your employment, or your reasons for travelling — because those questions are what
            a visa application is for.
          </p>
          <p>
            That difference is the whole point. The eTA is a thin check because it applies to
            nationalities Canada has decided may travel without an individual visa assessment. It is
            not a faster version of the visa. It is a different instrument, aimed at different people.
          </p>
        </Prose>
      </Section>

      {/* ===================== TWO SYSTEMS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Two systems, set by nationality"
          title="Which one applies is not something you choose"
          subtitle="Almost every difficulty on this subject comes from treating the eTA as an option on a menu rather than as a consequence of the passport you hold."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TWO_SYSTEMS.map((t) => (
            <FeatureCard key={t.title} icon={<Icon name={t.icon} />} kicker={t.kicker} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="Pakistani passport holders are visa-required">
            <p>
              Canada maintains a list of nationalities that may travel without a visa, published and
              kept current by IRCC on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html"
                className="font-semibold text-accent-500 link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                canada.ca
              </a>
              . Pakistan is not on it. For a person travelling on a Pakistani passport, the route to Canada as a visitor
              is a temporary resident visa — an application with biometrics, supporting documents and
              an officer’s assessment behind it.
            </p>
            <p>
              This matters because the eTA is frequently presented online as a quick alternative for
              people who find the visa daunting or who have already been refused. It is not. Submitting
              an eTA application for a nationality that is not eligible does not create an entitlement;
              it produces nothing usable, and it costs you time you may not have before your travel
              date.{' '}
              <Link
                href="/canada-visit-visa"
                className="font-semibold text-accent-500 link-underline"
              >
                Read how the visitor visa actually works
              </Link>
              .
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE NARROW EXCEPTIONS ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Being precise about exceptions"
              title="When a visa-required national might use an eTA"
            />
            <Prose>
              <p>
                There are genuine exceptions, and it would be dishonest to pretend otherwise. They are
                narrow, they turn on documented status rather than on circumstance, and they are worth
                stating carefully because half-remembered versions of them cause a great deal of
                wasted money.
              </p>
              <p>
                The first concerns lawful permanent residents of the United States. Documented US
                permanent residence changes what Canada requires of a traveller regardless of their
                nationality. What exactly is required has itself been revised in recent years and
                differs by mode of arrival, so this is a case to confirm against IRCC’s current
                published requirements rather than against anything you were told previously.
              </p>
              <p>
                The second concerns a designated list of visa-required countries whose citizens may,
                if they hold certain other documents, apply for an eTA instead of a visa for air travel
                only. That list is set by IRCC and changes. Pakistan is not on it.
              </p>
              <p>
                Both exceptions share a shape: they are documentary, they are checkable, and neither
                is available on the basis of merely intending to travel or having travelled widely
                before.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="Things people assume incorrectly" title="What does not qualify you" />
            <ul className="mt-6 space-y-4">
              {[
                ['Strong travel history', 'Visits to the UK, Europe or the Gulf do not change which document Canada requires of a Pakistani passport holder.'],
                ['A short trip', 'A brief visit and a long one are governed by the same nationality rule.'],
                ['An urgent reason', 'Illness in the family, a wedding or a conference date does not move you into the eTA system, however genuine.'],
                ['A confirmed booking', 'A paid ticket and hotel reservation create pressure on you, not an obligation on Canada.'],
                ['A previous Canadian visa', 'Having held one may matter for other purposes, but on its own it does not make a Pakistani passport holder eTA-eligible.'],
              ].map(([term, def]) => (
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

      {/* ===================== SEQUENCE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The sequence"
          title="How to establish what you actually need"
          subtitle="In that order. Most of the harm on this subject is done by people who start at step four."
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
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Treating the eTA as a route around a refusal.</strong> Someone is refused a
            visitor visa, reads that Canada has a simple online authorisation, and applies for that
            instead. Nothing usable comes of it. The underlying refusal — usually a concern about
            purpose, funds or intention to leave — remains entirely unaddressed.
          </p>
          <p>
            <strong>Paying a third-party site.</strong> Many websites replicate the government form,
            charge well above the official fee, and present themselves as an official channel. At
            best you have overpaid for something you could do yourself. At worst you have handed your
            passport details to a party with no authority to hold them.
          </p>
          <p>
            <strong>Assuming a US visa is enough.</strong> A valid US visa helps in some contexts and
            for some nationalities. It does not, on its own, make a Pakistani passport holder eligible
            for a Canadian eTA. People discover this at the airport.
          </p>
          <p>
            <strong>Booking transit through Canada without checking.</strong> A cheaper fare with a
            connection through a Canadian airport can require authorisation that the traveller does not
            hold. The airline enforces this at check-in, and by that point the fare may not be
            refundable.
          </p>
          <p>
            <strong>Renewing the passport and forgetting the link.</strong> For travellers who do
            legitimately hold an eTA, the authorisation is tied to the passport it was issued against.
            A new passport does not carry it forward.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="Who this does not suit" />
        <div className="mt-8">
          <Callout title="For most readers of this page, the eTA is not your document">
            <p>
              If you hold a Pakistani passport, are travelling from Pakistan, and hold no permanent
              residence in another country that changes the position, the eTA is not available to you
              and there is no application you can make to obtain one. That is the honest answer, and it
              is better received now than at an airline counter.
            </p>
            <p>
              It also does not suit anyone hoping the online form is a lighter test than the visa. It
              is lighter precisely because it applies to people Canada has already decided not to
              assess individually. Nobody moves into that group by applying.
            </p>
            <p>
              What is worth your time instead is a properly built visitor visa application, or — if you
              have already been refused — understanding what the officer actually recorded before you
              apply again.{' '}
              <Link
                href="/canada-visit-visa"
                className="font-semibold text-accent-500 link-underline"
              >
                The visitor visa route
              </Link>
              ,{' '}
              <Link
                href="/canada-visa-refused"
                className="font-semibold text-accent-500 link-underline"
              >
                what to do after a refusal
              </Link>
              , or{' '}
              <Link
                href="/refusals/gcms-notes"
                className="font-semibold text-accent-500 link-underline"
              >
                the officer’s own notes on your file
              </Link>
              . We publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>{' '}
              because the decision is never ours to make.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== NUMBERS AND SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Fees, eligibility lists and requirements" />
        <Prose>
          <p>
            The eTA fee, the validity period, the list of visa-exempt nationalities and the designated
            list of visa-required countries eligible for an eTA by air are all published by IRCC and
            all change. We deliberately do not reproduce them here.
          </p>
          <p>
            IRCC publishes the current position on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            , including an entry-requirements tool that tells you which document your nationality and
            circumstances require. Who may apply — including the designated visa-required countries
            and the position of US permanent residents — is set out on IRCC’s{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              eTA eligibility pages
            </a>
            , and connecting flights are covered separately under{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/transit.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              transit through Canada
            </a>
            . The underlying authority sits in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            . Read both at the source, on the day you need them, and apply only through the official
            site.
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
        eyebrow="Before you pay any website"
        title="Find out which document your situation actually requires"
        subtitle="Tell us your nationality, where you are travelling from, what status you hold there and how you plan to arrive. We will tell you plainly whether an eTA is even available to you — and if it is not, what the realistic route is."
        page={PAGE}
        waMessage="Hi, I’d like to know whether I need a Canadian eTA or a visitor visa in my situation."
      />
    </>
  );
}
