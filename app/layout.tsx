import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Near | The right task. At the right place.",
  description:
    "Near is an ambient task intelligence system that surfaces errands, reminders, and household tasks automatically based on location.",
  keywords: [
    "ambient task intelligence",
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
    "AI task manager",
    "intelligent reminders",
    "ambient computing",
    "AI-powered errands",
    "smart task app",
    "context-aware reminders",
    "proactive task management",
    "AI location reminders",
    "smart errand assistant",
    "automatic task surfacing",
    "intelligent task scheduling",
    "AI grocery list",
    "smart household tasks",
    "location-aware AI",
    "ambient intelligence app",
  ],
  metadataBase: new URL("https://nearesttask.com"),
  alternates: {
    canonical: "https://nearesttask.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Near | Ambient Task Intelligence",
    description:
      "Near is an ambient task intelligence system that surfaces errands, reminders, and household tasks automatically based on location.",
    url: "https://nearesttask.com",
    siteName: "Near",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/near-og.png",
        width: 1200,
        height: 630,
        alt: "Near - Ambient task intelligence for iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Near | The right task. At the right place.",
    description:
      "Near is an ambient task intelligence system that surfaces errands, reminders, and household tasks automatically based on location.",
    images: ["/near-og.png"],
  },
  category: "Productivity",
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
        <link rel="canonical" href="https://nearesttask.com" />
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
                "Near is an ambient task intelligence system that surfaces errands, reminders, and household tasks automatically based on location.",
              url: "https://nearesttask.com",
              downloadUrl: "https://apps.apple.com/app/id6744145553",
              featureList: "Location-based reminders, Shared grocery lists, Ambient task surfacing, Household task management, AI-powered errand detection",
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
                {
                  "@type": "Question",
                  name: "What is ambient task intelligence?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ambient task intelligence means your tasks surface automatically based on where you are, without manual checking. Near uses AI-powered location awareness to deliver the right task at the right place and time.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Near an AI task manager?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Near is an ambient task intelligence system that uses AI and location awareness to surface tasks when they are most actionable. It goes beyond traditional task managers by proactively delivering reminders based on context.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Near",
              url: "https://nearesttask.com",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "iOS",
              browserRequirements: "Requires iOS 17.0 or later",
              description:
                "Near is an ambient task intelligence system. The right task, at the right place.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Near",
              url: "https://nearesttask.com",
              description: "Ambient task intelligence for iPhone. The right task, at the right place.",
              brand: {
                "@type": "Brand",
                name: "Near",
                slogan: "The right task. At the right place.",
              },
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
