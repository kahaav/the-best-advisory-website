# General

A static, single-page landing site: React, TypeScript, Vite. No backend, API calls or shared state.

## Principles

- Keep it simple and readable. No abstractions, patterns or folders before they are needed.
- Follow existing project conventions.
- Reuse existing components and tokens before adding new ones. Avoid duplicated code.
- Make focused changes. Do not modify unrelated files or silently change behaviour.
- Do not add dependencies without approval.
- Do not disable lint rules to get past errors.
- Never put secrets in frontend code. Do not use `dangerouslySetInnerHTML`.

## Before finishing a task

1. `npx tsc -b`
2. `npm run lint`
3. `npm run build`
4. Review the diff for unrelated changes.
5. Report any remaining errors or warnings. Never claim a command passed without running it.
