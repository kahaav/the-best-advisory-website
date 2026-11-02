import type { FooterContent } from '../types/content';
import { ContentLink } from './ui/ContentLink';
import { Wordmark } from './ui/Wordmark';
import './Footer.css';

interface FooterProps {
  brandName: string;
  content: FooterContent;
}

export const Footer = ({ brandName, content }: FooterProps) => {
  return (
    <footer className="site-footer tone-espresso">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Wordmark brandName={brandName} size="large" />
          <p className="site-footer__tagline">{content.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {content.links.map((item) => (
              <li key={item.label}>
                <ContentLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__copyright">{content.copyright}</p>
      </div>
    </footer>
  );
};
