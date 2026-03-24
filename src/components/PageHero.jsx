function PageHero({ eyebrow, title, description, accent, children }) {
  return (
    <section className="glass-panel mesh-card relative overflow-hidden rounded-[2rem] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="fade-up text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rose)]">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="display-font fade-up-delay max-w-3xl text-4xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="fade-up-delay-2 max-w-2xl text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="fade-up-delay float-card rounded-[1.75rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-xl sm:p-6">
          <div className="rounded-[1.5rem] bg-[var(--color-ink)] p-5 text-[var(--color-paper)] sm:p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[rgba(255,250,241,0.68)]">
              {accent}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[rgba(255,250,241,0.88)]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
