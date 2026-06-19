import React from 'react';
import { Link } from 'react-router-dom';

function StockListItem({ title, description, validUntil, link, linkLabel }) {
  return (
    <div className="text-content" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="text-content__title">
        <h4 className="_title-standart">{title}</h4>
      </div>
      <div className="text-content__article">
        <div className="text">{description}</div>
        {validUntil && (
          <div className="text" style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Действует до: {validUntil}
          </div>
        )}
        {link && linkLabel && (
          <div style={{ marginTop: '0.75rem' }}>
            <Link to={link} className="btn btn_white">
              {linkLabel}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockListItem;
