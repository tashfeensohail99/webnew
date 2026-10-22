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
 * Invitation letters for Canadian visitor visa applications.
 *
 * The correction this page exists to make: applicants from Pakistan routinely
 * treat the invitation letter as the application. It is one supporting document
 * among many, it binds nobody, and the host's own evidence usually carries more
 * weight than the letter's wording. Everything here follows from that.
 */
export const metadata: Metadata = {
  title: 'Invitation Letters for a Canadian Visitor Visa',
  description:
    'What an invitation letter is, what it is not, what a useful one contains — and why a strong letter cannot rescue a weak visitor visa application.',
  alternates: { canonical: '/visitor-visa/invitation-letter' },
};

const PAGE = 'visitor-visa-invitation-letter';

const WHAT_IT_IS_NOT = [
  {
    icon: 'shield' as const,
    kicker: 'Not a guarantee',
    title: 'It does not decide the visa',
    body: 'An officer weighs the whole application. A letter from a host in Canada is evidence about the visit — it does not oblige anyone to issue a visa, and it does not oblige a border officer to admit you on arrival.',
  },
  {
    icon: 'scale' as const,
    kicker: 'Not an undertaking',
    title: 'It is not a legal sponsorship',
    body: 'IRCC states that writing a letter of invitation does not make the host legally responsible for the visitor once they are in Canada. It is not sponsorship. It is still a statement the host must make in good faith and be prepared to stand behind.',
  },
  {
    icon: 'doc' as const,
    kicker: 'Not mandatory',
    title: 'Many applications succeed without one',
    body: 'A visitor application is not invalid because no host wrote a letter. Tourism, conferences and self-funded trips are routinely approved on the applicant’s own evidence alone.',
  },
  {
    icon: 'user' as const,
    kicker: 'Not about the host',
    title: 'The decision is still about you',
    body: 'Your ties, your funds, your travel history and the coherence of your stated purpose carry the file. The host’s letter explains context around those things; it does not substitute for them.',
  },
];

const CONTENTS = [
  {
    title: 'Who is writing, and their status',
    body: 'The host’s full name, date of birth, address and contact details, and whether they are a Canadian citizen, a permanent resident, or in Canada on a temporary status. Status should be evidenced, not merely asserted.',
  },
  {
    title: 'Who is being invited',
    body: 'Your full name as it appears in your passport, date of birth, address, and your relationship to the host — stated precisely rather than as “family friend” or “relative”.',
  },
  {
    title: 'Why you are coming',
    body: 'The actual reason for the visit: a wedding, a graduation, a birth, medical support, a conference, or simply a holiday. Vagueness here is what makes a letter read as manufactured.',
  },
  {
    title: 'How long, and where you will stay',
    body: 'The intended arrival and departure period, and whether you will stay with the host or elsewhere. If the host is providing accommodation, that should be said plainly.',
  },
  {
    title: 'Who is paying for what',
    body: 'A clear split: what you are funding yourself and what, if anything, the host is covering. Overstating host support you cannot evidence is worse than claiming none.',
  },
  {
    title: 'Signature and date',
    body: 'Signed and dated by the host. IRCC notes that some visa offices ask for the letter to be notarised and advises contacting the office handling your application to find out — check what applies before assuming it is optional.',
  },
];

const FAQS = [
  {
    q: 'Do I need an invitation letter to apply for a Canadian visitor visa?',
    a: 'No. It is a supporting document, not a requirement of the application. Where you have a genuine host and a family-based reason for the trip, a letter usually helps explain the visit. Where you are travelling as a tourist on your own funds, the absence of one is unremarkable.',
  },
  {
    q: 'Does an invitation letter mean the visa will be approved?',
    a: 'No. IRCC states plainly that a letter of invitation does not guarantee a visa will be issued. Officers assess whether you are a genuine temporary visitor who will leave at the end of the authorised stay, and a letter is one input into that assessment. Applications with careful, well-drafted letters are refused where the applicant’s own circumstances did not support a temporary visit.',
  },
  {
    q: 'Is the host legally responsible for me?',
    a: 'IRCC’s own guidance says that writing a letter of invitation does not make the host legally responsible for the visitor once they are in Canada. It also says the host should write the letter in good faith, tell the truth, and intend to keep the promises made in it. So it is not the formal undertaking that sponsoring a family member for permanent residence creates — but a host who makes claims that turn out to be false has put their own credibility in front of an officer.',
  },
  {
    q: 'Does the letter need to be notarised?',
    a: 'IRCC does not impose a blanket notarisation requirement, but its guidance says some visa offices do, and it tells hosts to contact the office handling the visitor’s application to find out. Check the instructions that apply to the office handling applications from Pakistan before deciding. Notarising a letter proves who signed it — it does not make the contents more persuasive.',
  },
  {
    q: 'My host has a strong income. Is that enough?',
    a: 'It helps establish that the visit is affordable, but it does not establish that you will return. Those are different questions and officers treat them separately. Applicants often build a file around the host and leave their own side of it thin, which is exactly the imbalance that draws a refusal.',
  },
  {
    q: 'Should the letter promise that I will return home?',
    a: 'A host can say what they understand your plans to be. They cannot vouch for what you will do, and an officer knows that. What actually addresses the question is your own evidence — employment, business, property, dependants, prior travel that you returned from.',
  },
  {
    q: 'I was refused before. Will a better invitation letter fix it?',
    a: 'Rarely on its own. A refusal is usually about the officer’s assessment of your ties, your funds, or the credibility of the stated purpose. Until you know which, rewriting the letter is guesswork. The refusal notes are the place to start.',
  },
  {
    q: 'Can I use a template I found online?',
    a: 'A template can help with structure. The risk is that templates carry sentences that do not apply to you, and a letter containing facts that do not match the rest of the file is worse than a plain one that does. Anything in the letter should be something the host would say the same way if asked directly.',
  },
];

export default function InvitationLetterPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Visitor visa"
        title={
          <>
            An invitation letter is evidence,{' '}
            <span className="text-gold-300">not a decision</span>
          </>
        }
        subtitle={
          <>
            A letter from a host in Canada supports a visitor application. It does not guarantee a
            visa, it does not bind the host to anything, and it cannot carry an application that is
            weak on its own terms. Here is what a useful one does, and what it cannot do.
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
          eyebrow="Plainly"
          title="What an invitation letter actually is"
        />
        <Prose>
          <p>
            An invitation letter is a letter written by someone in Canada — usually a relative,
            sometimes a friend or a business contact — confirming that they have invited you, what
            the visit is for, how long it is expected to last, and what arrangements have been made
            for where you will stay and who is paying.
          </p>
          <p>
            That is the whole of it. It is a piece of supporting evidence submitted alongside your
            application. It sits next to your passport, your financial documents, your employment or
            business records, and your explanation of purpose. It does not sit above them.
          </p>
          <p>
            The reason this needs saying is that a great many applicants from Pakistan treat the
            letter as the centre of the file. Considerable effort goes into its wording, and
            comparatively little into the evidence that officers actually weigh. In our consultations
            that inversion is a recurring shape in refused visitor applications.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT IT IS NOT ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Four common misunderstandings"
          title="What an invitation letter is not"
          subtitle="Each of these comes up often enough in consultations that it is worth stating directly."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_IT_IS_NOT.map((w) => (
            <FeatureCard key={w.title} icon={<Icon name={w.icon} />} kicker={w.kicker} title={w.title}>
              {w.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="The letter cannot fix a weak application">
            <p>
              This is the single most useful thing on this page. If an officer is not satisfied that
              you are a genuine temporary visitor — because your funds do not support the trip you
              have described, because your ties to Pakistan are thin, because your stated purpose does
              not hold together — then no amount of care in the invitation letter changes that
              conclusion. The letter is not the part of the file that answers those questions.
            </p>
            <p>
              The reverse also holds: plain wording is not usually where a sound application comes
              apart. Put the effort where the decision is made. Nobody — us included — can tell you how
              an officer will decide.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== WHAT A USEFUL ONE CONTAINS ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="If you are writing one"
          title="What a useful letter contains"
          subtitle="Six things, stated accurately. Length is not the point — a short letter that matches the rest of the file beats a long one that does not."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENTS.map((c, i) => (
            <li key={c.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-medium text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink-900">{c.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{c.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===================== HOST DOCUMENTS ===================== */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The part people underweight"
              title="The host’s documents usually matter more than the host’s letter"
            />
            <Prose>
              <p>
                A letter is an assertion. The documents behind it are what allow an officer to accept
                the assertion. A host who writes that they are a Canadian citizen, will accommodate
                you at their home, and will cover part of the cost has made three claims — each of
                which is either evidenced or not.
              </p>
              <p>
                Where the host is offering financial support, that support has to be visible in
                something an officer can read. Where the host is offering accommodation, the address
                and the host’s connection to it should be consistent with everything else in the file.
                A letter that promises more than the accompanying documents show is a liability, not
                an asset.
              </p>
              <p>
                Requirements differ between offices and are revised from time to time. IRCC publishes
                the current guidance for letters of invitation on its own site, and that is the version
                to follow on the day you file.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What the host is showing" title="In kind, not in numbers" />
            <ul className="mt-6 space-y-4">
              {[
                ['Status in Canada', 'Evidence of citizenship, permanent residence, or the temporary status the host actually holds.'],
                ['Identity and address', 'That the host is a real, locatable person at the address given in the letter.'],
                ['Capacity to support', 'If support is offered, documentation consistent with the level of support claimed — nothing more.'],
                ['Accommodation', 'That the household described can plausibly host you for the stated period.'],
                ['Relationship', 'Something that corroborates the stated relationship, where one exists on paper.'],
                ['Consistency', 'That every fact in the letter agrees with every fact in your own application.'],
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

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see"
        />
        <Prose>
          <p>
            <strong>The letter contradicts the application.</strong> The host writes that you are
            coming for a wedding in one month; your forms give a different purpose or a different
            period. Small inconsistencies between the letter and the rest of the file do real damage,
            because they invite the officer to doubt the whole account rather than one document.
          </p>
          <p>
            <strong>Promised support that nobody can evidence.</strong> A host writes that they will
            cover all costs, then provides nothing that shows they can. The application is now weaker
            than if the letter had simply said you were funding the trip yourself.
          </p>
          <p>
            <strong>A relationship stated loosely.</strong> “Family friend” and “uncle” used
            interchangeably, or a relationship that does not appear anywhere else in the documents.
            Where the relationship is real, describe it exactly; where it is distant, say so.
          </p>
          <p>
            <strong>A letter written by someone other than the host.</strong> Agent-drafted letters
            tend to share phrasing, and phrasing that appears across unrelated applications is
            noticeable. Worse, the host has now signed statements they did not compose and may not be
            able to stand behind.
          </p>
          <p>
            <strong>Treating the letter as the remedy for a previous refusal.</strong> If you were
            refused before, the reasons are recorded. Rewriting the invitation letter without knowing
            what the officer actually found is guesswork, and it is a familiar way to spend money on a
            second application that runs into the same problem as the first.
          </p>
          <p>
            <strong>Anything untrue.</strong> An invented host, an invented event, or a fabricated
            relationship is misrepresentation. It carries consequences well beyond this application,
            for you and potentially for the person who signed the letter.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Being honest about fit" title="When an invitation letter is the wrong focus" />
        <div className="mt-8">
          <Callout title="If the letter is the strongest part of your file, you have a problem">
            <p>
              An invitation letter does not suit an applicant whose real difficulty is elsewhere. If
              your funds do not support the trip, if you have no employment or business to return to,
              if your stated purpose does not match your circumstances, or if you have a refusal
              history you have not yet understood — the letter is not the document that answers any of
              that, and polishing it is time spent on the wrong thing.
            </p>
            <p>
              It is also the wrong focus for someone whose real objective is to settle in Canada. To be
              clear about the law: wanting permanent residence does not by itself disqualify you from a
              visitor visa. The Immigration and Refugee Protection Act expressly provides that an
              intention to become a permanent resident does not prevent someone from becoming a
              temporary resident, provided the officer is satisfied they will leave Canada by the end of
              the period authorised for their stay. What that means in practice is that the officer must
              still be satisfied about departure — and a host’s letter is not the document that satisfies
              it. If settling is the goal, the invitation letter is not the lever;{' '}
              <Link
                href="/immigration-programs"
                className="font-semibold text-accent-500 link-underline"
              >
                the permanent routes
              </Link>{' '}
              are where that work belongs.
            </p>
            <p>
              If you have been refused, start with the reasons rather than the paperwork:{' '}
              <Link
                href="/refusals/gcms-notes"
                className="font-semibold text-accent-500 link-underline"
              >
                order the officer’s notes
              </Link>
              . If you are inviting a parent or grandparent for a long stay, the{' '}
              <Link
                href="/visitor-visa/super-visa"
                className="font-semibold text-accent-500 link-underline"
              >
                super visa
              </Link>{' '}
              is a different application with its own requirements. And we publish a{' '}
              <Link
                href="/no-guarantee-policy"
                className="font-semibold text-accent-500 link-underline"
              >
                no-guarantee policy
              </Link>{' '}
              because the decision is an officer’s, never ours.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Where the current details live" title="Guidance, forms and office instructions" />
        <Prose>
          <p>
            Document checklists, office-specific instructions and the question of whether a letter must
            be sworn or notarised all change, and they differ between visa offices. We deliberately do
            not reproduce those details here, because a checklist that is right today misleads someone
            reading this page next year.
          </p>
          <p>
            IRCC publishes its current guidance on{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              letters of invitation for visitors
            </a>
            , with separate guidance for{' '}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/business/bring-business-guests/letter-invitation.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              business visitors
            </a>
            . The temporary resident provisions themselves sit in the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Regulations
            </a>
            , and the dual-intent provision described above is section 22(2) of the{' '}
            <a
              href="https://laws-lois.justice.gc.ca/eng/acts/i-2.5/"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration and Refugee Protection Act
            </a>
            . Read them at the source, on the day you need them.
          </p>
          <p>
            For the wider application, see our overview of the{' '}
            <Link href="/canada-visit-visa" className="font-semibold text-accent-500 link-underline">
              Canadian visit visa
            </Link>
            , and if you have already been refused, our page on{' '}
            <Link href="/canada-visa-refused" className="font-semibold text-accent-500 link-underline">
              what to do after a refusal
            </Link>
            .
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
        eyebrow="Before you redraft the letter again"
        title="Find out whether the letter is really what is holding your application back"
        subtitle="Tell us who is inviting you, why you are travelling, and whether you have been refused before. We will give you our honest read of where your file is weakest. We cannot promise an outcome, and no one who does is being straight with you."
        page={PAGE}
        waMessage="Hi, I’d like help with an invitation letter for a Canadian visitor visa application."
      />
    </>
  );
}
