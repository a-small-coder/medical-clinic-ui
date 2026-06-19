import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

function ServiceListItem({ service }) {
  return (
    <div
      className="text-content"
      style={{
        marginBottom: '1rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="text-content__title">
        <h4 className="_title-standart">
          <Link to={`${ROUTES.services}/${service.slug}`}>{service.title}</Link>
        </h4>
      </div>
      <div className="text-content__article">
        <div className="text">{service.description}</div>
        <div className="text" style={{ marginTop: '0.35rem', opacity: 0.85 }}>
          от {service.priceFrom.toLocaleString('ru-RU')} ₽ · {service.durationMin} мин
          {service.isPackage && ' · Пакет'}
        </div>
        <div style={{ marginTop: '0.75rem' }}>
          <Link to={`${ROUTES.services}/${service.slug}`} className="btn btn_white">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceListItem;
