import React from 'react';

function TextSection({ title, paragraphs }) {
  if (!paragraphs?.length) {
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
