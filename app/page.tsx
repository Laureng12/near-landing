"use client"

import Image from "next/image"
import { PhoneShowcase } from "./PhoneShowcase"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

const proofItems = [
  { icon: "◎", label: "Location-based reminders" },
  { icon: "◌", label: "Shared household lists" },
  { icon: "◐", label: "Designed for iPhone" },
]

const painPoints = [
  "Reminder apps that don\u2019t understand place.",
  "Sticky notes that stay home when you don\u2019t.",
  "Texting yourself is just procrastination with bubbles.",
  "The mental load of invisible logistics.",
]

const steps = [
  {
    label: "Pin it",
    title: "Attach tasks to real places",
    description:
      "Groceries \u2192 the grocery store. Returns \u2192 the mall. Batteries \u2192 Target.",
  },
  {
    label: "Forget it",
    title: "Near runs quietly in the background",
    description:
      "No timers. No opening the app. Just live normally while Near keeps the context.",
  },
  {
    label: "Arrive",
    title: "Your tasks appear when the place does",
    description:
      "Pull into the lot and the list is already waiting.",
  },
]

const storyCards = [
  {
    eyebrow: "For busy people",
    title: "Errands stop leaking out of your day.",
    copy:
      "Near turns all those tiny, expensive misses into easy wins. Pick up the prescription. Drop off the package. Grab the batteries while you are already there.",
  },
  {
    eyebrow: "For couples and families",
    title: "One household. One shared memory.",
    copy:
      "When someone is closest to the store, they get the nudge. Less coordination. Less resentment. Far fewer 'I thought you were getting that.' moments.",
  },
  {
    eyebrow: "For repeat routines",
    title: "The app gets smarter without getting louder.",
    copy:
      "Near is useful on day one, then compounds. Favorite places, recurring needs, grocery habits, and all the little rituals that make life run.",
  },
]

const featureCards = [
  {
    icon: "↗",
    title: "Drive-by intelligence",
    description:
      "Passing Target with three unfinished errands? Near nudges you before you miss the turn. These small moments compound into hours saved every week.",
  },
  {
    icon: "⌂",
    title: "Shared grocery flow",
    description:
      "Anyone can add items. Whoever is closest to the store gets the reminder. The fridge stays stocked without coordination overhead.",
  },
  {
    icon: "+",
    title: "Fast capture",
    description:
      "Type it, say it, scan it, or snap it. Near is built for the half-second when you remember.",
  },
  {
    icon: "—",
    title: "Quiet by design",
    description:
      "No ads. No social feed. No audience graph. No manipulation loops. Location is used for one thing: helping you get things done.",
  },
]

const useCases = [
  {
    icon: "◍",
    name: "Groceries",
    lines: ["Your list appears when you arrive", "Shared across the household", "No more forgetting the one thing you came for"],
  },
  {
    icon: "△",
    name: "Errands",
    lines: ["Returns, batteries, dry cleaning", "Triggered by proximity, not memory", "The stuff that falls through the cracks"],
  },
  {
    icon: "□",
    name: "Home tasks",
    lines: ["Things you only remember when you\u2019re already there", "Measure the window. Fix the drawer.", "Surfaces when you walk in the door"],
  },
]

export default function Page() {
  return (
    <main className="page">
      <TopNav />
      <Hero />
      <ProofBar />
      <PhoneShowcase />
      <ProblemSection />
      <HowItWorks />
      <StorySection />
      <UseCaseSection />
      <HouseholdSection />
      <PrivacySection />
      <DefinitionSection />
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

function TopNav() {
  return (
    <header className="nav">
      <div className="navInner">
        <a className="brand" href="#top">
          <span className="brandMark">
            <Image src="/near-logo-dark-cropped.png" alt="Near" className="brandLogo" width={515} height={220} priority quality={100} />
          </span>
        </a>

        <nav className="navLinks" aria-label="Primary">
          <a className="navLink hideOnMobile" href="#how-it-works">
            How it works
          </a>
          <a className="navLink hideOnMobile" href="#story">
            Why Near
          </a>
          <a className="navLink hideOnMobile" href="#household">
            Household
          </a>
          <a className="navCta" href={APP_STORE_URL}>
            Download
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroGlow heroGlowOne" aria-hidden="true" />
      <div className="heroGlow heroGlowTwo" aria-hidden="true" />
      <div className="heroHeadlineWrap">
        <Image src="/near-icon-hero.png" alt="Near app icon" className="heroIcon" width={861} height={891} priority quality={100} unoptimized />
        <span className="eyebrow">Ambient Life Logistics</span>
        <h1 className="heroTitle">Never Forget<br />Anything Again.</h1>
        <p className="heroSub">Near quietly coordinates errands, reminders, and household tasks using location and context. Arrive somewhere, and what matters is already waiting.</p>
        <div className="heroCtas heroCtasCentered">
          <a className="primaryBtn" href={APP_STORE_URL}>Download Near</a>
          <a className="secondaryBtn" href="#how-it-works">See it in action</a>
        </div>
        <div className="heroMeta heroMetaCentered">
          <span>No timers</span>
          <span>No opening the app</span>
          <span>Household sync</span>
        </div>
      </div>
      <div className="heroInner">

        <div className="heroPanel">
          <div className="statusCard">
            <div className="statusHeader">
              <span className="statusLabel">Now arriving</span>
              <span className="statusDot" />
            </div>

            <div className="statusPlace">Trader Joe&apos;s</div>
            <div className="statusTasks">
              <TaskRow text="Sparkling water" animateClass="checkOne" />
              <TaskRow text="Lemons" animateClass="checkTwo" />
              <TaskRow text="Flowers for Friday" animateClass="checkThree" />
            </div>

            <div className="statusFooter">
              <div>
                <div className="statusMiniLabel">Household</div>
                <div className="statusMiniValue">Lauren is closest, so Lauren gets the nudge.</div>
              </div>
              <div className="miniStamp">Near</div>
            </div>
          </div>

          <div className="floatingQuote">
            <span className="quoteKicker">Tiny but important</span>
            <p>
              The milk. The return. The batteries. The gift bag. The whole category of things
              you only remember when it is too late.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TaskRow({
  text,
  animateClass = "",
}: {
  text: string
  animateClass?: string
}) {
  return (
    <div className={`taskRow ${animateClass}`}>
      <span className="taskCheck" aria-hidden="true">✓</span>
      <span className="taskText">{text}</span>
    </div>
  )
}

function ProofBar() {
  return (
    <section className="proofBar" aria-label="Product proof points">
        <div className="proofInner">
          {proofItems.map((item) => (
            <span className="proofPill" key={item}>
              <span className="proofIcon" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </span>
          ))}
        </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="section sectionLight">
      <div className="sectionShell split">
        <div>
          <span className="eyebrow dark">The problem</span>
          <h2 className="sectionTitle dark">Life runs on invisible logistics.</h2>
        </div>

        <div className="problemList">
          {painPoints.map((point) => (
            <div className="problemCard" key={point}>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section sectionLight" id="how-it-works">
      <div className="sectionShell">
        <div className="sectionHeading">
          <span className="eyebrow dark">The system</span>
          <h2 className="sectionTitle dark">How Near Works</h2>
          <p className="sectionSub dark">
            Near turns real-world places into triggers for action.
          </p>
        </div>

        <div className="stepGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.title}>
              <div className="stepLabel">{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="section sectionTint" id="story">
      <div className="sectionShell">
        <div className="sectionHeading">
          <span className="eyebrow dark">What Near is</span>
          <h2 className="sectionTitle dark">A new kind of productivity system.</h2>
          <p className="sectionSub dark">
            Near is an ambient life logistics system that surfaces tasks automatically when they become relevant. Your life already has the context. Near simply listens for it.
          </p>
        </div>

        <div className="storyGrid">
          {storyCards.map((card) => (
            <article className="storyCard" key={card.title}>
              <span className="storyEyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>

        <div className="featureBand">
          {featureCards.map((feature) => (
            <div className="featureMini" key={feature.title}>
              <span className="miniIcon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCaseSection() {
  return (
    <section className="section sectionLight">
      <div className="sectionShell">
        <div className="sectionHeading">
          <span className="eyebrow dark">Built for the small things</span>
          <h2 className="sectionTitle dark">Near shines in the moments where life usually leaks.</h2>
        </div>

        <div className="useCaseGrid">
          {useCases.map((item) => (
            <article className="useCaseCard" key={item.name}>
              <div className="useCaseTop">
                <div className="useCaseTitleWrap">
                  <span className="useCaseIcon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.name}</h3>
                </div>
                <span>Ready on arrival</span>
              </div>
              <div className="useCaseList">
                {item.lines.map((line) => (
                  <div className="useCaseLine" key={line}>
                    <span className="useCaseDot" />
                    {line}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HouseholdSection() {
  return (
    <section className="section sectionDark" id="household">
      <div className="sectionShell householdShell">
        <div className="householdCopy">
          <span className="eyebrow">Household logistics</span>
          <h2 className="sectionTitle">One household. One shared memory.</h2>
          <p className="sectionSub">
            Near coordinates tasks across the people who live together. Anyone can add items. Whoever is closest to the store gets the reminder. No group chat. No follow-up text. Just done.
          </p>
        </div>

        <div className="householdPhone">
          <div className="householdNotif">
            <div className="notifHeader">
              <div className="notifIcon">📍</div>
              <div className="notifApp">Near</div>
              <div className="notifTime">now</div>
            </div>
            <div className="notifTitle">Brian is near Target</div>
            <div className="notifBody">You have items you need at Target. Add those items to his list?</div>
            <div className="notifActions">
              <button className="notifBtn notifBtnPrimary">Add to Brian&apos;s list</button>
              <button className="notifBtn notifBtnSecondary">Dismiss</button>
            </div>
          </div>
          <div className="householdFooter">
            <div className="householdFooterLabel">Household</div>
            <div className="householdFooterValue">Brian is close, so Brian gets a nudge.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PrivacySection() {
  return (
    <section className="section sectionLight">
      <div className="sectionShell privacyShell">
        <div className="sectionHeading">
          <span className="eyebrow dark">Quiet by design</span>
          <h2 className="sectionTitle dark">Near behaves like a utility, not a platform.</h2>
          <p className="sectionSub dark">
            Location is used for one thing: helping you get things done. No ads. No social feed. No audience graph. No manipulation loops.
          </p>
        </div>

        <div className="privacyGrid">
          <span>No ads</span>
          <span>No social feed</span>
          <span>No audience graph</span>
          <span>No manipulation loops</span>
        </div>
      </div>
    </section>
  )
}

function DefinitionSection() {
  return (
    <section className="section sectionTint">
      <div className="sectionShell definitionShell">
        <span className="eyebrow">What is ambient life logistics?</span>
        <blockquote className="definitionBlock">
          <p className="definitionText">
            <strong>Ambient Life Logistics</strong> <em>(n.)</em> &mdash; A system that surfaces the right task, at the right place, at the right time &mdash; without requiring the user to remember, check, or act on a schedule. The environment becomes the trigger.
          </p>
        </blockquote>
        <p className="definitionAttribution">
          Near is the first app built around this principle.
        </p>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="finalCta">
      <div className="finalShell">
        <span className="eyebrow">Start now</span>
        <h2 className="finalTitle">The smartest reminder is the one that waits for the right place.</h2>
        <p className="finalSub">
          Download Near and let your errands find you.
        </p>
        <a className="primaryBtn finalBtn" href={APP_STORE_URL}>
          Download Free on the App Store
        </a>
      </div>
    </section>
  )
}

function SiteStyles() {
  return (
    <style jsx global>{`
      :root {
        --ink: #f5f5f7;
        --paper: #000000;
        --paper-strong: #0a0a0a;
        --sand: #1d1d1f;
        --line: rgba(255, 255, 255, 0.08);
        --line-dark: rgba(255, 255, 255, 0.12);
        --muted: rgba(245, 245, 247, 0.6);
        --muted-dark: rgba(245, 245, 247, 0.7);
        --blue: #2997ff;
        --sky: #2997ff;
        --violet: #2997ff;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        background: var(--paper);
        color: var(--ink);
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        font-family: var(--font-sans);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .page {
        min-height: 100vh;
        background: #000000;
      }

      .nav {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        background: rgba(0, 0, 0, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }

      .navInner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 14px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      .brand,
      .navLinks {
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .brandMark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        background: none;
        border: none;
        box-shadow: none;
      }

      .brandLogo {
        width: auto;
        height: 44px;
        display: block;
        object-fit: contain;
      }

      .navLink {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.64);
      }

      .navLink:hover {
        color: var(--ink);
      }

      .navCta,
      .primaryBtn,
      .secondaryBtn {
        border-radius: 999px;
        transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
      }

      .navCta {
        padding: 0.55rem 1.1rem;
        color: white;
        background: var(--blue);
        font-size: 0.88rem;
        font-weight: 600;
        box-shadow: none;
      }

      .hero {
        position: relative;
        overflow: hidden;
        padding: 8rem 1.5rem 5rem;
      }

      .heroGlow {
        position: absolute;
        border-radius: 999px;
        filter: blur(80px);
        pointer-events: none;
      }

      .heroGlowOne {
        top: -10rem;
        left: -4rem;
        width: 30rem;
        height: 30rem;
        background: rgba(41, 151, 255, 0.08);
      }

      .heroGlowTwo {
        right: -4rem;
        top: 0;
        width: 26rem;
        height: 26rem;
        background: rgba(41, 151, 255, 0.06);
      }

      .heroInner,
      .sectionShell,
      .finalShell {
        max-width: 1200px;
        margin: 0 auto;
      }

      .heroInner {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
        gap: 2.5rem;
        align-items: center;
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        padding: 0;
        border-radius: 0;
        background: none;
        border: none;
        color: var(--blue);
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .eyebrow.dark {
        background: none;
        border-color: transparent;
        color: var(--blue);
      }

      .heroTitle,
      .sectionTitle,
      .finalTitle {
        margin: 0;
        font-family: var(--font-sans);
        letter-spacing: -0.04em;
        line-height: 1.06;
        font-weight: 700;
      }

      .heroHeadlineWrap {
        max-width: 1200px;
        margin: 0 auto 3rem;
        text-align: center;
      }

      .heroIcon {
        width: 80px;
        height: 80px;
        margin: 0 auto 1.5rem;
        display: block;
        border-radius: 18px;
      }

      .heroTitle {
        margin-top: 1rem;
        font-size: clamp(3.9rem, 8vw, 7.6rem);
        max-width: none;
      }

      .heroSub,
      .sectionSub,
      .finalSub {
        font-size: 1.18rem;
        line-height: 1.5;
        letter-spacing: 0;
        font-family: var(--font-sans);
      }

      .heroSub {
        max-width: 38rem;
        margin: 1.5rem auto 0;
        color: var(--muted);
        text-align: center;
      }

      .sectionTitle {
        text-wrap: balance;
        max-width: 20ch;
        margin-left: auto;
        margin-right: auto;
      }

      .heroCtas {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        margin-top: 2rem;
      }

      .primaryBtn,
      .secondaryBtn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.85rem 1.6rem;
        font-family: var(--font-sans);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0;
        overflow: hidden;
        text-wrap: nowrap;
      }

      .primaryBtn {
        color: white;
        background: var(--blue);
        border: none;
        box-shadow: none;
      }

      .primaryBtn::before,
      .secondaryBtn::before {
        display: none;
      }

      .primaryBtn::after {
        display: none;
      }

      .secondaryBtn {
        color: var(--blue);
        background: transparent;
        border: 1px solid rgba(41, 151, 255, 0.4);
        box-shadow: none;
      }

      .navCta:hover,
      .primaryBtn:hover {
        transform: none;
        background: #0077ed;
      }

      .secondaryBtn:hover {
        transform: none;
        background: rgba(41, 151, 255, 0.1);
      }

      .primaryBtn:active,
      .secondaryBtn:active {
        transform: scale(0.98);
      }

      .heroCtasCentered {
        justify-content: center;
      }

      .heroMeta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-top: 1.5rem;
        color: rgba(245, 245, 247, 0.4);
        font-size: 0.86rem;
      }

      .heroMeta span {
        padding: 0;
        border-radius: 0;
        background: none;
        border: none;
      }

      .heroMetaCentered {
        justify-content: center;
      }

      .heroMeta.heroMetaCentered span {
        padding: 0.45rem 1rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .heroMeta.heroMetaCentered span + span::before {
        display: none;
      }

      .heroMeta span + span::before {
        content: "·";
        margin-right: 0.6rem;
      }

      .heroPanel {
        position: relative;
        min-height: 31rem;
      }

      .statusCard,
      .floatingQuote,
      .problemCard,
      .stepCard,
      .storyCard,
      .featureMini,
      .useCaseCard,
      .householdBoard,
      .privacyGrid span {
        box-shadow: none;
      }

      .statusCard {
        position: relative;
        z-index: 2;
        padding: 1.4rem;
        border-radius: 1.5rem;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .statusHeader,
      .statusFooter,
      .useCaseTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .statusLabel,
      .statusMiniLabel,
      .stepLabel,
      .storyEyebrow,
      .quoteKicker {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .statusLabel,
      .statusMiniLabel,
      .quoteKicker {
        color: rgba(255, 255, 255, 0.52);
      }

      .statusDot,
      .useCaseDot {
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 999px;
        background: var(--blue);
        box-shadow: none;
      }

      .statusPlace {
        margin-top: 1rem;
        font-family: var(--font-sans);
        font-size: clamp(2.2rem, 4vw, 3rem);
        font-weight: 700;
        letter-spacing: -0.04em;
      }

      .statusTasks {
        display: grid;
        gap: 0.8rem;
        margin-top: 1.2rem;
      }

      .taskRow {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        padding: 0.95rem 1rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        position: relative;
        overflow: hidden;
      }

      .taskCheck {
        display: inline-flex;
        width: 1.4rem;
        height: 1.4rem;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        font-size: 0.82rem;
        font-weight: 800;
        color: transparent;
        background: rgba(255, 255, 255, 0.02);
        transition: background 220ms ease, color 220ms ease, border-color 220ms ease,
          box-shadow 220ms ease, transform 220ms ease;
      }

      .taskText {
        font-size: 0.98rem;
        font-weight: 600;
        transition: color 220ms ease, opacity 220ms ease, transform 220ms ease;
      }

      .checkOne,
      .checkTwo,
      .checkThree {
        animation: taskGlowLoop 6.8s ease-in-out infinite;
      }

      .checkOne .taskCheck,
      .checkTwo .taskCheck,
      .checkThree .taskCheck {
        animation: boxTickLoop 6.8s ease-in-out infinite;
      }

      .checkOne .taskText,
      .checkTwo .taskText,
      .checkThree .taskText {
        animation: textTickLoop 6.8s ease-in-out infinite;
      }

      .checkOne {
        animation-delay: 0s;
      }

      .checkOne .taskCheck,
      .checkOne .taskText {
        animation-delay: 0s;
      }

      .checkTwo {
        animation-delay: 2.05s;
      }

      .checkTwo .taskCheck,
      .checkTwo .taskText {
        animation-delay: 2.05s;
      }

      .checkThree {
        animation-delay: 4.1s;
      }

      .checkThree .taskCheck,
      .checkThree .taskText {
        animation-delay: 4.1s;
      }

      .statusFooter {
        margin-top: 1.2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }

      .statusMiniValue {
        margin-top: 0.25rem;
        max-width: 17rem;
        color: rgba(255, 255, 255, 0.72);
        line-height: 1.5;
      }

      .miniStamp {
        flex-shrink: 0;
        padding: 0.8rem 1rem;
        border-radius: 999px;
        background: var(--blue);
        color: white;
        font-weight: 600;
      }

      .floatingQuote {
        position: absolute;
        left: 105%;
        top: 50%;
        transform: translateY(-50%);
        width: min(18rem, 100%);
        padding: 1.2rem 1.25rem;
        border-radius: 1.25rem;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .floatingQuote p {
        margin: 0.5rem 0 0;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.6;
      }

      .proofBar {
        padding: 0 1.5rem 2rem;
      }

      .proofInner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        justify-content: center;
      }

      .proofPill {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.9rem 1rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.95rem;
      }

      .proofIcon,
      .miniIcon,
      .useCaseIcon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        color: white;
        background: var(--blue);
      }

      .proofIcon {
        width: 1.5rem;
        height: 1.5rem;
        font-size: 0.72rem;
        font-weight: 700;
      }

      .section {
        padding: 8rem 1.5rem;
      }

      .sectionLight {
        color: var(--ink);
      }

      .sectionTint {
        background: rgba(255, 255, 255, 0.02);
      }

      .sectionDark {
        background: #111111;
        color: white;
      }

      .split {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        gap: 2rem;
        align-items: start;
      }

      .sectionHeading {
        max-width: 48rem;
        margin: 0 auto;
        text-align: center;
      }

      .sectionTitle {
        margin-top: 0.9rem;
        font-size: clamp(2.7rem, 5vw, 4.9rem);
        line-height: 1.02;
      }

      .sectionTitle.dark {
        color: var(--ink);
      }

      .sectionSub {
        max-width: 42rem;
        margin: 1rem auto 0;
        color: var(--muted-dark);
      }

      .sectionSub.dark {
        color: var(--muted);
      }

      .problemList,
      .stepGrid,
      .storyGrid,
      .featureBand,
      .useCaseGrid,
      .privacyGrid {
        margin-top: 2.5rem;
      }

      .problemList {
        display: grid;
        gap: 1rem;
      }

      .problemCard,
      .stepCard,
      .storyCard,
      .featureMini,
      .useCaseCard {
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.04);
      }

      .problemCard {
        padding: 1.3rem 1.4rem;
        border-radius: 1.35rem;
        font-size: 1.05rem;
        line-height: 1.55;
      }

      .stepGrid,
      .storyGrid,
      .featureBand,
      .useCaseGrid,
      .privacyGrid {
        display: grid;
        gap: 1rem;
      }

      .stepGrid,
      .storyGrid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .stepCard,
      .storyCard,
      .featureMini,
      .useCaseCard {
        padding: 1.5rem;
        border-radius: 1.5rem;
      }

      .stepCard h3,
      .storyCard h3,
      .featureMini h3,
      .useCaseCard h3 {
        margin: 0.65rem 0 0;
        font-family: var(--font-sans), sans-serif;
        font-size: 1.32rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.22;
        text-wrap: balance;
      }

      .stepCard p,
      .storyCard p,
      .featureMini p {
        margin: 0.8rem 0 0;
        color: var(--muted);
        font-size: 1.03rem;
        line-height: 1.72;
      }

      .stepLabel,
      .storyEyebrow {
        color: var(--blue);
      }

      .featureBand {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .miniIcon {
        width: 2rem;
        height: 2rem;
        font-size: 0.9rem;
        font-weight: 800;
      }

      .useCaseGrid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .useCaseTop span {
        color: rgba(255, 255, 255, 0.46);
        font-size: 0.82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .useCaseTitleWrap {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .useCaseIcon {
        width: 2.1rem;
        height: 2.1rem;
        font-size: 0.86rem;
        font-weight: 800;
      }

      .useCaseList {
        display: grid;
        gap: 0.85rem;
        margin-top: 1.1rem;
      }

      .useCaseLine {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: var(--muted);
        font-size: 1rem;
        line-height: 1.6;
      }

      .householdShell {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
        gap: 2rem;
        align-items: center;
      }

      .householdPhone {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .householdNotif {
        position: relative;
        padding: 1.4rem 1.5rem;
        border-radius: 1.5rem;
        background: rgba(20, 20, 30, 0.85);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow:
          0 0 60px rgba(41, 151, 255, 0.12),
          0 0 120px rgba(41, 151, 255, 0.06),
          0 8px 32px rgba(0, 0, 0, 0.4);
      }

      .notifHeader {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
      }

      .notifIcon {
        font-size: 1.1rem;
      }

      .notifApp {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .notifTime {
        margin-left: auto;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.35);
      }

      .notifTitle {
        font-size: 1.1rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 0.4rem;
      }

      .notifBody {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.65);
        line-height: 1.5;
        margin-bottom: 1rem;
      }

      .notifActions {
        display: flex;
        gap: 0.6rem;
      }

      .notifBtn {
        padding: 0.55rem 1.1rem;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
        font-family: var(--font-sans);
      }

      .notifBtnPrimary {
        background: var(--blue);
        color: #fff;
      }

      .notifBtnSecondary {
        background: rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .householdFooter {
        padding: 0 0.25rem;
      }

      .householdFooterLabel {
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: rgba(255, 255, 255, 0.35);
        margin-bottom: 0.35rem;
      }

      .householdFooterValue {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.55);
        line-height: 1.5;
      }

      .privacyShell {
        max-width: 1050px;
      }

      .privacyGrid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .privacyGrid span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.15rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.72);
        text-align: center;
        font-size: 1rem;
      }

      .definitionShell {
        max-width: 720px;
        text-align: center;
      }

      .definitionBlock {
        margin: 2rem 0 0;
        padding: 0;
        border: none;
      }

      .definitionText {
        font-size: 1.2rem;
        line-height: 1.7;
        color: rgba(245, 245, 247, 0.8);
        font-style: normal;
      }

      .definitionText strong {
        color: var(--ink);
        font-weight: 700;
      }

      .definitionText em {
        color: rgba(245, 245, 247, 0.5);
        font-style: italic;
      }

      .definitionAttribution {
        margin-top: 1.5rem;
        font-size: 0.95rem;
        color: var(--blue);
        font-weight: 600;
      }

      .finalCta {
        padding: 4rem 1.5rem 6rem;
      }

      .finalShell {
        padding: 5rem 1.5rem;
        border-radius: 2rem;
        text-align: center;
        background: #111111;
        color: white;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.06);
      }

      .finalIcon {
        width: 4rem;
        height: 4rem;
        border-radius: 1.2rem;
      }

      .finalTitle {
        margin-top: 1rem;
        font-size: clamp(2.6rem, 5.5vw, 5.2rem);
        max-width: 11ch;
        margin-left: auto;
        margin-right: auto;
      }

      .finalSub {
        max-width: 38rem;
        margin: 1rem auto 0;
        color: rgba(255, 255, 255, 0.76);
      }

      .finalBtn {
        margin-top: 1.8rem;
        display: inline-flex;
      }

      .siteFooter {
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding: 2rem 1.5rem;
        background: #000;
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
        color: rgba(245, 245, 247, 0.4);
      }

      .footerLinks {
        display: flex;
        gap: 2rem;
      }

      .footerLink {
        font-size: 0.85rem;
        color: rgba(245, 245, 247, 0.4);
        text-decoration: none;
        transition: color 0.2s;
      }

      .footerLink:hover {
        color: rgba(245, 245, 247, 0.8);
      }

      @keyframes buttonSweep {
        0%,
        100% {
          transform: translateX(-180%) rotate(18deg);
          opacity: 0;
        }

        16% {
          opacity: 1;
        }

        38% {
          transform: translateX(390%) rotate(18deg);
          opacity: 0;
        }
      }

      @keyframes boxTickLoop {
        0%,
        22% {
          color: transparent;
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: none;
          transform: scale(1);
        }

        30%,
        74% {
          color: white;
          background: var(--blue);
          border-color: transparent;
          box-shadow: none;
          transform: scale(1.04);
        }

        84%,
        100% {
          color: transparent;
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: none;
          transform: scale(1);
        }
      }

      @keyframes textTickLoop {
        0%,
        22% {
          color: rgba(255, 255, 255, 0.92);
          opacity: 1;
          transform: translateX(0);
          text-decoration: none;
        }

        30%,
        74% {
          color: rgba(255, 255, 255, 0.5);
          opacity: 0.82;
          transform: translateX(2px);
          text-decoration: line-through;
        }

        84%,
        100% {
          color: rgba(255, 255, 255, 0.92);
          opacity: 1;
          transform: translateX(0);
          text-decoration: none;
        }
      }

      @keyframes taskGlowLoop {
        0%,
        22%,
        84%,
        100% {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.08);
        }

        30%,
        74% {
          background: rgba(41, 151, 255, 0.08);
          border-color: rgba(41, 151, 255, 0.15);
        }
      }

      @media (max-width: 1024px) {
        .heroInner,
        .split,
        .householdShell,
        .stepGrid,
        .storyGrid,
        .featureBand,
        .useCaseGrid {
          grid-template-columns: 1fr;
        }

        .privacyGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .heroPanel {
          min-height: auto;
        }

        .floatingQuote {
          position: relative;
          right: auto;
          bottom: auto;
          width: 100%;
          margin-top: 1rem;
        }
      }

      @media (max-width: 720px) {
        .hideOnMobile {
          display: none;
        }

        .hero {
          padding-top: 4.5rem;
        }

        .heroTitle {
          font-size: clamp(3.2rem, 16vw, 5.1rem);
        }

        .section {
          padding: 4.5rem 1.25rem;
        }

        .navInner,
        .hero,
        .proofBar,
        .section,
        .finalCta {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .heroCtas,
        .heroMeta {
          flex-direction: column;
          align-items: stretch;
        }

        .primaryBtn,
        .secondaryBtn,
        .navCta,
        .finalBtn {
          justify-content: center;
          text-align: center;
        }

        .brandMark {
          padding: 0;
        }

        .brandLogo {
          height: 36px;
        }

        .privacyGrid {
          grid-template-columns: 1fr;
        }

        .finalShell {
          padding: 2.5rem 1.2rem;
        }
      }
    `}</style>
  )
}
