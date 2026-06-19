import React from 'react';
import { Link } from 'react-router-dom';

function StockListItem({ title, description, validUntil, link, linkLabel }) {
  return (
    <article className="info-stock-card">
      {validUntil && (
        <div className="info-stock-card__badge">до {validUntil}</div>
      )}
      <h4 className="info-stock-card__title">{title}</h4>
      <div className="info-stock-card__description">{description}</div>
      {link && linkLabel && (
        <div className="info-stock-card__footer">
          <Link to={link} className="btn btn_white">
            {linkLabel}
          </Link>
        </div>
      )}
    </article>
  );
}

export default StockListItem;
