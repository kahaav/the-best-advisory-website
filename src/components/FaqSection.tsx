import type { FaqContent } from '../types/content';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './FaqSection.css';

interface FaqSectionProps {
  content: FaqContent;
}

export const FaqSection = ({ content }: FaqSectionProps) => {
  return (
    <Section id="faq" tone="ivory" labelledBy="faq-title">
      <div className="faq__grid">
        <SectionHeading intro={content} headingId="faq-title" />

        <div className="faq__list">
          {content.items.map((item) => (
            <details key={item.question} className="faq__item">
              <summary className="faq__question">
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
};
