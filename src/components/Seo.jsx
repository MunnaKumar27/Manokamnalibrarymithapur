import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { branches, facilities, siteContent } from "../data/siteContent";

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value);
    }
  });
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value);
    }
  });
}

function getAbsoluteUrl(path, origin) {
  if (!path) {
    return undefined;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return origin ? `${origin}${path}` : path;
}

function createLocalBusinessSchema(origin, pageUrl) {
  const uniquePhones = [...new Set(siteContent.phones)];

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Library"],
    "@id": `${pageUrl}#localbusiness`,
    name: siteContent.name,
    description: siteContent.intro,
    url: pageUrl,
    image: getAbsoluteUrl(siteContent.logoPath, origin),
    logo: getAbsoluteUrl(siteContent.logoPath, origin),
    email: siteContent.email,
    telephone: uniquePhones[0],
    hasMap: siteContent.mapLink,
    areaServed: ["Mithapur, Patna", "Gardanibagh, Patna", "Patna"],
    keywords: siteContent.keywords.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.address,
      addressLocality: "Mithapur",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
    contactPoint: uniquePhones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    })),
    department: branches.map((branch) => ({
      "@type": "LocalBusiness",
      name: `${siteContent.name} - ${branch.area}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressRegion: "Bihar",
        addressCountry: "IN",
      },
    })),
    amenityFeature: facilities.slice(0, 8).map((facility) => ({
      "@type": "LocationFeatureSpecification",
      name: facility.title,
      value: true,
    })),
  };
}

function Seo({
  title,
  description,
  keywords = [],
  image = siteContent.logoPath,
  type = "website",
  schema = [],
}) {
  const location = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const pageUrl = `${origin}${location.pathname}`;
    const fullTitle = title.includes(siteContent.name) ? title : `${title} | ${siteContent.name}`;
    const keywordList = Array.isArray(keywords) ? keywords.join(", ") : keywords;
    const resolvedImage = getAbsoluteUrl(image, origin);

    document.title = fullTitle;

    ensureMeta('meta[name="description"]', { name: "description", content: description });
    ensureMeta('meta[name="keywords"]', { name: "keywords", content: keywordList });
    ensureMeta('meta[name="robots"]', { name: "robots", content: "index, follow" });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: description });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: type });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
    ensureMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_IN" });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (resolvedImage) {
      ensureMeta('meta[property="og:image"]', { property: "og:image", content: resolvedImage });
      ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: resolvedImage });
    }

    ensureLink('link[rel="canonical"]', { rel: "canonical", href: pageUrl });

    const baseSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: fullTitle,
        url: pageUrl,
        description,
        inLanguage: "en-IN",
      },
      createLocalBusinessSchema(origin, pageUrl),
      ...schema,
    ];

    const addedScripts = baseSchemas.map((item, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = `${location.pathname}-${index}`;
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      addedScripts.forEach((script) => script.remove());
    };
  }, [description, image, keywords, location.pathname, schema, title, type]);

  return null;
}

export default Seo;
