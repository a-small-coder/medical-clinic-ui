import React from 'react';

const STEP_LABELS = ['Врач и услуга', 'Филиал', 'Дата и время', 'Подтверждение'];

function BookingStepIndicator({ currentStep }) {
  if (currentStep > 4) {
    return null;
  }

  return (
    <div className="booking-steps" aria-label="Шаги записи">
      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        let itemClass = 'booking-steps__item';
        if (isActive) itemClass += ' _active';
        if (isCompleted) itemClass += ' _completed';

        return (
          <div key={label} className={itemClass}>
            <div className="booking-steps__number">{stepNumber}</div>
            <div className="booking-steps__label">{label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BookingStepIndicator;
