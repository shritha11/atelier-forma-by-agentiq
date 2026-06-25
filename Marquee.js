import React from 'react';

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

export default function Marquee() {
  const marqueeText = [
    "Bespoke Spaces",
    "Timeless Design",
    "Atelier Forma",
    "Luxury Architecture",
    "Innovative Concepts",
  ];

  return (
    <div style={{
      overflow: "hidden",
      position: "relative",
      background: C.bgAlt,
      padding: "20px 0",
      whiteSpace: "nowrap",
    }}>
      <div style={{
        display: "flex",
        animation: "scroll 20s linear infinite",
        fontFamily: C.font,
        fontSize: "clamp(24px, 3vw, 36px)",
        fontWeight: 400,
        letterSpacing: "0.05em",
        color: C.textMuted,
      }}>
        {marqueeText.map((text, index) => (
          <span key={index} style={{
            padding: "0 60px",
            display: "inline-block",
          }}>
            {text}
          </span>
        ))}
        {marqueeText.map((text, index) => (
          <span key={`clone-${index}`} style={{
            padding: "0 60px",
            display: "inline-block",
          }}>
            {text}
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}