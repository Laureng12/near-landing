"use client"
import React from "react"
import Image from "next/image"
const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"
export default function Page() {
  return (
    <main className="page">
      <TopNav />
      <Hero />
      <PhoneShowcase />
      <MagicStrip />
      <WhyNear />
      <HowItWorks />
      <CoreBenefits />
      <LifeMoments />
      <HouseholdSection />
      <ComparisonStrip />
      <PrivacySection />
      <SocialProof />
      <FAQSection />
      <FinalCTA />
      <SiteFooter />
      <SiteStyles />
    </main>
  )
}
/* --------------------------------- NAV --------------------------------- */
function TopNav() {
  return (
    <header className="nav">
      <div className="navInner">
        <a className="brand" href="#top" aria-label="Near home">
          <NearMark sizePx={32} />
          <span className="brandWord">near</span>
        </a>
        <div className="navActions">
          <a className="navLink hideOnMobile" href="#why">Why Near</a>
          <a className="navLink hideOnMobile" href="#how">How It Works</a>
          <a className="navLink hideOnMobile" href="#household">Household</a>
          <a className="navLink hideOnMobile" href="#faq">FAQ</a>
          <a className="navCta" href={APP_STORE_URL}>Download</a>
        </div>
      </div>
    </header>
  )
}
/* -------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroAurora heroAuroraA" aria-hidden="true" />
      <div className="heroAurora heroAuroraB" aria-hidden="true" />
      <div className="heroAurora heroAuroraC" aria-hidden="true" />
      <div className="heroGrid" aria-hidden="true" />
      <div className="heroInner">
        <div className="heroAppIconWrap">
          <Image
            src="/near-hero-icon.png"
            alt="Near app icon"
            width={84}
            height={84}
            className="heroAppIcon"
            priority
          />
        </div>
        <div className="eyebrowWrap">
          <span className="eyebrow">Built for iPhone</span>
          <span className="eyebrow soft">The to-do list that shows up on time. For once.</span>
        </div>
        <h1 className="heroTitle">
          Never Forget<br />Anything Again.
        </h1>
        <p className="heroSub">
          Pin tasks to real places. When you arrive, Near shows what matters.
          No mental tabs. No random alarms. No &ldquo;damn, I forgot.&rdquo;
        </p>
        <div className="heroCtas">
          <a className="primaryBtn big" href={APP_STORE_URL}>
            Download Free
          </a>
          <a className="secondaryBtn big" href="#how">
            See how it works
          </a>
        </div>
        <div className="heroVisual">
          <div className="heroVisualGlow" aria-hidden="true" />
          <div className="heroPhone" aria-hidden="true">
            <div className="heroPhoneBezel">
              <div className="heroPhoneScreen">
                <img src="/screen-home.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="heroLockscreenWrap">
            <div className="heroGlowRing" aria-hidden="true" />
            <div className="lockscreenCard">
              <div className="lockscreenTop">
                <div className="lockscreenTime">4:42</div>
                <div className="lockscreenDate">Tuesday &bull; Arriving at Target</div>
              </div>
              <div className="arrivalCard">
                <div className="arrivalHeader">
                  <div className="arrivalApp">
                    <span className="arrivalAppDot" />
                    <span className="arrivalAppName">Near</span>
                  </div>
                  <div className="arrivalMeta">Arriving now</div>
                </div>
                <div className="arrivalTitle">Target: 3 things to grab</div>
                <div className="arrivalSub">
                  Since you&apos;re already here, let&apos;s not waste the trip.
                </div>
                <div className="arrivalTasks">
                  <div className="arrivalTask checked">
                    <span className="taskCheck">&check;</span>
                    <span className="taskText">Return package</span>
                  </div>
                  <div className="arrivalTask">
                    <span className="taskCheck empty" />
                    <span className="taskText">Dog food</span>
                  </div>
                  <div className="arrivalTask">
                    <span className="taskCheck empty" />
                    <span className="taskText">Paper towels</span>
                  </div>
                </div>
                <div className="arrivalFooter">
                  <span className="arrivalChip">Target</span>
                  <span className="arrivalChip soft">Open until 10 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trustPills">
          <span className="trustPill">Free forever</span>
          <span className="trustPill">No account required</span>
          <span className="trustPill">No ads</span>
          <span className="trustPill">Works offline</span>
        </div>
      </div>
    </section>
  )
}
/* --------------------------- PHONE SHOWCASE ---------------------------- */
function PhoneShowcase() {
  return (
    <section className="showcase" aria-label="Near app previews">
      <div className="showcaseIntro">
        <span className="showcaseKicker">See the product</span>
        <h2 className="showcaseTitle">The reminder shows up when the place does.</h2>
        <p className="showcaseSub">
          Near is built around one magical behavior: you arrive, and what matters is already waiting.
        </p>
      </div>
      <div className="showcaseInner">
        <div className="showPhone left" aria-label="Drive-by reminder preview">
          <div className="showDevice dawnGlow">
            <div className="showBezel">
              <div className="showScreenImg">
                <img src="/screen-places.svg" alt="Near places screen" />
              </div>
            </div>
          </div>
          <div className="showPhoneLabel">
            <span className="showLabelTime">Drive by</span>
            <span className="showLabelScreen">Get the nudge</span>
          </div>
        </div>
        <div className="showPhone center" aria-label="Arrival reminder preview">
          <div className="showDevice nightGlow">
            <div className="showBezel">
              <div className="showScreenImg">
                <img src="/screen-home.svg" alt="Near arrival reminder screen" />
              </div>
            </div>
          </div>
          <div className="showPhoneLabel">
            <span className="showLabelTime">Arrive</span>
            <span className="showLabelScreen">Your list is ready</span>
          </div>
        </div>
        <div className="showPhone right" aria-label="Household sync preview">
          <div className="showDevice duskGlow">
            <div className="showBezel">
              <div className="showScreenImg">
                <img src="/screen-household.svg" alt="Near household screen" />
              </div>
            </div>
          </div>
          <div className="showPhoneLabel">
            <span className="showLabelTime">Share</span>
            <span className="showLabelScreen">Closest person gets the glory</span>
          </div>
        </div>
      </div>
    </section>
  )
}
/* ----------------------------- MAGIC STRIP ----------------------------- */
function MagicStrip() {
  const items = [
    "Pull in. Your list is ready.",
    "Pass the store. Get the nudge.",
    "Whoever\u2019s closest gets the glory.",
  ]
  return (
    <section className="magicStrip">
      <div className="magicStripInner">
        {items.map((item) => (
          <div className="magicItem" key={item}>
            <span className="magicDot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
/* ------------------------------ WHY NEAR ------------------------------- */
function WhyNear() {
  return (
    <section className="sectionWrap whySection" id="why">
      <div className="sectionInner narrow">
        <span className="kicker">Why Near exists</span>
        <h2 className="sectionTitle">
          If you have to remember to open the app, the app already failed.
        </h2>
        <p className="sectionSub">
          Most reminders go off at the wrong time, then disappear into the pile with everything else you&apos;re ignoring.
          Near does the opposite. It waits until the place is real, then brings the task back exactly when it matters.
        </p>
        <div className="whyGrid">
          <div className="whyCard revealUp delay1">
            <div className="whyIcon">{"\uD83E\uDDE0"}</div>
            <h3 className="whyTitle">Less mental load</h3>
            <p className="whyDesc">
              Stop keeping your life in your head. Add it once. Near brings it back when it&apos;s useful &mdash;
              not while you&apos;re in the middle of something else entirely.
            </p>
          </div>
          <div className="whyCard revealUp delay2">
            <div className="whyIcon">{"\uD83D\uDCCD"}</div>
            <h3 className="whyTitle">Right reminder. Right place.</h3>
            <p className="whyDesc">
              No more 2:14 PM notifications you ignore while driving.
              Near waits for the actual moment &mdash; when you&apos;re standing in the parking lot.
            </p>
          </div>
          <div className="whyCard revealUp delay3">
            <div className="whyIcon">{"\u2728"}</div>
            <h3 className="whyTitle">Feels effortless</h3>
            <p className="whyDesc">
              Smart enough to shut up until it matters. Near stays quiet in the background,
              then shows up exactly when it can help. A rare quality in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
/* ----------------------------- HOW IT WORKS ---------------------------- */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Pin it to a place",
      desc: "Groceries to the store. Returns to the mall. Dry cleaning to the cleaner. Radical concept, honestly.",
      icon: "\uD83D\uDCCD",
    },
    {
      num: "02",
      title: "Go live your life",
      desc: "Near quietly watches for arrival in the background. You don\u2019t have to keep mentally circling back like a helicopter parent over your own errands.",
      icon: "\uD83D\uDE97",
    },
    {
      num: "03",
      title: "Arrive. It\u2019s already there.",
      desc: "You pull in, the list appears, and suddenly you seem much more on top of your life than you may actually be. We\u2019ll keep your secret.",
      icon: "\u2728",
    },
  ]
  return (
    <section className="sectionWrap alt" id="how">
      <div className="sectionInner">
        <span className="kicker">How it works</span>
        <h2 className="sectionTitle">Three steps. One less thing to think about.</h2>
        <p className="sectionSub">
          Near is built around one idea: reminders should show up where they matter,
          not where they get ignored.
        </p>
        <div className="stepsGrid">
          {steps.map((s, i) => (
            <div className={`stepCard premium revealUp delay${i + 1}`} key={s.num}>
              <div className="stepTopRow">
                <div className="stepNum">{s.num}</div>
                <div className="stepIcon">{s.icon}</div>
              </div>
              <h3 className="stepTitle">{s.title}</h3>
              <p className="stepDesc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* ---------------------------- CORE BENEFITS ---------------------------- */
function CoreBenefits() {
  const benefits = [
    {
      title: "Arrival reminders",
      desc: "Your list shows up when you arrive \u2014 a dramatically better time than whenever most apps decide to bother you.",
      icon: "\uD83D\uDCE1",
    },
    {
      title: "Drive-by nudges",
      desc: "Passing the store with unfinished business? Near catches the moment before it disappears into tomorrow\u2019s regret.",
      icon: "\uD83D\uDEA8",
    },
    {
      title: "Shared household lists",
      desc: "Add it once. Share it instantly. No screenshots, no text chains, no \u201Cwait, did anyone get that?\u201D",
      icon: "\uD83C\uDFE0",
    },
    {
      title: "Recurring errands",
      desc: "Weekly things you forget weekly? Handled.",
      icon: "\uD83D\uDD01",
    },
  ]
  return (
    <section className="sectionWrap benefitsSection">
      <div className="sectionInner">
        <span className="kicker">Core benefits</span>
        <h2 className="sectionTitle">The easiest way to look wildly organized.</h2>
        <p className="sectionSub">
          Near replaces sticky notes, grocery texts, random alarms, and the noble but failing strategy of just trying harder to remember.
        </p>
        <div className="benefitsGrid">
          {benefits.map((b, i) => (
            <div className={`benefitCard revealUp delay${(i % 4) + 1}`} key={b.title}>
              <div className="benefitGlow" aria-hidden="true" />
              <div className="benefitIcon">{b.icon}</div>
              <h3 className="benefitTitle">{b.title}</h3>
              <p className="benefitDesc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* ----------------------------- LIFE MOMENTS ---------------------------- */
function LifeMoments() {
  const moments = [
    {
      title: "The Target save",
      desc: "You drive past Target and Near reminds you about the dog food, paper towels, and that return that\u2019s been rolling around your car like a side quest for three weeks.",
      accent: "cyan",
    },
    {
      title: "The grocery win",
      desc: "You pull into the store and the full list is waiting. No text thread. No screenshot. No opening five apps like a raccoon with a credit card.",
      accent: "indigo",
    },
    {
      title: "The household handoff",
      desc: "Your partner is already near the store, so they get the nudge and handle it on the way home. Romance, but operational.",
      accent: "pink",
    },
  ]
  return (
    <section className="sectionWrap lifeSection">
      <div className="sectionInner">
        <span className="kicker">Everyday wins</span>
        <h2 className="sectionTitle">A hundred tiny rescues.</h2>
        <p className="sectionSub">
          Near isn&apos;t one dramatic productivity moment. It&apos;s the steady stream of times you remember the thing,
          skip the second trip, and feel strangely competent about your entire life.
        </p>
        <div className="momentsGrid">
          {moments.map((m, i) => (
            <div className={`momentCard ${m.accent} revealUp delay${i + 1}`} key={m.title}>
              <div className="momentLabel">Magic moment</div>
              <h3 className="momentTitle">{m.title}</h3>
              <p className="momentDesc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* ----------------------------- HOUSEHOLD ------------------------------- */
function HouseholdSection() {
  return (
    <section className="sectionWrap alt householdSection" id="household">
      <div className="sectionInner">
        <span className="kicker">Household</span>
        <h2 className="sectionTitle">Shared lists. Zero group-chat energy.</h2>
        <p className="sectionSub">
          Add it once. Let the right person handle it. Fewer reminders. Fewer duplicates.
          Far less household nonsense.
        </p>
        <div className="householdStatement revealUp delay1">
          <div className="householdStatementGlow" aria-hidden="true" />
          <div className="householdStatementEyebrow">The payoff</div>
          <div className="householdStatementTitle">
            The closest person gets the nudge.
          </div>
          <p className="householdStatementText">
            So the milk gets picked up, the return gets dropped off, and nobody has
            to send the world&apos;s least inspiring text: &ldquo;Can you grab this on your way home?&rdquo;
          </p>
        </div>
        <div className="householdGrid premiumGrid">
          <div className="houseCard revealUp delay1">
            <div className="houseIcon">{"\uD83D\uDC65"}</div>
            <h3 className="houseTitle">Add from anywhere</h3>
            <p className="houseDesc">
              One person remembers milk. Another remembers batteries.
              Near keeps both from vanishing into the void.
            </p>
          </div>
          <div className="houseCard revealUp delay2">
            <div className="houseIcon">{"\uD83D\uDCCD"}</div>
            <h3 className="houseTitle">Closest person gets the nudge</h3>
            <p className="houseDesc">
              If someone else is already near the store, they handle it.
              Efficient, elegant, mildly life-changing.
            </p>
          </div>
          <div className="houseCard revealUp delay3">
            <div className="houseIcon">{"\u2705"}</div>
            <h3 className="houseTitle">Everyone sees updates</h3>
            <p className="houseDesc">
              As things get done, the list stays current for everyone &mdash;
              so nobody proudly buys the same bananas twice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
/* ------------------------------ PRIVACY -------------------------------- */
function PrivacySection() {
  return (
    <section className="sectionWrap privacySection" id="privacy">
      <div className="sectionInner narrow">
        <span className="kicker">Privacy</span>
        <h2 className="sectionTitle">Helpful with location. Weird about nothing else.</h2>
        <p className="sectionSub">
          Near uses location for one reason: to remind you at the right place and time.
          No social feed. No ad circus. No creepy data theater. Just the minimum needed to make the product work beautifully.
        </p>
        <div className="privacyPills">
          <span className="privPill">No ads</span>
          <span className="privPill">No tracking</span>
          <span className="privPill">No account required</span>
          <span className="privPill">Works offline</span>
          <span className="privPill">Designed for iPhone</span>
          <span className="privPill">Location used with purpose</span>
        </div>
      </div>
    </section>
  )
}
/* --------------------------- COMPARISON STRIP --------------------------- */
function ComparisonStrip() {
  const rows = [
    { feature: "Location-based reminders", near: true, reminders: "partial", todoist: false },
    { feature: "Automatic nudges when you arrive", near: true, reminders: false, todoist: false },
    { feature: "Shared household lists", near: true, reminders: true, todoist: true },
    { feature: "Closest-person routing", near: true, reminders: false, todoist: false },
    { feature: "No account required", near: true, reminders: true, todoist: false },
    { feature: "Works without opening the app", near: true, reminders: false, todoist: false },
    { feature: "Free forever (no premium tier)", near: true, reminders: true, todoist: false },
    { feature: "No ads or data selling", near: true, reminders: true, todoist: true },
  ]
  return (
    <section className="sectionWrap alt compSection" id="compare">
      <div className="sectionInner">
        <span className="kicker">How it compares</span>
        <h2 className="sectionTitle">Near vs. the stuff you&apos;re already trying.</h2>
        <p className="sectionSub">
          Apple Reminders forgets where you are. Todoist forgets you have a body that moves through space.
          Near was built for both.
        </p>
        <div className="compTable">
          <div className="compHeader">
            <div className="compFeatureH">Feature</div>
            <div className="compColH compNearH">Near</div>
            <div className="compColH">Reminders</div>
            <div className="compColH">Todoist</div>
          </div>
          {rows.map((r) => (
            <div className="compRow" key={r.feature}>
              <div className="compFeature">{r.feature}</div>
              <div className="compCell">{r.near === true ? "\u2705" : r.near === "partial" ? "\u26A0\uFE0F" : "\u274C"}</div>
              <div className="compCell">{r.reminders === true ? "\u2705" : r.reminders === "partial" ? "\u26A0\uFE0F" : "\u274C"}</div>
              <div className="compCell">{r.todoist === true ? "\u2705" : r.todoist === "partial" ? "\u26A0\uFE0F" : "\u274C"}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* --------------------------- SOCIAL PROOF ------------------------------ */
function SocialProof() {
  const reviews = [
    {
      stars: 5,
      text: "I keep forgetting to buy stuff when I\u2019m AT the store. Near literally solved that on day one.",
      author: "Jake M.",
      context: "App Store review",
    },
    {
      stars: 5,
      text: "My husband and I stopped sending each other \u201Ccan you grab\u2026\u201D texts. The app just handles it.",
      author: "Priya T.",
      context: "App Store review",
    },
    {
      stars: 5,
      text: "Genuinely the first to-do app that doesn\u2019t feel like homework. It just\u2026 shows up when I need it.",
      author: "Marcus L.",
      context: "App Store review",
    },
    {
      stars: 5,
      text: "I added \u201Creturn package\u201D and forgot about it. Two days later I drove past the post office and boom \u2014 reminder. Magic.",
      author: "Sara K.",
      context: "App Store review",
    },
  ]
  return (
    <section className="sectionWrap socialSection" id="reviews">
      <div className="sectionInner">
        <span className="kicker">People are noticing</span>
        <h2 className="sectionTitle">Don&apos;t take our word for it.</h2>
        <p className="sectionSub">
          Early users are already calling Near the to-do list they didn&apos;t know they needed.
        </p>
        <div className="reviewsGrid">
          {reviews.map((r, i) => (
            <div className={`reviewCard revealUp delay${(i % 3) + 1}`} key={r.author}>
              <div className="reviewStars">{"â".repeat(r.stars)}</div>
              <p className="reviewText">&ldquo;{r.text}&rdquo;</p>
              <div className="reviewMeta">
                <span className="reviewAuthor">{r.author}</span>
                <span className="reviewContext">{r.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* --------------------------------- FAQ --------------------------------- */
function FAQSection() {
  const faqs = [
    {
      q: "Does Near drain my battery?",
      a: "No. Near uses Apple\u2019s built-in geofencing APIs \u2014 the same low-power system that powers Find My and Apple Maps. There\u2019s no constant GPS polling. Most users see zero noticeable battery impact.",
    },
    {
      q: "Is Near always tracking my location?",
      a: "Near doesn\u2019t track you. It sets invisible fences around the places you choose, and iOS handles the rest. Your location data stays on your device \u2014 it\u2019s never uploaded to a server.",
    },
    {
      q: "How is this different from Apple Reminders?",
      a: "Apple Reminders can do basic location triggers, but you have to set them up manually for each reminder. Near is built around location from the ground up \u2014 you pin tasks to places once, and it handles the rest. Plus household sharing, automatic nearest-person routing, and a UI that doesn\u2019t make you want to close the app.",
    },
    {
      q: "Is Near really free?",
      a: "Yes. No premium tier, no trial, no \u201Cunlock 3 more tasks for $4.99.\u201D Near is free and stays free. We\u2019re building something people love first.",
    },
    {
      q: "What if I don\u2019t go to the same places every week?",
      a: "That\u2019s fine. Near triggers based on proximity to any place you\u2019ve pinned, whenever you happen to be nearby. It works just as well for one-off errands as it does for weekly routines.",
    },
    {
      q: "Can my family see my location?",
      a: "No. Household sharing means you share task lists, not location data. Your family sees what\u2019s on the list and who checked things off \u2014 never where anyone is.",
    },
    {
      q: "Does it work without internet?",
      a: "Yes. Your tasks and places are stored on-device. Location triggers work even in airplane mode. The only thing that needs a connection is syncing shared lists across household members.",
    },
    {
      q: "Is it only for iPhone?",
      a: "For now, yes. Near is designed specifically for iOS to take full advantage of Apple\u2019s location and notification APIs. We want to get one platform really right before expanding.",
    },
  ]
  return (
    <section className="sectionWrap faqSection" id="faq">
      <div className="sectionInner narrow">
        <span className="kicker">FAQ</span>
        <h2 className="sectionTitle">Questions we hear a lot.</h2>
        <div className="faqList">
          {faqs.map((f) => (
            <details className="faqItem" key={f.q}>
              <summary className="faqQ">{f.q}</summary>
              <div className="faqA">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
/* ------------------------------ SITE FOOTER ----------------------------- */
function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerTop">
          <div className="footerBrandCol">
            <div className="footerBrandRow">
              <NearMark sizePx={28} />
              <span className="footerBrandName">near</span>
            </div>
            <p className="footerTagline">The to-do list with better timing.</p>
          </div>
          <div className="footerLinks">
            <div className="footerCol">
              <div className="footerColTitle">Product</div>
              <a className="footerLink" href="#how">How it works</a>
              <a className="footerLink" href="#household">Household</a>
              <a className="footerLink" href="#compare">Compare</a>
              <a className="footerLink" href="#faq">FAQ</a>
            </div>
            <div className="footerCol">
              <div className="footerColTitle">Company</div>
              <a className="footerLink" href="mailto:hello@nearesttask.com">Contact</a>
              <a className="footerLink" href="/privacy">Privacy Policy</a>
              <a className="footerLink" href="/terms">Terms of Service</a>
            </div>
            <div className="footerCol">
              <div className="footerColTitle">Download</div>
              <a className="footerLink" href={APP_STORE_URL}>App Store</a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerLegal">&copy; {new Date().getFullYear()} Near. All rights reserved.</p>
          <p className="footerLegal footerMadeWith">Made with care in the USA.</p>
        </div>
      </div>
    </footer>
  )
}
/* ------------------------------ FINAL CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="finalCta" id="download">
      <div className="finalGlow" aria-hidden="true" />
      <div className="finalInner">
        <NearMark sizePx={52} />
        <h2 className="finalTitle">
          Be the person who actually remembers.
        </h2>
        <p className="finalSub">
          Near does a suspicious amount of the remembering for you.
        </p>
        <div className="finalButtons">
          <a className="primaryBtn big" href={APP_STORE_URL}>
            Download Free on the App Store
          </a>
        </div>
        <a className="backToTop" href="#top">Back to top</a>
        <div className="footerMini">
          <div className="footerBrand">
            <NearMark sizePx={20} />
            <span className="footerWord">near</span>
          </div>
          <div className="footerNote">The to-do list with better timing.</div>
        </div>
      </div>
    </section>
  )
}
/* ------------------------------- NEAR MARK ----------------------------- */
function NearMark({ sizePx }: { sizePx: number }) {
  return (
    <svg
      className="nearMark"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Near icon"
      style={{ width: sizePx, height: sizePx, display: "block", borderRadius: 10 }}
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
        --near-core:#D8F1FF;
        --near-mid1:#78D7FF;
        --near-mid2:#5C7CFF;
        --near-mid3:#8A63FF;
        --near-edge:#060913;
        --bg0:#04050C;
        --text:#FFFFFF;
        --cyan:#58D9FF;
        --indigo:#6B5CFF;
        --pink:#EC4899;
      }
      html, body {
        padding:0;
        margin:0;
        background: var(--bg0);
        color: var(--text);
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        scroll-behavior: smooth;
      }
      * { box-sizing:border-box; }
      a { color: inherit; text-decoration:none; }
      img { max-width:100%; display:block; }
      .page{
        min-height:100vh;
        background:
          radial-gradient(1000px 500px at 50% -10%, rgba(88,217,255,0.08), transparent 60%),
          linear-gradient(180deg, #04050C 0%, #050713 32%, #04050C 100%);
      }
      .nav{
        position: sticky;
        top:0;
        z-index: 50;
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        background: rgba(4,5,12,0.58);
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .navInner{
        max-width: 1200px;
        margin: 0 auto;
        padding: 14px 20px;
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
        letter-spacing: -0.03em;
        font-size: 18px;
        opacity: 0.96;
      }
      .navActions{
        display:flex;
        align-items:center;
        gap: 20px;
      }
      .navLink{
        font-size: 14px;
        color: rgba(255,255,255,0.66);
        transition: color 0.15s ease;
      }
      .navLink:hover{ color: rgba(255,255,255,0.95); }
      .navCta{
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        font-size: 14px;
        font-weight: 650;
        transition: transform 0.15s ease, background 0.15s ease;
      }
      .navCta:hover{
        background: rgba(255,255,255,0.10);
        transform: translateY(-1px);
      }
      .hero{
        position: relative;
        padding: 124px 20px 46px;
        overflow: hidden;
      }
      .heroAurora{
        position:absolute;
        border-radius:999px;
        filter: blur(70px);
        opacity: 0.55;
        pointer-events:none;
      }
      .heroAuroraA{
        width: 520px;
        height: 520px;
        left: -120px;
        top: -60px;
        background: radial-gradient(circle, rgba(91,199,255,0.22), transparent 65%);
        animation: slowDriftA 14s ease-in-out infinite;
      }
      .heroAuroraB{
        width: 560px;
        height: 560px;
        right: -120px;
        top: -100px;
        background: radial-gradient(circle, rgba(122,86,255,0.22), transparent 65%);
        animation: slowDriftB 16s ease-in-out infinite;
      }
      .heroAuroraC{
        width: 760px;
        height: 360px;
        left: 50%;
        bottom: -140px;
        transform: translateX(-50%);
        background: radial-gradient(circle, rgba(236,72,153,0.12), transparent 65%);
        animation: slowDriftC 18s ease-in-out infinite;
      }
      .heroGrid{
        position:absolute;
        inset:0;
        background: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
        background-size: 34px 34px;
        opacity: 0.025;
        mask-image: radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 72%);
        -webkit-mask-image: radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 72%);
      }
      .heroInner{
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
      }
      .heroAppIconWrap{
        display:flex;
        justify-content:center;
        margin-bottom: 18px;
      }
      .heroAppIcon{
        width: 84px;
        height: 84px;
        border-radius: 22px;
        box-shadow:
          0 20px 60px rgba(0,0,0,0.40),
          0 0 60px rgba(107,92,255,0.22);
      }
      .eyebrowWrap{
        display:flex;
        justify-content:center;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 18px;
      }
      .eyebrow{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.78);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.02em;
      }
      .eyebrow.soft{
        color: rgba(255,255,255,0.58);
      }
      .heroTitle{
        font-size: clamp(48px, 7vw, 84px);
        line-height: 0.98;
        margin: 0 0 18px;
        letter-spacing: -0.05em;
        font-weight: 800;
        text-wrap: balance;
      }
      .heroSub{
        margin: 0 auto 30px;
        max-width: 690px;
        font-size: 20px;
        line-height: 1.58;
        color: rgba(255,255,255,0.68);
        text-wrap: balance;
      }
      .heroCtas{
        display:flex;
        gap: 12px;
        justify-content:center;
        flex-wrap: wrap;
      }
      .primaryBtn, .secondaryBtn{
        padding: 14px 20px;
        border-radius: 999px;
        font-weight: 700;
        font-size: 15px;
        transition: transform 0.18s ease, background 0.2s ease, box-shadow 0.2s ease;
        will-change: transform;
        cursor: pointer;
      }
      .primaryBtn{
        background: linear-gradient(135deg, #8BE3FF 0%, #7490FF 48%, #B56BFF 78%, #F48AC0 100%);
        color: rgba(4,5,12,0.94);
        box-shadow: 0 24px 70px rgba(88,217,255,0.18);
        border: 1px solid rgba(255,255,255,0.10);
      }
      .primaryBtn:hover{
        transform: translateY(-2px);
        box-shadow: 0 28px 80px rgba(88,217,255,0.24);
      }
      .secondaryBtn{
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.12);
        color: rgba(255,255,255,0.88);
      }
      .secondaryBtn:hover{
        transform: translateY(-2px);
        background: rgba(255,255,255,0.08);
      }
      .primaryBtn.big, .secondaryBtn.big{
        padding: 16px 24px;
        font-size: 16px;
      }
      .heroVisual{
        position: relative;
        margin-top: 38px;
        min-height: 520px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .heroVisualGlow{
        position: absolute;
        inset: 40px 0 0 0;
        background:
          radial-gradient(circle at 50% 45%, rgba(88,217,255,0.16), transparent 26%),
          radial-gradient(circle at 58% 38%, rgba(107,92,255,0.14), transparent 30%),
          radial-gradient(circle at 45% 55%, rgba(236,72,153,0.10), transparent 28%);
        filter: blur(46px);
        opacity: 0.95;
        pointer-events: none;
      }
      .heroPhone{
        position: absolute;
        left: 50%;
        top: 54%;
        transform: translate(-50%, -50%) scale(1.02);
        z-index: 1;
        filter: drop-shadow(0 40px 100px rgba(0,0,0,0.55));
        animation: heroPhoneFloat 6s ease-in-out infinite;
      }
      .heroPhoneBezel{
        width: 300px;
        height: 620px;
        border-radius: 46px;
        padding: 10px;
        background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05));
        border: 1px solid rgba(255,255,255,0.14);
        box-shadow:
          0 40px 120px rgba(0,0,0,0.55),
          inset 0 1px 0 rgba(255,255,255,0.12);
        overflow: hidden;
      }
      .heroPhoneScreen{
        width: 100%;
        height: 100%;
        border-radius: 38px;
        overflow: hidden;
        background: #0A0A0A;
      }
      .heroPhoneScreen img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .heroLockscreenWrap{
        position: relative;
        width: 100%;
        max-width: 560px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        transform: translateY(34px);
      }
      .heroGlowRing{
        position: absolute;
        width: 560px;
        height: 320px;
        border-radius: 999px;
        background:
          radial-gradient(circle, rgba(88,217,255,0.16) 0%, rgba(107,92,255,0.12) 38%, rgba(236,72,153,0.08) 58%, rgba(0,0,0,0) 74%);
        filter: blur(42px);
        opacity: 0.95;
        pointer-events: none;
        animation: heroGlowPulse 4.2s ease-in-out infinite;
      }
      .lockscreenCard{
        position: relative;
        width: 100%;
        max-width: 430px;
        padding: 18px 18px 16px;
        border-radius: 34px;
        border: 1px solid rgba(255,255,255,0.10);
        background:
          linear-gradient(180deg, rgba(17,22,38,0.92), rgba(8,11,22,0.88)),
          radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 45%);
        box-shadow:
          0 30px 90px rgba(0,0,0,0.45),
          inset 0 1px 0 rgba(255,255,255,0.10),
          inset 0 -1px 0 rgba(255,255,255,0.04);
        backdrop-filter: blur(22px);
        -webkit-backdrop-filter: blur(22px);
        overflow: hidden;
        animation: floatCard 7s ease-in-out infinite;
      }
      .lockscreenCard:before{
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015) 35%, rgba(255,255,255,0) 55%);
        pointer-events: none;
      }
      .lockscreenTop{
        position: relative;
        text-align: center;
        margin-bottom: 16px;
      }
      .lockscreenTime{
        font-size: 52px;
        line-height: 0.95;
        font-weight: 300;
        letter-spacing: -0.05em;
        color: rgba(255,255,255,0.96);
      }
      .lockscreenDate{
        margin-top: 6px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.01em;
        color: rgba(255,255,255,0.52);
      }
      .arrivalCard{
        position: relative;
        border-radius: 26px;
        padding: 16px 16px 14px;
        background:
          linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05)),
          radial-gradient(circle at top left, rgba(88,217,255,0.13), transparent 42%);
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.08),
          0 12px 30px rgba(0,0,0,0.24);
        text-align: left;
      }
      .arrivalHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
      }
      .arrivalApp{
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .arrivalAppDot{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cyan), var(--indigo), var(--pink));
        box-shadow: 0 0 16px rgba(88,217,255,0.45);
        flex-shrink: 0;
      }
      .arrivalAppName{
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.01em;
        color: rgba(255,255,255,0.84);
      }
      .arrivalMeta{
        font-size: 12px;
        font-weight: 700;
        color: rgba(255,255,255,0.46);
      }
      .arrivalTitle{
        font-size: 24px;
        line-height: 1.08;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: rgba(255,255,255,0.98);
        margin-bottom: 6px;
        text-wrap: balance;
      }
      .arrivalSub{
        font-size: 14px;
        line-height: 1.5;
        color: rgba(255,255,255,0.62);
        margin-bottom: 14px;
      }
      .arrivalTasks{
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .arrivalTask{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 11px 12px;
        border-radius: 16px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        transition: transform 0.18s ease, background 0.18s ease;
      }
      .arrivalTask:hover{
        transform: translateX(2px);
      }
      .arrivalTask.checked{
        background:
          linear-gradient(180deg, rgba(88,217,255,0.12), rgba(255,255,255,0.04));
      }
      .taskCheck{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 900;
        color: #031018;
        background: linear-gradient(135deg, #8BE3FF, #78D7FF);
        box-shadow: 0 0 14px rgba(88,217,255,0.28);
        flex-shrink: 0;
      }
      .taskCheck.empty{
        background: transparent;
        border: 1.5px solid rgba(255,255,255,0.22);
        box-shadow: none;
      }
      .taskText{
        font-size: 14px;
        font-weight: 650;
        letter-spacing: -0.01em;
        color: rgba(255,255,255,0.82);
      }
      .arrivalFooter{
        margin-top: 14px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .arrivalChip{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.10);
        font-size: 12px;
        font-weight: 700;
        color: rgba(255,255,255,0.76);
      }
      .arrivalChip.soft{
        color: rgba(255,255,255,0.56);
      }
      .trustPills{
        display:flex;
        gap: 10px;
        justify-content:center;
        margin-top: 22px;
        flex-wrap: wrap;
      }
      .trustPill{
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
        color: rgba(255,255,255,0.56);
        font-size: 13px;
        font-weight: 500;
      }
      .showcase {
        position: relative;
        padding: 64px 0 150px;
        overflow: hidden;
        background:
          radial-gradient(900px 600px at 50% 24%, rgba(99, 102, 241, 0.18), rgba(0, 0, 0, 0) 60%),
          radial-gradient(700px 500px at 25% 55%, rgba(236, 72, 153, 0.12), rgba(0, 0, 0, 0) 65%),
          radial-gradient(800px 520px at 75% 60%, rgba(34, 211, 238, 0.12), rgba(0, 0, 0, 0) 65%),
          linear-gradient(180deg, #04050b 0%, #05060f 40%, #02030a 100%);
      }
      .showcase:before {
        content: "";
        position: absolute;
        inset: -2px;
        background: radial-gradient(600px 380px at 50% 24%, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0) 60%);
        filter: blur(30px);
        pointer-events: none;
      }
      .showcaseIntro {
        position: relative;
        z-index: 2;
        max-width: 820px;
        margin: 0 auto 36px;
        padding: 0 24px;
        text-align: center;
      }
      .showcaseKicker {
        display: inline-flex;
        padding: 7px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.62);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .showcaseTitle {
        margin: 0 0 12px;
        font-size: clamp(32px, 4.2vw, 52px);
        line-height: 1.06;
        font-weight: 800;
        letter-spacing: -0.04em;
        color: rgba(255,255,255,0.96);
      }
      .showcaseSub {
        margin: 0 auto;
        max-width: 640px;
        font-size: 18px;
        line-height: 1.62;
        color: rgba(255,255,255,0.60);
      }
      .showcaseInner {
        position: relative;
        max-width: 1320px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 48px;
        padding: 0 24px;
      }
      .showPhone {
        position: relative;
        will-change: transform;
      }
      .showPhone.left {
        opacity: 0.80;
        animation: floatLeft 5s ease-in-out infinite;
      }
      .showPhone.right {
        opacity: 0.80;
        animation: floatRight 5s ease-in-out infinite;
        animation-delay: -1.5s;
      }
      .showPhone.center {
        z-index: 3;
        animation: floatCenter 5s ease-in-out infinite;
        animation-delay: -3s;
      }
      .dawnGlow .showBezel {
        box-shadow: 0 50px 120px rgba(0,0,0,0.7), 0 0 100px rgba(255, 160, 60, 0.24);
      }
      .nightGlow .showBezel {
        box-shadow: 0 50px 120px rgba(0,0,0,0.7), 0 0 120px rgba(34, 211, 238, 0.30);
      }
      .duskGlow .showBezel {
        box-shadow: 0 50px 120px rgba(0,0,0,0.7), 0 0 110px rgba(139, 92, 246, 0.28);
      }
      .showPhone.center:before {
        content: "";
        position: absolute;
        inset: -100px;
        background: radial-gradient(circle, rgba(34, 211, 238, 0.16), rgba(99, 102, 241, 0.12), rgba(0, 0, 0, 0) 62%);
        filter: blur(60px);
        z-index: -1;
      }
      .showBezel {
        width: 280px;
        height: 580px;
        border-radius: 44px;
        padding: 10px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04));
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 50px 120px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        overflow: hidden;
      }
      .showScreenImg {
        width: 100%;
        height: 100%;
        border-radius: 36px;
        overflow: hidden;
        background: #0a0a0a;
      }
      .showScreenImg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .showPhoneLabel {
        text-align: center;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }
      .showLabelTime {
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.09em;
        color: rgba(255, 255, 255, 0.42);
      }
      .showLabelScreen {
        font-size: 17px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.90);
        max-width: 220px;
        line-height: 1.24;
      }
      .magicStrip{
        padding: 0 20px 28px;
      }
      .magicStripInner{
        max-width: 1180px;
        margin: 0 auto;
        border-radius: 24px;
        padding: 16px 18px;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.025));
        border: 1px solid rgba(255,255,255,0.08);
      }
      .magicItem{
        min-height: 56px;
        display:flex;
        align-items:center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 18px;
        background: rgba(255,255,255,0.03);
        color: rgba(255,255,255,0.78);
        font-size: 15px;
        line-height: 1.45;
        transition: transform 0.18s ease, background 0.18s ease;
      }
      .magicItem:hover{
        transform: translateY(-2px);
        background: rgba(255,255,255,0.05);
      }
      .magicDot{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cyan), var(--indigo), var(--pink));
        box-shadow: 0 0 18px rgba(88,217,255,0.4);
      }
      .sectionWrap{
        position: relative;
        padding: 100px 20px;
        overflow: hidden;
      }
      .sectionWrap.alt{
        background:
          radial-gradient(ellipse at 50% 10%, rgba(91,199,255,0.08), transparent 60%),
          radial-gradient(ellipse at 50% 0%, rgba(122,86,255,0.10), transparent 70%);
      }
      .sectionInner{
        max-width: 1120px;
        margin: 0 auto;
        text-align: center;
      }
      .sectionInner.narrow{
        max-width: 820px;
      }
      .kicker{
        display:inline-flex;
        padding: 7px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.62);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .sectionTitle{
        font-size: clamp(32px, 3.8vw, 52px);
        letter-spacing: -0.04em;
        margin: 0 0 14px;
        font-weight: 800;
        line-height: 1.06;
        text-wrap: balance;
      }
      .sectionSub{
        margin: 0 auto;
        max-width: 720px;
        color: rgba(255,255,255,0.60);
        font-size: 18px;
        line-height: 1.65;
        text-wrap: balance;
      }
      .whySection{
        padding-top: 86px;
      }
      .whyGrid{
        margin-top: 40px;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
      }
      .whyCard{
        text-align:left;
        border-radius: 22px;
        padding: 26px 22px 22px;
        background:
          linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.03));
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .whyCard:hover{
        transform: translateY(-4px);
        border-color: rgba(255,255,255,0.14);
      }
      .whyIcon{
        font-size: 30px;
        margin-bottom: 14px;
      }
      .whyTitle{
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 8px;
      }
      .whyDesc{
        font-size: 15px;
        line-height: 1.6;
        color: rgba(255,255,255,0.56);
        margin: 0;
      }
      .stepsGrid{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 40px;
      }
      .stepCard{
        text-align:left;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.035);
        padding: 24px 22px 22px;
        transition: transform 0.18s ease, border-color 0.18s ease;
      }
      .stepCard:hover{
        transform: translateY(-3px);
        border-color: rgba(255,255,255,0.14);
      }
      .stepCard.premium{
        background:
          linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.03)),
          radial-gradient(circle at top left, rgba(88,217,255,0.08), transparent 42%);
      }
      .stepTopRow{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom: 18px;
      }
      .stepNum{
        font-size: 13px;
        font-weight: 800;
        color: var(--cyan);
        letter-spacing: 0.05em;
      }
      .stepIcon{
        font-size: 28px;
        line-height: 1;
      }
      .stepTitle{
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 8px;
      }
      .stepDesc{
        color: rgba(255,255,255,0.56);
        font-size: 15px;
        line-height: 1.62;
        margin: 0;
      }
      .benefitsSection{
        background:
          radial-gradient(circle at 20% 20%, rgba(88,217,255,0.08), transparent 30%),
          radial-gradient(circle at 80% 20%, rgba(122,86,255,0.09), transparent 35%);
      }
      .benefitsGrid{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-top: 42px;
      }
      .benefitCard{
        position: relative;
        overflow:hidden;
        text-align:left;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.08);
        background:
          linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
        padding: 26px 22px 22px;
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .benefitCard:hover{
        transform: translateY(-4px);
        border-color: rgba(255,255,255,0.14);
      }
      .benefitGlow{
        position:absolute;
        inset:auto -50px -50px auto;
        width: 180px;
        height: 180px;
        border-radius:999px;
        background: radial-gradient(circle, rgba(88,217,255,0.12), transparent 65%);
        filter: blur(20px);
        pointer-events:none;
      }
      .benefitIcon{
        position: relative;
        font-size: 30px;
        margin-bottom: 14px;
      }
      .benefitTitle{
        position: relative;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 8px;
      }
      .benefitDesc{
        position: relative;
        margin: 0;
        font-size: 15px;
        line-height: 1.62;
        color: rgba(255,255,255,0.56);
      }
      .momentsGrid{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 40px;
      }
      .momentCard{
        text-align:left;
        border-radius: 24px;
        padding: 26px 22px 22px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.035);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .momentCard:hover{
        transform: translateY(-4px);
        border-color: rgba(255,255,255,0.14);
      }
      .momentCard.cyan{
        background:
          linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03)),
          radial-gradient(circle at top left, rgba(88,217,255,0.12), transparent 45%);
      }
      .momentCard.indigo{
        background:
          linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03)),
          radial-gradient(circle at top left, rgba(107,92,255,0.14), transparent 45%);
      }
      .momentCard.pink{
        background:
          linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03)),
          radial-gradient(circle at top left, rgba(236,72,153,0.12), transparent 45%);
      }
      .momentLabel{
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: rgba(255,255,255,0.46);
        margin-bottom: 10px;
      }
      .momentTitle{
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 8px;
      }
      .momentDesc{
        margin: 0;
        font-size: 15px;
        line-height: 1.62;
        color: rgba(255,255,255,0.58);
      }
      .householdSection .sectionSub{
        max-width: 760px;
      }
      .householdStatement{
        position: relative;
        overflow: hidden;
        margin-top: 36px;
        margin-bottom: 20px;
        padding: 34px 28px 30px;
        border-radius: 28px;
        border: 1px solid rgba(255,255,255,0.10);
        background:
          linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)),
          radial-gradient(circle at top left, rgba(88,217,255,0.10), transparent 36%),
          radial-gradient(circle at top right, rgba(107,92,255,0.10), transparent 36%);
        text-align: center;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.06),
          0 20px 80px rgba(0,0,0,0.24);
      }
      .householdStatementGlow{
        position:absolute;
        width: 260px;
        height: 260px;
        right: -80px;
        bottom: -120px;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(236,72,153,0.10), transparent 65%);
        filter: blur(24px);
        pointer-events:none;
      }
      .householdStatementEyebrow{
        position: relative;
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: rgba(255,255,255,0.45);
        margin-bottom: 10px;
      }
      .householdStatementTitle{
        position: relative;
        font-size: clamp(28px, 4vw, 44px);
        line-height: 1.05;
        letter-spacing: -0.04em;
        font-weight: 800;
        color: rgba(255,255,255,0.96);
        max-width: 760px;
        margin: 0 auto 12px;
        text-wrap: balance;
      }
      .householdStatementText{
        position: relative;
        max-width: 700px;
        margin: 0 auto;
        font-size: 17px;
        line-height: 1.65;
        color: rgba(255,255,255,0.60);
        text-wrap: balance;
      }
      .premiumGrid{
        margin-top: 18px;
      }
      .householdGrid{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
      }
      .houseCard{
        text-align:left;
        border-radius: 22px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
        padding: 24px 22px 22px;
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .houseCard:hover{
        transform: translateY(-4px);
        border-color: rgba(255,255,255,0.14);
      }
      .houseIcon{
        font-size: 28px;
        margin-bottom: 12px;
      }
      .houseTitle{
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 8px;
      }
      .houseDesc{
        margin: 0;
        font-size: 15px;
        line-height: 1.6;
        color: rgba(255,255,255,0.56);
      }
      .privacySection{
        background:
          radial-gradient(circle at 50% 0%, rgba(247,196,107,0.06), transparent 40%);
      }
      .privacyPills{
        display:flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin-top: 32px;
      }
      .privPill{
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.74);
        font-size: 14px;
        font-weight: 600;
        transition: transform 0.18s ease, background 0.18s ease;
      }
      .privPill:hover{
        transform: translateY(-2px);
        background: rgba(255,255,255,0.06);
      }
      /* ---- COMPARISON STRIP ---- */
      .compTable{
        margin-top: 32px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        overflow: hidden;
        background: rgba(255,255,255,0.02);
      }
      .compHeader{
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr 1fr;
        gap: 0;
        padding: 14px 20px;
        background: rgba(255,255,255,0.04);
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .compFeatureH{
        font-size: 13px;
        font-weight: 700;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .compColH{
        font-size: 13px;
        font-weight: 700;
        text-align: center;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .compNearH{
        color: var(--cyan);
      }
      .compRow{
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr 1fr;
        gap: 0;
        padding: 13px 20px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        transition: background 0.15s ease;
      }
      .compRow:last-child{ border-bottom: none; }
      .compRow:hover{ background: rgba(255,255,255,0.03); }
      .compFeature{
        font-size: 15px;
        color: rgba(255,255,255,0.82);
        font-weight: 500;
      }
      .compCell{
        text-align: center;
        font-size: 16px;
      }
      /* ---- SOCIAL PROOF ---- */
      .socialSection{
        background:
          radial-gradient(circle at 30% 20%, rgba(107,92,255,0.06), transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(88,217,255,0.05), transparent 50%);
      }
      .reviewsGrid{
        margin-top: 32px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      .reviewCard{
        padding: 24px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .reviewCard:hover{
        transform: translateY(-3px);
        border-color: rgba(255,255,255,0.14);
      }
      .reviewStars{
        font-size: 14px;
        color: #FFD700;
        letter-spacing: 2px;
        margin-bottom: 12px;
      }
      .reviewText{
        font-size: 15px;
        line-height: 1.6;
        color: rgba(255,255,255,0.78);
        margin: 0 0 16px;
        font-style: italic;
      }
      .reviewMeta{
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .reviewAuthor{
        font-size: 14px;
        font-weight: 700;
        color: rgba(255,255,255,0.9);
      }
      .reviewContext{
        font-size: 12px;
        color: rgba(255,255,255,0.4);
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
      }
      /* ---- FAQ ---- */
      .faqSection{
        background:
          radial-gradient(circle at 50% 0%, rgba(88,217,255,0.06), transparent 45%);
      }
      .faqList{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 0;
      }
      .faqItem{
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .faqItem:first-child{
        border-top: 1px solid rgba(255,255,255,0.08);
      }
      .faqQ{
        cursor: pointer;
        padding: 20px 0;
        font-size: 17px;
        font-weight: 650;
        color: rgba(255,255,255,0.92);
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        transition: color 0.15s ease;
      }
      .faqQ::-webkit-details-marker{ display: none; }
      .faqQ::after{
        content: "+";
        font-size: 22px;
        font-weight: 400;
        color: rgba(255,255,255,0.4);
        transition: transform 0.2s ease, color 0.2s ease;
        flex-shrink: 0;
      }
      .faqItem[open] .faqQ::after{
        transform: rotate(45deg);
        color: var(--cyan);
      }
      .faqQ:hover{ color: #fff; }
      .faqA{
        padding: 0 0 20px;
        font-size: 15px;
        line-height: 1.7;
        color: rgba(255,255,255,0.62);
        max-width: 640px;
      }
      /* ---- SITE FOOTER ---- */
      .siteFooter{
        border-top: 1px solid rgba(255,255,255,0.06);
        background: rgba(4,5,12,0.96);
        padding: 56px 20px 32px;
      }
      .footerInner{
        max-width: 1080px;
        margin: 0 auto;
      }
      .footerTop{
        display: flex;
        justify-content: space-between;
        gap: 48px;
        flex-wrap: wrap;
      }
      .footerBrandCol{
        max-width: 260px;
      }
      .footerBrandRow{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
      }
      .footerBrandName{
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.03em;
      }
      .footerTagline{
        margin: 0;
        font-size: 14px;
        color: rgba(255,255,255,0.45);
        line-height: 1.5;
      }
      .footerLinks{
        display: flex;
        gap: 56px;
        flex-wrap: wrap;
      }
      .footerCol{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .footerColTitle{
        font-size: 13px;
        font-weight: 700;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 4px;
      }
      .footerLink{
        font-size: 14px;
        color: rgba(255,255,255,0.55);
        transition: color 0.15s ease;
      }
      .footerLink:hover{ color: rgba(255,255,255,0.92); }
      .footerBottom{
        margin-top: 48px;
        padding-top: 24px;
        border-top: 1px solid rgba(255,255,255,0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
      .footerLegal{
        margin: 0;
        font-size: 13px;
        color: rgba(255,255,255,0.3);
      }
      .finalCta{
        position: relative;
        padding: 112px 20px 72px;
        overflow:hidden;
        background:
          radial-gradient(circle at 50% 0%, rgba(90,200,250,0.16), transparent 48%),
          radial-gradient(circle at 65% 20%, rgba(123,77,255,0.10), transparent 50%),
          var(--bg0);
      }
      .finalInner{
        position: relative;
        max-width: 760px;
        margin: 0 auto;
        text-align:center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .finalGlow{
        position:absolute;
        inset: -30%;
        background: radial-gradient(circle, rgba(90,200,250,0.14), rgba(123,77,255,0.10), transparent 58%);
        filter: blur(90px);
        opacity: 0.7;
        pointer-events:none;
      }
      .finalTitle{
        margin: 16px 0 12px;
        font-size: clamp(38px, 5vw, 62px);
        letter-spacing: -0.045em;
        font-weight: 800;
        line-height: 1.03;
        text-wrap: balance;
      }
      .finalSub{
        margin: 0 0 24px;
        color: rgba(255,255,255,0.56);
        font-size: 18px;
        line-height: 1.58;
        max-width: 560px;
      }
      .finalButtons{
        display:flex;
        justify-content:center;
        gap: 12px;
        flex-wrap: wrap;
      }
      .backToTop{
        display: inline-block;
        margin-top: 20px;
        font-size: 14px;
        color: rgba(255,255,255,0.45);
        transition: color 0.15s;
      }
      .backToTop:hover{ color: rgba(255,255,255,0.75); }
      .footerMini{
        margin-top: 48px;
        display:flex;
        flex-direction: column;
        align-items:center;
        gap: 8px;
        opacity: 0.74;
      }
      .footerBrand{
        display:flex;
        align-items:center;
        gap: 8px;
      }
      .footerWord{
        font-weight: 800;
        letter-spacing: -0.03em;
        font-size: 16px;
      }
      .footerNote{
        font-size: 13px;
        color: rgba(255,255,255,0.50);
      }
      .nearPulse{
        transform-origin: 256px 256px;
        animation: nearPulse 2.8s ease-in-out infinite;
      }
      .revealUp{
        animation: revealUp 0.9s cubic-bezier(.2,.8,.2,1) both;
      }
      .delay1{ animation-delay: 0.05s; }
      .delay2{ animation-delay: 0.14s; }
      .delay3{ animation-delay: 0.23s; }
      .delay4{ animation-delay: 0.32s; }
      @keyframes nearPulse{
        0%, 100% { transform: scale(1); opacity: 0.98; }
        50% { transform: scale(1.03); opacity: 1; }
      }
      @keyframes heroGlowPulse{
        0%, 100%{
          transform: scale(1);
          opacity: 0.92;
        }
        50%{
          transform: scale(1.04);
          opacity: 1;
        }
      }
      @keyframes heroPhoneFloat{
        0%, 100%{
          transform: translate(-50%, -50%) scale(1.02) translateY(0px);
        }
        50%{
          transform: translate(-50%, -50%) scale(1.02) translateY(-10px);
        }
      }
      @keyframes floatCard{
        0%, 100%{
          transform: translateY(0px);
        }
        50%{
          transform: translateY(-6px);
        }
      }
      @keyframes floatLeft {
        0%, 100% { transform: scale(0.95) translateX(30px) translateY(0); }
        50% { transform: scale(0.95) translateX(30px) translateY(-18px); }
      }
      @keyframes floatCenter {
        0%, 100% { transform: scale(1.06) translateY(0); }
        50% { transform: scale(1.06) translateY(-14px); }
      }
      @keyframes floatRight {
        0%, 100% { transform: scale(0.95) translateX(-30px) translateY(0); }
        50% { transform: scale(0.95) translateX(-30px) translateY(-20px); }
      }
      @keyframes revealUp{
        from{
          opacity: 0;
          transform: translateY(18px);
        }
        to{
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slowDriftA{
        0%,100% { transform: translate(0,0); }
        50% { transform: translate(18px,-10px); }
      }
      @keyframes slowDriftB{
        0%,100% { transform: translate(0,0); }
        50% { transform: translate(-16px,12px); }
      }
      @keyframes slowDriftC{
        0%,100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(10px); }
      }
      @media (max-width: 1100px) {
        .showcaseInner {
          flex-direction: column;
          gap: 40px;
        }
        .showPhone.left {
          animation: floatVertical 5s ease-in-out infinite;
          opacity: 0.85;
        }
        .showPhone.right {
          animation: floatVertical 5s ease-in-out infinite;
          animation-delay: -1.5s;
          opacity: 0.85;
        }
        .showPhone.center {
          animation: floatVertical 5s ease-in-out infinite;
          animation-delay: -3s;
        }
      }
      @media (max-width: 1024px){
        .whyGrid,
        .momentsGrid,
        .householdGrid{
          grid-template-columns: 1fr;
        }
        .benefitsGrid{
          grid-template-columns: 1fr;
        }
        .magicStripInner{
          grid-template-columns: 1fr;
        }
      }
      @media (max-width: 768px){
        .hero{ padding: 94px 18px 40px; }
        .heroTitle{ font-size: clamp(40px, 12vw, 58px); }
        .heroSub{ font-size: 17px; }
        .heroAppIcon{
          width: 72px;
          height: 72px;
          border-radius: 20px;
        }
        .heroVisual{
          min-height: 430px;
          margin-top: 28px;
        }
        .heroVisualGlow{
          inset: 60px 0 0 0;
          filter: blur(36px);
        }
        .heroPhone{
          top: 52%;
          transform: translate(-50%, -50%) scale(0.84);
        }
        .heroPhoneBezel{
          width: 260px;
          height: 540px;
          border-radius: 40px;
        }
        .heroPhoneScreen{
          border-radius: 32px;
        }
        .heroLockscreenWrap{
          transform: translateY(22px);
          max-width: 100%;
        }
        .heroGlowRing{
          width: 360px;
          height: 240px;
          filter: blur(34px);
        }
        .lockscreenCard{
          max-width: 100%;
          border-radius: 28px;
          padding: 16px 14px 14px;
        }
        .lockscreenTime{
          font-size: 42px;
        }
        .arrivalTitle{
          font-size: 21px;
        }
        .arrivalTask{
          padding: 10px 11px;
        }
        .sectionWrap{ padding: 74px 18px; }
        .stepsGrid{ grid-template-columns: 1fr; gap: 12px; }
        .showBezel {
          width: 240px;
          height: 500px;
          border-radius: 38px;
        }
        .showScreenImg {
          border-radius: 30px;
        }
        .showcase {
          padding: 48px 0 96px;
        }
        .showcaseSub {
          font-size: 16px;
        }
        .hideOnMobile{ display: none; }
        .finalCta{ padding: 82px 18px 60px; }
        .compHeader, .compRow{
          grid-template-columns: 1.4fr 0.8fr 0.8fr 0.8fr;
          padding: 12px 14px;
        }
        .compFeature{ font-size: 13px; }
        .compFeatureH, .compColH{ font-size: 11px; }
        .reviewsGrid{
          grid-template-columns: 1fr;
        }
        .footerTop{
          flex-direction: column;
          gap: 32px;
        }
        .footerLinks{
          gap: 32px;
        }
        .footerBottom{
          flex-direction: column;
          text-align: center;
        }
      }
      @keyframes floatVertical {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      @media (prefers-reduced-motion: reduce){
        *, *:before, *:after{
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  )
}

