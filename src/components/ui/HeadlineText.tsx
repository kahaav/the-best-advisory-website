import type { Headline } from '@typings/content';

interface HeadlineTextProps {
  headline: Headline;
}

/** Roman first part, italic second part on its own line, as in the carousels. */
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
