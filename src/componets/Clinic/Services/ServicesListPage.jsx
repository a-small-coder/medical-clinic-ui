import React from 'react';
import { useLocation } from 'react-router-dom';
import ClinicPageLayout from '../shared/ClinicPageLayout';
import ServiceListItem from '../shared/ServiceListItem';
import {
  DEMO_CLINIC_SERVICES,
  filterServicesByPackagesMode,
  getServicesGroupedByDirection,
} from '../../../config/clinicPageContent';

function ServicesListPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const packagesOnly = searchParams.get('type') === 'packages';

  const filteredServices = filterServicesByPackagesMode(DEMO_CLINIC_SERVICES, packagesOnly);
  const groupedServices = getServicesGroupedByDirection(filteredServices);

  return (
    <ClinicPageLayout
      title={packagesOnly ? 'Пакеты услуг' : 'Услуги клиники'}
      intro={
        packagesOnly
          ? 'Комплексные программы обследования и профилактики.'
          : 'Медицинские услуги клиники «Здоровье+» по направлениям. Запись на приём доступна онлайн.'
      }
    >
      {groupedServices.length > 0 ? (
        groupedServices.map(({ direction, services }) => (
          <div key={direction} style={{ marginBottom: '2rem' }}>
            <div className="text-content__title" style={{ marginBottom: '1rem' }}>
              <h4 className="_title-standart">{direction}</h4>
            </div>
            {services.map((service) => (
              <ServiceListItem key={service.slug} service={service} />
            ))}
          </div>
        ))
      ) : (
        <div className="text-content__article">
          <div className="text">Услуги не найдены.</div>
        </div>
      )}
    </ClinicPageLayout>
  );
}

export default ServicesListPage;
