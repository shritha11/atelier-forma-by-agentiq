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

export default function Team() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        color: C.text,
        padding: C.sectionPad,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: C.gap,
        fontFamily: C.font,
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          margin: 0,
          textAlign: 'center',
        }}
      >
        Meet Our Team
      </h2>
      <p
        style={{
          maxWidth: '800px',
          textAlign: 'center',
          color: C.textMuted,
          fontSize: '18px',
          lineHeight: 1.8,
        }}
      >
        Atelier Forma is a collective of visionaries, architects, and designers
        dedicated to crafting spaces that inspire. Our team combines technical
        expertise with artistic sensibility to deliver unparalleled luxury and
        timeless design.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: C.gap,
          width: '100%',
          maxWidth: C.maxW,
        }}
      >
        {[
          { name: 'Elena Moreau', role: 'Creative Director', img: '/images/elena.jpg' },
          { name: 'Liam Carter', role: 'Lead Architect', img: '/images/liam.jpg' },
          { name: 'Sophia Zhang', role: 'Design Strategist', img: '/images/sophia.jpg' },
          { name: 'Noah Fischer', role: 'Project Manager', img: '/images/noah.jpg' },
        ].map((member, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                transition: C.ease,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: C.surfaceHover,
                padding: C.cardPad,
                color: C.text,
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '16px',
                  color: C.textMuted,
                }}
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}