import React from 'react';

function StatsGrid({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="advantages" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
      {items.map((item) => (
        <div className="advantages__item" key={item.id} style={{ flex: '1 1 140px' }}>
          <h4 className="advantages__title">{item.title}</h4>
          <div className="advantages__text">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;
