import type { ApproachContent } from '@typings/content';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ApproachSection.css';

interface ApproachSectionProps {
  content: ApproachContent;
}

/**
 * The four phases, one per grid column, hanging from a line that draws
 * across. Each phase has an orange marker on the line and a large number.
 */
export const ApproachSection = ({ content }: ApproachSectionProps) => {
  return (
    <Section id="approach" tone="sand" guides labelledBy="approach-title" className="approach">
      <SectionHeading intro={content} headingId="approach-title" />

      <ol className="approach__steps" data-reveal>
        {content.steps.map((step, index) => (
          <li key={step.title} className="approach__step" data-reveal>
            <span className="approach__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
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
