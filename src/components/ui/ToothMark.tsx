import type { CSSProperties, SVGProps } from "react";

// Знак iDént clinic: контурный line-art зуб одной линией + внутренний штрих коронки.
// Один источник для шапки, подвала, прелоадера и декоративного мотива.
export const TOOTH_OUTLINE =
  "M50 17C43 10 33 7 24 9 13 12 7 22 8 35c1 12 7 20 11 31 4 12 6 28 11 42 1 4 5 4 6 0 3-12 5-26 11-32 4-4 8 0 10 6 2 6 3 12 5 16 2 3 5 2 6-1 4-13 11-29 18-42 7-13 8-29 1-39-7-9-23-9-37 1z";
export const TOOTH_STROKE = "M14 34c8-7 21-11 32-12";

type ToothMarkProps = SVGProps<SVGSVGElement> & { weight?: number };

export function ToothMark({ weight = 3.2, ...props }: ToothMarkProps) {
  return (
    <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d={TOOTH_OUTLINE} pathLength={1} />
      <path d={TOOTH_STROKE} pathLength={1} />
    </svg>
  );
}

/** Тонкий водяной знак в секциях: тот же зуб, линия тоньше. */
export function ToothMotif({ className, style }: { className?: string; style?: CSSProperties }) {
  return <ToothMark weight={0.6} className={`tooth-motif ${className ?? ""}`} style={style} />;
}
