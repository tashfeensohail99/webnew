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
 * Quebec immigration.
 *
 * The job of this page is to stop people applying to Quebec as though it were
 * another province of Canada with another provincial nominee stream. It is not.
 * Quebec selects its own economic immigrants under an accord with Ottawa, its
 * certificate sits outside Express Entry, and French is not a bonus there —
 * for most economic routes it is the entry condition. Saying that plainly saves
 * more money than any amount of encouragement.
 */
export const metadata: Metadata = {
  title: 'Quebec Immigration',
  description:
    'Quebec selects its own economic immigrants. The two-stage structure, why the Quebec certificate sits outside Express Entry, and why French is decisive.',
  alternates: { canonical: '/quebec-immigration' },
};

const PAGE = 'quebec-immigration';

const TWO_STAGE = [
  {
    icon: 'building' as const,
    kicker: 'Stage one · Quebec',
    title: 'Selection',
    body: 'Quebec’s immigration ministry decides whether it wants you as an economic immigrant, against its own criteria. If it does, it issues a Quebec selection certificate — the Certificat de sélection du Québec, or CSQ.',
  },
  {
    icon: 'shield' as const,
    kicker: 'Stage two · Ottawa',
    title: 'Admissibility',
    body: 'IRCC then decides permanent residence. At this stage the questions are admissibility ones — medical, criminality, security, identity, genuineness of documents — not whether your skills fit.',
  },
  {
    icon: 'scale' as const,
    kicker: 'The division',
    title: 'Neither replaces the other',
    body: 'Quebec does not grant permanent residence and Ottawa does not second-guess Quebec’s selection. You need both decisions. A certificate is a step, not an outcome.',
  },
  {
    icon: 'globe' as const,
    kicker: 'The consequence',
    title: 'A separate system',
    body: 'Because selection is Quebec’s, the federal economic system does not run there. Quebec routes and the rest of Canada’s routes are not interchangeable, and profiles do not transfer between them.',
  },
];

const STEPS = [
  {
    title: 'Decide whether Quebec is genuinely where you intend to live',
    body: 'Quebec selection is for people who intend to settle in Quebec. Applying there because you think it is an easier door, with no intention of staying, is a misrepresentation problem rather than a strategy.',
  },
  {
    title: 'Establish your French honestly',
    body: 'Sit a recognised French test, or confirm you hold a qualification Quebec accepts, before you build a plan around Quebec. Quebec assesses French on its own scale and publishes what it requires. Assess it first, not last.',
  },
  {
    title: 'Identify which Quebec route, if any, fits',
    body: 'Quebec runs its own economic routes — skilled worker selection, routes built around graduating or working in Quebec, and business categories. Each has its own conditions. Quebec opens, closes and restructures these itself.',
  },
  {
    title: 'Enter Quebec’s expression-of-interest system',
    body: 'Skilled worker selection currently runs through an expression-of-interest portal operated by Quebec’s immigration ministry, which you file a profile into and enter a pool. Being in the pool is not an application. Quebec invites from it on its own terms; nobody outside Quebec controls or predicts that. Confirm the current portal and process on quebec.ca before you begin.',
  },
  {
    title: 'File the selection application if invited',
    body: 'An invitation lets you submit a full application for permanent selection, with the evidence behind everything you claimed — language results, diplomas, work history, civil documents.',
  },
  {
    title: 'Apply to IRCC once you hold the certificate',
    body: 'With a certificate in hand you apply federally for permanent residence in the Quebec-selected category. Medicals, police certificates and admissibility are assessed here.',
  },
];

const FAQS = [
  {
    q: 'Can I use my Express Entry profile to immigrate to Quebec?',
    a: 'No. Express Entry manages the federal economic programmes, and some provinces outside Quebec run nomination streams that connect to it. Quebec sits outside that system entirely: it selects under its own accord with Canada, through its own portal, with its own criteria. A high federal score does nothing for a Quebec application, and Quebec selection does not produce a federal Express Entry invitation.',
  },
  {
    q: 'Is there a Quebec provincial nominee programme?',
    a: 'No. The provincial nominee framework applies to the other provinces and territories, which nominate candidates for the federal government to select. Quebec does not nominate — it selects, which is a stronger and structurally different power. If you see a "Quebec PNP" described anywhere, treat it as a sign the source has not checked how Quebec actually works.',
  },
  {
    q: 'Can I immigrate to Quebec without French?',
    a: 'For most Quebec economic routes, realistically no. French is not a bonus factor there in the way English or French is in the federal system — it is generally a condition of selection, at levels Quebec sets and publishes. There are limited situations where French is less central, but building a plan around finding one is usually a way of avoiding the real answer.',
  },
  {
    q: 'Which French test do I need, and what level?',
    a: 'Quebec accepts specific French tests and diplomas and measures results against its own Échelle québécoise scale, with different requirements depending on the route and the skill level of your occupation. The list of accepted tests and the required levels are published by Quebec’s immigration ministry and are revised from time to time. Read them at the source rather than from a summary.',
  },
  {
    q: 'Can I get selected by Quebec and then settle in Ontario or Alberta?',
    a: 'Once you are a permanent resident, mobility rights are real — but that is not the point. Quebec selects on the basis that you intend to settle there, and you sign statements to that effect. Declaring an intention you do not hold risks a misrepresentation finding, with consequences that reach into the federal stage. That is territory for a licensed representative, not a website. Choose Quebec because you want Quebec.',
  },
  {
    q: 'Do I need a Quebec certificate to study or work there temporarily?',
    a: 'Temporary routes are handled differently from permanent selection. Quebec issues its own acceptance certificate — the CAQ — for many study and some temporary work situations, which sits alongside the federal permit rather than replacing it. Check whether your specific situation needs one before you apply federally, because the order matters.',
  },
  {
    q: 'Can Quebec close a route or stop accepting applications?',
    a: 'Yes. Quebec sets its own intake and can pause, cap or restructure categories, including in family sponsorship, on its own timetable and without reference to federal planning. This is one reason we do not publish the current state of Quebec’s categories on this page. Confirm what is open on the day you apply.',
  },
  {
    q: 'Can you guarantee a Quebec selection certificate?',
    a: 'No, and nobody honestly can. Two separate governments make two separate decisions, and neither is ours. What we can do is tell you before you spend money whether Quebec is a realistic route for you — which, for applicants without French, it usually is not.',
  },
];

export default function QuebecImmigrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Canada · Quebec"
        title={
          <>
            Quebec runs its own{' '}
            <span className="text-gold-300">immigration system</span>
          </>
        }
        subtitle={
          <>
            Under an accord with Canada, Quebec selects its own economic immigrants. Its certificate
            sits outside Express Entry, its rules are its own, and for most of its economic routes
            French is a condition rather than an advantage.
          </>
        }
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Talk to a lawyer — free
          <span aria-hidden="true">→</span>
        </Link>
      </PageHero>

      {/* ===================== WHAT IS DIFFERENT ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="The structure, plainly"
          title="Why Quebec is not simply another province"
        />
        <Prose>
          <p>
            Immigration in Canada is a shared responsibility, and every province has some role in
            selecting economic immigrants. Quebec’s role is different in kind. Under a long-standing
            accord between Quebec and the federal government, Quebec sets its own selection criteria
            for economic immigrants who intend to settle there, and applies them itself through its
            own immigration ministry.
          </p>
          <p>
            Every other province nominates: it recommends a candidate, and the federal government
            selects. Quebec selects. Ottawa’s remaining role for a Quebec-selected applicant is
            admissibility — medical, criminality, security, identity, and whether the file is what it
            claims to be. That is a real decision and files do fail there, but it is a different
            question from whether your profile is wanted.
          </p>
          <p>
            The practical consequence is the one people most often miss. Because selection is
            Quebec’s, the federal economic machinery does not operate there. There is no Quebec
            stream inside{' '}
            <Link href="/express-entry" className="font-semibold text-accent-500 link-underline">
              Express Entry
            </Link>
            , no Quebec nomination inside the{' '}
            <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
              provincial nominee framework
            </Link>
            , and no way to convert progress in one system into progress in the other. They are two
            separate applications to two separate authorities with two separate sets of criteria.
          </p>
        </Prose>
      </Section>

      {/* ===================== TWO STAGES ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Two decisions, two governments"
          title="How the two-stage structure actually works"
          subtitle="Neither stage is a formality, and clearing the first does not carry you through the second."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TWO_STAGE.map((t) => (
            <FeatureCard key={t.title} icon={<Icon name={t.icon} />} kicker={t.kicker} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-10">
          <Callout title="A selection certificate is not permanent residence">
            <p>
              This is the most expensive misunderstanding on this route. Being selected by Quebec
              means Quebec wants you. It does not admit you to Canada. You still make a full federal
              permanent residence application, and it can be refused on admissibility grounds —
              medical inadmissibility, a criminal record, security concerns, or a finding of
              misrepresentation anywhere in the file.
            </p>
            <p>
              Plan and budget for both stages from the beginning, including the documents the federal
              stage will demand from you and your dependants, rather than treating the certificate as
              the finish line.
            </p>
          </Callout>
        </div>
      </Section>

      {/* ===================== FRENCH ===================== */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The part people skip"
              title="French is the whole question"
            />
            <Prose>
              <p>
                Quebec’s immigration policy is built around the continuity of French as the common
                language of public life. That is not a preference expressed through bonus points. In
                Quebec’s economic selection, demonstrated French ability generally functions as a
                condition of being selected at all, at levels Quebec defines on its own scale and
                varies by route and by the skill level of your occupation.
              </p>
              <p>
                English does not substitute for it. A strong English test result, a Canadian-recognised
                degree, or years of relevant experience will not compensate for the absence of French
                in the way a strong English score can carry a federal application.
              </p>
              <p>
                So the honest order of operations is: establish your French position first. Sit a
                test Quebec recognises. If you are starting from nothing, understand that reaching the
                levels Quebec expects is a substantial undertaking rather than a quick one — and decide
                with that in front of you. The accepted tests and the required levels are set and
                revised by Quebec, and are published at{' '}
                <a
                  href="https://www.quebec.ca/en/immigration"
                  className="font-semibold text-accent-500 link-underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  quebec.ca
                </a>
                . We do not restate them here.
              </p>
            </Prose>
          </div>

          <div>
            <SectionHeading eyebrow="What Quebec assesses" title="The factors, in kind" />
            <ul className="mt-6 space-y-4">
              {[
                ['French ability', 'Measured against Quebec’s own scale, through tests and qualifications Quebec accepts, with requirements that differ by route and occupation.'],
                ['Education and training', 'What you studied and where, assessed against how Quebec recognises foreign qualifications.'],
                ['Work experience', 'The occupation, its skill level, and whether any of the experience is Quebec experience.'],
                ['Connection to Quebec', 'Studies completed there, work performed there, or a validated job offer from a Quebec employer.'],
                ['Family situation', 'Age, and the profile of an accompanying spouse or partner — including their own French ability.'],
                ['Settlement capacity', 'Whether you can support yourself and your family on arrival while you establish.'],
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
          title="How a Quebec economic application runs"
          subtitle="The first two steps are the ones that decide whether the rest is worth starting."
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

      {/* ===================== OTHER QUEBEC ROUTES ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Beyond economic selection"
          title="The other ways Quebec is separate"
        />
        <Prose>
          <p>
            <strong>Family sponsorship.</strong> Sponsoring a relative to Quebec involves two
            undertakings, not one. IRCC assesses whether you are eligible to sponsor; Quebec then
            assesses its own undertaking, which covers integration support as well as financial
            support, and issues a selection certificate for the person being sponsored. Quebec also
            sets its own intake for these categories and can pause them. See{' '}
            <Link
              href="/family-sponsorship"
              className="font-semibold text-accent-500 link-underline"
            >
              family sponsorship
            </Link>{' '}
            for the federal side of that structure.
          </p>
          <p>
            <strong>Studying in Quebec.</strong> A student generally needs Quebec’s own acceptance
            certificate, the CAQ, in addition to the federal{' '}
            <Link
              href="/study-in-canada/study-permit"
              className="font-semibold text-accent-500 link-underline"
            >
              study permit
            </Link>
            . The order matters: the provincial document is normally obtained first and supports the
            federal application. Quebec also administers its own arrangement for the{' '}
            <Link
              href="/study-in-canada/provincial-attestation-letter"
              className="font-semibold text-accent-500 link-underline"
            >
              provincial attestation requirement
            </Link>
            , separate from how other provinces handle it. Confirm the current documents and their
            order with Quebec and IRCC before you apply.
          </p>
          <p>
            <strong>Working in Quebec temporarily.</strong> Some employer-driven work permit routes
            require Quebec’s participation alongside the federal process, so a Quebec job offer is
            not processed identically to the same offer in another province. If you are looking at{' '}
            <Link
              href="/work-permits/lmia"
              className="font-semibold text-accent-500 link-underline"
            >
              LMIA-based work permits
            </Link>
            , confirm the Quebec-specific steps before your employer starts.
          </p>
          <p>
            <strong>Business immigration.</strong> Quebec runs its own business categories, distinct
            from the federal ones described on our{' '}
            <Link
              href="/business-immigration"
              className="font-semibold text-accent-500 link-underline"
            >
              business immigration
            </Link>{' '}
            page. They open and close on Quebec’s timetable and carry their own French and residency
            expectations.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHAT GOES WRONG ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What commonly goes wrong"
          title="The failure patterns we see from Pakistan"
        />
        <Prose>
          <p>
            <strong>Treating Quebec as the back door.</strong> Applicants who cannot reach a competitive
            federal profile are told Quebec is easier. It is not easier; it is different, and its
            central requirement — French — is one most applicants from Pakistan do not meet on the day
            they are sold the idea.
          </p>
          <p>
            <strong>Paying for a Quebec profile before testing French.</strong> Money spent on
            document preparation before a French test result exists is money spent on an unknown. The
            test comes first because it decides whether anything else is worth doing.
          </p>
          <p>
            <strong>Stated intention that does not match the plan.</strong> Declaring an intention to
            settle in Quebec while openly planning to move elsewhere on landing is not a clever
            workaround. It creates{' '}
            <Link
              href="/refusals/misrepresentation"
              className="font-semibold text-accent-500 link-underline"
            >
              misrepresentation
            </Link>{' '}
            exposure that survives into the federal stage and beyond.
          </p>
          <p>
            <strong>Assuming a certificate ends the process.</strong> People stop preparing after
            selection, then meet the federal admissibility stage unready — expired police
            certificates, undisclosed dependants, medical issues nobody raised early.
          </p>
          <p>
            <strong>Relying on a summary of Quebec’s rules.</strong> Quebec restructures its own
            categories, thresholds and intake on its own schedule. Advice repeated from an article,
            including this one, is not a substitute for the ministry’s current published requirements
            on the day you file.
          </p>
        </Prose>
      </Section>

      {/* ===================== WHO IT DOES NOT SUIT ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Being honest about fit" title="Who Quebec does not suit" />
        <div className="mt-8">
          <Callout title="If you do not have French, this is probably not your route">
            <p>
              We will say this plainly because most people are not told it. If you do not have
              demonstrable French ability and are not willing to commit to reaching the level Quebec
              requires, the Quebec economic routes are impractical for you. Not difficult — impractical.
              There is no document, no agent and no fee that substitutes for the language.
            </p>
            <p>
              Quebec also does not suit applicants who want Canada generally rather than Quebec
              specifically, applicants who intend to join family or a community outside Quebec, or
              anyone attracted to it only because their federal profile is not competitive. In that
              last case the productive conversation is usually about improving the federal profile, or
              about a{' '}
              <Link href="/pnp" className="font-semibold text-accent-500 link-underline">
                provincial nominee route
              </Link>{' '}
              in a province whose requirements you can actually meet.
            </p>
            <p>
              If French is genuinely part of your life or you are prepared to make it so, Quebec may be
              worth examining — and knowing which of those two paragraphs you are in is
              the point of the first conversation. Nothing on this page is a prediction of your
              outcome. Two governments decide this file and neither is
              ours, which is why we publish a{' '}
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
      <Section tone="alt">
        <SectionHeading
          eyebrow="Where the current details live"
          title="Requirements, thresholds and open categories"
        />
        <Prose>
          <p>
            Quebec sets its own language levels, criteria, intake and category structure, and revises
            them on its own timetable. We deliberately publish no thresholds, scores, fees or
            processing times here, because a figure that is correct today becomes a liability on a page
            you may read next year.
          </p>
          <p>
            Quebec’s immigration ministry publishes the current requirements, accepted French tests and
            open categories at{' '}
            <a
              href="https://www.quebec.ca/en/immigration"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              quebec.ca
            </a>
            , and IRCC publishes the federal permanent residence requirements for Quebec-selected
            applicants on{' '}
            <a
              href="https://www.canada.ca/en/services/immigration-citizenship.html"
              className="font-semibold text-accent-500 link-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              canada.ca
            </a>
            . Read both at the source, on the day you need them.
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
        eyebrow="Before you build a plan around Quebec"
        title="Find out whether Quebec is realistic for you"
        subtitle="Tell us your French position honestly — including if it is nothing — along with your occupation and education. We will tell you whether Quebec fits, and if it does not, which route is the better use of your money."
        page={PAGE}
        waMessage="Hi, I’d like to know whether immigrating to Quebec is realistic in my situation."
      />
    </>
  );
}
