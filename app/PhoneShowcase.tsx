"use client";

export function PhoneShowcase() {
  return (
    <section className="showcase">
      <div className="showcase-inner">

        {/* SUNRISE */}
        <div className="phone phone-left">
          <div className="phone-frame sunrise">
            <div className="status">7:42 AM</div>
            <div className="title">Grocery Run</div>
            <ul className="tasks">
              <li>Milk</li>
              <li>Bread</li>
              <li>Eggs</li>
            </ul>
          </div>
        </div>

        {/* DAY – PRIMARY */}
        <div className="phone phone-center">
          <div className="phone-frame day">
            <div className="status">2:14 PM</div>
            <div className="title">Target</div>
            <ul className="tasks">
              <li className="checked">{"Paper Towels \u2713"}</li>
              <li className="checked">{"Dish Soap \u2713"}</li>
              <li className="checked">{"Trash Bags \u2713"}</li>
            </ul>
            <div className="complete">Complete</div>
          </div>
        </div>

        {/* DUSK */}
        <div className="phone phone-right">
          <div className="phone-frame dusk">
            <div className="status">8:05 PM</div>
            <div className="title">Home</div>
            <ul className="tasks">
              <li>Unload groceries</li>
              <li>Prep lunch</li>
              <li>Set reminders</li>
            </ul>
          </div>
        </div>

      </div>

      <style jsx>{`
        .showcase {
          padding: 180px 0;
          background: radial-gradient(ellipse at center, #0b1026 0%, #05060f 70%);
          overflow: hidden;
        }

        .showcase-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 80px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .phone {
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .phone-frame {
          width: 320px;
          height: 640px;
          border-radius: 42px;
          padding: 30px;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        .sunrise {
          background: linear-gradient(180deg, #ff9966, #ff5e62);
        }

        .day {
          background: linear-gradient(180deg, #4facfe, #00f2fe);
        }

        .dusk {
          background: linear-gradient(180deg, #141e30, #243b55);
        }

        .status {
          font-size: 14px;
          opacity: 0.8;
        }

        .title {
          font-size: 28px;
          font-weight: 600;
        }

        .tasks {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .tasks li {
          background: rgba(255,255,255,0.15);
          padding: 10px 14px;
          border-radius: 12px;
        }

        .checked {
          text-decoration: line-through;
          opacity: 0.6;
        }

        .complete {
          margin-top: auto;
          text-align: center;
          padding: 12px;
          background: rgba(255,255,255,0.2);
          border-radius: 14px;
          font-weight: 600;
        }

        .phone-center {
          transform: scale(1.1);
          z-index: 3;
        }

        .phone-left {
          opacity: 0.7;
          transform: scale(0.92) translateX(40px);
        }

        .phone-right {
          opacity: 0.7;
          transform: scale(0.92) translateX(-40px);
        }

        @media (max-width: 1100px) {
          .showcase-inner {
            flex-direction: column;
          }

          .phone-left,
          .phone-right {
            transform: scale(0.9);
            opacity: 0.8;
          }

          .phone-center {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
