"use client"

import "./support.css"

import Link from "next/link"
import Image from "next/image"

const BRAND_WORDMARK = "/assets/brand/Near-Logo-Horizontal.png"

export default function SupportPage() {
  return (
    <>
      <header className="legalHeader">
        <Link href="/" className="legalLogo">
          <Image
            src={BRAND_WORDMARK}
            alt="Near"
            width={1185}
            height={500}
            className="legalLogoFull"
          />
        </Link>
      </header>

      <main className="legalMain">
        <article className="legalContent">
          <h1 className="legalTitle">Support</h1>
          <p className="legalUpdated">We&apos;re here to help.</p>

          <section className="legalSection">
            <h2>Contact Us</h2>
            <p>
              If you have a question, found a bug, or need help with Near, email us at:
            </p>
            <p>
              <a href="mailto:hello@nearesttask.com" className="legalLink">
                hello@nearesttask.com
              </a>
            </p>
            <p>We typically respond within 24 hours.</p>
          </section>

          <section className="legalSection">
            <h2>Frequently Asked Questions</h2>

            <h3>How do I get location reminders?</h3>
            <p>
              Save a place (like your grocery store), add tasks to it, and grant Near
              &quot;Always&quot; location access in Settings. When you arrive at that place,
              Near will show your tasks automatically.
            </p>

            <h3>Why does Near need &quot;Always&quot; location access?</h3>
            <p>
              Near monitors geofences in the background so it can notify you the moment you
              arrive at a saved place - even if the app isn&apos;t open. &quot;When In
              Use&quot; only works while the app is in the foreground, which defeats the
              purpose of automatic reminders.
            </p>

            <h3>How do I share lists with my household?</h3>
            <p>
              Tap your avatar in the top corner to open your profile, then tap
              &quot;Invite a household member&quot; and send the invite link to your
              partner or roommates. Once they join, all your places and tasks are shared
              automatically.
            </p>

            <h3>How do I connect my Kroger account?</h3>
            <p>
              Go to your profile (tap your avatar), scroll to Connected Accounts, and tap
              Connect Kroger. This works with all Kroger-family stores including Harris
              Teeter, Ralphs, Fred Meyer, King Soopers, and more.
            </p>

            <h3>How do I delete my account?</h3>
            <p>
              Go to your profile and scroll to the bottom. Tap &quot;Delete Account.&quot;
              This permanently removes your account, tasks, places, and all associated data
              from our servers, subject to legal, security, fraud-prevention, and backup requirements described in our Privacy Policy.
            </p>

            <h3>How do I make a privacy or data request?</h3>
            <p>
              You can request access, correction, deletion, sale/share opt-out, or help limiting
              location data by emailing{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">
                hello@nearesttask.com
              </a>.
            </p>

            <h3>Does Near work offline?</h3>
            <p>
              Yes. Near caches your tasks and places locally. You can view and complete tasks
              offline, and changes sync automatically when you reconnect.
            </p>
          </section>
        </article>
      </main>

      <footer className="legalFooter">
        <div className="legalFooterInner">
          <span className="legalFooterCopy">Near &copy; 2026 Rise-X, Inc. All rights reserved.</span>
          <nav className="legalFooterLinks">
            <Link href="/terms" className="legalFooterLink">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="legalFooterLink">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>

    </>
  )
}
