import React from 'react';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import LegalSection from './shared/LegalSection';
import { LEGAL_DISCLAIMER, TERMS_SECTIONS } from '../../config/legalPageContent';

function TermsPage() {
  return (
    <InfoPageLayout title="Пользовательское соглашение" intro={LEGAL_DISCLAIMER}>
      {TERMS_SECTIONS.map((section) => (
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

export default TermsPage;
