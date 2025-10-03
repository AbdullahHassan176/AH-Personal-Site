'use client'

import { useState, useEffect } from 'react'
import { DataExportHelper } from './DataExportHelper'

interface ExperienceEntry {
  company: string
  title: string
  start: string
  end: string
  location: string
  highlights: string[]
  tech: string[]
}

interface AdminExperienceEditorProps {
  onBack?: () => void
}

export function AdminExperienceEditor({ onBack }: AdminExperienceEditorProps) {
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

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadExperienceData()
  }, [])

  const loadExperienceData = async () => {
    try {
      // Try API first (development mode)
      const response = await fetch('/api/admin/experience')
      if (response.ok) {
        const data = await response.json()
        setExperiences(data)
        setIsLoading(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    // Fallback to localStorage (static export mode)
    try {
      if (typeof window !== 'undefined') {
        const localData = localStorage.getItem('admin_experience_data')
        if (localData) {
          setExperiences(JSON.parse(localData))
          setIsLoading(false)
          return
        }
      }
    } catch (error) {
      console.log('No localStorage data found')
    }

    setIsLoading(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus('idle')
    setError('')

    try {
      // Try API first (development mode)
      const response = await fetch('/api/admin/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experiences),
      })

      if (response.ok) {
        const result = await response.json()
        setSaveStatus('success')
        console.log('Experience saved successfully via API:', result)
        setIsSaving(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    // Fallback to localStorage (static export mode)
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_experience_data', JSON.stringify(experiences))
        setSaveStatus('success')
        console.log('Experience saved to localStorage (static export mode)')
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      setSaveStatus('error')
      setError('Failed to save experience. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

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
        <div className="flex items-center space-x-3">
          {onBack && (
            <button
              onClick={onBack}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          )}
          <button
            onClick={addExperience}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Add Experience
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Save Status */}
      {saveStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-4 text-green-400">
          <div className="font-semibold mb-2">✅ Experience saved successfully!</div>
          <div className="text-sm">
            {typeof window !== 'undefined' && localStorage.getItem('admin_experience_data') 
              ? 'Changes saved locally. Use the export options below to apply to your main site.'
              : 'Changes have been automatically applied to your main site.'
            }
          </div>
        </div>
      )}

      {saveStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-4 text-red-400">
          <div className="font-semibold mb-2">❌ Failed to save experience</div>
          <div className="text-sm">{error || 'Please try again.'}</div>
        </div>
      )}

      {/* Data Export Helper for Static Export Mode */}
      <DataExportHelper />

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
