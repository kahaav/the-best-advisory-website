# Architecture

```text
src/
  assets/images/    Images
  components/       Page sections (Hero, Footer, ...)
    cards/          Card components
    ui/             Basic reusable elements (Button, Section, ...)
  content/          Site copy and data (siteContent.ts)
  pages/            HomePage, DesignSystemPage
  styles/tokens.css Design tokens and section tones
  types/            Shared types
  index.css         Global base styles and utility classes
```

- Copy and data live in `content/`, not inside components.
- Each component keeps its styles in a `.css` file next to it.
- Do not create new folders without a practical reason.
- Avoid circular imports.
