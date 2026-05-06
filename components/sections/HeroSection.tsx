'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Profile, Images } from '@/lib/server-data'

interface HeroSectionProps {
  profile: Profile
  images: Images
}

export function HeroSection({ profile, images }: HeroSectionProps) {
  const [first, ...rest] = profile.fullName.split(' ')
  const last = rest.join(' ')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FBF7F1]"
    >
      {/* Topology background grid */}
      <div className="topology-bg" />

      {/* Ambient colour glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_top_right,rgba(107,31,42,0.05),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(31,111,84,0.04),transparent_55%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.04),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-center">

          {/* ── Left: Text content ── */}
          <div>
            {/* Category label */}
            <p
              className="hero-item font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.4em] uppercase mb-8"
              style={{ animationDelay: '0.05s' }}
            >
              Quantitative Finance &nbsp;·&nbsp; AI &amp; Data &nbsp;·&nbsp; Tokenization
            </p>

            {/* Name */}
            <h1
              className="hero-item font-playfair font-bold leading-[0.92] mb-8 narrative-headline"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="block text-[#1A1A1A]">{first}</span>
              <span
                className="block gradient-text-brand"
                style={{ fontSize: '0.95em' }}
              >
                {last}
              </span>
            </h1>

            {/* Role subtitle */}
            <p
              className="hero-item text-[#5F5A55] text-xl font-light leading-relaxed mb-5"
              style={{ animationDelay: '0.28s' }}
            >
              {profile.headline}
            </p>

            {/* Summary with gold left accent line */}
            <p
              className="hero-item text-[#8B7D6F] text-base leading-[1.8] border-l-2 border-[#C6A15B]/50 pl-5 mb-10 max-w-xl"
              style={{ animationDelay: '0.38s' }}
            >
              {profile.summary.substring(0, 195)}
            </p>

            {/* CTAs */}
            <div
              className="hero-item flex flex-wrap gap-3 mb-14"
              style={{ animationDelay: '0.48s' }}
            >
              <Link
                href="/ventures"
                className="btn-burgundy inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-[var(--radius-md)]"
              >
                Explore Ventures
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 border border-[#C6A15B] text-[#6B1F2A] px-7 py-3.5 text-sm font-medium rounded-[var(--radius-md)] transition-all duration-200 hover:bg-[#6B1F2A] hover:text-[#F5EFE6] hover:border-[#6B1F2A]"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#5F5A55] px-4 py-3.5 text-sm transition-all duration-200 hover:text-[#6B1F2A]"
              >
                About Me
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="hero-item flex items-center gap-8 pt-8 border-t border-[#D6C3A3]/30"
              style={{ animationDelay: '0.58s' }}
            >
              <div>
                <span className="block text-[1.7rem] font-bold text-[#1A1A1A] font-playfair leading-none">3+</span>
                <span className="block text-[10px] text-[#B8AEA1] mt-1.5 tracking-widest uppercase font-mono">Years at Deloitte</span>
              </div>
              <div className="h-8 w-px bg-[#D6C3A3]/50" />
              <div>
                <span className="block text-[1.7rem] font-bold text-[#1A1A1A] font-playfair leading-none">5</span>
                <span className="block text-[10px] text-[#B8AEA1] mt-1.5 tracking-widest uppercase font-mono">Active Ventures</span>
              </div>
              <div className="h-8 w-px bg-[#D6C3A3]/50" />
              <div>
                <span className="block text-[1.4rem] font-bold text-[#1A1A1A] font-playfair leading-none">ZA · UAE</span>
                <span className="block text-[10px] text-[#B8AEA1] mt-1.5 tracking-widest uppercase font-mono">Operating In</span>
              </div>
              <div className="h-8 w-px bg-[#D6C3A3]/50" />
              <div className="min-w-0 max-w-[9rem]">
                <span className="block text-[0.82rem] sm:text-[0.92rem] font-bold text-[#1A1A1A] font-playfair leading-snug tracking-tight">
                  DCF · NAV · Lending
                </span>
                <span className="block text-[10px] text-[#B8AEA1] mt-1.5 tracking-widest uppercase font-mono">Modelling Tracks</span>
              </div>
            </div>
          </div>

          {/* ── Right: Portrait ── */}
          <div
            className="hero-item hidden lg:flex justify-center"
            style={{ animationDelay: '0.22s' }}
          >
            {/* Wrapper — provides the corner accents and badge without ambiguous positioning */}
            <div style={{ position: 'relative', width: '360px', flexShrink: 0 }}>

              {/* Gold corner bracket accents — outside the card, pointer-events-none */}
              <div
                style={{
                  position: 'absolute', top: '-14px', left: '-14px',
                  width: '32px', height: '32px',
                  borderTop: '2px solid #C6A15B', borderLeft: '2px solid #C6A15B',
                  opacity: 0.65, zIndex: 10, pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute', bottom: '-14px', right: '-14px',
                  width: '32px', height: '32px',
                  borderBottom: '2px solid #C6A15B', borderRight: '2px solid #C6A15B',
                  opacity: 0.65, zIndex: 10, pointerEvents: 'none',
                }}
              />

              {/* Portrait card — explicit dimensions, strict overflow clipping */}
              <div
                style={{
                  position: 'relative',
                  width: '360px',
                  height: '460px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid rgba(198,161,91,0.22)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.55)',
                }}
              >
                <Image
                  src={images.profile.main}
                  alt={images.profile.alt}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="360px"
                />
                {/* Bottom cream gradient fade */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(245,239,230,0.50) 0%, transparent 40%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Available badge — below the card */}
              <div
                className="status-badge status-badge--emerald text-xs font-mono"
                style={{ position: 'absolute', bottom: '-14px', left: '20px' }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#1F6F54]"
                  style={{ animation: 'status-blink 2s ease-in-out infinite' }}
                />
                Available
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ animationDelay: '0.9s' }}
      >
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(198,161,91,0.5), transparent)',
            animation: 'status-blink 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
