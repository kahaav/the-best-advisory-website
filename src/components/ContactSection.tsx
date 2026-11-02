import type { ContactContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ContactSection.css';

interface ContactSectionProps {
  content: ContactContent;
}

export const ContactSection = ({ content }: ContactSectionProps) => {
  return (
    <Section id="contact" tone="espresso" labelledBy="contact-title" className="contact">
      <SectionHeading intro={content} headingId="contact-title" />

      <div className="contact__actions">
        <ContentLink item={content.primaryCta} variant="primary" />
        <ContentLink item={content.email} />
      </div>

      <p className="contact__locations">{content.locations}</p>
    </Section>
  );
};
