'use client'

import { useState } from 'react'

interface SkillsData {
  languages: string[]
  frameworks: string[]
  data_ml: string[]
  cloud_devops: string[]
  business: string[]
}

interface AdminSkillsEditorProps {
  onBack?: () => void
}

export function AdminSkillsEditor({ onBack }: AdminSkillsEditorProps) {
  const [skills, setSkills] = useState<SkillsData>({
    languages: ['Python', 'R', 'JavaScript', 'TypeScript'],
    frameworks: ['Next.js', 'Vue', 'React', 'TensorFlow', 'PyTorch'],
    data_ml: ['Time-series (GARCH/NF/GAN)', 'Synthetic data generation', 'ETL & feature engineering'],
    cloud_devops: ['Azure (SWA, Functions, Cosmos DB)', 'GitHub Actions', 'Docker'],
    business: ['Tokenization (RWAs)', 'Quant finance & risk', 'Go-to-market & partnerships']
  })

  const updateCategory = (category: keyof SkillsData, value: string) => {
    setSkills(prev => ({
      ...prev,
      [category]: value.split(',').map(s => s.trim()).filter(s => s)
    }))
  }

  const categories = [
    { key: 'languages', label: 'Programming Languages', icon: '💻' },
    { key: 'frameworks', label: 'Frameworks & Libraries', icon: '⚡' },
    { key: 'data_ml', label: 'Data & ML', icon: '🤖' },
    { key: 'cloud_devops', label: 'Cloud & DevOps', icon: '☁️' },
    { key: 'business', label: 'Business & Strategy', icon: '💼' }
  ] as const

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Skills Editor</h2>
          <p className="text-gray-400">Manage your technical and business skills</p>
        </div>
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
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.key} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className="text-lg font-semibold text-white">{category.label}</h3>
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Skills (comma-separated)
              </label>
              <textarea
                value={skills[category.key].join(', ')}
                onChange={(e) => updateCategory(category.key, e.target.value)}
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                placeholder="Enter skills separated by commas..."
              />
              <p className="text-gray-500 text-sm mt-2">
                Current skills: {skills[category.key].length} items
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.key} className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">{category.label}</h4>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
