import type { InsightsContent } from '../types/content';
import { InsightCard } from './cards/InsightCard';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './InsightsSection.css';

interface InsightsSectionProps {
  content: InsightsContent;
}

export const InsightsSection = ({ content }: InsightsSectionProps) => {
  return (
    <Section id="insights" tone="paper" labelledBy="insights-title">
      <SectionHeading intro={content} headingId="insights-title" />

      <ul className="insights__grid">
        {content.cards.map((card) => (
          <li key={card.id} className={`insights__item insights__item--${card.kind.toLowerCase()}`}>
            <InsightCard card={card} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
