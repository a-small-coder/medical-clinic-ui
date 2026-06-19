import React from 'react';
import { getDoctorFullName } from '../../../config/clinicPageContent';

function DoctorAvatar({ doctor, size = 'md' }) {
  const initials = `${doctor.firstName[0]}${doctor.lastName[0]}`;
  const sizeClass = size === 'lg' ? 'clinic-doctor-avatar_lg' : 'clinic-doctor-avatar_md';

  return (
    <div
      className={`clinic-doctor-avatar ${sizeClass}`}
      aria-hidden="true"
      title={getDoctorFullName(doctor)}
    >
      {initials}
    </div>
  );
}

export default DoctorAvatar;
