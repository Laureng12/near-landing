"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DownloadCta } from "../site/chrome"
import { featuresFor } from "../site/features"

const BRAND_WORDMARK = "/assets/brand/Near-Logo-Horizontal.png"

type Billing = "annual" | "monthly"

/* Two tiers, because two tiers is what exists. The site had been selling a
   middle Pro at $79.99 that is not a real product, and had the price of the
   real one wrong. Near Together is built but not purchasable, so it is not
   here at all - see app/site/features.ts. */
const tiers = [
  {
    name: "Free",
    tag: "Everything you need to stop forgetting.",
    annual: { big: "$0", unit: "", note: "Free forever." },
    monthly: { big: "$0", unit: "", note: "Free forever." },
    features: featuresFor("free"),
    cta: "Download Near",
    style: "ghost" as const,
  },
  {
    name: "Near Pro",
    tag: "The part that thinks ahead.",
    annual: { big: "$9.08", unit: "/month", note: "$109 billed annually \u00b7 Save 30%" },
    monthly: { big: "$12.99", unit: "/month", note: "Billed monthly. Cancel anytime." },
    features: ["Everything in Free", ...featuresFor("pro")],
    cta: "Try Pro free for 7 days",
    style: "primary" as const,
    featured: true,
  },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("annual")

  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }

        .pricePage {
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-sans);
        }

        /* ── Nav ── */
        .priceNav {
          position: sticky; top: 0; z-index: 60;
          background: rgba(251, 248, 243, 0.82);
          backdrop-filter: saturate(180%) blur(22px);
          -webkit-backdrop-filter: saturate(180%) blur(22px);
          border-bottom: 1px solid var(--ink-hair-soft);
        }
        .priceNavInner {
          max-width: var(--shell); margin: 0 auto;
          padding: 14px var(--gutter);
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }
        .priceNavLogo { height: 28px; width: auto; display: block; }
        .priceNavLinks { display: flex; align-items: center; gap: 30px; }
        .priceNavLink {
          font-size: 0.93rem; color: var(--ink-soft);
          transition: color 0.3s var(--ease-soft);
        }
        .priceNavLink:hover, .priceNavLink.current { color: var(--ink); }
        .priceNavCta {
          display: inline-flex; align-items: center;
          padding: 10px 20px; border-radius: 999px;
          background: var(--night-soft); color: var(--on-night);
          font-size: 0.9rem; font-weight: 500;
          transition: background 0.3s var(--ease-soft), transform 0.45s var(--ease);
        }
        .priceNavCta:hover { background: var(--blue-hover); transform: translateY(-1px); }

        /* ── Header ── */
        .priceShell { max-width: var(--shell); margin: 0 auto; padding: clamp(64px, 9vw, 108px) var(--gutter) clamp(72px, 10vw, 120px); }
        .priceHead { text-align: center; margin-bottom: clamp(3rem, 6vw, 4.5rem); }
        .priceEyebrow {
          margin: 0 0 20px;
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.19em;
          text-transform: uppercase; color: var(--gold);
        }
        .priceTitle {
          margin: 0;
          font-size: clamp(2.1rem, 5vw, 3.4rem);
          font-weight: 500; line-height: 1.06; letter-spacing: -0.03em;
          color: var(--ink); text-wrap: balance;
        }
        .priceTitle em {
          font-family: var(--font-serif); font-style: italic; font-weight: 400;
          letter-spacing: -0.01em;
        }
        .priceSub {
          margin: 24px auto 36px; max-width: 52ch;
          font-size: clamp(1rem, 1.3vw, 1.12rem); line-height: 1.62;
          color: var(--ink-soft);
        }

        /* ── Toggle ── */
        .priceToggle {
          display: inline-flex; padding: 4px;
          background: var(--paper-sunk);
          border: 1px solid var(--ink-hair-soft);
          border-radius: 999px;
        }
        .toggleBtn {
          padding: 10px 24px; border: 0; border-radius: 999px;
          background: transparent; cursor: pointer;
          font-family: inherit; font-size: 0.9rem; font-weight: 500;
          color: var(--ink-soft);
          transition: background 0.3s var(--ease-soft), color 0.3s var(--ease-soft), box-shadow 0.3s var(--ease-soft);
        }
        .toggleBtn.active {
          background: var(--paper-raised); color: var(--ink);
          box-shadow: 0 2px 8px rgba(20, 24, 58, 0.08);
        }

        /* ── Tiers ── */
        .tiers {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2vw, 24px); align-items: start;
        }
        .tier {
          position: relative;
          padding: 40px 32px 34px;
          border-radius: var(--radius);
          background: var(--paper-raised);
          border: 1px solid var(--ink-hair-soft);
          box-shadow: 0 16px 44px rgba(20, 24, 58, 0.06);
        }
        .tier.featured {
          background: var(--night-soft);
          border-color: var(--night-soft);
          color: var(--on-night);
          box-shadow: 0 28px 70px rgba(20, 33, 63, 0.3);
        }
        .tierBadge {
          position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          padding: 6px 15px; border-radius: 999px;
          background: var(--gold-lit); color: #14213F;
          font-size: 0.66rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
        }
        .tierName {
          margin: 0 0 10px;
          font-size: 1.1rem; font-weight: 500; letter-spacing: -0.015em;
        }
        .tierTag {
          margin: 0 0 26px;
          font-size: 1.08rem; line-height: 1.35; letter-spacing: -0.02em;
          color: var(--ink);
        }
        .featured .tierTag { color: var(--on-night); }
        .tierPrice { display: flex; align-items: baseline; gap: 5px; margin: 0; }
        .tierPrice strong {
          font-size: 2.6rem; font-weight: 500; letter-spacing: -0.035em; line-height: 1;
        }
        .tierPrice span { font-size: 0.92rem; color: var(--ink-faint); }
        .featured .tierPrice span { color: var(--on-night-faint); }
        .tierNote {
          margin: 10px 0 28px; min-height: 1.4em;
          font-size: 0.84rem; color: var(--ink-faint);
        }
        .featured .tierNote { color: var(--on-night-faint); }
        .tierList { list-style: none; padding: 0; margin: 0 0 30px; }
        .tierList li {
          padding: 11px 0;
          font-size: 0.94rem; line-height: 1.45;
          color: var(--ink-soft);
          border-bottom: 1px solid var(--ink-hair-soft);
        }
        .tierList li:last-child { border-bottom: none; }
        .featured .tierList li {
          color: var(--on-night-soft);
          border-color: rgba(255, 244, 228, 0.1);
        }
        .tierCta {
          display: flex; align-items: center; justify-content: center;
          width: 100%; padding: 15px 24px; border-radius: 999px;
          font-size: 0.95rem; font-weight: 500; text-align: center;
          border: 1px solid transparent;
          transition: background 0.3s var(--ease-soft), transform 0.45s var(--ease), border-color 0.3s var(--ease-soft);
        }
        .tierCta.ghost { border-color: var(--ink-hair); color: var(--ink); }
        .tierCta.ghost:hover { border-color: rgba(20, 24, 58, 0.28); transform: translateY(-2px); }
        .tierCta.primary { background: var(--on-night); color: #14183A; }
        .tierCta.primary:hover { transform: translateY(-2px); }

        .priceFoot {
          margin: clamp(2.5rem, 5vw, 3.5rem) 0 0;
          text-align: center; font-size: 0.84rem; line-height: 1.7;
          color: var(--ink-faint);
        }
        .priceBack {
          margin-top: 14px; text-align: center;
          font-size: 0.88rem; color: var(--ink-soft);
        }
        .priceBack a { border-bottom: 1px solid var(--ink-hair); }

        @media (max-width: 860px) {
          .tiers { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
        }
        @media (max-width: 720px) {
          .priceNavLinks .priceNavLink { display: none; }
        }
      `}</style>

      <div className="pricePage">
        <nav className="priceNav">
          <div className="priceNavInner">
            <Link href="/" aria-label="Near, home">
              <Image src={BRAND_WORDMARK} alt="Near" width={1185} height={500} className="priceNavLogo" />
            </Link>
            <div className="priceNavLinks">
              <Link href="/#how-it-works" className="priceNavLink">How it works</Link>
              <Link href="/#household" className="priceNavLink">For households</Link>
              <Link href="/pricing" className="priceNavLink current">Pricing</Link>
              <DownloadCta className="priceNavCta" source="pricing-nav">Download</DownloadCta>
            </div>
          </div>
        </nav>

        <div className="priceShell">
          <header className="priceHead">
            <p className="priceEyebrow">Pricing</p>
            <h1 className="priceTitle">
              The location magic is free. <em>Always.</em>
            </h1>
            <p className="priceSub">
              The part that finds you never costs anything, and neither does the
              grocery list. Pro is the thinking on top - plans without a limit,
              and Near learning what you run out of before you do.
            </p>
            <div className="priceToggle" role="group" aria-label="Billing period">
              <button
                className={`toggleBtn ${billing === "annual" ? "active" : ""}`}
                onClick={() => setBilling("annual")}
                aria-pressed={billing === "annual"}
              >
                Annual
              </button>
              <button
                className={`toggleBtn ${billing === "monthly" ? "active" : ""}`}
                onClick={() => setBilling("monthly")}
                aria-pressed={billing === "monthly"}
              >
                Monthly
              </button>
            </div>
          </header>

          <div className="tiers">
            {tiers.map((t) => {
              const price = billing === "annual" ? t.annual : t.monthly
              return (
                <article className={`tier ${t.featured ? "featured" : ""}`} key={t.name}>
                  <h2 className="tierName">{t.name}</h2>
                  <p className="tierTag">{t.tag}</p>
                  <p className="tierPrice">
                    <strong>{price.big}</strong>
                    {price.unit && <span>{price.unit}</span>}
                  </p>
                  <p className="tierNote">{price.note}</p>
                  <ul className="tierList">
                    {t.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <DownloadCta className={`tierCta ${t.style}`} source={`pricing-${t.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    {t.cta}
                  </DownloadCta>
                </article>
              )
            })}
          </div>

          <p className="priceFoot">
            Seven days free when you start Pro. Cancel anytime in Settings &rarr; Apple ID.
          </p>
          <p className="priceBack">
            <Link href="/">Back to Near</Link>
          </p>
        </div>
      </div>
    </>
  )
}
