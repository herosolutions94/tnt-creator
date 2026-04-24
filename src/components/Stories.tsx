import React from 'react';

const Stories = () => {
  const crazyStories = [
    {
      id: "01",
      handle: "@alex_stream",
      avatar: "AS",
      followers: "1.2M",
      tag: "REVENUE GROWTH",
      metric: "$52,000/mo",
      story: "I was working two jobs and streaming to 5 people. Within 3 months of using the platform's distribution tools, I hit my first five-figure month. The data-driven insights allowed me to quit my day job entirely.",
      color: "#FF4D00"
    },
    {
      id: "02",
      handle: "@mira_tech",
      avatar: "MT",
      followers: "850k",
      tag: "GLOBAL EXPANSION",
      metric: "Vertical Scale",
      story: "Most platforms box you into one region. We managed to break into the Asian market overnight by leveraging localized engagement metrics. Our growth curve went from flat to vertical in 48 hours.",
      color: "#000000"
    },
    {
      id: "03",
      handle: "@jordan_creative",
      avatar: "JC",
      followers: "400k",
      tag: "AUDIENCE RETENTION",
      metric: "+85% Loyalty",
      story: "We weren't just looking for more views; we wanted a community. The built-in CRM tools allowed us to segment our top 1% of fans and double our recurring monthly revenue through private access.",
      color: "#000000"
    },
    {
      id: "04",
      handle: "@sara_vlogs",
      avatar: "SV",
      followers: "2.1M",
      tag: "CONTENT SYNDICATION",
      metric: "12 Channels",
      story: "Managing 12 different social channels was killing my creativity. The auto-optimization engine handles the distribution while I focus on the camera. My output has doubled with half the effort.",
      color: "#FF4D00"
    }
  ];

  return (
    <section style={{ padding: "8rem 1.5rem", background: "#F8F9FA", color: "#0A0A0A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header Area */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
          <div>
            <span style={{ color: "#FF4D00", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "2px" }}>CASE STUDIES</span>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: 900, lineHeight: 1, margin: "1rem 0 1rem 0" }}>
              The proof is in the <span style={{ color: "#FF4D00" }}>results</span>
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", fontWeight: 500 }}>Join 15,000+ top-tier creators scaling with our engine.</p>
          </div>
        </div>

        {/* 2 in 1 Row Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(45%, 1fr))", 
          gap: "2.5rem" 
        }}>
          {crazyStories.map((s, i) => (
            <div key={i} style={{
              background: "#FFF",
              border: "1px solid #EAEAEA",
              borderRadius: "32px",
              padding: "3rem",
              position: "relative",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "400px",
              overflow: "hidden"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.borderColor = "#FF4D00";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(255,77,0,0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#EAEAEA";
              e.currentTarget.style.boxShadow = "none";
            }}>
              
              {/* Background ID Watermark */}
              <div style={{ 
                position: "absolute", top: "1.5rem", right: "2rem", 
                fontSize: "5rem", fontWeight: 500, color: "rgba(0,0,0,0.03)",
                zIndex: 0, pointerEvents: "none"
              }}>
                {s.id}
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header: Profile */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                  <div style={{ 
                    width: "50px", height: "50px", borderRadius: "16px", 
                    background: s.color === "#000000" ? "#F5F5F5" : "rgba(255,77,0,0.1)", 
                    color: s.color, display: "flex", alignItems: "center", 
                    justifyContent: "center", fontWeight: 800, fontSize: "1.1rem" 
                  }}>
                    {s.avatar}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 500, fontSize: "1.1rem" }}>{s.handle}</h4>
                    <span style={{ fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>{s.followers} Followers</span>
                  </div>
                </div>

                {/* Body: Story */}
                <p style={{ 
                  fontSize: "1.1rem", 
                  lineHeight: 1.6, 
                  color: "#333", 
                  marginBottom: "2rem",
                  fontWeight: 500
                }}>
                  "{s.story}"
                </p>
              </div>

              {/* Footer: Metric Badge */}
              <div style={{ 
                position: "relative", zIndex: 1,
                borderTop: "1px solid #F5F5F5", 
                paddingTop: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <p style={{ margin: 0, fontSize: "0.7rem", fontWeight: 500, color: "#AAA", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {s.tag}
                  </p>
                  <p style={{ margin: 0, fontSize: "1.4rem", fontWeight: 600, color: s.color }}>
                    {s.metric}
                  </p>
                </div>
                <div style={{ 
                  width: "40px", height: "40px", borderRadius: "50%", 
                  border: "1px solid #EEE", display: "flex", 
                  alignItems: "center", justifyContent: "center", color: "#AAA"
                }}>
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default Stories;