import Image from "next/image";
import { reviewsBlock } from "@/content/copy";
import { textReviews, videoReviews } from "@/content/reviews";
import { plural, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { AnimatedTitle } from "@/components/ui/Heading";
import { ArrowUpRight, Instagram, Star } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { ToothMotif } from "@/components/ui/ToothMark";

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`Оценка ${count} из 5`}>
      {Array.from({ length: count }, (_, star) => (
        <Star key={star} width={size} height={size} />
      ))}
    </span>
  );
}

// Отзывы живут в Instagram и 2ГИС: на сайте — кликабельные превью, а не сухой текст.
export function Reviews() {
  const reviewsWord = plural(site.stats.reviews, "отзыв", "отзыва", "отзывов");

  return (
    <SectionCard clip>
      <header className="mb-9 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="t-eyebrow mb-4">{reviewsBlock.eyebrow}</p>
          <AnimatedTitle text={reviewsBlock.title} />
          <p data-reveal="" data-blur="" data-delay="0.15" className="t-lead mt-5 max-w-[46ch] opacity-85">
            {reviewsBlock.lead}
          </p>
        </div>
        <div data-reveal="" data-delay="0.15" className="flex-none">
          <Button href={site.instagramReviews} external arrow>
            <Instagram /> {reviewsBlock.instagramCta}
          </Button>
        </div>
      </header>

      {/* Рейтинг крупно: главный показатель доверия. */}
      <Reveal className="on-accent relative isolate mb-6 grid gap-6 overflow-hidden rounded-[18px] p-6 text-on-accent sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 lg:mb-8 lg:rounded-[22px] lg:p-10" style={{ background: "var(--bright)" }}>
        <ToothMotif className="-bottom-16 right-[-40px] h-auto w-[260px] lg:right-[6%] lg:w-[320px]" />
        <div className="flex items-end gap-4">
          <span className="font-display text-[96px] leading-[0.82] tracking-[-0.03em] lg:text-[140px]">
            {site.stats.rating.toFixed(1)}
          </span>
          <span className="mb-1 text-[#e8d9a8]">
            <Stars count={5} size={20} />
          </span>
        </div>
        <div className="sm:border-l sm:border-[rgb(255_255_255/0.22)] sm:pl-10">
          <p className="font-display text-[26px] leading-tight lg:text-[34px]">
            {site.stats.reviews} {reviewsWord} в 2ГИС
          </p>
          <p className="mt-2 max-w-[44ch] text-[15px] text-on-accent-muted">Средняя оценка пациентов. Читайте все отзывы на независимой площадке.</p>
          <a href={site.twoGis} target="_blank" rel="noopener noreferrer" className="text-link mt-4">
            Открыть в 2ГИС <ArrowUpRight />
          </a>
        </div>
      </Reveal>

      {/* Видеоотзывы: обложка + play → reels в Instagram. */}
      <Reveal group className="snap-row">
        {videoReviews.map((video) => (
          <a key={video.title} href={video.href} target="_blank" rel="noopener noreferrer" data-reveal-item="" aria-label={`${video.caption}: ${video.title}. Смотреть в Instagram`} className="group ig-card card-shade aspect-[4/5] text-white lg:aspect-[3/4]">
            <Image src={video.cover} alt="" fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 78vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <span className="absolute inset-0 z-10 flex flex-col justify-between p-4 lg:p-5">
              <span className="flex items-center justify-between">
                <span className="pill !min-h-[30px] !bg-white/90 !text-[12px]">
                  <Instagram width={14} height={14} /> Reels
                </span>
                {video.placeholder && <span className="rounded-full bg-black/35 px-2.5 py-1 text-[11px] backdrop-blur-sm">ссылка скоро</span>}
              </span>
              <span className="flex justify-center">
                <span className="ig-play">
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M8 5.5v13l10.5-6.5z" />
                  </svg>
                </span>
              </span>
              <span>
                <span className="block font-display text-[26px] leading-tight">{video.title}</span>
                <span className="mt-1 block text-[14px] opacity-90">{video.caption}</span>
              </span>
            </span>
          </a>
        ))}
      </Reveal>

      {/* Текстовые: реальные отзывы из 2ГИС, карточка ведёт на площадку. */}
      <Reveal group className="mt-4 grid gap-3 md:grid-cols-3 lg:mt-5 lg:gap-4">
        {textReviews.map((review) => (
          <a key={review.text} href={review.href} target="_blank" rel="noopener noreferrer" data-reveal-item="" className="group flex min-h-[240px] flex-col justify-between gap-8 rounded-[18px] bg-surface-2 p-5 transition-colors hover:bg-tint lg:rounded-[22px] lg:p-6">
            <div>
              <div className="mb-4 flex items-center justify-between text-accent">
                <Stars count={review.rating} />
                <ArrowUpRight className="text-ink-muted transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <blockquote className="text-[16px] leading-relaxed">«{review.text}»</blockquote>
            </div>
            <span className="flex items-center justify-between gap-3">
              <span className="font-medium">{review.author}</span>
              <Mono className="!text-[13px] text-ink-muted">
                {review.source} · {review.date}
              </Mono>
            </span>
          </a>
        ))}
      </Reveal>
    </SectionCard>
  );
}
