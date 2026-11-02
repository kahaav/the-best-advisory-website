import { useEffect } from 'react';

/**
 * Marks [data-reveal] elements with data-revealed as they scroll into view,
 * once each. Elements arriving together get a --reveal-order so CSS can stagger
 * them. With reduced motion everything is shown straight away.
 * The matching styles are in index.css.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])');

    const reveal = (element: HTMLElement, order: number) => {
      element.style.setProperty('--reveal-order', String(order));
      element.dataset.revealed = 'true';
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => reveal(element, 0));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target)
          .filter((target) => target instanceof HTMLElement);

        arriving.forEach((element, order) => {
          reveal(element, order);
          observer.unobserve(element);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};
