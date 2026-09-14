"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react"

import { APP_IS_LIVE } from "./site/launch"
import { isLive } from "./site/features"
import {
  ArrivalPhone,
  BRAND_ICON,
  DownloadCta,
  HouseholdPair,
  FinalCTA,
  SiteFooter,
  TopNav,
  useInView,
  useReveal,
  VoiceWave,
} from "./site/chrome"

/* The product story, in three beats. This replaces the six overlapping
   sections the old site used to explain the same behaviour. */
const beats = [
  {
    step: "01",
    title: "Say it.",
    visual: "voice" as const,
    body: "Type it or speak it. That is the entire capture step.",
  },
  {
    step: "02",
    title: "Near places it.",
    visual: "sphere" as const,
    body: "No folders, no tags, no organizing. It goes where it gets done.",
  },
  {
    step: "03",
    title: "It appears when you arrive.",
    visual: "arrive" as const,
    body: "Before you can forget it again.",
  },
]

/* The shared list Brian is about to see. */
const sharedList = ["Milk", "Eggs", "Bananas", "Bread", "Olive oil"] as const

/* Recognizable moments. Each one is a real arrival, so each one carries the
   Lock Screen it would actually produce - and the hour it would happen at.
   The five run dawn to night, the way the icon set does. */
const momentScenes = [
  {
    id: "grocery",
    tone: "grocery",
    sky: "dawn",
    line: "Groceries when you walk into the store",
    clock: "7:42",
    day: "Tuesday, March 17",
    title: "You\u2019re at Harris Teeter",
    sub: "3 things you needed",
    items: ["Milk", "Eggs", "Bananas"],
  },
  {
    id: "errand",
    tone: "errand",
    sky: "day",
    line: "Returns before you pass the drop-off",
    clock: "10:15",
    day: "Tuesday, March 17",
    title: "You\u2019re at the UPS Store",
    sub: "1 thing waiting",
    items: ["Return the blue jacket"],
  },
  {
    id: "pharmacy",
    tone: "pharmacy",
    sky: "day",
    line: "Prescriptions when you reach the pharmacy",
    clock: "1:04",
    day: "Tuesday, March 17",
    title: "You\u2019re at Walgreens",
    sub: "1 thing waiting",
    items: ["Pick up the prescription"],
  },
  {
    id: "ask",
    tone: "ask",
    sky: "dusk",
    line: "The question for the doctor when you\u2019re finally in the room",
    clock: "4:20",
    day: "Tuesday, March 17",
    title: "You\u2019re at Dr. Vaughn\u2019s office",
    sub: "1 thing to ask",
    items: ["Ask about the referral"],
  },
  {
    id: "home",
    tone: "home",
    sky: "night",
    line: "Home things the moment you come through the door",
    clock: "6:38",
    day: "Tuesday, March 17",
    title: "You\u2019re home",
    sub: "2 things waiting",
    items: ["Water the plants", "Take out recycling"],
  },
] as const

const faqItems = [
  {
    q: "What is a location-based reminder?",
    a: "A task that waits at a place instead of a time. Near holds it quietly until you arrive at the store, the pharmacy, or your own front door, then shows it on your Lock Screen.",
  },
  {
    q: "How does Near know when I arrive somewhere?",
    a: "iPhone location services tell Near you have reached a place you saved. The geofence is handled by iOS on the device; Near simply surfaces what belongs there.",
  },
  {
    q: "Can Near share grocery lists with family members?",
    a: "Yes. A household shares one memory. Anyone can add to it, and whoever is closest to the store is the one who gets the reminder.",
  },
  {
    q: "Does Near track my location?",
    a: "Near uses location to surface a task at the moment it matters, and never for advertising. Geofences run on your iPhone. Saved places, tasks, and arrival events sync so reminders and household sharing work, and you can delete all of it at any time.",
  },
]

/* ── Page ──────────────────────────────────────────────────────── */

export default function HomePageClient() {
  useReveal()

  return (
    <main className="page">
      <TopNav home />
      <Hero />
      <ProofLine />
      <ThreeBeats />
      <HouseholdChapter />
      <MomentsSection />
      <QuietSection />
      <FAQSection />
      <FinalCTA />
      <SiteFooter />
    </main>
  )
}

/* ── Hero ──────────────────────────────────────────────────────────
   One headline, one sentence, one live product moment. The phone is
   locked to the arrival instant rather than cycling through screens:
   the benefit has to read before anyone reaches the body copy.      */

function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  /* The notification is on the phone in the served HTML, before any
     JavaScript runs - a visitor's first frame has to show the product doing
     the thing, not an empty screen that fills in later.

     The arrival animation is therefore a replay, not an entrance: it runs
     when the hero comes back into view after being scrolled away, so the
     magic is available again without ever being withheld. */
  const [replaying, setReplaying] = useState(false)
  const armed = useRef(false)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    let t: ReturnType<typeof setTimeout> | undefined
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) {
            armed.current = true
            return
          }
          if (!armed.current) return
          armed.current = false
          setReplaying(false)
          t = setTimeout(() => setReplaying(true), 60)
        }),
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => { io.disconnect(); if (t) clearTimeout(t) }
  }, [])

  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const onHeroMove = (e: ReactMouseEvent<HTMLElement>) => {
    const el = heroRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    posRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    if (rafRef.current != null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const el2 = heroRef.current
      if (!el2) return
      el2.style.setProperty("--cx", `${posRef.current.x}px`)
      el2.style.setProperty("--cy", `${posRef.current.y}px`)
    })
  }
  useEffect(() => () => { if (rafRef.current != null) cancelAnimationFrame(rafRef.current) }, [])

  return (
    <section className="hero" id="top" ref={heroRef} onMouseMove={onHeroMove}>
      <div className="heroDawn" aria-hidden="true" />
      <div className="heroCursorGlow hideOnMobile" aria-hidden="true" />
      <div className="heroInner">
        <div className="heroCopy">
          <h1 className="heroTitle">
            Never Forget
            <br />
            <em>Anything Again.</em>
          </h1>
          <p className="heroLead">
            Near remembers what you need and where you need it - then puts it
            on your Lock Screen the moment you arrive.
          </p>
          <div className="heroCtas">
            <DownloadCta className="btnPrimary" source="hero">Download Near</DownloadCta>
            <a className="btnGhost" href="#how-it-works">Watch it work</a>
          </div>
          <p className="heroMicro">
            {APP_IS_LIVE
              ? "Free for iPhone. No ads. Private by design."
              : "Coming to iPhone. Free, with no ads and no data brokers."}
          </p>
        </div>
        <div className="heroPhone">
          <div className={`arrivalRipple ${replaying ? "rippleOn" : ""}`} aria-hidden="true">
            <span /><span /><span />
          </div>
          <PhoneMockup phase={1} arrived={replaying} />
        </div>
      </div>
    </section>
  )
}

/* Which tab is active per phase: 0=Home, 1=lock+notif, 2=Places, 3=lock+notif */
const PHASE_ACTIVE_TAB = [0, -1, 1, 4] // 0=Home, -1=lock, 1=Places, 4=Household

const notifData = [
  null, // home screen
  { title: "Near", body: "You’re near Target - 1 item on your list" },
  null, // places screen
  { title: "Near", body: "Don’t forget: Stroller at Target, 1.2 mi away" },
  null, // household screen
]

function PhoneMockup({ phase, arrived = true }: { phase: number; arrived?: boolean }) {
  const activeTab = PHASE_ACTIVE_TAB[phase]
  const isLocked = phase === 1

  return (
    <div className={`phoneMockup ${arrived ? "hasArrived" : ""}`}>
      <div className="phoneDynamic" />
      <div className="phoneScreen">
        {/* Status bar */}
        <div className="phoneStatusBar">
          <span className="phoneTime">1:03</span>
          <div className="phoneStatusRight">
            <svg className="phoneSignal" width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0" y="8" width="3" height="3" rx="0.5" fill="var(--ink)"/>
              <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" fill="var(--ink)"/>
              <rect x="9" y="3" width="3" height="8" rx="0.5" fill="var(--ink)" opacity="0.3"/>
              <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="var(--ink)" opacity="0.3"/>
            </svg>
            <svg className="phoneWifi" width="15" height="12" viewBox="0 0 15 12" fill="none">
              <path d="M7.5 10.5C8.33 10.5 9 11.17 9 12C9 12.83 8.33 13.5 7.5 13.5C6.67 13.5 6 12.83 6 12C6 11.17 6.67 10.5 7.5 10.5Z" fill="var(--ink)" transform="translate(0,-2)"/>
              <path d="M4.23 8.27C5.12 7.38 6.31 6.93 7.5 6.93C8.69 6.93 9.88 7.38 10.77 8.27" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,-2)"/>
              <path d="M1.76 5.8C3.34 4.22 5.42 3.43 7.5 3.43C9.58 3.43 11.66 4.22 13.24 5.8" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,-2)"/>
            </svg>
            <div className="phoneBatt">
              <div className="phoneBattFill" />
            </div>
          </div>
        </div>

        {/* iOS-style notification banners */}
        {notifData.map((n, i) => n && (
          <div key={i} className={`phoneNotif ${phase === i && !isLocked ? "phoneNotifVisible" : ""}`}>
            <Image
              src={BRAND_ICON}
              alt=""
              width={36}
              height={36}
              className="phoneNotifAppIcon"
            />
            <div className="phoneNotifContent">
              <div className="phoneNotifTitle">{n.title}</div>
              <div className="phoneNotifBody">{n.body}</div>
            </div>
          </div>
        ))}

        {/* Phase 0: Home screen */}
        <div className={`phoneContent ${phase === 0 ? "phoneContentVisible" : ""}`}>
          <div className="phoneHomeHeader">
            <div className="phoneHomeHeaderLeft">
              <div className="phoneGreeting">Good morning, Reese</div>
              <div className="phoneHomeTitle">Let’s get things done.</div>
              <div className="phoneHomeSub">4 tasks &middot; 4 nearby</div>
            </div>
            <div className="phoneHomeHeaderRight">
              <div className="phoneHeaderBtn phoneSearchBtn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="rgba(30,50,80,0.4)" strokeWidth="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="rgba(30,50,80,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="phoneHeaderBtn phoneAvatarBtn">
                <span className="avatarEmoji">{String.fromCodePoint(0x1F469, 0x1F3FB)}</span>
              </div>
            </div>
          </div>

          <div className="phoneQuickAdd">
            <span className="phoneQuickAddPlus">+</span>
            <span className="phoneQuickAddText">Quick add</span>
            <svg className="phoneQuickAddMic" width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" fill="#8E8E93"/>
              <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="phoneRadarCard phoneRadarCardShimmer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="rgba(30,50,80,0.5)" strokeWidth="1.5"/>
              <path d="M7.5 7.5A6.5 6.5 0 0112 5.5a6.5 6.5 0 014.5 2M4.5 4.5A11 11 0 0112 2a11 11 0 017.5 2.5" stroke="rgba(30,50,80,0.5)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <span className="phoneRadarText">Places within 2 miles: 3</span>
            <div className="radarShimmer" />
          </div>

          <div className="phoneSectionLabel">
            <span className="phoneSectionDot" />
            CLOSEST TO YOU
          </div>
          <div className="phoneGroupList">
            <div className="phoneGroupItem phoneGroupItemGlass">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F3E0)}</span>
                <div className="phoneGroupInfo">
                  <span className="phoneGroupName">Home</span>
                  <span className="phoneGroupDist">50 ft</span>
                </div>
                <span className="phoneBadge">2</span>
              </div>
              <div className="phoneGroupTasks">
                <div className="phoneGroupTaskRow">
                  <span className="phoneTaskCheck" />
                  <span className="phoneGroupTaskText">Water the plants</span>
                  <span className="phoneTaskDot phoneTaskDotOrange" />
                </div>
                <div className="phoneGroupTaskRow">
                  <span className="phoneTaskCheck" />
                  <span className="phoneGroupTaskText">Take out recycling</span>
                  <span className="phoneTaskDot phoneTaskDotRed" />
                </div>
              </div>
            </div>
            <div className="phoneGroupItem phoneGroupItemGlass">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F3AF)}</span>
                <div className="phoneGroupInfo">
                  <span className="phoneGroupName">Target</span>
                  <span className="phoneGroupDist">1.2 mi</span>
                </div>
                <span className="phoneBadge">1</span>
              </div>
              <div className="phoneGroupTasks">
                <div className="phoneGroupTaskRow">
                  <span className="phoneTaskCheck" />
                  <span className="phoneGroupTaskText">Stroller</span>
                  <span className="phoneTaskDot phoneTaskDotOrange" />
                </div>
              </div>
            </div>
            <div className="phoneGroupItem phoneGroupItemGlass">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F6D2)}</span>
                <div className="phoneGroupInfo">
                  <span className="phoneGroupName">Harris Teeter</span>
                  <span className="phoneGroupDist">1.4 mi</span>
                </div>
                <span className="phoneBadge">1</span>
              </div>
              <div className="phoneGroupTasks">
                <div className="phoneGroupTaskRow">
                  <span className="phoneTaskCheck" />
                  <span className="phoneGroupTaskText">Grocery</span>
                  <span className="phoneTaskDot phoneTaskDotOrange" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Places screen */}
        <div className={`phoneContent ${phase === 2 ? "phoneContentVisible" : ""}`}>
          <div className="phoneHomeHeader">
            <div className="phoneHomeHeaderLeft">
              <div className="phoneHomeTitle phonePlacesTitle">Your spots.</div>
              <div className="phoneHomeSub">4 tasks across 3 places</div>
            </div>
            <div className="phoneHomeHeaderRight">
              <div className="phoneHeaderBtn phoneMapBtn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" stroke="rgba(30,50,80,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2v16M16 6v16" stroke="rgba(30,50,80,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="phoneFilterChips">
            <span className="phoneChip phoneChipActive">All</span>
            <span className="phoneChip">Grocery</span>
            <span className="phoneChip">Home</span>
            <span className="phoneChip">Other</span>
          </div>
          {/* The mock is the site's proof, so it only shows what is
              confirmed. See app/site/features.ts - flip this capability to
              live and the card comes back. */}
          {isLive("game-plan") && (
            <div className="phoneGamePlan">
              <div className="phoneGamePlanIcon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="phoneGamePlanInfo">
                <span className="phoneGamePlanTitle">Game plan</span>
                <span className="phoneGamePlanSub">Optimal route for 3 stops</span>
              </div>
              <div className="phoneGamePlanArrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          )}

          <div className="phoneSectionLabel">MY PLACES</div>
          <div className="phoneGroupList">
            <div className="phoneGroupItem phoneGroupItemGlass phonePlaceCard">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F3E0)}</span>
                <div className="phoneGroupInfo">
                  <div className="phonePlaceNameRow">
                    <span className="phoneGroupName">Home</span>
                    <span className="phonePlaceTag">NEAREST</span>
                  </div>
                  <span className="phonePlaceAddr">1815 Shoremeade Rd...</span>
                </div>
                <span className="phonePlaceDist">50 ft</span>
                <span className="phoneBadge">2</span>
              </div>
              <div className="phonePlaceTags">
                <span className="phonePlaceTaskTag">Water the plants</span>
                <span className="phonePlaceTaskTag">Take out recycling</span>
              </div>
            </div>
            <div className="phoneGroupItem phoneGroupItemGlass phonePlaceCard">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F3AF)}</span>
                <div className="phoneGroupInfo">
                  <span className="phoneGroupName">Target</span>
                  <span className="phonePlaceAddr">1300 Long Grove Dr...</span>
                </div>
                <span className="phonePlaceDist">1.2 mi</span>
                <span className="phoneBadge phoneBadgeBlue">1</span>
              </div>
              <div className="phonePlaceTags">
                <span className="phonePlaceTaskTag">Stroller</span>
              </div>
            </div>
            <div className="phoneGroupItem phoneGroupItemGlass phonePlaceCard">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F6D2)}</span>
                <div className="phoneGroupInfo">
                  <span className="phoneGroupName">Harris Teeter</span>
                  <span className="phonePlaceAddr">2195 Tea Planters Ln...</span>
                </div>
                <span className="phonePlaceDist">1.4 mi</span>
                <span className="phoneBadge">1</span>
              </div>
              <div className="phonePlaceTags">
                <span className="phonePlaceTaskTag">Grocery</span>
              </div>
            </div>
          </div>
          <div className="phoneAddPlace">
            <span className="phoneAddPlaceIcon">+</span>
            <span className="phoneAddPlaceText">Add a place</span>
          </div>
        </div>

        {/* Phase 3: Household screen */}
        <div className={`phoneContent ${phase === 3 ? "phoneContentVisible" : ""}`}>
          <div className="phoneHomeTitle">Household</div>
          <div className="hhProfile">
            <div className="hhAvatar">
              <span style={{fontSize: "22px"}}>{String.fromCodePoint(0x1F469, 0x1F3FB)}</span>
            </div>
            <div className="hhProfileName">Reese</div>
            <div className="hhProfileSub">4 shared things waiting &middot; Closest helper: Reese</div>
          </div>
          <div className="phoneSectionLabel">WHO’S NEAR SOMETHING</div>
          <div className="phoneGroupItem phoneGroupItemGlass hhNearCard">
            <div className="hhNearHeader">
              <div className="hhNearAvatar">
                <span style={{fontSize: "16px"}}>{String.fromCodePoint(0x1F469, 0x1F3FB)}</span>
              </div>
              <div className="hhNearInfo">
                <div className="hhNearTitle">You’re near Home</div>
                <div className="hhNearSub">2 things waiting &middot; 50 ft</div>
              </div>
            </div>
            <div className="hhNearTasks">
              <div className="phoneGroupTaskRow">
                <span className="phoneTaskCheck" />
                <span className="phoneGroupTaskText">Water the plants</span>
              </div>
              <div className="phoneGroupTaskRow">
                <span className="phoneTaskCheck" />
                <span className="phoneGroupTaskText">Take out recycling</span>
              </div>
            </div>
            <div className="hhViewTasks">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>View tasks</span>
            </div>
          </div>
          <div className="phoneSectionLabel">PLACES WITH TASKS</div>
          <div className="phoneGroupList">
            <div className="phoneGroupItem phoneGroupItemGlass hhPlaceRow">
              <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F3E0)}</span>
              <div className="hhPlaceInfo">
                <span className="phoneGroupName">Home</span>
                <span className="hhPlaceTasksText">Water the plants &middot; Take out recycling</span>
              </div>
              <span className="phoneBadge">2</span>
            </div>
            <div className="phoneGroupItem phoneGroupItemGlass hhPlaceRow">
              <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F3AF)}</span>
              <div className="hhPlaceInfo">
                <span className="phoneGroupName">Target</span>
                <span className="hhPlaceTasksText">Stroller</span>
              </div>
              <span className="phoneBadge">1</span>
            </div>
            <div className="phoneGroupItem phoneGroupItemGlass hhPlaceRow">
              <span className="phoneGroupEmoji">{String.fromCodePoint(0x1F6D2)}</span>
              <div className="hhPlaceInfo">
                <span className="phoneGroupName">Harris Teeter</span>
                <span className="hhPlaceTasksText">Grocery</span>
              </div>
              <span className="phoneBadge">1</span>
            </div>
          </div>
          <div className="phoneSectionLabel">ACTIVITY</div>
          <div className="phoneGroupItem phoneGroupItemGlass hhActivityRow">
            <span style={{fontSize: "14px"}}>{String.fromCodePoint(0x1F9D1, 0x1F3FB)}</span>
            <div className="hhActivityText"><strong>Someone</strong> <span style={{color: "rgba(30,50,80,0.45)"}}>added</span> <strong>Water the plants</strong></div>
          </div>
        </div>

        {/* Lock screen overlay */}
        <div className={`phoneLockOverlay ${isLocked ? "phoneLockVisible" : ""}`}>
          {/* Wallpaper scene layers */}
          <div className="lockWallpaper">
            <div className="lockSky" />
            <div className="lockMountainBack" />
            <div className="lockMountainFront" />
            <div className="lockWater" />
            <div className="lockWaterShimmer" />
            <div className="lockCloudDrift lockCloud1" />
            <div className="lockCloudDrift lockCloud2" />
          </div>
          <div className="lockTimeDisplay">1:03</div>
          <div className="lockDateDisplay">Saturday, March 15</div>
          {/* Glowing proximity card on lock screen */}
          <div className="lockProximityCard">
            <div className="lockProximityGlow" />
            <div className="lockProximityHeader">
              <Image
                src={BRAND_ICON}
                alt=""
                width={28}
                height={28}
                className="lockNotifIcon"
              />
              <div className="lockProximityTitleArea">
                <div className="lockProximityLabel">NEAR</div>
                <div className="lockProximityTitle">You’re at Target</div>
                <div className="lockProximitySub">2 things you needed</div>
              </div>
            </div>
            <div className="lockTaskList">
              <div className="lockTaskItem lockTaskItem1">
                <div className="lockTaskCheck" />
                <span className="lockTaskText">Diapers</span>
                <span className="lockTaskPriority lockTaskPriorityOrange" />
              </div>
              <div className="lockTaskItem lockTaskItem2">
                <div className="lockTaskCheck" />
                <span className="lockTaskText">Paper towels</span>
                <span className="lockTaskPriority lockTaskPriorityRed" />
              </div>
            </div>
            <div className="lockProximityShimmer" />
          </div>
          <div className="lockFlashlightBtn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 18h6M10 22h4M12 2v1M4.22 4.22l.71.71M1 12h1M4.22 19.78l.71-.71M20.07 4.93l-.71.71M23 12h-1M19.78 19.78l-.71-.71" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="lockCameraBtn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="lockHomeBar" />
        </div>

        {/* Tab bar */}
        <div className={`phoneTabBar ${isLocked ? "phoneTabBarHidden" : ""}`}>
          <div className={`phoneTab ${activeTab === 0 ? "phoneTabActive" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {activeTab === 0 ? (
                <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" fill="var(--blue)" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
            <span>Home</span>
          </div>
          <div className={`phoneTab ${activeTab === 1 ? "phoneTabActive" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {activeTab === 1 ? (
                <>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="var(--blue)"/>
                  <circle cx="12" cy="9" r="2.5" fill="white"/>
                </>
              ) : (
                <>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#8E8E93" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="9" r="2.5" stroke="#8E8E93" strokeWidth="1.5" fill="none"/>
                </>
              )}
            </svg>
            <span>Places</span>
          </div>
          <div className="phoneTab phoneTabAdd">
            <div className="phoneAddBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className={`phoneTab ${activeTab === 3 ? "phoneTabActive" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke={activeTab === 3 ? "var(--blue)" : "#8E8E93"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span>Saved</span>
          </div>
          <div className={`phoneTab ${activeTab === 4 ? "phoneTabActive" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke={activeTab === 4 ? "var(--blue)" : "#8E8E93"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Household</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="phoneHomeIndicator">
          <div className="phoneHomeBar" />
        </div>
      </div>
    </div>
  )
}


/* ── Proof ─────────────────────────────────────────────────────── */

function ProofLine() {
  return (
    <section className="proof" aria-label="What people say">
      <div className="reveal proofInner">
        <blockquote className="proofQuote">
          &ldquo;The first app that remembers the errand for me.
          I just show up, and it&rsquo;s there.&rdquo;
        </blockquote>
        <cite className="proofName">Lindsay &middot; Near on iPhone</cite>
      </div>
    </section>
  )
}

/* ── The product, in three beats ───────────────────────────────── */

function ThreeBeats() {
  return (
    <section className="chapter chapterSunk" id="how-it-works">
      <div className="reveal shell">
        <div className="centeredHead">
          <p className="eyebrow">How it works</p>
          <h2 className="h2 h2Center">Three steps. Then never again.</h2>
        </div>
        <ol className="beatGrid">
          {beats.map((b, i) => (
            <li className="beat" key={b.step} data-stagger>
              <span className="beatStep">{b.step}</span>
              <h3 className="beatTitle">{b.title}</h3>
              <div className="beatVisual">
                <BeatVisual kind={b.visual} />
                {i < beats.length - 1 && <span className="beatLink" aria-hidden="true" />}
              </div>
              <p className="beatBody">{b.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── Household ─────────────────────────────────────────────────── */

/* Beat visuals: spoken words, then the mark, then the Lock Screen.
   Gold is Near's own voice, so it carries the whole sequence. */

function BeatVisual({ kind }: { kind: "voice" | "sphere" | "arrive" }) {
  if (kind === "voice") {
    return <VoiceWave quote="Paper towels at Target." />
  }

  if (kind === "sphere") {
    return (
      <div className="vizSphere" aria-hidden="true">
        <span className="vizRing vizRing1" />
        <span className="vizRing vizRing2" />
        <span className="vizRing vizRing3" />
        <span className="vizCore" />
      </div>
    )
  }

  return (
    <div className="vizArrive">
      <div className="vizNotif">
        <div className="vizNotifIcon">
          <Image src={BRAND_ICON} alt="" width={24} height={24} />
        </div>
        <div>
          <div className="vizNotifLabel">Near &middot; now</div>
          <div className="vizNotifTitle">You&rsquo;re at Target</div>
          <div className="vizNotifSub">Paper towels</div>
        </div>
      </div>
    </div>
  )
}

function HouseholdChapter() {
  return (
    <section className="chapter chapterNight" id="household">
      <div className="skyWash skyWashWarm" aria-hidden="true" />
      <div className="reveal shell split">
        <div className="splitCopy">
          <p className="eyebrow">For households</p>
          <h2 className="h2">
            One less thing to
            <br />
            <em>remind each other.</em>
          </h2>
          <p className="lead">
            Add something once. When the right person reaches the right place,
            Near handles the rest.
          </p>
          <p className="caption">Start on your own. Better together.</p>
        </div>
        <div className="splitVisual">
          <HouseholdPair
            items={sharedList}
            listTitle="Weekend list"
            sharedWith="Shared with Brian"
            arrivalTitle="You’re at Kroger"
            arrivalSub="3 things on the shared list"
            ownerLabel="Your iPhone"
            peerLabel="Brian’s iPhone"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Everyday moments ──────────────────────────────────────────── */

function MomentsSection() {
  const [active, setActive] = useState(0)
  const rows = useRef<Array<HTMLLIElement | null>>([])

  /* A band across the middle of the viewport decides which moment is live.
     Whichever row is crossing it owns the phone. */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const i = rows.current.indexOf(entry.target as HTMLLIElement)
          if (i >= 0) setActive(i)
        })
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    )
    rows.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const scene = momentScenes[active]

  return (
    <section className={`chapter everyday everyday--${scene.sky}`} id="everyday">
      <div className="everydayTint" aria-hidden="true" />
      <div className="shell everydayShell">
        <div className="everydayMain">
          <div className="everydayCopy reveal">
            <p className="eyebrow">Every day</p>
            <h2 className="h2">The little things stop slipping through.</h2>
          </div>

          <ol className="everydayList">
            {momentScenes.map((m, i) => (
              <li
                key={m.id}
                ref={(el) => {
                  rows.current[i] = el
                }}
                className={`everydayRow ${i === active ? "everydayRowOn" : ""}`}
              >
                <span className="everydayRule" aria-hidden="true" />
                <span className={`placeGlyph placeGlyph--${m.tone}`} aria-hidden="true" />
                <span className="everydayLine">{m.line}</span>
                <span className="everydayHour">{m.clock}</span>

                {/* The phone does not fit beside a phone, so small screens
                    get the arrival inline instead. */}
                <span className="momentMini" aria-hidden="true">
                  <span className="momentMiniIcon">
                    <Image src={BRAND_ICON} alt="" width={20} height={20} />
                  </span>
                  <span className="momentMiniText">
                    <span className="momentMiniTitle">{m.title}</span>
                    <span className="momentMiniSub">{m.items.join(", ")}</span>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="everydayPhoneCol" aria-hidden="true">
          <div className="everydayPhoneStick">
            <ArrivalPhone scene={scene} live />
            <div className="everydayDots">
              {momentScenes.map((m, i) => (
                <span key={m.id} className={i === active ? "everydayDotOn" : ""} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Quiet and private ─────────────────────────────────────────── */

function QuietSection() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3)

  const pledges = ["No ads", "No data brokers", "No productivity guilt"]

  return (
    <section className="chapter chapterSunk">
      <div className="shell split splitReverse" ref={ref}>
        <div className="splitVisual">
          <div className={`quietPhone ${inView ? "quietPhoneOn" : ""}`}>
            <span className="quietHalo" aria-hidden="true" />
            <div className="arrShell">
              <div className="arrScreen arrScreenQuiet">
                <div className="arrSky" aria-hidden="true" />
                <div className="arrStatus" aria-hidden="true">
                  <span>9:41</span>
                  <span className="arrStatusRight">
                    <span className="arrBars" />
                    <span className="arrBatt" />
                  </span>
                </div>

                <div className="quietLock" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="13" y="22" width="22" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M18.5 22v-5.5a5.5 5.5 0 0 1 11 0V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="24" cy="30.5" r="2" fill="currentColor" />
                  </svg>
                </div>

                <div className="quietCard">
                  <div className="quietCardLabel">Arrival detection runs on your iPhone</div>
                  <ul className="quietPledges">
                    {pledges.map((p, i) => (
                      <li key={p} style={{ animationDelay: `${0.35 + i * 0.22}s` }}>
                        <span className="quietTick" aria-hidden="true">
                          <svg viewBox="0 0 16 16" fill="none">
                            <path d="m4 8.3 2.7 2.7L12 5.6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="splitCopy reveal">
          <p className="eyebrow">Quiet by design</p>
          <h2 className="h2">
            Helpful when it matters.
            <br />
            <em>Invisible when it doesn&rsquo;t.</em>
          </h2>
          <p className="lead">
            Near uses location to deliver your reminders - not to sell ads,
            build a profile, or follow your day.
          </p>
          <p className="caption">Geofences run on your iPhone. Delete everything, any time.</p>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ───────────────────────────────────────────────────────── */

function FAQSection() {
  return (
    <section className="chapter chapterTight" id="faq">
      <div className="reveal shell narrow">
        <h2 className="h3Quiet">Questions, answered</h2>
        <div className="faqList">
          {faqItems.map((item) => (
            <details className="faqItem" key={item.q}>
              <summary className="faqQ">{item.q}</summary>
              <p className="faqA">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Close ─────────────────────────────────────────────────────── */
