import React from 'react';

function ContentBlock({ sections, wrapperClassName = '' }) {
  if (!sections?.length) {
    return null;
  }

  return (
    <>
      {sections.map((section) => (
        <div className={`${wrapperClassName} content-block`} key={section.id}>
          <div className="content-block__content text-content">
            <div className="text-content__title">
              <h4 className="_title-standart">{section.title}</h4>
            </div>
            <div className="text-content__article">
              {section.paragraphs.map((paragraph, index) => (
                <div className="text" key={index}>
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContentBlock;
