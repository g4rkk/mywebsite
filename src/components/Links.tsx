import { useLanguage } from '../context/LanguageContext'

// 社交链接
const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/g4rkk',
    icon: '🐙'
  }
]

export default function Links() {
  const { t } = useLanguage()

  return (
    <section className="window">
      <div className="window-title">{t.links.title}</div>
      <div className="window-content">
        <div className="links-container">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
