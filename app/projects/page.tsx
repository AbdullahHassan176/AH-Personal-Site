import { ProjectsHero } from '@/components/sections/ProjectsHero'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { WorkSamplesSection } from '@/components/sections/WorkSamplesSection'
import { ProjectAnalytics } from '@/components/sections/ProjectAnalytics'
import { readJSON } from '@/lib/data'
import type { WorkSample } from '@/lib/data'
import { projectCountByCategory, techFrequency, projectsByYear } from '@/lib/metrics'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Projects - Abdullah Hassan',
  description: 'Projects and illustrative financial modelling samples from Abdullah Hassan: RWA tokenization, NF-GARCH research, trade portals, DCF / ETF NAV / lending workbooks.',
  keywords: ['Abdullah Hassan Projects', 'DCF Model', 'ETF NAV', 'Financial Modelling', 'AI Projects', 'Tokenization', 'Portfolio'],
  url: '/projects',
})

export default function ProjectsPage() {
  const projects = readJSON('projects.json')
  const workSamples = readJSON('work-samples.json') as WorkSample[]
  const contact = readJSON('contact.json') as { email: string }
  const categoryData = projectCountByCategory(projects)
  const techData = techFrequency(projects)
  const yearData = projectsByYear(projects)
  
  return (
    <>
      <ProjectsHero />
      <WorkSamplesSection samples={workSamples} contactEmail={contact.email} />
      <ProjectsGrid projects={projects} />
      <ProjectAnalytics 
        categoryData={categoryData}
        techData={techData}
        yearData={yearData}
      />
    </>
  )
}

