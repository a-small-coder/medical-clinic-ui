# 05 — Разделы: врачи и услуги клиники

**Приоритет:** P1  
**Оценка:** 3–5 дней  
**Зависимости:** [01-fix-navigation-and-routes](./01-fix-navigation-and-routes.md), [13-backend-api-extensions](./13-backend-api-extensions.md)

## Описание

Добавить разделы корпоративного сайта клиники: список врачей и каталог медицинских услуг (не лабораторных анализов).

## Ограничение

- **`/catalog/*` не менять** — это отдельный модуль заказа анализов
- Не переиспользовать `ProductsContainer` / `ProductPageContainer` для услуг клиники без явного разделения — иначе риск сломать flow покупки анализов
- Услуги клиники **не добавляются в корзину анализов**

## Маршруты

```
/doctors              — список врачей (фильтр по специализации)
/doctors/:id          — карточка врача
/services             — список услуг клиники по направлениям
/services/:slug       — карточка услуги (описание, цена, подготовка, CTA «Записаться»)
```

## Карточка врача

- ФИО, фото, специализация, стаж, образование
- Список услуг / направлений
- CTA: «Записаться на приём» → `/booking?doctor=:id`

## Карточка услуги

- Название, описание, цена (от), длительность
- Подготовка к процедуре
- CTA: «Записаться» → `/booking?service=:slug`
- Ссылка «Заказать анализы» → `/catalog/all-analyzes` (сохранение связи с модулем диагностики)

## Структура компонентов (предложение)

```
src/componets/Clinic/
  Doctors/
    DoctorsListPage.jsx
    DoctorCardPage.jsx
  Services/
    ServicesListPage.jsx
    ServiceCardPage.jsx
  shared/
    ClinicPageLayout.jsx
```

## Redux (опционально)

Отдельные reducer-слайсы `doctors-reducer.js`, `clinicServices-reducer.js` — не смешивать с `catalog-reducer.js`.

## Критерии приёмки

- [ ] `/doctors` и `/services` работают независимо от `/catalog`
- [ ] Карточка услуги содержит CTA на запись, не на корзину
- [ ] Модуль анализов (`/catalog`, корзина) работает без регрессий (задача 10)
- [ ] Demo-данные: минимум 5 врачей, 10+ услуг

## Файлы

- Новые: `src/componets/Clinic/`
- `src/App.js` — Route
- `src/support_functions/api_requests.js` — новые методы (doctors, services)
- `src/redux/store.js` — подключение новых reducer при необходимости
