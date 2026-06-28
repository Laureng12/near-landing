import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You're invited",
  description: "RSVP and see the menu for a gathering planned with Near.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function GatherLayout({ children }: { children: React.ReactNode }) {
  return children
}
