import { Clock3, Mail, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { branches, contactPhoto, siteContent } from "../data/siteContent";

function ContactPage() {
  const mapQuery = encodeURIComponent(siteContent.address);

  return (
    <div className="space-y-10 lg:space-y-14">
      <Seo
        title="Contact Manokamna Library in Mithapur, Patna"
        description="Contact Manokamna Library for seat enquiry, timing details, directions, WhatsApp support, and branch information in Mithapur, Patna."
        keywords={[
          ...siteContent.keywords,
          "contact Manokamna Library",
          "seat enquiry Mithapur library",
          "library address Mithapur Patna",
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Visit Manokamna Library and ask about seat availability."
        description="If you want a quiet and disciplined study library in Mithapur, Patna, reach out today and plan your visit."
        accent="Seat enquiry"
      >
        <p>Call either of the enquiry numbers for admission and seat availability.</p>
        <p>{siteContent.phones.join(" | ")}</p>
      </PageHero>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-7 sm:p-9">
          <h2 className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Contact Details
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-[var(--color-rose)]" />
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink)]">Address</p>
                <p className="mt-1 text-sm leading-7 text-[var(--color-ink-soft)]">{siteContent.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PhoneCall className="mt-1 shrink-0 text-[var(--color-rose)]" />
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink)]">Phone</p>
                <div className="mt-1 flex flex-col gap-2">
                  {siteContent.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-sm leading-7 text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <MessageCircleMore className="mt-1 shrink-0 text-[var(--color-rose)]" />
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink)]">WhatsApp</p>
                <a
                  href={siteContent.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex text-sm leading-7 text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-[var(--color-rose)]" />
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink)]">Email</p>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="mt-1 inline-flex text-sm leading-7 text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
                >
                  {siteContent.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-1 shrink-0 text-[var(--color-rose)]" />
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink)]">Visit & Enquiry</p>
                <p className="mt-1 text-sm leading-7 text-[var(--color-ink-soft)]">
                  Call us before visiting so we can guide you about current seat availability and help you quickly find the location.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href={siteContent.mapLink}
                target="_blank"
                rel="noreferrer"
                className="ui-button ui-button-sun rounded-full bg-[var(--color-sun)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)]"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <a
                href={siteContent.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="ui-button rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircleMore size={16} />
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="photo-frame image-overlay h-60">
            <img src={contactPhoto.src} alt={contactPhoto.alt} loading="lazy" />
          </div>
          <div className="lift-card rounded-[2rem] bg-[var(--color-ink)] p-8 text-[var(--color-paper)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,250,241,0.62)]">
              Best for serious study
            </p>
            <h2 className="mt-4 display-font text-3xl font-bold">
              A library environment that helps you stay consistent.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[rgba(255,250,241,0.82)]">
              Students preparing for competitive exams often need more than a desk. They need silence, safety, comfort, and discipline. That is exactly what Manokamna Library is built to provide.
            </p>
          </div>

          <div className="lift-card rounded-[2rem] border border-[var(--color-border)] bg-white/80 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]">
              Search-friendly details
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteContent.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-[var(--color-sand)] px-4 py-2 text-sm text-[var(--color-ink)]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" delay={120}>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white/80 shadow-xl">
          <div className="flex flex-col gap-3 border-b border-[var(--color-border)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-rose)]">
                Location Map
              </p>
              <h2 className="display-font mt-2 text-3xl font-bold text-[var(--color-ink)]">
                Find Manokamna Library easily
              </h2>
            </div>
            <a
              href={siteContent.mapLink}
              target="_blank"
              rel="noreferrer"
              className="ui-button ui-button-light rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)]"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="h-[320px] sm:h-[420px]">
            <iframe
              title="Manokamna Library Map"
              src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-2" delay={140}>
        {branches.map((branch) => (
          <div key={branch.name} className="lift-card rounded-[2rem] bg-white/84 p-7 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]">{branch.name}</p>
            <h2 className="display-font mt-3 text-4xl font-bold text-[var(--color-ink)]">{branch.area}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{branch.address}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

export default ContactPage;
