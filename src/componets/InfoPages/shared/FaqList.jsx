import React from 'react';
import { Link } from 'react-router-dom';

function FaqList({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="info-faq">
      <div className="info-faq__heading">
        <h4 className="_title-standart">Частые вопросы</h4>
      </div>
      <div className="info-faq__list">
        {items.map((item) => (
          <div className="info-faq__item" key={item.id}>
            <div className="info-faq__question">{item.question}</div>
            <div className="info-faq__answer">{item.answer}</div>
            {item.link && (
              <div className="info-faq__link">
                <Link to={item.link.to} className="btn btn_white">
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
