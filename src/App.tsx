import { lazy, Suspense } from 'react';
import { HomePage } from './pages/HomePage';

// Loaded on demand so the landing page bundle stays the same size.
const DesignSystemPage = lazy(() =>
  import('./pages/DesignSystemPage').then((module) => ({ default: module.DesignSystemPage })),
);

/** Matches `<base>/design-system`, with or without a trailing slash or `index.html`. */
const isDesignSystemPath = (pathname: string) =>
  pathname === `${import.meta.env.BASE_URL}design-system` ||
  pathname.startsWith(`${import.meta.env.BASE_URL}design-system/`);

export const App = () => {
  if (isDesignSystemPath(window.location.pathname)) {
    return (
      <Suspense fallback={null}>
        <DesignSystemPage />
      </Suspense>
    );
  }

  return <HomePage />;
};
