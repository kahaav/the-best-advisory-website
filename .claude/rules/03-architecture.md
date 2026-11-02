# Architecture

```text
src/
  assets/images/    Images
  components/       Page sections (Hero, Footer, ...)
    cards/          Card components
    ui/             Basic reusable elements (Button, Section, ...)
  content/          Site copy and data (siteContent.ts)
  hooks/            Custom React hooks (useScrollReveal, ...)
  pages/            HomePage, DesignSystemPage
  styles/tokens.css Design tokens and section tones
  types/            Shared types
  index.css         Global base styles and utility classes
```

- Copy and data live in `content/`, not inside components.
- Each component keeps its styles in a `.css` file next to it.
- Custom hooks live in `hooks/`, one hook per `useSomething.ts` file, as a named export.
- Pages only compose sections: imports, hook calls and section markup. No logic, helpers or hooks defined in page files.
- Do not create new folders without a practical reason.
- Avoid circular imports.

## Imports

- Import from `src/` through the `@` path aliases, never with relative paths (`./`, `../`):

  | Alias           | Folder             |
  | --------------- | ------------------ |
  | `@assets/*`     | `src/assets/*`     |
  | `@components/*` | `src/components/*` |
  | `@content/*`    | `src/content/*`    |
  | `@hooks/*`      | `src/hooks/*`      |
  | `@pages/*`      | `src/pages/*`      |
  | `@styles/*`     | `src/styles/*`     |
  | `@typings/*`    | `src/types/*`      |

  This includes CSS imports, e.g. `import '@components/Hero.css';`.
- The only exception: `main.tsx` imports `./App` and `./index.css`, which sit at the root of `src/` and have no alias.
- A new top-level folder needs a new alias, added in both `vite.config.ts` (`resolve.alias`) and `tsconfig.app.json` (`paths`).
- Order: packages (`react`) first, then `@` imports.
