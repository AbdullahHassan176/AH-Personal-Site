'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

interface ProjectAnalyticsProps {
  categoryData: Array<{ category: string; count: number }>
  techData: Array<{ tech: string; count: number }>
  yearData: Array<{ year: number; count: number }>
}

const PIE_COLORS = ['#6B1F2A', '#C6A15B', '#1F6F54', '#8B5E3C', '#3D3830']

const tooltipStyle = {
  backgroundColor: '#FBF7F1',
  border: '1px solid rgba(198,161,91,0.30)',
  borderRadius: 10,
  color: '#1A1A1A',
  fontSize: 12,
}

export function ProjectAnalytics({ categoryData, techData, yearData }: ProjectAnalyticsProps) {
  return (
    <section className="py-20 bg-[#FBF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-4">
            Insights
          </p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#1A1A1A]">
            Project <span className="gradient-text-brand">Analytics</span>
          </h2>
          <p className="text-[#5F5A55] text-lg mt-4 max-w-2xl mx-auto">
            Data-driven insights into project distribution, technology usage, and development trends
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Projects by Category */}
          <div className="holographic-card p-8">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Projects by Category</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <XAxis dataKey="category" tick={{ fill: '#5F5A55', fontSize: 11 }} axisLine={{ stroke: 'rgba(198,161,91,0.20)' }} tickLine={false} />
                  <YAxis tick={{ fill: '#5F5A55', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(198,161,91,0.06)' }} />
                  <Bar dataKey="count" fill="#6B1F2A" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Technology Usage */}
          <div className="holographic-card p-8">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Technology Usage</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techData.slice(0, 5)}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="count"
                  >
                    {techData.slice(0, 5).map((_, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="holographic-card p-8">
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Project Timeline</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearData}>
                <XAxis dataKey="year" tick={{ fill: '#5F5A55', fontSize: 11 }} axisLine={{ stroke: 'rgba(198,161,91,0.20)' }} tickLine={false} />
                <YAxis tick={{ fill: '#5F5A55', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#C6A15B"
                  strokeWidth={3}
                  dot={{ fill: '#6B1F2A', strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
