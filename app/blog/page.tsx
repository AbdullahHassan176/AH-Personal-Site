import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Blog - Abdullah Hassan',
  description: 'Insights on AI, quantitative finance, and technology leadership from Abdullah Hassan.',
  keywords: ['AI Blog', 'Quantitative Finance', 'Technology Leadership', 'Fintech Insights', 'Data Analytics'],
  url: '/blog',
})

const blogPosts = [
  {
    id: 'ai-in-finance',
    title: 'The Future of AI in Quantitative Finance',
    excerpt: 'Exploring how artificial intelligence is revolutionising quantitative finance, from NF-GARCH models to GAN-based synthetic data generation and what it means for risk management.',
    date: '10 Mar 2025',
    readTime: '5 min read',
    category: 'AI & Finance',
  },
  {
    id: 'asset-tokenization-guide',
    title: 'Real-World Asset Tokenization: Building the Infrastructure',
    excerpt: 'A deep dive into the architecture behind tokenising logistics assets and RWAs — from smart contract design to oracle connectors and investor portals.',
    date: '18 Feb 2025',
    readTime: '8 min read',
    category: 'Blockchain',
  },
  {
    id: 'data-analytics-leadership',
    title: 'Leading Data & AI Teams Across Geographies',
    excerpt: 'Lessons from building and managing high-performing analytics and AI teams spanning South Africa, UAE, and global remote operations.',
    date: '22 Jan 2025',
    readTime: '6 min read',
    category: 'Leadership',
  },
]

const categoryColor: Record<string, { bg: string; color: string }> = {
  'AI & Finance': { bg: 'rgba(107,31,42,0.10)',  color: '#6B1F2A' },
  'Blockchain':   { bg: 'rgba(31,111,84,0.10)',   color: '#1F6F54' },
  'Leadership':   { bg: 'rgba(198,161,91,0.15)',  color: '#C6A15B' },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F1]">

      {/* ── Hero ── */}
      <section className="pt-28 pb-16 bg-[#FBF7F1]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-[#5F5A55] text-[11px] font-medium tracking-[0.35em] uppercase mb-6">
            Writing
          </p>
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-[#1A1A1A] leading-tight">
            Blog &amp;{' '}
            <span className="gradient-text-brand">Insights</span>
          </h1>
          <p className="text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed">
            Thoughts on AI, quantitative finance, and technology leadership — from the intersection of
            deep technical expertise and entrepreneurial experience.
          </p>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section className="py-16" style={{ background: 'rgba(245,239,230,0.30)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const badge = categoryColor[post.category] ?? categoryColor['AI & Finance']
              return (
                <article key={post.id} className="holographic-card p-7 flex flex-col">
                  {/* Category badge */}
                  <span
                    className="self-start text-[11px] font-mono font-medium px-3 py-1 rounded-full mb-5"
                    style={{
                      background: badge.bg,
                      border: `1px solid ${badge.color}40`,
                      color: badge.color,
                    }}
                  >
                    {post.category}
                  </span>

                  <h2 className="text-lg font-playfair font-bold text-[#1A1A1A] mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-[#5F5A55] text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(198,161,91,0.15)]">
                    <span className="text-[#8C8479] text-xs font-mono">{post.date}</span>
                    <span className="text-[#8C8479] text-xs font-mono">{post.readTime}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Coming soon ── */}
      <section className="py-20 bg-[#FBF7F1]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="liquid-metal-card p-10">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
              style={{ background: '#6B1F2A' }}
            >
              <svg className="w-7 h-7 text-[#FBF7F1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>

            <h3 className="text-2xl font-playfair font-bold text-[#1A1A1A] mb-3">
              More Content{' '}
              <span className="gradient-text-brand">Coming Soon</span>
            </h3>
            <p className="text-[#5F5A55] mb-8 leading-relaxed">
              I&apos;m working on in-depth articles about AI, quantitative finance, and technology leadership.
              Get in touch to be notified when new posts go live.
            </p>
            <Link
              href="/contact"
              className="btn-burgundy inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
