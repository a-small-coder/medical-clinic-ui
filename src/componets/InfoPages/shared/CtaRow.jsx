import React from 'react';
import { Link } from 'react-router-dom';

function CtaRow({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="info-cta">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={item.variant === 'white' ? 'btn btn_white' : 'btn'}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default CtaRow;
