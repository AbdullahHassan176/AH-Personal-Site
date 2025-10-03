'use client'

import { useState } from 'react'

interface WritingEntry {
  date: string
  title: string
  topics: string[]
  link: string
}

export function AdminWritingEditor() {
  const [writings, setWritings] = useState<WritingEntry[]>([
    {
      date: '2025-04-20',
      title: 'Synthetic Data in Finance — Three-Part Series',
      topics: ['AI', 'Quant', 'Synthetic Data'],
      link: ''
    }
  ])

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
        <button
          onClick={addWriting}
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Add Entry
        </button>
      </div>

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
