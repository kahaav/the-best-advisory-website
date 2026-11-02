import type { ApproachContent } from '../types/content';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './ApproachSection.css';

interface ApproachSectionProps {
  content: ApproachContent;
}

export const ApproachSection = ({ content }: ApproachSectionProps) => {
  return (
    <Section id="approach" tone="espresso" labelledBy="approach-title" className="approach">
      <SectionHeading intro={content} headingId="approach-title" />

      <ol className="approach__steps">
        {content.steps.map((step) => (
          <li key={step.title} className="approach__step">
            <h3 className="approach__title">{step.title}</h3>
            <p className="approach__body">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
