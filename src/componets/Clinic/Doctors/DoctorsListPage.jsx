import React, { useState } from 'react';
import ClinicPageLayout from '../shared/ClinicPageLayout';
import SpecializationFilter from '../shared/SpecializationFilter';
import DoctorListItem from '../shared/DoctorListItem';
import { filterDoctorsBySpecialization } from '../../../config/clinicPageContent';

function DoctorsListPage() {
  const [specialization, setSpecialization] = useState('all');
  const doctors = filterDoctorsBySpecialization(specialization);

  return (
    <ClinicPageLayout
      title="Врачи"
      intro="Выберите специалиста клиники «Здоровье+». Запись на приём доступна онлайн."
    >
      <SpecializationFilter value={specialization} onChange={setSpecialization} />
      {doctors.length > 0 ? (
        <div className="clinic-doctors-grid">
          {doctors.map((doctor) => (
            <DoctorListItem key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="clinic-empty-state">Врачи по выбранной специализации не найдены.</div>
      )}
    </ClinicPageLayout>
  );
}

export default DoctorsListPage;
