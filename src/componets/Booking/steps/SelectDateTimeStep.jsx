import React, { useMemo } from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  generateTimeSlots,
  getDefaultBookingDate,
  isBookingDateValid,
} from '../../../config/appointmentDemo';
import StepNavigation from '../shared/StepNavigation';

function SelectDateTimeStep({ branchId, selectedDate, datetime, onChange, onBack, onNext }) {
  const dateValue = selectedDate || getDefaultBookingDate();
  const slots = useMemo(
    () => generateTimeSlots(dateValue, branchId),
    [dateValue, branchId]
  );

  const handleDateChange = (date) => {
    onChange({
      selectedDate: date,
      datetime: '',
    });
  };

  const handleSlotSelect = (slotValue) => {
    onChange({ datetime: slotValue });
  };

  return (
    <div className="booking-step">
      <div className="booking-step__title _title-standart">Выберите дату и время</div>

      <div className="form-control datepicker-block">
        <label htmlFor="booking-date">Дата приёма</label>
        <DateView
          id="booking-date"
          wrapperClassName="auth__input"
          selected={dateValue}
          onChange={handleDateChange}
          minDate={new Date()}
          filterDate={isBookingDateValid}
          dateFormat="dd.MM.yyyy"
        />
      </div>

      <div className="booking-slots">
        <div className="booking-slots__title">Доступное время</div>
        {slots.length > 0 ? (
          <div className="booking-slots__grid">
            {slots.map((slot) => (
              <button
                key={slot.value}
                type="button"
                className={`booking-slots__item btn ${
                  datetime === slot.value ? '_filled-btn _green' : 'btn_white'
                }`}
                onClick={() => handleSlotSelect(slot.value)}
              >
                {slot.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="clinic-empty-state">
            На выбранную дату свободных слотов нет. Выберите другую дату.
          </div>
        )}
      </div>

      <StepNavigation onBack={onBack} onNext={onNext} nextDisabled={!datetime} />
    </div>
  );
}

export default SelectDateTimeStep;
