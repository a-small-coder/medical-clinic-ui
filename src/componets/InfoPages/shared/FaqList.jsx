import React from 'react';
import { Link } from 'react-router-dom';

function FaqList({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="text-content">
      <div className="text-content__title">
        <h4 className="_title-standart">Частые вопросы</h4>
      </div>
      <div className="text-content__article">
        {items.map((item) => (
          <div className="text" key={item.id} style={{ marginBottom: '1.25rem' }}>
            <strong>{item.question}</strong>
            <div style={{ marginTop: '0.5rem' }}>{item.answer}</div>
            {item.link && (
              <div style={{ marginTop: '0.5rem' }}>
                <Link to={item.link.to} className="_text-link">
                  {item.link.label}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqList;
