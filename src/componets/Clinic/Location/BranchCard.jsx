import React from 'react';

function BranchCard({ branch }) {
  const phoneHref = branch.phone.replace(/[^\d+]/g, '');
  const cardClass = branch.isSampleCollectionPoint
    ? 'location-branch location-branch_sample'
    : 'location-branch';

  return (
    <article className={cardClass}>
      {branch.isSampleCollectionPoint && (
        <span className="location-branch__badge">Пункт сдачи анализов</span>
      )}
      <h4 className="location-branch__title _title-standart">{branch.name}</h4>
      <ul className="location-branch__list">
        <li className="location-branch__item">
          <span className="location-branch__label">Адрес</span>
          <span>{branch.address}</span>
        </li>
        <li className="location-branch__item">
          <span className="location-branch__label">Телефон</span>
          <a href={`tel:${phoneHref}`}>{branch.phone}</a>
        </li>
        <li className="location-branch__item">
          <span className="location-branch__label">Email</span>
          <a href={`mailto:${branch.email}`}>{branch.email}</a>
        </li>
        <li className="location-branch__item">
          <span className="location-branch__label">Режим</span>
          <span>{branch.schedule}</span>
        </li>
        {branch.isSampleCollectionPoint && branch.officeLabel && (
          <li className="location-branch__item location-branch__item_highlight">
            <span className="location-branch__label">Кабинет</span>
            <span>{branch.officeLabel}</span>
          </li>
        )}
      </ul>
    </article>
  );
}

export default BranchCard;
