import React from 'react';
import { Link } from 'react-router-dom';
import { formatAppointmentDateTime } from '../../../config/appointmentDemo';
import { ROUTES } from '../../../config/routes';

function SuccessStep({ appointment, doctorName, serviceTitle, branchName, isAuthenticated }) {
  return (
    <div className="booking-step booking-success">
      <div className="booking-success__icon" aria-hidden="true">
        ✓
      </div>
      <div className="booking-step__title _title-standart">Запись подтверждена</div>

      <div className="booking-success__details">
        <div className="booking-success__row">
          <span className="booking-success__label">Номер:</span>
          <span>{appointment.id}</span>
        </div>
        <div className="booking-success__row">
          <span className="booking-success__label">Дата:</span>
          <span>{formatAppointmentDateTime(appointment.datetime)}</span>
        </div>
        <div className="booking-success__row">
          <span className="booking-success__label">Врач:</span>
          <span>{doctorName}</span>
        </div>
        <div className="booking-success__row">
          <span className="booking-success__label">Услуга:</span>
          <span>{serviceTitle}</span>
        </div>
        <div className="booking-success__row">
          <span className="booking-success__label">Филиал:</span>
          <span>{branchName}</span>
        </div>
      </div>

      <div className="booking-step-nav booking-success__actions">
        {isAuthenticated ? (
          <Link to="/user/profile/appointments" className="btn _filled-btn _green">
            Мои записи
          </Link>
        ) : (
          <Link to="/auth/login" className="btn _filled-btn _green">
            Войти в личный кабинет
          </Link>
        )}
        <Link to={ROUTES.home} className="btn btn_white">
          На главную
        </Link>
      </div>
    </div>
  );
}

export default SuccessStep;
