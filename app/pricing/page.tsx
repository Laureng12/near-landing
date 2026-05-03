"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

export default function PricingPage() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual")

  const prices = {
    pro:  billing === "annual" ? { amount: "$79.99", period: "/year" } : { amount: "$9.99",  period: "/month" },
    plus: billing === "annual" ? { amount: "$109",   period: "/year" } : { amount: "$12.99", period: "/month" },
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: var(--font-sans, "DM Sans", sans-serif); }

        /* ── Nav (matches main site) ── */
        .pricingNav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(250,247,242,0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26,14,31,0.06);
        }
        .pricingNavInner {
          max-width: 1200px; margin: 0 auto;
          padding: 12px 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .pricingNavBrand {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: var(--plum-text, #2A0A16);
        }
        .pricingNavLogo {
          width: 36px; height: 36px; border-radius: 8px;
        }
        .pricingNavWordmark {
          font-size: 18px; font-weight: 600; letter-spacing: -0.03em;
        }
        .pricingNavLinks {
          display: flex; align-items: center; gap: 28px;
        }
        .pricingNavLink {
          font-size: 14px; font-weight: 500; color: var(--plum-text, #2A0A16);
          text-decoration: none; opacity: 0.7;
        }
        .pricingNavLink:hover { opacity: 1; }
        .pricingNavLink.current { opacity: 1; }
        .pricingNavCta {
          display: inline-flex; align-items: center;
          padding: 10px 20px;
          background: var(--pink, #E56E8E);
          color: #FFF0DB;
          border-radius: 28px;
          font-size: 13px; font-weight: 500;
          text-decoration: none;
        }

        /* ── Page ── */
        .pricingPage {
          min-height: 100vh;
          background: var(--cream, #FAF6F1);
          font-family: var(--font-sans, "DM Sans", sans-serif);
        }
        .pricingContainer {
          max-width: 1200px; margin: 0 auto; padding: 80px 24px;
        }
        .pricingHeader { text-align: center; margin-bottom: 64px; }
        .pricingEyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold, #D4A843);
          margin: 0 0 16px; display: block;
        }
        .pricingTitle {
          font-size: 48px; font-weight: 500; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--plum-text, #2A0A16);
          margin: 0 0 16px;
        }
        .pricingTitle em {
          font-family: var(--font-serif, "Instrument Serif", Georgia, serif);
          font-style: italic;
        }
        .pricingSub {
          font-size: 17px; line-height: 1.55;
          color: var(--plum-text, #2A0A16); opacity: 0.7;
          max-width: 56ch; margin: 0 auto 32px;
        }

        /* ── Toggle ── */
        .pricingToggle {
          display: inline-flex;
          background: rgba(26,14,31,0.06);
          border-radius: 999px; padding: 4px;
        }
        .toggleBtn {
          padding: 10px 24px; border-radius: 999px; border: 0;
          background: transparent; font-size: 14px; font-weight: 500;
          cursor: pointer; color: var(--plum-text, #2A0A16);
          font-family: var(--font-sans, "DM Sans", sans-serif);
          transition: background 0.15s;
        }
        .toggleBtn.active { background: white; }

        /* ── Tiers ── */
        .tiersGrid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px; align-items: start;
        }
        .tierCard {
          background: white; border-radius: 24px; padding: 40px 32px;
          border: 1px solid rgba(26,14,31,0.06);
          color: var(--plum-text, #2A0A16); position: relative;
        }
        .tierCard.featured {
          background: var(--plum-base, #1A0E1F);
          color: var(--cream-text, #FFF0DB);
          border-color: var(--plum-base, #1A0E1F);
          transform: translateY(-8px);
        }
        .tierBadge {
          position: absolute; top: -14px; left: 50%;
          transform: translateX(-50%);
          background: var(--gold, #D4A843); color: var(--plum-base, #1A0E1F);
          font-size: 11px; font-weight: 500;
          padding: 6px 14px; border-radius: 999px;
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap;
        }
        .tierName { font-size: 20px; font-weight: 500; margin: 0 0 12px; }
        .tierPrice {
          font-size: 14px; margin: 0 0 8px; opacity: 0.6;
          display: flex; align-items: baseline; gap: 4px;
        }
        .tierPrice strong { font-size: 36px; font-weight: 500; opacity: 1; }
        .tierTag {
          font-size: 14px; line-height: 1.4; font-style: italic;
          font-family: var(--font-serif, "Instrument Serif", Georgia, serif);
          margin: 0 0 24px; opacity: 0.78;
        }
        .tierList { list-style: none; padding: 0; margin: 0 0 32px; }
        .tierList li {
          padding: 8px 0; font-size: 14px; line-height: 1.4;
          border-bottom: 1px solid rgba(26,14,31,0.06);
        }
        .featured .tierList li { border-color: rgba(255,240,219,0.08); }
        .tierCta {
          display: flex; align-items: center; justify-content: center;
          width: 100%; padding: 16px 28px; border-radius: 28px;
          font-size: 15px; font-weight: 500; text-decoration: none;
          font-family: var(--font-sans, "DM Sans", sans-serif);
          text-align: center; box-sizing: border-box; cursor: pointer;
        }
        .tierCta.primary {
          background: var(--pink, #E56E8E);
          color: var(--cream-text, #FFF0DB); border: none;
        }
        .tierCta.ghost {
          background: transparent; color: var(--plum-text, #2A0A16);
          border: 1px solid rgba(26,14,31,0.2);
        }
        .featured .tierCta.ghost {
          color: var(--cream-text, #FFF0DB);
          border-color: rgba(255,240,219,0.3);
        }
        .pricingFootnote {
          text-align: center; font-size: 13px; line-height: 1.6;
          color: var(--plum-text, #2A0A16); opacity: 0.5; margin: 48px 0 0;
        }

        @media (max-width: 720px) {
          .tiersGrid { grid-template-columns: 1fr; }
          .tierCard.featured { transform: none; }
          .pricingTitle { font-size: 32px; }
          .pricingNavLinks { display: none; }
        }
      `}</style>

      <div className="pricingPage">

        {/* ── Nav matching main site ── */}
        <nav className="pricingNav">
          <div className="pricingNavInner">
            <Link href="/" className="pricingNavBrand">
              <Image
                src="/assets/brand/Near-Icon-Orbital-Dawn-Dusk-1024.png"
                alt="Near"
                width={36}
                height={36}
                className="pricingNavLogo"
              />
              <span className="pricingNavWordmark">near</span>
            </Link>
            <div className="pricingNavLinks">
              <Link href="/#how-it-works" className="pricingNavLink">How it works</Link>
              <Link href="/pricing" className="pricingNavLink current">Pricing</Link>
              <Link href="/#household" className="pricingNavLink">Household</Link>
              <Link href={APP_STORE_URL} className="pricingNavCta">Download</Link>
            </div>
          </div>
        </nav>

        <div className="pricingContainer">
          <header className="pricingHeader">
            <span className="pricingEyebrow">Pricing</span>
            <h1 className="pricingTitle">
              The location magic is free. <em>Always.</em>
            </h1>
            <p className="pricingSub">
              Pro and Pro+ add intelligence on top &mdash; meal plans, AI suggestions,
              deeper analytics. Cancel anytime.
            </p>
            <div className="pricingToggle">
              <button
                className={`toggleBtn ${billing === "annual" ? "active" : ""}`}
                onClick={() => setBilling("annual")}
              >
                Annual
              </button>
              <button
                className={`toggleBtn ${billing === "monthly" ? "active" : ""}`}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
            </div>
          </header>

          <div className="tiersGrid">

            {/* Free */}
            <article className="tierCard">
              <h2 className="tierName">Free</h2>
              <p className="tierPrice"><strong>$0</strong></p>
              <p className="tierTag">The core promise.</p>
              <ul className="tierList">
                <li>Location-aware reminders</li>
                <li>Lock Screen widget</li>
                <li>Manual task entry</li>
                <li>Grocery list with department grouping</li>
                <li>Household sync (1 partner)</li>
              </ul>
              <Link href={APP_STORE_URL} className="tierCta ghost">Get Near</Link>
            </article>

            {/* Pro */}
            <article className="tierCard featured">
              <span className="tierBadge">Most popular</span>
              <h2 className="tierName">Pro</h2>
              <p className="tierPrice">
                <strong>{prices.pro.amount}</strong>
                <span>{prices.pro.period}</span>
              </p>
              <p className="tierTag">The intelligence layer.</p>
              <ul className="tierList">
                <li>Everything in Free</li>
                <li>Unlimited AI meal plans</li>
                <li>AI recipe Discover</li>
                <li>Smart Observations (10 rules)</li>
                <li>Voice intake</li>
                <li>Annual Wrapped</li>
              </ul>
              <Link href={APP_STORE_URL} className="tierCta primary">Start 7-day free trial</Link>
            </article>

            {/* Pro+ */}
            <article className="tierCard">
              <h2 className="tierName">Pro+</h2>
              <p className="tierPrice">
                <strong>{prices.plus.amount}</strong>
                <span>{prices.plus.period}</span>
              </p>
              <p className="tierTag">The full surface.</p>
              <ul className="tierList">
                <li>Everything in Pro</li>
                <li>Aisle-aware grocery lists</li>
                <li>Cart price intelligence</li>
                <li>Pantry tracking</li>
                <li>Household pantry sync</li>
                <li>Priority support</li>
              </ul>
              <Link href={APP_STORE_URL} className="tierCta ghost">Choose Pro+</Link>
            </article>

          </div>

          <p className="pricingFootnote">
            Monthly: $9.99 (Pro) &middot; $12.99 (Pro+). 7-day free trial on annual plans.
            Cancel anytime in Settings &rarr; Apple ID.
          </p>
        </div>
      </div>
    </>
  )
}
