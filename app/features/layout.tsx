import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features — Near | Ambient Task Intelligence for iPhone",
  description:
    "Near automatically surfaces your grocery list, errands, and tasks the moment you arrive at the places where they belong. Built for iPhone, Apple Watch, CarPlay, and Siri.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Near — Your tasks. Already there.",
    description:
      "Ambient task intelligence for iPhone. Location-based reminders that find you.",
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
