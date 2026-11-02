import type { FooterContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { Wordmark } from '@components/ui/Wordmark';
import '@components/Footer.css';

interface FooterProps {
  brandName: string;
  content: FooterContent;
}

/** The wordmark across the page, then one dotted row: copyright, links and "Back to top". */
export const Footer = ({ brandName, content }: FooterProps) => {
  return (
    <footer className="site-footer tone-ink">
      <div className="container site-footer__inner">
        <Wordmark brandName={brandName} size="large" />

        <div className="site-footer__bottom dotted-rule">
          <p>{content.copyright}</p>
          <nav aria-label="Footer">
            <ul className="site-footer__links">
              {content.links.map((item) => (
                <li key={item.label}>
                  <ContentLink item={item} />
                </li>
              ))}
            </ul>
          </nav>
          <ContentLink item={content.backToTop} className="site-footer__top" />
        </div>
      </div>
    </footer>
  );
};
