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

export default function Contact() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        color: C.text,
        padding: C.sectionPad,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: C.gap,
        maxWidth: C.maxW,
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          fontFamily: C.font,
          marginBottom: C.gap,
        }}
      >
        Contact Atelier Forma
      </h2>
      <p
        style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: C.textMuted,
          maxWidth: '600px',
          marginBottom: C.gap,
        }}
      >
        Let’s create something extraordinary together. Reach out to us for collaborations, project inquiries, or just to say hello.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: C.gap,
          width: '100%',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              marginBottom: '12px',
              fontFamily: C.font,
            }}
          >
            Studio Address
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: C.textMuted,
            }}
          >
            123 Atelier Lane, <br />
            Suite 456, <br />
            Metropolis, NY 10001
          </p>
        </div>
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              marginBottom: '12px',
              fontFamily: C.font,
            }}
          >
            Contact Details
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: C.textMuted,
            }}
          >
            Email: <a href="mailto:hello@atelierforma.com" style={{ color: C.primary, textDecoration: 'none' }}>hello@atelierforma.com</a> <br />
            Phone: <a href="tel:+1234567890" style={{ color: C.primary, textDecoration: 'none' }}>+1 (234) 567-890</a>
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          gap: '20px',
        }}
      >
        <a
          href="#"
          style={{
            padding: '12px 24px',
            backgroundColor: C.primary,
            color: C.text,
            borderRadius: C.btnR,
            textDecoration: 'none',
            fontWeight: 600,
            fontFamily: C.font,
            boxShadow: C.btnShadow,
            transition: C.ease,
          }}
          onMouseEnter={(e) => (e.target.style.transform = C.lift)}
          onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
        >
          Start a Project
        </a>
        <a
          href="#"
          style={{
            padding: '12px 24px',
            backgroundColor: C.surface,
            color: C.textMuted,
            borderRadius: C.btnR,
            textDecoration: 'none',
            fontWeight: 600,
            fontFamily: C.font,
            border: `1px solid ${C.border}`,
            transition: C.ease,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = C.surfaceHover;
            e.target.style.color = C.text;
            e.target.style.borderColor = C.borderHover;
            e.target.style.transform = C.lift;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = C.surface;
            e.target.style.color = C.textMuted;
            e.target.style.borderColor = C.border;
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Learn More
        </a>
      </div>
    </section>
  );
}