import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import { getDoctorFullName } from '../../../config/clinicPageContent';
import DoctorAvatar from './DoctorAvatar';

function DoctorListItem({ doctor }) {
  return (
    <div
      className="text-content"
      style={{
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <DoctorAvatar doctor={doctor} />
        <div style={{ flex: 1 }}>
          <div className="text-content__title">
            <h4 className="_title-standart">
              <Link to={`${ROUTES.doctors}/${doctor.id}`}>{getDoctorFullName(doctor)}</Link>
            </h4>
          </div>
          <div className="text-content__article">
            <div className="text">{doctor.specialization}</div>
            <div className="text" style={{ marginTop: '0.35rem', opacity: 0.85 }}>
              Стаж: {doctor.experienceYears} лет
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <Link to={`${ROUTES.doctors}/${doctor.id}`} className="btn btn_white">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorListItem;
