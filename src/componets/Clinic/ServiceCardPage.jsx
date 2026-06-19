import React from 'react';
import { useParams } from 'react-router-dom';
import InfoPageLayout from '../InfoPages/shared/InfoPageLayout';

function ServiceCardPage() {
  const { slug } = useParams();

  return (
    <InfoPageLayout title="Услуга">
      <div className="text-content__article">
        <div className="text">Карточка услуги «{slug}» будет добавлена в задаче 05.</div>
      </div>
    </InfoPageLayout>
  );
}

export default ServiceCardPage;
