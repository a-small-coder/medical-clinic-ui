import React from 'react';

function StatsGrid({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="info-stats">
      {items.map((item) => (
        <div className="info-stats__item" key={item.id}>
          <div className="info-stats__value">{item.title}</div>
          <div className="info-stats__label">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;
