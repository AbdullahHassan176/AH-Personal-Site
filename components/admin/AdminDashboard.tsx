'use client'

import { useState, useEffect } from 'react'

interface AdminDashboardProps {
  onNavigate?: (tab: string) => void
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [stats, setStats] = useState({
    profile: { lastModified: '', size: 0 },
    experience: { count: 0, lastModified: '' },
    projects: { count: 0, lastModified: '' },
    skills: { count: 0, lastModified: '' },
    writing: { count: 0, lastModified: '' },
    contact: { lastModified: '', size: 0 },
  })

  useEffect(() => {
    // In a real implementation, you would fetch this data from your backend
    // For now, we'll use mock data
    setStats({
      profile: { lastModified: '2024-01-15', size: 2.1 },
      experience: { count: 3, lastModified: '2024-01-15' },
      projects: { count: 3, lastModified: '2024-01-15' },
      skills: { count: 20, lastModified: '2024-01-15' },
      writing: { count: 1, lastModified: '2024-01-15' },
      contact: { lastModified: '2024-01-15', size: 0.8 },
    })
  }, [])

  const quickActions = [
    {
      title: 'Add New Project',
      description: 'Create a new project entry',
      icon: '🚀',
      action: () => onNavigate?.('projects'),
    },
    {
      title: 'Update Experience',
      description: 'Modify work experience details',
      icon: '💼',
      action: () => onNavigate?.('experience'),
    },
    {
      title: 'Edit Skills',
      description: 'Add or modify technical skills',
      icon: '⚡',
      action: () => onNavigate?.('skills'),
    },
    {
      title: 'Add Writing',
      description: 'Create new writing entry',
      icon: '✍️',
      action: () => onNavigate?.('writing'),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-teal-400/10 rounded-2xl p-8 border border-yellow-400/20">
        <h2 className="text-3xl font-bold text-white mb-4">Welcome to Admin Panel</h2>
        <p className="text-gray-300 text-lg">
          Manage your personal website content with ease. All changes are saved locally and will be reflected on your site.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
          onClick={() => onNavigate?.('profile')}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-750 transition-all text-left group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Profile</h3>
            <span className="text-2xl">👤</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Last Modified: {stats.profile.lastModified}</div>
            <div className="text-sm text-gray-400">Size: {stats.profile.size} KB</div>
          </div>
          <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit →
          </div>
        </button>

        <button
          onClick={() => onNavigate?.('experience')}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-750 transition-all text-left group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Experience</h3>
            <span className="text-2xl">💼</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Entries: {stats.experience.count}</div>
            <div className="text-sm text-gray-400">Last Modified: {stats.experience.lastModified}</div>
          </div>
          <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit →
          </div>
        </button>

        <button
          onClick={() => onNavigate?.('projects')}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-750 transition-all text-left group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Projects</h3>
            <span className="text-2xl">🚀</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Entries: {stats.projects.count}</div>
            <div className="text-sm text-gray-400">Last Modified: {stats.projects.lastModified}</div>
          </div>
          <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit →
          </div>
        </button>

        <button
          onClick={() => onNavigate?.('skills')}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-750 transition-all text-left group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Skills</h3>
            <span className="text-2xl">⚡</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Total Skills: {stats.skills.count}</div>
            <div className="text-sm text-gray-400">Last Modified: {stats.skills.lastModified}</div>
          </div>
          <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit →
          </div>
        </button>

        <button
          onClick={() => onNavigate?.('writing')}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-750 transition-all text-left group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Writing</h3>
            <span className="text-2xl">✍️</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Articles: {stats.writing.count}</div>
            <div className="text-sm text-gray-400">Last Modified: {stats.writing.lastModified}</div>
          </div>
          <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit →
          </div>
        </button>

        <button
          onClick={() => onNavigate?.('contact')}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 hover:bg-gray-750 transition-all text-left group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Contact</h3>
            <span className="text-2xl">📞</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Last Modified: {stats.contact.lastModified}</div>
            <div className="text-sm text-gray-400">Size: {stats.contact.size} KB</div>
          </div>
          <div className="mt-4 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit →
          </div>
        </button>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all text-left group"
            >
              <div className="text-3xl mb-3">{action.icon}</div>
              <h4 className="font-semibold text-white mb-2">{action.title}</h4>
              <p className="text-gray-400 text-sm">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Changes */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Recent Changes</h3>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-white">Updated profile image alignment</span>
              </div>
              <span className="text-gray-400 text-sm">2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">+</span>
                <span className="text-white">Added new project: Global Edge Tokenization</span>
              </div>
              <span className="text-gray-400 text-sm">1 hour ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">~</span>
                <span className="text-white">Modified skills section</span>
              </div>
              <span className="text-gray-400 text-sm">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
