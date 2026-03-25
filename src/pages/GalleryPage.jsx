import { MapPinned, MessageCircleMore, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal";
import PremiumGallery from "../components/PremiumGallery";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { siteContent } from "../data/siteContent";

function GalleryPage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <Seo
        title="Gallery of Manokamna Library in Mithapur, Patna"
        description="View the gallery of Manokamna Library to explore the branch exterior, interior study hall, seating comfort, and peaceful study atmosphere in Mithapur, Patna."
        keywords={[
          ...siteContent.keywords,
          "Manokamna Library gallery",
          "library photos Mithapur Patna",
          "study hall images Patna library",
        ]}
      />

      <PageHero
        eyebrow="Gallery"
        title="Explore the atmosphere, comfort, and look of Manokamna Library."
        description="This gallery page gives visitors a clearer look at the branch exterior, seating comfort, study hall setup, and the peaceful learning environment before they visit."
        accent="Gallery View"
      >
        <p>See the branch look, seating quality, and real study atmosphere in one dedicated place.</p>
        <p className="hindi-font">शांत जगह, सुंदर सेटअप, और पढ़ाई के लिए सही माहौल।</p>
      </PageHero>

      <Reveal as="section" className="grid gap-5 md:grid-cols-3" delay={70}>
        <div className="lift-card rounded-[2rem] bg-white/82 p-6 shadow-lg">
          <MessageCircleMore className="text-[var(--color-rose)]" size={28} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-rose)]">
            Before Visiting
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">Ask about seat availability first</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
            Send a WhatsApp message or call before visiting so you can confirm seat availability, timing, and girls study room details.
          </p>
        </div>
        <div className="lift-card rounded-[2rem] bg-[var(--color-ink)] p-6 text-[var(--color-paper)] shadow-lg">
          <MapPinned className="text-[var(--color-sun)]" size={28} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
            Branch Navigation
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Use the map before you start</h2>
          <p className="mt-3 text-sm leading-7 text-white/82">
            Check the branch route in Google Maps before coming so the Mithapur location is easy to find on your first visit.
          </p>
        </div>
        <div className="lift-card rounded-[2rem] bg-[var(--color-mint)] p-6 shadow-lg">
          <ShieldCheck className="text-[var(--color-ink)]" size={28} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-ink-soft)]">
            What To Notice
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">Look for comfort and discipline</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
            Focus on the seating setup, cleanliness, branch identity, and the peaceful atmosphere shown across the gallery sections below.
          </p>
        </div>
      </Reveal>

      <PremiumGallery
        title="A full gallery experience for visitors and future students."
        description="These photos highlight the real branch identity, seating setup, study comfort, and overall atmosphere of Manokamna Library in a more meaningful visual flow."
      />

      <Reveal as="section" className="grid gap-6 md:grid-cols-3" delay={90}>
        <div className="lift-card rounded-[2rem] bg-[var(--color-ink)] p-7 text-[var(--color-paper)]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Exterior View</p>
          <h2 className="display-font mt-4 text-3xl font-bold">See the branch before you visit</h2>
          <p className="mt-4 text-sm leading-7 text-white/82">
            These photos help students and parents recognize the library building, signage, and approach area before arrival.
          </p>
        </div>
        <div className="lift-card rounded-[2rem] bg-white/82 p-7">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-rose)]">Interior Feel</p>
          <h2 className="display-font mt-4 text-3xl font-bold text-[var(--color-ink)]">Understand the study atmosphere</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
            Real branch photos give a better idea of seating, hall layout, cleanliness, and the disciplined environment inside the library.
          </p>
        </div>
        <div className="lift-card rounded-[2rem] bg-[var(--color-mint)] p-7">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">Meaningful Photos</p>
          <h2 className="display-font mt-4 text-3xl font-bold text-[var(--color-ink)]">Every image tells a visitor something useful</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
            Instead of random visuals, the gallery highlights real branch identity, student seating, and actual study spaces in a cleaner and more useful way.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export default GalleryPage;
