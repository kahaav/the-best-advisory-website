import type { ContactContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ContactSection.css';

interface ContactSectionProps {
  content: ContactContent;
}

/** The question on the left; on the right one large call to action, then email and places. */
export const ContactSection = ({ content }: ContactSectionProps) => {
  return (
    <Section id="contact" tone="ink" labelledBy="contact-title" className="contact">
      <div className="contact__grid">
        <SectionHeading intro={content} headingId="contact-title" />

        <div className="contact__actions" data-reveal>
          <ContentLink item={content.primaryCta} className="contact__cta" />
          <ContentLink item={content.email} className="contact__email" />
          <p className="contact__locations">{content.locations}</p>
        </div>
      </div>
    </Section>
  );
};
