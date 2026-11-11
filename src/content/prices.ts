// ПЛЕЙСХОЛДЕР: все цены демонстрационные, в тенге. Заменить прайсом клиники.

export type PriceItem = { name: string; includes: string; price: number };
export type PriceSection = { id: string; title: string; items: PriceItem[] };

export const priceNote = "Точная цена — после диагностики. Мы зафиксируем её в смете до начала лечения.";

export const prices: PriceSection[] = [
  {
    id: "diagnostics",
    title: "Диагностика",
    items: [
      { name: "Консультация врача", includes: "осмотр, первичный план", price: 5000 },
      { name: "Прицельный цифровой снимок", includes: "один зуб", price: 3000 },
      { name: "Панорамный снимок", includes: "обе челюсти", price: 8000 },
      { name: "3D-томография", includes: "объёмный снимок, заключение", price: 18000 },
    ],
  },
  {
    id: "therapy",
    title: "Терапия",
    items: [
      { name: "Лечение кариеса", includes: "анестезия, пломба", price: 25000 },
      { name: "Лечение пульпита", includes: "каналы под микроскопом, пломба", price: 60000 },
      { name: "Художественная реставрация", includes: "восстановление формы и цвета", price: 35000 },
      { name: "Повторное лечение каналов", includes: "распломбировка, обработка, пломба", price: 80000 },
    ],
  },
  {
    id: "implantation",
    title: "Имплантация",
    items: [
      { name: "Установка импланта", includes: "хирургический этап, контрольный снимок", price: 180000 },
      { name: "Коронка на импланте", includes: "абатмент, керамика", price: 150000 },
      { name: "Костная пластика", includes: "материал, мембрана", price: 120000 },
      { name: "Синус-лифтинг", includes: "материал, контрольный снимок", price: 200000 },
    ],
  },
  {
    id: "orthodontics",
    title: "Ортодонтия",
    items: [
      { name: "Консультация ортодонта", includes: "слепки, снимки, расчёт", price: 15000 },
      { name: "Брекет-система", includes: "одна челюсть", price: 450000 },
      { name: "Элайнеры", includes: "курс кап, контроль", price: 900000 },
      { name: "Ретейнер", includes: "закрепление результата", price: 40000 },
    ],
  },
  {
    id: "prosthetics",
    title: "Протезирование",
    items: [
      { name: "Керамическая коронка", includes: "примерка, фиксация", price: 90000 },
      { name: "Циркониевая коронка", includes: "примерка, фиксация", price: 130000 },
      { name: "Мостовидный протез", includes: "за единицу", price: 90000 },
      { name: "Съёмный протез", includes: "одна челюсть", price: 160000 },
    ],
  },
  {
    id: "esthetics",
    title: "Эстетика",
    items: [
      { name: "Керамический винир", includes: "один зуб", price: 140000 },
      { name: "Композитный винир", includes: "один зуб", price: 45000 },
      { name: "Отбеливание", includes: "кабинетная процедура", price: 70000 },
      { name: "Цифровой макет улыбки", includes: "примерка до лечения", price: 30000 },
    ],
  },
  {
    id: "kids",
    title: "Детская стоматология",
    items: [
      { name: "Адаптационный приём", includes: "знакомство с врачом и кабинетом", price: 5000 },
      { name: "Лечение кариеса молочного зуба", includes: "анестезия, пломба", price: 15000 },
      { name: "Герметизация фиссур", includes: "один зуб", price: 12000 },
      { name: "Гигиена и фторирование", includes: "чистка, покрытие", price: 15000 },
    ],
  },
  {
    id: "hygiene",
    title: "Гигиена",
    items: [
      { name: "Профессиональная чистка", includes: "Air Flow + ультразвук, полировка", price: 20000 },
      { name: "Фторирование", includes: "покрытие всех зубов", price: 8000 },
      { name: "Лечение дёсен", includes: "один сегмент", price: 25000 },
    ],
  },
  {
    id: "surgery",
    title: "Хирургия",
    items: [
      { name: "Простое удаление", includes: "анестезия, рекомендации", price: 15000 },
      { name: "Сложное удаление", includes: "анестезия, швы", price: 35000 },
      { name: "Удаление зуба мудрости", includes: "анестезия, швы, контроль", price: 50000 },
      { name: "Резекция верхушки корня", includes: "анестезия, контрольный снимок", price: 70000 },
    ],
  },
];

export function priceSection(id: string) {
  const section = prices.find((item) => item.id === id);
  if (!section) throw new Error(`Нет раздела цен: ${id}`);
  return section;
}

export function minPrice(id: string) {
  return Math.min(...priceSection(id).items.map((item) => item.price));
}
