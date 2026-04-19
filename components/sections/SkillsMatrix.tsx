const skills = [
  { category: 'Artificial Intelligence',  icon: 'brain',      proficiency: 95, experience: '5+ Years', projects: '12+',        certification: 'Certified' },
  { category: 'Quantitative Finance',     icon: 'chart',      proficiency: 90, experience: '4+ Years', projects: '8+',         certification: 'Certified' },
  { category: 'Leadership',               icon: 'users',      proficiency: 88, experience: '6+ Years', projects: '5 Companies', certification: 'Executive' },
  { category: 'Innovation',               icon: 'lightbulb',  proficiency: 92, experience: '7+ Years', projects: '15+',         certification: 'Founder'   },
]

const certBadge: Record<string, { bg: string; color: string }> = {
  Certified: { bg: 'rgba(31,111,84,0.12)',  color: '#1F6F54' },
  Executive: { bg: 'rgba(107,31,42,0.12)',  color: '#6B1F2A' },
  Founder:   { bg: 'rgba(198,161,91,0.15)', color: '#C6A15B' },
}

function Icon({ name }: { name: string }) {
  if (name === 'brain')
    return <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  if (name === 'chart')
    return <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  if (name === 'users')
    return <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  return <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
}

export function SkillsMatrix() {
  return (
    <section id="skill-matrix" className="py-20 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Overview
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Skills <span className="gradient-text-brand">Matrix</span>
          </h2>
        </div>

        <div className="liquid-metal-card p-2 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(198,161,91,0.18)' }}>
                  {['Skill Category', 'Proficiency', 'Experience', 'Projects', 'Level'].map(h => (
                    <th
                      key={h}
                      className={`py-4 px-6 font-semibold text-sm ${h === 'Skill Category' ? 'text-left' : 'text-center'} ${h === 'Level' ? 'text-right' : ''}`}
                      style={{ color: '#C6A15B' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => {
                  const badge = certBadge[skill.certification] ?? certBadge.Certified
                  return (
                    <tr
                      key={index}
                      style={{ borderBottom: '1px solid rgba(198,161,91,0.10)' }}
                      className="transition-colors hover:bg-[rgba(198,161,91,0.04)]"
                    >
                      {/* Category */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#6B1F2A' }}>
                            <svg className="w-4.5 h-4.5 text-[#FBF7F1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                              <Icon name={skill.icon} />
                            </svg>
                          </div>
                          <span className="text-[#1A1A1A] font-medium text-sm">{skill.category}</span>
                        </div>
                      </td>

                      {/* Progress bar */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full" style={{ background: '#EDE6DA' }}>
                            <div
                              className="h-1.5 rounded-full"
                              style={{
                                width: `${skill.proficiency}%`,
                                background: 'linear-gradient(90deg, #6B1F2A, #C6A15B, #1F6F54)',
                              }}
                            />
                          </div>
                          <span className="text-xs font-medium text-[#C6A15B] w-9 text-right">{skill.proficiency}%</span>
                        </div>
                      </td>

                      <td className="py-4 px-6 text-center text-[#5F5A55] text-sm">{skill.experience}</td>
                      <td className="py-4 px-6 text-center text-[#5F5A55] text-sm">{skill.projects}</td>

                      {/* Badge */}
                      <td className="py-4 px-6 text-right">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: badge.bg, color: badge.color }}
                        >
                          {skill.certification}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
