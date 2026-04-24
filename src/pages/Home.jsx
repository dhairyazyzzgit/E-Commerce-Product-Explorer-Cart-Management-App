import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="homePage">
      <style>{`
        .homePage {
          min-height: 100vh;
          background: linear-gradient(135deg, #fdf8f3 0%, #f7efe6 35%, #efe2d3 100%);
          padding: 40px 24px;
        }

        .homeContainer {
          max-width: 1300px;
          margin: 0 auto;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          align-items: center;
          min-height: calc(100vh - 160px);
        }

        .leftCard {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 32px;
          padding: 42px;
          box-shadow: 0 20px 60px rgba(82, 55, 29, 0.10);
        }

        .chip {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 999px;
          background: #fff;
          color: #8a5a32;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 22px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .title {
          font-size: clamp(42px, 8vw, 72px);
          line-height: 0.95;
          letter-spacing: -3px;
          color: #1f1a17;
          font-weight: 800;
          margin: 0 0 20px 0;
        }

        .mainText {
          font-size: 18px;
          line-height: 1.8;
          color: #6f665f;
          max-width: 650px;
          margin-bottom: 30px;
        }

        .buttonRow {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }

        .primaryBtn,
        .secondaryBtn {
          padding: 15px 24px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 700;
          text-align: center;
        }

        .primaryBtn {
          background: #111111;
          color: white;
          box-shadow: 0 14px 30px rgba(0,0,0,0.16);
        }

        .secondaryBtn {
          background: rgba(255,255,255,0.85);
          color: #1f1a17;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .statsRow {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .statCard {
          background: rgba(255,255,255,0.78);
          border-radius: 22px;
          padding: 20px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.06);
        }

        .rightColumn {
          display: grid;
          gap: 18px;
        }

        .showcaseCard,
        .featureCard {
          background: rgba(255,255,255,0.72);
          border-radius: 30px;
          padding: 24px;
          box-shadow: 0 20px 60px rgba(82, 55, 29, 0.10);
          border: 1px solid rgba(255,255,255,0.7);
        }

        .visualBox {
          position: relative;
          height: 280px;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #fff;
          cursor: pointer;
          background: rgba(20,20,20,0.6);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.4s ease;
          margin-bottom: 18px;
        }

        .visualBox:hover {
          transform: scale(1.05);
          box-shadow: 0 18px 45px rgba(0,0,0,0.45);
        }

        .spinLayer {
          position: absolute;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, #000, #6b4f3b, #c89b6d, #000);
          animation: spin 6s linear infinite;
          opacity: 0.25;
        }

        .blurLayer {
          position: absolute;
          inset: 0;
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }

        .shineLayer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shine 3s infinite;
        }

        .shopixText {
          position: relative;
          z-index: 2;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }

        .sectionTitle {
          font-size: 30px;
          color: #1f1a17;
          margin: 0 0 10px 0;
        }

        .sectionText {
          color: #6f665f;
          line-height: 1.7;
          font-size: 15px;
          margin: 0;
        }

        .miniGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .miniCard {
          background: rgba(255,255,255,0.82);
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.06);
        }

        .bottomSection {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .featureCard {
          border-radius: 24px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 120%; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-24px) scale(1.35);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .homePage {
            padding: 24px 14px 46px;
          }

          .hero {
            display: flex;
            flex-direction: column;
            gap: 18px;
            min-height: auto;
          }

          .rightColumn {
            order: 1;
            width: 100%;
          }

          .leftCard {
            order: 2;
            width: 100%;
            box-sizing: border-box;
            padding: 24px 18px;
            border-radius: 26px;
          }

          .showcaseCard {
            padding: 14px;
            border-radius: 24px;
          }

          .visualBox {
            height: 180px;
            border-radius: 22px;
            font-size: 30px;
            margin-bottom: 14px;
          }

          .title {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .mainText {
            font-size: 15px;
            line-height: 1.7;
          }

          .buttonRow {
            flex-direction: column;
          }

          .statsRow {
            grid-template-columns: 1fr 1fr;
          }

          .miniGrid,
          .bottomSection {
            grid-template-columns: 1fr;
          }

          .sectionTitle {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="homeContainer">
        <div className="hero">
          <div className="leftCard">
            <div className="chip">Simple shopping. Clean experience.</div>

            <h1 className="title">
              Shop products,
              <br />
              save favourites,
              <br />
              checkout easily.
            </h1>

            <p className="mainText">
              Shopix lets you browse products, search quickly, save items to your
              wishlist, and manage your cart without making the experience feel
              messy or confusing.
            </p>

            <div className="buttonRow">
              <Link to="/products" className="primaryBtn">
                Explore Products
              </Link>

              <Link to="/wishlist" className="secondaryBtn">
                Open Wishlist
              </Link>
            </div>

            <div className="statsRow">
              <div className="statCard">
                <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", color: "#1f1a17" }}>
                  Fast
                </h3>
                <p style={{ margin: 0, color: "#6f665f", fontSize: "14px" }}>
                  Search and filters
                </p>
              </div>

              <div className="statCard">
                <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", color: "#1f1a17" }}>
                  Easy
                </h3>
                <p style={{ margin: 0, color: "#6f665f", fontSize: "14px" }}>
                  Cart updates
                </p>
              </div>

              <div className="statCard">
                <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", color: "#1f1a17" }}>
                  Clear
                </h3>
                <p style={{ margin: 0, color: "#6f665f", fontSize: "14px" }}>
                  Product details
                </p>
              </div>
            </div>
          </div>

          <div className="rightColumn">
            <div className="showcaseCard">
              <div className="visualBox">
                <div className="spinLayer" />
                <div className="blurLayer" />
                <div className="shineLayer" />

                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.95)",
                      boxShadow: "0 0 10px rgba(255,255,255,0.9)",
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${2 + Math.random() * 2}s infinite ease-in-out`,
                      zIndex: 1,
                      pointerEvents: "none"
                    }}
                  />
                ))}

                <div className="shopixText">SHOPIX</div>
              </div>

              <h2 className="sectionTitle">
                Find what you like without extra effort.
              </h2>

              <p className="sectionText">
                Browse products, open details, add items to your cart, or keep
                them saved for later.
              </p>
            </div>

            <div className="miniGrid">
              <div className="miniCard">
                <h3 style={{ margin: "0 0 8px 0", color: "#1f1a17" }}>
                  Search & Filter
                </h3>
                <p className="sectionText">
                  Look for products by name and narrow them down faster.
                </p>
              </div>

              <div className="miniCard">
                <h3 style={{ margin: "0 0 8px 0", color: "#1f1a17" }}>
                  Cart & Checkout
                </h3>
                <p className="sectionText">
                  Add products, check totals, and place an order smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomSection">
          <div className="featureCard">
            <h3 style={{ margin: "0 0 10px 0", color: "#1f1a17" }}>
              Product Browsing
            </h3>
            <p className="sectionText">
              View products in a clean layout with useful details before adding
              them to your cart.
            </p>
          </div>

          <div className="featureCard">
            <h3 style={{ margin: "0 0 10px 0", color: "#1f1a17" }}>
              Wishlist
            </h3>
            <p className="sectionText">
              Save products you are interested in and come back to them later.
            </p>
          </div>

          <div className="featureCard">
            <h3 style={{ margin: "0 0 10px 0", color: "#1f1a17" }}>
              Order Flow
            </h3>
            <p className="sectionText">
              Keep track of selected items, cart total, and checkout details in
              one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
