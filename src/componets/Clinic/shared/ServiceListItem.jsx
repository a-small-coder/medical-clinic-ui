import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

function ServiceListItem({ service }) {
  return (
    <article
      className={`clinic-service-card${service.isPackage ? ' clinic-service-card_package' : ''}`}
    >
      {service.isPackage && <span className="clinic-service-card__badge">Пакет</span>}
      <h4 className="clinic-service-card__title">
        <Link to={`${ROUTES.services}/${service.slug}`}>{service.title}</Link>
      </h4>
      <p className="clinic-service-card__description">{service.description}</p>
      <div className="clinic-service-card__meta">
        <span className="clinic-meta-badge clinic-meta-badge_accent">
          от {service.priceFrom.toLocaleString('ru-RU')} ₽
        </span>
        <span className="clinic-meta-badge">{service.durationMin} мин</span>
      </div>
      <div className="clinic-service-card__footer">
        <Link to={`${ROUTES.services}/${service.slug}`} className="btn btn_white">
          Подробнее
        </Link>
      </div>
    </article>
  );
}

export default ServiceListItem;
