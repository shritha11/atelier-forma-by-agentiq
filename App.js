import React from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Marquee from './Marquee.js';
import Work from './Work.js';
import Services from './Services.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

// ─── DESIGN TOKENS — use these exact values everywhere. Never invent hex colors. ───
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

export default function App() {
  return (
    <div style={{
      background: C.bg,
      minHeight: "100vh",
      fontFamily: C.font,
      color: C.text,
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {/* Render all components in order */}
      <Navbar />
      <Hero />
      <div style={{
        width: "100%",
        maxWidth: C.maxW,
        padding: C.sectionPad,
        display: "flex",
        flexDirection: "column",
        gap: C.gap,
      }}>
        <Marquee />
        <Work />
        <Services />
        <Team />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}