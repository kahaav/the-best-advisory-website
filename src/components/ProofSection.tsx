import type { ProofContent } from '../types/content';
import { ClientLogos } from './ClientLogos';
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
      <div className="proof__grid">
        <SectionHeading intro={content} headingId="proof-title" />

        <div className="proof__body">
          <ClientLogos logos={content.clients} />
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="proof__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
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
