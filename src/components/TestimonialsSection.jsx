import { BadgeCheck, MapPinned, MessageCircleMore, Quote, Star } from "lucide-react";
import { siteContent, testimonials, trustSnapshot } from "../data/siteContent";
import Reveal from "./Reveal";

function TestimonialsSection() {
  return (
    <Reveal as="section" className="space-y-6" delay={90}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rose)]">
            Student Testimonials
          </p>
          <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Public feedback that builds trust for new students.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-ink-soft)]">
          These cards are based on public listing feedback and review summaries that repeatedly mention comfort,
          peaceful study, and a disciplined atmosphere at Manokamna Library.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={`${item.name}-${item.role}-${index}`}
              className={`lift-card review-card rounded-[1.85rem] border border-[var(--color-border)] p-6 ${index === 0 ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : "glass-panel"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.26em] ${index === 0 ? "text-[rgba(255,250,241,0.62)]" : "text-[var(--color-rose)]"}`}>
                    {item.role}
                  </p>
                  <h3 className={`mt-3 text-xl font-semibold ${index === 0 ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]"}`}>
                    {item.name}
                  </h3>
                  <p className={`mt-1 text-xs font-medium ${index === 0 ? "text-[rgba(255,250,241,0.72)]" : "text-[var(--color-ink-soft)]"}`}>
                    {item.date}
                  </p>
                </div>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${index === 0 ? "bg-[rgba(255,250,241,0.1)] text-[var(--color-sun)]" : "bg-[var(--color-sand)] text-[var(--color-rose)]"}`}>
                  <Quote size={20} />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={15}
                    className={index === 0 ? "fill-[var(--color-sun)] text-[var(--color-sun)]" : "fill-[var(--color-sun)] text-[var(--color-sun)]"}
                  />
                ))}
              </div>

              <p className={`mt-5 text-sm leading-7 ${index === 0 ? "text-[rgba(255,250,241,0.84)]" : "text-[var(--color-ink-soft)]"}`}>
                {item.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-5">
          <div className="glass-panel review-trust-card rounded-[2rem] p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-rose)]">
                  Google Reviews / Trust
                </p>
                <h2 className="display-font mt-3 text-4xl font-bold text-[var(--color-ink)]">
                  A strong trust signal for first-time visitors.
                </h2>
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-lg">
                <BadgeCheck size={24} />
              </div>
            </div>

            <div className="mt-7 rounded-[1.6rem] bg-[var(--color-ink)] p-6 text-[var(--color-paper)] shadow-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[rgba(255,250,241,0.62)]">
                Review Snapshot
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="display-font text-5xl font-bold">{trustSnapshot.rating}</span>
                <span className="pb-2 text-sm text-[rgba(255,250,241,0.72)]">{trustSnapshot.ratingsLabel}</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[rgba(255,250,241,0.62)]">
                {trustSnapshot.sourceLabel}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {trustSnapshot.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-white/82 px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 space-y-4 text-sm leading-7 text-[var(--color-ink-soft)]">
              <p>
                This section combines public review feedback with listing-based trust signals so new students can understand the overall impression before visiting.
              </p>
              <p>
                For directions and more public feedback, open the location directly in Google Maps.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteContent.mapLink}
                target="_blank"
                rel="noreferrer"
                className="ui-button ui-button-dark rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-[var(--color-paper)]"
              >
                <MapPinned size={16} />
                Open on Google Maps
              </a>
              <a
                href={siteContent.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="ui-button rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircleMore size={16} />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default TestimonialsSection;
