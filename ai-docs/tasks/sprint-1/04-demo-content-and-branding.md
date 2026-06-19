# 04 — Demo-контент и брендинг

**Приоритет:** P1  
**Оценка:** 0.5–1 день  
**Зависимости:** [02-static-info-pages](./02-static-info-pages.md)

## Описание

Заменить placeholder-данные на согласованный demo-бренд медицинской клиники для тендерной презентации.

## Ограничение

Не менять структуру данных API для анализов/корзины/заказов. Меняется только статический UI-текст и контакты.

## Что заменить

| Место | Сейчас | Нужно |
|-------|--------|-------|
| `FooterMain.jsx` | «ул. Примерная, д. 1», `demo.example.com` | Реалистичный адрес, телефон, домен demo-клиники |
| `FooterMain.jsx` | «Med.» | Название demo-клиники (напр. «Клиника Здоровье+») |
| `Header` logo | «Med.» | То же название |
| `public/index.html` | title «Med.» | Title + meta description + OG-теги |
| `VisitPlace.jsx`, `CartInfoFormControl.jsx` | «Палата №6 (ул. Лечебная)» | Адрес demo-филиала (согласованный с `/location`) |
| `ContentBlock.jsx` | placeholder-текст | Реальный контент (задача 02) |

## Единый конфиг (рекомендация)

Вынести demo-данные клиники в один файл:

```
src/config/clinicDemo.js
  CLINIC_NAME
  CLINIC_PHONE
  CLINIC_ADDRESS
  CLINIC_EMAIL
  CLINIC_SITE
  OFFICE_LOCATIONS[]
```

Импортировать в Footer, Header, VisitPlace, Legal pages.

## Критерии приёмки

- [ ] Нет строк «Примерная», «demo.example.com», «будет добавлен позже» на публичных страницах
- [ ] Контакты в футере совпадают со страницей `/location`
- [ ] Адрес офиса в корзине (in-office) совпадает с demo-филиалом
- [ ] Каталог анализов и цены отображаются как раньше (данные с backend)

## Файлы

- `src/componets/Footer/MainBlock/FooterMain.jsx`
- `src/componets/Header/` (logo)
- `src/componets/Cart/CartSideBar/VisitPlace.jsx`
- `src/componets/Cart/CartSideBar/CartInfoFormControl.jsx`
- `public/index.html`
- Новый: `src/config/clinicDemo.js`
