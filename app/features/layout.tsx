import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | Near",
  description:
    "Explore every feature of Near — location-based tasks, household sharing, CarPlay, Apple Watch, geofence alerts, AI intelligence, and more.",
  openGraph: {
    title: "Features | Near",
    description:
      "Explore every feature of Near — location-based tasks, household sharing, CarPlay, Apple Watch, geofence alerts, AI intelligence, and more.",
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
