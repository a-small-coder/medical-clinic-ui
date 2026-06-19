# 11 — Безопасность и cleanup debug

**Приоритет:** P2  
**Оценка:** 1 день  
**Зависимости:** нет

## Описание

Убрать debug-утечки и подготовить описание безопасности для тендерной документации. Не менять auth flow анализов/заказов — только cleanup и документирование.

## Ограничение

- Не менять механизм хранения токена (localStorage) в рамках Sprint 1 без согласования — только документировать риски и меры
- Logout API — опционально, если backend поддерживает

## Cleanup (код)

| Проблема | Файл | Действие |
|----------|------|----------|
| `window.state = store.getState()` | `src/redux/store.js` | Удалить или обернуть `if (process.env.NODE_ENV === 'development')` |
| `console.log('state', props.state)` | `src/App.js` | Удалить |
| `console.log` токенов/Form data | `api_requests.js`, forms | Удалить |
| Неиспользуемый `StoreContext.js` | `src/StoreContext.js` | Удалить или задокументировать |

## Документация (для тендера)

Создать `ai-docs/security/personal-data-and-security.md`:

- Обработка ПДн (152-ФЗ): какие данные собираются (профиль, заказ анализов, запись)
- Хранение токена: localStorage, меры (CSP, XSS prevention)
- HTTPS: termination на reverse proxy
- Cookies: назначение (`cart_id`, `make_order`, `place_type`) — только flow анализов
- Logout: текущее поведение + roadmap server-side invalidation
- Резервное копирование — на стороне backend (ссылка на backend docs)

## Критерии приёмки

- [ ] В production build нет `window.state` и debug console.log
- [ ] Документ по безопасности создан
- [ ] Flow анализов работает после cleanup (задача 10)

## Файлы

- `src/redux/store.js`
- `src/App.js`
- `src/support_functions/api_requests.js`
- Новый: `ai-docs/security/personal-data-and-security.md`
