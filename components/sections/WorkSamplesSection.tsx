import type { WorkSample } from '@/lib/data'

function ModelThumbnail({ caption }: { caption: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-[rgba(198,161,91,0.28)] bg-[#FBF7F1]"
      style={{ aspectRatio: '4 / 3' }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(214,195,163,0.35) 1px, transparent 1px), linear-gradient(rgba(214,195,163,0.35) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div className="absolute inset-5 rounded-md border border-[rgba(107,31,42,0.15)] bg-white/85 p-4 shadow-inner">
        <div className="flex gap-1 mb-3">
          {['#C6A15B', '#6B1F2A', '#1F6F54'].map(c => (
            <span key={c} className="h-2 w-8 rounded-sm" style={{ background: c, opacity: 0.85 }} />
          ))}
        </div>
        <div className="space-y-2 font-mono text-[10px] leading-tight text-[#5F5A55]">
          <div className="flex justify-between">
            <span>Assumptions</span>
            <span className="text-[#1A1A1A] font-semibold">Live</span>
          </div>
          <div className="flex justify-between">
            <span>Stress</span>
            <span className="text-[#6B1F2A]">± scenario</span>
          </div>
          <div className="flex justify-between">
            <span>Exports</span>
            <span>PDF · XLSX</span>
          </div>
        </div>
      </div>
      <span className="absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#B8AEA1]">{caption}</span>
    </div>
  )
}

interface WorkSamplesSectionProps {
  samples: WorkSample[]
  contactEmail: string
}

export function WorkSamplesSection({ samples, contactEmail }: WorkSamplesSectionProps) {
  return (
    <section className="py-20 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Modelling Samples
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A] mb-4">
            Work <span className="gradient-text-brand">samples</span>
          </h2>
          <p className="text-[#5F5A55] text-base leading-relaxed">
            Illustrative template models — not confidential client deliverables — sanitized layouts you can circulate in diligence packs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {samples.map((sample, idx) => {
            const hasPdf = Boolean(sample.pdfUrl && sample.pdfUrl.length > 1)
            const mailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(`Sample workbook: ${sample.title}`)}`
            return (
              <article key={`${sample.title}-${idx}`} className="holographic-card p-7 flex flex-col">
                <ModelThumbnail caption="spreadsheet excerpt" />

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8AEA1] mt-6 mb-2">{sample.label}</p>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 leading-snug">{sample.title}</h3>
                <p className="text-[#5F5A55] text-sm leading-relaxed flex-1 mb-6">{sample.summary}</p>

                <div className="flex flex-wrap gap-3">
                  {hasPdf ? (
                    <a
                      href={sample.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-burgundy inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide"
                    >
                      PDF overview
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={mailHref}
                      className="btn-burgundy inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide"
                    >
                      Request PDF sample
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
