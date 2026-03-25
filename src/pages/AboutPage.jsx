import { MapPin, Target, Users } from "lucide-react";
import CallBanner from "../components/CallBanner";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { aboutPhotos, audience, siteContent } from "../data/siteContent";

function AboutPage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <Seo
        title="About Manokamna Library in Mithapur, Patna"
        description="Learn about Manokamna Library, a trusted and well-maintained self study library in Mithapur, Patna built for focused study, competitive exam preparation, and a disciplined learning atmosphere."
        keywords={[
          ...siteContent.keywords,
          "about Manokamna Library",
          "trusted self study library in Mithapur Patna",
          "competitive exam study library Patna",
        ]}
      />

      <PageHero
        eyebrow="About Us"
        title="A peaceful and disciplined library built for productive study."
        description="Manokamna Library was created for students who need a distraction-free place to study with consistency, comfort, and confidence. यहां माहौल भी प्रेरणादायक है और पढ़ाई भी प्रभावशाली बनती है।"
        accent="Why we exist"
      >
        <p>{siteContent.mission}</p>
        <p>
          We believe the right environment can transform study habits, improve focus, and help students stay committed to their goals.
        </p>
      </PageHero>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-7 sm:p-9">
          <div className="space-y-5">
            <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Trusted by students in Mithapur, Patna
            </h2>
            <p className="text-base leading-8 text-[var(--color-ink-soft)]">
              Manokamna Library is one of the most trusted and well-maintained self-study libraries in Mithapur, Patna. It has become a preferred study destination for students preparing for competitive exams and academic milestones because it combines silence, discipline, cleanliness, and comfort in one focused setting.
            </p>
            <p className="text-base leading-8 text-[var(--color-ink-soft)]">
              Our study hall is organized for long hours of concentration with comfortable seating, spacious desks, proper lighting, ventilation, and clean facilities. Along with a separate girls study room and CCTV security, we aim to provide a safe and motivating place where students can concentrate without distractions.
            </p>
            <p className="text-base leading-8 text-[var(--color-ink-soft)]">
              If you are looking for the best self-study library in Mithapur, Patna, Manokamna Library is the place to study, prepare, and move confidently toward your academic dreams.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {aboutPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className={`photo-frame image-overlay ${index === 0 ? "col-span-2 h-52" : "h-40"}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="lift-card rounded-[2rem] bg-[var(--color-mint)] p-6 text-[var(--color-ink)]">
            <Target className="mb-5" size={32} />
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-3 text-sm leading-7">
              To give every student in Patna access to a safe, silent, organized, and motivating study environment where progress feels possible every day.
            </p>
          </div>
          <div className="lift-card rounded-[2rem] bg-[var(--color-ink)] p-6 text-[var(--color-paper)]">
            <Users className="mb-5 text-[var(--color-sun)]" size={32} />
            <h3 className="text-2xl font-semibold">Who It Helps</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[rgba(255,250,241,0.1)] px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="lift-card rounded-[2rem] border border-[var(--color-border)] bg-white/80 p-6">
            <MapPin className="mb-5 text-[var(--color-rose)]" size={32} />
            <h3 className="text-2xl font-semibold text-[var(--color-ink)]">Address</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{siteContent.address}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <CallBanner />
      </Reveal>
    </div>
  );
}

export default AboutPage;
