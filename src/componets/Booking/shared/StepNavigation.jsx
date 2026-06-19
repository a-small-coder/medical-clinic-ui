import React from 'react';

function StepNavigation({ onBack, onNext, nextLabel = 'Далее', showBack = true, nextDisabled = false }) {
  return (
    <div className="booking-step-nav">
      {showBack ? (
        <button type="button" className="btn btn_white" onClick={onBack}>
          Назад
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        className="btn _filled-btn _green"
        onClick={onNext}
        disabled={nextDisabled}
      >
        {nextLabel}
      </button>
    </div>
  );
}

export default StepNavigation;
