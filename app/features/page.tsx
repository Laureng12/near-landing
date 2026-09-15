"use client"

/* Everything Near does, in one place.
   The homepage makes one promise. This page is where the rest of the product
   lives - capture, arrival, the household, Meal Plan, the mark - without
   restating the promise six more times. It runs on the shared chrome and the
   shared token system, so it is the same site, not a second one. */

import "./features.css"

import Image from "next/image"
import Link from "next/link"

import { planPill } from "../site/features"
import {
  ArrivalPhone,
  FinalCTA,
  HouseholdPair,
  SiteFooter,
  TopNav,
  useReveal,
  VoiceWave,
  type Scene,
} from "../site/chrome"

/* Capture and arrival: the two halves of the only loop Near has. */
const captureRows = [
  {
    k: "Say it",
    v: "“Grab dog food and drop the rug off.” Two things, two places, one sentence.",
  },
  {
    k: "Type it",
    v: "One field. No project, no list to pick, no tags to invent.",
  },
  {
    k: "Share it in",
    v: "A text from your sister, a recipe, a link. Send it to Near and it lands where it belongs.",
  },
  {
    k: "Near places it",
    v: "It reads the thing and picks the place, and you can change it.",
  },
]

const arrivalRows = [
  {
    k: "On arrival",
    v: "Your list is on the Lock Screen before you are through the door.",
  },
  {
    k: "One card, not six pings",
    v: "Everything you needed at that place arrives together.",
  },
  {
    k: "On the way",
    v: "Passing the hardware store counts. Near catches you before you are home again.",
  },
  {
    k: "Before the door locks",
    v: "A heads-up while the place is still open, instead of an apology after.",
  },
]

const householdRows = [
  "One list, live on everybody’s phone.",
  "Someone adds it at home. Someone else gets it at the store.",
  "Checked off once and it is gone for everyone.",
  "Nothing has to be assigned. Whoever gets there first can just take it.",
]

const week = [
  { d: "MON", m: "Salmon · 25 min" },
  { d: "TUE", m: "Chicken bowls" },
  { d: "WED · TONIGHT", m: "Pasta + broccoli", today: true },
  { d: "THU", m: "Carry-over: salmon" },
  { d: "FRI", m: "Pizza night" },
]

const mealNotes = [
  "Three AI plans a month are free. Pro removes the limit",
  "A week you can drag into shape",
  "Recipes fill the grocery list for you",
  "Last week’s hits carry over",
  "It speaks up when it is chicken four nights running",
]

const ICON_VARIANTS = [
  { name: "Dawn", src: "/assets/brand/Near-Icon-Orbital-Dawn-1024.png" },
  { name: "Day", src: "/assets/brand/Near-Icon-Orbital-Day-1024.png" },
  { name: "Dusk", src: "/assets/brand/Near-Icon-Orbital-Dusk-1024.png" },
  { name: "Night", src: "/assets/brand/Near-Icon-Orbital-Night-1024.png" },
] as const

/* The arrival this page's own example produces. The capture section hears
   "Grab dog food and drop the rug off"; two sentences later the reader
   arrives at Petco and the dog food is waiting. One example, start to
   finish - it used to say dog food and then show diapers. */
const arrivalScene: Scene = {
  id: "features-arrival",
  sky: "day",
  clock: "5:12",
  day: "Tuesday, March 17",
  title: "You\u2019re at Petco",
  sub: "1 of the two things you said",
  items: ["Dog food"],
}

const surfaces = [
  { name: "iPhone", glyph: "phone" as const, note: "The Lock Screen, the widget, the app." },
  { name: "Apple Watch", glyph: "watch" as const, note: "A glance at the wrist when your hands are full." },
  { name: "Siri", glyph: "voice" as const, note: "Add it out loud, driving, mid-sentence." },
]

function SurfaceGlyph({ kind }: { kind: "phone" | "watch" | "voice" }) {
  if (kind === "phone") {
    return (
      <span className="ftGlyph" aria-hidden="true">
        <svg viewBox="0 0 40 56" fill="none">
          <rect x="1" y="1" width="38" height="54" rx="8" stroke="currentColor" strokeWidth="1.4" />
          <rect x="14" y="4" width="12" height="2.4" rx="1.2" fill="currentColor" opacity="0.45" />
          <rect x="6" y="26" width="28" height="12" rx="4" fill="currentColor" opacity="0.16" />
          <circle cx="11" cy="32" r="2.4" fill="currentColor" opacity="0.5" />
          <rect x="16" y="29" width="14" height="2" rx="1" fill="currentColor" opacity="0.45" />
          <rect x="16" y="33" width="9" height="2" rx="1" fill="currentColor" opacity="0.3" />
        </svg>
      </span>
    )
  }
  if (kind === "watch") {
    return (
      <span className="ftGlyph" aria-hidden="true">
        <svg viewBox="0 0 40 56" fill="none">
          <path d="M13 10V5.5A2.5 2.5 0 0 1 15.5 3h9A2.5 2.5 0 0 1 27 5.5V10M13 46v4.5A2.5 2.5 0 0 0 15.5 53h9a2.5 2.5 0 0 0 2.5-2.5V46" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="8" y="10" width="24" height="36" rx="8" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="20" cy="28" r="6" fill="currentColor" opacity="0.16" />
          <circle cx="20" cy="28" r="2" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
    )
  }
  return (
    <span className="ftGlyph" aria-hidden="true">
      <svg viewBox="0 0 40 56" fill="none">
        <rect x="15" y="12" width="10" height="19" rx="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 27a11 11 0 0 0 22 0M20 38v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 24v6M35 24v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      </svg>
    </span>
  )
}

export default function FeaturesPage() {
  useReveal()

  return (
    <main className="page">
      <TopNav />

      {/* ── Opening ───────────────────────────────────────────── */}

      <section className="chapter ftOpen" id="top">
        <div className="reveal shell">
          <p className="eyebrow">Everything Near does</p>
          <h1 className="ftOpenTitle">
            Less to remember.
            <br />
            <em>More taken care of.</em>
          </h1>
          <p className="lead">
            Capture what you need, connect it to a place, and share it with your
            household. Near brings up your reminders when you arrive.
          </p>
        </div>
      </section>

      {/* ── Capture ───────────────────────────────────────────── */}

      <section className="chapter chapterTight" id="capture">
        <div className="reveal shell split">
          <div className="splitCopy">
          <p className="eyebrow">When it occurs to you</p>
          <h2 className="h2">Catch the thought before it goes.</h2>
          <dl className="ftRows">
            {captureRows.map((r) => (
              <div className="ftRow" key={r.k} data-stagger>
                <dt className="ftRowK">{r.k}</dt>
                <dd className="ftRowV">{r.v}</dd>
              </div>
            ))}
          </dl>
          </div>
          <div className="splitVisual ftVisual">
            <VoiceWave quote="Grab dog food and drop the rug off." />
          </div>
        </div>
      </section>

      {/* ── Arrival ───────────────────────────────────────────── */}

      <section className="chapter chapterSunk" id="arrival">
        <div className="reveal shell split splitReverse">
          <div className="splitVisual ftVisual">
            <ArrivalPhone scene={arrivalScene} live />
          </div>
          <div className="splitCopy">
          <p className="eyebrow">When you get there</p>
          <h2 className="h2">
            Your list
            <br />
            <em>meets you there.</em>
          </h2>
          <dl className="ftRows">
            {arrivalRows.map((r) => (
              <div className="ftRow" key={r.k} data-stagger>
                <dt className="ftRowK">{r.k}</dt>
                <dd className="ftRowV">{r.v}</dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </section>

      {/* ── Household ─────────────────────────────────────────── */}

      <section className="chapter chapterNight" id="household">
        <div className="skyWash skyWashWarm" aria-hidden="true" />
        <div className="reveal shell split">
          <div className="splitCopy">
          <p className="eyebrow">For households</p>
          <h2 className="h2">
            Everyone has
            <br />
            <em>the list.</em>
          </h2>
          <p className="lead">
            Add items, see updates, and check things off together. Start solo
            and share it with the people you live with whenever you are ready.
            Sharing is free.
          </p>
          <ul className="ftList">
            {householdRows.map((t) => (
              <li className="ftListItem" key={t} data-stagger>
                <span className="ftBullet" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          </div>
          <div className="splitVisual ftVisual">
            <HouseholdPair
              items={["Dog food", "Rug to the cleaners", "Milk", "Bread", "Olive oil"]}
              listTitle="House list"
              sharedWith="Shared with your house"
              arrivalTitle="You’re at the store"
              arrivalSub="3 things on the house list"
              ownerLabel="Your iPhone"
              peerLabel="Anyone in the house"
            />
          </div>
        </div>
      </section>

      {/* ── Meal Plan ─────────────────────────────────────────── */}

      <section className="chapter chapterSunk" id="meal-plan">
        <div className="shell ftSplit">
        <div className="reveal ftSplitCopy">
          <p className="eyebrow">
            Meal Plan<span className="ftPlan">{planPill("meal-plan-unlimited")}</span>
          </p>
          <h2 className="h2">
            Dinner comes with
            <br />
            <em>enough questions.</em>
          </h2>
          <p className="lead">
            Plan the week from what your household actually cooks. The
            ingredients become a grocery list, and that list is waiting for
            whoever reaches the store first.
          </p>
          <ul className="ftList">
            {mealNotes.map((t) => (
              <li className="ftListItem" key={t} data-stagger>
                <span className="ftBullet" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal ftSplitMock" aria-hidden="true">
          <div className="ftWeek">
            {week.map((d) => (
              <div className={`ftDay ${d.today ? "ftDayNow" : ""}`} key={d.d}>
                <span className="ftDayLabel">{d.d}</span>
                <span className="ftDayMeal">{d.m}</span>
              </div>
            ))}
          </div>
          <p className="ftWeekFoot">
            <span className="ftWeekDot" />
            9 ingredients added to the grocery list
          </p>
        </div>
        </div>
      </section>

      {/* ── Surfaces ──────────────────────────────────────────── */}

      <section className="chapter chapterTight" id="surfaces">
        <div className="reveal shell">
          <p className="eyebrow">Where it reaches you</p>
          <h2 className="h2">A little help, close at hand.</h2>
          <div className="ftSurfaces">
            {surfaces.map((s) => (
              <div className="ftSurface" key={s.name} data-stagger>
                <SurfaceGlyph kind={s.glyph} />
                <h3 className="ftSurfaceName">{s.name}</h3>
                <p className="ftSurfaceNote">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiet ─────────────────────────────────────────────── */}

      <section className="chapter chapterSunk" id="privacy">
        <div className="reveal shell narrow center">
          <p className="eyebrow">Quiet by design</p>
          <h2 className="h2 h2Center">
            Your location has one job.
            <br />
            Reminding you.
          </h2>
          <p className="lead leadCenter">
            Your live route never leaves your iPhone. What syncs is what makes a
            reminder work: your places, your tasks, and the arrivals that fire
            them. Near sells none of it, and never uses it for ads.
          </p>
          <div className="pillRow">
            <span className="pill" data-stagger>No ads</span>
            <span className="pill" data-stagger>No data brokers</span>
            <span className="pill" data-stagger>Delete it all, anytime</span>
          </div>
          <p className="ftFootNote">
            The full detail is in the <Link href="/privacy" className="ftLink">privacy policy</Link>,
            and what&rsquo;s free versus paid is on <Link href="/pricing" className="ftLink">pricing</Link>.
          </p>
        </div>
      </section>

      {/* ── The mark ──────────────────────────────────────────── */}

      <section className="chapter chapterTight" id="the-mark">
        <div className="reveal shell narrow center">
          <p className="eyebrow">The mark</p>
          <h2 className="h2 h2Center">
            One icon.
            <br />
            Four times of day.
          </h2>
          <p className="lead leadCenter">
            Near&rsquo;s icon moves through dawn, day, dusk and night, because
            the day does. The target at the center never moves.
          </p>
          <div className="ftIcons">
            {ICON_VARIANTS.map((v) => (
              <figure className="ftIcon" key={v.name} data-stagger>
                <Image
                  src={v.src}
                  alt={`The Near app icon, ${v.name.toLowerCase()} variant`}
                  width={1024}
                  height={1024}
                  quality={100}
                />
                <figcaption>{v.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </main>
  )
}

