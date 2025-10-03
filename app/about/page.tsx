import { AboutHero } from '@/components/sections/AboutHero'
import { AboutContent } from '@/components/sections/AboutContent'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { EducationSection } from '@/components/sections/EducationSection'
import { readJSON, readYAML } from '@/lib/data'

export const metadata = {
  title: 'About Abdullah Hassan - Quant-minded AI & Analytics Leader',
  description: 'Learn about Abdullah Hassan\'s journey as a technologist and entrepreneur operating at the intersection of AI, quantitative finance, and real-world asset tokenization.',
}

export default function AboutPage() {
  const profile = readJSON('profile.json')
  const experience = readJSON('experience.json')
  const skills = readYAML('skills.yaml')
  
  return (
    <>
      <AboutHero profile={profile} />
      <AboutContent profile={profile} />
      <SkillsSection skills={skills} />
      <ExperienceTimeline experience={experience} />
      <EducationSection profile={profile} />
    </>
  )
}