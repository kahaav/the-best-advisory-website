import type { FooterContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { Wordmark } from '@components/ui/Wordmark';
import '@components/Footer.css';

interface FooterProps {
  brandName: string;
  content: FooterContent;
}

export const Footer = ({ brandName, content }: FooterProps) => {
  return (
    <footer className="site-footer tone-espresso">
      <div className="container site-footer__inner">
        <Wordmark brandName={brandName} size="large" />

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {content.links.map((item) => (
              <li key={item.label}>
                <ContentLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__bottom">
          <p>{content.copyright}</p>
          <ContentLink item={content.backToTop} />
        </div>
      </div>
    </footer>
  );
};
