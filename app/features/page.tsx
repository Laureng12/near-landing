"use client"

/* Everything Near does, in one place.
   The homepage makes one promise. This page is where the rest of the product
   lives - capture, arrival, the household, Meal Plan, the mark - without
   restating the promise six more times. It runs on the shared chrome and the
   shared token system, so it is the same site, not a second one. */

import Image from "next/image"
import Link from "next/link"

import { planPill } from "../site/features"
import {
  ArrivalPhone,
  FinalCTA,
  HouseholdThread,
  SiteFooter,
  SiteStyles,
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
    v: "It reads the thing and finds the place. You never file anything.",
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

/* The arrival the section is describing, so the page shows it instead of
   only claiming it. */
const arrivalScene: Scene = {
  id: "features-arrival",
  sky: "day",
  clock: "5:12",
  day: "Tuesday, March 17",
  title: "You\u2019re at Target",
  sub: "2 things you needed",
  items: ["Diapers", "Paper towels"],
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
            Nothing here asks you
            <br />
            <em>to organize anything.</em>
          </h1>
          <p className="lead">
            Near does one thing. It remembers what you need and hands it to you
            at the place you need it. Everything below is that same thing,
            somewhere else in your day.
          </p>
        </div>
      </section>

      {/* ── Capture ───────────────────────────────────────────── */}

      <section className="chapter chapterTight" id="capture">
        <div className="reveal shell split">
          <div className="splitCopy">
          <p className="eyebrow">When it occurs to you</p>
          <h2 className="h2">Two seconds, then you forget it on purpose.</h2>
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
            You never open Near.
            <br />
            <em>Near opens for you.</em>
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
            Nobody has to be
            <br />
            the one who remembers.
          </h2>
          <p className="lead">
            Start solo. Share it with the people you live with when the house
            needs one memory instead of four. Sharing is free.
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
            <HouseholdThread
              items={["Dog food", "Rug to the cleaners", "Milk", "Bread", "Olive oil"]}
              sharedWith="Shared with your house"
              arrivalTitle="Someone is at the store"
              arrivalSub="Your shared list is ready"
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
            Decide it on Sunday.
            <br />
            Shop without thinking.
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
          <h2 className="h2">No new place to check.</h2>
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
            Near uses location to deliver your reminders - not to sell ads,
            build a profile, or follow your day.
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
      <SiteStyles />
      <FeatureStyles />
    </main>
  )
}

/* ── Page-local styles ───────────────────────────────────────────
   Only what the shared sheet does not already give us. Everything
   here leans on the same tokens. */

function FeatureStyles() {
  return (
    <style jsx global>{`
      .ftOpen { padding-top: clamp(140px, 18vh, 220px); }

      .ftOpen .lead { max-width: 34rem; }

      /* The page shows the moments it describes now, so the split columns
         need to breathe and the visuals need to scale down with them. */
      .ftVisual { align-items: center; }

      /* The household section sits on night ground now, so its list has to
         read against it. */
      #household .ftListItem { color: var(--on-night-soft); }
      #household .ftBullet { background: var(--gold); }

      /* Beside a phone there is no room for a 16rem key column, so the rows
         stack instead of sitting side by side. */
      #capture .ftRow,
      #arrival .ftRow {
        grid-template-columns: minmax(0, 1fr);
        gap: 6px;
        padding: clamp(18px, 2.4vw, 24px) 0;
      }
      #capture .ftRowK,
      #arrival .ftRowK { font-size: clamp(17px, 1.5vw, 19px); }
      #capture .ftRowV,
      #arrival .ftRowV { font-size: clamp(15px, 1.3vw, 17px); max-width: 34rem; }

      /* The copy column carries the rows, so it needs the width. */
      #capture .split,
      #arrival .split { grid-template-columns: 1.12fr 0.88fr; align-items: center; }
      .ftVisual .arrShell { transform: scale(0.92); transform-origin: 50% 50%; }
      .ftVisual .vizVoice { width: 100%; max-width: 340px; }
      .ftVisual .vizQuote { font-size: 1.05rem; }
      #capture .ftRows, #arrival .ftRows { margin-top: clamp(1.6rem, 3vw, 2.2rem); }

      /* Device glyphs on the surfaces cards. */
      .ftGlyph {
        display: block;
        width: 34px;
        height: 48px;
        margin-bottom: 18px;
        color: var(--gold);
        opacity: 0;
        transform: translate3d(0, 8px, 0);
        transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
      }
      .ftGlyph svg { width: 100%; height: 100%; display: block; }
      .reveal.revealed .ftGlyph { opacity: 1; transform: none; }

      @media (max-width: 900px) {
        .ftVisual { margin-top: clamp(2rem, 6vw, 3rem); }
        .ftVisual .arrShell { transform: scale(0.84); }
      }

      /* Says which plan a capability belongs to, so /features and /pricing
         cannot tell a visitor two different stories. */
      .ftPlan {
        display: inline-block;
        margin-left: 10px;
        padding: 3px 9px;
        border-radius: 999px;
        background: rgba(196, 148, 47, 0.14);
        color: var(--gold);
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        vertical-align: middle;
      }

      .ftOpenTitle {
        font-size: clamp(52px, 8.4vw, 108px);
        line-height: 0.98;
        letter-spacing: -0.045em;
        font-weight: 500;
        color: var(--ink);
      }
      .ftOpenTitle em {
        font-family: var(--font-serif);
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.022em;
        color: var(--accent);
      }

      /* ── Definition rows ─────────────────────────────────── */

      .ftRows { margin-top: clamp(40px, 6vw, 68px); }

      .ftRow {
        display: grid;
        grid-template-columns: minmax(0, 16rem) minmax(0, 1fr);
        gap: 12px clamp(24px, 5vw, 64px);
        padding: clamp(22px, 3vw, 32px) 0;
        border-top: 1px solid var(--ink-hair-soft);
      }
      .ftRow:last-child { border-bottom: 1px solid var(--ink-hair-soft); }

      .ftRowK {
        font-size: clamp(19px, 2vw, 24px);
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--ink);
      }
      .ftRowV {
        font-size: clamp(17px, 1.7vw, 20px);
        line-height: 1.55;
        color: var(--ink-soft);
        max-width: 44rem;
      }

      /* ── Plain lists ─────────────────────────────────────── */

      .ftList { margin-top: 34px; list-style: none; padding: 0; }
      .ftListItem {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 14px 0;
        font-size: clamp(17px, 1.7vw, 20px);
        line-height: 1.5;
        color: var(--ink-soft);
      }
      .ftBullet {
        margin-top: 0.62em;
        flex: 0 0 7px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--gold);
      }

      /* ── Split (Meal Plan) ───────────────────────────────── */

      .ftSplit {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
        gap: clamp(40px, 6vw, 88px);
        align-items: center;
      }
      .ftSplitCopy { min-width: 0; }
      .ftSplitMock { min-width: 0; }

      .ftWeek {
        border-radius: 22px;
        overflow: hidden;
        background: var(--paper);
        border: 1px solid var(--ink-hair-soft);
        box-shadow: 0 28px 70px rgba(20, 24, 58, 0.10);
      }
      .ftDay {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 18px;
        padding: 20px 24px;
      }
      .ftDay + .ftDay { border-top: 1px solid var(--ink-hair-soft); }
      .ftDayLabel {
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--ink-faint);
        white-space: nowrap;
      }
      .ftDayMeal {
        font-size: 17px;
        color: var(--ink-soft);
        text-align: right;
      }
      .ftDayNow {
        background: linear-gradient(
          100deg,
          rgba(196, 148, 47, 0.12),
          rgba(240, 130, 70, 0.07)
        );
      }
      .ftDayNow .ftDayLabel { color: var(--gold); }
      .ftDayNow .ftDayMeal { color: var(--ink); font-weight: 500; }

      .ftWeekFoot {
        margin-top: 18px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        color: var(--ink-faint);
      }
      .ftWeekDot {
        width: 8px; height: 8px; border-radius: 50%;
        background: var(--gold);
        box-shadow: 0 0 0 5px rgba(196, 148, 47, 0.14);
      }

      /* ── Surfaces ────────────────────────────────────────── */

      .ftSurfaces {
        margin-top: clamp(36px, 5vw, 56px);
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: clamp(20px, 3vw, 36px);
      }
      .ftSurface {
        padding: 30px 26px 28px;
        border-radius: 20px;
        background: var(--paper-raised, var(--paper));
        border: 1px solid var(--ink-hair-soft);
      }
      .ftSurfaceName {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--ink);
      }
      .ftSurfaceNote {
        margin-top: 8px;
        font-size: 16px;
        line-height: 1.5;
        color: var(--ink-soft);
      }

      /* ── Icon set ────────────────────────────────────────── */

      .ftIcons {
        margin-top: clamp(40px, 6vw, 64px);
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: clamp(18px, 3vw, 40px);
      }
      .ftIcon { margin: 0; text-align: center; }
      .ftIcon img {
        width: 100%;
        height: auto;
        border-radius: 24%;
        box-shadow: 0 22px 50px rgba(20, 24, 58, 0.16);
      }
      .ftIcon figcaption {
        margin-top: 16px;
        font-size: 13px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--ink-faint);
      }

      .ftFootNote {
        margin-top: 34px;
        font-size: 16px;
        color: var(--ink-faint);
      }
      .ftLink {
        color: var(--ink-soft);
        border-bottom: 1px solid var(--ink-hair-soft);
        padding-bottom: 1px;
      }
      .ftLink:hover { color: var(--accent); border-color: var(--accent); }

      /* ── Narrow ──────────────────────────────────────────── */

      @media (max-width: 900px) {
        .ftSplit { grid-template-columns: minmax(0, 1fr); }
        .ftSurfaces { grid-template-columns: minmax(0, 1fr); }
      }
      @media (max-width: 720px) {
        .ftRow { grid-template-columns: minmax(0, 1fr); gap: 6px; }
        .ftIcons { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
    `}</style>
  )
}
