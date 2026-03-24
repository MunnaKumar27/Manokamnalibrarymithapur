import PremiumGallery from "../components/PremiumGallery";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

function GalleryPage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <PageHero
        eyebrow="Gallery"
        title="Explore the atmosphere, comfort, and look of Manokamna Library."
        description="This gallery page gives you a dedicated visual showcase of the study environment, seating comfort, organization, and student-first facilities. यहां की झलक देखकर ही focus feel होगा।"
        accent="Gallery View"
      >
        <p>Use this page as the main photo section for the website.</p>
        <p className="hindi-font">शांत जगह, सुंदर सेटअप, और पढ़ाई के लिए सही vibe.</p>
      </PageHero>

      <PremiumGallery
        title="A full gallery experience for visitors and future students."
        description="This gallery shows the real exterior, study seating, branch identity, and interior atmosphere of Manokamna Library so students can understand the place before visiting."
      />

      <Reveal as="section" className="grid gap-6 md:grid-cols-3" delay={90}>
        <div className="lift-card rounded-[2rem] bg-[var(--color-ink)] p-7 text-[var(--color-paper)]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Exterior View</p>
          <h2 className="display-font mt-4 text-3xl font-bold">See the branch before you visit</h2>
          <p className="mt-4 text-sm leading-7 text-white/82">
            These photos help students and parents recognize the library building, branch signage, and approach area before arrival.
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
            Instead of random visuals, the gallery now highlights branch identity, student seating, and actual study spaces in a more meaningful way.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export default GalleryPage;
