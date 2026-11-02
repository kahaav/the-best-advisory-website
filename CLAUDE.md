# Project Instructions

A static landing page built with React, TypeScript and Vite.

Follow the standards in:

- .claude/rules/00-general.md
- .claude/rules/01-typescript.md
- .claude/rules/02-react.md
- .claude/rules/03-architecture.md
- .claude/rules/04-accessibility.md
- .claude/rules/05-design-system.md
- .claude/rules/06-publishing.md

## Skills

- `publish` (`.claude/skills/publish/`): review, check, commit with a meaningful message and push.
- `rollback` (`.claude/skills/rollback/`): undo the latest publish with a revert commit and push.
- `run-local` (`.claude/skills/run-local/`): start the dev server (or a production preview) and share the local URLs.
- `stop-local` (`.claude/skills/stop-local/`): stop the local dev server or preview and confirm the port is free.

Use them whenever the user asks to publish or to undo a publish (see `06-publishing.md`),
or to run or stop the site locally.

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
