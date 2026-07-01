import type { Metadata } from "next"
import "./globals.css"

const SITE_URL = "https://www.nearesttask.com"
const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"
const DEFAULT_DESCRIPTION =
  "Near helps busy people remember errands, groceries, and home things by surfacing them at the place they matter. Use it solo or share it with your household."

export const metadata: Metadata = {
  title: "Near | The right task. At the right place.",
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "location reminders",
    "location based tasks",
    "errand reminder app",
    "grocery list app",
    "place based reminders",
    "geofence reminders",
    "remember when you arrive",
    "household task sharing",
    "shared grocery list",
    "family errands app",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
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
    title: "Near | The right task. At the right place.",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "Near",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/near-og.png",
        width: 1200,
        height: 630,
        alt: "Near — location-based reminders for iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Near | The right task. At the right place.",
    description: DEFAULT_DESCRIPTION,
    images: ["/near-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "64x64" },
      { url: "/favicon.png?v=5", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=5", sizes: "180x180", type: "image/png" }],
  },
  category: "Productivity",
  appleWebApp: {
    title: "Near",
    capable: true,
  },
  other: {
    "apple-itunes-app": "app-id=6744145553",
    "impact-site-verification": "baa37acf-c03a-4807-afce-bd3d947097ab",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Near",
  legalName: "Rise-X, Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/Near-Logo-Blue.png`,
  image: `${SITE_URL}/near-og.png`,
  email: "hello@nearesttask.com",
  description: "Location-based reminders for iPhone. The right task, at the right place.",
  brand: {
    "@type": "Brand",
    name: "Near",
    slogan: "The right task. At the right place.",
  },
}

const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#mobile-app`,
  name: "Near",
  operatingSystem: "iOS",
  applicationCategory: "ProductivityApplication",
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  image: `${SITE_URL}/near-og.png`,
  isAccessibleForFree: true,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  featureList: [
    "Location-based reminders",
    "Place-based task surfacing",
    "Shared household lists",
    "Grocery lists grouped by department",
    "Apple Watch support",
    "AI-powered meal plans and suggestions on paid plans",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Near Free",
      price: "0",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Near Pro",
      price: "9.99",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Near Pro+",
      price: "12.99",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
    },
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Near",
  url: SITE_URL,
  inLanguage: "en-US",
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=5" sizes="64x64" />
        <link rel="icon" href="/favicon.png?v=5" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=5" sizes="180x180" />
        <meta name="theme-color" content="#FFFFFF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mobileAppJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
