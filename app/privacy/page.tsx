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
              Near (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is a
              location-based task reminder app for iPhone. Near surfaces errands, groceries,
              and household tasks automatically when you arrive at the places where they can
              be completed.
            </p>
            <p>
              This Privacy Policy explains what information Near collects, how it is used, and
              the choices you have. We designed Near with privacy in mind and collect only
              what is necessary to deliver a great experience.
            </p>
          </section>

          <section className="legalSection">
            <h2>Information We Collect</h2>

            <h3>Account Information</h3>
            <p>
              When you create an account, we collect the information needed to authenticate
              you:
            </p>
            <ul>
              <li>
                <strong>Phone sign-in:</strong> your phone number and a one-time verification
                code
              </li>
              <li>
                <strong>Sign in with Apple:</strong> your Apple identity token and, optionally,
                your name
              </li>
              <li>
                <strong>Sign in with Google:</strong> your Google identity token
              </li>
            </ul>
            <p>
              You may also set a display name and avatar emoji, which are visible to your
              household members.
            </p>

            <h3>Location Data</h3>
            <p>
              Near uses your device&apos;s location services to detect when you arrive at or
              depart from saved places. This powers the core reminder experience. We collect:
            </p>
            <ul>
              <li>
                <strong>Arrival and departure events</strong> — when you enter or leave a
                geofenced place, we record the event (place ID, timestamp, and coordinates) on
                our server to trigger reminders, track visit history, and enable household
                arrival notifications.
              </li>
              <li>
                <strong>Current location</strong> — used on-device for distance-based sorting
                and route awareness. Your real-time location is not continuously transmitted to
                our server.
              </li>
            </ul>
            <p>
              Near requests &quot;Always&quot; location permission so it can monitor
              geofences in the background. You can change this to &quot;When In Use&quot; or
              disable it entirely in iPhone Settings. The app will still function as a manual
              task list without location features.
            </p>

            <h3>Tasks, Places &amp; Household Data</h3>
            <p>
              The tasks, places, and household information you create are stored on our
              servers to enable syncing, household sharing, and features like recurring item
              suggestions. This includes task titles, notes, due dates, subtask details, place
              names, addresses, coordinates, and household membership.
            </p>

            <h3>Usage Analytics</h3>
            <p>
              We collect anonymous usage events to understand how the app is used and to
              improve the experience. These include:
            </p>
            <ul>
              <li>Permission grant/deny events (location, notifications)</li>
              <li>Arrival notification sent, opened, and dismissed counts</li>
              <li>Task creation and completion counts</li>
              <li>Feature usage signals (e.g., errand bundling, route suggestions)</li>
            </ul>
            <p>
              Analytics are tied to your account for product improvement purposes. We do not
              sell or share analytics data with third parties for advertising.
            </p>

            <h3>Device Information</h3>
            <p>
              We collect basic device information (push notification tokens and platform
              identifier) solely to deliver push notifications.
            </p>
          </section>

          <section className="legalSection">
            <h2>How We Use Your Information</h2>
            <p>Near uses the information described above to:</p>
            <ul>
              <li>
                Deliver location-triggered task reminders when you arrive at saved places
              </li>
              <li>Sync your tasks and places across sessions</li>
              <li>Enable household members to share places, tasks, and arrival activity</li>
              <li>Send push notifications for arrivals, departures, and task reminders</li>
              <li>Provide smart features like recurring item suggestions, proactive trip
                nudges, and weather-aware errand timing</li>
              <li>Improve app quality and fix bugs using aggregated analytics</li>
            </ul>
            <p>
              We do not use your information for advertising, marketing profiling, or any
              purpose beyond delivering and improving the Near experience.
            </p>
          </section>

          <section className="legalSection">
            <h2>Household Sharing</h2>
            <p>
              When you create or join a household, the following information is shared with
              other household members:
            </p>
            <ul>
              <li>Your display name and avatar emoji</li>
              <li>Shared places and task lists</li>
              <li>Task completion status</li>
              <li>Arrival notifications at shared places (if enabled)</li>
            </ul>
            <p>
              Your real-time location is never shared with household members. Only arrival and
              departure events at shared places are visible.
            </p>
            <p>
              You can leave a household at any time, which immediately removes your access to
              shared content and removes other members&apos; access to your data.
            </p>
          </section>

          <section className="legalSection">
            <h2>Third-Party Services</h2>
            <p>Near integrates with the following services:</p>
            <ul>
              <li>
                <strong>Apple Push Notification service (APNs)</strong> — for delivering task
                reminders and arrival notifications
              </li>
              <li>
                <strong>Apple WeatherKit</strong> — your coordinates are sent to Apple&apos;s
                weather service to power weather-aware errand suggestions
              </li>
              <li>
                <strong>Apple MapKit</strong> — for place search and map display
              </li>
              <li>
                <strong>Kroger (optional)</strong> — if you choose to connect your Kroger
                account, we use OAuth to link your account so you can send grocery items to
                your Kroger cart and receive aisle and pricing data. We do not access your
                Kroger purchase history. You can disconnect at any time from your profile
                settings.
              </li>
            </ul>
            <p>
              Near does not include any third-party advertising frameworks or tracking pixels.
              We do not share your data with Facebook, Google Analytics, or data brokers.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Storage &amp; Security</h2>
            <p>
              Your data is stored on our servers (hosted on Vercel) and transmitted over
              encrypted HTTPS connections. Authentication tokens are stored securely in your
              device&apos;s Keychain.
            </p>
            <p>
              Task and place data is also cached locally on your device for offline access and
              shared with app extensions (widget, watch app, share extension) via a secure App
              Group container.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Retention &amp; Deletion</h2>
            <p>
              We retain your data for as long as your account is active. You can delete your
              account at any time from your profile settings in the app. Account deletion
              permanently removes:
            </p>
            <ul>
              <li>Your user profile and authentication credentials</li>
              <li>All tasks, places, and household memberships</li>
              <li>All analytics data associated with your account</li>
              <li>All locally cached data and Keychain tokens</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Children&apos;s Privacy</h2>
            <p>
              Near is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe a child
              under 13 has provided personal information through Near, please contact us so we
              can take appropriate action.
            </p>
          </section>

          <section className="legalSection">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access your data</strong> — all your tasks, places, and profile
                information are visible directly in the app
              </li>
              <li>
                <strong>Delete your account</strong> — permanently remove all your data from
                our servers via profile settings
              </li>
              <li>
                <strong>Control location access</strong> — change or revoke location
                permissions at any time in iPhone Settings
              </li>
              <li>
                <strong>Disconnect integrations</strong> — unlink your Kroger account at any
                time from profile settings
              </li>
              <li>
                <strong>Leave a household</strong> — remove yourself from shared lists at any
                time
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material
              changes, we will notify you through the app or by updating the &quot;Last
              updated&quot; date at the top of this page. Your continued use of Near after
              changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="legalSection">
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how Near handles your data,
              please contact us at:
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
