import React, { useState } from 'react';

const FooterSubscribe = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.includes('@')) {
            setError('Введите корректный email');
            return;
        }
        setError('');
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="footer__subscribe subscribe">
                <div className="subscribe__title _footer-title">Подписаться на новости</div>
                <div className="subscribe__text">Спасибо! Вы подписаны на новости.</div>
            </div>
        );
    }

    return (
        <div className="footer__subscribe subscribe">
            <div className="subscribe__title _footer-title">Подписаться на новости</div>
            <form className="subscribe__form" onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Ваш email"
                    className="subscribe__input _req _email"
                />
                <button type="submit" className="subscribe__button _icon-send" aria-label="Подписаться"></button>
            </form>
            {error && <div className="subscribe__text">{error}</div>}
        </div>
    );
}

export default FooterSubscribe;
