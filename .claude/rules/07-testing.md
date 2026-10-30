# Testing Standards

## Tools

- Use Vitest for unit and integration tests.
- Use React Testing Library for component tests.
- Use Playwright for critical end-to-end workflows when configured.

## Rules

- Test important business logic.
- Test user-visible behavior instead of implementation details.
- Test important user interactions.
- Test loading, error and empty states.
- Test important edge cases.
- Keep tests independent.
- Avoid brittle tests.
- Do not remove tests simply to make them pass.
- Fix the underlying issue instead of weakening assertions.
