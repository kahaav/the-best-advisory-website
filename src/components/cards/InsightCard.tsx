import type { ArticleCard } from '../../types/content';
import { ContentLink } from '../ui/ContentLink';
import { FramedImage } from '../ui/FramedImage';
import './InsightCard.css';

interface InsightCardProps {
  card: ArticleCard;
  linkLabel: string;
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });

const formatDate = (isoDate: string) => dateFormatter.format(new Date(`${isoDate}T00:00:00`));

/** Article card, or a carousel card with its cover beside the text. */
export const InsightCard = ({ card, linkLabel }: InsightCardProps) => {
  return (
    <article className={`insight-card insight-card--${card.kind.toLowerCase()}`}>
      {card.image !== undefined && (
        <FramedImage image={card.image} aspectRatio="4 / 5" className="insight-card__image" />
      )}
      <div className="insight-card__text">
        <p className="eyebrow">
          <span>
            {card.kind} · <time dateTime={card.date}>{formatDate(card.date)}</time>
          </span>
        </p>
        <h3 className="insight-card__title">{card.title}</h3>
        <ContentLink
          item={{ label: linkLabel, link: card.link }}
          className="insight-card__link"
          hiddenContext={card.title}
        />
      </div>
    </article>
  );
};
