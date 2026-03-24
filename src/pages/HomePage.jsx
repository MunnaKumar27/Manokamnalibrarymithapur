import { ArrowRight, MapPin, PhoneCall, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import CallBanner from "../components/CallBanner";
import FacilityCard from "../components/FacilityCard";
import PremiumGallery from "../components/PremiumGallery";
import Reveal from "../components/Reveal";
import StatsSection from "../components/StatsSection";
import { branches, facilities, heroPhotos, highlights, siteContent, studyTracks } from "../data/siteContent";

function HomePage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <section className="glass-panel mesh-card relative overflow-hidden rounded-[2.25rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="absolute inset-0 hero-grid opacity-35" />
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]">
              <Sparkles size={14} />
              शांत माहौल, मजबूत तैयारी
            </div>

            <div className="space-y-6">
              <p className="hindi-font fade-up-delay text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-rose)]">
                {siteContent.motto}
              </p>
              <h1 className="display-font fade-up-delay max-w-4xl text-[2.6rem] font-bold leading-[0.95] text-[var(--color-ink)] sm:text-5xl lg:text-7xl">
                Focus deeper, study longer, and prepare better at Manokamna Library.
              </h1>
              <p className="fade-up-delay-2 max-w-2xl text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
                A disciplined, student-friendly library in Mithapur, Patna with comfortable seating, separate girls study room, CCTV security, clean facilities, and an atmosphere built for serious preparation.
              </p>
              <p className="hindi-font fade-up-delay-2 max-w-2xl text-base font-semibold text-[var(--color-rose)] sm:text-lg">
                पढ़ो शांति से, बढ़ो लगातार।
              </p>
            </div>

            <div className="fade-up-delay-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteContent.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="ui-button ui-button-dark rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-[var(--color-paper)]"
              >
                <PhoneCall size={16} />
                Call for Seat Enquiry
              </a>
              <Link
                to="/facilities"
                className="ui-button ui-button-light rounded-full border border-[var(--color-border)] bg-white/75 px-6 py-3 text-sm font-semibold text-[var(--color-ink)]"
              >
                Explore Facilities
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.value}
                  className="lift-card rounded-[1.5rem] border border-[var(--color-border)] bg-white/75 p-5"
                >
                  <p className="text-lg font-semibold text-[var(--color-ink)]">{highlight.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up-delay grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {heroPhotos.map((photo, index) => (
                <div
                  key={photo.src}
                  className={`photo-frame image-overlay hero-photo-card group ${index === 0 ? "col-span-2 h-52 sm:h-64" : "hero-photo-card-secondary h-40 sm:h-48"}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="eager" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-[var(--color-paper)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em]">{photo.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/82 sm:text-sm">{photo.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="float-card rounded-[2rem] bg-[var(--color-ink)] p-6 text-[var(--color-paper)] shadow-2xl shadow-[rgba(16,33,63,0.22)] sm:p-7">
              <p className="text-sm uppercase tracking-[0.35em] text-[rgba(255,250,241,0.62)]">
                Why Students Choose Us
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4 rounded-[1.25rem] bg-[rgba(255,250,241,0.08)] p-4">
                  <Trophy className="mt-1 shrink-0 text-[var(--color-sun)]" />
                  <div>
                    <p className="font-semibold">Admission open</p>
                    <p className="text-sm leading-6 text-[rgba(255,250,241,0.78)]">
                      {siteContent.offer}. Preferred by students preparing for BPSC, SSC, Banking, Railway, UPSC, and academic goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-[1.25rem] bg-[rgba(255,250,241,0.08)] p-4">
                  <ShieldCheck className="mt-1 shrink-0 text-[var(--color-sun)]" />
                  <div>
                    <p className="font-semibold">Safe and organized</p>
                    <p className="text-sm leading-6 text-[rgba(255,250,241,0.78)]">
                      Separate girls room, clean washrooms, drinking water, and CCTV security create peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-white/80 p-6">
              <div className="flex gap-3">
                <MapPin className="pulse-dot mt-1 shrink-0 text-[var(--color-rose)]" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
                    Located in Mithapur
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-ink-soft)]">{siteContent.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <Reveal as="section" className="grid gap-6 lg:grid-cols-2" delay={60}>
        {branches.map((branch) => (
          <div key={branch.name} className="lift-card rounded-[2rem] border border-[var(--color-border)] bg-white/82 p-7 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]">{branch.name}</p>
            <h2 className="display-font mt-3 text-4xl font-bold text-[var(--color-ink)]">{branch.area}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{branch.address}</p>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rose)]">
            About Manokamna
          </p>
          <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            A trusted study destination for serious preparation.
          </h2>
          <p className="hindi-font text-lg font-semibold text-[var(--color-rose)]">
            सफलता की तैयारी, सही माहौल के साथ।
          </p>
          <p className="text-base leading-8 text-[var(--color-ink-soft)]">
            {siteContent.intro}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
          >
            Read our full story
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {studyTracks.map((item, index) => (
            <article
              key={item.title}
              className="lift-card group overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-white/78 shadow-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,65,0.72)] to-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-base font-semibold text-[var(--color-ink)]">{item.title}</p>
                <p className="text-sm leading-6 text-[var(--color-ink-soft)]">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <PremiumGallery limit={4} />

      <Reveal as="section" className="space-y-6" delay={80}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rose)]">
              Library Facilities
            </p>
            <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Everything designed for focused, comfortable study.
            </h2>
          </div>
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
          >
            View all facilities
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {facilities.slice(0, 4).map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <CallBanner />
      </Reveal>
    </div>
  );
}

export default HomePage;
