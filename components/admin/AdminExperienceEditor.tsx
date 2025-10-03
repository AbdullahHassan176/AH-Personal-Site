'use client'

import { useState } from 'react'

interface ExperienceEntry {
  company: string
  title: string
  start: string
  end: string
  location: string
  highlights: string[]
  tech: string[]
}

export function AdminExperienceEditor() {
  const [experiences, setExperiences] = useState<ExperienceEntry[]>([
    {
      company: 'Deloitte (South Africa)',
      title: 'Quant / Financial Engineering (Consulting)',
      start: '2022-01-01',
      end: '',
      location: 'Johannesburg, South Africa (remote-friendly)',
      highlights: [
        'Built/validated quantitative models across derivatives and risk',
        'Produced technical presentations for quant audiences',
        'Collaborated cross-functionally to deliver analytics'
      ],
      tech: ['R', 'Python', 'rugarch', 'TensorFlow', 'PyTorch']
    }
  ])

  const addExperience = () => {
    setExperiences(prev => [...prev, {
      company: '',
      title: '',
      start: '',
      end: '',
      location: '',
      highlights: [''],
      tech: ['']
    }])
  }

  const removeExperience = (index: number) => {
    setExperiences(prev => prev.filter((_, i) => i !== index))
  }

  const updateExperience = (index: number, field: keyof ExperienceEntry, value: any) => {
    setExperiences(prev => prev.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    ))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Experience Editor</h2>
          <p className="text-gray-400">Manage your work experience entries</p>
        </div>
        <button
          onClick={addExperience}
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Experience #{index + 1}</h3>
              <button
                onClick={() => removeExperience(index)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) => updateExperience(index, 'title', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  value={exp.start}
                  onChange={(e) => updateExperience(index, 'start', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">End Date</label>
                <input
                  type="date"
                  value={exp.end}
                  onChange={(e) => updateExperience(index, 'end', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => updateExperience(index, 'location', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2">Highlights</label>
              <div className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <input
                    key={hIndex}
                    type="text"
                    value={highlight}
                    onChange={(e) => {
                      const newHighlights = [...exp.highlights]
                      newHighlights[hIndex] = e.target.value
                      updateExperience(index, 'highlights', newHighlights)
                    }}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Enter highlight..."
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Technologies</label>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, tIndex) => (
                  <input
                    key={tIndex}
                    type="text"
                    value={tech}
                    onChange={(e) => {
                      const newTech = [...exp.tech]
                      newTech[tIndex] = e.target.value
                      updateExperience(index, 'tech', newTech)
                    }}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Technology..."
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
