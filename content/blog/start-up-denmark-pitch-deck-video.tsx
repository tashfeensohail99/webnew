import Link from 'next/link';

/**
 * Published 17 November 2026 on the firm's instruction. The requirements are
 * from the Start-up Denmark programme's application guide and about page as they
 * stood on 17 November 2026. The 15-page plan and the video timings are our own
 * suggestion, and the post says so; the programme publishes no template.
 */
const a = 'font-semibold';

const GUIDE = 'https://startupdenmarkprogramme.dk/application-guide-startups';
const ABOUT = 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme';
const EMBASSY = 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/';

const PAGES: [string, string, string][] = [
  ['1', 'The company, the founders and who owns what', 'Team'],
  ['2', 'The problem, and who has it', 'Market'],
  ['3', 'Your solution, and what is new about it', 'Innovation'],
  ['4', 'How it works, and any patent or other protection', 'Innovation'],
  ['5', 'Market analysis: size, segments and sources', 'Market (required)'],
  ['6', 'Customers: who buys, and any evidence they will', 'Market (required)'],
  ['7', 'Competitors, and why customers would choose you', 'Market (required)'],
  ['8', 'Business model and pricing', 'Scalability'],
  ['9', 'Go-to-market: distribution, marketing and sales', 'Required'],
  ['10', 'Why Denmark', 'Required'],
  ['11', 'How the company grows beyond Denmark', 'Scalability'],
  ['12', 'The team: roles, skills, experience', 'Team'],
  ['13', 'The start-up phase: what you will do first, in order', 'Required'],
  ['14', 'The budget for those first activities, and how it is funded', 'Required · Team and resources'],
  ['15', 'Documentation: patents, funding, partnership declarations', 'Supports all four'],
];

const VIDEO: [string, string][] = [
  ['0:00 – 1:00', 'Your position in the market: who buys, and the commercial potential'],
  ['1:00 – 2:15', 'Why the product or service is innovative'],
  ['2:15 – 3:30', 'How the company will scale'],
  ['3:30 – 4:40', 'Why you, and your team, can run it'],
  ['4:40 – 5:00', 'Leave this empty. Over 5 minutes is a screening reason.'],
];

export default function StartUpDenmarkPitchDeckVideo() {
  return (
    <>
      <p>
        <strong>
          A Start-up Denmark application needs a pitch deck of at most 15 pages, as a PDF, and a video
          pitch of at most 5 minutes, both in English.
        </strong>{' '}
        The deck must cover your market analysis, your sales or go-to-market strategy, why Denmark, and
        your plan and budget for the start-up phase. The video must show you explaining the business in
        your own words. Missing any of these, or going over either limit, gets an application rejected
        before the expert panel sees it. These are the programme’s requirements as of 17 November 2026.
      </p>

      <h2>What must the pitch deck contain?</h2>
      <p>
        The{' '}
        <a href={GUIDE} rel="noopener noreferrer" target="_blank" className={a}>
          programme’s application guide
        </a>{' '}
        sets four required content areas, plus supporting documents:
      </p>
      <ul>
        <li>
          <strong>Market analysis</strong> of the market you will enter, including your competitors and
          your customers.
        </li>
        <li>
          <strong>A sales or go-to-market strategy</strong> in detail: price, distribution, marketing and
          how you will enter the market.
        </li>
        <li>
          <strong>Why Denmark</strong>: the opportunities Denmark offers your company, business relations
          you already have there, or other reasons it is the right country.
        </li>
        <li>
          <strong>Activities in the start-up phase</strong>: the steps you will take, showing you have
          thought beyond strategy to action. The guide recommends an overall budget for these first
          activities.
        </li>
        <li>
          <strong>Documentation</strong> of patents, funding, written partnership declarations or anything
          else relevant, included in the deck itself.
        </li>
      </ul>
      <p>
        Because the documents go inside the deck, they share the 15 pages with everything else. Summarise
        them and show the key page of each, rather than attaching whole certificates.
      </p>

      <h2>A 15-page plan that answers the four scoring questions</h2>
      <p>
        The panel scores four questions: how innovative the business model is, how attractive the market
        is, how scalable the model is, and what competencies and resources the team has. A good deck
        makes each answer easy to find. The programme publishes no template; this is our suggestion,
        with each page tagged to the question it answers or the requirement it meets.
      </p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">A suggested 15-page Start-up Denmark pitch deck</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Page</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Content</th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">Answers</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {PAGES.map(([n, content, answers]) => (
              <tr key={n}>
                <th scope="row" className="px-3 py-3 font-medium tabular-nums text-ink-900 sm:px-4">{n}</th>
                <td className="px-3 py-3 sm:px-4">{content}</td>
                <td className="hidden px-4 py-3 sm:table-cell">{answers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Two pages decide more applications than any others. The market pages need sources a reviewer can
        check, not a large number with no origin. And the start-up-phase page needs real steps in a
        sensible order, with a budget that adds up, because that is where a panel sees whether you have
        actually thought about running the company.
      </p>

      <h2>What should the five-minute video cover?</h2>
      <p>
        The guide asks for a video of you presenting the idea clearly and in your own words, in English,
        covering four things: the company’s position in the market, its scaling potential, why it is
        innovative, and why you are competent to run it. It is explicit that the video is separate from
        the deck. The deck must stand on its own, and the video should add detail and nuance, not repeat
        the slides.
      </p>
      <p>A timing plan that leaves a safety margin:</p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-rule bg-paper">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">A suggested timing plan for the Start-up Denmark video pitch</caption>
          <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Time</th>
              <th scope="col" className="px-3 py-3 font-semibold sm:px-4">What to cover</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {VIDEO.map(([t, what]) => (
              <tr key={t}>
                <th scope="row" className="whitespace-nowrap px-3 py-3 font-medium tabular-nums text-ink-900 sm:px-4">{t}</th>
                <td className="px-3 py-3 sm:px-4">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Speak to the camera rather than reading a script, and use plain English. What has to come
        across is the business and your grasp of it, not polished presentation. If you apply as a team, it makes sense for each
        applicant to appear, since each must show they are necessary to the company.
      </p>

      <h2>Which mistakes get an application screened out?</h2>
      <p>The programme’s secretariat rejects applications before evaluation for these reasons:</p>
      <ul>
        <li>The deck is longer than 15 pages, or the video longer than 5 minutes.</li>
        <li>A required element is missing, for example no go-to-market strategy in the deck.</li>
        <li>The deck, video and form do not give clear, descriptive information against the requirements.</li>
        <li>Not every applicant owns a significant share of the company.</li>
        <li>EU citizens are registered as applicants in the online form.</li>
        <li>The business is a restaurant, a shop or a small trading, import or export firm.</li>
      </ul>
      <p>
        A screened-out applicant receives an email with the reason and may reapply, but a reapplication
        must be substantially improved.
      </p>

      <h2>Can someone else write it for you?</h2>
      <p>
        Help with structure and checking is normal; the programme itself cannot give it. Its{' '}
        <a href={ABOUT} rel="noopener noreferrer" target="_blank" className={a}>
          about page
        </a>{' '}
        says it is not an advisory institution and, under Denmark’s Public Administration Act, cannot give
        personal guidance on your application or business plan.
      </p>
      <p>
        But the substance has to be yours. One of the four scores is for the team’s competence, and the
        video is you, unscripted, explaining the business. A deck you cannot defend in your own words
        works against you. The Danish Embassy in Islamabad’s{' '}
        <a href={EMBASSY} rel="noopener noreferrer" target="_blank" className={a}>
          residence-permit page
        </a>{' '}
        also warns applicants against agents who charge high prices for false documents. We help founders
        structure and test their deck and prepare for the video; we do not sell ready-made business plans.
        The full process is in our{' '}
        <Link href="/europe/denmark-startup-visa" className={a}>
          Start-up Denmark guide
        </Link>
        , and how the panel turns all this into a score is in{' '}
        <Link href="/blog/start-up-denmark-expert-panel-scoring" className={a}>
          how the Start-up Denmark panel scores you
        </Link>
        .
      </p>
    </>
  );
}
