"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

/* ─── Feature Data ─── */

const corePills = [
  { icon: "🏠", label: "Home" },
  { icon: "📍", label: "Places" },
  { icon: "➕", label: "Add" },
  { icon: "🧠", label: "Memory" },
  { icon: "👨‍👩‍👧‍👦", label: "Household" },
]

const themes = [
  { name: "Dawn", color: "#FFB347", bg: "linear-gradient(135deg, #1a1040 0%, #4a2060 40%, #e8884e 100%)" },
  { name: "Day", color: "#4FC3F7", bg: "linear-gradient(135deg, #87CEEB 0%, #4FC3F7 50%, #E0F7FA 100%)" },
  { name: "Dusk", color: "#CE93D8", bg: "linear-gradient(135deg, #4a2060 0%, #CE93D8 50%, #e8884e 100%)" },
  { name: "Night", color: "#5C6BC0", bg: "linear-gradient(135deg, #0a0a2e 0%, #1a1a4e 50%, #2d1b69 100%)" },
]

const homeFeatures = [
  { icon: "👋", title: "Time-of-day greeting", desc: "Contextual title and subtitle that changes throughout the day" },
  { icon: "📍", title: "Nearby card", desc: "Shows closest place with active tasks when within alert radius" },
  { icon: "📊", title: "Momentum strip", desc: "Weekly completions, return trips saved, places cleared" },
  { icon: "🌧️", title: "Weather advice", desc: "WeatherKit-powered — \"Rain in 45 min, go now\"" },
  { icon: "🎁", title: "Gift suggestions", desc: "AI-generated ideas from upcoming calendar occasions" },
  { icon: "🔔", title: "Due soon nudges", desc: "Recurring items approaching restock time" },
  { icon: "🚗", title: "Headed Out?", desc: "Proactive trip suggestions based on your patterns" },
  { icon: "🗺️", title: "On Your Route", desc: "Route-aware errand suggestions with detour estimates" },
  { icon: "💊", title: "On Deck", desc: "Recurring items due soon as horizontal scrolling pills" },
  { icon: "✅", title: "All Clear", desc: "Celebration animation when every task is done" },
]

const placeFeatures = [
  { icon: "🏪", title: "Rich place profiles", desc: "Name, address autocomplete, emoji, photo, color, and category" },
  { icon: "📏", title: "Configurable radius", desc: "¼ mi, 1 mi, or 2 mi geofence per place" },
  { icon: "🕐", title: "Store hours", desc: "Open/closed status with \"closes in 30m\" warnings" },
  { icon: "📈", title: "Place dashboard", desc: "Visit frequency, dwell time, top categories, AI suggestions" },
  { icon: "🔄", title: "Contextual recall", desc: "Suggests previously completed items for re-adding" },
  { icon: "📅", title: "Arrival history", desc: "Timeline of all visits to a place" },
  { icon: "🗺️", title: "Errand bundling", desc: "Multi-stop route planner with drive times and Open in Maps" },
  { icon: "🗾", title: "Map view", desc: "MapKit with all places pinned, expandable task cards" },
  { icon: "👥", title: "Household presence", desc: "See which members are currently at a place" },
]

const taskFeatures = [
  { icon: "📝", title: "Rich tasks", desc: "Title, place, priority levels, notes, due date, and photos" },
  { icon: "🛒", title: "List mode", desc: "Multi-item grocery lists with sub-items, per-item notes, photos, and aisle" },
  { icon: "🔁", title: "Recurring tasks", desc: "Daily, weekly, and monthly repeat patterns" },
  { icon: "👤", title: "Task assignment", desc: "Assign to specific household members or everyone" },
  { icon: "📷", title: "Barcode scanning", desc: "Camera-based UPC/EAN scanner auto-populates task title" },
  { icon: "📆", title: "Calendar import", desc: "Pull events from iOS Calendar as tasks" },
  { icon: "🏬", title: "Aisle management", desc: "Per-item aisle assignments with learned suggestions per store" },
  { icon: "📐", title: "Smart sorting", desc: "Tasks organized by proximity — nearby, coming up, far away" },
  { icon: "📊", title: "Completion stats", desc: "Weekly and all-time counters with streak tracking" },
]

const geofenceFeatures = [
  { icon: "📡", title: "Dual-ring monitoring", desc: "500m approach ring plus custom alert radius for arrival" },
  { icon: "20", title: "Up to 20 regions", desc: "iOS limit, prioritized by task count and proximity" },
  { icon: "📋", title: "Arrival overlay", desc: "Full-screen checklist when arriving at a place" },
  { icon: "✅", title: "Complete All", desc: "One-tap to mark all tasks done" },
  { icon: "👋", title: "Departure alerts", desc: "Alerts for incomplete tasks when you leave" },
  { icon: "🔄", title: "Return trip detection", desc: "Knows when you come back to a place" },
  { icon: "⏱️", title: "Inactivity timer", desc: "30-minute auto-end for arrival sessions" },
  { icon: "📡", title: "Location push", desc: "Server-triggered location checks to bypass 20-region limit" },
]

const notifCategories = [
  "Arrival & departure with interactive actions",
  "Task reminders with Done & Snooze",
  "Daily memory sweep (8:30 AM)",
  "Store closing (30 min before)",
  "Weekly recap (Sunday 6 PM)",
  "Streak protection (8 PM)",
  "Weather alerts (rain incoming)",
  "Route errands (places on commute)",
  "Household arrival",
  "Task assigned",
  "Household task completed",
  "Proactive trip suggestions",
  "Occasion & gift suggestions",
  "Approach (passive, Smart Stack)",
]

const householdFeatures = [
  { icon: "💬", title: "SMS invite links", desc: "Create or join households via text message" },
  { icon: "🔗", title: "Deep link joining", desc: "nearesttask.com/join/{code} or /invite/{code}" },
  { icon: "📰", title: "Activity feed", desc: "See what members completed and when" },
  { icon: "📊", title: "Shared stats", desc: "Weekly completions across the household" },
  { icon: "👑", title: "Member management", desc: "Add or remove members (owner-only)" },
  { icon: "📍", title: "Real-time presence", desc: "See who is at which place right now" },
]

const integrations = [
  { icon: "🛒", name: "Kroger", desc: "OAuth login, add items to Kroger cart, aisle and UPC enrichment" },
  { icon: "🌤️", name: "WeatherKit", desc: "Weather-based errand advice" },
  { icon: "🗺️", name: "MapKit", desc: "Map view, route calculation, route awareness" },
  { icon: "🗣️", name: "Siri & App Intents", desc: "\"Add a task in Near\", \"Complete Task\", \"Mark All Done\"" },
  { icon: "📅", name: "Calendar", desc: "Import calendar events as tasks via EventKit" },
  { icon: "🔐", name: "Auth", desc: "Apple Sign-In and Google Sign-In" },
]

const platforms = [
  { icon: "⌚", name: "Apple Watch", desc: "Nearby place, task counts, complete from wrist" },
  { icon: "📱", name: "Home Screen Widgets", desc: "Small and medium, location-aware, Smart Stack scoring" },
  { icon: "🏝️", name: "Live Activities", desc: "Dynamic Island during approach, full checklist at arrival" },
  { icon: "🚗", name: "CarPlay", desc: "Place list by distance, tap to see and complete tasks" },
  { icon: "📤", name: "Share Extension", desc: "Share URLs and text from any app to create tasks" },
]

const aiFeatures = [
  { icon: "🧠", title: "On-device AI", desc: "iOS 26+ FoundationModels: natural language to structured tasks" },
  { icon: "🏬", title: "Grocery grouping", desc: "10 departments with keyword matching" },
  { icon: "📍", title: "Aisle suggestions", desc: "Learns aisle locations per store from user input and Kroger data" },
  { icon: "💡", title: "Contextual recall", desc: "Suggests forgotten items based on completion history" },
  { icon: "📅", title: "Trip suggestions", desc: "Pattern-based: \"you usually go here on Tuesdays\"" },
  { icon: "🛣️", title: "Route awareness", desc: "Real driving route analysis to find places along your path" },
]

const profileFeatures = [
  "Emoji avatar picker with skin tone modifiers",
  "Editable name and phone",
  "Weekly activity chart",
  "Personal stats: streak, weekly, all-time, places visited",
  "Theme selection",
  "Notification toggles",
  "Permission status with link to iOS Settings",
  "Sign out and delete account",
]


/* ─── Page ─── */

export default function FeaturesPage() {
  const [activeTheme, setActiveTheme] = useState(0)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActiveTheme(p => (p + 1) % themes.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <nav className="ftNav">
        <Link href="/" className="ftNavLogo">
          <Image src="/near-icon-hero.png" alt="Near" width={28} height={28} className="ftNavIcon" />
          <span className="ftNavName">near</span>
        </Link>
        <div className="ftNavLinks">
          <Link href="/" className="ftNavLink">Home</Link>
          <a href={APP_STORE_URL} className="ftNavCta">Download</a>
        </div>
      </nav>

      <main className="ftPage">

        {/* ─── Hero ─── */}
        <section className="ftHero">
          <div className="ftHeroGlow" />
          <p className="ftHeroEyebrow">Every feature, one app</p>
          <h1 className="ftHeroTitle">
            Built for how<br />life <span className="ftGradient">actually works.</span>
          </h1>
          <p className="ftHeroSub">
            Near brings together location intelligence, household sharing, and deep Apple integration
            into one ambient system that keeps your life organized without effort.
          </p>
        </section>


        {/* ─── Core App ─── */}
        <section className="reveal ftSection">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">📱</span>
            <h2 className="ftSectionTitle">Core App</h2>
            <p className="ftSectionSub">Five tabs. One system. Everything connected.</p>
          </div>

          <div className="ftPillRow">
            {corePills.map((p, i) => (
              <div key={i} className="ftPill">
                <span className="ftPillIcon">{p.icon}</span>
                <span className="ftPillLabel">{p.label}</span>
              </div>
            ))}
          </div>

          <div className="ftThemeDemo">
            <p className="ftThemeLabel">Day/night theming</p>
            <div className="ftThemeStrip">
              {themes.map((t, i) => (
                <button
                  key={i}
                  className={`ftThemeBtn ${i === activeTheme ? "ftThemeBtnActive" : ""}`}
                  onClick={() => setActiveTheme(i)}
                >
                  <div className="ftThemeSwatch" style={{ background: t.bg }} />
                  <span className="ftThemeName">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ftBadgeRow">
            <div className="ftBadge">
              <span className="ftBadgeIcon">📡</span>
              <span>Offline-first</span>
            </div>
            <div className="ftBadge">
              <span className="ftBadgeIcon">🔐</span>
              <span>Phone OTP + Apple + Google</span>
            </div>
            <div className="ftBadge">
              <span className="ftBadgeIcon">👻</span>
              <span>Demo mode</span>
            </div>
          </div>
        </section>


        {/* ─── Home Screen ─── */}
        <section className="reveal ftSection">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">🏠</span>
            <h2 className="ftSectionTitle">Home Screen</h2>
            <p className="ftSectionSub">Your command center. Everything you need, nothing you don't.</p>
          </div>
          <div className="ftGrid ftGrid3">
            {homeFeatures.map((f, i) => (
              <div key={i} className="ftCard">
                <span className="ftCardIcon">{f.icon}</span>
                <h3 className="ftCardTitle">{f.title}</h3>
                <p className="ftCardDesc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Places ─── */}
        <section className="reveal ftSection ftSectionAlt">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">📍</span>
            <h2 className="ftSectionTitle">Places</h2>
            <p className="ftSectionSub">Every store, every stop — deeply understood.</p>
          </div>
          <div className="ftGrid ftGrid3">
            {placeFeatures.map((f, i) => (
              <div key={i} className="ftCard">
                <span className="ftCardIcon">{f.icon}</span>
                <h3 className="ftCardTitle">{f.title}</h3>
                <p className="ftCardDesc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Tasks ─── */}
        <section className="reveal ftSection">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">🧠</span>
            <h2 className="ftSectionTitle">Tasks & Memory</h2>
            <p className="ftSectionSub">Your second brain for everything you need to do.</p>
          </div>
          <div className="ftGrid ftGrid3">
            {taskFeatures.map((f, i) => (
              <div key={i} className="ftCard">
                <span className="ftCardIcon">{f.icon}</span>
                <h3 className="ftCardTitle">{f.title}</h3>
                <p className="ftCardDesc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Geofence ─── */}
        <section className="reveal ftSection ftSectionDark">
          <div className="ftSectionHead">
            <span className="ftSectionIcon ftSectionIconLight">📡</span>
            <h2 className="ftSectionTitle ftTitleLight">Geofence & Arrival</h2>
            <p className="ftSectionSub ftSubLight">The magic behind showing up at the right moment.</p>
          </div>

          <div className="ftGeofenceVis">
            <div className="ftGeoRingOuter" />
            <div className="ftGeoRingInner" />
            <div className="ftGeoDot" />
            <span className="ftGeoLabelOuter">500m approach</span>
            <span className="ftGeoLabelInner">Alert radius</span>
          </div>

          <div className="ftGrid ftGrid2">
            {geofenceFeatures.map((f, i) => (
              <div key={i} className="ftCardDark">
                <span className="ftCardIcon">{f.icon}</span>
                <h3 className="ftCardTitle ftTitleLight">{f.title}</h3>
                <p className="ftCardDesc ftSubLight">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Notifications ─── */}
        <section className="reveal ftSection">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">🔔</span>
            <h2 className="ftSectionTitle">14 Notification Categories</h2>
            <p className="ftSectionSub">Every alert is intentional. Never noisy.</p>
          </div>
          <div className="ftNotifGrid">
            {notifCategories.map((n, i) => (
              <div key={i} className="ftNotifPill">
                <span className="ftNotifNum">{i + 1}</span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Household ─── */}
        <section className="reveal ftSection ftSectionAlt">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">👨‍👩‍👧‍👦</span>
            <h2 className="ftSectionTitle">Household</h2>
            <p className="ftSectionSub">Your family, always in sync.</p>
          </div>
          <div className="ftGrid ftGrid3">
            {householdFeatures.map((f, i) => (
              <div key={i} className="ftCard">
                <span className="ftCardIcon">{f.icon}</span>
                <h3 className="ftCardTitle">{f.title}</h3>
                <p className="ftCardDesc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Multi-Platform ─── */}
        <section className="reveal ftSection">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">🌐</span>
            <h2 className="ftSectionTitle">Multi-Platform</h2>
            <p className="ftSectionSub">Near goes everywhere Apple does.</p>
          </div>
          <div className="ftPlatformRow">
            {platforms.map((p, i) => (
              <div key={i} className="ftPlatformCard">
                <span className="ftPlatformIcon">{p.icon}</span>
                <h3 className="ftPlatformName">{p.name}</h3>
                <p className="ftPlatformDesc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Integrations ─── */}
        <section className="reveal ftSection ftSectionAlt">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">🔌</span>
            <h2 className="ftSectionTitle">Integrations</h2>
            <p className="ftSectionSub">Deeply connected to the tools you already use.</p>
          </div>
          <div className="ftGrid ftGrid3">
            {integrations.map((ig, i) => (
              <div key={i} className="ftCard">
                <span className="ftCardIcon">{ig.icon}</span>
                <h3 className="ftCardTitle">{ig.name}</h3>
                <p className="ftCardDesc">{ig.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── AI & Intelligence ─── */}
        <section className="reveal ftSection ftSectionDark">
          <div className="ftSectionHead">
            <span className="ftSectionIcon ftSectionIconLight">✨</span>
            <h2 className="ftSectionTitle ftTitleLight">AI & Intelligence</h2>
            <p className="ftSectionSub ftSubLight">On-device intelligence that learns how you live.</p>
          </div>
          <div className="ftGrid ftGrid3">
            {aiFeatures.map((f, i) => (
              <div key={i} className="ftCardDark">
                <span className="ftCardIcon">{f.icon}</span>
                <h3 className="ftCardTitle ftTitleLight">{f.title}</h3>
                <p className="ftCardDesc ftSubLight">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ─── Profile & Settings ─── */}
        <section className="reveal ftSection">
          <div className="ftSectionHead">
            <span className="ftSectionIcon">⚙️</span>
            <h2 className="ftSectionTitle">Profile & Settings</h2>
            <p className="ftSectionSub">Yours to customize.</p>
          </div>
          <div className="ftProfileGrid">
            {profileFeatures.map((f, i) => (
              <div key={i} className="ftProfileItem">
                <span className="ftProfileCheck">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>


        {/* ─── CTA ─── */}
        <section className="reveal ftCta">
          <div className="ftCtaOrb ftCtaOrb1" />
          <div className="ftCtaOrb ftCtaOrb2" />
          <h2 className="ftCtaTitle">Ready to try <span className="ftGradient">Near</span>?</h2>
          <p className="ftCtaSub">Free on the App Store. No ads, no tracking.</p>
          <a href={APP_STORE_URL} className="ftCtaBtn">Download for iPhone</a>
        </section>

      </main>

      <footer className="ftFooter">
        <div className="ftFooterInner">
          <span className="ftFooterCopy">&copy; {new Date().getFullYear()} Near</span>
          <div className="ftFooterLinks">
            <Link href="/privacy" className="ftFooterLink">Privacy</Link>
            <Link href="/terms" className="ftFooterLink">Terms</Link>
            <Link href="/support" className="ftFooterLink">Support</Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* ─── Nav ─── */
        .ftNav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem; height: 56px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--line);
        }
        .ftNavLogo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
        .ftNavIcon { border-radius: 6px; }
        .ftNavName { font-size: 18px; font-weight: 700; color: var(--foreground); letter-spacing: -0.3px; }
        .ftNavLinks { display: flex; align-items: center; gap: 1.5rem; }
        .ftNavLink { font-size: 14px; color: var(--text-secondary); text-decoration: none; font-weight: 500; }
        .ftNavLink:hover { color: var(--foreground); }
        .ftNavCta {
          font-size: 13px; font-weight: 600; color: #fff;
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
          padding: 7px 18px; border-radius: 980px; text-decoration: none;
        }

        /* ─── Hero ─── */
        .ftHero {
          position: relative; text-align: center;
          padding: 120px 24px 80px; overflow: hidden;
        }
        .ftHeroGlow {
          position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(47,109,255,0.12) 0%, rgba(123,92,255,0.08) 40%, transparent 70%);
          pointer-events: none;
        }
        .ftHeroEyebrow {
          font-size: 15px; font-weight: 600; letter-spacing: 0.5px;
          text-transform: uppercase; color: var(--blue); margin-bottom: 16px;
        }
        .ftHeroTitle {
          font-family: var(--font-display); font-size: 64px; font-weight: 700;
          letter-spacing: -2px; line-height: 1.05; color: var(--foreground);
          margin: 0 auto 24px; max-width: 700px;
        }
        .ftHeroSub {
          font-size: 19px; line-height: 1.6; color: var(--text-secondary);
          max-width: 560px; margin: 0 auto;
        }
        .ftGradient {
          background: linear-gradient(135deg, #2F6DFF 0%, #7B5CFF 40%, #C74BF6 70%, #FF6B8A 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─── Section layout ─── */
        .ftPage { max-width: 100%; overflow-x: hidden; }
        .ftSection { padding: 80px 24px; max-width: 1080px; margin: 0 auto; }
        .ftSectionAlt { background: var(--surface); max-width: 100%; }
        .ftSectionAlt > .ftSectionHead,
        .ftSectionAlt > .ftGrid,
        .ftSectionAlt > .ftPlatformRow { max-width: 1080px; margin-left: auto; margin-right: auto; }
        .ftSectionDark {
          background: linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #302b63 60%, #24243e 100%);
          max-width: 100%; padding: 80px 24px;
        }
        .ftSectionDark > .ftSectionHead,
        .ftSectionDark > .ftGrid,
        .ftSectionDark > .ftGeofenceVis { max-width: 1080px; margin-left: auto; margin-right: auto; }
        .ftSectionHead { text-align: center; margin-bottom: 48px; }
        .ftSectionIcon { font-size: 40px; display: block; margin-bottom: 12px; }
        .ftSectionIconLight { filter: drop-shadow(0 0 12px rgba(255,255,255,0.3)); }
        .ftSectionTitle {
          font-family: var(--font-display); font-size: 40px; font-weight: 700;
          letter-spacing: -1.5px; color: var(--foreground); margin: 0 0 8px;
        }
        .ftSectionSub { font-size: 17px; color: var(--text-secondary); margin: 0; }
        .ftTitleLight { color: #fff !important; }
        .ftSubLight { color: rgba(255,255,255,0.6) !important; }

        /* ─── Grids ─── */
        .ftGrid { display: grid; gap: 16px; }
        .ftGrid3 { grid-template-columns: repeat(3, 1fr); }
        .ftGrid2 { grid-template-columns: repeat(2, 1fr); }

        /* ─── Cards ─── */
        .ftCard {
          background: #fff; border: 1px solid var(--line); border-radius: 16px;
          padding: 28px 24px; transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ftCard:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
        .ftCardDark {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 28px 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ftCardDark:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .ftCardIcon { font-size: 28px; display: block; margin-bottom: 12px; }
        .ftCardTitle { font-size: 16px; font-weight: 650; margin: 0 0 6px; color: var(--foreground); }
        .ftCardDesc { font-size: 14px; line-height: 1.5; color: var(--text-secondary); margin: 0; }

        /* ─── Core pills ─── */
        .ftPillRow {
          display: flex; justify-content: center; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;
        }
        .ftPill {
          display: flex; align-items: center; gap: 8px;
          background: var(--surface); border: 1px solid var(--line); border-radius: 980px;
          padding: 10px 20px; font-size: 15px; font-weight: 600; color: var(--foreground);
        }
        .ftPillIcon { font-size: 18px; }
        .ftPillLabel { letter-spacing: -0.2px; }

        /* ─── Theme demo ─── */
        .ftThemeDemo { text-align: center; margin-bottom: 32px; }
        .ftThemeLabel { font-size: 14px; font-weight: 600; color: var(--text-secondary); margin-bottom: 12px; }
        .ftThemeStrip { display: flex; justify-content: center; gap: 12px; }
        .ftThemeBtn {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          background: none; border: 2px solid transparent; border-radius: 12px;
          padding: 8px 12px; cursor: pointer; transition: border-color 0.3s ease;
        }
        .ftThemeBtnActive { border-color: var(--blue); }
        .ftThemeSwatch { width: 48px; height: 48px; border-radius: 10px; }
        .ftThemeName { font-size: 12px; font-weight: 600; color: var(--text-secondary); }

        /* ─── Badges ─── */
        .ftBadgeRow { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .ftBadge {
          display: flex; align-items: center; gap: 8px;
          background: var(--surface); border-radius: 10px;
          padding: 10px 18px; font-size: 14px; font-weight: 500; color: var(--foreground);
        }
        .ftBadgeIcon { font-size: 16px; }

        /* ─── Geofence visual ─── */
        .ftGeofenceVis {
          position: relative; width: 240px; height: 240px; margin: 0 auto 48px;
        }
        .ftGeoRingOuter {
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px dashed rgba(255,255,255,0.2);
          animation: geoRingPulse 3s ease-in-out infinite;
        }
        .ftGeoRingInner {
          position: absolute; top: 40px; left: 40px; right: 40px; bottom: 40px;
          border-radius: 50%; border: 2px solid rgba(47,109,255,0.5);
          background: rgba(47,109,255,0.08);
          animation: geoRingPulse 3s ease-in-out infinite 0.5s;
        }
        .ftGeoDot {
          position: absolute; top: 50%; left: 50%; width: 16px; height: 16px;
          margin: -8px 0 0 -8px; border-radius: 50%; background: var(--blue);
          box-shadow: 0 0 20px rgba(47,109,255,0.6);
        }
        .ftGeoLabelOuter {
          position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
          font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.4);
          white-space: nowrap;
        }
        .ftGeoLabelInner {
          position: absolute; top: 28px; left: 50%; transform: translateX(-50%);
          font-size: 11px; font-weight: 600; color: rgba(47,109,255,0.8);
          white-space: nowrap;
        }
        @keyframes geoRingPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.7; }
        }

        /* ─── Notifications ─── */
        .ftNotifGrid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
          max-width: 800px; margin: 0 auto;
        }
        .ftNotifPill {
          display: flex; align-items: center; gap: 12px;
          background: var(--surface); border-radius: 12px; padding: 14px 18px;
          font-size: 14px; color: var(--foreground); font-weight: 500;
        }
        .ftNotifNum {
          display: flex; align-items: center; justify-content: center;
          width: 24px; height: 24px; border-radius: 50%;
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
          color: #fff; font-size: 11px; font-weight: 700; flex-shrink: 0;
        }

        /* ─── Platforms ─── */
        .ftPlatformRow {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;
        }
        .ftPlatformCard {
          text-align: center; background: var(--surface); border: 1px solid var(--line);
          border-radius: 16px; padding: 28px 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ftPlatformCard:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
        .ftPlatformIcon { font-size: 36px; display: block; margin-bottom: 12px; }
        .ftPlatformName { font-size: 15px; font-weight: 650; margin: 0 0 6px; color: var(--foreground); }
        .ftPlatformDesc { font-size: 13px; line-height: 1.45; color: var(--text-secondary); margin: 0; }

        /* ─── Profile ─── */
        .ftProfileGrid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
          max-width: 700px; margin: 0 auto;
        }
        .ftProfileItem {
          display: flex; align-items: center; gap: 10px;
          font-size: 15px; color: var(--foreground); padding: 10px 0;
        }
        .ftProfileCheck {
          display: flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #34C759 0%, #30D158 100%);
          color: #fff; font-size: 12px; font-weight: 700; flex-shrink: 0;
        }

        /* ─── CTA ─── */
        .ftCta {
          position: relative; text-align: center; padding: 100px 24px;
          background: linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #302b63 60%, #24243e 100%);
          overflow: hidden;
        }
        .ftCtaOrb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px); opacity: 0.3;
        }
        .ftCtaOrb1 {
          width: 400px; height: 400px; top: -100px; right: -100px;
          background: radial-gradient(circle, rgba(47,109,255,0.6) 0%, transparent 70%);
          animation: orbFloat1 8s ease-in-out infinite;
        }
        .ftCtaOrb2 {
          width: 300px; height: 300px; bottom: -80px; left: -60px;
          background: radial-gradient(circle, rgba(199,75,246,0.5) 0%, transparent 70%);
          animation: orbFloat2 10s ease-in-out infinite;
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }
        .ftCtaTitle {
          font-family: var(--font-display); font-size: 48px; font-weight: 700;
          letter-spacing: -1.5px; color: #fff; margin: 0 0 12px;
          position: relative; z-index: 1;
        }
        .ftCtaSub {
          font-size: 18px; color: rgba(255,255,255,0.6);
          margin: 0 0 32px; position: relative; z-index: 1;
        }
        .ftCtaBtn {
          display: inline-block; padding: 14px 36px; border-radius: 980px;
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
          color: #fff; font-size: 16px; font-weight: 600; text-decoration: none;
          position: relative; z-index: 1;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ftCtaBtn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(47,109,255,0.4); }

        /* ─── Footer ─── */
        .ftFooter { border-top: 1px solid var(--line); padding: 2rem 1.5rem; }
        .ftFooterInner {
          max-width: 1080px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ftFooterCopy { font-size: 13px; color: var(--text-secondary); }
        .ftFooterLinks { display: flex; gap: 1.5rem; }
        .ftFooterLink { font-size: 13px; color: var(--text-secondary); text-decoration: none; }
        .ftFooterLink:hover { color: var(--blue); }

        /* ─── Scroll reveal ─── */
        .reveal {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .ftHeroTitle { font-size: 44px; }
          .ftSectionTitle { font-size: 32px; }
          .ftGrid3 { grid-template-columns: repeat(2, 1fr); }
          .ftPlatformRow { grid-template-columns: repeat(3, 1fr); }
          .ftNotifGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .ftNav { padding: 0 16px; }
          .ftHero { padding: 80px 16px 60px; }
          .ftHeroTitle { font-size: 36px; letter-spacing: -1px; }
          .ftHeroSub { font-size: 16px; }
          .ftSection { padding: 60px 16px; }
          .ftSectionDark { padding: 60px 16px; }
          .ftSectionTitle { font-size: 28px; }
          .ftGrid3, .ftGrid2 { grid-template-columns: 1fr; }
          .ftPlatformRow { grid-template-columns: repeat(2, 1fr); }
          .ftProfileGrid { grid-template-columns: 1fr; }
          .ftCtaTitle { font-size: 36px; }
          .ftFooterInner { flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>
    </>
  )
}
