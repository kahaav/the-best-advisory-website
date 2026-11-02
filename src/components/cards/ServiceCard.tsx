import type { ServiceItem } from '../../types/content';
import './ServiceCard.css';

interface ServiceCardProps {
  service: ServiceItem;
}

/**
 * A service tile: title, body and optional italic tagline on the tone's surface colour.
 * The services mosaic gives it its slanted edges.
 */
export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="service-card">
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__body">{service.body}</p>
      {service.tagline !== undefined && <p className="service-card__tagline">{service.tagline}</p>}
    </article>
  );
};
