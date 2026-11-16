import Link from 'next/link';

/**
 * Published 17 November 2026 on the firm's instruction. From the Start-up
 * Denmark programme's application guide and about page and SIRI's Start-up
 * Denmark page, as they stood on 17 November 2026.
 *
 * The guide's pass rule ("at least 3.5 in average score for all four criteria")
 * can be read two ways. The worked examples show both readings rather than pick
 * one, and the advice is to plan for the stricter.
 */
const a = 'font-semibold';

const GUIDE = 'https://startupdenmarkprogramme.dk/application-guide-startups';
const ABOUT = 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme';
const SIRI = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark';

const CRITERIA: [string, string][] = [
  ['How innovative is the business model?', 'A new product or service, new production processes, new technology, or a patent protecting the idea.'],
  ['How attractive is the market?', 'Your market analysis: the market, your competitors, your customers and the commercial potential.'],
  ['How scalable is the business model?', 'How the company can grow, and the strategy for getting there.'],
  ['What competencies and resources does the team possess?', 'The team’s skills and experience, and the means to carry out the plan.'],
];

const SCENARIOS: [string, string, string, string, string][] = [
  ['A', 'Every grade a 4', '48 of 60 (4.0)', 'Passes', 'Passes'],
  ['B', 'Innovation and scalability 3s; market and team 4s', '42 of 60 (3.5)', 'Passes, just', 'Fails on two criteria'],
  ['C', 'Eight 3s and four 4s', '40 of 60 (3.3)', 'Fails', 'Fails'],
];

export default function StartUpDenmarkExpertPanelScoring() {
  return (
    <>
      <p>
        <strong>
          Three members of an independent expert panel grade every Start-up Denmark application on four
          questions, each from 1 to 5, and you need an average of at least 3.5 to be approved.
        </strong>{' '}
        The questions are about innovation, the market, scalability and the team. The panel usually
        takes up to six weeks, but the programme says applications received after 13 November 2026 will
        not be processed before January 2027. A rejection can be appealed once, or you can reapply with a
        substantially better application. This is how it worked on 17 November 2026.
      </p>

      <h2>What happens before the panel sees your application?</h2>
      <p>
        First, the programme’s secretariat at the Danish Business Authority screens it against the
        requirements: eligibility, ownership, business type, the 15-page and 5-minute limits, and the
        required content. An application that fails screening is rejected with an email explaining why,
        and never reaches the panel. Those requirements are covered in{' '}
        <Link href="/blog/start-up-denmark-eligibility" className={a}>
          who qualifies
        </Link>{' '}
        and{' '}
        <Link href="/blog/start-up-denmark-pitch-deck-video" className={a}>
          the pitch deck and video
        </Link>
        .
      </p>

      <h2>What are the four questions?</h2>
      <p>
        The{' '}
        <a href={GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          programme’s application guide
        </a>{' '}
        defines the criteria as four questions. The right-hand column is our summary of what the rest of
        the guide asks you to show for each.
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">The four Start-up Denmark evaluation criteria</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Question</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What it looks for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {CRITERIA.map(([q, what]) => (
              <tr key={q}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{q}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What does an average of 3.5 mean in practice?</h2>
      <p>
        The guide says each judge gives four grades from 1 to 5, one per criterion, and that you need “at
        least 3.5 in average score for all four criteria”. With three judges that makes twelve grades.
        Read as one average across all twelve, you need at least 42 points out of 60. Read as an average
        of 3.5 on each criterion, every question has to clear the bar on its own.
      </p>
      <p>The programme publishes no worked example, so here are three made-up score sheets under both readings:</p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Example Start-up Denmark score sheets under two readings of the 3.5 rule</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Sheet</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Grades</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Total</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">One overall average</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">3.5 on each criterion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {SCENARIOS.map(([id, grades, total, overall, each]) => (
              <tr key={id}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{id}</th>
                <td className="hidden px-4 py-3 sm:table-cell">{grades}</td>
                <td className="whitespace-nowrap px-3 py-3 tabular-nums sm:px-4">{total}</td>
                <td className="px-3 py-3 sm:px-4">{overall}</td>
                <td className="hidden px-4 py-3 md:table-cell">{each}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Sheet B is the one to worry about. It passes one reading and fails the other. Since you cannot
        know in advance which applies, or how three different people will grade you, aim for an
        application that earns a 4 on every question rather than one that relies on a strong market to
        carry a weak idea. A 3 sits in the middle of the scale, and a stack of middling answers is
        exactly what does not pass.
      </p>

      <h2>Who is on the panel?</h2>
      <p>
        <a href={SIRI} rel="noopener noreferrer" target="_blank" className={a}>
          SIRI’s Start-up Denmark page
        </a>{' '}
        says the panel is appointed by the Danish Business Authority, and the guide calls it independent.
        Each application is evaluated by three of its members. The programme’s secretariat manages
        applications and supports the assessment, but it is not an advisory body: its{' '}
        <a href={ABOUT} rel="noopener noreferrer" target="_blank" className={a}>
          about page
        </a>{' '}
        says it cannot give personal guidance on your application under Denmark’s Public Administration
        Act, and takes only technical or administrative questions by email.
      </p>

      <h2>How long does the panel take?</h2>
      <p>
        The guide says the process usually takes up to six weeks, and longer during holidays or when
        caseloads are high. In November 2026 the programme added a notice: because of the Christmas
        holidays and an exceptionally high number of applications, everything received after 13 November
        2026 will be processed no earlier than January 2027, may take up to 8 weeks, and cannot be
        expedited.
      </p>

      <h2>If the panel says no, should you appeal or reapply?</h2>
      <p>
        A rejection comes with a written statement from the panel on all four criteria. You then have two
        options:
      </p>
      <ul>
        <li>
          <strong>Appeal</strong> to the Danish Business Authority. Panel members with no previous sight
          of your application reassess it. You can appeal only once, and the reassessment stands.
        </li>
        <li>
          <strong>Reapply</strong> with an application that is substantially improved on the first.
        </li>
      </ul>
      <p>
        Read the written statement before choosing. If it shows the panel missed or misread something
        that was clearly in your deck and video, an appeal asks fresh eyes to look at the same material.
        If it points at a real weakness, such as thin market evidence, an unclear scaling plan or a team
        without the right experience, an appeal puts the same weakness in front of new judges, and a
        better application is the stronger move.
      </p>

      <h2>What happens after approval?</h2>
      <p>
        You receive an approval letter, which lets you apply to SIRI for the residence and work permit.
        You cannot apply for the permit before you have it. The fee, the funds you must show and the
        steps are in{' '}
        <Link href="/blog/start-up-denmark-residence-permit-siri" className={a}>
          the Start-up Denmark residence permit
        </Link>
        , and the whole route is in our{' '}
        <Link href="/europe/denmark-startup-visa" className={a}>
          Start-up Denmark guide
        </Link>
        .
      </p>
    </>
  );
}
