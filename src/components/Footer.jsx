import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <p className="display-font text-3xl font-bold">{siteContent.name}</p>
          <p className="max-w-md text-sm leading-7 text-[rgba(255,250,241,0.8)]">
            A peaceful, disciplined, and motivating self-study library in Mithapur, Patna for students building their academic future.
          </p>
          <p className="hindi-font text-sm font-semibold text-[var(--color-sun)]">{siteContent.taglineHindi}</p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(255,250,241,0.6)]">
            Quick Links
          </p>
          <div className="flex flex-col gap-3 text-sm text-[rgba(255,250,241,0.9)]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/timing">Timing</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(255,250,241,0.6)]">
            Reach Us
          </p>
          <div className="space-y-4 text-sm leading-7 text-[rgba(255,250,241,0.9)]">
            <p className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>{siteContent.address}</span>
            </p>
            <div className="space-y-2">
              {siteContent.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="flex gap-3">
                  <Phone size={18} className="mt-1 shrink-0" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
            <a href={`mailto:${siteContent.email}`} className="flex gap-3">
              <Mail size={18} className="mt-1 shrink-0" />
              <span>{siteContent.email}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
