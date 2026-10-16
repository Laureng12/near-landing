"use client"

/* Shared site chrome: the nav, the close, the footer, and the whole
   token-driven stylesheet. Lives here so /features (and anything after it)
   renders inside the same system as the homepage instead of forking it. */

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react"

import { APP_IS_LIVE, APP_STORE_URL, NOTIFY_EVENT, openNotify } from "./launch"

export { APP_STORE_URL }
export const BRAND_ICON = "/assets/brand/boop/boop-app-icon-256-v3.png"
export const BRAND_WORDMARK = "/assets/brand/boop/boopthere-wordmark-v3.png"

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed")
            e.target.querySelectorAll<HTMLElement>("[data-stagger]").forEach((child, i) => {
              child.style.transitionDelay = `${i * 90}ms`
            })
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* Fires once, when the element first crosses into view. The closing CTA and
   the homepage's own sequenced sections all hang off this. */
export function useInView<T extends HTMLElement>(threshold = 0.34) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

/* ── Download, or the honest version of it ─────────────── */

/* Every download button on the site goes through here, so the App Store is
   linked in exactly one place and the pre-launch state cannot drift out of
   sync across five files again. */
export function DownloadCta({
  className,
  children,
  source,
  ariaLabel,
}: {
  className: string
  children: React.ReactNode
  source: string
  ariaLabel?: string
}) {
  if (APP_IS_LIVE) {
    return (
      <a className={className} href={APP_STORE_URL} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => openNotify(source)}
      aria-label={ariaLabel}
    >
      Notify me at launch
    </button>
  )
}

/* Mounted once in the root layout, so it is present on every page whether or
   not that page uses the shared chrome. /pricing has its own nav, which is
   how four of its CTAs ended up dispatching to a listener that was not
   there. */
export function NotifyDialog() {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState("site")
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const onAsk = (e: Event) => {
      const detail = (e as CustomEvent<{ source?: string }>).detail
      setSource(detail?.source || "site")
      setState("idle")
      setMessage("")
      setOpen(true)
    }
    window.addEventListener(NOTIFY_EVENT, onAsk)
    return () => window.removeEventListener(NOTIFY_EVENT, onAsk)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    inputRef.current?.focus()
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (state === "sending") return
    setState("sending")
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()
      if (!res.ok) {
        setState("error")
        setMessage(data?.error || "Could not save that. Try again in a moment.")
        return
      }
      setState("done")
      setMessage(data?.already ? "You are already on the list." : "You are on the list.")
    } catch {
      setState("error")
      setMessage("Could not save that. Try again in a moment.")
    }
  }

  return (
    <>
      <div
        className={`notifyScrim ${open ? "notifyOpen" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`notifyCard ${open ? "notifyOpen" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Be first to know when BoopThere launches"
        inert={!open}
      >
        <button type="button" className="notifyClose" onClick={() => setOpen(false)} aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {state === "done" ? (
          <>
            <h2 className="notifyTitle">
              You&rsquo;re on the list.
            </h2>
            <p className="notifyLead">{message} We&rsquo;ll let you know when BoopThere is ready, and never for anything else.</p>
          </>
        ) : (
          <>
            <h2 className="notifyTitle">
              Be first to know.
            </h2>
            <p className="notifyLead">
              We&rsquo;ll email you when BoopThere is available for iPhone, and never
              for anything else.
            </p>
            <form className="notifyForm" onSubmit={submit}>
              <input
                ref={inputRef}
                className="notifyInput"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button className="notifySubmit" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending" : "Notify me at launch"}
              </button>
            </form>
            {state === "error" && <p className="notifyError">{message}</p>}
          </>
        )}
      </div>
    </>
  )
}

/* ── Nav ───────────────────────────────────────────────────────── */

export function TopNav({ home = false }: { home?: boolean }) {
  /* Anchors resolve against the homepage, so away from it they need the
     leading slash or they scroll to nothing. */
  const at = (hash: string) => (home ? hash : `/${hash}`)
  const [open, setOpen] = useState(false)
  const [lifted, setLifted] = useState(false)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className={`nav ${lifted ? "navLifted" : ""}`}>
      <div className="navInner">
        <Link className="brand" href={home ? "#top" : "/"} aria-label="BoopThere, home">
          <Image src={BRAND_WORDMARK} alt="BoopThere" className="brandLogo" width={1072} height={216} priority quality={100} />
        </Link>
        <nav className="navLinks" aria-label="Primary">
          <a className="navLink hideOnMobile" href={at("#how-it-works")}>How it works</a>
          <a className="navLink hideOnMobile" href={at("#household")}>For households</a>
          <Link className="navLink hideOnMobile" href="/features">Features</Link>
          <Link className="navLink hideOnMobile" href="/pricing">Pricing</Link>
          <DownloadCta className="navCta hideOnMobile" source="nav">Download</DownloadCta>
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`hamburgerBar ${open ? "hamburgerOpen" : ""}`} />
            <span className={`hamburgerBar ${open ? "hamburgerOpen" : ""}`} />
          </button>
        </nav>
      </div>

      <div className={`mobileMenuOverlay ${open ? "mobileMenuVisible" : ""}`} onClick={() => setOpen(false)} />
      <div className={`mobileMenu ${open ? "mobileMenuVisible" : ""}`} inert={!open}>
        <a className="mobileMenuLink" href={at("#how-it-works")} onClick={() => setOpen(false)}>How it works</a>
        <a className="mobileMenuLink" href={at("#household")} onClick={() => setOpen(false)}>For households</a>
        <Link className="mobileMenuLink" href="/features" onClick={() => setOpen(false)}>Features</Link>
        <Link className="mobileMenuLink" href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <DownloadCta className="mobileMenuCta" source="mobile-nav">Download BoopThere</DownloadCta>
      </div>
    </header>
  )
}

/* ── Close ─────────────────────────────────────────────────────── */


export type BoopMood =
  | "neutral" | "knowing" | "wry" | "glance" | "deadpan" | "oh" | "happy"
  | "laugh" | "content" | "bliss" | "sheepish" | "annoyed" | "onit" | "skeptic" | "flat" | "peek" | "joy" | "cheer"
  | "shades" | "boss" | "sideeye" | "wow" | "delight" | "cool" | "coolOh"

/* The bolder, rainbow-rim faces are framed wider so the chain fits; the
   stylesheet scales them up so every bubble reads the same size. */
const VIVID = new Set<BoopMood>(["shades", "boss", "sideeye", "wow", "delight", "cool", "coolOh"])
const IDLE_GLANCES: BoopMood[] = ["knowing", "glance", "wry", "knowing", "deadpan"]

/* Boop, alive: drawn faces stacked and swapped in place. `mood` overrides
   (hover, tap, a section's beat); otherwise he idles on a gentle smile and,
   every few seconds, glances: a knowing look, a sideways peek, a smirk, a
   deadpan. `faces` preloads any extra faces a caller will switch to; `still`
   renders one fixed face with no timer (small icons). Timers stay off under
   prefers-reduced-motion. */
export function BoopFace({
  mood,
  className = "",
  faces = [],
  still = false,
}: {
  mood?: BoopMood
  className?: string
  faces?: BoopMood[]
  still?: boolean
}) {
  const [idle, setIdle] = useState<BoopMood>("neutral")

  useEffect(() => {
    if (still || typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let alive = true
    let t: ReturnType<typeof setTimeout>
    let n = 0
    const loop = () => {
      t = setTimeout(() => {
        if (!alive) return
        setIdle(IDLE_GLANCES[n++ % IDLE_GLANCES.length])
        t = setTimeout(() => {
          if (!alive) return
          setIdle("neutral")
          loop()
        }, 1300)
      }, 4200 + Math.random() * 3200)
    }
    loop()
    return () => { alive = false; clearTimeout(t) }
  }, [still])

  const face = mood ?? idle
  const stack: BoopMood[] = still
    ? [mood ?? "neutral"]
    : Array.from(new Set<BoopMood>(["neutral", ...IDLE_GLANCES, ...faces, ...(mood ? [mood] : [])]))
  return (
    <span className={`boopFace ${className}`} aria-hidden="true">
      {stack.map((f) => (
        /* Plain <img>: small stacked frames that must swap instantly. */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={f}
          src={`/assets/brand/boop/boop2-${f}.webp`}
          alt=""
          width={320}
          height={320}
          data-face={f}
          className={`${VIVID.has(f) ? "vivid" : ""}${f === face ? " on" : ""}`}
          decoding="async"
        />
      ))}
    </span>
  )
}

export function FinalCTA() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4)
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setSettled(true), 2200)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <section className="finalCta" ref={ref}>
      <div className="finalSky" aria-hidden="true" />
      <div className="reveal finalInner">
        <div className="finalMascot" aria-hidden="true">
<BoopFace className="finalBoopImg" faces={["joy"]} mood={!inView ? "neutral" : settled ? undefined : "joy"} />
        </div>
        <div className={`finalArrival ${inView ? "finalArrivalIn" : ""}`} aria-hidden="true">
          <span className="finalArrivalRing" />
          <div className="finalArrivalCard">
            <span className="finalArrivalIcon">
              <Image src={BRAND_ICON} alt="" width={22} height={22} />
            </span>
            <div>
              <div className="finalArrivalLabel">BoopThere &middot; now</div>
              <div className="finalArrivalTitle">You&rsquo;re at Target</div>
            </div>
          </div>
        </div>

        <h2 className="finalTitle">
          Your brain has better things to do.
          <br />
          <em>Like literally anything.</em>
        </h2>
        <p className="finalSub">
          No forgotten milk. No second trip. No &ldquo;did you remember?&rdquo; texts.
        </p>
        <DownloadCta className="btnCream" source="closing">Download BoopThere</DownloadCta>
        {APP_IS_LIVE && (
          <a className="finalQr" href={APP_STORE_URL} aria-label="Scan to download BoopThere on the App Store">
            <Image src="/app-store-qr.png" alt="QR code linking to BoopThere on the App Store" width={72} height={72} />
            <span>Or scan to open it<br />on your iPhone</span>
          </a>
        )}
      </div>
    </section>
  )
}

/* ── Footer ────────────────────────────────────────────────────── */

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <Image src="/assets/brand/boop/boopthere-wordmark-cream-v3.png" alt="BoopThere" className="footerLogo" width={1072} height={216} />
          <p className="footerTag">Boop! There it is.</p>
        </div>
        <nav className="footerNav" aria-label="Footer">
          <div>
            <h3 className="footerHead">Product</h3>
            <Link href="/#how-it-works" className="footerLink">How it works</Link>
            <Link href="/#household" className="footerLink">For households</Link>
            <Link href="/features" className="footerLink">Everything BoopThere does</Link>
            <Link href="/pricing" className="footerLink">Pricing</Link>
          </div>
          <div>
            <h3 className="footerHead">Company</h3>
            <a href="mailto:hello@nearesttask.com" className="footerLink">Contact</a>
            <Link href="/support" className="footerLink">Support</Link>
          </div>
          <div>
            <h3 className="footerHead">Legal</h3>
            <Link href="/privacy" className="footerLink">Privacy</Link>
            <Link href="/terms" className="footerLink">Terms</Link>
          </div>
        </nav>
      </div>
      <div className="footerBase">
        <DownloadCta className="footerCta" source="footer">Download BoopThere</DownloadCta>
        <p className="footerCopy">&copy; 2026 BoopThere</p>
      </div>
    </footer>
  )
}

/* Anything sequenced on a timer has to land instantly instead. Read through
   useSyncExternalStore so the answer is known during render, not one frame
   late, and so the server always renders the motion-on markup. */
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)"

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_QUERY)
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false
  )
}

/* ── The arrival, as a phone ─────────────────────────── */

export type Scene = {
  id: string
  sky: "dawn" | "day" | "dusk" | "night"
  clock: string
  day: string
  title: string
  sub: string
  items: readonly string[]
}

/* One small phone, one arrival. Keyed on the scene id by its caller so the
   card remounts and performs the arrival again whenever the scene changes. */
export function ArrivalPhone({ scene, live }: { scene: Scene; live: boolean }) {
  return (
    <div className={`arrPhone arrPhone--${scene.sky} ${live ? "arrPhoneLive" : ""}`}>
      <div className="arrShell">
        <div className="arrScreen">
          <div className="arrSkyStack" aria-hidden="true">
            {["dawn", "day", "dusk", "night"].map((s) => (
              <span key={s} className={`arrSkyLayer arrSkyLayer--${s}`} />
            ))}
          </div>
          <div className="arrStatus" aria-hidden="true">
            <span>{scene.clock}</span>
            <span className="arrStatusRight">
              <span className="arrBars" />
              <span className="arrBatt" />
            </span>
          </div>

          <div className="arrClock">
            <div className="arrClockTime">{scene.clock}</div>
            <div className="arrClockDay">{scene.day}</div>
          </div>

          <div className="arrCard" key={scene.id}>
            <span className="arrRipple" aria-hidden="true" />
            <div className="arrCardHead">
              <span className="arrCardIcon">
                <Image src={BRAND_ICON} alt="" width={26} height={26} />
              </span>
              <div className="arrCardHeadText">
                <div className="arrCardLabel">NEAR &middot; now</div>
                <div className="arrCardTitle">{scene.title}</div>
                <div className="arrCardSub">{scene.sub}</div>
              </div>
            </div>
            <ul className="arrCardItems">
              {scene.items.map((item, i) => (
                <li key={item} style={{ animationDelay: `${0.42 + i * 0.13}s` }}>
                  <span className="arrCardDot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="arrCardSheen" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Spoken capture ────────────────────── */

const WAVE_BARS = [34, 58, 86, 52, 100, 70, 44, 78, 38, 62, 30]

export function VoiceWave({ quote }: { quote: string }) {
  return (
    <div className="vizVoice">
      <div className="vizVoiceRow">
        <span className="vizMic" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <span className="vizWave" aria-hidden="true">
          {WAVE_BARS.map((h, i) => (
            <i key={i} style={{ height: h + "%", animationDelay: i * 90 + "ms" }} />
          ))}
        </span>
      </div>
      <p className="vizQuote">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}


/* ── A real screen ─────────────────────────────────────────────────

   Everything else on this site is a hand-built mock, including the App Store
   screenshots. These are captures of the shipping app, taken from the iOS
   Simulator at 1206x2622 and served at 620 wide. See
   `claude/near-app-screens.md` for how to take more.

   The frame is drawn here; the screen is the file. Nothing about the UI
   inside is ours to restyle, which is the point. */

/* A screenshot that is a region of a screen rather than a whole one. Some
   real screens are mostly empty - a settings sheet with two rows on it - and
   inside a phone frame that emptiness reads as a page that failed to load.
   Cropped to its own content and given a plain frame, the same pixels read as
   what they are: a detail, lifted from the app. */
export function AppDetail({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}) {
  return (
    <figure className="appDetail">
      <div className="appDetailFrame">
        <Image
          className="appDetailImg"
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 88vw, 420px"
        />
      </div>
      {caption && <figcaption className="appShotCap">{caption}</figcaption>}
    </figure>
  )
}

export function AppShot({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="appShot">
      <div className="appShotDevice">
        <Image
          className="appShotImg"
          src={src}
          alt={alt}
          width={620}
          height={1348}
          sizes="(max-width: 1024px) 60vw, 300px"
        />
      </div>
      {caption && <figcaption className="appShotCap">{caption}</figcaption>}
    </figure>
  )
}

/* ── The household pair ──────────────────────────────────────── */

/* Two phones and the thread between them. The left one is yours: the shared
   list, already crossed off by someone else. The right one belongs to whoever
   you live with, standing in the store, being told what you needed. You see
   both ends of one event, which is the whole argument for sharing.

   Nobody is told where anybody is. Your phone shows the list getting done;
   their phone shows their own arrival. That is the product, and it is also
   the only version of this that agrees with the privacy claim.

   Both phones are complete in the first painted frame. The sequence is a
   replay that runs when the section returns to view, never the only way to
   see it. */
export function HouseholdPair({
  items,
  listTitle = "Shared grocery list",
  sharedWith,
  arrivalTitle,
  arrivalSub,
  crossCount = 3,
  ownerLabel = "Your iPhone",
  peerLabel,
}: {
  items: readonly string[]
  listTitle?: string
  sharedWith: string
  arrivalTitle: string
  arrivalSub: string
  crossCount?: number
  ownerLabel?: string
  peerLabel: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const armed = useRef(false)
  const [replaying, setReplaying] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
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
          t = window.setTimeout(() => setReplaying(true), 60) as unknown as ReturnType<typeof setTimeout>
        }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (t) clearTimeout(t)
    }
  }, [reduced])

  return (
    <div ref={ref} className={`pairVisual ${replaying ? "pairReplay" : ""}`}>
      <figure className="pairPhone">
        <div className="pairDevice">
          <span className="pairIsland" aria-hidden="true" />
          <div className="pairScreen pairScreenDay">
            <div className="pairStatus">
              <span>9:41</span>
              <span className="pairBatt" aria-hidden="true" />
            </div>
            <div className="pairListHead">
              <div className="pairListTitle">{listTitle}</div>
              <div className="pairListSub">{sharedWith}</div>
            </div>
            <ul className="pairItems">
              {items.map((item, i) => (
                <li
                  key={item}
                  className={`pairItem pairItem${i + 1} ${i < crossCount ? "pairItemDone" : ""}`}
                >
                  <span className="pairCheck" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="m4 8.3 2.7 2.7L12 5.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="pairItemText">
                    {item}
                    <i className="pairStrike" aria-hidden="true" />
                  </span>
                </li>
              ))}
            </ul>
            <span className="pairHomeBar" aria-hidden="true" />
          </div>
        </div>
        <figcaption className="pairCaption">{ownerLabel}</figcaption>
      </figure>

      <div className="pairThread" aria-hidden="true">
        <span className="pairThreadLine" />
        <span className="pairSpark" />
      </div>

      <figure className="pairPhone">
        <div className="pairDevice">
          <span className="pairIsland" aria-hidden="true" />
          <div className="pairScreen pairScreenNight">
            <div className="pairStatus pairStatusNight">
              <span>9:41</span>
              <span className="pairBatt" aria-hidden="true" />
            </div>
            <div className="pairLockClock">
              <div className="pairLockDate">Saturday, March 15</div>
              <div className="pairLockTime">9:41</div>
            </div>
            <div className="pairNotif">
              <div className="pairNotifIcon">
                <Image src={BRAND_ICON} alt="" width={26} height={26} />
              </div>
              <div className="pairNotifBody">
                <div className="pairNotifLabel">BoopThere &middot; now</div>
                <div className="pairNotifTitle">{arrivalTitle}</div>
                <div className="pairNotifSub">{arrivalSub}</div>
              </div>
            </div>
            <span className="pairHomeBar pairHomeBarNight" aria-hidden="true" />
          </div>
        </div>
        <figcaption className="pairCaption">{peerLabel}</figcaption>
      </figure>
    </div>
  )
}
