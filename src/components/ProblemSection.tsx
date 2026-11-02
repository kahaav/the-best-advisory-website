import type { ProblemContent } from '@typings/content';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ProblemSection.css';

interface ProblemSectionProps {
  content: ProblemContent;
}

/**
 * The heading holds the left half while the quotes run down the right half,
 * one per dotted row, ending on one larger closing statement.
 */
export const ProblemSection = ({ content }: ProblemSectionProps) => {
  return (
    <Section id="problem" tone="sand" guides labelledBy="problem-title" className="problem">
      <div className="problem__grid">
        <div className="problem__heading">
          <SectionHeading intro={content} headingId="problem-title" />
        </div>

        <div className="problem__text">
          <ul className="problem__quotes">
            {content.quotes.map((quote) => (
              <li key={quote.text} className="problem__quote dotted-rule" data-reveal>
                <figure>
                  <blockquote className="problem__quote-text">
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
