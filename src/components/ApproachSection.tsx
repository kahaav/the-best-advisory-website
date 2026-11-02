import type { ApproachContent } from '../types/content';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './ApproachSection.css';

interface ApproachSectionProps {
  content: ApproachContent;
}

/** The four phases as a timeline: across the page on desktop, down it on smaller screens. */
export const ApproachSection = ({ content }: ApproachSectionProps) => {
  return (
    <Section id="approach" tone="espresso" labelledBy="approach-title" className="approach">
      <SectionHeading intro={content} headingId="approach-title" />

      <ol className="approach__timeline">
        {content.steps.map((step, index) => (
          <li key={step.title} className="approach__phase">
            <span className="approach__marker" aria-hidden="true" />
            <p className="approach__label">
              {content.phaseLabel} {index + 1}
            </p>
            <h3 className="approach__title">{step.title}</h3>
            <p className="approach__body">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
