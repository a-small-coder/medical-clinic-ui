import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { BRANCHES } from '../../config/clinicDemo';
import {
  getDoctorById,
  getDoctorFullName,
  getServiceBySlug,
} from '../../config/clinicPageContent';
import { formatAppointmentDateTime, createAppointmentId } from '../../config/appointmentDemo';
import { saveAppointment } from '../../support_functions/appointmentStorage';
import BookingSummary from './shared/BookingSummary';
import SelectDoctorServiceStep from './steps/SelectDoctorServiceStep';
import SelectBranchStep from './steps/SelectBranchStep';
import SelectDateTimeStep from './steps/SelectDateTimeStep';
import BookingConfirmForm from './forms/BookingConfirmForm';
import SuccessStep from './steps/SuccessStep';

function parseInitialParams(search) {
  const params = new URLSearchParams(search);
  return {
    doctorId: params.get('doctor') || '',
    serviceSlug: params.get('service') || '',
  };
}

function BookingWizard({ user }) {
  const location = useLocation();
  const initialParams = useMemo(() => parseInitialParams(location.search), [location.search]);

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    doctorId: initialParams.doctorId,
    serviceSlug: initialParams.serviceSlug,
    branchId: BRANCHES.length === 1 ? String(BRANCHES[0].id) : '',
    selectedDate: null,
    datetime: '',
  });
  const [createdAppointment, setCreatedAppointment] = useState(null);

  const doctor = getDoctorById(bookingData.doctorId);
  const service = getServiceBySlug(bookingData.serviceSlug);
  const branch = BRANCHES.find((item) => String(item.id) === String(bookingData.branchId));

  const updateBookingData = (patch) => {
    setBookingData((prev) => ({ ...prev, ...patch }));
  };

  const handleConfirmSubmit = (formValues) => {
    const appointment = saveAppointment({
      id: createAppointmentId(),
      doctorId: Number(bookingData.doctorId),
      serviceSlug: bookingData.serviceSlug,
      branchId: Number(bookingData.branchId),
      datetime: bookingData.datetime,
      patient: {
        fullName: formValues.fullName,
        phone: formValues.phoneNumber,
        email: formValues.email || '',
      },
      status: 'Подтверждена',
      userId: user?.userId ?? null,
      userEmail: user?.email || formValues.email || null,
      createdAt: new Date().toISOString(),
    });

    setCreatedAppointment(appointment);
    setStep(5);
  };

  const confirmInit = {
    fullName: user?.first_name
      ? `${user.last_name || ''} ${user.first_name || ''} ${user.father_name || ''}`.trim()
      : '',
    phoneNumber: user?.customer?.phone || '',
    email: user?.email || '',
  };

  const isAuthenticated = Boolean(user?.token && !user?.is_anon);

  return (
    <div className="booking-wizard">
      {step < 5 && (
        <BookingSummary
          doctor={doctor ? getDoctorFullName(doctor) : ''}
          service={service?.title || ''}
          branch={branch?.name || ''}
          datetime={bookingData.datetime}
          formatDateTime={formatAppointmentDateTime}
        />
      )}

      {step === 1 && (
        <SelectDoctorServiceStep
          doctorId={String(bookingData.doctorId)}
          serviceSlug={bookingData.serviceSlug}
          onChange={updateBookingData}
          onNext={() => setStep(BRANCHES.length === 1 ? 3 : 2)}
        />
      )}

      {step === 2 && (
        <SelectBranchStep
          branchId={String(bookingData.branchId)}
          onChange={updateBookingData}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <SelectDateTimeStep
          branchId={bookingData.branchId}
          selectedDate={bookingData.selectedDate}
          datetime={bookingData.datetime}
          onChange={updateBookingData}
          onBack={() => setStep(BRANCHES.length === 1 ? 1 : 2)}
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <BookingConfirmForm
          init={confirmInit}
          onSubmit={handleConfirmSubmit}
          onBack={() => setStep(3)}
        />
      )}

      {step === 5 && createdAppointment && (
        <SuccessStep
          appointment={createdAppointment}
          doctorName={doctor ? getDoctorFullName(doctor) : ''}
          serviceTitle={service?.title || ''}
          branchName={branch?.name || ''}
          isAuthenticated={isAuthenticated}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(BookingWizard);
