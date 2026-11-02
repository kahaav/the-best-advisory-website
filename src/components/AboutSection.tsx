import type { AboutContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { FramedImage } from '@components/ui/FramedImage';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/AboutSection.css';

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <Section id="about" tone="ink" labelledBy="about-title">
      <div className="about__grid">
        <div className="about__image" data-reveal>
          <FramedImage image={content.image} aspectRatio="4 / 5" />
        </div>

        <div className="about__text">
          <SectionHeading intro={content} headingId="about-title" />
          <div className="about__body" data-reveal>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="about__links dotted-rule" data-reveal>
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
