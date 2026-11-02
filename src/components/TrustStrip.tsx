import type { CSSProperties } from 'react';
import type { TrustStripContent } from '../types/content';
import './TrustStrip.css';

interface TrustStripProps {
  content: TrustStripContent;
}

/** Passes a logo's aspect ratio to CSS, which sizes logos to a similar area. */
interface LogoStyle extends CSSProperties {
  '--logo-aspect': number;
}

export const TrustStrip = ({ content }: TrustStripProps) => {
  return (
    <div className="trust-strip tone-cream">
      <div className="container trust-strip__inner">
        <p className="trust-strip__experience">{content.experience}</p>
        <span className="trust-strip__divider" aria-hidden="true" />
        <div className="trust-strip__clients">
          <p className="trust-strip__intro">{content.clientsIntro}</p>
          <ul className="trust-strip__logos">
            {content.clients.map((client) => {
              const style: LogoStyle = { '--logo-aspect': client.width / client.height };
              return (
                <li key={client.src}>
                  <img
                    className="trust-strip__logo"
                    src={client.src}
                    alt={client.alt}
                    width={client.width}
                    height={client.height}
                    style={style}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
