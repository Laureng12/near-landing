import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Near | The right task. At the right place.",
  description:
    "Near is an ambient life logistics system that surfaces errands, reminders, and household tasks automatically based on location.",
  keywords: [
    "ambient life logistics",
    "location reminders",
    "location based tasks",
    "grocery list app",
    "errand reminder",
    "household task sharing",
    "geofence reminders",
    "place based reminders",
    "shared grocery list",
    "family task app",
    "remember when you arrive",
    "automatic reminders",
    "location-based task manager",
  ],
  metadataBase: new URL("https://nearesttask.com"),
  openGraph: {
    title: "Near | Ambient Life Logistics",
    description:
      "Near is an ambient life logistics system that surfaces errands, reminders, and household tasks automatically based on location.",
    url: "https://nearesttask.com",
    siteName: "Near",
    type: "website",
    images: [
      {
        url: "/near-og.png",
        width: 1200,
        height: 630,
        alt: "Near - Ambient life logistics for iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Near | The right task. At the right place.",
    description:
      "Near is an ambient life logistics system that surfaces errands, reminders, and household tasks automatically based on location.",
    images: ["/near-og.png"],
  },
  appleWebApp: {
    title: "Near",
    capable: true,
  },
  other: {
    "apple-itunes-app": "app-id=6744145553",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Near",
              operatingSystem: "iOS",
              applicationCategory: "ProductivityApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Near is an ambient life logistics system that surfaces errands, reminders, and household tasks automatically based on location.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a location-based reminder?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A location-based reminder is a task that appears when you arrive at or pass a specific place. Near uses location awareness to automatically show errands and reminders when they become relevant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Near know when I arrive somewhere?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Near uses iPhone location services to detect when you arrive at a location such as a grocery store, pharmacy, or home. When you reach that location, the relevant tasks appear automatically.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Near share grocery lists with family members?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Near supports shared household lists so anyone in the household can add items. When someone is near the store, they receive the reminder.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Near track my location?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Near uses location only to show tasks when they matter. Data stays on your device and is never used for advertising.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
