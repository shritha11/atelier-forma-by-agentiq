import React from 'react';
import { Zap } from 'lucide-react';

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

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const navLinks = ["Hero", "Work", "Services", "Team", "Contact"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "68px",
        background: C.bg,
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: C.text,
          fontFamily: C.font,
        }}
      >
        Atelier Forma
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            style={{
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              color: hoveredLink === index ? C.text : C.textMuted,
              fontFamily: C.font,
              transition: C.ease,
            }}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link}
          </a>
        ))}
      </div>
      <button
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          padding: "9px 22px",
          borderRadius: C.btnR,
          border: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: C.btnShadow,
          fontFamily: C.font,
          transition: C.ease,
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = 0.9;
          e.target.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
        }}
      >
        Get in Touch
      </button>
    </div>
  );
}