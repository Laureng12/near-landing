import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions — Near | Ambient Task Intelligence for iPhone",
  description:
    "Terms and Conditions for Near, the location-based task reminder app for iPhone.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
