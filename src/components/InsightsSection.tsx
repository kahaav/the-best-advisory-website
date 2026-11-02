import type { ArticleCard, InsightsContent } from '../types/content';
import { ContentLink } from './ui/ContentLink';
import { FramedImage } from './ui/FramedImage';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './InsightsSection.css';

interface InsightsSectionProps {
  content: InsightsContent;
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });

const formatDate = (isoDate: string) => dateFormatter.format(new Date(`${isoDate}T00:00:00`));

interface InsightCardProps {
  card: ArticleCard;
  linkLabel: string;
}

const InsightCard = ({ card, linkLabel }: InsightCardProps) => {
  return (
    <li className={`insights__card insights__card--${card.kind.toLowerCase()}`}>
      {card.image !== undefined && (
        <FramedImage image={card.image} aspectRatio="4 / 5" className="insights__image" />
      )}
      <div className="insights__text">
        <p className="eyebrow">
          <span>
            {card.kind} · <time dateTime={card.date}>{formatDate(card.date)}</time>
          </span>
        </p>
        <h3 className="insights__title">{card.title}</h3>
        <ContentLink
          item={{ label: linkLabel, link: card.link }}
          className="insights__link"
          hiddenContext={card.title}
        />
      </div>
    </li>
  );
};

export const InsightsSection = ({ content }: InsightsSectionProps) => {
  return (
    <Section id="insights" tone="paper" labelledBy="insights-title">
      <SectionHeading intro={content} headingId="insights-title" />

      <ul className="insights__grid">
        {content.cards.map((card) => (
          <InsightCard key={card.id} card={card} linkLabel={content.linkLabel} />
        ))}
      </ul>
    </Section>
  );
};
