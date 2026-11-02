# AI-Look Review

Parts of the landing page that read as AI-made, to rework so the page feels more organic.
Reviewed on 2026-11-02 against the live build (copy, layout and visual design).

## Context

- Almost all copy comes from the "Copy Starters" draft in `docs/answers.md` (section 6), not from Sophie.
- Her own phrases are in `docs/answers.md`, section 3 ("Recurring beliefs and phrases"). They sound the most human and are the best material for rewrites.
- The serif headline with an italic second line comes from her real carousels. The style is on-brand. The tell is using it on every section.

## A. Structure (biggest tells)

1. **Template order.** Hero → logo bar → Problem → Services → Process → Stats → About → FAQ → closing call to action is the default AI landing-page order.
2. **Every section opens the same way.** Small caps label with a leading line, two-line headline (plain, then italic), short rule underneath, then content. That's 10 times in a row with no variation.
3. **The labels show the template.** "The problem", "Proof" and "Our approach" are planning words, not words you'd say to a client. "Proof" especially.
4. **Numbered items everywhere.** Services are numbered 01–03 and the approach steps 01–04. Services aren't steps, so their numbers are decoration.
5. **Everything is evenly balanced.** 3 equal service columns, 4 steps, 3 stats, 4 event cards, 3 article cards. Nothing is bigger or more important than anything else.
6. **The same button pair repeats.** A dark and an outlined button appear together in the hero, events and contact sections.
7. **Repeated facts:**
   - "20+ years" appears 3 times: logo bar, stats and the About story.
   - "People. Process. Then AI." appears twice: Approach headline and footer.
   - The locations appear 4 times: hero label, events, FAQ and contact.
   - CLPD accreditation appears twice: services and FAQ.
   - "Book a call" or "Book an intro call" appears 3 times.

## B. Copy (`src/content/siteContent.ts`)

8. **Stock headlines:** "Sound *familiar?*", "What we *do.*", "Questions, *answered.*", "Where do you *start?*", "Thinking out loud *on AI…*". The italic half is a filler phrase, not a twist. Her carousels use it for a point: "A trial is not *a quick test.*"
9. **Her own words were smoothed out.** The hero says "Most legal teams need structure." Her post says "Most teams **I meet** need structure." The original is more personal.
10. **"It's not X, it's Y" lines**, a classic AI pattern:
    - "What we do isn't events. It's bringing the legal community together."
    - "Networking on the mat, not at the bar."
    - "Most teams don't start with a technology problem."
11. **Lists of three:**
    - "find the real problem, choose technology…, and make it stick"
    - "unclear processes, scattered information and pressure to move fast"
    - "Move, recover, connect"
12. **Neat closing lines:** "That's where we start too." / "The Best Advisory puts a name on that." / "Let's work it out together."
13. **Short fragments in the hero subheadline:** "Vendor-neutral, people and process first. Led by Sophie Best." It reads like a list of keywords.
14. **"We" for a one-person business,** and an About section in the third person. The tone guide in `docs/answers.md` says About should be in the first person.
15. **Vague phrases:** "future-ready legal team", "AI governance that works in practice", "across the Middle East and beyond", "20 years beside lawyers, and the room to prove it".
16. **Colons doing the job of dashes:** "No selling, no pitching: just the right people…" and "…go-live and beyond: real trials…".
17. **FAQ answers are short and all alike:** "Maybe not… We'll tell you." / "No. Our advice is vendor-neutral." Real answers have specifics: a client situation, a price range, how a first call goes.
18. **Middle dots "·" everywhere:** labels, the "Spoken at" list, "Move · recover · connect", locations.

## C. Visual design

19. **Playfair Display with Inter** is the most common AI-generated font pairing. The brand needs a didone-style serif, but not necessarily this pair.
20. **The hero is a template:** offset outline frame behind the photo, fade-in animation, and two buttons.
21. **A dark statement box** in the Problem section (italic line | divider | small text) is a template element.
22. **A stats row** with big numbers (20+ / 130+ / 25k+). "LinkedIn followers" as a stat looks like filler.
23. **A "Trusted by" logo bar.**
24. **Event cards without photos** show a dark block with the title in italic, then the same title again below it. It looks like a placeholder.
25. **"Read on LinkedIn ↗" five times,** plus "ARTICLE · AUGUST 2025" style labels on every card.
26. **FAQ accordion** with plus icons and the same headline-left, content-right layout as the Problem section. The centred dark closing section is template-like too.

## Status (2026-11-02)

All 26 items were worked through. Decisions taken with the owner's team:

- **Voice:** "I" (Sophie) in the hero, problem, proof, About, FAQ and contact; "we" for the company's services.
- **Fonts:** Playfair Display kept for headlines (matches the carousels); body text changed from Inter to Hanken Grotesk.
- **Proof:** the logo bar and stats row are gone. Logos sit in the proof section ("Clients include"), and the DIFC seminar numbers are told as a sentence.

Kept on purpose:

- The roman + italic headline, but only where the italic part adds something ("Then AI.", "The Best Advisory.", "start?").
- Numbers on the four approach steps, because they are a real sequence. They are now small, not decorative.
- "Book a call" in the header and the booking button in the hero and contact sections. Repeating the main action is normal.
- Hero eyebrow, as the one remaining small caps label.

## What already feels human (keep)

- The concrete pain points: "Someone outside legal has already 'checked it on Copilot'", "You have anecdotes".
- The About details: London M&A deals at night, "they said 'Sophie Best'", the gym line.
- Real event names and venues, and the photos.
- Her own lines in `docs/answers.md`, section 3 (for example "A demo shows you the product. A trial shows you the fit.").
