import Link from "next/link"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

export default function PricingPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: var(--font-sans, "DM Sans", sans-serif); }
        .pricingPage {
          min-height: 100vh;
          background: var(--cream, #FAF6F1);
          font-family: var(--font-sans, "DM Sans", sans-serif);
        }
        .pricingNavInner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(26,14,31,0.06);
        }
        .pricingNavBrand {
          font-size: 20px;
          font-weight: 700;
          color: var(--plum-text, #2A0A16);
          text-decoration: none;
          letter-spacing: -0.02em;
        }
        .pricingContainer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 24px;
        }
        .pricingHeader {
          text-align: center;
          margin-bottom: 64px;
        }
        .pricingEyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold, #D4A843);
          margin: 0 0 16px;
          display: block;
        }
        .pricingTitle {
          font-size: 48px;
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--plum-text, #2A0A16);
          margin: 0 0 16px;
        }
        .pricingTitle em {
          font-family: var(--font-serif, "Instrument Serif", Georgia, serif);
          font-style: italic;
        }
        .pricingSub {
          font-size: 17px;
          line-height: 1.55;
          color: var(--plum-text, #2A0A16);
          opacity: 0.7;
          max-width: 56ch;
          margin: 0 auto 32px;
        }
        .pricingToggle {
          display: inline-flex;
          background: rgba(26,14,31,0.06);
          border-radius: 999px;
          padding: 4px;
        }
        .toggleBtn {
          padding: 10px 24px;
          border-radius: 999px;
          border: 0;
          background: transparent;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          color: var(--plum-text, #2A0A16);
          font-family: var(--font-sans, "DM Sans", sans-serif);
        }
        .toggleBtn.active { background: white; }
        .tiersGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        .tierCard {
          background: white;
          border-radius: 24px;
          padding: 40px 32px;
          border: 1px solid rgba(26,14,31,0.06);
          color: var(--plum-text, #2A0A16);
          position: relative;
        }
        .tierCard.featured {
          background: var(--plum-base, #1A0E1F);
          color: var(--cream-text, #FFF0DB);
          border-color: var(--plum-base, #1A0E1F);
          transform: translateY(-8px);
        }
        .tierBadge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold, #D4A843);
          color: var(--plum-base, #1A0E1F);
          font-size: 11px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 999px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .tierName { font-size: 20px; font-weight: 500; margin: 0 0 12px; }
        .tierPrice {
          font-size: 14px;
          margin: 0 0 8px;
          opacity: 0.6;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .tierPrice strong { font-size: 36px; font-weight: 500; opacity: 1; }
        .tierTag {
          font-size: 14px;
          line-height: 1.4;
          font-style: italic;
          font-family: var(--font-serif, "Instrument Serif", Georgia, serif);
          margin: 0 0 24px;
          opacity: 0.78;
        }
        .tierList { list-style: none; padding: 0; margin: 0 0 32px; }
        .tierList li {
          padding: 8px 0;
          font-size: 14px;
          line-height: 1.4;
          border-bottom: 1px solid rgba(26,14,31,0.06);
        }
        .featured .tierList li { border-color: rgba(255,240,219,0.08); }
        .tierCta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 16px 28px;
          border-radius: 28px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          font-family: var(--font-sans, "DM Sans", sans-serif);
          text-align: center;
          box-sizing: border-box;
          cursor: pointer;
        }
        .tierCta.primary {
          background: var(--pink, #E56E8E);
          color: var(--cream-text, #FFF0DB);
          border: none;
        }
        .tierCta.ghost {
          background: transparent;
          color: var(--plum-text, #2A0A16);
          border: 1px solid rgba(26,14,31,0.2);
        }
        .featured .tierCta.ghost {
          color: var(--cream-text, #FFF0DB);
          border-color: rgba(255,240,219,0.3);
        }
        .pricingFootnote {
          text-align: center;
          font-size: 13px;
          line-height: 1.6;
          color: var(--plum-text, #2A0A16);
          opacity: 0.5;
          margin: 48px 0 0;
        }
        .dlBtn {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background: var(--pink, #E56E8E);
          color: var(--cream-text, #FFF0DB);
          border-radius: 28px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
        }
        @media (max-width: 720px) {
          .tiersGrid { grid-template-columns: 1fr; }
          .tierCard.featured { transform: none; }
          .pricingTitle { font-size: 32px; }
        }
      `}</style>

      <div className="pricingPage">
        <header>
          <div className="pricingNavInner">
            <Link href="/" className="pricingNavBrand">Near</Link>
            <Link href={APP_STORE_URL} className="dlBtn">Download</Link>
          </div>
        </header>

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
              <button className="toggleBtn active">Annual</button>
              <button className="toggleBtn">Monthly</button>
            </div>
          </header>

          <div className="tiersGrid">
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

            <article className="tierCard featured">
              <span className="tierBadge">Most popular</span>
              <h2 className="tierName">Pro</h2>
              <p className="tierPrice"><strong>$79.99</strong><span>/year</span></p>
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

            <article className="tierCard">
              <h2 className="tierName">Pro+</h2>
              <p className="tierPrice"><strong>$109</strong><span>/year</span></p>
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
