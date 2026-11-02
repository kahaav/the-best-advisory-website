import type { ApproachContent } from '@typings/content';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/ApproachSection.css';

interface ApproachSectionProps {
  content: ApproachContent;
}

/**
 * The four phases as raised discs, each half-wrapped by an arc. On desktop the
 * discs alternate low and high in a wave; on smaller screens they zigzag down.
 */
export const ApproachSection = ({ content }: ApproachSectionProps) => {
  return (
    <Section id="approach" tone="espresso" labelledBy="approach-title" className="approach">
      <SectionHeading intro={content} headingId="approach-title" />

      <ol className="approach__timeline">
        {content.steps.map((step, index) => (
          <li key={step.title} className="approach__phase">
            <div className="approach__disc" aria-hidden="true" data-reveal>
              <span className="approach__face">
                <span className="approach__number">{String(index + 1).padStart(2, '0')}</span>
              </span>
            </div>
            <div className="approach__text" data-reveal>
              <p className="approach__label">
                {content.phaseLabel} {index + 1}
              </p>
              <h3 className="approach__title">{step.title}</h3>
              <p className="approach__body">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};
