import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ClinicPageLayout from '../shared/ClinicPageLayout';
import DoctorAvatar from '../shared/DoctorAvatar';
import ClinicCtaButtons from '../shared/ClinicCtaButtons';
import TextSection from '../../InfoPages/shared/TextSection';
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
        <div className="text-content__article">
          <div className="text">Запрошенный врач не найден.</div>
          <div style={{ marginTop: '1rem' }}>
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
      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
        <DoctorAvatar doctor={doctor} size={88} />
        <div>
          <div className="text">{doctor.specialization}</div>
          <div className="text" style={{ marginTop: '0.35rem', opacity: 0.85 }}>
            Стаж: {doctor.experienceYears} лет
          </div>
        </div>
      </div>

      <TextSection title="Образование" paragraphs={doctor.education} />

      {services.length > 0 && (
        <div className="text-content" style={{ marginBottom: '1.5rem' }}>
          <div className="text-content__title">
            <h4 className="_title-standart">Услуги и направления</h4>
          </div>
          <div className="text-content__article">
            <ul className="text" style={{ paddingLeft: '1.25rem' }}>
              {services.map((service) => (
                <li key={service.slug} style={{ marginBottom: '0.35rem' }}>
                  <Link to={`${ROUTES.services}/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <ClinicCtaButtons
        bookingTo={`${ROUTES.booking}?doctor=${doctor.id}`}
        bookingLabel="Записаться на приём"
      />
    </ClinicPageLayout>
  );
}

export default DoctorCardPage;
