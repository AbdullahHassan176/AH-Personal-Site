'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Partnership Opportunity',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitStatus(res.ok ? 'success' : 'error')
      if (res.ok) setFormData({ name: '', email: '', company: '', subject: 'Partnership Opportunity', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full rounded-xl px-4 py-3 text-[#1A1A1A] text-sm outline-none transition-all"
  const inputStyle = {
    background: 'rgba(251,247,241,0.90)',
    border: '1px solid rgba(198,161,91,0.25)',
  }

  return (
    <div className="liquid-metal-card p-8">
      <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-3">
        Message
      </p>
      <h2 className="text-3xl font-playfair font-bold text-[#1A1A1A] mb-2">
        Send a <span className="gradient-text-brand">Message</span>
      </h2>
      <p className="text-[#5F5A55] text-sm mb-7">
        Fill out the form and I&apos;ll get back to you within 24 hours.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-xl flex items-center gap-3 text-[#1F6F54] text-sm" style={{ background: 'rgba(31,111,84,0.10)', border: '1px solid rgba(31,111,84,0.25)' }}>
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Message sent! I&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-xl flex items-center gap-3 text-[#6B1F2A] text-sm" style={{ background: 'rgba(107,31,42,0.08)', border: '1px solid rgba(107,31,42,0.20)' }}>
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Failed to send. Please try again or contact me directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-mono text-[#5F5A55] text-[10px] tracking-[0.2em] uppercase mb-1.5">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} style={inputStyle} />
          </div>
          <div>
            <label className="block font-mono text-[#5F5A55] text-[10px] tracking-[0.2em] uppercase mb-1.5">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} style={inputStyle} />
          </div>
        </div>

        <div>
          <label className="block font-mono text-[#5F5A55] text-[10px] tracking-[0.2em] uppercase mb-1.5">Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className={inputClass} style={inputStyle} />
        </div>

        <div>
          <label className="block font-mono text-[#5F5A55] text-[10px] tracking-[0.2em] uppercase mb-1.5">Subject *</label>
          <select name="subject" value={formData.subject} onChange={handleChange} className={inputClass} style={inputStyle}>
            <option>Partnership Opportunity</option>
            <option>Investment Discussion</option>
            <option>Speaking Engagement</option>
            <option>Collaboration</option>
            <option>General Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block font-mono text-[#5F5A55] text-[10px] tracking-[0.2em] uppercase mb-1.5">Message *</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project or how we can work together…" className={`${inputClass} resize-none`} style={inputStyle} />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-burgundy w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
