import React from 'react';
import { Link } from 'react-router-dom';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import LegalSection from './shared/LegalSection';
import {
  LEGAL_DISCLAIMER,
  PERSONAL_DATA_POLICY_SECTIONS,
} from '../../config/legalPageContent';
import { ROUTES } from '../../config/routes';

function PersonalDataPolicyPage() {
  return (
    <InfoPageLayout title="Политика обработки персональных данных" intro={LEGAL_DISCLAIMER}>
      {PERSONAL_DATA_POLICY_SECTIONS.map((section) => (
        <LegalSection
          key={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          items={section.items}
        />
      ))}
      <div className="text-content__article">
        <div className="text">
          Текст согласия на обработку персональных данных доступен на странице{' '}
          <Link to={ROUTES.personalDataConsent}>Согласие на обработку ПДн</Link>.
        </div>
      </div>
    </InfoPageLayout>
  );
}

export default PersonalDataPolicyPage;
