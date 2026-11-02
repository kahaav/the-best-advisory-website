import type { ServiceItem } from '@typings/content';
import '@components/cards/ServiceCard.css';

interface ServiceCardProps {
  service: ServiceItem;
  /** Shown before the title as "01.", "02." and so on. */
  number?: number;
}

/** A service: numbered title in the accent colour, mono body and optional tagline. */
export const ServiceCard = ({ service, number }: ServiceCardProps) => {
  return (
    <article className="service-card">
      <h3 className="service-card__title">
        {number !== undefined && (
          <span className="service-card__number">{String(number).padStart(2, '0')}. </span>
        )}
        {service.title}
      </h3>
      <p className="service-card__body">{service.body}</p>
      {service.tagline !== undefined && <p className="service-card__tagline">{service.tagline}</p>}
    </article>
  );
};
