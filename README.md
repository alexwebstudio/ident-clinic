# iDént clinic — сайт стоматологии (Актобе)

Самостоятельный проект на базе дентал-прототипа ЭМАЛЬ. Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis.
Исходный прототип ЭМАЛЬ этот проект не затрагивает.

```bash
npm install
npm run dev
```

Проверка перед выкладкой:

```bash
npm run typecheck
npm run build
```

## Что изменено относительно прототипа

- Бренд iDént clinic: шапка, футер, title, мета, OG-картинка (`public/og.jpg`), фавикон (`public/icon.svg`).
- Палитра: белый + сланцево-синий из логотипа (`--accent: #34404f`), токены в `src/app/globals.css`.
- Шрифты: заголовки — Playfair Display, текст — Manrope (оба с кириллицей; `next/font` скачивает их при сборке и раздаёт с нашего домена).
- Прелоадер (`src/components/layout/Preloader.tsx`): контурный зуб чертится линией, затем вордмарк и подпись, шторка вверх. При `prefers-reduced-motion` — статичный логотип и быстрый fade.
- Знак зуба — один SVG в `src/components/ui/ToothMark.tsx` (шапка, футер, прелоадер, водяной знак в секциях).
- Услуги: порядок — имплантация, брекеты, терапия, детская, протезирование, хирургия, профгигиена, реставрация (`order` в `src/content/services.ts`).
- Врачи — только реальные (`src/content/doctors.ts`). Без фото — заглушка со знаком клиники.
- Отзывы: крупный рейтинг 4.9 / 95 (2ГИС), видеопревью → Instagram, реальные тексты из 2ГИС → 2ГИС.
- Реальные фото клиники — `public/images/clinic/`, фото врачей — `public/images/doctors/`.

## Что прислать владельцу / заменить

| Что | Где |
|---|---|
| Адрес, часы, реквизиты, лицензия, домен, карта 2ГИС | `src/content/site.ts` |
| Ссылка на Instagram и на актуальное «Отзывы» | `instagram`, `instagramReviews` в `src/content/site.ts` |
| Ссылки на конкретные видеоотзывы (reels) и обложки | `videoReviews` в `src/content/reviews.ts` |
| Реальные вопросы-ответы из актуального Instagram | `src/content/faq.ts` (сейчас заглушка) |
| Фото Лауры Альбековны и Карины Нурлибековны; специализации, стаж, сертификаты всех врачей | `src/content/doctors.ts`, фото в `public/images/doctors/` |
| Прайс | `src/content/prices.ts` (пока `isDemo: true`, цены на карточках услуг скрыты) |
| Перечень оборудования | `techBlock` в `src/content/copy.ts` |
| Политика конфиденциальности | `src/app/privacy/page.tsx`, текст согласует юрист |

Когда всё заполнено — `isDemo: false` в `src/content/site.ts`: пропадут пометки «уточняется» и появятся цены на карточках.

## Заявки

Скопируйте `.env.example` в `.env.local` (на Vercel — в Environment Variables):

- `TELEGRAM_BOT_TOKEN` — токен бота от @BotFather;
- `TELEGRAM_CHAT_ID` — чат, куда приходят заявки.

Без них форма работает и ведёт на `/thanks`, но заявка никуда не уходит.

## Анимации

Секции — серверные компоненты, анимации вешаются на data-атрибуты в `src/hooks/useReveal.ts`. Первый экран и прелоадер анимируются чистым CSS.

| Атрибут | Эффект |
|---|---|
| `data-split` | Blur Reveal по буквам для заголовков |
| `data-reveal` | появление снизу, с `data-blur` ещё и из размытия |
| `data-reveal-group` + `data-reveal-item` | Blur In для карточек, каскадом |
| `data-count` | Number Roll |
| `data-float`, `data-parallax` | парение и параллакс зуба |

Запускайте команды из папки проекта: корень Turbopack задан в `next.config.ts` через `process.cwd()`.
