import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | BoopThere",
  description:
    "Get help with BoopThere, including location reminders, Always location access, household sharing, Kroger account connection, account deletion, privacy requests, and offline use.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support | BoopThere",
    description:
      "Get help with BoopThere, including location reminders, Always location access, household sharing, Kroger account connection, account deletion, privacy requests, and offline use.",
    url: "/support",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Support | BoopThere",
    description:
      "Get help with BoopThere, including location reminders, Always location access, household sharing, Kroger account connection, account deletion, privacy requests, and offline use.",
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
