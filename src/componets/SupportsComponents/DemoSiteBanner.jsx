import React, { useState } from 'react';
import { getCookie, setCookie } from 'react-use-cookie';
import '../../styles/SupportsComponents/DemoSiteBanner.scss';

const DEMO_NOTICE_KEY = 'demo_site_notice';

function DemoSiteBanner() {
  const [isVisible, setIsVisible] = useState(() => !getCookie(DEMO_NOTICE_KEY));

  const handleAccept = () => {
    setCookie(DEMO_NOTICE_KEY, 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="demo-site-banner" role="dialog" aria-modal="true" aria-labelledby="demo-site-banner-title">
      <button
        type="button"
        className="demo-site-banner__backdrop"
        aria-label="Закрыть уведомление"
        onClick={handleAccept}
      />
      <div className="demo-site-banner__dialog">
        <div className="demo-site-banner__badge">Demo</div>
        <h2 id="demo-site-banner-title" className="demo-site-banner__title _title-standart">
          Демонстрационный сайт
        </h2>
        <p className="demo-site-banner__text">
          Это демо-версия сайта медицинской клиники для тендерной презентации. Вся информация на
          страницах — пример отображения контента: тексты, реквизиты, врачи, услуги, цены и
          контакты не относятся к реальной клинике.
        </p>
        <div className="demo-site-banner__actions">
          <button type="button" className="btn _filled-btn _green" onClick={handleAccept}>
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoSiteBanner;
