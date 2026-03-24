import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteContent } from "../data/siteContent";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Facilities", to: "/facilities" },
  { label: "Timing", to: "/timing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(255,248,241,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="spotlight-ring flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-[rgba(16,33,63,0.18)]">
            <img src={siteContent.logoPath} alt="Manokamna Library logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-lg font-semibold text-[var(--color-ink)]">{siteContent.name}</p>
            <p className="text-sm font-semibold text-[var(--color-ink-soft)]">{siteContent.branchLabel}</p>
            <p className="hindi-font text-xs font-semibold text-[var(--color-rose)]">{siteContent.taglineHindi}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={siteContent.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="ui-button ui-button-sun hidden rounded-full bg-[var(--color-sun)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] lg:flex"
        >
          <PhoneCall size={16} />
          Seat Enquiry
        </a>

        <button
          type="button"
          className="inline-flex rounded-full border border-[var(--color-border)] p-3 text-[var(--color-ink)] md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[rgba(255,248,241,0.96)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `nav-link w-full justify-start rounded-2xl px-4 py-3 ${isActive ? "active" : "bg-white/85"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteContent.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="ui-button ui-button-sun rounded-2xl bg-[var(--color-sun)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-ink)]"
            >
              Call for Seat Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
