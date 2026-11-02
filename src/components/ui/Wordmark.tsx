import '@components/ui/Wordmark.css';

interface WordmarkProps {
  brandName: string;
  size?: 'small' | 'large';
}

/** The brand name in wide capitals with a small orange square, set in type until a vector logo is supplied. */
export const Wordmark = ({ brandName, size = 'small' }: WordmarkProps) => {
  return (
    <span className={`wordmark wordmark--${size}`} role="img" aria-label={brandName}>
      <span className="wordmark__name" aria-hidden="true">
        {brandName}
      </span>
      <span className="wordmark__mark" aria-hidden="true" />
    </span>
  );
};
