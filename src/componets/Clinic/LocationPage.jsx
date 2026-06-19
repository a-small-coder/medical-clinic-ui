import React from 'react';
import { Link } from 'react-router-dom';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import TextSection from '../InfoPages/shared/TextSection';
import { BRANCHES, CLINIC_EMAIL, CLINIC_PHONE } from '../../config/clinicDemo';
import { ROUTES } from '../../config/routes';

function LocationPage() {
  return (
    <InfoPageLayout title="Контакты и филиалы">
      <TextSection
        title="Как с нами связаться"
        paragraphs={[
          `Телефон call-центра: ${CLINIC_PHONE}`,
          `Email: ${CLINIC_EMAIL}`,
        ]}
      />
      {BRANCHES.map((branch) => (
        <TextSection
          key={branch.id}
          title={branch.name}
          paragraphs={[
            branch.address,
            `Телефон: ${branch.phone}`,
            `Режим работы: ${branch.schedule}`,
            branch.isSampleCollectionPoint
              ? `Пункт сдачи анализов: ${branch.officeLabel}`
              : null,
          ].filter(Boolean)}
        />
      ))}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        <Link to={ROUTES.booking} className="btn">
          Записаться на приём
        </Link>
        <Link to={ROUTES.catalog} className="btn btn_white">
          Заказать анализы
        </Link>
      </div>
    </InfoPageLayout>
  );
}

export default LocationPage;
