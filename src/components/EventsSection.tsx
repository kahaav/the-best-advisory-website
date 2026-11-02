import type { EventsContent } from '../types/content';
import { ContentLink } from './ui/ContentLink';
import { FramedImage } from './ui/FramedImage';
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
          <li key={strand.id} className="events__card">
            {strand.image !== undefined ? (
              <FramedImage image={strand.image} aspectRatio="3 / 2" />
            ) : (
              <div className="events__tile tone-espresso" aria-hidden="true">
                <span className="events__tile-title">{strand.title}</span>
              </div>
            )}
            <p className="eyebrow">{strand.meta}</p>
            <h3 className="events__title">{strand.title}</h3>
            <p className="events__body">{strand.body}</p>
            {strand.note !== undefined && <p className="events__note">{strand.note}</p>}
          </li>
        ))}
      </ul>

      <div className="events__gallery">
        {content.gallery.map((item) => (
          <figure key={item.caption} className="events__figure">
            <FramedImage image={item.image} aspectRatio="4 / 3" />
            <figcaption className="events__caption">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

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
