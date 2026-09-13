"use client"

/* Shared site chrome: the nav, the close, the footer, and the whole
   token-driven stylesheet. Lives here so /features (and anything after it)
   renders inside the same system as the homepage instead of forking it. */

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export const APP_STORE_URL = "https://apps.apple.com/app/id6759834610"
export const BRAND_ICON = "/assets/brand/Near-Icon-Orbital-Soft.png"
export const BRAND_WORDMARK = "/assets/brand/Near-Logo-Horizontal.png"

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
        <Link className="brand" href={home ? "#top" : "/"} aria-label="Near, home">
          <Image src={BRAND_WORDMARK} alt="Near" className="brandLogo" width={1185} height={500} priority quality={100} />
        </Link>
        <nav className="navLinks" aria-label="Primary">
          <a className="navLink hideOnMobile" href={at("#how-it-works")}>How it works</a>
          <a className="navLink hideOnMobile" href={at("#household")}>For households</a>
          <Link className="navLink hideOnMobile" href="/features">Features</Link>
          <Link className="navLink hideOnMobile" href="/pricing">Pricing</Link>
          <a className="navCta hideOnMobile" href={APP_STORE_URL}>Download</a>
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
      <div className={`mobileMenu ${open ? "mobileMenuVisible" : ""}`}>
        <a className="mobileMenuLink" href={at("#how-it-works")} onClick={() => setOpen(false)}>How it works</a>
        <a className="mobileMenuLink" href={at("#household")} onClick={() => setOpen(false)}>For households</a>
        <Link className="mobileMenuLink" href="/features" onClick={() => setOpen(false)}>Features</Link>
        <Link className="mobileMenuLink" href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <a className="mobileMenuCta" href={APP_STORE_URL}>Download Near</a>
      </div>
    </header>
  )
}

/* ── Close ─────────────────────────────────────────────────────── */

export function FinalCTA() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4)

  return (
    <section className="finalCta" ref={ref}>
      <div className="finalSky" aria-hidden="true" />
      <div className="reveal finalInner">
        <div className={`finalArrival ${inView ? "finalArrivalIn" : ""}`} aria-hidden="true">
          <span className="finalArrivalRing" />
          <div className="finalArrivalCard">
            <span className="finalArrivalIcon">
              <Image src={BRAND_ICON} alt="" width={22} height={22} />
            </span>
            <div>
              <div className="finalArrivalLabel">Near &middot; now</div>
              <div className="finalArrivalTitle">You&rsquo;re at Target</div>
            </div>
          </div>
        </div>

        <h2 className="finalTitle">
          Your brain has
          <br />
          <em>better things to do.</em>
        </h2>
        <p className="finalSub">
          Near remembers the small things - right where they matter.
        </p>
        <a className="btnCream" href={APP_STORE_URL}>Download Near</a>
        <a className="finalQr" href={APP_STORE_URL} aria-label="Scan to download Near on the App Store">
          <Image src="/app-store-qr.png" alt="QR code linking to Near on the App Store" width={72} height={72} />
          <span>Or scan to open it<br />on your iPhone</span>
        </a>
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
          <span className="footerWord">Near</span>
          <p className="footerTag">Memory for the places you go.</p>
        </div>
        <nav className="footerNav" aria-label="Footer">
          <div>
            <h3 className="footerHead">Product</h3>
            <Link href="/#how-it-works" className="footerLink">How it works</Link>
            <Link href="/#household" className="footerLink">For households</Link>
            <Link href="/features" className="footerLink">Everything Near does</Link>
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
        <a href={APP_STORE_URL} className="footerCta">Download Near</a>
        <p className="footerCopy">&copy; 2026 Near</p>
      </div>
    </footer>
  )
}

export function SiteStyles() {
  return (
    <style jsx global>{`

      /* ── Reset ─────────────────────────────────────────────── */

      * { box-sizing: border-box; }
      a { color: inherit; text-decoration: none; }

      .page {
        min-height: 100vh;
        background: var(--paper);
        color: var(--ink);
        overflow-x: clip;
      }

      /* ── Reveal ────────────────────────────────────────────── */

      @keyframes washDrift {
        from { transform: translate3d(0, 0, 0) scale(1); }
        to   { transform: translate3d(-2.5%, 2%, 0) scale(1.07); }
      }

      .reveal {
        opacity: 0;
        transform: translate3d(0, 30px, 0);
        transition: opacity 1s var(--ease), transform 1s var(--ease);
      }
      .reveal.revealed { opacity: 1; transform: none; }

      .reveal [data-stagger] {
        opacity: 0;
        transform: translate3d(0, 14px, 0);
        transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
      }
      .reveal.revealed [data-stagger] { opacity: 1; transform: none; }
      .reveal.revealed [data-stagger] .placeGlyph { transition-delay: inherit; }

      /* ── Type ──────────────────────────────────────────────── */

      .eyebrow {
        margin: 0 0 20px;
        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.19em;
        text-transform: uppercase;
        color: var(--gold);
      }

      .h2 {
        margin: 0;
        font-size: clamp(2.05rem, 4.6vw, 3.45rem);
        font-weight: 500;
        line-height: 1.06;
        letter-spacing: -0.028em;
        color: var(--ink);
        text-wrap: balance;
      }
      .h2 em,
      .heroTitle em,
      .finalTitle em {
        font-family: var(--font-serif);
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.01em;
      }
      .h2Center { text-align: center; }

      .lead {
        margin: 26px 0 0;
        max-width: 46ch;
        font-size: clamp(1.02rem, 1.35vw, 1.17rem);
        line-height: 1.62;
        color: var(--ink-soft);
      }
      .leadCenter { margin-left: auto; margin-right: auto; text-align: center; }

      .caption {
        margin: 22px 0 0;
        font-size: 0.9rem;
        letter-spacing: 0.005em;
        color: var(--ink-faint);
      }

      /* ── Layout ────────────────────────────────────────────── */

      .chapter {
        position: relative;
        padding: var(--chapter) 0;
        isolation: isolate;
      }
      .chapterSunk { background: var(--paper-sunk); }

      .chapterNight {
        background: var(--night);
        color: var(--on-night);
        overflow: hidden;
      }
      .chapterNight .h2,
      .chapterNight .statement { color: var(--on-night); }
      .chapterNight .lead { color: var(--on-night-soft); }
      .chapterNight .caption { color: var(--on-night-faint); }
      .chapterNight .eyebrow { color: var(--gold-lit); }
      .chapterQuiet { padding: clamp(104px, 14vw, 180px) 0; }

      .skyWash {
        animation: washDrift 34s ease-in-out infinite alternate;
        position: absolute;
        inset: -30% -10% auto -10%;
        height: 130%;
        background:
          radial-gradient(60% 55% at 22% 12%, rgba(212, 168, 67, 0.16), transparent 62%),
          radial-gradient(55% 50% at 82% 78%, rgba(196, 72, 80, 0.16), transparent 65%);
        pointer-events: none;
        z-index: 0;
      }
      .skyWashWarm {
        animation-duration: 28s;
        animation-direction: alternate-reverse;
        background:
          radial-gradient(58% 52% at 76% 16%, rgba(240, 130, 70, 0.18), transparent 62%),
          radial-gradient(60% 55% at 16% 84%, rgba(139, 42, 74, 0.26), transparent 66%);
      }
      .skyWashDeep {
        background:
          radial-gradient(70% 60% at 50% 0%, rgba(46, 24, 56, 0.9), transparent 70%),
          radial-gradient(40% 40% at 50% 92%, rgba(212, 168, 67, 0.12), transparent 70%);
      }

      .shell {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: var(--shell);
        margin: 0 auto;
        padding: 0 var(--gutter);
      }
      .shell.narrow { max-width: 760px; }
      .shell.center { text-align: center; }

      .split {
        display: grid;
        grid-template-columns: 1.02fr 1fr;
        gap: clamp(2.5rem, 6vw, 6rem);
        align-items: center;
      }
      .splitReverse .splitCopy { order: 2; }
      .splitReverse .splitVisual { order: 1; }
      .splitVisual { display: flex; justify-content: center; }

      .centeredHead {
        max-width: 720px;
        margin: 0 auto clamp(3rem, 6vw, 4.75rem);
        text-align: center;
      }
      .centeredHead .eyebrow { text-align: center; }

      /* ── Buttons ───────────────────────────────────────────── */

      .btnPrimary,
      .btnGhost,
      .btnCream,
      .navCta,
      .footerCta,
      .mobileMenuCta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        border-radius: 999px;
        font-family: inherit;
        font-size: 0.97rem;
        font-weight: 500;
        letter-spacing: -0.005em;
        cursor: pointer;
        transition: transform 0.45s var(--ease), background 0.3s var(--ease-soft),
          box-shadow 0.45s var(--ease), border-color 0.3s var(--ease-soft), color 0.3s var(--ease-soft);
      }

      .btnPrimary {
        padding: 15px 27px;
        background: var(--night-soft);
        color: #FFF6E8;
        box-shadow: 0 10px 28px rgba(20, 33, 63, 0.22);
      }
      .btnPrimary:hover {
        background: #1B2C53;
        transform: translateY(-2px);
        box-shadow: 0 16px 38px rgba(20, 33, 63, 0.28);
      }

      .btnGhost {
        padding: 15px 25px;
        background: transparent;
        border-color: var(--ink-hair);
        color: var(--ink);
      }
      .btnGhost:hover { border-color: rgba(20, 24, 58, 0.28); transform: translateY(-2px); }

      .btnCream {
        padding: 16px 30px;
        background: var(--on-night);
        color: #14183A;
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
      }
      .btnCream:hover { transform: translateY(-2px); box-shadow: 0 20px 52px rgba(0, 0, 0, 0.45); }

      .btnPrimary:active, .btnGhost:active, .btnCream:active { transform: translateY(0); }

      /* ── Nav ───────────────────────────────────────────────── */

      .nav {
        position: sticky;
        top: 0;
        z-index: 60;
        transition: background 0.4s var(--ease-soft), box-shadow 0.4s var(--ease-soft),
          border-color 0.4s var(--ease-soft);
        border-bottom: 1px solid transparent;
      }
      .navLifted {
        background: rgba(251, 248, 243, 0.78);
        backdrop-filter: saturate(180%) blur(22px);
        -webkit-backdrop-filter: saturate(180%) blur(22px);
        border-bottom-color: var(--ink-hair-soft);
      }
      .navInner {
        max-width: var(--shell);
        margin: 0 auto;
        padding: 14px var(--gutter);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }
      .brand { display: inline-flex; align-items: center; }
      .brandLogo { width: auto; height: 28px; }
      .navLinks { display: flex; align-items: center; gap: 30px; }
      .navLink {
        position: relative;
        font-size: 0.93rem;
        color: var(--ink-soft);
        transition: color 0.3s var(--ease-soft);
      }
      .navLink::after {
        content: "";
        position: absolute;
        left: 0; right: 0; bottom: -6px;
        height: 1px;
        background: var(--gold);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.45s var(--ease);
      }
      .navLink:hover { color: var(--ink); }
      .navLink:hover::after { transform: scaleX(1); }

      .navCta {
        padding: 10px 20px;
        background: var(--night-soft);
        color: #FFF6E8;
        font-size: 0.9rem;
      }
      .navCta:hover { background: #1B2C53; transform: translateY(-1px); }

      .hamburger {
        display: none;
        flex-direction: column;
        gap: 6px;
        width: 40px; height: 40px;
        align-items: center; justify-content: center;
        background: none; border: none; padding: 0;
      }
      .hamburgerBar {
        width: 20px; height: 1.5px;
        background: var(--ink);
        border-radius: 2px;
        transition: transform 0.4s var(--ease), opacity 0.3s var(--ease-soft);
      }
      .hamburgerBar.hamburgerOpen:nth-child(1) { transform: translateY(3.75px) rotate(45deg); }
      .hamburgerBar.hamburgerOpen:nth-child(2) { transform: translateY(-3.75px) rotate(-45deg); }

      .mobileMenuOverlay {
        position: fixed; inset: 0;
        background: rgba(11, 18, 40, 0.4);
        backdrop-filter: blur(6px);
        opacity: 0; pointer-events: none;
        transition: opacity 0.4s var(--ease-soft);
        z-index: 70;
      }
      .mobileMenuOverlay.mobileMenuVisible { opacity: 1; pointer-events: auto; }
      .mobileMenu {
        position: fixed;
        top: 0; right: 0; bottom: 0;
        width: min(320px, 86vw);
        background: var(--paper);
        padding: 92px 30px 34px;
        display: flex; flex-direction: column; gap: 4px;
        transform: translateX(100%);
        transition: transform 0.55s var(--ease);
        z-index: 80;
        box-shadow: -24px 0 60px rgba(20, 24, 58, 0.16);
      }
      .mobileMenu.mobileMenuVisible { transform: none; }
      .mobileMenuLink {
        padding: 15px 0;
        font-size: 1.12rem;
        font-weight: 500;
        color: var(--ink);
        border-bottom: 1px solid var(--ink-hair-soft);
      }
      .mobileMenuCta {
        margin-top: 26px;
        padding: 15px 22px;
        background: var(--night-soft);
        color: #FFF6E8;
      }

      /* ── Hero ──────────────────────────────────────────────── */

      .hero {
        position: relative;
        padding: clamp(48px, 7vw, 82px) 0 clamp(64px, 9vw, 112px);
        overflow: hidden;
        isolation: isolate;
      }
      .heroDawn {
        position: absolute;
        inset: -28% -20% auto -20%;
        height: 150%;
        background:
          radial-gradient(48% 44% at 18% 6%, rgba(255, 201, 136, 0.5), transparent 64%),
          radial-gradient(46% 42% at 84% 26%, rgba(219, 72, 144, 0.16), transparent 66%),
          radial-gradient(60% 46% at 50% 96%, rgba(251, 248, 243, 0.96), transparent 70%);
        pointer-events: none;
        z-index: -2;
        animation: dawnDrift 26s ease-in-out infinite alternate;
      }
      @keyframes dawnDrift {
        from { transform: translate3d(0, 0, 0) scale(1); }
        to   { transform: translate3d(-2%, 1.5%, 0) scale(1.06); }
      }
      .heroCursorGlow {
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background: radial-gradient(260px 260px at var(--cx, 50%) var(--cy, 40%), rgba(212, 168, 67, 0.16), transparent 70%);
        transition: background 0.2s linear;
      }
      @media (prefers-reduced-motion: reduce) {
        .heroDawn { animation: none; }
        .heroCursorGlow { display: none; }
      }

      .heroInner {
        position: relative;
        max-width: var(--shell);
        margin: 0 auto;
        padding: 0 var(--gutter);
        display: grid;
        grid-template-columns: 1.04fr 0.96fr;
        gap: clamp(2rem, 5vw, 4.5rem);
        align-items: center;
      }
      .heroCopy { max-width: 36rem; }

      .heroTitle {
        margin: 0;
        font-size: clamp(2.9rem, 7.2vw, 4.7rem);
        font-weight: 500;
        line-height: 0.99;
        letter-spacing: -0.042em;
        color: var(--ink);
      }
      .heroTitle em { display: inline-block; letter-spacing: -0.02em; }

      .heroLead {
        margin: 28px 0 0;
        max-width: 44ch;
        font-size: clamp(1.05rem, 1.45vw, 1.2rem);
        line-height: 1.6;
        color: var(--ink-soft);
      }
      .heroCtas {
        margin-top: 34px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .heroPhone { position: relative; display: flex; justify-content: center; }
      .heroPhone .phoneMockup { position: relative; z-index: 1; }

      /* ── Proof ─────────────────────────────────────────────── */

      .proof {
        padding: clamp(56px, 8vw, 92px) 0 clamp(12px, 3vw, 32px);
      }
      .proofInner {
        max-width: 780px;
        margin: 0 auto;
        padding: 0 var(--gutter);
        text-align: center;
      }
      .proofQuote {
        margin: 0;
        font-size: clamp(1.3rem, 2.9vw, 1.95rem);
        font-weight: 400;
        line-height: 1.38;
        letter-spacing: -0.02em;
        color: var(--ink);
        text-wrap: balance;
      }
      .proofName {
        display: block;
        margin-top: 20px;
        font-style: normal;
        font-size: 0.82rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }

      /* ── Cards, shared ─────────────────────────────────────── */

      .arriveCard,
      .placesCard,
      .captureCard,
      .mealWeekCard,
      .driveNotif,
      /* ── Arrival ───────────────────────────────────────────── */

      /* ── Passing by ────────────────────────────────────────── */

      @keyframes driftUp {
        from { transform: translateY(0); }
        to   { transform: translateY(-9px); }
      }
      /* ── Places ────────────────────────────────────────────── */

      .placeGlyph {
        width: 9px; height: 9px; border-radius: 50%;
        flex: 0 0 9px;
      }
      .placeGlyph--grocery  { background: #4C7A5A; }
      .placeGlyph--errand   { background: var(--accent-lit); }
      .placeGlyph--pharmacy { background: #4A6FB5; }
      .placeGlyph--ask      { background: #7B5C9E; }
      .placeGlyph--home     { background: var(--peach); }
      /* ── Capture ───────────────────────────────────────────── */

      /* ── Household ─────────────────────────────────────────── */

      .householdVisual {
        position: relative;
        width: min(420px, 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 36px;
      }
      .householdOrbit { position: relative; width: 226px; height: 226px; flex: 0 0 auto; }
      .householdRing {
        position: absolute; inset: 0;
        border-radius: 50%;
        border: 1px solid rgba(255, 244, 228, 0.14);
        animation: ringSpin 34s linear infinite;
      }
      .householdRing2 {
        inset: 34px;
        border-color: rgba(212, 168, 67, 0.22);
        animation-duration: 24s;
        animation-direction: reverse;
      }
      @keyframes ringSpin { to { transform: rotate(360deg); } }
      .householdAvatar {
        position: absolute;
        width: 62px; height: 62px;
        border-radius: 50%;
        display: grid; place-items: center;
        font-size: 1.2rem; font-weight: 500;
        color: #FFF4E4;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.34);
      }
      .householdAvatar1 {
        top: 6px; left: 50%; margin-left: -31px;
        background: linear-gradient(150deg, #C44850, #8B2A4A);
      }
      .householdAvatar2 {
        bottom: 6px; left: 50%; margin-left: -31px;
        background: linear-gradient(150deg, #F08246, #C4942F);
      }
      .householdNotif {
        position: relative;
        display: flex; gap: 12px; align-items: flex-start;
        width: min(330px, 100%);
        padding: 15px 17px;
        border-radius: 18px;
        background: rgba(255, 244, 228, 0.07);
        border: 1px solid var(--on-night-hair);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 24px 56px rgba(0, 0, 0, 0.4);
        animation: driftUp 8s var(--ease-soft) infinite alternate;
      }
      .householdNotifIcon :global(img) { border-radius: 7px; display: block; }
      .householdNotifLabel {
        font-size: 0.68rem; letter-spacing: 0.13em; text-transform: uppercase;
        color: var(--on-night-faint);
      }
      .householdNotifTitle { margin-top: 4px; font-size: 0.98rem; font-weight: 500; color: var(--on-night); }
      .householdNotifSub { margin-top: 2px; font-size: 0.85rem; color: var(--on-night-soft); }

      /* ── Dayparts ──────────────────────────────────────────── */

      /* ── Meal plan ─────────────────────────────────────────── */

      /* ── Ecosystem ─────────────────────────────────────────── */

      .ecoCard {
        padding: 34px 28px 30px;
        background: var(--paper-raised);
        border: 1px solid var(--ink-hair-soft);
        box-shadow: 0 16px 44px rgba(20, 24, 58, 0.06);
      }
      /* ── Pills ─────────────────────────────────────────────── */

      .pillRow {
        margin-top: 36px;
        display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;
      }
      .pill {
        padding: 10px 20px;
        border-radius: 999px;
        border: 1px solid var(--ink-hair);
        background: var(--paper-raised);
        font-size: 0.88rem;
        color: var(--ink-soft);
        transition: transform 0.5s var(--ease), border-color 0.3s var(--ease-soft);
      }
      .pill:hover { transform: translateY(-2px); border-color: rgba(196, 148, 47, 0.5); }

      .privacyMark {
        width: 72px; height: 72px;
        margin: 0 auto 30px;
        display: grid; place-items: center;
        border-radius: 50%;
        border: 1px solid var(--ink-hair);
        background: var(--paper-raised);
        color: var(--gold);
        box-shadow: 0 18px 44px rgba(20, 24, 58, 0.08);
      }
      .privacyMark :global(svg) { width: 34px; height: 34px; }

      /* ── FAQ ───────────────────────────────────────────────── */

      .faqList { border-top: 1px solid var(--ink-hair-soft); }
      .faqItem { border-bottom: 1px solid var(--ink-hair-soft); }
      .faqQ {
        position: relative;
        list-style: none;
        cursor: pointer;
        padding: 24px 44px 24px 0;
        font-size: 1.06rem;
        font-weight: 500;
        letter-spacing: -0.012em;
        color: var(--ink);
      }
      .faqQ::-webkit-details-marker { display: none; }
      .faqQ::after {
        content: "";
        position: absolute;
        right: 6px; top: 50%;
        width: 11px; height: 11px;
        border-right: 1.5px solid var(--ink-faint);
        border-bottom: 1.5px solid var(--ink-faint);
        transform: translateY(-70%) rotate(45deg);
        transition: transform 0.45s var(--ease);
      }
      .faqItem[open] .faqQ::after { transform: translateY(-25%) rotate(225deg); }
      .faqA {
        margin: 0;
        padding: 0 48px 26px 0;
        font-size: 1rem;
        line-height: 1.65;
        color: var(--ink-soft);
      }

      /* ── Final CTA ─────────────────────────────────────────── */

      .finalCta {
        position: relative;
        padding: clamp(104px, 15vw, 190px) var(--gutter);
        background: var(--night-deep);
        color: var(--on-night);
        overflow: hidden;
        isolation: isolate;
      }
      .finalSky {
        animation: washDrift 40s ease-in-out infinite alternate;
        position: absolute; inset: 0;
        background:
          radial-gradient(70% 60% at 50% -10%, rgba(46, 24, 56, 0.95), transparent 68%),
          radial-gradient(46% 40% at 20% 100%, rgba(139, 42, 74, 0.4), transparent 70%),
          radial-gradient(40% 36% at 82% 92%, rgba(212, 168, 67, 0.18), transparent 70%);
        z-index: -1;
      }
      .finalInner { max-width: 760px; margin: 0 auto; text-align: center; }
      .finalTitle {
        margin: 0;
        font-size: clamp(2.4rem, 6.4vw, 4.4rem);
        font-weight: 500;
        line-height: 1.03;
        letter-spacing: -0.035em;
        color: var(--on-night);
      }
      .finalTitle em {
        font-family: var(--font-serif);
        font-style: italic;
        font-weight: 400;
        color: #FFE9BD;
      }
      .finalSub {
        margin: 24px auto 38px;
        max-width: 42ch;
        font-size: 1.06rem;
        line-height: 1.6;
        color: var(--on-night-soft);
      }

      /* ── Footer ────────────────────────────────────────────── */

      .footer {
        background: var(--night-deep);
        color: var(--on-night-soft);
        padding: clamp(52px, 7vw, 76px) var(--gutter) 34px;
        border-top: 1px solid rgba(255, 244, 228, 0.08);
      }
      .footerTop {
        max-width: var(--shell);
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: clamp(2rem, 6vw, 5rem);
        justify-content: space-between;
      }
      .footerWord {
        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        color: var(--on-night);
      }
      .footerTag {
        margin: 8px 0 0;
        font-size: 0.92rem;
        color: var(--on-night-faint);
      }
      .footerTag em { font-family: var(--font-serif); font-style: italic; color: var(--gold-lit); }
      .footerNav {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(2rem, 5vw, 4.5rem);
      }
      .footerNav > div { display: flex; flex-direction: column; gap: 11px; }
      .footerHead {
        margin: 0 0 4px;
        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.19em;
        text-transform: uppercase;
        color: var(--on-night-faint);
      }
      .footerLink {
        font-size: 0.93rem;
        color: var(--on-night-soft);
        transition: color 0.3s var(--ease-soft);
      }
      .footerLink:hover { color: var(--on-night); }
      .footerBase {
        max-width: var(--shell);
        margin: clamp(44px, 6vw, 64px) auto 0;
        padding-top: 26px;
        border-top: 1px solid rgba(255, 244, 228, 0.08);
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        align-items: center;
        justify-content: space-between;
      }
      .footerCta {
        padding: 12px 22px;
        background: rgba(255, 244, 228, 0.1);
        border: 1px solid rgba(255, 244, 228, 0.18);
        color: var(--on-night);
        font-size: 0.9rem;
      }
      .footerCta:hover { background: rgba(255, 244, 228, 0.16); transform: translateY(-1px); }
      .footerCopy { margin: 0; font-size: 0.82rem; color: var(--on-night-faint); }


      .phoneMockup {
        width: 332px;
        height: 678px;
        border-radius: 44px;
        background: linear-gradient(160deg, #1E2747 0%, #141E3A 28%, #0B1228 55%, #1A2547 100%);
        padding: 6px;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(0);
        box-shadow:
          0 0 0 1px rgba(255,255,255,0.14),
          0 0 0 2px #141E3A,
          0 0 0 4px #1E2747,
          0 34px 80px rgba(14, 23, 51, 0.34),
          0 16px 32px rgba(14, 23, 51, 0.2),
          0 36px 90px rgba(219, 72, 144, 0.14),
          0 0 120px rgba(100, 210, 230, 0.16);
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
        background: radial-gradient(ellipse, rgba(14, 23, 51, 0.18) 0%, transparent 70%);
        filter: blur(12px);
        pointer-events: none;
      }

      .phoneDynamic {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 28px;
        border-radius: 14px;
        background: #0E1733;
        z-index: 10;
      }

      .phoneScreen {
        width: 100%;
        height: 100%;
        border-radius: 38px;
        background:
          radial-gradient(circle at 72% 12%, rgba(255, 255, 255, 0.82) 0 12%, transparent 30%),
          radial-gradient(circle at 18% 22%, rgba(219, 72, 144, 0.15) 0 18%, transparent 38%),
          linear-gradient(180deg, #ecfbff 0%, #f8fffb 36%, #eef9f5 62%, #d3efe9 100%);
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
        background:
          linear-gradient(170deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 24%, transparent 58%),
          radial-gradient(circle at 50% 0%, rgba(255,255,255,0.22), transparent 34%);
        pointer-events: none;
        z-index: 4;
      }

      /* Status bar */
      .phoneStatusBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 11px 16px 0;
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
        color: #121C41;
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
        border: 1.5px solid #121C41;
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
        background: #121C41;
      }

      .phoneBattFill {
        width: 75%;
        height: 100%;
        border-radius: 1px;
        background: #121C41;
      }

      /* Notification banner */
      .phoneNotif {
        position: absolute;
        top: 11px;
        left: 10px;
        right: 10px;
        padding: 12px 13px;
        border-radius: 21px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        box-shadow: 0 14px 34px rgba(12, 38, 58, 0.13), 0 1px 0 rgba(255,255,255,0.88) inset;
        border: 1px solid rgba(255, 255, 255, 0.72);
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
        color: #121C41;
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

      /* Smooth lock screen wallpaper */
      .lockWallpaper {
        position: absolute;
        inset: 0;
        z-index: 0;
        background:
          radial-gradient(circle at 50% 44%, rgba(244, 255, 251, 0.94) 0 9%, rgba(195, 240, 241, 0.9) 22%, rgba(116, 205, 223, 0.74) 42%, transparent 64%),
          linear-gradient(180deg, #74C5DD 0%, #AEE1E9 38%, #E9F8F4 58%, #7BCAD4 100%);
      }

      .lockSky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 58%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
      }

      .lockMountainBack {
        position: absolute;
        top: 28%;
        left: -8%;
        right: -8%;
        height: 25%;
        display: none;
      }

      .lockMountainFront {
        position: absolute;
        top: 38%;
        left: -10%;
        right: -10%;
        height: 24%;
        display: none;
      }

      .lockWater {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background:
          radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.34), transparent 42%),
          linear-gradient(180deg, rgba(123, 202, 212, 0.18) 0%, rgba(50, 143, 170, 0.28) 100%);
      }

      .lockWaterShimmer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        display: none;
      }

      @keyframes waterShimmer {
        0%, 100% { opacity: 0.35; transform: translateX(-4px); }
        50% { opacity: 0.5; transform: translateX(4px); }
      }

      .lockCloudDrift {
        position: absolute;
        display: none;
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
        font-size: 52px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        text-shadow: 0 2px 12px rgba(18, 84, 116, 0.18);
        position: relative;
        z-index: 2;
      }

      .lockDateDisplay {
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.85);
        margin-top: 4px;
        text-shadow: 0 1px 5px rgba(18, 84, 116, 0.2);
        position: relative;
        z-index: 2;
      }

      /* Glowing proximity card on lock screen */
      .lockProximityCard {
        position: relative;
        z-index: 2;
        margin-top: 18px;
        padding: 18px 19px;
        border-radius: 26px;
        background: rgba(249, 253, 255, 0.95);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        border: 1px solid rgba(255, 255, 255, 0.88);
        width: 93%;
        opacity: 0;
        transform: translateY(-16px) scale(.965);
        overflow: hidden;
        box-shadow:
          0 18px 42px rgba(27, 105, 145, 0.18),
          0 2px 8px rgba(14, 23, 51, 0.08);
      }

      .lockProximityGlow {
        position: absolute;
        inset: -3px;
        border-radius: 24px;
        display: none;
        background: linear-gradient(135deg, rgba(255,255,255,0.46), rgba(92, 205, 232, 0.2), rgba(255,255,255,0.22));
        filter: blur(10px);
        z-index: -1;
        opacity: 0.75;
      }

      @keyframes glowSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes lockNotifSlide {
        0%   { opacity: 0; transform: translateY(-16px) scale(.965); }
        60%  { opacity: 1; transform: translateY(2px)   scale(1.006); }
        100% { opacity: 1; transform: translateY(0)     scale(1); }
      }
      .hasArrived .lockProximityCard {
        animation: lockNotifSlide .72s var(--ease) both;
      }
      @keyframes lockRowIn {
        from { opacity: 0; transform: translateY(9px); }
        to   { opacity: 1; transform: none; }
      }
      .lockTaskItem { opacity: 0; }
      .hasArrived .lockTaskItem { animation: lockRowIn .5s var(--ease) both; }
      .hasArrived .lockTaskItem1 { animation-delay: .40s; }
      .hasArrived .lockTaskItem2 { animation-delay: .52s; }

      /* the geofence closing around you */
      .arrivalRipple {
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        width: 0; height: 0;
        pointer-events: none;
        z-index: 0;
      }
      .arrivalRipple span {
        position: absolute;
        left: 50%; top: 50%;
        width: 300px; height: 300px;
        margin: -150px 0 0 -150px;
        border-radius: 50%;
        border: 1.5px solid rgba(212, 168, 67, .55);
        opacity: 0;
      }
      .rippleOn span { animation: arrivalOut 2.1s var(--ease) forwards; }
      .rippleOn span:nth-child(2) { animation-delay: .16s; }
      .rippleOn span:nth-child(3) { animation-delay: .32s; }
      @keyframes arrivalOut {
        0%   { opacity: 0;   transform: scale(.35); }
        18%  { opacity: .85; }
        100% { opacity: 0;   transform: scale(3.4); }
      }

      .lockProximityHeader {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .lockNotifIcon {
        width: 38px;
        height: 38px;
        border-radius: 9px;
        flex-shrink: 0;
      }

      .lockProximityTitleArea {
        flex: 1;
        min-width: 0;
      }

      .lockProximityLabel {
        font-size: 10px;
        font-weight: 700;
        color: rgba(44, 74, 91, 0.5);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .lockProximityTitle {
        font-size: 22px;
        letter-spacing: -0.02em;
        font-weight: 700;
        color: #14384D;
        line-height: 1.25;
        text-shadow: none;
      }

      .lockProximitySub {
        font-size: 13px;
        color: rgba(44, 74, 91, 0.58);
        margin-top: 1px;
      }

      .lockTaskList {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(33, 91, 122, 0.1);
        display: flex;
        flex-direction: column;
        gap: 6px;
        perspective: 400px;
      }

      .lockTaskItem {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 15px;
        border-radius: 16px;
        background: #FFFFFF;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        border: 1px solid rgba(33, 91, 122, 0.08);
        box-shadow: 0 6px 16px rgba(21, 96, 125, 0.08);
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
          background: rgba(255, 255, 255, 0.16);
          box-shadow: 0 8px 20px rgba(20, 95, 125, 0.12), 0 1px 3px rgba(14, 23, 51, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.24);
        }
        100% {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 24px rgba(20, 95, 125, 0.16), 0 2px 6px rgba(14, 23, 51, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.26);
          border-color: rgba(255, 255, 255, 0.32);
        }
      }

      .lockTaskCheck {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid rgba(0, 102, 177, 0.32);
        flex-shrink: 0;
        box-shadow: none;
      }

      .lockTaskText {
        flex: 1;
        font-size: 17px;
        font-weight: 600;
        color: #14384D;
        text-shadow: none;
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
        box-shadow: 0 0 0 3px rgba(255, 159, 10, 0.14);
      }

      .lockTaskPriorityRed {
        background: #FF453A;
        box-shadow: 0 0 0 3px rgba(255, 69, 58, 0.12);
      }

      .lockProximityShimmer {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        display: none;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);
        animation: proximityShimmer 5s ease-in-out infinite;
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
        color: rgba(25, 54, 82, 0.58);
        margin-bottom: 1px;
      }

      .phoneHomeTitle {
        font-size: 24px;
        font-weight: 800;
        color: #10243a;
        letter-spacing: -0.025em;
        line-height: 1.12;
      }

      .phonePlacesTitle {
        font-style: normal;
      }

      .phoneHomeSub {
        font-size: 11px;
        color: rgba(25, 54, 82, 0.48);
        margin-top: 1px;
        font-weight: 500;
      }

      .phoneQuickAdd {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 8px;
        margin-left: auto;
        padding: 7px 11px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.72);
        box-shadow: 0 8px 20px rgba(0, 79, 134, 0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
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
        margin-top: 8px;
        padding: 8px 11px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.64);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.64);
        box-shadow: 0 8px 24px rgba(0, 79, 134, 0.07);
      }

      .phoneRadarText {
        font-size: 11px;
        font-weight: 500;
        color: rgba(30, 50, 80, 0.6);
      }

      .phoneSectionLabel {
        font-size: 9px;
        font-weight: 700;
        color: rgba(25, 54, 82, 0.43);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin: 10px 0 6px;
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
        gap: 7px;
      }

      .phoneGroupItem {
        background: white;
        border-radius: 15px;
        padding: 10px 11px;
        border: 1px solid rgba(14, 23, 51, 0.06);
      }

      .phoneGroupItemGlass {
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.72);
        box-shadow: 0 10px 26px rgba(0, 79, 134, 0.08), 0 1px 0 rgba(255,255,255,0.92) inset;
      }

      .phoneGroupHeader {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .phoneGroupEmoji {
        font-size: 15px;
        flex-shrink: 0;
        width: 30px;
        height: 30px;
        background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(225,244,249,0.75));
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 5px 14px rgba(0, 79, 134, 0.08);
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
        color: #10243a;
        line-height: 1.2;
      }

      .phoneGroupDist {
        font-size: 9px;
        color: rgba(30, 50, 80, 0.4);
        font-weight: 500;
      }

      .phoneGroupTasks {
        margin-top: 6px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .phoneGroupTaskRow {
        display: flex;
        align-items: center;
        gap: 6px;
        padding-left: 38px;
      }

      .phoneTaskCheck {
        width: 15px;
        height: 15px;
        border-radius: 5px;
        border: 1.5px solid rgba(219, 72, 144, 0.18);
        background: rgba(255, 255, 255, 0.7);
        flex-shrink: 0;
      }

      .phoneGroupTaskText {
        font-size: 11.5px;
        color: #263d56;
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
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 600;
        background: rgba(255, 255, 255, 0.68);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        color: rgba(25, 54, 82, 0.58);
        border: 1px solid rgba(255, 255, 255, 0.68);
      }

      .phoneChipActive {
        background: var(--blue);
        color: white;
        border-color: var(--blue);
      }

      /* Place cards */
      .phonePlaceCard {
        padding: 9px 11px 8px;
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
        background: rgba(219, 72, 144, 0.12);
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
        margin-top: 6px;
        padding-left: 38px;
        flex-wrap: wrap;
      }

      .phonePlaceTaskTag {
        font-size: 9px;
        padding: 3px 8px;
        border-radius: 999px;
        background: rgba(219, 72, 144, 0.08);
        color: rgba(25, 54, 82, 0.68);
        font-weight: 500;
      }

      .phoneBadgeBlue {
        background: rgba(18, 28, 65, 0.15) !important;
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
        margin-bottom: 12px;
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
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.78);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.74);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: rgba(30, 50, 80, 0.55);
        box-shadow: 0 7px 18px rgba(0, 79, 134, 0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
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
        background: rgba(255, 255, 255, 0.86);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.74);
        border-radius: 16px;
        padding: 11px 12px;
        margin-bottom: 10px;
        box-shadow: 0 12px 28px rgba(0, 79, 134, 0.09), 0 1px 0 rgba(255,255,255,0.9) inset;
      }
      .phoneGamePlanIcon {
        width: 34px;
        height: 34px;
        border-radius: 10px;
        background: linear-gradient(135deg, #121C41, #DB4890);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        flex-shrink: 0;
        color: white;
        box-shadow: 0 8px 18px rgba(219, 72, 144,0.22);
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
        padding: 9px 0;
        margin-top: 8px;
        border-radius: 14px;
        border: 1.5px dashed rgba(219, 72, 144, 0.18);
        background: rgba(255, 255, 255, 0.42);
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
        background: linear-gradient(135deg, #121C41, #DB4890);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: white;
        font-weight: 600;
        box-shadow: 0 10px 22px rgba(219, 72, 144, 0.18);
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
        background: linear-gradient(135deg, #121C41, #DB4890);
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
        top: 56px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 14px 64px;
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 6;
        opacity: 0;
        transform: translateY(3px);
        transition: opacity 0.28s ease, transform 0.28s ease;
        pointer-events: none;
      }

      .phoneContent.phoneContentVisible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.45s ease 0.08s, transform 0.45s ease 0.08s;
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
        color: #121C41;
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
        background: rgba(14, 23, 51, 0.06);
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
        border: 1.5px solid rgba(14, 23, 51, 0.2);
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
        color: #121C41;
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
        box-shadow: 0 8px 32px rgba(14, 23, 51, 0.04);
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
        box-shadow: 0 12px 40px rgba(14, 23, 51, 0.15);
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
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        padding: 6px 4px 4px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.68);
        border-radius: 24px;
        box-shadow: 0 12px 30px rgba(0, 79, 134, 0.11), 0 1px 0 rgba(255,255,255,0.9) inset;
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
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: linear-gradient(135deg, var(--cta), var(--cta-deep));
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 18px rgba(219, 72, 144, 0.28);
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
        background: rgba(14, 23, 51, 0.22);
      }



      /* ── Hero microcopy ────────────────────────────────────── */

      .heroMicro {
        margin: 22px 0 0;
        font-size: 0.86rem;
        letter-spacing: 0.005em;
        color: var(--ink-faint);
      }

      /* ── Three beats ───────────────────────────────────────── */

      .beatGrid {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(2rem, 4.5vw, 4rem);
      }
      .beat {
        position: relative;
        padding-top: 26px;
        border-top: 1px solid var(--ink-hair);
      }
      .beatStep {
        display: block;
        margin-bottom: 14px;
        font-size: 0.72rem;
        letter-spacing: 0.16em;
        color: var(--gold);
      }
      .beatTitle {
        margin: 0;
        min-height: 2.3em;
        font-size: clamp(1.35rem, 2.1vw, 1.7rem);
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1.15;
        color: var(--ink);
      }
      .beatLine {
        margin: 18px 0 0;
        padding: 13px 16px;
        border-radius: var(--radius-sm);
        background: var(--paper-raised);
        border: 1px solid var(--ink-hair-soft);
        font-size: 0.97rem;
        color: var(--ink);
        box-shadow: 0 10px 26px rgba(20, 24, 58, 0.05);
      }
      .beat:nth-child(3) .beatLine {
        background: linear-gradient(120deg, rgba(212, 168, 67, 0.16), rgba(240, 130, 70, 0.09));
        border-color: rgba(196, 148, 47, 0.34);
        font-weight: 500;
      }
      .beatBody {
        margin: 16px 0 0;
        font-size: 0.97rem;
        line-height: 1.6;
        color: var(--ink-soft);
      }

      /* ── Everyday moments ──────────────────────────────────── */

      .momentList {
        margin: clamp(2.25rem, 4vw, 3rem) auto 0;
        padding: 0;
        list-style: none;
        max-width: 560px;
        text-align: left;
        border-top: 1px solid var(--ink-hair-soft);
      }
      .momentList { position: relative; overflow: hidden; }
      .momentList::after {
        content: "";
        position: absolute;
        left: 0; right: 0; top: 0;
        height: 120px;
        pointer-events: none;
        background: linear-gradient(180deg, transparent, rgba(212,168,67,.16), transparent);
        opacity: 0;
      }
      .reveal.revealed .momentList::after { animation: momentSweep 1.9s var(--ease) .15s both; }
      @keyframes momentSweep {
        0%   { opacity: 0; transform: translateY(-120px); }
        22%  { opacity: 1; }
        100% { opacity: 0; transform: translateY(520px); }
      }
      .reveal .moment { transform: translate3d(-14px, 0, 0); }
      .reveal.revealed .moment { transform: none; }
      .reveal .moment .placeGlyph { transform: scale(.2); opacity: 0; }
      .reveal.revealed .moment .placeGlyph {
        transform: none; opacity: 1;
        transition: transform .55s var(--ease), opacity .55s var(--ease);
      }
      .moment {
        display: flex;
        align-items: center;
        gap: 16px;
        transition: transform .8s var(--ease), opacity .8s var(--ease);
        padding: 20px 4px;
        font-size: clamp(1rem, 1.35vw, 1.12rem);
        color: var(--ink);
        border-bottom: 1px solid var(--ink-hair-soft);
      }

      /* ── FAQ heading, quieter than a chapter title ─────────── */

      .chapterTight { padding: clamp(56px, 8vw, 92px) 0; }
      .h3Quiet {
        margin: 0 0 28px;
        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.19em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }

      /* ── Closing QR ────────────────────────────────────────── */

      .finalQr {
        margin: 44px auto 0;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 0.8rem;
        line-height: 1.45;
        text-align: left;
        color: var(--on-night-faint);
      }
      .finalQr :global(img) {
        border-radius: 10px;
        background: #fff;
        padding: 5px;
      }


      /* ── Beat visuals ──────────────────────────────────────── */

      .beatVisual {
        position: relative;
        margin-top: 20px;
        height: 116px;
        display: flex;
        align-items: center;
      }

      /* the dotted hand-off between beats */
      .beatLink {
        position: absolute;
        top: 50%;
        left: calc(100% + 8px);
        width: clamp(1.4rem, 3.4vw, 3rem);
        height: 1px;
        background: linear-gradient(90deg, rgba(196, 148, 47, 0.55) 0 4px, transparent 4px 9px) repeat-x;
        background-size: 9px 1px;
      }
      .beatLink::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 5px;
        height: 5px;
        border-top: 1.2px solid rgba(196, 148, 47, 0.75);
        border-right: 1.2px solid rgba(196, 148, 47, 0.75);
        transform: translateY(-50%) rotate(45deg);
      }

      /* 01 - the spoken thing */
      .vizVoice { text-align: left; display: flex; flex-direction: column; gap: 14px; width: 100%; }
      .vizVoiceRow { display: flex; align-items: center; gap: 12px; }
      .vizMic {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--paper-raised);
        border: 1px solid var(--ink-hair);
        color: var(--ink-soft);
      }
      .vizMic svg { width: 15px; height: 15px; }
      .vizWave {
        display: flex;
        align-items: center;
        gap: 3px;
        height: 36px;
        flex: 1;
      }
      .vizWave i {
        display: block;
        flex: 1;
        max-width: 4px;
        min-height: 3px;
        border-radius: 2px;
        background: linear-gradient(180deg, var(--gold) 0%, rgba(196, 148, 47, 0.4) 100%);
        transform-origin: center;
        animation: waveFlex 1.8s var(--ease-soft) infinite;
      }
      @keyframes waveFlex {
        0%, 100% { transform: scaleY(0.32); opacity: 0.55; }
        45%      { transform: scaleY(1);    opacity: 1; }
      }
      .vizQuote {
        margin: 0;
        font-size: 0.95rem;
        color: var(--ink);
      }

      /* 02 - the mark takes it */
      .vizSphere {
        position: relative;
        width: 104px;
        height: 104px;
        display: grid;
        place-items: center;
      }
      .vizRing {
        position: absolute;
        border-radius: 50%;
        border: 1px solid rgba(196, 148, 47, 0.45);
        animation: ringBreathe 4.4s var(--ease-soft) infinite;
      }
      .vizRing1 { inset: 0; animation-delay: 0s; }
      .vizRing2 { inset: 15px; animation-delay: 0.45s; }
      .vizRing3 { inset: 30px; animation-delay: 0.9s; }
      @keyframes ringBreathe {
        0%, 100% { transform: scale(0.94); opacity: 0.4; }
        50%      { transform: scale(1.04); opacity: 1; }
      }
      .vizCore {
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: radial-gradient(circle at 36% 32%, #FFE6AF 0%, var(--gold-lit) 48%, #A97C1F 100%);
        box-shadow: 0 0 26px rgba(212, 168, 67, 0.6), 0 0 60px rgba(212, 168, 67, 0.28);
        animation: coreGlow 4.4s var(--ease-soft) infinite;
      }
      @keyframes coreGlow {
        0%, 100% { box-shadow: 0 0 18px rgba(212, 168, 67, 0.42), 0 0 44px rgba(212, 168, 67, 0.18); }
        50%      { box-shadow: 0 0 30px rgba(212, 168, 67, 0.68), 0 0 72px rgba(212, 168, 67, 0.34); }
      }

      /* 03 - it lands on the Lock Screen */
      .vizArrive { width: 100%; }
      .vizNotif {
        text-align: left;
        display: flex;
        gap: 11px;
        align-items: flex-start;
        padding: 13px 14px;
        border-radius: var(--radius-sm);
        background: var(--paper-raised);
        border: 1px solid var(--ink-hair-soft);
        box-shadow: 0 12px 30px rgba(20, 24, 58, 0.08);
      }
      .vizNotifIcon :global(img) { border-radius: 6px; display: block; }
      .vizNotifLabel {
        font-size: 0.62rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }
      .vizNotifTitle { margin-top: 3px; font-size: 0.95rem; font-weight: 500; color: var(--ink); }
      .vizNotifSub { margin-top: 1px; font-size: 0.85rem; color: var(--ink-soft); }

      /* ── Household: the golden thread ──────────────────────── */

      .threadVisual {
        width: min(360px, 100%);
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      .threadList {
        text-align: left;
        padding: 16px 16px 8px;
        border-radius: var(--radius);
        background: rgba(255, 248, 238, 0.96);
        border: 1px solid rgba(255, 244, 228, 0.3);
        box-shadow: 0 26px 60px rgba(0, 0, 0, 0.34);
      }
      .threadListHead {
        display: flex;
        align-items: center;
        gap: 11px;
        padding-bottom: 13px;
        border-bottom: 1px solid rgba(20, 24, 58, 0.08);
      }
      .threadListIcon {
        display: grid;
        place-items: center;
        width: 32px;
        height: 32px;
        border-radius: 9px;
        background: rgba(20, 24, 58, 0.05);
        color: var(--ink-soft);
        flex: 0 0 32px;
      }
      .threadListIcon svg { width: 18px; height: 18px; }
      .threadListTitle { font-size: 0.94rem; font-weight: 500; color: var(--ink); }
      .threadListSub { margin-top: 1px; font-size: 0.78rem; color: var(--ink-faint); }

      .threadItems { list-style: none; margin: 0; padding: 0; }
      .threadItems li {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 10px 0;
        font-size: 0.92rem;
        color: var(--ink);
        border-bottom: 1px solid rgba(20, 24, 58, 0.06);
      }
      .threadItems li:last-child { border-bottom: none; }
      .threadCheck {
        display: grid;
        place-items: center;
        width: 18px;
        height: 18px;
        flex: 0 0 18px;
        border-radius: 50%;
        border: 1.4px solid rgba(20, 24, 58, 0.2);
        color: transparent;
      }
      .threadCheck svg { width: 11px; height: 11px; }
      .threadDone .threadCheck {
        background: var(--gold);
        border-color: var(--gold);
        color: #FFF8EE;
      }
      .threadDone { color: var(--ink-faint); text-decoration: line-through; text-decoration-color: rgba(20, 24, 58, 0.25); }

      /* the thread itself */
      .threadLine {
        position: relative;
        align-self: center;
        width: 2px;
        height: 74px;
        background: linear-gradient(180deg, rgba(212, 168, 67, 0) 0%, rgba(212, 168, 67, 0.75) 22%, rgba(212, 168, 67, 0.75) 78%, rgba(212, 168, 67, 0) 100%);
      }
      .threadSpark {
        position: absolute;
        left: 50%;
        top: 0;
        width: 13px;
        height: 13px;
        margin-left: -6.5px;
        border-radius: 50%;
        background: radial-gradient(circle at 36% 32%, #FFE6AF 0%, var(--gold-lit) 50%, #A97C1F 100%);
        box-shadow: 0 0 16px rgba(212, 168, 67, 0.85), 0 0 38px rgba(212, 168, 67, 0.4);
        animation: threadTravel 3.6s var(--ease-soft) infinite;
      }
      @keyframes threadTravel {
        0%        { transform: translateY(-6px) scale(0.6); opacity: 0; }
        14%       { opacity: 1; }
        84%       { opacity: 1; }
        100%      { transform: translateY(68px) scale(0.6); opacity: 0; }
      }

      .threadNotif {
        text-align: left;
        display: flex;
        gap: 12px;
        align-items: flex-start;
        padding: 15px 17px;
        border-radius: 18px;
        background: rgba(255, 244, 228, 0.07);
        border: 1px solid var(--on-night-hair);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 24px 56px rgba(0, 0, 0, 0.4);
      }
      .threadNotifIcon :global(img) { border-radius: 7px; display: block; }
      .threadNotifLabel {
        font-size: 0.68rem;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        color: var(--on-night-faint);
      }
      .threadNotifTitle { margin-top: 4px; font-size: 0.98rem; font-weight: 500; color: var(--on-night); }
      .threadNotifSub { margin-top: 2px; font-size: 0.85rem; color: var(--on-night-soft); }

      /* ── Responsive ────────────────────────────────────────── */

      @media (max-width: 1024px) {
        .heroInner {
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 6vw, 3.5rem);
          text-align: center;
          justify-items: center;
        }
        .heroCopy { max-width: 34rem; }
        .heroTitle { font-size: clamp(2.7rem, 6.2vw, 3.9rem); }
        .heroLead { margin-left: auto; margin-right: auto; max-width: 40ch; }
        .heroCtas { justify-content: center; }
        .heroMicro { text-align: center; }

        .phoneMockup { width: 268px; height: 547px; border-radius: 40px; }
        .phoneScreen { border-radius: 34px; }
        .phoneDynamic { width: 100px; height: 28px; border-radius: 14px; top: 10px; }
        .lockTimeDisplay { font-size: 42px; }
        .lockNotifIcon { width: 32px; height: 32px; border-radius: 8px; }
        .lockProximityCard { padding: 14px 15px; }
        .lockProximityTitle { font-size: 17px; }
        .lockProximitySub { font-size: 11px; }
        .lockTaskItem { padding: 10px 12px; gap: 10px; }
        .lockTaskText { font-size: 13.5px; }

        .split {
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 6vw, 3.5rem);
          text-align: center;
          justify-items: center;
        }
        .splitReverse .splitCopy { order: 1; }
        .splitReverse .splitVisual { order: 2; }
        .splitCopy { max-width: 34rem; }

      }

      @media (max-width: 860px) {
        .beatLink { display: none; }
        .beatVisual { height: auto; min-height: 96px; }
        .beatGrid { grid-template-columns: 1fr; gap: 2.25rem; }
      }

      @media (max-width: 720px) {
        .beatVisual { height: auto; min-height: 96px; margin-top: 18px; }
        .beatTitle { min-height: 0; }
        .beatLink { display: none; }
        .threadVisual { width: 100%; max-width: 360px; margin: 0 auto; }
        .vizSphere { width: 92px; height: 92px; }
        .beatGrid { grid-template-columns: 1fr; gap: 2.25rem; }
        .beat { padding-top: 24px; }
        .momentList { text-align: left; }
        .moment { font-size: 1rem; padding: 17px 2px; }
        .finalQr { display: none; }
        .proofQuote { font-size: clamp(1.2rem, 5.8vw, 1.6rem); }
        .hideOnMobile { display: none !important; }
        .hamburger { display: flex; }

        .hero { padding: 26px 0 56px; }
        .heroTitle { font-size: clamp(2.2rem, 10.8vw, 3rem); letter-spacing: -0.035em; }
        .heroLead { font-size: 1.02rem; }
        .heroCtas { width: 100%; flex-direction: column; }
        .btnPrimary, .btnGhost { width: 100%; }

        .chapter { padding: clamp(64px, 14vw, 92px) 0; }
        .h2 { font-size: clamp(1.85rem, 8.4vw, 2.4rem); }
        .finalTitle { font-size: clamp(2.1rem, 10vw, 2.8rem); }

        .householdOrbit { width: 196px; height: 196px; }

        .footerTop { flex-direction: column; gap: 2.5rem; }
        .footerNav { gap: 2rem; }
        .footerBase { flex-direction: column; align-items: flex-start; }
        .footerCta { width: 100%; }

        .phoneMockup {
          width: 266px;
          height: 543px;
          border-radius: 36px;
          padding: 5px;
          transform: translateZ(0);
          animation: none;
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
        .phoneContent { top: 68px; bottom: 0; padding: 0 12px 58px; }
        .lockTimeDisplay { font-size: 42px; }
        .lockDateDisplay { font-size: 12px; }
        .phoneLockOverlay { padding-top: 58px; }
        .lockProximityCard { padding: 14px 15px; margin-top: 14px; }
        .lockProximityTitle { font-size: 17px; }
        .lockProximitySub { font-size: 11px; }
        .lockTaskItem { padding: 10px 12px; gap: 10px; }
        .lockTaskText { font-size: 13.5px; }
        .lockNotifIcon { width: 32px; height: 32px; }
        .phoneGreeting { font-size: 12px; }
        .phoneHomeTitle { font-size: 20px; }
        .phoneHomeSub { font-size: 12px; }
        .phoneSectionLabel { font-size: 10px; margin: 10px 0 5px; }
        .phoneGroupItem { padding: 9px 10px; border-radius: 12px; }
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
        .phoneGroupList { gap: 6px; }

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

        .phoneContent { bottom: 0; padding-bottom: 58px; }

        .phoneTabBar { left: 8px; right: 8px; padding: 5px 3px 3px; border-radius: 22px; }
        .phoneTab { font-size: 8px; gap: 2px; }
        .phoneTab svg { width: 16px; height: 16px; }
        .phoneAddBtn { width: 26px; height: 26px; }
        .phoneAddBtn svg { width: 13px; height: 13px; }
        .phoneTabAdd { margin-top: -4px; }

        .phoneHomeBar { height: 3px; }
        .phoneHomeIndicator { padding-bottom: 5px; }

        .phoneSignal { width: 14px; height: 10px; }
        .phoneWifi { width: 13px; height: 11px; }
      }

      /* ── The arrival phone, small enough to sit beside a list ─────── */

      .arrPhone { position: relative; }

      .arrShell {
        width: 300px;
        height: 612px;
        border-radius: 42px;
        padding: 6px;
        position: relative;
        background: linear-gradient(160deg, #1E2747 0%, #141E3A 28%, #0B1228 55%, #1A2547 100%);
        box-shadow:
          0 0 0 1px rgba(255, 255, 255, 0.14),
          0 0 0 2px #141E3A,
          0 0 0 4px #1E2747,
          0 30px 70px rgba(14, 23, 51, 0.28),
          0 14px 28px rgba(14, 23, 51, 0.18);
      }
      .arrShell::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 42px;
        background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%);
        pointer-events: none;
        z-index: 6;
      }

      .arrScreen {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 36px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: #FFF4E4;
      }

      /* Four skies, cross-faded, so the hour of the day carries the scroll. */
      .arrSkyStack { position: absolute; inset: 0; }
      .arrSkyLayer {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 1.05s var(--ease-soft);
      }
      .arrSkyLayer--dawn {
        background:
          radial-gradient(circle at 74% 14%, rgba(255, 236, 200, 0.9) 0 9%, transparent 34%),
          linear-gradient(180deg, #F7C68A 0%, #E9A07C 32%, #B4718B 66%, #5E4A7E 100%);
      }
      .arrSkyLayer--day {
        background:
          radial-gradient(circle at 78% 12%, rgba(255, 255, 255, 0.92) 0 8%, transparent 30%),
          linear-gradient(180deg, #9FD3F0 0%, #BFE3F3 38%, #E4F1F0 72%, #F4EFE7 100%);
        color: #14183A;
      }
      .arrSkyLayer--dusk {
        background:
          radial-gradient(circle at 24% 18%, rgba(255, 214, 170, 0.5) 0 12%, transparent 40%),
          linear-gradient(180deg, #46538C 0%, #7A5B93 34%, #C07E86 68%, #E8A77A 100%);
      }
      .arrSkyLayer--night {
        background:
          radial-gradient(circle at 76% 16%, rgba(196, 214, 255, 0.32) 0 7%, transparent 28%),
          linear-gradient(180deg, #070C1C 0%, #14213F 42%, #2E1838 78%, #3E2340 100%);
      }
      .arrPhone--dawn  .arrSkyLayer--dawn,
      .arrPhone--day   .arrSkyLayer--day,
      .arrPhone--dusk  .arrSkyLayer--dusk,
      .arrPhone--night .arrSkyLayer--night { opacity: 1; }

      /* Day is the one bright sky, so the type flips with it. */
      .arrPhone--day .arrScreen { color: #14183A; }

      .arrStatus {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 26px 0;
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.01em;
      }
      .arrStatusRight { display: flex; align-items: center; gap: 6px; }
      .arrBars, .arrBatt {
        display: block;
        background: currentColor;
        opacity: 0.85;
        border-radius: 2px;
      }
      .arrBars { width: 16px; height: 9px; clip-path: polygon(0 70%,18% 70%,18% 100%,0 100%,0 70%,27% 45%,45% 45%,45% 100%,27% 100%,27% 45%,55% 22%,73% 22%,73% 100%,55% 100%,55% 22%,82% 0,100% 0,100% 100%,82% 100%); }
      .arrBatt { width: 22px; height: 10px; border-radius: 3px; opacity: 0.7; }

      .arrClock {
        position: relative;
        text-align: center;
        margin-top: clamp(18px, 4vh, 30px);
      }
      .arrClockTime {
        font-size: 3.9rem;
        font-weight: 300;
        line-height: 1;
        letter-spacing: -0.03em;
        text-shadow: 0 2px 22px rgba(0, 0, 0, 0.16);
      }
      .arrClockDay {
        margin-top: 4px;
        font-size: 0.78rem;
        font-weight: 500;
        opacity: 0.72;
      }

      /* The card is keyed on the scene, so it performs the arrival again
         every time the scroll hands it a new one. */
      .arrCard {
        position: relative;
        margin: auto 14px 22px;
        padding: 14px 15px;
        border-radius: 21px;
        background: rgba(255, 255, 255, 0.17);
        border: 1px solid rgba(255, 255, 255, 0.26);
        backdrop-filter: blur(22px) saturate(150%);
        -webkit-backdrop-filter: blur(22px) saturate(150%);
        box-shadow: 0 18px 44px rgba(6, 10, 26, 0.3);
        overflow: hidden;
        animation: arrCardIn 0.86s var(--ease) both;
      }
      .arrPhone--day .arrCard {
        background: rgba(255, 255, 255, 0.62);
        border-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 18px 44px rgba(20, 24, 58, 0.16);
      }
      @keyframes arrCardIn {
        0%   { opacity: 0; transform: translate3d(0, 26px, 0) scale(0.96); filter: blur(6px); }
        60%  { opacity: 1; filter: blur(0); }
        100% { opacity: 1; transform: none; filter: blur(0); }
      }

      .arrRipple {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 120px;
        height: 120px;
        margin: -60px 0 0 -60px;
        border-radius: 50%;
        border: 1px solid rgba(212, 168, 67, 0.8);
        pointer-events: none;
        animation: arrRippleOut 1.5s var(--ease) 0.06s both;
      }
      @keyframes arrRippleOut {
        0%   { opacity: 0.75; transform: scale(0.2); }
        100% { opacity: 0; transform: scale(4.2); }
      }

      .arrCardHead { position: relative; display: flex; gap: 11px; align-items: flex-start; }
      .arrCardIcon :global(img) { border-radius: 7px; display: block; }
      .arrCardLabel {
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        opacity: 0.62;
      }
      .arrCardTitle { margin-top: 3px; font-size: 0.97rem; font-weight: 600; letter-spacing: -0.01em; }
      .arrCardSub { margin-top: 1px; font-size: 0.8rem; opacity: 0.72; }

      .arrCardItems { list-style: none; margin: 11px 0 0; padding: 10px 0 0; border-top: 1px solid rgba(255, 255, 255, 0.2); }
      .arrPhone--day .arrCardItems { border-top-color: rgba(20, 24, 58, 0.12); }
      .arrCardItems li {
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 4px 0;
        font-size: 0.86rem;
        animation: arrRowIn 0.5s var(--ease) both;
      }
      .arrCardDot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--gold-lit);
        box-shadow: 0 0 10px rgba(212, 168, 67, 0.7);
        flex: none;
      }
      @keyframes arrRowIn {
        from { opacity: 0; transform: translate3d(0, 8px, 0); }
        to   { opacity: 1; transform: none; }
      }

      .arrCardSheen {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(105deg, transparent 30%, rgba(255, 244, 228, 0.36) 50%, transparent 70%);
        transform: translateX(-100%);
        animation: arrSheen 1.7s var(--ease) 0.5s both;
      }
      @keyframes arrSheen {
        to { transform: translateX(100%); }
      }

      /* ── Every day: the list scrolls, the phone holds ─────────── */

      .everyday { position: relative; overflow: clip; }
      .everydayTint {
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background:
          radial-gradient(760px 620px at 78% 18%, rgba(240, 130, 70, 0.16), transparent 68%),
          radial-gradient(620px 520px at 12% 82%, rgba(212, 168, 67, 0.12), transparent 70%);
        transition: filter 1.1s var(--ease-soft), opacity 1.1s var(--ease-soft);
      }
      .everyday--dawn  .everydayTint { filter: none; opacity: 1; }
      .everyday--day   .everydayTint { filter: hue-rotate(38deg) saturate(0.72); opacity: 0.78; }
      .everyday--dusk  .everydayTint { filter: hue-rotate(-34deg) saturate(1.1); opacity: 0.94; }
      .everyday--night .everydayTint { filter: hue-rotate(-72deg) saturate(1.25); opacity: 1; }

      /* No align-items here on purpose: the phone column has to stretch to
         the full height of the row, or position: sticky has nothing to
         travel inside and the phone scrolls away with the first moment. */
      .everydayShell {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 300px;
        gap: clamp(2rem, 6vw, 5rem);
      }
      .everydayPhoneCol { position: relative; }
      .everydayCopy { max-width: 34rem; }
      /* Runway under the last moment, so the sticky phone stays pinned while
         the fifth row is still crossing the middle of the screen. */
      .everydayList {
        margin-top: clamp(2.2rem, 4.5vw, 3.4rem);
        padding-bottom: clamp(90px, 20vh, 220px);
      }

      .everydayList { list-style: none; padding-left: 0; padding-right: 0; padding-top: 0; }
      .everydayRow {
        position: relative;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 18px;
        min-height: 25vh;
        padding: clamp(22px, 3.4vh, 38px) 0 clamp(22px, 3.4vh, 38px) 22px;
        border-bottom: 1px solid var(--ink-hair-soft);
        opacity: 0.34;
        filter: blur(0.4px);
        transform: translate3d(-6px, 0, 0);
        transition: opacity 0.65s var(--ease), transform 0.65s var(--ease), filter 0.65s var(--ease);
      }
      .everydayRow:first-child { border-top: 1px solid var(--ink-hair-soft); }
      .everydayRowOn { opacity: 1; filter: none; transform: none; }

      .everydayRule {
        position: absolute;
        left: 0;
        top: 12%;
        bottom: 12%;
        width: 2px;
        border-radius: 2px;
        background: linear-gradient(180deg, rgba(212, 168, 67, 0), var(--gold), rgba(212, 168, 67, 0));
        transform: scaleY(0);
        transform-origin: 50% 50%;
        transition: transform 0.6s var(--ease);
      }
      .everydayRowOn .everydayRule { transform: scaleY(1); }

      .everydayLine {
        font-size: clamp(1.05rem, 1.75vw, 1.42rem);
        line-height: 1.34;
        letter-spacing: -0.014em;
        color: var(--ink);
        text-wrap: balance;
      }
      .everydayHour {
        font-size: 0.74rem;
        font-weight: 500;
        letter-spacing: 0.16em;
        font-variant-numeric: tabular-nums;
        color: var(--ink-faint);
        transition: color 0.5s var(--ease);
      }
      .everydayRowOn .everydayHour { color: var(--gold); }

      .everydayPhoneStick {
        position: sticky;
        top: max(90px, calc(50vh - 306px));
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
      }
      .everydayDots { display: flex; gap: 7px; }
      .everydayDots span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ink-hair);
        transition: background 0.5s var(--ease), transform 0.5s var(--ease);
      }
      .everydayDots .everydayDotOn { background: var(--gold); transform: scale(1.3); }

      /* The inline arrival, for screens with no room for a phone. */
      .momentMini { display: none; }

      /* ── Quiet by design, said by the Lock Screen ───────────── */

      .quietPhone { position: relative; }
      .quietHalo {
        position: absolute;
        inset: -14% -18%;
        z-index: -1;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(212, 168, 67, 0.18), transparent 66%);
        opacity: 0;
        transition: opacity 1.2s var(--ease);
      }
      .quietPhoneOn .quietHalo { opacity: 1; }

      .arrScreenQuiet {
        background:
          radial-gradient(circle at 74% 14%, rgba(196, 214, 255, 0.3) 0 7%, transparent 30%),
          linear-gradient(180deg, #070C1C 0%, #14213F 44%, #2E1838 80%, #3E2340 100%);
      }
      .arrScreenQuiet .arrSky { position: absolute; inset: 0; }

      .quietLock {
        position: relative;
        width: 62px;
        height: 62px;
        margin: clamp(26px, 6vh, 44px) auto 0;
        color: var(--gold-lit);
        opacity: 0;
        transform: scale(0.82);
        transition: opacity 0.9s var(--ease) 0.1s, transform 0.9s var(--ease) 0.1s;
      }
      .quietLock svg { width: 100%; height: 100%; }
      .quietPhoneOn .quietLock { opacity: 1; transform: none; }

      .quietCard {
        position: relative;
        margin: auto 14px 26px;
        padding: 16px 17px;
        border-radius: 21px;
        background: rgba(255, 244, 228, 0.09);
        border: 1px solid rgba(255, 244, 228, 0.18);
        backdrop-filter: blur(22px);
        -webkit-backdrop-filter: blur(22px);
        opacity: 0;
        transform: translate3d(0, 20px, 0);
        transition: opacity 0.8s var(--ease) 0.18s, transform 0.8s var(--ease) 0.18s;
      }
      .quietPhoneOn .quietCard { opacity: 1; transform: none; }

      .quietCardLabel {
        font-size: 0.62rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: rgba(255, 244, 228, 0.55);
      }
      .quietPledges { list-style: none; margin: 12px 0 0; padding: 0; }
      .quietPledges li {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 9px 0;
        font-size: 0.93rem;
        color: var(--on-night);
        border-top: 1px solid rgba(255, 244, 228, 0.1);
        opacity: 0;
      }
      .quietPledges li:first-child { border-top: 0; }
      .quietPhoneOn .quietPledges li { animation: quietRowIn 0.62s var(--ease) both; }
      @keyframes quietRowIn {
        from { opacity: 0; transform: translate3d(-10px, 0, 0); }
        to   { opacity: 1; transform: none; }
      }
      .quietTick {
        flex: none;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--gold);
        color: #14183A;
      }
      .quietTick svg { width: 13px; height: 13px; }

      /* ── Household: the list crosses itself off ─────────────── */

      .threadLive {
        margin-left: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 9px;
        border-radius: 999px;
        font-size: 0.66rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--gold);
        background: rgba(212, 168, 67, 0.12);
        opacity: 0;
        transform: translate3d(0, -4px, 0);
        transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);
      }
      .threadLiveOn { opacity: 1; transform: none; }
      .threadLiveDot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--gold);
        animation: threadPulse 1.9s var(--ease-soft) infinite;
      }
      @keyframes threadPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%      { opacity: 0.35; transform: scale(0.72); }
      }

      /* Replaces the flat line-through so the strike can be drawn. */
      .threadItems li { text-decoration: none !important; }
      .threadItemText { position: relative; transition: color 0.5s var(--ease); }
      .threadItemText::after {
        content: "";
        position: absolute;
        left: -2px;
        right: -2px;
        top: 52%;
        height: 1.5px;
        border-radius: 2px;
        background: rgba(20, 24, 58, 0.3);
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: transform 0.5s var(--ease);
      }
      .threadDone .threadItemText { color: var(--ink-faint); }
      .threadDone .threadItemText::after { transform: scaleX(1); }
      .threadCheck svg { opacity: 0; transform: scale(0.5); transition: opacity 0.35s var(--ease), transform 0.35s var(--ease); }
      .threadDone .threadCheck svg { opacity: 1; transform: none; }

      .threadNotif {
        opacity: 0;
        transform: translate3d(0, 16px, 0) scale(0.97);
        transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
      }
      .threadNotifIn { opacity: 1; transform: none; }

      /* ── FAQ ────────────────────── */

      /* The chevron already turns; open just gives it Near's colour. */
      .faqQ::after { transition: transform 0.45s var(--ease), border-color 0.45s var(--ease); }
      .faqItem[open] .faqQ::after { border-right-color: var(--gold); border-bottom-color: var(--gold); }
      .faqQ:hover::after { border-right-color: var(--ink); border-bottom-color: var(--ink); }

      /* ── The close: the arrival, one last time ─────────────── */

      .finalArrival {
        position: relative;
        width: fit-content;
        margin: 0 auto clamp(26px, 4vw, 40px);
        opacity: 0;
        transform: translate3d(0, 18px, 0) scale(0.97);
        transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
      }
      .finalArrivalIn { opacity: 1; transform: none; }
      .finalArrivalCard {
        position: relative;
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 11px 17px 11px 13px;
        border-radius: 17px;
        background: rgba(255, 244, 228, 0.08);
        border: 1px solid var(--on-night-hair);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        text-align: left;
      }
      .finalArrivalIcon :global(img) { border-radius: 6px; display: block; }
      .finalArrivalLabel {
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--on-night-faint);
      }
      .finalArrivalTitle { margin-top: 2px; font-size: 0.93rem; font-weight: 500; color: var(--on-night); }
      .finalArrivalRing {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 90px;
        height: 90px;
        margin: -45px 0 0 -45px;
        border-radius: 50%;
        border: 1px solid rgba(212, 168, 67, 0.6);
        opacity: 0;
      }
      .finalArrivalIn .finalArrivalRing { animation: arrRippleOut 1.8s var(--ease) 0.2s both; }

      /* ── Bottom half, narrow ──────────────────── */

      @media (max-width: 1080px) {
        .everydayShell { grid-template-columns: minmax(0, 1fr) 260px; }
        .arrShell { width: 262px; height: 534px; border-radius: 38px; }
        .arrScreen { border-radius: 32px; }
        .arrClockTime { font-size: 3.2rem; }
        .everydayPhoneStick { top: max(88px, calc(50vh - 267px)); }
      }

      @media (max-width: 900px) {
        .everydayShell { grid-template-columns: minmax(0, 1fr); }
        .everydayPhoneCol { display: none; }
        .everydayRow {
          min-height: 0;
          grid-template-columns: auto minmax(0, 1fr);
          padding-left: 18px;
          opacity: 1;
          filter: none;
          transform: none;
        }
        .everydayHour { display: none; }
        .everydayList { padding-bottom: 0; }
        .everydayRule { top: 18%; bottom: 18%; }

        /* Collapsed to nothing until its row is live, so an inactive row
           does not leave a card-shaped hole behind. */
        .momentMini {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 0;
          padding: 0 13px;
          max-height: 0;
          overflow: hidden;
          border-radius: 15px;
          background: var(--paper-raised);
          border: 1px solid transparent;
          box-shadow: 0 10px 26px rgba(20, 24, 58, 0);
          opacity: 0;
          transform: translate3d(0, 8px, 0);
          transition:
            max-height 0.55s var(--ease),
            margin-top 0.55s var(--ease),
            padding 0.55s var(--ease),
            opacity 0.5s var(--ease),
            transform 0.5s var(--ease),
            box-shadow 0.5s var(--ease),
            border-color 0.5s var(--ease);
        }
        .everydayRowOn .momentMini {
          opacity: 1;
          transform: none;
          max-height: 120px;
          margin-top: 14px;
          padding: 11px 13px;
          border-color: var(--ink-hair-soft);
          box-shadow: 0 10px 26px rgba(20, 24, 58, 0.06);
        }
        .momentMiniIcon :global(img) { border-radius: 6px; display: block; }
        .momentMiniText { display: flex; flex-direction: column; }
        .momentMiniTitle { font-size: 0.87rem; font-weight: 500; color: var(--ink); }
        .momentMiniSub { margin-top: 1px; font-size: 0.79rem; color: var(--ink-faint); }

        .quietPhone { transform: scale(0.92); transform-origin: 50% 0; }
      }

      @media (max-width: 720px) {
        .arrShell { width: 244px; height: 498px; }
        .quietPhone { transform: scale(1); }
        .everydayRow { gap: 14px; }
      }

      /* ── Reduced motion ────────────────────────────────────── */

      @media (prefers-reduced-motion: reduce) {
        .reveal,
        .reveal [data-stagger] { transition-duration: 0.01ms !important; opacity: 1 !important; transform: none !important; }
        .householdNotif,
        .householdRing,
        .micHalo,
        .heroDawn,
        .vizWave i,
        .vizRing,
        .vizCore,
        .threadSpark,
        .skyWash,
        .finalSky,
        .arrivalRipple span,
        .momentList::after { animation: none !important; }
        .arrivalRipple span, .momentList::after { opacity: 0 !important; }
        .lockTaskItem, .hasArrived .lockTaskItem { opacity: 1 !important; animation: none !important; }
        .lockProximityCard, .hasArrived .lockProximityCard {
          opacity: 1 !important; transform: none !important; animation: none !important;
        }
        .reveal .moment, .reveal .moment .placeGlyph { transform: none !important; opacity: 1 !important; }
        .vizWave i { transform: scaleY(0.7); opacity: 0.85; }
        .threadSpark { transform: translateY(30px); opacity: 1; }
        .lockWaterShimmer,
        .lockCloudDrift,
        .lockProximityGlow,
        .lockProximityShimmer,
        .lockTaskItem,
        .radarShimmer { animation: none !important; }
        .lockProximityCard { animation: none !important; opacity: 1 !important; }

        /* Bottom half: every sequenced beat lands in its finished state. */
        .arrCard,
        .arrCardItems li,
        .arrCardSheen,
        .arrRipple,
        .finalArrivalRing,
        .threadLiveDot,
        .quietPledges li,
        .quietPhoneOn .quietPledges li { animation: none !important; }
        .arrRipple,
        .arrCardSheen,
        .finalArrivalRing { opacity: 0 !important; }
        .arrCard,
        .arrCardItems li,
        .quietPledges li,
        .quietCard,
        .quietLock,
        .threadNotif,
        .finalArrival,
        .everydayRow {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
        }
        .momentMini {
          opacity: 1 !important;
          transform: none !important;
          max-height: 120px !important;
          margin-top: 14px !important;
          padding: 11px 13px !important;
          border-color: var(--ink-hair-soft) !important;
        }
        .arrSkyLayer,
        .everydayTint,
        .everydayRule,
        .threadItemText::after,
        .threadLive { transition-duration: 0.01ms !important; }
      }
    `}</style>
  )
}
