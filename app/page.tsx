import HomePageClient from "./HomePageClient"
import { faqItems } from "./site/faq"

const SITE_URL = "https://www.nearesttask.com"


function HomeStructuredData() {
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: "Near - Never forget anything again | Location reminders for iPhone",
    url: SITE_URL,
    description:
      "Near remembers what you need and where you need it, then puts it on your Lock Screen the moment you arrive. Free for iPhone. No ads. Private by design.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/near-og.png`,
      width: 1200,
      height: 630,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#mobile-app`,
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}

export default function Page() {
  return (
    <>
      <HomeStructuredData />
      <HomePageClient />
    </>
  )
}
