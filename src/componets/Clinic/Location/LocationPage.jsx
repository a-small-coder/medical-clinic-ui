import React from 'react';
import InfoPageLayout from '../../InfoPages/shared/InfoPageLayout';
import ContactHighlight from '../../InfoPages/shared/ContactHighlight';
import CtaRow from '../../InfoPages/shared/CtaRow';
import { BRANCHES, CLINIC_EMAIL, CLINIC_PHONE } from '../../../config/clinicDemo';
import { ROUTES } from '../../../config/routes';
import BranchCard from './BranchCard';
import LocationMap from './LocationMap';
import '../../../styles/Clinic/LocationPage.scss';

function LocationPage() {
  return (
    <InfoPageLayout title="Контакты и филиалы">
      <ContactHighlight
        title="Call-центр"
        items={[
          {
            label: 'Телефон:',
            value: <a href="tel:+74951204567">{CLINIC_PHONE}</a>,
          },
          {
            label: 'Email:',
            value: <a href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>,
          },
        ]}
      />

      <LocationMap branches={BRANCHES} />

      <section className="location-branches">
        <h4 className="location-branches__title">Наши филиалы</h4>
        <div className="location-branches__grid">
          {BRANCHES.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>

      <CtaRow
        items={[
          { to: ROUTES.booking, label: 'Записаться на приём' },
          { to: ROUTES.catalog, label: 'Заказать анализы', variant: 'white' },
        ]}
      />
    </InfoPageLayout>
  );
}

export default LocationPage;
