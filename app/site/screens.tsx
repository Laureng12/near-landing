"use client"

/* ── Screens ───────────────────────────────────────────────────────
   One kit for every phone on the site, so the product looks like one
   product. Everything inside a Device is sized in em, and the device sets
   1em = 1/26 of its screen width (container query), so a screen drawn
   for the hero reads exactly the same inside a 200px household phone.

   Proportions follow iOS: a 390pt screen is 26em, so 17pt body text is
   ~1.13em and the Lock Screen clock is ~6.4em.

   The world is Boopsie's: a sky wallpaper with Boop's bubble floating in
   it, magenta pins, lime check-offs, ink Live Activities. */

import Image from "next/image"
import type { ReactNode } from "react"

import { BoopFace } from "./chrome"

const ICON = "/assets/brand/boop/boop-app-icon-256-v3.png"

/* ── People ─────────────────────────────────────────────────────── */

export type Who = "reese" | "brian" | "jordan" | "mom"
const PEOPLE: Record<Who, { name: string; initial: string }> = {
  reese: { name: "Reese", initial: "R" },
  brian: { name: "Brian", initial: "B" },
  jordan: { name: "Jordan", initial: "J" },
  mom: { name: "Mom", initial: "M" },
}

export function Avatar({ who, size = "md" }: { who: Who; size?: "sm" | "md" }) {
  return (
    <span className={`scrAvatar scrAvatar--${who} scrAvatar--${size}`} aria-hidden="true">
      {PEOPLE[who].initial}
    </span>
  )
}

/* ── Device ─────────────────────────────────────────────────────── */

export function Device({
  children,
  className = "",
  tone = "light",
  island,
}: {
  children: ReactNode
  className?: string
  /* Which way the status bar reads: light text on wallpaper, ink on an app. */
  tone?: "light" | "dark"
  island?: ReactNode
}) {
  return (
    <div className={`scrDevice ${className}`}>
      <div className="scrFrame">
        <div className={`scrScreen scrTone--${tone}`}>
          {children}
          <span className={`scrIsland ${island ? "scrIslandOpen" : ""}`} aria-hidden="true">
            {island}
          </span>
          <span className="scrHomeBar" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

export function StatusBar({ time }: { time: string }) {
  return (
    <div className="scrStatus" aria-hidden="true">
      <span className="scrStatusTime">{time}</span>
      <span className="scrStatusIcons">
        <svg viewBox="0 0 18 12" className="scrSignal">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 16 12" className="scrWifi">
          <path d="M1.2 4.4a9.8 9.8 0 0 1 13.6 0M3.6 7a6.4 6.4 0 0 1 8.8 0M6 9.6a3 3 0 0 1 4 0" />
        </svg>
        <span className="scrBatt"><i /></span>
      </span>
    </div>
  )
}

/* The island opens on an arrival: Boop on the left, the place on the right. */
export function ArrivalIsland({ place }: { place: string }) {
  return (
    <>
      <span className="scrIslandFace">
        <BoopFace mood="cool" still />
      </span>
      <span className="scrIslandText">
        <b>Boop!</b> {place}
      </span>
    </>
  )
}

/* ── Lock Screen ────────────────────────────────────────────────── */

export function Wallpaper() {
  return (
    <span className="scrWall" aria-hidden="true">
      <span className="scrWallBubble" />
      <span className="scrWallBubble scrWallBubbleSm" />
    </span>
  )
}

export function LockScreen({
  date,
  time,
  widget,
  children,
}: {
  date: string
  time: string
  /* One line for the Lock Screen widget under the clock. */
  widget?: { count: number; line: string }
  children?: ReactNode
}) {
  return (
    <div className="scrLock">
      <Wallpaper />
      <StatusBar time={time} />
      <div className="scrLockHead">
        <div className="scrLockDate">{date}</div>
        <div className="scrLockTime">{time}</div>
        {widget && (
          <div className="scrWidget">
            <span className="scrWidgetRing">
              <b>{widget.count}</b>
            </span>
            <span className="scrWidgetLine">{widget.line}</span>
          </div>
        )}
      </div>
      <div className="scrLockStack">{children}</div>
      <div className="scrLockKeys" aria-hidden="true">
        <span>
          <svg viewBox="0 0 24 24"><path d="M8 2.5h8V5l-2 3.5V20a2 2 0 0 1-4 0V8.5L8 5V2.5Zm4 8.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg>
        </span>
        <span>
          <svg viewBox="0 0 24 24"><path d="M4 8a2 2 0 0 1 2-2h2l1.5-2h5L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>
        </span>
      </div>
    </div>
  )
}

/* A standard iOS notification, in Lock Screen glass. */
export function Notification({
  title,
  body,
  when = "now",
  className = "",
}: {
  title: string
  body: string
  when?: string
  className?: string
}) {
  return (
    <div className={`scrNotif ${className}`}>
      <Image className="scrNotifIcon" src={ICON} alt="" width={64} height={64} />
      <div className="scrNotifText">
        <div className="scrNotifTop">
          <span className="scrNotifTitle">{title}</span>
          <span className="scrNotifWhen">{when}</span>
        </div>
        <div className="scrNotifBody">{body}</div>
      </div>
    </div>
  )
}

export type Item = { name: string; by?: Who; done?: boolean }

/* The arrival, as a Live Activity: the store, what is waiting, who added
   it. This is the product's whole promise in one card. */
export function LiveActivity({
  place,
  distance = "You’re here",
  items,
  footer,
  className = "",
}: {
  place: string
  distance?: string
  items: Item[]
  footer?: string
  className?: string
}) {
  const left = items.filter((i) => !i.done).length
  return (
    <div className={`scrLive ${className}`}>
      <div className="scrLiveTop">
        <Image className="scrLiveIcon" src={ICON} alt="" width={64} height={64} />
        <div className="scrLivePlace">
          <span className="scrLiveName">{place}</span>
          <span className="scrLiveMeta">
            {left} {left === 1 ? "thing" : "things"} waiting
          </span>
        </div>
        <span className="scrLiveHere">{distance}</span>
      </div>
      <ul className="scrLiveItems">
        {items.map((it) => (
          <li key={it.name} className={it.done ? "scrDone" : ""}>
            <span className="scrCheck" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="m4 8.3 2.7 2.7L12 5.6" /></svg>
            </span>
            <span className="scrLiveItem">{it.name}</span>
            {it.by && <Avatar who={it.by} size="sm" />}
          </li>
        ))}
      </ul>
      {footer && <div className="scrLiveFoot">{footer}</div>}
    </div>
  )
}

/* ── App ────────────────────────────────────────────────────────── */

type Tab = "home" | "places" | "lists" | "house"

export function TabBar({ active }: { active: Tab }) {
  const tabs: { id: Tab; label: string; d: string }[] = [
    { id: "home", label: "Today", d: "M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8Z" },
    { id: "places", label: "Places", d: "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.4a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" },
    { id: "lists", label: "Lists", d: "M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" },
    { id: "house", label: "Household", d: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20a6 6 0 0 1 12 0M12 20a6 6 0 0 1 10 0" },
  ]
  return (
    <nav className="scrTabs" aria-hidden="true">
      {tabs.map((t) => (
        <span key={t.id} className={t.id === active ? "scrTabOn" : ""}>
          <svg viewBox="0 0 24 24"><path d={t.d} /></svg>
          {t.label}
        </span>
      ))}
    </nav>
  )
}

/* A neighbourhood, drawn: sky land, white streets, a river, a lime park.
   Pins are magenta with the count waiting there; the visitor is pop blue. */
export type Pin = { x: number; y: number; label: string; count?: number; active?: boolean }

export function MapView({
  pins,
  you,
  className = "",
  route = false,
}: {
  pins: Pin[]
  you?: { x: number; y: number }
  className?: string
  route?: boolean
}) {
  return (
    <div className={`scrMap ${className}`} aria-hidden="true">
      <svg viewBox="0 0 260 300" preserveAspectRatio="xMidYMid slice">
        <rect width="260" height="300" fill="#EDF6FF" />
        <path d="M-10 214 C 50 196, 90 236, 150 222 S 240 190, 280 204 L 280 242 C 230 232, 190 262, 140 258 S 40 238, -10 250 Z" fill="#BFE3FF" />
        <rect x="150" y="34" width="78" height="58" rx="10" fill="#E4FF97" opacity="0.75" />
        <circle cx="176" cy="58" r="6" fill="#CDEB79" />
        <circle cx="196" cy="70" r="8" fill="#CDEB79" />
        <g fill="#E1EDFA">
          <rect x="16" y="20" width="56" height="44" rx="6" />
          <rect x="86" y="20" width="50" height="44" rx="6" />
          <rect x="16" y="82" width="56" height="62" rx="6" />
          <rect x="86" y="82" width="50" height="28" rx="6" />
          <rect x="150" y="108" width="78" height="40" rx="6" />
          <rect x="16" y="160" width="120" height="34" rx="6" />
          <rect x="150" y="160" width="40" height="28" rx="6" />
          <rect x="200" y="160" width="44" height="28" rx="6" />
          <rect x="16" y="266" width="90" height="30" rx="6" />
          <rect x="150" y="268" width="96" height="30" rx="6" />
        </g>
        <g stroke="#FFFFFF" strokeLinecap="round" fill="none">
          <path d="M-10 74 H 280" strokeWidth="9" />
          <path d="M-10 152 H 280" strokeWidth="11" />
          <path d="M79 -10 V 210" strokeWidth="8" />
          <path d="M143 -10 V 310" strokeWidth="11" />
          <path d="M-10 200 C 60 190, 110 205, 143 200" strokeWidth="6" />
          <path d="M143 258 C 180 262, 220 254, 280 262" strokeWidth="7" />
          <path d="M-10 100 H 79" strokeWidth="5" />
          <path d="M236 -10 V 152" strokeWidth="6" />
        </g>
        {route && you && pins[0] && (
          <path
            className="scrRoute"
            d={`M${you.x} ${you.y} C ${you.x} ${(you.y + pins[0].y) / 2}, ${pins[0].x} ${(you.y + pins[0].y) / 2 + 20}, ${pins[0].x} ${pins[0].y + 4}`}
            stroke="#2F6BFF"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeDasharray="0.1 7"
            fill="none"
          />
        )}
      </svg>
      {pins.map((p) => (
        <span
          key={p.label}
          className={`scrPin ${p.active ? "scrPinOn" : ""}`}
          style={{ left: `${(p.x / 260) * 100}%`, top: `${(p.y / 300) * 100}%` }}
        >
          <span className="scrPinHead"><b>{p.count ?? ""}</b></span>
          <span className="scrPinLabel">{p.label}</span>
        </span>
      ))}
      {you && (
        <span className="scrYou" style={{ left: `${(you.x / 260) * 100}%`, top: `${(you.y / 300) * 100}%` }} />
      )}
    </div>
  )
}

/* ── Composed screens ───────────────────────────────────────────── */

/* Capture: say it, and Boop pulls the thing and the place out of it. */
export function CaptureScreen({ listening = true }: { listening?: boolean }) {
  return (
    <div className="scrApp scrCapture">
      <StatusBar time="9:41" />
      <div className="scrAppHead">
        <div>
          <div className="scrAppKicker">Thursday</div>
          <div className="scrAppTitle">Today</div>
        </div>
        <Avatar who="reese" />
      </div>
      <div className="scrCaptureDim">
        <div className="scrRowCard"><span className="scrRowEmoji">🏠</span>Home<i>2</i></div>
        <div className="scrRowCard"><span className="scrRowEmoji">🎯</span>Target<i>1</i></div>
        <div className="scrRowCard"><span className="scrRowEmoji">💊</span>CVS<i>1</i></div>
      </div>
      <div className="scrSheet">
        <span className="scrGrabber" />
        <div className={`scrOrb ${listening ? "scrOrbOn" : ""}`}>
          <BoopFace mood="onit" still />
        </div>
        <p className="scrHeard">
          <span className="scrChipThing">Milk</span> at <span className="scrChipPlace">Harris Teeter</span>
        </p>
        <div className="scrWave">
          {[30, 58, 86, 52, 100, 70, 40, 78, 36, 60, 44].map((h, i) => (
            <i key={i} style={{ height: h + "%", animationDelay: i * 70 + "ms" }} />
          ))}
        </div>
        <div className="scrParse">
          <span><b>Milk</b> · item</span>
          <span><b>Harris Teeter</b> · place</span>
        </div>
      </div>
      <TabBar active="home" />
    </div>
  )
}

/* Placed: the pin drops on the store, with a way to change it. */
export function PlacedScreen() {
  return (
    <div className="scrApp scrPlaced">
      <MapView
        className="scrMapFull"
        you={{ x: 66, y: 168 }}
        route
        pins={[
          { x: 184, y: 128, label: "Harris Teeter", count: 1, active: true },
          { x: 62, y: 96, label: "Target", count: 1 },
          { x: 222, y: 186, label: "Home", count: 2 },
        ]}
      />
      <StatusBar time="9:41" />
      <div className="scrMapSearch">
        <svg viewBox="0 0 24 24"><path d="m20 20-4.2-4.2M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" /></svg>
        Search places
      </div>
      <div className="scrPlacedCard">
        <div className="scrSaved">
          <span className="scrCheck scrCheckOn" aria-hidden="true">
            <svg viewBox="0 0 16 16"><path d="m4 8.3 2.7 2.7L12 5.6" /></svg>
          </span>
          Saved to Harris Teeter
        </div>
        <div className="scrPlacedRow">
          <span className="scrPlacedPin" />
          <span className="scrPlacedName">
            Harris Teeter
            <i>0.8 mi · Mt. Pleasant</i>
          </span>
          <span className="scrChange">Change</span>
        </div>
        <div className="scrPlacedItems">
          <span className="scrTag">Milk</span>
          <span className="scrPlacedNote">Boop will remind you when you get there.</span>
        </div>
      </div>
      <TabBar active="places" />
    </div>
  )
}

/* The household list, live: who added what, and what is already done. */
export function ListScreen({
  title,
  items,
  members,
}: {
  title: string
  items: Item[]
  members: Who[]
}) {
  const done = items.filter((i) => i.done).length
  return (
    <div className="scrApp scrList">
      <StatusBar time="9:41" />
      <div className="scrAppHead">
        <div>
          <div className="scrAppKicker">Shared list</div>
          <div className="scrAppTitle">{title}</div>
        </div>
        <span className="scrStack">
          {members.map((m) => (
            <Avatar key={m} who={m} />
          ))}
        </span>
      </div>
      <div className="scrProgress">
        <span style={{ width: `${(done / items.length) * 100}%` }} />
      </div>
      <div className="scrProgressText">
        {done} of {items.length} done
      </div>
      <ul className="scrListItems">
        {items.map((it, i) => (
          <li key={it.name} className={`scrListItem ${it.done ? "scrDone" : ""}`} style={{ ["--i" as string]: i }}>
            <span className="scrCheck" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="m4 8.3 2.7 2.7L12 5.6" /></svg>
            </span>
            <span className="scrListName">
              {it.name}
              {it.done && it.by && <i>{PEOPLE[it.by].name} got it</i>}
            </span>
            {it.by && !it.done && <Avatar who={it.by} size="sm" />}
          </li>
        ))}
      </ul>
      <TabBar active="lists" />
    </div>
  )
}
