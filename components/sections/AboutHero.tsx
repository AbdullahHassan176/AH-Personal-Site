import Image from 'next/image'
import Link from 'next/link'
import { Profile } from '@/lib/data'
import { readJSON } from '@/lib/data'

interface AboutHeroProps {
  profile: Profile
}

export function AboutHero({ profile }: AboutHeroProps) {
  const images = readJSON('images.json')
  return (
    <section className="pt-28 pb-20 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-6">
              About
            </p>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-[#1A1A1A] leading-tight">
              About{' '}
              <span className="gradient-text-brand">{profile.fullName}</span>
            </h1>

            <p className="text-[#5F5A55] text-lg mb-10 leading-relaxed max-w-xl">
              {profile.summary}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="holographic-card p-6">
                <div className="text-3xl font-bold text-[#6B1F2A] mb-1">5+</div>
                <div className="text-[#5F5A55] text-sm">Active Ventures</div>
              </div>
              <div className="holographic-card p-6">
                <div className="text-3xl font-bold text-[#1F6F54] mb-1">7+</div>
                <div className="text-[#5F5A55] text-sm">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ventures"
                className="btn-burgundy inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                View Ventures
              </Link>
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-[rgba(107,31,42,0.25)] text-[#6B1F2A] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Ambient glows */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#6B1F2A]/10 via-transparent to-[#C6A15B]/10 rounded-3xl blur-3xl pointer-events-none" />

              <div
                style={{
                  width: 360,
                  height: 440,
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1px solid rgba(198,161,91,0.25)',
                  boxShadow: '0 20px 60px rgba(107,31,42,0.10), inset 0 1px 0 rgba(255,255,255,0.50)',
                  position: 'relative',
                }}
              >
                <Image
                  src={images.profile.main}
                  alt={images.profile.alt}
                  fill
                  className="object-cover object-top"
                  sizes="360px"
                />
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-4 -right-4 holographic-card px-4 py-3 flex flex-col items-center"
                style={{ borderRadius: 16, minWidth: 72 }}
              >
                <div className="text-[#6B1F2A] text-xl font-bold font-playfair">AI</div>
                <div className="text-[#5F5A55] text-xs">Expert</div>
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-4 holographic-card px-4 py-3 flex flex-col items-center"
                style={{ borderRadius: 16, minWidth: 72 }}
              >
                <div className="text-[#1F6F54] text-xl font-bold font-playfair">CEO</div>
                <div className="text-[#5F5A55] text-xs">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
