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

export default function Work() {
  const projects = [
    {
      title: "Modernist Retreat",
      description: "A secluded escape blending brutalist design with serene landscapes.",
      image: "/images/modernist-retreat.jpg",
    },
    {
      title: "Urban Oasis",
      description: "Luxury living in the heart of the city with a focus on light and flow.",
      image: "/images/urban-oasis.jpg",
    },
    {
      title: "Coastal Haven",
      description: "An architectural masterpiece overlooking the endless horizon.",
      image: "/images/coastal-haven.jpg",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bg,
        color: C.text,
        padding: C.sectionPad,
        fontFamily: C.font,
        maxWidth: C.maxW,
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          marginBottom: C.gap,
        }}
      >
        Our Work
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: C.gap,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
              cursor: "pointer",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: C.ease,
                transform: "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: C.surfaceHover,
                padding: C.cardPad,
                color: C.text,
                backdropFilter: "blur(10px)",
                transition: C.ease,
                transform: "translateY(100%)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: C.heroWeight,
                  marginBottom: "8px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: C.textMuted,
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}