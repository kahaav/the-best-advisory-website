import type { ServicesContent } from '@typings/content';
import { ServiceCard } from '@components/cards/ServiceCard';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ServicesSection.css';

interface ServicesSectionProps {
  content: ServicesContent;
}

/** Services in three numbered columns on the dark surface, each opened by a dotted line. */
export const ServicesSection = ({ content }: ServicesSectionProps) => {
  return (
    <Section id="services" tone="ink" labelledBy="services-title" className="services">
      <SectionHeading intro={content} headingId="services-title" />

      <ul className="services__grid">
        {content.items.map((service, index) => (
          <li key={service.title} className="services__item dotted-rule" data-reveal>
            <ServiceCard service={service} number={index + 1} />
          </li>
        ))}
      </ul>

      <p className="services__also dotted-rule" data-reveal>
        {content.also}
      </p>
    </Section>
  );
};
