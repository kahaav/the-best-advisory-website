import type { ServicesContent } from '@typings/content';
import { ServiceCard } from '@components/cards/ServiceCard';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ServicesSection.css';

interface ServicesSectionProps {
  content: ServicesContent;
}

/** Tiles shown dark, on opposite corners of the mosaic; the rest are cream. */
const DARK_TILES: ReadonlySet<number> = new Set([0, 5]);

export const ServicesSection = ({ content }: ServicesSectionProps) => {
  return (
    <Section id="services" tone="ivory" labelledBy="services-title">
      <SectionHeading intro={content} headingId="services-title" />

      <ul className="services__mosaic">
        {content.items.map((service, index) => (
          <li
            key={service.title}
            className={`services__tile ${DARK_TILES.has(index) ? 'tone-espresso' : 'tone-cream'}`}
          >
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      <p className="services__also">{content.also}</p>
    </Section>
  );
};
