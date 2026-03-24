import { ArrowUpRight, Camera } from "lucide-react";
import { galleryCards } from "../data/siteContent";
import Reveal from "./Reveal";

function PremiumGallery({
  title = "A more premium look at the study experience.",
  description = "These highlight cards are designed so real library photos can be swapped in later without changing the layout.",
  limit,
}) {
  const cards = limit ? galleryCards.slice(0, limit) : galleryCards;

  return (
    <Reveal as="section" className="space-y-6" delay={140}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rose)]">
            Library Showcase
          </p>
          <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--color-ink-soft)]">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="gallery-card group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[var(--color-border)] shadow-xl"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,65,0.84)] via-[rgba(28,37,65,0.22)] to-[rgba(28,37,65,0.12)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md">
                <Camera size={20} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <ArrowUpRight className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="max-w-md text-sm leading-7 text-white/88">{card.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

export default PremiumGallery;
