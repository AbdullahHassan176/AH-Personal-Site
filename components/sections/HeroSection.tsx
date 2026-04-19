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
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      {/* Subtle ambient gradients — no animation, no cheap effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.07),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.04),transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-20 items-center">

          {/* ── Left: Text content ── */}
          <div>
            {/* Category label */}
            <p
              className="hero-item text-gray-500 text-[11px] font-medium tracking-[0.4em] uppercase mb-8"
              style={{ animationDelay: '0.05s' }}
            >
              Quantitative Finance &nbsp;·&nbsp; AI &amp; Data &nbsp;·&nbsp; Tokenization
            </p>

            {/* Name */}
            <h1
              className="hero-item font-playfair font-bold leading-[0.88] mb-8"
              style={{ animationDelay: '0.15s', fontSize: 'clamp(3.8rem, 8.5vw, 7rem)' }}
            >
              <span className="block text-white">{first}</span>
              <span className="block text-yellow-400">{last}</span>
            </h1>

            {/* Role subtitle */}
            <p
              className="hero-item text-gray-300 text-xl font-light leading-relaxed mb-5"
              style={{ animationDelay: '0.28s' }}
            >
              {profile.headline}
            </p>

            {/* Summary with left accent line */}
            <p
              className="hero-item text-gray-500 text-base leading-relaxed border-l-2 border-yellow-400/35 pl-5 mb-10 max-w-xl"
              style={{ animationDelay: '0.38s' }}
            >
              {profile.summary.substring(0, 185)}
            </p>

            {/* CTAs */}
            <div
              className="hero-item flex flex-wrap gap-3 mb-14"
              style={{ animationDelay: '0.48s' }}
            >
              <Link
                href="/ventures"
                className="inline-flex items-center gap-2.5 bg-yellow-400 text-gray-900 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-px"
              >
                Explore Ventures
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 border border-white/15 text-white/70 px-7 py-3.5 text-sm font-medium transition-all duration-200 hover:border-yellow-400/50 hover:text-yellow-400"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-gray-500 px-4 py-3.5 text-sm transition-all duration-200 hover:text-gray-300"
              >
                About Me
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="hero-item flex items-center gap-8 pt-8 border-t border-white/[0.07]"
              style={{ animationDelay: '0.58s' }}
            >
              <div>
                <span className="block text-[1.6rem] font-bold text-white font-playfair leading-none">3+</span>
                <span className="block text-[10px] text-gray-500 mt-1.5 tracking-widest uppercase">Years at Deloitte</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-[1.6rem] font-bold text-white font-playfair leading-none">3</span>
                <span className="block text-[10px] text-gray-500 mt-1.5 tracking-widest uppercase">Active Ventures</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-[1.6rem] font-bold text-white font-playfair leading-none">ZA · UAE</span>
                <span className="block text-[10px] text-gray-500 mt-1.5 tracking-widest uppercase">Operating In</span>
              </div>
            </div>
          </div>

          {/* ── Right: Portrait ── */}
          <div
            className="hero-item hidden lg:block"
            style={{ animationDelay: '0.22s' }}
          >
            <div className="relative">
              {/* Corner bracket accents */}
              <div className="absolute -top-5 -left-5 w-9 h-9 border-t border-l border-yellow-400/45 z-10" />
              <div className="absolute -bottom-5 -right-5 w-9 h-9 border-b border-r border-yellow-400/45 z-10" />

              {/* Photo container */}
              <div className="relative overflow-hidden" style={{ width: '340px', height: '430px' }}>
                <Image
                  src={images.profile.main}
                  alt={images.profile.alt}
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle bottom fade to match bg */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950/50 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Vertical scroll cue — thin animated line */}
      <div
        className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0"
        style={{ animationDelay: '0.9s' }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
