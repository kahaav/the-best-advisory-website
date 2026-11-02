import type { ServiceItem } from '../../types/content';
import './ServiceCard.css';

interface ServiceCardProps {
  service: ServiceItem;
}

/** A service row: title beside the body and optional italic tagline. Stacks when narrow. */
export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="service-card">
      <h3 className="service-card__title">{service.title}</h3>
      <div className="service-card__text">
        <p className="service-card__body">{service.body}</p>
        {service.tagline !== undefined && (
          <p className="service-card__tagline">{service.tagline}</p>
        )}
      </div>
    </article>
  );
};
