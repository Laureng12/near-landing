"use client"

import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
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
          <h1 className="legalTitle">Privacy Policy</h1>
          <p className="legalUpdated">Last updated March 11, 2026</p>

          <section className="legalSection">
            <h2>Introduction</h2>
            <p>
              Near (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is a location-based task
              reminder app for iPhone. Near surfaces errands, groceries, and household tasks
              automatically when you arrive at the places where they can be completed.
            </p>
            <p>
              We believe your data belongs to you. This Privacy Policy explains what information Near
              collects, how it is used, and the choices you have. We designed Near with privacy as a
              core principle — your location data stays on your device and is never used for
              advertising or tracking.
            </p>
          </section>

          <section className="legalSection">
            <h2>Information We Collect</h2>
            <h3>Location Data</h3>
            <p>
              Near uses your device&apos;s location services to detect when you arrive at or pass by
              places associated with your tasks. This location data is processed entirely on your
              device. We do not transmit, store, or have access to your location history on any
              server.
            </p>
            <h3>Task Content</h3>
            <p>
              The tasks, lists, and places you create in Near are stored on your device and
              optionally synced via Apple iCloud to your other devices. We do not have access to your
              task content.
            </p>
            <h3>Household Information</h3>
            <p>
              If you join or create a household, Near stores household membership information to
              enable shared lists between members. Household data is synced via Apple CloudKit and is
              not accessible to us.
            </p>
            <h3>Device Information</h3>
            <p>
              Near may collect basic, non-identifying device information (such as device model and
              iOS version) solely for the purpose of ensuring compatibility and diagnosing crashes.
              This information is never linked to your identity.
            </p>
          </section>

          <section className="legalSection">
            <h2>How We Use Your Information</h2>
            <p>Near uses the information described above exclusively to:</p>
            <ul>
              <li>Deliver location-triggered task reminders when you arrive at relevant places</li>
              <li>Sync your tasks and lists across your devices via iCloud</li>
              <li>Enable household members to share lists and see relevant tasks</li>
              <li>Improve app stability and fix bugs</li>
            </ul>
            <p>
              We do not use your information for advertising, marketing, analytics profiling, or any
              purpose beyond delivering the core Near experience.
            </p>
          </section>

          <section className="legalSection">
            <h2>Location Data</h2>
            <p>
              Location is central to how Near works, so we want to be especially clear about how it
              is handled:
            </p>
            <ul>
              <li>
                <strong>On-device only.</strong> Your location is processed on your iPhone. It is
                never sent to our servers or any third party.
              </li>
              <li>
                <strong>No tracking.</strong> We do not build location profiles, track your
                movements, or record your location history.
              </li>
              <li>
                <strong>No advertising.</strong> Your location is never used for targeted advertising
                or sold to data brokers.
              </li>
              <li>
                <strong>You are in control.</strong> You can revoke location permissions at any time
                in your iPhone Settings. Near will continue to work as a manual task list without
                location features.
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Household Sharing</h2>
            <p>
              When you create or join a household in Near, the following information is shared with
              other household members:
            </p>
            <ul>
              <li>Your display name</li>
              <li>Shared task lists and their contents</li>
              <li>Task completion status</li>
            </ul>
            <p>
              Your location is never shared with household members. Only the tasks themselves are
              shared — not when or where you completed them.
            </p>
            <p>
              You can leave a household at any time from the app settings, which immediately removes
              your access to shared lists and removes other members&apos; access to any lists you
              owned.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Storage &amp; Security</h2>
            <p>
              Your data is stored on your device and, if you use iCloud, synced via Apple&apos;s
              CloudKit infrastructure. Apple encrypts CloudKit data both in transit and at rest. We
              do not operate our own servers for storing user data.
            </p>
            <p>
              Because your data lives on your device and in your personal iCloud account, deleting
              the app or signing out of iCloud removes your Near data.
            </p>
          </section>

          <section className="legalSection">
            <h2>Third-Party Services</h2>
            <p>Near integrates only with Apple platform services:</p>
            <ul>
              <li>
                <strong>Apple iCloud (CloudKit)</strong> — for syncing tasks across your devices and
                enabling household sharing
              </li>
              <li>
                <strong>Apple Push Notification service (APNs)</strong> — for delivering task
                reminders
              </li>
              <li>
                <strong>Apple MapKit</strong> — for place search and location display within the app
              </li>
            </ul>
            <p>
              Near does not include any third-party analytics SDKs, advertising frameworks, or
              tracking pixels. We do not share data with Facebook, Google, or any other third-party
              service.
            </p>
          </section>

          <section className="legalSection">
            <h2>Children&apos;s Privacy</h2>
            <p>
              Near is not directed at children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe a child under 13 has
              provided personal information through Near, please contact us so we can take
              appropriate action.
            </p>
          </section>

          <section className="legalSection">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access your data</strong> — all your tasks and lists are visible directly in
                the app
              </li>
              <li>
                <strong>Delete your data</strong> — delete the app to remove all local data, or sign
                out of iCloud to remove synced data
              </li>
              <li>
                <strong>Opt out of location</strong> — revoke location permissions in iPhone
                Settings at any time
              </li>
              <li>
                <strong>Leave a household</strong> — remove yourself from shared lists at any time
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we
              will notify you through the app or by updating the &quot;Last updated&quot; date at
              the top of this page. Your continued use of Near after changes are posted constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section className="legalSection">
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how Near handles your data, please
              contact us at:
            </p>
            <p>
              <a href="mailto:hello@nearesttask.com" className="legalLink">
                hello@nearesttask.com
              </a>
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
