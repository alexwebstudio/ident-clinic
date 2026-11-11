import Link from "next/link";
import { site } from "@/content/site";
import { ToothMark } from "@/components/ui/ToothMark";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5 text-accent" aria-label={`${site.brand}, на главную`}>
      <ToothMark weight={4.2} className="h-[34px] w-[28px] flex-none" />
      <span className="flex flex-col items-start">
        <span className="font-display text-[23px] leading-none tracking-[-0.01em] sm:text-[25px]">{site.brand}</span>
        <span className="mt-[5px] text-[8.5px] font-medium uppercase leading-none tracking-[0.36em] text-ink-muted">{site.descriptor}</span>
      </span>
    </Link>
  );
}
