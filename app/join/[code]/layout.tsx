import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BoopThere Household Invite",
  description: "Join a shared BoopThere household invite.",
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
