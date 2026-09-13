import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Everything Near does | Near",
  description:
    "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything Near does, and nothing that asks you to organize it.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Everything Near does | Near",
    description:
      "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything Near does, and nothing that asks you to organize it.",
    url: "/features",
    type: "website",
    images: [
      {
        url: "/near-og.png",
        width: 1200,
        height: 630,
        alt: "Everything Near does - location reminders, shared lists and Meal Plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything Near does | Near",
    description:
      "Capture, placement, arrival - plus shared household lists, Meal Plan, Apple Watch and Siri. Everything Near does, and nothing that asks you to organize it.",
    images: ["/near-og.png"],
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
