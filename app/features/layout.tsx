import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Everything BoopThere does | BoopThere",
  description:
    "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything BoopThere does, and nothing that asks you to organize it.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Everything BoopThere does | BoopThere",
    description:
      "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything BoopThere does, and nothing that asks you to organize it.",
    url: "/features",
    type: "website",
    images: [
      {
        url: "/boopthere-og.png",
        width: 1200,
        height: 630,
        alt: "Everything BoopThere does - location reminders, shared lists and Meal Plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything BoopThere does | BoopThere",
    description:
      "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything BoopThere does, and nothing that asks you to organize it.",
    images: ["/boopthere-og.png"],
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
