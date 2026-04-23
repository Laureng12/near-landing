"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

const platforms = [
  { icon: "📱", name: "iPhone", color: "#2F6DFF" },
  { icon: "⌚", name: "Apple Watch", color: "#34C759" },
  { icon: "🚗", name: "CarPlay", color: "#FF6B8A" },
  { icon: "🗣️", name: "Siri", color: "#C74BF6" },
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/near-logo-light-cropped.png"
            alt="Near"
            className="ftNavLogoImg"
            style={{ height: 24, width: 'auto', display: 'block' }}
          />
        </Link>
        <div className="ftNavLinks">
          <Link href="/" className="ftNavLink ftNavLinkHideMobile">Home</Link>
          <Link href="/features" className="ftNavLink ftNavLinkActive">Features</Link>
          <a href={APP_STORE_URL} className="ftNavCta">Download</a>
        </div>
      </nav>

      <main className="ftPage">

        {/* ─── Hero ─── */}
        <section className="ftHero">
          <div className="ftHeroOrb ftHeroOrb1" />
          <div className="ftHeroOrb ftHeroOrb2" />
          <div className="ftHeroOrb ftHeroOrb3" />
          <p className="ftHeroEyebrow">Features</p>
          <h1 className="ftHeroTitle">
            You have a full life.<br />Save your brain space for <span className="ftGradient">what matters.</span>
          </h1>
          <p className="ftHeroSub">
            Near handles the rest.
          </p>
          <div className="ftHeroDivider" />
        </section>


        {/* ─── 1. Never forget at the store ─── */}
        <section className="reveal ftSection">
          <div className="ftBlock">
            <div className="ftIconGlow ftIconGlowBlue">
              <span className="ftBlockEmoji">🛒</span>
            </div>
            <h2 className="ftBlockTitle">Never forget at the store again</h2>
            <p className="ftBlockLead">
              You always remember what you need — just not when you&apos;re actually there.
              Near fixes that. Add a task to any place, and it appears automatically when you arrive.
              A full-screen checklist shows everything for that stop. One tap marks it all done.
            </p>
            <div className="ftPoints">
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #2F6DFF, #7B5CFF)'}} />
                <div>
                  <strong>Arrive and see your list</strong>
                  <p>Tasks surface on your lock screen the moment you pull into the parking lot.</p>
                </div>
              </div>
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #7B5CFF, #C74BF6)'}} />
                <div>
                  <strong>Leave without worry</strong>
                  <p>If you forgot something, Near alerts you before you drive away.</p>
                </div>
              </div>
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #C74BF6, #FF6B8A)'}} />
                <div>
                  <strong>It remembers what you forget</strong>
                  <p>Bought oat milk last time? Near suggests it when you&apos;re back at that store.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ftDivider" />

        {/* ─── 2. Household in sync ─── */}
        <section className="reveal ftSection ftSectionWarm">
          <div className="ftSectionGlow ftSectionGlowWarm" />
          <div className="ftBlock">
            <div className="ftIconGlow ftIconGlowPink">
              <span className="ftBlockEmoji">👨‍👩‍👧‍👦</span>
            </div>
            <h2 className="ftBlockTitle">Your household, finally in sync</h2>
            <p className="ftBlockLead">
              No more &ldquo;can you grab...&rdquo; texts that get buried. Near shares lists across your
              household — and whoever arrives at the store first gets the notification.
              Everyone sees what&apos;s been done in real time.
            </p>
            <div className="ftPoints">
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #FF6B8A, #FF9F0A)'}} />
                <div>
                  <strong>One shared list, multiple people</strong>
                  <p>Anyone can add items. Whoever&apos;s closest gets reminded.</p>
                </div>
              </div>
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #FF9F0A, #FFCC02)'}} />
                <div>
                  <strong>Activity feed</strong>
                  <p>See who picked up what, and when. No duplicate trips.</p>
                </div>
              </div>
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #FFCC02, #34C759)'}} />
                <div>
                  <strong>Join in seconds</strong>
                  <p>Send a text link. That&apos;s it — no accounts to create, no apps to explain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ftDivider" />

        {/* ─── 3. Works everywhere ─── */}
        <section className="reveal ftSection">
          <div className="ftBlock ftBlockCenter">
            <div className="ftIconGlow ftIconGlowGreen">
              <span className="ftBlockEmoji">🌐</span>
            </div>
            <h2 className="ftBlockTitle">Works everywhere you do</h2>
            <p className="ftBlockLead">
              You shouldn&apos;t have to pull out your phone every time you need to check a list.
              Near lives on your wrist, in your car, and anywhere Siri can hear you —
              so the right information is always in reach.
            </p>
            <div className="ftPlatformStrip">
              {platforms.map((p, i) => (
                <div key={i} className="ftPlatformChip" style={{borderColor: `${p.color}30`}}>
                  <span className="ftPlatformChipIcon">{p.icon}</span>
                  <span className="ftPlatformChipName">{p.name}</span>
                  <div className="ftChipGlow" style={{background: p.color}} />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── 4. Knows your routine ─── */}
        <section className="reveal ftSection ftSectionDark">
          <div className="ftDarkOrb ftDarkOrb1" />
          <div className="ftDarkOrb ftDarkOrb2" />
          <div className="ftDarkOrb ftDarkOrb3" />
          <div className="ftBlock ftBlockDark">
            <div className="ftIconGlow ftIconGlowPurple">
              <span className="ftBlockEmoji">🧠</span>
            </div>
            <h2 className="ftBlockTitle ftLight">It learns how you live</h2>
            <p className="ftBlockLead ftDim">
              You drove past the pharmacy three times this week. Near notices patterns
              like that — and gently suggests stops along routes you&apos;re already taking.
              No extra trips. No wasted time.
            </p>
            <div className="ftPoints">
              <div className="ftPoint ftPointDark">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #7B5CFF, #2F6DFF)'}} />
                <div>
                  <strong className="ftLight">On your route</strong>
                  <p className="ftDim">Driving past a place with tasks? Near catches it and lets you know before you miss the turn.</p>
                </div>
              </div>
              <div className="ftPoint ftPointDark">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #2F6DFF, #00D4AA)'}} />
                <div>
                  <strong className="ftLight">Pattern suggestions</strong>
                  <p className="ftDim">&ldquo;You usually go to Costco on Saturdays&rdquo; — with a ready-made list.</p>
                </div>
              </div>
              <div className="ftPoint ftPointDark">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #00D4AA, #4FC3F7)'}} />
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
          <div className="ftSectionGlow ftSectionGlowBlue" />
          <div className="ftBlock">
            <div className="ftIconGlow ftIconGlowOrange">
              <span className="ftBlockEmoji">📸</span>
            </div>
            <h2 className="ftBlockTitle">Snap a photo. Plan the trip.</h2>
            <p className="ftBlockLead">
              See a list on the fridge? A recipe in a cookbook? Just take a picture —
              Near reads it and turns it into organized tasks instantly. Then it maps out
              every stop, gives you the fastest route, and tells you exactly how long
              the whole run will take.
            </p>
            <div className="ftPoints">
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #FF9F0A, #FF6B8A)'}} />
                <div>
                  <strong>Photo to list</strong>
                  <p>Snap a handwritten note, a recipe, or a whiteboard. Near turns it into a task list in seconds.</p>
                </div>
              </div>
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #2F6DFF, #7B5CFF)'}} />
                <div>
                  <strong>Errand game plan</strong>
                  <p>See all your stops on a map with the optimal route, drive times between each, and a total trip estimate.</p>
                </div>
              </div>
              <div className="ftPoint">
                <div className="ftPointDot" style={{background: 'linear-gradient(135deg, #34C759, #00D4AA)'}} />
                <div>
                  <strong>Sorted by department</strong>
                  <p>Grocery items auto-organize by department so you move through the store once, not back and forth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ftDivider" />

        {/* ─── 6. Private by design ─── */}
        <section className="reveal ftSection ftSectionPrivacy">
          <div className="ftBlock ftBlockCenter">
            <div className="ftIconGlow ftIconGlowTeal">
              <span className="ftBlockEmoji">🔒</span>
            </div>
            <h2 className="ftBlockTitle">Private by design</h2>
            <p className="ftBlockLead">
              A location app that doesn&apos;t sell your location. Near processes everything
              on your device. No ads, no tracking, no data harvesting. Your places, your
              tasks, your life — kept between you and your phone.
            </p>
            <div className="ftPrivacyRow">
              <div className="ftPrivacyBadge ftPB0">
                <span>📡</span>
                <span>Offline-first</span>
              </div>
              <div className="ftPrivacyBadge ftPB1">
                <span>🧠</span>
                <span>On-device AI</span>
              </div>
              <div className="ftPrivacyBadge ftPB2">
                <span>🚫</span>
                <span>No ads ever</span>
              </div>
              <div className="ftPrivacyBadge ftPB3">
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
          <div className="ftCtaOrb ftCtaOrb3" />
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
        .ftNavLogo { display: flex; align-items: center; text-decoration: none; }
        .ftNavLogoImg { height: 24px; width: auto; display: block; object-fit: contain; }
        .ftNavLinks { display: flex; align-items: center; gap: 1.5rem; }
        .ftNavLink { font-size: 14px; color: var(--text-secondary); text-decoration: none; font-weight: 500; }
        .ftNavLink:hover { color: var(--foreground); }
        .ftNavLinkActive { color: var(--foreground); }
        .ftNavCta {
          font-size: 13px; font-weight: 600; color: #fff;
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 100%);
          padding: 7px 18px; border-radius: 980px; text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ftNavCta:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(47,109,255,0.3); }

        /* ─── Hero ─── */
        .ftHero {
          position: relative; text-align: center;
          padding: 120px 24px 60px; overflow: hidden;
        }
        .ftHeroOrb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px);
        }
        .ftHeroOrb1 {
          width: 500px; height: 400px; top: -100px; left: 50%; margin-left: -250px;
          background: radial-gradient(ellipse, rgba(47,109,255,0.15) 0%, transparent 70%);
          animation: heroFloat1 12s ease-in-out infinite;
        }
        .ftHeroOrb2 {
          width: 350px; height: 350px; top: -50px; right: -100px;
          background: radial-gradient(circle, rgba(199,75,246,0.12) 0%, transparent 70%);
          animation: heroFloat2 10s ease-in-out infinite;
        }
        .ftHeroOrb3 {
          width: 300px; height: 300px; top: 0; left: -80px;
          background: radial-gradient(circle, rgba(255,107,138,0.1) 0%, transparent 70%);
          animation: heroFloat3 14s ease-in-out infinite;
        }
        @keyframes heroFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 15px) scale(1.05); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, -15px); }
        }
        .ftHeroEyebrow {
          font-size: 14px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 16px;
          background: linear-gradient(135deg, #2F6DFF 0%, #C74BF6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ftHeroTitle {
          font-family: var(--font-display); font-size: 64px; font-weight: 700;
          letter-spacing: -2px; line-height: 1.05; color: var(--foreground);
          margin: 0 auto 24px; max-width: 700px; position: relative; z-index: 1;
        }
        .ftHeroSub {
          font-size: 19px; line-height: 1.6; color: var(--text-secondary);
          max-width: 520px; margin: 0 auto; position: relative; z-index: 1;
        }
        .ftHeroDivider {
          width: 80px; height: 4px; border-radius: 2px; margin: 48px auto 0;
          background: linear-gradient(90deg, #2F6DFF, #7B5CFF, #C74BF6, #FF6B8A);
        }
        .ftGradient {
          background: linear-gradient(135deg, #2F6DFF 0%, #7B5CFF 40%, #C74BF6 70%, #FF6B8A 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─── Section dividers ─── */
        .ftDivider {
          width: 48px; height: 3px; border-radius: 2px; margin: 0 auto;
          background: linear-gradient(90deg, var(--blue), #C74BF6);
          opacity: 0.4;
        }

        /* ─── Sections ─── */
        .ftPage { max-width: 100%; overflow-x: hidden; }
        .ftSection { padding: 80px 24px; position: relative; overflow: hidden; }
        .ftSectionWarm {
          background: linear-gradient(180deg, #FFF9F5 0%, #FFF5EE 50%, #FFFBF8 100%);
        }
        .ftSectionPrivacy {
          background: linear-gradient(180deg, #F0F7FF 0%, #F5F0FF 50%, #FAFBFF 100%);
        }
        .ftSectionDark {
          background: linear-gradient(135deg, #0f0c29 0%, #1a1040 25%, #302b63 50%, #1a1040 75%, #24243e 100%);
          overflow: hidden; position: relative;
        }

        /* ─── Floating section glows ─── */
        .ftSectionGlow {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          filter: blur(100px); pointer-events: none; opacity: 0.15;
        }
        .ftSectionGlowWarm {
          background: radial-gradient(circle, #FF6B8A 0%, transparent 70%);
          top: -100px; right: -100px;
        }
        .ftSectionGlowBlue {
          background: radial-gradient(circle, #2F6DFF 0%, transparent 70%);
          bottom: -100px; left: -100px;
        }

        /* ─── Dark section orbs ─── */
        .ftDarkOrb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(100px); opacity: 0.2;
        }
        .ftDarkOrb1 {
          width: 400px; height: 400px; top: -80px; right: -80px;
          background: radial-gradient(circle, #7B5CFF 0%, transparent 70%);
          animation: darkOrb1 10s ease-in-out infinite;
        }
        .ftDarkOrb2 {
          width: 300px; height: 300px; bottom: -60px; left: -60px;
          background: radial-gradient(circle, #2F6DFF 0%, transparent 70%);
          animation: darkOrb2 12s ease-in-out infinite;
        }
        .ftDarkOrb3 {
          width: 250px; height: 250px; top: 40%; left: 60%;
          background: radial-gradient(circle, #00D4AA 0%, transparent 70%);
          animation: darkOrb3 8s ease-in-out infinite;
        }
        @keyframes darkOrb1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
        }
        @keyframes darkOrb2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        @keyframes darkOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 15px) scale(1.1); }
        }

        /* ─── Icon glow backgrounds ─── */
        .ftIconGlow {
          width: 80px; height: 80px; border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; position: relative;
        }
        .ftIconGlowBlue { background: linear-gradient(135deg, rgba(47,109,255,0.12) 0%, rgba(123,92,255,0.12) 100%); }
        .ftIconGlowPink { background: linear-gradient(135deg, rgba(255,107,138,0.12) 0%, rgba(255,159,10,0.12) 100%); }
        .ftIconGlowGreen { background: linear-gradient(135deg, rgba(52,199,89,0.12) 0%, rgba(0,212,170,0.12) 100%); }
        .ftIconGlowPurple { background: linear-gradient(135deg, rgba(123,92,255,0.15) 0%, rgba(199,75,246,0.15) 100%); }
        .ftIconGlowOrange { background: linear-gradient(135deg, rgba(255,159,10,0.12) 0%, rgba(255,107,138,0.12) 100%); }
        .ftIconGlowTeal { background: linear-gradient(135deg, rgba(47,109,255,0.12) 0%, rgba(0,212,170,0.12) 100%); }

        /* ─── Content blocks ─── */
        .ftBlock { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .ftBlockCenter { text-align: center; }
        .ftBlockEmoji { font-size: 40px; }
        .ftBlockTitle {
          font-family: var(--font-display); font-size: 36px; font-weight: 700;
          letter-spacing: -1.2px; line-height: 1.15; color: var(--foreground);
          margin: 0 0 16px; text-align: center;
        }
        .ftBlockLead {
          font-size: 18px; line-height: 1.7; color: var(--text-secondary);
          margin: 0 0 36px; text-align: center;
        }
        .ftLight { color: #fff !important; }
        .ftDim { color: rgba(255,255,255,0.6) !important; }

        /* ─── Supporting points ─── */
        .ftPoints { display: flex; flex-direction: column; gap: 24px; }
        .ftPoint {
          display: flex; gap: 16px; align-items: flex-start;
        }
        .ftPointDot {
          width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
          margin-top: 7px; box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }
        .ftPointDark strong { color: #fff; }
        .ftPointDark p { color: rgba(255,255,255,0.55); }
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
          display: flex; align-items: center; gap: 8px; position: relative;
          background: #fff; border: 1.5px solid rgba(47,109,255,0.15); border-radius: 980px;
          padding: 10px 20px; font-size: 14px; font-weight: 600; color: var(--foreground);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .ftPlatformChip:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .ftChipGlow {
          position: absolute; bottom: -2px; left: 50%; width: 40px; height: 3px;
          transform: translateX(-50%); border-radius: 2px; opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ftPlatformChip:hover .ftChipGlow { opacity: 0.6; }
        .ftPlatformChipIcon { font-size: 18px; }

        /* ─── Privacy badges ─── */
        .ftPrivacyRow {
          display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;
          margin-top: 8px;
        }
        .ftPrivacyBadge {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border-radius: 12px;
          padding: 12px 20px; font-size: 15px; font-weight: 600; color: var(--foreground);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ftPrivacyBadge:hover { transform: translateY(-2px); }
        .ftPB0 { border: 1.5px solid rgba(47,109,255,0.15); }
        .ftPB0:hover { box-shadow: 0 4px 20px rgba(47,109,255,0.12); }
        .ftPB1 { border: 1.5px solid rgba(123,92,255,0.15); }
        .ftPB1:hover { box-shadow: 0 4px 20px rgba(123,92,255,0.12); }
        .ftPB2 { border: 1.5px solid rgba(255,107,138,0.15); }
        .ftPB2:hover { box-shadow: 0 4px 20px rgba(255,107,138,0.12); }
        .ftPB3 { border: 1.5px solid rgba(52,199,89,0.15); }
        .ftPB3:hover { box-shadow: 0 4px 20px rgba(52,199,89,0.12); }

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
        .ftCtaOrb3 {
          width: 200px; height: 200px; top: 30%; left: 40%;
          background: radial-gradient(circle, rgba(255,107,138,0.4) 0%, transparent 70%);
          animation: orbFloat3 6s ease-in-out infinite;
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.15); }
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
          background: linear-gradient(135deg, var(--blue) 0%, #7B5CFF 50%, #C74BF6 100%);
          background-size: 200% 200%; animation: btnShimmer 4s ease-in-out infinite;
          color: #fff; font-size: 16px; font-weight: 600; text-decoration: none;
          position: relative; z-index: 1;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ftCtaBtn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(47,109,255,0.4); }
        @keyframes btnShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

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
          .ftNav { padding: 0 16px; height: 52px; }
          :global(.ftNavLinkHideMobile) { display: none; }
          .ftNavLogoImg { height: 20px; }
          .ftNavLinks { gap: 1rem; }
          .ftNavCta { padding: 6px 14px; font-size: 12px; }
          .ftHero { padding: 80px 16px 60px; }
          .ftHeroTitle { font-size: 36px; letter-spacing: -1px; }
          .ftHeroSub { font-size: 16px; }
          .ftSection { padding: 60px 16px; }
          .ftBlockTitle { font-size: 28px; }
          .ftBlockLead { font-size: 16px; }
          .ftCtaTitle { font-size: 36px; }
          .ftPlatformStrip { gap: 8px; }
          .ftPlatformChip { padding: 8px 14px; font-size: 13px; }
          .ftPrivacyRow { gap: 10px; }
          .ftPrivacyBadge { padding: 10px 14px; font-size: 13px; }
          .ftFooterInner { flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>
    </>
  )
}
