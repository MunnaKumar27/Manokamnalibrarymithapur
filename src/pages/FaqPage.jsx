import CallBanner from "../components/CallBanner";
import FaqList from "../components/FaqList";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { faqs, siteContent } from "../data/siteContent";

function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-10 lg:space-y-14">
      <Seo
        title="FAQ for Manokamna Library, Mithapur Patna"
        description="Read answers to common questions about Manokamna Library, including girls study room availability, competitive exam preparation, facilities, and why students choose this library in Mithapur, Patna."
        keywords={[
          ...siteContent.keywords,
          "Manokamna Library FAQ",
          "best study library in Mithapur Patna FAQ",
          "girls study room library FAQ Patna",
        ]}
        schema={[faqSchema]}
      />

      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions from students and parents."
        description="If you are searching for the best self study library in Mithapur, Patna, these quick answers will help you understand what Manokamna Library offers."
        accent="Need more help?"
      >
        <p>Call us directly for seat enquiry, location support, and current availability.</p>
        <p>{siteContent.phones.join(" , ")}</p>
      </PageHero>

      <Reveal as="section" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <FaqList faqs={faqs} />

        <aside className="glass-panel lift-card rounded-[2rem] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-rose)]">
            Quick Snapshot
          </p>
          <h2 className="display-font mt-4 text-3xl font-bold text-[var(--color-ink)]">
            Why students prefer Manokamna Library
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-ink-soft)]">
            <p>Peaceful and silent study environment for long hours of concentration.</p>
            <p>Comfortable seating, proper lighting, clean washrooms, and drinking water.</p>
            <p>Separate girls study room and CCTV security for a safer study experience.</p>
            <p>Suitable for BPSC, SSC, Banking, Railway, UPSC, and academic preparation.</p>
          </div>
        </aside>
      </Reveal>

      <Reveal delay={120}>
        <CallBanner />
      </Reveal>
    </div>
  );
}

export default FaqPage;
