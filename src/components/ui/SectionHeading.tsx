import type { SectionIntro } from '@typings/content';
import { HeadlineText } from '@components/ui/HeadlineText';
import '@components/ui/SectionHeading.css';

interface SectionHeadingProps {
  intro: SectionIntro;
  headingId: string;
  align?: 'start' | 'center';
}

/** Optional eyebrow, H2 (roman + optional italic), short rule and optional lead paragraph. */
export const SectionHeading = ({ intro, headingId, align = 'start' }: SectionHeadingProps) => {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {intro.eyebrow !== undefined && <p className="eyebrow">{intro.eyebrow}</p>}
      <h2 id={headingId} className="section-heading__title">
        <HeadlineText headline={intro.headline} />
      </h2>
      <span className="section-heading__rule" aria-hidden="true" />
      {intro.lead !== undefined && <p className="section-heading__lead">{intro.lead}</p>}
    </header>
  );
};
