import { Profile } from '@/lib/data'

interface AboutContentProps {
  profile: Profile
}

export function AboutContent({ profile }: AboutContentProps) {
  return (
    <section className="py-20" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* My Story */}
          <div>
            <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
              My Story
            </p>
            <h2 className="text-4xl font-playfair font-bold mb-8 text-[#1A1A1A]">
              The Journey{' '}
              <span className="gradient-text-brand">So Far</span>
            </h2>

            <div className="space-y-5 text-[#5F5A55] text-[17px] leading-relaxed">
              <p>{profile.summary}</p>
              <p>
                His financial modelling work covers DCF valuations, ETF NAV frameworks, asset lending models,
                and XVA analytics — delivered to institutional clients through Deloitte and direct engagements.
              </p>
              <p>
                I architect problems end-to-end: spreadsheet logic that survives model validation reviews,
                and software that survives production traffic across trade, AI, and tokenised asset pilots.
              </p>
              <p>
                I speak internationally (English · Arabic · Afrikaans · Portuguese) and split time leading
                research at Safe Labs with operating cadence inside Global Next, Unamani AI, marketplace
                trade flows, and FMCG corridors.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Current Focus */}
            <div className="holographic-card p-8">
              <h3 className="text-xl font-playfair font-bold mb-6 text-[#C6A15B]">Current Focus</h3>
              <div className="space-y-4">
                {profile.currentFocus.map((focus, index) => {
                  const dashIdx = focus.indexOf(' — ')
                  const label = dashIdx !== -1 ? focus.slice(0, dashIdx) : `Focus ${index + 1}`
                  const body  = dashIdx !== -1 ? focus.slice(dashIdx + 3) : focus
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 rounded-full"
                        style={{ background: '#6B1F2A' }}
                      >
                        <svg className="w-3.5 h-3.5 text-[#FBF7F1]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[#1A1A1A] font-semibold mb-0.5">{label}</h4>
                        <p className="text-[#5F5A55] text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Location & Contact */}
            <div className="holographic-card p-8">
              <h3 className="text-xl font-playfair font-bold mb-6 text-[#C6A15B]">Location & Contact</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    ),
                    value: profile.location,
                  },
                  ...(profile.availability
                    ? [{
                        icon: (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        ),
                        value: profile.availability,
                      }]
                    : []),
                  ...(profile.languages?.length
                    ? [{
                        icon: (
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm4 0H9v2h2V9zm4 0h-2v2h2V9z" clipRule="evenodd" />
                        ),
                        value: `Languages · ${profile.languages.join(' · ')}`,
                      }]
                    : []),
                  {
                    icon: (
                      <>
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </>
                    ),
                    value: profile.emails[0],
                  },
                  {
                    icon: (
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    ),
                    value: profile.phones[0],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-lg"
                      style={{ background: '#6B1F2A' }}
                    >
                      <svg className="w-4 h-4 text-[#FBF7F1]" fill="currentColor" viewBox="0 0 20 20">
                        {item.icon}
                      </svg>
                    </div>
                    <span className="text-[#3D3830] text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
