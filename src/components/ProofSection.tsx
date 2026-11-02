import type { ProofContent } from '../types/content';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './ProofSection.css';

interface ProofSectionProps {
  content: ProofContent;
}

export const ProofSection = ({ content }: ProofSectionProps) => {
  const { quote } = content;

  return (
    <Section id="proof" tone="paper" labelledBy="proof-title">
      <SectionHeading intro={content} headingId="proof-title" />

      <dl className="proof__stats">
        {content.stats.map((stat) => (
          <div key={stat.label} className="proof__stat">
            <dt className="proof__stat-label">{stat.label}</dt>
            <dd className="proof__stat-value">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="proof__spoken">
        <h3 className="eyebrow">{content.spokenAtLabel}</h3>
        <ul className="proof__spoken-list">
          {content.spokenAt.map((stage) => (
            <li key={stage}>{stage}</li>
          ))}
        </ul>
      </div>

      {quote.kind === 'quote' && (
        <figure className="proof__quote">
          <blockquote className="proof__quote-text">
            <p>“{quote.text}”</p>
          </blockquote>
          <figcaption className="eyebrow">
            {quote.name}, {quote.role}
          </figcaption>
        </figure>
      )}
    </Section>
  );
};
