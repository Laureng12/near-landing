import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* âââââââââââââââ SEO & SHARING âââââââââââââââ */

const SITE_URL = "https://nearesttask.com";
const TITLE = "Near â Never forget anything again";
const DESCRIPTION =
  "Attach tasks to real places. When you arrive, Near shows what matters. No timers, no alarms â just the right list at the right moment. Free for iPhone.";
const OG_IMAGE = `${SITE_URL}/og-image.png`; // 1200x630 recommended

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Near",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "location reminder",
    "location based tasks",
    "errand app",
    "grocery list app",
    "task manager iPhone",
    "never forget app",
    "household task sharing",
    "smart reminders",
    "location to-do list",
    "ambient task intelligence",
  ],
  authors: [{ name: "Near", url: SITE_URL }],
  creator: "Near",
  publisher: "Near",

  /* ââ Open Graph (Facebook, LinkedIn, iMessage, Slack, Discord) ââ */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Near",
    title: "Near â Tasks that find you",
    description:
      "Your list appears when you arrive. Location-aware reminders for iPhone â free, private, and effortless.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Near app â location-based task reminders for iPhone",
      },
    ],
  },

  /* ââ Twitter / X ââ */
  twitter: {
    card: "summary_large_image",
    title: "Near â Never forget anything again",
    description:
      "Attach tasks to places. When you arrive, your list is waiting. Free for iPhone.",
    images: [OG_IMAGE],
    creator: "@nearapp",
  },

  /* ââ App Links ââ */
  appLinks: {
    ios: {
      app_store_id: "6744145553",
      app_name: "Near",
      url: "https://apps.apple.com/app/id6744145553",
    },
  },

  /* ââ Icons ââ */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/near-icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [
      { url: "/near-icon.png", sizes: "180x180" },
    ],
  },

  /* ââ Robots ââ */
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

  /* ââ Verification (add IDs when ready) ââ */
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_ID",
  // },

  /* ââ Other ââ */
  category: "productivity",
};

export const viewport: Viewport = {
  themeColor: "#04050C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* âââââââââââââââ STRUCTURED DATA âââââââââââââââ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Near",
  description: DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: undefined, // Add when you have App Store ratings
};

/* âââââââââââââââ LAYOUT âââââââââââââââ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Smart App Banner â shows native iOS install prompt */}
        <meta name="apple-itunes-app" content="app-id=6744145553" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
