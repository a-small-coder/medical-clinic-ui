import React from 'react';
import { DEMO_CLINIC_OPERATOR } from '../../../config/legalPageContent';

function FooterPersonalDataOperator() {
  return (
    <div className="footer__operator" style={{ marginTop: '24px' }}>
      <div className="footer__text _footer-title" style={{ marginBottom: '0.75em' }}>
        Оператор персональных данных
      </div>
      <div className="footer__text">{DEMO_CLINIC_OPERATOR.name}</div>
      <div className="footer__text">ИНН: {DEMO_CLINIC_OPERATOR.inn}</div>
      <div className="footer__text">{DEMO_CLINIC_OPERATOR.address}</div>
      <a href={`mailto:${DEMO_CLINIC_OPERATOR.dpoEmail}`} className="contacts-footer__item">
        {DEMO_CLINIC_OPERATOR.dpoEmail}
      </a>
    </div>
  );
}

export default FooterPersonalDataOperator;
