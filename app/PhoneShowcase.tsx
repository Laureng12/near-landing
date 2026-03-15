"use client";

import Image from "next/image";

export function PhoneShowcase() {
  return (
    <section className="showcase" aria-label="Near app previews">
      <div className="showcaseIntro">
        <span className="showcaseKicker">See the product</span>
        <h2 className="showcaseTitle">The reminder shows up when the place does.</h2>
        <p className="showcaseSub">
          Near is built around one simple, magical behavior: you arrive, and what matters is already waiting.
        </p>
      </div>

      <div className="inner">
        {/* LEFT — Home / Arrival */}
        <div className="phone left" aria-label="Arrival reminder preview">
          <div className="device dawn-glow">
            <div className="arrivalOrb orbOne" aria-hidden="true" />
            <div className="arrivalOrb orbTwo" aria-hidden="true" />
            <div className="bezel">
              <div className="screenImg">
                <div className="arrivalCard" aria-hidden="true">
                  <span className="arrivalPing" />
                  Arriving now
                </div>
                <Image src="/screen-home.svg" alt="Near home screen" width={280} height={580} />
              </div>
            </div>
          </div>
          <div className="phoneLabel">
            <span className="labelTime">Arrive</span>
            <span className="labelScreen">Your list is ready</span>
          </div>
        </div>

        {/* CENTER — Places / Nudge */}
        <div className="phone center" aria-label="Drive-by reminder preview">
          <div className="device night-glow">
            <div className="bezel">
              <div className="screenImg">
                <Image src="/screen-places.svg" alt="Near places screen" width={280} height={580} />
              </div>
            </div>
          </div>
          <div className="phoneLabel">
            <span className="labelTime">Drive by</span>
            <span className="labelScreen">Get the nudge</span>
          </div>
        </div>

        {/* RIGHT — Household */}
        <div className="phone right" aria-label="Household sync preview">
          <div className="device dusk-glow">
            <div className="bezel">
              <div className="screenImg">
                <Image src="/screen-household.svg" alt="Near household screen" width={280} height={580} />
              </div>
            </div>
          </div>
          <div className="phoneLabel">
            <span className="labelTime">Share</span>
            <span className="labelScreen">Closest person gets the glory</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase {
          position: relative;
          padding: 80px 0 160px;
          overflow: hidden;
          background: #000000;
        }

        .showcase:before {
          content: "";
          position: absolute;
          inset: -2px;
          background: radial-gradient(800px 500px at 50% 30%, rgba(41, 151, 255, 0.06), rgba(0, 0, 0, 0) 60%);
          filter: blur(60px);
          pointer-events: none;
        }

        .showcaseIntro {
          position: relative;
          z-index: 2;
          max-width: 820px;
          margin: 0 auto 36px;
          padding: 0 24px;
          text-align: center;
        }

        .showcaseKicker {
          display: inline-flex;
          padding: 0;
          border-radius: 0;
          border: none;
          background: none;
          color: #2997ff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .showcaseTitle {
          margin: 0 0 12px;
          font-size: clamp(32px, 4.2vw, 52px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #f5f5f7;
        }

        .showcaseSub {
          margin: 0 auto;
          max-width: 640px;
          font-size: 18px;
          line-height: 1.62;
          color: rgba(255,255,255,0.60);
        }

        .inner {
          position: relative;
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          padding: 0 24px;
        }

        .phone {
          position: relative;
          transition: transform 0.4s ease;
        }

        .device {
          position: relative;
        }

        .left {
          opacity: 0.85;
          transform: scale(0.95) translateX(20px);
        }

        .right {
          opacity: 0.85;
          transform: scale(0.95) translateX(-20px);
        }

        .center {
          z-index: 3;
          transform: scale(1.06);
        }

        .dawn-glow .bezel {
          box-shadow: 0 50px 120px rgba(0,0,0,0.7), 0 0 80px rgba(41, 151, 255, 0.12);
        }

        .arrivalOrb {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          z-index: 0;
          filter: blur(6px);
        }

        .orbOne {
          top: 42px;
          left: -18px;
          width: 92px;
          height: 92px;
          background: radial-gradient(circle, rgba(41, 151, 255, 0.2), rgba(41, 151, 255, 0) 72%);
          animation: orbDriftOne 6s ease-in-out infinite;
        }

        .orbTwo {
          right: -12px;
          bottom: 110px;
          width: 74px;
          height: 74px;
          background: radial-gradient(circle, rgba(41, 151, 255, 0.15), rgba(41, 151, 255, 0) 74%);
          animation: orbDriftTwo 5s ease-in-out infinite;
        }

        .arrivalCard {
          position: absolute;
          left: 16px;
          top: 18px;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 13px;
          border-radius: 999px;
          color: rgba(255,255,255,0.92);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(11, 15, 28, 0.82);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 20px 50px rgba(0,0,0,0.38);
          animation: arrivalCardFloat 3.6s ease-in-out infinite;
          backdrop-filter: blur(14px);
        }

        .arrivalPing {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #2997ff;
          box-shadow: 0 0 0 0 rgba(41, 151, 255, 0.36);
          animation: pingPulse 2.2s ease-out infinite;
        }
        .night-glow .bezel {
          box-shadow: 0 50px 120px rgba(0,0,0,0.7), 0 0 100px rgba(41, 151, 255, 0.18);
        }
        .dusk-glow .bezel {
          box-shadow: 0 50px 120px rgba(0,0,0,0.7), 0 0 90px rgba(41, 151, 255, 0.12);
        }

        .center:before {
          content: "";
          position: absolute;
          inset: -100px;
          background: radial-gradient(circle, rgba(41, 151, 255, 0.1), rgba(0, 0, 0, 0) 60%);
          filter: blur(60px);
          z-index: -1;
        }

        .bezel {
          width: 280px;
          height: 580px;
          border-radius: 44px;
          padding: 10px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 50px 120px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .screenImg {
          width: 100%;
          height: 100%;
          border-radius: 36px;
          overflow: hidden;
          background: #0a0a0a;
          position: relative;
        }

        .screenImg :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .phoneLabel {
          text-align: center;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .labelTime {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: rgba(255, 255, 255, 0.42);
        }

        .labelScreen {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.90);
          max-width: 220px;
          line-height: 1.24;
        }

        @media (max-width: 1100px) {
          .inner {
            flex-direction: column;
            gap: 40px;
          }
          .left {
            transform: scale(1);
            opacity: 0.9;
          }
          .right {
            transform: scale(1);
            opacity: 0.9;
          }
          .center {
            transform: scale(1.02);
          }
        }

        @keyframes arrivalCardFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(6px); }
        }

        @keyframes orbDriftOne {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { transform: translateY(-18px) translateX(8px) scale(1.08); opacity: 1; }
        }

        @keyframes orbDriftTwo {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.72; }
          50% { transform: translateY(14px) translateX(-8px) scale(1.1); opacity: 0.95; }
        }

        @keyframes pingPulse {
          0% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(41, 151, 255, 0.34);
          }

          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(41, 151, 255, 0);
          }

          100% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(41, 151, 255, 0);
          }
        }

        @media (max-width: 480px) {
          .bezel {
            width: 240px;
            height: 500px;
            border-radius: 38px;
          }

          .arrivalCard {
            left: 12px;
            top: 14px;
            padding: 8px 12px;
            font-size: 11px;
          }
          .screenImg {
            border-radius: 30px;
          }
          .showcase {
            padding: 48px 0 96px;
          }
          .showcaseSub {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
