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
 * Provincial / territorial attestation letters (PAL / TAL).
 *
 * The job of this page is sequencing. Applicants from Pakistan routinely try to
 * file a study permit before the attestation letter exists, or believe the letter
 * is something a consultant can obtain for them. Neither is true. Everything here
 * is deliberately structural — the exemption list and the allocation figures
 * change, so we name them and link the source rather than printing them.
 */
export const metadata: Metadata = {
  title: 'Provincial Attestation Letter (PAL/TAL) Explained',
  description:
    'What a provincial attestation letter is, who issues it, where it sits in the study permit sequence, and why a consultant cannot get it for you.',
  alternates: { canonical: '/study-in-canada/provincial-attestation-letter' },
};

const PAGE = 'study-provincial-attestation-letter';

const WHO_DOES_WHAT = [
  {
    icon: 'building' as const,
    kicker: 'The province or territory',
    title: 'Issues the letter',
    body: 'Each province and territory administers its own share of study permit applications and decides how that share is distributed among its institutions. The attestation letter is issued under that authority.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Your institution',
    title: 'Passes it to you',
    body: 'In most provinces the designated learning institution requests and delivers the letter to admitted students, so you go through the school rather than the province. Quebec works differently — see below.',
  },
  {
    icon: 'user' as const,
    kicker: 'You',
    title: 'Accept and pay first',
    body: 'Most institutions issue a letter only after you have accepted the offer and paid tuition — in part or in full. Until you commit, there is usually nothing to issue.',
  },
  {
    icon: 'shield' as const,
    kicker: 'IRCC',
    title: 'Checks it before processing',
    body: 'Where the letter is required, IRCC will not accept the application into processing without it. That is a completeness check that happens before any officer assesses your case.',
  },
];

const STEPS = [
  {
    title: 'Apply to a designated learning institution',
    body: 'Only a designated learning institution can support a study permit. Confirm the school and the campus are designated before you pay anything.',
  },
  {
    title: 'Receive and accept a letter of acceptance',
    body: 'The offer comes first. Nothing downstream can start until an institution has admitted you to a specific programme.',
  },
  {
    title: 'Pay tuition as the institution requires',
    body: 'Most institutions release an attestation letter only once a deposit or full tuition has been paid. This is where a large, non-trivial payment usually happens.',
  },
  {
    title: 'The institution issues your attestation letter',
    body: 'The letter names you and confirms you have been counted within the province or territory. Check that your name, date of birth and address match your passport and your application exactly.',
  },
  {
    title: 'File the study permit application with it attached',
    body: 'The attestation letter goes in with everything else — acceptance letter, proof of funds, identity documents, and your account of why this programme makes sense for you.',
  },
  {
    title: 'IRCC accepts the file, then assesses it',
    body: 'Acceptance into processing is not approval. The substantive assessment of your finances, your study plan and your intentions still lies ahead.',
  },
];

const FAQS = [
  {
    q: 'Can you get a PAL for me?',
    a: 'No, and neither can any other consultant. The letter is issued by a province or territory and delivered through the institution that admitted you. There is no side channel, no fee that produces one, and no application you or we can file directly for it. Anyone quoting you a price for a PAL is selling something that does not work the way they are describing.',
  },
  {
    q: 'Can I file my study permit application and add the letter later?',
    a: 'Where the letter is required, no. An application submitted without it is treated as incomplete and is not accepted into processing — it is returned rather than assessed. Practically, that means lost time in an admissions cycle you may not be able to recover.',
  },
  {
    q: 'Do I need one if I am applying to extend a permit I already hold?',
    a: 'Not necessarily. Applicants extending from within Canada at the same institution and the same level of study have fallen outside the requirement — note that both conditions matter, so moving up a level, or moving school, is not the same case. Because the exception list is revised, confirm your own situation against IRCC’s current page rather than against advice from a previous intake.',
  },
  {
    q: 'How many letters does my province issue and what is the cut-off?',
    a: 'Allocations are set centrally and distributed by each province or territory, and both the totals and the distribution rules are revised. We do not publish those figures, because a number that is right today misleads whoever reads this page next year. IRCC and the relevant provincial ministry publish the current position.',
  },
  {
    q: 'My institution says it has run out of attestation letters. What now?',
    a: 'That is a genuine constraint, not something to appeal. The realistic options are a later intake at the same institution, or a different institution or province with capacity. Before switching, check that the new programme still makes sense on its own terms — a hurried change of school is a common reason an application later reads as unconvincing.',
  },
  {
    q: 'Is the attestation letter a guarantee my study permit will be approved?',
    a: 'No. It confirms you have been counted within a province or territory. It says nothing about your funds, your academic history, the logic of your study plan, or whether an officer is satisfied you will leave at the end of your authorised stay. Refusals after an attestation letter has been issued are ordinary.',
  },
  {
    q: 'The name on my letter does not match my passport. Does it matter?',
    a: 'Yes. Mismatched names, dates of birth or addresses across the acceptance letter, the attestation letter and the application forms cause avoidable problems. Ask the institution to correct the letter before you file, not afterwards.',
  },
];

export default function ProvincialAttestationLetterPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Study permits"
        title={
          <>
            The attestation letter comes{' '}
            <span className="text-gold-300">before your application</span>
          </>
        }
        subtitle={
          <>
            A provincial or territorial attestation letter confirms a province has counted you within
            its share of study permit applications. Where it applies, a study permit application filed
            without it is not assessed at all — it is returned.
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
          title="What a PAL or TAL actually is"
        />
        <Prose>
          <p>
            Canada limits how many study permit applications it will process, and distributes that
            capacity among the provinces and territories. Each province and territory then decides how
            its share is used across its own institutions. A provincial attestation letter — a
            territorial attestation letter, in the territories — is the document that records that you
            have been counted within that share.
          </p>
          <p>
            It is a short letter. It identifies you by name, date of birth and current residential
            address, and confirms that a place within the province or territory has been attributed to
            you. That is its entire function.
          </p>
          <p>
            The stated rationale, when the measure was introduced, was that international student
            numbers had grown faster than housing, health services and institutional capacity in
            several provinces. Whatever the reasoning, the effect is the same: the attestation letter
            puts a provincial hand on the volume before applications reach IRCC.
          </p>
          <p>
            What it is not: an approval, an assessment of you, or an opinion on your file. It is a
            capacity check, and nothing more.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO DOES WHAT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Whose document is whose"
          title="Four parties, and none of them is your consultant"
          subtitle="This is the point applicants from Pakistan are most often misled about before they reach us."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_DOES_WHAT.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="No one can obtain an attestation letter for you">
            <p>
              The letter is issued under provincial or territorial authority and handed to admitted
              students through their institution. There is no separate application an individual or a
              representative can file, and no fee that produces one outside that route.
            </p>
            <p>
              So an offer to supply a PAL for a price is either a charge for something that will arrive
              anyway once you accept an offer and pay tuition, or it is a fabricated document. A
              fabricated attestation letter is misrepresentation, and misrepresentation carries a bar
              on future applications that will outlast whatever course you were trying to start.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== THE SEQUENCE ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The sequence"
          title="Where the letter sits in the order of events"
          subtitle="The order matters more than anything else on this page. You cannot reverse steps three and five."
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
        <Prose>
          <p>
            Two consequences follow from that order. First, the money leaves your hands before the
            immigration decision is made — you pay tuition to obtain the letter, and only then does
            IRCC look at your file. Understand the institution’s refund policy before you pay, because
            that policy, not your application, determines what you recover if the permit is refused.
          </p>
          <p>
            Second, an incomplete application is not a slow application. Where the letter is required
            and absent, the file is not queued behind others — it is returned, and you begin again in a
            later cycle.
          </p>
        </Prose>
      </Section>

      {/* ===================== EXEMPTIONS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Exceptions"
          title="Who does not need one"
        />
        <Prose>
          <p>
            The requirement has never applied to everyone. Broadly, the exceptions fall into
            recognisable categories rather than a single rule:
          </p>
          <ul>
            <li>
              <strong>Primary and secondary school students.</strong> Applicants for schooling below
              the post-secondary level have sat outside the requirement.
            </li>
            <li>
              <strong>Certain graduate-level applicants.</strong> IRCC has narrowed the requirement for
              some master’s and doctoral applicants at public institutions. This is precisely the kind
              of exception that has been revised more than once — confirm it against the current
              official page before you rely on it.
            </li>
            <li>
              <strong>Exchange students.</strong> Students studying under an exchange arrangement
              between their home institution and a Canadian designated learning institution, who do not
              pay tuition to the Canadian institution.
            </li>
            <li>
              <strong>Holders of certain Government of Canada scholarships.</strong> Recipients of
              scholarships administered by Global Affairs Canada.
            </li>
            <li>
              <strong>Some applicants already in Canada.</strong> Including people extending a permit
              at the same institution and the same level of study, and applicants covered by temporary
              public policies. Both conditions have mattered: changing school or moving up a level is
              treated differently from simply continuing.
            </li>
          </ul>
          <p>
            <strong>Quebec is a separate route.</strong> If you are going to Quebec, the attestation
            function is carried by the Quebec Acceptance Certificate (CAQ) issued by the provincial
            ministry, which you apply for rather than receive automatically from your school — and
            the certificate has to carry the attestation wording for IRCC to accept it as such. Confirm
            the current position with the ministry and your institution before you file, and see our{' '}
            <Link
              href="/quebec-immigration"
              className="font-semibold text-accent-500 link-underline"
            >
              Quebec immigration
            </Link>{' '}
            page.
          </p>
          <p>
            If you believe an exception applies to you, you must show it. An application that arrives
            without an attestation letter and without evidence of the exception is treated the same way
            as one that simply forgot the letter.
          </p>
          <p>
            The authoritative list is{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              IRCC’s
            </a>
            , and it has changed more than once — read it on the day you file, not on the strength of
            what a cousin was told two intakes ago.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Paying an agent for a letter.</strong> Either the agent charges you for something
            the institution would have issued anyway, or the document is fabricated. The second outcome
            is far worse than the wasted fee.
          </p>
          <p>
            <strong>Filing before the letter exists.</strong> Applicants under time pressure submit and
            hope to supply the letter afterwards. Where it is required, the file is returned rather than
            held open.
          </p>
          <p>
            <strong>Details that do not match.</strong> A name transliterated differently on the
            attestation letter than on the passport, or an old address, creates avoidable friction. Fix
            it with the institution before filing.
          </p>
          <p>
            <strong>Treating the letter as the hard part.</strong> It is not. The substantive risks in a
            Pakistani study permit application are usually{' '}
            <Link
              href="/study-in-canada/proof-of-funds"
              className="font-semibold text-accent-500 link-underline"
            >
              proof of funds
            </Link>{' '}
            and whether the study plan holds together. Applicants who relax once the letter arrives are
            often the ones who are{' '}
            <Link
              href="/study-in-canada/refusals"
              className="font-semibold text-accent-500 link-underline"
            >
              refused
            </Link>{' '}
            later.
          </p>
          <p>
            <strong>Switching institutions to chase availability.</strong> Moving to whichever school
            still has capacity, in a programme unrelated to your background, reads badly to an officer
            assessing why you are going. Capacity is a real constraint, but it is a poor reason for a
            career change.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="When this is the wrong thing to be focused on" />
        <div className="mt-8">
          <Callout title="If the letter is your only obstacle, you may be looking at the wrong problem">
            <p>
              We regularly speak to people who have organised their entire plan around obtaining an
              attestation letter, when the weaker part of their file is elsewhere: funds that cannot be
              explained, a programme that does not follow from anything they have studied or done, or a
              refusal history that has not been addressed.
            </p>
            <p>
              The route also does not suit someone whose real objective is to work in Canada rather than
              to study. Tuition paid to obtain a letter is money spent on an education you did not want,
              and officers assess study plans on whether they make sense. If work is the goal, the
              honest conversation is about{' '}
              <Link href="/work-permits" className="font-semibold text-accent-500 link-underline">
                work permit routes
              </Link>{' '}
              or{' '}
              <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
                Express Entry
              </Link>
              , not about which province still has capacity.
            </p>
            <p>
              And if you cannot afford to lose the tuition deposit should the permit be refused, pause
              before paying it. We would rather tell you that on the first call. We publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>{' '}
              for the same reason.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Where the current details live" title="Allocations, exceptions and provincial rules" />
        <Prose>
          <p>
            Allocation totals, the distribution between institutions, and the list of exceptions are all
            revised — sometimes between intakes. We deliberately do not print those figures here,
            because a number that is correct today becomes a liability on a page you might read a year
            from now.
          </p>
          <p>
            IRCC publishes the current requirement and the current exception list on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            . How your particular letter is obtained is set by the province or territory you are going
            to, and administered by your institution — so the international student office at the school
            that admitted you is the second place to check.
          </p>
          <p>
            For the surrounding requirements, see our pages on the{' '}
            <Link
              href="/study-in-canada/study-permit"
              className="font-semibold text-accent-500 link-underline"
            >
              study permit itself
            </Link>{' '}
            and on{' '}
            <Link
              href="/study-in-canada/designated-learning-institutions"
              className="font-semibold text-accent-500 link-underline"
            >
              designated learning institutions
            </Link>
            .
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
        eyebrow="Before you pay a tuition deposit"
        title="Check the whole application, not just the letter"
        subtitle="Tell us the institution, the programme and how your studies will be funded. We will tell you honestly whether the application is worth filing — and if it is not, what would need to change first."
        page={PAGE}
        waMessage="Hi, I have a question about the provincial attestation letter for my Canadian study permit."
      />
    </>
  );
}
