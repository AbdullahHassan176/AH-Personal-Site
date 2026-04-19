'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Images } from '@/lib/server-data'

interface GallerySectionProps {
  images: Images
}

// Curated 5-image selection — excludes DSCF6400 (used as hero portrait),
// image2.jpeg (peace-sign casual), and DSCF6453 (redundant casual).
const CURATED_SRCS = [
  '/images/DSCF6402.JPG',   // featured tall — sitting portrait, warm lounge
  '/images/DSCF6428.JPG',   // team staircase
  '/images/DSCF6446.JPG',   // group fun
  '/images/image0.jpeg',    // formal suit
  '/images/DSCF6453.JPG',   // casual portrait
]

const cardStyle = {
  borderRadius: '18px',
  border: '1px solid rgba(214,195,163,0.25)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.50)',
  transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1), box-shadow 250ms cubic-bezier(0.4,0,0.2,1), border-color 250ms',
} as React.CSSProperties

const hoverIn  = (el: HTMLElement) => {
  el.style.transform   = 'translateY(-4px)'
  el.style.boxShadow   = '0 12px 40px rgba(107,31,42,0.12), inset 0 1px 0 rgba(255,255,255,0.60)'
  el.style.borderColor = 'rgba(198,161,91,0.50)'
}
const hoverOut = (el: HTMLElement) => {
  el.style.transform   = ''
  el.style.boxShadow   = cardStyle.boxShadow as string
  el.style.borderColor = 'rgba(214,195,163,0.25)'
}

export function GallerySection({ images }: GallerySectionProps) {
  const [selected, setSelected] = useState<number | null>(null)

  // Build ordered display list from the gallery data
  const displayImages = CURATED_SRCS.map(src =>
    images.gallery.find((img: any) => img.src === src)
  ).filter(Boolean) as Array<{ src: string; alt: string; category: string }>

  const closeModal = () => setSelected(null)
  const prev = () => setSelected(i => (i !== null ? (i - 1 + displayImages.length) % displayImages.length : 0))
  const next = () => setSelected(i => (i !== null ? (i + 1) % displayImages.length : 0))

  return (
    <section className="py-32 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Professional{' '}
            <span className="gradient-text-brand">Moments</span>
          </h2>
          <p className="text-[#5F5A55] text-base mt-4 max-w-lg leading-relaxed">
            Portrait sessions and team collaborations capturing the journey of innovation and leadership.
          </p>
        </div>

        {/*
          Editorial 5-image grid — perfectly aligned, no masonry gaps.
          Desktop layout (3 cols, 2 equal rows of 300px):

          ┌──────────────────┬──────────────┬──────────────┐
          │                  │   [1] team   │   [2] group  │
          │  [0] portrait    ├──────────────┼──────────────┤
          │     (tall)       │   [3] suit   │  [4] casual  │
          └──────────────────┴──────────────┴──────────────┘
        */}

        {/* Desktop: explicit named-area grid */}
        <div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: '1.15fr 1fr 1fr',
            gridTemplateRows: '300px 300px',
            gridTemplateAreas: `
              "featured top-mid   top-right"
              "featured bot-mid   bot-right"
            `,
          }}
        >
          {displayImages.map((img, i) => {
            const areas = ['featured', 'top-mid', 'top-right', 'bot-mid', 'bot-right']
            return (
              <div
                key={img.src}
                className="group relative overflow-hidden cursor-pointer"
                style={{ ...cardStyle, gridArea: areas[i] }}
                onClick={() => setSelected(i)}
                onMouseEnter={e => hoverIn(e.currentTarget as HTMLElement)}
                onMouseLeave={e => hoverOut(e.currentTarget as HTMLElement)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1280px) 40vw, 500px"
                />
                <Overlay img={img} />
              </div>
            )
          })}
        </div>

        {/* Mobile: simple 2-column grid, uniform 240px rows */}
        <div
          className="grid lg:hidden gap-4"
          style={{
            gridTemplateColumns: '1fr 1fr',
            gridAutoRows: '240px',
          }}
        >
          {displayImages.map((img, i) => (
            <div
              key={img.src}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                ...cardStyle,
                gridColumn: i === 0 ? 'span 2' : 'span 1',
              }}
              onClick={() => setSelected(i)}
              onMouseEnter={e => hoverIn(e.currentTarget as HTMLElement)}
              onMouseLeave={e => hoverOut(e.currentTarget as HTMLElement)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Overlay img={img} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(18,18,18,0.95)' }}
          onClick={closeModal}
        >
          <div
            className="relative flex items-center justify-center w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute -top-10 right-0 text-[#B8AEA1] hover:text-[#C6A15B] transition-colors"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button onClick={prev} aria-label="Previous" className="absolute -left-12 text-[#B8AEA1] hover:text-[#C6A15B] transition-colors hidden sm:block">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={displayImages[selected]?.src}
              alt={displayImages[selected]?.alt ?? ''}
              className="max-w-full max-h-[82vh] object-contain"
              style={{ borderRadius: '18px' }}
            />

            <button onClick={next} aria-label="Next" className="absolute -right-12 text-[#B8AEA1] hover:text-[#C6A15B] transition-colors hidden sm:block">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <p className="absolute -bottom-8 left-0 right-0 text-center text-[#B8AEA1] text-xs font-mono">
              {selected + 1} / {displayImages.length} — {displayImages[selected]?.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

function Overlay({ img }: { img: { alt: string; category: string } }) {
  return (
    <>
      {/* Dark gradient reveal on hover */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.72) 0%, transparent 55%)' }}
      >
        <p className="text-[#F5EFE6] text-sm font-semibold leading-snug mb-2 truncate">{img.alt}</p>
        <span
          className="self-start text-[10px] font-mono px-2.5 py-1"
          style={{
            background: 'rgba(198,161,91,0.18)',
            border: '1px solid rgba(198,161,91,0.40)',
            color: '#E5D199',
            borderRadius: '9999px',
          }}
        >
          {img.category}
        </span>
      </div>

      {/* Expand icon */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(251,247,241,0.90)', backdropFilter: 'blur(8px)' }}
        >
          <svg className="w-3.5 h-3.5 text-[#6B1F2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
      </div>
    </>
  )
}
