import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import {
  CLINIC_ADDRESS,
  CLINIC_FOOTER_TAGLINE,
  CLINIC_LOGO,
  CLINIC_PHONE,
  CLINIC_PHONE_HREF,
  CLINIC_SITE,
  CLINIC_SITE_URL,
} from '../../../config/clinicDemo';
import FooterPersonalDataOperator from './FooterPersonalDataOperator';

const FooterMain = () => {
    return (
        <div className="footer__main">
            <Link to={ROUTES.home} className="footer__logo _footer-title">{CLINIC_LOGO}</Link>
            <div className="footer__text">
                {CLINIC_FOOTER_TAGLINE}
            </div>
            <div className="footer__contacts contacts-footer">
                <Link to={ROUTES.location} className="contacts-footer__item _icon-location">{CLINIC_ADDRESS}</Link>
                <Link to={`tel:${CLINIC_PHONE_HREF}`} className="contacts-footer__item _icon-phone">{CLINIC_PHONE}</Link>
                <a href={CLINIC_SITE_URL} target="_blank" rel="noopener noreferrer" className="contacts-footer__item">{CLINIC_SITE}</a>
            </div>
            <FooterPersonalDataOperator />
        </div>
    );
}

export default FooterMain;
