# Project Instructions

This project uses React, TypeScript and Vite.

Follow all coding standards defined in:

- .claude/rules/00-general.md
- .claude/rules/01-typescript.md
- .claude/rules/02-react.md
- .claude/rules/03-architecture.md
- .claude/rules/04-accessibility.md
- .claude/rules/05-api-and-data.md
- .claude/rules/06-state-management.md
- .claude/rules/07-testing.md
- .claude/rules/08-code-quality.md

All project changes must comply with these standards.

Use existing project conventions unless they conflict with these rules.

## Commands

- `npm run dev`: start the dev server
- `npx tsc -b`: type-check only
- `npm run lint`: run ESLint
- `npm run build`: type-check, then build to `dist/` (type errors fail the build)
- `npm run preview`: serve the built `dist/`

There is no `typecheck` script; use `npx tsc -b` for type checking.
No test runner is configured yet, so `npm run test` does not exist. The testing rules (Vitest, React Testing Library) apply once one is added.

## Project notes

- Entry chain: `index.html` → `src/main.tsx` → `src/App.tsx` (named export `App`).
- Global styles live in `src/index.css` (minimal reset only).
- There is no `public/` or `src/assets/` folder yet; create them when static files are needed.
- `tsconfig.app.json` enables `erasableSyntaxOnly`: no `enum`, `namespace` or constructor parameter properties.
