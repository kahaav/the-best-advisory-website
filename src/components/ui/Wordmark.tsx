import '@components/ui/Wordmark.css';

interface WordmarkProps {
  brandName: string;
  size?: 'small' | 'large';
}

/** The "the BA." mark, set in type until a vector logo is supplied. */
export const Wordmark = ({ brandName, size = 'small' }: WordmarkProps) => {
  return (
    <span className={`wordmark wordmark--${size}`} role="img" aria-label={brandName}>
      <span className="wordmark__the" aria-hidden="true">
        the
      </span>
      <span className="wordmark__ba" aria-hidden="true">
        BA.
      </span>
    </span>
  );
};
