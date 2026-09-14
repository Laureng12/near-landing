import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Near",
  description:
    "Near's location reminders are free, always, and so is the grocery list. Pro adds unlimited AI meal plans, predictive restocks, and goal breakdowns. $12.99 a month or $109 a year.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Near",
    description:
      "Near's location reminders are free, always, and so is the grocery list. Pro adds unlimited AI meal plans, predictive restocks, and goal breakdowns. $12.99 a month or $109 a year.",
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
      "Near's location reminders are free, always, and so is the grocery list. Pro adds unlimited AI meal plans, predictive restocks, and goal breakdowns. $12.99 a month or $109 a year.",
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
