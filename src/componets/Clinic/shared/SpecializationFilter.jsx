import React from 'react';
import { DOCTOR_SPECIALIZATIONS } from '../../../config/clinicPageContent';

function SpecializationFilter({ value, onChange }) {
  const options = [{ value: 'all', label: 'Все' }, ...DOCTOR_SPECIALIZATIONS.map((spec) => ({
    value: spec,
    label: spec,
  }))];

  return (
    <div
      className="clinic-specialization-filter"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
      }}
    >
      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={`btn ${isActive ? '_filled-btn _green' : 'btn_white'}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default SpecializationFilter;
