'use client'

import { useState, useEffect } from 'react'
import { DataExportHelper } from './DataExportHelper'

interface ProjectEntry {
  name: string
  year: number
  category: string
  summary: string
  outcomes: string[]
  stack: string[]
  links: {
    site: string
    repo: string
    paper?: string
  }
}

interface AdminProjectsEditorProps {
  onBack?: () => void
}

export function AdminProjectsEditor({ onBack }: AdminProjectsEditorProps) {
  const [projects, setProjects] = useState<ProjectEntry[]>([
    {
      name: 'Global Edge — Tokenization Platform',
      year: 2025,
      category: 'Web3 / Tokenization',
      summary: 'Investor/Issuer portals for tokenizing logistics assets (shipping containers) and broader RWAs.',
      outcomes: [
        'Designed Azure-first architecture (SWA, Functions, Cosmos DB)',
        'Built issuer/investor flows, oracle connectors (Chainlink)'
      ],
      stack: ['Next.js', 'Cosmos DB', 'Azure Functions', 'Chainlink'],
      links: {
        site: 'https://theglobaledge.io/',
        repo: '',
        paper: ''
      }
    }
  ])

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadProjectsData()
  }, [])

  const loadProjectsData = async () => {
    try {
      const response = await fetch('/api/admin/projects')
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
        setIsLoading(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        const localData = localStorage.getItem('admin_projects_data')
        if (localData) {
          setProjects(JSON.parse(localData))
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
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projects),
      })

      if (response.ok) {
        const result = await response.json()
        setSaveStatus('success')
        console.log('Projects saved successfully via API:', result)
        setIsSaving(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_projects_data', JSON.stringify(projects))
        setSaveStatus('success')
        console.log('Projects saved to localStorage (static export mode)')
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      setSaveStatus('error')
      setError('Failed to save projects. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const addProject = () => {
    setProjects(prev => [...prev, {
      name: '',
      year: new Date().getFullYear(),
      category: '',
      summary: '',
      outcomes: [''],
      stack: [''],
      links: { site: '', repo: '', paper: '' }
    }])
  }

  const removeProject = (index: number) => {
    setProjects(prev => prev.filter((_, i) => i !== index))
  }

  const updateProject = (index: number, field: keyof ProjectEntry, value: any) => {
    setProjects(prev => prev.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    ))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Projects Editor</h2>
          <p className="text-gray-400">Manage your project portfolio</p>
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
            onClick={addProject}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Add Project
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
          <div className="font-semibold mb-2">Projects saved successfully!</div>
          <div className="text-sm">
            {typeof window !== 'undefined' && localStorage.getItem('admin_projects_data') 
              ? 'Changes saved locally. Use the export options below to apply to your main site.'
              : 'Changes have been automatically applied to your main site.'
            }
          </div>
        </div>
      )}

      {saveStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-4 text-red-400">
          <div className="font-semibold mb-2">Failed to save projects</div>
          <div className="text-sm">{error || 'Please try again.'}</div>
        </div>
      )}

      {/* Data Export Helper for Static Export Mode */}
      <DataExportHelper />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Project #{index + 1}</h3>
              <button
                onClick={() => removeProject(index)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Project Name</label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Year</label>
                <input
                  type="number"
                  value={project.year}
                  onChange={(e) => updateProject(index, 'year', parseInt(e.target.value))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Category</label>
                <select
                  value={project.category}
                  onChange={(e) => updateProject(index, 'category', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select Category</option>
                  <option value="Web3 / Tokenization">Web3 / Tokenization</option>
                  <option value="AI & Quant Research">AI & Quant Research</option>
                  <option value="Logistics">Logistics</option>
                  <option value="FinTech">FinTech</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Tech Stack</label>
                <input
                  type="text"
                  value={project.stack.join(', ')}
                  onChange={(e) => updateProject(index, 'stack', e.target.value.split(', '))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Next.js, React, TypeScript..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2">Summary</label>
              <textarea
                value={project.summary}
                onChange={(e) => updateProject(index, 'summary', e.target.value)}
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2">Outcomes</label>
              <div className="space-y-2">
                {project.outcomes.map((outcome, oIndex) => (
                  <input
                    key={oIndex}
                    type="text"
                    value={outcome}
                    onChange={(e) => {
                      const newOutcomes = [...project.outcomes]
                      newOutcomes[oIndex] = e.target.value
                      updateProject(index, 'outcomes', newOutcomes)
                    }}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Enter outcome..."
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Links</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Website</label>
                  <input
                    type="url"
                    value={project.links.site}
                    onChange={(e) => updateProject(index, 'links', { ...project.links, site: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Repository</label>
                  <input
                    type="url"
                    value={project.links.repo}
                    onChange={(e) => updateProject(index, 'links', { ...project.links, repo: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Paper</label>
                  <input
                    type="url"
                    value={project.links.paper || ''}
                    onChange={(e) => updateProject(index, 'links', { ...project.links, paper: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
