import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { minPrice } from "@/content/prices";
import { formatPrice, site } from "@/content/site";
import { servicesBlock } from "@/content/copy";
import { ArrowButton } from "./ArrowButton";
import { Button } from "./Button";
import { Mono } from "./Mono";
import { PillLabel } from "./PillLabel";
import { ToothMotif } from "./ToothMark";

export function ServiceCard({ service, sizes }: { service: Service; sizes: string }) {
  return (
    <Link href={`/services/${service.slug}`} aria-label={`${service.title}: ${service.short}`} className="group photo-card card-shade aspect-[5/4] text-white sm:aspect-[4/5]">
      <Image src={service.image} alt={service.imageAlt} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 lg:p-5">
        <div className="flex items-start justify-between">
          <span className="font-display text-[42px] leading-none [text-shadow:0_1px_18px_rgb(28_35_48/0.5)]">{service.number}</span>
          <ArrowButton />
        </div>
        <div>
          <PillLabel className="mb-2.5">{service.title}</PillLabel>
          <p className="text-[15px] leading-snug">{service.short}</p>
          <Mono className="mt-2 block !text-[13px] opacity-90">
            {site.isDemo ? `онлайн-запись · ${service.duration}` : `от ${formatPrice(minPrice(service.priceId))} · ${service.duration}`}
          </Mono>
        </div>
      </div>
    </Link>
  );
}

export function QuestionCard() {
  const { question } = servicesBlock;
  return (
    <div className="on-accent relative isolate flex h-full min-h-[260px] flex-col justify-between gap-8 overflow-hidden rounded-[18px] p-5 text-on-accent lg:min-h-[240px] lg:flex-row lg:items-end lg:rounded-[22px] lg:p-9" style={{ background: "var(--bright)" }}>
      <ToothMotif className="-right-6 -top-8 h-auto w-[180px] lg:right-[38%] lg:w-[220px]" />
      <p className="max-w-[16ch] font-display text-[clamp(34px,3.6vw,56px)] leading-[1.05]">{question.title}</p>
      <div className="lg:max-w-[380px]">
        <p className="mb-5 max-w-[34ch]">{question.text}</p>
        <Button booking arrow variant="light">
          {question.cta}
        </Button>
      </div>
    </div>
  );
}
