import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import NavbarLight from '@/components/NavbarLight'

/* ─── DATA ──────────────────────────────────────────────── */

const jobPerks = [
  { icon: '/images/icon1.png', title: 'Post Daily on TikTok & Instagram', desc: 'Create content on a company account — our team gives you proven viral ideas every week.' },
  { icon: '/images/icon2.png', title: 'Learn from Real Influencers', desc: 'Work with our marketing team of creators and founders to master startup content.' },
  { icon: '/images/icon3.png', title: 'Earn $20–$2,000 Per Video', desc: 'Base pay of $20 per video plus performance bonuses. Our top creator earned $20k in one month.' },
]

const interns = [
  { img: '/images/img1.jpg', name:'Aysha', outcome: 'Landed her dream marketing role at a Series B startup in Dubai.', tag: 'Full-time Hire', color: '#10B981' },
  { img: '/images/img2.jpg', name:'Mubashra', outcome: 'Earned $18,000 in a single month from performance bonuses.', tag: '$18K Month', color: '#059669' },
  { img: '/images/img3.jpg', name:'Johen', outcome: 'Grew from 0 content experience to 400K followers in 90 days.', tag: '400K Followers', color: '#34D399' },
]

const whyItems = [
  { emoji: '/images/icon4.png', title: 'Real Experience', desc: 'Marketing internship at a high-growth, venture-backed company — not just busy work.' },
  { emoji: '/images/icon5.png', title: 'High Pay', desc: '$20 base per video + significant performance bonuses. Uncapped earning potential.' },
  { emoji: '/images/icon6.png', title: 'Proven Viral Formats', desc: 'Our creators have driven 500M+ views. We teach you exactly how to replicate that.' },
  { emoji: '/images/icon7.png', title: 'Content Coaching', desc: 'Free coaching from influencers with millions of followers across TikTok & YouTube.' },
  { emoji: '/images/icon8.png', title: 'Community', desc: 'IRL events, global Slack community, and connections with hundreds of TNT creators.' },
  { emoji: '/images/icon9.png', title: 'Startup Access', desc: 'Work directly with founders. Get a front-row seat to how a VC-backed company scales.' },
]

const productPoints = [
  { n: '01', title: 'AI-Powered Learning', body: 'Our platform uses AI to personalise study plans, surface the right content, and help students learn 3× faster than traditional methods.' },
  { n: '02', title: 'Bite-Size Video Lessons', body: 'Complex topics broken into 60-second TikTok-style clips that are actually fun to watch — made by real educators.' },
  { n: '03', title: 'Live Progress Tracking', body: 'Students, parents, and tutors see real-time performance data so everyone knows exactly what needs work.' },
  { n: '04', title: 'Exam-Ready in Weeks', body: 'Structured roadmaps that take students from confused to confident before their next big test.' },
]

const coaches = [
  { name: 'Eric', followers: '600K', platform: 'TikTok' },
  { name: 'Eileen', followers: '130K', platform: 'YouTube' },
  { name: 'Nick', followers: '250K', platform: 'TikTok' },
  { name: 'Andrew', followers: '5M', platform: 'Instagram' },
  { name: 'Hershy', followers: '200K', platform: 'TikTok' },
  { name: 'Sam', followers: '600K', platform: 'YouTube' },
  { name: 'Adriel', followers: '500K', platform: 'TikTok' },
  { name: 'Rudy', followers: 'CEO', platform: 'Founder' },
]

const videos = [
  { title: '"I used AI to ace my finals"', views: '2.4M views', tag: 'Study tips' , videoUrl:'/images/vid1.mp4'},
  { title: '"This app replaced my tutor"', views: '890K views', tag: 'Product demo' , videoUrl:'/images/vid2.mp4'},
  { title: '"How I went from D to A in 3 weeks"', views: '1.7M views', tag: 'Story' , videoUrl:'/images/vid3.mp4'},
  { title: '"AI homework hack every student needs"', views: '3.1M views', tag: 'Viral' , videoUrl:'/images/vid4.mp4'},
]

const referrals = [
  { name: 'Fatima A.', text: 'I had zero content experience. TNT gave me the system and coaching to hit 300K followers in 60 days. The pay is real - do not sleep on this.', stars: 5 },
  { name: 'Jordan K.', text: 'Made $12K in my second month. The viral format library alone is worth 10x what other programs charge.', stars: 5 },
  { name: 'Priya M.', text: 'Working directly with the founders was something I never expected. Got a full-time offer after 3 months.', stars: 5 },
]

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarLight />

      {/* ── HERO (Light Mode Animated) ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 overflow-hidden min-h-screen bg-white">
        
        {/* Animated Background Orbs (Green/Teal Palette) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 animate-blob"
            style={{ background: '#10B981' }} />
          <div className="absolute bottom-1/4 -right-10 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.07] animate-blob animation-delay-2000"
            style={{ background: '#34D399' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.05] animate-blob animation-delay-4000"
            style={{ background: '#0D9488' }} />

          {/* Light Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: `linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(16,185,129,0.1)', color: '#059669', border: '1px solid rgba(16,185,129,0.2)' }}>
              Hiring Marketing Interns
            </span>

            <h1 className="font-display font-black leading-tight mb-6 text-slate-900"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}>
              Get Paid to<br />
              <span className="text-emerald-500 animate-pulse">Go Viral.</span>
            </h1>

            <p className="max-w-xl mx-auto text-lg mb-10 text-slate-600 font-medium leading-relaxed">
              Join the TNT Creator Program. Post once a day, earn up to{' '}
              <span className="text-emerald-600 font-bold">$2,000 per video</span>, and learn virality from influencers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply"
                className="px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)]"
                style={{ background: '#10B981', color: '#fff' }}>
                Apply Today →
              </Link>
              <a href="#the-job"
                className="px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-slate-50"
                style={{ background: '#fff', color: '#1e293b', border: '1px solid #e2e8f0' }}>
                Learn More
              </a>
            </div>

            {/* Stats Bar (Light Version) */}
            <div className="flex flex-wrap justify-center gap-12 mt-24 pt-10"
              style={{ borderTop: '1px solid #f1f5f9' }}>
              {[['500M+', 'Views Generated'], ['$20K', 'Top Monthly Earn'], ['300+', 'Active Creators']].map(([num, label]) => (
                <div key={label} className="text-center group">
                  <p className="font-display font-black text-4xl mb-1 text-emerald-600 transition-transform group-hover:-translate-y-1">{num}</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TICKER (Green) ── */}
      <div className="py-4 overflow-hidden" style={{ background: '#10B981' }}>
        <div className="ticker-wrapper">
          <div className="ticker-inner">
            {Array(8).fill('TNT CREATOR PROGRAM · GET PAID · GO VIRAL · LEARN FROM INFLUENCERS · ').join('').split('·').map((t, i) => (
              <span key={i} className="font-display font-bold text-sm tracking-widest uppercase px-6 text-white">
                {t.trim()} {i % 4 !== 3 && <span className="mx-3 opacity-50">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE JOB (White/Green) ── */}
      <section id="the-job" className="py-28 px-6 md:px-16 max-w-7xl mx-auto bg-white">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-emerald-600">The Opportunity</p>
          <h2 className="font-display font-black text-5xl md:text-6xl mb-16 text-slate-900">
            The Job
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {jobPerks.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 150}>
              <div className="rounded-3xl p-8 h-full transition-all hover:shadow-xl border border-slate-100 bg-slate-100/100">
                <span className="mb-6 block bg-emerald-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <img src={p.icon} alt='TNT' width={32} height={32} />
                </span>
                <h3 className="font-display font-bold text-xl mb-3 text-slate-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── OUR INTERNS (Portrait Grid Overlay) ── */}
      <section id="interns" className="py-28 px-6 md:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-emerald-600">Real Results</p>
            <h2 className="font-display font-black text-5xl md:text-6xl mb-4 text-slate-900">
              Our Interns
            </h2>
            <p className="text-lg mb-16 max-w-xl text-slate-500 font-medium">
              Join the ranks of creators who have mastered the algorithm.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {interns.map((intern, i) => (
              <ScrollReveal key={intern.name} delay={i * 150}>
                <div className="relative overflow-hidden rounded-3xl h-[600px] group shadow-lg border border-slate-200">
                  <img 
                    src={intern.img} 
                    alt={intern.name} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient (Keep dark for text legibility) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold self-start"
                      style={{ background: intern.color, color: '#fff' }}>
                      {intern.tag}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-white">Meet {intern.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-200 line-clamp-3">{intern.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TNT (Clean Cards) ── */}
      <section id="why-tnt" className="py-28 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-emerald-600">Perks</p>
            <h2 className="font-display font-black text-5xl md:text-6xl mb-16 text-slate-900">
              Why TNT?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex gap-5 rounded-2xl p-6 h-full border border-slate-100 bg-slate-100/100 hover:border-emerald-200 transition-colors">
                  <span className="shrink-0"><img src={item.emoji} alt={item.title} width={32} height={32} /></span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLE VIDEOS (Vertical Grid) ── */}
      <section id="videos" className="py-28 px-6 md:px-16 bg-emerald-50/60">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-emerald-600">Proof of Work</p>
            <h2 className="font-display font-black text-5xl md:text-6xl mb-16 text-slate-900">Example Videos</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden group flex flex-col bg-white border border-slate-200 shadow-sm">
                  <div className="relative w-full aspect-[9/16] bg-black">
                    <video src={v.videoUrl} className="w-full h-full object-cover" controls playsInline preload="metadata" />
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-bold bg-emerald-500 text-white z-10">{v.tag}</span>
                  </div>
                  <div className="py-4 px-4">
                    <p className="text-sm font-bold text-slate-800">{v.title}</p>
                    <p className="text-xs font-bold text-emerald-600 mt-1 uppercase">{v.views}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERRALS (Clean White) ── */}
      <section id="referrals" className="py-28 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-emerald-600">Testimonials</p>
            <h2 className="font-display font-black text-5xl md:text-6xl mb-16 text-slate-900">Referrals</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {referrals.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 150}>
                <div className="rounded-3xl p-8 h-full flex flex-col border border-slate-100 bg-slate-50/50">
                  <div className="flex mb-4 text-emerald-500">
                    {Array(r.stars).fill(0).map((_, si) => <span key={si} className="text-lg">★</span>)}
                  </div>
                  <p className="text-base font-medium leading-relaxed italic text-slate-700 flex-1 mb-8">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-emerald-500 text-white">
                      {r.name[0]}
                    </div>
                    <span className="font-bold text-slate-900">{r.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (Green Gradient) ── */}
      <div className="bg-white pb-16">
        <section className="py-24 px-6 mx-6 md:mx-16 rounded-[40px] text-center relative overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #064E3B 0%, #065F46 100%)' }}>
          <div className="relative z-10">
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-white">Ready to go viral?</h2>
            <p className="text-lg mb-10 max-w-md mx-auto text-emerald-100 font-medium opacity-80">
              Applications are reviewed on a rolling basis. Limited spots available.
            </p>
            <Link href="/apply"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-bold transition-all bg-white text-emerald-900 hover:scale-105 hover:shadow-2xl">
              Apply Now →
            </Link>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
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
                style={{  background: 'linear-gradient(135deg, #064E3B 0%, #065F46 100%)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d={s.path} fill="rgb(255, 255, 255)" />
                </svg>
              </a>
            ))}
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2025 TNT. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}