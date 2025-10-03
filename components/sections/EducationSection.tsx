import { Profile } from '@/lib/data'

interface EducationSectionProps {
  profile: Profile
}

export function EducationSection({ profile }: EducationSectionProps) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Education & <span className="text-yellow-400">Credentials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Academic achievements and professional development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {profile.education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover-glow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-300 mb-4">{edu.focus}</p>
                </div>
                <div className={`w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl`}>
                  🎓
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-yellow-400 font-semibold">
                    {edu.degree.includes('in progress') ? 'In Progress' : 'Completed'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Focus:</span>
                  <span className="text-white">AI & Statistics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Research:</span>
                  <span className="text-white">NF-GARCH Models</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}