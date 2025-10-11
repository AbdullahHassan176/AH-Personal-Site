import { generateMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Blog - Abdullah Hassan',
  description: 'Insights on AI, quantitative finance, and technology leadership from Abdullah Hassan. Stay updated with the latest trends in fintech and data analytics.',
  keywords: ['AI Blog', 'Quantitative Finance', 'Technology Leadership', 'Fintech Insights', 'Data Analytics', 'Machine Learning'],
  url: '/blog',
})

// Sample blog posts - in a real implementation, you'd fetch these from a CMS or markdown files
const blogPosts = [
  {
    id: 'ai-in-finance-2024',
    title: 'The Future of AI in Quantitative Finance',
    excerpt: 'Exploring how artificial intelligence is revolutionizing quantitative finance and what it means for the industry.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Finance',
    slug: 'ai-in-finance-2024'
  },
  {
    id: 'asset-tokenization-guide',
    title: 'Complete Guide to Real-World Asset Tokenization',
    excerpt: 'Understanding the fundamentals of tokenizing real-world assets and the opportunities it presents.',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Blockchain',
    slug: 'asset-tokenization-guide'
  },
  {
    id: 'data-analytics-leadership',
    title: 'Leading Data Analytics Teams in 2024',
    excerpt: 'Best practices for building and managing high-performing data analytics teams in today\'s competitive landscape.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Leadership',
    slug: 'data-analytics-leadership'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts on AI, quantitative finance, and technology leadership. 
            Stay updated with the latest trends and insights from the intersection of technology and finance.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700"
            >
              <div className="mb-4">
                <span className="inline-block bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-white hover:text-yellow-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              More Content Coming Soon
            </h3>
            <p className="text-gray-300 mb-6">
              I'm working on more in-depth articles about AI, finance, and technology leadership. 
              Subscribe to stay updated!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
