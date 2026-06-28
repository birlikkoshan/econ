# Евразийский консалтинговый консорциум (ECON)

Корпоративный сайт ТОО «Евразийский консалтинговый консорциум» — уполномоченного
изготовителем лица в Республике Казахстан и государствах ЕАЭС.

Сайт демонстрирует юридическую надёжность и экспертизу компании в области
технического регулирования, оценки соответствия ТР ЕАЭС, декларирования,
технической документации и маркировки EAC. Аудитория — B2B, в том числе
иностранные производители.

## Технический стек

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS 4** (`@tailwindcss/vite`, токены в `src/styles/index.css`)
- **react-router-dom 7** — маршрутизация
- **react-i18next** — локализация: `ru` (по умолчанию), `en`, `kk`
- **oxlint** — линтер
- Шрифт **Manrope**, изумрудная палитра (oklch)

## Команды

```bash
npm install        # установка зависимостей
npm run dev        # дев-сервер (Vite, http://localhost:5173)
npm run build      # сборка (tsc -b && vite build) → dist/
npm run preview    # предпросмотр прод-сборки
npm run lint       # oxlint
```

## Структура

```
docs/
  instruction.md          Главный ориентир по проекту (статус страниц, правила)
  history.md              Журнал значимых изменений
  markdown/               Источники контента (тексты берутся отсюда)
  design/                 Эталон дизайна + скриншоты
src/
  app/                    App.tsx, router.tsx, провайдеры
  pages/                  Страницы: Home, About, Services, Legislation, Partners, Contacts
  components/
    layout/               MainLayout (frame-card), Header, Footer
    ui/                   Button, Section, Eyebrow, SectionHeading, PageHero, CtaBand, Input, Textarea, LanguageSwitcher
  features/contact/       Форма обратной связи
  constants/              navigation.ts, site.ts (реквизиты), content.ts (данные)
  locales/                ru.json, en.json, kk.json
  styles/                 index.css (Tailwind 4 + дизайн-токены эталона)
  i18n/                   Инициализация react-i18next
  lib/                    utils (cn), validation
```

## Страницы

| Маршрут | Страница |
|---------|----------|
| `/` | Главная |
| `/about` | О компании |
| `/services` | Услуги |
| `/legislation` | Законодательство и полезная информация |
| `/partners` | Партнёры |
| `/contacts` | Контакты |

## Дизайн и контент

- **Эталон стиля:** `docs/design/Вариант 1 - Изумруд (автономный).html`. Дизайн-токены
  (изумрудная oklch-палитра, Manrope, отступы, радиусы) вынесены в
  `src/styles/index.css` через Tailwind 4 `@theme`.
- **Тексты:** только из `docs/markdown/*` — не выдумываются. Реквизиты — в
  `src/constants/site.ts`.
- **Локализация:** все страницы переведены на `ru`/`en`/`kk`; паритет ключей между
  локалями обязателен.

## Деплой

Vercel (`vercel.json`). Сборка — `npm run build`, артефакт — `dist/`.

### Форма обратной связи

Отправка писем — через serverless-функцию `api/contact.ts` (Gmail SMTP). В Vercel → **Settings → Environment Variables** добавьте:

| Переменная | Значение |
|------------|----------|
| `SMTP_USER` | `econ2007kz@gmail.com` |
| `SMTP_APP_PASSWORD` | пароль приложения Google (App passwords) |
| `CONTACT_TO` | `econ2007kz@gmail.com` (необязательно) |

Пароль приложения: Google Account → Security → 2-Step Verification → App passwords.

Локально форму можно проверить через `npx vercel dev` (с теми же переменными в `.env`).
