import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Boopsie",
  description:
    "Privacy Policy for Boopsie, the location-based task reminder app for iPhone. Learn how we handle your data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Boopsie",
    description:
      "Privacy Policy for Boopsie, the location-based task reminder app for iPhone. Learn how we handle your data.",
    url: "/privacy",
    type: "website",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
