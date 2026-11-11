import type { Metadata } from "next";
import Image from "next/image";
import { CtaForm } from "@/components/home/CtaForm";
import { Guarantees } from "@/components/home/Guarantees";
import { Tech } from "@/components/home/Tech";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DemoNote } from "@/components/ui/DemoNote";
import { AnimatedTitle, SectionHead } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { site } from "@/content/site";
import { doctorsBlock } from "@/content/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `О клинике, ${site.city}`,
  description: `Клиника ${site.brand} в Актобе: имплантация, брекеты, лечение, детский приём. Как мы работаем и почему нам доверяют.`,
  path: "/about",
});

const figures = [
  { value: site.stats.rating.toFixed(1), label: "рейтинг в 2ГИС" },
  { value: `${site.stats.reviews}`, label: "отзывов пациентов" },
  { value: "8", label: "направлений лечения" },
];

const sterilization = [
  { title: "Обработка", text: "Сразу после приёма инструмент замачивают и моют." },
  { title: "Упаковка", text: "Каждый набор запечатывают в индивидуальный пакет." },
  { title: "Автоклав", text: "Стерилизуем по режиму и фиксируем цикл в журнале." },
  { title: "Вскрытие", text: "Пакет открываем при вас, прямо перед работой." },
];

const documents = ["Лицензия на медицинскую деятельность", "Сертификаты врачей", "Договор на оказание услуг", "Правила гарантийного обслуживания"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Клиника, где *спокойно*"
        lead="Светлые интерьеры, внимательные врачи и понятный план лечения."
        crumbs={[{ name: "О клинике", path: "/about" }]}
        image="/images/clinic/hall.jpg"
        imageAlt="Холл клиники iDént clinic: хрустальные люстры и белый рояль"
        objectPosition="50% 35%"
      >
        <Button booking arrow>
          Записаться на приём
        </Button>
      </PageHero>

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-4">О нас</p>
            <AnimatedTitle text="Стоматология для *всей* семьи" />
            <Reveal delay={0.15} className="t-lead mt-6 max-w-[54ch] text-ink-muted">
              <p>Лечим взрослых и детей, ставим импланты и брекеты. Не обещаем чудес — обещаем, что вы поймёте диагноз и заранее узнаете план и стоимость.</p>
            </Reveal>
          </div>
          <Reveal group className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {figures.map((item) => (
              <div key={item.label} data-reveal-item="" className="hair-row flex items-baseline justify-between gap-4 py-3">
                <span className="t-stat" data-count="">
                  {item.value}
                </span>
                <span className="text-right text-ink-muted">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal group className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
          {doctorsBlock.gallery.map((photo, index) => (
            <div key={photo.src} data-reveal-item="" className={index % 2 ? "md:mt-10" : ""}>
              <div className="photo-card aspect-[4/5]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover" />
              </div>
            </div>
          ))}
        </Reveal>
      </SectionCard>

      <Tech id="tech" />

      <SectionCard>
        <SectionHead eyebrow="Стерильность" title="Четыре шага *чистоты*" lead="Протокол для каждого инструмента. Спросите об этом на приёме, мы покажем." />
        <Reveal as="ol" group className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {sterilization.map((item, index) => (
            <li key={item.title} data-reveal-item="" className="inner-card p-5 lg:p-6">
              <Mono className="text-accent-press">0{index + 1}</Mono>
              <h3 className="mt-6 text-[19px] font-semibold leading-tight">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-snug text-ink-muted">{item.text}</p>
            </li>
          ))}
        </Reveal>
      </SectionCard>

      <Guarantees id="guarantees" />

      <SectionCard tone="surface-2" id="documents">
        <SectionHead eyebrow="Документы" title="Лицензии и *допуски*" lead="Попросите оригиналы у администратора клиники." />
        <Reveal group className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {documents.map((item) => (
            <div key={item} data-reveal-item="" className="dash-card flex min-h-[150px] items-end rounded-[18px] bg-surface p-5 font-medium leading-snug lg:rounded-[22px]">
              {item}
            </div>
          ))}
        </Reveal>
        <DemoNote className="mt-5">{`Демо: сканы документов добавит клиника. ${site.license}`}</DemoNote>
      </SectionCard>

      <CtaForm />
    </>
  );
}
