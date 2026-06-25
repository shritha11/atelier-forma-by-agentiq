import React from 'react';

const C = {
  bg: "#0a0a0a",
  bgAlt: "#141414",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  primary: "#e63946",
  primaryGlow: "rgba(230,57,70,0.25)",
  secondary: "#f4f4f4",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textSubtle: "rgba(255,255,255,0.25)",
  heroSize: "clamp(70px, 10vw, 120px)",
  h2Size: "clamp(40px, 6vw, 70px)",
  heroWeight: 700,
  heroTracking: "-0.05em",
  heroLH: 0.9,
  font: "'Playfair Display', serif",
  sectionPad: "160px 100px",
  maxW: "1440px",
  cardPad: "40px",
  gap: "24px",
  cardR: "12px",
  btnR: "50px",
  shadow: "0 4px 30px rgba(0,0,0,0.5)",
  glow: "0 0 40px rgba(230,57,70,0.25)",
  btnShadow: "0 6px 20px rgba(230,57,70,0.35)",
  ease: "0.3s ease-in-out",
  lift: "translateY(-6px)",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "80px 80px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        <div style={{ maxWidth: "240px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: C.font,
              background: `linear-gradient(90deg, ${C.primary}, ${C.text})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Atelier Forma
          </div>
          <div
            style={{
              fontSize: "14px",
              color: C.textSubtle,
              marginTop: "8px",
            }}
          >
            Crafting timeless spaces with a story.
          </div>
        </div>

        <div style={{ display: "flex", gap: "64px" }}>
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Studio
            </div>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              About Us
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Careers
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Press
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Contact
            </a>
          </div>

          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Projects
            </div>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Residential
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Commercial
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Hospitality
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Public Spaces
            </a>
          </div>

          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Resources
            </div>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Blog
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              FAQs
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseOver={(e) => (e.target.style.color = C.text)}
              onMouseOut={(e) => (e.target.style.color = C.textMuted)}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "32px",
          marginTop: "0",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          © 2026 Atelier Forma. All rights reserved.
        </div>
        <div
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          Built with AgentIQ
        </div>
      </div>
    </footer>
  );
}