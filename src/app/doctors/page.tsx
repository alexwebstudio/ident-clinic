import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DemoNote } from "@/components/ui/DemoNote";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Врачи клиники, ${site.city}`,
  description: `Врачи клиники ${site.brand} (${site.city}): ортодонт, детский приём, стоматологи. Выберите врача и запишитесь онлайн.`,
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Врачи, которым *доверяют*"
        lead="Выберите врача и запишитесь на первый приём онлайн."
        crumbs={[{ name: "Врачи", path: "/doctors" }]}
        image={doctorsBlock.gallery[0]!.src}
        imageAlt={doctorsBlock.gallery[0]!.alt}
        objectPosition="50% 30%"
      >
        <Button booking arrow>
          Записаться к врачу
        </Button>
      </PageHero>

      <SectionCard>
        <SectionHead eyebrow="Врачи" title="Найдите *своего* врача" lead="Откройте карточку врача и запишитесь онлайн." />
        <Reveal group className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-8">
          {doctors.map((doctor) => (
            <div key={doctor.slug} data-reveal-item="">
              <DoctorCard doctor={doctor} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw" />
              <p className="mt-3 text-[15px] leading-snug text-ink-muted">{doctor.specialization}</p>
              <Mono className="mt-1 block !text-[13px] text-ink-muted">стаж {doctor.experience}</Mono>
            </div>
          ))}
        </Reveal>
        <DemoNote className="mt-8">Специализации, стаж и фото врачей подтвердит клиника.</DemoNote>
      </SectionCard>

      <CtaForm />
    </>
  );
}
