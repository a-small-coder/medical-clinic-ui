import React from 'react';
import { BRANCHES } from '../../../config/clinicDemo';
import StepNavigation from '../shared/StepNavigation';

function SelectBranchStep({ branchId, onChange, onBack, onNext }) {
  const handleBranchChange = (event) => {
    onChange({ branchId: event.target.value });
  };

  return (
    <div className="booking-step">
      <div className="booking-step__title _title-standart">Шаг 2. Филиал</div>

      <div className="booking-branch-list">
        {BRANCHES.map((branch) => (
          <label key={branch.id} className="booking-branch-item">
            <input
              type="radio"
              name="booking-branch"
              value={String(branch.id)}
              checked={String(branchId) === String(branch.id)}
              onChange={handleBranchChange}
            />
            <div className="booking-branch-item__content">
              <div className="booking-branch-item__title">{branch.name}</div>
              <div className="booking-branch-item__text">{branch.address}</div>
              <div className="booking-branch-item__text">{branch.schedule}</div>
            </div>
          </label>
        ))}
      </div>

      <StepNavigation onBack={onBack} onNext={onNext} nextDisabled={!branchId} />
    </div>
  );
}

export default SelectBranchStep;
