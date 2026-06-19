# 01 — Исправление навигации и маршрутов

**Приоритет:** P0  
**Оценка:** 0.5–1 день  
**Зависимости:** нет

## Описание

Исправить рассинхрон между ссылками в меню/футере и реальными маршрутами в `App.js`. Сейчас большинство URL ведёт на заглушку `InWork.jsx`, что недопустимо для тендерного демо.

## Ограничение

Не менять существующие маршруты анализов и покупок:

- `/catalog`, `/catalog/:category`, `/catalog/:category/:id`
- `/cart`, `/cart/order-conformation`
- `/user/profile/*`
- `/auth/*`

## Текущие проблемы

| Ссылка в UI | Файл | Проблема |
|-------------|------|----------|
| `/about-us` | `footer-reducer.js` | Маршрут в App: `/aboutus/` |
| `/service`, `/service/vac` | `footer-reducer.js` | Нет Route → InWork |
| `/stocks` | `footer-reducer.js` | Нет Route → InWork |
| `/forclients`, `/forpartners` | `footer-reducer.js` | Нет Route → InWork |
| `/license` | `footer-reducer.js` | Нет Route → InWork |
| `/location` | `FooterMain.jsx` | Нет Route → InWork |
| `/personal-conversations` | `RegistrationForm.jsx`, `OrderConformationForm.jsx` | Нет Route → InWork |

## Задачи

1. Выбрать единый стиль URL (рекомендация: kebab-case без trailing slash, напр. `/about-us`)
2. Добавить Route в `App.js` для всех страниц из меню (компоненты — из задач 02, 03, 07)
3. Обновить ссылки в `footer-reducer.js`, `FooterMain.jsx`, формах — на единые URL
4. Оставить `InWork` только для truly unknown paths (catch-all `Route component={InWork}`)
5. Добавить redirect со старых URL (`/aboutus/` → `/about-us`) если меняется convention

## Новые маршруты (добавить, не заменяя существующие)

```
/about-us
/for-clients
/for-partners
/license
/location
/stocks
/services              — услуги клиники (не путать с /catalog)
/services/:slug        — карточка услуги
/doctors
/doctors/:id
/booking               — запись на приём
/personal-data-policy  — политика ПДн (вместо /personal-conversations)
/terms                 — пользовательское соглашение
/cookie-policy         — опционально
```

## Обновление footer-reducer.js (целевое меню)

```
Разделы
├── Каталог анализов  → /catalog/all-analyzes   (было: «Каталог»)
├── Услуги клиники    → /services               (было: /service)
├── Пакеты            → /services?type=packages (было: /service/vac — уточнить с заказчиком)
├── Акции             → /stocks

О компании
├── О нас             → /about-us               (было: /about-us → 404)
├── Для клиентов      → /for-clients            (было: /forclients)
├── Партнёрам         → /for-partners           (было: /forpartners)
├── Документы         → /license
```

## Критерии приёмки

- [ ] Клик по каждому пункту футера открывает целевую страницу (не InWork)
- [ ] Ссылка «обработку персональных данных» в форме регистрации ведёт на страницу политики
- [ ] Существующие URL каталога и корзины работают как раньше
- [ ] Нет дублирующих/conflicting Route в Switch

## Файлы

- `src/App.js`
- `src/redux/footer-reducer.js`
- `src/componets/Footer/MainBlock/FooterMain.jsx`
- `src/componets/Forms/AuthPage/RegistrationForm.jsx`
- `src/componets/Forms/CartPage/OrderConformationForm.jsx`
