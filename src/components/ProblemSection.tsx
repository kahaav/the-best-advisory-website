import type { ProblemContent } from '@typings/content';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ProblemSection.css';

interface ProblemSectionProps {
  content: ProblemContent;
}

/** Short quotes as speech bubbles that alternate sides like a conversation, then one closing line. */
export const ProblemSection = ({ content }: ProblemSectionProps) => {
  return (
    <Section id="problem" tone="cream" labelledBy="problem-title" className="problem">
      <div className="problem__grid">
        <SectionHeading intro={content} headingId="problem-title" />
        <div>
          <ul className="problem__bubbles">
            {content.quotes.map((quote) => (
              <li key={quote.text} className="problem__bubble" data-reveal>
                <figure>
                  <blockquote className="problem__quote">
                    <p>“{quote.text}”</p>
                  </blockquote>
                  <figcaption className="problem__speaker">{quote.speaker}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="problem__turn" data-reveal>
            <strong className="problem__turn-strong">{content.turn.strong}</strong>{' '}
            {content.turn.rest}
          </p>
        </div>
      </div>
    </Section>
  );
};
