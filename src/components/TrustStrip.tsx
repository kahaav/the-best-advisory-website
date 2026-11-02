import type { TrustStripContent } from '../types/content';
import './TrustStrip.css';

interface TrustStripProps {
  content: TrustStripContent;
}

export const TrustStrip = ({ content }: TrustStripProps) => {
  return (
    <div className="trust-strip tone-cream">
      <div className="container trust-strip__inner">
        <p className="trust-strip__experience">{content.experience}</p>
        <span className="trust-strip__divider" aria-hidden="true" />
        <p className="trust-strip__clients">
          <span className="trust-strip__intro">{content.clientsIntro}</span>{' '}
          {content.clients.map((client, index) => (
            <span key={client}>
              {index > 0 && (
                <>
                  {' '}
                  <span className="trust-strip__dot" aria-hidden="true">
                    ·
                  </span>
                  <span className="visually-hidden">
                    {index === content.clients.length - 1 ? ' and ' : ', '}
                  </span>{' '}
                </>
              )}
              <span className="trust-strip__client">{client}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
