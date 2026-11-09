import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | Boopsie",
  description:
    "Get help with Boopsie, including location reminders, Always location access, household sharing, Kroger account connection, account deletion, privacy requests, and offline use.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support | Boopsie",
    description:
      "Get help with Boopsie, including location reminders, Always location access, household sharing, Kroger account connection, account deletion, privacy requests, and offline use.",
    url: "/support",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Support | Boopsie",
    description:
      "Get help with Boopsie, including location reminders, Always location access, household sharing, Kroger account connection, account deletion, privacy requests, and offline use.",
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
