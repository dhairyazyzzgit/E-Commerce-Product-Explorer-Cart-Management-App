import { Link } from "react-router-dom"

export default function Home() {
  const pageStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #fdf8f3 0%, #f7efe6 35%, #efe2d3 100%)",
    padding: "40px 24px"
  }

  const containerStyle = {
    maxWidth: "1300px",
    margin: "0 auto"
  }

  const heroStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
    alignItems: "center",
    minHeight: "calc(100vh - 160px)"
  }

  const leftCard = {
    background: "rgba(255,255,255,0.65)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.7)",
    borderRadius: "32px",
    padding: "clamp(24px, 5vw, 42px)",
    boxShadow: "0 20px 60px rgba(82, 55, 29, 0.10)"
  }

  const chipStyle = {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "#fff",
    color: "#8a5a32",
    fontWeight: "700",
    fontSize: "14px",
    marginBottom: "22px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
  }

  const titleStyle = {
    fontSize: "clamp(42px, 9vw, 72px)",
    lineHeight: "0.95",
    letterSpacing: "-3px",
    color: "#1f1a17",
    fontWeight: "800",
    margin: "0 0 20px 0"
  }

  const textStyle = {
    fontSize: "clamp(16px, 3vw, 18px)",
    lineHeight: "1.8",
    color: "#6f665f",
    maxWidth: "650px",
    marginBottom: "30px"
  }

  const buttonRow = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "34px"
  }

  const primaryBtn = {
    padding: "15px 24px",
    borderRadius: "16px",
    background: "#111111",
    color: "white",
    textDecoration: "none",
    fontWeight: "700",
    boxShadow: "0 14px 30px rgba(0,0,0,0.16)",
    textAlign: "center",
    flex: "1 1 170px"
  }

  const secondaryBtn = {
    padding: "15px 24px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.85)",
    color: "#1f1a17",
    textDecoration: "none",
    fontWeight: "700",
    border: "1px solid rgba(0,0,0,0.08)",
    textAlign: "center",
    flex: "1 1 170px"
  }

  const statsRow = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "16px"
  }

  const statCard = {
    background: "rgba(255,255,255,0.78)",
    borderRadius: "22px",
    padding: "20px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.06)"
  }

  const rightColumn = {
    display: "grid",
    gap: "18px"
  }

  const showcaseCard = {
    background: "rgba(255,255,255,0.72)",
    borderRadius: "30px",
    padding: "clamp(18px, 4vw, 24px)",
    boxShadow: "0 20px 60px rgba(82, 55, 29, 0.10)",
    border: "1px solid rgba(255,255,255,0.7)"
  }

  const miniGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px"
  }

  const miniCard = {
    background: "rgba(255,255,255,0.82)",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.06)"
  }

  const sectionTitle = {
    fontSize: "clamp(24px, 5vw, 30px)",
    color: "#1f1a17",
    margin: "0 0 10px 0"
  }

  const sectionText = {
    color: "#6f665f",
    lineHeight: "1.7",
    fontSize: "15px",
    margin: 0
  }

  const bottomSection = {
    marginTop: "26px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px"
  }

  const featureCard = {
    background: "rgba(255,255,255,0.72)",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.06)"
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={heroStyle}>
          <div style={leftCard}>
            <div style={chipStyle}>Luxury shopping, beautifully crafted</div>

            <h1 style={titleStyle}>
              A shopping app
              <br />
              that actually
              <br />
              feels premium.
            </h1>

            <p style={textStyle}>
              Explore curated products, discover elegant design, save your
              favorites, and enjoy a sleek cart and checkout experience that
              feels polished from start to finish.
            </p>

            <div style={buttonRow}>
              <Link to="/products" style={primaryBtn}>
                Explore Products
              </Link>

              <Link to="/wishlist" style={secondaryBtn}>
                Open Wishlist
              </Link>
            </div>

            <div style={statsRow}>
              <div style={statCard}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", color: "#1f1a17" }}>
                  10K+
                </h3>
                <p style={{ margin: 0, color: "#6f665f", fontSize: "14px" }}>
                  Products explored
                </p>
              </div>

              <div style={statCard}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", color: "#1f1a17" }}>
                  4.9★
                </h3>
                <p style={{ margin: 0, color: "#6f665f", fontSize: "14px" }}>
                  User satisfaction
                </p>
              </div>

              <div style={statCard}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", color: "#1f1a17" }}>
                  24/7
                </h3>
                <p style={{ margin: 0, color: "#6f665f", fontSize: "14px" }}>
                  Smooth experience
                </p>
              </div>
            </div>
          </div>

          <div style={rightColumn}>
            <div style={showcaseCard}>
              <div
                style={{
                  position: "relative",
                  height: "clamp(220px, 55vw, 280px)",
                  borderRadius: "28px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(30px, 8vw, 38px)",
                  fontWeight: "800",
                  letterSpacing: "3px",
                  color: "#fff",
                  cursor: "pointer",
                  background: "rgba(20,20,20,0.6)",
                  backdropFilter: "blur(25px)",
                  WebkitBackdropFilter: "blur(25px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.4s ease",
                  marginBottom: "18px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.boxShadow = "0 18px 45px rgba(0,0,0,0.45)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "200%",
                    height: "200%",
                    background: "conic-gradient(from 0deg, #000, #6b4f3b, #c89b6d, #000)",
                    animation: "spin 6s linear infinite",
                    opacity: 0.25
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)"
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
                    animation: "shine 3s infinite"
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    pointerEvents: "none"
                  }}
                >
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
                        animation: `float ${2 + Math.random() * 2}s infinite ease-in-out`
                      }}
                    />
                  ))}
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    textShadow: "0 4px 20px rgba(0,0,0,0.6)"
                  }}
                >
                  SHOPIX
                </div>

                <style>{`
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
                `}</style>
              </div>

              <h2 style={sectionTitle}>
                Extraordinary style. Effortless browsing.
              </h2>

              <p style={sectionText}>
                Crafted to deliver a seamless, high-end commerce experience with refined design and purposeful detail.
              </p>
            </div>

            <div style={miniGrid}>
              <div style={miniCard}>
                <h3 style={{ margin: "0 0 8px 0", color: "#1f1a17" }}>
                  Smart Search
                </h3>
                <p style={sectionText}>
                  Quickly find products with dynamic search and filtering.
                </p>
              </div>

              <div style={miniCard}>
                <h3 style={{ margin: "0 0 8px 0", color: "#1f1a17" }}>
                  Elegant Checkout
                </h3>
                <p style={sectionText}>
                  A polished purchase flow with clear summaries and totals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={bottomSection}>
          <div style={featureCard}>
            <h3 style={{ margin: "0 0 10px 0", color: "#1f1a17" }}>
              Premium Product Discovery
            </h3>
            <p style={sectionText}>
              Designed for visual clarity so shoppers can browse, compare, and
              choose with confidence.
            </p>
          </div>

          <div style={featureCard}>
            <h3 style={{ margin: "0 0 10px 0", color: "#1f1a17" }}>
              Wishlist + Cart Flow
            </h3>
            <p style={sectionText}>
              Save items you love, add products instantly, and manage purchases
              smoothly.
            </p>
          </div>

          <div style={featureCard}>
            <h3 style={{ margin: "0 0 10px 0", color: "#1f1a17" }}>
              Modern Brand Feel
            </h3>
            <p style={sectionText}>
              Warm luxury tones, clean structure, and layered card design for a
              polished app aesthetic.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
