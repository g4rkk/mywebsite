import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import CareerModal from './CareerModal'

// 职业经历数据
const projects = [
  {
    id: 'profile',
    icon: '📁',
    isProfile: true,
  },
  {
    id: 'game',
    icon: '🤖',
    period: '2025.02~',
  },
  {
    id: 'web',
    icon: '🧠',
    period: 'Contract',
  },
  {
    id: 'app',
    icon: '🏦',
    period: '2023~2025',
  },
  {
    id: 'other',
    icon: '🎬',
    period: '2017~2023',
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null)

  const handleClick = (projectId: string, isProfile?: boolean) => {
    if (!isProfile) {
      setSelectedCareer(projectId)
    }
  }

  return (
    <>
      <section className="window" id="projects">
        <div className="window-title">{t.projects.title}</div>
        <div className="window-content">
          <div className="projects-header">
            {t.projects.dir} {t.projects.profileLabel}
          </div>

          {projects.map((project) => {
            const isProfile = project.isProfile
            const categoryKey = project.id as keyof typeof t.projects.categories

            return (
              <div
                key={project.id}
                className={`project-item ${isProfile ? 'active' : 'clickable'}`}
                onClick={() => handleClick(project.id, isProfile)}
              >
                <div className="project-icon">{project.icon}</div>
                <div className="project-info">
                  <div className="project-label">
                    {isProfile
                      ? t.projects.profileLabel
                      : t.projects.categories[categoryKey]}
                    {project.period && (
                      <span className="project-count">({project.period})</span>
                    )}
                  </div>
                  <div className="project-desc">
                    {isProfile
                      ? t.projects.profileDesc
                      : t.projects.categories[`${categoryKey}Desc` as keyof typeof t.projects.categories]}
                  </div>
                </div>
                <div className="project-arrow">{'>'}</div>
              </div>
            )
          })}
        </div>
      </section>

      {selectedCareer && (
        <CareerModal
          careerId={selectedCareer}
          onClose={() => setSelectedCareer(null)}
        />
      )}
    </>
  )
}
