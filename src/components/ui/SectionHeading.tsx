import type { SectionIntro } from '../../types/content';
import { HeadlineText } from './HeadlineText';
import './SectionHeading.css';

interface SectionHeadingProps {
  intro: SectionIntro;
  headingId: string;
  align?: 'start' | 'center';
}

/** Eyebrow, H2 (roman + italic), short rule and optional lead paragraph. */
export const SectionHeading = ({ intro, headingId, align = 'start' }: SectionHeadingProps) => {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{intro.eyebrow}</p>
      <h2 id={headingId} className="section-heading__title">
        <HeadlineText headline={intro.headline} />
      </h2>
      <span className="section-heading__rule" aria-hidden="true" />
      {intro.lead !== undefined && <p className="section-heading__lead">{intro.lead}</p>}
    </header>
  );
};
