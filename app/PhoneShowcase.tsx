"use client";

import { PlacesScreen } from "./PlacesScreen";
import { PlaceViewScreen } from "./PlaceViewScreen";
import { HouseholdScreen } from "./HouseholdScreen";

export function PhoneShowcase() {
  return (
    <section className="showcase" aria-label="App preview screens">
      <div className="showcase-inner">
        {/* LEFT – Sunrise */}
        <div className="phone phone-left" aria-label="Sunrise screen">
          <div className="phone-frame">
            <PlacesScreen />
          </div>
        </div>

        {/* CENTER – DAY (PRIMARY) */}
        <div className="phone phone-center" aria-label="Day screen">
          <div className="phone-frame phone-frame-main">
            <PlaceViewScreen />
          </div>
        </div>

        {/* RIGHT – DUSK */}
        <div className="phone phone-right" aria-label="Dusk screen">
          <div className="phone-frame">
            <HouseholdScreen />
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase {
          position: relative;
          padding: 140px 0 110px;
          background: radial-gradient(ellipse at center, #0b1026 0%, #05060f 70%);
          overflow: hidden;
        }

        .showcase::before {
          content: "";
          position: absolute;
          inset: -20%;
          background: radial-gradient(
              900px 600px at 30% 40%,
              rgba(139, 92, 246, 0.22),
              transparent 60%
            ),
            radial-gradient(
              900px 600px at 70% 55%,
              rgba(0, 217, 255, 0.18),
              transparent 62%
            );
          filter: blur(70px);
          opacity: 0.9;
          pointer-events: none;
        }

        .showcase-inner {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 80px;
          padding: 0 20px;
        }

        .phone {
          position: relative;
          transition: transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease;
        }

        .phone-frame {
          width: 320px;
          height: 640px;
          border-radius: 44px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Center hero phone */
        .phone-center {
          z-index: 3;
          transform: scale(1.1);
        }

        .phone-frame-main {
          box-shadow: 0 70px 140px rgba(0, 0, 0, 0.85),
            0 0 180px rgba(0, 217, 255, 0.18),
            0 0 140px rgba(139, 92, 246, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* Side phones */
        .phone-left {
          opacity: 0.55;
          transform: scale(0.92) translateX(50px);
          filter: saturate(0.9) contrast(0.95);
        }

        .phone-right {
          opacity: 0.55;
          transform: scale(0.92) translateX(-50px);
          filter: saturate(0.9) contrast(0.95);
        }

        /* Hover energy */
        .phone-center:hover {
          transform: scale(1.14);
        }

        /* Background glow behind center */
        .phone-center::before {
          content: "";
          position: absolute;
          inset: -140px;
          background: radial-gradient(
            circle,
            rgba(0, 217, 255, 0.18),
            rgba(139, 92, 246, 0.12),
            transparent 60%
          );
          filter: blur(70px);
          z-index: -1;
        }

        @media (max-width: 1100px) {
          .showcase-inner {
            flex-direction: column;
            gap: 52px;
          }

          .phone-left,
          .phone-right {
            transform: scale(0.92);
            opacity: 0.75;
          }

          .phone-center {
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}