# Design system page: review and improvement plan

Review of `/design-system` (`src/pages/DesignSystemPage.tsx`, `src/pages/DesignSystemPage.css`) and the tokens it shows (`src/styles/tokens.css`), as of 2 November 2026. Checked in the browser at 1568px and 390px wide.

Hand this file to Claude Code and ask it to carry out the plan in section 4, phase by phase. Follow `CLAUDE.md` and `.claude/rules/`. Keep the page static: tokens through `var()`, shared components, template content only. Run `npx tsc -b`, `npm run lint` and `npm run build` after each phase, and check both pages in the browser.

## 1. What is unclear

1. **No values anywhere.** Swatches, spacing bars and type samples show only the token name. You can't read that `--space-7` is 48px, that `--text-h3` is 22–28px, or what colour `--color-taupe-300` is. Both reference designs show the value next to every token ("H1 48/60px", "#F34E4E", "25px L").
2. **Type shows sizes, not styles.** The Text panel is seven "Aa"s. It doesn't say which size is H1, H2, body or caption, and it shows no weight, line height or letter spacing. The display, H2, H3 and lead sizes are fluid (`clamp`), but the page doesn't say so or give their range.
3. **Colours have no roles.** Nothing says espresso is text and dark surfaces, taupe is accents and rules, and ivory, cream and paper are page surfaces. The 25 squares look like a full palette, but the site uses only the five 300 shades.
4. **The shade scale is uneven and partly meaningless.**
   - Paper 100, 200 and 300 are identical whites.
   - Ivory and cream 100–300 look the same.
   - Ivory and cream 400–500 jump straight to brown.
   - Espresso 400–500 are almost black.

   The scale comes from a formula, not from design decisions.
5. **Tones don't explain themselves.** Each card shows "Aa / Muted / rule / name". It doesn't name the role variables a tone sets (`--surface`, `--text`, `--text-muted`, `--hairline`, `--accent-rule`, button colours), or show a button or link inside the tone, which is the point of tones.
6. **Breakpoints show the same thing twice.** The devices and the line repeat the same values. What each breakpoint changes is written in `tokens.css` but not on the page. The device shapes are arbitrary (720px drawn as a tablet, the laptop drawn at 1024px).
7. **Card labels don't match the code.** "Article card" and "Carousel card" are both `InsightCard`. "Event card · no photo" is `EventCard` without an `image`. A developer can't find the component from the label.

## 2. What is missing or could be better

### Missing

- **Focus state** for buttons and links. It's the most important accessibility state, and it isn't in the button table.
- **Text links.** `ContentLink` with `variant="text"` is used all over the site ("Read on LinkedIn", footer, contact) but isn't shown. The external link (↗) variant isn't shown either.
- **Buttons on a dark tone.** The Contact section uses buttons on espresso, and their colours differ, but the page shows only the light version.
- **SectionHeading:** eyebrow, roman plus italic headline, short rule and lead. Every section of the site uses it, and it's the brand's signature pattern.
- **Wordmark** and **ArrowIcon** as their own entries.
- **Lines:** hairline dividers, card top rules (`--text`) and the short accent rule, each with its token.
- **Layout tokens:** `--content-max`, `--measure`, `--gutter`, `--section-padding`, `--header-height`. These were removed earlier on request. Consider bringing back a compact visual version.
- **FramedImage aspect ratios** in use: 3/2, 4/3, 4/5.
- **In-page navigation.** The page is about 3,500px tall on desktop and about 6,250px on phones, with no way to jump to a section.

### Could be better

- **Button states blur together.**
  - Secondary hover fills with espresso, so it looks exactly like primary default.
  - Primary hover and pressed differ only slightly.
  - Inactive primary turns grey, so it reads as a different colour rather than "disabled".
- **A third button size, undocumented.** The header CTA uses its own 42px override (`.site-header__cta`), which isn't one of the documented sizes. Small (36px) isn't used anywhere on the site.
- **Uneven panel heights waste space.**
  - Spacing bars fill about a quarter of their panel's width.
  - The Colours panel is shorter than Text and leaves a gap.
  - Gallery has an empty bottom.
  - Cards stretch to the tallest in their row, so the service card's tagline floats far below its text.
- **Double lines in cards.** Each card cell has a border, and most cards add their own top rule.
- **The template image is very faint** (14% black on cream), so image areas read as empty.
- **Mobile layout breaks down.**
  - The button table needs horizontal scrolling; only the first column is visible.
  - The devices stack one under another.

## 3. What makes no sense or conveys nothing

- **The Gallery panel** shows two grey placeholders with captions. With no real images and no explanation of the layout (2 columns, 1 column at 600px, 4/3 frames), it conveys almost nothing.
- **The tone name in muted mono at the bottom of each tone card.** It's the key label, but it's the least visible text in the card.
- **Shade tokens no CSS uses.** The page presents 20 shades the app never uses (the plain names point to 300). Either use them or drop them.
- **Breakpoint tokens nothing uses.** The `--breakpoint-*` tokens exist only for this page. The real `@media` rules hardcode the same numbers, so the page can drift from the site without anyone noticing.
- **Two breakpoints that nearly overlap:** 560/600 and 720/760 are pairs about 40px apart. That points to a messy system, not a deliberate one.
- **Spacing tokens the site doesn't use.** `--space-1` and `--space-10` are used only on the design-system page.
- **`--font-mono` exists only for this page.**

### Implementation issues behind these

- **Token lists kept by hand.**
  - Token names are hardcoded in the page (`COLOURS`, `FONT_SIZES`, `SPACING` with length 10, `BREAKPOINTS`, `DEVICES`).
  - There's also one CSS class per breakpoint (`.ds-breakpoint--*`).
  - A new token needs edits in two or three places, and nothing warns when they disagree.
- **Type isn't tokenised.** About 60 font sizes, weights, line heights and letter-spacing values are hardcoded in component CSS. Weights are 400, 500 and 600, and there are many one-off `clamp()` sizes. The page can't show a real type scale until these become tokens.
- **Static-state classes in production CSS.** `.is-hover` and `.is-pressed` in `Button.css` exist only for this page. That's acceptable, but document it.
- **Hardcoded colour in the template image.** `template.svg` uses `#000` at 14%.

## 4. Improvement plan

Work in phases. Each phase should build, lint and look right before the next.

### Phase 1: Make every token readable (highest value)

1. Show the value next to every token name, using the reference designs' format:
   - **Colours:** hex or HSL under each swatch, plus a one-word role per row (Text / dark surface, Accent, Page, Section, Card).
   - **Spacing:** px value next to each bar, e.g. `--space-7 · 48px`.
   - **Type:** see phase 2.

   **Keep values from drifting.** Choose one approach and explain the choice:
   - (a) A small typed module, e.g. `src/styles/tokenDocs.ts`, listing name, value and role, with a comment requiring it to match `tokens.css`.
   - (b) Read computed values at runtime with `getComputedStyle` in a small `useTokenValue` hook.

   Recommendation: (a), because it's static, which the owner asked for. Add a short check in the plan's final phase.
2. **Spacing:** keep the bars, but make them share a common scale and fill the panel width. Mark the values the site actually uses.
3. **Tones:** label each card with its tone name in normal text, at the top. Show a small primary button and a text link inside each tone. List the role variables once, as a legend, not per card.

### Phase 2: A real type scale

1. **Add tokens to `tokens.css`:**
   - Weights: `--font-weight-regular: 400`, `--font-weight-medium: 500`, `--font-weight-semibold: 600`.
   - Line heights: `--leading-tight: 1.05`, `--leading-heading: 1.2`, `--leading-body: 1.65`, or the values actually used. Group them.
2. **Add named text styles** as global classes in `index.css`: `.text-display`, `.text-h2`, `.text-h3`, `.text-lead`, `.text-body`, `.text-small`, `.eyebrow`. Each sets family, size, weight, line height and tracking from tokens.
3. **Use them in components.** Replace the hardcoded type values in component CSS with these classes or tokens, with no visual change. Check the landing page before and after.
4. **Text panel:** one row per style, showing a short sample ("Heading", "Body text"), the style name, and size / line height / weight, e.g. "H2 · 32–48px / 1.1 · Regular". Note which styles are fluid.

### Phase 3: Complete the component set

1. **Buttons:**
   - Add a **Focus** row: a static `.is-focus` class that applies the real focus ring.
   - Add **text link** and **external link** rows.
   - Add a second table, or a toggle row, showing both button types on the espresso tone.
   - Make the states clearly different: secondary hover should be a light fill, not a full espresso fill. Use a contrast-safe disabled style instead of 40% opacity, e.g. muted border and text, with no opacity on the background.
   - Replace the header CTA's custom 42px size with `size="small"`, or add a documented size token. Remove the override.
2. **Add `SectionHeading`** with template content, in start and centre alignment, with and without a lead.
3. **Add Wordmark** (small, large) and **ArrowIcon** in a small "Brand and icons" panel.
4. **Add a "Lines" panel:** hairline, card top rule and accent rule, each with its token.
5. **Cards:**
   - Label each cell with the component name and props, e.g. `<InsightCard kind="Carousel">`.
   - Remove the cell border, using a gap or background tint instead, so cards don't get double lines.
   - Let cards keep their natural height: `align-items: start` on the grid.
6. **Gallery:** replace it with a "Media" panel that shows `FramedImage` at the aspect ratios in use (3/2, 4/3, 4/5), labelled. Mention the gallery's column behaviour in one line, or drop the gallery.
7. **Template image:** raise its contrast so frames don't look empty. Keep it the single image used across the page.

### Phase 4: Make the tokens honest

1. **Shades:** either
   - (a) use the shade tokens in the app (e.g. hairline = taupe-100, muted text = espresso-200) and replace the `color-mix()` roles, or
   - (b) remove unused shades and keep only the five base colours plus the role colours.

   If keeping shades, redesign the scale so steps look even: fixed lightness targets per step, not a formula, and no duplicate whites. Ask the owner which option before starting.
2. **Breakpoints:**
   - Propose merging 560/600 and 720/760 into single values: four breakpoints in total (for example 1024, 860, 720, 600). This changes layouts slightly, so ask the owner first.
   - Show the breakpoints once: keep the devices, put the purpose under each, and drop the separate line (or the reverse).
   - Draw devices to a consistent rule (phone ≤ 600, tablet ≤ 960, laptop above).
3. **Unused tokens:** remove or start using `--space-1`, `--space-10` and `--font-mono`.

### Phase 5: Page usability and layout

1. Add a compact sticky index of panel links at the top, or a slim left rail on wide screens.
2. Balance the grid:
   - Pair panels of similar height.
   - Let panels size to their content, with no stretched empty space.
   - Keep the wide panels (Buttons, Cards) together at the bottom.
3. **Mobile:**
   - Stack the button table by type: one table per variant, no horizontal scroll.
   - Show devices in a two-column grid.
4. Restore a small visible page title ("Design system") and a link back to the site. One line, no description.

### Phase 6: Keep it in sync

1. If phase 1 used a typed token list, add a lightweight check that every `--token` name in the list exists in `tokens.css`. Without a test runner, a small Node script under `scripts/` run from an npm script is enough. Ask before adding an npm script.
2. Note in `tokens.css` which tokens the design-system page lists, so a new token is added to both.

## 5. Out of scope unless asked

- Bringing back site content or real images on this page. The owner wants template content only.
- New dependencies, a router, Storybook or a CSS framework.
