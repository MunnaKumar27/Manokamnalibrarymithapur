import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import { counters } from "../data/siteContent";

function StatsSection() {
  return (
    <Reveal as="section" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" delay={40}>
      {counters.map((counter, index) => (
        <article
          key={counter.label}
          className="lift-card glass-panel rounded-[1.75rem] px-6 py-6"
          style={{ transitionDelay: `${index * 60}ms` }}
        >
          <p className="display-font text-4xl font-bold text-[var(--color-ink)]">
            <AnimatedCounter value={counter.value} suffix={counter.suffix} />
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{counter.label}</p>
        </article>
      ))}
    </Reveal>
  );
}

export default StatsSection;
