import React from 'react';
import { Link } from 'react-router-dom';
import InfoPageLayout from './shared/InfoPageLayout';
import TextSection from './shared/TextSection';
import FaqList from './shared/FaqList';
import {
  FOR_CLIENTS_FAQ,
  FOR_CLIENTS_INTRO,
  FOR_CLIENTS_SAMPLE_COLLECTION,
} from '../../config/infoPageContent';
import { ROUTES } from '../../config/routes';

function ForClientsPage() {
  return (
    <InfoPageLayout title="Для клиентов">
      <TextSection
        title={FOR_CLIENTS_INTRO.title}
        paragraphs={FOR_CLIENTS_INTRO.paragraphs}
      />
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to={ROUTES.catalog} className="btn">
          Каталог анализов
        </Link>
      </div>
      <FaqList items={FOR_CLIENTS_FAQ} />
      <TextSection
        title={FOR_CLIENTS_SAMPLE_COLLECTION.title}
        paragraphs={FOR_CLIENTS_SAMPLE_COLLECTION.paragraphs}
      />
    </InfoPageLayout>
  );
}

export default ForClientsPage;
