'use client'

import { useState, useEffect } from 'react'
import { DataExportHelper } from './DataExportHelper'

interface WritingEntry {
  date: string
  title: string
  topics: string[]
  link: string
}

interface AdminWritingEditorProps {
  onBack?: () => void
}

export function AdminWritingEditor({ onBack }: AdminWritingEditorProps) {
  const [writings, setWritings] = useState<WritingEntry[]>([
    {
      date: '2025-04-20',
      title: 'Synthetic Data in Finance — Three-Part Series',
      topics: ['AI', 'Quant', 'Synthetic Data'],
      link: ''
    }
  ])

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadWritingData()
  }, [])

  const loadWritingData = async () => {
    try {
      const response = await fetch('/api/admin/writing')
      if (response.ok) {
        const data = await response.json()
        setWritings(data)
        setIsLoading(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        const localData = localStorage.getItem('admin_writing_data')
        if (localData) {
          setWritings(JSON.parse(localData))
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
      const response = await fetch('/api/admin/writing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(writings),
      })

      if (response.ok) {
        const result = await response.json()
        setSaveStatus('success')
        console.log('Writing saved successfully via API:', result)
        setIsSaving(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_writing_data', JSON.stringify(writings))
        setSaveStatus('success')
        console.log('Writing saved to localStorage (static export mode)')
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      setSaveStatus('error')
      setError('Failed to save writing. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const addWriting = () => {
    setWritings(prev => [...prev, {
      date: new Date().toISOString().split('T')[0],
      title: '',
      topics: [''],
      link: ''
    }])
  }

  const removeWriting = (index: number) => {
    setWritings(prev => prev.filter((_, i) => i !== index))
  }

  const updateWriting = (index: number, field: keyof WritingEntry, value: any) => {
    setWritings(prev => prev.map((writing, i) => 
      i === index ? { ...writing, [field]: value } : writing
    ))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Writing & Speaking Editor</h2>
          <p className="text-gray-400">Manage your articles, talks, and presentations</p>
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
            onClick={addWriting}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Add Entry
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
          <div className="font-semibold mb-2">✅ Writing saved successfully!</div>
          <div className="text-sm">
            {typeof window !== 'undefined' && localStorage.getItem('admin_writing_data') 
              ? 'Changes saved locally. Use the export options below to apply to your main site.'
              : 'Changes have been automatically applied to your main site.'
            }
          </div>
        </div>
      )}

      {saveStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-4 text-red-400">
          <div className="font-semibold mb-2">❌ Failed to save writing</div>
          <div className="text-sm">{error || 'Please try again.'}</div>
        </div>
      )}

      {/* Data Export Helper for Static Export Mode */}
      <DataExportHelper />

      <div className="space-y-6">
        {writings.map((writing, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Entry #{index + 1}</h3>
              <button
                onClick={() => removeWriting(index)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={writing.date}
                  onChange={(e) => updateWriting(index, 'date', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Link</label>
                <input
                  type="url"
                  value={writing.link}
                  onChange={(e) => updateWriting(index, 'link', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2">Title</label>
              <input
                type="text"
                value={writing.title}
                onChange={(e) => updateWriting(index, 'title', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                placeholder="Enter title..."
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Topics</label>
              <input
                type="text"
                value={writing.topics.join(', ')}
                onChange={(e) => updateWriting(index, 'topics', e.target.value.split(', ').filter(t => t))}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                placeholder="AI, Quant, Finance..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
