import type { AboutContent } from '../types/content';
import { ContentLink } from './ui/ContentLink';
import { FramedImage } from './ui/FramedImage';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import './AboutSection.css';

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <Section id="about" tone="cream" labelledBy="about-title">
      <div className="about__grid">
        <FramedImage image={content.image} aspectRatio="4 / 5" className="about__image" />

        <div className="about__text">
          <SectionHeading intro={content} headingId="about-title" />
          <div className="about__body">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="about__links">
            {content.links.map((item) => (
              <li key={item.label}>
                <ContentLink item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
