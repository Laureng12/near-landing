"use client"

import "./privacy.css"

import Link from "next/link"
import Image from "next/image"

const BRAND_WORDMARK = "/assets/brand/Near-Logo-Horizontal.png"

export default function PrivacyPage() {
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
          <h1 className="legalTitle">Privacy Policy</h1>
          <p className="legalUpdated">Last updated September 17, 2026</p>

          <section className="legalSection">
            <h2>Introduction</h2>
            <p>
              Near is operated by Rise-X, Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;the Company&quot;). Near is a location-based task reminder app for iPhone that surfaces errands, groceries, and household tasks automatically when you arrive at the places where they can be completed.
            </p>
            <p>
              This Privacy Policy explains what information Near collects, how it is used, how it may be shared, and the choices you have. Where consent is required, we ask for it separately in the app or through the relevant platform permission prompt.
            </p>
          </section>

          <section className="legalSection">
            <h2>Notice at Collection</h2>
            <p>
              This section summarizes the categories of personal information we collect and the purposes for which we use them. More detail appears throughout this policy.
            </p>

            <h3>Categories We Collect</h3>
            <ul>
              <li><strong>Identifiers</strong> such as phone number, user ID, Sign in with Apple token, display name, and push notification token.</li>
              <li><strong>Geolocation data</strong> such as saved place coordinates and arrival or departure events at saved places. Near does not continuously transmit your live route to our servers.</li>
              <li><strong>User content</strong> such as tasks, lists, notes, due dates, saved places, addresses, household membership, saved recipes, receipt contents you capture, pantry items, and photos you add.</li>
              <li><strong>Audio data</strong> when you use voice capture - the recorded audio is sent to our speech-to-text provider to transcribe what you said, and the resulting transcript is stored with your account.</li>
              <li><strong>Information you provide about other people</strong>, such as household members, gift recipients, or event guests (see &quot;Information About Other People&quot;).</li>
              <li><strong>Internet or electronic network activity</strong> such as app feature usage, permission events, task creation/completion counts, and notification interactions.</li>
              <li><strong>Diagnostics</strong> such as crash reports and performance data used to keep the app stable.</li>
              <li><strong>Commercial information</strong> only if you enable optional retail features, such as Kroger account integration.</li>
            </ul>

            <h3>Purposes</h3>
            <p>
              We use this information to provide location-based reminders, sync your account, support household sharing, deliver notifications, transcribe and understand what you capture, improve app quality, personalize the Near experience, provide optional integrations you choose to enable, prevent abuse, comply with legal obligations, and respond to support and privacy requests.
            </p>

            <h3>Sensitive Personal Information</h3>
            <p>
              Some information we handle may be considered sensitive under certain laws - in particular your <strong>precise geolocation</strong> and any <strong>dietary preferences or allergies</strong> you choose to add (which you may share with your household as a safety constraint). We use this information only to provide and improve the Near features you request, such as saved-place reminders, nearby task sorting, household arrival notifications you enable, meal and grocery suggestions, and related safety or debugging functions. We do not use sensitive personal information to infer characteristics unrelated to Near&apos;s services, and we do not use it for advertising.
            </p>

            <h3>Sale or Sharing</h3>
            <p>
              Near does not sell personal information and does not share personal information for cross-context behavioral advertising. We also do not sell or share the personal information of users we know are under 16. If a future optional partner feature requires a use that is considered a &quot;sale&quot; or &quot;sharing&quot; under California law, we will provide notice and a way to opt out before that use begins.
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
                <strong>Sign in with Google (if offered):</strong> a Google identity token from which we receive your account identifier, and your verified email and name
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
                <strong>Arrival and departure events</strong> - when you enter or leave a geofenced place, we record the event (place ID, timestamp, and coordinates) on our server to trigger reminders, track visit history, and enable household arrival notifications.
              </li>
              <li>
                <strong>Current location</strong> - used on-device for distance-based sorting and route awareness. Your real-time location is not continuously transmitted to our server. If you enable the optional &quot;who&apos;s closest&quot; feature, a household member&apos;s approximate location is shared briefly and kept only transiently (a matter of seconds) to answer that request; it is not stored.
              </li>
            </ul>
            <p>
              Near requests &quot;Always&quot; location permission so it can monitor geofences in the background. You can change this to &quot;When In Use&quot; or disable it entirely in iPhone Settings. The app will still function as a manual task list without location features.
            </p>

            <h3>Tasks, Places &amp; Household Data</h3>
            <p>
              The tasks, places, and household information you create are stored on our servers to enable syncing, household sharing, and features like recurring item suggestions. This includes task titles, notes, due dates, subtask details, place names, addresses, coordinates, and household membership.
            </p>

            <h3>Shopping &amp; Household Content</h3>
            <p>
              If you use grocery, meal, pantry, or receipt features, we store the content you create or capture - such as grocery lists, saved recipes, pantry items, and the itemized contents of receipts you scan - to power lists, savings tracking, and suggestions. Receipt images are processed on your device to extract text; see &quot;Photos &amp; Images.&quot;
            </p>

            <h3>Usage Analytics</h3>
            <p>
              We collect usage events to understand how the app is used, to improve the experience, and to personalize your experience within the app. These include permission grant/deny events, arrival-notification sent/opened/dismissed counts, task creation and completion counts, feature-usage signals, and task and place interaction patterns. Analytics are tied to your account for product improvement and personalization purposes.
            </p>

            <h3>Diagnostics</h3>
            <p>
              To keep Near stable, we collect crash reports and basic performance data through our error-monitoring provider (Sentry). This diagnostic data is used only to detect and fix problems; it is not used to advertise to you and is not sold.
            </p>

            <h3>Device Information</h3>
            <p>
              We collect basic device information (push notification tokens and platform identifier) solely to deliver push notifications.
            </p>

            <h3>Voice Input</h3>
            <p>
              When you use voice capture to add items by speaking, the recorded audio is sent to our speech-to-text provider (OpenAI) to convert it into text. We use the resulting transcript only to create the tasks, lists, or places you dictated, and we store that transcript with your account so the feature works reliably. Voice input is optional - you can always type instead. Cloud transcription runs only after you grant in-app consent for AI features; if you have not granted consent, or your device supports on-device transcription, voice is transcribed locally on your device without the audio leaving it.
            </p>

            <h3>Photos &amp; Images</h3>
            <p>
              If you add a photo (for example, a meal photo, a saved-memory photo, or a receipt), the image is stored on our servers to provide that feature. Receipts are read on your device to extract text; when you ask Near to identify items from a photo of your pantry or fridge, that image is sent to our AI provider to answer your request and is not retained by that provider after processing. See &quot;Artificial Intelligence &amp; Automated Processing.&quot;
            </p>
          </section>

          <section className="legalSection">
            <h2>Artificial Intelligence &amp; Automated Processing</h2>
            <p>
              Near uses artificial-intelligence services to understand what you capture and to power helpful features such as sorting an item onto the right list, suggesting recipes and meal plans, structuring receipts, and surfacing timely reminders. AI features are optional and are enabled through an in-app consent prompt; you can turn them off at any time in the app&apos;s settings, and you can type or enter information manually without them.
            </p>
            <p>
              When you use an AI-powered feature, the specific content needed for that request is sent to our AI providers to process it and returned to you. Depending on the feature, this may include:
            </p>
            <ul>
              <li>The text of what you capture (task, grocery, note, or reminder text)</li>
              <li>Grocery, recipe, meal, and pantry content, and the text extracted from receipts</li>
              <li>A household member&apos;s or a named person&apos;s first name and, for gift suggestions, your relationship to them and their interests</li>
              <li>Dietary preferences and allergies you have provided, so suggestions respect them</li>
              <li>A short summary of relevant calendar events (such as an event title and location) when you use calendar-aware suggestions</li>
              <li>A photo of your pantry or fridge, only when you ask Near to identify items from it</li>
            </ul>
            <p>
              Our AI providers are <strong>Anthropic</strong> (Claude - the primary provider for classification, planning, and image understanding) and <strong>OpenAI</strong> (voice transcription and some recipe generation). We instruct these providers to process your data only to fulfill your request. <strong>Your data is not used to train their AI models.</strong> Provider retention of API data is governed by our agreements with them; we do not direct them to retain your content beyond what is needed to process a request.
            </p>
            <p>
              Some AI processing is <strong>automated and periodic</strong> rather than triggered by a single tap - for example, when you have enabled calendar-aware suggestions, Near may periodically summarize upcoming calendar events to surface relevant reminders. This processing runs only for features you have enabled, and you can disable it in settings. Near does not make decisions that produce legal or similarly significant effects about you using automated processing alone.
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
              <li>Provide smart features like recurring item suggestions, proactive trip nudges, meal and recipe suggestions, savings tracking, and weather-aware errand timing</li>
              <li><strong>Personalize your experience</strong> by learning your routines, preferences, and patterns to surface more relevant suggestions, reminders, and in-app content</li>
              <li><strong>Generate aggregated and anonymized insights</strong> from user activity to improve the app and understand usage trends</li>
              <li>Keep the app stable and secure and fix bugs using analytics and diagnostics</li>
              <li><strong>Support partnerships</strong> with retail and grocery providers to enhance the shopping and errand experience (see &quot;Retail &amp; Grocery Partners&quot; below)</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Personalization</h2>
            <p>
              Near uses your usage patterns, location history, task behavior, and preferences to personalize the app experience. This includes tailoring suggestions for tasks, places, trip timing, and in-app content. Personalization is designed to make the app more useful to you over time and is not used for third-party advertising.
            </p>
            <p>
              You can reset personalization data by contacting us at{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
            </p>
          </section>

          <section className="legalSection">
            <h2>Information About Other People</h2>
            <p>
              Near lets you add information about other people so the app can help you coordinate - for example, household members you invite, a person you&apos;re buying a gift for (their name, your relationship, and their interests), or guests you add when planning an event. Some of this may include details such as a person&apos;s dietary needs.
            </p>
            <p>
              When you provide information about another person, you are responsible for ensuring you have the right to share it with us for these purposes. We use it only to provide the feature you requested (for example, generating gift ideas or planning a meal that fits a guest&apos;s needs). If you or the other person would like that information corrected or removed, contact us at{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>, and household members can remove people and related content directly in the app.
            </p>
          </section>

          <section className="legalSection">
            <h2>Retail &amp; Grocery Partners</h2>
            <p>
              Near may partner with retail and grocery providers to enhance your shopping experience. Partner integrations are optional. If you opt in to a retail partner integration (such as Kroger), we may:
            </p>
            <ul>
              <li>Share the information needed to operate the integration, such as selected grocery items, linked-account identifiers, task categories, shopping frequency, and place visit patterns</li>
              <li>Receive data from the partner, such as product availability, aisle information, and pricing, to display within the app</li>
            </ul>
            <p>
              <strong>We will always obtain your explicit consent before sharing personal information with any retail or grocery partner.</strong> We do not share your real-time location route with retail or grocery partners. You can disconnect from any partner integration at any time from your profile settings.
            </p>
            <p>
              We may also share aggregated, de-identified data with partners that cannot reasonably be used to identify you individually. Before any such data leaves Near, we de-identify it and suppress small groups so that it does not identify an individual household or person.
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
            <h2>Service Providers &amp; Sub-processors</h2>
            <p>
              We use trusted third parties to operate Near. We require them to protect personal information and to use it only to provide services to us. We do not include third-party advertising frameworks or tracking pixels, and we do not share your data with advertising networks or data brokers. The providers that may process personal information on our behalf are:
            </p>
            <div className="legalTableWrap">
              <table className="legalTable">
                <thead>
                  <tr><th>Provider</th><th>Purpose</th><th>Data involved</th></tr>
                </thead>
                <tbody>
                  <tr><td>Supabase</td><td>Database &amp; file storage</td><td>Your account data, content, and photos</td></tr>
                  <tr><td>Vercel</td><td>Application hosting</td><td>Request traffic and server logs</td></tr>
                  <tr><td>Anthropic (Claude)</td><td>AI classification, planning &amp; image understanding</td><td>Capture text, grocery/meal/recipe/pantry content, receipt text, first names, dietary/allergy facts, calendar summaries, and pantry photos (see &quot;Artificial Intelligence&quot;)</td></tr>
                  <tr><td>OpenAI</td><td>Voice transcription &amp; some recipe generation</td><td>Voice recordings and recipe/meal text</td></tr>
                  <tr><td>Twilio</td><td>SMS verification codes, reminders &amp; invites</td><td>Phone number and message content (e.g., invite links, task counts)</td></tr>
                  <tr><td>Apple (APNs, WeatherKit, MapKit, Sign in with Apple, App Store)</td><td>Push notifications, weather, maps, sign-in, purchases</td><td>Device token &amp; notification content; coordinates for weather; place search; identity token; purchase validation</td></tr>
                  <tr><td>Google</td><td>Sign in with Google (if you use it)</td><td>Google identity token (account ID, email, name)</td></tr>
                  <tr><td>Kroger (optional)</td><td>Grocery search &amp; cart</td><td>Search terms, store location, linked-account token, cart contents</td></tr>
                  <tr><td>Walmart (optional)</td><td>Grocery affiliate handoff</td><td>Product search terms</td></tr>
                  <tr><td>Tremendous</td><td>Gift-card reward delivery (if you redeem one)</td><td>Reward amount, delivery method, and an internal user identifier</td></tr>
                  <tr><td>ScrapingBee</td><td>Reading a recipe web page you paste</td><td>The recipe URL you provide</td></tr>
                  <tr><td>Pexels</td><td>Recipe imagery</td><td>Recipe search terms</td></tr>
                  <tr><td>OpenFoodFacts</td><td>Product lookup</td><td>Product search terms</td></tr>
                  <tr><td>Sentry</td><td>Crash &amp; performance monitoring</td><td>Diagnostic data (crash traces, performance metrics); not linked to advertising</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              This list may change as Near evolves; we will update this policy to reflect material changes to our service providers.
            </p>
          </section>

          <section className="legalSection">
            <h2>Cookies, Consent &amp; Website Analytics</h2>
            <p>
              Our website (nearesttask.com) does not use advertising cookies, tracking pixels, session-replay tools, or third-party analytics by default. We do not load any third-party tracker when you simply visit the site. Web fonts are served from our own servers, so loading a page does not send your information to a font or content-delivery network.
            </p>
            <p>
              The only thing we store in your browser is a small record of your cookie-consent choice, kept in your browser&apos;s local storage so we don&apos;t ask again. This is strictly necessary for the consent feature itself and is not used to identify or track you.
            </p>
            <p>
              If we later introduce website analytics to understand and improve the site, it will load <strong>only after you opt in</strong> through the consent banner shown on your first visit. You can decline, and nothing beyond the strictly necessary consent record will be loaded or stored. Declining does not limit your use of the site. Like all websites, our hosting provider may keep standard, short-lived server logs (such as IP address and request metadata) for security and reliability; these are not used for advertising.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Aggregation &amp; Insights</h2>
            <p>
              We may create aggregated, anonymized, or de-identified data derived from your use of the app. This aggregated data is designed not to identify you personally and may be used for lawful purposes such as business intelligence, research, product improvement, and sharing aggregate trends with current or prospective partners. Before any such data is shared externally, we de-identify it and suppress small groups so it cannot reasonably be linked to an individual household or person. We do not attempt to re-identify aggregated, anonymized, or de-identified data, and we do not permit partners to do so.
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
            <p>
              We use reasonable administrative, technical, and organizational safeguards designed to protect personal information, including access controls, encrypted transport, and platform permission controls, and we limit access to personnel or service providers who need the information to operate Near. No internet or mobile service can be guaranteed completely secure, so please use a strong device passcode and protect access to your account.
            </p>
          </section>

          <section className="legalSection">
            <h2>Data Retention &amp; Deletion</h2>
            <p>
              We keep personal information only for as long as reasonably necessary for the purposes described in this policy, unless a longer period is required or permitted by law. Our retention periods depend on the type of information:
            </p>
            <ul>
              <li><strong>Account identifiers</strong> are retained while your account is active and are deleted or de-identified after account deletion, subject to legal, security, fraud-prevention, and backup requirements.</li>
              <li><strong>Tasks, places, household data, and saved location data</strong> are retained while your account is active or until you delete the relevant item, leave a household, or delete your account. Completed tasks are cleared automatically after a short period.</li>
              <li><strong>Location history</strong> (arrival and departure events and visit history), <strong>receipts you capture, captured content, and voice transcripts</strong> are retained while your account is active to provide reminders, history, savings, and personalization, and are deleted or de-identified after account deletion.</li>
              <li><strong>Account-linked analytics and diagnostics</strong> are retained only as long as needed for product improvement, stability, security, and personalization, and are deleted or de-identified when you delete your account.</li>
              <li><strong>Push notification tokens</strong> are retained until they expire, you disable notifications, sign out, or delete your account.</li>
              <li><strong>Optional partner integration data</strong> is retained while the integration is connected or as needed to complete the integration request, unless a longer period is required by the partner relationship or law.</li>
              <li><strong>A limited set of financial and audit records</strong> (such as subscription and reward transaction records) may be retained after account deletion where required for dispute resolution, tax, accounting, or legal compliance.</li>
              <li><strong>Backups and logs</strong> may retain limited information for a short period after deletion before they are overwritten or deleted in the ordinary course of business.</li>
              <li><strong>Aggregated, anonymized, or de-identified information</strong> may be retained indefinitely because it is not designed to identify you.</li>
            </ul>
            <p>
              You can delete your account at any time from your profile settings in the app. Account deletion permanently removes your user profile and authentication credentials; your tasks, places, and household memberships; your location history, receipts, captured content, and voice transcripts; your personally identifiable analytics; and all locally cached data and Keychain tokens - except for the limited financial/audit and de-identified data noted above.
            </p>
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
                <strong>Access your data</strong> - your tasks, places, and profile information are visible directly in the app, and you can request a copy of the personal information we hold by contacting us
              </li>
              <li>
                <strong>Correct your data</strong> - update inaccurate profile, task, place, or household information directly in the app, or contact us for help
              </li>
              <li>
                <strong>Delete your account</strong> - permanently remove your personal data from our servers via profile settings, subject to the limited exceptions in &quot;Data Retention &amp; Deletion&quot;
              </li>
              <li>
                <strong>Control location access</strong> - change or revoke location permissions at any time in iPhone Settings
              </li>
              <li>
                <strong>Control AI features</strong> - enable or disable AI-powered features (including cloud voice transcription) at any time in the app&apos;s settings
              </li>
              <li>
                <strong>Disconnect integrations</strong> - unlink your Kroger account or other partner accounts at any time from profile settings
              </li>
              <li>
                <strong>Leave a household</strong> - remove yourself from shared lists at any time
              </li>
              <li>
                <strong>Opt out of personalization</strong> - contact us to reset personalization data
              </li>
              <li>
                <strong>Opt out of sale or sharing</strong> - Near does not currently sell personal information or share it for cross-context behavioral advertising, but you may contact us with any opt-out request
              </li>
              <li>
                <strong>Limit sensitive personal information</strong> - we use sensitive personal information only to provide and improve Near&apos;s requested services, and you can reduce location collection by changing location permissions in iPhone Settings
              </li>
            </ul>

            <h3>California Residents (CCPA/CPRA)</h3>
            <p>
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA):
            </p>
            <ul>
              <li>
                <strong>Right to Know:</strong> the categories and specific pieces of personal information we have collected, the categories of sources, the business purpose for collecting it, and the categories of third parties with whom we share it.
              </li>
              <li>
                <strong>Right to Delete:</strong> deletion of your personal information, subject to certain exceptions.
              </li>
              <li>
                <strong>Right to Correct:</strong> correction of inaccurate personal information.
              </li>
              <li>
                <strong>Right to Opt Out of Sale or Sharing:</strong> Near does not sell personal information or share it for cross-context behavioral advertising. If that changes, we will provide legally required notice and an opt-out method before the sale or sharing begins.
              </li>
              <li>
                <strong>Right to Limit Use of Sensitive Personal Information:</strong> we use sensitive personal information, such as precise geolocation and dietary/allergy preferences you provide, only to provide and improve Near&apos;s requested services and for other purposes permitted by law. We do not use it for advertising or to infer unrelated characteristics.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> we will not discriminate against you for exercising your CCPA rights.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>. You may also use an authorized agent to submit a request on your behalf. We will verify your identity and, where applicable, the agent&apos;s authorization before processing the request.
            </p>
            <p>
              In the preceding 12 months, we have collected the following categories of personal information: identifiers, geolocation data, user content, audio data (voice capture), information you provide about other people, internet or electronic network activity information, diagnostics, device information, and optional commercial information when you enable partner integrations. We collect these categories from you, your device, Apple and Google platform services, household members who interact with shared content, and optional partner integrations you connect. We disclose personal information to the service providers and optional integration partners described in this policy. We retain each category for the periods described in &quot;Data Retention &amp; Deletion.&quot;
            </p>

            <h3>Canadian Residents (PIPEDA)</h3>
            <p>
              If you are a resident of Canada, the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation govern how we collect, use, and disclose your personal information. Under Canadian law, you have the following rights:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> we collect and use your personal information based on your consent, which you provide by creating an account and using the app. You may withdraw your consent at any time by deleting your account, though this may affect your ability to use the app.
              </li>
              <li>
                <strong>Right to Access:</strong> you may request access to the personal information we hold about you. Your tasks, places, and profile information are visible directly in the app; for additional data-access requests, contact us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
              </li>
              <li>
                <strong>Right to Correction:</strong> you may request correction of inaccurate or incomplete personal information, and can update your profile information directly in the app.
              </li>
              <li>
                <strong>Right to Complain:</strong> you may file a complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated.
              </li>
            </ul>
            <p>
              We limit the collection of personal information to what is necessary for the purposes identified in this policy. We retain personal information only as long as necessary to fulfill those purposes, subject to any legal requirements. Personal information collected from Canadian users is transferred to and stored in the United States. By using Near, you consent to this transfer. We protect your information using the security measures described in this policy.
            </p>

            <h3>Australian Residents (Privacy Act 1988)</h3>
            <p>
              If you are a resident of Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) govern how we collect, use, disclose, and store your personal information. Under Australian law:
            </p>
            <ul>
              <li>
                <strong>Collection:</strong> we only collect personal information that is reasonably necessary for our functions and activities as described in this policy, and we collect it directly from you when you create an account and use the app.
              </li>
              <li>
                <strong>Sensitive information:</strong> some information we collect - precise geolocation, and any dietary preferences or allergies you choose to provide - may be sensitive information under the Privacy Act. We collect it with your consent and use it only to provide the features you request. We do not use voice recordings to identify you biometrically, and we do not collect information about racial or ethnic origin, political or religious beliefs, or similar categories.
              </li>
              <li>
                <strong>Use and Disclosure:</strong> we use and disclose your personal information only for the purposes described in this policy, or for directly related purposes you would reasonably expect. We will not use or disclose your personal information for direct marketing by third parties without your explicit consent.
              </li>
              <li>
                <strong>Access and Correction:</strong> you have the right to request access to, and correction of, the personal information we hold about you. You can access and update most information directly in the app; for additional requests, contact us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
              </li>
              <li>
                <strong>Cross-Border Disclosure:</strong> your personal information is transferred to and stored in the United States, and is disclosed to the overseas service providers listed in &quot;Service Providers &amp; Sub-processors.&quot; Before disclosing personal information to an overseas recipient, we take reasonable steps to ensure the recipient handles your information consistently with the APPs. By using Near, you consent to this cross-border transfer.
              </li>
              <li>
                <strong>Data Breach Notification:</strong> in the event of an eligible data breach likely to result in serious harm, we will notify you and the Office of the Australian Information Commissioner (OAIC) as required under the Notifiable Data Breaches scheme.
              </li>
              <li>
                <strong>Complaints:</strong> if you believe we have breached the APPs, you may lodge a complaint with us at{" "}
                <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>. We will respond within a reasonable time. If you are not satisfied with our response, you may escalate to the OAIC at{" "}
                <a href="https://www.oaic.gov.au" className="legalLink" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Children&apos;s Privacy</h2>
            <p>
              Near is not directed to children under the age of 13, and we do not knowingly collect personal information directly from children under 13. Near is intended to be used by adults who manage a household. If an adult adds tasks, places, or information relating to a child as part of managing their household, the adult is responsible for that information and should provide only what is necessary. If you believe a child under 13 has provided personal information to us directly, please contact us so we can take appropriate action. Consistent with the &quot;Sale or Sharing&quot; section, we do not sell or share the personal information of users we know are under 16.
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

    </>
  )
}
