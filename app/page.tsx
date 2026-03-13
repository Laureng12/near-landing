"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

const KEY_SENTENCE =
  "Near is an ambient task intelligence system that surfaces errands, reminders, and household tasks automatically based on location."
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
      "Errands surface while you\u2019re already on the road.",
  },
  {
    icon: "\uD83C\uDF10",
    title: "Siri & Maps",
    description:
      "Ask naturally. See tasks where places already live.",
  },
]

const placesUI = [
  { name: "Trader Joe\u2019s", count: 4, emoji: "\uD83C\uDF4E" },
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
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

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
          <span className="footerCopy">&copy; {new Date().getFullYear()} Near</span>
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

const PHASE_NAMES = ["home", "costco", "places", "arrive-home"] as const
const PHASE_DURATION = 3500 // ms per phase

const phaseTexts = [
  "Near quietly surfaces errands, groceries, and household tasks when you arrive where they matter.",
  "Tap into a place and see exactly what you need. One store, one list.",
  "Arrive at the store. Your list is already there.",
  "Even home has a list. Near remembers so you don\u2019t have to.",
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

/* âââ Phone Mockup (auto-cycling phases) âââ */

/* Which tab is active per phase: 0=idleâPlaces, 1=groceryâPlaces, 2=targetâPlaces, 3=homeâHousehold */
const PHASE_ACTIVE_TAB = [0, -1, 1, -1] // 0=Home, -1=lock, 1=Places, -1=lock

const notifData = [
  null, // home screen â no notification
  null, // places screen â no notification
  { title: "Arriving at Costco", body: "You have 5 items on your list" },
  { title: "Welcome home", body: "You have 2 tasks here" },
]

function PhoneMockup({ phase }: { phase: number }) {
  const activeTab = PHASE_ACTIVE_TAB[phase]
  const isLocked = phase === 1 || phase === 3

  return (
    <div className="phoneMockup">
      <div className="phoneDynamic" />
      <div className="phoneScreen">
        {/* Status bar */}
        <div className={`phoneStatusBar ${isLocked ? "phoneStatusBarLight" : ""}`}>
          <span className="phoneTime">9:41</span>
          <div className="phoneStatusRight">
            <svg className="phoneSignal" width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0" y="8" width="3" height="3" rx="0.5" fill="#1D1D1F"/>
              <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" fill="#1D1D1F"/>
              <rect x="9" y="3" width="3" height="8" rx="0.5" fill="#1D1D1F"/>
              <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="#1D1D1F"/>
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

        {/* Near app icon â top left corner */}
        <div className={`phoneNearIcon ${isLocked ? "phoneNearIconHidden" : ""}`}>
          <Image
            src="/near-icon-hero.png"
            alt=""
            width={28}
            height={28}
            className="phoneNearIconImg"
          />
        </div>

        {/* iOS-style notification banners â slide down from top */}
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
          <div className="phoneGreeting">Good morning.</div>
          <div className="phoneHomeTitle">A fresh start.</div>
          <div className="phoneHomeSub">8 to-dos at 5 places</div>
          <div className="phoneSectionLabel">CLOSEST TO YOU</div>
          <div className="phoneGroupList">
            <div className="phoneGroupItem">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{"\uD83D\uDED2"}</span>
                <span className="phoneGroupName">Costco</span>
                <span className="phoneBadge">5</span>
                <span className="phoneChevron">{"\u203A"}</span>
              </div>
              <div className="phoneGroupTask">Paper towels</div>
            </div>
            <div className="phoneGroupItem">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{"\uD83C\uDFE0"}</span>
                <span className="phoneGroupName">Home</span>
                <span className="phoneBadge">2</span>
                <span className="phoneChevron">{"\u203A"}</span>
              </div>
              <div className="phoneGroupTask">Water plants</div>
            </div>
            <div className="phoneGroupItem">
              <div className="phoneGroupHeader">
                <span className="phoneGroupEmoji">{"\uD83D\uDC8A"}</span>
                <span className="phoneGroupName">CVS</span>
                <span className="phoneBadge">1</span>
                <span className="phoneChevron">{"\u203A"}</span>
              </div>
              <div className="phoneGroupTask">Pick up prescription</div>
            </div>
          </div>
        </div>

        {/* Phase 1: Store detail screen */}
        <div className={`phoneContent ${phase === 2 ? "phoneContentVisible" : ""}`}>
          <div className="phoneStoreHeader">
            <span className="phoneStoreBack">{"‹"}</span>
            <span className="phoneStoreEmoji">{"🛒"}</span>
            <div className="phoneStoreInfo">
              <div className="phoneStoreName"><span style={{color: "#2997ff"}}>Costco</span></div>
              <div className="phoneStoreDist">0.3 mi away</div>
            </div>
          </div>
          <div className="phoneSectionLabel">YOUR LIST</div>
          <div className="phoneTaskList">
            <div className="phoneTaskRow">
              <span className="phoneCheck phoneChecked">{"✓"}</span>
              <span className="phoneTaskText phoneTaskDone">Trash bags</span>
            </div>
            <div className="phoneTaskRow">
              <span className="phoneCheck phoneChecked">{"✓"}</span>
              <span className="phoneTaskText phoneTaskDone">Olive oil</span>
            </div>
            <div className="phoneTaskRow">
              <span className="phoneCheck">{" "}</span>
              <span className="phoneTaskText">Paper towels</span>
            </div>
            <div className="phoneTaskRow">
              <span className="phoneCheck">{" "}</span>
              <span className="phoneTaskText">Dog food</span>
            </div>
            <div className="phoneTaskRow">
              <span className="phoneCheck">{" "}</span>
              <span className="phoneTaskText">Laundry detergent</span>
            </div>
          </div>
        </div>

        {/* Lock screen overlay â phases 2 & 3 (app closed) */}
        <div className={`phoneLockOverlay ${isLocked ? "phoneLockVisible" : ""}`}>
          <div className="lockTimeDisplay">9:41</div>
          <div className="lockDateDisplay">Wednesday, March 11</div>
        </div>

        {/* Tab bar â hidden on lock screen */}
        <div className={`phoneTabBar ${isLocked ? "phoneTabBarHidden" : ""}`}>
          {/* Home */}
          <div className={`phoneTab ${activeTab === 0 ? "phoneTabActive" : ""}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {activeTab === 0 ? (
                <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" fill="var(--blue)" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
            <span>Home</span>
          </div>
          {/* Places */}
          <div className={`phoneTab ${activeTab === 1 ? "phoneTabActive" : ""}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
          {/* Add button */}
          <div className="phoneTab phoneTabAdd">
            <div className="phoneAddBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          {/* Memory */}
          <div className={`phoneTab ${activeTab === 3 ? "phoneTabActive" : ""}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {activeTab === 3 ? (
                <>
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 12h6M9 16h4" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 12h6M9 16h4" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
            <span>Memory</span>
          </div>
          {/* Household */}
          <div className={`phoneTab ${activeTab === 4 ? "phoneTabActive" : ""}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {activeTab === 4 ? (
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
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
    <section className="section sectionSurface" id="what-is-near">
      <div className="reveal sectionShell narrow">
        <h2 className="sectionTitle">What is <span className="gradientText">Near</span>?</h2>
        <p className="bodyText">{KEY_SENTENCE}</p>
        <p className="bodyText">
          Instead of checking lists or setting timers, tasks appear when you arrive at the places where they can actually be completed.
        </p>
        <ul className="exampleList">
          <li>Groceries appearing at the grocery store</li>
          <li>Errand reminders appearing when you pass a store</li>
          <li>Home tasks appearing when you arrive home</li>
        </ul>
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
          <h2 className="sectionTitle left">
            Arrive somewhere.<br />Your list is already there.
          </h2>
          <p className="bodyText">
            Near understands that most tasks belong to places. When you arrive somewhere, the tasks that belong there appear automatically.
          </p>
          <p className="caption">No app opening required.</p>
        </div>
        <div className="splitVisual">
          <div className="arriveCard">
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
          <h2 className="sectionTitle left">
            Passing a place you need to stop.<br />Near notices before you miss the turn.
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
            <div className="passingByNotif">
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
          <h2 className="sectionTitle">Designed for the <span className="gradientText">Apple ecosystem.</span></h2>
        </div>
        <div className="ecoGrid">
          {ecosystemItems.map((item, i) => (
            <article className={`ecoCard ecoCard${i}`} key={item.title}>
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
          <h2 className="sectionTitle left">Just <span className="gradientText">places.</span></h2>
          <p className="bodyText">
            Near organizes tasks around places instead of lists.<br />
            Because errands belong somewhere.
          </p>
          <p className="caption">No folders. No tags. No projects.</p>
        </div>
        <div className="splitVisual">
          <div className="placesCard">
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
          <h2 className="sectionTitle left">Add tasks the way <span className="gradientText">you think.</span></h2>
          <p className="bodyText">
            Type what you need and Near suggests where it belongs.<br />
            Or just ask Siri.
          </p>
        </div>
        <div className="splitVisual">
          <div className="inputCard">
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
          <h2 className="sectionTitle left">One household.<br />One shared memory.</h2>
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
            <div className="householdNotif">
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
          <h2 className="sectionTitle left">Built around the <span className="gradientText">places you go.</span></h2>
          <p className="bodyText">
            Search for a place in Maps and Near shows the tasks waiting there.
          </p>
        </div>
        <div className="splitVisual">
          <div className="mapsCard">
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
        <h2 className="sectionTitle"><span className="gradientText">Technology</span> that stays out of the way.</h2>
        <p className="bodyText center">
          Near is designed to be quiet. Only high-value moments.
        </p>
        <div className="pillGrid">
          <span className="pill">No feeds</span>
          <span className="pill">No streaks</span>
          <span className="pill">No productivity pressure</span>
          <span className="pill">No noise</span>
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
        <div className="privacyVisual">
          <div className="privacyGlow" />
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
        <h2 className="sectionTitle">Your task intelligence. <span className="gradientText">Kept private.</span></h2>
        <p className="bodyText center">
          Near uses location only to show tasks when they matter.<br />
          Your data stays on your device.
        </p>
        <div className="pillGrid">
          <span className="pill">No ads</span>
          <span className="pill">No tracking</span>
          <span className="pill">No profiling</span>
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
        <div className="philVisual">
          <div className="philGlow" />
          <div className="philGlow2" />
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
        </div>
        <h2 className="sectionTitle">Your brain is for <span className="gradientText">ideas.</span></h2>
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
        <h2 className="sectionTitle center">Frequently asked questions</h2>
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
        <h2 className="finalTitle">
          The smartest reminder is the one that waits for the right place.
        </h2>
        <p className="finalSub">Download Near and let errands find you.</p>
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
        transform: translateY(32px);
        transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
      }

      /* ââ Gradient text ââ */

      .gradientText {
        background: linear-gradient(135deg, #2F6DFF 0%, #7B5CFF 40%, #C74BF6 70%, #FF6B8A 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
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
        0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        33% { opacity: 1; transform: translate(-50%, -50%) scale(1.05) rotate(2deg); }
        66% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.02) rotate(-1deg); }
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
        font-weight: 600;
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
      }

      .sectionSurface {
        background: #F5F5F7;
      }

      .sectionShell {
        max-width: 980px;
        margin: 0 auto;
      }

      .sectionShell.narrow {
        max-width: 640px;
      }

      .sectionHeading {
        text-align: center;
        margin-bottom: 3rem;
      }

      .sectionTitle {
        margin: 0;
        font-size: clamp(2rem, 5vw, 48px);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -0.01em;
        color: #1D1D1F;
        text-wrap: balance;
      }

      .sectionTitle.center { text-align: center; }
      .sectionTitle.left { text-align: left; }

      .bodyText {
        margin: 1.2rem 0 0;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.5;
        color: #6E6E73;
      }

      .bodyText.center { text-align: center; }

      .bodyAccent {
        margin: 1.5rem 0 0;
        font-size: 19px;
        font-weight: 600;
        color: var(--blue);
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
        background: #F5F5F7;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
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
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
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
        border: 1px solid rgba(47, 109, 255, 0.12);
        font-size: 0.95rem;
        font-weight: 500;
        color: #1D1D1F;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }

      .pill:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(47, 109, 255, 0.15);
        border-color: rgba(47, 109, 255, 0.4);
        background: linear-gradient(135deg, rgba(47, 109, 255, 0.04), rgba(168, 85, 247, 0.04));
      }

      .sectionSurface .pill {
        background: #FFFFFF;
      }

      /* ââ Example List ââ */

      .exampleList {
        margin: 1.5rem 0 0;
        padding: 0;
        list-style: none;
      }

      .exampleList li {
        position: relative;
        padding: 0.5rem 0 0.5rem 1.5rem;
        font-size: 19px;
        color: #6E6E73;
        line-height: 1.5;
      }

      .exampleList li::before {
        content: 'â¢';
        position: absolute;
        left: 0;
        color: var(--blue);
        font-weight: 700;
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
        padding: 5rem 2rem;
        border-radius: 2rem;
        text-align: center;
        background: linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #302b63 60%, #24243e 100%);
        color: white;
        overflow: hidden;
        position: relative;
      }

      .finalOrb {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        filter: blur(60px);
      }

      .finalOrb1 {
        width: 400px;
        height: 400px;
        top: -100px;
        right: -80px;
        background: radial-gradient(circle, rgba(123, 92, 255, 0.4) 0%, transparent 70%);
        animation: orbFloat1 8s ease-in-out infinite;
      }

      .finalOrb2 {
        width: 350px;
        height: 350px;
        bottom: -80px;
        left: -60px;
        background: radial-gradient(circle, rgba(47, 109, 255, 0.35) 0%, transparent 70%);
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

      .finalTitle {
        margin: 0 auto;
        font-size: clamp(2rem, 5vw, 48px);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -0.01em;
        max-width: 14ch;
        position: relative;
      }

      .finalSub {
        margin: 1rem auto 0;
        font-size: 19px;
        color: rgba(255, 255, 255, 0.6);
        max-width: 640px;
        position: relative;
      }

      .finalBtn {
        margin-top: 2rem;
        position: relative;
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
        background: #000;
        padding: 6px;
        position: relative;
        box-shadow:
          0 0 0 2px #1A1A1E,
          0 0 0 4px #2A2A2E,
          0 20px 60px rgba(0, 0, 0, 0.25),
          0 8px 24px rgba(0, 0, 0, 0.15);
        animation: phoneFloat 6s ease-in-out infinite;
      }

      @keyframes phoneFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
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
        background: #F2F2F7;
        overflow: hidden;
        position: relative;
      }

      /* Status bar */
      .phoneStatusBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 18px 0;
        height: 44px;
        position: relative;
        z-index: 12;
        transition: filter 0.4s ease;
      }

      .phoneStatusBarLight {
        filter: brightness(0) invert(1);
      }

      .phoneTime {
        font-size: 14px;
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
        background:
          radial-gradient(ellipse 120% 80% at 20% 80%, rgba(232,140,50,0.7) 0%, transparent 50%),
          radial-gradient(ellipse 100% 70% at 80% 70%, rgba(200,60,120,0.6) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 50% 30%, rgba(80,60,180,0.5) 0%, transparent 50%),
          linear-gradient(170deg, #1a1040 0%, #2d1b69 25%, #4a2080 45%, #8b3a8f 65%, #d46a4e 85%, #e8a04e 100%);
        z-index: 11;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s ease, visibility 0s 0.25s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 80px;
        pointer-events: none;
      }

      .phoneLockOverlay.phoneLockVisible {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease 0.15s, visibility 0s 0s;
      }

      .lockTimeDisplay {
        font-size: 60px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        text-shadow: 0 1px 8px rgba(0,0,0,0.3);
      }

      .lockDateDisplay {
        font-size: 15px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 6px;
        text-shadow: 0 1px 4px rgba(0,0,0,0.2);
      }

      .phoneTabBarHidden {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
      }

      /* Home screen (phase 0) */
      .phoneGreeting {
        font-size: 13px;
        font-weight: 500;
        color: var(--blue);
        margin-bottom: 2px;
      }

      .phoneHomeTitle {
        font-size: 24px;
        font-weight: 700;
        color: #1D1D1F;
        letter-spacing: -0.02em;
        line-height: 1.15;
      }

      .phoneHomeSub {
        font-size: 13px;
        color: var(--blue);
        margin-top: 2px;
        font-weight: 500;
      }

      .phoneSectionLabel {
        font-size: 11px;
        font-weight: 600;
        color: #8E8E93;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin: 14px 0 8px;
      }

      .phoneGroupList {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .phoneGroupItem {
        background: white;
        border-radius: 12px;
        padding: 10px 12px;
        border: 1px solid rgba(0, 0, 0, 0.06);
      }

      .phoneGroupHeader {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .phoneGroupEmoji {
        font-size: 16px;
        flex-shrink: 0;
      }

      .phoneGroupName {
        font-size: 15px;
        font-weight: 600;
        color: #1D1D1F;
        flex: 1;
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
        gap: 6px;
        margin: 8px 0 4px;
      }

      .phoneChip {
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        background: rgba(0, 0, 0, 0.05);
        color: #6E6E73;
      }

      .phoneChipActive {
        background: var(--blue);
        color: white;
      }

      /* Phase content layers */
      .phoneContent {
        position: absolute;
        top: 78px;
        left: 0;
        right: 0;
        bottom: 56px;
        padding: 0 16px 16px;
        overflow: hidden;
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
        font-size: 12px;
        font-weight: 600;
        color: white;
        background: var(--blue);
        width: 22px;
        height: 22px;
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
        padding: 6px 4px 4px;
        background: rgba(242, 242, 247, 0.92);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        border-top: 0.5px solid rgba(0, 0, 0, 0.1);
        z-index: 15;
      }

      .phoneTab {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
        font-size: 9px;
        font-weight: 500;
        color: #8E8E93;
        padding: 2px 0;
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
        margin-top: -8px;
      }

      .phoneAddBtn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(47, 109, 255, 0.3);
      }

      .phoneAddBtn svg {
        width: 16px;
        height: 16px;
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
        background: rgba(242, 242, 247, 0.92);
      }

      .phoneHomeBar {
        width: 36%;
        height: 4px;
        border-radius: 100px;
        background: rgba(0, 0, 0, 0.18);
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

      @media (max-width: 720px) {
        .hideOnMobile { display: none; }

        .hero {
          min-height: auto;
          padding: 56px 0.5rem 2rem;
        }

        .heroSplit {
          flex-direction: column;
          text-align: center;
          gap: 1rem;
        }

        .heroPhone { order: -1; }

        .heroCopy { text-align: center; }

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
          width: 160px;
          height: 327px;
          border-radius: 30px;
          padding: 4px;
        }

        .phoneScreen { border-radius: 26px; }

        .phoneDynamic {
          width: 80px;
          height: 24px;
          border-radius: 12px;
          top: 8px;
        }

        .phoneStatusBar {
          padding: 12px 16px 0;
          height: 38px;
        }

        .phoneTime { font-size: 12px; }

        .phoneNearIcon { top: 40px; left: 10px; width: 22px; height: 22px; }
        .phoneNearIconImg { width: 22px; height: 22px; border-radius: 5px; }
        .phoneContent { top: 66px; bottom: 42px; padding: 0 10px 10px; }
        .lockTimeDisplay { font-size: 40px; }
        .lockDateDisplay { font-size: 12px; }
        .phoneLockOverlay { padding-bottom: 50px; }
        .phoneGreeting { font-size: 11px; }
        .phoneHomeTitle { font-size: 18px; }
        .phoneHomeSub { font-size: 11px; }
        .phoneSectionLabel { font-size: 9px; margin: 8px 0 4px; }
        .phoneGroupItem { padding: 7px 8px; border-radius: 8px; }
        .phoneGroupEmoji { font-size: 12px; }
        .phoneGroupName { font-size: 12px; }
        .phoneGroupTask { font-size: 11px; padding-left: 20px; margin-top: 2px; }
        .phoneChevron { font-size: 14px; }
        .phoneFilterChips { gap: 4px; margin: 4px 0 2px; }
        .phoneChip { font-size: 9px; padding: 3px 7px; }

        .phoneAppTitle { font-size: 20px; }
        .phoneAppCount { font-size: 12px; }
        .phoneAppHeader { margin-bottom: 10px; }
        .phoneStoreHeader { gap: 6px; margin-bottom: 8px; }
        .phoneStoreBack { font-size: 18px; }
        .phoneStoreEmoji { font-size: 16px; }
        .phoneStoreName { font-size: 14px; }
        .phoneStoreDist { font-size: 9px; }


        .phoneTaskRow { padding: 9px 10px; gap: 8px; }
        .phoneTaskText { font-size: 13px; }
        .phoneCheck { width: 18px; height: 18px; font-size: 10px; }
        .placeIcon { font-size: 0.9rem; }
        .phoneBadge { width: 18px; height: 18px; font-size: 10px; }
        .phoneGroupItem:nth-child(3) { display: none; }
        .phoneGroupList { gap: 3px; }
        .phoneHomeTitle { font-size: 16px; }


        .phoneNotif {
          top: 8px;
          left: 5px;
          right: 5px;
          padding: 8px;
          border-radius: 14px;
          gap: 6px;
        }

        .phoneNotifAppIcon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
        }

        .phoneNotifTitle { font-size: 11px; }
        .phoneNotifBody { font-size: 10px; }

        .phoneCarplay {
          margin-top: 10px;
          padding: 10px;
          border-radius: 12px;
        }

        .phoneCarplayLabel { font-size: 9px; }
        .phoneCarplayStore { font-size: 16px; }
        .phoneCarplayTasks { gap: 4px; margin-top: 6px; }
        .phoneCarplayTasks span { padding: 6px 8px; font-size: 11px; border-radius: 6px; }

        .phoneContent { bottom: 42px; }

        .phoneTabBar { padding: 4px 2px 1px; }
        .phoneTab { font-size: 7px; gap: 1px; }
        .phoneTab svg { width: 14px; height: 14px; }
        .phoneAddBtn { width: 24px; height: 24px; }
        .phoneAddBtn svg { width: 12px; height: 12px; }
        .phoneTabAdd { margin-top: -4px; }

        .phoneHomeBar { height: 3px; }
        .phoneHomeIndicator { padding-bottom: 4px; }

        .phoneSignal { width: 13px; height: 9px; }
        .phoneWifi { width: 12px; height: 10px; }

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
