<!--
  AUTO-GENERATED from a 35-agent research + adversarial-verification run, 2026-07-20.
  This is the sign-off artefact for the refusal-letter decoder.

  VERDICT TALLY across 27 challenged claims: {"IMPRECISE":24,"REFUTED":3}
  NOT ONE claim came back CONFIRMED. 25 of 27 need licensed review.
  DO NOT PUBLISH THE TOOL UNTIL A LICENSED REPRESENTATIVE HAS CLEARED SECTION 7.
-->

# CONTENT SPEC — REFUSAL LETTER DECODER (v0.1, build-ready draft)

**Status:** Draft for licensed-representative sign-off. Nothing in this spec ships until Section 7 is cleared.
**Legal text basis:** IRPA (S.C. 2001, c. 27), consolidation current to 2026-05-26, last amended 2026-03-26. IRPR (SOR/2002-227), current to 2026-05-26, last amended 2026-05-26. All read at laws-lois.justice.gc.ca on 2026-07-20.
**Scope of v1:** Visitor visa (TRV) and study permit refusals only. **Work permits are explicitly out of scope for v1** — see 1.E and 7.

---

## 0. ARCHITECTURE DECISIONS THAT PRECEDE THE CONTENT

These are not style preferences. Each one prevents a specific documented harm.

**0.1 — Stateless.** Nothing the user selects is transmitted or stored. Compute in the browser. Print on the page: *"Nothing you tick here is sent to us or saved. This page does not know who you are."* Reason: the data involved (refusal grounds, possible misrepresentation findings) is the most sensitive this audience holds, and PIPEDA's application to non-Canadian data subjects abroad is unresolved. Statelessness makes the question moot and is the most credible expression of the firm's positioning.

**0.2 — Three source tiers, visibly labelled on every panel.**
- **TIER 1 — LAW.** Statute or regulation, quoted, with section link and consolidation date.
- **TIER 2 — IRCC PUBLISHED GUIDANCE.** IRCC's own words, with page URL and its "date modified".
- **TIER 3 — OUR OBSERVATION.** The firm's practice experience. Explicitly not law, not IRCC guidance.

Nothing appears untiered. Anything that cannot be placed in a tier does not ship.

**0.3 — No lead-capture gate.** The decoded output is shown first, in full. Any contact form appears *after* it, clearly optional. Reason: a gate in front converts the tool into an intake funnel, which is the fact pattern that makes the IRPA s.91 "or offer to do so" question live (see 7.1).

**0.4 — Screening sequence, in this order, before any decoding.**

**Screen A — Application type.**
> "What were you refused?" → Visitor visa (TRV) / Study permit / Work permit / eTA / Something else
>
> If **Work permit**: *"We don't decode work permit letters yet. We were not able to obtain a reliable copy of the reason list IRCC uses for work permits, and we will not copy the visitor-visa list across and guess. What we can tell you is on [link to the short work-permit page, 1.E]."*
>
> If **eTA / Something else**: stop with the same honesty, plus the s.72 deadline notice.

**Screen B — The misrepresentation gate.** Fires before anything else is decoded.
> "Does your letter contain the word **misrepresentation**, or a reference to **section 40** or **A40**?" → Yes / No / I'm not sure — let me check
>
> **Yes** → route immediately to the s.40 panel (1.D) and to a licensed representative. No other decoding is offered. **No** → continue. **Not sure** → show the person where on the letter to look, then re-ask.

**Screen C — Officer decision notes.**
> "Besides the ticked boxes, does your letter contain paragraphs of the officer's own written comments?" → Yes / No / I'm not sure
>
> Do **not** ask "did you receive a second document" — sources describe the notes as *included with* the letter, and the physical form is unconfirmed. If **Yes**, show the ODN panel (Section 3.1) before the tick-box decoder, and keep the decoder available underneath.

**Screen D — The judicial review clock.** Shown to everyone, always, before decoding. Copy in Section 5.4. Reason: a decoder that tells someone "nothing can be done" while a statutory deadline runs is worse than no decoder.

**0.5 — Every reason panel carries the ambiguity rule.** Where the letter's wording does not identify which sub-concern the officer had, the panel says so in those words and does not guess. Guessing makes people spend money fixing the wrong thing.

**0.6 — Form-version honesty banner, sitewide footer.**
> *IRCC does not publish a blank copy of its refusal letter. The wording on this page is transcribed from a real redacted refusal letter on IRCC form IMM 5621 (07-2015), and from refusal letters quoted inside published Federal Court decisions, which you can look up yourself at decisions.fct-cf.gc.ca. Newer versions of the form exist and we have not been able to check them against an official government copy — canada.ca blocks automated access. If your letter differs from this page, **your letter is right and we are wrong.** Tell us and we will fix it.*

---

## 1. THE REASON LIST

### Structure of every panel

```
[EXACT WORDING AS PRINTED]
Statutory hook: [provision + link + consolidation date]   [TIER 1]
What this sentence is about (plain English)
What the officer had to be satisfied of                    [TIER 1]
What this wording does NOT tell you
What would have to be different next time                  [TIER 3 — labelled]
Category: FIXABLE / FIXABLE-WITH-TIME / NOT FIXABLE WITHOUT A MATERIAL CHANGE
```

### The category definitions — printed on the page, verbatim

> **FIXABLE** — the underlying fact was fine; the evidence of it was missing, unreadable, untranslated, or unexplained. A document that already exists can close the gap.
>
> **FIXABLE WITH TIME** — the underlying fact is not there yet but can genuinely become true. Time has to pass and something real has to happen.
>
> **NOT FIXABLE WITHOUT A MATERIAL CHANGE** — the officer was not persuaded about your circumstances, not about your paperwork. Re-arranging the same facts into a better-looking file does not touch this. IRCC says the same thing in its own words: *"Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision."* (IRCC Help Centre #1485, modified 2026-04-17.)
>
> These labels describe the **type of problem**, not your chances. We do not know your chances and nobody who has not read your file does either.

---

### 1.A — THE "WILL YOU LEAVE CANADA" BLOCK (visitor visa)

**Umbrella box, as printed:**
> "You have not satisfied me that you would leave Canada at the end of your stay as a temporary resident."

**Statutory hook [TIER 1]:** IRPR s.179(b) — an officer *shall* issue a temporary resident visa if it is established that the foreign national *"will leave Canada by the end of the period authorized for their stay under Division 2."* Also IRPA s.20(1)(b) and s.11(1).

**Wording note the tool must carry:** Letters vary. We have seen at least three layouts — each reason written out in full repeating the statute ("I am not satisfied that you will leave Canada at the end of your stay as a temporary resident, as stipulated in paragraph 179(b) of the IRPR, based on your travel history"); one statutory sentence followed by short bullets; and plain standalone sentences. **Select your factors whatever form they appear in.** The layout tells you nothing about your chances. Note also that the refusal form itself cites IRPA s.11(1) and s.16(1) — some websites say every visitor-visa refusal "cites 179(b)". Many letters do not print that number at all.

**The form lists TEN factors under this box. Not eight.** All ten below.

---

**1.A.1 — Travel history**

*Plain English:* The officer looked at where else you have travelled and whether you went home on time. Little or no international travel means there is no track record either way. A history of overstaying somewhere is worse than no history.

*What the officer had to be satisfied of:* That you will leave Canada at the end of the authorised stay. Travel history is one input into that.

*What this does NOT tell you:* Whether the concern was *no* history or a *bad* history.

*What would have to be different:* You cannot change what you have already done. What can change is that you travel somewhere else — genuinely, for a real reason — and return on time, and that becomes documented history. **[TIER 3 — our observation]**

*Category:* **FIXABLE WITH TIME.**

*Must appear on this panel:* *"Nobody can 'improve' your travel history. If someone offers to, walk away. But 'you cannot fix this quickly' is not the same as 'nothing can be done' — see the Federal Court deadline notice above, which is running now."*

---

**1.A.2 — Immigration status in your country of residence**

*Plain English:* This one matters most if you were applying from a country you are not a citizen of — working in the Gulf, studying in Thailand, and so on. The officer is asking: when Canada says your visit is over, do you actually have somewhere lawful to return to, and for how long?

*What this does NOT tell you:* Whether the concern was the length left on your residence permit, its conditions, or something else.

*What would have to be different:* A renewed or longer-validity residence permit in the country you live in, or applying from a country where your status is not in question. **[TIER 3]**

*Category:* **FIXABLE WITH TIME** (permit renewal is a real, documentable event), sometimes **FIXABLE** (if a valid long permit existed and simply was not submitted or was submitted untranslated).

---

**1.A.3 — Family ties in Canada and in country of residence**

*Plain English:* One box, two opposite meanings. It can mean the officer thought you had too much pulling you toward Canada, or too little holding you at home, or both.

*What this does NOT tell you — say this loudly:* **Which one.** The letter does not say. Anyone who tells you which one, without reading the officer's actual notes, is guessing. Acting on that guess means you may spend money fixing something that was never the problem.

*What would have to be different:* Depends entirely on which direction the concern ran, which is why the officer's notes matter more here than on any other factor. See Section 3.

*Category:* **NOT FIXABLE WITHOUT A MATERIAL CHANGE**, and undiagnosable from the letter alone.

---

**1.A.4 — Length of proposed stay in Canada**

*Plain English:* The officer did not find the length of the trip you proposed consistent with the reason you gave for it, or with the rest of your life — a three-month visit when you have a job you cannot leave, for instance.

*What would have to be different:* A trip length that fits the stated purpose and fits your obligations at home, with the reason for the duration evidenced rather than asserted. **[TIER 3]** This one is genuinely often a coherence problem rather than a life problem.

*Category:* **FIXABLE** where the trip plan itself changes and the change is real.

---

**1.A.5 — Purpose of visit**

*Plain English:* The officer did not accept that the reason you gave for coming is the real or the whole reason, or did not find it consistent with a temporary stay.

*What this does NOT tell you:* Whether the officer disbelieved the purpose, or believed it but did not think it fit a temporary visit.

*What would have to be different:* Either the purpose has genuinely changed (IRCC lists "the purpose of your visit has changed" as an example of a changed circumstance — Help Centre #1485), or the same purpose is now supported by evidence that was not in the file. Re-describing the same trip in better prose is not a change. **[TIER 3]**

*Category:* **NOT FIXABLE WITHOUT A MATERIAL CHANGE**, unless there was genuinely available supporting evidence that was left out.

---

**1.A.6 — Employment prospects in country of residence**

*Plain English:* The officer was not satisfied there is enough for you to come back to, work-wise.

*What would have to be different:* A documented job, business, or professional position at home that did not exist or was not evidenced before. **[TIER 3]**

*Category:* **FIXABLE WITH TIME.**

---

**1.A.7 — Current employment situation**

*Plain English:* About the job you hold now — whether it exists, whether it is stable, whether it is the kind of thing you come back to.

*What this does NOT tell you:* Whether the officer doubted the job existed, or accepted it existed and did not find it anchoring.

*What would have to be different:* If the job was real and simply thinly evidenced, that gap can be closed. If the officer's concern was the nature or stability of the job, only a different employment reality changes it. **[TIER 3]**

*Category:* **FIXABLE** if it was an evidence gap; **NOT FIXABLE WITHOUT A MATERIAL CHANGE** if it was a judgement about the job.

---

**1.A.8 — Personal assets and financial status**

*Plain English:* The officer was not satisfied about what you own and what you have, and how that ties you home.

*What would have to be different:* Where the assets exist and were poorly evidenced — missing ownership documents, no explanation of where money came from — that is an evidence gap. Where the assets do not exist, no amount of paperwork creates them. **[TIER 3]**

*Category:* **FIXABLE** or **NOT FIXABLE WITHOUT A MATERIAL CHANGE**, depending which of those two it was.

*Mandatory note on this panel:* **There is no published minimum balance and no published "seasoning period."** Nothing in IRPR s.179 sets a number of months of statements, a dollar figure, or a rule about how long money must sit. Any website or agent quoting you "six months of statements" or "you need X rupees" is stating a practice convention, not a legal requirement. What officers assess is whether funds are genuinely available and where they came from. **[TIER 1 for the absence; TIER 3 for the observation]**

---

**1.A.9 — Having a legitimate business purpose in Canada**

*Plain English:* Applies where you said you were coming for business. The officer was not satisfied the business reason was real or made sense.

*What would have to be different:* Documented counterparties, a real meeting or event, evidence the business relationship exists independently of the visa application. **[TIER 3]**

*Category:* **FIXABLE** where the business activity is genuine and was under-evidenced.

---

**1.A.10 — Any history of contravening the conditions of admission on a previous stay in Canada**

*Plain English:* You were in Canada before and something went wrong — you overstayed, you worked or studied without authorisation, or you broke a condition on a permit.

*What would have to be different:* **This is not a paperwork problem and a better bank statement does not touch it.** It is a recorded past event.

*Category:* **NOT FIXABLE WITHOUT A MATERIAL CHANGE.**

*Mandatory routing on this panel:*
> *If this box is ticked, stop before you spend anything. Depending on what happened, other rules may apply to you that this page does not cover — for example, if a removal order was ever enforced against you, IRPA s.52(1) says you "shall not return to Canada, unless authorized by an officer," and if an exclusion order was issued, IRPR s.225 sets a period before you can return. We are not telling you that any of these apply to you — we cannot know. We are telling you that this is the box where an application filed without licensed advice is most likely to be money thrown away.*

---

### 1.B — THE SEPARATE BOXES BELOW THE "WILL YOU LEAVE" BLOCK

These are their own boxes, outside the ten-factor list. Do not present them as part of it.

---

**1.B.1 — Sufficient funds**

*As printed:* "I am not satisfied that you have sufficient funds, including income or assets, to carry out your stated purpose in going to Canada or to maintain yourself while in Canada **and to effect your departure**."

*Plain English:* Three things in one sentence: money to do the trip, money to live on while there, and money to get home. Read the last part — this box is partly about your ability to *leave*, not only about how much you have.

*What would have to be different:* If the money genuinely exists and the file did not show where it came from or that it was available to you, that is an evidence gap. If the money is not there, this is not an evidence problem. **[TIER 3]**

*Category:* **FIXABLE** where funds exist and were poorly evidenced; **NOT FIXABLE WITHOUT A MATERIAL CHANGE** where they do not.

---

**1.B.2 — Insufficient documentation of income and assets**

*As printed:* "You have not provided sufficient documentation to support your / your host's income and assets."

*Plain English:* This is explicitly about documents, and it may be about your host's documents rather than yours.

*What would have to be different:* The missing documents — yours or your host's. Translated. Legible. Complete.

*Category:* **FIXABLE.** This is the box most likely to be a genuine paperwork gap.

*Note:* If you were relying on a host in Canada, the missing documents may be theirs, not yours, and you cannot fix that alone.

---

**1.B.3 — Not complied with a request for information (s.16(1))**

*As printed:* "You have not complied with our request for information, as per section 16(1)" — with sub-boxes for a medical examination, an interview, or listed documents.

*Plain English:* IRCC asked for something and did not get it. Sometimes the request never reached the applicant.

*What would have to be different:* Attending the examination or interview, or providing the specific document. Check first whether the request actually reached you.

*Category:* **FIXABLE.**

---

**1.B.4 — Truthfulness (s.16(1))**

*As printed:* "I am not satisfied that you have answered all questions truthfully, as required by subsection 16(1)."

*Plain English:* This is **not** a ties box and it is **not** the same as a misrepresentation finding.

**Mandatory panel text:**
> *A section 16 refusal is not a section 40 misrepresentation finding, and it does not by itself carry a five-year inadmissibility. Do not assume the worst case. Do not assume the best case either. Check your letter for the word "misrepresentation" or a section 40 box — those are printed separately on the form.*
>
> *What this tool will not do is tell you which one you have. Being wrong in either direction is expensive: guess low and you fail to respond to something serious; guess high and you sit out five years you were never barred for. Take the letter to a licensed representative.*

*Category:* **Not categorised. Routed out.**

---

**1.B.5 — Document authenticity**

*As printed:* "You have submitted documentation which lacks authenticity as part of your application. This has diminished the overall credibility of your submission."

**Mandatory panel text — this replaces the normal panel structure entirely:**
> **Stop. Do not re-apply yet. Do not send "stronger documents."** This box is not in the same family as the others and it is not answered by sending more paper.
>
> Two things you can check yourself, because they are printed facts on your own letter, not opinions:
> 1. Is the separate **section 40(1)(a)** box ticked, further down in the inadmissibility section? On the form, misrepresentation is its own box, distinct from this one.
> 2. Did IRCC send you a **procedural fairness letter** before the refusal, giving you a chance to respond to a concern?
>
> Why it matters: a misrepresentation finding under IRPA s.40(1)(a) carries **five years** of inadmissibility (s.40(2)(a)). Some older copies of the refusal form still print a two-year line — the current period is five.
>
> **We will not tell you whether your letter is or is not a misrepresentation finding.** That assessment is regulated work in Canada. Take the letter to a licensed representative — an RCIC in good standing with the College of Immigration and Citizenship Consultants, or a lawyer who is a member of a Canadian provincial law society — and verify their licence number on the regulator's public register before you pay anyone, **including us**.

*Category:* **Not categorised. Routed out.**

---

**1.B.6 — Transit / other**

The form also contains a transit-visitor-category box (48-hour rule) and an **"Other reasons:"** free-text box, plus a full inadmissibility section listing IRPA ss.34–40.

**Mandatory text:** *"Do not assume your reason is on the list above. If your letter ticks 'Other reasons' with the officer's own handwriting or typing, that text is specific to you and no decoder can read it. If it ticks any box in the inadmissibility section (sections 34 to 40), this tool does not cover it and you need licensed advice."*

---

### 1.C — STUDY PERMIT REFUSALS

**Do not reuse the visitor-visa panels wholesale.** Different statutory hooks, and one box with no visitor-visa equivalent.

**1.C.1 — The "will you leave" boxes.** Hook is **IRPR s.216(1)(b)** — *"will leave Canada by the end of the period authorized for their stay under Division 2 of Part 9."* The factor vocabulary substantially overlaps with the visitor-visa list — purpose of visit, personal assets and financial status, current employment situation, travel history, immigration status in country of residence, **and family ties in Canada and in your country of residence**. Reuse the corresponding panels from 1.A, with the hook swapped to 216(1)(b).

**1.C.2 — Money is a SEPARATE provision. This is the correction most often got wrong.**

*As printed (typical):* "Pursuant to paragraph 220(b) of the IRPR, I am not satisfied that you have sufficient and available financial resources, without working in Canada, to maintain yourself and any family members who are accompanying you during your proposed period of study."

*Statutory hook [TIER 1]:* **IRPR s.220** — sufficient and available financial resources, without working in Canada, to (a) pay tuition, (b) maintain yourself and accompanying family members, (c) pay transportation costs.

*Mandatory panel text:*
> *This is not a section 216(1) box. Money is assessed under a different provision. That matters: a 220(b) box is about **evidence of funds** — how much, whose money, where it came from, how long it has been available. A 216(1) box is about the officer's **judgement that you might not leave**. They are different problems and they are not fixed the same way. Anyone treating them as one thing is going to point you at the wrong fix.*

*Category:* **FIXABLE** where the funds exist and the source/availability was not evidenced; **NOT FIXABLE WITHOUT A MATERIAL CHANGE** where the funds are not there.

**1.C.3 — Proposed studies not reasonable**

*As printed:* "Your proposed studies are not reasonable in light of **one or more of**: your qualifications, previous studies, missing marksheets, academic record, level of establishment, language abilities, or your future prospects and plans."

*Mandatory panel text:*
> *Read the words **"one or more of"** carefully. The letter does not tell you **which** of those things the officer relied on. Anyone — including us — who tells you which one it was, from the letter alone, is guessing.*
>
> *What we will not tell you: whether this can be overcome by re-applying. We found no reliable public data on how often study-plan refusals are or are not overcome on a second application, and we will not guess, because that guess costs you a real fee. What we can say is that this box is a judgement about whether your study plan hangs together. A second application that changes nothing about the plan, the evidence behind it, or your circumstances is handing the next officer the same material that produced this refusal.*

*Category:* **NOT FIXABLE WITHOUT A MATERIAL CHANGE** — where "material change" means the plan, the qualifications, or the evidence behind them is genuinely different, not re-worded.

**1.C.4 — Currency warning, mandatory on the study permit page:**
> *Study permit rules changed in 2024. IRPR s.216(1)(e) now requires the designated learning institution to have provided a confirmation to the Minister under s.222.1, and provincial attestation requirements were introduced. Letters issued on recent applications may contain grounds this page does not list. If your letter mentions your acceptance letter, an attestation, or s.222.1, this page does not cover it.*

**1.C.5 — Carve-out, mandatory:**
> *IRPR s.216(2) states that the "will leave Canada" paragraph "does not apply to persons described in section 206 and paragraphs 207(c) and (d)." If you think you might fall into those categories, read the sections — we are not going to tell you whether you do, because deciding whether a particular person is described in them is a legal judgement.*

---

### 1.D — MISREPRESENTATION (IRPA s.40) — routed, not decoded

Reached only via Screen B. Not part of the tick-box flow.

> **This is different from every other refusal on this site, and we are not going to soften it.**
>
> **What the law says [TIER 1]:**
> - **s.40(1)(a)** covers *"directly or indirectly misrepresenting or withholding material facts relating to a relevant matter that induces or could induce an error in the administration of this Act."* Three things follow from those exact words. It covers **withholding** — leaving something out counts, not just saying something untrue. It covers **indirect** misrepresentation, which is how people get caught by what an agent filed for them. And it says *"could induce"* an error — it does not matter whether the officer was actually misled.
> - **s.40(2)(a)** sets the period at **five years**. Where the determination was made outside Canada — the usual case if you applied from Pakistan or the Gulf — it runs from the final determination of inadmissibility. Where the determination was made in Canada, it runs from the date a removal order is enforced.
> - **s.40(3)** states that a foreign national inadmissible under this section *"may not apply for permanent resident status during the period referred to in paragraph (2)(a)."*
>
> **What that means in plain terms.** If your facts have not changed, filing the same kind of application again during those five years is very unlikely to succeed, and a permanent residence application is barred outright by s.40(3). Filing anyway costs you the fee and adds another refusal to your record.
>
> **Two things it does not mean.**
> - s.40(3) bars applications for *permanent residence*. It does not bar every application. A **temporary resident permit** under IRPA s.24(1) is a separate route: an officer *"may"* issue one to a person who is inadmissible where the officer considers it justified in the circumstances. These are granted rarely and for compelling reasons, but the route exists and we are not going to pretend it does not.
> - A refusal can be challenged in the Federal Court, and there is a **deadline running right now**. See Section 5.4.
>
> **We will not calculate a date for you.** If the determination was made in Canada and no removal order has been enforced, the five years has not started. Working out which trigger applies to you is exactly the kind of thing that needs a licensed representative looking at your actual file.
>
> **Where this tool stops.** Whether the finding was properly made, whether any exception applies, and whether a court challenge or a permit application is worth filing are questions only a licensed representative can answer after reading your file.

*Category:* **Not categorised. Hard routing to a licensed representative, no exceptions.**

---

### 1.E — WORK PERMITS: THE SHORT, HONEST PAGE

No decoder. One page, this content only.

> **We do not decode work permit refusal letters, and here is why.**
>
> We were not able to obtain a reliable copy — primary or transcribed — of the reason list IRCC uses on work permit refusal letters. Law-firm pages paraphrase it; we found none that reproduce it. **We will not copy the visitor-visa list across**, because the wording is known to differ. We would rather show you nothing than show you a list we invented.
>
> **What we have verified [TIER 1]:**
> - **IRPR s.200(1)(b)** requires that *"the foreign national will leave Canada by the end of the period authorized for their stay under Division 2 of Part 9."* Same words as the study permit provision.
> - **IRPR s.200(2)**: paragraph (1)(b) *"does not apply to a foreign national who satisfies the criteria set out in section 206 or paragraph 207(c) or (d)."* If you fall in those categories, the leave-Canada test does not apply to you at all.
> - **IRPR s.200(3)** is a separate list of things an officer **shall not** issue a work permit despite — including (a) reasonable grounds to believe you are unable to perform the work sought; (b) a missing Quebec CAQ, in cases where a s.203 determination is required *and* Quebec law requires the CAQ (this does **not** apply to every Quebec job); (c) a labour dispute in progress; (e) prior unauthorized work or study in Canada or breach of a condition on a previous permit; (h) an employer who is ineligible or in default of an administrative monetary penalty.
> - **IRPR s.200(3.1)**: paragraph (3)(e) *"does not apply to a foreign national referred to in subsection 207.1(1)"* — the provision covering workers experiencing or at risk of abuse in their employment. If that is your situation, the six-month rule in (e) does not apply to you.
> - On (e), the bar does not apply where **six months** have elapsed since the unauthorized work or study, or the non-compliance, ceased — plus three further enumerated exceptions.
>
> **Why this matters to your money.** A refusal resting on s.200(1)(b) turns on the evidence you filed about your circumstances. A refusal resting on s.200(3) is a bar the officer has no discretion to waive. **If your employer is the problem under s.200(3)(h), your own file being stronger changes nothing** — re-applying with that same employer will be refused again. That is a case where the honest answer is: fix the underlying fact, change the employer, or do not spend the fee.
>
> **None of these is a lifetime ban on you.** Each ends when the underlying fact changes — a date passes, a certificate is obtained, a fee is paid, an employer's period expires. What it means is that filing before the fact changes is money spent on a predictable refusal.
>
> **What we cannot do here:** tell you which paragraph was applied to your file, or when you personally become eligible.

---

## 2. COMBINATION LOGIC

The output is a **verdict about the shape of the problem**, never about the person's prospects. All verdict text is written in the general voice or in IRCC's voice, never as "you should".

### 2.1 — Hard stops (fire before anything else, and suppress all other output)

| Trigger | Verdict | Message |
|---|---|---|
| Misrepresentation / s.40 anywhere | **STOP — DO NOT FILE ANYTHING** | Full 1.D panel. Plus: *"This is the one category on this site where getting licensed advice quickly actually changes what is possible, because the Federal Court deadline may be the only route and it is short."* |
| Authenticity box (1.B.5) | **STOP — DO NOT SEND MORE DOCUMENTS** | Full 1.B.5 panel. Explicitly: *"Sending 'better documents' in response to an authenticity concern is the single worst available move."* |
| Truthfulness s.16(1) box (1.B.4) | **STOP — GET IT CLASSIFIED FIRST** | *"Before you do anything, someone licensed needs to tell you whether this is a section 16 issue or a section 40 finding. Those have completely different consequences and you cannot tell from this page."* |
| History of contravening conditions (1.A.10) | **STOP — OTHER RULES MAY APPLY** | 1.A.10 routing text. |
| Any inadmissibility box (ss.34–40) | **OUT OF SCOPE** | *"This tool does not cover inadmissibility findings."* |

### 2.2 — Combination verdicts (only where no hard stop fired)

**COMBINATION A — Financial evidence only.**
Triggered by: 1.B.2 alone, or 1.B.2 + 1.B.1, with no ties factors ticked.
> **The shape of this problem: an evidence gap.** Every box ticked on your letter is about documents — what was provided about income and assets, yours or your host's. That is the one category where the underlying facts may have been fine and the file simply did not show them.
>
> The honest test: **does the money actually exist, and can you show where it came from and that it was available to you?** If yes, this is a documents problem. If no, no amount of paperwork creates it, and a second application will be refused for the same reason. IRCC: *"You should only apply again if you can include information that you didn't include before."* (#023, modified 2026-04-17.)

---

**COMBINATION B — One or two ties factors, nothing else.**
Triggered by: 1–2 of {travel history, immigration status, family ties, employment prospects, current employment, assets, purpose, length of stay, business purpose}.
> **The shape of this problem: the officer was not satisfied about your circumstances.** Not about your paperwork.
>
> IRCC's own words: *"Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision."* IRCC lists what counts as a genuine change — the purpose of the visit has changed; your employment or financial situation has changed; criminal rehabilitation approved; a medical inadmissibility resolved. **Notice what is not on that list:** a better cover letter, a new agent, more statements covering the same money, a re-worded invitation.
>
> The question is not whether you apply again. The question is whether **a fact about your life** is different, or only the **presentation** of the same facts.
>
> IRCC also says that even where your situation has changed, that *"does not guarantee that an IRCC officer will approve your application."*

---

**COMBINATION C — Three or more ties factors.**
> **The shape of this problem: the officer did not accept the overall picture, not one detail of it.**
>
> When several of these boxes are ticked together, fixing one of them leaves the rest untouched. This is the pattern where people spend the most money for the least effect — they identify the box that looks easiest, address that, and re-file into the same conclusion.
>
> IRCC: *"Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision."*

---

**COMBINATION D — Travel history + family ties (the undiagnosable pair).**
> **Two problems here, and one of them you cannot see.**
>
> Travel history cannot be changed quickly. And the family-ties box combines two opposite concerns into one line, so your letter does not tell you which one the officer had.
>
> That means **this combination cannot be diagnosed from the letter at all.** The officer's written reasoning is the only thing that tells you which direction the family-ties concern ran. See Section 3 — you can request that yourself, free, from Pakistan. Do not pay anyone to guess for you in the meantime.

---

**COMBINATION E — Ties factors + insufficient funds (1.B.1).**
> **Two different problems that get confused constantly.**
>
> The ties boxes are about whether the officer believed you would leave. The funds box is about whether you can afford the trip, live there, **and pay to leave** — read the last words of that box.
>
> Fixing the money does not fix the ties finding, and vice versa. A file that solves one and leaves the other is the same file.

---

**COMBINATION F — Study permit: 220(b) + "studies not reasonable".**
> **These pull in opposite directions and you cannot fix them with the same document.**
>
> The 220(b) box is about evidence of money. The "proposed studies are not reasonable" box is about whether the plan hangs together at all. Adding funds does not make an incoherent study plan coherent, and a better study plan does not create money.
>
> And remember: "one or more of" — the studies box does not tell you which factor the officer relied on.

---

**COMBINATION G — Nothing on the list matches.**
> **Your letter does not match anything we can decode.** That is a real answer, not a failure. It may be an "Other reasons" box in the officer's own words, a newer version of the form than we have been able to verify, or a provision we do not cover.
>
> **Your letter is the authority, not this page.** If it says something we do not, we are wrong.

### 2.3 — Universal footer on every combination output

> **We are telling you this even where it means we do not take your money today.**
>
> Two things this page has not done: it has not read your file, and it has not assessed your chances. It cannot. What it has done is tell you the **shape** of the problem so you can ask a licensed representative a sharper question — and so you can tell whether the answer you get back makes sense.

---

## 3. THE GCMS / OFFICER-NOTES SECTION

**⚠️ CORRECTION TO THE PROJECT BRIEF.** The premise that "most Pakistani applicants cannot request this directly" is **out of date and must not be published.** Since **13 July 2022** a refused applicant in Pakistan can make their own Privacy Act request, directly, for free. Publishing the old rule would push readers into paying an intermediary they do not need — the exact harm this tool exists to prevent.

### 3.1 — STEP ONE: check what you already have

> **Before you request anything, open your refusal email.**
>
> Since **29 July 2025**, IRCC has been sending the officer's own decision notes together with the refusal letter, without anyone having to ask. Reported coverage began with visitor visas, visitor records, study permits and work permits including extensions, and news reporting indicates it was extended to most permanent residence applications on **26 May 2026**.
>
> Reported exclusions: eTAs, Temporary Resident Permits, and humanitarian and compassionate applications. Applications filed through the **"IRCC Portal – New version"** are reported not to receive the notes. IRCC may remove parts of the notes.
>
> **[TIER 2 — REPORTED, NOT VERIFIED]** We were not able to read IRCC's own page on this — canada.ca blocks automated access. The above comes from consistent reporting (CIC News, July 2025; Moving2Canada, 31 July 2025; Green & Spiegel, 15 September 2025) plus indexed extracts of IRCC's own page. Check it against canada.ca and against your own letter.
>
> **If the notes are there, you do not need to pay anyone to get them.**
>
> **But they are not your full file.** The decision notes are a summary of the final decision. Lawyers reviewing them have reported cases where the notes were word-for-word identical to the refusal letter and added nothing at all. If yours simply repeat your refusal letter, you have learned nothing new, and the full request below is still worth making.
>
> **If your refusal was before 29 July 2025**, you almost certainly do not have notes, and we found nothing suggesting they are issued retroactively. That is normal and does not mean anything went wrong.

### 3.2 — STEP TWO: request your own file — free, yourself, from Pakistan

> **Who may request it: you.** Since 13 July 2022, the right of access under s.12(1) of the Privacy Act has been extended to *"all individuals outside Canada to whom that right has not been extended previously"* — **Privacy Act Extension Order, No. 3, SOR/2021-174**, made 13 July 2021, registered 14 July 2021, in force on the first anniversary of the day it was made. **[TIER 1]**
>
> IRCC says the same thing in its own words: *"Canadian citizens, permanent residents, and foreign nationals, regardless of where they are located, can request access to their personal information held by federal government institutions under the Privacy Act."* — IRCC Help Centre, page modified 2026-04-17. **[TIER 2 — read directly]**
>
> **You do not need a Canadian relative, friend, agent, or consultant. There is no application fee for a Privacy Act request for your own information.** If someone is charging you purely to submit this, you are paying for their time, not for access you lack. We are telling you this even though some firms sell it.

**Where to go**
> **https://atip-aiprp.apps.gc.ca/atip/**
>
> **Pick the right route.** The landing page offers two. For information about your own immigration or citizenship application, choose **"Submit a request for information with Immigration, Refugees and Citizenship Canada (IRCC)."** Do **not** choose the Treasury Board Secretariat's ATIP Online Request Service — that route is for corporate records and other departments, and will not get you your file.
>
> IRCC states that a completed online request *"will be automatically sent to the Access to Information and Privacy Division at IRCC."* (Help Centre #463.)

**Choose the Privacy Act, not the Access to Information Act — this is where people lose money**
> - A **Privacy Act** request for your own personal information: **no application fee**, open to you wherever you live.
> - An **Access to Information Act** request: **$5.00**, payable by credit card, and its eligibility under ATIA s.4(1) is limited to Canadian citizens and permanent residents, extended by SOR/89-207 only to individuals and corporations **present in Canada**. If you are abroad, that route is generally not open to you in your own name. **[TIER 1]**
>
> **Be careful here:** the ATIP portal's own FAQ still describes only the older Access to Information Act eligibility rule and does not mention the 2022 extension. Some agents quote that older rule to sell you a paid "GCMS notes service" or a Canadian representative. For your own file, under the Privacy Act, you do not need one.

**We have not walked the form ourselves**
> We have confirmed the legal right. We have **not** completed the online form's own address and country screens ourselves — the portal blocked our automated checks. If the form refuses your address, that is a portal-behaviour problem, not a bar in the law. Tell us and we will look at it.

### 3.3 — When you need IMM 5744 (two situations, not one)

> **IMM 5744 is a consent form, not the request.** You still file the request separately; the form only authorises IRCC to release someone's personal information to the person named on it.
>
> You need it when:
> 1. **Someone else is requesting on your behalf** — a consultant, lawyer, relative, or friend.
> 2. **You are requesting your own file, but you applied as a family.** The file also contains your spouse's and your children's information. Your spouse and any child **aged 16 or over** must each sign, or IRCC will black out the parts about them. *If your refusal was about your family's ties, funds, or travel history, those are exactly the paragraphs you would lose.* This second trigger is the one people miss, and it is how a family waits out the full statutory clock and receives notes with the decisive passages blanked.
>
> **What the current form (IMM 5744 (09-2018) E) says on its face:**
> - Signatures must be **original, handwritten, in blue ink**. No electronic signatures. This is printed on the form twice.
> - Valid **one year from the date beside the applicant's signature**, and **the same signed form can be reused for further ATIP requests** within that year.
> - Up to four people can be listed on one form.
> - For a child under 16: no child signature needed, but you need one of — **both** parents signing the same form; **or** a separate form from each parent listing the child; **or** one parent's signed form **plus** a valid Canadian court order proving custody. (A court order alone is not one of the three routes.)
>
> **Download it only from canada.ca.** Copies on law-firm and form-filler sites are frequently the old **IMM 5744 (10-2016)** version, which says the consent is good for **one use only** and uses an age threshold of **18**. Following it will cost you weeks.
>
> **Unresolved:** sources disagree on whether the age threshold is 16 or 18, apparently depending on which Act the request is made under. The current form says 16; IRCC's Help Centre says under 18. We have not been able to confirm which governs. Check the live form and the portal instructions before you file.

### 3.4 — Timelines and what to do if they pass

> **By law, 30 days** — Privacy Act s.14; Access to Information Act s.7. Extendable: under the Privacy Act by up to a further 30 days, and longer again where translation or format conversion is needed (s.15). Under ATIA, for a reasonable period where the request covers a large volume or requires consultations (s.9). Source: IRCC Help Centre #464, modified 2026-04-17. **[TIER 1 + TIER 2]**
>
> **We do not publish a "typical wait."** We could not find a reliable public source for a median processing time and we will not estimate one. Anyone quoting you a guaranteed turnaround is guessing.
>
> **If the deadline passes with no answer,** that counts as a refusal in law (Privacy Act s.16(3); ATIA s.10(3)) and you can complain to a Commissioner. **No fee.**
> - A Privacy Act request → the **Privacy Commissioner (OPC)**. The Privacy Act sets no complaint deadline in its text, but do not rely on that — complain as soon as the deadline is missed.
> - An ATIA request → the **Information Commissioner (OIC)**, and **you have 60 days**, starting the day after the response deadline lapsed. The OIC states it has no power to extend this and late complaints are closed as inadmissible (ATIA s.31).
> - If a representative in Canada filed on your behalf, **they** are the requester and **they** must file the complaint.
>
> **A complaint gets you the notes. It does not change the refusal decision, and it does not pause any deadline for challenging that refusal.**

### 3.5 — What the notes will and will not do

> Getting your notes does not create a case. They tell you what the officer wrote. They do not change your facts. If the notes show a refusal ground your circumstances have not changed, re-applying will not help you.
>
> **Reading your own notes is information. Deciding what to file next based on them is a decision that needs a licensed representative.**

---

## 4. DUAL INTENT

> ### "I said I want to move to Canada one day. Is that why I was refused?"
>
> **What the law actually says [TIER 1].** IRPA s.22(2), in full:
>
> > *"An intention by a foreign national to become a permanent resident does not preclude them from becoming a temporary resident if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay."*
>
> **Read both halves of that sentence.** People quote the first half and stop.
>
> **The first half is good news.** Wanting to immigrate permanently is not, by itself, an automatic bar to a temporary visa. It is also not "inadmissibility" of any kind — IRPA s.22(1) lists "is not inadmissible" as a separate requirement of its own. Having a PR application in progress, or an intention to apply, does not disqualify you.
>
> **The second half is the part that decides your case.** The protection is conditional: it operates only *"if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay."* Section 22(2) does not require anyone to give you a visa.
>
> **And note who has to do the proving.** The visa decision is made under the Regulations, not under s.22(2): visitor visa under IRPR s.179(b), study permit under s.216(1)(b), work permit under s.200(1)(b). Each says a visa is issued if **"it is established that"** you will leave. *Established* — by you. The officer does not have to prove you would overstay. You have to satisfy them you would not.
>
> **Two mistakes, in opposite directions.**
>
> **Mistake one: "Dual intent means they have to give me the visa."** No. Nothing in s.22(2) creates an entitlement. The leave-Canada finding still has to be established under whichever regulation applies to what you applied for.
>
> **Mistake two: "I was refused just because I said I want to immigrate — that's illegal."** Be careful with this one. Section 22(2) means your PR intention is not by itself an automatic bar. **It does not stop an officer from treating your plan to immigrate as one piece of evidence** when deciding whether you will leave at the end of your stay.
>
> In practice it often cuts against you rather than for you: if you plan to settle in Canada and your ties at home are thin, the "will leave" finding gets **harder** to establish, not easier. Courts have said things about how far officers may go with this — but that comes from case law, not from the words of s.22(2), and whether any of it applies to your refusal is a question for a licensed representative.
>
> **The honest part.** If you were refused on purpose of visit, family ties, or ties to your country of residence, **s.22(2) is not a fix.** Re-applying with the same facts and a citation to s.22(2) attached will not change the outcome. What changes outcomes is changed facts — stronger evidence that you will leave. If nothing about your situation has changed, re-applying is likely to produce another refusal, and refusals accumulate on your record.
>
> **What we cannot tell you:** whether the officer who refused you assessed your case correctly, and whether you have grounds to challenge it. Those are legal assessments of your specific application.

---

## 5. EXACT DISCLAIMER LANGUAGE

**All copy below is unreviewed by Canadian counsel and must be signed off before publication (Section 7).**

### 5.1 — Top of tool (before any input)

> **This is free general information about what the reasons on a Canadian visa refusal letter mean.**
>
> It is not legal or immigration advice. It is not a review of your case. Using it does not make you our client. No one can predict or guarantee the result of any application, and we do not.
>
> For advice on your own situation you need a representative authorised under Canadian law — a Canadian lawyer, a Quebec notary, a member in good standing of another provincial law society, or a member in good standing of the College of Immigration and Citizenship Consultants. **You can check anyone's licence yourself at college-ic.ca before you pay them, including us.**
>
> Nothing you tick on this page is sent to us or saved.

### 5.2 — Sourcing banner (persistent, top of results)

> IRCC does not publish a blank copy of its refusal letter, and we could not find one in any program delivery instruction or public release. The wording on this page is transcribed from a real redacted refusal letter on IRCC form **IMM 5621 (07-2015)**, and from refusal letters quoted verbatim inside published Federal Court decisions — a government source you can look up yourself at decisions.fct-cf.gc.ca.
>
> Newer versions of the form exist and we have **not** been able to check them against an official government copy, because canada.ca blocks automated access. Wording varies by visa office and changes over time.
>
> **If your letter says something different from this page, your letter is right and we are wrong.** Tell us and we will correct it.

### 5.3 — Alongside any "not fixable without a material change" result

> On this ground the officer was not satisfied about **your circumstances**, not about your paperwork.
>
> IRCC's own words: *"Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision."*
>
> If those circumstances have not actually changed, applying again will most likely be refused again — and each refusal stays on your record.
>
> IRCC also says this, and it applies to us as much as to anyone else: hiring an immigration representative, consultant or agent does not increase the chances of your application being approved and does not change any previous decision made by an officer. If anyone tells you you'll have a better chance on your second application because they're representing you, IRCC says *"they're not being truthful and are likely looking to take your money."* (IRCC Help Centre #1485, modified 2026-04-17.)
>
> **We are telling you this even though it means we do not take your money today.**

### 5.4 — The deadline notice (shown to every user, before decoding, and repeated in every hard-stop)

> **There is no appeal from this kind of refusal — and a deadline is already running.**
>
> Canada's Immigration and Refugee Protection Act gives appeal rights to the Immigration Appeal Division only to a narrow group — family-class sponsors, permanent residents, protected persons, and holders of permanent resident visas (IRPA s.63). Visitor visas, study permits and work permits are not on that list. IRCC says it too: *"Under Canada's Immigration and Refugee Protection Act, there's no formal process to appeal decisions on temporary residence applications."*
>
> What exists instead is **judicial review** in the Federal Court, and it is not an appeal. The Court does not re-decide your application and **cannot order that you be given a visa.** It examines whether the officer's decision was reasonable and whether the process was fair. If you win, your file goes back to a **different officer** to be decided again — and that officer can refuse you again.
>
> It also has two stages. You must first be granted **leave** — permission for the Court to hear the case at all. That is decided on paper, with no hearing. Many applications do not get past it, and **if leave is refused, that refusal cannot be appealed** (IRPA s.72(2)(e)).
>
> **The deadline.** IRPA s.72(2)(b) sets two:
> - **15 days** if the matter arose **in Canada**
> - **60 days** if the matter arose **outside Canada**
>
> Both run from the day you were notified of the decision.
>
> **Do not assume you have 60 days because you are in Pakistan.** The law keys the deadline to **where the decision was made**, not where you are living. Some study permit and work permit applications from abroad are decided by offices inside Canada. Working out which deadline applies to your file is a legal question about your specific case, and this tool cannot answer it. **Treat your deadline as 15 days until a licensed representative tells you otherwise.**
>
> If the deadline has already passed, you are not automatically finished: a judge may allow extra time *"for special reasons"* (s.72(2)(c)). That is discretionary and not commonly granted — but it means a missed deadline is a question to put to a licensed representative, not a closed door.
>
> **Re-applying does not cancel your right to seek judicial review.** The two are separate. Only the passage of time ends the court option. You may also ask the visa office to reconsider, though officers are not obliged to respond.
>
> **Time spent waiting for your file or ordering your notes does not stop this clock.**

### 5.5 — Footer, every page

> [Registered name], [licence type and number], College of Immigration and Citizenship Consultants — verify at **https://college-ic.ca/**.
>
> Legal text on this page is quoted from the official consolidations of the Immigration and Refugee Protection Act (current to 26 May 2026, last amended 26 March 2026) and the Immigration and Refugee Protection Regulations (current to 26 May 2026, last amended 26 May 2026). We last opened those pages on [DD Mon YYYY].
>
> **Those are two different dates.** Opening a page does not confirm the law has not changed since the consolidation date. Amendments made after 26 May 2026 may not appear here, and provisions shown but not yet in force are not law. Under the Legislation Revision and Consolidation Act, s.31, a consolidation is evidence of the law, but where it conflicts with the original statute or amendment, **the original wins**.
>
> Immigration rules change. Always check canada.ca. **We do not guarantee outcomes and we do not publish success rates we cannot prove.**

### 5.6 — "How to tell a real IRCC source" (sidebar, every page)

> Real Government of Canada sources: **canada.ca**, **ircc.canada.ca**, **laws-lois.justice.gc.ca** (the law itself), **decisions.fct-cf.gc.ca** (Federal Court decisions), **gazette.gc.ca**.
>
> There is a commercial website at the address **ircc.com**. It is **not** Immigration, Refugees and Citizenship Canada. It ranks highly in search results and looks official. Several of the most-repeated "facts" about Pakistani applications — specific processing-week figures, claims about which office handles your file — trace back to sites like it, and we could not corroborate any of them in a government source.

### 5.7 — Where the disclaimer does NOT help (internal build note, not published)

A disclaimer does not cure an IRPA s.91 problem. You cannot disclaim your way out of giving restricted advice; what matters is what the tool actually did. The disclaimers above manage honesty and expectation. The scope rules in Section 6 are what manage s.91.

---

## 6. WHAT THE TOOL MUST NOT SAY

### 6.1 — REFUTED. These are wrong. They must not appear in any form.

1. **"The refusal letter has a fixed skeleton."** It does not. Letters issue under materially different provisions with different bodies.
2. **"There are eight 'will you leave' factors."** The form lists **ten**. Two were dropped by the source that circulated the eight, including "history of contravening the conditions of admission on a previous stay" — the least paperwork-fixable factor on the list.
3. **"Beyond those, there are three further tick-boxes."** There are at least seven further items plus a full inadmissibility section.
4. **"Every visitor-visa refusal letter cites IRPR 179(b)."** The form cites IRPA s.11(1) and s.16(1). Many letters never print 179(b).
5. **"IRPR 179 contains a sufficiency-of-funds requirement."** It does not.
6. **"The sufficient-funds box has nothing to do with leaving Canada."** Its own wording ends *"and to effect your departure."*
7. **"The study permit financial box is a 216(1) item."** It is **IRPR s.220(b)**, a separate provision.
8. **"'Proposed studies not reasonable' is the box that most often cannot be cured by resubmission."** Unsourced, and in tension with the volume of Federal Court decisions setting these findings aside. Cut entirely.
9. **"Financial ability" in the studies-not-reasonable list.** Uncorroborated. Also do not drop the qualifier **"one or more of"**.
10. **"Only the officer's satisfaction matters; the regulations say 'satisfied'."** The regulations say *"it is established that."*
11. **"If the seven conditions are met the officer must issue."** IRPA s.11(1) says the visa *"may be issued if… the officer is satisfied."* Do not teach a checklist-compels-approval model.
12. **"A Pakistani applicant cannot request their own GCMS notes directly / needs a Canadian representative."** False since 13 July 2022 (SOR/2021-174). This is the single most expensive falsehood available on this subject.
13. **"IRCC's published guidance contradicts the extension order."** It does not. IRCC's own Help Centre states the correct rule. The apparent contradiction was a search snippet conflating the Access to Information Act rule with the Privacy Act.
14. **"The ATIA route is a working fallback for your own file."** It is narrower, not broader — costs $5 and requires a requester present in Canada.
15. **"Officer decision notes mean an ATIP request is now unnecessary."** They are a summary of the decision, not the full record, and have been reported as word-for-word duplicates of the refusal letter.
16. **"Officer decision notes are temporary-resident-only."** Reporting indicates extension to most PR applications on 26 May 2026, with H&C added to the exclusion list.
17. **"You have 60 days because you are outside Canada."** The trigger is where the **matter arose**.
18. **"Re-applying burns your judicial review right."** It does not. Only time does.
19. **"Judicial review is your only route."** Reconsideration and re-application also exist.
20. **"IMM 5744 is only needed when someone else requests for you."** Also needed for family members' information in your own file.
21. **"A court order alone lets one parent consent for a minor."** It is one parent's signature **plus** the order.
22. **"IMM 5744 is the October 2018 version"** / **"blue ink is just a practical tip."** It is 09-2018, and the blue-ink, no-e-signature rule is printed on the form twice.
23. **"The Punjab Travel Professionals Regulation Act 2012 applies to us."** That is **Indian** Punjab legislation. It has no application in Pakistan. Correct it wherever it appears in firm documents — do not merely soften it.
24. **"The pause on immigrant visa issuances for Pakistani citizens affects this."** That is a **United States** measure. It has no bearing on Canadian visas.
25. **"You were entitled to be warned of the officer's concerns and given a chance to respond."** Mis-stated from the source. Do not publish in any form.

### 6.2 — UNVERIFIABLE. Real or not, we cannot source it. Do not publish.

- **The work permit tick-box list.** No primary or transcribed reproduction obtained. Do not copy the TRV list across.
- **Any Pakistan approval or refusal rate.** IRCC publishes counts by country, not rates. Approvals-in-month ÷ applications-in-month is arithmetically meaningless (different cohorts), and "TR Approved" mixes new applications with in-Canada extensions. Publishable line: *"IRCC publishes how many applications it receives, finalizes and approves by country, but does not publish an official approval or refusal rate for Pakistan. Be sceptical of any website quoting one."*
- **Any processing-time figure** ("10–14 weeks post-biometrics", any GCMS/ATIP median). No reliable public source.
- **Any claim about which visa office decides Pakistani files**, or routing to Abu Dhabi or London. Say instead: *"IRCC does not publish which office decides your file."*
- **Biometrics fees, validity periods, VAC city lists, VAC relocation and appointment-booking dates.** Verify against ircc.canada.ca/fees and the VFS notices page immediately before publication, or link out rather than restating.
- **IRCC compliance statistics** (87% / 82% / ">75% within 30 days"). Could not be retrieved; the percentages echoed a seeded query rather than being independently confirmed. Do not paste them. If later verified, they must be labelled as measured against the deadline **including extensions**, not against 30 days, and dated to the year ended 31 March 2025.
- **Federal Court leave grant rates or JR success rates for visa refusals.** The widely-cited 5.3%–49.2% figures are **refugee determinations**, not TRV refusals. Do not borrow them.
- **Reconsideration success rates.** None exist publicly.
- **Judicial review cost ranges (CAD 7,000–15,000).** Firms' own price lists, i.e. marketing.
- **Any Federal Court case citation** not read in primary source. Specifically excluded: *"Younus Khan… 2025 FC 247"*, *"Cadougan 2025 FC 329"*, *"Zavala 2026 FC 660"* — could not be confirmed to exist. Also excluded until read: Marr 2011 FC 367, Ali 2013 FC 879, Wophill 2023 FC 1618, Kurukkal 2010 FCA 230, Dhanoa 2009 FC 729, Ogunfowora, Solopova, Serimbetoz, Luk, Goburdhun.
- **The IRCC dual-intent program delivery instruction.** Page not read. Nothing from it may be quoted or paraphrased.
- **"Innocent" or unintentional misrepresentation is excused.** Determined by case law not read. Do not publish as a route out.
- **Any computed misrepresentation ban end-date**, especially for in-Canada determinations.
- **The two-year misrepresentation period** printed on older forms. Current law is five.
- **Bank statement seasoning periods, minimum balances, required document counts.** No published requirement exists.
- **"Reconsideration occurs on an exceptional basis."** Underlying IRCC instruction not located.
- **The gloss that the 15-day deadline applies to an applicant abroad if the officer was in Canada.** Widely repeated, no citation found. The tool states both numbers and the "where the matter arose" trigger, and stops there.
- **The IRPR 200(3)(h) employer ineligibility duration.** Schedule 2, Table 3 not read. No figure may be published.
- **The IMM 5744 16-vs-18 age split by Act.** Sources conflict; presented as unresolved.
- **Any statement about what the ATIP portal's own screens require** (ID uploads, address fields, account creation). Portal not walked.
- **A "typical wait" for anything.**

### 6.3 — LICENSED-REPRESENTATIVE TERRITORY. Never tool output.

The line: **the tool may describe what wording refers to. It may not apply that to this reader and recommend a course of action.**

Never output:
1. "Your refusal was because of X" — a diagnosis of which factor drove the decision.
2. "You should re-apply" / "do not re-apply" **about this reader**. (The general, IRCC-voiced futility statement is fine and required. "Your reapplication is futile" is not.)
3. Whether this reader's facts constitute a change in circumstances.
4. Whether to file judicial review, a reconsideration request, or a fresh application.
5. Any deadline **calculated from the user's own dates**, or a determination of whether their matter arose in or outside Canada.
6. Any assessment of whether a s.40 finding is challengeable, or whether the reader has one.
7. Any probability, score, likelihood, or ranked "next step".
8. Drafting or scripting a reconsideration request or a re-application.
9. Any statement that "the officer was wrong" or that the decision was unreasonable or unfair.
10. Any characterisation of whether the reader falls within IRPR s.206, s.207(c)/(d), or s.207.1(1). Reproduce the cross-reference, link the sections, stop.
11. Any interpretation of the reader's returned GCMS notes.

Also never publish, on regulatory grounds:
- **Outcome guarantees** in any phrasing, including "money-back if refused" (a refund promise reads as an outcome guarantee).
- **Any success rate, approval rate, or overturn rate** the firm cannot substantiate with adequate and proper testing performed **before** the claim is made. Note the prior incident on this project where the bot claimed a "100% success rate" — that class of claim is the single highest-risk item on the site.
- **Superlatives or comparatives**: "best", "#1", "most trusted", "Pakistan's leading", "the only honest firm", "unlike other agents".
- **Anything implying a relationship with, insider access to, or influence over IRCC or any government.**
- **Any suggestion, however oblique, of omitting, reframing, or "improving on" facts.** That edges toward misrepresentation and is reputationally fatal for an honesty-led firm.
- **Testimonials** without written client approval on file.
- **Disparagement** of named competitors, other licensees, or the College.

**Also note the general-impression rule.** Under Competition Act ss.52 and 74.01 the assessment is of the overall impression conveyed, not just literal sentences. A decoder that leaves users believing re-application usually works — when the honest picture is otherwise — is exposed even if no individual sentence is false. Test the finished tool by asking a lay reader what they took away, not by auditing sentences.

---

## 7. OPEN QUESTIONS FOR THE LICENSED CONSULTANT — SIGN-OFF REQUIRED BEFORE LAUNCH

**Blockers. The tool does not go live until 7.1 through 7.5 are cleared.**

**7.1 — Licensing status of the firm.** Does the Canadian side have an authorized representative in good standing — a law society member, Quebec notary, or CICC licensee? Confirm against the CICC public register and the relevant law society directory. **Every CICC-conditional item in this spec depends on this and it has not been checked.** If there is no licensee, the tool must be strictly generic information and must not be paired with any offer of paid Canadian immigration advice.

**7.2 — Does the free-tool-into-paid-funnel structure fall inside IRPA s.91?** IRCC's October 2024 interpretation limits "consideration" to direct or indirect compensation by the client or on their behalf, which puts a genuinely free tool outside s.91 on that reading. But that clarification was aimed at not-for-profit service providers, and s.91(1) also catches **"or offer to do so."** No decided case, IRCC statement, or CICC guidance addressing commercial free-tool lead magnets was found. **This is the biggest unresolved legal question in the project.** Design decision 0.3 (no lead gate) is the conservative mitigation; confirm it is sufficient.

**7.3 — Supervision of Lahore/Islamabad staff.** CICC discipline in 2025–26 has turned on exactly this point, with revocations where offshore unlicensed staff did the work. Confirm the client-facing work is adequately supervised before publishing anything that routes readers into the firm.

**7.4 — Sign-off on every "not fixable without a material change" string.** The underlying legal point is sound and is the honest thing to tell a refused applicant. Characterising any refusal as unfixable is close to the advice line. Each category label and each combination verdict in Section 2 needs a licensee's approval on the exact wording.

**7.5 — Sign-off on the s.40 panel and the judicial review deadline notice.** These are the two highest-stakes screens on the site. Getting the deadline framing wrong is unrecoverable for the reader.

**Verification tasks before launch (human, in a browser, with screenshots and "date modified" stamps recorded):**

**7.6 —** Open the canada.ca **officer decision notes** page. Confirm the 29 July 2025 date, the current coverage list (including whether PR was added on 26 May 2026), the exclusion list (eTA, TRP, H&C, IRCC Portal – New version), and the redaction language.

**7.7 —** Confirm the **current version of IMM 5621** and whether the ten-factor list and the separate boxes are unchanged from 07-2015. The entire reason list rests on this.

**7.8 —** Open the live **IMM 5744** PDF on canada.ca. Confirm the version code, the blue-ink rule, the one-year validity and reuse language, and resolve the **16-vs-18** age threshold.

**7.9 —** Walk the **ATIP Online Request portal** manually with a Pakistani address. Screenshot the eligibility and country steps. Confirm the IRCC route accepts it. This is the point where the post-2022 law and the portal's own stale FAQ could collide in practice.

**7.10 —** Read **IRPR Schedule 2, Table 3** verbatim if any employer-ineligibility duration is ever to be published (currently: none).

**7.11 —** Check the **Canada Gazette Part II** for any IRPA or IRPR amendment after the 2026-05-26 consolidation cut-off. The Regulations were amended **on** the cut-off date, so the blind window is live.

**7.12 —** Read verbatim from the **Canada Gazette** the exact wording of CICC Code s.44(2)(a)–(c) before reproducing it in compliance copy. Substance is certain; the wording was obtained only in paraphrase.

**Questions the firm should resolve but which do not block launch:**

**7.13 —** Whether the firm's **work permit line of business** requires a BEOE/OEP licence under the Emigration Ordinance 1979. This is a business-licensing question, not a publishing one — publishing the decoder is not caught. Note the primary Ordinance text could not be retrieved (beoe.gov.pk blocks automated access) and the s.2 definition of "emigrant" was not verified. Pakistani counsel.

**7.14 —** Whether **PIPEDA** protects data subjects outside Canada who are not Canadian. Design decision 0.1 (stateless) makes this moot; do not spend money litigating it.

**7.15 —** Whether the firm wants to pursue, and fund, obtaining a **verified work permit refusal letter** from a real client file so the work permit decoder can be built for v2. Until then 1.E stands.

**7.16 —** Whether to commission a check of **Federal Court decisions** — read in primary source on CanLII, with paragraph numbers — to support any statement about how often ties refusals or study-plan refusals are set aside. Currently nothing in the tool makes such a statement and nothing should until this is done.

**7.17 —** Re-verification schedule. A refusal decoder quoting a superseded regulation is worse than no decoder. Recommend a quarterly re-check of every Tier 1 citation and a re-read of 7.6–7.8 at each cycle, with the "checked on" date on the footer updated only when someone has actually looked.

---

# APPENDIX A — Claims REFUTED in verification (must not appear anywhere)

## A1. [REFUTED] The TRV refusal letter has a fixed skeleton: a courtesy opening, a single operative refusal sentence tied to IRPR 179(b), then a list of ticked reasons.

**Why refuted:** Refuted on five independent grounds.

(1) THE 179(b) TIE IS NOT IN THE EXHIBIT. I fetched the cited thread (https://www.canadavisa.com/canada-immigration-discussion-board/threads/the-official-refusal-letter-ircc.879672/, 2026-07-20) twice. Both passes return a letter citing only "the Immigration and Refugee Protection Act (IRPA)"; one pass stated explicitly that no section 179 is cited. The claim attributes a citation the document does not contain. IRPR 179(b) is real and does say an officer shall issue a TRV where it is established the foreign national "will leave Canada by the end of the period authorized for their stay under Division 2" (https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-179.html, current to 2026-05-26, fetched 2026-07-20) — but the letter wording that NAMES 179(b) is the older "as stipulated in paragraph 179(b) of the IRPR, based on X" form. The claim's own DETAIL concedes this specimen does not use that form, then asserts the tie regardless. It fuses the old form's legal citation onto the new form's sentence text.

(2) n=1 AND THE SPECIMEN IS ALMOST CERTAINLY A SAMPLE, NOT A REAL LETTER. File number V312345678 is a sequential digit-run placeholder (3-1-2-3-4-5-6-7-8). The thread's only reply is another member asking "Do you have a question." A universal structural claim ("fixed skeleton") cannot be established from one anonymous, unvalidated paste. The claim's own NOT VERIFIED note concedes transcription is unconfirmed, but then states the structural conclusion as fact anyway.

(3) "FIXED SKELETON" IS FALSE FOR THE HIGHEST-STAKES LETTERS. Temporary-residence refusals issue under materially different provisions with different letter bodies and radically different consequences: A11(1); A16(1) (not truthfully answering / not providing requested documents); A40 misrepresentation (statutory bar); inadmissibility findings under A34-42. These are not variants of one template. A decoder built on "the letter always looks like this" will mis-handle an A40 letter — the exact case where re-applying is not merely futile but affirmatively harmful.

(4) STALE ON THE ONE CHANGE THAT MATTERS. Since 29 July 2025 IRCC has reportedly been attaching OFFICER DECISION NOTES to refusal letters for TRVs (excluding eTAs/TRPs), visitor records, study permits and work permits. ASSERTED by CIC News (https://www.cicnews.com/2025/07/refused-applicants-will-now-get-more-transparency-from-ircc-0758357.html, article dated 2025-07-31, fetched 2026-07-20); the canada.ca primary page (https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/officer-decision-notes.html) returned HTTP 403 to automated fetch — I FELL BACK to secondary reporting and did NOT verify this on canada.ca. If accurate, the modern letter is not "opening + one sentence + ticked list"; it may carry the officer's actual reasoning, which is the only portion that reveals whether the file is fixable. Reported carve-out: applicants who used the new IRCC Portal do not receive the notes.

(5) OMITS THE CLOSING BLOCKS. The three-part skeleton drops the no-appeal / judicial-review / passport-return / ATIP material. IRCC: "Under Canada's Immigration and Refugee Protection Act, there's no formal process to appeal decisions on temporary residence applications" and "If you believe the decision is unreasonable or that there was an error in law or fairness, you can file an application for leave and judicial review with the Federal Court of Canada" (https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1675&top=4.11, Date modified 2026-04-17, fetched 2026-07-20).

FINANCIAL-HARM MECHANISM. Framing the letter as "opening -> one operative sentence -> ticked reasons" invites precisely the product that costs this reader money: map each checkbox to a fix, re-file. IRCC states the opposite: "Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision," and changed circumstances still "does not guarantee that an IRCC officer will approve your application" (https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1485&top=16, Date modified 2026-04-17, fetched 2026-07-20).

NOT VERIFIED ANYWHERE: the exact sentence-form checkbox wording (e.g. "Your assets and financial situation are insufficient to support the stated purpose of travel for yourself"). It recurs across third-party consultant sites and Quora as asserted letter text. I found NO IRCC publication of the refusal-letter template. Treat every quoted checkbox as unsourced. "No reliable public source for the official template" is the honest finding.

LICENSED-REPRESENTATIVE FLAG: describing the letter's structure is safe. Telling an individual which provision their refusal was made under, whether to seek leave and judicial review, or how to respond to a misrepresentation finding is advice for consideration and is restricted under IRPA s.91 to lawyers, Quebec notaries, and CICC-licensed consultants. This section must be reviewed by a licensed representative before publication.

**Safe wording instead:**

Replace the claim with the following, and do not restore any "fixed skeleton" framing:

"Refusal letters vary. There is no single official template we can point you to — IRCC does not publish one, and we will not reproduce a specimen from a discussion forum as if it were authoritative.

What we can say, with sources:

- Most visitor-visa refusals turn on IRPR paragraph 179(b): a visa is issued only where it is established that you 'will leave Canada by the end of the period authorized for [your] stay' (Immigration and Refugee Protection Regulations, s.179(b), laws-lois.justice.gc.ca, current to 2026-05-26). Some letters name that paragraph; some describe the requirement in plain sentences without citing it. Both mean the same thing.
- Not every refusal is a 179(b) refusal. Letters also issue under IRPA s.11(1), s.16(1) (not truthfully answering, or not providing requested documents), s.40 (misrepresentation), and inadmissibility provisions. These carry very different consequences — a misrepresentation finding in particular. If your letter mentions section 40 or the word 'misrepresentation', stop and get licensed advice before doing anything else. Do not re-apply.
- Since 29 July 2025 IRCC has reportedly been including the officer's own decision notes with refusal letters for visitor visas, visitor records, study permits and work permits, with portions sometimes withheld, and reportedly not for applications filed through the new IRCC Portal. We report this from secondary coverage (CIC News, 31 July 2025); the canada.ca page blocked our automated check, so we have not verified it against the primary source. If your letter includes notes, those notes — not the checked boxes — are the part that actually tells you what happened.
- There is no appeal. IRCC: 'Under Canada's Immigration and Refugee Protection Act, there's no formal process to appeal decisions on temporary residence applications.' The route, if any, is leave and judicial review at the Federal Court (ircc.canada.ca, modified 2026-04-17).

When re-applying will not help you. IRCC's own words: 'Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision.' If nothing about your finances, employment, ties, or purpose of travel has genuinely changed since the refusal, a second application is very likely to be refused again, and each refusal sits on your record. Even where circumstances have changed, IRCC states this 'does not guarantee that an IRCC officer will approve your application' (ircc.canada.ca, modified 2026-04-17).

This tool explains what the words in your letter refer to. It does not tell you which provision applies to your file, whether to seek judicial review, or what to file next. Under IRPA s.91 only a lawyer, a Quebec notary, or a CICC-licensed consultant may advise or represent you on that for a fee."

## A2. [REFUTED] IRCC's program delivery instruction on dual intent could NOT be verified directly (canada.ca returned HTTP 403), so the researcher fell back to secondary sources and labelled the content as asserted, not verified.

**Why refuted:** The claim's epistemic posture (label unverified things as asserted) is correct and worth preserving, but the claim as written fails on three checkable particulars, one of which is dangerous to this audience.

1. THE CITED URL IS WRONG. The claim cites .../temporary-residents/dual-intent-applicants.html. The real path contains an additional /visitors/ segment: https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/dual-intent-applicants.html — this is the URL linked by Heron Law (article dated 11 Apr 2023), and I confirmed it independently: the Internet Archive availability API returns a snapshot with HTTP status 200, timestamp 20260708175342 (8 Jul 2026) for the /visitors/ URL, and returns zero snapshots for the URL in the claim. An honesty-led public tool would have shipped a citation to a page that does not exist.

2. "COULD NOT BE VERIFIED" IS NOT ESTABLISHED — the 403 carries no information, and a verification route existed. I tested canada.ca's blocking by fetching a URL I invented (.../temporary-residents/this-page-does-not-exist-test-12345.html). It returned the identical HTTP 403. So canada.ca 403s indiscriminately and a 403 cannot distinguish a real page from a fabricated path — it masked defect #1. Separately, an archived capture of the correct page exists (status 200, 8 Jul 2026, twelve days before the 20 Jul 2026 attempt). The researcher treated the first blocked fetch as a dead end and jumped to law-firm commentary without trying the correct URL or an archive. The correct finding is "not yet verified — I used the wrong URL and did not exhaust available routes," not "cannot be verified."

3. THE PROCEDURAL FAIRNESS POINT IS MIS-STATED, NOT MERELY UNVERIFIED. This is the material harm. The claim renders it as: "where an officer has concerns about intentions the applicant should be made aware and given an opportunity to respond." The wording actually reproduced from the PDI by the source that quotes it (Heron Law) is: "Each applicant receives the benefit of a procedurally fair, individual assessment, which takes into account the entire context." Those are two different propositions. The second describes a quality of assessment; the claim's version asserts an entitlement to notice and a right to respond. That is not a weakly-sourced version of the guidance — it is a different statement.

Why this costs the reader money: Federal Court case law distinguishes officer concerns about credibility, authenticity, or extrinsic evidence (where a fairness letter may be owed) from concerns about sufficiency of evidence (where no such duty arises, because the applicant was directed to file a complete application). Dual-intent and "not satisfied you will leave at the end of your stay" refusals are overwhelmingly the sufficiency kind. A refused visitor-visa applicant who reads "the officer should have told me and let me respond" may conclude they have a procedural fairness ground and pay for a Federal Court judicial review leave application that is very likely to fail. That is precisely the doomed-filing harm this tool exists to prevent, and it would be inflicted by the tool itself.

4. CURRENCY RISK NOT ADDRESSED. The claim describes the page as "the revised (reportedly April 2023) instructions," sourced to commentary from April 2023. The only capture I could locate is from July 2026. Three years of possible amendments sit between the commentary and the live page. PDIs are amended without notice, so 2023 commentary cannot be published as a description of current IRCC guidance.

WHAT I DID VERIFY (first-hand, not asserted): IRPA s.22(2), fetched directly from laws-lois.justice.gc.ca/eng/acts/i-2.5/section-22.html on 20 Jul 2026, Act current to 2026-05-26, last amended 2026-03-26, reads verbatim: "An intention by a foreign national to become a permanent resident does not preclude them from becoming a temporary resident if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay." This is statute, is the load-bearing legal anchor, is fetchable without any 403, and is the only part of this cluster safe to publish now. Note what it actually does: it removes PR intent as an automatic bar, and simultaneously puts the burden on the applicant to satisfy the officer they will leave. Half of that provision is bad news for the reader and the secondary-source framing ("good news," "legitimate") tends to bury it.

STILL UNVERIFIED and must stay out of the tool: the PDI page body text, the GCMS-notes wording, the officer-flexibility wording, and the Date modified stamp. The recommendation to have a human open the page and record the Date modified is sound and should be kept — but it must be pointed at the corrected /visitors/ URL.

**Safe wording instead:**

Publish only the statute-anchored version below. Drop the procedural fairness entitlement entirely until a human confirms the live page wording.

"What the law says about wanting to stay permanently

Section 22(2) of the Immigration and Refugee Protection Act says: 'An intention by a foreign national to become a permanent resident does not preclude them from becoming a temporary resident if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay.' (Source: laws-lois.justice.gc.ca/eng/acts/i-2.5/section-22.html — Act current to 26 May 2026.)

Read both halves. Wanting to immigrate one day is not, by itself, a reason to refuse you. But the same sentence puts the burden on you: the officer has to be satisfied you will leave at the end of your authorized stay. You have to satisfy them — they do not have to prove you would overstay.

If your refusal letter ticked 'purpose of visit' or said the officer was not satisfied you would leave Canada at the end of your stay, this is the provision being applied.

Before you pay to re-apply, ask yourself honestly: has anything actually changed since the refusal? Officers assess the file in front of them. If your ties, finances, employment, and reason for travel are the same as last time, and you send substantially the same documents, you are inviting the same conclusion. Re-applying with unchanged facts and a better-worded letter is the single most common way refused applicants lose money twice. A new application is worth filing when a fact has genuinely changed — new employment, a documented reason to return, a materially different purpose of travel, or evidence you had but did not submit.

IRCC also publishes internal guidance for officers on dual intent. Officer guidance is not law, IRCC can change it at any time without notice, and it does not create rights you can enforce. We are not quoting it here until we have confirmed the current wording directly."

Do NOT publish, in any form: that you were entitled to be warned of the officer's concerns; that you should have been given a chance to respond; that a procedural fairness letter was owed; or any suggestion that the absence of one is a ground of challenge. If the firm later wants to address procedural fairness, it needs the confirmed live PDI wording AND a licensed representative's sign-off on how it is framed — the distinction between credibility concerns and sufficiency concerns is doing all the work and getting it wrong points readers at a filing that will very likely fail.

Correct any internal note to cite the /visitors/ URL: https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/dual-intent-applicants.html and record the Date modified from the live page, not from 2023 commentary.

## A3. [REFUTED] IRCC's own public guidance still appears to say the opposite (that foreign citizens not present in Canada cannot directly request their personal information) — a live contradiction of the Privacy Act Extension Order No. 3 that the tool must handle carefully.

**Why refuted:** No live contradiction exists. I verified IRCC's current guidance from two independent angles that the original researcher did not try. (1) ircc.canada.ca (a DIFFERENT host from www.canada.ca) does NOT 403 — WebFetch on https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=459&top=1 (Date modified 2026-04-17) returned: "Canadian citizens, permanent residents, and foreign nationals, regardless of where they are located, can request access to their personal information held by federal government institutions under the Privacy Act." (2) For the www.canada.ca page the claim names as contradictory, I bypassed the 403 with a curl fetch of the Wayback capture web.archive.org/web/20260513225441/ (2026-05-13, ~2 months old) and grepped the raw HTML: line 324 carries the identical "foreign nationals, regardless of where they are located" sentence. The disputed sentence is absent. I additionally grepped the 2020-04-21 capture of the same page, the 2026-01-14 capture of requests-information-act.html, the 2026-05-15 capture of imm5744.html, and the 2026-03-07 capture of the ATIP landing page (which independently states the same rule) — the sentence appears in NONE of them.

The snippet the claim relies on is almost certainly a search-engine summary that conflated the Access to Information Act rule with the Privacy Act. IRCC qnum=458 ("Who can make a request under the Access to Information Act?", modified 2026-04-17) does say access is for "Canadian citizens, permanent residents and any individual present in Canada," with a written-consent representative route for others. That is correct ATIA law and is not in conflict with the Privacy Act.

Statute verified at laws-lois: Privacy Act Extension Order, No. 3, SOR/2021-174 — "The right to be given access to personal information under subsection 12(1) of the Privacy Act is extended to include all individuals outside Canada to whom that right has not been extended previously"; in force on the first anniversary of the day made (made 2021-07-13, in force 2022-07-13).

MONEY HARM: the recommendation steers a refused applicant abroad toward the ATIA/representative route as a "working fallback." Verified from the same captures: the Privacy Act page states "There are no fees involved with the processing of a request under this Act," while the ATIA page states "The fee for requests under the Access to information Act is $5.00." The ATIA route also requires the IMM 5744 consent form and a Canadian-citizen/PR intermediary — reintroducing exactly the agent dependency and cost this tool exists to remove. Publishing the claim would cost the reader money and time for no legal benefit.

CAVEAT TO CARRY FORWARD: the dcterms.modified meta tag on the archived Privacy Act page reads 2018-04-24 while the body text carries post-2022 wording. The date stamp is stale; do not use it to date the content. Cite the Help Centre page's 2026-04-17 stamp instead.

METHOD NOTE for the firm: www.canada.ca 403s automated fetching, but ircc.canada.ca/english/helpcentre/ does not, and Wayback captures of canada.ca are retrievable by curl (WebFetch is blocked on web.archive.org; curl is not). Future canada.ca verification should use these two routes before falling back to search snippets. This episode is a concrete case of a search snippet manufacturing a false conflict.

**Safe wording instead:**

Replace the "live contradiction" framing entirely. Suggested copy:

"Since 13 July 2022, you can request your own IRCC file directly under the Privacy Act even if you are outside Canada and are not a Canadian citizen or permanent resident. This changed with the Privacy Act Extension Order, No. 3 (SOR/2021-174), which extended the right of access under subsection 12(1) of the Privacy Act to all individuals outside Canada.

IRCC's own guidance says the same thing. Its Help Centre page 'Who can make a request under the Privacy Act?' (checked 2026-04-17) states: 'Canadian citizens, permanent residents, and foreign nationals, regardless of where they are located, can request access to their personal information held by federal government institutions under the Privacy Act.'

There is no fee for a Privacy Act request. You do not need to pay an agent, and you do not need a Canadian citizen or permanent resident to file on your behalf. If anyone charges you a fee simply to obtain your own file, you are paying for something you can do yourself for free.

A separate rule applies to the Access to Information Act, which covers general government records rather than your own personal information. That route is limited to Canadian citizens, permanent residents and people present in Canada, costs $5.00, and does require a representative with your written consent (form IMM 5744) if you are abroad. Do not confuse the two — for your own refusal file, the free Privacy Act route is the correct one.

Sources: Privacy Act Extension Order, No. 3, SOR/2021-174, laws-lois.justice.gc.ca/eng/regulations/sor-2021-174/FullText.html; IRCC Help Centre qnum=459 and qnum=458, ircc.canada.ca (both checked 20 July 2026, page date modified 2026-04-17)."

DO NOT publish: any warning that IRCC's page "may still describe the old rule," any suggestion the representative/ATIA route is a needed fallback, or any hedge implying a direct request "could in practice be bounced" — none of that is supported and all of it pushes the reader toward an unnecessary $5 fee plus an agent.

BOUNDARY LINE: stating how to obtain your own record is procedure, not advice. The moment the tool interprets what the returned notes mean for the reader's chances, or whether to reapply, it must hand off to a licensed representative.


---

# APPENDIX B — Claims flagged as needing licensed review

## B1. [IMPRECISE] IRCC does NOT publish the refusal letter template. Every reproduction of the tick-box wording comes from applicants' own letters posted to forums or reproduced by law firms — not from a government sou

**Safest wording found:** IRCC does not publish a blank copy of the standard refusal letter template on canada.ca, and we could not find one in any program delivery instruction or ATIP release. The wording shown here is drawn from two kinds of sources: (1) refusal letters quoted verbatim inside published Federal Court decisions — a government source you can look up yourself at decisions.fct-cf.gc.ca; and (2) letters applicants have shared publicly. We have flagged which is which. Wording varies by visa office and changes over time, so treat this as "the reasons applicants most commonly report", not an official list — your own letter is the authority.

Also note: for applications refused on or after 29 July 2025, IRCC reports that it now sends the officer's decision notes together with the refusal letter for visitor visas, visitor records, study permits and work permits (not eTAs or TRPs, and not applications made through the new IRCC Portal). If notes came with your letter, read those first — they say more than the tick-boxes, and you may not need to pay anyone to order GCMS notes. We have not been able to confirm this directly on canada.ca because the page blocks automated access; verify it against your own letter.

## B2. [REFUTED] The TRV refusal letter has a fixed skeleton: a courtesy opening, a single operative refusal sentence tied to IRPR 179(b), then a list of ticked reasons.

**Safest wording found:** Replace the claim with the following, and do not restore any "fixed skeleton" framing:

"Refusal letters vary. There is no single official template we can point you to — IRCC does not publish one, and we will not reproduce a specimen from a discussion forum as if it were authoritative.

What we can say, with sources:

- Most visitor-visa refusals turn on IRPR paragraph 179(b): a visa is issued only where it is established that you 'will leave Canada by the end of the period authorized for [your] stay' (Immigration and Refugee Protection Regulations, s.179(b), laws-lois.justice.gc.ca, current to 2026-05-26). Some letters name that paragraph; some describe the requirement in plain sentences without citing it. Both mean the same thing.
- Not every refusal is a 179(b) refusal. Letters also issue under IRPA s.11(1), s.16(1) (not truthfully answering, or not providing requested documents), s.40 (misrepresentation), and inadmissibility provisions. These carry very different consequences — a misrepresentation finding in particular. If your letter mentions section 40 or the word 'misrepresentation', stop and get licensed advice before doing anything else. Do not re-apply.
- Since 29 July 2025 IRCC has reportedly been including the officer's own decision notes with refusal letters for visitor visas, visitor records, study permits and work permits, with portions sometimes withheld, and reportedly not for applications filed through the new IRCC Portal. We report this from secondary cover

## B3. [IMPRECISE] There appear to be TWO circulating wordings for the same reasons — the older 'I am not satisfied that you will leave Canada… based on [factor]' form, and a newer plainer sentence form. The decoder sho

**Safest wording found:** Replace the claim with the following, and treat the parser notes as build requirements rather than prose:

"Refusal letters do not all look the same. We have seen at least three layouts in circulation:

- Each reason written out in full, repeating the statute: 'I am not satisfied that you will leave Canada at the end of your stay as a temporary resident, as stipulated in paragraph 179(b) of the IRPR, based on your travel history' (seen in letters posted publicly in 2019).
- One opening sentence citing the statute, then short bulleted factors (seen in a letter posted in 2024).
- One opening sentence, then plain standalone sentences such as 'The purpose of your visit to Canada is not consistent with a temporary stay given the details you have provided' (seen in letters posted in 2026).

We infer the plainer layout is more recent from the dates of the letters people have posted publicly. IRCC does not publish its refusal-letter templates, so we cannot confirm when or whether the wording officially changed. Your letter may use any of these layouts, and the layout tells you nothing about your chances.

Paste or select your reasons in whatever form they appear — the tool reads the underlying factor, not the sentence style."

Build requirements the decoder must satisfy:

1. Match on factor, but treat matching as many-to-many, not one-to-one. 'Your assets and financial situation are insufficient to support the stated purpose of travel' must map to BOTH assets/financial status AND pur

## B4. [IMPRECISE] Beyond the eight 'will you leave' factors, three further tick-boxes exist that are NOT about leaving Canada — sufficiency of funds, insufficient documentation, and document authenticity. The authentic

**Safest wording found:** Use this in place of the claim's framing.

--- WHAT YOUR LETTER IS ---
Your refusal letter is a checklist (IRCC form IMM 5621). Only the boxes that are actually ticked apply to you. Read your own letter box by box — this tool decodes the printed wording, it does not know your file.

If you were refused on or after 29 July 2025, your letter probably also has "officer decision notes" attached — the officer's own written reasons. Read those first. They override any guess based on tick-boxes alone. (Reported by CIC News, 31 Jul 2025, and Green and Spiegel, 15 Sep 2025; IRCC's own page at canada.ca blocked our automated check, so we are relying on those reports.)

--- THE "WILL YOU LEAVE CANADA" BLOCK: TEN FACTORS, NOT EIGHT ---
If the box "You have not satisfied me that you would leave Canada at the end of your stay as a temporary resident" is ticked, the form lists ten factors underneath it:
travel history; immigration status in country of residence; family ties in Canada and in country of residence; length of proposed stay in Canada; purpose of visit; employment prospects in country of residence; current employment situation; personal assets and financial status; having a legitimate business purpose in Canada; any history of contravening the conditions of admission on a previous stay in Canada.
Check all ten against your letter. The last one — contravening conditions on a previous stay — is not a paperwork problem and is not fixed by a better bank statement.

--- SEPARATE BOXES

## B5. [IMPRECISE] Study permit refusal letters use a different list from TRV letters — same statutory-hook structure but citing subsection 216(1) IRPR, plus a study-specific reason ("Your proposed studies are not reaso

**Safest wording found:** Suggested replacement for the whole section:

"Study permit refusals use a different letter from visitor visa (TRV) refusals.

The 'will you leave Canada' boxes cite subsection 216(1) of the Immigration and Refugee Protection Regulations instead of the TRV's section 179(b). Paragraph 216(1)(b) says an officer must be satisfied you 'will leave Canada by the end of the period authorized for their stay.' [Source: IRPR s.216, laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-216.html — text current to 26 May 2026, checked 20 July 2026.]

Money is assessed under a SEPARATE provision, paragraph 220(b), not under 216(1). Its own line usually reads: 'Pursuant to paragraph 220(b) of the IRPR, I am not satisfied that you have sufficient and available financial resources, without working in Canada, to maintain yourself and any family members who are accompanying you during your proposed period of study.' Section 220 requires enough money for tuition, living costs, and travel to and from Canada, without working here. [Source: IRPR s.220, laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-220.html — checked 20 July 2026.]

Why the difference matters: a 220(b) box is about your EVIDENCE of funds — how much, whose money, where it came from, how long it has been in the account. A 216(1) box is about the officer's judgement that you might not leave. They are different problems and they are not fixed the same way.

One box has no visitor-visa equivalent: 'Your proposed stu

## B6. [IMPRECISE] Work permit refusals use the same structure again, citing paragraph 200(1)(b) IRPR. I did NOT obtain a verbatim reproduction of the work permit tick-box list.

**Safest wording found:** Work permits: what we have verified, and what we have not.

VERIFIED. Immigration and Refugee Protection Regulations s.200(1)(b) requires that "the foreign national will leave Canada by the end of the period authorized for their stay under Division 2 of Part 9." Source: https://laws-lois.justice.gc.ca/eng/regulations/sor-2002-227/section-200.html, regulation current to 2026-05-26, retrieved 2026-07-20.

VERIFIED. s.200(2) states that paragraph (1)(b) "does not apply to a foreign national who satisfies the criteria set out in section 206 or paragraph 207(c) or (d)." If you fall in those categories, the leave-Canada test does not apply to you at all. Same source and date.

VERIFIED. A work permit can be refused on grounds that have nothing to do with whether you will leave Canada — s.200(3)(a) (reasonable grounds to believe you are unable to perform the work sought), s.200(3)(e) (prior non-compliance with conditions), and s.200(3)(h) (ineligible employer), among others. Same source and date. This matters for money: if your refusal rests on one of these, submitting more evidence of ties to Pakistan will not address it, and re-applying without changing the underlying fact will not help you.

NOT VERIFIED — WE ARE NOT SHOWING YOU A WORK PERMIT LIST. We were unable to obtain a primary or transcribed reproduction of the reason list used in IRCC work permit refusal letters. Law-firm pages paraphrase it; we found none that reproduce it. We will not copy the visitor-visa list across, b

## B7. [IMPRECISE] The statutory hooks are VERIFIED against Justice Laws. All three regulations say essentially the same thing: the officer must be satisfied the person will leave. (IRPR ss.179(b), 216(1), 200(1)(b))

**Safest wording found:** Use this instead:

"Most temporary-resident refusals turn on one requirement that appears in three parallel places in the Immigration and Refugee Protection Regulations (SOR/2002-227). The wording is nearly identical in each:

- Visitor visa — s.179(b): the officer must find it 'established that the foreign national ... will leave Canada by the end of the period authorized for their stay under Division 2.'
- Study permit — s.216(1)(b): '... will leave Canada by the end of the period authorized for their stay under Division 2 of Part 9.'
- Work permit — s.200(1)(b): same wording as s.216(1)(b).

(Text read from laws-lois.justice.gc.ca on 2026-07-20; the site states the consolidation is current to 2026-05-26. Confirm against the current version before relying on it.)

Three things this does NOT mean:

1. This is one requirement among several. Section 179 sets out seven separate conditions, (a) through (g). Study and work permits each add their own. Work permits also have separate mandatory-refusal grounds in s.200(3), including where the officer has reasonable grounds to believe the applicant is unable to perform the work sought — which has nothing to do with intent to leave. If your letter ticks more than one box, each box needs to be read on its own.

2. It does not apply to everyone. Sections 216(2) and 200(2) both provide that the 'will leave Canada' paragraph does not apply to people described in s.206 and paragraphs 207(c) and (d) — which includes certain refugee claimant

## B8. [IMPRECISE] The refusal letter itself explains nothing (purely ticked boxes with no reasoning), but since 29 July 2025 IRCC has been sending a second document — Officer Decision Notes — with many temporary-reside

**Safest wording found:** Replace the claim's framing with this:

"Most Canadian temporary-resident refusal letters are a checklist. The officer ticks which concerns applied — for example purpose of visit, family ties, or finances — and cites the provision they refused you under, usually IRPR s.216(1) for study permits or s.179 for visitor visas. Those ticks tell you which test you failed. They do not tell you what evidence the officer looked at or why they were not persuaded.

Since 29 July 2025, IRCC has been sending officer decision notes together with refusal letters for many temporary-resident decisions — temporary resident visas, visitor records, study permits and work permits, including extensions. You do not have to request them. IRCC's own page indicates the program was later extended to most permanent-residence applications; we have not been able to read that page directly (it blocks automated access) and have not confirmed the exact date, so check canada.ca before relying on it.

You will probably NOT have received officer decision notes if: your refusal was before 29 July 2025; you applied through the IRCC Portal – New version; or you were refused an eTA or a temporary resident permit. IRCC may also remove parts of the notes for privacy or security reasons. If you did not get notes, that is common and does not mean anything went wrong with your file.

If you did get notes, read them — but do not assume they are the full story. Immigration lawyers have reported cases where the notes were es

## B9. [IMPRECISE] IRCC Help Centre #1485 states that reapplying with the same information will likely not change a refusal decision; this is the single most useful citable line for the refusal-letter decoder tool, and 

**Safest wording found:** Recommended tool text — every sentence traceable to a verified source.

--- General rule (all streams) ---
IRCC's own Help Centre says: "If we refuse your application to come to Canada, you can apply again at any time, unless your decision letter says you can't. You should only apply again if you can include information that you didn't include before."
— IRCC Help Centre #023, "If my immigration application is refused, do I have to wait before I apply again?", modified 2026-04-17. Read at ircc.canada.ca/english/helpcentre/answer.asp?qnum=023&top=4 on 2026-07-20.

Plain English: there is usually no waiting period. That is not the same as saying a fresh application will work. IRCC's position is that you should reapply only if you have something new to put in front of the officer.

--- Visitor visas specifically ---
For visitor visas, IRCC is blunter: "Applying again with the same information, even with an immigration representative, such as a consultant or agent, will likely not change this decision."
— IRCC Help Centre #1485, "My application for a visitor visa was refused. Should I apply again?", modified 2026-04-17. Read at ircc.canada.ca/english/helpcentre/answer.asp?qnum=1485&top=16 on 2026-07-20. (This page addresses visitor visas. For work or study permits, the general rule in #023 applies.)

IRCC says your situation must actually have changed, and lists examples: the purpose of your visit has changed; your employment or financial situation has changed; you applied for cr

## B10. [IMPRECISE] What the officer is actually assessing behind each factor — flagged as INTERPRETATION, not sourced fact.

**Safest wording found:** Replace the claim's framing with the following, and treat every bracketed item as a publication gate.

ON SOURCING (label to appear on every explanation panel):
"IRCC does not publish a document explaining what an officer weighs behind each box on your refusal letter. The explanations below are how practitioners read this wording. They are not IRCC policy and they are not a statement about your case."

ON THE FAMILY-TIES BOX:
"Your letter combines two different concerns into one line: ties in Canada and ties in your country of residence. It does not tell you which one the officer was concerned about. Anyone who tells you which one — without having read your file — is guessing, and acting on a guess means you may spend money fixing the wrong thing.
The officer's actual reasoning is normally written in the GCMS notes on your file. Be aware of a limit that affects most applicants outside Canada: under section 12(1) of the Privacy Act, the right to request your own records belongs to Canadian citizens and permanent residents. If you are outside Canada, you generally cannot file this request yourself — it must be filed by a representative in Canada, with your signed consent (IMM 5744)."
[Verified: Privacy Act s.12(1), laws-lois.justice.gc.ca, current to 2026-05-26. The IMM 5744 / representative mechanic is asserted by multiple practitioner sources and was NOT verified against an IRCC page — verify before publishing, or drop the form number and say only that a representative in Can

## B11. [IMPRECISE] IRPR s.179 is the operative provision for visitor visa (TRV) refusals, and s.179(b) is the 'will leave Canada' test. Verified text, consolidated current to 2026-05-26.

**Safest wording found:** Under the Immigration and Refugee Protection Regulations, a temporary resident visa is issued when the applicant establishes the conditions in section 179. Section 179 says an officer "shall issue a temporary resident visa to a foreign national if, following an examination, it is established that the foreign national" meets seven paragraphs, of which paragraph (b) is the one most refusals turn on: the applicant "will leave Canada by the end of the period authorized for their stay under Division 2."

[Source: Justice Laws Website, SOR/2002-227 s.179, laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-179.html — consolidation current to 2026-05-26; the section's own amendment note reads SOR/2012-154, s. 9; SOR/2013-210, s. 1. Retrieved 2026-07-20.]

Three things this does and does not mean:

1. WHICH RULE APPLIES TO YOU. Section 179 is about the VISA. If you were refused a STUDY PERMIT, your equivalent rule is s.216(1)(b); for a WORK PERMIT it is s.200(1)(b). All three carry the same "will leave Canada by the end of the period authorized for their stay" test, so the reasoning is similar, but the provision number on your letter should match the thing you applied for. A TRV refusal usually rests on IRPA s.11(1) and s.20(1)(b) together with IRPR s.179(b), not on s.179 by itself.

2. "SHALL" DOES NOT MEAN THERE IS A CHECKLIST THAT FORCES APPROVAL. Section 179 says "shall issue ... if it is established", and IRPA s.11(1) says the visa "may be issued if ... the officer is s

## B12. [IMPRECISE] The same 'will leave Canada' test is replicated for study permits at IRPR s.216(1)(b) and for work permits at IRPR s.200(1)(b). Verified.

**Safest wording found:** Publish this instead of the claim as drafted:

"Both streams carry the same statutory wording. A study permit officer must be satisfied you 'will leave Canada by the end of the period authorized for their stay under Division 2 of Part 9' (IRPR s.216(1)(b)). The work permit provision uses the identical words (IRPR s.200(1)(b)). Verified against the Justice Laws text, fetched 20 July 2026, current to 26 May 2026.

Identical wording is not the same as an identical decision. Two things differ, and both matter if you are deciding whether to re-apply.

First, BOTH sections switch this test off for certain applicants — not just the study stream. IRPR s.216(2): 'Paragraph (1)(b) does not apply to persons described in section 206 and paragraphs 207(c) and (d).' IRPR s.200(2): 'Paragraph (1)(b) does not apply to a foreign national who satisfies the criteria set out in section 206 or paragraph 207(c) or (d).' If your refusal letter ticks the leave-Canada box and you believe you fall under s.206 or s.207(c)/(d), read those sections — we have not summarised who they cover here, because whether a particular person is described in them is a legal characterisation, not something this tool can tell you.

Second, and this is the part that determines whether re-applying is worth money: the work permit section contains a separate list of MANDATORY bars at IRPR s.200(3) — 'An officer shall not issue a work permit to a foreign national if...'. These include inability to perform the work sought (a)

## B13. [IMPRECISE] IRPR s.200(3) contains MANDATORY refusal grounds for work permits — these are categorically different from a discretionary 'ties' refusal and some cannot be cured by re-applying.

**Safest wording found:** Replace the entry with the following, and do not publish the "mandatory vs discretionary" framing at all.

HEADING: Some work permit refusals are not about how convincing you were

Most refusals turn on something you can try to prove better next time. A smaller group turns on a fact that exists outside your application — a date, a certificate you do not hold, or your employer's status. Filing again without that fact changing produces the same result.

The Immigration and Refugee Protection Regulations, s.200(3), open with: "An officer shall not issue a work permit to a foreign national if" — followed by a list. Where one of these applies, the officer has no room to be persuaded.

The list (verified verbatim, text current to 26 May 2026):
- (a) there are reasonable grounds to believe you are unable to perform the work sought
- (b) you intend to work in Quebec without a Certificat d'acceptation du Québec, in a case where a s.203 determination is required and Quebec law requires the CAQ — this does NOT apply to every Quebec job
- (c) the work is likely to adversely affect the settlement of a labour dispute in progress, or the employment of anyone involved in it
- (d) repealed (SOR/2017-78)
- (e) you have engaged in unauthorized study or work in Canada, or failed to comply with a condition of a previous permit or authorization — subject to four exceptions, below
- (f) issuance would be inconsistent with a federal-provincial agreement (applies only to applicants under subparagraph

## B14. [IMPRECISE] DUAL INTENT: IRPA s.22(2) is short, and its text does exactly what the myth denies. Verified verbatim. (Including the decoding that s.22(2) means "I was refused because I said I want to immigrate — th

**Safest wording found:** Recommended replacement for the decoder entry:

WHAT THE LAW ACTUALLY SAYS (verbatim, IRPA s.22(2), Justice Laws, current to 2026-05-26, last amended 2026-03-26): "An intention by a foreign national to become a permanent resident does not preclude them from becoming a temporary resident if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay."

WHAT THAT MEANS IN PLAIN ENGLISH:
- Wanting to immigrate permanently is not, by itself, an automatic bar to a temporary visa. It is also not "inadmissibility" — s.22(1) lists "is not inadmissible" as a separate requirement of its own.
- But read the second half of the sentence. The protection is conditional: it operates only "if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay." s.22(2) does not require anyone to give you a visa.
- The visa decision itself is made under the Regulations, not under s.22(2): a visitor visa under IRPR 179(b), a work permit under IRPR 200(1)(b), a study permit under IRPR 216(1)(b). Each says the officer issues it if "it is established that" you "will leave Canada by the end of the period authorized for their stay." The word "established" matters: the burden is on YOU to prove it, not on the officer to disprove it.

TWO THINGS TO BE CAREFUL ABOUT:
1. "Dual intent means they have to give me the visa." No. Nothing in s.22(2) creates an entitlement. The leave-Canada finding still has to be established under

## B15. [REFUTED] IRCC's program delivery instruction on dual intent could NOT be verified directly (canada.ca returned HTTP 403), so the researcher fell back to secondary sources and labelled the content as asserted, 

**Safest wording found:** Publish only the statute-anchored version below. Drop the procedural fairness entitlement entirely until a human confirms the live page wording.

"What the law says about wanting to stay permanently

Section 22(2) of the Immigration and Refugee Protection Act says: 'An intention by a foreign national to become a permanent resident does not preclude them from becoming a temporary resident if the officer is satisfied that they will leave Canada by the end of the period authorized for their stay.' (Source: laws-lois.justice.gc.ca/eng/acts/i-2.5/section-22.html — Act current to 26 May 2026.)

Read both halves. Wanting to immigrate one day is not, by itself, a reason to refuse you. But the same sentence puts the burden on you: the officer has to be satisfied you will leave at the end of your authorized stay. You have to satisfy them — they do not have to prove you would overstay.

If your refusal letter ticked 'purpose of visit' or said the officer was not satisfied you would leave Canada at the end of your stay, this is the provision being applied.

Before you pay to re-apply, ask yourself honestly: has anything actually changed since the refusal? Officers assess the file in front of them. If your ties, finances, employment, and reason for travel are the same as last time, and you send substantially the same documents, you are inviting the same conclusion. Re-applying with unchanged facts and a better-worded letter is the single most common way refused applicants lose money twice

## B16. [IMPRECISE] MISREPRESENTATION (IRPA s.40) is a different legal universe from a ties refusal, and this is where the tool must be willing to say "re-applying will not help you." Verified, with one gap.

**Safest wording found:** GATE (must fire before any of the below is shown): "Does your refusal letter actually say section 40, A40, or the words 'misrepresentation'? If it instead cites section 16, or says the officer was not satisfied the documents were genuine or sufficient, this section does not apply to you — a section 16 refusal does not carry a five-year ban. Read your letter and check. If you are not sure, do not assume the worst case."

THEN: "If your letter contains a finding of misrepresentation under section 40 of the Immigration and Refugee Protection Act, you are in a different situation from a refusal about ties or funds, and you should treat it that way.

What the law says (Immigration and Refugee Protection Act, s.40, laws-lois.justice.gc.ca, text current to 26 May 2026):
- s.40(1)(a) covers 'directly or indirectly misrepresenting or withholding material facts relating to a relevant matter that induces or could induce an error in the administration of this Act.' Three things follow from that wording. It covers withholding, so leaving something out counts, not only saying something untrue. It covers indirect misrepresentation, which is how people are caught by what an agent filed for them. And it says 'could induce' an error, so it does not matter whether the officer was actually misled.
- s.40(2)(a) sets the period at five years. Where the determination was made outside Canada — which is the usual case if you applied from Pakistan or the Gulf — it runs from the final determination of 

## B17. [IMPRECISE] There is NO appeal from a TRV/study/work permit refusal — the only route is leave and judicial review in the Federal Court, and the clock is 60 days from outside Canada. Verified.

**Safest wording found:** Use this in place of the submitted text. Do not print the leave-rate percentages without a licensed rep confirming current figures.

---

"There is no appeal from this kind of refusal.

Canada's Immigration and Refugee Protection Act gives appeal rights to the Immigration Appeal Division only to a narrow group — family-class sponsors, permanent residents, protected persons, and holders of permanent resident visas (IRPA s.63). Visitor visas, study permits, and work permits are not on that list. There is no board or tribunal that will hear your case again.

What exists instead is judicial review in the Federal Court. It is not an appeal and it is important to understand the difference. The Court does not re-decide your application and cannot order that you be given a visa. It examines whether the officer's decision was reasonable and whether the process was fair. If you win, your application is sent back to a DIFFERENT officer to be decided again — and that officer can refuse it again.

Judicial review has two stages. You must first be granted 'leave' (permission) for the Court to hear the case at all. Most applications do not get past this stage, and if leave is refused, that refusal cannot be appealed (IRPA s.72(2)(e)).

THE DEADLINE — READ THIS TODAY, NOT NEXT WEEK.
The law sets two deadlines (IRPA s.72(2)(b)), and which one applies to you depends on WHERE YOUR DECISION WAS MADE, not on where you are living:
  • 15 days if the matter arose in Canada
  • 60 days if the matter

## B18. [IMPRECISE] Consolidation dating for the whole build: every Justice Laws page read on 2026-07-20 showed 'Current to 2026-05-26'. The Act and the Regulations carry DIFFERENT last-amended dates and the tool must di

**Safest wording found:** For the build spec (replace the DETAIL paragraph):

"Verified on 2026-07-20 against laws-lois.justice.gc.ca:
- IRPR (SOR/2002-227): current to 2026-05-26; last amended 2026-05-26.
- IRPA (S.C. 2001, c. 27): current to 2026-05-26; last amended 2026-03-26.

The 'current to' date is site-wide, not per-section — an unrelated statute (R.S.C. 1985, c. S-20) showed the same 2026-05-26. Store it as one global value per consolidation, not as a per-card field.

The staleness risk is the gap between the consolidation date (2026-05-26) and the read date, currently 55 days — NOT the fact that IRPR's last-amended date coincides with the cut-off. That gap applies equally to the Act and the Regulations. Do not treat IRPA as lower-risk because its last-amended date is older.

Every legal card must carry: section number; deep link (https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-NNN.html or /eng/acts/i-2.5/section-NN.html); the consolidation date of the version quoted; the date a human last checked it; and a scheduled re-verification. The scraper must also detect shaded (not-in-force) provisions and the 'Amendments Not In Force' section, and refuse to publish a card sourced from either."

For the user-facing card footer (do not merge the two dates):

"Quoted from the official consolidation of [instrument], which is current to 26 May 2026. We last opened this page on [DD Mon YYYY]. Those are two different things: opening the page does not confirm the law has not changed sin

## B19. [IMPRECISE] SCOPE WARNING: the regulations give you the WHAT, not the WHY; nothing verified supports telling a user why their specific refusal happened or what to change. Corollary claims: (a) any "show X months 

**Safest wording found:** SCOPE WARNING — what the law does and does not give us.

SOURCE TIERS. Every statement in this tool must be tagged as one of three, never blurred:
  TIER 1 — LAW. IRPR 179, 200, 216 (conditions of issuance); IRPA s.40, s.52; IRPR 225. Verified against laws-lois.justice.gc.ca, current to 2026-05-26.
  TIER 2 — IRCC PUBLISHED GUIDANCE. IRCC states applicants must "convince an immigration officer that you have ties—such as a job, home, financial assets or family—that will take you back to your home country" (ircc.canada.ca/english/information/applications/visa.asp, page modified 2026-05-04). This is official published guidance. It is NOT the regulation, and it names no threshold, no document count and no dollar figure.
  TIER 3 — PRACTICE OBSERVATION. Anything of the form "show six months of bank statements" or "you need X." No government source states this. Label it on the page as our firm's observation from files we have handled, and say plainly that it is not law and not IRCC guidance.

WHAT THE REGULATIONS ACTUALLY SAY. IRPR 179(b) and 216(1)(b) require an officer to be satisfied the applicant "will leave Canada by the end of the period authorized for their stay." That is the legal test. The regulations contain no definition of "strong ties," no scoring, no minimum balance and no travel-history threshold. So the law gives us the TEST but not the EVIDENCE that satisfies it. The tool may explain the test. It may not tell a user what would have satisfied it in their case.

RISK

## B20. [IMPRECISE] Two distinct legal routes with different eligibility and fees: Privacy Act (own notes, free, open to anyone anywhere) vs. Access to Information Act (third party with consent; s.4(1) limits access to c

**Safest wording found:** There are two different laws under which IRCC files can be requested, and since 13 July 2022 the first one covers you no matter where you live.

BEFORE YOU REQUEST ANYTHING — check your refusal letter. Reported (not verified by us against a canada.ca page, which blocks automated checking): since 29 July 2025 IRCC has been attaching the officer's decision notes directly to refusal letters for visitor visas (TRVs, but not eTAs or TRPs), visitor records, study permits and work permits. Applications filed through the new IRCC Portal are reported to be excluded. If your letter already contains the officer's notes, you do not need to request anything and you should not pay anyone to request it. Verify this against IRCC's own website before relying on it.

ROUTE 1 — PRIVACY ACT (your own file). This is the route for you. The Privacy Act, s.12(1), gives Canadian citizens and permanent residents the right to their own personal information held by the government. The Privacy Act Extension Order, No. 3 (SOR/2021-174) extended that right to "all individuals outside Canada," in force 13 July 2022. That means a refused applicant in Pakistan can request their own IRCC file directly. No Canadian relative, friend, agent or consultant is required. No application fee is prescribed for a Privacy Act request. Verified against laws-lois.justice.gc.ca (Privacy Act s.12(1), s.12(3)) and the Canada Gazette Part II text of SOR/2021-174, both read 20 July 2026.

ROUTE 2 — ACCESS TO INFORMATION ACT. Thi

## B21. [IMPRECISE] IMM 5744 is a CONSENT form, not a request form — and it is only needed when someone else requests on your behalf.

**Safest wording found:** IMM 5744 is a CONSENT form, not the request itself. You still file the ATIP request separately; IMM 5744 only authorises IRCC's ATIP Division to release someone's personal information to the person named on it.

You need it in TWO situations, not one:
1. Someone else — a consultant, lawyer, relative, or friend — is requesting on your behalf. You sign to authorise release to them.
2. You are requesting your own file, but you applied as a family. The file also contains your spouse's and your children's information. Your spouse and any child aged 16 or older must each sign, or IRCC will black out the parts about them. If your refusal was about your family's ties, funds, or travel history, those are exactly the paragraphs you would lose.

What the current form (IMM 5744 (09-2018) E) states on its face:
- Signatures must be original, handwritten, and in blue ink. No electronic signatures. This is printed on the form twice; treat it as a requirement, not a suggestion.
- The consent is valid for one year from the date written beside the APPLICANT's signature, and the same signed form can be reused for further ATIP requests within that year.
- Up to four people can be listed on one form.
- Children 16 and over sign for themselves. For a child under 16, you do not need the child's signature, but you need one of: both parents signing the same form; OR a separate form from each parent listing the child; OR one parent's signed form PLUS a valid Canadian court order proving custody.

Two 

## B22. [IMPRECISE] The portal is the federal ATIP Online Request Service at atip-aiprp.apps.gc.ca (requests routed to IRCC's ATIP Division).

**Safest wording found:** Getting your own IRCC file (often called "GCMS notes")

Where to go: https://atip-aiprp.apps.gc.ca/atip/ — the Government of Canada's ATIP Online Request site.

Pick the right route. The landing page offers two choices. For information about your own immigration or citizenship application, choose "Submit a request for information with Immigration, Refugees and Citizenship Canada (IRCC)". Do NOT choose "Treasury Board Secretariat's ATIP Online Request Service" — that route is for corporate records and other departments, and will not get you your file. IRCC states that a completed online request "will be automatically sent to the Access to Information and Privacy Division at IRCC." (Source: IRCC Help Centre Q463, https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=463&top=1 — checked 20 July 2026.)

Choose the PRIVACY ACT, not the Access to Information Act. This is the part that costs people money:
- A Privacy Act request for your own personal information has no application fee.
- An Access to Information Act request carries a $5.00 fee payable by credit card, and its eligibility is limited to Canadian citizens, permanent residents, and individuals or corporations present in Canada. (Source: ATIP Online Request FAQ, https://atip-aiprp.apps.gc.ca/atip/faq.do — checked 20 July 2026.)

You do not need to be in Canada, and you do not need to hire anyone. Since 13 July 2022, the right to request your own personal information under s.12(1) of the Privacy Act has been extended t

## B23. [IMPRECISE] Statutory clock is 30 days; realistic wait is longer, and IRCC's own reported compliance figures should be quoted rather than a marketing estimate.

**Safest wording found:** Replace the section with the following. Drop the compliance percentages entirely unless someone at the firm opens the annual report and reads the figures with their own eyes.

---
HOW LONG DOES IT TAKE TO GET YOUR FILE?

By law, IRCC has 30 days to answer a request under either the Privacy Act or the Access to Information Act (Privacy Act s.14; Access to Information Act s.7 — laws-lois.justice.gc.ca, checked 20 July 2026).

That clock can be extended. Under the Privacy Act it can be extended by up to a further 30 days where meeting the deadline would unreasonably interfere with operations or where consultations are needed, and longer again if translation or conversion to an alternative format is required (Privacy Act s.15). Under the Access to Information Act it can be extended for a reasonable period where the request covers a large volume of records or requires consultations (s.9). Source: IRCC Help Centre answer 464, ircc.canada.ca/english/helpcentre/answer.asp?qnum=464, page last modified 17 April 2026.

We do not publish a "typical wait" figure. We could not find a reliable public source for a median processing time, and we will not estimate one. Anyone quoting you a guaranteed turnaround is guessing.

WHICH REQUEST CAN YOU ACTUALLY FILE?

This matters more than the timeline, because the two Acts are not equally open to you.

If you are outside Canada and are not a Canadian citizen or permanent resident, use the Privacy Act. Since 13 July 2022 the right of access under s

## B24. [IMPRECISE] Since 29 July 2025 IRCC proactively sends officer decision notes with certain refusal letters, so for some people an ATIP request is now unnecessary.

**Safest wording found:** CHECK YOUR REFUSAL LETTER BEFORE YOU PAY ANYONE

Since 29 July 2025, IRCC has been sending "officer decision notes" together with the refusal letter for several application types, without you having to ask. Reported coverage began with visitor visas, visitor records, study permits and work permits (including extensions), and news reports indicate it was extended to most permanent residence applications on 26 May 2026.

Reported exclusions: eTAs, Temporary Resident Permits, and humanitarian and compassionate applications. Applications filed through the "IRCC Portal - New version" are reported not to receive these notes yet. Parts of the notes may be removed by IRCC.

So: open your refusal email and look for a second attachment beyond the one-page refusal letter. If it is there, you already have the officer's stated reasons and you do not need to pay anyone to obtain them.

IMPORTANT - THIS IS NOT THE SAME AS YOUR FULL FILE. The officer decision notes are a summary of the final decision. They are not the complete GCMS record of how your file was handled. Immigration lawyers reviewing these notes have reported cases where the notes were word-for-word identical to the refusal letter and added nothing. The complete record is still only available through an Access to Information and Privacy (ATIP) request, which you can file yourself directly with the Canadian government. If the notes you received simply repeat your refusal letter, you have not yet learned anything new, and the ATI

## B25. [IMPRECISE] Recourse when the deadline passes: complaint to the Privacy Commissioner (Privacy Act) or the Information Commissioner (ATIA). No fee.

**Safest wording found:** If the deadline passes with no answer, that counts as a refusal in law (Privacy Act s.16(3); Access to Information Act s.10(3)) and you can complain to a Commissioner. There is no fee.

Which one depends on how the request was filed. A request for your own GCMS notes is a Privacy Act request — that complaint goes to the Privacy Commissioner (OPC). Only a request filed under the Access to Information Act goes to the Information Commissioner (OIC).

If it is an ATIA request, you have 60 days and the clock is already running. Under ATIA s.31 the 60 days start the day after the response deadline lapsed — not from any letter. The OIC states it has no power to extend this, and late complaints are closed as inadmissible.

The Privacy Act sets no complaint deadline in its text, but do not rely on that — complain as soon as the deadline is missed.

Important if you are outside Canada: only Canadian citizens, permanent residents, and people physically present in Canada can make these requests. If a representative in Canada filed on your behalf, they are the requester and they must file the complaint.

A complaint gets you the notes. It does not change the refusal decision and it does not pause any deadline for challenging that refusal.

