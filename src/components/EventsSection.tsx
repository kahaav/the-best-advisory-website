import type { EventsContent } from '@typings/content';
import { EventCard } from '@components/cards/EventCard';
import { Gallery } from '@components/Gallery';
import { ContentLink } from '@components/ui/ContentLink';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/EventsSection.css';

interface EventsSectionProps {
  content: EventsContent;
}

export const EventsSection = ({ content }: EventsSectionProps) => {
  return (
    <Section id="events" tone="sand" guides labelledBy="events-title">
      <SectionHeading intro={content} headingId="events-title" />

      <ul className="events__strands">
        {content.strands.map((strand) => (
          <li key={strand.id} data-reveal>
            <EventCard
              event={strand}
              labels={content.cardLabels}
              upcomingImage={content.upcomingImage}
            />
          </li>
        ))}
      </ul>

      <div className="events__gallery" data-reveal>
        <Gallery items={content.gallery} />
      </div>

      <div className="events__actions" data-reveal>
        {content.ctas.map((cta, index) => (
          <ContentLink key={cta.label} item={cta} variant={index === 0 ? 'primary' : 'secondary'} />
        ))}
      </div>
    </Section>
  );
};
