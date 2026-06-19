import React from 'react';
import { DOCTOR_SPECIALIZATIONS } from '../../../config/clinicPageContent';

function SpecializationFilter({ value, onChange }) {
  const options = [
    { value: 'all', label: 'Все специализации' },
    ...DOCTOR_SPECIALIZATIONS.map((spec) => ({
      value: spec,
      label: spec,
    })),
  ];

  return (
    <div className="clinic-filter">
      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={`btn clinic-filter__chip ${isActive ? '_filled-btn _green _active' : 'btn_white'}`}
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
