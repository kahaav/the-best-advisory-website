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

      <ul className="services__list">
        {content.items.map((service) => (
          <li key={service.title}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      <p className="services__also">{content.also}</p>
    </Section>
  );
};
