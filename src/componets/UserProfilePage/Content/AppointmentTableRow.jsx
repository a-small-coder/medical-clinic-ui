import React from 'react';
import { Link } from 'react-router-dom';

function AppointmentTableRow({ id, doctorName, datetime, status, oddNumber }) {
  let cellClass = 'orders-table__cell';
  if (oddNumber) {
    cellClass += ' _filled';
  }

  const dateLabel = datetime ? datetime.slice(0, 10) : '';

  return (
    <React.Fragment>
      <div className={cellClass}>{id}</div>
      <div className={cellClass}>{doctorName}</div>
      <div className={cellClass}>{dateLabel}</div>
      <div className={cellClass}>{status}</div>
      <Link to={`appointment-${id}`} className={`${cellClass} _icon-arrow-link`}></Link>
    </React.Fragment>
  );
}

export default AppointmentTableRow;
