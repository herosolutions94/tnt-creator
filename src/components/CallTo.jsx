import React, { useState } from 'react';

const CallTo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    bg: "#FFFFFF",
    accent: "#FF5F00", // International Orange
    textPrimary: "#111111",
    textSecondary: "#666666",
    border: "#EEEEEE"
  };

  return (
    <section style={{
      padding: "8rem 1.5rem",
      background: colors.bg,
      position: "relative"
    }}>
      <div style={{ 
        maxWidth: 1100, 
        margin: "0 auto",
        background: colors.surface,
        borderRadius: "40px",
        border: `1px solid ${colors.border}`,
        padding: "4rem 5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
        overflow: "hidden",
        position: "relative"
      }}>
        
        {/* Decorative background element */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "rgba(255, 94, 0, 0.07)",
          filter: "blur(60px)",
          borderRadius: "50%",
          pointerEvents: "none"
        }} />

        {/* LEFT SIDE: Content */}
        <div style={{ flex: 2, textAlign: "left", position: "relative", zIndex: 1 }}>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px",
            background: "#fff",
            padding: "6px 14px",
            borderRadius: "100px",
            border: `1px solid ${colors.border}`,
            marginBottom: "1.5rem"
          }}>
            <span style={{ width: 6, height: 6, background: colors.accent, borderRadius: "50%" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 800, color: colors.textPrimary, textTransform: "uppercase", letterSpacing: "1px" }}>
              Limited Spots Open
            </span>
          </div>

          <h2 style={{
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 3rem)",
            color: colors.textPrimary,
            lineHeight: 1.1,
            marginBottom: "1.5rem"
          }}>
            Ready to get paid <br /> 
            <span style={{ color: colors.accent }}>for your content?</span>
          </h2>

          <p style={{ 
            color: colors.textSecondary, 
            fontSize: "1.1rem", 
            maxWidth: "500px", 
            margin: 0, 
            lineHeight: 1.6 
          }}>
            Join 47,000+ creators earning today. Get approved in under 24 hours.
          </p>
        </div>

        {/* RIGHT SIDE: Action */}
        <div style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "1rem",
          position: "relative",
          zIndex: 1 
        }}>
          <a
            href="become-creator"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              background: isHovered ? "#E65600" : colors.accent,
              color: "#fff",
              padding: "20px 48px",
              borderRadius: "14px",
              fontWeight: 500,
              fontSize: "1.05rem",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.2, 0, 0, 1)",
              transform: isHovered ? "translateY(-3px)" : "translateY(0)",
              boxShadow: isHovered 
                ? "0 15px 30px rgba(255, 95, 0, 0.25)" 
                : "0 8px 15px rgba(255, 95, 0, 0.1)",
            }}
          >
            Become a Creator →
          </a>
          <span style={{ fontSize: "0.8rem", color: "#999", fontWeight: 600 }}>
            No credit card required
          </span>
        </div>

      </div>

      
    </section>
  );
};

export default CallTo;