"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react"

import { APP_IS_LIVE } from "./site/launch"
import { isLive } from "./site/features"
import { faqItems } from "./site/faq"
import {
  ArrivalPhone,
  BRAND_ICON,
  DownloadCta,
  HouseholdPair,
  FinalCTA,
  SiteFooter,
  TopNav,
  useInView,
  usePrefersReducedMotion,
  useReveal,
} from "./site/chrome"


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
    line: "Groceries. Without the second trip.",
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
    line: "That return has lived in your car long enough.",
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
    line: "The prescription, while you are already standing there.",
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
    line: "The question you always remember in the parking lot.",
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
    line: "The things you meant to do the second you got in.",
    clock: "6:38",
    day: "Tuesday, March 17",
    title: "You\u2019re home",
    sub: "2 things waiting",
    items: ["Water the plants", "Take out recycling"],
  },
] as const


/* ── Page ──────────────────────────────────────────────────────── */

export default function HomePageClient() {
  useReveal()

  return (
    <main className="page">
      <TopNav home />
      <Hero />
      <ProofLine />
      <ProblemSection />
      <ProductDemo />
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
            Add what you need and where you need it. Near reminds you on your
            Lock Screen when you arrive.
          </p>
          <div className="heroCtas">
            <DownloadCta className="btnPrimary" source="hero">Download Near</DownloadCta>
            <a className="btnGhost" href="#demo">Watch it work</a>
          </div>
          <p className="heroMicro">
            {APP_IS_LIVE
              ? "Free for iPhone. No ads. Private by design."
              : "Coming to iPhone. Core reminders are free. No ads."}
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


/* ── The problem ────────────────────────────────────────────────────

   The site used to explain the mechanism twice: a four-beat demo, then a
   three-step section saying the same thing in words. The demo won, and the
   space the three steps were taking goes here instead.

   The pain Near removes is not a badly organised list. It is remembering at
   the wrong moment, which is a thing everyone has done this week. */

const tooLate = [
  { thing: "The milk", when: "after you unpacked the groceries." },
  { thing: "The return", when: "after you passed the drop-off." },
  { thing: "The question", when: "after you left the appointment." },
]

function ProblemSection() {
  return (
    <section className="chapter chapterSunk" id="problem">
      <div className="reveal shell narrow center">
        <p className="eyebrow">The problem</p>
        <h2 className="h2 h2Center">
          You remembered.
          <br />
          <em>Just a little too late.</em>
        </h2>
        <ul className="lateList">
          {tooLate.map((t) => (
            <li className="lateRow" key={t.thing} data-stagger>
              <span className="lateThing">{t.thing},</span>{" "}
              <span className="lateWhen">{t.when}</span>
            </li>
          ))}
        </ul>
        <p className="lead leadCenter lateTurn">
          Near brings up what you saved when you reach the place you need it.
        </p>
      </div>
    </section>
  )
}

/* ── Household ─────────────────────────────────────────────────── */


function HouseholdChapter() {
  return (
    <section className="chapter chapterNight" id="household">
      <div className="skyWash skyWashWarm" aria-hidden="true" />
      <div className="reveal shell split">
        <div className="splitCopy">
          <p className="eyebrow">For households</p>
          <h2 className="h2">
            Share the list.
            <br />
            <em>Skip the follow-up.</em>
          </h2>
          {/* Every clause checked against the backend before it was written.
              Arrivals count pending tasks household-wide, so whoever walks in
              gets them; tasks are fetched where:{householdId}, so a check-off
              is one row and both people see it. */}
          <p className="lead">
            You add milk at home. Your partner gets the reminder at the store.
            When either of you checks it off, the shared list updates for both.
          </p>
          <p className="caption">
            Start on your own. Share with your household whenever you&rsquo;re ready.
          </p>
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
            <h2 className="h2">For all the things you meant to do.</h2>
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

/* ── The demo ──────────────────────────────────────────────────────

   "Watch it work" used to scroll to a section that explained how it works,
   which is a button that lies. This is the thing it promised.

   One item and one store the whole way through: milk, Harris Teeter. Four
   beats, about nine seconds, and the last one is the payoff.

   The resting beat is the LAST one, so the served HTML already contains the
   proof - the Lock Screen with the milk on it. Playing is a replay, the same
   rule the hero follows. The rail below spells all four steps out in text, so
   the sequence reads even if nothing ever moves. */

const DEMO_BEATS = [
  {
    id: "say",
    label: "Add it",
    caption: "Speak it or type it while it is on your mind.",
    hold: 2400,
  },
  {
    id: "place",
    label: "Check the place",
    caption: "Near attaches it to Harris Teeter. Change it if that is the wrong store.",
    hold: 2600,
  },
  {
    id: "keep",
    label: "Forget it",
    caption: "That is the point. You get on with your week.",
    hold: 1800,
  },
  {
    id: "arrive",
    label: "Get reminded there",
    caption: "Your list is waiting when you arrive.",
    hold: 0,
  },
] as const

const LAST_BEAT = DEMO_BEATS.length - 1

function ProductDemo() {
  const reduced = usePrefersReducedMotion()
  const [beat, setBeat] = useState(LAST_BEAT)
  const [playing, setPlaying] = useState(false)
  const started = useRef(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  /* Plays itself once, the first time it is looked at. After that it is
     whatever the visitor last left it on. */
  useEffect(() => {
    const el = sectionRef.current
    if (!el || reduced) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return
        started.current = true
        setBeat(0)
        setPlaying(true)
        io.disconnect()
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  /* Derived rather than stored, so reaching the last beat never has to call
     setState from inside the effect that advanced it. */
  const running = playing && beat < LAST_BEAT

  useEffect(() => {
    if (!running) return
    const t = window.setTimeout(() => setBeat((b) => b + 1), DEMO_BEATS[beat].hold)
    return () => window.clearTimeout(t)
  }, [running, beat])

  const replay = () => {
    started.current = true
    setBeat(0)
    setPlaying(true)
  }

  const current = DEMO_BEATS[beat]

  return (
    <section className="chapter chapterTight" id="demo" ref={sectionRef}>
      <div className="reveal shell">
        <div className="centeredHead">
          <p className="eyebrow">Watch it work</p>
          <h2 className="h2 h2Center">The milk shouldn&rsquo;t need a second trip.</h2>
          <p className="lead leadCenter demoLead">
            Add &ldquo;Milk at Harris Teeter.&rdquo; Near connects it to a store, and you
            can change the place if it picked the wrong one. When you arrive,
            your reminder is on your Lock Screen.
          </p>
        </div>

        <div className="dmStage">
          <div className="dmPhone">
            <div className="pairDevice">
              <span className="pairIsland" aria-hidden="true" />
              <div className={`pairScreen dmScreen dmScreen--${current.id}`}>
                <div className={`pairStatus ${beat >= 2 ? "pairStatusNight" : ""}`}>
                  <span>{beat >= 2 ? "5:12" : "9:41"}</span>
                  <span className="pairBatt" aria-hidden="true" />
                </div>

                {/* Beat 0 - the capture sheet */}
                <div className="dmPane dmPaneSay" aria-hidden={beat !== 0}>
                  <div className="dmMic">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="dmWave" aria-hidden="true">
                    {[38, 64, 92, 56, 100, 74, 46, 82, 40, 66].map((h, i) => (
                      <i key={i} style={{ height: h + "%", animationDelay: i * 80 + "ms" }} />
                    ))}
                  </div>
                  <p className="dmHeard">&ldquo;Milk at Harris Teeter&rdquo;</p>
                </div>

                {/* Beat 1 - where it landed, and how to change it */}
                <div className="dmPane dmPanePlace" aria-hidden={beat !== 1}>
                  <p className="dmAdded">Added</p>
                  <div className="dmTask">
                    <span className="dmTaskCheck" aria-hidden="true" />
                    <span className="dmTaskName">Milk</span>
                  </div>
                  <div className="dmPlaceRow">
                    <span className="dmPin" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
                        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                    <span className="dmPlaceName">
                      Harris Teeter
                      <i>0.8 mi</i>
                    </span>
                    <span className="dmChange">Change</span>
                  </div>
                </div>

                {/* Beats 2 and 3 - the same Lock Screen, one with the arrival */}
                <div className="dmPane dmPaneLock" aria-hidden={beat < 2}>
                  <div className="dmLockDate">Thursday, March 20</div>
                  <div className="dmLockTime">5:12</div>
                  <div className={`dmNotif ${beat === LAST_BEAT ? "dmNotifIn" : ""}`}>
                    <div className="dmNotifIcon">
                      <Image src={BRAND_ICON} alt="" width={26} height={26} />
                    </div>
                    <div className="dmNotifBody">
                      <div className="dmNotifLabel">Near &middot; now</div>
                      <div className="dmNotifTitle">You&rsquo;re at Harris Teeter</div>
                      <div className="dmNotifSub">Milk</div>
                    </div>
                  </div>
                </div>

                <span className={`pairHomeBar ${beat >= 2 ? "pairHomeBarNight" : ""}`} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="dmSide">
            <ol className="dmRail">
              {DEMO_BEATS.map((b, i) => (
                <li key={b.id}>
                  <button
                    type="button"
                    className={`dmRailBtn ${i === beat ? "dmRailOn" : ""} ${i < beat ? "dmRailDone" : ""}`}
                    onClick={() => {
                      started.current = true
                      setPlaying(false)
                      setBeat(i)
                    }}
                    aria-current={i === beat ? "step" : undefined}
                  >
                    <span className="dmRailNum">{i + 1}</span>
                    <span className="dmRailText">
                      <span className="dmRailLabel">{b.label}</span>
                      <span className="dmRailCaption">{b.caption}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="dmControls">
              <button type="button" className="dmCtrl" onClick={replay}>
                Replay
              </button>
              <button
                type="button"
                className="dmCtrl"
                onClick={() => setPlaying((p) => !p)}
                disabled={beat >= LAST_BEAT}
              >
                {running ? "Pause" : "Play"}
              </button>
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
          {/* Deliberately no serif here. The problem section took the page's
              third serif moment, and a flat statement suits this one. */}
          <h2 className="h2">
            Your errands are
            <br />
            your business.
          </h2>
          {/* The old line said Near does not "build a profile, or follow your
              day". The privacy policy says arrival events are stored on the
              server to track visit history, and that location history feeds
              personalization. Both cannot be true. The specific claim below is
              the one the policy supports, and it is the stronger one. */}
          <p className="lead">
            Your live route never leaves your iPhone. What syncs is what makes a
            reminder work: your places, your tasks, and the arrivals that fire
            them. Near sells none of it, and never uses it for ads.
          </p>
          <p className="caption">
            Delete everything, any time.{" "}
            <Link href="/privacy" className="quietLink">
              How Near uses your data
            </Link>
          </p>
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
