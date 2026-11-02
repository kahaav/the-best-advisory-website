import type { HeroContent } from '../types/content';
import { ContentLink } from './ui/ContentLink';
import { HeadlineText } from './ui/HeadlineText';
import './Hero.css';

interface HeroProps {
  content: HeroContent;
}

export const Hero = ({ content }: HeroProps) => {
  return (
    <section className="hero tone-ivory" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            <HeadlineText headline={content.headline} />
          </h1>
          <span className="hero__rule" aria-hidden="true" />
          <p className="hero__subheadline">{content.subheadline}</p>
          <div className="hero__actions">
            <ContentLink item={content.primaryCta} variant="primary" />
            <ContentLink item={content.secondaryCta} variant="secondary" />
          </div>
        </div>

        <figure className="hero__media">
          <div className="hero__frame">
            <img
              className="hero__image"
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
