import type { ProofContent } from '@typings/content';
import { ClientLogos } from '@components/ClientLogos';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ProofSection.css';

interface ProofSectionProps {
  content: ProofContent;
}

export const ProofSection = ({ content }: ProofSectionProps) => {
  const { quote } = content;

  return (
    <Section id="proof" tone="paper" labelledBy="proof-title">
      <div className="proof__grid">
        <SectionHeading intro={content} headingId="proof-title" />
        <ClientLogos logos={content.clients} />
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
