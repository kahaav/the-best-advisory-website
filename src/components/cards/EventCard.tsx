import type { EventCardLabels, EventStrand, ImageAsset } from '@typings/content';
import { FramedImage } from '@components/ui/FramedImage';
import '@components/cards/EventCard.css';

interface EventCardProps {
  event: EventStrand;
  labels: EventCardLabels;
  /** Shown behind an upcoming event's date. */
  upcomingImage: ImageAsset;
}

const dayFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric' });
const monthFormatter = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });

const toDate = (isoDate: string) => new Date(`${isoDate}T00:00:00`);

/**
 * Event card, styled like the insight cards. Upcoming events show their date,
 * or "Coming soon", on a template image; past events show a photo.
 */
export const EventCard = ({ event, labels, upcomingImage }: EventCardProps) => {
  const isUpcoming = event.kind === 'upcoming';

  return (
    <article className="event-card raised-card">
      {event.kind === 'past' ? (
        <FramedImage image={event.image} aspectRatio="16 / 9" />
      ) : (
        <div className="event-card__poster">
          <FramedImage image={upcomingImage} aspectRatio="16 / 9" />
          {event.date === undefined ? (
            <p className="event-card__when">
              <span className="event-card__soon">{labels.comingSoon}</span>
            </p>
          ) : (
            <p className="event-card__when">
              <time dateTime={event.date}>
                {dayFormatter.format(toDate(event.date))}{' '}
                <span className="event-card__month">{monthFormatter.format(toDate(event.date))}</span>
              </time>
            </p>
          )}
        </div>
      )}
      <div className="event-card__text">
        <p className="event-card__label">{isUpcoming ? labels.upcoming : labels.past}</p>
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__body">{event.body}</p>
        {event.place !== undefined && <p className="event-card__meta">{event.place}</p>}
      </div>
    </article>
  );
};
