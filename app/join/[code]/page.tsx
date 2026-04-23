"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

const APP_STORE_URL = "https://apps.apple.com/app/id6744145553"

export default function JoinPage() {
  const params = useParams()
  const code = params.code as string
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    // Try to open the app via custom scheme first
    // If the app is installed, this will open it and auto-join the household
    window.location.href = `near://join?code=${code}`

    // If the app didn't open (no app installed), show the landing page after a short delay
    const timer = setTimeout(() => setShowPage(true), 800)
    return () => clearTimeout(timer)
  }, [code])

  if (!showPage) {
    return (
      <main style={styles.page}>
        <div style={styles.spinnerWrap}>
          <div style={styles.spinner} />
        </div>
      </main>
    )
  }

  return (
    <main style={styles.page}>
      <div style={styles.glow} />

      <div style={styles.card}>
        <div style={styles.logoRow}>
          <div style={styles.logoDot} />
          <span style={styles.logoText}>near</span>
        </div>

        <h1 style={styles.title}>You&apos;ve been invited</h1>
        <p style={styles.subtitle}>
          Someone wants to share their lists with you on <strong style={{ color: "#fff" }}>Near</strong> &mdash;
          the app that shows you what you need, right when you arrive.
        </p>

        <div style={styles.valueProps}>
          <div style={styles.valueProp}>
            <div style={styles.vpIcon}>&#x1F4CD;</div>
            <div>
              <div style={styles.vpTitle}>Location-triggered</div>
              <div style={styles.vpDesc}>Your list appears when you pull into the parking lot</div>
            </div>
          </div>
          <div style={styles.valueProp}>
            <div style={styles.vpIcon}>&#x1F3E0;</div>
            <div>
              <div style={styles.vpTitle}>Household sync</div>
              <div style={styles.vpDesc}>If anyone in your home is nearby, they see the list too</div>
            </div>
          </div>
          <div style={styles.valueProp}>
            <div style={styles.vpIcon}>&#x26A1;</div>
            <div>
              <div style={styles.vpTitle}>Zero effort</div>
              <div style={styles.vpDesc}>No timers. No opening the app. It just works.</div>
            </div>
          </div>
        </div>

        <div style={styles.codeBox}>
          <p style={styles.codeLabel}>Your invite code</p>
          <p style={styles.codeValue}>{code}</p>
        </div>

        <a href={APP_STORE_URL} style={styles.button}>
          Download Near &mdash; It&apos;s Free
        </a>

        <div style={styles.steps}>
          <p style={styles.step}><span style={styles.stepNum}>1</span> Download Near from the App Store</p>
          <p style={styles.step}><span style={styles.stepNum}>2</span> Open this link again after installing</p>
          <p style={styles.step}><span style={styles.stepNum}>3</span> You&apos;ll automatically join the household</p>
        </div>

        <p style={styles.hint}>
          Already have Near? Open the app &mdash; it will detect this invite automatically.
        </p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #04050C 0%, #0A0E1A 50%, #04050C 100%)",
    padding: "24px",
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "400px",
    background: "radial-gradient(circle, rgba(88,217,255,0.15), rgba(107,92,255,0.10), transparent 65%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  spinnerWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: 32,
    height: 32,
    border: "3px solid rgba(255,255,255,0.1)",
    borderTop: "3px solid #58D9FF",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  card: {
    position: "relative",
    maxWidth: 440,
    width: "100%",
    textAlign: "center",
    background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
    borderRadius: 24,
    padding: "40px 28px 32px",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
    backdropFilter: "blur(20px)",
    animation: "fadeIn 0.5s ease-out",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: 20,
  },
  logoDot: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: "linear-gradient(135deg, #58D9FF, #6B5CFF, #EC4899)",
    boxShadow: "0 0 20px rgba(88,217,255,0.3)",
  },
  logoText: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "-0.03em",
    color: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    color: "#FFFFFF",
    margin: "0 0 10px",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.6)",
    margin: "0 0 24px",
  },
  valueProps: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: 24,
    textAlign: "left",
  },
  valueProp: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "12px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
  },
  vpIcon: {
    fontSize: 20,
    flexShrink: 0,
    marginTop: 2,
  },
  vpTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.01em",
  },
  vpDesc: {
    fontSize: 13,
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.4,
    marginTop: 2,
  },
  codeBox: {
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "16px",
    marginBottom: 20,
  },
  codeLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    margin: "0 0 6px",
    fontWeight: 600,
  },
  codeValue: {
    fontSize: 22,
    fontWeight: 800,
    color: "#58D9FF",
    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
    margin: 0,
    letterSpacing: "0.12em",
  },
  button: {
    display: "block",
    background: "linear-gradient(90deg, #58D9FF, #6B5CFF, #EC4899)",
    color: "rgba(0,0,0,0.9)",
    fontWeight: 750,
    fontSize: 16,
    padding: "16px 32px",
    borderRadius: 999,
    textDecoration: "none",
    marginBottom: 24,
    boxShadow: "0 12px 40px rgba(88,217,255,0.2)",
    letterSpacing: "-0.01em",
  },
  steps: {
    textAlign: "left" as const,
    marginBottom: 20,
  },
  step: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    margin: "0 0 8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  stepNum: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.7)",
    fontSize: 11,
    fontWeight: 700,
    flexShrink: 0,
  },
  hint: {
    fontSize: 13,
    color: "rgba(255,255,255,0.35)",
    lineHeight: 1.5,
    margin: 0,
  },
}
