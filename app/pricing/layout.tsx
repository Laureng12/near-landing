import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Near",
  description:
    "Near's core location-based reminders are free. Compare Free and Pro — Pro adds AI meal plans, recipe Discover, smart observations, and voice intake.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Near",
    description:
      "Near's core location-based reminders are free. Compare Free and Pro — Pro adds AI meal plans, recipe Discover, smart observations, and voice intake.",
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
      "Near's core location-based reminders are free. Compare Free and Pro — Pro adds AI meal plans, recipe Discover, smart observations, and voice intake.",
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
