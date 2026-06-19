import React from 'react';
import { BRANCHES } from '../../../config/clinicDemo';
import StepNavigation from '../shared/StepNavigation';

function SelectBranchStep({ branchId, onChange, onBack, onNext }) {
  const handleBranchChange = (event) => {
    onChange({ branchId: event.target.value });
  };

  return (
    <div className="booking-step">
      <div className="booking-step__title _title-standart">Выберите филиал</div>

      <div className="booking-branch-list">
        {BRANCHES.map((branch) => {
          const isSelected = String(branchId) === String(branch.id);

          return (
            <label
              key={branch.id}
              className={`booking-branch-item${isSelected ? ' _selected' : ''}`}
            >
              <input
                type="radio"
                name="booking-branch"
                value={String(branch.id)}
                checked={isSelected}
                onChange={handleBranchChange}
              />
              <div className="booking-branch-item__content">
                <div className="booking-branch-item__title">{branch.name}</div>
                <div className="booking-branch-item__text">{branch.address}</div>
                <div className="booking-branch-item__text">{branch.schedule}</div>
              </div>
            </label>
          );
        })}
      </div>

      <StepNavigation onBack={onBack} onNext={onNext} nextDisabled={!branchId} />
    </div>
  );
}

export default SelectBranchStep;
