import type { ArticleCard } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { FramedImage } from '@components/ui/FramedImage';
import '@components/cards/InsightCard.css';

interface InsightCardProps {
  card: ArticleCard;
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const formatDate = (isoDate: string) => dateFormatter.format(new Date(`${isoDate}T00:00:00`));

/** Article card: cover, topic, title, summary, date and reading time. The whole card is the link. */
export const InsightCard = ({ card }: InsightCardProps) => {
  return (
    <article className="insight-card">
      <FramedImage image={card.image} aspectRatio="16 / 9" className="insight-card__image" />
      <div className="insight-card__text">
        <p className="insight-card__topic">{card.topic}</p>
        <h3 className="insight-card__title">
          <ContentLink item={{ label: card.title, link: card.link }} className="insight-card__link" />
        </h3>
        <p className="insight-card__excerpt">{card.excerpt}</p>
        <p className="insight-card__meta">
          <time dateTime={card.date}>{formatDate(card.date)}</time>
          <span>{card.readingMinutes} min read</span>
        </p>
      </div>
    </article>
  );
};
