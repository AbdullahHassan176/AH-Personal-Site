'use client'

import { useState, useEffect } from 'react'
import { DataExportHelper } from './DataExportHelper'

interface ContactData {
  email: string
  phone: string
  calendar: string
  social: Array<{
    platform: string
    url: string
  }>
}

interface AdminContactEditorProps {
  onBack?: () => void
}

export function AdminContactEditor({ onBack }: AdminContactEditorProps) {
  const [contact, setContact] = useState<ContactData>({
    email: 'abdullah.hassan@globalnext.rocks',
    phone: '+27 82 551 1243',
    calendar: '',
    social: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-hassan-635a831b6/' }
    ]
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadContactData()
  }, [])

  const loadContactData = async () => {
    try {
      const response = await fetch('/api/admin/contact')
      if (response.ok) {
        const data = await response.json()
        setContact(data)
        setIsLoading(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        const localData = localStorage.getItem('admin_contact_data')
        if (localData) {
          setContact(JSON.parse(localData))
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
      const response = await fetch('/api/admin/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      })

      if (response.ok) {
        const result = await response.json()
        setSaveStatus('success')
        console.log('Contact saved successfully via API:', result)
        setIsSaving(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_contact_data', JSON.stringify(contact))
        setSaveStatus('success')
        console.log('Contact saved to localStorage (static export mode)')
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      setSaveStatus('error')
      setError('Failed to save contact. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const addSocial = () => {
    setContact(prev => ({
      ...prev,
      social: [...prev.social, { platform: '', url: '' }]
    }))
  }

  const removeSocial = (index: number) => {
    setContact(prev => ({
      ...prev,
      social: prev.social.filter((_, i) => i !== index)
    }))
  }

  const updateSocial = (index: number, field: 'platform' | 'url', value: string) => {
    setContact(prev => ({
      ...prev,
      social: prev.social.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Contact Editor</h2>
          <p className="text-gray-400">Manage your contact information and social links</p>
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
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Save Status */}
      {saveStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-4 text-green-400">
          <div className="font-semibold mb-2">✅ Contact saved successfully!</div>
          <div className="text-sm">
            {typeof window !== 'undefined' && localStorage.getItem('admin_contact_data') 
              ? 'Changes saved locally. Use the export options below to apply to your main site.'
              : 'Changes have been automatically applied to your main site.'
            }
          </div>
        </div>
      )}

      {saveStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-4 text-red-400">
          <div className="font-semibold mb-2">❌ Failed to save contact</div>
          <div className="text-sm">{error || 'Please try again.'}</div>
        </div>
      )}

      {/* Data Export Helper for Static Export Mode */}
      <DataExportHelper />

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Phone</label>
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => setContact(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-300 font-medium mb-2">Calendar Link</label>
          <input
            type="url"
            value={contact.calendar}
            onChange={(e) => setContact(prev => ({ ...prev, calendar: e.target.value }))}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            placeholder="https://calendly.com/..."
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Social Links</h3>
          <button
            onClick={addSocial}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Add Social Link
          </button>
        </div>
        <div className="space-y-4">
          {contact.social.map((social, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-2">Platform</label>
                <input
                  type="text"
                  value={social.platform}
                  onChange={(e) => updateSocial(index, 'platform', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="LinkedIn, Twitter, GitHub..."
                />
              </div>
              <div className="flex-2">
                <label className="block text-gray-300 font-medium mb-2">URL</label>
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) => updateSocial(index, 'url', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="https://..."
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => removeSocial(index)}
                  className="text-red-400 hover:text-red-300 transition-colors p-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">Preview</h3>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Email</div>
              <div className="text-white">{contact.email}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Phone</div>
              <div className="text-white">{contact.phone}</div>
            </div>
          </div>
          {contact.social.length > 0 && (
            <div className="mt-4">
              <div className="text-gray-400 text-sm mb-2">Social Links</div>
              <div className="space-y-1">
                {contact.social.map((social, index) => (
                  <div key={index} className="text-white">
                    {social.platform}: {social.url}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
