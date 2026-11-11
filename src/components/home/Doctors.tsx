import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { ToothMotif } from "@/components/ui/ToothMark";

export function Doctors() {
  return (
    <SectionCard clip>
      <ToothMotif className="-right-[6%] top-[4%] h-auto w-[46vw] max-w-[520px] lg:right-[2%]" />
      <SectionHead eyebrow={doctorsBlock.eyebrow} title={doctorsBlock.title} lead={doctorsBlock.lead} link={{ label: doctorsBlock.all, href: "/doctors" }} />
      <Reveal group className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-5">
        {doctors.map((doctor) => (
          <div key={doctor.slug} data-reveal-item="">
            <DoctorCard doctor={doctor} sizes="(min-width: 1024px) 24vw, 50vw" />
          </div>
        ))}
      </Reveal>
    </SectionCard>
  );
}
