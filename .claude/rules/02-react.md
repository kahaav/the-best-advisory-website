# React Standards

## Components

- Use functional components exclusively.
- ALWAYS define React components using arrow functions.
- NEVER use function declarations for React components.
- Use named exports for components.
- Use PascalCase for component names.
- Use PascalCase.tsx for component files.
- Use explicit interfaces or types for component props.
- Do not use `React.FC` by default.
- Keep components focused on a single responsibility.
- Prefer composition over complex conditional rendering.
- Extract reusable components when they improve readability or maintainability.
- Avoid defining components inside other components.

## Component Example

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
```

## Hooks

- Follow the Rules of Hooks.
- Only call hooks at the top level of React components or custom hooks.
- Never call hooks conditionally, inside loops or nested functions.
- Custom hooks must start with `use`.
- Extract reusable stateful logic into custom hooks.
- Keep custom hooks focused.
- Never call hooks inside callbacks passed to `useMemo`, `useEffect` or `useReducer`.

## State

- Never mutate state directly.
- Prefer immutable state updates.
- Keep state as close as possible to where it is used.
- Avoid duplicated or redundant state.
- Prefer derived values over synchronized state.
- Use functional state updates when the next state depends on the previous state.

## Effects

- Avoid unnecessary `useEffect`.
- Never use effects for derived state.
- Never use effects to handle user events.
- Use effects for synchronization with external systems.
- Include correct effect dependencies.
- Clean up subscriptions, timers and event listeners when necessary.

## Performance

- Avoid premature optimization.
- Use `useMemo` and `useCallback` only when justified.
- Use `React.memo` only when there is a demonstrated benefit.
- Avoid unnecessary re-renders through good component design.
- Use React DevTools Profiler when investigating performance problems.

## Lists

- Always provide stable keys when rendering lists.
- Never use array indexes as keys when items can change order.
- Never generate random keys during rendering.
