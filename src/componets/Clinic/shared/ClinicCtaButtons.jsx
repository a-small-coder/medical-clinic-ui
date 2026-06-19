import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

function ClinicCtaButtons({ bookingTo, showCatalogLink = false, bookingLabel = 'Записаться' }) {
  return (
    <div className="clinic-cta info-cta">
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
