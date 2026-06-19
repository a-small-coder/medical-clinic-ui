import React from 'react';
import { Link } from 'react-router-dom';
import { formatAppointmentDateTime } from '../../../config/appointmentDemo';
import { ROUTES } from '../../../config/routes';

function SuccessStep({ appointment, doctorName, serviceTitle, branchName, isAuthenticated }) {
  return (
    <div className="booking-step booking-success">
      <div className="booking-step__title _title-standart">Запись подтверждена</div>
      <div className="text-content__article">
        <div className="text">Номер записи: {appointment.id}</div>
        <div className="text" style={{ marginTop: '0.5rem' }}>
          {formatAppointmentDateTime(appointment.datetime)}
        </div>
        <div className="text" style={{ marginTop: '0.5rem' }}>
          Врач: {doctorName}
        </div>
        <div className="text" style={{ marginTop: '0.35rem' }}>
          Услуга: {serviceTitle}
        </div>
        <div className="text" style={{ marginTop: '0.35rem' }}>
          Филиал: {branchName}
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
