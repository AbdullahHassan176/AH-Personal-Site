import { SkillsHeader } from '@/components/sections/SkillsHeader'
import { TechnicalSkills } from '@/components/sections/TechnicalSkills'
import { SoftSkills } from '@/components/sections/SoftSkills'
import { SkillsMatrix } from '@/components/sections/SkillsMatrix'

export const metadata = {
  title: 'Skills Dashboard - Abdullah Hassan',
  description: 'Interactive visualization of technical expertise and soft skills across AI, finance, leadership, and innovation domains.',
}

export default function SkillsPage() {
  return (
    <>
      <SkillsHeader />
      <TechnicalSkills />
      <SoftSkills />
      <SkillsMatrix />
    </>
  )
}

