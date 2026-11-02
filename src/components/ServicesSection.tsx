import type { ServicesContent } from '../types/content';
import { ServiceCard } from './cards/ServiceCard';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './ServicesSection.css';

interface ServicesSectionProps {
  content: ServicesContent;
}

export const ServicesSection = ({ content }: ServicesSectionProps) => {
  return (
    <Section id="services" tone="ivory" labelledBy="services-title">
      <SectionHeading intro={content} headingId="services-title" />

      <ol className="services__list">
        {content.items.map((service) => (
          <li key={service.number}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ol>

      <p className="services__also">
        <span className="services__also-label">{content.alsoLabel}</span>
        {content.also.map((item, index) => (
          <span key={item}>
            {index > 0 && <span aria-hidden="true"> · </span>}
            {index > 0 && <span className="visually-hidden">, </span>}
            <em>{item}</em>
          </span>
        ))}
      </p>
    </Section>
  );
};
