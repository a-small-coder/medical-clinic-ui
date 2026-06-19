function BookingSummary({ doctor, service, branch, datetime, formatDateTime }) {
  if (!doctor && !service && !branch && !datetime) {
    return null;
  }

  return (
    <div className="booking-summary">
      <div className="booking-summary__title _title-standart">Ваша запись</div>
      {doctor && (
        <div className="booking-summary__row">
          <span className="booking-summary__label">Врач:</span>
          <span>{doctor}</span>
        </div>
      )}
      {service && (
        <div className="booking-summary__row">
          <span className="booking-summary__label">Услуга:</span>
          <span>{service}</span>
        </div>
      )}
      {branch && (
        <div className="booking-summary__row">
          <span className="booking-summary__label">Филиал:</span>
          <span>{branch}</span>
        </div>
      )}
      {datetime && (
        <div className="booking-summary__row">
          <span className="booking-summary__label">Дата и время:</span>
          <span>{formatDateTime(datetime)}</span>
        </div>
      )}
    </div>
  );
}

export default BookingSummary;
