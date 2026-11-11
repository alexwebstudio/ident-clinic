import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/content/doctors";
import { ArrowButton } from "./ArrowButton";
import { ToothMark } from "./ToothMark";

/** Заглушка, пока клиника не прислала фото врача: знак клиники и пометка, без выдуманного лица. */
export function PhotoPending({ label = "фото врача скоро" }: { label?: string }) {
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(160deg,#f4f6f8_0%,#e6eaf0_100%)] text-accent">
      <ToothMark weight={1.6} className="h-auto w-[26%] max-w-[96px] opacity-70" />
      <span className="t-eyebrow !text-[10px] !tracking-[0.24em]">{label}</span>
    </span>
  );
}

export function DoctorCard({ doctor, sizes }: { doctor: Doctor; sizes: string }) {
  return (
    <Link href={`/doctors/${doctor.slug}`} aria-label={`${doctor.name}, ${doctor.role.toLowerCase()}`} className="group block">
      <span className="photo-card aspect-[3/4]">
        {doctor.image ? <Image src={doctor.image} alt={doctor.imageAlt} fill sizes={sizes} className="object-cover object-top" /> : <PhotoPending />}
      </span>
      <span className="mt-3 flex items-center justify-between gap-3">
        <span className="min-w-0">
          <span className="block font-display text-[18px] leading-tight sm:text-[21px] lg:text-[23px]">{doctor.name}</span>
          <span className="mt-1 block text-[13px] leading-tight text-ink-muted sm:text-[14px]">{doctor.role}</span>
        </span>
        <span className="hidden sm:block">
          <ArrowButton tone="fill" />
        </span>
      </span>
    </Link>
  );
}
