import React from 'react';

function LegalSection({ title, paragraphs, items }) {
  const hasParagraphs = paragraphs?.length > 0;
  const hasItems = items?.length > 0;

  if (!hasParagraphs && !hasItems) {
    return null;
  }

  return (
    <div className="text-content" style={{ marginBottom: '1.5rem' }}>
      {title && (
        <div className="text-content__title">
          <h4 className="_title-standart">{title}</h4>
        </div>
      )}
      <div className="text-content__article">
        {hasParagraphs &&
          paragraphs.map((paragraph, index) => (
            <div className="text" key={index}>
              {paragraph}
            </div>
          ))}
        {hasItems && (
          <ul className="text" style={{ paddingLeft: '1.25rem', marginTop: hasParagraphs ? '0.5rem' : 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.35rem' }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LegalSection;
