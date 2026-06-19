import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

function ClinicCtaButtons({ bookingTo, showCatalogLink = false, bookingLabel = 'Записаться' }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
      <Link to={bookingTo} className="btn _filled-btn _green">
        {bookingLabel}
      </Link>
      {showCatalogLink && (
        <Link to={ROUTES.catalog} className="btn btn_white">
          Заказать анализы
        </Link>
      )}
    </div>
  );
}

export default ClinicCtaButtons;
