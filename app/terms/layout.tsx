import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Boopsie",
  description:
    "Terms and Conditions for Boopsie, the location-based task reminder app for iPhone.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Boopsie",
    description:
      "Terms and Conditions for Boopsie, the location-based task reminder app for iPhone.",
    url: "/terms",
    type: "website",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
