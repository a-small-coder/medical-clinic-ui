import React from 'react';
import { getDoctorFullName } from '../../../config/clinicPageContent';

function DoctorAvatar({ doctor, size = 64 }) {
  const initials = `${doctor.firstName[0]}${doctor.lastName[0]}`;

  return (
    <div
      className="clinic-doctor-avatar"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#e8f4f0',
        color: '#2d6a4f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: size * 0.35,
        flexShrink: 0,
      }}
      aria-hidden="true"
      title={getDoctorFullName(doctor)}
    >
      {initials}
    </div>
  );
}

export default DoctorAvatar;
