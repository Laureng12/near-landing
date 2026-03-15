"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

const KEY_SENTENCE =
  "Near is an ambient task intelligence system that surfaces errands, reminders, and household tasks automatically based on location."

function use3DEffects() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 720px)').matches
    const handleScroll = () => {
      if (isMobile) return
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const viewCenter = window.innerHeight / 2
        const offset = (center - viewCenter) * 0.04
        ;(el as HTMLElement).style.setProperty('--parallax-offset', `${offset}px`)
      })
    }

    const tiltCards = (e: MouseEvent) => {
      document.querySelectorAll('[data-tilt]').forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotateX = ((y - rect.height / 2) / rect.height) * 8
        const rotateY = ((x - rect.width / 2) / rect.width) * -8
        ;(card as HTMLElement).style.setProperty('--mx', `${rotateY}deg`)
        ;(card as HTMLElement).style.setProperty('--my', `${rotateX}deg`)
      })
    }

    const resetTilt = () => {
      document.querySelectorAll('[data-tilt]').forEach((card) => {
        ;(card as HTMLElement).style.setProperty('--mx', '0deg')
        ;(card as HTMLElement).style.setProperty('--my', '0deg')
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', tiltCards)
    window.addEventListener('mouseleave', resetTilt)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', tiltCards)
      window.removeEventListener('mouseleave', resetTilt)
    }
  }, [])
}

const ecosystemItems = [
  {
    icon: "\uD83D\uDCF1",
    title: "iPhone",
    description:
      "Tasks appear on your lock screen when you arrive.",
  },
  {
    icon: "\u231A",
    title: "Apple Watch",
    description:
      "A gentle tap when something nearby matters.",
  },
  {
    icon: "\uD83D\uDE97",
    title: "CarPlay",
    description:
      "Errands surface while you’re already on the road.",
  },
  {
    icon: "\uD83C\uDF10",
    title: "Siri & Maps",
    description:
      "Ask naturally. See tasks where places already live.",
  },
]

const placesUI = [
  { name: "Trader Joe’s", count: 4, emoji: "\uD83C\uDF4E" },
  { name: "Target", count: 2, emoji: "\uD83C\uDFAF" },
  { name: "Home", count: 3, emoji: "\uD83C\uDFE0" },
  { name: "Walgreens", count: 1, emoji: "\uD83D\uDC8A" },
]

const faqItems = [
  {
    q: "What is a location-based reminder?",
    a: "A location-based reminder is a task that appears when you arrive at or pass a specific place. Near uses location awareness to automatically show errands and reminders when they become relevant.",
  },
  {
    q: "How does Near know when I arrive somewhere?",
    a: "Near uses iPhone location services to detect when you arrive at a location such as a grocery store, pharmacy, or home. When you reach that location, the relevant tasks appear automatically.",
  },
  {
    q: "Can Near share grocery lists with family members?",
    a: "Yes. Near supports shared household lists so anyone in the household can add items. When someone is near the store, they receive the reminder.",
  },
  {
    q: "Does Near track my location?",
    a: "No. Near uses location only to show tasks when they matter. Data stays on your device and is never used for advertising.",
  },
]

/* âââ Page âââ */

export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed")
          // Stagger children with data-stagger attribute
          const children = e.target.querySelectorAll('[data-stagger]')
          children.forEach((child, i) => {
            ;(child as HTMLElement).style.transitionDelay = `${i * 120}ms`
            child.classList.add('staggered')
          })
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  use3DEffects()

  return (
    <main className="page">
      <TopNav />
      <Hero />
      <AIDefinition />
      <ArriveSection />
      <PassingBySection />
      <EcosystemSection />
      <SimplerInterface />
      <NaturalInput />
      <HouseholdSection />
      <MapsSection />
      <CalmTechnology />
      <PrivacySection />
      <PhilosophySection />
      <FAQSection />
      <FinalCTA />
      <footer className="siteFooter">
        <div className="footerInner">
          <span className="footerCopy">Near &copy; 2026 Rise-X, Inc. All rights reserved.</span>
          <nav className="footerLinks">
            <a href="/terms" className="footerLink">Terms &amp; Conditions</a>
            <a href="/privacy" className="footerLink">Privacy Policy</a>
          </nav>
        </div>
      </footer>
      <SiteStyles />
    </main>
  )
}

/* âââ Nav âââ */

function TopNav() {
  return (
    <header className="nav">
      <div className="navInner">
        <a className="brand" href="#top">
          <Image
            src="/near-logo-light-cropped.png"
            alt="Near"
            className="brandLogo"
            width={777}
            height={305}
            priority
            quality={100}
          />
        </a>
        <nav className="navLinks" aria-label="Primary">
          <a className="navLink hideOnMobile" href="#how-it-works">How it works</a>
          <a className="navLink hideOnMobile" href="#household">Household</a>
          <a className="navLink hideOnMobile" href="/features">Features</a>
          <a className="navCta" href={APP_STORE_URL}>Download</a>
        </nav>
      </div>
    </header>
  )
}

/* âââ Hero (auto-cycling phases) âââ */

const PHASE_NAMES = ["home", "lock-notif", "places", "household"] as const
const PHASE_DURATION = 3200 // ms per phase

const phaseTexts = [
  "Near surfaces errands, groceries, and tasks when you arrive where they matter. Seize the day.",
  "Arrive at the store. Your list is already there.",
  "Tap into a place and see exactly what you need. One store, one list.",
  "Even home has a list. Near remembers so you don’t have to.",
]

function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => (p + 1) % PHASE_NAMES.length)
    }, PHASE_DURATION)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="heroGlow" />
      <div className="heroSplit">
        <div className="heroCopy">
          <Image
            src="/near-icon-hero.png"
            alt="Near app icon"
            className="heroIcon"
            width={861}
            height={891}
            priority
            quality={100}
            unoptimized
          />
          <span className="eyebrow">Ambient task intelligence</span>
          <h1 className="heroTitle">
            Never Forget<br /><span className="gradientText">Anything Again.</span>
          </h1>
          <p className="heroSub">
            The right task. At the right place.
          </p>
          <div className="heroPhases">
            {phaseTexts.map((text, i) => (
              <p key={i} className={`heroPhaseText ${phase === i ? "phaseVisible" : ""}`}>
                {text}
              </p>
            ))}
          </div>
          <div className="heroCtas">
            <a className="primaryBtn" href={APP_STORE_URL}>Download on the App Store</a>
            <a className="secondaryBtn" href="#how-it-works">See how it works</a>
          </div>
        </div>
        <div className="heroPhone">
          <PhoneMockup phase={phase} />
        </div>
      </div>
    </section>
  )
}

/* --- Phone Mockup (auto-cycling phases) --- */

/* Which tab is active per phase: 0=Home, 1=lock+notif, 2=Places, 3=lock+notif */
const PHASE_ACTIVE_TAB = [0, -1, 1, 4] // 0=Home, -1=lock, 1=Places, 4=Household

const notifData = [
  null, // home screen
  { title: "Near", body: "You’re near Target — 1 item on your list" },
  null, // places screen
  { title: "Near", body: "Don’t forget: Stroller at Target, 1.2 mi away" },
  null, // household screen
]

function PhoneMockup({ phase }: { phase: number }) {
  const activeTab = PHASE_ACTIVE_TAB[phase]
  const isLocked = phase === 1

  return (
    <div className="phoneMockup">
      <div className="phoneDynamic" />
      <div className="phoneScreen">
        {/* Status bar */}
        <div className="phoneStatusBar">
          <span className="phoneTime">1:03</span>
          <div className="phoneStatusRight">
            <svg className="phoneSignal" width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0" y="8" width="3" height="3" rx="0.5" fill="#1D1D1F"/>
              <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" fill="#1D1D1F"/>
              <rect x="9" y="3" width="3" height="8" rx="0.5" fill="#1D1D1F" opacity="0.3"/>
              <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="#1D1D1F" opacity="0.3"/>
            </svg>
            <svg className="phoneWifi" width="15" height="12" viewBox="0 0 15 12" fill="none">
              <path d="M7.5 10.5C8.33 10.5 9 11.17 9 12C9 12.83 8.33 13.5 7.5 13.5C6.67 13.5 6 12.83 6 12C6 11.17 6.67 10.5 7.5 10.5Z" fill="#1D1D1F" transform="translate(0,-2)"/>
              <path d="M4.23 8.27C5.12 7.38 6.31 6.93 7.5 6.93C8.69 6.93 9.88 7.38 10.77 8.27" stroke="#1D1D1F" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,-2)"/>
              <path d="M1.76 5.8C3.34 4.22 5.42 3.43 7.5 3.43C9.58 3.43 11.66 4.22 13.24 5.8" stroke="#1D1D1F" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,-2)"/>
            </svg>
            <div className="phoneBatt">
              <div className="phoneBattFill" />
            </div>
          </div>
        </div>

        {/* iOS-style notification banners */}
        {notifData.map((n, i) => n && (
          <div key={i} className={`phoneNotif ${phase === i ? "phoneNotifVisible" : ""}`}>
            <Image
              src="/near-icon-hero.png"
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
                  <span className="phoneGroupTaskText">Gift for mom</span>
                  <span className="phoneTaskDot phoneTaskDotOrange" />
                </div>
                <div className="phoneGroupTaskRow">
                  <span className="phoneTaskCheck" />
                  <span className="phoneGroupTaskText">Pick up dry cleaning</span>
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
                <span className="phonePlaceTaskTag">Gift for mom</span>
                <span className="phonePlaceTaskTag">Pick up dry cleaning</span>
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
                <span className="phoneGroupTaskText">Gift for mom</span>
              </div>
              <div className="phoneGroupTaskRow">
                <span className="phoneTaskCheck" />
                <span className="phoneGroupTaskText">Pick up dry cleaning</span>
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
                <span className="hhPlaceTasksText">Gift for mom &middot; Pick up dry cleaning</span>
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
            <div className="hhActivityText"><strong>Someone</strong> <span style={{color: "rgba(30,50,80,0.45)"}}>added</span> <strong>Gift for mom</strong></div>
          </div>
        </div>

        {/* Lock screen overlay — mountain lake wallpaper */}
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
                src="/near-icon-hero.png"
                alt=""
                width={28}
                height={28}
                className="lockNotifIcon"
              />
              <div className="lockProximityTitleArea">
                <div className="lockProximityLabel">NEAR</div>
                <div className="lockProximityTitle">You’re near Target</div>
                <div className="lockProximitySub">1.2 mi · 2 items on your list</div>
              </div>
            </div>
            <div className="lockTaskList">
              <div className="lockTaskItem lockTaskItem1">
                <div className="lockTaskCheck" />
                <span className="lockTaskText">Stroller</span>
                <span className="lockTaskPriority lockTaskPriorityOrange" />
              </div>
              <div className="lockTaskItem lockTaskItem2">
                <div className="lockTaskCheck" />
                <span className="lockTaskText">Diapers</span>
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
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
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

/* âââ AI Definition âââ */

function AIDefinition() {
  return (
    <section className="section sectionSurface sectionMagic" id="what-is-near">
      <div className="magicOrb magicOrb1" />
      <div className="magicOrb magicOrb2" />
      <div className="magicOrb magicOrb3" />
      <div className="magicAurora" />
      <div className="reveal sectionShell narrow" style={{position: 'relative', zIndex: 2}}>
        <h2 className="sectionTitle" data-parallax>What is <span className="gradientText">Near</span>?</h2>
        <p className="bodyText">{KEY_SENTENCE}</p>
        <p className="bodyText">
          Instead of checking lists or setting timers, tasks appear when you arrive at the places where they can actually be completed.
        </p>
        <div className="aiFeatureCards">
          <div className="aiFeatureCard" data-tilt data-stagger>
            <div className="aiFeatureIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="url(#aiGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs><linearGradient id="aiGrad1" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#2F6DFF"/><stop offset="1" stopColor="#C74BF6"/></linearGradient></defs>
              </svg>
            </div>
            <div className="aiFeatureLabel">At the store</div>
            <div className="aiFeatureDesc">Groceries appear when you arrive at the grocery store</div>
          </div>
          <div className="aiFeatureCard" data-tilt data-stagger>
            <div className="aiFeatureIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="url(#aiGrad2)" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="9" r="2.5" stroke="url(#aiGrad2)" strokeWidth="1.5" fill="none"/>
                <defs><linearGradient id="aiGrad2" x1="5" y1="2" x2="19" y2="22"><stop stopColor="#5B8DEF"/><stop offset="1" stopColor="#FF6B8A"/></linearGradient></defs>
              </svg>
            </div>
            <div className="aiFeatureLabel">Passing by</div>
            <div className="aiFeatureDesc">Errand reminders surface when you pass a store</div>
          </div>
          <div className="aiFeatureCard" data-tilt data-stagger>
            <div className="aiFeatureIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" stroke="url(#aiGrad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs><linearGradient id="aiGrad3" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#7B5CFF"/><stop offset="1" stopColor="#FFB347"/></linearGradient></defs>
              </svg>
            </div>
            <div className="aiFeatureLabel">Arriving home</div>
            <div className="aiFeatureDesc">Home tasks appear the moment you walk through the door</div>
          </div>
        </div>
        <p className="bodyAccent">Near turns everyday places into reminders.</p>
      </div>
    </section>
  )
}

/* âââ Arrive âââ */

function ArriveSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="reveal sectionShell splitGrid">
        <div className="splitCopy">
          <h2 className="sectionTitle left" data-parallax>
            Arrive somewhere.<br />Your list is <span className="gradientText">already there.</span>
          </h2>
          <p className="bodyText">
            Near understands that most tasks belong to places. When you arrive somewhere, the tasks that belong there appear automatically.
          </p>
          <p className="caption">No app opening required.</p>
        </div>
        <div className="splitVisual">
          <div className="arriveCard" data-tilt>
            <div className="arriveHeader">
              <span className="arriveLabel">Now arriving</span>
              <span className="arriveDot" />
            </div>
            <div className="arrivePlace">Trader Joe&apos;s</div>
            <p className="arriveSubline">Your grocery list is ready</p>
            <div className="arriveTasks">
              <TaskRow text="Milk" animateClass="checkOne" />
              <TaskRow text="Lemons" animateClass="checkTwo" />
              <TaskRow text="Sparkling water" animateClass="checkThree" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* âââ TaskRow (reused) âââ */

function TaskRow({
  text,
  animateClass = "",
}: {
  text: string
  animateClass?: string
}) {
  return (
    <div className={`taskRow ${animateClass}`}>
      <span className="taskCheck" aria-hidden="true">{"\u2713"}</span>
      <span className="taskText">{text}</span>
    </div>
  )
}

/* âââ Passing By âââ */

function PassingBySection() {
  return (
    <section className="section sectionSurface">
      <div className="reveal sectionShell splitGrid reverse">
        <div className="splitCopy">
          <h2 className="sectionTitle left" data-parallax>
            Passing a place you need to stop.<br />Near notices before you <span className="gradientText">miss the turn.</span>
          </h2>
          <p className="bodyText">
            Near can surface errands when you pass a place where they can be completed.
          </p>
          <p className="caption">Helpful while driving. Quiet by design.</p>
        </div>
        <div className="splitVisual">
          <div className="passingByVisual">
            <div className="passingByGlow" />
            <div className="passingByGlow2" />
            <div className="passingByNotif" data-tilt>
              <div className="passingByIcon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7z" fill="url(#pinGrad)" />
                  <circle cx="10" cy="9" r="2.5" fill="white" />
                  <defs>
                    <linearGradient id="pinGrad" x1="3" y1="2" x2="17" y2="18">
                      <stop stopColor="#5B8DEF" />
                      <stop offset="1" stopColor="#7B5CFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="passingByNotifBody">
                <div className="passingByLabel">Near &middot; Nearby errand</div>
                <div className="passingByTitle">Target is on your route</div>
                <div className="passingByItems">Return package &middot; Buy batteries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* âââ Ecosystem âââ */

function EcosystemSection() {
  return (
    <section className="section">
      <div className="reveal sectionShell">
        <div className="sectionHeading">
          <h2 className="sectionTitle" data-parallax>Designed for the <span className="gradientText">Apple ecosystem.</span></h2>
        </div>
        <div className="ecoGrid">
          {ecosystemItems.map((item, i) => (
            <article className={`ecoCard ecoCard${i}`} key={item.title} data-tilt>
              <span className="ecoIcon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* âââ Simpler Interface âââ */

function SimplerInterface() {
  return (
    <section className="section sectionSurface">
      <div className="reveal sectionShell splitGrid">
        <div className="splitCopy">
          <h2 className="sectionTitle left" data-parallax>Just <span className="gradientText">places.</span></h2>
          <p className="bodyText">
            Near organizes tasks around places instead of lists.<br />
            Because errands belong somewhere.
          </p>
          <p className="caption">No folders. No tags. No projects.</p>
        </div>
        <div className="splitVisual">
          <div className="placesCard" data-tilt>
            {placesUI.map((p) => (
              <div className="placeRow" key={p.name}>
                <span className="placeEmoji">{p.emoji}</span>
                <span className="placeName">{p.name}</span>
                <span className="placeCount">{p.count} {p.count === 1 ? "task" : "tasks"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* âââ Natural Input âââ */

function NaturalInput() {
  return (
    <section className="section">
      <div className="reveal sectionShell splitGrid reverse">
        <div className="splitCopy">
          <h2 className="sectionTitle left" data-parallax>Add tasks the way <span className="gradientText">you think.</span></h2>
          <p className="bodyText">
            Type what you need and Near suggests where it belongs.<br />
            Or just ask Siri.
          </p>
        </div>
        <div className="splitVisual">
          <div className="inputCard" data-tilt>
            <div className="inputField">Buy batteries</div>
            <div className="inputSuggestions">
              <span className="inputLabel">Attach to:</span>
              <span className="inputChip chipActive">Target</span>
              <span className="inputChip">Home Depot</span>
              <span className="inputChip">Walgreens</span>
            </div>
            <div className="inputVoice">
              <span className="voiceIcon">{"\uD83C\uDF99\uFE0F"}</span>
              <span className="voiceText">&ldquo;Siri, remind me to buy batteries at Target.&rdquo;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* âââ Household âââ */

function HouseholdSection() {
  return (
    <section className="section sectionSurface" id="household">
      <div className="reveal sectionShell splitGrid">
        <div className="splitCopy">
          <h2 className="sectionTitle left" data-parallax>One household.<br />One <span className="gradientText">shared memory.</span></h2>
          <p className="bodyText">
            Anyone can add items.<br />
            When someone is near the store, Near shows the list.
          </p>
        </div>
        <div className="splitVisual">
          <div className="householdVisual">
            <div className="householdGlow" />
            <div className="householdGlow2" />
            <div className="householdOrbit">
              <div className="householdAvatar householdAvatar1">
                <span>ð©</span>
              </div>
              <div className="householdAvatar householdAvatar2">
                <span>ð¨</span>
              </div>
              <div className="householdRing" />
              <div className="householdRing householdRing2" />
            </div>
            <div className="householdNotif" data-tilt>
              <div className="householdNotifIcon">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7z" fill="url(#hhPinGrad)" />
                  <circle cx="10" cy="9" r="2.5" fill="white" />
                  <defs>
                    <linearGradient id="hhPinGrad" x1="3" y1="2" x2="17" y2="18">
                      <stop stopColor="#FF6B8A" />
                      <stop offset="1" stopColor="#C74BF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="householdNotifBody">
                <div className="householdNotifLabel">Near &middot; now</div>
                <div className="householdNotifTitle">Brian is near Target</div>
                <div className="householdNotifSub">Send the grocery list?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* âââ Maps âââ */

function MapsSection() {
  return (
    <section className="section">
      <div className="reveal sectionShell splitGrid reverse">
        <div className="splitCopy">
          <h2 className="sectionTitle left" data-parallax>Built around the <span className="gradientText">places you go.</span></h2>
          <p className="bodyText">
            Search for a place in Maps and Near shows the tasks waiting there.
          </p>
        </div>
        <div className="splitVisual">
          <div className="mapsCard" data-tilt>
            <div className="mapsPin">{"\uD83D\uDCCD"}</div>
            <div className="mapsInfo">
              <div className="mapsName">Walgreens</div>
              <div className="mapsTask">Pick up prescription</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* âââ Calm Technology âââ */

function CalmTechnology() {
  return (
    <section className="section sectionSurface">
      <div className="reveal sectionShell narrow center">
        <h2 className="sectionTitle" data-parallax><span className="gradientText">Technology</span> that stays out of the way.</h2>
        <p className="bodyText center">
          Near is designed to be quiet. Only high-value moments.
        </p>
        <div className="pillGrid">
          <span className="pill" data-stagger>No feeds</span>
          <span className="pill" data-stagger>No streaks</span>
          <span className="pill" data-stagger>No productivity pressure</span>
          <span className="pill" data-stagger>No noise</span>
        </div>
      </div>
    </section>
  )
}

/* âââ Privacy âââ */

function PrivacySection() {
  return (
    <section className="section">
      <div className="reveal sectionShell narrow center">
        <div className="privacyVisual" data-tilt>
          <div className="privacyGlow" />
          <div className="privacyOrbitRing privacyOrbit1">
            <div className="privacyOrbitParticle privacyParticle1" />
          </div>
          <div className="privacyOrbitRing privacyOrbit2">
            <div className="privacyOrbitParticle privacyParticle2" />
          </div>
          <div className="privacyOrbitRing privacyOrbit3">
            <div className="privacyOrbitParticle privacyParticle3" />
          </div>
          <div className="privacyIcon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="12" y="22" width="24" height="18" rx="4" fill="url(#lockGrad)" />
              <path d="M18 22V16a6 6 0 0 1 12 0v6" stroke="url(#lockGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="24" cy="32" r="2.5" fill="white" />
              <defs>
                <linearGradient id="lockGrad" x1="12" y1="16" x2="36" y2="40">
                  <stop stopColor="#2F6DFF" />
                  <stop offset="1" stopColor="#7B5CFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="privacyRing" />
        </div>
        <h2 className="sectionTitle" data-parallax>Your task intelligence. <span className="gradientText">Kept private.</span></h2>
        <p className="bodyText center">
          Near uses location only to show tasks when they matter.<br />
          Your data stays on your device.
        </p>
        <div className="pillGrid">
          <span className="pill" data-stagger data-tilt>No ads</span>
          <span className="pill" data-stagger data-tilt>No tracking</span>
          <span className="pill" data-stagger data-tilt>No profiling</span>
        </div>
      </div>
    </section>
  )
}

/* âââ Philosophy âââ */

function PhilosophySection() {
  return (
    <section className="section sectionSurface">
      <div className="reveal sectionShell narrow center">
        <div className="philVisual" data-tilt>
          <div className="philGlow" />
          <div className="philGlow2" />
          <div className="philPulseRing" />
          <div className="philIcon">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path d="M26 6C18.27 6 12 12.27 12 20c0 4.5 2.12 8.5 5.43 11.07C18.56 32.01 19 33.2 19 34.5V38a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3.5c0-1.3.44-2.49 1.57-3.43C37.88 28.5 40 24.5 40 20c0-7.73-6.27-14-14-14z" fill="url(#bulbGrad)" />
              <rect x="21" y="42" width="10" height="2" rx="1" fill="url(#bulbGrad2)" />
              <rect x="22" y="45" width="8" height="2" rx="1" fill="url(#bulbGrad2)" opacity="0.6" />
              <circle cx="26" cy="22" r="4" fill="white" opacity="0.9" />
              <line x1="26" y1="26" x2="26" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              <defs>
                <linearGradient id="bulbGrad" x1="12" y1="6" x2="40" y2="46">
                  <stop stopColor="#FFB347" />
                  <stop offset="0.5" stopColor="#FF6B8A" />
                  <stop offset="1" stopColor="#C74BF6" />
                </linearGradient>
                <linearGradient id="bulbGrad2" x1="21" y1="42" x2="30" y2="47">
                  <stop stopColor="#C74BF6" />
                  <stop offset="1" stopColor="#7B5CFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="philSparkle philSparkle1" />
          <div className="philSparkle philSparkle2" />
          <div className="philSparkle philSparkle3" />
          <div className="philSparkle philSparkle4" />
          <div className="philSparkle philSparkle5" />
        </div>
        <h2 className="sectionTitle" data-parallax>Your brain is for <span className="gradientText">ideas.</span></h2>
        <p className="bodyText center">
          Not batteries. Not milk. Not remembering to return the package.
        </p>
        <p className="bodyText center">
          Near handles the small logistics of everyday life so you don&apos;t have to think about them.
        </p>
      </div>
    </section>
  )
}

/* âââ FAQ âââ */

function FAQSection() {
  return (
    <section className="section" id="faq">
      <div className="reveal sectionShell narrow">
        <h2 className="sectionTitle center" data-parallax>Frequently asked <span className="gradientText">questions</span></h2>
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

/* âââ Final CTA âââ */

function FinalCTA() {
  return (
    <section className="finalCta">
      <div className="reveal finalShell">
        <div className="finalOrb finalOrb1" />
        <div className="finalOrb finalOrb2" />
        <div className="finalOrb finalOrb3" />
        <div className="finalParticle finalP1" />
        <div className="finalParticle finalP2" />
        <div className="finalParticle finalP3" />
        <div className="finalParticle finalP4" />
        <div className="finalParticle finalP5" />
        <div className="finalStars">
          <div className="finalStar finalStar1" />
          <div className="finalStar finalStar2" />
          <div className="finalStar finalStar3" />
          <div className="finalStar finalStar4" />
          <div className="finalStar finalStar5" />
          <div className="finalStar finalStar6" />
        </div>

        {/* Floating notification card */}
        <div className="finalNotifCard">
          <div className="finalNotifGlow" />
          <Image
            src="/near-icon-hero.png"
            alt=""
            width={40}
            height={40}
            className="finalNotifIcon"
          />
          <div className="finalNotifContent">
            <div className="finalNotifTitle">Near</div>
            <div className="finalNotifBody">You{'\u2019'}re near Target {'\u2014'} Stroller is on your list</div>
          </div>
          <div className="finalNotifTime">now</div>
        </div>

        <h2 className="finalTitle">
          The right task.<br />At the right place.
        </h2>
        <p className="finalSub">Near remembers so you don{'\u2019'}t have to. Download and let your errands find you.</p>
        <a className="primaryBtn finalBtn" href={APP_STORE_URL}>
          Download on the App Store
        </a>
      </div>
    </section>
  )
}

/* âââ Styles âââ */

function SiteStyles() {
  return (
    <style jsx global>{`

      /* ââ Reset ââ */

      * { box-sizing: border-box; }
      a { color: inherit; text-decoration: none; }

      .page {
        min-height: 100vh;
        background: #FFFFFF;
        color: #1D1D1F;
      }

      /* ââ Scroll reveal ââ */

      .reveal {
        opacity: 0;
        transform: translateY(48px) scale(0.94) rotateX(8deg);
        transform-origin: center bottom;
        transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .reveal.revealed {
        opacity: 1;
        transform: translateY(0) scale(1) rotateX(0deg);
      }

      /* Staggered children animation */
      [data-stagger] {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
      }

      [data-stagger].staggered {
        opacity: 1;
        transform: translateY(0);
      }

      /* ââ Gradient text ââ */

      .gradientText {
        background: linear-gradient(135deg, #2F6DFF 0%, #5B8DEF 20%, #7B5CFF 40%, #C74BF6 60%, #FF6B8A 80%, #FFB347 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 6s ease-in-out infinite;
      }

      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      /* ââ Nav ââ */

      .nav {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        background: rgba(255, 255, 255, 0.8);
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }

      .navInner {
        max-width: 980px;
        margin: 0 auto;
        padding: 14px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      .brand, .navLinks {
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .brandLogo {
        width: auto;
        height: 36px;
        display: block;
        object-fit: contain;
      }

      .navLink {
        font-size: 0.95rem;
        color: rgba(29, 29, 31, 0.6);
        transition: color 0.2s;
      }

      .navLink:hover { color: #1D1D1F; }

      .navCta {
        padding: 0.5rem 1.1rem;
        color: white;
        background: var(--blue);
        font-size: 0.88rem;
        font-weight: 600;
        border-radius: 999px;
        transition: background 0.16s;
      }

      .navCta:hover { background: var(--blue-hover); }

      /* ââ Hero ââ */

      .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        perspective: 1200px;
        transform-style: preserve-3d;
      }

      .hero::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 10%;
        right: 10%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(47, 109, 255, 0.3) 20%, rgba(199, 75, 246, 0.3) 50%, rgba(255, 107, 138, 0.3) 80%, transparent);
        border-radius: 1px;
      }

      .heroGlow {
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 1000px;
        border-radius: 50%;
        background:
          radial-gradient(ellipse 60% 50% at 30% 40%, rgba(47, 109, 255, 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 70% 60%, rgba(199, 75, 246, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 50% 50%, rgba(255, 107, 138, 0.06) 0%, transparent 50%);
        pointer-events: none;
        animation: glowBreathe 7s ease-in-out infinite;
      }

      @keyframes glowBreathe {
        0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        33% { opacity: 1; transform: translate(-50%, -50%) scale(1.08) rotate(2deg); }
        66% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.04) rotate(-1deg); }
      }

      .heroSplit {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        gap: 4rem;
        position: relative;
        width: 100%;
      }

      .heroCopy {
        flex: 1;
        min-width: 0;
      }

      .heroPhone {
        flex-shrink: 0;
        perspective: 1200px;
        transform-style: preserve-3d;
      }

      .heroIcon {
        width: 80px;
        height: 80px;
        margin: 0 0 1.5rem;
        display: block;
        border-radius: 18px;
        box-shadow: 0 10px 30px rgba(47, 109, 255, 0.25);
        animation: iconPulse 5.5s ease-in-out infinite;
      }

      @keyframes iconPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 10px 30px rgba(47, 109, 255, 0.25); }
        50% { transform: scale(1.03); box-shadow: 0 12px 36px rgba(47, 109, 255, 0.35); }
      }

      .eyebrow {
        display: block;
        color: var(--blue);
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 1rem;
      }

      .heroTitle {
        margin: 0;
        font-size: clamp(3rem, 8vw, 72px);
        font-weight: 500;
        line-height: 1.05;
        letter-spacing: -0.02em;
        color: #1D1D1F;
      }

      .heroSub {
        margin: 1.5rem 0 0;
        font-size: 28px;
        font-weight: 400;
        line-height: 1.2;
        color: #1D1D1F;
      }

      /* Phase-rotating subtext */
      .heroPhases {
        position: relative;
        min-height: 60px;
        margin: 1rem 0 0;
      }

      .heroPhaseText {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.5;
        color: #6E6E73;
        opacity: 0;
        transition: opacity 0.6s ease;
      }

      .heroPhaseText.phaseVisible {
        opacity: 1;
      }

      .heroCtas {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        margin-top: 2.5rem;
        justify-content: flex-start;
      }

      .primaryBtn, .secondaryBtn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.85rem 1.6rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 999px;
        transition: background 0.16s, transform 0.16s;
        white-space: nowrap;
      }

      .primaryBtn {
        color: white;
        background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
        border: none;
        box-shadow: 0 10px 30px rgba(47, 109, 255, 0.25);
        background-size: 200% 200%;
        background-position: 0% 50%;
        transition: background-position 0.4s ease, transform 0.16s, box-shadow 0.3s ease;
      }

      .primaryBtn:hover {
        background-position: 100% 50%;
        box-shadow: 0 14px 36px rgba(123, 92, 255, 0.3);
      }
      .primaryBtn:active, .secondaryBtn:active { transform: scale(0.98); }

      .secondaryBtn {
        color: var(--blue);
        background: transparent;
        border: 1px solid rgba(47, 109, 255, 0.3);
      }

      .secondaryBtn:hover { background: rgba(47, 109, 255, 0.06); }

      /* ââ Sections ââ */

      .section {
        padding: 8rem 1.5rem;
        position: relative;
        perspective: 1200px;
      }

      .section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 10%;
        right: 10%;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(47, 109, 255, 0.2) 20%, rgba(199, 75, 246, 0.2) 50%, rgba(255, 107, 138, 0.2) 80%, transparent);
      }

      .sectionSurface {
        background: linear-gradient(180deg, #F5F5F7 0%, #EEEEF3 100%);
      }

      .sectionMagic {
        position: relative;
        overflow: hidden;
      }

      .magicOrb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.4;
        animation: orbFloat 8s ease-in-out infinite;
        pointer-events: none;
        z-index: 1;
      }

      .magicOrb1 {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(47, 109, 255, 0.35) 0%, rgba(47, 109, 255, 0) 70%);
        top: -50px;
        right: -80px;
        animation-delay: 0s;
      }

      .magicOrb2 {
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0) 70%);
        bottom: -30px;
        left: -60px;
        animation-delay: -3s;
        animation-duration: 10s;
      }

      .magicOrb3 {
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(255, 107, 138, 0.25) 0%, rgba(255, 107, 138, 0) 70%);
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        animation-delay: -5s;
        animation-duration: 12s;
      }

      @keyframes orbFloat {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(20px, -30px) scale(1.1); }
        50% { transform: translate(-10px, 20px) scale(0.95); }
        75% { transform: translate(15px, 10px) scale(1.05); }
      }

      .magicAurora {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
          linear-gradient(135deg,
            rgba(47, 109, 255, 0.03) 0%,
            transparent 30%,
            rgba(168, 85, 247, 0.03) 50%,
            transparent 70%,
            rgba(255, 179, 71, 0.02) 100%
          );
        pointer-events: none;
        z-index: 1;
      }

      .sectionShell {
        max-width: 980px;
        margin: 0 auto;
      }

      .sectionShell.narrow {
        max-width: 780px;
      }

      .sectionHeading {
        text-align: center;
        margin-bottom: 3rem;
      }

      .sectionTitle {
        margin: 0;
        font-size: clamp(2rem, 5vw, 48px);
        font-weight: 500;
        line-height: 1.1;
        letter-spacing: -0.01em;
        color: #1D1D1F;
        text-wrap: balance;
        transform: translateY(var(--parallax-offset, 0px));
        transition: transform 0.1s linear;
      }

      .sectionTitle.center { text-align: center; }
      .sectionTitle.left { text-align: left; }

      [data-tilt] {
        transform: perspective(1200px) rotateX(var(--my, 0deg)) rotateY(var(--mx, 0deg));
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        will-change: transform;
      }

      .bodyText {
        margin: 1.2rem 0 0;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.5;
        color: #6E6E73;
      }

      .bodyText.center { text-align: center; }

      .bodyAccent {
        margin: 2rem 0 0;
        font-size: 20px;
        font-weight: 500;
        color: var(--blue);
        letter-spacing: -0.01em;
      }

      .caption {
        margin: 1.5rem 0 0;
        font-size: 15px;
        font-weight: 400;
        color: rgba(29, 29, 31, 0.4);
        letter-spacing: 0.01em;
      }

      /* ââ Split Grid ââ */

      .splitGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .splitGrid.reverse .splitCopy { order: 2; }
      .splitGrid.reverse .splitVisual { order: 1; }

      /* ââ Arrive Card ââ */

      .arriveCard {
        padding: 2rem;
        border-radius: 1.5rem;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .arriveCard:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 64px rgba(47, 109, 255, 0.12);
      }

      .sectionSurface .arriveCard {
        background: #FFFFFF;
      }

      .arriveHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .arriveLabel {
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: rgba(29, 29, 31, 0.4);
      }

      .arriveDot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #34D399;
        box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
        animation: dotPulse 2s ease-in-out infinite;
      }

      @keyframes dotPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
        50% { box-shadow: 0 0 0 6px rgba(52, 211, 153, 0); }
      }

      .arrivePlace {
        margin-top: 0.8rem;
        font-size: clamp(1.8rem, 4vw, 2.4rem);
        font-weight: 700;
        letter-spacing: -0.03em;
        color: #1D1D1F;
      }

      .arriveSubline {
        margin: 0.3rem 0 1rem;
        font-size: 15px;
        color: #6E6E73;
      }

      .arriveTasks {
        display: grid;
        gap: 0.6rem;
      }

      /* ââ TaskRow ââ */

      .taskRow {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.8rem 1rem;
        border-radius: 0.8rem;
        background: #F5F5F7;
        border: 1px solid rgba(0, 0, 0, 0.06);
        transition: background 0.22s, border-color 0.22s;
      }

      .taskCheck {
        display: inline-flex;
        width: 1.3rem;
        height: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1.5px solid rgba(0, 0, 0, 0.15);
        font-size: 0.75rem;
        font-weight: 800;
        color: transparent;
        background: transparent;
        transition: all 0.22s;
      }

      .taskText {
        font-size: 0.95rem;
        font-weight: 500;
        color: #1D1D1F;
        transition: all 0.22s;
      }

      .checkOne, .checkTwo, .checkThree {
        animation: taskGlowLoop 6.8s ease-in-out infinite;
      }
      .checkOne .taskCheck, .checkTwo .taskCheck, .checkThree .taskCheck {
        animation: boxTickLoop 6.8s ease-in-out infinite;
      }
      .checkOne .taskText, .checkTwo .taskText, .checkThree .taskText {
        animation: textTickLoop 6.8s ease-in-out infinite;
      }

      .checkOne, .checkOne .taskCheck, .checkOne .taskText { animation-delay: 0s; }
      .checkTwo, .checkTwo .taskCheck, .checkTwo .taskText { animation-delay: 2.05s; }
      .checkThree, .checkThree .taskCheck, .checkThree .taskText { animation-delay: 4.1s; }

      @keyframes boxTickLoop {
        0%, 22% {
          color: transparent;
          background: transparent;
          border-color: rgba(0, 0, 0, 0.15);
          transform: scale(1);
        }
        30%, 74% {
          color: white;
          background: var(--blue);
          border-color: transparent;
          transform: scale(1.04);
        }
        84%, 100% {
          color: transparent;
          background: transparent;
          border-color: rgba(0, 0, 0, 0.15);
          transform: scale(1);
        }
      }

      @keyframes textTickLoop {
        0%, 22% {
          color: #1D1D1F;
          opacity: 1;
          text-decoration: none;
        }
        30%, 74% {
          color: rgba(29, 29, 31, 0.35);
          opacity: 0.8;
          text-decoration: line-through;
        }
        84%, 100% {
          color: #1D1D1F;
          opacity: 1;
          text-decoration: none;
        }
      }

      @keyframes taskGlowLoop {
        0%, 22%, 84%, 100% {
          background: #F5F5F7;
          border-color: rgba(0, 0, 0, 0.06);
        }
        30%, 74% {
          background: rgba(47, 109, 255, 0.04);
          border-color: rgba(47, 109, 255, 0.12);
        }
      }

      /* ââ Passing-By Ambient Notification ââ */

      .passingByVisual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 220px;
        padding: 2rem;
      }

      .passingByGlow {
        position: absolute;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(91, 141, 239, 0.35) 0%, rgba(123, 92, 255, 0.15) 40%, transparent 70%);
        filter: blur(40px);
        animation: glowPulse 4s ease-in-out infinite;
      }

      .passingByGlow2 {
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(199, 75, 246, 0.25) 0%, rgba(255, 107, 138, 0.1) 40%, transparent 70%);
        filter: blur(30px);
        animation: glowPulse2 5s ease-in-out infinite 1s;
        transform: translate(30px, -20px);
      }

      @keyframes glowPulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.15); opacity: 1; }
      }

      @keyframes glowPulse2 {
        0%, 100% { transform: translate(30px, -20px) scale(1); opacity: 0.6; }
        50% { transform: translate(30px, -20px) scale(1.2); opacity: 0.9; }
      }

      .passingByNotif {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.88);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        box-shadow:
          0 2px 12px rgba(91, 141, 239, 0.15),
          0 8px 32px rgba(123, 92, 255, 0.1),
          0 0 0 0.5px rgba(255, 255, 255, 0.6) inset;
        max-width: 340px;
        width: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: notifFloat 6s ease-in-out infinite;
      }

      @keyframes notifFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }

      .passingByNotif:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow:
          0 4px 20px rgba(91, 141, 239, 0.25),
          0 12px 48px rgba(123, 92, 255, 0.15),
          0 0 0 0.5px rgba(255, 255, 255, 0.7) inset;
      }

      .passingByIcon {
        flex-shrink: 0;
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: linear-gradient(135deg, #e8efff 0%, #f0eaff 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .passingByNotifBody {
        flex: 1;
        min-width: 0;
      }

      .passingByLabel {
        font-size: 12px;
        font-weight: 500;
        color: var(--text-secondary);
        letter-spacing: 0.01em;
      }

      .passingByTitle {
        font-size: 15px;
        font-weight: 600;
        color: var(--foreground);
        letter-spacing: -0.01em;
        margin-top: 1px;
      }

      .passingByItems {
        font-size: 13px;
        color: var(--text-secondary);
        margin-top: 2px;
      }

      /* ââ Ecosystem Grid ââ */

      .ecoGrid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
      }

      .ecoCard {
        padding: 2rem 1.5rem;
        border-radius: 1.25rem;
        background: linear-gradient(#F5F5F7, #F5F5F7) padding-box, linear-gradient(135deg, rgba(47, 109, 255, 0.15), rgba(168, 85, 247, 0.15)) border-box;
        border: 2px solid transparent;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .ecoCard::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        border-radius: 1.25rem 1.25rem 0 0;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .ecoCard:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(47, 109, 255, 0.12);
        background: linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #2F6DFF, #A855F7) border-box;
      }

      .ecoCard:hover::before {
        opacity: 1;
      }

      .ecoCard0::before { background: linear-gradient(90deg, #2F6DFF, #7B5CFF); }
      .ecoCard1::before { background: linear-gradient(90deg, #FF6B8A, #FF9B6B); }
      .ecoCard2::before { background: linear-gradient(90deg, #34D399, #2F6DFF); }
      .ecoCard3::before { background: linear-gradient(90deg, #C74BF6, #FF6B8A); }

      .ecoIcon {
        font-size: 2rem;
        display: block;
        margin-bottom: 1rem;
      }

      .ecoCard h3 {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 600;
        color: #1D1D1F;
      }

      .ecoCard p {
        margin: 0.5rem 0 0;
        font-size: 15px;
        color: #6E6E73;
        line-height: 1.4;
      }

      /* ââ Places Card ââ */

      .placesCard {
        position: relative;
        padding: 1.5rem;
        border-radius: 1.5rem;
        background: linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #2F6DFF, #A855F7) border-box;
        border: 2px solid transparent;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: grid;
        gap: 0;
      }

      .placeRow {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }

      .placeRow:last-child { border-bottom: none; }

      .placeEmoji { font-size: 1.3rem; }

      .placeName {
        flex: 1;
        font-size: 1rem;
        font-weight: 600;
        color: #1D1D1F;
      }

      .placeCount {
        font-size: 0.85rem;
        color: #6E6E73;
      }

      /* ââ Input Card ââ */

      .inputCard {
        padding: 2rem;
        border-radius: 1.5rem;
        background: linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #34D399, #2F6DFF) border-box;
        border: 2px solid transparent;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .inputCard:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 64px rgba(47, 109, 255, 0.12);
      }

      .inputField {
        padding: 0.9rem 1rem;
        border-radius: 0.8rem;
        background: #F5F5F7;
        border: 1px solid rgba(0, 0, 0, 0.08);
        font-size: 1rem;
        font-weight: 500;
        color: #1D1D1F;
      }

      .inputSuggestions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .inputLabel {
        font-size: 13px;
        font-weight: 600;
        color: #6E6E73;
        margin-right: 0.25rem;
      }

      .inputChip {
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: #F5F5F7;
        border: 1px solid rgba(0, 0, 0, 0.08);
        font-size: 0.85rem;
        font-weight: 500;
        color: #1D1D1F;
      }

      .inputChip.chipActive {
        background: var(--blue);
        color: white;
        border-color: transparent;
      }

      .inputVoice {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-top: 1.25rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
      }

      .voiceIcon { font-size: 1.1rem; }

      .voiceText {
        font-size: 15px;
        font-style: italic;
        color: #6E6E73;
      }

      /* ââ Household Visual ââ */

      .householdVisual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 280px;
        padding: 2rem;
      }

      .householdGlow {
        position: absolute;
        width: 240px;
        height: 240px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 107, 138, 0.3) 0%, rgba(199, 75, 246, 0.12) 40%, transparent 70%);
        filter: blur(40px);
        animation: hhGlow1 5s ease-in-out infinite;
      }

      .householdGlow2 {
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(123, 92, 255, 0.25) 0%, rgba(91, 141, 239, 0.1) 40%, transparent 70%);
        filter: blur(30px);
        animation: hhGlow2 6s ease-in-out infinite 1.5s;
        transform: translate(-20px, 20px);
      }

      @keyframes hhGlow1 {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.18); opacity: 1; }
      }

      @keyframes hhGlow2 {
        0%, 100% { transform: translate(-20px, 20px) scale(1); opacity: 0.5; }
        50% { transform: translate(-20px, 20px) scale(1.22); opacity: 0.85; }
      }

      .householdOrbit {
        position: absolute;
        width: 160px;
        height: 160px;
      }

      .householdRing {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 1.5px solid rgba(199, 75, 246, 0.15);
        animation: hhRingSpin 20s linear infinite;
      }

      .householdRing2 {
        inset: -20px;
        border-color: rgba(255, 107, 138, 0.1);
        animation-duration: 28s;
        animation-direction: reverse;
      }

      @keyframes hhRingSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .householdAvatar {
        position: absolute;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        z-index: 2;
      }

      .householdAvatar1 {
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ffe0ec 0%, #ffd6e8 100%);
        animation: hhFloat1 5s ease-in-out infinite;
      }

      .householdAvatar2 {
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #e0e8ff 0%, #d6deff 100%);
        animation: hhFloat2 5s ease-in-out infinite 1s;
      }

      @keyframes hhFloat1 {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(-8px); }
      }

      @keyframes hhFloat2 {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(8px); }
      }

      .householdNotif {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        box-shadow:
          0 2px 12px rgba(199, 75, 246, 0.12),
          0 8px 32px rgba(255, 107, 138, 0.08),
          0 0 0 0.5px rgba(255, 255, 255, 0.6) inset;
        max-width: 280px;
        width: 100%;
        animation: hhNotifFloat 6s ease-in-out infinite;
      }

      @keyframes hhNotifFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      .householdNotif:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow:
          0 4px 20px rgba(199, 75, 246, 0.2),
          0 12px 48px rgba(255, 107, 138, 0.12),
          0 0 0 0.5px rgba(255, 255, 255, 0.7) inset;
      }

      .householdNotifIcon {
        flex-shrink: 0;
        width: 34px;
        height: 34px;
        border-radius: 9px;
        background: linear-gradient(135deg, #ffe0ec 0%, #f0eaff 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .householdNotifBody { flex: 1; min-width: 0; }

      .householdNotifLabel {
        font-size: 11px;
        font-weight: 500;
        color: var(--text-secondary);
      }

      .householdNotifTitle {
        font-size: 14px;
        font-weight: 600;
        color: var(--foreground);
        letter-spacing: -0.01em;
        margin-top: 1px;
      }

      .householdNotifSub {
        font-size: 12px;
        color: var(--text-secondary);
        margin-top: 1px;
      }

      /* ââ Maps Card ââ */

      .mapsCard {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding: 1.5rem 2rem;
        border-radius: 1.5rem;
        background: linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FF6B8A, #C74BF6) border-box;
        border: 2px solid transparent;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .mapsCard:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 64px rgba(47, 109, 255, 0.12);
      }

      .mapsPin { font-size: 2rem; }

      .mapsName {
        font-size: 1.1rem;
        font-weight: 700;
        color: #1D1D1F;
      }

      .mapsTask {
        font-size: 0.95rem;
        color: #6E6E73;
        margin-top: 0.15rem;
      }

      /* ââ Privacy Visual ââ */

      .privacyVisual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        margin: 0 auto 2rem;
      }

      .privacyGlow {
        position: absolute;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(47, 109, 255, 0.25) 0%, rgba(123, 92, 255, 0.1) 40%, transparent 70%);
        filter: blur(25px);
        animation: privGlow 4s ease-in-out infinite;
      }

      @keyframes privGlow {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.15); opacity: 1; }
      }

      .privacyIcon {
        position: relative;
        z-index: 2;
        width: 80px;
        height: 80px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        box-shadow:
          0 4px 20px rgba(47, 109, 255, 0.12),
          0 0 0 0.5px rgba(255, 255, 255, 0.5) inset;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: privFloat 5s ease-in-out infinite;
      }

      @keyframes privFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }

      .privacyRing {
        position: absolute;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: 1.5px dashed rgba(47, 109, 255, 0.15);
        animation: hhRingSpin 25s linear infinite;
      }

            .privacyOrbitRing {
        position: absolute;
        border-radius: 50%;
        border: 1px solid rgba(47, 109, 255, 0.08);
      }

      .privacyOrbit1 {
        width: 100px;
        height: 100px;
        animation: privOrbit1 10s linear infinite;
      }

      .privacyOrbit2 {
        width: 130px;
        height: 130px;
        animation: privOrbit2 15s linear infinite;
      }

      .privacyOrbit3 {
        width: 160px;
        height: 160px;
        border: 1px dashed rgba(123, 92, 255, 0.08);
        animation: privOrbit3 20s linear infinite;
      }

      .privacyOrbitParticle {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .privacyParticle1 {
        top: -3px;
        left: 50%;
        margin-left: -3px;
        background: #2F6DFF;
        box-shadow: 0 0 8px rgba(47, 109, 255, 0.6);
      }

      .privacyParticle2 {
        bottom: -3px;
        left: 50%;
        margin-left: -3px;
        background: #7B5CFF;
        box-shadow: 0 0 8px rgba(123, 92, 255, 0.6);
      }

      .privacyParticle3 {
        top: 50%;
        right: -3px;
        margin-top: -3px;
        background: #C74BF6;
        box-shadow: 0 0 8px rgba(199, 75, 246, 0.6);
        width: 4px;
        height: 4px;
      }

      @keyframes privOrbit1 {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes privOrbit2 {
        from { transform: rotate(120deg); }
        to { transform: rotate(480deg); }
      }

      @keyframes privOrbit3 {
        from { transform: rotate(240deg); }
        to { transform: rotate(600deg); }
      }

      /* ââ Philosophy Visual ââ */

      .philVisual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 130px;
        margin: 0 auto 2rem;
      }

      .philGlow {
        position: absolute;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 179, 71, 0.3) 0%, rgba(255, 107, 138, 0.12) 40%, transparent 70%);
        filter: blur(30px);
        animation: philGlowAnim 5s ease-in-out infinite;
      }

      .philGlow2 {
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(199, 75, 246, 0.2) 0%, transparent 60%);
        filter: blur(20px);
        animation: philGlowAnim2 6s ease-in-out infinite 1s;
        transform: translate(10px, -10px);
      }

      @keyframes philGlowAnim {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.2); opacity: 1; }
      }

      @keyframes philGlowAnim2 {
        0%, 100% { transform: translate(10px, -10px) scale(1); opacity: 0.5; }
        50% { transform: translate(10px, -10px) scale(1.15); opacity: 0.8; }
      }

      .philIcon {
        position: relative;
        z-index: 2;
        animation: philFloat 5s ease-in-out infinite;
      }

      @keyframes philFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }

      .philSparkle {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(255, 179, 71, 0.8);
        z-index: 3;
      }

      .philSparkle1 {
        top: 10px;
        right: 5px;
        animation: sparkle 3s ease-in-out infinite;
      }

      .philSparkle2 {
        top: 20px;
        left: 0;
        width: 4px;
        height: 4px;
        background: rgba(199, 75, 246, 0.7);
        animation: sparkle 3s ease-in-out infinite 1s;
      }

      .philSparkle3 {
        bottom: 30px;
        right: 0;
        width: 5px;
        height: 5px;
        background: rgba(255, 107, 138, 0.7);
        animation: sparkle 3s ease-in-out infinite 2s;
      }

      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      .philSparkle4 {
        top: 40px;
        left: 15px;
        width: 3px;
        height: 3px;
        background: rgba(255, 179, 71, 0.6);
        animation: sparkle 3s ease-in-out infinite 0.5s;
      }

      .philSparkle5 {
        bottom: 40px;
        left: 20px;
        width: 5px;
        height: 5px;
        background: rgba(123, 92, 255, 0.7);
        animation: sparkle 3s ease-in-out infinite 1.5s;
      }

      .philPulseRing {
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 1.5px solid rgba(255, 179, 71, 0.15);
        animation: philPulse 3s ease-in-out infinite;
      }

      @keyframes philPulse {
        0%, 100% { transform: scale(1); opacity: 0.4; }
        50% { transform: scale(1.3); opacity: 0; }
      }


      /* ââ Pills ââ */

      .pillGrid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 2rem;
        justify-content: center;
      }

      .pill {
        padding: 0.65rem 1.25rem;
        border-radius: 999px;
        background: #FFFFFF;
        background: linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, rgba(47, 109, 255, 0.25), rgba(168, 85, 247, 0.25)) border-box;
        border: 1.5px solid transparent;
        font-size: 0.95rem;
        font-weight: 500;
        color: #1D1D1F;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }

      .pill:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 24px rgba(47, 109, 255, 0.18);
        border-color: rgba(47, 109, 255, 0.5);
        background: linear-gradient(135deg, rgba(47, 109, 255, 0.06), rgba(168, 85, 247, 0.06));
      }

      .sectionSurface .pill {
        background: #FFFFFF;
      }

      /* ââ Example List ââ */

      /* AI Feature Cards */

      .aiFeatureCards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin: 2rem 0 0;
      }

      .aiFeatureCard {
        border-radius: 22px;
        padding: 28px 22px;
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow:
          0 2px 4px rgba(0, 0, 0, 0.04),
          0 12px 32px rgba(47, 109, 255, 0.1),
          0 24px 64px rgba(0, 0, 0, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.8);
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
        position: relative;
        overflow: hidden;
        transform-style: preserve-3d;
      }

      .aiFeatureCard:nth-child(1) {
        background: linear-gradient(145deg, #f0f4ff 0%, #e8eeff 30%, #dde6ff 60%, #f5f7ff 100%);
      }
      .aiFeatureCard:nth-child(2) {
        background: linear-gradient(145deg, #f3effb 0%, #eae4f8 30%, #e0d8f4 60%, #f6f3fc 100%);
      }
      .aiFeatureCard:nth-child(3) {
        background: linear-gradient(145deg, #fff0f3 0%, #ffe8ed 30%, #ffdde5 60%, #fff5f7 100%);
      }

      .aiFeatureCard::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        border-radius: 22px 22px 0 0;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .aiFeatureCard:nth-child(1)::before {
        background: linear-gradient(90deg, #2F6DFF, #5B8DEF);
      }
      .aiFeatureCard:nth-child(2)::before {
        background: linear-gradient(90deg, #7B5CFF, #A855F7);
      }
      .aiFeatureCard:nth-child(3)::before {
        background: linear-gradient(90deg, #FF6B8A, #FFB347);
      }

      .aiFeatureCard:hover {
        transform: translateY(-8px) scale(1.03) translateZ(10px);
        box-shadow:
          0 4px 8px rgba(0, 0, 0, 0.06),
          0 20px 48px rgba(47, 109, 255, 0.18),
          0 32px 80px rgba(0, 0, 0, 0.08);
      }

      .aiFeatureCard:nth-child(1):hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 20px 48px rgba(47, 109, 255, 0.22), 0 32px 80px rgba(0, 0, 0, 0.08);
      }
      .aiFeatureCard:nth-child(2):hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 20px 48px rgba(123, 92, 255, 0.2), 0 32px 80px rgba(0, 0, 0, 0.08);
      }
      .aiFeatureCard:nth-child(3):hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 20px 48px rgba(255, 107, 138, 0.2), 0 32px 80px rgba(0, 0, 0, 0.08);
      }

      .aiFeatureCard:hover::before {
        opacity: 1;
      }

      .aiFeatureIcon {
        width: 52px;
        height: 52px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(47, 109, 255, 0.1), rgba(199, 75, 246, 0.1));
        box-shadow: 0 4px 12px rgba(47, 109, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      }

      .aiFeatureCard:nth-child(1) .aiFeatureIcon {
        background: linear-gradient(135deg, rgba(47, 109, 255, 0.15), rgba(91, 141, 239, 0.1));
        box-shadow: 0 4px 14px rgba(47, 109, 255, 0.12);
      }
      .aiFeatureCard:nth-child(2) .aiFeatureIcon {
        background: linear-gradient(135deg, rgba(123, 92, 255, 0.15), rgba(168, 85, 247, 0.1));
        box-shadow: 0 4px 14px rgba(123, 92, 255, 0.12);
      }
      .aiFeatureCard:nth-child(3) .aiFeatureIcon {
        background: linear-gradient(135deg, rgba(255, 107, 138, 0.15), rgba(255, 179, 71, 0.1));
        box-shadow: 0 4px 14px rgba(255, 107, 138, 0.12);
      }

      .aiFeatureLabel {
        font-size: 16px;
        font-weight: 500;
        color: #1D1D1F;
        margin-bottom: 6px;
        letter-spacing: -0.01em;
      }

      .aiFeatureDesc {
        font-size: 14px;
        font-weight: 400;
        color: #6E6E73;
        line-height: 1.45;
      }

      @media (max-width: 768px) {
        .aiFeatureCards {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .aiFeatureCard {
          padding: 20px 18px;
        }
      }

      .center { text-align: center; }

      /* ââ FAQ ââ */

      .faqList {
        margin-top: 2.5rem;
        display: grid;
        gap: 0;
      }

      .faqItem {
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        border-left: 3px solid transparent;
        padding-left: 0.75rem;
        transition: border-color 0.3s ease, background 0.3s ease;
      }

      .faqItem:hover {
        border-left-color: #2F6DFF;
        background: linear-gradient(90deg, rgba(47, 109, 255, 0.03), transparent);
      }

      .faqItem:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
      }

      .faqQ {
        padding: 1.25rem 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #1D1D1F;
        cursor: pointer;
        list-style: none;
      }

      .faqQ::-webkit-details-marker { display: none; }

      .faqQ::after {
        content: '+';
        float: right;
        font-size: 1.3rem;
        font-weight: 300;
        color: #6E6E73;
        transition: transform 0.2s;
      }

      .faqItem[open] .faqQ::after {
        content: 'â';
      }

      .faqA {
        margin: 0 0 1.25rem;
        font-size: 17px;
        line-height: 1.5;
        color: #6E6E73;
      }

      /* ââ Final CTA ââ */

      .finalCta {
        padding: 4rem 1.5rem 6rem;
      }

      .finalShell {
        max-width: 980px;
        margin: 0 auto;
        padding: 5rem 2rem 4rem;
        border-radius: 2.5rem;
        text-align: center;
        background: linear-gradient(145deg, #0a0820 0%, #12103a 20%, #1e1650 40%, #2a1f6e 60%, #1a1445 80%, #0e0b28 100%);
        color: white;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(123, 92, 255, 0.2);
        box-shadow:
          0 0 0 1px rgba(123, 92, 255, 0.08),
          0 32px 100px rgba(0, 0, 0, 0.4),
          0 0 80px rgba(123, 92, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.05);
        transform: perspective(1200px) rotateX(1deg);
        transform-style: preserve-3d;
      }

      .finalOrb {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        filter: blur(60px);
      }

      .finalOrb1 {
        width: 500px;
        height: 500px;
        top: -120px;
        right: -100px;
        background: radial-gradient(circle, rgba(123, 92, 255, 0.5) 0%, transparent 70%);
        animation: orbFloat1 8s ease-in-out infinite;
      }

      .finalOrb2 {
        width: 450px;
        height: 450px;
        bottom: -100px;
        left: -80px;
        background: radial-gradient(circle, rgba(47, 109, 255, 0.45) 0%, transparent 70%);
        animation: orbFloat2 10s ease-in-out infinite;
      }

      @keyframes orbFloat1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-30px, 20px) scale(1.1); }
      }

      @keyframes orbFloat2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(20px, -30px) scale(1.15); }
      }

      .finalOrb3 {
        width: 350px;
        height: 350px;
        top: 50%;
        left: 50%;
        margin-top: -125px;
        margin-left: -125px;
        background: radial-gradient(circle, rgba(199, 75, 246, 0.25) 0%, transparent 70%);
        animation: orbFloat3 12s ease-in-out infinite;
      }

      @keyframes orbFloat3 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(40px, -30px) scale(1.1); }
        66% { transform: translate(-30px, 40px) scale(0.95); }
      }

      .finalParticle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
      }

      .finalP1 {
        width: 4px; height: 4px;
        background: rgba(123, 92, 255, 0.6);
        top: 20%; left: 15%;
        animation: finalFloat 6s ease-in-out infinite;
      }

      .finalP2 {
        width: 3px; height: 3px;
        background: rgba(47, 109, 255, 0.5);
        top: 30%; right: 20%;
        animation: finalFloat 8s ease-in-out infinite 1s;
      }

      .finalP3 {
        width: 5px; height: 5px;
        background: rgba(199, 75, 246, 0.4);
        bottom: 25%; left: 25%;
        animation: finalFloat 7s ease-in-out infinite 2s;
      }

      .finalP4 {
        width: 3px; height: 3px;
        background: rgba(255, 107, 138, 0.5);
        bottom: 35%; right: 15%;
        animation: finalFloat 9s ease-in-out infinite 0.5s;
      }

      .finalP5 {
        width: 4px; height: 4px;
        background: rgba(255, 179, 71, 0.4);
        top: 60%; left: 10%;
        animation: finalFloat 5s ease-in-out infinite 3s;
      }

      @keyframes finalFloat {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
        50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
      }

      .finalTitle {
        margin: 0 auto;
        font-size: clamp(2.2rem, 5.5vw, 52px);
        font-weight: 500;
        line-height: 1.08;
        letter-spacing: -0.02em;
        max-width: 16ch;
        position: relative;
        z-index: 2;
        text-shadow: 0 2px 20px rgba(123, 92, 255, 0.3);
      }

      .finalSub {
        margin: 1.2rem auto 0;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.55);
        max-width: 480px;
        position: relative;
        z-index: 2;
        line-height: 1.5;
      }

      .finalBtn {
        margin-top: 2rem;
        position: relative;
        z-index: 2;
        box-shadow: 0 4px 20px rgba(47, 109, 255, 0.4), 0 0 40px rgba(47, 109, 255, 0.15);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .finalBtn:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 30px rgba(47, 109, 255, 0.5), 0 0 60px rgba(47, 109, 255, 0.2);
      }
      /* Floating notification card */
      .finalNotifCard {
        position: relative;
        z-index: 3;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 14px 20px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        margin-bottom: 2.5rem;
        animation: notifBounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        box-shadow:
          0 8px 32px rgba(0, 0, 0, 0.3),
          0 0 40px rgba(47, 109, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        overflow: hidden;
        text-align: left;
        transform: translateZ(30px);
      }

      @keyframes notifBounceIn {
        0% { opacity: 0; transform: translateY(-30px) translateZ(30px) scale(0.8); }
        60% { transform: translateY(4px) translateZ(30px) scale(1.02); }
        100% { opacity: 1; transform: translateY(0) translateZ(30px) scale(1); }
      }

      .finalNotifGlow {
        position: absolute;
        inset: -2px;
        border-radius: 22px;
        background: conic-gradient(
          from 180deg,
          rgba(47, 109, 255, 0.5),
          rgba(123, 92, 255, 0.2),
          rgba(199, 75, 246, 0.4),
          rgba(123, 92, 255, 0.15),
          rgba(47, 109, 255, 0.5)
        );
        animation: glowSpin 4s linear infinite;
        filter: blur(8px);
        z-index: -1;
        opacity: 0.7;
      }

      .finalNotifIcon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .finalNotifContent {
        flex: 1;
        min-width: 0;
      }

      .finalNotifTitle {
        font-size: 13px;
        font-weight: 600;
        color: white;
        line-height: 1.2;
      }

      .finalNotifBody {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 2px;
        white-space: nowrap;
      }

      .finalNotifTime {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.35);
        flex-shrink: 0;
        align-self: flex-start;
      }

      /* Star field */
      .finalStars {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
      }

      .finalStar {
        position: absolute;
        border-radius: 50%;
        background: white;
        animation: starTwinkle 3s ease-in-out infinite;
      }

      .finalStar1 { width: 2px; height: 2px; top: 12%; left: 8%; animation-delay: 0s; }
      .finalStar2 { width: 1.5px; height: 1.5px; top: 25%; right: 12%; animation-delay: 0.8s; }
      .finalStar3 { width: 2px; height: 2px; top: 18%; left: 35%; animation-delay: 1.5s; }
      .finalStar4 { width: 1px; height: 1px; top: 8%; right: 30%; animation-delay: 2.2s; }
      .finalStar5 { width: 1.5px; height: 1.5px; bottom: 20%; left: 15%; animation-delay: 0.5s; }
      .finalStar6 { width: 2px; height: 2px; bottom: 30%; right: 20%; animation-delay: 1.8s; }

      @keyframes starTwinkle {
        0%, 100% { opacity: 0.15; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.5); }
      }

      /* ââ Footer ââ */

      .siteFooter {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        padding: 2rem 1.5rem;
        background: #FFFFFF;
      }

      .footerInner {
        max-width: 980px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .footerCopy {
        font-size: 0.85rem;
        color: #6E6E73;
      }

      .footerLinks {
        display: flex;
        gap: 2rem;
      }

      .footerLink {
        font-size: 0.85rem;
        color: #6E6E73;
        transition: color 0.2s;
      }

      .footerLink:hover { color: #1D1D1F; }

      /* ââ Phone Mockup (scroll-driven) ââ */

      .phoneMockup {
        width: 280px;
        height: 572px;
        border-radius: 44px;
        background: linear-gradient(160deg, #2A2A2E 0%, #1A1A1E 20%, #000 50%, #1A1A1E 100%);
        padding: 6px;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateY(-8deg) rotateX(4deg) translateZ(20px);
        box-shadow:
          0 0 0 1px rgba(255,255,255,0.1),
          0 0 0 2px #1A1A1E,
          0 0 0 4px #2A2A2E,
          0 50px 100px rgba(0, 0, 0, 0.4),
          0 20px 40px rgba(0, 0, 0, 0.25),
          -16px 32px 64px rgba(47, 109, 255, 0.12),
          0 0 100px rgba(100, 210, 230, 0.2), 0 0 200px rgba(80, 180, 220, 0.08);
        animation: phoneFloat 6s ease-in-out infinite;
      }

      .phoneMockup::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 44px;
        background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%);
        pointer-events: none;
        z-index: 20;
      }

      .phoneMockup::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 10%;
        right: 10%;
        height: 40px;
        background: radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%);
        filter: blur(12px);
        transform: translateZ(-40px);
        pointer-events: none;
      }

      @keyframes phoneFloat {
        0%, 100% { transform: rotateY(-8deg) rotateX(4deg) translateZ(20px) translateY(0); }
        50% { transform: rotateY(-5deg) rotateX(2deg) translateZ(30px) translateY(-12px); }
      }

      .phoneDynamic {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 28px;
        border-radius: 14px;
        background: #000;
        z-index: 10;
      }

      .phoneScreen {
        width: 100%;
        height: 100%;
        border-radius: 38px;
        background: linear-gradient(175deg, #c4ecf6 0%, #d4f4fa 12%, #e4faf6 25%, #eefcf4 40%, #e4f6ee 55%, #d4f0e4 70%, #c0e6de 85%, #a8dad4 100%);
        overflow: hidden;
        position: relative;
        transform: translateZ(6px);
        font-family: "DM Sans", -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      .phoneScreen::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 38px;
        background: linear-gradient(170deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.02) 40%, transparent 60%);
        pointer-events: none;
        z-index: 15;
      }

      /* Status bar */
      .phoneStatusBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px 0;
        height: 36px;
        position: relative;
        z-index: 12;
        transition: filter 0.4s ease;
      }

      .phoneStatusBarLight {
        filter: brightness(0) invert(1);
      }

      .phoneTime {
        font-size: 13px;
        font-weight: 700;
        color: #1D1D1F;
        letter-spacing: 0.01em;
      }

      .phoneStatusRight {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .phoneBatt {
        width: 22px;
        height: 10px;
        border: 1.5px solid #1D1D1F;
        border-radius: 3px;
        padding: 1.5px;
        position: relative;
      }

      .phoneBatt::after {
        content: '';
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 5px;
        border-radius: 0 1px 1px 0;
        background: #1D1D1F;
      }

      .phoneBattFill {
        width: 75%;
        height: 100%;
        border-radius: 1px;
        background: #1D1D1F;
      }

      /* Notification banner */
      .phoneNotif {
        position: absolute;
        top: 12px;
        left: 8px;
        right: 8px;
        padding: 12px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.6);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 20;
        opacity: 0;
        transform: translateY(-100%);
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .phoneNotif.phoneNotifVisible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.35s ease 0.2s, transform 0.35s ease 0.2s;
      }

      .phoneNotifAppIcon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .phoneNotifContent {
        flex: 1;
        min-width: 0;
      }

      .phoneNotifTitle {
        font-size: 13px;
        font-weight: 600;
        color: #1D1D1F;
        line-height: 1.2;
      }

      .phoneNotifBody {
        font-size: 12px;
        color: #6E6E73;
        margin-top: 1px;
      }

      /* Near app icon in corner */
      .phoneNearIcon {
        position: absolute;
        top: 46px;
        left: 14px;
        z-index: 5;
        width: 28px;
        height: 28px;
      }

      .phoneNearIconImg {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        display: block;
      }

      .phoneNearIconHidden {
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      /* Lock screen overlay */
      .phoneLockOverlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s ease, visibility 0s 0.25s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 70px;
        pointer-events: none;
        overflow: hidden;
        border-radius: 38px;
      }

      .phoneLockOverlay.phoneLockVisible {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease 0.15s, visibility 0s 0s;
      }

      /* Mountain lake wallpaper */
      .lockWallpaper {
        position: absolute;
        inset: 0;
        z-index: 0;
      }

      .lockSky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(180deg, #7ecbcc 0%, #9dd8d2 25%, #b5e2d8 40%, #cceee5 55%, #e6f5f0 70%, #f0f8f4 100%);
      }

      .lockMountainBack {
        position: absolute;
        top: 18%;
        left: 0;
        right: 0;
        height: 35%;
        background:
          linear-gradient(110deg, transparent 0%, transparent 5%,
            #8a9eb0 5%, #92a5b5 12%, #a0b0bc 18%, #7a8f9e 25%,
            #6d8494 30%, #8fa3b2 38%, #a5b7c4 42%, #92a5b5 48%,
            #7a8f9e 55%, #889cac 60%, #95aab8 68%,
            #a0b0bc 75%, #8a9eb0 82%, #7a8f9e 90%, transparent 95%);
        clip-path: polygon(0% 70%, 5% 45%, 12% 55%, 20% 25%, 28% 40%, 35% 15%, 42% 30%, 50% 10%, 58% 28%, 65% 18%, 72% 35%, 78% 20%, 85% 38%, 92% 22%, 100% 50%, 100% 100%, 0% 100%);
      }

      .lockMountainFront {
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        height: 25%;
        background:
          linear-gradient(120deg, #3d6b4e 0%, #4a7a58 15%, #2d5a3e 30%, #4a7a58 45%, #3d6b4e 60%, #2d5a3e 75%, #4a7a58 90%, #3d6b4e 100%);
        clip-path: polygon(0% 60%, 8% 40%, 15% 55%, 22% 30%, 30% 50%, 38% 25%, 45% 45%, 55% 20%, 62% 40%, 70% 30%, 78% 50%, 85% 35%, 92% 55%, 100% 40%, 100% 100%, 0% 100%);
        position: absolute;
      }

      .lockWater {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 52%;
        background: linear-gradient(180deg, #56b8c8 0%, #4ab0c2 15%, #3da8bc 30%, #35a0b5 50%, #2d98ae 70%, #2590a7 85%, #1d88a0 100%);
      }

      .lockWaterShimmer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 52%;
        background:
          repeating-linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 2%, transparent 4%),
          repeating-linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.03) 8px, transparent 16px);
        animation: waterShimmer 4s ease-in-out infinite;
      }

      @keyframes waterShimmer {
        0%, 100% { opacity: 0.6; transform: translateX(0); }
        50% { opacity: 1; transform: translateX(3px); }
      }

      .lockCloudDrift {
        position: absolute;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        filter: blur(8px);
      }

      .lockCloud1 {
        width: 60px;
        height: 16px;
        top: 12%;
        left: 15%;
        animation: cloudDrift 20s linear infinite;
      }

      .lockCloud2 {
        width: 40px;
        height: 12px;
        top: 18%;
        left: 55%;
        animation: cloudDrift 25s linear infinite;
        animation-delay: -8s;
        opacity: 0.4;
      }

      @keyframes cloudDrift {
        0% { transform: translateX(-20px); }
        100% { transform: translateX(40px); }
      }

      .lockTimeDisplay {
        font-size: 56px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        text-shadow: 0 1px 12px rgba(0,0,0,0.15);
        position: relative;
        z-index: 2;
      }

      .lockDateDisplay {
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.85);
        margin-top: 4px;
        text-shadow: 0 1px 4px rgba(0,0,0,0.15);
        position: relative;
        z-index: 2;
      }

      /* Glowing proximity card on lock screen */
      .lockProximityCard {
        position: relative;
        z-index: 2;
        margin-top: 16px;
        padding: 14px 16px;
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.14);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: 1px solid rgba(255, 255, 255, 0.25);
        width: 90%;
        animation: lockNotifSlide 0.6s ease-out 0.4s both;
        overflow: hidden;
        box-shadow:
          0 8px 32px rgba(0, 150, 255, 0.15),
          0 2px 8px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
      }

      .lockProximityGlow {
        position: absolute;
        inset: -3px;
        border-radius: 24px;
        background: conic-gradient(
          from 0deg,
          rgba(0, 210, 255, 0.6),
          rgba(120, 230, 255, 0.2),
          rgba(0, 190, 255, 0.5),
          rgba(80, 210, 240, 0.15),
          rgba(0, 210, 255, 0.6)
        );
        animation: glowSpin 3s linear infinite;
        filter: blur(8px);
        z-index: -1;
      }

      @keyframes glowSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes lockNotifSlide {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .lockProximityHeader {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .lockNotifIcon {
        width: 28px;
        height: 28px;
        border-radius: 7px;
        flex-shrink: 0;
      }

      .lockProximityTitleArea {
        flex: 1;
        min-width: 0;
      }

      .lockProximityLabel {
        font-size: 8px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.5);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .lockProximityTitle {
        font-size: 15px;
        font-weight: 700;
        color: white;
        line-height: 1.25;
        text-shadow: 0 0 16px rgba(0, 200, 255, 0.6), 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      .lockProximitySub {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 1px;
      }

      .lockTaskList {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 6px;
        perspective: 400px;
      }

      .lockTaskItem {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow:
          0 4px 16px rgba(0, 180, 255, 0.15),
          0 1px 3px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.15);
        animation: lockTaskGlow 2.5s ease-in-out infinite alternate;
        transform: translateZ(0);
        transition: transform 0.3s ease;
      }

      .lockTaskItem1 {
        animation-delay: 0s;
      }
      .lockTaskItem2 {
        animation-delay: 0.5s;
      }

      @keyframes lockTaskGlow {
        0% {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
          box-shadow: 0 4px 16px rgba(0, 180, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.15);
        }
        100% {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.12) 100%);
          box-shadow: 0 6px 24px rgba(0, 200, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.3);
        }
      }

      .lockTaskCheck {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.5);
        flex-shrink: 0;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.15);
      }

      .lockTaskText {
        flex: 1;
        font-size: 14px;
        font-weight: 600;
        color: white;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        letter-spacing: -0.01em;
      }

      .lockTaskPriority {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .lockTaskPriorityOrange {
        background: #FF9F0A;
        box-shadow: 0 0 10px rgba(255, 159, 10, 0.7), 0 0 20px rgba(255, 159, 10, 0.3);
      }

      .lockTaskPriorityRed {
        background: #FF453A;
        box-shadow: 0 0 10px rgba(255, 69, 58, 0.7), 0 0 20px rgba(255, 69, 58, 0.3);
      }

      .lockProximityShimmer {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
        animation: proximityShimmer 3s ease-in-out infinite;
        border-radius: 18px;
        pointer-events: none;
      }

      @keyframes proximityShimmer {
        0% { left: -100%; }
        50% { left: 100%; }
        100% { left: 100%; }
      }

      /* Lock screen bottom buttons */
      .lockFlashlightBtn, .lockCameraBtn {
        position: absolute;
        bottom: 24px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }

      .lockFlashlightBtn {
        left: 20px;
      }

      .lockCameraBtn {
        right: 20px;
      }

      .lockHomeBar {
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.4);
        z-index: 3;
      }

      /* Radar shimmer effect */
      .phoneRadarCardShimmer {
        position: relative;
        overflow: hidden;
      }

      .radarShimmer {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
        animation: radarShimmerAnim 3s ease-in-out infinite;
        border-radius: 10px;
      }

      @keyframes radarShimmerAnim {
        0% { left: -100%; }
        50% { left: 100%; }
        100% { left: 100%; }
      }

      .phoneTabBarHidden {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
      }

      /* Home screen (phase 0) */
      .phoneGreeting {
        font-size: 11px;
        font-weight: 500;
        color: rgba(30, 50, 80, 0.55);
        margin-bottom: 1px;
      }

      .phoneHomeTitle {
        font-size: 24px;
        font-weight: 800;
        color: #0a1a35;
        letter-spacing: -0.03em;
        line-height: 1.12;
      }

      .phonePlacesTitle {
        font-style: normal;
      }

      .phoneHomeSub {
        font-size: 11px;
        color: rgba(30, 50, 80, 0.45);
        margin-top: 1px;
        font-weight: 500;
      }

      .phoneQuickAdd {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 6px;
        padding: 6px 10px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.45);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        float: right;
      }

      .phoneQuickAddPlus {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--blue);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
      }

      .phoneQuickAddText {
        font-size: 11px;
        font-weight: 500;
        color: #1a2a4a;
      }

      .phoneQuickAddMic {
        opacity: 0.5;
      }

      .phoneRadarCard {
        clear: both;
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 7px 10px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.35);
      }

      .phoneRadarText {
        font-size: 11px;
        font-weight: 500;
        color: rgba(30, 50, 80, 0.6);
      }

      .phoneSectionLabel {
        font-size: 9px;
        font-weight: 700;
        color: rgba(30, 50, 80, 0.4);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 8px 0 5px;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .phoneSectionDot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--blue);
      }

      .phoneGroupList {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .phoneGroupItem {
        background: white;
        border-radius: 12px;
        padding: 8px 10px;
        border: 1px solid rgba(0, 0, 0, 0.06);
      }

      .phoneGroupItemGlass {
        background: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      }

      .phoneGroupHeader {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .phoneGroupEmoji {
        font-size: 14px;
        flex-shrink: 0;
        width: 26px;
        height: 26px;
        background: rgba(255,255,255,0.35);
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .phoneGroupInfo {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0;
        min-width: 0;
      }

      .phoneGroupName {
        font-size: 14px;
        font-weight: 700;
        color: #0d1f3c;
        line-height: 1.2;
      }

      .phoneGroupDist {
        font-size: 9px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
      }

      .phoneGroupTasks {
        margin-top: 4px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .phoneGroupTaskRow {
        display: flex;
        align-items: center;
        gap: 6px;
        padding-left: 32px;
      }

      .phoneTaskCheck {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        border: 1.5px solid rgba(30, 50, 80, 0.15);
        flex-shrink: 0;
      }

      .phoneGroupTaskText {
        font-size: 11px;
        color: #1a2a4a;
        flex: 1;
      }

      .phoneTaskDot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .phoneTaskDotOrange {
        background: #f5a623;
      }

      .phoneTaskDotRed {
        background: #e74c3c;
      }

      .phoneChevron {
        font-size: 18px;
        color: #C7C7CC;
        font-weight: 300;
      }

      .phoneGroupTask {
        font-size: 13px;
        color: #6E6E73;
        margin-top: 4px;
        padding-left: 24px;
      }

      /* Filter chips (places screen) */
      .phoneFilterChips {
        display: flex;
        gap: 4px;
        margin: 4px 0 6px;
      }

      .phoneChip {
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 600;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        color: rgba(30, 50, 80, 0.55);
        border: 1px solid rgba(255, 255, 255, 0.35);
      }

      .phoneChipActive {
        background: var(--blue);
        color: white;
        border-color: var(--blue);
      }

      /* Place cards */
      .phonePlaceCard {
        padding: 7px 10px 6px;
      }

      .phonePlaceNameRow {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .phonePlaceTag {
        font-size: 7px;
        font-weight: 700;
        color: var(--blue);
        background: rgba(47, 109, 255, 0.12);
        padding: 1px 5px;
        border-radius: 3px;
        letter-spacing: 0.04em;
      }

      .phonePlaceAddr {
        font-size: 8px;
        color: rgba(30, 50, 80, 0.35);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .phonePlaceDist {
        font-size: 10px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
        flex-shrink: 0;
      }

      .phonePlaceTags {
        display: flex;
        gap: 4px;
        margin-top: 4px;
        padding-left: 32px;
        flex-wrap: wrap;
      }

      .phonePlaceTaskTag {
        font-size: 9px;
        padding: 2px 7px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.4);
        color: rgba(30, 50, 80, 0.65);
        font-weight: 500;
      }

      .phoneBadgeBlue {
        background: rgba(47, 109, 255, 0.2) !important;
        color: var(--blue) !important;
      }

      .phoneContentPlaces {
        padding: 0 10px 10px;
      }

      .phoneGroupListTight {
        gap: 4px;
      }

      /* Home header with greeting + buttons */
      .phoneHomeHeader {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .phoneHomeHeaderLeft {
        flex: 1;
        min-width: 0;
      }
      .phoneGreeting {
        font-size: 11px;
        color: rgba(20, 40, 70, 0.5);
        font-weight: 600;
        margin-bottom: 1px;
      }
      .phoneHomeTitle {
        font-size: 18px;
        font-weight: 700;
        color: #1a2a4a;
        letter-spacing: -0.02em;
        line-height: 1.15;
      }
      .phoneHomeSub {
        font-size: 10px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
        margin-top: 2px;
      }
      .phoneHomeHeaderRight {
        display: flex;
        gap: 6px;
        margin-top: 2px;
      }
      .phoneHeaderBtn {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.65);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: rgba(30, 50, 80, 0.55);
        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      }


      .phoneAvatarBtn {
        background: rgba(255, 255, 255, 0.6) !important;
        border: 1px solid rgba(255, 255, 255, 0.65) !important;
        overflow: hidden;
      }
      .avatarEmoji {
        font-size: 18px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2px;
      }

      /* Game plan card */
      .phoneGamePlan {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 12px;
        padding: 10px 10px;
        margin-bottom: 8px;
      }
      .phoneGamePlanIcon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: linear-gradient(135deg, #5B86E5, #36D1DC);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        flex-shrink: 0;
        color: white;
        box-shadow: 0 2px 6px rgba(91,134,229,0.3);
      }
      .phoneGamePlanInfo {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1px;
        min-width: 0;
      }
      .phoneGamePlanTitle {
        font-size: 13px;
        font-weight: 600;
        color: #1a2a4a;
      }
      .phoneGamePlanSub {
        font-size: 10px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
      }
      .phoneGamePlanArrow {
        font-size: 14px;
        color: rgba(30, 50, 80, 0.25);
        flex-shrink: 0;
      }

      /* Add a place button */
      .phoneAddPlace {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 8px 0;
        margin-top: 6px;
        border-radius: 10px;
        border: 1.5px dashed rgba(30, 50, 80, 0.15);
        background: rgba(255, 255, 255, 0.15);
        cursor: pointer;
      }
      .phoneAddPlaceIcon {
        font-size: 14px;
        font-weight: 600;
        color: rgba(30, 50, 80, 0.35);
      }
      .phoneAddPlaceText {
        font-size: 11px;
        font-weight: 600;
        color: rgba(30, 50, 80, 0.35);
      }

      /* Household screen */
      .hhProfile {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
      }
      .hhAvatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: white;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.35);
        flex-shrink: 0;
      }
      .hhProfileName {
        font-size: 16px;
        font-weight: 700;
        color: #1a2a4a;
        line-height: 1.15;
      }
      .hhProfileSub {
        font-size: 9px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
        margin-top: 1px;
      }

      .hhNearCard {
        margin-bottom: 6px;
      }
      .hhNearHeader {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
      }
      .hhNearAvatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f093fb, #f5576c);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: white;
        font-weight: 600;
        flex-shrink: 0;
      }
      .hhNearInfo {
        flex: 1;
        min-width: 0;
      }
      .hhNearTitle {
        font-size: 12px;
        font-weight: 600;
        color: #1a2a4a;
        line-height: 1.2;
      }
      .hhNearSub {
        font-size: 9px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
      }
      .hhNearTasks {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding-left: 36px;
      }
      .hhNearTasks .phoneTaskRow {
        font-size: 11px;
      }
      .hhViewTasks {
        font-size: 10px;
        font-weight: 600;
        color: #5B86E5;
        padding-left: 36px;
        margin-top: 4px;
        cursor: pointer;
      }

      .hhPlaceRow {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 10px !important;
      }
      .hhPlaceInfo {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1px;
        min-width: 0;
      }
      .hhPlaceInfo strong {
        font-size: 12px;
        font-weight: 600;
        color: #1a2a4a;
      }
      .hhPlaceTasksText {
        font-size: 9px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .hhActivityRow {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px !important;
      }
      .hhActivityText {
        font-size: 11px;
        color: rgba(30, 50, 80, 0.7);
        line-height: 1.3;
      }
      .hhActivityText strong {
        color: #1a2a4a;
        font-weight: 600;
      }

      /* Phase content layers */
      .phoneContent {
        position: absolute;
        top: 54px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 12px 56px;
        overflow-y: auto;
        overflow-x: hidden;
        opacity: 0;
        transform: translateY(6px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        pointer-events: none;
      }

      .phoneContent.phoneContentVisible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s;
        pointer-events: auto;
      }


      /* Store detail header (Phase 1) */
      .phoneStoreHeader {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 14px;
        padding: 0 2px;
      }

      .phoneStoreBack {
        font-size: 22px;
        font-weight: 300;
        color: rgba(41, 151, 255, 0.9);
        cursor: pointer;
        line-height: 1;
      }

      .phoneStoreEmoji {
        font-size: 24px;
        line-height: 1;
      }

      .phoneStoreInfo {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .phoneStoreName {
        font-size: 20px;
        font-weight: 700;
        color: white;
        letter-spacing: -0.02em;
      }

      .phoneStoreDist {
        font-size: 12px;
        color: rgba(255,255,255,0.45);
        font-weight: 500;
      }

      .phoneTaskDone {
        text-decoration: line-through;
        opacity: 0.4;
      }

      .phoneChecked {
        background: rgba(41, 151, 255, 0.25) !important;
        border-color: rgba(41, 151, 255, 0.5) !important;
        color: #2997ff !important;
      }

      /* App header (inside phone) */
      .phoneAppHeader {
        margin-bottom: 16px;
        padding: 0 2px;
      }

      .phoneAppTitle {
        font-size: 28px;
        font-weight: 700;
        color: #1D1D1F;
        letter-spacing: -0.02em;
      }

      .phoneAppCount {
        font-size: 14px;
        color: #6E6E73;
        margin-top: 2px;
      }

      /* Task list (inside phone) */
      .phoneTaskList {
        display: flex;
        flex-direction: column;
        gap: 1px;
        background: rgba(0, 0, 0, 0.06);
        border-radius: 12px;
        overflow: hidden;
      }

      .phoneTaskRow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 13px 14px;
        background: white;
      }

      .phoneCheck {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1.5px solid rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        color: transparent;
        background: transparent;
        flex-shrink: 0;
      }

      .phoneTaskText {
        font-size: 15px;
        font-weight: 400;
        color: #1D1D1F;
        flex: 1;
      }

      /* Places badge (idle list) */
      .placeIcon {
        font-size: 1.1rem;
        flex-shrink: 0;
      }

      .phoneBadge {
        font-size: 10px;
        font-weight: 600;
        color: rgba(30, 50, 80, 0.55);
        background: rgba(255, 255, 255, 0.45);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Glass card styling */
      .glassTaskList {
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
      }

      .glassTaskList .phoneTaskRow {
        background: rgba(255, 255, 255, 0.7);
      }

      /* CarPlay card (inside phone â Target phase) */
      .phoneCarplay {
        background: rgba(28, 28, 30, 0.92);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 16px;
        padding: 16px;
        color: white;
        margin-top: 20px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      }

      .phoneCarplayLabel {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 600;
        margin-bottom: 4px;
      }

      .phoneCarplayStore {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      .phoneCarplayTasks {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 10px;
      }

      .phoneCarplayTasks span {
        padding: 8px 10px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.08);
        font-size: 13px;
        color: rgba(255, 255, 255, 0.8);
      }

      /* Signal & WiFi icons */
      .phoneSignal {
        display: block;
      }

      .phoneWifi {
        display: block;
      }

      /* Tab bar */
      .phoneTabBar {
        position: absolute;
        bottom: 14px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        padding: 5px 4px 2px;
        background: rgba(190, 230, 222, 0.8);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        border-top: 0.5px solid rgba(255, 255, 255, 0.25);
        z-index: 15;
      }

      .phoneTab {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
        font-size: 8px;
        font-weight: 500;
        color: rgba(30, 50, 80, 0.4);
        padding: 1px 0;
        transition: color 0.4s ease;
      }

      .phoneTabActive {
        color: var(--blue);
      }

      .phoneTabActive span {
        font-weight: 600;
      }

      .phoneTab svg {
        width: 19px;
        height: 19px;
      }

      .phoneTabAdd {
        margin-top: -6px;
      }

      .phoneAddBtn {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: var(--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(47, 109, 255, 0.3);
      }

      .phoneAddBtn svg {
        width: 14px;
        height: 14px;
      }

      /* Home indicator */
      .phoneHomeIndicator {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: transparent;
      }

      .phoneHomeBar {
        width: 36%;
        height: 4px;
        border-radius: 100px;
        background: rgba(0, 0, 0, 0.22);
      }

      /* ââ Responsive ââ */

      @media (max-width: 1024px) {
        .heroSplit { gap: 2.5rem; }

        .heroGlow {
          left: 50%;
          width: 600px;
          height: 600px;
        }

        .phoneMockup {
          width: 230px;
          height: 470px;
          border-radius: 40px;
        }

        .phoneScreen { border-radius: 34px; }

        .phoneDynamic {
          width: 100px;
          height: 28px;
          border-radius: 14px;
          top: 10px;
        }

        .heroTitle { font-size: clamp(2.4rem, 6vw, 3.5rem); }

        .splitGrid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        .splitGrid.reverse .splitCopy { order: 1; }
        .splitGrid.reverse .splitVisual { order: 2; }

        .ecoGrid {
          grid-template-columns: repeat(2, 1fr);
        }

        .sectionTitle.left { text-align: center; }
        .splitCopy { text-align: center; }
        .caption { text-align: center; }
      }

      @media (prefers-reduced-motion: reduce) {
        .reveal { transition-duration: 0.01ms !important; }
        [data-tilt] { transform: none !important; transition: none !important; }
        .sectionTitle { transform: none !important; }
        .gradientText { animation: none !important; }
        .privacyOrbitRing { animation: none !important; }
        .philPulseRing { animation: none !important; }
        .finalParticle { animation: none !important; opacity: 0.5 !important; }
        .finalOrb3 { animation: none !important; }
        .lockWaterShimmer { animation: none !important; }
        .lockCloudDrift { animation: none !important; }
        .lockProximityCard { animation: none !important; opacity: 1 !important; }
        .magicOrb { animation: none !important; }
        .lockProximityGlow { animation: none !important; }
        .lockTaskItem { animation: none !important; }
        .lockProximityShimmer { animation: none !important; }
        .radarShimmer { animation: none !important; }
      }

      @media (max-width: 720px) {
        .hideOnMobile { display: none; }

        .hero {
          min-height: auto;
          padding: 56px 0.5rem 2rem;
        }

        .heroSplit {
          flex-direction: column;
          text-align: center;
          gap: 2rem;
        }

        .heroPhone { order: 2; }

        .heroCopy { text-align: center; order: 1; }

        .heroIcon { margin-left: auto; margin-right: auto; }

        .heroPhases { margin-left: auto; margin-right: auto; max-width: 320px; }

        .heroCtas { justify-content: center; }

        .section { padding: 5rem 1rem; }

        .heroIcon {
          width: 44px;
          height: 44px;
          margin-bottom: 0.5rem;
          border-radius: 11px;
        }

        .eyebrow { font-size: 12px; margin-bottom: 0.4rem; }

        .heroTitle {
          font-size: clamp(2rem, 9vw, 3rem);
        }

        .heroSub { font-size: 17px; margin-top: 0.5rem; }

        .heroPhaseText { font-size: 15px; }
        .heroPhases { min-height: 44px; margin-top: 0.5rem; }

        .sectionTitle {
          font-size: clamp(1.8rem, 7vw, 2.4rem);
        }

        .heroCtas {
          flex-direction: column;
          align-items: stretch;
          margin-top: 1.25rem;
        }

        .primaryBtn, .secondaryBtn {
          justify-content: center;
          text-align: center;
          padding: 0.75rem 1.4rem;
          font-size: 0.9rem;
        }

        .phoneMockup {
          width: 220px;
          height: 450px;
          border-radius: 36px;
          padding: 5px;
          transform: rotateY(-4deg) rotateX(2deg) translateZ(10px);
        }

        @keyframes phoneFloat {
          0%, 100% { transform: rotateY(-4deg) rotateX(2deg) translateZ(10px) translateY(0); }
          50% { transform: rotateY(-3deg) rotateX(2deg) translateZ(12px) translateY(-5px); }
        }

        .phoneScreen { border-radius: 31px; }

        .phoneDynamic {
          width: 90px;
          height: 26px;
          border-radius: 13px;
          top: 9px;
        }

        .phoneStatusBar {
          padding: 12px 16px 0;
          height: 40px;
        }

        .phoneTime { font-size: 13px; }

        .phoneNearIcon { top: 42px; left: 11px; width: 24px; height: 24px; }
        .phoneNearIconImg { width: 24px; height: 24px; border-radius: 5px; }
        .phoneContent { top: 68px; bottom: 0; padding: 0 11px 52px; }
        .lockTimeDisplay { font-size: 46px; }
        .lockDateDisplay { font-size: 12px; }
        .phoneLockOverlay { padding-top: 58px; }
        .lockProximityCard { padding: 11px 13px; margin-top: 14px; }
        .lockNotifIcon { width: 24px; height: 24px; }
        .phoneGreeting { font-size: 12px; }
        .phoneHomeTitle { font-size: 20px; }
        .phoneHomeSub { font-size: 12px; }
        .phoneSectionLabel { font-size: 10px; margin: 10px 0 5px; }
        .phoneGroupItem { padding: 8px 9px; border-radius: 9px; }
        .phoneGroupEmoji { font-size: 14px; }
        .phoneGroupName { font-size: 13px; }
        .phoneGroupTask { font-size: 12px; padding-left: 22px; margin-top: 2px; }
        .phoneChevron { font-size: 15px; }
        .phoneFilterChips { gap: 5px; margin: 5px 0 3px; }
        .phoneChip { font-size: 10px; padding: 3px 8px; }

        .phoneAppTitle { font-size: 22px; }
        .phoneAppCount { font-size: 13px; }
        .phoneAppHeader { margin-bottom: 10px; }
        .phoneStoreHeader { gap: 7px; margin-bottom: 9px; }
        .phoneStoreBack { font-size: 20px; }
        .phoneStoreEmoji { font-size: 18px; }
        .phoneStoreName { font-size: 15px; }
        .phoneStoreDist { font-size: 10px; }

        .phoneTaskRow { padding: 10px 11px; gap: 9px; }
        .phoneTaskText { font-size: 13px; }
        .phoneCheck { width: 19px; height: 19px; font-size: 11px; }
        .placeIcon { font-size: 1rem; }
        .phoneBadge { width: 19px; height: 19px; font-size: 11px; }
        .phoneGroupList { gap: 4px; }

        .phoneNotif {
          top: 9px;
          left: 6px;
          right: 6px;
          padding: 9px;
          border-radius: 15px;
          gap: 7px;
        }

        .phoneNotifAppIcon {
          width: 26px;
          height: 26px;
          border-radius: 6px;
        }

        .phoneNotifTitle { font-size: 12px; }
        .phoneNotifBody { font-size: 11px; }

        .phoneCarplay {
          margin-top: 10px;
          padding: 11px;
          border-radius: 13px;
        }

        .phoneCarplayLabel { font-size: 10px; }
        .phoneCarplayStore { font-size: 17px; }
        .phoneCarplayTasks { gap: 5px; margin-top: 7px; }
        .phoneCarplayTasks span { padding: 7px 9px; font-size: 12px; border-radius: 7px; }

        .phoneContent { bottom: 0; padding-bottom: 52px; }

        .phoneTabBar { padding: 5px 3px 2px; }
        .phoneTab { font-size: 8px; gap: 2px; }
        .phoneTab svg { width: 16px; height: 16px; }
        .phoneAddBtn { width: 26px; height: 26px; }
        .phoneAddBtn svg { width: 13px; height: 13px; }
        .phoneTabAdd { margin-top: -4px; }

        .phoneHomeBar { height: 3px; }
        .phoneHomeIndicator { padding-bottom: 5px; }

        .phoneSignal { width: 14px; height: 10px; }
        .phoneWifi { width: 13px; height: 11px; }

        .heroGlow {
          width: 400px;
          height: 400px;
        }

        .ecoGrid {
          grid-template-columns: 1fr;
        }

        .pillGrid {
          flex-direction: column;
          align-items: center;
        }

        .brandLogo { height: 30px; }

        .finalShell { padding: 3rem 1.5rem; }

        .footerInner {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }

    `}</style>
  )
}
