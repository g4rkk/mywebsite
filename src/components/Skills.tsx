import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// 技能数据 - 替换为你的技能
const skillCategories = [
  {
    name: 'Programming',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Go']
  },
  {
    name: 'Frontend',
    skills: ['React', 'Vue', 'Next.js', 'HTML/CSS']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'PostgreSQL']
  },
  {
    name: 'Game Dev',
    skills: ['Unity', 'Unreal Engine', 'Godot']
  },
  {
    name: 'Languages',
    skills: ['Japanese (Native)', 'English (Fluent)', 'Chinese (B1)']
  }
]

export default function Skills() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState<Record<number, number>>({})

  const getActiveSkill = (categoryIndex: number) => {
    return activeIndex[categoryIndex] ?? 0
  }

  const navigate = (categoryIndex: number, direction: 'prev' | 'next', skillsLength: number) => {
    setActiveIndex(prev => {
      const current = prev[categoryIndex] ?? 0
      let next: number
      if (direction === 'prev') {
        next = current <= 0 ? skillsLength - 1 : current - 1
      } else {
        next = current >= skillsLength - 1 ? 0 : current + 1
      }
      return { ...prev, [categoryIndex]: next }
    })
  }

  return (
    <section className="window">
      <div className="window-title">{t.skills.title}</div>
      <div className="window-content">
        {skillCategories.map((category, catIndex) => (
          <div key={category.name} className="skill-item">
            <span
              className="skill-nav"
              onClick={() => navigate(catIndex, 'prev', category.skills.length)}
            >
              {'<'}
            </span>
            <span className="skill-name">
              {category.skills[getActiveSkill(catIndex)]}
            </span>
            <span
              className="skill-nav"
              onClick={() => navigate(catIndex, 'next', category.skills.length)}
            >
              {'>'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
