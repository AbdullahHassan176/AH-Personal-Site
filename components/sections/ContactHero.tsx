export function ContactHero() {
  const cards = [
    {
      title: 'Partnerships',
      desc: 'Strategic collaborations and joint ventures',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: 'Investment',
      desc: 'Funding opportunities and venture discussions',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      ),
    },
    {
      title: 'Speaking',
      desc: 'Keynotes, workshops, and presentations',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      ),
    },
    {
      title: 'Financial Modelling',
      desc: 'DCF, NAV, lending, borrower-base builds',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25m0 0l3 3M9 11.25l3-3m-3 3L9 21m12-13.5V9A2.25 2.25 0 0018.75 6.75h-13.5A2.25 2.25 0 003 9v10.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18v-8.25M12 12.75h.008v.008H12v-.008z" />
      ),
    },
  ]

  return (
    <section className="pt-28 pb-16 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-6">
          Let&apos;s Connect
        </p>

        <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-[#1A1A1A] leading-tight">
          Ready to{' '}
          <span className="gradient-text-brand">Collaborate?</span>
        </h1>

        <p className="text-[#5F5A55] text-lg mb-14 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re hiring for a financial modelling or valuation sprint, layering AI onto a regulated stack,
          or exploring an investment lane, attach the scope below — spreadsheet-native or production-native, I operate in both.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="holographic-card p-6 flex flex-col items-center text-center">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl mb-4"
                style={{ background: '#6B1F2A' }}
              >
                <svg className="w-5 h-5 text-[#FBF7F1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] font-semibold mb-1">{card.title}</h3>
              <p className="text-[#5F5A55] text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
