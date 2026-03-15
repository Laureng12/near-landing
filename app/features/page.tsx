"use client"

import Link from "next/link"
import { useEffect } from "react"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

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
            The right reminder.<br />The right place.<br /><span className="ftGradient">The right person.</span>
          </h1>
          <p className="ftHeroSub">
            Near turns errands, grocery runs, and household to-dos into timely nudges that appear exactly when they can become action.
          </p>
          <div className="ftHeroDivider" />
        </section>


        {/* ─── Feature 1: Shows up when it matters ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection1">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">LOCATION-AWARE</div>
            <div className="ftFeatureLayout ftFeatureLayout1">
              <div className="ftFeatureVisual">
                <div className="ftMiniDevice">
                  <div className="ftMiniStatusBar">
                    <span className="ftMiniTime">9:41</span>
                    <div className="ftMiniBattery" />
                  </div>
                  <div className="ftMiniNotif">
                    <div className="ftMiniNotifDot" />
                    <div className="ftMiniNotifBody">
                      <span className="ftMiniNotifLabel">Near</span>
                      <span className="ftMiniNotifTitle">Arriving at Trader Joe&apos;s</span>
                      <span className="ftMiniNotifSub">3 items on your list</span>
                    </div>
                  </div>
                  <div className="ftMiniListItem"><span className="ftMiniCheck" /><span>Oat milk</span></div>
                  <div className="ftMiniListItem"><span className="ftMiniCheck" /><span>Lemons</span></div>
                  <div className="ftMiniListItem"><span className="ftMiniCheck" /><span>Sparkling water</span></div>
                </div>
              </div>
              <div className="ftFeatureText">
                <h2 className="ftFeatureTitle">Shows up when it matters</h2>
                <p className="ftFeatureDesc">Your list appears when you arrive, so you don&apos;t have to remember it first.</p>
              </div>
            </div>
          </div>
        </section>


        {/* ─── Feature 2: Keeps the household aligned ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection2">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">HOUSEHOLD SHARING</div>
            <div className="ftFeatureLayout ftFeatureLayout2">
              <div className="ftFeatureText">
                <h2 className="ftFeatureTitle">Keeps the household aligned</h2>
                <p className="ftFeatureDesc">Whoever&apos;s closest gets the reminder, so things get done without the back-and-forth.</p>
              </div>
              <div className="ftFeatureVisual">
                <div className="ftHouseholdVisual">
                  <div className="ftHHRoute">
                    <div className="ftHHPin ftHHPinStore">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7z" fill="url(#ftPinGrad1)" />
                        <circle cx="10" cy="9" r="2.5" fill="white" />
                        <defs><linearGradient id="ftPinGrad1" x1="3" y1="2" x2="17" y2="18"><stop stopColor="#2F6DFF" /><stop offset="1" stopColor="#7B5CFF" /></linearGradient></defs>
                      </svg>
                      <span>Target</span>
                    </div>
                    <div className="ftHHDottedLine" />
                    <div className="ftHHAvatarGroup">
                      <div className="ftHHAvatar ftHHAvatarClose">
                        <span>L</span>
                        <div className="ftHHProximity">0.3 mi</div>
                      </div>
                      <div className="ftHHAvatar ftHHAvatarFar">
                        <span>B</span>
                        <div className="ftHHProximity">4.2 mi</div>
                      </div>
                    </div>
                  </div>
                  <div className="ftHHNudge">
                    <div className="ftHHNudgeDot" />
                    <span>Lauren is closer — sending the list</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ─── Feature 3: Catches you on the way ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection3">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">PROXIMITY</div>
            <div className="ftFeatureLargeIcon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="url(#scGrad1)" strokeWidth="1.5" fill="none" />
                <circle cx="12" cy="9" r="2" stroke="url(#scGrad1)" strokeWidth="1.5" fill="none" />
                <path d="M2 12h3M19 12h3" stroke="url(#scGrad1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <defs><linearGradient id="scGrad1" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#2F6DFF" /><stop offset="1" stopColor="#7B5CFF" /></linearGradient></defs>
              </svg>
            </div>
            <h2 className="ftFeatureTitle ftFeatureTitleCenter">Catches you on the way</h2>
            <p className="ftFeatureDesc ftFeatureDescCenter">Passing a store with unfinished tasks? Near gives you the nudge while it still matters.</p>
          </div>
        </section>


        {/* ─── Feature 4: Knows what belongs where ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection4">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">SMART SORTING</div>
            <div className="ftFeatureLargeIcon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="13" rx="3" stroke="url(#scGrad2)" strokeWidth="1.5" fill="none" />
                <path d="M8 12h8M8 15h5" stroke="url(#scGrad2)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 6V3" stroke="url(#scGrad2)" strokeWidth="1.5" strokeLinecap="round" />
                <defs><linearGradient id="scGrad2" x1="3" y1="3" x2="21" y2="19"><stop stopColor="#7B5CFF" /><stop offset="1" stopColor="#C74BF6" /></linearGradient></defs>
              </svg>
            </div>
            <h2 className="ftFeatureTitle ftFeatureTitleCenter">Knows what belongs where</h2>
            <p className="ftFeatureDesc ftFeatureDescCenter">Type &ldquo;milk&rdquo; or &ldquo;return package&rdquo; and Near connects it to the place it belongs.</p>
          </div>
        </section>


        {/* ─── Feature 5: Warns you before the window closes ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection5">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">TIMING</div>
            <div className="ftFeatureLargeIcon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="url(#scGrad3)" strokeWidth="1.5" fill="none" />
                <path d="M12 7v5l3 3" stroke="url(#scGrad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs><linearGradient id="scGrad3" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#FF6B8A" /><stop offset="1" stopColor="#FF9F0A" /></linearGradient></defs>
              </svg>
            </div>
            <h2 className="ftFeatureTitle ftFeatureTitleCenter">Warns you before the window closes</h2>
            <p className="ftFeatureDesc ftFeatureDescCenter">Get a heads-up before a store closes, not after you&apos;ve missed it.</p>
          </div>
        </section>


        {/* ─── Feature 6: Learns your routines ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection6">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">INTELLIGENCE</div>
            <div className="ftFeatureLargeIcon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M4 12a8 8 0 0116 0" stroke="url(#scGrad4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M7 12a5 5 0 0110 0" stroke="url(#scGrad4)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <circle cx="12" cy="17" r="2" stroke="url(#scGrad4)" strokeWidth="1.5" fill="none" />
                <defs><linearGradient id="scGrad4" x1="4" y1="4" x2="20" y2="20"><stop stopColor="#34C759" /><stop offset="1" stopColor="#00D4AA" /></linearGradient></defs>
              </svg>
            </div>
            <h2 className="ftFeatureTitle ftFeatureTitleCenter">Learns your routines</h2>
            <p className="ftFeatureDesc ftFeatureDescCenter">Near notices recurring needs and helps surface them before you run out.</p>
          </div>
        </section>


        {/* ─── Works everywhere ─── */}
        <section className="reveal ftSection">
          <div className="ftBlock ftBlockCenter">
            <h2 className="ftBlockTitle">Works everywhere you do</h2>
            <p className="ftBlockLead">
              Near lives on your wrist, in your car, and anywhere Siri can hear you.
            </p>
            <div className="ftPlatformStrip">
              {[
                { name: "iPhone", color: "#2F6DFF" },
                { name: "Apple Watch", color: "#34C759" },
                { name: "CarPlay", color: "#FF6B8A" },
                { name: "Siri", color: "#C74BF6" },
              ].map((p, i) => (
                <div key={i} className="ftPlatformChip" style={{borderColor: `${p.color}30`}}>
                  <span className="ftPlatformChipName">{p.name}</span>
                  <div className="ftChipGlow" style={{background: p.color}} />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── Private by design ─── */}
        <section className="reveal ftSection ftSectionPrivacy">
          <div className="ftBlock ftBlockCenter">
            <div className="ftPrivacyIcon">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect x="12" y="22" width="24" height="18" rx="4" fill="url(#ftLockGrad)" />
                <path d="M18 22V16a6 6 0 0 1 12 0v6" stroke="url(#ftLockGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="24" cy="32" r="2.5" fill="white" />
                <defs>
                  <linearGradient id="ftLockGrad" x1="12" y1="16" x2="36" y2="40">
                    <stop stopColor="#2F6DFF" />
                    <stop offset="1" stopColor="#7B5CFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="ftBlockTitle">Private by design</h2>
            <p className="ftBlockLead">
              Near processes everything on your device. No ads, no tracking, no data harvesting.
            </p>
            <div className="ftPrivacyRow">
              {["Offline-first", "On-device AI", "No ads ever", "Delete anytime"].map((label, i) => (
                <div key={i} className={`ftPrivacyBadge ftPB${i}`}>
                  <span>{label}</span>
                </div>
              ))}
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
        .ftNavLogoImg { height: 36px; width: auto; display: block; object-fit: contain; }
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
          padding: 120px 24px 80px; overflow: hidden;
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
          letter-spacing: -2px; line-height: 1.08; color: var(--foreground);
          margin: 0 auto 28px; max-width: 760px; position: relative; z-index: 1;
        }
        .ftHeroSub {
          font-size: 20px; line-height: 1.6; color: var(--text-secondary);
          max-width: 560px; margin: 0 auto; position: relative; z-index: 1;
        }
        .ftHeroDivider {
          width: 80px; height: 4px; border-radius: 2px; margin: 56px auto 0;
          background: linear-gradient(90deg, #2F6DFF, #7B5CFF, #C74BF6, #FF6B8A);
        }
        .ftGradient {
          background: linear-gradient(135deg, #2F6DFF 0%, #7B5CFF 40%, #C74BF6 70%, #FF6B8A 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─── Individual Feature Sections ─── */
        .ftFeatureSection {
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }

        .ftFeatureSection1 {
          background: #FAFBFF;
        }

        .ftFeatureSection2 {
          background: linear-gradient(180deg, rgba(47,109,255,0.02) 0%, rgba(123,92,255,0.02) 100%);
        }

        .ftFeatureSection3 {
          background: #FFFFFF;
        }

        .ftFeatureSection4 {
          background: linear-gradient(180deg, rgba(199,75,246,0.02) 0%, rgba(255,107,138,0.02) 100%);
        }

        .ftFeatureSection5 {
          background: #FFFFFF;
        }

        .ftFeatureSection6 {
          background: linear-gradient(180deg, rgba(52,199,89,0.02) 0%, rgba(0,212,170,0.02) 100%);
        }

        .ftDividerTop {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #2F6DFF, #7B5CFF, #C74BF6, #FF6B8A, transparent);
        }

        .ftFeatureSectionContent {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ftFeatureEyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #2F6DFF 0%, #C74BF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Side-by-side layouts for sections 1 & 2 */
        .ftFeatureLayout {
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .ftFeatureLayout1 {
          flex-direction: row;
        }

        .ftFeatureLayout2 {
          flex-direction: row-reverse;
        }

        .ftFeatureVisual {
          flex: 0 0 45%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ftFeatureText {
          flex: 0 0 55%;
        }

        .ftFeatureTitle {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.8px;
          line-height: 1.15;
          color: var(--foreground);
          margin: 0 0 16px;
        }

        .ftFeatureTitleCenter {
          text-align: center;
          margin-top: 32px;
        }

        .ftFeatureDesc {
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .ftFeatureDescCenter {
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        /* Large icon for sections 3-6 */
        .ftFeatureLargeIcon {
          display: flex;
          justify-content: center;
          margin: 0 auto 40px;
        }

        /* ─── Mini Device Visual (Hero Card 1) ─── */
        .ftMiniDevice {
          width: 240px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 16px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .ftMiniStatusBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding: 0 2px;
        }

        .ftMiniTime {
          font-size: 11px;
          font-weight: 600;
          color: var(--foreground);
          letter-spacing: 0.02em;
        }

        .ftMiniBattery {
          width: 18px;
          height: 8px;
          border-radius: 2px;
          border: 1px solid rgba(0, 0, 0, 0.25);
          position: relative;
        }

        .ftMiniBattery::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          border-radius: 1px;
          background: #34C759;
        }

        .ftMiniNotif {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 10px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(47, 109, 255, 0.06) 0%, rgba(123, 92, 255, 0.04) 100%);
          margin-bottom: 14px;
        }

        .ftMiniNotifDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2F6DFF, #7B5CFF);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .ftMiniNotifBody {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .ftMiniNotifLabel {
          font-size: 9px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ftMiniNotifTitle {
          font-size: 12px;
          font-weight: 650;
          color: var(--foreground);
        }

        .ftMiniNotifSub {
          font-size: 10px;
          color: var(--text-secondary);
        }

        .ftMiniListItem {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 4px;
          font-size: 12px;
          font-weight: 500;
          color: var(--foreground);
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .ftMiniListItem:last-child {
          border-bottom: none;
        }

        .ftMiniCheck {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 0, 0, 0.12);
          flex-shrink: 0;
        }

        /* ─── Household Visual (Hero Card 2) ─── */
        .ftHouseholdVisual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 260px;
        }

        .ftHHRoute {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          justify-content: center;
        }

        .ftHHPin {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--foreground);
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 12px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .ftHHDottedLine {
          flex: 1;
          height: 2px;
          background: repeating-linear-gradient(90deg, rgba(47, 109, 255, 0.3) 0px, rgba(47, 109, 255, 0.3) 4px, transparent 4px, transparent 8px);
          max-width: 40px;
        }

        .ftHHAvatarGroup {
          display: flex;
          gap: 8px;
        }

        .ftHHAvatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: white;
          position: relative;
        }

        .ftHHAvatarClose {
          background: linear-gradient(135deg, #2F6DFF, #7B5CFF);
          box-shadow: 0 4px 12px rgba(47, 109, 255, 0.3);
        }

        .ftHHAvatarFar {
          background: linear-gradient(135deg, #C74BF6, #FF6B8A);
          opacity: 0.5;
        }

        .ftHHProximity {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9px;
          font-weight: 600;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .ftHHNudge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(47, 109, 255, 0.12);
          box-shadow: 0 4px 16px rgba(47, 109, 255, 0.06);
          font-size: 11px;
          font-weight: 600;
          color: var(--foreground);
          margin-top: 8px;
        }

        .ftHHNudgeDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34C759;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(52, 199, 89, 0.4);
        }


        /* ─── Sections ─── */
        .ftPage { max-width: 100%; overflow-x: hidden; }
        .ftSection { padding: 80px 24px; position: relative; overflow: hidden; }
        .ftSectionPrivacy {
          background: linear-gradient(180deg, #F0F7FF 0%, #F5F0FF 50%, #FAFBFF 100%);
        }

        /* ─── Content blocks ─── */
        .ftBlock { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .ftBlockCenter { text-align: center; }
        .ftBlockTitle {
          font-family: var(--font-display); font-size: 36px; font-weight: 700;
          letter-spacing: -1.2px; line-height: 1.15; color: var(--foreground);
          margin: 0 0 16px; text-align: center;
        }
        .ftBlockLead {
          font-size: 18px; line-height: 1.7; color: var(--text-secondary);
          margin: 0 0 36px; text-align: center;
        }

        /* ─── Platform strip ─── */
        .ftPlatformStrip {
          display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;
          margin-top: 8px;
        }
        .ftPlatformChip {
          display: flex; align-items: center; gap: 8px; position: relative;
          background: #fff; border: 1.5px solid rgba(47,109,255,0.15); border-radius: 980px;
          padding: 10px 24px; font-size: 14px; font-weight: 600; color: var(--foreground);
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

        /* ─── Privacy section ─── */
        .ftPrivacyIcon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(47,109,255,0.08) 0%, rgba(123,92,255,0.08) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .ftPrivacyRow {
          display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;
          margin-top: 8px;
        }
        .ftPrivacyBadge {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border-radius: 12px;
          padding: 12px 20px; font-size: 14px; font-weight: 600; color: var(--foreground);
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
          opacity: 0; transform: translateY(32px) scale(0.97);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0) scale(1); }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .ftFeatureLayout {
            flex-direction: column !important;
            gap: 48px;
          }

          .ftFeatureLayout2 {
            flex-direction: column !important;
          }

          .ftFeatureVisual {
            flex: 1 1 auto;
          }

          .ftFeatureText {
            flex: 1 1 auto;
          }
        }

        @media (max-width: 600px) {
          .ftNav { padding: 0 16px; height: 52px; }
          :global(.ftNavLinkHideMobile) { display: none; }
          .ftNavLogoImg { height: 30px; }
          .ftNavLinks { gap: 1rem; }
          .ftNavCta { padding: 6px 14px; font-size: 12px; }
          .ftHero { padding: 80px 16px 60px; }
          .ftHeroTitle { font-size: 36px; letter-spacing: -1px; }
          .ftHeroSub { font-size: 16px; }
          .ftFeatureSection { padding: 64px 16px; }
          .ftFeatureLayout {
            flex-direction: column !important;
            gap: 40px;
          }
          .ftFeatureLayout2 {
            flex-direction: column !important;
          }
          .ftFeatureVisual {
            flex: 1 1 auto;
          }
          .ftFeatureText {
            flex: 1 1 auto;
          }
          .ftFeatureTitle { font-size: 24px; }
          .ftFeatureDesc { font-size: 16px; }
          .ftFeatureEyebrow { margin-bottom: 16px; }
          .ftSection { padding: 60px 16px; }
          .ftBlockTitle { font-size: 28px; }
          .ftBlockLead { font-size: 16px; }
          .ftCtaTitle { font-size: 36px; }
          .ftPlatformStrip { gap: 8px; }
          .ftPlatformChip { padding: 8px 16px; font-size: 13px; }
          .ftPrivacyRow { gap: 10px; }
          .ftPrivacyBadge { padding: 10px 14px; font-size: 13px; }
          .ftFooterInner { flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>
    </>
  )
}
