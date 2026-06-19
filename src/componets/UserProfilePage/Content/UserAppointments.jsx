import React from 'react';
import { Link } from 'react-router-dom';
import { getDoctorById, getDoctorFullName } from '../../../config/clinicPageContent';
import AppointmentTableRow from './AppointmentTableRow';

function UserAppointments({ appointments }) {
  if (appointments?.length) {
    const rows = appointments.map((appointment, index) => {
      const doctor = getDoctorById(appointment.doctorId);

      return (
        <AppointmentTableRow
          key={appointment.id}
          id={appointment.id}
          doctorName={doctor ? getDoctorFullName(doctor) : '—'}
          datetime={appointment.datetime}
          status={appointment.status}
          oddNumber={index % 2 === 1}
        />
      );
    });

    return (
      <div className="main-profile">
        <div className="main-profile__title">Мои записи на приём</div>
        <div className="main-profile__content">
          <div className="main-profile__orders orders-table">
            <div className="orders-table__cell _table-title">Запись №</div>
            <div className="orders-table__cell _table-title">Врач</div>
            <div className="orders-table__cell _table-title">Дата</div>
            <div className="orders-table__cell _table-title">Статус</div>
            <div className="orders-table__cell _table-title"></div>
            {rows}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-profile">
      <div className="main-profile__title">Мои записи на приём</div>
      <div className="main-profile__content">
        <div className="orders-empty__text _title-standart">Пока здесь пусто...</div>
        <Link to="/booking" className="left-part__button btn _icon-arrow-link">
          Записаться на приём
        </Link>
      </div>
    </div>
  );
}

export default UserAppointments;
