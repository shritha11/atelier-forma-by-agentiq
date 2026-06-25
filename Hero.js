import React from 'react';
import { Zap, Globe, Shield } from 'lucide-react';

const C = {
  bg:           "#0a0a0a",
  bgAlt:        "#141414",
  surface:      "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border:       "rgba(255,255,255,0.08)",
  borderHover:  "rgba(255,255,255,0.18)",
  primary:      "#e63946",
  primaryGlow:  "rgba(230,57,70,0.25)",
  secondary:    "#f4f4f4",
  text:         "#ffffff",
  textMuted:    "rgba(255,255,255,0.5)",
  textSubtle:   "rgba(255,255,255,0.25)",
  heroSize:     "clamp(70px, 10vw, 120px)",
  h2Size:       "clamp(40px, 6vw, 70px)",
  heroWeight:   700,
  heroTracking: "-0.05em",
  heroLH:       0.9,
  font:         "'Playfair Display', serif",
  sectionPad:   "160px 100px",
  maxW:         "1440px",
  cardPad:      "40px",
  gap:          "24px",
  cardR:        "12px",
  btnR:         "50px",
  shadow:       "0 4px 30px rgba(0,0,0,0.5)",
  glow:         "0 0 40px rgba(230,57,70,0.25)",
  btnShadow:    "0 6px 20px rgba(230,57,70,0.35)",
  ease:         "0.3s ease-in-out",
  lift:         "translateY(-6px)",
};

export default function Hero() {
  const [primaryHover, setPrimaryHover] = React.useState(false);

  const gradientWords = ["Timeless", "crafted"];
  const headline = "Timeless spaces, crafted to inspire";

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: C.bg,
        color: C.text,
        fontFamily: C.font,
        padding: C.sectionPad,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 65%)`,
          filter: "blur(60px)",
        }}
      ></div>

      <div style={{ maxWidth: C.maxW, margin: "0 auto" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: C.primary,
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          ARCHITECTURE REDEFINED
        </div>

        <h1
          style={{
            fontSize: C.heroSize,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: "24px",
          }}
        >
          {headline.split(" ").map((word, index) =>
            gradientWords.includes(word) ? (
              <span
                key={index}
                style={{
                  background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline",
                }}
              >
                {word}{" "}
              </span>
            ) : (
              <span key={index} style={{ color: C.text, display: "inline" }}>
                {word}{" "}
              </span>
            )
          )}
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          We design bespoke architectural experiences for the world's most
          discerning clients.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
              padding: "14px 32px",
              borderRadius: C.btnR,
              border: "none",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: primaryHover ? C.glow : C.btnShadow,
              transform: primaryHover ? C.lift : "none",
              transition: C.ease,
            }}
          >
            Discover our portfolio
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "14px 32px",
              borderRadius: C.btnR,
              color: C.text,
              cursor: "pointer",
              transition: C.ease,
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = C.surfaceHover)
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "transparent")
            }
          >
            Learn about our process →
          </button>
        </div>
      </div>
    </section>
  );
}