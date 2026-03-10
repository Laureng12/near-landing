import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Near | Never Forget Anything Again.",
  description:
    "Near is the location-aware to-do list for iPhone. Attach tasks to places, get reminded when you arrive, and keep your household in sync.",
  keywords: [
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
  ],
  metadataBase: new URL("https://nearesttask.com"),
  openGraph: {
    title: "Near | Never Forget Anything Again.",
    description:
      "Attach tasks to places. Near reminds you when you arrive, helps your household stay in sync, and makes errands feel effortless.",
    url: "https://nearesttask.com",
    siteName: "Near",
    type: "website",
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
    title: "Near | Never Forget Anything Again.",
    description:
      "The location-aware to-do list for iPhone. The right reminder, at the right place, at the right time.",
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
                "Near is the location-aware to-do list for iPhone. Add tasks to places and let the reminder appear when it can actually be done.",
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
