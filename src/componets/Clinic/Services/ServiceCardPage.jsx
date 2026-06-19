import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ClinicPageLayout from '../shared/ClinicPageLayout';
import ClinicCtaButtons from '../shared/ClinicCtaButtons';
import { ROUTES } from '../../../config/routes';
import { getServiceBySlug } from '../../../config/clinicPageContent';

function ServiceCardPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <ClinicPageLayout title="Услуга не найдена">
        <div className="clinic-empty-state">
          Запрошенная услуга не найдена.
          <div className="clinic-cta" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <Link to={ROUTES.services} className="btn btn_white">
              Вернуться к списку услуг
            </Link>
          </div>
        </div>
      </ClinicPageLayout>
    );
  }

  return (
    <ClinicPageLayout title={service.title}>
      <section className="info-section">
        <div className="clinic-service-card__meta" style={{ marginBottom: '1rem' }}>
          <span className="clinic-meta-badge clinic-meta-badge_accent">
            от {service.priceFrom.toLocaleString('ru-RU')} ₽
          </span>
          <span className="clinic-meta-badge">{service.durationMin} мин</span>
          {service.isPackage && (
            <span className="clinic-meta-badge clinic-meta-badge_accent">Пакет</span>
          )}
        </div>
        <div className="info-section__body">
          <div className="text">{service.description}</div>
        </div>
      </section>

      <section className="info-section info-section_alt">
        <h4 className="info-section__title _title-standart">Подготовка к процедуре</h4>
        <div className="info-section__body">
          <div className="text">{service.preparation}</div>
        </div>
      </section>

      <ClinicCtaButtons
        bookingTo={`${ROUTES.booking}?service=${service.slug}`}
        showCatalogLink
      />
    </ClinicPageLayout>
  );
}

export default ServiceCardPage;
