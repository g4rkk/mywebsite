import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// 技能数据
const skillCategories = [
  {
    name: 'Languages/FW',
    skills: ['TypeScript', 'Node.js', 'NestJS', 'React', 'Python', 'Ruby on Rails']
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'Oracle', 'SQL', 'RDB Design']
  },
  {
    name: 'DevOps/Cloud',
    skills: ['Docker', 'GitHub Actions', 'AWS', 'GCP', 'CI/CD']
  },
  {
    name: 'Analytics/ML',
    skills: ['Redash', 'Python', 'LightGBM', 'KPI Design', 'Data Visualization']
  },
  {
    name: 'Others',
    skills: ['Linux', 'Shell', 'Java', 'JavaScript']
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
        <div className="skills-hint">
          {t.skills.hint}
        </div>
      </div>
    </section>
  )
}
