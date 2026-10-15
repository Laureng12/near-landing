import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | BoopThere",
  description:
    "Terms and Conditions for BoopThere, the location-based task reminder app for iPhone.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | BoopThere",
    description:
      "Terms and Conditions for BoopThere, the location-based task reminder app for iPhone.",
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
