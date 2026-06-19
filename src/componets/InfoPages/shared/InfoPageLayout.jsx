import React from 'react';
import '../../../styles/AboutUs/about_us.scss';

function InfoPageLayout({ title, intro, children }) {
  return (
    <main className="page">
      <section className="page__base aboutus-page">
        <div className="aboutus-page__container _container">
          <div className="aboutus-page__body">
            <h1 className="aboutus-page__title _title">
              <span>{title}</span>
            </h1>
            {intro && (
              <div className="text-content__article" style={{ marginBottom: '1.5rem' }}>
                <div className="text">{intro}</div>
              </div>
            )}
            <div className="aboutus-page__content">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InfoPageLayout;
