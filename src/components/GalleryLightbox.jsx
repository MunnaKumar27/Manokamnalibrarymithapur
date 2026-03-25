import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

function GalleryLightbox({ cards, activeIndex, onClose, onPrev, onNext }) {
  const card = cards[activeIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrev();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!card) {
    return null;
  }

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.title} preview`}
      onClick={onClose}
    >
      <div className="gallery-lightbox-backdrop" />
      <div
        className="gallery-lightbox-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="gallery-lightbox-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X size={20} />
        </button>

        <div className="gallery-lightbox-media-wrap">
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-nav-left"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="gallery-lightbox-media">
            <img
              src={card.image}
              alt={card.title}
              className="gallery-lightbox-image"
              loading="eager"
              decoding="async"
            />
          </div>

          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-nav-right"
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="gallery-lightbox-copy">
          <div className="flex flex-wrap items-center gap-3">
            <span className="gallery-lightbox-pill">{card.tag}</span>
            <span className="gallery-lightbox-counter">
              {activeIndex + 1} / {cards.length}
            </span>
          </div>
          <h3 className="display-font mt-4 text-3xl font-bold text-[var(--color-paper)] sm:text-4xl">
            {card.title}
          </h3>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-sun)]">
            {card.caption}
          </p>
          <p className="mt-3 text-sm leading-7 text-white/82">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GalleryLightbox;
