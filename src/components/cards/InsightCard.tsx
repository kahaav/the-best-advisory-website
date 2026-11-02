import type { ArticleCard } from '../../types/content';
import { ContentLink } from '../ui/ContentLink';
import { FramedImage } from '../ui/FramedImage';
import './InsightCard.css';

interface InsightCardProps {
  card: ArticleCard;
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });

const formatDate = (isoDate: string) => dateFormatter.format(new Date(`${isoDate}T00:00:00`));

/** Article card, or a carousel card with its cover beside the text. The title is the link. */
export const InsightCard = ({ card }: InsightCardProps) => {
  return (
    <article className={`insight-card insight-card--${card.kind.toLowerCase()}`}>
      {card.image !== undefined && (
        <FramedImage image={card.image} aspectRatio="4 / 5" className="insight-card__image" />
      )}
      <div className="insight-card__text">
        <time className="insight-card__date" dateTime={card.date}>
          {formatDate(card.date)}
        </time>
        <h3 className="insight-card__title">
          <ContentLink
            item={{ label: card.title, link: card.link }}
            className="insight-card__link"
          />
        </h3>
      </div>
    </article>
  );
};
