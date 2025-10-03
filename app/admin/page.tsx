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
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user is authenticated
    const authToken = localStorage.getItem('admin_auth')
    const adminUser = localStorage.getItem('admin_user')
    
    if (authToken === 'true' && adminUser === 'abdullahh1610@gmail.com') {
      setIsAuthorized(true)
    } else {
      setIsAuthorized(false)
    }
    setIsLoading(false)
  }, [])

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    localStorage.removeItem('admin_user')
    window.location.href = '/admin/login'
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-400">You need to be logged in to access the admin panel.</p>
          <div className="mt-6">
            <a
              href="/admin/login"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Go to Login
            </a>
          </div>
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
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
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
        {activeTab === 'dashboard' && <AdminDashboard onNavigate={setActiveTab} />}
        {activeTab === 'profile' && <AdminProfileEditor onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'experience' && <AdminExperienceEditor onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'projects' && <AdminProjectsEditor onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'skills' && <AdminSkillsEditor onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'writing' && <AdminWritingEditor onBack={() => setActiveTab('dashboard')} />}
        {activeTab === 'contact' && <AdminContactEditor onBack={() => setActiveTab('dashboard')} />}
      </div>
    </div>
  )
}
