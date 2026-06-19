import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ClinicPageLayout from '../shared/ClinicPageLayout';
import ClinicCtaButtons from '../shared/ClinicCtaButtons';
import TextSection from '../../InfoPages/shared/TextSection';
import { ROUTES } from '../../../config/routes';
import { getServiceBySlug } from '../../../config/clinicPageContent';

function ServiceCardPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <ClinicPageLayout title="Услуга не найдена">
        <div className="text-content__article">
          <div className="text">Запрошенная услуга не найдена.</div>
          <div style={{ marginTop: '1rem' }}>
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
      <TextSection paragraphs={[service.description]} />

      <div className="text-content" style={{ marginBottom: '1.5rem' }}>
        <div className="text-content__title">
          <h4 className="_title-standart">Стоимость и длительность</h4>
        </div>
        <div className="text-content__article">
          <div className="text">от {service.priceFrom.toLocaleString('ru-RU')} ₽</div>
          <div className="text" style={{ marginTop: '0.35rem' }}>
            Длительность: {service.durationMin} мин
          </div>
          {service.isPackage && (
            <div className="text" style={{ marginTop: '0.35rem' }}>
              Комплексный пакет услуг
            </div>
          )}
        </div>
      </div>

      <TextSection title="Подготовка к процедуре" paragraphs={[service.preparation]} />

      <ClinicCtaButtons
        bookingTo={`${ROUTES.booking}?service=${service.slug}`}
        showCatalogLink
      />
    </ClinicPageLayout>
  );
}

export default ServiceCardPage;
