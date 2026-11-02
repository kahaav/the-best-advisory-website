import type { Headline } from '@typings/content';

interface HeadlineTextProps {
  headline: Headline;
}

/** Plain first part, then the optional second part, which CSS sets in the accent colour. */
export const HeadlineText = ({ headline }: HeadlineTextProps) => {
  return (
    <>
      <span className="headline-roman">{headline.roman}</span>
      {headline.italic !== undefined && (
        <>
          {' '}
          <em className="headline-italic">{headline.italic}</em>
        </>
      )}
    </>
  );
};
