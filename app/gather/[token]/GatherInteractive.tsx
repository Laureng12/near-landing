"use client"

import { useState, CSSProperties } from "react"

const API_BASE = "https://backend-one-xi.vercel.app/v1"

type MenuCourse = { course?: string | null; title: string }
type RSVP = { name: string; status: string; partySize: number; note?: string | null }
type Dish = { item: string; broughtBy: string }
export type GatherEvent = {
  title: string
  hostName?: string | null
  serveAt: string
  location?: string | null
  menu: MenuCourse[]
  note?: string | null
  allowDishSignup: boolean
  rsvps: RSVP[]
  dishes: Dish[]
}

export default function GatherInteractive({
  token,
  initialEvent,
}: {
  token: string
  initialEvent: GatherEvent | null
}) {
  const [event, setEvent] = useState<GatherEvent | null>(initialEvent)
  const notFound = !initialEvent

  // RSVP form
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"yes" | "no" | "maybe" | "">("")
  const [partySize, setPartySize] = useState(1)
  const [note, setNote] = useState("")
  const [rsvpSent, setRsvpSent] = useState(false)
  const [rsvpBusy, setRsvpBusy] = useState(false)

  // Dish form
  const [dishItem, setDishItem] = useState("")
  const [dishBusy, setDishBusy] = useState(false)

  async function load() {
    try {
      const res = await fetch(`${API_BASE}/public/gather/${token}`)
      if (!res.ok) return
      const data = await res.json()
      setEvent(data.event)
    } catch {
      /* keep current state on a refresh blip */
    }
  }

  async function submitRSVP() {
    if (!name.trim() || !status) return
    setRsvpBusy(true)
    try {
      await fetch(`${API_BASE}/public/gather/${token}/rsvp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), status, partySize, note: note.trim() || null }),
      })
      setRsvpSent(true)
      await load()
    } finally {
      setRsvpBusy(false)
    }
  }

  async function submitDish() {
    if (!dishItem.trim() || !name.trim()) return
    setDishBusy(true)
    try {
      await fetch(`${API_BASE}/public/gather/${token}/claim`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: dishItem.trim(), broughtBy: name.trim() }),
      })
      setDishItem("")
      await load()
    } finally {
      setDishBusy(false)
    }
  }

  if (notFound || !event) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <p style={styles.eyebrow}>Near</p>
          <h1 style={styles.title}>This invite isn&apos;t available</h1>
          <p style={styles.muted}>The link may have expired or been removed. Ask your host for a fresh one.</p>
        </div>
      </main>
    )
  }

  const serve = new Date(event.serveAt)
  const dateText = serve.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })
  const timeText = serve.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
  const yesCount = event.rsvps.filter((r) => r.status === "yes").reduce((n, r) => n + (r.partySize || 1), 0)

  return (
    <main style={styles.page}>
      <div style={styles.wrap}>
        {/* Header */}
        <div style={styles.card}>
          <p style={styles.eyebrow}>{event.hostName ? `${event.hostName} is hosting` : "You're invited"}</p>
          <h1 style={styles.title}>{event.title}</h1>
          <p style={styles.dateLine}>{dateText} · {timeText}</p>
          {event.location && <p style={styles.muted}>{event.location}</p>}
          {event.note && <p style={styles.note}>&ldquo;{event.note}&rdquo;</p>}
          <p style={styles.attending}>{yesCount > 0 ? `${yesCount} attending so far` : "Be the first to RSVP"}</p>
        </div>

        {/* Menu */}
        {event.menu?.length > 0 && (
          <div style={styles.card}>
            <p style={styles.sectionLabel}>THE MENU</p>
            {event.menu.map((c, i) => (
              <div key={i} style={styles.menuRow}>
                {c.course && <span style={styles.courseTag}>{c.course.toUpperCase()}</span>}
                <span style={styles.dishName}>{c.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* RSVP */}
        <div style={styles.card}>
          <p style={styles.sectionLabel}>WILL YOU BE THERE?</p>
          {rsvpSent ? (
            <p style={styles.success}>Thanks{name ? `, ${name.split(" ")[0]}` : ""} — your RSVP is in. ✓</p>
          ) : (
            <>
              <input style={styles.input} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <div style={styles.statusRow}>
                {(["yes", "maybe", "no"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    style={{ ...styles.statusBtn, ...(status === s ? styles.statusBtnOn : {}) }}
                  >
                    {s === "yes" ? "I'm in" : s === "maybe" ? "Maybe" : "Can't make it"}
                  </button>
                ))}
              </div>
              {status === "yes" && (
                <div style={styles.partyRow}>
                  <span style={styles.muted}>How many in your party?</span>
                  <div style={styles.stepper}>
                    <button style={styles.stepBtn} onClick={() => setPartySize(Math.max(1, partySize - 1))}>–</button>
                    <span style={styles.partyNum}>{partySize}</span>
                    <button style={styles.stepBtn} onClick={() => setPartySize(Math.min(20, partySize + 1))}>+</button>
                  </div>
                </div>
              )}
              <input style={styles.input} placeholder="A note for the host (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
              <button
                style={{ ...styles.primary, ...((!name.trim() || !status || rsvpBusy) ? styles.primaryOff : {}) }}
                disabled={!name.trim() || !status || rsvpBusy}
                onClick={submitRSVP}
              >
                {rsvpBusy ? "Sending…" : "Send RSVP"}
              </button>
            </>
          )}
        </div>

        {/* Dish sign-up */}
        {event.allowDishSignup && (
          <div style={styles.card}>
            <p style={styles.sectionLabel}>BRINGING SOMETHING?</p>
            {event.dishes.length > 0 && (
              <div style={styles.dishList}>
                {event.dishes.map((d, i) => (
                  <div key={i} style={styles.dishItem}>
                    <span style={styles.dishItemName}>{d.item}</span>
                    <span style={styles.dishBy}>{d.broughtBy}</span>
                  </div>
                ))}
              </div>
            )}
            <input style={styles.input} placeholder="e.g. A bottle of red, or a green salad" value={dishItem} onChange={(e) => setDishItem(e.target.value)} />
            <button
              style={{ ...styles.secondary, ...((!dishItem.trim() || !name.trim() || dishBusy) ? styles.primaryOff : {}) }}
              disabled={!dishItem.trim() || !name.trim() || dishBusy}
              onClick={submitDish}
            >
              {dishBusy ? "Adding…" : name.trim() ? "I'll bring this" : "Add your name above first"}
            </button>
          </div>
        )}

        <p style={styles.footer}>Planned with Near</p>
      </div>
    </main>
  )
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #070C1C 0%, #0E1733 50%, #070C1C 100%)",
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    padding: "32px 18px 48px",
    color: "#fff",
  },
  wrap: { width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: 16 },
  spinner: {
    width: 32, height: 32, margin: "120px auto",
    border: "3px solid rgba(255,255,255,0.15)", borderTop: "3px solid #DB4890",
    borderRadius: "50%", animation: "spin 0.8s linear infinite",
  },
  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24, padding: 24,
  },
  eyebrow: { color: "#DB4890", fontSize: 13, fontWeight: 600, letterSpacing: 0.5, margin: "0 0 8px" },
  title: { fontSize: 28, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.15 },
  dateLine: { color: "#FFEFD4", fontSize: 16, fontWeight: 600, margin: "0 0 4px" },
  muted: { color: "rgba(255,255,255,0.6)", fontSize: 14, margin: "2px 0" },
  note: { color: "rgba(255,255,255,0.8)", fontSize: 15, fontStyle: "italic", margin: "12px 0 0" },
  attending: { color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "14px 0 0" },
  sectionLabel: { color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, letterSpacing: 1.4, margin: "0 0 14px" },
  menuRow: { display: "flex", alignItems: "baseline", gap: 10, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" },
  courseTag: { color: "#DB4890", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, minWidth: 64 },
  dishName: { color: "#fff", fontSize: 15 },
  input: {
    width: "100%", boxSizing: "border-box", marginTop: 10,
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12, padding: "12px 14px", color: "#fff", fontSize: 15, outline: "none",
  },
  statusRow: { display: "flex", gap: 8, marginTop: 12 },
  statusBtn: {
    flex: 1, padding: "11px 6px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer",
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)",
  },
  statusBtnOn: { background: "#DB4890", borderColor: "#DB4890", color: "#fff" },
  partyRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
  stepper: { display: "flex", alignItems: "center", gap: 14 },
  stepBtn: {
    width: 34, height: 34, borderRadius: "50%", fontSize: 18, cursor: "pointer",
    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff",
  },
  partyNum: { fontSize: 18, fontWeight: 700, minWidth: 20, textAlign: "center" },
  primary: {
    width: "100%", marginTop: 16, padding: "14px", borderRadius: 14, border: "none", cursor: "pointer",
    background: "#DB4890", color: "#fff", fontSize: 16, fontWeight: 700,
  },
  primaryOff: { opacity: 0.4, cursor: "default" },
  secondary: {
    width: "100%", marginTop: 12, padding: "13px", borderRadius: 14, cursor: "pointer",
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFEFD4", fontSize: 15, fontWeight: 600,
  },
  success: { color: "#7CD9A0", fontSize: 16, fontWeight: 600, margin: 0 },
  dishList: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 4 },
  dishItem: { display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" },
  dishItemName: { color: "#fff", fontSize: 15 },
  dishBy: { color: "rgba(255,255,255,0.5)", fontSize: 13 },
  footer: { textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 13, margin: "8px 0 0" },
}
