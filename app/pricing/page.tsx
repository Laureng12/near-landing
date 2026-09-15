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
    tag: "Everything you need for everyday reminders.",
    annual: { big: "$0", unit: "", note: "Free forever." },
    monthly: { big: "$0", unit: "", note: "Free forever." },
    features: featuresFor("free"),
    cta: "Download Near",
    style: "ghost" as const,
  },
  {
    name: "Near Pro",
    tag: "More planning help for your everyday life.",
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
              Everyday reminders. <em>Free.</em>
            </h1>
            <p className="priceSub">
              Location reminders, shared lists and voice capture are included.
              Upgrade to Pro for unlimited AI meal plans, replenishment
              suggestions, and help breaking goals into steps.
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

          {/* What Pro actually does, before anyone is asked what it costs.
              One week, one store, and the step that is the whole point: the
              three recipes become one list instead of three. */}
          <section className="proProof" aria-label="What Near Pro does">
            <p className="proProofHead">
              A week of meals, and one list at the end of it.
            </p>
            <ol className="proSteps">
              <li className="proStep">
                <span className="proStepNum">1</span>
                <h3 className="proStepTitle">Pick the week</h3>
                <div className="proChips">
                  <span>Sheet-pan chicken</span>
                  <span>Black bean tacos</span>
                  <span>Pasta e fagioli</span>
                </div>
                <p className="proStepBody">
                  Three dinners, chosen or suggested. Free gets three plans a
                  month; Pro takes the cap off.
                </p>
              </li>
              <li className="proStep">
                <span className="proStepNum">2</span>
                <h3 className="proStepTitle">One combined grocery list</h3>
                <ul className="proMerge">
                  <li>
                    <span className="proMergeFrom">Onion &times;3</span>
                    <span className="proMergeTo">3 onions</span>
                  </li>
                  <li>
                    <span className="proMergeFrom">Olive oil &times;3</span>
                    <span className="proMergeTo">Olive oil</span>
                  </li>
                  <li>
                    <span className="proMergeFrom">Cumin &times;2</span>
                    <span className="proMergeTo">Cumin</span>
                  </li>
                </ul>
                <p className="proStepBody">
                  Three recipes become one list, in aisle order, with Kroger
                  prices where you have an account.
                </p>
              </li>
              <li className="proStep">
                <span className="proStepNum">3</span>
                <h3 className="proStepTitle">It is waiting at the store</h3>
                <div className="proNotif">
                  <div className="proNotifLabel">Near &middot; now</div>
                  <div className="proNotifTitle">You&rsquo;re at Kroger</div>
                  <div className="proNotifSub">11 things for this week</div>
                </div>
                <p className="proStepBody">
                  Same arrival as every other reminder. You did the thinking
                  once, whenever it suited you.
                </p>
              </li>
            </ol>
          </section>

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
          {/* Asked in every audit and never answered on the page. The backend
              resolves entitlement by userId alone, with no household lookup,
              so the honest answer today is no. Seat sharing exists in the code
              as Near Together and is not sellable. */}
          <p className="priceFoot priceFootQuiet">
            Pro covers one person. Sharing a household is free and everyone&rsquo;s
            lists stay in sync, but Pro&rsquo;s planning and prediction apply to the
            account that subscribes.
          </p>
          <p className="priceBack">
            <Link href="/">Back to Near</Link>
          </p>
        </div>
      </div>
    </>
  )
}
