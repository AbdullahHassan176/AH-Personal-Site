'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Images } from '@/lib/server-data'

interface GallerySectionProps {
  images: Images
}

// Natural pixel dimensions — used so next/image renders each photo at its
// true aspect ratio instead of being force-fitted into a fixed container.
const DIMS: Record<string, { w: number; h: number }> = {
  '/images/DSCF6428.JPG': { w: 4160, h: 6240 }, // portrait 2:3
  '/images/DSCF6446.JPG': { w: 6240, h: 4160 }, // landscape 3:2
  '/images/image0.jpeg':  { w: 3024, h: 4032 }, // portrait 3:4
  '/images/DSCF6453.JPG': { w: 6240, h: 4160 }, // landscape 3:2
}

const CURATED_SRCS = [
  '/images/DSCF6428.JPG',
  '/images/DSCF6446.JPG',
  '/images/image0.jpeg',
  '/images/DSCF6453.JPG',
]

const cardStyle: React.CSSProperties = {
  borderRadius: '18px',
  border: '1px solid rgba(214,195,163,0.25)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.50)',
  transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1), box-shadow 250ms cubic-bezier(0.4,0,0.2,1), border-color 250ms',
  overflow: 'hidden',
  breakInside: 'avoid',
  display: 'block',
  marginBottom: '16px',
}

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
          CSS masonry — each image renders at its natural aspect ratio so nothing
          gets cropped or stretched. Portraits stay tall, landscapes stay wide.
          The browser balances column heights automatically.

          Desktop: 3 columns  |  Tablet: 2 columns  |  Mobile: 1 column
        */}

        {/* Desktop (lg+) — 3-column masonry */}
        <div
          className="hidden lg:block"
          style={{ columns: 3, columnGap: '16px' }}
        >
          {displayImages.map((img, i) => {
            const { w, h } = DIMS[img.src] ?? { w: 4, h: 3 }
            return (
              <div
                key={img.src}
                className="group relative cursor-pointer"
                style={cardStyle}
                onClick={() => setSelected(i)}
                onMouseEnter={e => hoverIn(e.currentTarget as HTMLElement)}
                onMouseLeave={e => hoverOut(e.currentTarget as HTMLElement)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={w}
                  height={h}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1280px) 33vw, 420px"
                />
                <Overlay img={img} />
              </div>
            )
          })}
        </div>

        {/* Tablet (sm–lg) — 2-column masonry */}
        <div
          className="hidden sm:block lg:hidden"
          style={{ columns: 2, columnGap: '14px' }}
        >
          {displayImages.map((img, i) => {
            const { w, h } = DIMS[img.src] ?? { w: 4, h: 3 }
            return (
              <div
                key={img.src}
                className="group relative cursor-pointer"
                style={cardStyle}
                onClick={() => setSelected(i)}
                onMouseEnter={e => hoverIn(e.currentTarget as HTMLElement)}
                onMouseLeave={e => hoverOut(e.currentTarget as HTMLElement)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={w}
                  height={h}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="50vw"
                />
                <Overlay img={img} />
              </div>
            )
          })}
        </div>

        {/* Mobile — single column stack */}
        <div className="sm:hidden flex flex-col gap-4">
          {displayImages.map((img, i) => {
            const { w, h } = DIMS[img.src] ?? { w: 4, h: 3 }
            return (
              <div
                key={img.src}
                className="group relative cursor-pointer"
                style={{ ...cardStyle, marginBottom: 0 }}
                onClick={() => setSelected(i)}
                onMouseEnter={e => hoverIn(e.currentTarget as HTMLElement)}
                onMouseLeave={e => hoverOut(e.currentTarget as HTMLElement)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={w}
                  height={h}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="100vw"
                />
                <Overlay img={img} />
              </div>
            )
          })}
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
