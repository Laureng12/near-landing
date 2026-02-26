"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

const APP_STORE_URL = "#"

export default function Page() {
  return (
    <main className="page">
      <TopNav />

      <Hero />

      <PhoneShowcase />

      <AppleEventSections />

      <FinalCTA />

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

        <h1 className="heroTitle">
          Your list appears when you arrive.
        </h1>

        <p className="heroSub">
          Add tasks to places. When you drive by or someone in your home is there, Near reminds you.
          So you never forget anything ever again.
        </p>

        <div className="heroCtas">
          <a className="primaryBtn" href={APP_STORE_URL}>
            Download Free
          </a>
          <a className="secondaryBtn" href="#how">
            See how it works
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    el.addEventListener("mousemove", handler)
    return () => el.removeEventListener("mousemove", handler)
  }, [])

  return (
    <section className="showcase" id="how">
      <div className="showcaseBg" aria-hidden="true" />
      <div className="showcaseOrbs" aria-hidden="true">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
      <div className="showcaseInner" ref={containerRef}>

        {/* LEFT - SUNRISE */}
        <div className="phone phoneLeft">
          <PhoneDevice theme="sunrise" tiltX={(mouse.x - 0.5) * 6} tiltY={(mouse.y - 0.5) * 4}>
            <SunrisePlacesScreen />
          </PhoneDevice>
        </div>

        {/* CENTER - DAY (PRIMARY) */}
        <div className="phone phoneCenter">
          <PhoneDevice theme="day" tiltX={(mouse.x - 0.5) * 8} tiltY={(mouse.y - 0.5) * 6} main>
            <DayPlaceViewScreen />
          </PhoneDevice>
        </div>

        {/* RIGHT - DUSK */}
        <div className="phone phoneRight">
          <PhoneDevice theme="dusk" tiltX={(mouse.x - 0.5) * 6} tiltY={(mouse.y - 0.5) * 4}>
            <DuskHouseholdScreen />
          </PhoneDevice>
        </div>

      </div>

      <div className="showcaseCopy" id="features">
        <h2 className="sectionTitle">It runs in the background. Quietly.</h2>
        <p className="sectionSub">
          You do not schedule reminders. You do not open the app. Location becomes action.
        </p>

        <div className="featureGrid">
          <FeatureCard
            title="Arrive. It appears."
            desc="Pull in and your list is waiting. Like it should have been there all along."
            tag="Automatic"
          />
          <FeatureCard
            title="Drive by. It reminds you."
            desc="Even if you were not planning to stop. Near catches the near-misses."
            tag="Smart"
          />
          <FeatureCard
            title="Household sync, instantly."
            desc="If someone in your home is there, they see it. Shared calm. Shared memory."
            tag="Shared"
          />
        </div>
      </div>
    </section>
  )
}

/** Realistic phone device wrapper with notch, bezel, reflections, and tilt */
function PhoneDevice(props: {
  theme: "sunrise" | "day" | "dusk"
  tiltX: number
  tiltY: number
  main?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`phoneDevice ${props.main ? "phoneDeviceMain" : ""}`}
      style={{
        transform: `perspective(1200px) rotateY(${props.tiltX}deg) rotateX(${-props.tiltY}deg)`,
      }}
    >
      {/* Ambient glow behind device */}
      <div className={`deviceGlow deviceGlow-${props.theme}`} aria-hidden="true" />

      {/* Device shell */}
      <div className="deviceShell">
        {/* Side button details */}
        <div className="deviceBtnRight" aria-hidden="true" />
        <div className="deviceBtnLeft1" aria-hidden="true" />
        <div className="deviceBtnLeft2" aria-hidden="true" />

        {/* Edge highlight that follows tilt */}
        <div
          className="deviceEdgeHighlight"
          style={{
            background: `linear-gradient(${135 + props.tiltX * 8}deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Inner bezel */}
        <div className="deviceBezel">
          {/* Notch / Dynamic Island */}
          <div className="dynamicIsland" aria-hidden="true">
            <div className="islandCamera" />
          </div>

          {/* Screen content */}
          <div className="deviceScreen">
            {props.children}
          </div>

          {/* Screen reflection overlay */}
          <div
            className="screenReflection"
            style={{
              background: `linear-gradient(${120 + props.tiltX * 15}deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)`,
            }}
            aria-hidden="true"
          />

          {/* Home indicator */}
          <div className="homeIndicator" aria-hidden="true" />
        </div>
      </div>

      {/* Shimmer sweep */}
      <div className="deviceShimmer" aria-hidden="true" />
    </div>
  )
}

function FeatureCard(props: { title: string; desc: string; tag: string }) {
  return (
    <div className="featureCard">
      <div className="featureTag">{props.tag}</div>
      <div className="featureTitle">{props.title}</div>
      <div className="featureDesc">{props.desc}</div>
    </div>
  )
}

/* -------------------------- APPLE EVENT SECTIONS ------------------------ */

function AppleEventSections() {
  return (
    <>
      <section className="eventSection" id="household">
        <div className="eventInner">
          <div className="eventKicker">Household</div>
          <h3 className="eventHeadline">One list. Everyone benefits.</h3>
          <p className="eventBody">
            Near is built for real life. If Brian swings by Publix, the list is there.
            If Reese stops at Target, the reminder still shows up. No forwarding. No group chat.
          </p>

          <div className="eventMetrics">
            <div className="metric">
              <div className="metricNum">0</div>
              <div className="metricLabel">scheduled reminders</div>
            </div>
            <div className="metric">
              <div className="metricNum">0</div>
              <div className="metricLabel">extra taps to remember</div>
            </div>
            <div className="metric">
              <div className="metricNum">∞</div>
              <div className="metricLabel">times you feel like a genius</div>
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
            <div className="splitCard">
              <div className="splitTitle">Designed for iPhone</div>
              <div className="splitText">
                Polished, native-feeling, and calm. The point is less thinking, not more features.
              </div>
            </div>
            <div className="splitCard">
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
/* ========================= SCREEN COMPONENTS ========================== */

/**
 * Near — Places List (SUNRISE) — ALIVE
 * Staggered row entrances, breathing nearby indicator, typing search cursor,
 * periodic row highlight sweep. Pure Apple keynote energy.
 */
function SunrisePlacesScreen() {
  const [mounted, setMounted] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchPlaceholder = "Target";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    let dir = 1;
    let pause = 0;
    const id = setInterval(() => {
      if (pause > 0) { pause--; return; }
      if (dir === 1) {
        i++;
        setSearchText(searchPlaceholder.slice(0, i));
        if (i >= searchPlaceholder.length) { dir = -1; pause = 18; }
      } else {
        i--;
        setSearchText(searchPlaceholder.slice(0, i));
        if (i <= 0) { dir = 1; pause = 12; }
      }
    }, 120);
    return () => clearInterval(id);
  }, [mounted]);

  const PLACES = useMemo(() => [
    { name: "Target", detail: "Pick up soap", nearby: true },
    { name: "Dad's house", detail: "Garage remote", nearby: false },
    { name: "Grocery store", detail: "Soap, paper towels", nearby: false },
    { name: "Pet shop", detail: "Treats, kibble", nearby: false },
    { name: "UPS Store", detail: "Amazon return", nearby: false },
  ], []);

  return (
    <div className="ps" aria-label="Near Places screenshot (Sunrise)">
      <div className="ps-ambient" aria-hidden="true" />
      <div className="ps-noise" aria-hidden="true" />
      <div className="ps-statusbar">
        <div className="ps-sb-left">9:41</div>
        <div className="ps-sb-right">
          <span className="ps-sb-signal" aria-hidden="true" />
          <span className="ps-sb-wifi" aria-hidden="true" />
          <span className="ps-sb-battery" aria-hidden="true"><span className="ps-sb-battery-fill" /></span>
        </div>
      </div>
      <div className="ps-content">
        <div className={`ps-navbar${mounted ? " ps-in" : ""}`}>
          <button className="ps-icon-btn ps-glass ps-glass--btn" aria-label="Add place"><span className="ps-sf">{'\uFF0B'}</span></button>
          <div className="ps-brand" aria-label="Near">
            <NearLogoMarkSunrise size={26} />
            <span className="ps-brand-word">near</span>
          </div>
          <button className="ps-icon-btn ps-glass ps-glass--btn" aria-label="Search"><span className="ps-sf">{'\u2315'}</span></button>
        </div>
        <div className={`ps-titleRow${mounted ? " ps-in" : ""}`} style={{ transitionDelay: "80ms" }}>
          <h1 className="ps-title">Places</h1>
        </div>
        <div className={`ps-search ps-glass ps-glass--hero${mounted ? " ps-in" : ""}`} style={{ transitionDelay: "140ms" }} role="search">
          <span className="ps-glassShimmer" aria-hidden="true" />
          <span className="ps-search-icon" aria-hidden="true">{'\u2315'}</span>
          <span className="ps-search-text">
            {searchText || "Search"}
            <span className="ps-cursor" />
          </span>
        </div>
        <div className="ps-list" role="list">
          {PLACES.map((p, i) => (
            <SunrisePlaceRow key={p.name} name={p.name} detail={p.detail} nearby={p.nearby} show={mounted} idx={i} />
          ))}
        </div>
        <div className={`ps-tabbar ps-glass ps-glass--hero${mounted ? " ps-in" : ""}`} style={{ transitionDelay: "600ms" }} role="tablist">
          <span className="ps-glassShimmer" aria-hidden="true" />
          <SunriseTab label="Places" active />
          <SunriseTab label="Tasks" />
          <SunriseTab label="Household" />
        </div>
      </div>
      <style>{sunriseStyles}</style>
    </div>
  );
}

function NearLogoMarkSunrise({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="ps-near-mark" role="img" aria-label="Near mark">
      <defs>
        <radialGradient id="psNearField" cx="50%" cy="52%" r="58%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="18%" stopColor="#FFF4BE" />
          <stop offset="40%" stopColor="#FF9ED3" />
          <stop offset="68%" stopColor="#6EA8FF" />
          <stop offset="100%" stopColor="#120C30" />
        </radialGradient>
        <radialGradient id="psNearVignette" cx="50%" cy="50%" r="70%">
          <stop offset="55%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.24)" />
        </radialGradient>
        <clipPath id="psNearSquircle">
          <path d="M108 0h296c60 0 108 48 108 108v296c0 60-48 108-108 108H108C48 512 0 464 0 404V108C0 48 48 0 108 0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#psNearSquircle)">
        <rect width="512" height="512" fill="#120C30" />
        <circle className="ps-near-pulse" cx="256" cy="256" r="178" fill="url(#psNearField)" />
        <rect width="512" height="512" fill="url(#psNearVignette)" />
      </g>
    </svg>
  );
}

function SunrisePlaceRow({ name, detail, nearby, show, idx }: { name: string; detail: string; nearby?: boolean; show: boolean; idx: number }) {
  return (
    <div className={`ps-row ps-glass ps-glass--card ps-stagger${show ? " ps-in" : ""}`} style={{ transitionDelay: `${200 + idx * 70}ms` }} role="listitem">
      <div className={`ps-pin${nearby ? " ps-pin-nearby" : ""}`} aria-hidden="true">
        {nearby && <span className="ps-pin-ring" />}
      </div>
      <div className="ps-rowBody">
        <div className="ps-rowTop">
          <div className="ps-rowTitle">{name}</div>
          {nearby ? <div className="ps-pill">Nearby</div> : null}
        </div>
        <div className="ps-rowSub">{detail}</div>
      </div>
      <div className="ps-chev" aria-hidden="true">{'›'}</div>
    </div>
  );
}

function SunriseTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`ps-tab${active ? " ps-tab-active" : ""}`} role="tab" aria-selected={!!active}>
      {label}
      {active ? <div className="ps-tabGlow" aria-hidden="true" /> : null}
    </div>
  );
}

const sunriseStyles = `
.ps{
  width: 100%; height: 100%; position: relative; overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
  color: rgba(255,255,255,0.88);
  background: radial-gradient(ellipse 120% 90% at 50% 0%, #24114F 0%, #140B33 45%, #07051A 100%);
}
.ps-ambient{
  position: absolute; inset: -18%; filter: blur(26px); pointer-events: none;
  background:
    radial-gradient(circle at 52% 10%, rgba(255,244,190,0.40) 0%, rgba(255,244,190,0.18) 28%, transparent 56%),
    radial-gradient(circle at 56% 24%, rgba(255,158,211,0.32) 0%, rgba(255,110,200,0.16) 38%, transparent 64%),
    radial-gradient(circle at 50% 72%, rgba(18,12,48,0.72) 0%, rgba(18,12,48,0.44) 40%, transparent 74%);
  animation: psAmbientDrift 14s cubic-bezier(0.4,0,0.2,1) infinite alternate;
}
@keyframes psAmbientDrift{
  0%{ transform: translate3d(0,0,0) scale(1); }
  100%{ transform: translate3d(6px,-12px,0) scale(1.04); }
}
.ps-noise{
  position: absolute; inset: 0; opacity: 0.035; mix-blend-mode: overlay; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.38'/%3E%3C/svg%3E");
}
.ps-content{
  position: absolute; inset: 0; padding: 22px; display: flex; flex-direction: column; gap: 0; z-index: 2;
}
.ps-stagger, .ps-navbar, .ps-titleRow, .ps-search, .ps-tabbar{
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.6s cubic-bezier(0.2,0.8,0.2,1), transform 0.6s cubic-bezier(0.2,0.8,0.2,1);
}
.ps-in{ opacity: 1; transform: translateY(0); }
.ps-statusbar{
  position: absolute; top: 16px; left: 24px; right: 24px;
  display: flex; align-items: center; justify-content: space-between; z-index: 6;
  color: rgba(255,255,255,0.86); font-weight: 600; font-size: 15px;
}
.ps-sb-right{ display: flex; align-items: center; gap: 6px; opacity: 0.82; }
.ps-sb-signal, .ps-sb-wifi{ width: 16px; height: 10px; border-radius: 2px; background: rgba(255,255,255,0.34); }
.ps-sb-battery{ width: 25px; height: 11px; border-radius: 3px; border: 1.5px solid rgba(255,255,255,0.36); position: relative; }
.ps-sb-battery-fill{ position: absolute; inset: 2px 5px 2px 2px; border-radius: 1.5px; background: rgba(255,255,255,0.52); }
.ps-glass{
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 12px 36px rgba(0,0,0,0.14), inset 0 0.5px 0 rgba(255,255,255,0.08);
  backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
  position: relative; overflow: hidden;
}
.ps-glass--btn{ background: rgba(255,255,255,0.05); }
.ps-glass--card{
  background: rgba(255,255,255,0.045); border-color: rgba(255,255,255,0.08);
  backdrop-filter: blur(14px) saturate(135%); -webkit-backdrop-filter: blur(14px) saturate(135%);
  box-shadow: 0 8px 28px rgba(0,0,0,0.12), inset 0 0.5px 0 rgba(255,255,255,0.06);
}
.ps-glass--hero{ background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.11); }
.ps-glassShimmer{
  position: absolute; inset: -35%;
  background: linear-gradient(120deg, rgba(255,255,255,0) 47%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 55%);
  transform: translateX(-46%) rotate(10deg); opacity: 0.10;
  animation: psShimmer 8.6s cubic-bezier(0.2,0.8,0.2,1) infinite;
  pointer-events: none; mix-blend-mode: screen;
}
@keyframes psShimmer{
  0%{ transform: translateX(-50%) rotate(10deg); opacity: 0.06; }
  45%{ opacity: 0.12; }
  100%{ transform: translateX(50%) rotate(10deg); opacity: 0.06; }
}
.ps-navbar{ margin-top: 40px; display: flex; align-items: center; justify-content: space-between; }
.ps-icon-btn{
  width: 44px; height: 44px; border-radius: 999px; display: grid; place-items: center;
  color: rgba(255,255,255,0.82); font-size: 18px; font-weight: 500; border: none; cursor: default;
}
.ps-sf{ font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui; transform: translateY(-1px); opacity: 0.88; }
.ps-brand{ display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.88); }
.ps-brand-word{ font-size: 22px; font-weight: 700; letter-spacing: -0.025em; transform: translateY(1px); }
.ps-titleRow{ margin-top: 20px; }
.ps-title{ margin: 0; font-size: 42px; line-height: 1.02; letter-spacing: -0.04em; font-weight: 780; color: rgba(255,255,255,0.95); }
.ps-search{
  margin-top: 18px; height: 52px; border-radius: 16px;
  display: flex; align-items: center; gap: 8px; padding: 0 16px;
}
.ps-search-icon{ opacity: 0.36; font-size: 16px; font-weight: 500; }
.ps-search-text{
  color: rgba(255,255,255,0.50); font-weight: 500; font-size: 16px; letter-spacing: -0.005em;
  display: flex; align-items: center;
}
.ps-cursor{
  display: inline-block; width: 2px; height: 18px; margin-left: 1px;
  background: rgba(255,158,211,0.8); border-radius: 1px;
  animation: psCursorBlink 1.1s step-end infinite;
}
@keyframes psCursorBlink{
  0%,100%{ opacity: 1; }
  50%{ opacity: 0; }
}
.ps-list{ display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
.ps-row{
  border-radius: 20px; padding: 14px 16px;
  display: flex; align-items: center; gap: 12px;
  transition: background 0.4s ease;
}
.ps-pin{
  width: 12px; height: 12px; border-radius: 999px; flex-shrink: 0;
  background: rgba(255,242,194,0.72);
  box-shadow: 0 0 0 4px rgba(255,242,194,0.06);
  position: relative;
}
.ps-pin-nearby{
  background: rgba(255,158,211,0.85);
  box-shadow: 0 0 0 5px rgba(255,158,211,0.08);
  animation: psNearbyBreath 3.9s cubic-bezier(0.2,0.8,0.2,1) infinite;
}
.ps-pin-ring{
  position: absolute; inset: -8px;
  border: 2px solid rgba(255,158,211,0.35);
  border-radius: 50%;
  animation: psPinRing 3s cubic-bezier(0.2,0.8,0.2,1) infinite;
}
@keyframes psPinRing{
  0%{ transform: scale(0.5); opacity: 0.8; }
  100%{ transform: scale(1.6); opacity: 0; }
}
@keyframes psNearbyBreath{
  0%{ transform: scale(1); box-shadow: 0 0 0 5px rgba(255,158,211,0.08); }
  50%{ transform: scale(1.08); box-shadow: 0 0 0 8px rgba(255,158,211,0.12); }
  100%{ transform: scale(1); box-shadow: 0 0 0 5px rgba(255,158,211,0.08); }
}
.ps-rowBody{ flex: 1; min-width: 0; }
.ps-rowTop{ display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.ps-rowTitle{ font-size: 19px; font-weight: 650; letter-spacing: -0.02em; color: rgba(255,255,255,0.92); }
.ps-rowSub{ margin-top: 3px; font-size: 14px; font-weight: 480; letter-spacing: -0.005em; color: rgba(255,255,255,0.44); }
.ps-chev{ font-size: 22px; color: rgba(255,255,255,0.22); font-weight: 300; }
.ps-pill{
  font-size: 12px; font-weight: 620; letter-spacing: -0.01em;
  padding: 5px 10px; border-radius: 999px; white-space: nowrap;
  color: rgba(255,255,255,0.88);
  background: linear-gradient(90deg, rgba(255,244,190,0.10), rgba(255,158,211,0.12));
  border: 1px solid rgba(255,210,220,0.16);
  box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.10);
  animation: psPillGlow 3s ease-in-out infinite;
}
@keyframes psPillGlow{
  0%, 100%{ box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.10), 0 0 8px rgba(255,158,211,0); }
  50%{ box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.14), 0 0 14px rgba(255,158,211,0.15); }
}
.ps-tabbar{
  margin-top: auto; height: 64px; border-radius: 22px;
  display: flex; align-items: center; justify-content: space-between; padding: 8px; gap: 6px;
}
.ps-tab{
  flex: 1; height: 100%; border-radius: 16px; display: grid; place-items: center;
  font-size: 14px; font-weight: 620; letter-spacing: -0.01em;
  color: rgba(255,255,255,0.40); position: relative;
}
.ps-tab-active{
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.88);
  box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.08);
}
.ps-tabGlow{
  position: absolute; bottom: -6px; left: 22%; right: 22%; height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 50% 50%, rgba(255,158,211,0.18), rgba(255,244,190,0.12), transparent 72%);
  filter: blur(6px); opacity: 0.60; pointer-events: none;
}
.ps-near-mark{ border-radius: 6px; overflow: hidden; }
.ps-near-pulse{
  transform-origin: 256px 256px;
  animation: psMarkPulse 3.8s cubic-bezier(0.2,0.8,0.2,1) infinite;
}
@keyframes psMarkPulse{
  0%{ transform: scale(1); opacity: 0.96; }
  50%{ transform: scale(1.03); opacity: 1; }
  100%{ transform: scale(1); opacity: 0.96; }
}
@media (prefers-reduced-motion: reduce){
  .ps-glassShimmer, .ps-pin-nearby, .ps-near-pulse, .ps-pin-ring, .ps-cursor, .ps-ambient{ animation: none !important; }
  .ps-stagger, .ps-navbar, .ps-titleRow, .ps-search, .ps-tabbar{ opacity: 1; transform: none; transition: none; }
}
`;


/**
 * Near — Place View Screen (DAY) — ALIVE
 * Animated arrival sequence: card slides in, tasks check off one-by-one,
 * pill pulses, progress ring fills. Apple keynote energy.
 */
function DayPlaceViewScreen() {
  const [mounted, setMounted] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [checkPhase, setCheckPhase] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let timeout: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setCheckPhase(1);
      const items = [0, 1, 2];
      items.forEach((item, i) => {
        setTimeout(() => {
          setCheckedItems((prev) => new Set(prev).add(item));
        }, 800 + i * 600);
      });
      timeout = setTimeout(() => {
        setCheckPhase(2);
        timeout = setTimeout(() => {
          setCheckPhase(3);
          setCheckedItems(new Set());
          timeout = setTimeout(() => {
            setCheckPhase(0);
            cycle();
          }, 2000);
        }, 3000);
      }, 800 + 3 * 600);
    };
    timeout = setTimeout(cycle, 2200);
    return () => clearTimeout(timeout);
  }, [mounted]);

  const remaining = 3 - checkedItems.size;
  const TASKS = useMemo(() => [
    { title: "Paper towels", detail: "Bounty, 6-pack" },
    { title: "Dish soap", detail: "Dawn Platinum" },
    { title: "Almond milk", detail: "Unsweetened Vanilla" },
  ], []);

  return (
    <div className="pv">
      <div className="pv-ambient" aria-hidden="true" />
      <div className="pv-noise" aria-hidden="true" />
      <div className="pv-statusbar">
        <div className="pv-sb-left">9:41</div>
        <div className="pv-sb-right">
          <span className="pv-sb-signal" aria-hidden="true" />
          <span className="pv-sb-wifi" aria-hidden="true" />
          <span className="pv-sb-battery" aria-hidden="true"><span className="pv-sb-battery-fill" /></span>
        </div>
      </div>
      <div className="pv-content">
        <div className={`pv-navbar pv-enter${mounted ? " pv-in" : ""}`}>
          <button className="pv-icon-btn pv-glass" aria-label="Back">
            <span className="pv-sf" style={{ fontSize: 20 }}>{'‹'}</span>
          </button>
          <div className="pv-brand" aria-label="Near">
            <NearLogoMarkDay size={26} />
            <span className="pv-brand-word">near</span>
          </div>
          <button className="pv-icon-btn pv-glass" aria-label="More">
            <span className="pv-sf" style={{ fontSize: 18, transform: "translateY(-2px)" }}>{'⋯'}</span>
          </button>
        </div>
        <div className={`pv-hero pv-enter${mounted ? " pv-in" : ""}`} style={{ transitionDelay: "100ms" }}>
          <div className="pv-hero-top">
            <div className="pv-dot"><span className="pv-dot-ring" /></div>
            <h1 className="pv-title">Target</h1>
          </div>
          <div className="pv-hero-meta">
            <span className="pv-pill">Nearby</span>
            <span className="pv-meta">Arrived 2 min ago</span>
          </div>
        </div>
        <div className={`pv-card pv-glass-card pv-enter${mounted ? " pv-in" : ""}`} style={{ transitionDelay: "260ms" }}>
          <div className="pv-card-row">
            <div className="pv-card-icon"><div className="pv-card-icon-inner" /></div>
            <div className="pv-card-text">
              <div className="pv-card-title">{checkPhase === 2 ? "All done!" : "You're here."}</div>
              <div className="pv-card-sub">{checkPhase === 2 ? "Everything checked off" : "Want to clear a few quick wins?"}</div>
            </div>
          </div>
          <button className={`pv-card-btn${checkPhase === 2 ? " pv-card-btn--done" : ""}`}>
            {checkPhase === 2 ? "Complete" : `Check ${remaining} item${remaining !== 1 ? "s" : ""}`}
          </button>
          <div className="pv-progress-track">
            <div className="pv-progress-fill" style={{ width: `${(checkedItems.size / 3) * 100}%` }} />
          </div>
        </div>
        <div className={`pv-list-header pv-enter${mounted ? " pv-in" : ""}`} style={{ transitionDelay: "400ms" }}>
          <span className="pv-lh-title">Up Next</span>
          <span className="pv-lh-meta">{remaining} item{remaining !== 1 ? "s" : ""}</span>
        </div>
        <div className="pv-list">
          {TASKS.map((task, i) => (
            <DayTaskRow key={task.title} title={task.title} detail={task.detail} checked={checkedItems.has(i)} show={mounted} idx={i} />
          ))}
        </div>
        <div className={`pv-tabbar pv-glass pv-enter${mounted ? " pv-in" : ""}`} style={{ transitionDelay: "600ms" }} role="tablist">
          <DayTab label="Places" />
          <DayTab label="Target" active />
          <DayTab label="Household" />
        </div>
      </div>
      <style>{dayStyles}</style>
    </div>
  );
}

function NearLogoMarkDay({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="pv-logo">
      <defs>
        <radialGradient id="pvNearField" cx="50%" cy="52%" r="58%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="22%" stopColor="#EAF4FF" />
          <stop offset="45%" stopColor="#A8D4FF" />
          <stop offset="70%" stopColor="#4C8CFF" />
          <stop offset="100%" stopColor="#1E4ED8" />
        </radialGradient>
        <clipPath id="pvSquircle">
          <path d="M108 0h296c60 0 108 48 108 108v296c0 60-48 108-108 108H108C48 512 0 464 0 404V108C0 48 48 0 108 0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#pvSquircle)">
        <rect width="512" height="512" fill="#1E4ED8" />
        <circle className="pv-logo-pulse" cx="256" cy="256" r="178" fill="url(#pvNearField)" />
      </g>
    </svg>
  );
}

function DayTaskRow({ title, detail, checked, show, idx }: { title: string; detail: string; checked: boolean; show: boolean; idx: number }) {
  return (
    <div className={`pv-row pv-glass-row pv-enter${show ? " pv-in" : ""}${checked ? " pv-row--checked" : ""}`} style={{ transitionDelay: `${460 + idx * 80}ms` }}>
      <div className={`pv-check${checked ? " pv-check--done" : ""}`}>
        {checked && (
          <svg className="pv-check-svg" viewBox="0 0 16 16" fill="none">
            <path d="M3 8.5L6.5 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div className="pv-row-body">
        <div className={`pv-row-title${checked ? " pv-row-title--done" : ""}`}>{title}</div>
        <div className="pv-row-detail">{detail}</div>
      </div>
    </div>
  );
}

function DayTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`pv-tab${active ? " pv-tab-active" : ""}`}>
      {label}
    </div>
  );
}

const dayStyles = `
.pv{
  width: 100%; height: 100%; position: relative; overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
  color: #0F172A;
  background: radial-gradient(120% 120% at 50% 0%, #FFFFFF 0%, #E0F2FE 40%, #BAE6FD 100%);
}
.pv-ambient{
  position: absolute; inset: -20%; filter: blur(40px);
  background:
    radial-gradient(circle at 80% 20%, rgba(186,230,253,0.6), transparent 50%),
    radial-gradient(circle at 20% 60%, rgba(125,211,252,0.4), transparent 50%);
  animation: pvAmbientShift 12s ease-in-out infinite alternate;
}
@keyframes pvAmbientShift{
  0%{ transform: translate3d(0,0,0) scale(1); }
  100%{ transform: translate3d(-8px,-14px,0) scale(1.05); }
}
.pv-noise{
  position: absolute; inset: 0; opacity: 0.05; mix-blend-mode: overlay; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.38'/%3E%3C/svg%3E");
}
.pv-content{
  position: absolute; inset: 0; padding: 20px;
  display: flex; flex-direction: column; z-index: 2;
}
.pv-enter{
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.55s cubic-bezier(0.2,0.8,0.2,1), transform 0.55s cubic-bezier(0.2,0.8,0.2,1);
}
.pv-in{ opacity: 1; transform: translateY(0); }
.pv-statusbar{
  position: absolute; top: 16px; left: 24px; right: 24px;
  display: flex; justify-content: space-between; align-items: center;
  z-index: 6; color: #0F172A; font-weight: 600; font-size: 15px;
}
.pv-sb-right{ display: flex; gap: 6px; align-items: center; opacity: 0.8; }
.pv-sb-signal, .pv-sb-wifi{ width: 16px; height: 10px; border-radius: 2px; background: #0F172A; }
.pv-sb-battery{ width: 25px; height: 11px; border-radius: 3px; border: 1.5px solid #0F172A; position: relative; }
.pv-sb-battery-fill{ position: absolute; inset: 2px 5px 2px 2px; border-radius: 1px; background: #0F172A; }
.pv-navbar{ margin-top: 40px; display: flex; justify-content: space-between; align-items: center; }
.pv-icon-btn{
  width: 44px; height: 44px; border-radius: 50%;
  display: grid; place-items: center; border: none; color: #0F172A; cursor: default;
}
.pv-sf{ font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui; }
.pv-brand{ display: flex; align-items: center; gap: 8px; }
.pv-brand-word{ font-size: 22px; font-weight: 700; letter-spacing: -0.03em; color: #0F172A; transform: translateY(1px); }
.pv-logo{ border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(30,58,138,0.15); }
.pv-logo-pulse{ animation: pvLogoPulse 4s ease-in-out infinite; transform-origin: center; }
@keyframes pvLogoPulse{
  0%{ transform: scale(1); opacity: 0.9; }
  50%{ transform: scale(1.05); opacity: 1; }
  100%{ transform: scale(1); opacity: 0.9; }
}
.pv-hero{ margin-top: 24px; padding: 0 4px; }
.pv-hero-top{ display: flex; align-items: center; gap: 12px; }
.pv-dot{
  width: 12px; height: 12px; border-radius: 50%; background: #2563EB;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.15);
  position: relative;
}
.pv-dot-ring{
  position: absolute; inset: -6px;
  border: 2px solid rgba(37,99,235,0.3);
  border-radius: 50%;
  animation: pvDotRing 2.8s cubic-bezier(0.2,0.8,0.2,1) infinite;
}
@keyframes pvDotRing{
  0%{ transform: scale(0.6); opacity: 0.7; }
  100%{ transform: scale(1.8); opacity: 0; }
}
.pv-title{ margin: 0; font-size: 38px; line-height: 1; font-weight: 800; letter-spacing: -0.04em; color: #0F172A; }
.pv-hero-meta{ display: flex; align-items: center; gap: 10px; margin-top: 10px; }
.pv-pill{
  font-size: 12px; font-weight: 700; letter-spacing: -0.01em; padding: 6px 10px;
  border-radius: 99px; background: #DBEAFE; color: #1E40AF;
  box-shadow: 0 2px 6px rgba(37,99,235,0.1);
  animation: pvPillPulse 3s ease-in-out infinite;
}
@keyframes pvPillPulse{
  0%{ transform: scale(1); box-shadow: 0 2px 6px rgba(37,99,235,0.1); }
  50%{ transform: scale(1.06); box-shadow: 0 2px 14px rgba(37,99,235,0.2); }
  100%{ transform: scale(1); box-shadow: 0 2px 6px rgba(37,99,235,0.1); }
}
.pv-meta{ font-size: 14px; color: #475569; font-weight: 500; }
.pv-card{
  margin-top: 24px; border-radius: 20px; padding: 16px;
  display: flex; flex-direction: column; gap: 12px;
}
.pv-card-row{ display: flex; align-items: center; gap: 14px; }
.pv-card-icon{
  width: 40px; height: 40px; border-radius: 12px;
  background: linear-gradient(135deg, #FFFFFF, #EFF6FF);
  display: grid; place-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
}
.pv-card-icon-inner{
  width: 12px; height: 12px; background: #3B82F6; border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
  animation: pvIconPulse 2.4s ease-in-out infinite;
}
@keyframes pvIconPulse{
  0%,100%{ box-shadow: 0 0 0 2px rgba(59,130,246,0.3); }
  50%{ box-shadow: 0 0 0 5px rgba(59,130,246,0.15); }
}
.pv-card-text{ flex: 1; }
.pv-card-title{ font-size: 16px; font-weight: 700; color: #0F172A; transition: all 0.3s ease; }
.pv-card-sub{ font-size: 13px; font-weight: 500; color: #64748B; margin-top: 2px; transition: all 0.3s ease; }
.pv-card-btn{
  width: 100%; padding: 12px; border-radius: 14px; border: none;
  background: #2563EB; color: #FFFFFF; font-size: 14px; font-weight: 600;
  box-shadow: 0 4px 12px rgba(37,99,235,0.25);
  transition: background 0.4s ease, box-shadow 0.4s ease;
  cursor: default;
}
.pv-card-btn--done{
  background: #16A34A;
  box-shadow: 0 4px 12px rgba(22,163,74,0.25);
}
.pv-progress-track{
  height: 3px; border-radius: 2px; background: rgba(37,99,235,0.1); overflow: hidden;
}
.pv-progress-fill{
  height: 100%; border-radius: 2px;
  background: linear-gradient(90deg, #3B82F6, #2563EB);
  transition: width 0.5s cubic-bezier(0.2,0.8,0.2,1);
}
.pv-list-header{
  margin-top: 24px; padding: 0 4px; display: flex; justify-content: space-between; align-items: baseline;
}
.pv-lh-title{ font-size: 18px; font-weight: 700; color: #0F172A; }
.pv-lh-meta{ font-size: 13px; font-weight: 600; color: #64748B; }
.pv-list{ margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
.pv-row{
  padding: 12px 14px; border-radius: 16px;
  display: flex; align-items: center; gap: 12px;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.pv-row--checked{ opacity: 0.55; }
.pv-check{
  width: 22px; height: 22px; border-radius: 7px; border: 2px solid #CBD5E1;
  display: grid; place-items: center;
  transition: background 0.3s ease, border-color 0.3s ease;
  flex-shrink: 0;
}
.pv-check--done{ background: #2563EB; border-color: #2563EB; }
.pv-check-svg{
  width: 14px; height: 14px;
  animation: pvCheckPop 0.35s cubic-bezier(0.2,0.8,0.2,1);
}
@keyframes pvCheckPop{
  0%{ transform: scale(0); opacity: 0; }
  50%{ transform: scale(1.2); }
  100%{ transform: scale(1); opacity: 1; }
}
.pv-row-body{ flex: 1; }
.pv-row-title{ font-size: 15px; font-weight: 600; color: #0F172A; transition: all 0.3s ease; }
.pv-row-title--done{ text-decoration: line-through; color: #94A3B8; }
.pv-row-detail{ font-size: 13px; color: #64748B; margin-top: 2px; }
.pv-tabbar{
  margin-top: auto; height: 64px; border-radius: 22px;
  display: flex; align-items: center; padding: 6px; gap: 6px;
}
.pv-tab{
  flex: 1; height: 100%; display: grid; place-items: center; border-radius: 16px;
  font-size: 13px; font-weight: 600; color: #64748B;
}
.pv-tab-active{ background: #FFFFFF; color: #0F172A; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.pv-glass{
  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.6); box-shadow: 0 8px 32px rgba(37,99,235,0.05);
}
.pv-glass-card{
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.6); box-shadow: 0 12px 32px rgba(37,99,235,0.08);
}
.pv-glass-row{
  background: rgba(255,255,255,0.4);
  border: 1px solid rgba(255,255,255,0.5);
}
@media (prefers-reduced-motion: reduce){
  .pv-enter{ opacity: 1; transform: none; transition: none; }
  .pv-logo-pulse, .pv-dot-ring, .pv-ambient, .pv-card-icon-inner{ animation: none !important; }
}
`;


/**
 * Near — Household Screen (DUSK) — ALIVE
 * Avatar selection animation, staggered entrance, task completion cycle,
 * breathing ambient glow. Apple keynote energy.
 */
function DuskHouseholdScreen() {
  const [mounted, setMounted] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(() => {
      setActiveAvatar((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(id);
  }, [mounted]);

  const AVATARS = useMemo(() => [
    { initials: "You" },
    { initials: "JM" },
    { initials: "KR" },
  ], []);

  return (
    <div className="hh">
      <div className="hh-ambient" aria-hidden="true" />
      <div className="hh-noise" aria-hidden="true" />
      <div className="hh-statusbar">
        <div className="hh-sb-left">9:41</div>
        <div className="hh-sb-right">
          <span className="hh-sb-signal" aria-hidden="true" />
          <span className="hh-sb-wifi" aria-hidden="true" />
          <span className="hh-sb-battery" aria-hidden="true"><span className="hh-sb-battery-fill" /></span>
        </div>
      </div>
      <div className="hh-content">
        <div className={`hh-navbar hh-enter${mounted ? " hh-in" : ""}`}>
          <button className="hh-icon-btn hh-glass" aria-label="Settings">
            <span className="hh-sf" style={{ fontSize: 19 }}>{'\u2699'}</span>
          </button>
          <div className="hh-brand" aria-label="Near">
            <NearLogoMarkDusk size={26} />
            <span className="hh-brand-word">near</span>
          </div>
          <button className="hh-icon-btn hh-glass" aria-label="Add Member">
            <span className="hh-sf" style={{ fontSize: 20 }}>{'\uFF0B'}</span>
          </button>
        </div>
        <div className={`hh-hero hh-enter${mounted ? " hh-in" : ""}`} style={{ transitionDelay: "80ms" }}>
          <h1 className="hh-title">Household</h1>
          <div className="hh-sub">Shared with 2 people</div>
        </div>
        <div className={`hh-avatars hh-enter${mounted ? " hh-in" : ""}`} style={{ transitionDelay: "180ms" }}>
          {AVATARS.map((a, i) => (
            <DuskAvatar key={a.initials} initials={a.initials} active={activeAvatar === i} show={mounted} idx={i} />
          ))}
        </div>
        <div className={`hh-activity hh-enter${mounted ? " hh-in" : ""}`} style={{ transitionDelay: "260ms" }}>
          <div className="hh-activity-dot" />
          <span className="hh-activity-text">
            {AVATARS[activeAvatar].initials === "You" ? "You" : AVATARS[activeAvatar].initials} {activeAvatar === 0 ? "added an item" : activeAvatar === 1 ? "is near Target" : "checked off 2 items"}
          </span>
        </div>
        <div className={`hh-section-title hh-enter${mounted ? " hh-in" : ""}`} style={{ transitionDelay: "320ms" }}>
          Shared Places
        </div>
        <div className="hh-list">
          <DuskPlaceGroup place="Grocery Store" count={3} tasks={["Soap", "Paper towels", "Milk"]} show={mounted} idx={0} />
          <DuskPlaceGroup place="Target" count={2} tasks={["Dog food", "Light bulbs"]} show={mounted} idx={1} />
        </div>
        <div className={`hh-tabbar hh-glass hh-enter${mounted ? " hh-in" : ""}`} style={{ transitionDelay: "600ms" }} role="tablist">
          <DuskTab label="Places" />
          <DuskTab label="Tasks" />
          <DuskTab label="Household" active />
        </div>
      </div>
      <style>{duskStyles}</style>
    </div>
  );
}

function NearLogoMarkDusk({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="hh-logo">
      <defs>
        <radialGradient id="hhNearField" cx="50%" cy="52%" r="58%">
          <stop offset="0%" stopColor="#FFF3EB" />
          <stop offset="22%" stopColor="#FFD8C8" />
          <stop offset="45%" stopColor="#FF9A6C" />
          <stop offset="70%" stopColor="#4B3D8B" />
          <stop offset="100%" stopColor="#1E2F59" />
        </radialGradient>
        <clipPath id="hhSquircle">
          <path d="M108 0h296c60 0 108 48 108 108v296c0 60-48 108-108 108H108C48 512 0 464 0 404V108C0 48 48 0 108 0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#hhSquircle)">
        <rect width="512" height="512" fill="#1E2F59" />
        <circle className="hh-logo-pulse" cx="256" cy="256" r="178" fill="url(#hhNearField)" />
      </g>
    </svg>
  );
}

function DuskAvatar({ initials, active, show, idx }: { initials: string; active: boolean; show: boolean; idx: number }) {
  return (
    <div
      className={`hh-avatar${active ? " hh-avatar-active" : ""}${show ? " hh-avatar-show" : ""}`}
      style={{ transitionDelay: `${200 + idx * 80}ms` }}
    >
      {initials}
      {active && <span className="hh-avatar-ring" />}
    </div>
  );
}

function DuskPlaceGroup({ place, count, tasks, show, idx }: { place: string; count: number; tasks: string[]; show: boolean; idx: number }) {
  return (
    <div className={`hh-card hh-glass-card hh-enter${show ? " hh-in" : ""}`} style={{ transitionDelay: `${380 + idx * 100}ms` }}>
      <div className="hh-card-header">
        <div className="hh-pin"><span className="hh-pin-ring" /></div>
        <div className="hh-card-title">{place}</div>
        <div className="hh-card-count">{count}</div>
      </div>
      <div className="hh-tasks">
        {tasks.map((t, i) => (
          <div key={i} className="hh-task-row">
            <div className="hh-check" />
            <span className="hh-task-text">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DuskTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`hh-tab${active ? " hh-tab-active" : ""}`}>
      {label}
      {active && <div className="hh-tab-glow" />}
    </div>
  );
}

const duskStyles = `
.hh{
  width: 100%; height: 100%; position: relative; overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
  color: rgba(255,255,255,0.92);
  background: radial-gradient(120% 100% at 50% 0%, #2E1065 0%, #172554 60%, #020617 100%);
}
.hh-ambient{
  position: absolute; inset: -20%; filter: blur(45px);
  background:
    radial-gradient(circle at 20% 20%, rgba(192,132,252,0.3), transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(249,115,22,0.2), transparent 50%),
    radial-gradient(circle at 50% 80%, rgba(76,29,149,0.4), transparent 60%);
  animation: hhAmbientDrift 14s ease-in-out infinite alternate;
}
@keyframes hhAmbientDrift{
  0%{ transform: translate3d(0,0,0) scale(1); }
  100%{ transform: translate3d(8px,-18px,0) scale(1.06); }
}
.hh-noise{
  position: absolute; inset: 0; opacity: 0.04; mix-blend-mode: overlay; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.38'/%3E%3C/svg%3E");
}
.hh-content{
  position: absolute; inset: 0; padding: 22px; display: flex; flex-direction: column; z-index: 2;
}
.hh-enter{
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.55s cubic-bezier(0.2,0.8,0.2,1), transform 0.55s cubic-bezier(0.2,0.8,0.2,1);
}
.hh-in{ opacity: 1; transform: translateY(0); }
.hh-statusbar{
  position: absolute; top: 16px; left: 24px; right: 24px;
  display: flex; justify-content: space-between; align-items: center;
  z-index: 6; color: rgba(255,255,255,0.9); font-weight: 600; font-size: 15px;
}
.hh-sb-right{ display: flex; gap: 6px; align-items: center; opacity: 0.8; }
.hh-sb-signal, .hh-sb-wifi{ width: 16px; height: 10px; border-radius: 2px; background: rgba(255,255,255,0.6); }
.hh-sb-battery{ width: 25px; height: 11px; border-radius: 3px; border: 1.5px solid rgba(255,255,255,0.6); position: relative; }
.hh-sb-battery-fill{ position: absolute; inset: 2px 5px 2px 2px; border-radius: 1px; background: rgba(255,255,255,0.8); }
.hh-navbar{ margin-top: 40px; display: flex; justify-content: space-between; align-items: center; }
.hh-icon-btn{
  width: 44px; height: 44px; border-radius: 50%;
  display: grid; place-items: center; border: none;
  color: rgba(255,255,255,0.9); cursor: default;
}
.hh-sf{ font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui; }
.hh-brand{ display: flex; align-items: center; gap: 8px; }
.hh-brand-word{ font-size: 22px; font-weight: 700; letter-spacing: -0.03em; color: rgba(255,255,255,0.95); transform: translateY(1px); }
.hh-logo{ border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
.hh-logo-pulse{ animation: hhLogoPulse 5s ease-in-out infinite; transform-origin: center; }
@keyframes hhLogoPulse{
  0%{ transform: scale(1); opacity: 0.9; }
  50%{ transform: scale(1.05); opacity: 1; }
  100%{ transform: scale(1); opacity: 0.9; }
}
.hh-hero{ margin-top: 24px; padding: 0 4px; }
.hh-title{
  margin: 0; font-size: 40px; line-height: 1; font-weight: 800; letter-spacing: -0.04em;
  color: #FFFFFF; text-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.hh-sub{ margin-top: 8px; font-size: 15px; color: rgba(255,255,255,0.6); font-weight: 500; }
.hh-avatars{ margin-top: 20px; display: flex; gap: 12px; }
.hh-avatar{
  width: 48px; height: 48px; border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.08);
  border: 1.5px solid rgba(255,255,255,0.12);
  font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.6);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  position: relative;
  opacity: 0; transform: scale(0.8);
  transition: opacity 0.4s cubic-bezier(0.2,0.8,0.2,1),
              transform 0.4s cubic-bezier(0.2,0.8,0.2,1),
              background 0.5s ease,
              border-color 0.5s ease,
              color 0.5s ease,
              box-shadow 0.5s ease;
}
.hh-avatar-show{ opacity: 1; transform: scale(1); }
.hh-avatar-active{
  background: rgba(192,132,252,0.2);
  border-color: rgba(192,132,252,0.5);
  color: #FFFFFF;
  box-shadow: 0 0 20px rgba(192,132,252,0.2), 0 4px 12px rgba(0,0,0,0.15);
}
.hh-avatar-ring{
  position: absolute; inset: -5px;
  border: 2px solid rgba(192,132,252,0.4);
  border-radius: 50%;
  animation: hhAvatarRing 2.6s cubic-bezier(0.2,0.8,0.2,1) infinite;
}
@keyframes hhAvatarRing{
  0%{ transform: scale(0.85); opacity: 0.6; }
  100%{ transform: scale(1.3); opacity: 0; }
}
.hh-activity{
  margin-top: 16px; padding: 10px 14px; border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; gap: 10px;
}
.hh-activity-dot{
  width: 6px; height: 6px; border-radius: 50%;
  background: #A78BFA;
  animation: hhActivityPulse 1.8s ease-in-out infinite;
}
@keyframes hhActivityPulse{
  0%,100%{ opacity: 0.5; }
  50%{ opacity: 1; }
}
.hh-activity-text{
  font-size: 13px; font-weight: 550; color: rgba(255,255,255,0.55);
  letter-spacing: -0.01em;
}
.hh-section-title{
  margin-top: 24px; padding: 0 4px;
  font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
  color: rgba(255,255,255,0.4);
}
.hh-list{ margin-top: 12px; display: flex; flex-direction: column; gap: 14px; }
.hh-card{
  border-radius: 20px; padding: 18px;
  display: flex; flex-direction: column; gap: 14px;
}
.hh-card-header{ display: flex; align-items: center; gap: 10px; }
.hh-pin{
  width: 10px; height: 10px; border-radius: 50%; background: #F97316;
  box-shadow: 0 0 0 4px rgba(249,115,22,0.15);
  position: relative;
}
.hh-pin-ring{
  position: absolute; inset: -5px;
  border: 1.5px solid rgba(249,115,22,0.3);
  border-radius: 50%;
  animation: hhPinRing 3.2s cubic-bezier(0.2,0.8,0.2,1) infinite;
}
@keyframes hhPinRing{
  0%{ transform: scale(0.6); opacity: 0.6; }
  100%{ transform: scale(1.6); opacity: 0; }
}
.hh-card-title{ font-size: 17px; font-weight: 700; color: #FFFFFF; flex: 1; }
.hh-card-count{
  font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.08); padding: 4px 8px; border-radius: 8px;
}
.hh-tasks{ display: flex; flex-direction: column; gap: 10px; }
.hh-task-row{ display: flex; align-items: center; gap: 12px; }
.hh-check{
  width: 18px; height: 18px; border-radius: 6px; border: 1.5px solid rgba(255,255,255,0.25);
  transition: all 0.3s ease;
}
.hh-task-text{ font-size: 15px; font-weight: 500; color: rgba(255,255,255,0.8); }
.hh-tabbar{
  margin-top: auto; height: 64px; border-radius: 22px;
  display: flex; align-items: center; padding: 6px; gap: 6px;
}
.hh-tab{
  flex: 1; height: 100%; display: grid; place-items: center; border-radius: 16px;
  font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.4); position: relative;
}
.hh-tab-active{
  background: rgba(255,255,255,0.12); color: #FFFFFF;
  border: 1px solid rgba(255,255,255,0.18);
}
.hh-tab-glow{
  position: absolute; bottom: -8px; left: 20%; right: 20%; height: 20px;
  background: radial-gradient(circle, rgba(192,132,252,0.35) 0%, transparent 70%);
  filter: blur(8px); pointer-events: none;
}
.hh-glass{
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.hh-glass-card{
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(24px) saturate(160%); -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
}
@media (prefers-reduced-motion: reduce){
  .hh-enter{ opacity: 1; transform: none; transition: none; }
  .hh-avatar{ opacity: 1; transform: none; transition: none; }
  .hh-logo-pulse, .hh-ambient, .hh-avatar-ring, .hh-pin-ring, .hh-activity-dot{ animation: none !important; }
}
`;

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
      }

      /* NAV */
      .nav{
        position: sticky;
        top:0;
        z-index: 50;
        backdrop-filter: blur(14px);
        background: rgba(4,5,12,0.55);
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }

      .navInner{
        max-width: 1200px;
        margin: 0 auto;
        padding: 14px 18px;
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
        font-weight: 700;
        letter-spacing: -0.02em;
        font-size: 18px;
        opacity: 0.95;
      }

      .navActions{
        display:flex;
        align-items:center;
        gap: 16px;
      }
      .navLink{
        font-size: 14px;
        color: rgba(255,255,255,0.72);
      }
      .navLink:hover{ color: rgba(255,255,255,0.95); }

      .navCta{
        padding: 10px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.06);
        font-size: 14px;
        font-weight: 650;
      }
      .navCta:hover{
        background: rgba(255,255,255,0.10);
      }

      /* HERO */
      .hero{
        position: relative;
        padding: 92px 18px 40px;
        overflow: hidden;
      }
      .heroBg{
        position:absolute;
        inset:-40%;
        background:
          radial-gradient(circle at 35% 25%, rgba(123,77,255,0.30), transparent 42%),
          radial-gradient(circle at 60% 35%, rgba(90,200,250,0.26), transparent 45%),
          radial-gradient(circle at 50% 80%, rgba(0,217,255,0.12), transparent 55%),
          linear-gradient(180deg, rgba(4,5,12,0) 0%, rgba(4,5,12,1) 72%);
        filter: blur(10px);
      }
      .heroGrid{
        position:absolute;
        inset:0;
        background:
          radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
        background-size: 34px 34px;
        opacity: 0.04;
        mask-image: radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%);
      }
      .heroInner{
        position: relative;
        max-width: 980px;
        margin: 0 auto;
        text-align: center;
      }
      .heroLogoRow{
        display:flex;
        justify-content:center;
        margin-bottom: 18px;
      }
      .heroLogo{
        display:flex;
        align-items:center;
        gap: 10px;
        opacity: 0.92;
      }
      .heroWord{
        font-weight: 700;
        letter-spacing: -0.03em;
        font-size: 28px;
      }

      .heroIconCapsuleWrap{
        display:flex;
        justify-content:center;
        margin: 18px 0 26px;
      }

      .heroTitle{
        font-size: clamp(44px, 6vw, 72px);
        line-height: 1.02;
        margin: 10px 0 16px;
        letter-spacing: -0.04em;
      }
      .heroSub{
        margin: 0 auto;
        max-width: 780px;
        font-size: 18px;
        line-height: 1.55;
        color: rgba(255,255,255,0.68);
      }

      .heroCtas{
        display:flex;
        gap: 12px;
        justify-content:center;
        margin-top: 22px;
        flex-wrap: wrap;
      }
      .primaryBtn, .secondaryBtn{
        padding: 14px 18px;
        border-radius: 999px;
        font-weight: 750;
        font-size: 16px;
        transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
        will-change: transform;
      }
      .primaryBtn{
        background: linear-gradient(90deg, #58D9FF, #6B5CFF, #EC4899);
        color: rgba(0,0,0,0.92);
        box-shadow: 0 20px 60px rgba(88,217,255,0.18);
        border: 1px solid rgba(255,255,255,0.10);
      }
      .primaryBtn:hover{ transform: translateY(-1px); }
      .secondaryBtn{
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        color: rgba(255,255,255,0.90);
      }
      .secondaryBtn:hover{
        transform: translateY(-1px);
        background: rgba(255,255,255,0.08);
      }
      .primaryBtn.big, .secondaryBtn.big{
        padding: 16px 22px;
        font-size: 16px;
      }

      .heroMeta{
        display:flex;
        gap: 10px;
        justify-content:center;
        margin-top: 16px;
        flex-wrap: wrap;
      }
      .pill{
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.66);
        font-size: 13px;
      }

      /* ICON CAPSULE */
      .iconCapsule{
        position: relative;
        border-radius: 28px;
        padding: 26px 26px;
        width: min(420px, 92vw);
        background: linear-gradient(135deg, rgba(0,217,255,0.10), rgba(139,92,246,0.10));
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 24px 90px rgba(0,0,0,0.65), 0 0 80px rgba(90,200,250,0.18);
        backdrop-filter: blur(20px);
        overflow:hidden;
      }
      .halo{
        position:absolute;
        width: 260px;
        height: 260px;
        left: 50%;
        top: 52%;
        transform: translate(-50%,-50%);
        background: radial-gradient(circle, rgba(0,217,255,0.40), rgba(139,92,246,0.28), rgba(236,72,153,0.18), transparent 70%);
        filter: blur(46px);
        pointer-events:none;
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
        width: 160px;
        height: 160px;
        display:flex;
        align-items:center;
        justify-content:center;
        filter: drop-shadow(0 0 18px rgba(90,200,250,0.45)) drop-shadow(0 0 34px rgba(123,77,255,0.30));
      }
      .iconGlow{
        position:absolute;
        inset: 0;
      }
      .iconText{ text-align:center; }
      .iconName{
        font-size: 26px;
        font-weight: 720;
        letter-spacing: -0.02em;
      }
      .iconCaption{
        margin-top: 4px;
        font-size: 14px;
        font-weight: 560;
        color: rgba(255,255,255,0.72);
      }
      .iconCaption.grad{
        background: linear-gradient(90deg, #58D9FF, #6B5CFF, #EC4899);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      /* SHOWCASE */
      .showcase{
        position: relative;
        padding: 90px 18px 90px;
        overflow:hidden;
      }
      .showcaseBg{
        position:absolute;
        inset: -30%;
        background:
          radial-gradient(circle at 50% 25%, rgba(90,200,250,0.18), transparent 45%),
          radial-gradient(circle at 20% 80%, rgba(123,77,255,0.16), transparent 55%),
          radial-gradient(circle at 70% 70%, rgba(236,72,153,0.10), transparent 55%);
        filter: blur(18px);
        opacity: 0.8;
        pointer-events:none;
      }

      /* Floating ambient orbs */
      .showcaseOrbs{
        position:absolute;
        inset:0;
        pointer-events:none;
        overflow:hidden;
      }
      .orb{
        position:absolute;
        border-radius:50%;
        filter:blur(80px);
        opacity:0.5;
      }
      .orb1{
        width:400px;height:400px;
        left:15%;top:10%;
        background:rgba(88,217,255,0.22);
        animation:orbFloat1 8s ease-in-out infinite;
      }
      .orb2{
        width:350px;height:350px;
        right:10%;top:30%;
        background:rgba(107,92,255,0.20);
        animation:orbFloat2 10s ease-in-out infinite;
      }
      .orb3{
        width:300px;height:300px;
        left:40%;bottom:5%;
        background:rgba(236,72,153,0.15);
        animation:orbFloat3 12s ease-in-out infinite;
      }
      @keyframes orbFloat1{
        0%,100%{transform:translate(0,0) scale(1);}
        33%{transform:translate(30px,-20px) scale(1.08);}
        66%{transform:translate(-15px,25px) scale(0.95);}
      }
      @keyframes orbFloat2{
        0%,100%{transform:translate(0,0) scale(1);}
        50%{transform:translate(-25px,30px) scale(1.12);}
      }
      @keyframes orbFloat3{
        0%,100%{transform:translate(0,0) scale(1);}
        40%{transform:translate(20px,-30px) scale(1.05);}
        70%{transform:translate(-20px,10px) scale(0.92);}
      }

      .showcaseInner{
        position: relative;
        max-width: 1320px;
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 80px;
        padding-top: 26px;
      }

      .phone{
        position: relative;
        transition: transform 0.6s ease, opacity 0.6s ease;
        will-change: transform;
      }

      /* PHONE DEVICE */
      .phoneDevice{
        position:relative;
        transition: transform 0.12s ease-out;
        will-change: transform;
      }
      .phoneDeviceMain{
        z-index:2;
      }

      .deviceGlow{
        position:absolute;
        inset:-60px;
        border-radius:50%;
        filter:blur(70px);
        opacity:0.6;
        pointer-events:none;
        transition:opacity 0.4s ease;
      }
      .deviceGlow-sunrise{
        background:radial-gradient(circle, rgba(255,190,120,0.35), rgba(255,140,80,0.15), transparent 70%);
      }
      .deviceGlow-day{
        background:radial-gradient(circle, rgba(88,217,255,0.40), rgba(107,92,255,0.18), transparent 70%);
      }
      .deviceGlow-dusk{
        background:radial-gradient(circle, rgba(123,77,255,0.35), rgba(236,72,153,0.15), transparent 70%);
      }
      .phoneDeviceMain .deviceGlow{
        inset:-90px;
        opacity:0.75;
        filter:blur(90px);
      }

      .deviceShell{
        position:relative;
        width:320px;
        height:660px;
        border-radius:52px;
        background:linear-gradient(145deg, #2a2a2e 0%, #1a1a1e 30%, #0f0f12 100%);
        padding:4px;
        box-shadow:
          0 2px 0 0 rgba(255,255,255,0.08) inset,
          0 -1px 0 0 rgba(0,0,0,0.5) inset,
          0 50px 100px -20px rgba(0,0,0,0.80),
          0 30px 60px -15px rgba(0,0,0,0.65);
        overflow:visible;
      }
      .phoneDeviceMain .deviceShell{
        box-shadow:
          0 2px 0 0 rgba(255,255,255,0.10) inset,
          0 -1px 0 0 rgba(0,0,0,0.5) inset,
          0 70px 140px -20px rgba(0,0,0,0.85),
          0 40px 80px -10px rgba(0,0,0,0.70),
          0 0 120px rgba(90,200,250,0.10);
      }

      /* Side buttons */
      .deviceBtnRight{
        position:absolute;
        right:-2.5px;
        top:180px;
        width:3px;
        height:80px;
        border-radius:0 2px 2px 0;
        background:linear-gradient(180deg, #333 0%, #222 50%, #333 100%);
      }
      .deviceBtnLeft1{
        position:absolute;
        left:-2.5px;
        top:140px;
        width:3px;
        height:32px;
        border-radius:2px 0 0 2px;
        background:linear-gradient(180deg, #333 0%, #222 50%, #333 100%);
      }
      .deviceBtnLeft2{
        position:absolute;
        left:-2.5px;
        top:190px;
        width:3px;
        height:60px;
        border-radius:2px 0 0 2px;
        background:linear-gradient(180deg, #333 0%, #222 50%, #333 100%);
      }

      .deviceEdgeHighlight{
        position:absolute;
        inset:0;
        border-radius:52px;
        pointer-events:none;
        transition:background 0.15s ease;
        z-index:5;
      }

      .deviceBezel{
        position:relative;
        width:100%;
        height:100%;
        border-radius:48px;
        overflow:hidden;
        background:#000;
      }

      /* Dynamic Island */
      .dynamicIsland{
        position:absolute;
        top:12px;
        left:50%;
        transform:translateX(-50%);
        width:120px;
        height:34px;
        border-radius:20px;
        background:#0a0a0a;
        z-index:20;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        padding-right:12px;
        box-shadow:0 0 0 1px rgba(255,255,255,0.04);
      }
      .islandCamera{
        width:10px;
        height:10px;
        border-radius:50%;
        background:radial-gradient(circle, #1a1a2e 30%, #0a0a14 70%);
        box-shadow:0 0 0 1.5px rgba(50,50,80,0.5), inset 0 0 3px rgba(80,80,140,0.3);
      }

      .deviceScreen{
        position:relative;
        width:100%;
        height:100%;
        border-radius:48px;
        overflow:hidden;
      }

      .screenReflection{
        position:absolute;
        inset:0;
        border-radius:48px;
        pointer-events:none;
        z-index:10;
        transition:background 0.15s ease;
      }

      .homeIndicator{
        position:absolute;
        bottom:8px;
        left:50%;
        transform:translateX(-50%);
        width:130px;
        height:5px;
        border-radius:999px;
        background:rgba(255,255,255,0.25);
        z-index:15;
      }

      /* Shimmer sweep */
      .deviceShimmer{
        position:absolute;
        top:0;
        left:-80%;
        width:60%;
        height:100%;
        background:linear-gradient(
          105deg,
          transparent 0%,
          rgba(255,255,255,0.03) 40%,
          rgba(255,255,255,0.08) 50%,
          rgba(255,255,255,0.03) 60%,
          transparent 100%
        );
        animation:shimmerSweep 4s ease-in-out infinite;
        pointer-events:none;
        border-radius:52px;
        z-index:6;
      }
      @keyframes shimmerSweep{
        0%{left:-80%;opacity:0;}
        20%{opacity:1;}
        80%{opacity:1;}
        100%{left:140%;opacity:0;}
      }

      .phoneCenter{
        z-index: 3;
        transform: scale(1.1);
      }

      .phoneLeft{
        opacity: 0.65;
        transform: scale(0.88) rotate(-5deg) translateX(50px);
      }
      .phoneRight{
        opacity: 0.65;
        transform: scale(0.88) rotate(5deg) translateX(-50px);
      }

      .phoneCenter:hover{
        transform: scale(1.12);
      }

      /* Floating animation for side phones */
      .phoneLeft .phoneDevice{
        animation: floatLeft 6s ease-in-out infinite;
      }
      .phoneRight .phoneDevice{
        animation: floatRight 7s ease-in-out infinite;
      }
      .phoneCenter .phoneDevice{
        animation: floatCenter 5s ease-in-out infinite;
      }
      @keyframes floatLeft{
        0%,100%{transform:perspective(1200px) translateY(0);}
        50%{transform:perspective(1200px) translateY(-12px);}
      }
      @keyframes floatRight{
        0%,100%{transform:perspective(1200px) translateY(0);}
        50%{transform:perspective(1200px) translateY(-10px);}
      }
      @keyframes floatCenter{
        0%,100%{transform:perspective(1200px) translateY(0);}
        50%{transform:perspective(1200px) translateY(-8px);}
      }

      .showcaseCopy{
        position: relative;
        max-width: 1060px;
        margin: 60px auto 0;
        text-align:center;
      }
      .sectionTitle{
        font-size: clamp(30px, 3.5vw, 44px);
        letter-spacing: -0.03em;
        margin: 0 0 10px;
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
        margin-top: 22px;
      }
      .featureCard{
        text-align:left;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        padding: 16px 16px 14px;
        box-shadow: 0 18px 60px rgba(0,0,0,0.35);
      }
      .featureTag{
        display:inline-flex;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.72);
      }
      .featureTitle{
        margin-top: 10px;
        font-weight: 820;
        letter-spacing: -0.02em;
        font-size: 16px;
      }
      .featureDesc{
        margin-top: 8px;
        color: rgba(255,255,255,0.68);
        font-size: 14px;
        line-height: 1.55;
      }

      /* EVENT SECTIONS */
      .eventSection{
        position: relative;
        padding: 90px 18px;
        overflow:hidden;
      }
      .eventSection.alt{
        background: radial-gradient(circle at 50% 30%, rgba(123,77,255,0.14), transparent 55%), #04050C;
      }
      .eventInner{
        max-width: 980px;
        margin: 0 auto;
        text-align: center;
      }
      .eventKicker{
        display:inline-flex;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.70);
        font-size: 13px;
        font-weight: 750;
      }
      .eventHeadline{
        margin: 14px 0 10px;
        font-size: clamp(30px, 3.6vw, 46px);
        letter-spacing: -0.03em;
      }
      .eventBody{
        margin: 0 auto;
        max-width: 760px;
        color: rgba(255,255,255,0.68);
        font-size: 16px;
        line-height: 1.65;
      }
      .eventMetrics{
        margin-top: 22px;
        display:grid;
        grid-template-columns: repeat(3, minmax(0,1fr));
        gap: 12px;
      }
      .metric{
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        padding: 14px 14px;
      }
      .metricNum{
        font-size: 28px;
        font-weight: 900;
        letter-spacing: -0.02em;
      }
      .metricLabel{
        margin-top: 4px;
        font-size: 13px;
        color: rgba(255,255,255,0.62);
      }
      .eventSplit{
        margin-top: 18px;
        display:grid;
        grid-template-columns: repeat(2, minmax(0,1fr));
        gap: 12px;
      }
      .splitCard{
        text-align:left;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        padding: 16px 16px;
      }
      .splitTitle{
        font-weight: 850;
        letter-spacing: -0.02em;
      }
      .splitText{
        margin-top: 8px;
        color: rgba(255,255,255,0.68);
        line-height: 1.6;
        font-size: 14px;
      }

      /* FINAL CTA */
      .finalCta{
        position: relative;
        padding: 92px 18px 70px;
        overflow:hidden;
        background:
          radial-gradient(circle at 50% 0%, rgba(90,200,250,0.22), transparent 55%),
          radial-gradient(circle at 70% 30%, rgba(236,72,153,0.12), transparent 55%),
          #04050C;
      }
      .finalInner{
        position: relative;
        max-width: 980px;
        margin: 0 auto;
        text-align:center;
      }
      .finalGlow{
        position:absolute;
        inset: -30%;
        background: radial-gradient(circle, rgba(90,200,250,0.18), rgba(123,77,255,0.12), transparent 60%);
        filter: blur(90px);
        opacity: 0.8;
        pointer-events:none;
      }
      .finalTitle{
        position: relative;
        margin: 0 0 10px;
        font-size: clamp(34px, 4.6vw, 56px);
        letter-spacing: -0.03em;
      }
      .finalSub{
        position: relative;
        margin: 0;
        color: rgba(255,255,255,0.62);
        font-size: 16px;
      }
      .finalButtons{
        position: relative;
        margin-top: 20px;
        display:flex;
        justify-content:center;
        gap: 12px;
        flex-wrap: wrap;
      }
      .footerMini{
        position: relative;
        margin-top: 34px;
        display:flex;
        flex-direction: column;
        align-items:center;
        gap: 8px;
        opacity: 0.85;
      }
      .footerBrand{
        display:flex;
        align-items:center;
        gap: 10px;
      }
      .footerWord{
        font-weight: 800;
        letter-spacing: -0.03em;
        font-size: 18px;
      }
      .footerNote{
        font-size: 13px;
        color: rgba(255,255,255,0.62);
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

      /* Responsive */
      @media (max-width: 1100px){
        .showcaseInner{
          gap: 40px;
        }
        .deviceShell{
          width:250px;
          height:516px;
          border-radius:42px;
        }
        .deviceBezel{
          border-radius:38px;
        }
        .deviceScreen{
          border-radius:38px;
        }
        .screenReflection{
          border-radius:38px;
        }
        .deviceEdgeHighlight{
          border-radius:42px;
        }
        .deviceShimmer{
          border-radius:42px;
        }
        .phoneLeft{
          transform: scale(0.82) rotate(-5deg) translateX(40px);
          opacity: 0.65;
        }
        .phoneRight{
          transform: scale(0.82) rotate(5deg) translateX(-40px);
          opacity: 0.65;
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
      @media (max-width: 740px){
        .showcaseInner{
          gap: 10px;
        }
        .deviceShell{
          width:180px;
          height:372px;
          border-radius:34px;
        }
        .deviceBezel{
          border-radius:30px;
        }
        .deviceScreen{
          border-radius:30px;
        }
        .screenReflection{
          border-radius:30px;
        }
        .deviceEdgeHighlight{
          border-radius:34px;
        }
        .deviceShimmer{
          border-radius:34px;
        }
        .dynamicIsland{
          width:80px;
          height:22px;
          border-radius:14px;
          top:8px;
        }
        .islandCamera{
          width:7px;
          height:7px;
        }
        .homeIndicator{
          width:80px;
          height:4px;
          bottom:6px;
        }
        .phoneLeft{
          transform: scale(0.78) rotate(-4deg) translateX(25px);
          opacity: 0.60;
        }
        .phoneRight{
          transform: scale(0.78) rotate(4deg) translateX(-25px);
          opacity: 0.60;
        }
        .phoneCenter{
          transform: scale(0.95);
        }
        .phoneLeft .phoneDevice,
        .phoneRight .phoneDevice,
        .phoneCenter .phoneDevice{
          animation:none;
        }
      }
    `}</style>
  )
}
