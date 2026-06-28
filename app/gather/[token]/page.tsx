import type { Metadata } from "next"
import GatherInteractive, { GatherEvent } from "./GatherInteractive"

const API_BASE = "https://backend-one-xi.vercel.app/v1"

async function getEvent(token: string): Promise<GatherEvent | null> {
  try {
    const res = await fetch(`${API_BASE}/public/gather/${token}`, { cache: "no-store" })
    if (!res.ok) return null
    const data = await res.json()
    return data.event as GatherEvent
  } catch {
    return null
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ token: string }> }
): Promise<Metadata> {
  const { token } = await params
  const event = await getEvent(token)
  if (!event) {
    return { title: "Invite", robots: { index: false, follow: false } }
  }
  const when = new Date(event.serveAt).toLocaleDateString(undefined, {
    weekday: "long", month: "long", day: "numeric",
  })
  const title = `You're invited: ${event.title}`
  const description = `${event.hostName ? `${event.hostName} is hosting. ` : ""}${when}. RSVP and see the menu.`
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary", title, description },
  }
}

export default async function GatherPage(
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params
  const event = await getEvent(token)
  return <GatherInteractive token={token} initialEvent={event} />
}
