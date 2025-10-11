import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Skills - Abdullah Hassan',
  description: 'Explore Abdullah Hassan\'s comprehensive skill set including technical expertise in AI, machine learning, quantitative finance, and leadership capabilities.',
  keywords: ['Abdullah Hassan Skills', 'AI Skills', 'Technical Skills', 'Leadership Skills', 'Professional Expertise'],
  url: '/skills',
})

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
