'use client'

import { useState } from 'react'
import { Contact } from '@/lib/server-data'

interface ContactSectionProps {
  contact: Contact
}

const fieldClass = `
  w-full px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#B8AEA1]
  rounded-[var(--radius-md)] outline-none
  border border-[rgba(214,195,163,0.50)]
  bg-[#FBF7F1]
  transition-all duration-200
  focus:border-[#C6A15B] focus:ring-2 focus:ring-[rgba(198,161,91,0.20)]
`.trim()

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Partnership Opportunity',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitStatus(res.ok ? 'success' : 'error')
      if (res.ok) setFormData({ name: '', email: '', subject: 'Partnership Opportunity', message: '' })
    } catch {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: 'Partnership Opportunity', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-32" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Let&apos;s{' '}
            <span className="gradient-text-brand">Connect</span>
          </h2>
          <p className="text-[#5F5A55] text-base mt-4 max-w-lg leading-relaxed">
            Ready to discuss opportunities, partnerships, or innovative projects?
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">

          {/* ── Contact Form ── */}
          <div className="liquid-metal-card p-8 lg:p-10">
            <h3 className="text-xl font-playfair font-bold text-[#1A1A1A] mb-1">
              Send a Message
            </h3>
            <p className="text-[#5F5A55] text-sm mb-8">I typically respond within 24 hours.</p>

            {submitStatus === 'success' && (
              <div
                className="mb-6 p-4 rounded-[var(--radius-md)] text-sm"
                style={{
                  background: 'rgba(31,111,84,0.08)',
                  border: '1px solid rgba(31,111,84,0.30)',
                  color: '#1F6F54',
                }}
              >
                Message sent — I&apos;ll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="mb-6 p-4 rounded-[var(--radius-md)] text-sm"
                style={{
                  background: 'rgba(140,29,24,0.08)',
                  border: '1px solid rgba(140,29,24,0.30)',
                  color: '#8C1D18',
                }}
              >
                Couldn&apos;t send the message. Please email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[#5F5A55] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-[#5F5A55] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[#5F5A55] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{ appearance: 'none' }}
                >
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Investment Discussion">Investment Discussion</option>
                  <option value="Speaking Engagement">Speaking Engagement</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[#5F5A55] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={fieldClass}
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-burgundy w-full py-3.5 rounded-[var(--radius-md)] text-sm font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-5">

            {/* Contact Details */}
            <div className="holographic-card p-7">
              <h3 className="text-lg font-playfair font-bold text-[#1A1A1A] mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: contact.email,
                    href: `mailto:${contact.email}`,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: contact.phone,
                    href: `tel:${contact.phone}`,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    ),
                    label: 'Location',
                    value: 'UAE · South Africa · Global',
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] flex-shrink-0"
                      style={{ background: '#6B1F2A', color: '#F5EFE6' }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-[#B8AEA1] text-xs font-mono uppercase tracking-wide mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-[#1A1A1A] text-sm hover:text-[#6B1F2A] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="text-[#1A1A1A] text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="holographic-card p-7">
              <h3 className="text-lg font-playfair font-bold text-[#1A1A1A] mb-5">
                Quick Actions
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href={contact.social[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-burgundy flex items-center justify-center gap-2 py-3 rounded-[var(--radius-md)] text-sm font-semibold"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </a>

                {contact.calendar && (
                  <a
                    href={contact.calendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-[var(--radius-md)] text-sm font-semibold text-[#F5EFE6] transition-all duration-200 hover:brightness-110"
                    style={{ background: '#1F6F54', boxShadow: '0 4px 16px rgba(31,111,84,0.25)' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Schedule a Meeting
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
