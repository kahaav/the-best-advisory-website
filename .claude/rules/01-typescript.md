# TypeScript Standards

## Strict Typing

- Always use strict TypeScript.
- Never use `any`.
- Never use `@ts-ignore` or `@ts-nocheck`.
- Use `unknown` instead of `any` for uncertain values.
- Never use non-null assertions without justification.
- Avoid unnecessary type assertions.
- Never use type assertions to bypass actual type errors.
- Handle null and undefined explicitly.
- Avoid implicit `any`.

## Types and Interfaces

- Use interfaces for object contracts when appropriate.
- Use type aliases for unions, intersections and type compositions.
- Define explicit types for component props.
- Prefer precise types over broad types.
- Use discriminated unions for complex state.
- Use readonly where immutability is important.
- Prefer string literal unions over enums when appropriate.
- Use utility types when they improve readability.

## Functions

- Let TypeScript infer simple return types.
- Use explicit return types for public APIs and complex functions.
- Avoid unnecessarily complex generic types.
- Use type-only imports when importing types.

## External Data

- Treat API responses and external data as untrusted.
- Validate external data at runtime when necessary.
- Never assume external data matches a TypeScript interface.
- Use `unknown` for unvalidated external values.

## Error Handling

- Treat caught errors as `unknown`.
- Narrow error types before accessing properties.
- Never silently swallow errors.
