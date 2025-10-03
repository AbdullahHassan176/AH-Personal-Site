'use client'

import { useState, useEffect } from 'react'

interface ProfileData {
  fullName: string
  headline: string
  location: string
  summary: string
  currentFocus: string[]
  education: Array<{
    degree: string
    institution: string
    focus: string
  }>
  emails: string[]
  phones: string[]
  links: {
    website: string
    github: string
    linkedin: string
    twitter: string
  }
}

interface AdminProfileEditorProps {
  onBack?: () => void
}

export function AdminProfileEditor({ onBack }: AdminProfileEditorProps) {
  const [profile, setProfile] = useState<ProfileData>({
    fullName: '',
    headline: '',
    location: '',
    summary: '',
    currentFocus: [''],
    education: [{ degree: '', institution: '', focus: '' }],
    emails: [''],
    phones: [''],
    links: {
      website: '',
      github: '',
      linkedin: '',
      twitter: '',
    },
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Load profile data
    loadProfileData()
  }, [])

  const loadProfileData = async () => {
    try {
      // In a real implementation, you would fetch from your API
      // For now, we'll use the existing data structure
      const mockData: ProfileData = {
        fullName: 'Abdullah Hassan',
        headline: 'Quant-minded AI & Analytics Leader • Tokenization Builder • Operator',
        location: 'United Arab Emirates (Dubai)',
        summary: 'Abdullah Hassan is a results-driven technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization.',
        currentFocus: [
          'Global Edge — tokenization of logistics & RWAs (UAE-first pilot, investor/issuer portals)',
          'Global Marketplace — import/export & containerized trade portal',
          'Quant/AI research — NF-GARCH, GAN/Flow-based synthetic data for finance'
        ],
        education: [
          {
            degree: 'MSc (Mathematical Statistics), in progress',
            institution: 'University of the Witwatersrand (Wits)',
            focus: 'Evaluating the impact of Normalizing Flows on GARCH models for synthetic financial time series generation'
          },
          {
            degree: 'BSc (Actuarial Science) + AI/Statistics',
            institution: '—',
            focus: 'Quantitative finance, time-series modeling, ML/AI'
          }
        ],
        emails: ['abdullah.hassan@globalnext.rocks'],
        phones: ['+27 82 551 1243'],
        links: {
          website: '',
          github: '',
          linkedin: 'https://www.linkedin.com/in/abdullah-hassan-635a831b6/',
          twitter: ''
        }
      }
      setProfile(mockData)
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus('idle')

    try {
      // In a real implementation, you would save to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setSaveStatus('success')
    } catch (error) {
      console.error('Error saving profile:', error)
      setSaveStatus('error')
    } finally {
      setIsSaving(false)
    }
  }

  const addCurrentFocus = () => {
    setProfile(prev => ({
      ...prev,
      currentFocus: [...prev.currentFocus, '']
    }))
  }

  const removeCurrentFocus = (index: number) => {
    setProfile(prev => ({
      ...prev,
      currentFocus: prev.currentFocus.filter((_, i) => i !== index)
    }))
  }

  const updateCurrentFocus = (index: number, value: string) => {
    setProfile(prev => ({
      ...prev,
      currentFocus: prev.currentFocus.map((item, i) => i === index ? value : item)
    }))
  }

  const addEducation = () => {
    setProfile(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', institution: '', focus: '' }]
    }))
  }

  const removeEducation = (index: number) => {
    setProfile(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }))
  }

  const updateEducation = (index: number, field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      education: prev.education.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading profile data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Profile Editor</h2>
          <p className="text-gray-400">Edit your personal profile information</p>
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
            onClick={handleSave}
            disabled={isSaving}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Save Status */}
      {saveStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-4 text-green-400">
          Profile saved successfully!
        </div>
      )}

      {saveStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-4 text-red-400">
          Failed to save profile. Please try again.
        </div>
      )}

      {/* Basic Information */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={profile.fullName}
              onChange={(e) => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Location</label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-300 font-medium mb-2">Headline</label>
          <input
            type="text"
            value={profile.headline}
            onChange={(e) => setProfile(prev => ({ ...prev, headline: e.target.value }))}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-300 font-medium mb-2">Summary</label>
          <textarea
            value={profile.summary}
            onChange={(e) => setProfile(prev => ({ ...prev, summary: e.target.value }))}
            rows={4}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Current Focus */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Current Focus</h3>
          <button
            onClick={addCurrentFocus}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Add Focus
          </button>
        </div>
        <div className="space-y-4">
          {profile.currentFocus.map((focus, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                value={focus}
                onChange={(e) => updateCurrentFocus(index, e.target.value)}
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                placeholder="Enter focus area..."
              />
              <button
                onClick={() => removeCurrentFocus(index)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Education</h3>
          <button
            onClick={addEducation}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Add Education
          </button>
        </div>
        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-medium">Education #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Institution</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    className="w-full bg-gray-600 border border-gray-500 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-300 font-medium mb-2">Focus</label>
                <input
                  type="text"
                  value={edu.focus}
                  onChange={(e) => updateEducation(index, 'focus', e.target.value)}
                  className="w-full bg-gray-600 border border-gray-500 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              value={profile.emails[0] || ''}
              onChange={(e) => setProfile(prev => ({ 
                ...prev, 
                emails: [e.target.value] 
              }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Phone</label>
            <input
              type="tel"
              value={profile.phones[0] || ''}
              onChange={(e) => setProfile(prev => ({ 
                ...prev, 
                phones: [e.target.value] 
              }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-white font-medium mb-4">Social Links</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-medium mb-2">LinkedIn</label>
              <input
                type="url"
                value={profile.links.linkedin}
                onChange={(e) => setProfile(prev => ({ 
                  ...prev, 
                  links: { ...prev.links, linkedin: e.target.value }
                }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">GitHub</label>
              <input
                type="url"
                value={profile.links.github}
                onChange={(e) => setProfile(prev => ({ 
                  ...prev, 
                  links: { ...prev.links, github: e.target.value }
                }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">Twitter</label>
              <input
                type="url"
                value={profile.links.twitter}
                onChange={(e) => setProfile(prev => ({ 
                  ...prev, 
                  links: { ...prev.links, twitter: e.target.value }
                }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">Website</label>
              <input
                type="url"
                value={profile.links.website}
                onChange={(e) => setProfile(prev => ({ 
                  ...prev, 
                  links: { ...prev.links, website: e.target.value }
                }))}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
