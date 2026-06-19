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
          <section key={direction} className="clinic-service-group">
            <h4 className="clinic-service-group__title">{direction}</h4>
            <div className="clinic-service-group__grid">
              {services.map((service) => (
                <ServiceListItem key={service.slug} service={service} />
              ))}
            </div>
          </section>
        ))
      ) : (
        <div className="clinic-empty-state">Услуги не найдены.</div>
      )}
    </ClinicPageLayout>
  );
}

export default ServicesListPage;
