import { Manrope, Playfair_Display } from "next/font/google";

// next/font скачивает файлы при сборке и раздаёт их с нашего домена:
// шрифты self-hosted, запросов к Google в браузере нет. Оба с кириллицей.

/** Заголовки: высококонтрастный сериф в духе вордмарка iDént clinic. */
export const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

/** Текст, интерфейс, цифры: чистый гео-гротеск. */
export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const fontVariables = [playfair.variable, manrope.variable].join(" ");
