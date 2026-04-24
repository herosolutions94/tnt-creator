import React from 'react';

const Stats = () => {
  const chartData = [
    { month: "Jan", value: 32 }, { month: "Feb", value: 45 },
    { month: "Mar", value: 38 }, { month: "Apr", value: 65 },
    { month: "May", value: 82 }, { month: "Jun", value: 120 },
    { month: "Jul", value: 95 }, { month: "Aug", value: 140 }
  ];

  const topGroups = [
    { rank: "01", name: "Nebula Stream", members: "2.4k", earnings: "$42,000", change: "+24%" },
    { rank: "02", name: "Titan Gaming", members: "1.8k", earnings: "$38,500", change: "+12%" },
    { rank: "03", name: "Solaris Hub", members: "3.1k", earnings: "$31,200", change: "+18%" },
    { rank: "04", name: "Quantum Lab", members: "1.1k", earnings: "$29,000", change: "+08%" }
  ];

  const maxVal = Math.max(...chartData.map(d => d.value));

  const colors = {
    bg: "#FFFFFF",
    surface: "#F9F9F9",
    accent: "#FF5F00", 
    textPrimary: "#111111",
    textSecondary: "#666666",
    border: "#EEEEEE",
    success: "#16A34A"
  };

  return (
    <section style={{ 
      padding: "8rem 2rem", 
      background: colors.bg, 
      color: colors.textPrimary, 
      fontFamily: "Inter, sans-serif" 
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: "2rem" }}>
          <span style={{ color: colors.accent, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "2px" }}>
            SYSTEM PERFORMANCE
          </span>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: 900, margin: "0.5rem 0", }}>
            Massive scale. <span style={{ color: "#E0E0E0" }}>Measured.</span>
          </h2>
        </div>

        {/* CHART SECTION */}
        <div style={{ 
          width: "100%", 
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          borderRadius: "32px",
          padding: "3.5rem",
          marginBottom: "2rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
          boxSizing: "border-box"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4rem" }}>
            <div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Revenue Growth</h3>
              <p style={{ color: colors.textSecondary }}>Monthly platform distribution</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, color: colors.accent }}>$2.4M</div>
              <div style={{ color: colors.success, fontSize: "0.85rem", fontWeight: 700 }}>↑ 124% YOY</div>
            </div>
          </div>

          {/* THE GRAPH BARS */}
          <div style={{ 
            display: "flex", 
            alignItems: "flex-end", 
            justifyContent: "space-between",
            gap: "15px", 
            height: "300px", // Fixed height for the container
            width: "100%"
          }}>
            {chartData.map((d, i) => (
              <div key={i} style={{ 
                flex: 1, 
                height: "100%", // Wrapper takes full container height
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "flex-end", // Push bar to bottom
                gap: "15px" 
              }}>
                <div style={{ 
                  height: `${(d.value / maxVal) * 100}%`, // Calculate height %
                  width: "100%", // IMPORTANT: Ensure width is not 0
                  background: i === chartData.length - 1 ? colors.accent : "#F0F0F0",
                  borderRadius: "8px",
                  transition: "all 0.3s ease"
                }} />
                <span style={{ 
                  textAlign: "center", 
                  fontSize: "0.75rem", 
                  color: "#999", 
                  fontWeight: 600,
                  textTransform: "uppercase" 
                }}>
                  {d.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LEADERBOARD */}
        <div style={{ 
          background: colors.surface, 
          borderRadius: "32px", 
          border: `1px solid ${colors.border}`,
          padding: "3.5rem" 
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Top Networks</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: 8, height: 8, background: colors.accent, borderRadius: "50%" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: colors.textSecondary }}>LIVE NOW</span>
            </div>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
            gap: "1.5rem" 
          }}>
            {topGroups.map((g, i) => (
              <div key={i} style={{ 
                padding: "2rem", 
                background: colors.bg, 
                borderRadius: "20px", 
                border: `1px solid ${colors.border}`
              }}>
                <div style={{ color: colors.accent, fontWeight: 500, fontSize: "1.1rem", marginBottom: "1rem" }}>{g.rank}</div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 500 }}>{g.name}</div>
                  <div style={{ fontSize: "0.85rem", color: colors.textSecondary }}>{g.members} members</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div style={{ fontSize: "1.25rem", fontWeight: 500 }}>{g.earnings}</div>
                  <div style={{ color: colors.success, fontSize: "0.8rem", fontWeight: 700 }}>{g.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;