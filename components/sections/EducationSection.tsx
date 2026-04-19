import { Profile } from '@/lib/data'

interface EducationSectionProps {
  profile: Profile
}

export function EducationSection({ profile }: EducationSectionProps) {
  return (
    <section className="py-20 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Education
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Academic{' '}
            <span className="gradient-text-brand">Credentials</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {profile.education.map((edu, index) => {
            const isInProgress = edu.degree.toLowerCase().includes('in progress')
            return (
              <div key={index} className="holographic-card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{edu.degree}</h3>
                    <p className="text-[#6B1F2A] font-semibold mb-1">{edu.institution}</p>
                    <p className="text-[#5F5A55] text-sm">{edu.focus}</p>
                  </div>
                  <div
                    className="w-14 h-14 flex items-center justify-center flex-shrink-0 ml-4 rounded-xl"
                    style={{ background: '#6B1F2A' }}
                  >
                    <svg className="w-7 h-7 text-[#FBF7F1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[rgba(198,161,91,0.15)]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#5F5A55] text-sm">Status</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={
                        isInProgress
                          ? { background: 'rgba(198,161,91,0.15)', color: '#C6A15B' }
                          : { background: 'rgba(31,111,84,0.12)', color: '#1F6F54' }
                      }
                    >
                      {isInProgress ? 'In Progress' : 'Completed'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5F5A55] text-sm">Focus</span>
                    <span className="text-[#1A1A1A] text-sm font-medium">AI & Statistics</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5F5A55] text-sm">Research</span>
                    <span className="text-[#1A1A1A] text-sm font-medium">NF-GARCH Models</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
