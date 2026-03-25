import { AirVent, Camera, ShieldCheck, Sparkles, Stars, Users } from "lucide-react";
import { facilitySpotlights } from "../data/siteContent";
import Reveal from "./Reveal";

const spotlightIcons = [Users, Sparkles, Camera, AirVent];

function FacilitySpotlightSection() {
  return (
    <Reveal as="section" className="space-y-6" delay={85}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rose)]">
            Top Facilities Spotlight
          </p>
          <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            The strongest reasons students and parents trust Manokamna Library.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-[var(--color-ink-soft)]">
          These are the most important comfort and trust features students usually ask about first:
          separate girls study room, separate washroom, CCTV security, and AC-backed comfort for long
          preparation hours.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="spotlight-stage glass-panel rounded-[2.2rem] p-6 sm:p-8">
          <div className="spotlight-stage-orb spotlight-stage-orb-one" />
          <div className="spotlight-stage-orb spotlight-stage-orb-two" />
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(242,108,99,0.18)] bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-rose)]">
              <Stars size={14} />
              Premium Trust Layer
            </div>

            <div className="space-y-4">
              <h3 className="display-font text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
                Comfort, safety, and discipline in one focused study space.
              </h3>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
                This spotlight section is designed to visually highlight the facilities that matter most for
                serious study and guardian confidence.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {facilitySpotlights.map((item, index) => {
                const Icon = spotlightIcons[index];

                return (
                  <div
                    key={item.title}
                    className="spotlight-mini-card rounded-[1.5rem] border border-white/70 bg-white/78 p-4 shadow-[0_16px_34px_rgba(28,37,65,0.08)]"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="spotlight-mini-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-ink)]">{item.title}</p>
                        <p className="text-xs font-medium text-[var(--color-ink-soft)]">{item.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {facilitySpotlights.map((item, index) => {
            const Icon = spotlightIcons[index];

            return (
              <article
                key={item.title}
                className={`facility-spotlight-card lift-card relative overflow-hidden rounded-[1.9rem] border border-[var(--color-border)] p-6 shadow-xl ${index === 0 ? "sm:col-span-2 facility-spotlight-card-featured" : "bg-white/82"}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="facility-spotlight-glow" />
                <div className="relative space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="facility-spotlight-badge">{item.badge}</span>
                    <div className={`facility-spotlight-icon ${index === 0 ? "facility-spotlight-icon-featured" : ""}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-rose)]">
                      {item.label}
                    </p>
                    <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                    <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{item.description}</p>
                  </div>

                  <div className="rounded-[1.35rem] border border-white/70 bg-white/72 px-4 py-4 shadow-[0_16px_34px_rgba(28,37,65,0.08)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">{item.accent}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default FacilitySpotlightSection;
