import type { LinkItem } from '../../types/content';
import { TodoTag } from './TodoTag';
import './ContentLink.css';

export type ContentLinkVariant = 'primary' | 'secondary' | 'text';

interface ContentLinkProps {
  item: LinkItem;
  variant?: ContentLinkVariant;
  className?: string;
  /** Extra text for screen readers when the visible label repeats, e.g. the article title. */
  hiddenContext?: string;
}

/**
 * Renders a content link. Links still marked TODO render as a visible,
 * non-interactive placeholder so no dead link ships.
 */
export const ContentLink = ({
  item,
  variant = 'text',
  className,
  hiddenContext,
}: ContentLinkProps) => {
  const classes = ['content-link', `content-link--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  const context =
    hiddenContext !== undefined ? <span className="visually-hidden">: {hiddenContext}</span> : null;

  if (item.link.kind === 'todo') {
    return (
      <span className={`${classes} content-link--todo`} title={`TODO: ${item.link.note}`}>
        {item.label}
        {context}
        <TodoTag />
      </span>
    );
  }

  if (item.link.external === true) {
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
    <a className={classes} href={item.link.href}>
      {item.label}
      {context}
    </a>
  );
};
