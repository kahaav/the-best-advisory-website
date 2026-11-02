import type { EventsContent } from '../types/content';
import { EventCard } from './cards/EventCard';
import { Gallery } from './Gallery';
import { ContentLink } from './ui/ContentLink';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './EventsSection.css';

interface EventsSectionProps {
  content: EventsContent;
}

export const EventsSection = ({ content }: EventsSectionProps) => {
  return (
    <Section id="events" tone="ivory" labelledBy="events-title">
      <SectionHeading intro={content} headingId="events-title" />

      <ul className="events__strands">
        {content.strands.map((strand) => (
          <li key={strand.id}>
            <EventCard event={strand} />
          </li>
        ))}
      </ul>

      <Gallery items={content.gallery} className="events__gallery" />

      <div className="events__actions">
        {content.ctas.map((cta, index) => (
          <ContentLink
            key={cta.label}
            item={cta}
            variant={index === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </div>
    </Section>
  );
};
