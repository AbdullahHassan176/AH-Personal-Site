'use client'

import { useState } from 'react'

interface ContactData {
  email: string
  phone: string
  calendar: string
  social: Array<{
    platform: string
    url: string
  }>
}

export function AdminContactEditor() {
  const [contact, setContact] = useState<ContactData>({
    email: 'abdullah.hassan@globalnext.rocks',
    phone: '+27 82 551 1243',
    calendar: '',
    social: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-hassan-635a831b6/' }
    ]
  })

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
      <div>
        <h2 className="text-2xl font-bold text-white">Contact Editor</h2>
        <p className="text-gray-400">Manage your contact information and social links</p>
      </div>

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
