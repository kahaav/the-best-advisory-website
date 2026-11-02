import type { LinkItem } from '../../types/content';
import type { ButtonVariant } from './Button';
import './Button.css';
import './ContentLink.css';

export type ContentLinkVariant = ButtonVariant | 'text';

interface ContentLinkProps {
  item: LinkItem;
  variant?: ContentLinkVariant;
  className?: string;
  /** Extra text for screen readers when the visible label repeats, e.g. the article title. */
  hiddenContext?: string;
}

/** Links without a destination yet point to the contact section. */
const UNFINISHED_LINK_HREF = '#contact';

/** Renders a link, styled as a button (primary, secondary) or as a text link. */
export const ContentLink = ({
  item,
  variant = 'text',
  className,
  hiddenContext,
}: ContentLinkProps) => {
  const classes = [
    'content-link',
    `content-link--${variant}`,
    variant === 'text' ? undefined : `button button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const context =
    hiddenContext !== undefined ? <span className="visually-hidden">: {hiddenContext}</span> : null;

  if (item.link.kind === 'url' && item.link.external === true) {
    return (
      <a className={classes} href={item.link.href} target="_blank" rel="noopener noreferrer">
        {item.label}
        {context}
        <span className="content-link__external" aria-hidden="true">
          ↗
        </span>
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <a
      className={classes}
      href={item.link.kind === 'url' ? item.link.href : UNFINISHED_LINK_HREF}
    >
      {item.label}
      {context}
    </a>
  );
};
