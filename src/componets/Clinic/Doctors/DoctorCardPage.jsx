import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ClinicPageLayout from '../shared/ClinicPageLayout';
import DoctorAvatar from '../shared/DoctorAvatar';
import ClinicCtaButtons from '../shared/ClinicCtaButtons';
import { ROUTES } from '../../../config/routes';
import {
  getDoctorById,
  getDoctorFullName,
  getServicesByDoctor,
} from '../../../config/clinicPageContent';

function DoctorCardPage() {
  const { id } = useParams();
  const doctor = getDoctorById(id);

  if (!doctor) {
    return (
      <ClinicPageLayout title="Врач не найден">
        <div className="clinic-empty-state">
          Запрошенный врач не найден.
          <div className="clinic-cta" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <Link to={ROUTES.doctors} className="btn btn_white">
              Вернуться к списку врачей
            </Link>
          </div>
        </div>
      </ClinicPageLayout>
    );
  }

  const services = getServicesByDoctor(doctor);

  return (
    <ClinicPageLayout title={getDoctorFullName(doctor)}>
      <div className="clinic-profile-card">
        <DoctorAvatar doctor={doctor} size="lg" />
        <div className="clinic-profile-card__info">
          <div className="clinic-profile-card__spec">{doctor.specialization}</div>
          <div className="clinic-profile-card__meta">Стаж: {doctor.experienceYears} лет</div>
        </div>
      </div>

      <section className="info-section">
        <h4 className="info-section__title _title-standart">Образование</h4>
        <div className="info-section__body">
          {doctor.education.map((paragraph, index) => (
            <div className="text" key={index}>
              {paragraph}
            </div>
          ))}
        </div>
      </section>

      {services.length > 0 && (
        <section className="info-section info-section_alt">
          <h4 className="info-section__title _title-standart">Услуги и направления</h4>
          <ul className="clinic-link-list">
            {services.map((service) => (
              <li className="clinic-link-list__item" key={service.slug}>
                <Link to={`${ROUTES.services}/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ClinicCtaButtons
        bookingTo={`${ROUTES.booking}?doctor=${doctor.id}`}
        bookingLabel="Записаться на приём"
      />
    </ClinicPageLayout>
  );
}

export default DoctorCardPage;
