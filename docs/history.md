# История работ

> Журнал значимых изменений проекта. Новые записи — сверху.

## 2026-06-28 — Полная пересборка фронтенда по эталону

**Задача:** снести все страницы и CSS, реализовать сайт с нуля строго по эталону
дизайна. Мультиязычность — все 3 языка сразу (ru/en/kk).

### Разбор эталона
- Эталон `docs/design/Вариант 1 - Изумруд (автономный).html` — «bundled» HTML
  (минифицированный, 143k токенов). Внутри — server-rendered разметка, упакованная
  в JSON-строку.
- Декодировал JSON-строку → получил полную разметку с инлайн-стилями и данными
  (а не «на глаз»). Скриншоты `docs/design/screenshots/` подтвердили совпадение.
- Извлечённая дизайн-система: шрифт **Manrope**, изумруд `oklch(0.47 0.085 158)`,
  светлые поверхности `oklch(0.99 …)`, тёмный футер `oklch(0.18 …)`, радиусы 2px
  (кнопки) / 8–10px (карточки), секции с отступами 56×60px.

### Удалено
- `src/sections/*` (Hero, About, Services, Legislation, Partners, Contact).
- `src/pages/PlaceholderPage.tsx`.
- `src/components/ui/Container.tsx`, `Card.tsx`; `src/hooks/useInView.ts`.
- Старый `src/styles/index.css` (amber/gold-токены из шаблона).
- Неиспользуемые ассеты: `hero.png`, `react.svg`, `vite.svg`.
- `scrollToSection` из `src/lib/utils.ts`; `ServiceItem` из `src/types`.

### Создано с нуля
- **Дизайн-токены** — `src/styles/index.css` (Tailwind 4 `@theme`, oklch-палитра,
  Manrope), `index.html` подключает шрифт Manrope с Google Fonts.
- **Каркас** — `MainLayout` (frame-card 1280px на тёмном фоне + акцент-полоса 3px),
  `Header` (утилити-полоса + лого/меню/CTA + мобильное меню), `Footer` (тёмный,
  4 колонки: о компании, разделы, контакты, реквизиты).
- **UI-примитивы** — `Button` (primary/outline/white), `Section`, `Eyebrow`,
  `SectionHeading`, `PageHero`, `CtaBand`, `Input`, `Textarea`, `LanguageSwitcher`.
- **Структурные данные** — `src/constants/content.ts` (статистика, бейджи,
  партнёры по странам, законы, внешние ссылки).
- **6 страниц** в `src/pages/`:
  - `HomePage` — пиксель-в-пиксель по эталону (hero-карточка с лого и бейджами,
    полоса статистики, нумерованные «Почему выбирают нас» и «Услуги компании»,
    «География» по 4 странам, CTA-полоса).
  - `AboutPage`, `ServicesPage`, `LegislationPage`, `PartnersPage`, `ContactsPage`
    — в той же стилистике, тексты из `docs/markdown/`.
- **Роутинг** — `src/app/router.tsx`: 6 маршрутов + scroll-to-top при переходе,
  fallback `*` → `/`.

### Контент и i18n
- Реальные реквизиты в `src/constants/site.ts` (тел. +7 701 588 53 03,
  econ2007kz@gmail.com, Астана, Мәңгілік Ел 45-104, БИН/ИИК/БИК, директор).
- Полные переводы `ru/en/kk` для всех 6 страниц (включая юридические формулировки).
- Тексты — строго из `docs/markdown/*`.

### Проверки
- `npm run build` (tsc + vite) — чисто, 0 ошибок.
- `npm run lint` (oxlint) — чисто; в `.oxlintrc.json` исключены `docs/**`, `dist/**`.
- Скриптовая сверка: все ключи `t()` существуют в локалях; паритет ключей
  ru/en/kk — 100% (включая длины массивов).
- Dev-сервер стартует (HTTP 200).
- ⚠️ Визуальная сверка в браузере не выполнена — расширение Claude-in-Chrome не
  было подключено. Запуск для просмотра: `npm run dev`.
