import React from 'react';
import InfoPageLayout from './shared/InfoPageLayout';
import TextSection from './shared/TextSection';
import {
  FOR_PARTNERS_CONTACT,
  FOR_PARTNERS_SECTIONS,
} from '../../config/infoPageContent';

function ForPartnersPage() {
  return (
    <InfoPageLayout title="Партнёрам">
      {FOR_PARTNERS_SECTIONS.map((section) => (
        <TextSection
          key={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
      <TextSection
        title={FOR_PARTNERS_CONTACT.title}
        paragraphs={FOR_PARTNERS_CONTACT.paragraphs}
      />
    </InfoPageLayout>
  );
}

export default ForPartnersPage;
