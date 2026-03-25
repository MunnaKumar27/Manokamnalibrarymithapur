import { ArrowUpRight, Camera, Expand, Images } from "lucide-react";
import { useState } from "react";
import { galleryCards, gallerySections } from "../data/siteContent";
import GalleryLightbox from "./GalleryLightbox";
import Reveal from "./Reveal";

function PremiumGallery({
  title = "A more premium look at the study experience.",
  description = "Browse real library photos that show the branch look, study seating, and the atmosphere students experience every day.",
  limit,
}) {
  const cards = limit ? galleryCards.slice(0, limit) : galleryCards;
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const indexedCards = cards.map((card, index) => ({ ...card, globalIndex: index }));
  const sections = limit
    ? [
        {
          id: "preview",
          title: "Gallery Preview",
          description: "A quick visual preview of the atmosphere and study comfort at Manokamna Library.",
          cards: indexedCards,
        },
      ]
    : gallerySections
        .map((section) => ({
          ...section,
          cards: indexedCards.filter((card) => card.section === section.id),
        }))
        .filter((section) => section.cards.length > 0);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((current) => (current === 0 ? cards.length - 1 : current - 1));
  const showNext = () => setActiveIndex((current) => (current === cards.length - 1 ? 0 : current + 1));
  const markLoaded = (index) => setLoadedImages((current) => ({ ...current, [index]: true }));

  return (
    <Reveal as="section" className="space-y-8" delay={140}>
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

      <div className="grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-white/72 p-4 shadow-lg sm:grid-cols-3">
        <div className="gallery-intro-chip">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
            Branch View
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
            Real exterior photos help students and guardians identify the branch before they visit.
          </p>
        </div>
        <div className="gallery-intro-chip">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
            Interior Feel
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
            Interior shots show the seating comfort, cleanliness, and peaceful atmosphere inside the library.
          </p>
        </div>
        <div className="gallery-intro-chip">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
            Lightbox Preview
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
            Tap any image to open a larger preview with captions and a more premium photo-viewing experience.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="space-y-5">
            {!limit && (
              <div className="flex flex-col gap-3 rounded-[1.75rem] border border-[var(--color-border)] bg-white/76 p-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
                    {section.title}
                  </p>
                  <h3 className="display-font text-3xl font-bold text-[var(--color-ink)]">
                    {section.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-[var(--color-ink-soft)]">
                  {section.description}
                </p>
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              {section.cards.map((card, index) => (
                <article
                  key={card.title}
                  className={`gallery-card group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[2rem] border border-[var(--color-border)] shadow-xl ${!limit && sectionIndex === 0 && index === 0 ? "md:col-span-2 md:aspect-[16/9]" : ""} ${loadedImages[card.globalIndex] ? "gallery-card-loaded" : ""}`}
                  style={{ animationDelay: `${card.globalIndex * 110}ms` }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open preview for ${card.title}`}
                  aria-haspopup="dialog"
                  onClick={() => openLightbox(card.globalIndex)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openLightbox(card.globalIndex);
                    }
                  }}
                >
                  <img
                    src={card.thumbnail || card.image}
                    alt={card.title}
                    className="gallery-card-image h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading={card.globalIndex < 2 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={card.globalIndex === 0 ? "high" : "auto"}
                    sizes={limit ? "(max-width: 767px) 92vw, 46vw" : "(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 42vw"}
                    onLoad={() => markLoaded(card.globalIndex)}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,65,0.9)] via-[rgba(28,37,65,0.18)] to-[rgba(28,37,65,0.08)]" />
                  <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/14 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/92 backdrop-blur-md">
                        <Images size={14} />
                        {card.tag}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md">
                          <Camera size={18} />
                        </div>
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md transition duration-500 group-hover:scale-110">
                          <Expand size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-sun)]">
                        {card.caption}
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                        <ArrowUpRight className="shrink-0 text-white transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <p className="max-w-md text-sm leading-7 text-white/88">{card.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          cards={cards}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrevious}
          onNext={showNext}
        />
      )}
    </Reveal>
  );
}

export default PremiumGallery;
