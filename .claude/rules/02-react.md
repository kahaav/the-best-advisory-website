# React

## Components

- Functional components defined as arrow functions. Never function declarations.
- Named exports, PascalCase names, one component per `PascalCase.tsx` file (small private helpers in the same file are fine).
- Explicit props interface. No `React.FC`.
- One responsibility per component. Do not define components inside other components.

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);
```

## Hooks and state

- Follow the Rules of Hooks.
- Keep state local and minimal. Derive values instead of storing them.
- Never mutate state. Use functional updates when the next state depends on the previous one.
- Use effects only to sync with something outside React (DOM, timers, listeners), and clean them up.
- Use `useMemo`, `useCallback` and `React.memo` only with a clear reason.

## Lists

- Use stable keys from the data. No index or random keys when items can change.
