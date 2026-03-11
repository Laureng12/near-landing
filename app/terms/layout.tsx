import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Near",
  description:
    "Terms and Conditions for Near, the location-based task reminder app for iPhone.",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
