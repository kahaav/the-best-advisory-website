# TypeScript

- Strict mode. Never use `any`, `@ts-ignore` or `@ts-nocheck`; use `unknown` when a type is uncertain.
- No non-null assertions or type assertions to get past real type errors. Handle `null` and `undefined` explicitly.
- Explicit types for component props. Interfaces for object shapes, type aliases for unions.
- String literal unions instead of `enum` (`erasableSyntaxOnly` forbids enums anyway).
- Use `readonly` / `as const` for fixed content and lists.
- Use type-only imports for types.
- Let TypeScript infer simple return types.
- Treat caught errors as `unknown` and never swallow them silently.
