import { useLanguage } from '../context/LanguageContext'

// 项目数据 - 替换为你的项目
const projects = [
  {
    id: 'profile',
    icon: '📁',
    isProfile: true,
  },
  {
    id: 'game',
    icon: '🎮',
    count: 4,
  },
  {
    id: 'web',
    icon: '🌐',
    count: 2,
  },
  {
    id: 'app',
    icon: '📱',
    count: 1,
  },
  {
    id: 'other',
    icon: '📦',
    count: 1,
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
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
              className={`project-item ${isProfile ? 'active' : ''}`}
            >
              <div className="project-icon">{project.icon}</div>
              <div className="project-info">
                <div className="project-label">
                  {isProfile
                    ? t.projects.profileLabel
                    : t.projects.categories[categoryKey]}
                  {project.count && (
                    <span className="project-count">({project.count})</span>
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
  )
}
