import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCookie, setCookie } from 'react-use-cookie';
import { ROUTES } from '../../config/routes';
import '../../styles/SupportsComponents/CookieBanner.scss';

const COOKIE_CONSENT_KEY = 'cookie_consent';

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => !getCookie(COOKIE_CONSENT_KEY));

  const handleAccept = () => {
    setCookie(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Уведомление об использовании cookies">
      <div className="cookie-banner__container _container">
        <div className="cookie-banner__text">
          Мы используем cookies для корректной работы сайта, авторизации и оформления заказов.{' '}
          <Link to={ROUTES.cookiePolicy} className="cookie-banner__link">
            Подробнее
          </Link>
        </div>
        <div className="cookie-banner__actions">
          <button type="button" className="btn _filled-btn _green" onClick={handleAccept}>
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
