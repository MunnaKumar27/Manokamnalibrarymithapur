function FacilityCard({ facility }) {
  const Icon = facility.icon;

  return (
    <article className="mesh-card glass-panel lift-card rounded-[1.75rem] p-6">
      <div className="relative space-y-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-mint)] text-[var(--color-ink)]">
          <Icon size={24} />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[var(--color-ink)]">{facility.title}</h3>
          <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{facility.description}</p>
        </div>
      </div>
    </article>
  );
}

export default FacilityCard;
