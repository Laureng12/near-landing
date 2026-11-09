"use client"

import Link from "next/link"
import { forwardRef, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react"

import { APP_IS_LIVE } from "./site/launch"
import { isLive } from "./site/features"
import { faqItems } from "./site/faq"
import {
  type BoopMood,
  BOOP_JOINED,
  BoopFace,
  InlineNotify,
  DownloadCta,
  HouseholdPair,
  FinalCTA,
  SiteFooter,
  TopNav,
  usePrefersReducedMotion,
  useReveal,
} from "./site/chrome"
import { ArrivalIsland, Avatar, CaptureScreen, Device, LiveActivity, LockScreen, Notification, PlacedScreen, Wallpaper } from "./site/screens"


/* The shared list Brian is about to see. */
const sharedList = ["Milk", "Eggs", "Bananas", "Bread", "Olive oil"] as const



/* ── Page ──────────────────────────────────────────────────────── */

export default function HomePageClient() {
  useReveal()

  return (
    <main className="page">
      <TopNav home />
      <Hero />
      <PlacesTicker />
      <ProofLine />
      <ProblemSection />
      <ProductDemo />
      <BenefitsSection />
      <WhoSection />
      <HouseholdChapter />
      <MoreSection />
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

  /* The Dynamic Island opens on the arrival: with Boop's cheer on first
     load (2.2s, see BoopBuddy), and on every replay. */
  const [islandOpen, setIslandOpen] = useState(false)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const delay = replaying ? 200 : 2200
    const open = setTimeout(() => setIslandOpen(true), delay)
    const close = setTimeout(() => setIslandOpen(false), delay + 3200)
    return () => { clearTimeout(open); clearTimeout(close) }
  }, [replaying])

  const boopRef = useRef<HTMLButtonElement>(null)
  const replayArrival = () => {
    setReplaying(false)
    window.setTimeout(() => setReplaying(true), 60)
  }

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
      /* Boop's eyes follow the cursor. */
      const b = boopRef.current
      if (b) {
        const br = b.getBoundingClientRect()
        const hr = el2.getBoundingClientRect()
        const dx = posRef.current.x + hr.left - (br.left + br.width / 2)
        const dy = posRef.current.y + hr.top - (br.top + br.height / 2)
        const d = Math.hypot(dx, dy) || 1
        const k = Math.min(1, d / 220)
        /* He leans toward the cursor. */
        b.style.setProperty("--ex", `${(dx / d) * 7 * k}px`)
        b.style.setProperty("--ey", `${(dy / d) * 5 * k}px`)
        b.style.setProperty("--tilt", `${(dx / d) * 9 * k}deg`)
      }
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
            Walk into the store.
            <br />
            <span className="heroBoopWord">Boop!</span> <em>There it is.</em>
          </h1>
          <p className="heroLead">
            Say it once. When you arrive, your list is right there on your Lock
            Screen, with everything your household added too. No app to open.
            No second trip.
          </p>
          {APP_IS_LIVE ? (
            <div className="heroCtas">
              <DownloadCta className="btnPrimary" source="hero">Download BoopThere</DownloadCta>
              <a className="btnGhost" href="#demo">Watch it work</a>
            </div>
          ) : (
            <div className="heroCtas heroCtasForm">
              <InlineNotify source="hero" />
              <a className="heroWatch" href="#demo">Watch it work &rarr;</a>
            </div>
          )}
          <p className="heroMicro">
            {APP_IS_LIVE
              ? "Free for iPhone. No ads. Private by design."
              : "Coming to iPhone. Core reminders are free. No ads."}
          </p>
        </div>
        <div className="heroPhone">
          <div className={`arrivalRipple rippleLoop ${replaying ? "rippleOn" : ""}`} aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="heroStage">
            <Device className="heroDevice" tone="light" island={islandOpen ? <ArrivalIsland place="Target" /> : undefined}>
              <LockScreen date="Saturday, March 15" time="1:03" widget={{ count: 4, line: "4 things across 3 places" }}>
                <LiveActivity
                  key={replaying ? "in" : "rest"}
                  className={replaying ? "scrLiveIn" : ""}
                  place="Target"
                  items={[
                    { name: "Batteries", by: "reese" },
                    { name: "Paper towels", by: "brian" },
                    { name: "Birthday card for Mom", by: "brian" },
                  ]}
                  footer="Brian added two. Whoever gets there, gets them."
                />
              </LockScreen>
            </Device>
            <BoopBuddy ref={boopRef} onBoop={replayArrival} arriving={replaying} />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Boop, live ─────────────────────────────────────────────────────
   Bounces beside the phone. Leans toward the cursor (set by the hero's
   mousemove), he squishes on hover, and a tap makes him jump, say
   something, and replay the arrival. A real button, so it works by
   keyboard too. */


/* What Boop narrates under himself. The first line is the moment the phone
   shows; each tap replays the arrival and steps to the next beat. */
const BOOP_CAPTIONS = [
  "You\u2019re at Target.",
  "Your list. Right on time.",
  "Brian added the paper towels.",
  "No app to open. It\u2019s just there.",
  "Whoever gets there, gets the list.",
] as const

const BoopBuddy = forwardRef<HTMLButtonElement, { onBoop: () => void; arriving?: boolean }>(function BoopBuddy(
  { onBoop, arriving = false },
  ref
) {
  const [hops, setHops] = useState(0)
  const [hover, setHover] = useState(false)
  /* Tap: the shades drop (a quick "oh") and settle into the cool smirk. */
  const [tap, setTap] = useState<0 | 1 | 2>(0)
  const thrillT = useRef<ReturnType<typeof setTimeout>[]>([])
  useEffect(() => () => thrillT.current.forEach(clearTimeout), [])
  const [cheer, setCheer] = useState(false)
  /* First visit: he waits, glances at the phone, the arrival lands, and the
     shades drop. After that the cool look is his resting face. Under
     reduced motion he starts there, no sequence. */
  const [intro, setIntro] = useState<BoopMood | "done" | null>(null)
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const steps: [number, BoopMood | "done"][] = reduced
      ? [[0, "done"]]
      : [
          [1500, "glance"],
          [2000, "oh"],
          [2300, "cheer"],
          [2900, "coolOh"],
          [3300, "done"],
        ]
    const ts = steps.map(([ms, m]) => setTimeout(() => setIntro(m), ms))
    return () => ts.forEach(clearTimeout)
  }, [])
  /* Joining the waitlist gets a cheer. */
  useEffect(() => {
    const onJoin = () => {
      setCheer(true)
      setTimeout(() => setCheer(false), 1600)
    }
    window.addEventListener(BOOP_JOINED, onJoin)
    return () => window.removeEventListener(BOOP_JOINED, onJoin)
  }, [])
  const resting: BoopMood | undefined =
    intro === "done" ? "cool" : intro === null ? undefined : intro

  /* When the arrival replays, he lights up for a beat. */
  useEffect(() => {
    if (!arriving) return
    // Light up on the next frame rather than synchronously in the effect so the
    // pulse doesn't trigger a cascading render (react-hooks/set-state-in-effect);
    // the off-switch below is already async. One frame is imperceptible at 1400ms.
    const raf = requestAnimationFrame(() => setCheer(true))
    const t = setTimeout(() => setCheer(false), 1400)
    return () => { cancelAnimationFrame(raf); clearTimeout(t) }
  }, [arriving])

  return (
    <button
      ref={ref}
      type="button"
      className="boopBuddy"
      aria-label="Boop! Replay the arrival"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={() => {
        setHops((h) => h + 1)
        thrillT.current.forEach(clearTimeout)
        setTap(1)
        thrillT.current = [setTimeout(() => setTap(2), 380), setTimeout(() => setTap(0), 1900)]
        onBoop()
      }}
    >
      <span className={`boopBody ${hops > 0 ? "boopJump" : ""}`} key={`j${hops}`}>
        <BoopFace className="boopImg" faces={["glance", "oh", "cheer", "coolOh", "cool", "knowing"]} mood={tap === 1 ? "coolOh" : tap === 2 ? "cool" : cheer ? "cheer" : hover ? (intro === "done" ? "knowing" : "oh") : resting} />
      </span>
      <span className="boopShadow" aria-hidden="true" />
      <span className="boopCaption" key={`c${hops}-${hover && hops === 0 ? "h" : ""}`}>
        {hover && hops === 0
          ? "Tap to see it again."
          : hops === 0 && intro === "done"
            ? "Boop! There it is."
            : BOOP_CAPTIONS[hops % BOOP_CAPTIONS.length]}
      </span>
    </button>
  )
})

/* ── Proof ─────────────────────────────────────────────────────── */

function ProofLine() {
  return (
    <section className="proof" aria-label="What people say">
      <div className="reveal proofInner">
        <blockquote className="proofQuote">
          &ldquo;The first app that remembers the errand for me.
          I just show up, and it&rsquo;s there.&rdquo;
        </blockquote>
        <cite className="proofName">Lindsay &middot; BoopThere on iPhone</cite>
      </div>
    </section>
  )
}


/* ── Places ticker ────────────────────────────────────────────────
   A band of everyday places, each one getting its Boop. Pure decoration,
   so it is aria-hidden; the list is doubled so the loop is seamless. */

const tickerPlaces = [
  "Kroger", "Target", "Walgreens", "Home Depot", "Trader Joe\u2019s",
  "the UPS Store", "Costco", "CVS", "the dry cleaner", "Publix", "home",
] as const

function PlacesTicker() {
  const row = [...tickerPlaces, ...tickerPlaces]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="tickerTrack">
        {row.map((p, i) => (
          <span className="tickerItem" key={i}>
            <span className="tickerBoop">Boop!</span> at {p}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── What changes ──────────────────────────────────────────────────
   The four benefits, in the order a visitor feels them. Every line maps to a
   `live` row in app/site/features.ts: lock-screen, voice-capture,
   household-sharing, passing-by. Nothing here is a promise the app can't keep. */

const benefits = [
  {
    id: "lock",
    title: "Nothing to open.",
    body: "Your list is on your Lock Screen the moment you walk in. You never have to go looking for it.",
  },
  {
    id: "voice",
    title: "Say it once.",
    body: "\u201cMilk at Harris Teeter.\u201d Speak it or type it, and Boop files it under the right place.",
  },
  {
    id: "house",
    title: "Whoever gets there, gets it.",
    body: "One shared list for the household. Check something off and everyone sees it\u2019s done. No \u201cdid you remember?\u201d texts.",
  },
  {
    id: "passing",
    title: "It catches you passing by.",
    body: "Driving past the hardware store counts. Boop speaks up before you\u2019re home again.",
  },
] as const

function BenefitIcon({ id }: { id: (typeof benefits)[number]["id"] }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  switch (id) {
    case "lock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="2.5" width="12" height="19" rx="3" {...p} />
          <path d="M9 11.5h6M9 14.5h4" {...p} />
        </svg>
      )
    case "voice":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="9" y="3" width="6" height="11" rx="3" {...p} />
          <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" {...p} />
        </svg>
      )
    case "house":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="8.5" cy="9" r="3" {...p} />
          <circle cx="16" cy="9.5" r="2.5" {...p} />
          <path d="M3.5 19a5 5 0 0 1 10 0M13.5 17.5a4 4 0 0 1 7 1.5" {...p} />
        </svg>
      )
    case "passing":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10Z" {...p} />
          <circle cx="12" cy="11" r="2" {...p} />
        </svg>
      )
  }
}

/* Each benefit card shows the moment it describes, as a small live scene.
   Decorative (aria-hidden): the title and body carry the meaning. */
function BenefitScene({ id }: { id: (typeof benefits)[number]["id"] }) {
  switch (id) {
    case "lock":
      return (
        <div className="bsLock scrKit">
          <Wallpaper />
          <div className="scrLockTime bsKitTime">5:12</div>
          <Notification title="You’re at Kroger" body="Milk, eggs, coffee. All on your list." className="bsKitNotif" />
        </div>
      )
    case "voice":
      return (
        <div className="bsVoice">
          <BoopFace className="sceneBoop" mood="onit" still />
          <div className="bsWave">
            {[30, 56, 82, 48, 92, 64, 38, 74, 44, 60, 28].map((h, i) => (
              <i key={i} style={{ height: h + "%", animationDelay: i * 90 + "ms" }} />
            ))}
          </div>
          <div className="bsSaid">&ldquo;Milk at Harris Teeter&rdquo;</div>
          <div className="bsFiled">
            <span className="bsPin" />Filed under <b>Harris Teeter</b>
          </div>
        </div>
      )
    case "house":
      return (
        <div className="bsHouse scrKit">
          <ul className="scrListItems bsKitList">
            <li className="scrListItem scrDone">
              <span className="scrCheck" aria-hidden="true">
                <svg viewBox="0 0 16 16"><path d="m4 8.3 2.7 2.7L12 5.6" /></svg>
              </span>
              <span className="scrListName">Eggs<i>Brian got it</i></span>
              <Avatar who="brian" size="sm" />
            </li>
            <li className="scrListItem">
              <span className="scrCheck" aria-hidden="true">
                <svg viewBox="0 0 16 16"><path d="m4 8.3 2.7 2.7L12 5.6" /></svg>
              </span>
              <span className="scrListName">Bananas</span>
              <Avatar who="reese" size="sm" />
            </li>
          </ul>
        </div>
      )
    case "passing":
      return (
        <div className="bsMap">
          <svg viewBox="0 0 320 150" className="bsRoute" preserveAspectRatio="xMidYMid meet">
            <path id="bsRoutePath" d="M14 128 C 90 120, 110 40, 190 52 S 290 40, 306 20" />
            <circle className="bsCarDot" r="7">
              <animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.7;1" calcMode="linear">
                <mpath href="#bsRoutePath" />
              </animateMotion>
            </circle>
          </svg>
          <span className="bsStore">
            <span className="bsStoreDot" />Home Depot &middot; 0.2 mi
          </span>
          <span className="bsHome">Home</span>
        </div>
      )
  }
}

function BenefitsSection() {
  return (
    <section className="chapter benefits" id="benefits" aria-labelledby="benefitsTitle">
      <div className="reveal shell">
        <div className="centeredHead">
          <p className="eyebrow">What changes</p>
          <h2 className="h2 h2Center" id="benefitsTitle">
            Your list finds you.
            <br />
            <em>You just show up.</em>
          </h2>
        </div>
        <ul className="benefitGrid">
          {benefits.map((b) => (
            <li className={`benefitCard benefitCard--${b.id}`} key={b.id} data-stagger>
              <div className="benefitScene" aria-hidden="true">
                <BenefitScene id={b.id} />
              </div>
              <div className="benefitText">
                <span className="benefitIcon"><BenefitIcon id={b.id} /></span>
                <h3 className="benefitTitle">{b.title}</h3>
                <p className="benefitBody">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Who it's for ─────────────────────────────────────────────────
   Four lives, one product. Every line describes something the live app
   does: an arrival reminder, or a shared list someone else added to. */

const people = [
  { who: "The exec", tone: "exec", face: "onit", place: "You\u2019re at the airport.", body: "Charger\u2019s on the list. Not in your bag.", line: "Dry cleaning before the board meeting. Not after." },
  { who: "The roommates", tone: "roomies", face: "laugh", place: "You\u2019re at Costco.", body: "Jordan added \u201cthe big olive oil.\u201d", line: "Toilet paper\u2019s on the list. You\u2019re the one at Costco." },
  { who: "The family", tone: "family", face: "joy", place: "You\u2019re at school pickup.", body: "Permission slip\u2019s due today.", line: "One list. Whoever\u2019s there gets it." },
  { who: "The teenager", tone: "teen", face: "cool", place: "You\u2019re at Target.", body: "Mom\u2019s list. All four things.", line: "On your phone when you arrive." },
] as const

function WhoSection() {
  return (
    <section className="chapter whoChapter" id="who" aria-labelledby="whoTitle">
      <div className="reveal shell">
        <div className="centeredHead">
          <p className="eyebrow">Who it&rsquo;s for</p>
          <h2 className="h2 h2Center" id="whoTitle">
            Anyone with a list
            <br />
            <em>and somewhere to be.</em>
          </h2>
        </div>
        <ul className="whoGrid">
          {people.map((p) => (
            <li className={`whoCard whoCard--${p.tone}`} key={p.who} data-stagger>
              <div className="whoTop">
                <span className="whoLabel">{p.who}</span>
                <BoopFace className="whoBoop" mood={p.face} still />
              </div>
              <div className="scrKit whoKit" aria-hidden="true">
                <Notification title={p.place} body={p.body} />
              </div>
              <p className="whoLine">{p.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── The problem ────────────────────────────────────────────────────

   The site used to explain the mechanism twice: a four-beat demo, then a
   three-step section saying the same thing in words. The demo won, and the
   space the three steps were taking goes here instead.

   The pain BoopThere removes is not a badly organised list. It is remembering at
   the wrong moment, which is a thing everyone has done this week. */

const tooLate = [
  { thing: "The milk", when: "after you unpacked the groceries.", face: "\u{1F926}\u200D\u2640\uFE0F", late: "Already home", tone: "a" },
  { thing: "The return", when: "after you passed the drop-off.", face: "\u{1F629}", late: "1.2 mi past it", tone: "b" },
  { thing: "The question", when: "after you left the appointment.", face: "\u{1F624}", late: "Already in the car", tone: "c" },
]

function ProblemSection() {
  return (
    <section className="chapter chapterSunk" id="problem">
      <div className="reveal shell narrow center">
        <BoopFace className="lateBoop" mood="annoyed" still />
        <p className="eyebrow">The problem</p>
        <h2 className="h2 h2Center">
          You remembered.
          <br />
          <em className="lateWobble">Just a little too late.</em>
        </h2>
        <ul className="lateList">
          {tooLate.map((t) => (
            <li className={`lateRow lateRow--${t.tone}`} key={t.thing} data-stagger>
              <span className="lateText">
                <span className="lateThing">{t.thing},</span>{" "}
                <span className="lateWhen">{t.when}</span>
              </span>
              <span className="lateStamp">{t.late}</span>
            </li>
          ))}
        </ul>
        <p className="lead leadCenter lateTurn">
          BoopThere brings up what you saved when you reach the place you need it.
        </p>
      </div>
    </section>
  )
}

/* ── Household ─────────────────────────────────────────────────── */


function HouseholdChapter() {
  return (
    <section className="chapter chapterSky" id="household">
      <div className="skyWash skyWashWarm" aria-hidden="true" />
      <div className="reveal shell split">
        <div className="splitCopy">
          <BoopFace className="houseBoop" mood="cheer" still />
          <p className="eyebrow">For households</p>
          <h2 className="h2">
            Share the list.
            <br />
            <em>Skip the follow-up.</em>
          </h2>
          {/* Every clause checked against the backend before it was written.
              Arrivals count pending tasks household-wide, so whoever walks in
              gets them; tasks are fetched where:{householdId}, so a check-off
              is one row everyone sees.

              "Your partner" narrowed this to couples. BoopThere is for roommates
              and families too, and "whoever gets there" is also the accurate
              description - BoopThere does not pick a person, it answers an arrival.
              Same words as the FAQ now. */}
          <p className="lead">
            You add milk at home. Whoever gets to the store is the one BoopThere
            reminds. When they check it off, everyone sees it is done.
          </p>
          <p className="caption">
            Because remembering everything should not be one person&rsquo;s job.
            Start on your own, and share whenever you&rsquo;re ready.
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

/* ── More than reminders ───────────────────────────────────────────
   The bridge to Pro. Pricing sells meal plans and restocks; without this
   the homepage never mentions them and /pricing reads like another app.
   Every tile is a live row in site/features.ts. */

const moreTiles = [
  {
    id: "meals",
    flag: "meal-plan-free",
    title: "A week of dinners, planned",
    body: "Pick three dinners or let BoopThere suggest them. Three plans a month are free; Pro takes the cap off.",
    pill: "Free + Pro",
    face: "joy" as const,
  },
  {
    id: "list",
    flag: "kroger",
    title: "One list, in aisle order",
    body: "Three recipes become one grocery list, sorted the way the store is laid out. It\u2019s waiting when you walk in.",
    pill: "Free",
    face: "onit" as const,
  },
  {
    id: "restock",
    flag: "predictive-restock",
    title: "It notices you\u2019re low",
    body: "Pro learns what you buy and when you run out, and adds it before you have to remember.",
    pill: "Pro",
    face: "knowing" as const,
  },
] as const

function MoreSection() {
  const tiles = moreTiles.filter((t) => isLive(t.flag))
  if (tiles.length === 0) return null
  return (
    <section className="chapter moreChapter" id="more">
      <div className="shell">
        <div className="reveal centeredHead">
          <p className="eyebrow">More than reminders</p>
          <h2 className="h2 h2Center">
            Then it plans dinner, <em>too.</em>
          </h2>
        </div>
        <ul className="moreGrid reveal">
          {tiles.map((t) => (
            <li className={`moreCard moreCard--${t.id}`} key={t.id} data-stagger>
              <BoopFace className="moreBoop" mood={t.face} still />
              <span className="morePill">{t.pill}</span>
              <h3 className="moreTitle">{t.title}</h3>
              <p className="moreBody">{t.body}</p>
            </li>
          ))}
        </ul>
        <p className="caption moreFoot">
          <Link href="/pricing" className="quietLink">See what&rsquo;s free and what&rsquo;s Pro</Link>
        </p>
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
    caption: "BoopThere attaches it to Harris Teeter. Change it if that is the wrong store.",
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

  return (
    <section className="chapter chapterTight" id="demo" ref={sectionRef}>
      <span id="how-it-works" className="anchorOffset" aria-hidden="true" />
      <div className="reveal shell">
        <div className="centeredHead">
          <p className="eyebrow">Watch it work</p>
          <h2 className="h2 h2Center">The milk shouldn&rsquo;t need a second trip.</h2>
          <p className="lead leadCenter demoLead">
            Add &ldquo;Milk at Harris Teeter.&rdquo; BoopThere connects it to a store, and you
            can change the place if it picked the wrong one. When you arrive,
            your reminder is on your Lock Screen.
          </p>
        </div>

        <div className="dmStage">
          <div className="dmPhone">
            <Device
              tone={beat >= 2 ? "light" : "dark"}
              island={beat === LAST_BEAT ? <ArrivalIsland place="Harris Teeter" /> : undefined}
            >
              <div className="scrPane" data-on={beat === 0} aria-hidden={beat !== 0}>
                <CaptureScreen listening={beat === 0} />
              </div>
              <div className="scrPane" data-on={beat === 1} aria-hidden={beat !== 1}>
                <PlacedScreen key={beat === 1 ? "on" : "off"} />
              </div>
              <div className="scrPane" data-on={beat >= 2} aria-hidden={beat < 2}>
                <LockScreen date="Thursday, March 20" time="5:12" widget={{ count: 1, line: "Milk, at Harris Teeter" }}>
                  {beat === LAST_BEAT && (
                    <LiveActivity
                      className="scrLiveIn"
                      place="Harris Teeter"
                      distance="You’re here"
                      items={[{ name: "Milk", by: "reese" }]}
                      footer="You said it Tuesday. Boop kept it till now."
                    />
                  )}
                </LockScreen>
              </div>
            </Device>
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
  const pledges = ["No ads", "No data brokers", "No productivity guilt"]

  /* This section used to carry a phone: a Lock Screen with the three pledges
     printed on it. That is a poster, not an arrival - the weakest use of the
     site's strongest image, and one more invented screen on a page that had
     six. The claim stands on its own, centred, the way /features says it. */
  return (
    <section className="chapter chapterSunk">
      <div className="reveal shell narrow center">
        <p className="eyebrow">Quiet by design</p>
        <h2 className="h2 h2Center">
          Your errands are
          <br />
          your business.
        </h2>
        <p className="lead leadCenter">
          Your live route never leaves your iPhone. What syncs is what makes a
          reminder work: your places, your tasks, and the arrivals that fire
          them. BoopThere sells none of it, and never uses it for ads.
        </p>
        <div className="pillRow">
          {pledges.map((p) => (
            <span className="pill" key={p} data-stagger>
              {p}
            </span>
          ))}
        </div>
        <p className="caption quietFoot">
          Delete everything, any time.{" "}
          <Link href="/privacy" className="quietLink">
            How BoopThere uses your data
          </Link>
        </p>
      </div>
    </section>
  )
}

/* ── FAQ ───────────────────────────────────────────────────────── */

function FAQSection() {
  return (
    <section className="chapter chapterTight" id="faq">
      <div className="reveal shell narrow">
        <div className="faqHead">
          <BoopFace className="faqBoop" mood="skeptic" still />
          <h2 className="h3Quiet">Questions, answered</h2>
        </div>
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
