import React from 'react';
import '../../../styles/AboutUs/about_us.scss';

function InfoPageLayout({ title, intro, children }) {
  const introParagraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];

  return (
    <main className="page">
      <section className="page__base aboutus-page">
        <div className="aboutus-page__container _container">
          <div className="aboutus-page__body">
            <div className="info-page__hero">
              <h1 className="aboutus-page__title _title">
                <span>{title}</span>
              </h1>
              {introParagraphs.map((paragraph, index) => (
                <div className="info-page__intro" key={index}>
                  {paragraph}
                </div>
              ))}
            </div>
            <div className="info-page__sections">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InfoPageLayout;
