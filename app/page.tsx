import HomePageClient from "./HomePageClient"

const SITE_URL = "https://www.nearesttask.com"

const faqItems = [
  {
    q: "What is a location-based reminder?",
    a: "A location-based reminder is a task that appears when you arrive at or pass a specific place. Near uses location awareness to automatically show errands and reminders when they become relevant.",
  },
  {
    q: "How does Near know when I arrive somewhere?",
    a: "Near uses iPhone location services to detect when you arrive at a location such as a grocery store, pharmacy, or home. When you reach that location, the relevant tasks appear automatically.",
  },
  {
    q: "Can Near share grocery lists with family members?",
    a: "Yes. Near supports shared household lists so anyone in the household can add items. When someone is near the store, they receive the reminder.",
  },
  {
    q: "Does Near track my location?",
    a: "Near uses location to show tasks when they matter and does not use location data for advertising. Geofences are handled by iOS, while saved places, tasks, and arrival events may sync to support reminders, account sync, and household features.",
  },
]

function HomeStructuredData() {
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: "Near | The right task. At the right place.",
    url: SITE_URL,
    description:
      "Near helps busy people remember errands, groceries, and home things by surfacing them at the place they matter. Use it solo or share it with your household.",
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
