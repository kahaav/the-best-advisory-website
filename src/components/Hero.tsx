import type { HeroContent } from '@typings/content';
import { ContentLink } from '@components/ui/ContentLink';
import { HeadlineText } from '@components/ui/HeadlineText';
import '@components/Hero.css';

interface HeroProps {
  content: HeroContent;
}

/**
 * Laid out on the four-column grid: a label, the introduction and the portrait
 * on top, a dotted line across, then the large headline.
 */
export const Hero = ({ content }: HeroProps) => {
  return (
    <section className="hero tone-sand guides" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <p className="eyebrow hero__label">{content.eyebrow}</p>

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

        <span className="hero__line dotted-rule" aria-hidden="true" />

        <h1 id="hero-title" className="hero__title">
          <HeadlineText headline={content.headline} />
        </h1>

        <div className="hero__intro">
          <p className="hero__subheadline">{content.subheadline}</p>
          <div className="hero__actions">
            <ContentLink item={content.primaryCta} variant="primary" />
            <ContentLink item={content.secondaryCta} variant="secondary" />
          </div>
        </div>

        <ContentLink item={content.scrollCue} className="hero__scroll" />
      </div>
    </section>
  );
};
