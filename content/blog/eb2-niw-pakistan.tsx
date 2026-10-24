import Link from 'next/link';

/**
 * Published 24 October 2026 on the firm's instruction. Written from USCIS,
 * State Department, Federal Register and US Embassy Pakistan sources as checked
 * on 23–24 October 2026. The pause wording matches /usa and lib/facts.ts and is
 * deliberately robust to either outcome of the litigation: it states the record
 * and sends the reader to the official notice, rather than promising the pause
 * is over for good.
 */
const a = 'font-semibold';

const OFFICIAL = {
  ivNotice:
    'https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html',
  embassy: 'https://pk.usembassy.gov/visas/',
  bulletin: 'https://travel.state.gov/content/dam/visas/Bulletins/visabulletin_November2026.pdf',
} as const;

export default function Eb2NiwPakistan() {
  return (
    <>
      <p>
        The EB-2 National Interest Waiver is the US green card people ask about constantly, because it
        needs no US employer: you can petition for yourself. But there are two separate questions, and they get
        mixed up constantly. <strong>Do you qualify?</strong> And <strong>can the process actually
        finish from Pakistan right now?</strong>
      </p>

      <h2>What the National Interest Waiver is</h2>
      <p>
        EB-2 is the US employment-based green card category for people with an{' '}
        <strong>advanced degree</strong> — a degree above a bachelor’s, or a bachelor’s plus five years of
        progressive experience — or with <strong>exceptional ability</strong>, which USCIS defines as
        expertise “significantly above that ordinarily encountered” in the sciences, arts or business.
      </p>
      <p>
        Normally EB-2 needs a job offer and a labour certification. The National Interest Waiver removes
        both, so you can file Form I-140 on your own behalf. USCIS grants it at its discretion, applying
        three tests from its Policy Manual:
      </p>
      <ul>
        <li>your proposed work has both substantial merit and national importance;</li>
        <li>you are well positioned to advance it; and</li>
        <li>on balance, it would benefit the United States to waive the job offer.</li>
      </ul>
      <p>
        That is a test of evidence — your degrees, your record, what others say about your work, and a
        credible plan — not of how a petition is worded.
      </p>

      <h2>Can a Pakistani file now?</h2>
      <p>
        Filing the I-140 petition with USCIS is a separate step from getting the visa. Pakistan is not on
        the US travel ban — Proclamation 10998 of December 2025, which carried forward the June 2025 list,
        does not name it — and the USCIS holds on pending cases in 2025–26 applied to travel-ban
        countries, not to Pakistan. USCIS has since said those holds are no longer in effect because of
        court orders.
      </p>

      <h2>The immigrant-visa pause</h2>
      <p>
        From 21 January 2026, the State Department paused the issuing of immigrant visas to nationals of
        75 countries, including Pakistan. In August 2026 a federal court order ended that pause, and the
        State Department says it is <strong>no longer in effect as of 21 August 2026</strong>. The US
        Embassy in Islamabad’s visa page no longer carries a pause notice.
      </p>
      <p>
        It can change. Court-ordered changes can be appealed and reversed, and the end of the pause
        does not mean interview scheduling has simply returned to normal. Before you pay for anything
        that ends at a consulate, read the{' '}
        <a href={OFFICIAL.ivNotice} rel="noopener noreferrer" target="_blank" className={a}>
          State Department’s notice
        </a>{' '}
        and the{' '}
        <a href={OFFICIAL.embassy} rel="noopener noreferrer" target="_blank" className={a}>
          US Embassy in Pakistan’s visa page
        </a>{' '}
        on the day.
      </p>

      <h2>The queue: why approval is not a green card</h2>
      <p>
        Pakistan falls under “all chargeability areas except those listed” in the Visa Bulletin, and EB-2
        there is backlogged. In the{' '}
        <a href={OFFICIAL.bulletin} rel="noopener noreferrer" target="_blank" className={a}>
          November 2026 Visa Bulletin
        </a>
        , the final action date for EB-2 is <strong>1 April 2025</strong>, and the date for filing is{' '}
        <strong>15 March 2026</strong>. In plain terms: even with an approved petition, you wait until
        your priority date — usually the date your petition was filed — is reached before the green card
        can be issued.
      </p>

      <h2>Already in the United States?</h2>
      <p>
        Someone in the US lawfully may be able to apply for a green card there instead of at a consulate
        (adjustment of status). Do not treat that as automatic: a May 2026 USCIS memo describes
        adjustment as discretionary relief and lists factors that can count against an applicant. Get
        advice on your own facts first.
      </p>

      <h2>Beware the “guaranteed NIW”</h2>
      <p>
        USCIS warns about businesses that “guarantee” a visa or green card if you pay a fee. Only USCIS
        decides a petition. A strong NIW case is built from evidence of your own work, not from a
        template — and anyone promising an outcome is telling you something no one can know.
      </p>
      <p>
        For the other US routes from Pakistan — visitor, student and investor visas — read our{' '}
        <Link href="/usa" className={a}>
          USA guide
        </Link>
        .
      </p>
    </>
  );
}
