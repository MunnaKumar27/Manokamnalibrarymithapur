import { MessageCircleMore } from "lucide-react";
import { siteContent } from "../data/siteContent";

function FloatingWhatsApp() {
  return (
    <a
      href={siteContent.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float hidden md:inline-flex"
    >
      <MessageCircleMore size={18} />
      WhatsApp
    </a>
  );
}

export default FloatingWhatsApp;
