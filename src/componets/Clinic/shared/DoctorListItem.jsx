import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import { getDoctorFullName } from '../../../config/clinicPageContent';
import DoctorAvatar from './DoctorAvatar';

function DoctorListItem({ doctor }) {
  return (
    <article className="clinic-doctor-card">
      <div className="clinic-doctor-card__header">
        <DoctorAvatar doctor={doctor} />
        <div>
          <h4 className="clinic-doctor-card__name">
            <Link to={`${ROUTES.doctors}/${doctor.id}`}>{getDoctorFullName(doctor)}</Link>
          </h4>
          <div className="clinic-doctor-card__spec">{doctor.specialization}</div>
        </div>
      </div>
      <div className="clinic-doctor-card__body">
        <div className="clinic-doctor-card__meta">Стаж: {doctor.experienceYears} лет</div>
        <div className="clinic-doctor-card__footer">
          <Link to={`${ROUTES.doctors}/${doctor.id}`} className="btn btn_white">
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DoctorListItem;
