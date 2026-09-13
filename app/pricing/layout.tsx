import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Near",
  description:
    "Near's location reminders are free, always. Compare Free, Pro, and Pro+ - Pro adds meal plans, recipes that fill your grocery list, and the routines Near learns.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Near",
    description:
      "Near's location reminders are free, always. Compare Free, Pro, and Pro+ - Pro adds meal plans, recipes that fill your grocery list, and the routines Near learns.",
    url: "/pricing",
    type: "website",
    images: [
      {
        url: "/near-og.png",
        width: 1200,
        height: 630,
        alt: "Near pricing for Free and Pro plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Near",
    description:
      "Near's location reminders are free, always. Compare Free, Pro, and Pro+ - Pro adds meal plans, recipes that fill your grocery list, and the routines Near learns.",
    images: ["/near-og.png"],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
