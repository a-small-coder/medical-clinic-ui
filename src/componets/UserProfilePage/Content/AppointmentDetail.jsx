import React from 'react';
import { Link } from 'react-router-dom';
import { formatAppointmentDateTime } from '../../../config/appointmentDemo';
import { getDoctorById, getDoctorFullName, getServiceBySlug } from '../../../config/clinicPageContent';
import { BRANCHES } from '../../../config/clinicDemo';

function AppointmentDetail({ appointment }) {
  if (!appointment) {
    return (
      <div className="main-profile">
        <div className="main-profile__title">Запись не найдена</div>
        <Link to="/user/profile/appointments" className="btn btn_white">
          К списку записей
        </Link>
      </div>
    );
  }

  const doctor = getDoctorById(appointment.doctorId);
  const service = getServiceBySlug(appointment.serviceSlug);
  const branch = BRANCHES.find((item) => item.id === appointment.branchId);

  return (
    <div className="main-profile">
      <div className="main-profile__title">Запись {appointment.id}</div>
      <div className="main-profile__content">
        <div className="user-info__row">
          <div className="user-info__row_item">Статус:</div>
          <div className="user-info__row_item">{appointment.status}</div>
        </div>
        <div className="user-info__row">
          <div className="user-info__row_item">Дата и время:</div>
          <div className="user-info__row_item">{formatAppointmentDateTime(appointment.datetime)}</div>
        </div>
        <div className="user-info__row">
          <div className="user-info__row_item">Врач:</div>
          <div className="user-info__row_item">
            {doctor ? getDoctorFullName(doctor) : '—'}
          </div>
        </div>
        <div className="user-info__row">
          <div className="user-info__row_item">Услуга:</div>
          <div className="user-info__row_item">{service?.title || '—'}</div>
        </div>
        <div className="user-info__row">
          <div className="user-info__row_item">Филиал:</div>
          <div className="user-info__row_item">{branch?.name || '—'}</div>
        </div>
        <div className="user-info__row">
          <div className="user-info__row_item">Пациент:</div>
          <div className="user-info__row_item">{appointment.patient?.fullName}</div>
        </div>
        <div className="user-info__row">
          <div className="user-info__row_item">Телефон:</div>
          <div className="user-info__row_item">{appointment.patient?.phone}</div>
        </div>
        {appointment.patient?.email && (
          <div className="user-info__row">
            <div className="user-info__row_item">Email:</div>
            <div className="user-info__row_item">{appointment.patient.email}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentDetail;
