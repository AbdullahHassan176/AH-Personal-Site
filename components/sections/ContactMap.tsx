export function ContactMap() {
  return (
    <section className="py-20" style={{ background: 'rgba(245,239,230,0.30)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Presence
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Global <span className="gradient-text-brand">Reach</span>
          </h2>
          <p className="text-[#5F5A55] text-lg mt-4 max-w-xl mx-auto">
            Based in the UAE with operations spanning multiple continents — always ready to connect globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map placeholder */}
          <div className="holographic-card p-6 relative">
            <div
              className="aspect-video rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(245,239,230,0.60)' }}
            >
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: '#6B1F2A' }}
                >
                  <svg className="w-7 h-7 text-[#FBF7F1]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-[#1A1A1A] font-semibold">Interactive Map</div>
                <div className="text-[#5F5A55] text-sm">Global Operations</div>
              </div>
            </div>
            {/* Pin decorations */}
            <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#C6A15B' }}>
              <svg className="w-3.5 h-3.5 text-[#FBF7F1]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Location info */}
          <div className="space-y-5">
            <div className="holographic-card p-7">
              <h3 className="text-xl font-playfair font-bold mb-5 text-[#1A1A1A]">
                Primary <span className="gradient-text-brand">Location</span>
              </h3>
              <div className="space-y-5">
                {[
                  {
                    label: 'United Arab Emirates',
                    sub: 'Dubai, UAE · Primary Operations Base',
                    icon: (<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />),
                    color: '#6B1F2A',
                  },
                  {
                    label: 'Global Operations',
                    sub: 'Available Worldwide · Remote & On-site',
                    icon: (<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />),
                    color: '#1F6F54',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-xl" style={{ background: item.color }}>
                      <svg className="w-5 h-5 text-[#FBF7F1]" fill="currentColor" viewBox="0 0 20 20">{item.icon}</svg>
                    </div>
                    <div>
                      <div className="text-[#1A1A1A] font-semibold">{item.label}</div>
                      <div className="text-[#5F5A55] text-sm">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time zones */}
            <div className="holographic-card p-7">
              <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Time Zones</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#6B1F2A]">GMT+4</div>
                  <div className="text-[#5F5A55] text-sm">UAE Standard Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1F6F54]">Flexible</div>
                  <div className="text-[#5F5A55] text-sm">Global Schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
