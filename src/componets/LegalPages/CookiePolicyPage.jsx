import React from 'react';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import LegalSection from './shared/LegalSection';
import { COOKIE_POLICY_SECTIONS, LEGAL_DISCLAIMER } from '../../config/legalPageContent';

function CookiePolicyPage() {
  return (
    <InfoPageLayout title="Политика использования cookie" intro={LEGAL_DISCLAIMER}>
      {COOKIE_POLICY_SECTIONS.map((section) => (
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

export default CookiePolicyPage;
