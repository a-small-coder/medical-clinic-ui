# 13 — Backend API (врачи, запись, филиалы)

**Приоритет:** P1  
**Оценка:** 5–10 дней  
**Зависимости:** нет (параллельно с frontend)  
**Репозиторий:** `../medical-clinic-prod-back`

## Описание

Расширить backend новыми endpoints для разделов сайта клиники. **Существующие API каталога, корзины и заказов не менять** — только добавлять новые.

## Ограничение

Не ломать контракты:

```
GET  /api/catalog/...
GET  /api/cart/current_customer_cart/
PUT  /api/cart/.../add_to_cart/:id/
DELETE /api/cart/.../product_remove_from_cart/:id/
POST /api/orders/create/
GET  /api/orders/current_user_orders/
POST /api/auth/...
GET  /api/navigation/
GET  /api/best-products/
... (все текущие main page endpoints)
```

## Новые endpoints (предложение)

### Врачи

```
GET  /api/doctors/                    — список (filter: specialization)
GET  /api/doctors/:id/                — карточка врача
```

### Услуги клиники

```
GET  /api/clinic-services/            — список по направлениям
GET  /api/clinic-services/:slug/      — карточка услуги
```

> Имена с prefix `clinic-services` — чтобы не путать с catalog/products (анализы).

### Запись на приём

```
GET  /api/appointments/slots/         — ?doctor_id=&branch_id=&date=
POST /api/appointments/               — создать запись
GET  /api/appointments/my/            — записи текущего пользователя
GET  /api/appointments/:id/           — детали записи
```

### Филиалы

```
GET  /api/branches/                   — список филиалов
GET  /api/branches/:id/               — детали
```

### Акции

```
GET  /api/stocks/                     — список акций (для главной и /stocks)
```

### Статические страницы (CMS, опционально)

```
GET  /api/pages/:slug/                — about-us, for-clients, license, personal-data-policy
```

Если CMS не в scope Sprint 1 — frontend использует статический контент (задачи 02, 03).

## Модели данных (минимум)

**Doctor:** id, first_name, last_name, patronymic, photo, specialization, experience_years, education, services[]

**ClinicService:** id, slug, title, description, price_from, duration_min, preparation, direction

**Appointment:** id, doctor, service, branch, datetime, patient, status

**Branch:** id, name, address, phone, schedule, lat, lng, is_sample_collection_point

**Stock:** id, title, description, valid_until, link_type, link_target

## Demo seed data

Management command или fixtures:

- 5–10 врачей
- 15–20 услуг клиники
- 2–3 филиала (один — пункт сдачи анализов)
- 3–5 акций
- Слоты записи на 2 недели вперёд

## Критерии приёмки

- [ ] Все новые endpoints документированы (OpenAPI / README backend)
- [ ] Существующие catalog/cart/orders endpoints работают без изменений
- [ ] Demo seed data загружается при deploy
- [ ] Frontend задачи 05, 06, 07, 09 могут интегрироваться

## Связь с frontend

- `src/support_functions/api_requests.js` — добавить функции, **не менять** существующие cart/order методы
- `.env.example` — без изменений (тот же `REACT_APP_API_URL`)
