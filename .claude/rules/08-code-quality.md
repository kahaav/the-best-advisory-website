# Code Quality and Verification

Before completing a task:

1. Run TypeScript type checking.
2. Run ESLint.
3. Run relevant tests.
4. Fix all errors introduced by the changes.
5. Run the production build.
6. Review the final changes for unrelated modifications.
7. Report any remaining issues.

## Commands

- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

Only run commands that exist in package.json.

Never claim a command passed without executing it.
Never hide warnings or errors.
Never disable lint rules to make checks pass.
