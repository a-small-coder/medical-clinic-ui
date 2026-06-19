# 06 — Онлайн-запись на приём

**Приоритет:** P1  
**Оценка:** 3–5 дней  
**Зависимости:** [05-clinic-sections-doctors-services](./05-clinic-sections-doctors-services.md), [13-backend-api-extensions](./13-backend-api-extensions.md)

## Описание

Реализовать flow записи пациента на приём к врачу. Это **новый** пользовательский сценарий, отдельный от заказа анализов через корзину.

## Ограничение

- **Не заменять** `/cart` и `/cart/order-conformation`
- **Не использовать** `order-reducer` / `createOrder` для записи — отдельный API и UI-state
- Cookies `make_order`, `cart_id`, `place_type` — только для flow анализов, не смешивать с booking
- Личный кабинет: добавить раздел «Мои записи» **рядом** с «Мои заказы анализов», не заменяя его

## Flow записи

```
1. Вход: /booking или CTA с карточки врача/услуги
2. Выбор: врач + услуга (или предзаполнено из query params)
3. Выбор: филиал (если несколько)
4. Выбор: дата и слот времени (календарь — react-datepicker уже в dependencies)
5. Подтверждение: ФИО, телефон, согласие ПДн
6. Успех: номер записи, ссылка в ЛК
```

## Авторизация

- Анонимная запись — опционально (решить на этапе backend)
- Если требуется auth — redirect на `/auth/login` с return URL, аналогично flow заказа анализов, но **отдельные cookies** (`booking_pending`, не `make_order`)

## Личный кабинет

Добавить в `UserProfile.jsx`:

```
/user/profile/appointments       — список записей
/user/profile/appointment-:id    — детали записи
```

Существующие маршруты заказов анализов **не удалять**:

```
/user/profile/orders
/user/profile/order-:id
```

## Критерии приёмки

- [ ] Запись на приём работает end-to-end с demo-backend
- [ ] Корзина и оформление заказа анализов не затронуты
- [ ] В ЛК видны и записи, и заказы анализов
- [ ] Согласие ПДн при записи ссылается на `/personal-data-policy`
- [ ] Чеклист регрессии (задача 10) пройден

## Файлы

- Новые: `src/componets/Booking/`
- `src/componets/UserProfilePage/UserProfile.jsx` — новые sub-routes
- `src/support_functions/api_requests.js` — appointments API
- `src/App.js`
