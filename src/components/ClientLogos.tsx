import type { CSSProperties } from 'react';
import type { ImageAsset } from '../types/content';
import './ClientLogos.css';

interface ClientLogosProps {
  label: string;
  /** `alt` is the client name. */
  logos: readonly ImageAsset[];
}

/** Passes a logo's aspect ratio to CSS, which sizes logos to a similar area. */
interface LogoStyle extends CSSProperties {
  '--logo-aspect': number;
}

/**
 * How many copies of the logo set the scrolling strip holds. The animation moves
 * it by half, so the second half must look the same as the first, and each half
 * must be wider than the container for the loop to be seamless.
 */
const COPIES = [0, 1, 2, 3] as const;

/** A label and an infinitely scrolling strip of grayscale client logos, faded at both ends. */
export const ClientLogos = ({ label, logos }: ClientLogosProps) => {
  return (
    <div className="client-logos">
      <p className="client-logos__label">{label}</p>
      <div className="client-logos__marquee">
        <div className="client-logos__track">
          {COPIES.map((copy) => {
            const isCopy = copy > 0;
            return (
              <ul
                key={copy}
                className="client-logos__list"
                aria-hidden={isCopy ? true : undefined}
                data-copy={isCopy ? '' : undefined}
              >
                {logos.map((logo) => {
                  const style: LogoStyle = { '--logo-aspect': logo.width / logo.height };
                  return (
                    <li key={logo.src}>
                      <img
                        className="client-logos__logo"
                        src={logo.src}
                        alt={isCopy ? '' : logo.alt}
                        width={logo.width}
                        height={logo.height}
                        style={style}
                      />
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
