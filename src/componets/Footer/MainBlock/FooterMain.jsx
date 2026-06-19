import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

const FooterMain = () => {
    return (
        <div className="footer__main">
            <Link to={ROUTES.home} className="footer__logo _footer-title">Med.</Link>
            <div className="footer__text">
                Платформа для онлайн-заказов и личного кабинета клиента.
                Удобный каталог, корзина и оформление заявок в одном месте.
            </div>
            <div className="footer__contacts contacts-footer">
                <Link to={ROUTES.location} className="contacts-footer__item _icon-location">г. Москва, ул. Примерная, д. 1</Link>
                <Link to="/tel:+74950000000" className="contacts-footer__item _icon-phone">+7 (495) 000-00-00</Link>
                <Link to={ROUTES.home} target="_blank" className="contacts-footer__item">demo.example.com</Link>
            </div>
        </div>
    );
}

export default FooterMain;
