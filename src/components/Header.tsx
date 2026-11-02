import { useEffect, useRef, useState } from 'react';
import type { LinkItem, NavItem } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { Wordmark } from '@components/ui/Wordmark';
import '@components/Header.css';

interface HeaderProps {
  brandName: string;
  nav: readonly NavItem[];
  cta: LinkItem;
}

const MENU_ID = 'site-menu';

export const Header = ({ brandName, nav, cta }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Escape closes the mobile menu and returns focus to its button.
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // The header gets a soft shadow once the page has scrolled.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 0);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // The nav link for the section crossing the middle of the screen is marked current.
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.sectionId))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            setCurrentSectionId(id);
          } else {
            setCurrentSectionId((current) => (current === id ? null : current));
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [nav]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header tone-ivory" data-scrolled={isScrolled}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top" onClick={closeMenu}>
          <Wordmark brandName={brandName} />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="site-header__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls={MENU_ID}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-icon" aria-hidden="true" data-open={isMenuOpen} />
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id={MENU_ID}
          className="site-header__nav"
          data-open={isMenuOpen}
          aria-label="Main"
        >
          <ul className="site-header__links">
            {nav.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={`#${item.sectionId}`}
                  aria-current={item.sectionId === currentSectionId ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ContentLink item={cta} variant="primary" className="site-header__cta" />
        </nav>
      </div>
    </header>
  );
};
