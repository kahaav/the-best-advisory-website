# API and Data Management

## API Communication

- Keep API communication inside services or dedicated data-access modules.
- Centralize HTTP client configuration.
- Avoid duplicating API logic.
- Use explicit request and response types.
- Treat external responses as untrusted data.
- Validate external data at runtime when necessary.
- Handle network errors and HTTP errors explicitly.
- Use `AbortController` when request cancellation is necessary.
- Avoid duplicate requests.
- Never silently swallow errors.

## Security

- Never expose private API keys, secrets or credentials in frontend code.
- Never store sensitive credentials in localStorage.
- Never use `dangerouslySetInnerHTML` without a verified sanitization strategy.
- Validate and sanitize untrusted input where appropriate.
- Never trust client-side validation as a security boundary.

## UI States

- Handle loading states.
- Handle error states.
- Handle empty states.
- Handle successful responses.
- Avoid showing stale or misleading data.
