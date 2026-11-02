# Design System

The site and the `/design-system` page (`src/pages/DesignSystemPage.tsx`) share one source of design.
The design system page shows the design; it never defines it.

## Where design lives

- `src/styles/tokens.css`: colours, fonts, type sizes, spacing, layout, button sizes, breakpoints, motion and section tones.
- Shared components (`components/ui/`, `components/cards/`, `Gallery`, ...) and their `.css` files: how each element looks.

## Making a design change

Examples: palette or brand colours, font family or sizes, spacing, card or button styles.

1. Change the token in `tokens.css`, or the shared component and its CSS.
2. Make component CSS read tokens through `var()`. Do not hard-code colours, fonts or sizes that a token covers. Add a new token if one is missing.
3. The design system page reads the same tokens and renders the same components, so it updates on its own. Do not restyle or redesign it to match.

## Rules for the design system page

- Never invent design there. No new colours, fonts, sizes or component styles that the site does not use.
- Show tokens through `var(--token)` and show components by rendering the real components. Never copy their styles or values.
- Only edit the page when the source changed in a way it cannot pick up on its own:
  - a token was added, renamed or removed (update lists like `COLOURS`, `SHADES`, `FONT_SIZES`, `SPACING`, `BREAKPOINTS`);
  - a component's props or variants changed (update its preview).
- Its own `ds-*` classes in `DesignSystemPage.css` only lay out the previews. They must not change how the previewed tokens or components look.

## Breakpoints

Media queries cannot read CSS variables. When changing a breakpoint, update the `--breakpoint-*` token and every matching `@media` value together.
