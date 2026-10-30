# Project Architecture

## Suggested Structure

```text
src/
  assets/
  components/
    ui/
  hooks/
  layouts/
  pages/
  services/
  types/
  utils/
```

## Responsibilities

- `components/`: Reusable UI components.
- `components/ui/`: Basic reusable UI elements.
- `hooks/`: Custom React hooks.
- `layouts/`: Shared application layouts.
- `pages/`: Page-level components.
- `services/`: API communication and external integrations.
- `types/`: Shared TypeScript types.
- `utils/`: Pure reusable utility functions.
- `assets/`: Static assets.

## Architecture Rules

- Keep presentation separate from business logic.
- Avoid putting API communication directly inside reusable UI components.
- Keep components independent and reusable where appropriate.
- Avoid circular dependencies.
- Avoid deeply nested folder structures.
- Do not create folders without a practical reason.
- Prefer absolute imports with configured aliases when appropriate.
- Keep shared code in appropriate shared locations.
- Avoid importing internal implementation details from unrelated features.
