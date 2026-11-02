import type { EventStrand } from '../../types/content';
import { FramedImage } from '../ui/FramedImage';
import './EventCard.css';

interface EventCardProps {
  event: EventStrand;
}

/** Photo (or a dark typographic tile when there is none), meta, title, body and note. */
export const EventCard = ({ event }: EventCardProps) => {
  return (
    <article className="event-card">
      {event.image !== undefined ? (
        <FramedImage image={event.image} aspectRatio="3 / 2" />
      ) : (
        <div className="event-card__tile tone-espresso" aria-hidden="true">
          <span className="event-card__tile-title">{event.title}</span>
        </div>
      )}
      <p className="eyebrow">{event.meta}</p>
      <h3 className="event-card__title">{event.title}</h3>
      <p className="event-card__body">{event.body}</p>
      {event.note !== undefined && <p className="event-card__note">{event.note}</p>}
    </article>
  );
};
