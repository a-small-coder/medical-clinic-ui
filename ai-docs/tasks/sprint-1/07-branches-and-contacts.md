# 07 — Филиалы, контакты, карта

**Приоритет:** P1  
**Оценка:** 1–2 дня  
**Зависимости:** [01-fix-navigation-and-routes](./01-fix-navigation-and-routes.md), [04-demo-content-and-branding](./04-demo-content-and-branding.md)

## Описание

Страница контактов и филиалов клиники с картой, режимом работы и телефонами. Ссылка `/location` сейчас ведёт на InWork.

## Ограничение

- Адрес офиса в корзине (`VisitPlace.jsx`, in-office mode) должен **совпадать** с одним из филиалов на `/location`
- Данные филиалов — из `clinicDemo.js` (статика) или API (задача 13); не хардкодить разные адреса в разных местах

## Содержание страницы `/location`

- Список филиалов: адрес, телефон, email, режим работы
- Карта (Яндекс.Карты или Google Maps embed / API)
- Общий телефон call-центра
- CTA: «Записаться на приём», «Заказать анализы» (ссылка на `/catalog/all-analyzes`)

## Единый источник данных

```javascript
// src/config/clinicDemo.js
export const BRANCHES = [
  {
    id: 1,
    name: 'Главный филиал',
    address: '...',
    phone: '...',
    schedule: 'Пн–Пт 8:00–20:00',
    mapCoords: [55.75, 37.62],
    isSampleCollectionPoint: true,  // пункт сдачи анализов (in-office)
  },
];
```

`VisitPlace.jsx` берёт адрес из `BRANCHES.find(b => b.isSampleCollectionPoint)`.

## Критерии приёмки

- [ ] `/location` открывается из футера
- [ ] Адрес in-office в корзине совпадает с филиалом на карте
- [ ] На странице есть ссылка на каталог анализов
- [ ] Контакты в футере совпадают с данными на `/location`

## Файлы

- Новый: `src/componets/Clinic/Location/LocationPage.jsx`
- `src/config/clinicDemo.js`
- `src/componets/Cart/CartSideBar/VisitPlace.jsx`
- `src/componets/Footer/MainBlock/FooterMain.jsx`
- `src/App.js`
