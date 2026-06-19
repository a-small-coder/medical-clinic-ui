import React from 'react';
import InfoPageLayout from './shared/InfoPageLayout';
import TextSection from './shared/TextSection';
import FaqList from './shared/FaqList';
import CtaRow from './shared/CtaRow';
import {
  FOR_CLIENTS_FAQ,
  FOR_CLIENTS_INTRO,
  FOR_CLIENTS_SAMPLE_COLLECTION,
} from '../../config/infoPageContent';
import { ROUTES } from '../../config/routes';

function ForClientsPage() {
  return (
    <InfoPageLayout title="Для клиентов" intro={FOR_CLIENTS_INTRO.paragraphs}>
      <CtaRow
        items={[
          { to: ROUTES.catalog, label: 'Каталог анализов' },
          { to: ROUTES.booking, label: 'Записаться на приём', variant: 'white' },
        ]}
      />
      <FaqList items={FOR_CLIENTS_FAQ} />
      <TextSection
        title={FOR_CLIENTS_SAMPLE_COLLECTION.title}
        paragraphs={FOR_CLIENTS_SAMPLE_COLLECTION.paragraphs}
        iconClass="_icon-search"
        variant="alt"
      />
    </InfoPageLayout>
  );
}

export default ForClientsPage;
