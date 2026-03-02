"use client";

export function PhoneShowcase() {
  return (
    <section className="showcase" aria-label="Near app previews">
      <div className="inner">
        {/* SUNRISE */}
        <div className="phone left" aria-label="Sunrise preview">
          <div className="device">
            <div className="bezel">
              <div className="screen sunrise">
                <TopBar time="7:42" />
                <Header title="Grocery Run" subtitle="Arrive. It appears." />
                <TaskList
                  items={[
                    { text: "Milk", dot: "sun" },
                    { text: "Bread", dot: "sun" },
                    { text: "Eggs", dot: "sun" },
                    { text: "Berries", dot: "sun" },
                  ]}
                />
                <FooterHint text="No timers. No opening the app." />
              </div>
            </div>
            <div className="glass" />
          </div>
        </div>

        {/* DAY */}
        <div className="phone center" aria-label="Day preview">
          <div className="device">
            <div className="bezel">
              <div className="screen day">
                <TopBar time="2:14" />
                <Header title="Target" subtitle="3 done. 1 left." />
                <TaskList
                  items={[
                    { text: "Paper Towels", checked: true, dot: "day" },
                    { text: "Dish Soap", checked: true, dot: "day" },
                    { text: "Trash Bags", checked: true, dot: "day" },
                    { text: "Batteries", checked: false, dot: "day" },
                  ]}
                />
                <div className="completeRow">
                  <div className="completePill">
                    <span className="completeDot" />
                    Complete
                  </div>
                  <div className="micro">Checked off automatically</div>
                </div>
                <FooterHint text="Drive by. It reminds you." />
              </div>
            </div>
            <div className="glass" />
          </div>
        </div>

        {/* DUSK */}
        <div className="phone right" aria-label="Dusk preview">
          <div className="device">
            <div className="bezel">
              <div className="screen dusk">
                <TopBar time="8:05" />
                <Header title="Home" subtitle="Household sync, instantly." />
                <TaskList
                  items={[
                    { text: "Unload groceries", dot: "dusk" },
                    { text: "Prep lunch", dot: "dusk" },
                    { text: "Set reminders", dot: "dusk" },
                    { text: "Charge headphones", dot: "dusk" },
                  ]}
                />
                <div className="householdCard">
                  <div className="hcTitle">Household</div>
                  <div className="hcSub">Lauren • Brian • Reese</div>
                  <div className="hcChip">Live</div>
                </div>
                <FooterHint text="If someone’s there, they see it." />
              </div>
            </div>
            <div className="glass" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase {
          position: relative;
          padding: 160px 0 190px;
          overflow: hidden;
          background: radial-gradient(900px 600px at 50% 30%, rgba(99, 102, 241, 0.18), rgba(0, 0, 0, 0) 60%),
            radial-gradient(700px 500px at 25% 55%, rgba(236, 72, 153, 0.12), rgba(0, 0, 0, 0) 65%),
            radial-gradient(800px 520px at 75% 60%, rgba(34, 211, 238, 0.12), rgba(0, 0, 0, 0) 65%),
            linear-gradient(180deg, #04050b 0%, #05060f 40%, #02030a 100%);
        }

        .showcase:before {
          content: "";
          position: absolute;
          inset: -2px;
          background: radial-gradient(600px 380px at 50% 35%, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0) 60%);
          filter: blur(30px);
          pointer-events: none;
        }

        .inner {
          position: relative;
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 72px;
          padding: 0 24px;
        }

        .phone {
          position: relative;
          transition: transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease;
          will-change: transform;
        }

        .left,
        .right {
          opacity: 0.72;
          filter: saturate(0.98);
          transform: scale(0.92);
        }

        .left {
          transform: scale(0.92) translateX(44px);
        }
        .right {
          transform: scale(0.92) translateX(-44px);
        }

        .center {
          z-index: 3;
          transform: scale(1.08);
        }

        .center:before {
          content: "";
          position: absolute;
          inset: -120px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.18), rgba(99, 102, 241, 0.14), rgba(0, 0, 0, 0) 62%);
          filter: blur(60px);
          z-index: -1;
        }

        .center:hover {
          transform: scale(1.11);
        }

        /* Device */
        .device {
          position: relative;
        }

        .bezel {
          width: 320px;
          height: 640px;
          border-radius: 48px;
          padding: 12px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 50px 120px rgba(0, 0, 0, 0.75);
        }

        .screen {
          width: 100%;
          height: 100%;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          padding: 18px 18px 16px;
          color: rgba(255, 255, 255, 0.92);
        }

        .glass {
          position: absolute;
          inset: 14px;
          border-radius: 40px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
          opacity: 0.55;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        /* Screen themes with more contrast */
        .sunrise {
          background:
            radial-gradient(700px 420px at 40% 10%, rgba(255, 255, 255, 0.14), rgba(0, 0, 0, 0) 55%),
            radial-gradient(600px 520px at 70% 85%, rgba(255, 180, 90, 0.38), rgba(0, 0, 0, 0) 62%),
            linear-gradient(180deg, #2b1020 0%, #5b1830 30%, #ff6a3d 100%);
        }

        .day {
          background:
            radial-gradient(900px 520px at 50% 0%, rgba(255, 255, 255, 0.18), rgba(0, 0, 0, 0) 58%),
            radial-gradient(700px 480px at 55% 60%, rgba(34, 211, 238, 0.35), rgba(0, 0, 0, 0) 65%),
            linear-gradient(180deg, #0b1b3a 0%, #103b9a 35%, #19b7d7 100%);
        }

        .dusk {
          background:
            radial-gradient(700px 420px at 55% 15%, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0) 55%),
            radial-gradient(600px 520px at 50% 85%, rgba(99, 102, 241, 0.26), rgba(0, 0, 0, 0) 66%),
            linear-gradient(180deg, #070816 0%, #0e1330 45%, #101a3a 100%);
        }

        /* Notch + top chrome */
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 2px 4px 10px;
          font-size: 12px;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.72);
        }
        .notch {
          height: 18px;
          width: 120px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.38);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .header {
          margin-top: 4px;
        }
        .hTitle {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
        }
        .hSub {
          margin-top: 6px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.72);
        }

        .tasks {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          list-style: none;
        }

        .task {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 12px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.10);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(10px);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 18px rgba(255, 255, 255, 0.12);
          flex: 0 0 auto;
        }

        .dot.day {
          background: rgba(34, 211, 238, 0.92);
          box-shadow: 0 0 18px rgba(34, 211, 238, 0.35);
        }
        .dot.sun {
          background: rgba(255, 180, 90, 0.92);
          box-shadow: 0 0 18px rgba(255, 180, 90, 0.30);
        }
        .dot.dusk {
          background: rgba(99, 102, 241, 0.92);
          box-shadow: 0 0 18px rgba(99, 102, 241, 0.30);
        }

        .taskText {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .checked {
          opacity: 0.66;
          text-decoration: line-through;
        }

        .check {
          margin-left: auto;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }

        .completeRow {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .completePill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 700;
          letter-spacing: -0.01em;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
        }

        .completeDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.92);
          box-shadow: 0 0 22px rgba(34, 211, 238, 0.55);
        }

        .micro {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.66);
          text-align: right;
        }

        .householdCard {
          margin-top: 14px;
          padding: 14px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
          position: relative;
        }

        .hcTitle {
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .hcSub {
          margin-top: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }
        .hcChip {
          position: absolute;
          right: 12px;
          top: 12px;
          font-size: 11px;
          font-weight: 800;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(99, 102, 241, 0.22);
          border: 1px solid rgba(99, 102, 241, 0.32);
        }

        .hint {
          margin-top: auto;
          padding-top: 14px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.62);
          text-align: center;
        }

        @media (max-width: 1100px) {
          .inner {
            flex-direction: column;
            gap: 54px;
          }
          .left,
          .right {
            transform: scale(0.92);
            opacity: 0.85;
          }
          .center {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

function TopBar({ time }: { time: string }) {
  return (
    <div className="topbar">
      <div>{time}</div>
      <div className="notch" aria-hidden="true" />
      <div style={{ display: "flex", gap: 8, opacity: 0.85 }}>
        <span>●●●</span>
        <span>▮▮</span>
      </div>
    </div>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="header">
      <div className="hTitle">{title}</div>
      <div className="hSub">{subtitle}</div>
    </div>
  );
}

function TaskList({
  items,
}: {
  items: { text: string; checked?: boolean; dot?: "sun" | "day" | "dusk" }[];
}) {
  return (
    <ul className="tasks">
      {items.map((it) => (
        <li className="task" key={it.text}>
          <span className={`dot ${it.dot ?? ""}`} aria-hidden="true" />
          <span className={`taskText ${it.checked ? "checked" : ""}`}>{it.text}</span>
          {it.checked ? <span className="check">✓</span> : null}
        </li>
      ))}
    </ul>
  );
}

function FooterHint({ text }: { text: string }) {
  return <div className="hint">{text}</div>;
}