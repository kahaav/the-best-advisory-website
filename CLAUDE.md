# Project Instructions

A static landing page built with React, TypeScript and Vite.

Follow the standards in:

- .claude/rules/00-general.md
- .claude/rules/01-typescript.md
- .claude/rules/02-react.md
- .claude/rules/03-architecture.md
- .claude/rules/04-accessibility.md
- .claude/rules/05-design-system.md

## Commands

- `npm run dev`: start the dev server
- `npx tsc -b`: type-check only (there is no `typecheck` script)
- `npm run lint`: run ESLint
- `npm run build`: type-check, then build to `dist/`
- `npm run preview`: serve the built `dist/`

No test runner is configured.

## Project notes

- Entry chain: `index.html` → `src/main.tsx` → `src/App.tsx` (named export `App`).
- `App` renders `HomePage`, or lazy-loads `DesignSystemPage` on `/design-system`. `design-system/index.html` is a second Vite entry so GitHub Pages serves that path.
- `vite.config.ts` sets `base` to `/the-best-advisory-website/`.
- Design tokens: `src/styles/tokens.css`. Global base styles: `src/index.css`.
- `tsconfig.app.json` enables `erasableSyntaxOnly`: no `enum`, `namespace` or constructor parameter properties.
