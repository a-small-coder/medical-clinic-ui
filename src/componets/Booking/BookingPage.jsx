import React from 'react';
import ClinicPageLayout from '../Clinic/shared/ClinicPageLayout';
import BookingWizard from './BookingWizard';
import '../../styles/Booking/BookingPage.scss';

function BookingPage() {
  return (
    <ClinicPageLayout
      title="Запись на приём"
      intro="Выберите врача, услугу, филиал и удобное время. Подтверждение займёт несколько минут."
    >
      <BookingWizard />
    </ClinicPageLayout>
  );
}

export default BookingPage;
