import type { ContactContent } from '../types/content';
import { ContentLink } from './ui/ContentLink';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './ContactSection.css';

interface ContactSectionProps {
  content: ContactContent;
}

export const ContactSection = ({ content }: ContactSectionProps) => {
  return (
    <Section id="contact" tone="espresso" labelledBy="contact-title" className="contact">
      <SectionHeading intro={content} headingId="contact-title" align="center" />

      <div className="contact__actions">
        <ContentLink item={content.primaryCta} variant="primary" />
        <ContentLink item={content.email} variant="secondary" />
      </div>

      <ul className="contact__social">
        {content.social.map((item) => (
          <li key={item.label}>
            <ContentLink item={item} />
          </li>
        ))}
      </ul>

      <div className="contact__locations">
        <p className="contact__cities">
          {content.locations.map((city, index) => (
            <span key={city}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              {index > 0 && <span className="visually-hidden">, </span>}
              {city}
            </span>
          ))}
        </p>
        <p className="contact__region">{content.regionLine}</p>
      </div>
    </Section>
  );
};
