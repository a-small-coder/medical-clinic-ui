import React, { useMemo } from 'react';
import {
  DEMO_CLINIC_SERVICES,
  DEMO_DOCTORS,
  getDoctorFullName,
} from '../../../config/clinicPageContent';
import StepNavigation from '../shared/StepNavigation';

function SelectDoctorServiceStep({ doctorId, serviceSlug, onChange, onNext }) {
  const availableServices = useMemo(() => {
    if (!doctorId) {
      return DEMO_CLINIC_SERVICES;
    }

    const doctor = DEMO_DOCTORS.find((item) => String(item.id) === String(doctorId));
    if (!doctor) {
      return DEMO_CLINIC_SERVICES;
    }

    return DEMO_CLINIC_SERVICES.filter((service) => doctor.serviceSlugs.includes(service.slug));
  }, [doctorId]);

  const handleDoctorChange = (event) => {
    const nextDoctorId = event.target.value;
    const doctor = DEMO_DOCTORS.find((item) => String(item.id) === String(nextDoctorId));
    const nextServices = doctor
      ? DEMO_CLINIC_SERVICES.filter((service) => doctor.serviceSlugs.includes(service.slug))
      : DEMO_CLINIC_SERVICES;
    const isServiceValid = nextServices.some((service) => service.slug === serviceSlug);

    onChange({
      doctorId: nextDoctorId,
      serviceSlug: isServiceValid ? serviceSlug : '',
    });
  };

  const handleServiceChange = (event) => {
    onChange({ serviceSlug: event.target.value });
  };

  const canProceed = Boolean(doctorId && serviceSlug);

  return (
    <div className="booking-step">
      <div className="booking-step__title _title-standart">Шаг 1. Врач и услуга</div>

      <div className="form-control select__block">
        <label className="select__label" htmlFor="booking-doctor">
          Врач
        </label>
        <select
          id="booking-doctor"
          className="select__field auth_input"
          value={doctorId}
          onChange={handleDoctorChange}
        >
          <option value="">Выберите врача</option>
          {DEMO_DOCTORS.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {getDoctorFullName(doctor)} — {doctor.specialization}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control select__block">
        <label className="select__label" htmlFor="booking-service">
          Услуга
        </label>
        <select
          id="booking-service"
          className="select__field auth_input"
          value={serviceSlug}
          onChange={handleServiceChange}
          disabled={!doctorId}
        >
          <option value="">Выберите услугу</option>
          {availableServices.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <StepNavigation showBack={false} onNext={onNext} nextDisabled={!canProceed} />
    </div>
  );
}

export default SelectDoctorServiceStep;
