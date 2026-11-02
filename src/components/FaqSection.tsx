import type { FaqContent } from '../types/content';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './FaqSection.css';

interface FaqSectionProps {
  content: FaqContent;
}

/** Questions and answers, all visible: there are few and the answers are short. */
export const FaqSection = ({ content }: FaqSectionProps) => {
  return (
    <Section id="faq" tone="ivory" labelledBy="faq-title">
      <SectionHeading intro={content} headingId="faq-title" />

      <dl className="faq__list">
        {content.items.map((item) => (
          <div key={item.question} className="faq__item">
            <dt className="faq__question">{item.question}</dt>
            <dd className="faq__answer">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};
