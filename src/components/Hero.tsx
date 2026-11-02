import type { HeroContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { HeadlineText } from '@components/ui/HeadlineText';
import '@components/Hero.css';

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
            <ContentLink item={content.secondaryCta} />
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
