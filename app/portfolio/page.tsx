import { PortfolioHeader } from '@/components/sections/PortfolioHeader'
import { PortfolioFilters } from '@/components/sections/PortfolioFilters'
import { FeaturedShowcase } from '@/components/sections/FeaturedShowcase'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ProjectStats } from '@/components/sections/ProjectStats'
import { readJSON } from '@/lib/data'

export const metadata = {
  title: 'Portfolio - Abdullah Hassan',
  description: 'Explore my collection of innovative projects, academic research, and venture presentations spanning AI, finance, logistics, and emerging technologies.',
}

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
