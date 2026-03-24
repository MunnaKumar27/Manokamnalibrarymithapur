import { MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function MobileQuickActions() {
  return (
    <div className="mobile-dock fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="glass-panel rounded-[1.6rem] border border-[var(--color-border)] px-3 py-3">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${siteContent.phones[0]}`}
            className="ui-button ui-button-dark rounded-[1.15rem] bg-[var(--color-ink)] px-3 py-3 text-sm font-semibold text-[var(--color-paper)]"
          >
            <PhoneCall size={17} />
            Call Now
          </a>
          <a
            href={siteContent.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="ui-button rounded-[1.15rem] bg-[#22c55e] px-3 py-3 text-sm font-semibold text-white"
          >
            <MessageCircleMore size={17} />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="ui-button ui-button-sun rounded-[1.15rem] bg-[var(--color-sun)] px-3 py-3 text-sm font-semibold text-[var(--color-ink)]"
          >
            <MapPin size={17} />
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileQuickActions;
