import React from 'react';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import LegalSection from './shared/LegalSection';
import {
  LEGAL_DISCLAIMER,
  PERSONAL_DATA_CONSENT_SECTIONS,
} from '../../config/legalPageContent';

function PersonalDataConsentPage() {
  return (
    <InfoPageLayout title="Согласие на обработку персональных данных" intro={LEGAL_DISCLAIMER}>
      {PERSONAL_DATA_CONSENT_SECTIONS.map((section) => (
        <LegalSection
          key={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          items={section.items}
        />
      ))}
    </InfoPageLayout>
  );
}

export default PersonalDataConsentPage;
