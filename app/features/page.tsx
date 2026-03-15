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

    const tiltEls = document.querySelectorAll('[data-tilt-ft]')
    const handleMove = (e: MouseEvent) => {
      tiltEls.forEach(el => {
        const rect = (el as HTMLElement).getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / (rect.width / 2)
        const dy = (e.clientY - cy) / (rect.height / 2)
        ;(el as HTMLElement).style.setProperty('--rx', `${-dy * 6}deg`)
        ;(el as HTMLElement).style.setProperty('--ry', `${dx * 6}deg`)
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => {
      io.disconnect()
      window.removeEventListener('mousemove', handleMove)
    }
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
                <div className="ft3DStage">
                  <div className="ft3DGlow ft3DGlow1" />
                  <div className="ftMiniDevice" data-tilt-ft>
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
                <div className="ft3DStage">
                  <div className="ft3DGlow ft3DGlow2" />
                  <div className="ftHouseholdCard" data-tilt-ft>
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
            </div>
          </div>
        </section>


        {/* ─── Feature 3: Catches you on the way ─── */}
        <section className="reveal ftFeatureSection ftFeatureSection3">
          <div className="ftDividerTop" />
          <div className="ftFeatureSectionContent">
            <div className="ftFeatureEyebrow">PROXIMITY</div>
            <div className="ftFeatureLargeIcon">
              <div className="ftIconOrb ftIconOrb1" data-tilt-ft>
                <div className="ftIconOrbGlow" />
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="url(#scGrad1)" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="9" r="2" stroke="url(#scGrad1)" strokeWidth="1.5" fill="none" />
                  <path d="M2 12h3M19 12h3" stroke="url(#scGrad1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  <defs><linearGradient id="scGrad1" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#2F6DFF" /><stop offset="1" stopColor="#7B5CFF" /></linearGradient></defs>
                </svg>
              </div>
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
              <div className="ftIconOrb ftIconOrb2" data-tilt-ft>
                <div className="ftIconOrbGlow" />
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="13" rx="3" stroke="url(#scGrad2)" strokeWidth="1.5" fill="none" />
                  <path d="M8 12h8M8 15h5" stroke="url(#scGrad2)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 6V3" stroke="url(#scGrad2)" strokeWidth="1.5" strokeLinecap="round" />
                  <defs><linearGradient id="scGrad2" x1="3" y1="3" x2="21" y2="19"><stop stopColor="#7B5CFF" /><stop offset="1" stopColor="#C74BF6" /></linearGradient></defs>
                </svg>
              </div>
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
              <div className="ftIconOrb ftIconOrb3" data-tilt-ft>
                <div className="ftIconOrbGlow" />
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="url(#scGrad3)" strokeWidth="1.5" fill="none" />
                  <path d="M12 7v5l3 3" stroke="url(#scGrad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs><linearGradient id="scGrad3" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#FF6B8A" /><stop offset="1" stopColor="#FF9F0A" /></linearGradient></defs>
                </svg>
              </div>
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
              <div className="ftIconOrb ftIconOrb4" data-tilt-ft>
                <div className="ftIconOrbGlow" />
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12a8 8 0 0116 0" stroke="url(#scGrad4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M7 12a5 5 0 0110 0" stroke="url(#scGrad4)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                  <circle cx="12" cy="17" r="2" stroke="url(#scGrad4)" strokeWidth="1.5" fill="none" />
                  <defs><linearGradient id="scGrad4" x1="4" y1="4" x2="20" y2="20"><stop stopColor="#34C759" /><stop offset="1" stopColor="#00D4AA" /></linearGradient></defs>
                </svg>
              </div>
            </div>
            <h2 className="ftFeatureTitle ftFeatureTitleCenter">Learns your routines</h2>
            <p className="ftFeatureDesc ftFeatureDescCenter">Near notices recurring needs and helps surface them before you run out.</p>
          </div>
        </section>


        {/* ─── Works everywhere ─── */}
        <section className="reveal ftSection ftSectionEverywhere">
          <div className="ftDividerTop" />
          <div className="ftEverywhereContent">
            <div className="ftFeatureEyebrow" style={{textAlign:'center'}}>MULTI-PLATFORM</div>
            <h2 className="ftBlockTitle">Works everywhere you do</h2>
            <p className="ftBlockLead">
              Near lives on your wrist, in your car, and anywhere Siri can hear you.
            </p>

            {/* Device showcase */}
            <div className="ftDeviceShowcase">
              {/* iPhone */}
              <div className="ftShowcaseDevice ftShowcasePhone" data-tilt-ft>
                <div className="ftShowcaseDeviceGlow ftShowcaseGlowPhone" />
                <div className="ftShowcasePhoneBody">
                  <div className="ftShowcaseNotch" />
                  <div className="ftShowcaseScreen">
                    <div className="ftShowcaseScreenLine ftShowcaseScreenLine1" />
                    <div className="ftShowcaseScreenLine ftShowcaseScreenLine2" />
                    <div className="ftShowcaseScreenLine ftShowcaseScreenLine3" />
                    <div className="ftShowcaseScreenDot" />
                  </div>
                </div>
                <span className="ftShowcaseLabel">iPhone</span>
              </div>

              {/* Apple Watch */}
              <div className="ftShowcaseDevice ftShowcaseWatch" data-tilt-ft>
                <div className="ftShowcaseDeviceGlow ftShowcaseGlowWatch" />
                <div className="ftShowcaseWatchBody">
                  <div className="ftShowcaseWatchCrown" />
                  <div className="ftShowcaseWatchScreen">
                    <div className="ftShowcaseScreenDot ftShowcaseWatchDot" />
                    <div className="ftShowcaseScreenLine ftShowcaseWatchLine" />
                  </div>
                </div>
                <span className="ftShowcaseLabel">Apple Watch</span>
              </div>

              {/* CarPlay */}
              <div className="ftShowcaseDevice ftShowcaseCar" data-tilt-ft>
                <div className="ftShowcaseDeviceGlow ftShowcaseGlowCar" />
                <div className="ftShowcaseCarBody">
                  <div className="ftShowcaseCarScreen">
                    <div className="ftShowcaseCarMap" />
                    <div className="ftShowcaseCarNotif">
                      <div className="ftShowcaseCarNotifDot" />
                      <div className="ftShowcaseCarNotifLines">
                        <div className="ftShowcaseScreenLine ftShowcaseCarLine1" />
                        <div className="ftShowcaseScreenLine ftShowcaseCarLine2" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="ftShowcaseLabel">CarPlay</span>
              </div>

              {/* Siri */}
              <div className="ftShowcaseDevice ftShowcaseSiri" data-tilt-ft>
                <div className="ftShowcaseDeviceGlow ftShowcaseGlowSiri" />
                <div className="ftShowcaseSiriBody">
                  <div className="ftShowcaseSiriWave">
                    <div className="ftSiriBar ftSiriBar1" />
                    <div className="ftSiriBar ftSiriBar2" />
                    <div className="ftSiriBar ftSiriBar3" />
                    <div className="ftSiriBar ftSiriBar4" />
                    <div className="ftSiriBar ftSiriBar5" />
                  </div>
                </div>
                <span className="ftShowcaseLabel">Siri</span>
              </div>
            </div>
          </div>
        </section>


        {/* ─── Private by design ─── */}
        <section className="reveal ftSection ftSectionPrivacy">
          <div className="ftDividerTop" />
          <div className="ftPrivacyContent">
            <div className="ftFeatureEyebrow" style={{textAlign:'center'}}>YOUR DATA, YOUR DEVICE</div>
            <h2 className="ftBlockTitle">Private by design</h2>
            <p className="ftBlockLead">
              Near processes everything on your device. No ads, no tracking, no data harvesting.
            </p>

            {/* Shield visual */}
            <div className="ftShieldStage" data-tilt-ft>
              <div className="ftShieldGlow" />
              <div className="ftShieldOrbitRing ftShieldOrbit1">
                <div className="ftShieldOrbitDot ftShieldOrbitDot1" />
              </div>
              <div className="ftShieldOrbitRing ftShieldOrbit2">
                <div className="ftShieldOrbitDot ftShieldOrbitDot2" />
              </div>
              <div className="ftShieldBody">
                <svg width="56" height="64" viewBox="0 0 56 64" fill="none" className="ftShieldSvg">
                  <path d="M28 2L4 14v18c0 16.5 10.2 27.3 24 30 13.8-2.7 24-13.5 24-30V14L28 2z" fill="url(#shieldFill)" stroke="url(#shieldStroke)" strokeWidth="2" />
                  <path d="M20 32l6 6 10-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="shieldFill" x1="4" y1="2" x2="52" y2="62">
                      <stop stopColor="rgba(47,109,255,0.15)" />
                      <stop offset="1" stopColor="rgba(123,92,255,0.15)" />
                    </linearGradient>
                    <linearGradient id="shieldStroke" x1="4" y1="2" x2="52" y2="62">
                      <stop stopColor="#2F6DFF" />
                      <stop offset="1" stopColor="#7B5CFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Privacy pillars */}
            <div className="ftPrivacyPillars">
              {[
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Offline-first", desc: "Works without internet", color: "#2F6DFF" },
                { icon: "M12 2a2 2 0 012 2v2a6 6 0 11-4 0V4a2 2 0 012-2zM4 18v-1a8 8 0 0116 0v1", label: "On-device AI", desc: "Processing stays local", color: "#7B5CFF" },
                { icon: "M18.36 6.64A9 9 0 115.64 18.36M12 2v4M2 12h4", label: "No ads ever", desc: "Zero third-party tracking", color: "#FF6B8A" },
                { icon: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14", label: "Delete anytime", desc: "Your data, your choice", color: "#34C759" },
              ].map((item, i) => (
                <div key={i} className="ftPrivacyPillar" data-tilt-ft>
                  <div className="ftPillarIconWrap" style={{background: `linear-gradient(135deg, ${item.color}12, ${item.color}08)`}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d={item.icon} stroke={item.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <span className="ftPillarLabel">{item.label}</span>
                  <span className="ftPillarDesc">{item.desc}</span>
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
          padding: 140px 24px;
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
          width: 160px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #2F6DFF, #7B5CFF, #C74BF6, #FF6B8A, transparent);
          opacity: 0.6;
        }

        .ftFeatureSectionContent {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ftFeatureSection3 .ftFeatureSectionContent,
        .ftFeatureSection4 .ftFeatureSectionContent,
        .ftFeatureSection5 .ftFeatureSectionContent,
        .ftFeatureSection6 .ftFeatureSectionContent {
          text-align: center;
          max-width: 720px;
        }

        .ftFeatureEyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
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
          margin: 0 auto 48px;
          perspective: 800px;
        }

        /* ─── 3D Stage for hero visuals ─── */
        .ft3DStage {
          position: relative;
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ft3DGlow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
          animation: glowPulse 6s ease-in-out infinite;
        }

        .ft3DGlow1 {
          background: radial-gradient(circle, rgba(47,109,255,0.25) 0%, rgba(123,92,255,0.1) 50%, transparent 70%);
        }

        .ft3DGlow2 {
          background: radial-gradient(circle, rgba(255,107,138,0.2) 0%, rgba(199,75,246,0.1) 50%, transparent 70%);
        }

        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        /* ─── Mini Device Visual (Hero Card 1) ─── */
        .ftMiniDevice {
          width: 260px;
          background: linear-gradient(160deg, #FFFFFF 0%, #F8F9FF 50%, #F0F2FF 100%);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.04),
            0 4px 8px rgba(0,0,0,0.04),
            0 12px 24px rgba(0,0,0,0.06),
            0 24px 48px rgba(47,109,255,0.08),
            0 48px 80px rgba(0,0,0,0.06);
          transform-style: preserve-3d;
          transform: rotateY(var(--ry, -6deg)) rotateX(var(--rx, 4deg)) translateZ(20px);
          transition: transform 0.15s ease-out;
          position: relative;
          z-index: 1;
          animation: deviceFloat 8s ease-in-out infinite;
        }

        .ftMiniDevice::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          border-radius: 28px 28px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%);
          pointer-events: none;
          z-index: 10;
        }

        .ftMiniDevice::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 10%;
          width: 80%;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(47,109,255,0.15) 0%, transparent 70%);
          filter: blur(8px);
          z-index: -1;
        }

        @keyframes deviceFloat {
          0%, 100% { transform: rotateY(var(--ry, -6deg)) rotateX(var(--rx, 4deg)) translateZ(20px) translateY(0); }
          50% { transform: rotateY(var(--ry, -6deg)) rotateX(var(--rx, 4deg)) translateZ(20px) translateY(-8px); }
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

        /* ─── Household Card 3D Wrapper ─── */
        .ftHouseholdCard {
          background: linear-gradient(160deg, #FFFFFF 0%, #FFF5F8 50%, #F8F0FF 100%);
          border-radius: 28px;
          padding: 32px 28px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.04),
            0 4px 8px rgba(0,0,0,0.04),
            0 12px 24px rgba(0,0,0,0.06),
            0 24px 48px rgba(199,75,246,0.08),
            0 48px 80px rgba(0,0,0,0.06);
          transform-style: preserve-3d;
          transform: rotateY(var(--ry, 6deg)) rotateX(var(--rx, 4deg)) translateZ(20px);
          transition: transform 0.15s ease-out;
          position: relative;
          z-index: 1;
          animation: cardFloat 10s ease-in-out infinite;
        }

        .ftHouseholdCard::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          border-radius: 28px 28px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%);
          pointer-events: none;
        }

        .ftHouseholdCard::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 10%;
          width: 80%;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(199,75,246,0.12) 0%, transparent 70%);
          filter: blur(8px);
          z-index: -1;
        }

        @keyframes cardFloat {
          0%, 100% { transform: rotateY(var(--ry, 6deg)) rotateX(var(--rx, 4deg)) translateZ(20px) translateY(0); }
          50% { transform: rotateY(var(--ry, 6deg)) rotateX(var(--rx, 4deg)) translateZ(20px) translateY(-10px); }
        }


        /* ─── 3D Icon Orb ─── */
        .ftIconOrb {
          width: 120px;
          height: 120px;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg)) translateZ(10px);
          transition: transform 0.15s ease-out;
          animation: orbFloat 7s ease-in-out infinite;
          border: 1px solid rgba(255,255,255,0.6);
        }

        .ftIconOrb::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          border-radius: 32px 32px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .ftIconOrb::after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 15%;
          width: 70%;
          height: 16px;
          border-radius: 50%;
          filter: blur(8px);
          z-index: -1;
        }

        .ftIconOrbGlow {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
          z-index: -1;
          animation: glowPulse 6s ease-in-out infinite;
        }

        .ftIconOrb1 {
          background: linear-gradient(145deg, rgba(47,109,255,0.08) 0%, rgba(123,92,255,0.12) 100%);
          box-shadow: 0 8px 32px rgba(47,109,255,0.12), 0 24px 48px rgba(0,0,0,0.04);
        }
        .ftIconOrb1::after { background: radial-gradient(ellipse, rgba(47,109,255,0.15) 0%, transparent 70%); }
        .ftIconOrb1 .ftIconOrbGlow { background: radial-gradient(circle, rgba(47,109,255,0.15) 0%, transparent 70%); }

        .ftIconOrb2 {
          background: linear-gradient(145deg, rgba(123,92,255,0.08) 0%, rgba(199,75,246,0.12) 100%);
          box-shadow: 0 8px 32px rgba(123,92,255,0.12), 0 24px 48px rgba(0,0,0,0.04);
        }
        .ftIconOrb2::after { background: radial-gradient(ellipse, rgba(123,92,255,0.15) 0%, transparent 70%); }
        .ftIconOrb2 .ftIconOrbGlow { background: radial-gradient(circle, rgba(123,92,255,0.15) 0%, transparent 70%); }

        .ftIconOrb3 {
          background: linear-gradient(145deg, rgba(255,107,138,0.08) 0%, rgba(255,159,10,0.12) 100%);
          box-shadow: 0 8px 32px rgba(255,107,138,0.12), 0 24px 48px rgba(0,0,0,0.04);
        }
        .ftIconOrb3::after { background: radial-gradient(ellipse, rgba(255,107,138,0.15) 0%, transparent 70%); }
        .ftIconOrb3 .ftIconOrbGlow { background: radial-gradient(circle, rgba(255,107,138,0.15) 0%, transparent 70%); }

        .ftIconOrb4 {
          background: linear-gradient(145deg, rgba(52,199,89,0.08) 0%, rgba(0,212,170,0.12) 100%);
          box-shadow: 0 8px 32px rgba(52,199,89,0.12), 0 24px 48px rgba(0,0,0,0.04);
        }
        .ftIconOrb4::after { background: radial-gradient(ellipse, rgba(52,199,89,0.15) 0%, transparent 70%); }
        .ftIconOrb4 .ftIconOrbGlow { background: radial-gradient(circle, rgba(52,199,89,0.15) 0%, transparent 70%); }

        @keyframes orbFloat {
          0%, 100% { transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg)) translateZ(10px) translateY(0); }
          50% { transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg)) translateZ(10px) translateY(-6px); }
        }

        /* ─── Works Everywhere Device Showcase ─── */
        .ftSectionEverywhere {
          padding: 140px 24px;
          background: linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 50%, #F5F0FF 100%);
          position: relative;
          overflow: hidden;
        }

        .ftEverywhereContent {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ftDeviceShowcase {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 48px;
          margin-top: 56px;
          perspective: 1200px;
        }

        .ftShowcaseDevice {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
          transition: transform 0.15s ease-out;
        }

        .ftShowcaseDeviceGlow {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
          z-index: -1;
          animation: glowPulse 6s ease-in-out infinite;
        }

        .ftShowcaseGlowPhone { background: radial-gradient(circle, rgba(47,109,255,0.2) 0%, transparent 70%); top: 20%; }
        .ftShowcaseGlowWatch { background: radial-gradient(circle, rgba(52,199,89,0.2) 0%, transparent 70%); top: 20%; }
        .ftShowcaseGlowCar { background: radial-gradient(circle, rgba(255,107,138,0.2) 0%, transparent 70%); top: 20%; }
        .ftShowcaseGlowSiri { background: radial-gradient(circle, rgba(199,75,246,0.25) 0%, transparent 70%); top: 10%; }

        .ftShowcaseLabel {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }

        /* iPhone */
        .ftShowcasePhoneBody {
          width: 100px;
          height: 180px;
          border-radius: 20px;
          background: linear-gradient(160deg, #2A2A2E 0%, #1A1A1E 40%, #000 100%);
          border: 2px solid rgba(255,255,255,0.1);
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05),
            0 8px 24px rgba(0,0,0,0.15),
            0 24px 48px rgba(47,109,255,0.1);
          animation: deviceFloat 8s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .ftShowcasePhoneBody::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 40%;
          border-radius: 18px 18px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%);
          pointer-events: none;
        }

        .ftShowcaseNotch {
          width: 36px;
          height: 5px;
          border-radius: 3px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 8px;
          flex-shrink: 0;
        }

        .ftShowcaseScreen {
          flex: 1;
          width: 100%;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(47,109,255,0.15) 0%, rgba(123,92,255,0.08) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 8px;
        }

        .ftShowcaseScreenLine {
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.15);
        }

        .ftShowcaseScreenLine1 { width: 70%; }
        .ftShowcaseScreenLine2 { width: 50%; }
        .ftShowcaseScreenLine3 { width: 60%; }

        .ftShowcaseScreenDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2F6DFF, #7B5CFF);
          margin-top: 4px;
          box-shadow: 0 0 8px rgba(47,109,255,0.5);
        }

        /* Apple Watch */
        .ftShowcaseWatchBody {
          width: 76px;
          height: 92px;
          border-radius: 20px;
          background: linear-gradient(160deg, #2A2A2E 0%, #1A1A1E 40%, #000 100%);
          border: 2px solid rgba(255,255,255,0.1);
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05),
            0 8px 24px rgba(0,0,0,0.15),
            0 24px 48px rgba(52,199,89,0.1);
          animation: deviceFloat 9s ease-in-out infinite;
          overflow: hidden;
        }

        .ftShowcaseWatchBody::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 40%;
          border-radius: 18px 18px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%);
          pointer-events: none;
        }

        .ftShowcaseWatchCrown {
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 16px;
          border-radius: 2px;
          background: rgba(255,255,255,0.12);
        }

        .ftShowcaseWatchScreen {
          width: 100%;
          height: 100%;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(52,199,89,0.15) 0%, rgba(0,212,170,0.08) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px;
        }

        .ftShowcaseWatchDot {
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, #34C759, #00D4AA);
          box-shadow: 0 0 10px rgba(52,199,89,0.5);
        }

        .ftShowcaseWatchLine {
          width: 60%;
          height: 3px;
        }

        /* CarPlay */
        .ftShowcaseCarBody {
          width: 160px;
          height: 100px;
          border-radius: 14px;
          background: linear-gradient(160deg, #2A2A2E 0%, #1A1A1E 40%, #000 100%);
          border: 2px solid rgba(255,255,255,0.1);
          padding: 6px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05),
            0 8px 24px rgba(0,0,0,0.15),
            0 24px 48px rgba(255,107,138,0.1);
          animation: deviceFloat 10s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .ftShowcaseCarBody::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 40%;
          border-radius: 12px 12px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%);
          pointer-events: none;
        }

        .ftShowcaseCarScreen {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(255,107,138,0.1) 0%, rgba(47,109,255,0.08) 100%);
          display: flex;
          overflow: hidden;
        }

        .ftShowcaseCarMap {
          flex: 1;
          background:
            linear-gradient(0deg, transparent 49%, rgba(255,255,255,0.06) 49%, rgba(255,255,255,0.06) 51%, transparent 51%),
            linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.06) 49%, rgba(255,255,255,0.06) 51%, transparent 51%);
          background-size: 20px 20px;
        }

        .ftShowcaseCarNotif {
          width: 56px;
          background: rgba(47,109,255,0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 4px;
          border-left: 1px solid rgba(255,255,255,0.06);
        }

        .ftShowcaseCarNotifDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF6B8A, #FF9F0A);
          box-shadow: 0 0 8px rgba(255,107,138,0.5);
        }

        .ftShowcaseCarNotifLines {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 100%;
          align-items: center;
        }

        .ftShowcaseCarLine1 { width: 65%; }
        .ftShowcaseCarLine2 { width: 45%; }

        /* Siri */
        .ftShowcaseSiriBody {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(160deg, rgba(199,75,246,0.1) 0%, rgba(47,109,255,0.08) 100%);
          border: 2px solid rgba(199,75,246,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 1px rgba(199,75,246,0.05),
            0 8px 24px rgba(199,75,246,0.1),
            0 24px 48px rgba(0,0,0,0.06);
          animation: deviceFloat 7s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .ftShowcaseSiriBody::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 45%;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%);
          pointer-events: none;
        }

        .ftShowcaseSiriWave {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 32px;
        }

        .ftSiriBar {
          width: 4px;
          border-radius: 2px;
          background: linear-gradient(180deg, #C74BF6, #7B5CFF);
        }

        .ftSiriBar1 { height: 12px; animation: siriPulse 1.5s ease-in-out infinite 0s; }
        .ftSiriBar2 { height: 20px; animation: siriPulse 1.5s ease-in-out infinite 0.15s; }
        .ftSiriBar3 { height: 28px; animation: siriPulse 1.5s ease-in-out infinite 0.3s; }
        .ftSiriBar4 { height: 20px; animation: siriPulse 1.5s ease-in-out infinite 0.45s; }
        .ftSiriBar5 { height: 12px; animation: siriPulse 1.5s ease-in-out infinite 0.6s; }

        @keyframes siriPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.7; }
          50% { transform: scaleY(1.4); opacity: 1; }
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
        .ftSectionPrivacy {
          padding: 140px 24px;
          background: linear-gradient(180deg, #F0F7FF 0%, #F5F0FF 50%, #FAFBFF 100%);
          position: relative;
          overflow: hidden;
        }

        .ftPrivacyContent {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Shield 3D visual */
        .ftShieldStage {
          width: 180px;
          height: 180px;
          margin: 48px auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 600px;
          transform-style: preserve-3d;
          transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
          transition: transform 0.15s ease-out;
        }

        .ftShieldGlow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,109,255,0.2) 0%, rgba(123,92,255,0.1) 40%, transparent 70%);
          filter: blur(30px);
          animation: glowPulse 6s ease-in-out infinite;
          pointer-events: none;
        }

        .ftShieldBody {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          border-radius: 28px;
          background: linear-gradient(160deg, #FFFFFF 0%, #F8F9FF 50%, #F0F2FF 100%);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow:
            0 0 0 1px rgba(47,109,255,0.08),
            0 8px 24px rgba(47,109,255,0.1),
            0 24px 48px rgba(0,0,0,0.06);
          animation: shieldFloat 6s ease-in-out infinite;
        }

        .ftShieldBody::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          border-radius: 28px 28px 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%);
          pointer-events: none;
        }

        .ftShieldSvg {
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 2px 8px rgba(47,109,255,0.2));
        }

        @keyframes shieldFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        /* Orbiting rings */
        .ftShieldOrbitRing {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(47,109,255,0.1);
        }

        .ftShieldOrbit1 {
          width: 140px;
          height: 140px;
          animation: orbitSpin1 12s linear infinite;
        }

        .ftShieldOrbit2 {
          width: 180px;
          height: 180px;
          animation: orbitSpin2 18s linear infinite;
        }

        .ftShieldOrbitDot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .ftShieldOrbitDot1 {
          top: -4px;
          left: 50%;
          margin-left: -4px;
          background: linear-gradient(135deg, #2F6DFF, #7B5CFF);
          box-shadow: 0 0 12px rgba(47,109,255,0.5);
        }

        .ftShieldOrbitDot2 {
          bottom: -4px;
          left: 50%;
          margin-left: -4px;
          background: linear-gradient(135deg, #7B5CFF, #C74BF6);
          box-shadow: 0 0 12px rgba(123,92,255,0.5);
        }

        @keyframes orbitSpin1 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes orbitSpin2 {
          0% { transform: rotate(180deg); }
          100% { transform: rotate(540deg); }
        }

        /* Privacy pillars */
        .ftPrivacyPillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 16px;
        }

        .ftPrivacyPillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          padding: 28px 16px;
          border-radius: 20px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,0,0,0.04);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
          transform-style: preserve-3d;
          transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
        }

        .ftPrivacyPillar:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(47,109,255,0.08);
        }

        .ftPillarIconWrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .ftPillarLabel {
          font-size: 15px;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.2px;
        }

        .ftPillarDesc {
          font-size: 13px;
          line-height: 1.4;
          color: var(--text-secondary);
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

        /* ─── Reduced motion support ─── */
        @media (prefers-reduced-motion: reduce) {
          .ftMiniDevice, .ftHouseholdCard, .ftIconOrb, .ftShowcasePhoneBody, .ftShowcaseWatchBody, .ftShowcaseCarBody, .ftShowcaseSiriBody, .ftShieldBody {
            animation: none !important;
            transform: none !important;
          }
          .ft3DGlow, .ftIconOrbGlow, .ftShowcaseDeviceGlow, .ftShieldGlow {
            animation: none !important;
          }
          .ftSiriBar, .ftShieldOrbitRing {
            animation: none !important;
          }
        }

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

        @media (max-width: 900px) {
          .ftDeviceShowcase { gap: 32px; flex-wrap: wrap; }
          .ftShowcaseCarBody { width: 140px; height: 88px; }
        }

        @media (max-width: 600px) {
          .ftDeviceShowcase { gap: 24px; }
          .ftShowcasePhoneBody { width: 80px; height: 144px; border-radius: 16px; }
          .ftShowcaseWatchBody { width: 60px; height: 72px; border-radius: 16px; }
          .ftShowcaseCarBody { width: 120px; height: 76px; border-radius: 10px; }
          .ftShowcaseSiriBody { width: 70px; height: 70px; }
          .ftShowcaseLabel { font-size: 11px; }
          .ftSectionEverywhere { padding: 80px 16px; }
          .ftNav { padding: 0 16px; height: 52px; }
          :global(.ftNavLinkHideMobile) { display: none; }
          .ftNavLogoImg { height: 30px; }
          .ftNavLinks { gap: 1rem; }
          .ftNavCta { padding: 6px 14px; font-size: 12px; }
          .ftHero { padding: 80px 16px 60px; }
          .ftHeroTitle { font-size: 36px; letter-spacing: -1px; }
          .ftHeroSub { font-size: 16px; }
          .ftFeatureSection { padding: 80px 16px; }
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
          .ftPrivacyPillars { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .ftPillarLabel { font-size: 13px; }
          .ftPillarDesc { font-size: 12px; }
          .ftShieldStage { width: 140px; height: 140px; margin: 36px auto; }
          .ftShieldBody { width: 80px; height: 80px; }
          .ftShieldOrbit1 { width: 110px; height: 110px; }
          .ftShieldOrbit2 { width: 140px; height: 140px; }
          .ftShieldSvg { width: 40px; height: 46px; }
          .ftIconOrb { width: 100px; height: 100px; border-radius: 24px; }
          .ftFooterInner { flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>
    </>
  )
}
