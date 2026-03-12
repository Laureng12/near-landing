"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

const platforms = [
  { icon: "📱", name: "iPhone" },
  { icon: "⌚", name: "Apple Watch" },
  { icon: "🚗", name: "CarPlay" },
  { icon: "🏝️", name: "Dynamic Island" },
  { icon: "📱", name: "Widgets" },
  { icon: "🗣️", name: "Siri" },
]

export default function FeaturesPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <nav className="ftNav">
        <Link href="/" className="ftNavLogo">
          <Image src="/near-icon-hero.png" alt="Near" width={28} height={28} className="ftNavIcon" />
          <span className="ftNavName">near</span>
        </Link>
        <div className="ftNavLinks">
          <Link href="/" className="ftNavLink">Home</Link>
          <a href={APP_STORE_URL} className="ftNavCta">Download</a>
        </div>
      </nav>

      <main className="ftPage">

        {/* ─── Hero ─── */}
        <section className="ftHero">
          <div className="ftHeroGlow" />
          <p className="ftHeroEyebrow">Features</p>
          <h1 className="ftHeroTitle">
            Stop forgetting.<br />Start <span className="ftGradient">living.</span>
          </h1>
          <p className="ftHeroSub">
            Near keeps track of everything you need to do — and tells you at the moment
            and place it actually matters.
          </p>
        </section>


        {/* ─── 1. Never forget at the store ─── */}
        <section className="reveal ftSection">
          <div className="ftBlock">
            <span className="ftBlockEmoji">🛒</span>
            <h2 className="ftBlockTitle">Never forget at the store again</h2>
            <p className="ftBlockLead">
              You always remember what you need — just not when you&apos;re actually there.
              Near fixes that. Add a task to any place, and it appears automatically when you arrive.
              A full-screen checklist shows everything for that stop. One tap marks it all done.
            </p>
            <div className="ftPoints">
              <div className="ftPoint">
                <span className="ftPointIcon">📍</span>
                <div>
                  <strong>Arrive and see your list</strong>
                  <p>Tasks surface on your lock screen the moment you pull into the parking lot.</p>
                </div>
              </div>
              <div className="ftPoint">
                <span className="ftPointIcon">👋</span>
                <div>
                  <strong>Leave without worry</strong>
                  <p>If you forgot something, Near alerts you before you drive away.</p>
                </div>
              </div>
              <div className="ftPoint">
                <span className="ftPointIcon">🔄</span>
                <div>
                  <strong>It remembers what you forget</strong>
                  <p>Bought oat milk last time? Near suggests it when you&apos;re back at that store.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ─── 2. Household in sync ─── */}
        <section className="reveal ftSection ftSectionAlt">
          <div className="ftBlock">
            <span className="ftBlockEmoji">👨‍👩‍👧‍👦</span>
            <h2 className="ftBlockTitle">Your household, finally in sync</h2>
            <p className="ftBlockLead">
              No more &ldquo;can you grab...&rdquo; texts that get buried. Near shares lists across your
              household — and whoever arrives at the store first gets the notification.
              Everyone sees what&apos;s been done in real time.
            </p>
            <div className="ftPoints">
              <div className="ftPoint">
                <span className="ftPointIcon">📋</span>
                <div>
                  <strong>One shared list, multiple people</strong>
                  <p>Anyone can add items. Whoever&apos;s closest gets reminded.</p>
                </div>
              </div>
              <div className="ftPoint">
                <span className="ftPointIcon">📰</span>
                <div>
                  <strong>Activity feed</strong>
                  <p>See who picked up what, and when. No duplicate trips.</p>
                </div>
              </div>
              <div className="ftPoint">
                <span className="ftPointIcon">💬</span>
                <div>
                  <strong>Join in seconds</strong>
                  <p>Send a text link. That&apos;s it — no accounts to create, no apps to explain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ─── 3. Works everywhere ─── */}
        <section className="reveal ftSection">
          <div className="ftBlock ftBlockCenter">
            <span className="ftBlockEmoji">🌐</span>
            <h2 className="ftBlockTitle">Works everywhere you do</h2>
            <p className="ftBlockLead">
              You shouldn&apos;t have to pull out your phone every time you need to check a list.
              Near lives on your wrist, in your car, on your home screen, and in the Dynamic Island —
              so the right information is always in reach.
            </p>
            <div className="ftPlatformStrip">
              {platforms.map((p, i) => (
                <div key={i} className="ftPlatformChip">
                  <span className="ftPlatformChipIcon">{p.icon}</span>
                  <span className="ftPlatformChipName">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── 4. Knows your routine ─── */}
        <section className="reveal ftSection ftSectionDark">
          <div className="ftBlock ftBlockDark">
            <span className="ftBlockEmoji">🧠</span>
            <h2 className="ftBlockTitle ftLight">It learns how you live</h2>
            <p className="ftBlockLead ftDim">
              You drove past the pharmacy three times this week. Near notices patterns
              like that — and gently suggests stops along routes you&apos;re already taking.
              No extra trips. No wasted time.
            </p>
            <div className="ftPoints">
              <div className="ftPoint ftPointDark">
                <span className="ftPointIcon">🛣️</span>
                <div>
                  <strong className="ftLight">On your route</strong>
                  <p className="ftDim">Driving past a place with tasks? Near catches it and lets you know before you miss the turn.</p>
                </div>
              </div>
              <div className="ftPoint ftPointDark">
                <span className="ftPointIcon">📅</span>
                <div>
                  <strong className="ftLight">Pattern suggestions</strong>
                  <p className="ftDim">&ldquo;You usually go to Costco on Saturdays&rdquo; — with a ready-made list.</p>
                </div>
              </div>
              <div className="ftPoint ftPointDark">
                <span className="ftPointIcon">🌧️</span>
                <div>
                  <strong className="ftLight">Weather-aware</strong>
                  <p className="ftDim">Rain coming in 45 minutes? Near nudges you to run that errand now.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ─── 5. Add in seconds, plan the whole trip ─── */}
        <section className="reveal ftSection">
          <div className="ftBlock">
            <span className="ftBlockEmoji">📸</span>
            <h2 className="ftBlockTitle">Snap a photo. Plan the trip.</h2>
            <p className="ftBlockLead">
              See a list on the fridge? A recipe in a cookbook? Just take a picture —
              Near reads it and turns it into organized tasks instantly. Then it maps out
              every stop, gives you the fastest route, and tells you exactly how long
              the whole run will take.
            </p>
            <div className="ftPoints">
              <div className="ftPoint">
                <span className="ftPointIcon">📷</span>
                <div>
                  <strong>Photo to list</strong>
                  <p>Snap a handwritten note, a recipe, or a whiteboard. Near turns it into a task list in seconds.</p>
                </div>
              </div>
              <div className="ftPoint">
                <span className="ftPointIcon">🗺️</span>
                <div>
                  <strong>Errand game plan</strong>
                  <p>See all your stops on a map with the optimal route, drive times between each, and a total trip estimate.</p>
                </div>
              </div>
              <div className="ftPoint">
                <span className="ftPointIcon">🏬</span>
                <div>
                  <strong>Sorted by department</strong>
                  <p>Grocery items auto-organize by department so you move through the store once, not back and forth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ─── 6. Private by design ─── */}
        <section className="reveal ftSection ftSectionAlt">
          <div className="ftBlock ftBlockCenter">
            <span className="ftBlockEmoji">🔒</span>
            <h2 className="ftBlockTitle">Private by design</h2>
            <p className="ftBlockLead">
              A location app that doesn&apos;t sell your location. Near processes everything
              on your device. No ads, no tracking, no data harvesting. Your places, your
              tasks, your life — kept between you and your phone.
            </p>
            <div className="ftPrivacyRow">
              <div className="ftPrivacyBadge">
                <span>📡</span>
                <span>Offline-first</span>
              </div>
              <div className="ftPrivacyBadge">
                <span>🧠</span>
                <span>On-device AI</span>
              </div>
              <div className="ftPrivacyBadge">
                <span>🚫</span>
                <span>No ads ever</span>
              </div>
              <div className="ftPrivacyBadge">
                <span>🗑️</span>
                <span>Delete anytime</span>
              </div>
            </div>
          </div>
        </section>


        {/* ─── CTA ─── */}
        <section className="reveal ftCta">
          <div className="ftCtaOrb ftCtaOrb1" />
          <div className="ftCtaOrb ftCtaOrb2" />
          <h2 className="ftCtaTitle">Ready to try <span className="ftGradient">Near</span>?</h2>
          <p className="ftCtaSub">Free on the App Store. No ads, no tracking.</p>
          <a href={APP_STORE_URL} className="ftCtaBtn">Download for iPhone</a>
        </section>

      </main>

      <footer className="ftFooter">
        <div className="ftFooterInner">
          <span className="ftFooterCopy">&copy; {new Date().getFullYear()} Near</span>
          <div className="ftFooterLinks">
            <Link href="/privacy" className="ftFooterLink">Privacy</Link>
            <Link href="/terms" className="ftFooterLink">Terms</Link>
            <Link href="/support" className="ftFooterLink">Support</Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* ─── Nav ─── */
        .ftNav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem; height: 56px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--line);
        }
        .ftNavLogo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
        .ftNavIcon { border-radius: 6px; }
        .ftNavName { font-size: 18px; font-weight: 700; color: var(--foreground); letter-spacing: -0.3px; }
        .ftNavLinks { display: flex; align-items: center; gap: 1.5rem; }
        .ftNavLink { font-size: 14px; color: var(--text-secondary); text-decoration: none; font-weight: 500; }
        .ftNavLink:hover { color: var(--foreground); }
        .ftNavCta {
          font-size: 13px; font-weight: 600; color: #fff;
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
          padding: 7px 18px; border-radius: 980px; text-decoration: none;
        }

        /* ─── Hero ─── */
        .ftHero {
          position: relative; text-align: center;
          padding: 120px 24px 80px; overflow: hidden;
        }
        .ftHeroGlow {
          position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(47,109,255,0.12) 0%, rgba(123,92,255,0.08) 40%, transparent 70%);
          pointer-events: none;
        }
        .ftHeroEyebrow {
          font-size: 15px; font-weight: 600; letter-spacing: 0.5px;
          text-transform: uppercase; color: var(--blue); margin-bottom: 16px;
        }
        .ftHeroTitle {
          font-family: var(--font-display); font-size: 64px; font-weight: 700;
          letter-spacing: -2px; line-height: 1.05; color: var(--foreground);
          margin: 0 auto 24px; max-width: 700px;
        }
        .ftHeroSub {
          font-size: 19px; line-height: 1.6; color: var(--text-secondary);
          max-width: 520px; margin: 0 auto;
        }
        .ftGradient {
          background: linear-gradient(135deg, #2F6DFF 0%, #7B5CFF 40%, #C74BF6 70%, #FF6B8A 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─── Sections ─── */
        .ftPage { max-width: 100%; overflow-x: hidden; }
        .ftSection { padding: 80px 24px; }
        .ftSectionAlt { background: var(--surface); }
        .ftSectionDark {
          background: linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #302b63 60%, #24243e 100%);
        }

        /* ─── Content blocks ─── */
        .ftBlock { max-width: 680px; margin: 0 auto; }
        .ftBlockCenter { text-align: center; }
        .ftBlockEmoji { font-size: 48px; display: block; margin-bottom: 16px; }
        .ftBlockTitle {
          font-family: var(--font-display); font-size: 36px; font-weight: 700;
          letter-spacing: -1.2px; line-height: 1.15; color: var(--foreground);
          margin: 0 0 16px;
        }
        .ftBlockLead {
          font-size: 18px; line-height: 1.7; color: var(--text-secondary);
          margin: 0 0 36px;
        }
        .ftLight { color: #fff !important; }
        .ftDim { color: rgba(255,255,255,0.6) !important; }

        /* ─── Supporting points ─── */
        .ftPoints { display: flex; flex-direction: column; gap: 24px; }
        .ftPoint {
          display: flex; gap: 16px; align-items: flex-start;
        }
        .ftPointDark strong { color: #fff; }
        .ftPointDark p { color: rgba(255,255,255,0.55); }
        .ftPointIcon {
          font-size: 24px; flex-shrink: 0; margin-top: 2px;
        }
        .ftPoint strong {
          font-size: 16px; font-weight: 650; color: var(--foreground);
          display: block; margin-bottom: 4px;
        }
        .ftPoint p {
          font-size: 15px; line-height: 1.55; color: var(--text-secondary);
          margin: 0;
        }

        /* ─── Platform strip ─── */
        .ftPlatformStrip {
          display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;
          margin-top: 8px;
        }
        .ftPlatformChip {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid var(--line); border-radius: 980px;
          padding: 10px 20px; font-size: 14px; font-weight: 600; color: var(--foreground);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ftPlatformChip:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .ftPlatformChipIcon { font-size: 18px; }

        /* ─── Privacy badges ─── */
        .ftPrivacyRow {
          display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;
          margin-top: 8px;
        }
        .ftPrivacyBadge {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid var(--line); border-radius: 12px;
          padding: 12px 20px; font-size: 15px; font-weight: 600; color: var(--foreground);
        }

        /* ─── CTA ─── */
        .ftCta {
          position: relative; text-align: center; padding: 100px 24px;
          background: linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #302b63 60%, #24243e 100%);
          overflow: hidden;
        }
        .ftCtaOrb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px); opacity: 0.3;
        }
        .ftCtaOrb1 {
          width: 400px; height: 400px; top: -100px; right: -100px;
          background: radial-gradient(circle, rgba(47,109,255,0.6) 0%, transparent 70%);
          animation: orbFloat1 8s ease-in-out infinite;
        }
        .ftCtaOrb2 {
          width: 300px; height: 300px; bottom: -80px; left: -60px;
          background: radial-gradient(circle, rgba(199,75,246,0.5) 0%, transparent 70%);
          animation: orbFloat2 10s ease-in-out infinite;
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }
        .ftCtaTitle {
          font-family: var(--font-display); font-size: 48px; font-weight: 700;
          letter-spacing: -1.5px; color: #fff; margin: 0 0 12px;
          position: relative; z-index: 1;
        }
        .ftCtaSub {
          font-size: 18px; color: rgba(255,255,255,0.6);
          margin: 0 0 32px; position: relative; z-index: 1;
        }
        .ftCtaBtn {
          display: inline-block; padding: 14px 36px; border-radius: 980px;
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
          color: #fff; font-size: 16px; font-weight: 600; text-decoration: none;
          position: relative; z-index: 1;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ftCtaBtn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(47,109,255,0.4); }

        /* ─── Footer ─── */
        .ftFooter { border-top: 1px solid var(--line); padding: 2rem 1.5rem; }
        .ftFooterInner {
          max-width: 680px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ftFooterCopy { font-size: 13px; color: var(--text-secondary); }
        .ftFooterLinks { display: flex; gap: 1.5rem; }
        .ftFooterLink { font-size: 13px; color: var(--text-secondary); text-decoration: none; }
        .ftFooterLink:hover { color: var(--blue); }

        /* ─── Scroll reveal ─── */
        .reveal {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        /* ─── Responsive ─── */
        @media (max-width: 600px) {
          .ftNav { padding: 0 16px; }
          .ftHero { padding: 80px 16px 60px; }
          .ftHeroTitle { font-size: 40px; letter-spacing: -1px; }
          .ftHeroSub { font-size: 16px; }
          .ftSection { padding: 60px 16px; }
          .ftBlockTitle { font-size: 28px; }
          .ftBlockLead { font-size: 16px; }
          .ftCtaTitle { font-size: 36px; }
          .ftFooterInner { flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>
    </>
  )
}
