import React from 'react';
import InfoPageLayout from '../../InfoPages/shared/InfoPageLayout';
import '../../../styles/Clinic/clinic-pages.scss';

function ClinicPageLayout({ title, intro, children }) {
  return (
    <InfoPageLayout title={title} intro={intro}>
      {children}
    </InfoPageLayout>
  );
}

export default ClinicPageLayout;
