import type { ServiceItem } from '../../types/content';
import './ServiceCard.css';

interface ServiceCardProps {
  service: ServiceItem;
}

/** Numbered card with a top rule, title, body and optional italic tagline. */
export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="service-card">
      <span className="service-card__number" aria-hidden="true">
        {service.number}
      </span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__body">{service.body}</p>
      {service.tagline !== undefined && <p className="service-card__tagline">{service.tagline}</p>}
    </article>
  );
};
