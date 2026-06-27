"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

/**
 * Opt-in consent gate.
 *
 * The site ships with NO third-party trackers today. This banner records the
 * visitor's choice so that any analytics added later only loads AFTER explicit
 * consent — the default state is "no consent → no tracking."
 *
 * To add a consent-gated tracker later:
 *   import { hasAnalyticsConsent } from "./ConsentBanner"
 *   // only mount/load the tracker when hasAnalyticsConsent() is true, and
 *   // listen for the "near-consent" window event to react to a fresh "accept".
 * Never load a pixel/analytics script unconditionally — that's the CIPA risk.
 */

export const CONSENT_KEY = "near_consent_v1"

export type ConsentChoice = "accepted" | "declined"

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted"
  } catch {
    return false
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(CONSENT_KEY)) setVisible(true)
    } catch {
      // localStorage blocked (private mode / strict settings) — don't block the page
    }
  }, [])

  function choose(choice: ConsentChoice) {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice)
      window.dispatchEvent(new CustomEvent("near-consent", { detail: choice }))
    } catch {
      // ignore persistence failures
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="consentBanner" role="dialog" aria-live="polite" aria-label="Privacy consent">
      <p className="consentText">
        Near doesn&rsquo;t track you by default. We&rsquo;d like your consent before
        loading any analytics that helps us improve this site. See our{" "}
        <Link href="/privacy" className="consentLink">Privacy Policy</Link>.
      </p>
      <div className="consentButtons">
        <button type="button" className="consentBtn ghost" onClick={() => choose("declined")}>
          Decline
        </button>
        <button type="button" className="consentBtn primary" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>

      <style jsx>{`
        .consentBanner {
          position: fixed;
          left: 16px;
          right: 16px;
          bottom: 16px;
          z-index: 1000;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 20px;
          background: var(--cream, #faf6f1);
          color: var(--plum-text, #2a0a16);
          border: 1px solid var(--line-strong, rgba(14, 23, 51, 0.12));
          border-radius: 16px;
          box-shadow: 0 16px 48px rgba(11, 18, 40, 0.18);
        }
        .consentText {
          margin: 0;
          flex: 1 1 320px;
          font-size: 13.5px;
          line-height: 1.5;
          font-family: var(--font-sans, sans-serif);
          color: var(--plum-text, #2a0a16);
          opacity: 0.85;
        }
        .consentLink {
          color: var(--cta, #ec4e72);
          text-decoration: underline;
          font-weight: 500;
        }
        .consentButtons {
          display: flex;
          gap: 10px;
          flex: 0 0 auto;
        }
        .consentBtn {
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-sans, sans-serif);
          cursor: pointer;
          border: 1px solid transparent;
          transition: opacity 0.15s, background 0.15s;
        }
        .consentBtn.ghost {
          background: transparent;
          color: var(--plum-text, #2a0a16);
          border-color: var(--line-strong, rgba(14, 23, 51, 0.18));
          opacity: 0.85;
        }
        .consentBtn.ghost:hover {
          opacity: 1;
        }
        .consentBtn.primary {
          background: var(--cta, #ec4e72);
          color: var(--cta-text, #ffffff);
        }
        .consentBtn.primary:hover {
          background: var(--cta-deep, #d83e66);
        }
        @media (max-width: 560px) {
          .consentBanner {
            flex-direction: column;
            align-items: stretch;
            text-align: left;
          }
          .consentButtons {
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  )
}
