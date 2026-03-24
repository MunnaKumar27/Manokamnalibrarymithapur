import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function CallBanner() {
  return (
    <section className="rounded-[2rem] bg-[var(--color-ink)] px-5 py-9 text-[var(--color-paper)] sm:px-8 sm:py-10 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[rgba(255,250,241,0.65)]">
            Seat Enquiry
          </p>
          <h2 className="display-font text-3xl font-bold sm:text-4xl">
            Ready for a calm and motivating study space in Patna?
          </h2>
          <p className="hindi-font text-base font-semibold text-[var(--color-sun)]">शांत माहौल, बेहतर तैयारी, पक्का फोकस।</p>
          <p className="max-w-2xl text-sm leading-7 text-[rgba(255,250,241,0.82)] sm:text-base">
            Call us to check seat availability and visit Manokamna Library for a focused self-study environment.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={siteContent.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="ui-button ui-button-sun rounded-full bg-[var(--color-sun)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)]"
          >
            <PhoneCall size={16} />
            Seat Enquiry
          </a>
          <Link
            to="/contact"
            className="ui-button ui-button-dark rounded-full border border-[rgba(255,250,241,0.22)] px-5 py-3 text-sm font-semibold text-[var(--color-paper)]"
          >
            Visit Contact Page
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallBanner;
