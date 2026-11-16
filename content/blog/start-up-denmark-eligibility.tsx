import Link from 'next/link';

/**
 * Published 17 November 2026 on the firm's instruction. Written from the
 * Start-up Denmark programme's application guide and about page (Danish Business
 * Authority), the scheme's decree (BEK nr 969 af 15/06/2022, § 1(2) and § 2(1))
 * and SIRI's Start-up Denmark page, all as they stood on 17 November 2026.
 *
 * The example table is our reading of the published rules and says so. It is
 * not a prediction of any panel decision.
 */
const a = 'font-semibold';

const GUIDE = 'https://startupdenmarkprogramme.dk/application-guide-startups';
const ABOUT = 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme';
const DECREE = 'https://www.retsinformation.dk/eli/lta/2022/969';
const SIRI = 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark';

const EXAMPLES: [string, string, string][] = [
  ['A Pakistani restaurant or café in Copenhagen', 'Generally screened out', 'Restaurants are named in the programme’s guide and in the decree.'],
  ['Importing rice, textiles or surgical instruments to sell in Denmark', 'Generally screened out', 'Small trade, import and export businesses are named in both.'],
  ['An online shop reselling products made elsewhere', 'Likely screened out', 'It is retail, with growth that depends on buying and reselling stock.'],
  ['Software that automates customs paperwork for exporters', 'Can reach the panel', 'A new product that can be sold far beyond Denmark. Whether it scores 3.5 depends on the market, the team and the evidence.'],
  ['A new medical-device design with a patent application filed', 'Can reach the panel', 'Patents are the guide’s own example of documentation that supports innovation.'],
  ['An IT agency selling developers’ hours to Danish clients', 'Uncertain', 'Growth that comes mainly from hiring one more person at a time is hard to present as scalable.'],
];

export default function StartUpDenmarkEligibility() {
  return (
    <>
      <p>
        <strong>
          You qualify for Start-up Denmark if you are a citizen of a country outside the EU, the EEA and
          Switzerland, you own a significant share of an innovative company that can grow, and you will
          run it yourself in Denmark.
        </strong>{' '}
        Restaurants, shops and small trading firms are excluded, and up to three founders can apply
        together. Passing these tests only gets your application in front of the expert panel. The panel
        then decides whether the business is good enough. This is how the rules stood on 17 November 2026.
      </p>

      <h2>Can Pakistani citizens apply?</h2>
      <p>
        Yes. The{' '}
        <a href={GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          programme’s application guide
        </a>{' '}
        says the scheme is for citizens of countries outside the EU, the EEA and Switzerland. EU citizens
        are left out because they can already live and work in Denmark. Where you live now does not
        matter, but from Pakistan the permit application is made in person at the visa centre, which our{' '}
        <Link href="/blog/start-up-denmark-residence-permit-siri" className={a}>
          guide to the SIRI permit
        </Link>{' '}
        covers.
      </p>

      <h2>Who can be on the founding team?</h2>
      <p>
        You can apply alone or as a team of up to three founders from outside the EU, the EEA and
        Switzerland. A co-founder who is an EU citizen can be part of the team behind the company, but
        should not be listed as an applicant in the online form, because they do not need a permit.
        Listing an EU citizen as an applicant is one of the programme’s published reasons for screening
        an application out.
      </p>

      <h2>How much of the company do you need to own?</h2>
      <p>
        The guide says each applicant must own a significant share, take an active part in running the
        business, and be necessary to setting it up. It does not publish a minimum percentage, and{' '}
        <a href={SIRI} rel="noopener noreferrer" target="_blank" className={a}>
          SIRI’s Start-up Denmark page
        </a>{' '}
        says ownership is assessed case by case. What is clear is the other side of the line: if your
        interest is only financial, for example as a shareholder who will not run the business, you
        cannot get a permit this way. SIRI adds that holding companies are excluded.
      </p>
      <p>
        In a team, the obvious risk is a founder with a token stake. If three people apply and one holds
        almost all the shares, the other two will struggle to show a significant share or that they are
        necessary to the business.
      </p>

      <h2>Which businesses are excluded?</h2>
      <p>
        The scheme’s{' '}
        <a href={DECREE} rel="noopener noreferrer" target="_blank" className={a}>
          decree
        </a>{' '}
        rules out restaurants, retail and smaller trade, import and export businesses, and the guide says
        such applications will generally be rejected before the panel sees them. The{' '}
        <a href={ABOUT} rel="noopener noreferrer" target="_blank" className={a}>
          programme’s about page
        </a>{' '}
        explains why: the scheme exists to promote new, scalable Danish companies that contribute to
        growth, jobs and competitiveness.
      </p>
      <p>
        Here is how that reads for ideas we are often asked about. This is our reading of the published
        rules, not the programme’s, and only the panel can decide a real case.
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Example business ideas and how the Start-up Denmark rules apply to them</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Idea</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Likely result at screening</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold md:table-cell">Why</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {EXAMPLES.map(([idea, result, why]) => (
              <tr key={idea}>
                <th scope="row" className="px-3 py-3 font-medium text-ink-900 sm:px-4">{idea}</th>
                <td className="px-3 py-3 sm:px-4">{result}</td>
                <td className="hidden px-4 py-3 md:table-cell">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Is there a minimum investment, degree or language test?</h2>
      <p>
        The programme’s guide lists none of these. Everything you submit must be in English, and the
        panel scores the team’s “competencies and resources”, so experience and money still matter: they
        are judged as part of the plan rather than set as fixed thresholds.
      </p>
      <p>
        SIRI does set one figure. To get the permit you must show you can support yourself, and on 17
        November 2026 its page listed DKK 153,240 for one person, at the 2025 level, with higher amounts
        for a spouse or children. The fee was DKK 3,060.
      </p>

      <h2>What does the 75-permit limit mean?</h2>
      <p>
        At most 75 people a year can be granted a permit under the scheme. The figure is in the decree
        and on SIRI’s page. The programme does not publish how close each year comes to it, but its site
        said in November 2026 that it was handling an exceptionally high number of applications, and
        that anything received after 13 November 2026 would not be processed before January 2027.
      </p>

      <h2>A quick self-check</h2>
      <ul>
        <li>Are you a citizen of a country outside the EU, the EEA and Switzerland?</li>
        <li>Will you own a significant share of the company, and run it day to day in Denmark?</li>
        <li>Is the product or service genuinely new, rather than a copy of what already exists?</li>
        <li>Can it grow well beyond Denmark, without needing one more person for every new customer?</li>
        <li>Is it something other than a restaurant, a shop or a trading business?</li>
        <li>Can you explain all of it yourself, in English, in a five-minute video?</li>
      </ul>
      <p>
        If every answer is yes, the next job is the application itself:{' '}
        <Link href="/blog/start-up-denmark-pitch-deck-video" className={a}>
          what goes in the pitch deck and video
        </Link>
        , and{' '}
        <Link href="/blog/start-up-denmark-expert-panel-scoring" className={a}>
          how the panel scores it
        </Link>
        .
      </p>
    </>
  );
}
