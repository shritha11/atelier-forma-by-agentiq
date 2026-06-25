import React from 'react';
import { Zap, Globe, Shield } from 'lucide-react';

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

export default function Services() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        color: C.text,
        padding: C.sectionPad,
        fontFamily: C.font,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: C.gap,
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          textAlign: 'center',
          maxWidth: C.maxW,
        }}
      >
        Our Expertise
      </h2>
      <p
        style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: C.textMuted,
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        Atelier Forma crafts bespoke architectural experiences that merge form,
        function, and storytelling. Our studio specializes in creating spaces
        that inspire, captivate, and elevate the human experience.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: C.gap,
          maxWidth: C.maxW,
          width: '100%',
          marginTop: '60px',
        }}
      >
        <div
          style={{
            backgroundColor: C.surface,
            padding: C.cardPad,
            borderRadius: C.cardR,
            boxShadow: C.shadow,
            transition: C.ease,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Zap
            size={40}
            color={C.primary}
            style={{ marginBottom: '20px' }}
          />
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            Concept Development
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: C.textMuted,
            }}
          >
            We transform visionary ideas into tangible concepts, blending art,
            architecture, and innovation to set the stage for iconic projects.
          </p>
        </div>
        <div
          style={{
            backgroundColor: C.surface,
            padding: C.cardPad,
            borderRadius: C.cardR,
            boxShadow: C.shadow,
            transition: C.ease,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Globe
            size={40}
            color={C.primary}
            style={{ marginBottom: '20px' }}
          />
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            Global Design
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: C.textMuted,
            }}
          >
            Our work spans continents, delivering culturally resonant designs
            that reflect the unique character of each location.
          </p>
        </div>
        <div
          style={{
            backgroundColor: C.surface,
            padding: C.cardPad,
            borderRadius: C.cardR,
            boxShadow: C.shadow,
            transition: C.ease,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Shield
            size={40}
            color={C.primary}
            style={{ marginBottom: '20px' }}
          />
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            Sustainable Architecture
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: C.textMuted,
            }}
          >
            We prioritize sustainability, designing structures that harmonize
            with the environment and stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}