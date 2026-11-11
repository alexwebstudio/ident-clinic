import { site } from "./site";

// Отзывы — только реальные. Выдумывать нельзя.
//
// videoReviews: видеоотзывы из Instagram. ПЛЕЙСХОЛДЕРЫ: владелец пришлёт ссылки на reels.
//   Обложки сейчас — нейтральные снимки без людей, чтобы не выдавать сток за пациентов.
//   Заполните href (ссылка на reels/пост) и cover (кадр-обложка в /public/images/reviews/), поставьте placeholder: false.
// textReviews: реальные тексты из 2ГИС (выгрузка 10.11.2026). Имена авторов в выгрузке не сохранились,
//   поэтому подписываем «Пациент, 2ГИС» и дату. Ссылку на конкретный отзыв можно заменить, когда владелец пришлёт.

export type VideoReview = {
  title: string;
  caption: string;
  href: string;
  cover: string;
  placeholder: boolean;
};

export type TextReview = {
  text: string;
  author: string;
  date: string;
  rating: number;
  source: "2ГИС" | "Instagram";
  href: string;
};

export const videoReviews: VideoReview[] = [
  { title: "Имплантация", caption: "Видеоотзыв пациента", href: site.instagramReviews, cover: "/images/hero/implant-model.jpg", placeholder: true },
  { title: "Брекеты", caption: "Видеоотзыв пациента", href: site.instagramReviews, cover: "/images/services/orthodontics.jpg", placeholder: true },
  { title: "Детский приём", caption: "Видеоотзыв родителей", href: site.instagramReviews, cover: "/images/hero/waiting-room.jpg", placeholder: true },
  { title: "Лечение зубов", caption: "Видеоотзыв пациента", href: site.instagramReviews, cover: "/images/hero/chair.jpg", placeholder: true },
];

export const textReviews: TextReview[] = [
  {
    text: "Хочу поблагодарить Лауру Альбековну за её работу! Очень хороший и внимательный врач. Всегда всё объясняет, отвечает на вопросы и внимательно относится к лечению.",
    author: "Пациентка",
    date: "август 2026",
    rating: 5,
    source: "2ГИС",
    href: site.twoGis,
  },
  {
    text: "Отличная стоматология, вежливые администраторы. Проходим с дочкой ортодонтическое лечение у Айнур Алтынбаевны, очень грамотный, компетентный специалист. Вижу отличный результат.",
    author: "Мама пациентки",
    date: "июль 2026",
    rating: 5,
    source: "2ГИС",
    href: site.twoGis,
  },
  {
    text: "Были на лечении у доктора Карины Нурлибековны с ребёнком. Спасибо большое за добрый подход, за профессионализм, за терпение и чуткость.",
    author: "Мама пациента",
    date: "сентябрь 2026",
    rating: 5,
    source: "2ГИС",
    href: site.twoGis,
  },
];
