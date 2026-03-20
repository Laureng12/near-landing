"use client"

import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <>
      <header className="legalHeader">
        <Link href="/" className="legalLog">
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
          <p className="legalUpdated">Last updated March 20, 2026</p>

          <section className="legalSection">
            <h2>Introduction</h2>
            <p>
              Near is operated by Rise-X, Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;the Company&quot;). Near is a location-based task reminder app for iPhone that surfaces errands, groceries, and household tasks automatically when you arrive at the places where they can be completed.
            </p>
            <p>
              This Privacy Policy explains what information Near collects, how it is used, how it may be shared, and the choices you have. By using Near, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="legalSection">
            <h2>Information We Collect</h2>

            <h3>Account Information</h3>
            <p>
              When you create an account, we collect the information needed to authenticate you:
            </p>
            <ul>
              <li>
                <strong>Phone sign-in:</strong> your phone number and a one-time verification code
              </li>
              <li>
                <strong>Sign in with Apple:</strong> your Apple identity token and, optionally, your name
              </li>
              <li>
                <strong>Sign in with Google:</strong> your Google identity token
              </li>
            </ul>
            <p>
              You may also set a display name and avatar emoji, which are visible to your household members.
            </p>

            <h3>Location Data</h3>
            <p>
              Near uses your device&apos;s location services to detect when you arrive at or depart from saved places. This powers the core reminder experience. We collect:
            </p>
            <ul>
              <li>
                <strong>Arrival and departure events</strong> — when you enter or leave a geofenced place, we record the event (place ID, timestamp, and coordinates) on our server to trigger reminders, track visit history, and enable household arrival notifications.
              </li>
              <li>
                <strong>Current location</strong> — used on-device for distance-based sorting and route awareness. Your real-time location is not continuously transmitted to our server.
              </li>
            </ul>
            <p>
              Near requests &quot;Always&quot; location permission so it can monitor geofences in the background. You can change this to &quot;When In Use&quot; or disable it entirely in iPhone Settings. The app will still function as a manual task list without location features.
            </p>

            <h3>Tasks, Places &amp; Household Data</h3>
            <p>
              The tasks, places, and household information you create are stored on our servers to enable syncing, household sharing, and features like recurring item suggestions. This includes task titles, notes, due dates, subtask details, place names, addresses, coordinates, and household membership.
            </p>

            <h3>Financial Data (Optional)</h3>
            <p>
              If you enable the spending insights feature in your profile settings, Near uses Apple&apos;s FinanceKit framework to access transaction data from your Apple Wallet accounts (such as Apple Card and Apple Cash). This data is used to:
            </p>
            <ul>
              <li>
                <strong>Display spending summaries</strong> — Near shows the total amount spent, visit count, and visit frequency (e.g., weekly or biweekly) for each of your saved places over the last 90 days
              </li>
              <li>
                <strong>Improve task suggestions</strong> — places where you have regular spending patterns may be prioritized when suggesting where to assign a new task
              </li>
            </ul>
            <p>
              <strong>Financial data is processed entirely on your device.</strong> Transaction amounts, merchant details, and account information are never transmitted to our servers, shared with third parties, or used for advertising. Near only reads transaction data — it cannot modify your accounts or initiate payments. You can disable this feature at any time from your profile settings, and no financial data is retained after the feature is turned off.
            </p>

            <h3>Usage Analytics</h3>
            <p>
              We collect usage events to understand how the app is used, to improve the experience, and to personalize your experience within the app. These include:
            </p>
            <ul>
              <li>Permission grant/deny events (location, notifications)</li>
              <li>Arrival notification sent, opened, and dismissed counts</li>
              <li>Task creation and completion counts</li>
              <li>Feature usage signals (e.g., errand bundling, route suggestions)</li>
              <li>Task and place interaction patterns</li>
            </ul>
            <p>
              Analytics are tied to your account for product improvement and personalization purposes.
            </p>

            <h3>Device Information</h3>
            <p>
              We collect basic device information (push notification tokens and platform identifier) solely to deliver push notifications.
            </p>
          </section>

          <section className="legalSection">
            <h2>How We Use Your Information</h2>
            <p>Near uses the information described above to:</p>
            <ul>
              <li>Deliver location-triggered task reminders when you arrive at saved places</li>
              <li>Sync your tasks and places across sessions</li>
              <li>Enable household members to share places, tasks, and arrival activity</li>
              <li>Send push notifications for arrivals, departures, and task reminders</li>
              <li>Provide smart features like recurring item suggestions, proactive trip nudges, and weather-aware errand timing</li>
              <li><strong>Personalize your experience</strong> by learning your routines, preferences, and patterns to surface more relevant suggestions, reminders, and content</li>
              <li><strong>Generate aggregated and anonymized insights</strong> from user activity to improve the app and understand usage trends</li>
              <li>Show on-device spending summaries and visit frequency for saved places when the spending insights feature is enabled</li>
              <li>Prioritize &quot;habit places&quot; with regular spending patterns when suggesting where to assign new tasks</li>
              <li>Improve app quality and fix bugs using analytics</li>
              <li><strong>Support partnerships</strong> with retail and grocery providers to enhance the shopping and errand experience (see &quot;Retail &amp; Grocery Partners&quot; below)</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Personalization</h2>
            <p>
              Near uses your usage patterns, location history, task behavior, and preferences to personalize the app experience. This includes tailoring suggestions for tasks, places, trip timing, and product recommendations. Personalization is designed to make the app more useful to you over time.
            </p>
            <p>
              You can reset personalization data by contacting us at{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
            </p>
          </section>

          <section className="legalSection">
            <h2>Retail &amp; Grocery Partners</h2>
            <p>
              Near may partner with retail and grocery providers to enhance your shopping experience. If you opt in to a retail partner integration (such as Kroger), we may:
            </p>
            <ul>
              <li>Share certain usage data with the partner, such as task categories, shopping frequency, and place visit patterns, to improve the experience and provide relevant offers</li>
              <li>Receive data from the partner, such as product availability, aisle information, and pricing, to display within the app</li>
            </ul>
            <p>
              <strong>We will always obtain your explicit consent before sharing personally identifiable information with any retail or grocery partner.</strong> You can disconnect from any partner integration at any time from your profile settings.
            </p>
            <p>
              We may also share aggregated, de-identified data with partners that cannot reasonably be used to identify you individually. This data may include anonymized usage trends, category-level shopping patterns, and regional activity summaries.
            </p>
          </section>

          <section className="legalSection">
            <h2>Household Sharing</h2>
            <p>
              When you create or join a household, the following information is shared with other household members:
            </p>
            <ul>
              <li>Your display name and avatar emoji</li>
              <li>Shared places and task lists</li>
              <li>Task completion status</li>
              <li>Arrival notifications at shared places (if enabled)</li>
            </ul>
            <p>
              Your real-time location is never shared with household members. Only arrival and departure events at shared places are visible.
            </p>
            <p>
              You can leave a household at any time, which immediately removes your access to shared content and removes other members&apos; access to your data.
            </p>
          </section>

          <section className="legalSection">
            <h2>Third-Party Services</h2>
            <p>Near integrates with the following services:</p>
            <ul>
              <li>
                <strong>Apple Push Notification service (APNs)</strong> — for delivering task reminders and arrival notifications
              </li>
              <li>
                <strong>Apple WeatherKit</strong> — your coordinates are sent to Apple&apos;s weather service to power weather-aware errand suggestions
              </li>
              <li>
                <strong>Apple MapKit</strong> — for place search and map display
              </li>
              <li>
                <strong>Kroger (optional)</strong> — if you choose to connect your Kroger account, we use OAuth to link your account so you can send grocery items to your Kroger cart and receive aisle and pricing data. You can disconnect at any time from your profile settings.
              </li>
              <li>
                <strong>Apple FinanceKit (optional)</strong> — if you enable spending insights, Near uses Apple&apos;s FinanceKit framework to read transaction data from your Apple Wallet accounts (such as Apple Card and Apple Cash). All financial data is accessed and processed entirely on your device using Apple&apos;s on-device APIs. No financial data is sent to our servers or shared with any third party. Apple does not have access to your FinanceKit queries or the data returned to Near. You can disable this feature at any time from your profile settings.
              </li>
            </ul>
            <p>
              Near does not include third-party advertising frameworks or tracking pixels. We do not share your data with Facebook, Google Analytics, or data brokers.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Aggregation &amp; Insights</h2>
            <p>
              We may create aggregated, anonymized, or de-identified data derived from your use of the app. This aggregated data does not identify you personally and may be used for any lawful purpose, including business intelligence, research, product improvement, and sharing with current or prospective partners. Once data has been aggregated and de-identified, it is no longer considered personal information under this policy.
            </p>
          </section>

          <section className="legalSection">
            <h2>International Data Transfers</h2>
            <p>
              Near is operated from the United States. If you are accessing the app from outside the United States, including from Canada or Australia, please be aware that your information will be transferred to, stored, and processed in the United States, where our servers are located. By using Near, you consent to the transfer of your information to the United States and acknowledge that data protection laws in the United States may differ from those in your country of residence.
            </p>
            <p>
              We take reasonable steps to ensure that your information receives an adequate level of protection in the jurisdictions in which we process it, including through the use of encryption, access controls, and contractual obligations with service providers.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Storage &amp; Security</h2>
            <p>
              Your data is stored on our servers (hosted in the United States) and transmitted over encrypted HTTPS connections. Authentication tokens are stored securely in your device&apos;s Keychain.
            </p>
            <p>
              Task and place data is also cached locally on your device for offline access and shared with app extensions (widget, watch app, share extension) via a secure App Group container.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Retention &amp; Deletion</h2>
            <p>
              We retain your data for as long as your account is active. We may also retain aggregated, de-identified data indefinitely, even after account deletion.
            </p>
            <p>
              You can delete your account at any time from your profile settings in the app. Account deletion permanently removes:
            </p>
            <ul>
              <li>Your user profile and authentication credentials</li>
              <li>All tasks, places, and household memberships</li>
              <li>All personally identifiable analytics data associated with your account</li>
              <li>All locally cached data and Keychain tokens</li>
            </ul>
            <p>
              Aggregated, de-identified data that has already been generated may be retained after account deletion as it can no longer be linked to you.
            </p>
          </section>

          <section className="legalSection">
            <h2>Business Transfers</h2>
            <p>
              If Rise-X, Inc. is involved in a merger, acquisition, reorganization, sale of assets, or bankruptcy, your information may be transferred as part of that transaction. In such an event, we will make reasonable efforts to notify you (for example, via a notice within the app or by email) before your personal information becomes subject to a different privacy policy. The acquiring entity will be bound by the commitments made in this Privacy Policy with respect to your personal information, unless you are notified otherwise and given the opportunity to opt out.
            </p>
          </section>

          <section className="legalSection">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access your data</strong> — all your tasks, places, and profile information are visible directly in the app
              </li>
              <li>
                <strong>Delete your account</strong> — permanently remove all your personal data from our servers via profile settings
              </li>
              <li>
                <strong>Control location access</strong> — change or revoke location permissions at any time in iPhone Settings
              </li>
              <li>
                <strong>Disconnect integrations</strong> — unlink your Kroger account or other partner accounts at any time from profile settings
              </li>
              <li>
                <strong>Leave a household</strong> — remove yourself from shared lists at any time
              </li>
              <li>
                <strong>Opt out of personalization</strong> — contact us to reset personalization data
              </li>
              <li>
                <strong>Disable spending insights</strong> — turn off FinanceKit access at any time from your profile settings; no financial data is retained after the feature is disabled
              </li>
            </ul>

            <h3>California Residents (CCPA/CPRA)</h3>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
            </p>
            <ul>
              <li>
                <strong>Right to Know:</strong> You have the right to request the categories and specific pieces of personal information we have collected about you, the categories of sources, the business purpose for collecting the information, and the categories of third parties with whom we share it.
              </li>
              <li>
                <strong>Right to Delete:</strong> You have the right to request deletion of your personal information, subject to certain exceptions.
              </li>
              <li>
                <strong>Right to Opt Out of Sale or Sharing:</strong> You have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information. Near does not sell personal information in the traditional sense. However, sharing de-identified or aggregated data with partners may constitute a &quot;sale&quot; under the broad CCPA definition. You may opt out by contacting us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>. We will verify your identity before processing your request.
            </p>
            <p>
              In the preceding 12 months, we have collected the following categories of personal information: identifiers (phone number, user ID), geolocation data, and internet or electronic network activity information (usage analytics), and, if you enable spending insights, financial information (transaction amounts and merchant data accessed on-device via Apple FinanceKit). We collect this information for the business purposes described in this policy. Financial data accessed via FinanceKit is not transmitted to our servers, sold, or shared with third parties.
            </p>

            <h3>Canadian Residents (PIPEDA)</h3>
            <p>
              If you are a resident of Canada, the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation govern how we collect, use, and disclose your personal information. Under Canadian law, you have the following rights:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> We collect and use your personal information based on your consent, which you provide by creating an account and using the app. You may withdraw your consent at any time by deleting your account, though this may affect your ability to use the app.
              </li>
              <li>
                <strong>Right to Access:</strong> You have the right to request access to the personal information we hold about you. Your tasks, places, and profile information are visible directly in the app. For additional data access requests, contact us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
              </li>
              <li>
                <strong>Right to Correction:</strong> You have the right to request correction of inaccurate or incomplete personal information. You can update your profile information directly in the app.
              </li>
              <li>
                <strong>Right to Complain:</strong> You have the right to file a complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated.
              </li>
            </ul>
            <p>
              We limit the collection of personal information to what is necessary for the purposes identified in this policy. We retain personal information only as long as necessary to fulfill those purposes, subject to any legal requirements.
            </p>
            <p>
              Personal information collected from Canadian users is transferred to and stored in the United States. By using Near, you consent to this transfer. We protect your information using the security measures described in this policy.
            </p>

            <h3>Australian Residents (Privacy Act 1988)</h3>
            <p>
              If you are a resident of Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) govern how we collect, use, disclose, and store your personal information. Under Australian law:
            </p>
            <ul>
              <li>
                <strong>Collection:</strong> We only collect personal information that is reasonably necessary for our functions and activities as described in this policy. We collect information directly from you when you create an account and use the app.
              </li>
              <li>
                <strong>Use and Disclosure:</strong> We use and disclose your personal information only for the purposes described in this policy, or for directly related purposes you would reasonably expect. We will not use or disclose your personal information for direct marketing by third parties without your explicit consent.
              </li>
              <li>
                <strong>Access and Correction:</strong> You have the right to request access to the personal information we hold about you and to request correction of any inaccurate, out-of-date, incomplete, or misleading information. You can access and update most information directly in the app. For additional requests, contact us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
              </li>
              <li>
                <strong>Cross-Border Disclosure:</strong> Your personal information is transferred to and stored in the United States. Before disclosing personal information to an overseas recipient, we take reasonable steps to ensure the recipient handles your information in accordance with the APPs. By using Near, you consent to this cross-border transfer.
              </li>
              <li>
                <strong>Data Breach Notification:</strong> In the event of an eligible data breach that is likely to result in serious harm, we will notify you and the Office of the Australian Information Commissioner (OAIC) as required under the Notifiable Data Breaches (NDB) scheme.
              </li>
              <li>
                <strong>Complaints:</strong> If you believe we have breached the APPs, you may lodge a complaint with us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>. We will respond within 30 days. If you are not satisfied with our response, you may escalate your complaint to the OAIC at{" "}
                <a href="https://www.oaic.gov.au" className="legalLink" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.
              </li>
            </ul>
            <p>
              We do not collect sensitive information (as defined under the Privacy Act) through Near, such as health information, biometric data, or information about racial or ethnic origin. If you enable spending insights, financial transaction data is accessed on-device via Apple FinanceKit and is not transmitted to our servers or disclosed to any third party.
            </p>
          </section>

          <section className="legalSection">
            <h2>Children&apos;s Privacy</h2>
            <p>
              Near is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal information through Near, please contact us so we can take appropriate action.
            </p>
          </section>

          <section className="legalSection">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the app or by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of Near after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="legalSection">
            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how Near handles your data, please contact us at:
            </p>
            <p>
              <a href="mailto:hello@nearesttask.com" className="legalLink">
                hello@nearesttask.com
              </a>
            </p>
            <p></p>
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
          .legalTitle {
            font-size: 30px;
          }
          .legalMain {
            padding: 2rem 1rem 3rem;
          }
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
