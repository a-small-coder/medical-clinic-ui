import React from 'react';
import { buildYandexMapUrl } from '../../../config/clinicDemo';

function LocationMap({ branches }) {
  const mapUrl = buildYandexMapUrl(branches);

  if (!mapUrl) {
    return null;
  }

  return (
    <div className="location-map">
      <h4 className="location-map__title _title-standart">Карта филиалов</h4>
      <iframe
        title="Карта филиалов клиники"
        className="location-map__frame"
        src={mapUrl}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}

export default LocationMap;
