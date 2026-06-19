import React from 'react';
import { useParams } from 'react-router-dom';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';

function DoctorCardPage() {
  const { id } = useParams();

  return (
    <InfoPageLayout title="Врач">
      <div className="text-content__article">
        <div className="text">Карточка врача #{id} будет добавлена в задаче 05.</div>
      </div>
    </InfoPageLayout>
  );
}

export default DoctorCardPage;
