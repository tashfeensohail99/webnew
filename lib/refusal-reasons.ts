/**
 * Content for the refusal-letter decoder.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️  NOT CLEARED FOR PUBLICATION. There is deliberately NO page route for this
 *     tool. Do not add one until a licensed representative (RCIC or Canadian
 *     lawyer) has signed off — see docs/refusal-decoder-spec.md §7.
 *
 *     In verification, NOT ONE of 27 claims came back CONFIRMED: 24 IMPRECISE,
 *     3 REFUTED, and 25 flagged as needing licensed review. That is the tool
 *     telling us what it is. The reader has already been refused and is deciding
 *     whether to spend money again; in Canada, advising on that is regulated.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * PROVENANCE. IRCC does not publish a blank refusal letter. The wording below is
 * transcribed from a redacted real letter on form IMM 5621 (07-2015) and from
 * refusal letters quoted inside published Federal Court decisions — which anyone
 * can look up at decisions.fct-cf.gc.ca. It is NOT from a government template.
 *
 * Two things this file gets right that cost real effort to establish:
 *   1. The "will you leave Canada" block lists TEN factors, not eight. Most
 *      published summaries list eight.
 *   2. canada.ca returns HTTP 403 to automated fetching INDISCRIMINATELY — an
 *      invented URL returns the same 403 as a real page. A 403 therefore tells
 *      you nothing about whether a page exists, and "could not verify" must
 *      never be reported as "the page is gone" or "the rule changed".
 *
 * SCOPE. Visitor visa (TRV) only. Study and work permits use different lists and
 * we could not obtain the work-permit list from any reliable source. We do not
 * copy the visitor list across and guess — that is exactly how this tool would
 * cause harm.
 */

export const PENDING_LICENSED_REVIEW = true;

export const CONTENT_VERIFIED_ON = '20 July 2026';

export type VisaType = 'visitor';

export type Fixability = 'fixable' | 'needs-time' | 'material-change';

export type RefusalReason = {
  id: string;
  visaTypes: VisaType[];
  /** As printed on the letter. Layout varies; the factor is what matters. */
  letterWording: string;
  plainEnglish: string;
  whatWasAssessed: string;
  /** What the wording does NOT disambiguate. Saying this prevents people paying
   *  to fix something that was never the problem. */
  whatItDoesNotTellYou?: string;
  fixability: Fixability;
  whatWouldNeedToChange: string;
  /** Shown verbatim, in a warning box, when this reason is selected. */
  mandatoryNote?: string;
};

export const REASONS: RefusalReason[] = [
  {
    id: 'travel-history',
    visaTypes: ['visitor'],
    letterWording: 'Travel history',
    plainEnglish:
      'The officer looked at where else you have travelled and whether you went home on time. Little or no international travel means there is no track record either way. A history of overstaying somewhere is worse than no history at all.',
    whatWasAssessed:
      'Whether you will leave Canada at the end of the authorised stay. Travel history is one input into that judgement, not the whole of it.',
    whatItDoesNotTellYou: 'Whether the concern was that you have no history, or that you have a bad one.',
    fixability: 'needs-time',
    whatWouldNeedToChange:
      'You cannot change what you have already done. What can change is that you travel somewhere else — genuinely, for a real reason — and return on time, and that becomes documented history.',
    mandatoryNote:
      'Nobody can “improve” your travel history. If someone offers to, walk away. But “you cannot fix this quickly” is not the same as “nothing can be done”.',
  },
  {
    id: 'immigration-status',
    visaTypes: ['visitor'],
    letterWording: 'Immigration status in your country of residence',
    plainEnglish:
      'This matters most if you applied from a country you are not a citizen of — working in the Gulf, studying abroad, and so on. The officer is asking: when Canada says your visit is over, do you have somewhere lawful to return to, and for how long?',
    whatWasAssessed: 'Whether you have a secure and lasting right to return to where you currently live.',
    whatItDoesNotTellYou:
      'Whether the concern was the time left on your residence permit, its conditions, or something else.',
    fixability: 'needs-time',
    whatWouldNeedToChange:
      'A renewed or longer-validity residence permit where you live — or applying from a country where your status is not in question. If a valid long permit already existed and simply was not submitted, or was submitted untranslated, that is a document gap rather than a status problem.',
  },
  {
    id: 'family-ties',
    visaTypes: ['visitor'],
    letterWording: 'Family ties in Canada and in your country of residence',
    plainEnglish:
      'One box, two opposite meanings. It can mean the officer thought you had too much pulling you toward Canada, or too little holding you at home — or both at once.',
    whatWasAssessed: 'The balance of what draws you to Canada against what brings you back.',
    whatItDoesNotTellYou:
      'Which one. The letter does not say. Anyone who tells you which, without having read the officer’s actual notes, is guessing — and acting on that guess means you may spend money fixing something that was never the problem.',
    fixability: 'material-change',
    whatWouldNeedToChange:
      'It depends entirely on which direction the concern ran, which is why the officer’s notes matter more here than on any other factor.',
  },
  {
    id: 'length-of-stay',
    visaTypes: ['visitor'],
    letterWording: 'Length of proposed stay in Canada',
    plainEnglish:
      'The officer did not find the length of trip you proposed consistent with the reason you gave for it, or with the rest of your life — a three-month visit when you hold a job you could not leave, for instance.',
    whatWasAssessed: 'Whether the trip you described hangs together as a temporary visit.',
    fixability: 'fixable',
    whatWouldNeedToChange:
      'A trip length that fits the stated purpose and your obligations at home, with the reason for that duration evidenced rather than asserted. This one is genuinely more often a coherence problem than a life problem.',
  },
  {
    id: 'purpose-of-visit',
    visaTypes: ['visitor'],
    letterWording: 'Purpose of visit',
    plainEnglish:
      'The officer did not accept that the reason you gave for coming is the real reason, or the whole reason — or accepted it but did not think it fitted a temporary stay.',
    whatWasAssessed: 'Whether the stated purpose is genuine and consistent with visiting temporarily.',
    whatItDoesNotTellYou:
      'Whether the officer disbelieved the purpose, or believed it and did not think it fitted a temporary visit.',
    fixability: 'material-change',
    whatWouldNeedToChange:
      'Either the purpose has genuinely changed, or the same purpose is now supported by evidence that was not in the file. Re-describing the same trip in better prose is not a change.',
  },
  {
    id: 'employment-prospects',
    visaTypes: ['visitor'],
    letterWording: 'Employment prospects in your country of residence',
    plainEnglish: 'The officer was not satisfied there is enough for you to come back to, work-wise.',
    whatWasAssessed: 'Whether your working life at home is a reason to return.',
    fixability: 'needs-time',
    whatWouldNeedToChange:
      'A documented job, business or professional position at home that did not exist, or was not evidenced, before.',
  },
  {
    id: 'current-employment',
    visaTypes: ['visitor'],
    letterWording: 'Current employment situation',
    plainEnglish:
      'About the job you hold now — whether it exists, whether it is stable, and whether it is the kind of thing a person comes back to.',
    whatWasAssessed: 'Whether your current employment anchors you at home.',
    whatItDoesNotTellYou:
      'Whether the officer doubted the job existed, or accepted that it existed and simply did not find it anchoring.',
    fixability: 'fixable',
    whatWouldNeedToChange:
      'If the job was real and thinly evidenced, that gap can be closed. If the officer’s concern was the nature or stability of the job itself, only a different employment reality changes it.',
  },
  {
    id: 'assets-finances',
    visaTypes: ['visitor'],
    letterWording: 'Personal assets and financial status',
    plainEnglish:
      'The officer was not satisfied about what you own and what you have, and how that ties you home.',
    whatWasAssessed: 'Whether your financial position is genuine, available to you, and anchoring.',
    fixability: 'fixable',
    whatWouldNeedToChange:
      'Where the assets exist and were poorly evidenced — missing ownership documents, no explanation of where money came from — that is an evidence gap that can be closed. Where the assets do not exist, no amount of paperwork creates them.',
    mandatoryNote:
      'There is no official minimum bank balance for a Canadian visitor visa. Any specific figure you have been quoted is somebody’s practice convention, not a rule. What officers assess is whether funds are genuinely available to you and where they came from.',
  },
  {
    id: 'business-purpose',
    visaTypes: ['visitor'],
    letterWording: 'Having a legitimate business purpose in Canada',
    plainEnglish:
      'Applies where you said you were coming for business. The officer was not satisfied the business reason was real, or that it made sense.',
    whatWasAssessed: 'Whether the business activity genuinely exists and requires the trip.',
    fixability: 'fixable',
    whatWouldNeedToChange:
      'Documented counterparties, a real meeting or event, and evidence the business relationship exists independently of the visa application.',
  },
  {
    id: 'previous-contravention',
    visaTypes: ['visitor'],
    letterWording:
      'History of contravening the conditions of admission on a previous stay in Canada',
    plainEnglish:
      'You were in Canada before and something went wrong — you overstayed, you worked or studied without authorisation, or you broke a condition on a permit.',
    whatWasAssessed: 'Your record of complying with Canadian immigration conditions.',
    fixability: 'material-change',
    whatWouldNeedToChange:
      'This is not a paperwork problem and a better bank statement does not touch it. It is a recorded past event.',
    mandatoryNote:
      'If this box is ticked, stop before you spend anything. Depending on what happened, other rules may apply to you that this page does not cover. We are not telling you that any of them do — we cannot know. We are telling you this is the box where an application filed without licensed advice is most likely to be money thrown away.',
  },
  {
    id: 'insufficient-funds',
    visaTypes: ['visitor'],
    letterWording:
      'Not satisfied you have sufficient funds to carry out your stated purpose, to maintain yourself in Canada, and to effect your departure',
    plainEnglish:
      'Three things in one sentence: money to do the trip, money to live on while you are there, and money to get home again. Read that last part — this box is partly about your ability to leave, not only about how much you have.',
    whatWasAssessed: 'Whether the money for the whole trip, including the journey home, is genuinely there.',
    fixability: 'fixable',
    whatWouldNeedToChange:
      'If the money genuinely exists and the file did not show where it came from or that it was available to you, that is an evidence gap. If the money is not there, this is not an evidence problem.',
  },
  {
    id: 'insufficient-documentation',
    visaTypes: ['visitor'],
    letterWording:
      'You have not provided sufficient documentation to support your / your host’s income and assets',
    plainEnglish:
      'This one is explicitly about documents — and it may be about your host’s documents rather than your own.',
    whatWasAssessed: 'Whether the financial claims in the application were actually evidenced.',
    fixability: 'fixable',
    whatWouldNeedToChange:
      'The missing documents — yours or your host’s. Translated, legible, complete. This is the box most likely to be a genuine paperwork gap rather than a judgement about your life.',
  },
];

/* -------------------------------- verdict -------------------------------- */

export type Verdict = {
  level: 'stop' | 'fix-first' | 'worth-a-look';
  title: string;
  body: string;
};

/**
 * The honest read. This function is allowed to say "do not re-apply yet" and
 * that is the point of the tool — if it could not, it would be a lead generator
 * wearing a diagnostic costume.
 *
 * IRCC's own words, which this mirrors: "Applying again with the same
 * information, even with an immigration representative, such as a consultant or
 * agent, will likely not change this decision." (IRCC Help Centre #1485.)
 */
export function verdictFor(selectedIds: string[], _visaType: VisaType): Verdict | null {
  if (!selectedIds.length) return null;

  const chosen = REASONS.filter((r) => selectedIds.includes(r.id));
  const hasContravention = selectedIds.includes('previous-contravention');
  const materialChanges = chosen.filter((r) => r.fixability === 'material-change');
  const allFixable = chosen.every((r) => r.fixability === 'fixable');

  if (hasContravention) {
    return {
      level: 'stop',
      title: 'Do not file anything until someone licensed has looked at this',
      body:
        'A previous breach of your conditions in Canada is a recorded event, and depending on what happened, rules may apply to you that this page does not cover. Re-applying without licensed advice here is the single most likely way to lose your money twice.',
    };
  }

  if (materialChanges.length >= 2) {
    return {
      level: 'stop',
      title: 'On this picture, re-applying now would probably fail again',
      body:
        'More than one of the reasons ticked is about your circumstances rather than your paperwork. Re-arranging the same facts into a better-looking file does not touch that. IRCC says the same thing in its own words: applying again with the same information, even through a representative, will likely not change the decision. That is not us being discouraging — it is us saving you a fee and a second refusal on your record.',
    };
  }

  if (materialChanges.length === 1) {
    return {
      level: 'fix-first',
      title: 'Something real would need to change first',
      body:
        'Part of what was ticked is fixable with better evidence, but at least one reason is a judgement about your circumstances rather than your documents. Fixing the paperwork alone will probably not be enough. Be honest with yourself about whether anything has actually changed since the refusal.',
    };
  }

  if (allFixable) {
    return {
      level: 'worth-a-look',
      title: 'This looks like an evidence problem rather than a life problem',
      body:
        'Everything ticked here is the kind of thing that can be closed with documents that already exist — properly translated, legible and complete. That is the most fixable version of a refusal. It still does not mean approval is assured: an officer decides that, and nobody can promise you an outcome.',
    };
  }

  return {
    level: 'fix-first',
    title: 'Fixable, but not quickly',
    body:
      'What was ticked can genuinely change — but time has to pass and something real has to happen first. Filing again before that is likely to produce the same answer.',
  };
}

/* ------------------------------ static panels ----------------------------- */

export const DISCLAIMER =
  'This page explains what the reasons on a refusal letter mean. It is not legal advice, it is not an assessment of your case, and it cannot tell you whether you will be approved — an officer decides that. Nothing you tick here is sent to us or saved; this page does not know who you are. IRCC does not publish a blank copy of its refusal letter, so the wording here comes from a real redacted letter and from letters quoted in published Federal Court decisions. If your letter differs from this page, your letter is right and we are wrong — tell us and we will fix it.';

export const GCMS = {
  title: 'The officer wrote more than the letter shows',
  body: [
    'Behind every refusal there are the officer’s own working notes, recorded in IRCC’s case management system. They usually say considerably more than the ticked boxes do — which matters most on the reasons that could mean two opposite things, like family ties.',
    'Those notes can be requested, but the rules about who may make the request are specific and depend on where you are and what status you hold. We are not going to print a process here that might not apply to you and send you down a path that cannot work. A licensed representative can tell you in a minute whether the route is open to you and who has to file it.',
    'What we would say plainly: if your letter ticked a reason that is ambiguous on its face, guessing at which meaning the officer had is how people spend money fixing the wrong thing.',
  ],
};

export const DUAL_INTENT = {
  title: 'Wanting to move to Canada one day is not, by itself, a reason to refuse you',
  body: [
    'Section 22(2) of the Immigration and Refugee Protection Act says: “An intention by a foreign national to become a permanent resident does not preclude them from becoming a temporary resident if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay.”',
    'Read both halves of that sentence. Wanting to immigrate eventually is not a disqualification. But the same sentence puts the work on you: the officer has to be satisfied you will leave at the end of your authorised stay. You have to satisfy them — they do not have to prove you would overstay.',
    'Before you pay to apply again, ask yourself honestly whether anything has actually changed since the refusal. Officers assess the file in front of them, and a file that says the same thing tends to get the same answer.',
  ],
};
