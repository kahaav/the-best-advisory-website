import type { ProblemContent } from '../types/content';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './ProblemSection.css';

interface ProblemSectionProps {
  content: ProblemContent;
}

export const ProblemSection = ({ content }: ProblemSectionProps) => {
  return (
    <Section id="problem" tone="paper" labelledBy="problem-title" className="problem">
      <div className="problem__grid">
        <SectionHeading intro={content} headingId="problem-title" />
        <ul className="problem__list">
          {content.painPoints.map((point) => (
            <li key={point} className="problem__item">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="problem__turn tone-espresso">
        <p className="problem__turn-strong">{content.turn.strong}</p>
        <span className="problem__turn-rule" aria-hidden="true" />
        <p className="problem__turn-rest">{content.turn.rest}</p>
      </div>
    </Section>
  );
};
