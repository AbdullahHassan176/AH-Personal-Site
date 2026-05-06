import { AboutHero } from '@/components/sections/AboutHero'
import { AboutContent } from '@/components/sections/AboutContent'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { EducationSection } from '@/components/sections/EducationSection'
import { readJSON, readYAML } from '@/lib/data'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'About Abdullah Hassan — Quant Finance Modeller & AI Founder',
  description:
    'Actuarial-trained financial modeller and AI founder — Deloitte digital assets advisory, MSc NF-GARCH research, Safe Labs, Global Next (RWA logistics), Unamani AI consultancy.',
  keywords: ['Abdullah Hassan biography', 'Actuarial Science', 'Deloitte Digital Assets', 'DCF modeller', 'Dubai'],
  url: '/about',
})

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