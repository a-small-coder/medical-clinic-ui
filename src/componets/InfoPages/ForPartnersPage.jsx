import React from 'react';
import InfoPageLayout from './shared/InfoPageLayout';
import ContactHighlight from './shared/ContactHighlight';
import {
  FOR_PARTNERS_CONTACT,
  FOR_PARTNERS_SECTIONS,
} from '../../config/infoPageContent';
import { PARTNERS_CONTACT } from '../../config/clinicDemo';

function ForPartnersPage() {
  return (
    <InfoPageLayout
      title="Партнёрам"
      intro="Сотрудничество с корпоративными клиентами, страховыми компаниями и организациями по программам медицинского обслуживания."
    >
      <div className="info-cards">
        {FOR_PARTNERS_SECTIONS.map((section) => (
          <div className="info-card" key={section.id}>
            <h4 className="info-card__title">{section.title}</h4>
            <div className="info-card__text">{section.paragraphs[0]}</div>
          </div>
        ))}
      </div>
      <ContactHighlight
        title={FOR_PARTNERS_CONTACT.title}
        items={[
          { label: 'Email:', value: PARTNERS_CONTACT.email },
          { label: 'Телефон:', value: PARTNERS_CONTACT.phone },
          { label: 'Часы работы:', value: PARTNERS_CONTACT.schedule },
        ]}
      />
    </InfoPageLayout>
  );
}

export default ForPartnersPage;
