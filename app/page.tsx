"use client"

import React, { useEffect, useMemo, useState } from "react"

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
  return (
    <section className="showcase" id="how">
      <div className="showcaseBg" aria-hidden="true" />
      <div className="showcaseInner">

        {/* LEFT – SUNRISE */}
        <div className="phone phoneLeft">
          <div className="phoneFrame">
            <SunrisePlacesScreen />
          </div>
        </div>

        {/* CENTER – DAY (PRIMARY) */}
        <div className="phone phoneCenter">
          <div className="phoneFrame phoneFrameMain">
            <DayPlaceViewScreen />
          </div>
        </div>

        {/* RIGHT – DUSK */}
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
        <button className="circleBtn" aria-label="Back">‹</button>

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

/* --------- SUNRISE: Higher contrast, warm edge light, crisp text -------- */

function SunrisePlacesScreen() {
  const places = useMemo(() => [
    { name: "Publix", hint: "3 items", color: "c1" },
    { name: "Target", hint: "4 items", color: "c2" },
    { name: "Home Depot", hint: "1 item", color: "c3" },
    { name: "Dry Cleaners", hint: "2 items", color: "c4" },
  ], [])

  return (
    <PhoneChrome theme="sunrise">
      <div className="pad">
        <div className="titleBlock">
          <div className="h1">Places</div>
          <div className="sub">Your lists, anchored to where life happens.</div>
        </div>

        <div className="card card-strong">
          <div className="cardHeader">
            <div className="cardTitle">Next up</div>
            <div className="cardMeta">4 saved places</div>
          </div>

          <div className="list">
            {places.map((p) => (
              <div key={p.name} className="row">
                <div className={`dot ${p.color}`} />
                <div className="rowMain">
                  <div className="rowTitle">{p.name}</div>
                  <div className="rowSub">{p.hint}</div>
                </div>
                <div className="chev">›</div>
              </div>
            ))}
          </div>
        </div>

        <div className="miniNote">
          Tip: Add recurring places once. Near does the rest.
        </div>
      </div>
    </PhoneChrome>
  )
}

/* --------- DAY: Checked tasks, "Complete" stamp, premium clarity -------- */

function DayPlaceViewScreen() {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % 1000), 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <PhoneChrome theme="day">
      <div className="pad">
        <div className="titleBlock">
          <div className="h1">Publix</div>
          <div className="sub">3 things left. Quietly handled.</div>
        </div>

        <div className="arrivedChip">
          <span className="arrivedDot" />
          Arrived
        </div>

        <div className="card card-main">
          <div className="cardHeader">
            <div className="cardTitle">When you arrive</div>
            <div className="cardMeta">Auto list</div>
          </div>

          <div className="tasks">
            <TaskRow state="done" label="Milk" />
            <TaskRow state="done" label="Blueberries" />
            <TaskRow state="todo" label="Paper towels" />
            <TaskRow state="todo" label="Batteries" />
          </div>

          <div className="completeRow">
            <div className="completeStamp" aria-hidden="true">
              <span className="stampRing" style={{ opacity: 0.9 }} />
              <span className="stampText">COMPLETE</span>
            </div>

            <button className="miniBtn">
              Quick complete
            </button>
          </div>

          <div className="cardFooterNote">
            No timers. No remembering. Just a little less chaos.
          </div>
        </div>

        <div className="softGlow" aria-hidden="true" style={{ opacity: 0.55 + (pulse % 2) * 0.1 }} />
      </div>
    </PhoneChrome>
  )
}

function TaskRow(props: { state: "done" | "todo"; label: string }) {
  const done = props.state === "done"
  return (
    <div className={`taskRow ${done ? "done" : ""}`}>
      <div className={`box ${done ? "checked" : ""}`} aria-hidden="true">
        {done ? <span className="check">✓</span> : null}
      </div>
      <div className="taskLabel">{props.label}</div>
      <div className="taskSpacer" />
      {done ? <div className="taskPill">done</div> : <div className="taskPill faint">to do</div>}
    </div>
  )
}

/* --------- DUSK: Higher contrast, deeper navy, sharper cards ----------- */

function DuskHouseholdScreen() {
  const people = useMemo(() => [
    { name: "Lauren", role: "Admin", active: true },
    { name: "Brian", role: "Member", active: false },
    { name: "Reese", role: "Member", active: false },
  ], [])

  return (
    <PhoneChrome theme="dusk">
      <div className="pad">
        <div className="titleBlock">
          <div className="h1">Household</div>
          <div className="sub">Shared calm. Shared memory.</div>
        </div>

        <div className="card card-strong duskCard">
          <div className="cardHeader">
            <div className="cardTitle">Members</div>
            <div className="cardMeta">3</div>
          </div>

          <div className="list">
            {people.map((p) => (
              <div key={p.name} className="row">
                <div className={`avatar ${p.active ? "active" : ""}`} />
                <div className="rowMain">
                  <div className="rowTitle">{p.name}</div>
                  <div className="rowSub">{p.role}</div>
                </div>
                <div className={`presence ${p.active ? "on" : ""}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="card card-strong duskCard" style={{ marginTop: 14 }}>
          <div className="cardHeader">
            <div className="cardTitle">Shared lists</div>
            <div className="cardMeta">3 active</div>
          </div>

          <div className="list">
            <div className="row">
              <div className="dot c2" />
              <div className="rowMain">
                <div className="rowTitle">Target Run</div>
                <div className="rowSub">4 tasks</div>
              </div>
              <div className="chev">›</div>
            </div>

            <div className="row">
              <div className="dot c3" />
              <div className="rowMain">
                <div className="rowTitle">Sunday Reset</div>
                <div className="rowSub">7 tasks</div>
              </div>
              <div className="chev">›</div>
            </div>

            <div className="row">
              <div className="dot c1" />
              <div className="rowMain">
                <div className="rowTitle">Vacation Packing</div>
                <div className="rowSub">12 tasks</div>
              </div>
              <div className="chev">›</div>
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

      .showcaseInner{
        position: relative;
        max-width: 1320px;
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:center;
        gap: 110px;
        padding-top: 26px;
      }

      .phone{
        position: relative;
        transition: transform 0.6s ease, opacity 0.6s ease;
        will-change: transform;
      }
      .phoneFrame{
        width: 332px;
        height: 684px;
        border-radius: 50px;
        overflow:hidden;
        background: #000;
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 70px 150px rgba(0,0,0,0.90);
      }

      .phoneCenter{
        z-index: 3;
        transform: scale(1.12);
      }
      .phoneFrameMain{
        box-shadow: 0 90px 190px rgba(0,0,0,0.95), 0 0 200px rgba(90,200,250,0.18);
      }

      .phoneLeft{
        opacity: 0.58;
        transform: scale(0.90) rotate(-6deg) translateX(60px);
      }
      .phoneRight{
        opacity: 0.58;
        transform: scale(0.90) rotate(6deg) translateX(-60px);
      }

      .phoneCenter:hover{
        transform: scale(1.14);
      }

      .phoneCenter::before{
        content:"";
        position:absolute;
        inset: -170px;
        background: radial-gradient(circle, rgba(90,200,250,0.26), transparent 60%);
        filter: blur(90px);
        z-index: -1;
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
          radial-gradient(circle at 30% 20%, rgba(255,190,120,0.24), transparent 45%),
          radial-gradient(circle at 60% 40%, rgba(90,200,250,0.18), transparent 55%),
          linear-gradient(180deg, #0A1024 0%, #050816 55%, #04050C 100%);
      }

      .screen-day{
        background:
          radial-gradient(circle at 50% 20%, rgba(90,200,250,0.22), transparent 48%),
          radial-gradient(circle at 40% 55%, rgba(123,77,255,0.16), transparent 55%),
          linear-gradient(180deg, #08113A 0%, #070A18 55%, #04050C 100%);
      }

      .screen-dusk{
        background:
          radial-gradient(circle at 50% 15%, rgba(123,77,255,0.22), transparent 48%),
          radial-gradient(circle at 70% 45%, rgba(236,72,153,0.10), transparent 58%),
          linear-gradient(180deg, #05061B 0%, #04050C 70%, #03040A 100%);
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
      }
      .sub{
        margin-top: 6px;
        color: rgba(255,255,255,0.70);
        font-size: 13px;
        line-height: 1.45;
      }

      .card{
        margin-top: 14px;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        box-shadow: 0 22px 70px rgba(0,0,0,0.45);
        overflow:hidden;
        position: relative;
      }
      .card-strong{
        background: rgba(255,255,255,0.06);
        border-color: rgba(255,255,255,0.12);
      }
      .card-main{
        background: linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%);
        border-color: rgba(255,255,255,0.14);
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

      .miniNote{
        margin-top: 12px;
        font-size: 12px;
        color: rgba(255,255,255,0.58);
      }

      .arrivedChip{
        margin-top: 10px;
        display:inline-flex;
        align-items:center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.84);
        font-size: 12px;
        font-weight: 750;
      }
      .arrivedDot{
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: #58D9FF;
        box-shadow: 0 0 16px rgba(88,217,255,0.55);
      }

      .tasks{
        padding: 2px 12px 8px;
      }
      .taskRow{
        display:flex;
        align-items:center;
        gap: 10px;
        padding: 10px 6px;
        border-radius: 14px;
      }
      .taskRow:hover{
        background: rgba(255,255,255,0.04);
      }
      .box{
        width: 20px;
        height: 20px;
        border-radius: 7px;
        border: 2px solid rgba(255,255,255,0.28);
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .box.checked{
        border: none;
        background: linear-gradient(135deg, #58D9FF, #6B5CFF);
        box-shadow: 0 0 22px rgba(88,217,255,0.26);
      }
      .check{
        color: rgba(0,0,0,0.90);
        font-weight: 900;
        font-size: 14px;
        line-height: 1;
        transform: translateY(-0.5px);
      }
      .taskLabel{
        font-size: 14px;
        font-weight: 750;
        letter-spacing: -0.02em;
        color: rgba(255,255,255,0.92);
      }
      .taskRow.done .taskLabel{
        opacity: 0.60;
        text-decoration: line-through;
        text-decoration-thickness: 2px;
        text-decoration-color: rgba(255,255,255,0.28);
      }
      .taskSpacer{ flex:1; }
      .taskPill{
        font-size: 11px;
        font-weight: 850;
        padding: 6px 8px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.82);
      }
      .taskPill.faint{
        color: rgba(255,255,255,0.62);
      }

      .completeRow{
        display:flex;
        align-items:center;
        justify-content: space-between;
        padding: 10px 14px 14px;
        gap: 10px;
      }

      .completeStamp{
        position: relative;
        width: 120px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(0,0,0,0.18);
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
      }
      .stampRing{
        position:absolute;
        inset:-18px;
        background: radial-gradient(circle, rgba(88,217,255,0.30), rgba(107,92,255,0.16), transparent 58%);
        filter: blur(10px);
        animation: stampPulse 2.6s ease-in-out infinite;
      }
      .stampText{
        position: relative;
        font-size: 12px;
        letter-spacing: 0.18em;
        font-weight: 950;
        color: rgba(255,255,255,0.86);
      }

      .miniBtn{
        padding: 10px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        color: rgba(255,255,255,0.92);
        font-weight: 850;
        font-size: 12px;
      }
      .miniBtn:hover{
        background: rgba(255,255,255,0.09);
      }

      .cardFooterNote{
        padding: 0 14px 14px;
        color: rgba(255,255,255,0.62);
        font-size: 12px;
        line-height: 1.5;
      }

      .softGlow{
        position:absolute;
        left: 50%;
        bottom: 22px;
        width: 240px;
        height: 140px;
        transform: translateX(-50%);
        background: radial-gradient(circle, rgba(88,217,255,0.22), transparent 60%);
        filter: blur(40px);
        pointer-events:none;
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
      @keyframes stampPulse{
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.12); opacity: 1; }
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