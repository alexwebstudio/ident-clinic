// Только реальные врачи клиники. Роли — по отзывам пациентов в 2ГИС, стаж и регалии НЕ выдумываем:
// всё, что помечено «уточняется», владелец подтвердит или дополнит.
// image: null — фото ещё нет, на сайте показывается аккуратная заглушка со знаком клиники.

export type Doctor = {
  slug: string;
  name: string;
  headline: string;
  role: string;
  specialization: string;
  experience: string;
  about: string;
  education: string[];
  serviceSlugs: string[];
  image: string | null;
  imageAlt: string;
  /** Пометка, откуда роль: пока владелец не подтвердил. */
  note?: string;
};

const pending = "уточняется";
const education = ["Образование, курсы и сертификаты — уточняются у клиники"];

export const doctors: Doctor[] = [
  {
    slug: "aynura-altynbaevna",
    name: "Айнура Алтынбаевна",
    headline: "Айнура *Алтынбаевна*",
    role: "Врач-ортодонт",
    specialization: "Ортодонтическое лечение",
    experience: pending,
    about: "Ведёт ортодонтическое лечение у детей и взрослых. Пациенты отмечают грамотный подход и заметный результат.",
    education,
    serviceSlugs: ["orthodontics"],
    image: "/images/doctors/aynura.jpg",
    imageAlt: "Айнура Алтынбаевна, врач-ортодонт клиники iDént clinic",
    note: "роль по отзыву пациента",
  },
  {
    slug: "aigerim-nabiulaykyzy",
    name: "Айгерим Набиулайкызы",
    headline: "Айгерим *Набиулайкызы*",
    role: "Врач-стоматолог",
    specialization: pending,
    experience: pending,
    about: "Врач клиники iDént clinic. Специализацию и направления работы добавим после подтверждения клиникой.",
    education,
    serviceSlugs: [],
    image: "/images/doctors/aigerim.jpg",
    imageAlt: "Айгерим Набиулайкызы, врач-стоматолог клиники iDént clinic",
  },
  {
    slug: "laura-albekovna",
    name: "Лаура Альбековна",
    headline: "Лаура *Альбековна*",
    role: "Врач-стоматолог",
    specialization: pending,
    experience: pending,
    about: "Пациенты пишут, что Лаура Альбековна всегда всё объясняет, отвечает на вопросы и внимательно относится к лечению.",
    education,
    serviceSlugs: [],
    image: null,
    imageAlt: "Лаура Альбековна, врач-стоматолог клиники iDént clinic",
  },
  {
    slug: "karina-nurlibekovna",
    name: "Карина Нурлибековна",
    headline: "Карина *Нурлибековна*",
    role: "Детский приём",
    specialization: "Лечение зубов у детей",
    experience: pending,
    about: "Родители благодарят Карину Нурлибековну за добрый подход, терпение и чуткость к маленьким пациентам.",
    education,
    serviceSlugs: ["kids"],
    image: null,
    imageAlt: "Карина Нурлибековна, детский приём в клинике iDént clinic",
    note: "роль по отзывам пациентов",
  },
];

export function getDoctor(slug: string) {
  return doctors.find((item) => item.slug === slug);
}
