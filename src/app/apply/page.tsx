'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', tiktok: '', instagram: '',
    followers: '', experience: '', why: '', availability: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--brand-black)' }}>
      {/* Back link */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
        style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245,240,232,0.06)' }}>
        <Link href="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
          style={{ color: 'rgba(245,240,232,0.6)' }}>
          <img src="/images/logo.png" alt="TNT" width={100} height={100} style={{ borderRadius: '8px' }} />
         
        </Link>
        {/* <span className="font-display font-black text-2xl" style={{ color: 'var(--brand-cream)' }}>
          <img src="/images/logo.png" alt="TNT" width={100} height={100} style={{ borderRadius: '8px' }} />
        </span> */}
        <div className="w-24" />
      </div>

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-14">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
                  style={{ background: 'rgba(255,77,0,0.12)', color: 'var(--brand-orange)', border: '1px solid rgba(255,77,0,0.3)' }}>
                  Limited Spots
                </span>
                <h1 className="font-display font-black text-5xl md:text-6xl mb-4" style={{ color: 'var(--brand-cream)' }}>
                  Apply Now
                </h1>
                <p className="text-lg" style={{ color: 'rgba(245,240,232,0.55)' }}>
                  Tell us about yourself. We review applications within 48 hours.
                </p>
              </div>

              {/* Form card */}
              <div className="rounded-3xl p-8 md:p-12"
                style={{ background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.08)' }}>

                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(245,240,232,0.5)' }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange}
                        placeholder="Your full name" className="form-input" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(245,240,232,0.5)' }}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com" className="form-input" required />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(245,240,232,0.5)' }}>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(245,240,232,0.5)' }}>Availability *</label>
                      <select name="availability" value={form.availability} onChange={handleChange} className="form-input">
                        <option value="">Select hours/week</option>
                        <option value="part">Part-time (5–15 hrs/week)</option>
                        <option value="full">Full-time (20+ hrs/week)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Social handles */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(245,240,232,0.5)' }}>TikTok Handle</label>
                      <input name="tiktok" value={form.tiktok} onChange={handleChange}
                        placeholder="@yourhandle" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(245,240,232,0.5)' }}>Instagram Handle</label>
                      <input name="instagram" value={form.instagram} onChange={handleChange}
                        placeholder="@yourhandle" className="form-input" />
                    </div>
                  </div>

                  {/* Followers */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: 'rgba(245,240,232,0.5)' }}>Current Following (combined across platforms)</label>
                    <select name="followers" value={form.followers} onChange={handleChange} className="form-input">
                      <option value="">Select range</option>
                      <option value="0">0 — Just starting out</option>
                      <option value="1k">1K – 10K</option>
                      <option value="10k">10K – 50K</option>
                      <option value="50k">50K – 200K</option>
                      <option value="200k">200K+</option>
                    </select>
                  </div>

                  {/* Content experience */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: 'rgba(245,240,232,0.5)' }}>Content Creation Experience</label>
                    <textarea name="experience" value={form.experience} onChange={handleChange} rows={3}
                      placeholder="Tell us about any content you've made — videos, blogs, social posts. Zero experience is totally fine too!"
                      className="form-input resize-none" />
                  </div>

                  {/* Why you */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: 'rgba(245,240,232,0.5)' }}>Why do you want to join TNT? *</label>
                    <textarea name="why" value={form.why} onChange={handleChange} rows={4}
                      placeholder="What excites you about this opportunity? What do you hope to get out of it?"
                      className="form-input resize-none" required />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.why}
                    className="w-full py-4 rounded-full font-bold text-base transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.99]"
                    style={{ background: 'var(--brand-orange)', color: '#fff', boxShadow: '0 8px 32px rgba(255,77,0,0.35)' }}>
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                        Submitting...
                      </span>
                    ) : 'Submit Application →'}
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgba(245,240,232,0.3)' }}>
                    We review every application within 48 hours. No spam, ever.
                  </p>
                </div>
              </div>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-20">
              <div className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl"
                style={{ background: 'rgba(255,77,0,0.12)', border: '2px solid var(--brand-orange)' }}>
                🎉
              </div>
              <h2 className="font-display font-black text-5xl mb-4" style={{ color: 'var(--brand-cream)' }}>
                You're in the queue!
              </h2>
              <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Thanks for applying, {form.name.split(' ')[0]}! We'll review your application and reach out within 48 hours.
              </p>
              <Link href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(245,240,232,0.06)', color: 'var(--brand-cream)', border: '1px solid rgba(245,240,232,0.12)' }}>
                ← Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
