import React from 'react';

function InfoPageLayout({ title, children }) {
  return (
    <main className="page">
      <section className="page__base aboutus-page">
        <div className="aboutus-page__container _container">
          <div className="aboutus-page__body">
            <h1 className="aboutus-page__title _title">
              <span>{title}</span>
            </h1>
            <div className="aboutus-page__content">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InfoPageLayout;
