import { site } from "@/content/site";
import { ToothMark } from "@/components/ui/ToothMark";

// Чистый CSS: работает до загрузки JS. Зуб из логотипа чертится по контуру,
// затем проявляются вордмарк и подпись, после — шторка уходит вверх.
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <ToothMark weight={2.4} className="preloader-tooth" />
        <span className="preloader-word">{site.brand}</span>
        <span className="preloader-desc">{site.descriptor}</span>
        <span className="preloader-line" />
      </div>
    </div>
  );
}
