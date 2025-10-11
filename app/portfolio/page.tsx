import { PortfolioHeader } from '@/components/sections/PortfolioHeader'
import { PortfolioFilters } from '@/components/sections/PortfolioFilters'
import { FeaturedShowcase } from '@/components/sections/FeaturedShowcase'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ProjectStats } from '@/components/sections/ProjectStats'
import { readJSON } from '@/lib/data'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Portfolio - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s comprehensive portfolio of innovative projects, academic research, and venture presentations spanning AI, finance, logistics, and emerging technologies.',
  keywords: ['Abdullah Hassan Portfolio', 'Professional Portfolio', 'AI Projects', 'Technology Showcase', 'Innovation Portfolio'],
  url: '/portfolio',
})

export default function PortfolioPage() {
  const projects = readJSON('projects.json')
  
  return (
    <>
      <PortfolioHeader />
      <PortfolioFilters />
      <FeaturedShowcase />
      <ProjectsGrid projects={projects} />
      <ProjectStats />
    </>
  )
}
