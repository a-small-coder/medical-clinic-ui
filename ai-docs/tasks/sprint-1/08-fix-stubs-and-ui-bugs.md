# 08 — Заглушки, поиск, баги UI

**Приоритет:** P1  
**Оценка:** 2–3 дня  
**Зависимости:** нет (можно параллельно с фазой A)

## Описание

Закрыть функциональные дыры и баги, которые портят впечатление на демо. Часть пунктов — только для **каталога анализов**; их доработка должна улучшать модуль диагностики, не ломая его.

## Ограничение

При доработке поиска/фильтров каталога — тестировать только против существующих catalog API endpoints. Не менять контракт cart/orders API.

## Задачи

### Поиск и фильтры (каталог анализов)

| Компонент | Проблема | Решение |
|-----------|----------|---------|
| `CatalogSearchForm.jsx` | `console.log` на submit | Подключить query param или API search; **или** скрыть UI до реализации |
| `FilterGroupsContainer.jsx` | Gender filter без handlers | Подключить к API / убрать нерабочие фильтры |
| `catalog-reducer.js` | Фильтры только в Redux | Передавать параметры в `getApiResponse` для catalog |

### Подписка и feedback

| Компонент | Проблема | Решение |
|-----------|----------|---------|
| `FooterSubscribe.jsx` | Форма без handler | Mock submit + toast «Спасибо» или API endpoint |
| Profile forms | Успех/ошибка только в console | Toast/alert для пользователя |
| `AuthPageContainer` | `isLoading` never true | Показать loading при login |

### Баги

| Компонент | Проблема | Решение |
|-----------|----------|---------|
| `UserOrders.jsx` | `if (props.orders)` truthy для `[]` | `orders.length === 0` → empty state |
| `LoadingSheme.jsx` | `"Loading..."` | `"Загрузка..."` |
| `Catalog.jsx` | `"Catalog"` | `"Каталог"` |
| `MainPageContainer.jsx` | `Badresponse` не показывает UI | Error state / retry |
| `App.js` | `console.log('state', ...)` | Удалить |

### Решение по нерабочему UI

Если API search/filters не готов на backend — **скрыть** элементы UI rather than показывать нерабочие. Это лучше для тендера, чем кнопка без действия.

## Критерии приёмки

- [ ] Нет нерабочих кнопок/форм на публичных страницах (либо работают, либо скрыты)
- [ ] Empty state заказов в ЛК отображается корректно
- [ ] Нет английских строк в русском UI (Loading, Catalog)
- [ ] Поиск/фильтры каталога анализов работают или скрыты
- [ ] Flow анализов проходит регрессию (задача 10)

## Файлы

- `src/componets/Forms/CatalogPage/CatalogSearchForm.jsx`
- `src/componets/Catalog/Filter/FilterGroupsContainer.jsx`
- `src/redux/catalog-reducer.js`
- `src/componets/Footer/Menu/FooterSubscribe.jsx`
- `src/componets/UserProfilePage/Content/UserOrders.jsx`
- `src/componets/SupportsComponents/LoadingSheme.jsx`
- `src/componets/Catalog/Catalog.jsx`
- `src/componets/MainPage/MainPageContainer.jsx`
- `src/App.js`
