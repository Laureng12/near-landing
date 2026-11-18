import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Boopsie",
  description:
    "Boopsie's location reminders are free, always, and so is the grocery list. Pro adds unlimited AI meal plans, predictive restocks, and goal breakdowns. $12.99 a month or $109 a year.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Boopsie",
    description:
      "Boopsie's location reminders are free, always, and so is the grocery list. Pro adds unlimited AI meal plans, predictive restocks, and goal breakdowns. $12.99 a month or $109 a year.",
    url: "/pricing",
    type: "website",
    images: [
      {
        url: "/boopthere-og.png?v=5",
        width: 1200,
        height: 630,
        alt: "Boopsie pricing for Free and Pro plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Boopsie",
    description:
      "Boopsie's location reminders are free, always, and so is the grocery list. Pro adds unlimited AI meal plans, predictive restocks, and goal breakdowns. $12.99 a month or $109 a year.",
    images: ["/boopthere-og.png?v=5"],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
