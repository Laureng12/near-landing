import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Everything Boopsie does | Boopsie",
  description:
    "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything Boopsie does, and nothing that asks you to organize it.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Everything Boopsie does | Boopsie",
    description:
      "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything Boopsie does, and nothing that asks you to organize it.",
    url: "/features",
    type: "website",
    images: [
      {
        url: "/boopthere-og.png?v=5",
        width: 1200,
        height: 630,
        alt: "Everything Boopsie does - location reminders, shared lists and Meal Plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything Boopsie does | Boopsie",
    description:
      "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything Boopsie does, and nothing that asks you to organize it.",
    images: ["/boopthere-og.png?v=5"],
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
