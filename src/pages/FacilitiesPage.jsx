import CallBanner from "../components/CallBanner";
import FacilityCard from "../components/FacilityCard";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { facilities, facilityPhotos, siteContent } from "../data/siteContent";

function FacilitiesPage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <PageHero
        eyebrow="Facilities"
        title="A well-maintained study space designed for daily comfort and deep focus."
        description="From secure seating arrangements to clean washrooms and proper lighting, every detail at Manokamna Library supports productive study sessions. यहां हर चीज़ पढ़ाई को आसान और बेहतर बनाने के लिए है।"
        accent="At a glance"
      >
        <p>{siteContent.name} offers a peaceful study environment for students who value silence, discipline, and comfort.</p>
        <p>Each facility is arranged to make long study hours feel smoother, safer, and more consistent.</p>
      </PageHero>

      <Reveal as="section" className="grid gap-5 md:grid-cols-3">
        {facilityPhotos.map((photo, index) => (
          <div
            key={photo.src}
            className={`photo-frame image-overlay ${index === 0 ? "md:col-span-2 h-72" : "h-72"}`}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {facilities.map((facility) => (
          <FacilityCard key={facility.title} facility={facility} />
        ))}
      </Reveal>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-3" delay={80}>
        <div className="lift-card rounded-[2rem] bg-[var(--color-ink)] p-7 text-[var(--color-paper)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,250,241,0.62)]">
            Study Environment
          </p>
          <h2 className="mt-4 text-3xl font-semibold">Silent, clean, and motivating</h2>
          <p className="mt-4 text-sm leading-7 text-[rgba(255,250,241,0.82)]">
            The library atmosphere is designed to reduce distractions and help students stay disciplined during long preparation cycles.
          </p>
        </div>
        <div className="lift-card rounded-[2rem] bg-white/80 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]">
            Safety & Comfort
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">Built for confidence</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
            Separate girls study room, separate washrooms, CCTV security, clean drinking water, and organized seating help everyone study with peace of mind.
          </p>
        </div>
        <div className="lift-card rounded-[2rem] bg-[var(--color-mint)] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">
            Best For
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">Competitive exam preparation</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
            A focused setup for BPSC, SSC, Banking, Railway, UPSC, and other exam preparation where concentration matters every day.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <CallBanner />
      </Reveal>
    </div>
  );
}

export default FacilitiesPage;
