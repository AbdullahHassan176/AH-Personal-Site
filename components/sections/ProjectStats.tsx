export function ProjectStats() {
  const stats = [
    { value: '25+', label: 'Total Projects',   color: '#6B1F2A' },
    { value: '12',  label: 'Research Papers',  color: '#C6A15B' },
    { value: '8',   label: 'AI Solutions',     color: '#1F6F54' },
    { value: '5',   label: 'Active Ventures',  color: '#6B1F2A' },
  ]

  return (
    <section className="py-16 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[#5F5A55] text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
