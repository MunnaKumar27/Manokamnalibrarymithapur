import { Clock3, PhoneCall } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { branches, shiftPlans, siteContent } from "../data/siteContent";

function TimingPage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <PageHero
        eyebrow="Timing & Shift"
        title="Flexible study timing and shift-friendly seating for different routines."
        description="Manokamna Library supports students who study in the morning, daytime, evening, and long-hour preparation cycles. Call before booking to confirm current branch-wise seat timing and availability."
        accent="Shift Support"
      >
        <p className="hindi-font">{siteContent.motto}</p>
        <p className="hindi-font">सुबह से रात तक, पढ़ाई के लिए सही माहौल।</p>
      </PageHero>

      <Reveal as="section" className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {shiftPlans.map((plan) => (
          <article
            key={plan.title}
            className="lift-card glass-panel rounded-[1.85rem] p-6"
          >
            <Clock3 className="text-[var(--color-rose)]" size={26} />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-rose)]">
              {plan.time}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">{plan.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{plan.description}</p>
          </article>
        ))}
      </Reveal>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-2" delay={80}>
        {branches.map((branch) => (
          <div key={branch.name} className="lift-card rounded-[2rem] bg-white/82 p-7 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-rose)]">
              {branch.name}
            </p>
            <h2 className="display-font mt-3 text-4xl font-bold text-[var(--color-ink)]">{branch.area}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{branch.address}</p>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="rounded-[2rem] bg-[var(--color-ink)] px-6 py-10 text-[var(--color-paper)] sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/65">Need Exact Seat Timing?</p>
            <h2 className="display-font mt-4 text-4xl font-bold">Call now and confirm your preferred shift.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
              Current timing and seat availability can vary by branch. Please call before visiting for the latest shift details.
            </p>
          </div>
          <a
            href={`tel:${siteContent.phones[0]}`}
            className="ui-button ui-button-sun rounded-full bg-[var(--color-sun)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)]"
          >
            <PhoneCall size={16} />
            {siteContent.phones[0]}
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export default TimingPage;
