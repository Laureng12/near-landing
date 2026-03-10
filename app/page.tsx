"use client"

import React, { useEffect, useMemo, useState } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

export default function Page() {
  return (
    <main className="page">
      <TopNav />

      <Hero />

      <PhoneShowcase />

      <AppleEventSections />

      <FinalCTA />

      <SiteFooter />

      <SiteStyles />
    </main>
  )
}

/* --------------------------------- NAV --------------------------------- */

function TopNav() {
  return (
    <header className="nav">
      <div className="navInner">
        <div className="brand">
          <NearMark sizePx={28} />
          <span className="brandWord">near</span>
        </div>

        <div className="navActions">
          <a className="navLink" href="#how">How it works</a>
          <a className="navLink" href="#features">Features</a>
          <a className="navLink" href="#household">Household</a>
          <a className="navCta" href={APP_STORE_URL}>Download</a>
        </div>
      </div>
    </header>
  )
}

/* --------------------------------- HERO -------------------------------- */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroBg" aria-hidden="true" />
      <div className="heroGrid" aria-hidden="true" />

      <div className="heroInner">
        <div className="heroLogoRow">
          <div className="heroLogo">
            <NearMark sizePx={34} />
            <span className="heroWord">near</span>
          </div>
        </div>

        <div className="heroIconCapsuleWrap">
          <IconCapsule />
        </div>

        <div className="heroTitleGlow" aria-hidden="true" />
        <h1 className="heroTitle">
          Never Forget<br />Anything Again.
        </h1>

        <p className="heroSub">
          Near turns location into action.{"\n"}
          You don{"'"}t check lists.{"\n"}
          They check in when you arrive.
        </p>

        <div className="heroCtas">
          <a className="primaryBtn" href={APP_STORE_URL}>
            Download Near
          </a>
          <a className="secondaryBtn" href="#how">
            See it in action
          </a>
        </div>

        <div className="heroMeta">
          <span className="pill">No timers</span>
          <span className="pill">No opening the app</span>
          <span className="pill">Household sync</span>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------- ICON CAPSULE ------------------------------ */

function IconCapsule() {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="iconCapsule"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="halo"
        style={{
          opacity: hover ? 1 : 0.8,
          transform: `translate(-50%, -50%) scale(${hover ? 1.15 : 1})`,
        }}
        aria-hidden="true"
      />

      <div className="iconStack">
        <div
          className="iconFloat"
          style={{ transform: `translateY(${hover ? -6 : 0}px)` }}
        >
          <div className="iconGlow" aria-hidden="true" />
          <div className="iconPlate">
            <NearMark sizePx={140} />
          </div>
        </div>

        <div className="iconText">
          <div className="iconName">Near</div>
          <div className={`iconCaption ${hover ? "grad" : ""}`}>
            {hover ? "Arrive. Remember nothing." : "Ambient task intelligence"}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------- PHONE SHOWCASE ---------------------------- */

function PhoneShowcase() {
  return (
    <section className="showcase" id="how">
      <div className="showcaseBg" aria-hidden="true" />
      <div className="showcaseInner">

        {/* LEFT -- SUNRISE */}
        <div className="phone phoneLeft">
          <div className="phoneFrame">
            <SunrisePlacesScreen />
          </div>
        </div>

        {/* CENTER -- DAY (PRIMARY) */}
        <div className="phone phoneCenter">
          <div className="phoneFrame phoneFrameMain">
            <DayPlaceViewScreen />
          </div>
        </div>

        {/* RIGHT -- DUSK */}
        <div className="phone phoneRight">
          <div className="phoneFrame">
            <DuskHouseholdScreen />
          </div>
        </div>

      </div>

      <div className="showcaseCopy" id="features">
        <h2 className="sectionTitle">It runs in the background. Quietly.</h2>
        <p className="sectionSub">
          You do not schedule reminders. You do not open the app. Location becomes action.
        </p>

        <div className="featureGrid">
          <AnimatedFeatureCard
            icon="location"
            title="Arrive. It appears."
            desc="Pull in and your list is waiting. Like it should have been there all along."
            tag="Automatic"
            accent="rgba(88,217,255,0.60)"
          />
          <AnimatedFeatureCard
            icon="radar"
            title="Drive by. It reminds you."
            desc="Even if you were not planning to stop. Near catches the near-misses."
            tag="Smart"
            accent="rgba(255,160,100,0.60)"
          />
          <AnimatedFeatureCard
            icon="people"
            title="Household sync, instantly."
            desc="If someone in your home is there, they see it. Shared calm. Shared memory."
            tag="Shared"
            accent="rgba(140,90,255,0.60)"
          />
        </div>
      </div>
    </section>
  )
}

function AnimatedFeatureCard(props: {
  icon: "location" | "radar" | "people"
  title: string
  desc: string
  tag: string
  accent: string
}) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const delay = props.icon === "location" ? 800 : props.icon === "radar" ? 2400 : 4000
    const timer = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(timer)
  }, [props.icon])

  return (
    <div
      className={`featureCard ${active ? "featureCardActive" : ""}`}
      style={{ "--feat-accent": props.accent } as React.CSSProperties}
    >
      <div className="featureIconWrap">
        {props.icon === "location" && (
          <svg className="featureIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        )}
        {props.icon === "radar" && (
          <svg className="featureIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a10 10 0 0 1 10 10" className="featureRadar1" />
            <path d="M12 5a7 7 0 0 1 7 7" className="featureRadar2" />
          </svg>
        )}
        {props.icon === "people" && (
          <svg className="featureIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="7" r="3" />
            <circle cx="17" cy="7" r="2.5" />
            <path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
            <path d="M17 10a4 4 0 0 1 4 4v1" className="featurePeople2" />
          </svg>
        )}
        <div className="featureIconGlow" aria-hidden="true" />
      </div>
      <div className="featureTag">{props.tag}</div>
      <div className="featureTitle">{props.title}</div>
      <div className="featureDesc">{props.desc}</div>
      <div className="featureShine" aria-hidden="true" />
    </div>
  )
}

/* -------------------------- APPLE EVENT SECTIONS ------------------------ */

function AppleEventSections() {
  const [activeMember, setActiveMember] = useState(0)
  const [feedItems, setFeedItems] = useState<{text: string; member: number; visible: boolean}[]>([])

  const members = useMemo(() => [
    { name: "You", initials: "Y", gradient: "linear-gradient(135deg, #58C8FA, #4BA0E0)" },
    { name: "Brian", initials: "B", gradient: "linear-gradient(135deg, #FFA064, #E87C3E)" },
    { name: "Reese", initials: "R", gradient: "linear-gradient(135deg, #8C5AFF, #6B3FD9)" },
  ], [])

  const feedMessages = useMemo(() => [
    { text: "You added Milk to Publix", member: 0 },
    { text: "Brian checked off Paper towels", member: 1 },
    { text: "Reese is near Target", member: 2 },
    { text: "Brian added Dog food to Target", member: 1 },
  ], [])

  useEffect(() => {
    let idx = 0
    const int = setInterval(() => {
      const msg = feedMessages[idx % feedMessages.length]
      setActiveMember(msg.member)
      setFeedItems(prev => {
        const next = [{ ...msg, visible: true }, ...prev].slice(0, 3)
        return next
      })
      idx++
    }, 2800)
    return () => clearInterval(int)
  }, [feedMessages])

  return (
    <>
      <section className="eventSection" id="household">
        <div className="eventGlow" aria-hidden="true" />
        <div className="eventInner">
          <div className="eventKicker">Household</div>
          <h3 className="eventHeadline">One list. Everyone benefits.</h3>
          <p className="eventBody">
            Near syncs your household in real time. Brian swings by Publix --
            the list is already there. Reese passes Target -- she sees it too.
            No forwarding. No group chat. Just calm coordination.
          </p>

          {/* Member constellation */}
          <div className="hhConstellation">
            <svg className="hhConstellationSvg" viewBox="0 0 300 80" fill="none" aria-hidden="true">
              <line x1="75" y1="40" x2="150" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <line x1="150" y1="40" x2="225" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <circle cx="75" cy="40" r="2" fill={activeMember === 0 ? "rgba(88,200,250,0.60)" : "rgba(255,255,255,0.10)"} className="hhConstellationDot" />
              <circle cx="150" cy="40" r="2" fill={activeMember === 1 ? "rgba(255,160,100,0.60)" : "rgba(255,255,255,0.10)"} className="hhConstellationDot" />
              <circle cx="225" cy="40" r="2" fill={activeMember === 2 ? "rgba(140,90,255,0.60)" : "rgba(255,255,255,0.10)"} className="hhConstellationDot" />
              {/* Traveling pulse */}
              <circle r="3" fill="rgba(88,200,250,0.50)" filter="url(#pulseBlur)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M75,40 L150,40 L225,40 L150,40 Z" />
              </circle>
              <defs>
                <filter id="pulseBlur"><feGaussianBlur stdDeviation="2" /></filter>
              </defs>
            </svg>

            <div className="hhMemberRow">
              {members.map((m, i) => (
                <div key={m.name} className={`hhMemberNode ${activeMember === i ? "hhMemberNodeActive" : ""}`}>
                  <div className="hhMemberAvatar" style={{ background: m.gradient }}>
                    <span className="hhMemberInitial">{m.initials}</span>
                    {activeMember === i && <span className="hhMemberPulseRing" style={{ borderColor: i === 0 ? "rgba(88,200,250,0.40)" : i === 1 ? "rgba(255,160,100,0.40)" : "rgba(140,90,255,0.40)" }} />}
                  </div>
                  <span className="hhMemberLabel">{m.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live activity feed */}
          <div className="hhLiveFeed">
            <div className="hhFeedHeader">
              <span className="hhFeedDot" />
              <span className="hhFeedTitle">Live</span>
            </div>
            <div className="hhFeedList">
              {feedItems.map((item, i) => (
                <div key={`${item.text}-${i}`} className="hhFeedItem" style={{ opacity: 1 - i * 0.3, animationDelay: "0s" }}>
                  <span className="hhFeedItemDot" style={{ background: members[item.member].gradient }} />
                  <span className="hhFeedItemText">{item.text}</span>
                </div>
              ))}
              {feedItems.length === 0 && (
                <div className="hhFeedItem" style={{ opacity: 0.4 }}>
                  <span className="hhFeedItemDot" style={{ background: "rgba(255,255,255,0.15)" }} />
                  <span className="hhFeedItemText">Waiting for activity...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="eventSection alt">
        <div className="eventInner">
          <div className="eventKicker">Privacy</div>
          <h3 className="eventHeadline">Location, used responsibly.</h3>
          <p className="eventBody">
            Near is not a feed. It is not social. It is not trying to become your personality.
            It uses location to do one job: show you the right list at the right time.
          </p>

          <div className="eventSplit">
            <div className="splitCard splitCardAnimated">
              <div className="splitIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="splitSvg">
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
                </svg>
              </div>
              <div className="splitTitle">Designed for iPhone</div>
              <div className="splitText">
                Polished, native-feeling, and calm. The point is less thinking, not more features.
              </div>
            </div>
            <div className="splitCard splitCardAnimated">
              <div className="splitIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="splitSvg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
                </svg>
              </div>
              <div className="splitTitle">Built for momentum</div>
              <div className="splitText">
                The best productivity system is the one you actually use. Near meets you where you already are.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------ SITE FOOTER ----------------------------- */
function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerTop">
          <div className="footerBrandCol">
            <div className="footerBrandRow">
              <NearMark sizePx={28} />
              <span className="footerBrandName">near</span>
            </div>
            <p className="footerTagline">The to-do list with better timing.</p>
          </div>
          <div className="footerLinks">
            <div className="footerCol">
              <div className="footerColTitle">Product</div>
              <a className="footerLink" href="#how">How it works</a>
              <a className="footerLink" href="#household">Household</a>
            </div>
            <div className="footerCol">
              <div className="footerColTitle">Company</div>
              <a className="footerLink" href="mailto:hello@nearesttask.com">Contact</a>
              <a className="footerLink" href="/privacy">Privacy Policy</a>
              <a className="footerLink" href="/terms">Terms of Service</a>
            </div>
            <div className="footerCol">
              <div className="footerColTitle">Download</div>
              <a className="footerLink" href={APP_STORE_URL}>App Store</a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerLegal">&copy; {new Date().getFullYear()} Near. All rights reserved.</p>
          <p className="footerLegal footerMadeWith">Made with care in the USA.</p>
        </div>
      </div>
    </footer>
  )
}

/* --------------------------------- CTA --------------------------------- */

function FinalCTA() {
  return (
    <section className="finalCta">
      <div className="finalInner">
        <div className="finalGlow" aria-hidden="true" />

        <h2 className="finalTitle">Never forget anything again.</h2>
        <p className="finalSub">Free. Always.</p>

        <div className="finalButtons">
          <a className="primaryBtn big" href={APP_STORE_URL}>Download Near</a>
          <a className="secondaryBtn big" href="#top">Back to top</a>
        </div>

        <div className="footerMini">
          <div className="footerBrand">
            <NearMark sizePx={26} />
            <span className="footerWord">near</span>
          </div>
          <div className="footerNote">Ambient task intelligence.</div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ PHONE UI -------------------------------- */

/** Shared iPhone chrome */
function PhoneChrome(props: {
  titleLeft?: string
  titleCenter?: string
  titleRight?: string
  children: React.ReactNode
  theme: "sunrise" | "day" | "dusk"
}) {
  return (
    <div className={`screen screen-${props.theme}`}>
      <div className="statusBar">
        <div className="sbLeft">9:41</div>
        <div className="sbCenter" />
        <div className="sbRight">
          <span className="sig" />
          <span className="wifi" />
          <span className="bat" />
        </div>
      </div>

      <div className="topBar">
        <button className="circleBtn" aria-label="Back">{"\u2039"}</button>

        <div className="topCenter">
          <NearMark sizePx={18} />
          <div className="topTitle">near</div>
        </div>

        <button className="circleBtn" aria-label="Add">+</button>
      </div>

      <div className="screenBody">{props.children}</div>
    </div>
  )
}

/* --------- PLACES: Dusk palette, distances, ambient nearby banner ------ */

function SunrisePlacesScreen() {
  const [bannerPulse, setBannerPulse] = useState(0)

  const publixTasks = useMemo(() => ["Milk", "Blueberries", "Paper towels"], [])
  const [publixChecked, setPublixChecked] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setBannerPulse(p => (p + 1) % 100), 2200)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const delays = [2200, 4400, 6600]
    const timers: ReturnType<typeof setTimeout>[] = []

    delays.forEach((d, i) => {
      timers.push(setTimeout(() => setPublixChecked(i + 1), d))
    })

    timers.push(setTimeout(() => setPublixChecked(0), 10500))

    const loop = setInterval(() => {
      setPublixChecked(0)
      delays.forEach((d, i) => {
        timers.push(setTimeout(() => setPublixChecked(i + 1), d))
      })
      timers.push(setTimeout(() => setPublixChecked(0), 10500))
    }, 10500)

    return () => { timers.forEach(clearTimeout); clearInterval(loop) }
  }, [])

  const places = useMemo(() => [
    { name: "Publix", items: 3, dist: "0.3 mi", color: "c1", nearby: true, expanded: true },
    { name: "Target", items: 4, dist: "1.2 mi", color: "c2", nearby: false, expanded: false },
    { name: "Home Depot", items: 1, dist: "2.8 mi", color: "c3", nearby: false, expanded: false },
    { name: "Dry Cleaners", items: 2, dist: "3.4 mi", color: "c4", nearby: false, expanded: false },
    { name: "Walgreens", items: 1, dist: "4.1 mi", color: "c5", nearby: false, expanded: false },
  ], [])

  return (
    <PhoneChrome theme="sunrise">
      <div className="duskPad">
        {/* Ambient nearby banner */}
        <div
          className="nearbyBanner"
          style={{ opacity: 0.92 + (bannerPulse % 2) * 0.08 }}
        >
          <div className="nearbyBannerDot" />
          <div className="nearbyBannerText">
            <div className="nearbyBannerTitle">Publix is nearby</div>
            <div className="nearbyBannerSub">
              Want to stop in and knock some things off your list?
            </div>
          </div>
          <div className="nearbyBannerChev">{">"}</div>
        </div>

        <div className="duskTitleBlock">
          <div className="duskH1">Places</div>
          <div className="duskSub">Your lists, sorted by distance.</div>
        </div>

        <div className="duskListCard">
          <div className="duskCardHeader">
            <span className="duskCardTitle">Nearby</span>
            <span className="duskCardMeta">{places.length} saved</span>
          </div>

          {places.map((p) => (
            <div key={p.name}>
              <div className="duskRow">
                <div className={`duskDot ${p.color} ${p.nearby ? "duskDotPulse" : ""}`} />
                <div className="duskRowMain">
                  <div className="duskRowName">{p.name}</div>
                  <div className="duskRowHint">
                    {p.name === "Publix"
                      ? `${p.items - publixChecked} item${p.items - publixChecked !== 1 ? "s" : ""} left`
                      : `${p.items} item${p.items !== 1 ? "s" : ""}`
                    }
                  </div>
                </div>
                <div className="duskRowDist">
                  {p.nearby && <span className="duskNearbyTag">Nearby</span>}
                  <span className="duskDistText">{p.dist}</span>
                </div>
                <div className="duskChev">{">"}</div>
              </div>
              {p.expanded && (
                <div className="duskExpandedItems">
                  {publixTasks.map((task, i) => {
                    const done = i < publixChecked
                    const justChecked = i === publixChecked - 1
                    return (
                      <div key={task} className={`duskExpandedRow ${done ? "duskExpandedDone" : ""}`}>
                        <div
                          className={`duskExpandedBox ${done ? "duskExpandedBoxChecked" : ""}`}
                          style={{ transition: "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                        >
                          {done && (
                            <span
                              className="duskExpandedCheck"
                              style={{
                                animation: justChecked
                                  ? "checkReveal 0.5s cubic-bezier(0.34, 1.3, 0.64, 1) forwards"
                                  : undefined,
                              }}
                            >
                              {"\u2713"}
                            </span>
                          )}
                        </div>
                        <span className={`duskExpandedLabel ${done ? "duskExpandedLabelDone" : ""}`}>
                          {task}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="duskSectionLabel">RECENT ACTIVITY</div>
        <div className="duskRecentCard">
          <span className="duskRecentDot" />
          <span className="duskRecentText">You checked off Soap at Target</span>
          <span className="duskRecentTime">2m ago</span>
        </div>
        <div className="duskRecentCard">
          <span className="duskRecentDot duskRecentDotAlt" />
          <span className="duskRecentText">JM added Light bulbs</span>
          <span className="duskRecentTime">8m ago</span>
        </div>

        <div className="duskFooterNote">
          Near sorts by proximity. Closest places surface first.
        </div>
      </div>
    </PhoneChrome>
  )
}

/* --------- DAY: Light theme, completion reveal matching reference ------- */

function DayPlaceViewScreen() {
  const items = useMemo(() => [
    { label: "Paper towels", detail: "Bounty, 6-pack", location: "Target", distance: "0.2 mi" },
    { label: "Dish soap", detail: "Dawn Platinum", location: "Target", distance: "0.2 mi" },
    { label: "Almond milk", detail: "Unsweetened Vanilla", location: "Publix", distance: "0.8 mi" },
    { label: "Sparkling water", detail: "Topo Chico, 12-pk", location: "Costco", distance: "1.4 mi" },
  ], [])

  const [checkedCount, setCheckedCount] = useState(0)
  const [showComplete, setShowComplete] = useState(false)

  useEffect(() => {
    const delays = [1200, 2400, 3600, 4800]
    const timers: ReturnType<typeof setTimeout>[] = []

    items.forEach((_, i) => {
      timers.push(setTimeout(() => setCheckedCount(i + 1), delays[i]))
    })

    timers.push(setTimeout(() => setShowComplete(true), 6000))

    timers.push(setTimeout(() => {
      setShowComplete(false)
      setCheckedCount(0)
    }, 11000))

    const loop = setInterval(() => {
      setShowComplete(false)
      setCheckedCount(0)

      items.forEach((_, i) => {
        timers.push(setTimeout(() => setCheckedCount(i + 1), delays[i]))
      })
      timers.push(setTimeout(() => setShowComplete(true), 6000))
      timers.push(setTimeout(() => {
        setShowComplete(false)
        setCheckedCount(0)
      }, 11000))
    }, 11000)

    return () => { timers.forEach(clearTimeout); clearInterval(loop) }
  }, [items])

  const allDone = checkedCount >= items.length

  return (
    <PhoneChrome theme="day">
      <div className="dayScreen">
        {/* Store header */}
        <div className="dayHeader">
          <div className="dayStoreName">
            <span className="dayBlueDot" />
            <span className="dayStoreText">Target</span>
          </div>
          <div className="dayChipRow">
            <span className="dayNearbyChip">Nearby</span>
            <span className="dayArrived">Arrived 2 min ago</span>
          </div>
        </div>

        {/* Completion card */}
        <div className={`dayCompCard ${showComplete ? "dayCompCardLit" : ""}`}>
          <div className="dayCompTop">
            <div className={`dayToggle ${allDone ? "dayToggleOn" : ""}`}>
              <div className="dayToggleDot" />
            </div>
            <div className="dayCompText">
              <div className="dayCompTitle">
                {allDone ? "All done!" : `${items.length - checkedCount} remaining`}
              </div>
              <div className="dayCompSub">
                {allDone ? "Everything checked off" : "Checking items..."}
              </div>
            </div>
          </div>

          <button className={`dayCompleteBtn ${showComplete ? "dayCompleteBtnLit" : ""}`}>
            {showComplete && <span className="dayBtnCheck">{"\u2713"}</span>}
            Complete
          </button>

          <div className="dayProgressBar">
            <div
              className="dayProgressFill"
              style={{
                width: `${(checkedCount / items.length) * 100}%`,
                transition: "width 0.6s cubic-bezier(0.34, 1, 0.64, 1)",
              }}
            />
          </div>
        </div>

        {/* Up Next */}
        <div className="dayUpNextHeader">
          <span className="dayUpNextTitle">Up Next</span>
          <span className="dayUpNextCount">{allDone ? "0 items" : `${items.length - checkedCount} item${items.length - checkedCount !== 1 ? "s" : ""}`}</span>
        </div>

        {/* Item cards */}
        <div className="dayItems">
          {items.map((item, i) => {
            const done = i < checkedCount
            return (
              <div
                key={item.label}
                className={`dayItemCard ${done ? "dayItemDone" : ""}`}
              >
                <div
                  className={`dayCheckbox ${done ? "dayChecked" : ""}`}
                  style={{
                    transition: "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {done && (
                    <span
                      className="dayCheckIcon"
                      style={{
                        animation: i === checkedCount - 1
                          ? "checkReveal 0.5s cubic-bezier(0.34, 1.3, 0.64, 1) forwards"
                          : undefined,
                      }}
                    >
                      {"\u2713"}
                    </span>
                  )}
                </div>
                <div className="dayItemText">
                  <div className={`dayItemName ${done ? "dayItemStrike" : ""}`}>
                    {item.label}
                  </div>
                  <div className="dayItemDetail">{item.detail}</div>
                </div>
                <div className="dayItemLocation">
                  <span className="dayItemLocName">{item.location}</span>
                  <span className="dayItemLocDist">{item.distance}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom context */}
        <div className="dayFooter">
          Near sorted by location and distance.
        </div>
      </div>
    </PhoneChrome>
  )
}

/* --------- DUSK: Higher contrast, deeper navy, sharper cards ----------- */

function DuskHouseholdScreen() {
  const people = useMemo(() => [
    { initials: "You", icon: "\u2728", active: true },
    { initials: "JM", icon: "\uD83C\uDFB5", active: false },
    { initials: "KR", icon: "\uD83C\uDF3F", active: false },
  ], [])

  /* Grocery items get checked off by "JM" one at a time */
  const groceryItems = useMemo(() => [
    "Soap", "Paper towels", "Milk",
  ], [])
  const targetItems = useMemo(() => [
    "Dog food", "Light bulbs",
  ], [])
  const sundayItems = useMemo(() => [
    "Vacuum upstairs", "Wipe counters", "Laundry",
  ], [])

  const [groceryChecked, setGroceryChecked] = useState(0)
  const [activeChecker, setActiveChecker] = useState<string | null>(null)
  const [activityMsg, setActivityMsg] = useState("You added an item")

  useEffect(() => {
    const delays = [2000, 4200, 6400]
    const timers: ReturnType<typeof setTimeout>[] = []

    delays.forEach((d, i) => {
      timers.push(setTimeout(() => {
        setGroceryChecked(i + 1)
        setActiveChecker("JM")
        setActivityMsg(`JM checked off ${groceryItems[i]}`)
      }, d))
    })

    // Reset cycle
    timers.push(setTimeout(() => {
      setGroceryChecked(0)
      setActiveChecker(null)
      setActivityMsg("You added an item")
    }, 10000))

    const loop = setInterval(() => {
      setGroceryChecked(0)
      setActiveChecker(null)
      setActivityMsg("You added an item")

      delays.forEach((d, i) => {
        timers.push(setTimeout(() => {
          setGroceryChecked(i + 1)
          setActiveChecker("JM")
          setActivityMsg(`JM checked off ${groceryItems[i]}`)
        }, d))
      })

      timers.push(setTimeout(() => {
        setGroceryChecked(0)
        setActiveChecker(null)
        setActivityMsg("You added an item")
      }, 10000))
    }, 10000)

    return () => { timers.forEach(clearTimeout); clearInterval(loop) }
  }, [groceryItems])

  return (
    <PhoneChrome theme="dusk">
      <div className="hhPad">
        <div className="hhTitleBlock">
          <div className="hhH1">Household</div>
          <div className="hhSub">Shared with 2 people</div>
        </div>

        {/* Avatar row */}
        <div className="hhAvatars">
          {people.map((p) => (
            <div
              key={p.initials}
              className={`hhAvatar ${p.active ? "hhAvatarActive" : ""} ${activeChecker === p.initials ? "hhAvatarChecking" : ""}`}
            >
              <span className="hhAvatarIcon">{p.icon}</span>
              <span className="hhAvatarText">{p.initials}</span>
            </div>
          ))}
        </div>

        {/* Activity line */}
        <div className="hhActivity">
          <span className={`hhActivityDot ${activeChecker ? "hhActivityDotLive" : ""}`} />
          <span className="hhActivityText">{activityMsg}</span>
        </div>

        {/* Section header */}
        <div className="hhSectionLabel">SHARED PLACES</div>

        {/* Place cards */}
        <div className="hhPlaces">
          {/* Grocery Store -- animated checking */}
          <div className="hhPlaceCard">
            <div className="hhPlaceHeader">
              <div className="hhPlaceDot c1" />
              <div className="hhPlaceName">Grocery Store</div>
              {activeChecker && groceryChecked > 0 && (
                <span className="hhCheckerBadge">
                  <span className="hhCheckerIcon">{"\uD83C\uDFB5"}</span>
                </span>
              )}
              <div className="hhPlaceCount">{groceryItems.length - groceryChecked}</div>
            </div>
            <div className="hhPlaceItems">
              {groceryItems.map((item, i) => {
                const done = i < groceryChecked
                const justChecked = i === groceryChecked - 1
                return (
                  <div key={item} className={`hhPlaceItem ${done ? "hhItemDone" : ""}`}>
                    <div
                      className={`hhItemBox ${done ? "hhItemBoxChecked" : ""}`}
                      style={{ transition: "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                    >
                      {done && (
                        <span
                          className="hhItemCheck"
                          style={{
                            animation: justChecked
                              ? "checkReveal 0.5s cubic-bezier(0.34, 1.3, 0.64, 1) forwards"
                              : undefined,
                          }}
                        >
                          {"\u2713"}
                        </span>
                      )}
                    </div>
                    <span className={`hhItemLabel ${done ? "hhItemLabelDone" : ""}`}>{item}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Target */}
          <div className="hhPlaceCard">
            <div className="hhPlaceHeader">
              <div className="hhPlaceDot c2" />
              <div className="hhPlaceName">Target</div>
              <div className="hhPlaceCount">{targetItems.length}</div>
            </div>
            <div className="hhPlaceItems">
              {targetItems.map((item) => (
                <div key={item} className="hhPlaceItem">
                  <div className="hhItemBox" />
                  <span className="hhItemLabel">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sunday Reset */}
          <div className="hhPlaceCard">
            <div className="hhPlaceHeader">
              <div className="hhPlaceDot c3" />
              <div className="hhPlaceName">Sunday Reset</div>
              <div className="hhPlaceCount">{sundayItems.length}</div>
            </div>
            <div className="hhPlaceItems">
              {sundayItems.map((item) => (
                <div key={item} className="hhPlaceItem">
                  <div className="hhItemBox" />
                  <span className="hhItemLabel">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneChrome>
  )
}

/* ------------------------- BRAND MARK (SVG) ----------------------------- */

function NearMark({ sizePx }: { sizePx: number }) {
  return (
    <svg
      className="nearMark"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Near icon"
      style={{ width: sizePx, height: sizePx, display: "block" }}
    >
      <defs>
        <radialGradient id="nearField" cx="50%" cy="52%" r="58%">
          <stop offset="0%" stopColor="var(--near-core)" />
          <stop offset="22%" stopColor="var(--near-mid1)" />
          <stop offset="45%" stopColor="var(--near-mid2)" />
          <stop offset="70%" stopColor="var(--near-mid3)" />
          <stop offset="100%" stopColor="var(--near-edge)" />
        </radialGradient>

        <radialGradient id="nearVignette" cx="50%" cy="50%" r="70%">
          <stop offset="55%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
        </radialGradient>

        <clipPath id="nearSquircle">
          <path d="M108 0h296c60 0 108 48 108 108v296c0 60-48 108-108 108H108C48 512 0 464 0 404V108C0 48 48 0 108 0Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#nearSquircle)">
        <rect width="512" height="512" fill="var(--near-edge)" />
        <circle className="nearPulse" cx="256" cy="256" r="180" fill="url(#nearField)" />
        <rect width="512" height="512" fill="url(#nearVignette)" />
        <circle cx="210" cy="185" r="140" fill="rgba(255,255,255,0.05)" />
      </g>
    </svg>
  )
}

/* -------------------------------- STYLES ------------------------------- */

function SiteStyles() {
  return (
    <style jsx global>{`
      :root{
        --near-core:#BCEBFF;
        --near-mid1:#5BC7FF;
        --near-mid2:#4A7DFF;
        --near-mid3:#7A56FF;
        --near-edge:#0C1020;

        --bg0:#04050C;
        --bg1:#070A18;
        --text:#FFFFFF;
        --muted:rgba(255,255,255,0.68);
        --faint:rgba(255,255,255,0.45);
        --stroke:rgba(255,255,255,0.08);
      }

      html, body {
        padding:0;
        margin:0;
        background: var(--bg0);
        color: var(--text);
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      }

      * { box-sizing:border-box; }
      a { color: inherit; text-decoration:none; }

      .page{
        min-height:100vh;
        background: #04050C;
        overflow-x: hidden;
      }

      /* NAV */
      .nav{
        position: sticky;
        top:0;
        z-index: 50;
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        background: rgba(4,5,12,0.72);
        border-bottom: 1px solid rgba(255,255,255,0.04);
        transition: background 0.4s ease;
      }

      .navInner{
        max-width: 1080px;
        margin: 0 auto;
        padding: 16px 24px;
        display:flex;
        align-items:center;
        justify-content:space-between;
      }

      .brand{
        display:flex;
        align-items:center;
        gap:10px;
      }
      .brandWord{
        font-weight: 600;
        letter-spacing: -0.01em;
        font-size: 17px;
        opacity: 0.90;
      }

      .navActions{
        display:flex;
        align-items:center;
        gap: 28px;
      }
      .navLink{
        font-size: 13px;
        font-weight: 450;
        color: rgba(255,255,255,0.55);
        transition: color 0.3s ease;
        letter-spacing: 0.01em;
      }
      .navLink:hover{ color: rgba(255,255,255,0.92); }

      .navCta{
        padding: 8px 16px;
        border-radius: 999px;
        border: none;
        background: rgba(88,200,250,0.12);
        color: rgba(188,235,255,0.90);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.01em;
        transition: all 0.3s ease;
      }
      .navCta:hover{
        background: rgba(88,200,250,0.18);
      }

      /* HERO */
      .hero{
        position: relative;
        padding: 120px 24px 60px;
        overflow: hidden;
      }
      .heroBg{
        position:absolute;
        inset:-40%;
        background:
          radial-gradient(ellipse 50% 40% at 50% 20%, rgba(88,200,250,0.18), transparent),
          radial-gradient(circle at 30% 60%, rgba(123,77,255,0.08), transparent 50%),
          linear-gradient(180deg, rgba(4,5,12,0) 0%, rgba(4,5,12,1) 75%);
        filter: blur(12px);
        animation: heroBgDrift 12s ease-in-out infinite;
      }
      @keyframes heroBgDrift{
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-20px) scale(1.02); }
      }
      .heroGrid{
        position:absolute;
        inset:0;
        background:
          radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
        background-size: 40px 40px;
        opacity: 0.03;
        mask-image: radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%);
      }
      .heroInner{
        position: relative;
        max-width: 860px;
        margin: 0 auto;
        text-align: center;
      }
      .heroLogoRow{
        display:flex;
        justify-content:center;
        margin-bottom: 24px;
      }
      .heroLogo{
        display:flex;
        align-items:center;
        gap: 10px;
        opacity: 0.85;
      }
      .heroWord{
        font-weight: 600;
        letter-spacing: -0.02em;
        font-size: 24px;
      }

      .heroIconCapsuleWrap{
        display:flex;
        justify-content:center;
        margin: 12px 0 24px;
        transform: scale(0.60);
        transform-origin: center center;
      }

      .heroTitleGlow{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 200px;
        background: radial-gradient(ellipse, rgba(111,92,252,0.10), rgba(88,200,250,0.06), transparent 65%);
        filter: blur(60px);
        pointer-events: none;
        z-index: 0;
      }
      .heroTitle{
        position: relative;
        z-index: 1;
        font-size: clamp(48px, 6.4vw, 80px);
        line-height: 1.0;
        margin: 12px 0 24px;
        letter-spacing: -0.04em;
        font-weight: 800;
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.72) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: heroTitleIn 0.4s ease-out both;
      }
      @keyframes heroTitleIn{
        0% { opacity: 0; transform: translateY(8px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .heroSub{
        position: relative;
        z-index: 1;
        margin: 0 auto;
        max-width: 520px;
        font-size: 17px;
        line-height: 1.7;
        color: rgba(255,255,255,0.50);
        font-weight: 420;
        white-space: pre-line;
      }

      .heroCtas{
        display:flex;
        gap: 14px;
        justify-content:center;
        margin-top: 32px;
        flex-wrap: wrap;
      }
      .primaryBtn, .secondaryBtn{
        padding: 14px 24px;
        border-radius: 999px;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 0.01em;
        transition: all 0.35s cubic-bezier(0.34, 1, 0.64, 1);
        will-change: transform;
      }
      .primaryBtn{
        background: rgba(88,200,250,0.14);
        color: #BCEBFF;
        box-shadow: 0 0 0 1px rgba(88,200,250,0.20), 0 20px 60px rgba(88,200,250,0.10);
        border: none;
      }
      .primaryBtn:hover{
        transform: translateY(-2px);
        background: rgba(88,200,250,0.20);
        box-shadow: 0 0 0 1px rgba(88,200,250,0.30), 0 24px 70px rgba(88,200,250,0.14);
      }
      .secondaryBtn{
        background: transparent;
        border: 1px solid rgba(255,255,255,0.10);
        color: rgba(255,255,255,0.65);
      }
      .secondaryBtn:hover{
        transform: translateY(-2px);
        border-color: rgba(255,255,255,0.18);
        color: rgba(255,255,255,0.85);
      }
      .primaryBtn.big, .secondaryBtn.big{
        padding: 16px 28px;
        font-size: 16px;
      }

      .heroMeta{
        display:flex;
        gap: 12px;
        justify-content:center;
        margin-top: 24px;
        flex-wrap: wrap;
      }
      .pill{
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.03);
        color: rgba(255,255,255,0.45);
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.02em;
      }

      /* ICON CAPSULE */
      .iconCapsule{
        position: relative;
        border-radius: 32px;
        padding: 28px 28px;
        width: min(380px, 88vw);
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        box-shadow:
          0 24px 60px rgba(0,0,0,0.40),
          0 0 30px rgba(88,200,250,0.04),
          inset 0 1px 0 rgba(255,255,255,0.03);
        backdrop-filter: blur(24px);
        overflow:hidden;
        transition: all 0.5s cubic-bezier(0.34, 1, 0.64, 1);
      }
      .iconCapsule:hover{
        box-shadow:
          0 24px 60px rgba(0,0,0,0.40),
          0 0 40px rgba(88,200,250,0.06),
          inset 0 1px 0 rgba(255,255,255,0.04);
        border-color: rgba(255,255,255,0.10);
      }
      .halo{
        position:absolute;
        width: 160px;
        height: 160px;
        left: 50%;
        top: 52%;
        transform: translate(-50%,-50%);
        background: radial-gradient(circle, rgba(88,200,250,0.15), rgba(123,77,255,0.06), transparent 60%);
        filter: blur(30px);
        pointer-events:none;
        animation: haloBreathe 6s ease-in-out infinite;
      }
      @keyframes haloBreathe{
        0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.5; }
        50% { transform: translate(-50%,-50%) scale(1.05); opacity: 0.7; }
      }
      .iconStack{
        position: relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 12px;
      }
      .iconFloat{
        transition: transform 0.35s ease;
      }
      .iconPlate{
        width: 150px;
        height: 150px;
        display:flex;
        align-items:center;
        justify-content:center;
        filter: drop-shadow(0 0 20px rgba(88,200,250,0.30)) drop-shadow(0 0 40px rgba(88,200,250,0.10));
        transition: filter 0.5s ease;
      }
      .iconCapsule:hover .iconPlate{
        filter: drop-shadow(0 0 24px rgba(88,200,250,0.40)) drop-shadow(0 0 50px rgba(88,200,250,0.15));
      }
      .iconGlow{
        position:absolute;
        inset: 0;
      }
      .iconText{ text-align:center; }
      .iconName{
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .iconCaption{
        margin-top: 4px;
        font-size: 13px;
        font-weight: 450;
        color: rgba(255,255,255,0.50);
        transition: all 0.4s ease;
      }
      .iconCaption.grad{
        background: linear-gradient(90deg, #BCEBFF, #88C8FA);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      /* SHOWCASE */
      .showcase{
        position: relative;
        padding: 120px 24px 120px;
        overflow:hidden;
      }
      .showcaseBg{
        position:absolute;
        inset: -30%;
        background:
          radial-gradient(circle at 50% 25%, rgba(90,200,250,0.10), transparent 38%),
          radial-gradient(circle at 20% 70%, rgba(123,77,255,0.06), transparent 45%),
          radial-gradient(circle at 70% 60%, rgba(236,72,153,0.04), transparent 45%);
        filter: blur(24px);
        opacity: 0.6;
        pointer-events:none;
      }

      /* Spotlight behind center phone */
      .showcaseInner{
        position: relative;
        max-width: 1320px;
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 60px;
        padding-top: 26px;
        perspective: 1800px;
      }

      .phone{
        position: relative;
        transition: transform 0.7s cubic-bezier(0.34, 1, 0.64, 1), opacity 0.7s ease;
        will-change: transform;
      }
      .phoneFrame{
        width: 332px;
        height: 684px;
        border-radius: 50px;
        overflow:hidden;
        background: #000;
        border: 0.5px solid rgba(255,255,255,0.10);
        box-shadow:
          0 50px 100px rgba(0,0,0,0.80),
          0 0 0 0.5px rgba(255,255,255,0.04),
          inset 0 1px 0 rgba(255,255,255,0.04);
      }

      /* Center phone: hero, prominent */
      .phoneCenter{
        z-index: 3;
        transform: scale(1.08) translateY(-12px);
      }
      .phoneFrameMain{
        border-color: rgba(255,255,255,0.12);
        box-shadow:
          0 60px 140px rgba(0,0,0,0.90),
          0 0 80px rgba(88,200,250,0.06),
          0 0 0 0.5px rgba(255,255,255,0.06),
          inset 0 1px 0 rgba(255,255,255,0.05);
      }

      /* Flanking phones: angled inward toward center, recessed */
      .phoneLeft{
        opacity: 0.55;
        transform: scale(0.85) rotateY(16deg) translateX(30px) translateZ(-80px);
        transform-style: preserve-3d;
      }
      .phoneRight{
        opacity: 0.55;
        transform: scale(0.85) rotateY(-16deg) translateX(-30px) translateZ(-80px);
        transform-style: preserve-3d;
      }

      .phoneCenter:hover{
        transform: scale(1.10) translateY(-14px);
        transition: transform 0.5s cubic-bezier(0.34, 1.0, 0.64, 1);
      }

      /* Stage light behind center phone */
      .phoneCenter::before{
        content:"";
        position:absolute;
        inset: -200px;
        background:
          radial-gradient(ellipse 55% 45% at 50% 40%, rgba(88,200,250,0.10), transparent 55%);
        filter: blur(80px);
        z-index: -1;
        animation: spotlightBreathe 8s ease-in-out infinite;
      }
      @keyframes spotlightBreathe{
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.04); }
      }

      /* Reflection surface below phones */
      .phoneCenter::after{
        content:"";
        position:absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        width: 280px;
        height: 60px;
        background: radial-gradient(ellipse, rgba(90,200,250,0.08), transparent 70%);
        filter: blur(20px);
        z-index: -1;
      }
      .phoneLeft::after,
      .phoneRight::after{
        content:"";
        position:absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 40px;
        background: radial-gradient(ellipse, rgba(255,255,255,0.03), transparent 70%);
        filter: blur(16px);
        z-index: -1;
      }

      .showcaseCopy{
        position: relative;
        max-width: 900px;
        margin: 100px auto 0;
        text-align:center;
      }
      .sectionTitle{
        font-size: clamp(28px, 3.4vw, 44px);
        letter-spacing: -0.035em;
        font-weight: 700;
        margin: 0 0 10px;
        background: linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.60) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .sectionSub{
        margin: 0 auto;
        max-width: 580px;
        color: rgba(255,255,255,0.45);
        line-height: 1.65;
        font-size: 16px;
        font-weight: 420;
      }
      .sectionSub{
        margin: 0 auto;
        max-width: 760px;
        color: rgba(255,255,255,0.68);
        font-size: 16px;
        line-height: 1.6;
      }

      .featureGrid{
        display:grid;
        grid-template-columns: repeat(3, minmax(0,1fr));
        gap: 14px;
        margin-top: 28px;
      }
      .featureCard{
        text-align:left;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
        padding: 20px 18px 18px;
        box-shadow: 0 18px 60px rgba(0,0,0,0.35);
        position: relative;
        overflow: hidden;
        transition: border-color 0.8s ease, box-shadow 0.8s ease, background 0.8s ease;
        opacity: 0;
        transform: translateY(24px);
      }
      .featureCard.featureCardActive{
        border-color: color-mix(in srgb, var(--feat-accent) 30%, transparent);
        background: rgba(255,255,255,0.05);
        box-shadow: 0 18px 60px rgba(0,0,0,0.35), 0 0 40px color-mix(in srgb, var(--feat-accent) 8%, transparent);
        opacity: 1;
        transform: translateY(0);
        animation: featureFloat 5s ease-in-out infinite;
      }
      .featureCard:nth-child(1).featureCardActive{ animation-delay: 0s; }
      .featureCard:nth-child(2).featureCardActive{ animation-delay: 0.6s; }
      .featureCard:nth-child(3).featureCardActive{ animation-delay: 1.2s; }
      @keyframes featureFloat{
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .featureShine{
        position: absolute;
        top: 0;
        left: -100%;
        width: 60%;
        height: 100%;
        background: linear-gradient(105deg, transparent, rgba(255,255,255,0.03), transparent);
        pointer-events: none;
      }
      .featureCardActive .featureShine{
        animation: featureShine 2s 0.3s ease forwards;
      }
      @keyframes featureShine{
        0% { left: -60%; }
        100% { left: 120%; }
      }
      .featureIconWrap{
        position: relative;
        width: 44px;
        height: 44px;
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .featureIcon{
        width: 24px;
        height: 24px;
        color: rgba(255,255,255,0.80);
        transition: color 0.6s ease;
        position: relative;
        z-index: 1;
      }
      .featureCardActive .featureIcon{
        color: rgba(255,255,255,0.95);
      }
      .featureCard:nth-child(1).featureCardActive .featureIcon{
        animation: pinBounce 2s ease-in-out infinite;
      }
      @keyframes pinBounce{
        0%, 100% { transform: translateY(0); }
        30% { transform: translateY(-3px); }
        50% { transform: translateY(0); }
        70% { transform: translateY(-1.5px); }
      }
      .featureIconGlow{
        position: absolute;
        inset: -8px;
        border-radius: 999px;
        background: var(--feat-accent);
        filter: blur(18px);
        opacity: 0;
        transition: opacity 0.8s ease;
      }
      .featureCardActive .featureIconGlow{
        opacity: 0.35;
        animation: glowBreathe 3s ease-in-out infinite;
      }
      @keyframes glowBreathe{
        0%, 100% { opacity: 0.25; transform: scale(1); }
        50% { opacity: 0.50; transform: scale(1.15); }
      }
      .featureRadar1{
        opacity: 0.4;
        animation: radarPulse 2.4s ease-in-out infinite;
      }
      .featureRadar2{
        opacity: 0.6;
        animation: radarPulse 2.4s 0.4s ease-in-out infinite;
      }
      @keyframes radarPulse{
        0%, 100% { opacity: 0.3; stroke-dashoffset: 0; }
        50% { opacity: 1; }
      }
      .featurePeople2{
        animation: peopleFade 2s ease-in-out infinite;
      }
      @keyframes peopleFade{
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
      .featureTag{
        display:inline-flex;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.65);
        letter-spacing: 0.02em;
      }
      .featureTitle{
        margin-top: 10px;
        font-weight: 820;
        letter-spacing: -0.02em;
        font-size: 16px;
      }
      .featureDesc{
        margin-top: 8px;
        color: rgba(255,255,255,0.42);
        font-size: 14px;
        line-height: 1.6;
        font-weight: 420;
      }

      /* EVENT SECTIONS */
      .eventSection{
        position: relative;
        padding: 120px 24px;
        overflow:hidden;
      }
      .eventGlow{
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        height: 600px;
        background:
          radial-gradient(ellipse 55% 45% at 40% 45%, rgba(140,90,255,0.12), transparent 55%),
          radial-gradient(ellipse 40% 50% at 65% 55%, rgba(88,217,255,0.06), transparent 50%);
        filter: blur(70px);
        pointer-events: none;
        animation: eventGlowFloat 8s ease-in-out infinite;
      }
      @keyframes eventGlowFloat{
        0% { transform: translateX(-50%) translateY(0) scale(1); }
        33% { transform: translateX(-48%) translateY(-18px) scale(1.04); }
        66% { transform: translateX(-52%) translateY(-8px) scale(0.98); }
        100% { transform: translateX(-50%) translateY(0) scale(1); }
      }
      .eventGlow::after{
        content: "";
        position: absolute;
        bottom: 10%;
        right: 15%;
        width: 200px;
        height: 200px;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(255,160,100,0.06), transparent 60%);
        filter: blur(40px);
        animation: warmOrb 5s ease-in-out infinite alternate;
      }
      @keyframes warmOrb{
        0% { transform: translate(0, 0) scale(0.8); opacity: 0.4; }
        100% { transform: translate(-20px, -15px) scale(1.2); opacity: 0.8; }
      }
      .eventSection.alt{
        background:
          radial-gradient(ellipse 50% 40% at 50% 25%, rgba(88,200,250,0.06), transparent),
          #04050C;
      }
      .eventInner{
        max-width: 980px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        z-index: 1;
      }
      .eventKicker{
        display:inline-flex;
        padding: 6px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
        color: rgba(88,200,250,0.80);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        animation: kickerPulse 4s ease-in-out infinite;
      }
      @keyframes kickerPulse{
        0%, 100% { box-shadow: none; }
        50% { box-shadow: 0 0 24px rgba(88,200,250,0.06); }
      }
      .eventHeadline{
        margin: 18px 0 14px;
        font-size: clamp(30px, 3.6vw, 48px);
        letter-spacing: -0.035em;
        font-weight: 700;
        background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.58) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: headlineFade 1.2s ease-out both;
      }
      @keyframes headlineFade{
        0% { opacity: 0; transform: translateY(12px); filter: blur(4px); }
        100% { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      .eventBody{
        margin: 0 auto;
        max-width: 620px;
        color: rgba(255,255,255,0.45);
        font-size: 16px;
        line-height: 1.65;
        font-weight: 420;
        animation: bodyFade 1.5s 0.3s ease-out both;
      }
      @keyframes bodyFade{
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      /* Member constellation */
      .hhConstellation{
        position: relative;
        margin: 40px auto 0;
        max-width: 360px;
      }
      .hhConstellationSvg{
        position: absolute;
        top: 18px;
        left: 0;
        width: 100%;
        height: 80px;
        pointer-events: none;
      }
      .hhConstellationDot{
        transition: fill 0.5s ease;
      }
      .hhMemberRow{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 1;
      }
      .hhMemberNode{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        transition: transform 0.5s cubic-bezier(0.34, 1, 0.64, 1);
      }
      .hhMemberNode.hhMemberNodeActive{
        transform: translateY(-4px);
      }
      .hhMemberAvatar{
        width: 48px;
        height: 48px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 4px 20px rgba(0,0,0,0.30);
        transition: box-shadow 0.5s ease;
      }
      .hhMemberNodeActive .hhMemberAvatar{
        box-shadow: 0 4px 30px rgba(0,0,0,0.30), 0 0 20px rgba(255,255,255,0.06);
      }
      .hhMemberInitial{
        font-size: 16px;
        font-weight: 700;
        color: rgba(255,255,255,0.95);
        letter-spacing: -0.02em;
      }
      .hhMemberPulseRing{
        position: absolute;
        inset: -6px;
        border-radius: 999px;
        border: 1.5px solid;
        animation: hhPulseRing 2s ease-out infinite;
        pointer-events: none;
      }
      @keyframes hhPulseRing{
        0% { transform: scale(0.9); opacity: 0.6; }
        100% { transform: scale(1.3); opacity: 0; }
      }
      .hhMemberLabel{
        font-size: 12px;
        font-weight: 550;
        color: rgba(255,255,255,0.40);
        transition: color 0.4s ease;
      }
      .hhMemberNodeActive .hhMemberLabel{
        color: rgba(255,255,255,0.80);
      }

      /* Live activity feed */
      .hhLiveFeed{
        max-width: 340px;
        margin: 32px auto 0;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.02);
        padding: 14px 16px;
        backdrop-filter: blur(12px);
      }
      .hhFeedHeader{
        display: flex;
        align-items: center;
        gap: 7px;
        margin-bottom: 12px;
      }
      .hhFeedDot{
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: rgba(88,200,250,0.70);
        animation: hhFeedDotPulse 1.5s ease-in-out infinite;
      }
      @keyframes hhFeedDotPulse{
        0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(88,200,250,0.40); }
        50% { opacity: 0.5; box-shadow: none; }
      }
      .hhFeedTitle{
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.10em;
        text-transform: uppercase;
        color: rgba(88,200,250,0.60);
      }
      .hhFeedList{
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .hhFeedItem{
        display: flex;
        align-items: center;
        gap: 10px;
        animation: hhFeedSlideIn 0.4s cubic-bezier(0.34, 1, 0.64, 1) both;
      }
      @keyframes hhFeedSlideIn{
        0% { opacity: 0; transform: translateY(-6px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .hhFeedItemDot{
        width: 6px;
        height: 6px;
        border-radius: 999px;
        flex-shrink: 0;
      }
      .hhFeedItemText{
        font-size: 13px;
        color: rgba(255,255,255,0.50);
        font-weight: 450;
      }
      .eventSplit{
        margin-top: 36px;
        display:grid;
        grid-template-columns: repeat(2, minmax(0,1fr));
        gap: 16px;
      }
      .splitCard{
        text-align:left;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.02);
        padding: 24px 22px;
        position: relative;
        overflow: hidden;
        transition: border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s cubic-bezier(0.34, 1, 0.64, 1);
        animation: splitFloat 5s ease-in-out infinite;
      }
      .splitCard:nth-child(1){ animation-delay: 0s; }
      .splitCard:nth-child(2){ animation-delay: 1.2s; }
      @keyframes splitFloat{
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      .splitCardAnimated:hover{
        border-color: rgba(88,217,255,0.18);
        box-shadow: 0 0 40px rgba(88,217,255,0.08);
        transform: translateY(-6px) scale(1.01);
      }
      .splitCardAnimated::after{
        content: "";
        position: absolute;
        top: 0;
        left: -80%;
        width: 50%;
        height: 100%;
        background: linear-gradient(105deg, transparent, rgba(255,255,255,0.02), transparent);
        animation: splitShimmer 6s ease-in-out infinite;
        pointer-events: none;
      }
      @keyframes splitShimmer{
        0% { left: -80%; }
        40%, 100% { left: 130%; }
      }
      .splitIcon{
        width: 36px;
        height: 36px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .splitSvg{
        width: 20px;
        height: 20px;
        animation: svgPulse 3s ease-in-out infinite;
      }
      @keyframes svgPulse{
        0%, 100% { opacity: 0.65; transform: scale(1); }
        50% { opacity: 0.90; transform: scale(1.06); }
      }
      .splitTitle{
        font-weight: 700;
        letter-spacing: -0.02em;
      }
      .splitText{
        margin-top: 8px;
        color: rgba(255,255,255,0.42);
        line-height: 1.6;
        font-size: 14px;
        font-weight: 420;
      }

      /* FINAL CTA */
      .finalCta{
        position: relative;
        padding: 120px 24px 80px;
        overflow:hidden;
        background:
          radial-gradient(ellipse 50% 40% at 50% 20%, rgba(88,200,250,0.10), transparent),
          #04050C;
      }
      .finalInner{
        position: relative;
        max-width: 680px;
        margin: 0 auto;
        text-align:center;
      }
      .finalGlow{
        position:absolute;
        inset: -30%;
        background: radial-gradient(circle, rgba(88,200,250,0.10), rgba(123,77,255,0.05), transparent 55%);
        filter: blur(80px);
        opacity: 0.8;
        pointer-events:none;
        animation: finalGlowDrift 8s ease-in-out infinite;
      }
      @keyframes finalGlowDrift{
        0%, 100% { transform: translateY(0); opacity: 0.7; }
        50% { transform: translateY(-10px); opacity: 0.9; }
      }
      .finalTitle{
        position: relative;
        margin: 0 0 12px;
        font-size: clamp(32px, 4.2vw, 52px);
        letter-spacing: -0.035em;
        font-weight: 700;
        background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.55) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .finalSub{
        position: relative;
        margin: 0;
        color: rgba(255,255,255,0.40);
        font-size: 16px;
        font-weight: 420;
      }
      .finalButtons{
        position: relative;
        margin-top: 28px;
        display:flex;
        justify-content:center;
        gap: 14px;
        flex-wrap: wrap;
      }
      .footerMini{
        position: relative;
        margin-top: 48px;
        display:flex;
        flex-direction: column;
        align-items:center;
        gap: 8px;
        opacity: 0.60;
        transition: opacity 0.4s ease;
      }
      .footerMini:hover{ opacity: 0.85; }
      .footerBrand{
        display:flex;
        align-items:center;
        gap: 10px;
      }
      .footerWord{
        font-weight: 600;
        letter-spacing: -0.02em;
        font-size: 17px;
      }
      .footerNote{
        font-size: 12px;
        color: rgba(255,255,255,0.45);
        font-weight: 420;
        letter-spacing: 0.02em;
      }

      /* ---- SITE FOOTER ---- */
      .siteFooter{
        border-top: 1px solid rgba(255,255,255,0.06);
        background: rgba(4,5,12,0.96);
        padding: 56px 20px 32px;
      }
      .footerInner{
        max-width: 1080px;
        margin: 0 auto;
      }
      .footerTop{
        display: flex;
        justify-content: space-between;
        gap: 48px;
        flex-wrap: wrap;
      }
      .footerBrandCol{
        max-width: 260px;
      }
      .footerBrandRow{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
      }
      .footerBrandName{
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.03em;
      }
      .footerTagline{
        margin: 0;
        font-size: 14px;
        color: rgba(255,255,255,0.45);
        line-height: 1.5;
      }
      .footerLinks{
        display: flex;
        gap: 56px;
        flex-wrap: wrap;
      }
      .footerCol{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .footerColTitle{
        font-size: 13px;
        font-weight: 700;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 4px;
      }
      .footerLink{
        font-size: 14px;
        color: rgba(255,255,255,0.55);
        transition: color 0.15s ease;
      }
      .footerLink:hover{ color: rgba(255,255,255,0.92); }
      .footerBottom{
        margin-top: 48px;
        padding-top: 24px;
        border-top: 1px solid rgba(255,255,255,0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
      .footerLegal{
        margin: 0;
        font-size: 13px;
        color: rgba(255,255,255,0.3);
      }

      /* SCREEN UI */
      .screen{
        width:100%;
        height:100%;
        position: relative;
        border-radius: 50px;
        overflow:hidden;
        display:flex;
        flex-direction:column;
      }

      .screen-sunrise{
        background:
          radial-gradient(circle at 35% 10%, rgba(255,160,100,0.36), transparent 40%),
          radial-gradient(circle at 65% 25%, rgba(236,72,153,0.22), transparent 45%),
          radial-gradient(circle at 50% 70%, rgba(255,200,100,0.10), transparent 55%),
          linear-gradient(180deg, #1A0E28 0%, #110A1E 45%, #08060E 100%);
      }

      .screen-day{
        background:
          radial-gradient(circle at 50% 8%, rgba(100,160,220,0.28), transparent 45%),
          radial-gradient(circle at 30% 70%, rgba(90,140,200,0.12), transparent 50%),
          linear-gradient(180deg, #16203A 0%, #111A2E 45%, #0C1220 100%);
      }

      .screen-dusk{
        background:
          radial-gradient(circle at 50% 10%, rgba(140,90,255,0.34), transparent 44%),
          radial-gradient(circle at 70% 40%, rgba(236,72,153,0.14), transparent 52%),
          linear-gradient(180deg, #0A0B28 0%, #060718 65%, #03040A 100%);
      }

      .statusBar{
        padding: 12px 16px 6px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        color: rgba(255,255,255,0.85);
        font-weight: 650;
        font-size: 12px;
      }
      .sbCenter{
        width: 150px;
        height: 26px;
        border-radius: 999px;
        background: rgba(0,0,0,0.35);
        border: 1px solid rgba(255,255,255,0.06);
      }
      .sbRight{
        display:flex;
        gap: 6px;
        align-items:center;
      }
      .sig, .wifi, .bat{
        width: 14px;
        height: 10px;
        border-radius: 3px;
        background: rgba(255,255,255,0.55);
        opacity: 0.9;
      }
      .bat{ width: 18px; }

      .topBar{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 10px 14px 6px;
      }
      .circleBtn{
        width: 36px;
        height: 36px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.92);
        font-size: 20px;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .topCenter{
        display:flex;
        align-items:center;
        gap: 8px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
      }
      .topTitle{
        font-weight: 750;
        letter-spacing: -0.02em;
        font-size: 14px;
        color: rgba(255,255,255,0.86);
      }

      .screenBody{
        padding: 0 14px 16px;
        flex: 1;
        display:flex;
        flex-direction: column;
      }

      .pad{ padding: 8px 6px 0; }

      .titleBlock{ margin-top: 10px; }
      .h1{
        font-size: 30px;
        font-weight: 900;
        letter-spacing: -0.03em;
        margin: 0;
        color: rgba(255,255,255,0.98);
      }
      .sub{
        margin-top: 6px;
        color: rgba(255,255,255,0.65);
        font-size: 13px;
        line-height: 1.45;
      }

      .card{
        margin-top: 14px;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        box-shadow: 0 22px 70px rgba(0,0,0,0.50);
        overflow:hidden;
        position: relative;
      }
      .card-strong{
        background: rgba(255,255,255,0.07);
        border-color: rgba(255,255,255,0.14);
        backdrop-filter: blur(12px);
      }
      .card-main{
        background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
        border-color: rgba(255,255,255,0.16);
        backdrop-filter: blur(12px);
      }

      .cardHeader{
        padding: 14px 14px 10px;
        display:flex;
        align-items: baseline;
        justify-content: space-between;
      }
      .cardTitle{
        font-weight: 850;
        letter-spacing: -0.02em;
        font-size: 14px;
        color: rgba(255,255,255,0.92);
      }
      .cardMeta{
        font-size: 12px;
        color: rgba(255,255,255,0.62);
      }

      .list{ padding: 2px 10px 12px; }
      .row{
        display:flex;
        align-items:center;
        gap: 10px;
        padding: 10px 6px;
        border-radius: 14px;
      }
      .row:hover{
        background: rgba(255,255,255,0.04);
      }
      .rowMain{ flex:1; }
      .rowTitle{
        font-weight: 800;
        letter-spacing: -0.02em;
        font-size: 14px;
        color: rgba(255,255,255,0.92);
      }
      .rowSub{
        margin-top: 2px;
        font-size: 12px;
        color: rgba(255,255,255,0.62);
      }
      .chev{
        color: rgba(255,255,255,0.55);
        font-size: 18px;
        padding-right: 4px;
      }

      .dot{
        width: 10px;
        height: 10px;
        border-radius: 999px;
        box-shadow: 0 0 16px rgba(90,200,250,0.18);
      }
      .c1{ background: #58D9FF; }
      .c2{ background: #6B5CFF; }
      .c3{ background: #EC4899; }
      .c4{ background: #FFB86B; }
      .c5{ background: #70E0A0; }

      .miniNote{
        margin-top: 12px;
        font-size: 12px;
        color: rgba(255,255,255,0.58);
      }

      /* --- Dusk Places Screen --- */
      .duskPad{ padding: 4px 8px 0; }

      .nearbyBanner{
        padding: 9px 10px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(255,160,100,0.14), rgba(236,72,153,0.10));
        border: 1px solid rgba(255,160,100,0.20);
        display: flex;
        align-items: center;
        gap: 9px;
        transition: opacity 0.6s ease;
      }
      .nearbyBannerDot{
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: #FFA064;
        box-shadow: 0 0 10px rgba(255,160,100,0.50);
        flex-shrink: 0;
        animation: bannerDotGlow 2.4s ease-in-out infinite;
      }
      @keyframes bannerDotGlow{
        0%, 100% { box-shadow: 0 0 8px rgba(255,160,100,0.40); }
        50% { box-shadow: 0 0 16px rgba(255,160,100,0.65); }
      }
      .nearbyBannerText{ flex: 1; min-width: 0; }
      .nearbyBannerTitle{
        font-size: 11px;
        font-weight: 800;
        color: rgba(255,255,255,0.94);
        letter-spacing: -0.01em;
      }
      .nearbyBannerSub{
        margin-top: 1px;
        font-size: 9px;
        color: rgba(255,255,255,0.55);
        font-weight: 500;
        line-height: 1.35;
      }
      .nearbyBannerChev{
        font-size: 16px;
        color: rgba(255,160,100,0.60);
        flex-shrink: 0;
      }

      .duskTitleBlock{ margin-top: 10px; }
      .duskH1{
        font-size: 22px;
        font-weight: 900;
        letter-spacing: -0.03em;
        color: rgba(255,255,255,0.96);
      }
      .duskSub{
        margin-top: 2px;
        font-size: 10px;
        color: rgba(255,255,255,0.48);
        font-weight: 500;
      }

      .duskListCard{
        margin-top: 10px;
        border-radius: 16px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        backdrop-filter: blur(12px);
        box-shadow: 0 16px 50px rgba(0,0,0,0.40);
        padding: 0 0 4px;
      }
      .duskCardHeader{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 11px 12px 7px;
      }
      .duskCardTitle{
        font-size: 11px;
        font-weight: 800;
        letter-spacing: -0.01em;
        color: rgba(255,255,255,0.88);
      }
      .duskCardMeta{
        font-size: 10px;
        color: rgba(255,255,255,0.45);
      }

      .duskRow{
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 8px 12px;
        border-radius: 12px;
        margin: 0 4px;
      }
      .duskRow:hover{
        background: rgba(255,255,255,0.04);
      }
      .duskDot{
        width: 8px;
        height: 8px;
        border-radius: 999px;
        flex-shrink: 0;
      }
      .duskRowMain{ flex: 1; min-width: 0; }
      .duskRowName{
        font-size: 12px;
        font-weight: 750;
        letter-spacing: -0.01em;
        color: rgba(255,255,255,0.90);
      }
      .duskRowHint{
        font-size: 9px;
        color: rgba(255,255,255,0.45);
        font-weight: 500;
        margin-top: 1px;
      }

      .duskRowDist{
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }
      .duskNearbyTag{
        font-size: 8px;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 999px;
        background: rgba(255,160,100,0.14);
        border: 1px solid rgba(255,160,100,0.22);
        color: #FFA064;
        letter-spacing: 0.02em;
      }
      .duskDistText{
        font-size: 10px;
        color: rgba(255,255,255,0.40);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .duskChev{
        font-size: 14px;
        color: rgba(255,255,255,0.30);
        flex-shrink: 0;
      }

      /* Pulsating dot for Publix */
      .duskDotPulse{
        animation: duskDotPulse 2s ease-in-out infinite;
      }
      @keyframes duskDotPulse{
        0%, 100% { box-shadow: 0 0 4px rgba(88,217,255,0.30); transform: scale(1); }
        50% { box-shadow: 0 0 14px rgba(88,217,255,0.65); transform: scale(1.25); }
      }

      /* Expanded place items (Publix) */
      .duskExpandedItems{
        padding: 2px 12px 6px 29px;
      }
      .duskExpandedRow{
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 3px 0;
      }
      .duskExpandedBox{
        width: 14px;
        height: 14px;
        border-radius: 4px;
        border: 1.5px solid rgba(255,255,255,0.16);
        flex-shrink: 0;
      }
      .duskExpandedBox{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .duskExpandedBoxChecked{
        border-color: transparent;
        background: rgba(255,160,100,0.55);
        box-shadow: 0 1px 6px rgba(255,160,100,0.25);
      }
      .duskExpandedCheck{
        color: #fff;
        font-weight: 900;
        font-size: 8px;
        line-height: 1;
      }
      .duskExpandedDone{
        opacity: 0.65;
      }
      .duskExpandedLabel{
        font-size: 10px;
        font-weight: 600;
        color: rgba(255,255,255,0.65);
        transition: all 0.4s ease;
      }
      .duskExpandedLabelDone{
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        text-decoration-color: rgba(255,255,255,0.18);
        color: rgba(255,255,255,0.38);
      }

      /* Recent activity section */
      .duskSectionLabel{
        margin-top: 10px;
        font-size: 8px;
        font-weight: 800;
        letter-spacing: 0.12em;
        color: rgba(255,255,255,0.32);
        padding-left: 2px;
      }
      .duskRecentCard{
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 6px 10px;
        margin-top: 4px;
        border-radius: 10px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.06);
      }
      .duskRecentDot{
        width: 5px;
        height: 5px;
        border-radius: 999px;
        background: rgba(255,160,100,0.60);
        flex-shrink: 0;
      }
      .duskRecentDotAlt{
        background: rgba(140,90,255,0.60);
      }
      .duskRecentText{
        flex: 1;
        font-size: 9px;
        color: rgba(255,255,255,0.50);
        font-weight: 500;
      }
      .duskRecentTime{
        font-size: 8px;
        color: rgba(255,255,255,0.30);
        font-weight: 500;
        flex-shrink: 0;
      }

      .duskFooterNote{
        margin-top: 8px;
        text-align: center;
        font-size: 9px;
        color: rgba(255,255,255,0.28);
        font-weight: 500;
        letter-spacing: 0.02em;
      }



      .duskCard{
        background: rgba(255,255,255,0.06);
        border-color: rgba(140,90,255,0.14);
      }

      /* --- Dusk Household Screen --- */
      .hhPad{ padding: 4px 8px 0; }

      .hhTitleBlock{ margin-top: 2px; }
      .hhH1{
        font-size: 22px;
        font-weight: 900;
        letter-spacing: -0.03em;
        color: rgba(255,255,255,0.96);
      }
      .hhSub{
        margin-top: 2px;
        font-size: 10px;
        color: rgba(255,255,255,0.48);
        font-weight: 500;
      }

      .hhAvatars{
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
      .hhAvatar{
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1.5px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.06);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1px;
        transition: all 0.3s ease;
      }
      .hhAvatar.hhAvatarActive{
        border-color: rgba(140,90,255,0.50);
        background: rgba(140,90,255,0.18);
        box-shadow: 0 0 14px rgba(140,90,255,0.20);
      }
      .hhAvatarIcon{
        font-size: 10px;
        line-height: 1;
      }
      .hhAvatarText{
        font-size: 8px;
        font-weight: 750;
        color: rgba(255,255,255,0.80);
        letter-spacing: 0.02em;
      }
      .hhAvatarActive .hhAvatarText{
        color: rgba(255,255,255,0.96);
      }

      .hhActivity{
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 12px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
      }
      .hhActivityDot{
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: rgba(140,90,255,0.70);
        flex-shrink: 0;
      }
      .hhActivityText{
        font-size: 10px;
        color: rgba(255,255,255,0.55);
        font-weight: 500;
      }

      .hhSectionLabel{
        margin-top: 12px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.12em;
        color: rgba(255,255,255,0.38);
        padding-left: 2px;
      }

      .hhPlaces{
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .hhPlaceCard{
        border-radius: 14px;
        background: rgba(140,90,255,0.10);
        border: 1px solid rgba(140,90,255,0.18);
        padding: 10px 11px 8px;
      }
      .hhPlaceHeader{
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hhPlaceDot{
        width: 8px;
        height: 8px;
        border-radius: 999px;
      }
      .hhPlaceDot.c1{ background: #FFA064; }
      .hhPlaceDot.c2{ background: #FFA064; }
      .hhPlaceDot.c3{ background: #70E0A0; }
      .hhPlaceName{
        flex: 1;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: -0.01em;
        color: rgba(255,255,255,0.92);
      }
      .hhPlaceCount{
        width: 22px;
        height: 22px;
        border-radius: 999px;
        background: rgba(255,255,255,0.10);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 9px;
        font-weight: 750;
        color: rgba(255,255,255,0.60);
      }

      .hhPlaceItems{
        margin-top: 6px;
        padding-left: 16px;
      }
      .hhPlaceItem{
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 0;
      }
      /* Active checker avatar glow */
      .hhAvatar.hhAvatarChecking{
        border-color: rgba(88,217,255,0.50);
        background: rgba(88,217,255,0.14);
        box-shadow: 0 0 16px rgba(88,217,255,0.24);
      }
      .hhAvatarChecking .hhAvatarText{
        color: rgba(255,255,255,0.96);
      }

      /* Live activity dot */
      .hhActivityDotLive{
        background: rgba(88,217,255,0.80);
        animation: hhDotPulse 1.2s ease-in-out infinite;
      }
      @keyframes hhDotPulse{
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      /* Checker badge by grocery store */
      .hhCheckerBadge{
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: rgba(88,217,255,0.14);
        border: 1px solid rgba(88,217,255,0.28);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: hhBadgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes hhBadgePop{
        0% { transform: scale(0); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .hhCheckerIcon{
        font-size: 8px;
        line-height: 1;
      }

      /* Checked item states */
      .hhItemBoxChecked{
        border-color: transparent;
        background: rgba(140,90,255,0.60);
        box-shadow: 0 1px 6px rgba(140,90,255,0.25);
      }
      .hhItemCheck{
        color: #fff;
        font-weight: 900;
        font-size: 9px;
        line-height: 1;
      }
      .hhItemDone{
        opacity: 0.65;
      }
      .hhItemLabelDone{
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        text-decoration-color: rgba(255,255,255,0.20);
        color: rgba(255,255,255,0.45);
      }

      .hhItemBox{
        width: 16px;
        height: 16px;
        border-radius: 5px;
        border: 1.5px solid rgba(255,255,255,0.18);
        flex-shrink: 0;
      }
      .hhItemLabel{
        font-size: 11px;
        font-weight: 600;
        color: rgba(255,255,255,0.72);
      }



      .cardFooterNote{
        padding: 0 14px 14px;
        color: rgba(255,255,255,0.62);
        font-size: 12px;
        line-height: 1.5;
      }

      /* --- Day dark-translucent overrides --- */

      .dayScreen{
        padding: 4px 8px 0;
      }

      .dayHeader{ margin-top: 2px; }

      .dayStoreName{
        display: flex;
        align-items: center;
        gap: 7px;
      }
      .dayBlueDot{
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: #58A8FF;
        box-shadow: 0 0 8px rgba(88,168,255,0.35);
      }
      .dayStoreText{
        font-size: 22px;
        font-weight: 900;
        letter-spacing: -0.03em;
        color: rgba(255,255,255,0.96);
      }

      .dayChipRow{
        display: flex;
        align-items: center;
        gap: 7px;
        margin-top: 3px;
      }
      .dayNearbyChip{
        padding: 3px 9px;
        border-radius: 999px;
        background: rgba(88,168,255,0.14);
        color: #58A8FF;
        font-weight: 700;
        font-size: 10px;
        letter-spacing: 0.01em;
      }
      .dayArrived{
        font-size: 10px;
        color: rgba(255,255,255,0.45);
        font-weight: 500;
      }

      /* Completion card */
      .dayCompCard{
        margin-top: 10px;
        border-radius: 16px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        box-shadow: 0 6px 30px rgba(0,0,0,0.30);
        backdrop-filter: blur(16px);
        padding: 10px 11px 10px;
        transition: box-shadow 1s ease, border-color 1s ease;
      }
      .dayCompCard.dayCompCardLit{
        border-color: rgba(88,190,80,0.22);
        box-shadow: 0 6px 30px rgba(0,0,0,0.30), 0 0 24px rgba(88,190,80,0.08);
      }

      .dayCompTop{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
      }
      .dayToggle{
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255,255,255,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.5s ease;
      }
      .dayToggle.dayToggleOn{
        background: rgba(88,168,255,0.14);
      }
      .dayToggleDot{
        width: 13px;
        height: 13px;
        border-radius: 999px;
        background: #58A8FF;
        box-shadow: 0 0 8px rgba(88,168,255,0.35);
      }
      .dayCompText{ flex: 1; }
      .dayCompTitle{
        font-size: 13px;
        font-weight: 850;
        letter-spacing: -0.02em;
        color: rgba(255,255,255,0.92);
        transition: color 0.5s ease;
      }
      .dayCompSub{
        margin-top: 1px;
        font-size: 10px;
        color: rgba(255,255,255,0.45);
        font-weight: 500;
      }

      .dayCompleteBtn{
        width: 100%;
        padding: 11px 0;
        border-radius: 12px;
        border: none;
        background: rgba(255,255,255,0.08);
        color: rgba(255,255,255,0.35);
        font-weight: 800;
        font-size: 13px;
        letter-spacing: -0.01em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        cursor: default;
        transition: all 0.8s cubic-bezier(0.34, 1, 0.64, 1);
      }
      .dayCompleteBtn.dayCompleteBtnLit{
        background: linear-gradient(135deg, rgba(111,92,252,0.75), rgba(93,72,230,0.60));
        color: #fff;
        box-shadow:
          0 4px 22px rgba(111,92,252,0.35),
          0 0 48px rgba(111,92,252,0.14);
        text-shadow: 0 1px 3px rgba(0,0,0,0.18);
        backdrop-filter: blur(8px);
      }
      .dayBtnCheck{
        font-weight: 900;
        font-size: 12px;
      }

      .dayProgressBar{
        margin-top: 10px;
        height: 3px;
        border-radius: 999px;
        background: rgba(255,255,255,0.10);
        overflow: hidden;
      }
      .dayProgressFill{
        height: 100%;
        border-radius: 999px;
        background: #58A8FF;
      }

      /* Up Next */
      .dayUpNextHeader{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-top: 14px;
        padding: 0 2px;
      }
      .dayUpNextTitle{
        font-size: 14px;
        font-weight: 850;
        letter-spacing: -0.02em;
        color: rgba(255,255,255,0.88);
      }
      .dayUpNextCount{
        font-size: 10px;
        color: rgba(255,255,255,0.38);
        font-weight: 500;
      }

      /* Item cards */
      .dayItems{
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .dayItemCard{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 14px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        backdrop-filter: blur(12px);
        transition: background 0.4s ease;
      }
      .dayItemCard.dayItemDone{
        background: rgba(255,255,255,0.03);
      }

      .dayCheckbox{
        width: 22px;
        height: 22px;
        border-radius: 6px;
        border: 1.5px solid rgba(255,255,255,0.18);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .dayCheckbox.dayChecked{
        border: none;
        background: #58A8FF;
        box-shadow: 0 2px 8px rgba(88,168,255,0.30);
      }
      .dayCheckIcon{
        color: #fff;
        font-weight: 900;
        font-size: 12px;
        line-height: 1;
      }

      .dayItemText{ flex: 1; min-width: 0; }
      .dayItemName{
        font-size: 12px;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: rgba(255,255,255,0.78);
        transition: all 0.5s ease;
      }
      .dayItemName.dayItemStrike{
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        text-decoration-color: rgba(255,255,255,0.18);
        color: rgba(255,255,255,0.35);
      }
      .dayItemDetail{
        margin-top: 1px;
        font-size: 10px;
        color: rgba(255,255,255,0.38);
        font-weight: 500;
      }

      .dayItemLocation{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-shrink: 0;
        gap: 1px;
      }
      .dayItemLocName{
        font-size: 9px;
        font-weight: 600;
        color: rgba(255,255,255,0.50);
        letter-spacing: 0.01em;
        white-space: nowrap;
      }
      .dayItemLocDist{
        font-size: 8px;
        font-weight: 500;
        color: rgba(255,255,255,0.30);
        white-space: nowrap;
      }

      .dayFooter{
        margin-top: 12px;
        text-align: center;
        font-size: 9px;
        color: rgba(255,255,255,0.28);
        font-weight: 500;
        letter-spacing: 0.02em;
      }

      .avatar{
        width: 34px;
        height: 34px;
        border-radius: 999px;
        background: rgba(255,255,255,0.14);
        border: 1px solid rgba(255,255,255,0.10);
      }
      .avatar.active{
        background: linear-gradient(135deg, rgba(88,217,255,0.30), rgba(107,92,255,0.22));
        box-shadow: 0 0 22px rgba(88,217,255,0.22);
      }
      .presence{
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: rgba(255,255,255,0.18);
        border: 1px solid rgba(255,255,255,0.12);
      }
      .presence.on{
        background: #58D9FF;
        box-shadow: 0 0 18px rgba(88,217,255,0.52);
        border: none;
      }

      /* Near icon pulse */
      .nearPulse{
        transform-origin: 256px 256px;
        animation: nearPulse 2.8s ease-in-out infinite;
      }
      @keyframes nearPulse{
        0%, 100% { transform: scale(1); opacity: 0.98; }
        50% { transform: scale(1.03); opacity: 1; }
      }

      @keyframes checkReveal{
        0% { opacity: 0; transform: scale(0.3) translateY(-0.5px); }
        60% { opacity: 1; transform: scale(1.1) translateY(-0.5px); }
        100% { opacity: 1; transform: scale(1) translateY(-0.5px); }
      }

      /* Responsive */
      @media (max-width: 1100px){
        .showcaseInner{
          flex-direction: column;
          gap: 60px;
        }
        .phoneLeft, .phoneRight{
          transform: scale(0.96);
          opacity: 0.75;
        }
        .phoneCenter{
          transform: scale(1);
        }
        .featureGrid{
          grid-template-columns: 1fr;
        }
        .eventMetrics{
          grid-template-columns: 1fr;
        }
        .eventSplit{
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  )
}
