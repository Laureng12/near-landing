"use client"

import "./pricing.css"

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
