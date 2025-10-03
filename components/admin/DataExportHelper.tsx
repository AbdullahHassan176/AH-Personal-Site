'use client'

import { useState, useEffect } from 'react'

export function DataExportHelper() {
  const [showHelper, setShowHelper] = useState(false)
  const [hasData, setHasData] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage after component mounts to avoid hydration issues
    const profileData = localStorage.getItem('admin_profile_data')
    const experienceData = localStorage.getItem('admin_experience_data')
    const projectsData = localStorage.getItem('admin_projects_data')
    const skillsData = localStorage.getItem('admin_skills_data')
    const writingData = localStorage.getItem('admin_writing_data')
    const contactData = localStorage.getItem('admin_contact_data')
    setHasData(!!(profileData || experienceData || projectsData || skillsData || writingData || contactData))
  }, [])

  if (!mounted) {
    return null
  }

  const exportData = () => {
    const dataTypes = [
      { key: 'admin_profile_data', filename: 'profile.json' },
      { key: 'admin_experience_data', filename: 'experience.json' },
      { key: 'admin_projects_data', filename: 'projects.json' },
      { key: 'admin_skills_data', filename: 'skills.yaml' },
      { key: 'admin_writing_data', filename: 'writing.json' },
      { key: 'admin_contact_data', filename: 'contact.json' }
    ]

    dataTypes.forEach(({ key, filename }) => {
      const data = localStorage.getItem(key)
      if (data) {
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    })
  }

  const copyToClipboard = () => {
    const dataTypes = [
      { key: 'admin_profile_data', filename: 'profile.json' },
      { key: 'admin_experience_data', filename: 'experience.json' },
      { key: 'admin_projects_data', filename: 'projects.json' },
      { key: 'admin_skills_data', filename: 'skills.yaml' },
      { key: 'admin_writing_data', filename: 'writing.json' },
      { key: 'admin_contact_data', filename: 'contact.json' }
    ]

    const allData = dataTypes.map(({ key, filename }) => {
      const data = localStorage.getItem(key)
      return data ? `// ${filename}\n${data}\n\n` : ''
    }).join('')

    if (allData.trim()) {
      navigator.clipboard.writeText(allData)
      alert('All data copied to clipboard! Paste the relevant sections into their respective /data/*.json files')
    }
  }

  if (!hasData) {
    return null
  }

  return (
    <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-blue-400 font-semibold">📋 Static Export Mode Detected</h4>
          <p className="text-blue-300 text-sm">Your changes are saved locally. To apply them to your main site:</p>
        </div>
        <button
          onClick={() => setShowHelper(!showHelper)}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {showHelper ? 'Hide' : 'Show'} Instructions
        </button>
      </div>

      {showHelper && (
        <div className="space-y-3">
          <div className="flex space-x-3">
            <button
              onClick={exportData}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              📥 Download JSON
            </button>
            <button
              onClick={copyToClipboard}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
            >
              📋 Copy to Clipboard
            </button>
          </div>
          
          <div className="text-sm text-blue-300">
            <p><strong>Option 1:</strong> Download the JSON file and replace <code>/data/profile.json</code></p>
            <p><strong>Option 2:</strong> Copy the data and manually update <code>/data/profile.json</code></p>
            <p><strong>Option 3:</strong> Run <code>npm run dev</code> locally to use the API endpoints</p>
          </div>
        </div>
      )}
    </div>
  )
}
