# 12 — README, CI, базовые тесты

**Приоритет:** P2  
**Оценка:** 1–2 дня  
**Зависимости:** [10-preserve-analyses-regression](./10-preserve-analyses-regression.md)

## Описание

Заменить CRA boilerplate README на проектную документацию, добавить CI pipeline и минимальные тесты на критичный flow анализов.

## README

Заменить [`README.md`](README.md) содержимым:

- Описание проекта: сайт клиники + модуль заказа анализов
- Стек: React 17, Redux, Docker, nginx
- Быстрый старт: `npm start` + `.env`
- Docker: `docker compose up -d --build` (ссылка на `docker-compose.yml`)
- Структура репозитория (frontend + backend в соседней папке)
- Переменные окружения: `.env.example`, `.env.compose.example`
- Sprint-задачи: ссылка на `ai-docs/tasks/sprint-1/`

## CI

`.github/workflows/ci.yml`:

```yaml
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup-node
      - npm ci
      - npm run build
```

Опционально: lint step если настроен.

## Тесты

Приоритет — **flow анализов** (задача 10):

1. Unit: reducers (`catalog-reducer`, `order-reducer`) — pure functions
2. Integration: `api_requests.js` — mock axios
3. E2E (опционально): Playwright smoke — главная → каталог → cart

Использовать уже установленные `@testing-library/react`, `@testing-library/jest-dom`.

## Критерии приёмки

- [ ] README описывает реальный проект, не CRA default
- [ ] `npm run build` проходит в CI
- [ ] Минимум 1 тест на reducers или api_requests
- [ ] Инструкция Docker работает по README

## Файлы

- `README.md`
- `.github/workflows/ci.yml`
- `src/**/*.test.js` (новые)
- `src/setupTests.js` (создать при необходимости)
