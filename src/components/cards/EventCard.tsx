import type { EventStrand } from '@typings/content';
import { FramedImage } from '@components/ui/FramedImage';
import '@components/cards/EventCard.css';

interface EventCardProps {
  event: EventStrand;
}

/** Optional photo, then title, body and optional note. */
export const EventCard = ({ event }: EventCardProps) => {
  return (
    <article className="event-card">
      {event.image !== undefined && <FramedImage image={event.image} aspectRatio="3 / 2" />}
      <h3 className="event-card__title">{event.title}</h3>
      <p className="event-card__body">{event.body}</p>
      {event.note !== undefined && <p className="event-card__note">{event.note}</p>}
    </article>
  );
};
