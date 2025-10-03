import { ProjectsHero } from '@/components/sections/ProjectsHero'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ProjectAnalytics } from '@/components/sections/ProjectAnalytics'
import { readJSON } from '@/lib/data'
import { projectCountByCategory, techFrequency, projectsByYear } from '@/lib/metrics'

export const metadata = {
  title: 'Projects - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s portfolio of innovative projects spanning AI research, tokenization platforms, and logistics solutions.',
}

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
