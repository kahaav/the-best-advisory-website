import type { CSSProperties } from 'react';
import type { ImageAsset } from '@typings/content';
import '@components/ClientLogos.css';

interface ClientLogosProps {
  /** `alt` is the client name. */
  logos: readonly ImageAsset[];
}

/** Passes a logo's aspect ratio to CSS, which sizes logos to a similar area. */
interface LogoStyle extends CSSProperties {
  '--logo-aspect': number;
}

/** A still row of grayscale client logos, spread across the width. */
export const ClientLogos = ({ logos }: ClientLogosProps) => {
  return (
    <ul className="client-logos">
      {logos.map((logo) => {
        const style: LogoStyle = { '--logo-aspect': logo.width / logo.height };
        return (
          <li key={logo.src}>
            <img
              className="client-logos__logo"
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              style={style}
            />
          </li>
        );
      })}
    </ul>
  );
};
