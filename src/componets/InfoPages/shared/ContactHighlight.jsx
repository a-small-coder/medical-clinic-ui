import React from 'react';

function ContactHighlight({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="info-contact">
      {title && <h4 className="info-contact__title">{title}</h4>}
      <ul className="info-contact__list">
        {items.map((item, index) => (
          <li className="info-contact__item" key={index}>
            {item.label && <span className="info-contact__label">{item.label}</span>}
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactHighlight;
