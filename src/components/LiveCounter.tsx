import React from 'react';

// Note: Ensure <Reveal> component is imported from your animation library (e.g., Framer Motion)
// If not using a library, you can replace <Reveal> with <div>

const LiveCounters = ({ memberCount = 12450, payments = 12400000 }) => {
  const colors = {
    bg: "#F8F9FA",
    surface: "#ffffff",
    accent: "#FF5F00", // Vibrant Orange
    textPrimary: "#111111",
    textSecondary: "#666666",
    border: "#EEEEEE",
    success: "#22C55E"
  };

  const miniStats = [
    { num: "500M+", label: "Total Views" },
    { num: "$20K", label: "Top Monthly Earn" },
    { num: "90 Days", label: "Avg to 100K" }
  ];

  return (
    <section style={{ 
      padding: "8rem 1.5rem", 
      background: colors.bg, 
      fontFamily: "Inter, sans-serif" 
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ 
            color: colors.accent, 
            fontWeight: 800, 
            fontSize: "0.85rem", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase" 
          }}>
            Real-Time Metrics
          </span>
          <h2 style={{ 
            fontWeight: 900, 
            fontSize: "clamp(2.5rem, 6vw, 3rem)", 
            color: colors.textPrimary, 
            marginTop: "1rem" 
          }}>
            The numbers don't lie
          </h2>
        </div>

        {/* Main Counter Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "2.5rem",
          marginBottom: "5rem"
        }}>
          
          {/* Card 1: Members */}
          <div style={{
            background: colors.surface, 
            border: `1px solid ${colors.border}`,
            borderRadius: 32, 
            padding: "4rem 2rem",
            textAlign: "center",
            boxShadow: "0 15px 35px rgba(0,0,0,0.03)",
            position: "relative",
            overflow: "hidden"
          }}>
            
            <div className="flex items-center justify-center mb-6">
              <img src="/images/new1.png" alt="Icon" className="w-12 h-12 opacity-90" />
            </div>
            <p style={{
              fontWeight: 900, 
              fontSize: "clamp(2.5rem, 6vw, 3rem)",
              color: colors.textPrimary, 
              letterSpacing: "-0.05em", 
              lineHeight: 1,
              margin: 0
            }}>
              {memberCount.toLocaleString()}
            </p>
            <p style={{ 
              color: colors.textSecondary, 
              fontSize: "0.9rem", 
              fontWeight: 600, 
              marginTop: "1rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em" 
            }}>
              Active Network Members
            </p>
            
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.6rem", 
              marginTop: "2rem",
              padding: "0.5rem 1.2rem",
              background: "#F0FDF4",
              borderRadius: "50px"
            }}>
              <span style={{ 
                width: 8, 
                height: 8, 
                borderRadius: "50%", 
                background: colors.success,
              }} />
              <span style={{ color: colors.success, fontSize: "0.8rem", fontWeight: 700 }}>LIVE GROWTH</span>
            </div>
          </div>

          
          <div style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: 32, 
            padding: "4rem 2rem",
            textAlign: "center",
            boxShadow: "0 15px 35px rgba(0,0,0,0.03)",
            position: "relative"
          }}>
            
            <div className="flex items-center justify-center mb-6">
              <img src="/images/new2.png" alt="Icon" className="w-12 h-12 opacity-90" />
            </div>
            <p style={{
              fontWeight: 900, 
              fontSize: "clamp(3rem, 6vw, 3rem)",
              color: colors.textPrimary, 
              letterSpacing: "-0.05em", 
              lineHeight: 1,
              margin: 0
            }}>
              ${(payments / 1000000).toFixed(1)}M+
            </p>
            <p style={{ 
              color: colors.textSecondary, 
              fontSize: "0.9rem", 
              fontWeight: 600, 
              marginTop: "1rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em" 
            }}>
              Total Creator Payouts
            </p>
            
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.6rem", 
              marginTop: "2rem",
              padding: "0.5rem 1.2rem",
              background: "rgba(255, 95, 0, 0.08)",
              borderRadius: "50px"
            }}>
              <span style={{ color: colors.accent, fontSize: "0.8rem", fontWeight: 700 }}>PAID OUT DAILY</span>
            </div>
          </div>
        </div>

        {/* Horizontal Mini Stats */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "2rem", 
          flexWrap: "wrap",
          padding: "2rem",
          background: colors.surface,
          borderRadius: "24px",
          border: `1px solid ${colors.border}`
        }}>
          {miniStats.map((item, i) => (
            <React.Fragment key={item.label}>
              <div style={{ textAlign: "center", flex: "1 1 200px" }}>
                <p style={{ 
                  fontWeight: 800, 
                  fontSize: "1.8rem", 
                  color: colors.textPrimary, 
                  letterSpacing: "-1px",
                  margin: 0 
                }}>
                  {item.num}
                </p>
                <p style={{ 
                  color: colors.textSecondary, 
                  fontSize: "0.75rem", 
                  fontWeight: 700, 
                  textTransform: "uppercase", 
                  letterSpacing: "0.08em", 
                  marginTop: "0.4rem" 
                }}>
                  {item.label}
                </p>
              </div>
              {i < miniStats.length - 1 && (
                <div style={{ width: "1px", background: colors.border, height: "40px", alignSelf: "center" }} className="hide-mobile" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
      
      {/* Basic Pulse Animation Styling */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </section>
  );
};

export default LiveCounters;