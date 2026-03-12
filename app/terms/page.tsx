"use client"

import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
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
          <h1 className="legalTitle">Terms &amp; Conditions</h1>
          <p className="legalUpdated">Last updated March 12, 2026</p>

          <section className="legalSection">
            <h2>Agreement to Terms</h2>
            <p>
              By downloading, installing, or using Near (&quot;the app&quot;), you agree to be bound by these Terms &amp; Conditions (&quot;Terms&quot;). If you do not agree to these Terms, do not use the app.
            </p>
            <p>
              These Terms constitute a legal agreement between you and Brief Case, LLC (&quot;the Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the developer and operator of Near. Please read them carefully.
            </p>
          </section>

          <section className="legalSection">
            <h2>Description of Service</h2>
            <p>
              Near is a location-based task reminder app for iPhone. The app uses your device&apos;s location services to surface relevant tasks, errands, and reminders when you arrive at or pass by places where they can be completed.
            </p>
            <p>Key features include:</p>
            <ul>
              <li>Location-triggered task reminders based on proximity to saved places</li>
              <li>Task lists organized by place (stores, home, and custom locations)</li>
              <li>Household sharing that lets family members collaborate on shared lists</li>
              <li>Optional retail and grocery integrations for enhanced shopping experiences</li>
              <li>Personalized suggestions based on your usage patterns and preferences</li>
              <li>Automatic syncing via our servers with offline support</li>
            </ul>
            <p>Near is provided free of charge with no in-app purchases or subscriptions.</p>
          </section>

          <section className="legalSection">
            <h2>Eligibility</h2>
            <p>
              You must be at least 13 years old to use Near. By using the app, you represent that you meet this age requirement. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
            </p>
            <p>Near requires an iPhone running a supported version of iOS.</p>
          </section>

          <section className="legalSection">
            <h2>Accounts &amp; Households</h2>
            <p>
              Near requires an account to use. You can sign in with your phone number, Apple ID, or Google account. You are responsible for maintaining the security of your sign-in credentials.
            </p>

            <h3>Household Feature</h3>
            <p>
              Near allows you to create or join a household using an invite code. When you participate in a household:
            </p>
            <ul>
              <li>Shared lists and task content are visible to all household members</li>
              <li>Any household member can add, edit, or complete tasks on shared lists</li>
              <li>You are responsible for the content you add to shared lists</li>
              <li>You may leave a household at any time, which revokes access to shared lists</li>
            </ul>
            <p>
              Do not share your household invite code with people you do not trust, as it grants access to your shared task lists.
            </p>
          </section>

          <section className="legalSection">
            <h2>License to Use Your Data</h2>
            <p>
              You retain ownership of the content you create within Near (tasks, list names, notes, etc.). By using the app, you grant Brief Case, LLC a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to use, reproduce, process, adapt, and display your content solely for the purposes of:
            </p>
            <ul>
              <li>Operating and providing the Near service</li>
              <li>Personalizing your experience within the app</li>
              <li>Generating aggregated, anonymized, or de-identified insights and analytics</li>
              <li>Improving the app and developing new features</li>
              <li>Supporting retail and grocery partner integrations you have opted into</li>
            </ul>
            <p>
              This license survives termination of your account with respect to aggregated, de-identified data that can no longer be linked to you. For personally identifiable data, this license terminates when you delete your account, except as required by law or as described in our Privacy Policy.
            </p>
            <p>
              By using the household feature, you additionally grant other household members permission to view and interact with your shared content within the app.
            </p>
          </section>

          <section className="legalSection">
            <h2>Personalization &amp; Analytics</h2>
            <p>
              Near uses your usage data, location patterns, task behavior, and preferences to personalize your experience and provide relevant suggestions. By using the app, you consent to this personalization. You may request a reset of personalization data by contacting us at{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>.
            </p>
            <p>
              We may also create aggregated, anonymized data from your use of the app. This data does not identify you and may be used for any lawful business purpose, including sharing with current or prospective business partners. See our Privacy Policy for more details.
            </p>
          </section>

          <section className="legalSection">
            <h2>Retail &amp; Grocery Integrations</h2>
            <p>
              Near may offer optional integrations with retail and grocery partners. When you opt in to a partner integration:
            </p>
            <ul>
              <li>Certain usage data may be shared with the partner as described in our Privacy Policy</li>
              <li>You may receive product information, offers, or suggestions from the partner within the app</li>
              <li>You can disconnect from any integration at any time</li>
            </ul>
            <p>
              Connecting to a partner integration constitutes your consent to the data sharing described in our Privacy Policy for that integration.
            </p>
          </section>

          <section className="legalSection">
            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use Near for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to reverse engineer, decompile, or disassemble any part of the app</li>
              <li>Interfere with or disrupt the integrity or performance of the app or its related systems</li>
              <li>Use automated systems or software to extract data from the app</li>
              <li>Impersonate another person or misrepresent your affiliation with any entity</li>
              <li>Use the household feature to harass, spam, or send unwanted content to other users</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Intellectual Property</h2>
            <p>
              Near, including its design, code, graphics, logo, and all associated intellectual property, is owned by Brief Case, LLC and protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works based on Near without our prior written consent.
            </p>
            <p>
              All aggregated, anonymized, or de-identified data and any insights, analyses, or derivative works created from such data are the exclusive property of Brief Case, LLC.
            </p>
          </section>

          <section className="legalSection">
            <h2>Disclaimer of Warranties</h2>
            <p>
              Near is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The app will function uninterrupted, securely, or without errors</li>
              <li>Location detection will be accurate in all environments</li>
              <li>Task reminders will be delivered at all times or in all conditions</li>
              <li>The app will be compatible with all devices or operating system versions</li>
              <li>Personalized suggestions or partner integrations will meet your expectations</li>
            </ul>
            <p>
              Near relies on iPhone location services, which are provided by Apple and subject to their own terms and limitations.
            </p>
          </section>

          <section className="legalSection">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Brief Case, LLC and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your use of or inability to use the app</li>
              <li>Missed or delayed task reminders</li>
              <li>Inaccurate location detection</li>
              <li>Loss of data due to device failure or server issues</li>
              <li>Unauthorized access to your household by someone with whom you shared an invite code</li>
              <li>Any actions taken by retail or grocery partners in connection with data shared through an integration</li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Dispute Resolution &amp; Arbitration</h2>
            <p>
              <strong>Please read this section carefully. It affects your legal rights.</strong>
            </p>
            <p>
              Any dispute, claim, or controversy arising out of or relating to these Terms or the use of Near shall be resolved through binding individual arbitration administered by the American Arbitration Association (&quot;AAA&quot;) under its Consumer Arbitration Rules, rather than in court. There is no judge or jury in arbitration, and court review of an arbitration award is limited.
            </p>
            <p>
              <strong>Class Action Waiver:</strong> You and Brief Case, LLC agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If this class action waiver is found to be unenforceable, then the entirety of this arbitration provision shall be null and void.
            </p>
            <p>
              <strong>Opt-Out:</strong> You may opt out of this arbitration provision by sending written notice to{" "}
              <a href="mailto:hello@nearesttask.com" className="legalLink">hello@nearesttask.com</a>{" "}
              within 30 days of first accepting these Terms. If you opt out, you and Brief Case, LLC agree to submit to the exclusive jurisdiction of the state and federal courts located in Charleston County, South Carolina.
            </p>
            <p>
              <strong>Small Claims Exception:</strong> Either party may bring an individual action in small claims court for disputes within the court&apos;s jurisdictional limits.
            </p>
          </section>

          <section className="legalSection">
            <h2>Business Transfers</h2>
            <p>
              In the event that Brief Case, LLC is involved in a merger, acquisition, reorganization, asset sale, or similar business transaction, these Terms and your relationship with us (including any data collected through the app) may be transferred to the successor entity. The successor will be bound by these Terms with respect to your continued use of the app. We will make reasonable efforts to notify you of any such transfer.
            </p>
          </section>

          <section className="legalSection">
            <h2>Termination</h2>
            <p>
              You may stop using Near at any time by deleting the app from your device. To permanently delete your account and all server-side personal data, use the &quot;Delete Account&quot; option in your profile settings before uninstalling.
            </p>
            <p>
              We reserve the right to suspend or terminate access to the app for users who violate these Terms or engage in abusive behavior. In such cases, we will make reasonable efforts to provide notice where possible.
            </p>
            <p>
              Upon termination, the following sections survive: License to Use Your Data (with respect to aggregated, de-identified data only), Intellectual Property, Disclaimer of Warranties, Limitation of Liability, Dispute Resolution &amp; Arbitration, and Governing Law.
            </p>
          </section>

          <section className="legalSection">
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we will notify you through the app or by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of Near after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="legalSection">
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to conflict of law principles. Subject to the arbitration provision above, any disputes arising from these Terms or your use of Near shall be resolved in the state or federal courts located in Charleston County, South Carolina, and you consent to the personal jurisdiction of such courts.
            </p>
          </section>

          <section className="legalSection">
            <h2>Regional Provisions</h2>

            <h3>Canadian Users</h3>
            <p>If you are a resident of Canada, the following additional provisions apply:</p>
            <ul>
              <li>
                The collection, use, and disclosure of your personal information is governed by the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation, in addition to these Terms.
              </li>
              <li>
                You may withdraw consent to the collection of your personal information at any time by deleting your account via profile settings, subject to legal or contractual restrictions and reasonable notice.
              </li>
              <li>
                The arbitration provision in these Terms is enforceable under applicable Canadian federal and provincial arbitration legislation. However, nothing in these Terms limits your right to file a complaint with the Office of the Privacy Commissioner of Canada regarding the handling of your personal information.
              </li>
              <li>
                References to Brief Case, LLC include its successors and assigns. Your relationship is with a United States entity, and your data is processed in the United States as described in our Privacy Policy.
              </li>
            </ul>

            <h3>Australian Users</h3>
            <p>If you are a resident of Australia, the following additional provisions apply:</p>
            <ul>
              <li>
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred on you by the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or any other applicable law that cannot be excluded, restricted, or modified by agreement.
              </li>
              <li>
                To the extent that we are entitled to limit our liability, our liability for breach of a non-excludable consumer guarantee is limited to (at our election): (a) in the case of services, the supply of the services again or payment of the cost of having the services supplied again; and (b) in the case of goods, the replacement or repair of the goods, or payment of the cost of replacing or repairing the goods.
              </li>
              <li>
                The Dispute Resolution &amp; Arbitration provision applies to Australian users to the extent permitted by law. However, nothing in these Terms prevents you from lodging a complaint with the Office of the Australian Information Commissioner (OAIC) or taking action under the Australian Consumer Law.
              </li>
              <li>
                The limitation of liability and disclaimer of warranties provisions are subject to the non-excludable rights described above.
              </li>
            </ul>
          </section>

          <section className="legalSection">
            <h2>Contact</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, please contact us at:
            </p>
            <p>
              <a href="mailto:hello@nearesttask.com" className="legalLink">
                hello@nearesttask.com
              </a>
            </p>
            <p>Brief Case, LLC</p>
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
