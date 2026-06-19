import React from 'react';

function TextSection({ title, paragraphs, iconClass, variant = 'default' }) {
  if (!paragraphs?.length) {
    return null;
  }

  const sectionClassName = variant === 'alt'
    ? 'info-section info-section_alt'
    : 'info-section';

  return (
    <div className={sectionClassName}>
      {title && (
        <div className={iconClass ? 'info-section__header' : undefined}>
          {iconClass && (
            <div className={`info-section__icon ${iconClass}`} aria-hidden="true" />
          )}
          <h4 className="info-section__title _title-standart">{title}</h4>
        </div>
      )}
      <div className="info-section__body text-content__article">
        {paragraphs.map((paragraph, index) => (
          <div className="text" key={index}>
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextSection;
