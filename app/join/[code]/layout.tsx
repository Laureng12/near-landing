import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Boopsie Household Invite",
  description: "Join a shared Boopsie household invite.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function JoinInviteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
