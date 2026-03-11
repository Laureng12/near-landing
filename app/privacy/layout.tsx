import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Near",
  description:
    "Privacy Policy for Near, the location-based task reminder app for iPhone. Learn how we handle your data.",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
