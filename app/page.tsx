import HomePageClient from "./HomePageClient"

const SITE_URL = "https://www.nearesttask.com"

const faqItems = [
  {
    q: "What is a location-based reminder?",
    a: "A task that waits at a place instead of a time. Near holds it quietly until you arrive at the store, the pharmacy, or your own front door, then shows it on your Lock Screen.",
  },
  {
    q: "How does Near know when I arrive somewhere?",
    a: "iPhone location services tell Near you have reached a place you saved. The geofence is handled by iOS on the device; Near simply surfaces what belongs there.",
  },
  {
    q: "Can Near share grocery lists with family members?",
    a: "Yes. A household shares one memory. Anyone can add to it, and whoever is closest to the store is the one who gets the reminder.",
  },
  {
    q: "Does Near track my location?",
    a: "Near uses location to surface a task at the moment it matters, and never for advertising. Geofences run on your iPhone. Saved places, tasks, and arrival events sync so reminders and household sharing work, and you can delete all of it at any time.",
  },
]

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
