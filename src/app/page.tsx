"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

/* ─── DATA ──────────────────────────────────────────────── */

const telegramPerks = [
  { icon: "/images/new5.png", title: "Daily Updates", desc: "Fresh insights and trends shared every day." },
  { icon: "/images/new6.png", title: "Live Drops", desc: "Important updates, opportunities, and resources in real time." },
  { icon: "/images/new7.png", title: "Community Access", desc: "Connect with thousands of active members." },
  { icon: "/images/new8.png", title: "Discussions That Matter", desc: "No spam — only useful conversations and insights." },
];

const topGroups = [
  { rank: 1, name: "Dubai Hustlers", members: 1240, earnings: "$84,200", change: "+38%" },
  { rank: 2, name: "EU Growth Pod", members: 980, earnings: "$61,500", change: "+29%" },
  { rank: 3, name: "Asia Pacific Crew", members: 870, earnings: "$53,100", change: "+24%" },
  { rank: 4, name: "US Content Lab", members: 760, earnings: "$44,800", change: "+19%" },
];

const crazyStories = [
    {
      id: "01",
      handle: "@alex_stream",
      avatar: "AS",
      followers: "1.2M",
      tag: "REVENUE GROWTH",
      metric: "$52,000/mo",
      story: "I joined the Telegram out of curiosity, but I stayed because the updates are actually useful. There’s always something valuable shared every day.",
      color: "#FF4D00"
    },
    {
      id: "02",
      handle: "@mira_tech",
      avatar: "MT",
      followers: "850k",
      tag: "GLOBAL EXPANSION",
      metric: "Vertical Scale",
      story: "I’ve joined a lot of channels before, but this one actually shares useful updates from different regions. You get to see what’s trending globally.",
      color: "#000000"
    },
    {
      id: "03",
      handle: "@jordan_creative",
      avatar: "JC",
      followers: "400k",
      tag: "AUDIENCE RETENTION",
      metric: "+85% Loyalty",
      story: "I wasn’t just looking for another channel, I wanted something active. This one actually feels like a real community.",
      color: "#000000"
    },
    {
      id: "04",
      handle: "@sara_vlogs",
      avatar: "SV",
      followers: "2.1M",
      tag: "CONTENT SYNDICATION",
      metric: "12 Channels",
      story: "I used to jump between different channels, but now I just check this Telegram. Everything important is shared in one place.",
      color: "#FF4D00"
    }
  ];

const testimonialImages = [
  { x: 5, y: 8, rotate: -3, scale: 1.0, zIndex: 3, color: "#FF4D00", initials: "FA", stars: 5, text: "Actually useful updates every day", name: "Fatima A." },

  { x: 22, y: 40, rotate: 2, scale: 0.95, zIndex: 1, color: "#FF6B35", initials: "JK", stars: 5, text: "One of the few channels worth joining", name: "Jordan K." },

  { x: 42, y: 12, rotate: -1, scale: 1.05, zIndex: 4, color: "#FF4D00", initials: "PM", stars: 5, text: "Clean, simple and straight to the point", name: "Priya M." },

  { x: 60, y: 45, rotate: 3, scale: 0.9, zIndex: 2, color: "#E63E00", initials: "SA", stars: 5, text: "No spam, just good content", name: "Sam A." },

  { x: 75, y: 10, rotate: -2, scale: 1.0, zIndex: 5, color: "#FF4D00", initials: "RK", stars: 5, text: "I check this channel daily now", name: "Raj K." },

  { x: 2, y: 62, rotate: 1, scale: 0.92, zIndex: 2, color: "#FF6B35", initials: "ML", stars: 5, text: "Didn’t expect much, but it’s actually good", name: "Maya L." },

  { x: 30, y: 70, rotate: -4, scale: 1.0, zIndex: 3, color: "#FF4D00", initials: "HZ", stars: 5, text: "Always something new being shared", name: "Hassan Z." },

  { x: 55, y: 68, rotate: 2, scale: 0.98, zIndex: 1, color: "#E63E00", initials: "NK", stars: 5, text: "Better than most Telegram groups", name: "Nour K." },

  { x: 80, y: 55, rotate: -1, scale: 1.02, zIndex: 4, color: "#FF4D00", initials: "AC", stars: 5, text: "Joined and stayed for the value", name: "Aisha C." },
];

const stats = [
  { number: "47,200+", label: "Members", icon: "/images/new1.png" },
  { number: "$2.8M+", label: "Value Shared", icon: "/images/new2.png" },
  { number: "500M+", label: "Reach Insights", icon: "/images/new3.png" },
  { number: "3,000+", label: "Active Discussions", icon: "/images/new4.png" },
];

const miniStats = [
  { num: "24/7", label: "Activity" },
  { num: "Instant", label: "Updates" },
  { num: "Global", label: "Community" },
];

const chartData = [
  { month: "Oct", value: 180 },
  { month: "Nov", value: 310 },
  { month: "Dec", value: 420 },
  { month: "Jan", value: 580 },
  { month: "Feb", value: 720 },
  { month: "Mar", value: 940 },
  { month: "Apr", value: 1120 },
];

/* ─── SCROLL REVEAL HOOK ─────────────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}



/* ─── MAIN PAGE ────────────────────────────────────────── */

export default function App() {
  const [memberCount] = useState(47284);
  const [payments] = useState(2841200);
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    bg: "#FFFFFF",
    surface: "#F9F9F9",
    accent: "#FF5F00", 
    textPrimary: "#111111",
    textSecondary: "#666666",
    border: "#EEEEEE",
    success: "#16A34A"
  };

  const maxVal = Math.max(...chartData.map(d => d.value), 1); 

  return (
    <div style={{ background: "#FFFFFF", color: "#0A0A0A", fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,77,0,0.1)",
        padding: "0 2rem", height: "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link href="/" className="font-display font-black text-2xl tracking-tight" style={{ color: 'var(--brand-cream)' }}>
            <img src="/images/logo.png" alt="TNT" width={100} height={100} style={{ borderRadius: '8px',filter:'brightness(0)' }} />
          </Link>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href="#"
            style={{
              background: "#FF4D00", color: "#fff",
              padding: "10px 22px", borderRadius: 50,
              fontWeight: 700, fontSize: "0.85rem",
              textDecoration: "none", transition: "all 0.2s",
              boxShadow: "0 4px 14px rgba(255,77,0,0.3)"
            }}
          >
            Join Telegram →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
          minHeight: "92vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: "9rem 2rem 5rem", 
          position: "relative", 
          overflow: "hidden",
          background: "#FFFFFF"
      }}>
          <div style={{ position: "absolute", top: "10%", left: "-100px", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,77,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "5%", right: "-80px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,77,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,77,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

          <div style={{ 
              position: "relative", 
              zIndex: 2, 
              maxWidth: 1200, 
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center"
          }}>
              <Reveal>
                  <div style={{ textAlign: "left" }}>
                      <div style={{
                          display: "inline-flex", alignItems: "center", gap: "0.5rem",
                          background: "rgba(255,77,0,0.08)", border: "1px solid rgba(255,77,0,0.2)",
                          borderRadius: 50, padding: "8px 20px", marginBottom: "1.5rem"
                      }}>
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF4D00", display: "inline-block" }} />
                          <span style={{ color: "#FF4D00", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                              47,000+ members inside
                          </span>
                      </div>

                      <h1 style={{
                          fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 900,
                          lineHeight: 1.1, color: "#0A0A0A", marginBottom: "1.5rem"
                      }}>
                          Join the Private 
                          <span style={{
                              color: "#FF4D00",
                              background: "linear-gradient(135deg, #FF4D00, #FF6B35)",
                              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                          }}> Telegram </span>
                          Everyone’s <br/>Talking About
                      </h1>

                      <p style={{
                          maxWidth: 500, marginBottom: "2.5rem",
                          fontSize: "1.15rem", color: "#555", lineHeight: 1.7, fontWeight: 400
                      }}>
                          Get access to real-time insights, trending opportunities, and valuable drops shared daily. No noise — only what matters.
                      </p>

                      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                          
                          
                          <a
                              href="#"
                              style={{
                                  background: "#FF4D00", color: "#fff", padding: "18px 36px",
                                  borderRadius: 50, fontWeight: 700, fontSize: "1.05rem",
                                  textDecoration: "none", boxShadow: "0 8px 32px rgba(255,77,0,0.3)",
                                  display: "inline-block"
                              }}
                          >
                              Join Telegram →
                          </a>
                          <a
                              href="#telegram"
                              style={{
                                  background: "#fff", color: "#0A0A0A", padding: "18px 36px",
                                  borderRadius: 50, fontWeight: 700, fontSize: "1.05rem",
                                  textDecoration: "none", border: "2px solid #e5e5e5"
                              }}
                          >
                               See What’s Inside →
                          </a>
                      </div>
                  </div>
              </Reveal>

              {/* RIGHT SIDE: Stats Grid */}
              <Reveal delay={200}>
                  <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "1fr 1fr", 
                      gap: "1.5rem",
                      background: "rgb(255 77 0 / 17%)",
                      padding: "2rem",
                      borderRadius: "24px",
                      border: "1px solid #f0f0f0",
                      backdropFilter: "blur(10px)"
                  }}>
                      {stats.map((s) => (
                          <div key={s.label} style={{ 
                              textAlign: "left", 
                              padding: "1.5rem", 
                              background: "#fff", 
                              borderRadius: "16px",
                              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                              border: "1px solid #f5f5f5"
                          }}>
                              <div style={{ marginBottom: "0.75rem" }}>
                                  <img 
                                      src={s.icon} 
                                      alt='TNT' 
                                      width={24} 
                                      height={24} 
                                      style={{ filter: "grayscale(1) opacity(0.8)" }} 
                                  />
                              </div>
                              <div style={{ fontWeight: 900, fontSize: "1.8rem", color: "#1a1a1a", letterSpacing: "-1px" }}>
                                  {s.number}
                              </div>
                              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                  {s.label}
                              </div>
                          </div>
                      ))}
                  </div>
              </Reveal>
          </div>
      </section>

      {/* ── TELEGRAM ── */}
      <section id="telegram" style={{ padding: "8rem 1.5rem", background: "#F8F9FA", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem", alignItems: "stretch" }}>
            <Reveal>
              <div style={{ background: "#0A0A0A", borderRadius: 32, padding: "3.5rem 2.5rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20%", right: "-20%", width: "300px", height: "300px", background: "rgba(255,77,0,0.15)", filter: "blur(80px)", borderRadius: "50%" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{ color: "#FF4D00", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase" }}>The Inner Circle</span>
                  <h2 style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: 900, marginTop: "1rem", lineHeight: 1.1 }}>
                    Inside the Telegram
                  </h2>
                  <p style={{ color: "#AAA", fontSize: "1.1rem", margin: "1.5rem 0 2.5rem", lineHeight: 1.6 }}>
                    This is where people stay ahead — with real-time updates, shared insights, and opportunities you won’t find publicly.
                  </p>
                  <a href="#" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem",
                    background: "#FF4D00", color: "#fff", padding: "20px", borderRadius: '50px',
                    fontWeight: 500, textDecoration: "none", transition: "transform 0.2s"
                  }}>
                    Join Our Telegram
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                  </a>
                  
                </div>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {telegramPerks.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <div style={{
                    background: "#ffffff", borderRadius: 24, padding: "2rem",
                    height: "100%", border: "1px solid #EEE", transition: "all 0.3s"
                  }} className="hover:bg-white hover:shadow-xl hover:border-orange-100">
                    <div style={{ 
                      width: 50, height: 50, background: "#fff", borderRadius: 12, 
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: "1.5rem" 
                    }}>
                      <img src={p.icon} alt='icon' width={24} height={24} />
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                    <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section style={{ padding: "8rem 2rem", background: colors.bg, color: colors.textPrimary }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <span style={{ color: colors.accent, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "2px" }}>SYSTEM PERFORMANCE</span>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: 900, margin: "0.5rem 0" }}>
              What’s Being Shared Daily
            </h2>
            <p style={{ color: "#666", fontSize: "1rem" }}>Inside the Telegram, members exchange real value — from insights to opportunities.</p>
          </div>

          <div style={{ width: "100%", background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: "32px", padding: "3.5rem", marginBottom: "2rem", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
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

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "15px", height: "300px", width: "100%" }}>
              {chartData.map((d, i) => (
                <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "15px" }}>
                  <div style={{ 
                    height: `${(d.value / maxVal) * 100}%`, width: "100%", background: i === chartData.length - 1 ? colors.accent : "#F0F0F0",
                    borderRadius: "8px", transition: "all 0.3s ease" 
                  }} />
                  <span style={{ textAlign: "center", fontSize: "0.75rem", color: "#999", fontWeight: 600, textTransform: "uppercase" }}>{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
          background: colors.surface, 
          borderRadius: "32px", 
          border: `1px solid ${colors.border}`,
          padding: "3.5rem" 
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Top Performing Networks</h3>
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

      {/* ── STORIES ── */}
      <section style={{ padding: "8rem 1.5rem", background: "#F8F9FA", color: "#0A0A0A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <span style={{ color: "#FF4D00", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "2px" }}>CASE STUDIES</span>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)", fontWeight: 900, margin: "1rem 0" }}>
              The proof is in the <span style={{ color: "#FF4D00" }}>results</span>
            </h2>
            {/* <p style={{ color: "#666", fontSize: "1rem" }}>Join 15,000+ top-tier creators scaling with our engine.</p> */}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "2.5rem" }}>
            {crazyStories.map((s, i) => (
              <div key={i} style={{
                background: "#FFF", border: "1px solid #EAEAEA", borderRadius: "32px", padding: "2.5rem",
                display: "flex", flexDirection: "column", minHeight: "400px", justifyContent: "space-between"
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                    <div style={{ width: 50, height: 50, borderRadius: "12px", background: "rgba(255,125,0,0.1)", color: "#FF4D00", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{s.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{s.handle}</div>
                      <div style={{ fontSize: "0.8rem", color: "#888" }}>{s.followers} Followers</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#333", fontStyle: "italic" }}>"{s.story}"</p>
                </div>
                <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#999", textTransform: "uppercase" }}>{s.tag}</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: s.color }}>{s.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "7rem 1.5rem", background: "#FFFFFF", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ color: "#FF4D00", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Social Proof</p>
              <h2 style={{ fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 3rem)", color: "#0A0A0A", marginBottom:"1rem" }}>
                3,000+ Messages<br />
                <span style={{ color: "#FF4D00" }}>& Reviews</span>
              </h2>
              <p style={{ color: "#666", fontSize: "1rem" }}>Real conversations. Real people. Active every day.</p>
            </div>
          </Reveal>

          <div style={{ position: "relative", height: 500, marginBottom: "2rem" }}>
            {testimonialImages.map((t, i) => (
              <div
                key={i}
                style={{
                  position: "absolute", left: `${t.x}%`, top: `${t.y}%`,
                  transform: `rotate(${t.rotate}deg) scale(${t.scale})`,
                  zIndex: t.zIndex,
                  background: "#fff", border: "2px solid #F0F0F0", borderRadius: 16, padding: "1rem", width: 190,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
                }}
              >
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: t.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.8rem" }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.7rem" }}>{t.name}</div>
                    <div style={{ color: "#FF4D00", fontSize: "0.6rem" }}>{"★".repeat(t.stars)}</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", fontWeight: 600 }}>"{t.text}"</p>
              </div>
            ))}
          </div>

          <Reveal>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <span style={{
                display: "inline-block",
                background: "rgba(255,77,0,0.08)", border: "1px solid rgba(255,77,0,0.2)",
                borderRadius: 50, padding: "10px 24px",
                color: "#FF4D00", fontWeight: 700, fontSize: "0.88rem"
              }}>
                🔥 New reviews coming in every hour
              </span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── COUNTERS ── */}
      <section style={{ padding: "8rem 1.5rem", background: '#F8F9FA' }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ color: colors.accent, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Real-Time Metrics</span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 3rem)", marginTop: "1rem" }}>The Community Keeps Growing</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginBottom: "5rem" }}>
            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, borderRadius: 32, padding: "4rem 2rem", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
              <div className="flex items-center justify-center mb-6">
                <img src="/images/new1.png" alt="Icon" className="w-12 h-12 opacity-90" />
              </div>
              <div style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 3rem)", color: colors.textPrimary }}>{memberCount.toLocaleString()}</div>
              <p style={{ color: colors.textSecondary, fontSize: "0.9rem", fontWeight: 700, marginTop: "1rem", textTransform: "uppercase" }}>Members</p>
            </div>
            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, borderRadius: 32, padding: "4rem 2rem", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.03)" }}>
              <div className="flex items-center justify-center mb-6">
                <img src="/images/new2.png" alt="Icon" className="w-12 h-12 opacity-90" />
              </div>
              <div style={{ fontWeight: 700, fontSize: "clamp(3rem, 6vw, 3rem)", color: colors.textPrimary }}>Constant</div>
              <p style={{ color: colors.textSecondary, fontSize: "0.9rem", fontWeight: 700, marginTop: "1rem", textTransform: "uppercase" }}>Daily Activity</p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", padding: "2rem", background: '#fff', borderRadius: "24px", border: `1px solid ${colors.border}` }}>
            {miniStats.map((item, i) => (
              <div key={item.label} style={{ textAlign: "center", flex: "1 1 200px" }}>
                <p style={{ fontWeight: 800, fontSize: "1.8rem", margin: 0 }}>{item.num}</p>
                <p style={{ color: colors.textSecondary, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", marginTop: "0.4rem" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "8rem 1.5rem", background: colors.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: colors.surface, borderRadius: "40px", border: `1px solid ${colors.border}`, padding: "4.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4rem", overflow: "hidden", position: "relative", flexWrap: "wrap" }}>
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
          <div style={{ flex: "2 1 500px" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 3rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Ready to Join?
            </h2>
            <p style={{ color: colors.textSecondary, fontSize: "1.1rem", maxWidth: "500px", lineHeight: 1.6 }}>
              Get instant access to the Telegram channel and see what everyone is talking about.
            </p>
          </div>
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <a
              href="#"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                background: isHovered ? "#E65600" : colors.accent, color: "#fff", padding: "20px 48px", borderRadius: "50px", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none", transition: "all 0.3s",
                boxShadow: isHovered ? "0 15px 30px rgba(255, 95, 0, 0.25)" : "0 8px 15px rgba(255, 95, 0, 0.1)",
              }}
            >
              Join Telegram Now →
            </a>
            {/* <span style={{ fontSize: "0.8rem", color: "#999", fontWeight: 600 }}>No credit card required</span> */}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/images/logo.png" alt="TNT" width={80} style={{ filter: 'grayscale(1) brightness(0.2)' }} />
          
          <div className="flex items-center gap-5">
            {[
              { name: 'TikTok', href: '#', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.27 8.27 0 0 0 4.83 1.54V7.1a4.85 4.85 0 0 1-1.06-.41z' },
              { name: 'Instagram', href: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
              { name: 'YouTube', href: '#', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              { name: 'Twitter', href: '#', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map(s => (
              <a key={s.name} href={s.href} aria-label={s.name}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{  background: 'linear-gradient(135deg, #171717 0%, #000000 100%)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d={s.path} fill="rgb(255, 255, 255)" />
                </svg>
              </a>
            ))}
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2025 TNT. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
}
