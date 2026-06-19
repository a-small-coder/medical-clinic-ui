import React from 'react';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';
import StatsGrid from '../InfoPages/shared/StatsGrid';
import ContentBlock from '../InfoPages/shared/ContentBlock';
import { ABOUT_US_CONTENT, CLINIC_STATS } from '../../config/infoPageContent';

function AboutUsConteiner() {
  return (
    <InfoPageLayout title="О компании">
      <StatsGrid items={CLINIC_STATS} />
      <ContentBlock sections={ABOUT_US_CONTENT.sections} />
    </InfoPageLayout>
  );
}

export default AboutUsConteiner;
