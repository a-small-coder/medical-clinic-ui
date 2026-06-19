# 10 — Регрессия: модуль анализов и покупок

**Приоритет:** P0  
**Оценка:** 0.5 дня (выполнять после каждой UI-задачи)  
**Зависимости:** все UI-задачи спринта

## Описание

Обязательный чеклист регрессии модуля заказа лабораторных анализов. Выполняется **после каждой задачи**, которая затрагивает `App.js`, навигацию, Redux store, layout или shared-компоненты.

## Зачем отдельная задача

Sprint 1 добавляет много нового UI. Главный риск — случайно сломать работающий flow покупки анализов при добавлении врачей, записи или смене маршрутов.

## Чеклист (ручной или автоматизируемый)

### Главная

- [ ] Блок «Топ услуг» / best-products загружается
- [ ] Блок «Комплексы анализов» загружается
- [ ] Блок «Уникальные анализы» загружается, «Показать ещё» работает
- [ ] Клик по анализу ведёт на `/catalog/:category/:id`

### Каталог

- [ ] `/catalog/all-analyzes` — список товаров, пагинация
- [ ] `/catalog/:category` — фильтрация по категории работает
- [ ] Карточка товара в списке кликабельна

### Карточка анализа

- [ ] `/catalog/:category/:id` — описание, цена, срок
- [ ] Кнопка «В корзину» добавляет товар
- [ ] Счётчик корзины в хедере обновляется

### Корзина

- [ ] `/cart` — список добавленных анализов
- [ ] Удаление из корзины работает
- [ ] Переключатель «На дому / В клинике» (`OfficeTypeSwitch`) работает
- [ ] Форма данных клиента валидируется (Formik + Yup)
- [ ] Empty cart (`EmptyCart.jsx`) показывается при пустой корзине

### Оформление заказа

- [ ] `/cart/order-conformation` — сводка заказа
- [ ] Чекбокс согласия ПДн обязателен
- [ ] Анонимный пользователь: сообщение о необходимости auth для in-office (если применимо)
- [ ] Создание заказа (`POST /api/orders/create/`) успешно

### Auth + отложенный заказ

- [ ] Анонимный пользователь может добавлять в корзину
- [ ] После login с cookie `make_order=true` — заказ создаётся автоматически (`createOrderAfterAuth` в `App.js`)
- [ ] Cookies `cart_id`, `place_type`, `make_order` работают

### Личный кабинет — заказы анализов

- [ ] `/user/profile/orders` — список заказов
- [ ] Empty state при отсутствии заказов
- [ ] `/user/profile/order-:id` — детали заказа
- [ ] `/user/profile/base_information` — редактирование профиля
- [ ] `/user/profile/change_password` — смена пароля

### API (smoke)

- [ ] `GET /api/cart/current_customer_cart/`
- [ ] `PUT /api/cart/.../add_to_cart/:id/`
- [ ] `DELETE /api/cart/.../product_remove_from_cart/:id/`
- [ ] `POST /api/orders/create/`
- [ ] `GET /api/orders/current_user_orders/`

## Автоматизация (задача 12)

Минимум e2e или integration tests на критичный path:

```
catalog → add to cart → cart → order confirmation → profile orders
```

## Критерии приёмки

- [ ] Все пункты чеклиста пройдены перед закрытием Sprint 1
- [ ] Чеклист пройден после задач 01, 05, 06, 08 как минимум
- [ ] Найденные регрессии — блокер для merge

## Затронутые файлы (не менять без регрессии)

- `src/App.js`
- `src/support_functions/api_requests.js`
- `src/componets/Catalog/`
- `src/componets/ProductPage/`
- `src/componets/Cart/`
- `src/componets/OrderConfirmPage/`
- `src/componets/UserProfilePage/Content/UserOrders.jsx`
- `src/redux/catalog-reducer.js`, `order-reducer.js`, `header-reducer.js`
