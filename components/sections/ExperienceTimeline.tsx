import { Experience } from '@/lib/data'

interface ExperienceTimelineProps {
  experience: Experience[]
}

function getDuration(start: string, end: string | null) {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  const months = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30))
  return months > 12 ? `${Math.floor(months / 12)}y ${months % 12}m` : `${months}m`
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section className="py-20" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Career
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Professional{' '}
            <span className="gradient-text-brand">Experience</span>
          </h2>
          <p className="text-[#5F5A55] text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Financial modelling, Deloitte capital-markets delivery, and venture building — with the receipts in Excel, code, and deployed products.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: 'rgba(107,31,42,0.18)' }}
          />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Gold dot */}
                <div
                  className="absolute left-5 w-5 h-5 rounded-full z-10 flex-shrink-0 mt-7"
                  style={{
                    background: '#C6A15B',
                    border: '3px solid #FBF7F1',
                    boxShadow: '0 0 0 1px rgba(198,161,91,0.40)',
                  }}
                />

                {/* Card */}
                <div className="ml-16 flex-1 holographic-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-5">
                    <div>
                      <div className="text-[#C6A15B] font-mono text-sm font-medium mb-1">
                        {exp.start} — {exp.end || 'Present'}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{exp.title}</h3>
                      <h4 className="text-[#6B1F2A] font-semibold mb-1">{exp.company}</h4>
                      <p className="text-[#5F5A55] text-sm">{exp.location}</p>
                    </div>
                    <span
                      className="mt-3 lg:mt-0 self-start lg:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium flex-shrink-0"
                      style={{
                        background: 'rgba(198,161,91,0.12)',
                        border: '1px solid rgba(198,161,91,0.35)',
                        color: '#C6A15B',
                      }}
                    >
                      {getDuration(exp.start, exp.end)}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-5">
                    <h4 className="text-[#1A1A1A] font-semibold text-sm mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {exp.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                            style={{ background: '#C6A15B' }}
                          />
                          <span className="text-[#5F5A55] text-sm leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-0.5 rounded-full text-xs font-mono"
                        style={{
                          background: 'rgba(198,161,91,0.10)',
                          border: '1px solid rgba(198,161,91,0.30)',
                          color: '#6B1F2A',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
