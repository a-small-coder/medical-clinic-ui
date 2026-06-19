import React from 'react';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import StatsGrid from '../InfoPages/shared/StatsGrid';
import ContentBlock from '../InfoPages/shared/ContentBlock';
import { ABOUT_US_CONTENT, CLINIC_STATS } from '../../config/infoPageContent';
import { CLINIC_NAME } from '../../config/clinicDemo';

function AboutUsConteiner() {
  return (
    <InfoPageLayout
      title="О компании"
      intro={`${CLINIC_NAME} — современная клиника с полным циклом медицинской помощи: от приёма врача до лабораторной диагностики и онлайн-сервисов для пациентов.`}
    >
      <StatsGrid items={CLINIC_STATS} />
      <ContentBlock sections={ABOUT_US_CONTENT.sections} />
    </InfoPageLayout>
  );
}

export default AboutUsConteiner;
