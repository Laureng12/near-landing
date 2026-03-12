"use client"

import Link from "next/link"
import Image from "next/image"

export default function SupportPage() {
  return (
    <>
      <header className="legalHeader">
        <Link href="/" className="legalLogo">
          <Image
            src="/near-icon-hero.png"
            alt="Near"
            width={32}
            height={32}
            className="legalLogoIcon"
          />
          <span className="legalLogoText">near</span>
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
              arrive at a saved place — even if the app isn&apos;t open. &quot;When In
              Use&quot; only works while the app is in the foreground, which defeats the
              purpose of automatic reminders.
            </p>

            <h3>How do I share lists with my household?</h3>
            <p>
              Go to the Household tab, create a household, and send an invite link to your
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
              from our servers.
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
          <span className="legalFooterCopy">&copy; {new Date().getFullYear()} Near</span>
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

      <style jsx global>{`
        .legalHeader {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid var(--line);
          padding: 0 1.5rem;
        }

        .legalLogo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          max-width: 680px;
          margin: 0 auto;
          padding: 14px 0;
        }

        .legalLogoIcon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }

        .legalLogoText {
          font-size: 20px;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.03em;
        }

        .legalMain {
          max-width: 680px;
          margin: 0 auto;
          padding: 3rem 1.5rem 4rem;
        }

        .legalTitle {
          font-size: 40px;
          font-weight: 600;
          color: var(--foreground);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
        }

        .legalUpdated {
          font-size: 15px;
          color: var(--text-secondary);
          margin: 0.75rem 0 0;
        }

        .legalSection {
          margin-top: 2.5rem;
        }

        .legalSection h2 {
          font-size: 22px;
          font-weight: 600;
          color: var(--foreground);
          letter-spacing: -0.01em;
          margin: 0 0 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--line);
        }

        .legalSection h3 {
          font-size: 17px;
          font-weight: 600;
          color: var(--foreground);
          margin: 1.5rem 0 0.4rem;
        }

        .legalSection p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0.6rem 0 0;
        }

        .legalSection ul {
          margin: 0.6rem 0 0;
          padding-left: 1.25rem;
        }

        .legalSection li {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-top: 0.4rem;
        }

        .legalSection li strong {
          color: var(--foreground);
          font-weight: 600;
        }

        .legalLink {
          color: var(--blue);
          text-decoration: none;
          font-weight: 500;
        }

        .legalLink:hover {
          text-decoration: underline;
        }

        .legalFooter {
          border-top: 1px solid var(--line);
          padding: 2rem 1.5rem;
        }

        .legalFooterInner {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .legalFooterCopy {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .legalFooterLinks {
          display: flex;
          gap: 1.5rem;
        }

        .legalFooterLink {
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .legalFooterLink:hover {
          color: var(--blue);
        }

        @media (max-width: 600px) {
          .legalTitle { font-size: 30px; }

          .legalMain { padding: 2rem 1rem 3rem; }

          .legalFooterInner {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
