import type { Metadata } from "next"
import { Bricolage_Grotesque, DM_Sans, Inter_Tight } from "next/font/google"
import "./globals.css"
import "./site/chrome.css"
import ConsentBanner from "./ConsentBanner"
import { NotifyDialog } from "./site/chrome"
import { APP_IS_LIVE, APP_STORE_URL } from "./site/launch"

// Self-hosted at build time (next/font downloads + serves the fonts from our own
// origin) - no runtime request to fonts.googleapis.com, so no visitor IP is sent
// to Google just by loading the page.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
})
// Brand word only ("Boop!", the wordmark): grown-up with a little character.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
  display: "swap",
})

const SITE_URL = "https://www.boopthere.com"
const DEFAULT_DESCRIPTION =
  "BoopThere remembers what you need and where you need it, then puts it on your Lock Screen the moment you arrive. Free for iPhone. No ads. Private by design."

export const metadata: Metadata = {
  title: "BoopThere | Boop! There it is. Location reminders for iPhone",
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
    title: "BoopThere | Boop! There it is. Location reminders for iPhone",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "BoopThere",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/boopthere-og.png?v=4",
        width: 1200,
        height: 630,
        alt: "BoopThere - location reminders for iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoopThere | Boop! There it is. Location reminders for iPhone",
    description: DEFAULT_DESCRIPTION,
    images: ["/boopthere-og.png?v=4"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=8", sizes: "64x64" },
      { url: "/favicon.png?v=8", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=8", sizes: "180x180", type: "image/png" }],
  },
  category: "Productivity",
  appleWebApp: {
    title: "BoopThere",
    capable: true,
  },
  other: {
    "apple-itunes-app": "app-id=6759834610",
    "impact-site-verification": "baa37acf-c03a-4807-afce-bd3d947097ab",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "BoopThere",
  alternateName: ["Boop There", "Near"],
  legalName: "Rise-X, Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/boop/boop-app-icon-1024-v3.png`,
  image: `${SITE_URL}/boopthere-og.png?v=4`,
  email: "hello@nearesttask.com",
  description: "Location reminders for iPhone. Boop! There it is.",
  brand: {
    "@type": "Brand",
    name: "BoopThere",
    slogan: "Boop! There it is.",
  },
}

const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#mobile-app`,
  name: "BoopThere",
  operatingSystem: "iOS",
  applicationCategory: "ProductivityApplication",
  url: SITE_URL,
  /* Telling search engines the app can be installed at a URL that 404s is
     worse than saying nothing. These come back when the listing is live. */
  ...(APP_IS_LIVE ? { downloadUrl: APP_STORE_URL, installUrl: APP_STORE_URL } : {}),
  image: `${SITE_URL}/boopthere-og.png?v=4`,
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
  /* Nothing can be bought until the listing is public, so the offers say
     PreOrder rather than InStock while APP_IS_LIVE is false. */
  offers: [
    {
      "@type": "Offer",
      name: "BoopThere Free",
      price: "0",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: APP_IS_LIVE
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
    },
    {
      "@type": "Offer",
      name: "BoopThere Pro",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: APP_IS_LIVE
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "12.99",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "BoopThere",
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
    <html lang="en" className={`${dmSans.variable} ${bricolage.variable} ${interTight.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=8" sizes="64x64" />
        <link rel="icon" href="/favicon.png?v=8" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=8" sizes="180x180" />
        <meta name="theme-color" content="#FAF6EF" />
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
        {/* .reveal starts at opacity 0 and is un-hidden by an IntersectionObserver.
            Without JavaScript that observer never runs, so every section below the
            hero stays invisible. Same failure the hero had before PR #19: the proof
            of the product must not depend on script. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".reveal,.reveal [data-stagger]{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
        {children}
        <ConsentBanner />
        <NotifyDialog />
      </body>
    </html>
  )
}
