"use client"

import Image from "next/image"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

const KEY_SENTENCE =
  "Near is an ambient life logistics system that surfaces errands, reminders, and household tasks automatically based on location."

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

/* ─── Page ─── */

export default function Page() {
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

/* ─── Nav ─── */

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
          <a className="navCta" href={APP_STORE_URL}>Download</a>
        </nav>
      </div>
    </header>
  )
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroShell">
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
        <span className="eyebrow">Ambient life logistics</span>
        <h1 className="heroTitle">
          The right task.<br />At the right place.
        </h1>
        <p className="heroSub">
          Near quietly surfaces errands, groceries, and household tasks when you arrive where they matter.
        </p>
        <p className="heroMeta">
          No lists to check. No reminders to manage. Just the right moment.
        </p>
        <div className="heroCtas">
          <a className="primaryBtn" href={APP_STORE_URL}>Download on the App Store</a>
          <a className="secondaryBtn" href="#how-it-works">See how it works</a>
        </div>
      </div>
    </section>
  )
}

/* ─── AI Definition ─── */

function AIDefinition() {
  return (
    <section className="section sectionSurface" id="what-is-near">
      <div className="sectionShell narrow">
        <h2 className="sectionTitle">What is Near?</h2>
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

/* ─── Arrive ─── */

function ArriveSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="sectionShell splitGrid">
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

/* ─── TaskRow (reused) ─── */

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

/* ─── Passing By ─── */

function PassingBySection() {
  return (
    <section className="section sectionSurface">
      <div className="sectionShell splitGrid reverse">
        <div className="splitCopy">
          <h2 className="sectionTitle left">
            Passing a place you need.<br />Near notices before you miss the turn.
          </h2>
          <p className="bodyText">
            Near can surface errands when you pass a place where they can be completed.
          </p>
          <p className="caption">Helpful while driving. Quiet by design.</p>
        </div>
        <div className="splitVisual">
          <div className="carplayCard">
            <div className="carplayHeader">Nearby errand</div>
            <div className="carplayStore">Target</div>
            <div className="carplayTasks">
              <span>Return package</span>
              <span>Buy batteries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Ecosystem ─── */

function EcosystemSection() {
  return (
    <section className="section">
      <div className="sectionShell">
        <div className="sectionHeading">
          <h2 className="sectionTitle">Designed for the Apple ecosystem.</h2>
        </div>
        <div className="ecoGrid">
          {ecosystemItems.map((item) => (
            <article className="ecoCard" key={item.title}>
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

/* ─── Simpler Interface ─── */

function SimplerInterface() {
  return (
    <section className="section sectionSurface">
      <div className="sectionShell splitGrid">
        <div className="splitCopy">
          <h2 className="sectionTitle left">Just places.</h2>
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

/* ─── Natural Input ─── */

function NaturalInput() {
  return (
    <section className="section">
      <div className="sectionShell splitGrid reverse">
        <div className="splitCopy">
          <h2 className="sectionTitle left">Add tasks the way you think.</h2>
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

/* ─── Household ─── */

function HouseholdSection() {
  return (
    <section className="section sectionSurface" id="household">
      <div className="sectionShell splitGrid">
        <div className="splitCopy">
          <h2 className="sectionTitle left">One household.<br />One shared memory.</h2>
          <p className="bodyText">
            Anyone can add items.<br />
            When someone is near the store, Near shows the list.
          </p>
        </div>
        <div className="splitVisual">
          <div className="householdNotif">
            <div className="notifHeader">
              <div className="notifIcon">{"\uD83D\uDCCD"}</div>
              <div className="notifApp">Near</div>
              <div className="notifTime">now</div>
            </div>
            <div className="notifTitle">Brian is near Target</div>
            <div className="notifBody">Send the grocery list?</div>
            <div className="notifActions">
              <button className="notifBtn notifBtnPrimary">Send</button>
              <button className="notifBtn notifBtnSecondary">Not now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Maps ─── */

function MapsSection() {
  return (
    <section className="section">
      <div className="sectionShell splitGrid reverse">
        <div className="splitCopy">
          <h2 className="sectionTitle left">Built around the places you go.</h2>
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

/* ─── Calm Technology ─── */

function CalmTechnology() {
  return (
    <section className="section sectionSurface">
      <div className="sectionShell narrow center">
        <h2 className="sectionTitle">Technology that stays out of the way.</h2>
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

/* ─── Privacy ─── */

function PrivacySection() {
  return (
    <section className="section">
      <div className="sectionShell narrow center">
        <h2 className="sectionTitle">Your life logistics. Kept private.</h2>
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

/* ─── Philosophy ─── */

function PhilosophySection() {
  return (
    <section className="section sectionSurface">
      <div className="sectionShell narrow center">
        <h2 className="sectionTitle">Your brain is for ideas.</h2>
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

/* ─── FAQ ─── */

function FAQSection() {
  return (
    <section className="section" id="faq">
      <div className="sectionShell narrow">
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

/* ─── Final CTA ─── */

function FinalCTA() {
  return (
    <section className="finalCta">
      <div className="finalShell">
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

/* ─── Styles ─── */

function SiteStyles() {
  return (
    <style jsx global>{`

      /* ── Reset ── */

      * { box-sizing: border-box; }
      a { color: inherit; text-decoration: none; }

      .page {
        min-height: 100vh;
        background: #FFFFFF;
        color: #1D1D1F;
      }

      /* ── Nav ── */

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

      /* ── Hero ── */

      .hero {
        padding: 10rem 1.5rem 6rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        height: 800px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(47, 109, 255, 0.06) 0%, transparent 70%);
        pointer-events: none;
      }

      .heroShell {
        max-width: 980px;
        margin: 0 auto;
        position: relative;
      }

      .heroIcon {
        width: 80px;
        height: 80px;
        margin: 0 auto 1.5rem;
        display: block;
        border-radius: 18px;
        box-shadow: 0 10px 30px rgba(47, 109, 255, 0.25);
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
        margin: 1.5rem auto 0;
        max-width: 640px;
        font-size: 21px;
        font-weight: 400;
        line-height: 1.4;
        color: #6E6E73;
      }

      .heroMeta {
        margin: 1rem auto 0;
        max-width: 640px;
        font-size: 17px;
        color: rgba(29, 29, 31, 0.4);
        line-height: 1.4;
      }

      .heroCtas {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        margin-top: 2.5rem;
        justify-content: center;
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
        background: var(--blue);
        border: none;
        box-shadow: 0 10px 30px rgba(47, 109, 255, 0.25);
      }

      .primaryBtn:hover { background: var(--blue-hover); }
      .primaryBtn:active, .secondaryBtn:active { transform: scale(0.98); }

      .secondaryBtn {
        color: var(--blue);
        background: transparent;
        border: 1px solid rgba(47, 109, 255, 0.3);
      }

      .secondaryBtn:hover { background: rgba(47, 109, 255, 0.06); }

      /* ── Sections ── */

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

      /* ── Split Grid ── */

      .splitGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .splitGrid.reverse .splitCopy { order: 2; }
      .splitGrid.reverse .splitVisual { order: 1; }

      /* ── Arrive Card ── */

      .arriveCard {
        padding: 2rem;
        border-radius: 1.5rem;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
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
        background: var(--blue);
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

      /* ── TaskRow ── */

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

      /* ── CarPlay Card ── */

      .carplayCard {
        padding: 2rem;
        border-radius: 1.5rem;
        background: #1D1D1F;
        color: white;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      }

      .carplayHeader {
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.6rem;
      }

      .carplayStore {
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .carplayTasks {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .carplayTasks span {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        background: rgba(255, 255, 255, 0.08);
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
      }

      /* ── Ecosystem Grid ── */

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
      }

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

      /* ── Places Card ── */

      .placesCard {
        padding: 1.5rem;
        border-radius: 1.5rem;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
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

      /* ── Input Card ── */

      .inputCard {
        padding: 2rem;
        border-radius: 1.5rem;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
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

      /* ── Household Notification ── */

      .householdNotif {
        padding: 1.5rem;
        border-radius: 1.5rem;
        background: #1D1D1F;
        color: white;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      }

      .notifHeader {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
      }

      .notifIcon { font-size: 1rem; }

      .notifApp {
        font-size: 13px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .notifTime {
        margin-left: auto;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.3);
      }

      .notifTitle {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
      }

      .notifBody {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 1rem;
      }

      .notifActions {
        display: flex;
        gap: 0.6rem;
      }

      .notifBtn {
        padding: 0.5rem 1rem;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
        font-family: var(--font-sans);
      }

      .notifBtnPrimary {
        background: var(--blue);
        color: white;
      }

      .notifBtnSecondary {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.6);
      }

      /* ── Maps Card ── */

      .mapsCard {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding: 1.5rem 2rem;
        border-radius: 1.5rem;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
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

      /* ── Pills ── */

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
        border: 1px solid rgba(0, 0, 0, 0.08);
        font-size: 0.95rem;
        font-weight: 500;
        color: #1D1D1F;
      }

      .sectionSurface .pill {
        background: #FFFFFF;
      }

      /* ── Example List ── */

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
        content: '\u2022';
        position: absolute;
        left: 0;
        color: var(--blue);
        font-weight: 700;
      }

      .center { text-align: center; }

      /* ── FAQ ── */

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
        content: '\u2212';
      }

      .faqA {
        margin: 0 0 1.25rem;
        font-size: 17px;
        line-height: 1.5;
        color: #6E6E73;
      }

      /* ── Final CTA ── */

      .finalCta {
        padding: 4rem 1.5rem 6rem;
      }

      .finalShell {
        max-width: 980px;
        margin: 0 auto;
        padding: 5rem 2rem;
        border-radius: 2rem;
        text-align: center;
        background: #1D1D1F;
        color: white;
        overflow: hidden;
        position: relative;
      }

      .finalShell::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(47, 109, 255, 0.15) 0%, transparent 70%);
        pointer-events: none;
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

      /* ── Footer ── */

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

      /* ── Responsive ── */

      @media (max-width: 1024px) {
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

        .hero { padding: 6rem 1rem 4rem; }

        .section { padding: 5rem 1rem; }

        .heroTitle {
          font-size: clamp(2.4rem, 10vw, 3.5rem);
        }

        .sectionTitle {
          font-size: clamp(1.8rem, 7vw, 2.4rem);
        }

        .heroCtas {
          flex-direction: column;
          align-items: stretch;
        }

        .primaryBtn, .secondaryBtn {
          justify-content: center;
          text-align: center;
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
