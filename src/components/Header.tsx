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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header tone-ivory">
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
                <a href={`#${item.sectionId}`} onClick={closeMenu}>
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
