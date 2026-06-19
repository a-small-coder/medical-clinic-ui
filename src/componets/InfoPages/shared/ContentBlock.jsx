import React from 'react';

function ContentBlock({ sections }) {
  if (!sections?.length) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => (
        <div
          className={`info-section${index % 2 === 1 ? ' info-section_alt' : ''}`}
          key={section.id}
        >
          <h4 className="info-section__title _title-standart">{section.title}</h4>
          <div className="info-section__body text-content__article">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <div className="text" key={paragraphIndex}>
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ContentBlock;
