import { ProjectsHero } from '@/components/sections/ProjectsHero'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ProjectAnalytics } from '@/components/sections/ProjectAnalytics'
import { readJSON } from '@/lib/data'
import { projectCountByCategory, techFrequency, projectsByYear } from '@/lib/metrics'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Projects - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s portfolio of innovative projects spanning AI research, tokenization platforms, and logistics solutions. Discover cutting-edge technology implementations and business solutions.',
  keywords: ['Abdullah Hassan Projects', 'AI Projects', 'Technology Portfolio', 'Innovation Projects', 'Software Development'],
  url: '/projects',
})

export default function ProjectsPage() {
  const projects = readJSON('projects.json')
  const categoryData = projectCountByCategory(projects)
  const techData = techFrequency(projects)
  const yearData = projectsByYear(projects)
  
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ProjectAnalytics 
        categoryData={categoryData}
        techData={techData}
        yearData={yearData}
      />
    </>
  )
}

