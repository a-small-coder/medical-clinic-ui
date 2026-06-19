import React from 'react';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import LegalSection from './shared/LegalSection';
import {
  LEGAL_DISCLAIMER,
  LICENSE_DOCUMENTS,
  LICENSE_SECTIONS,
} from '../../config/legalPageContent';

function LicensePage() {
  return (
    <InfoPageLayout title="Документы и лицензии" intro={LEGAL_DISCLAIMER}>
      {LICENSE_SECTIONS.map((section) => (
        <LegalSection
          key={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          items={section.items}
        />
      ))}
      <div className="text-content" style={{ marginBottom: '1.5rem' }}>
        <div className="text-content__title">
          <h4 className="_title-standart">Документы для ознакомления</h4>
        </div>
        <div className="text-content__article">
          <ul className="text" style={{ paddingLeft: '1.25rem' }}>
            {LICENSE_DOCUMENTS.map((doc) => (
              <li key={doc.id} style={{ marginBottom: '0.75rem' }}>
                {doc.title} —{' '}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </InfoPageLayout>
  );
}

export default LicensePage;
