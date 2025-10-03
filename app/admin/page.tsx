'use client'

import { useState, useEffect } from 'react'
import { AdminDashboard } from '@/components/admin/AdminDashboard'
import { AdminProfileEditor } from '@/components/admin/AdminProfileEditor'
import { AdminExperienceEditor } from '@/components/admin/AdminExperienceEditor'
import { AdminProjectsEditor } from '@/components/admin/AdminProjectsEditor'
import { AdminSkillsEditor } from '@/components/admin/AdminSkillsEditor'
import { AdminWritingEditor } from '@/components/admin/AdminWritingEditor'
import { AdminContactEditor } from '@/components/admin/AdminContactEditor'

export default function AdminPage() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    // Check if admin mode is enabled
    const isAdminMode = process.env.NEXT_PUBLIC_ADMIN === '1'
    setIsAuthorized(isAdminMode)
  }, [])

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-400">Admin panel is not available in production mode.</p>
          <p className="text-gray-500 text-sm mt-2">
            Set NEXT_PUBLIC_ADMIN=1 in your environment variables to enable admin mode.
          </p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'writing', label: 'Writing', icon: '✍️' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-gray-400 text-sm">Manage your personal website content</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Admin Mode
              </span>
              <a
                href="/"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-yellow-400 text-yellow-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && <AdminDashboard />}
        {activeTab === 'profile' && <AdminProfileEditor />}
        {activeTab === 'experience' && <AdminExperienceEditor />}
        {activeTab === 'projects' && <AdminProjectsEditor />}
        {activeTab === 'skills' && <AdminSkillsEditor />}
        {activeTab === 'writing' && <AdminWritingEditor />}
        {activeTab === 'contact' && <AdminContactEditor />}
      </div>
    </div>
  )
}
