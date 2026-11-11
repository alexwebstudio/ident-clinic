// ЕДИНАЯ ТОЧКА ПРАВКИ ДАННЫХ КЛИНИКИ iDént clinic (Актобе).
// Реальные данные: название, город, телефон, WhatsApp, рейтинг и число отзывов (2ГИС).
// ПЛЕЙСХОЛДЕР — всё, что помечено так: адрес, часы, реквизиты, ссылки Instagram. Уточнит владелец.
// Когда всё заполнено, поставьте isDemo: false — пометки «уточняется» исчезнут со всего сайта.

export const site = {
  isDemo: true,

  brand: "iDént clinic",
  descriptor: "стоматология",
  slogan: "Спокойная стоматология для всей семьи",
  domain: "https://ident-clinic.vercel.app", // ПЛЕЙСХОЛДЕР: заменить на боевой домен
  city: "Актобе",

  phone: "+7 707 773 7070",
  phoneHref: "tel:+77077737070",
  whatsapp: "https://wa.me/77077737070",
  telegram: "",
  instagram: "https://instagram.com/", // ПЛЕЙСХОЛДЕР: профиль клиники в Instagram
  instagramReviews: "https://instagram.com/", // ПЛЕЙСХОЛДЕР: актуальное «Отзывы»
  twoGis: "https://2gis.kz/aktobe/search/iDent%20clinic",
  email: "",

  address: "адрес уточняется", // ПЛЕЙСХОЛДЕР: адрес даст владелец
  addressRegion: "Актюбинская область",
  country: "KZ",
  hours: "часы работы уточняются", // ПЛЕЙСХОЛДЕР
  hoursSchema: [] as string[],
  directions: "Ориентиры и описание входа добавит клиника.", // ПЛЕЙСХОЛДЕР
  mapEmbed: "", // ПЛЕЙСХОЛДЕР: ссылка на iframe 2ГИС
  geo: { lat: 50.2839, lng: 57.167 }, // центр Актобе, ПЛЕЙСХОЛДЕР до точного адреса

  developer: { label: "Разработка сайта", name: "AlexWebStudio", href: "https://alexwebstudio.ru" },

  legal: "Реквизиты клиники уточняются", // ПЛЕЙСХОЛДЕР
  license: "Номер лицензии уточняется", // ПЛЕЙСХОЛДЕР

  // Реальные данные из 2ГИС на 10.11.2026. Остальные цифры не публикуем, пока их не подтвердит клиника.
  stats: {
    rating: 4.9,
    reviews: 95,
  },
} as const;

export const demoNote = "Адрес, часы работы, цены и данные врачей уточняются у клиники.";

export function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU").replace(/ |\s/g, " ")} ₸`;
}

export function formatCount(value: number) {
  return value.toLocaleString("ru-RU").replace(/ |\s/g, " ");
}

/** Склонение: 95 отзывов, 21 отзыв, 3 отзыва. */
export function plural(n: number, one: string, few: string, many: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}
