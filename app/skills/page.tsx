'use client'

import { useState } from 'react'
import { SkillsHeader } from '@/components/sections/SkillsHeader'
import { TechnicalSkills } from '@/components/sections/TechnicalSkills'
import { SoftSkills } from '@/components/sections/SoftSkills'
import { SkillsMatrix } from '@/components/sections/SkillsMatrix'

export default function SkillsPage() {
  const [isTechnical, setIsTechnical] = useState(true)
  const [viewMode, setViewMode] = useState('radial')

  const handleToggleSkills = (isTechnical: boolean) => {
    setIsTechnical(isTechnical)
  }

  const handleToggleView = (viewMode: string) => {
    setViewMode(viewMode)
  }

  return (
    <>
      <SkillsHeader 
        onToggleSkills={handleToggleSkills}
        onToggleView={handleToggleView}
        isTechnical={isTechnical}
        viewMode={viewMode}
      />
      <TechnicalSkills 
        isVisible={isTechnical}
        viewMode={viewMode}
      />
      <SoftSkills 
        isVisible={!isTechnical}
        viewMode={viewMode}
      />
      <SkillsMatrix />
    </>
  )
}

