import { useLanguage } from '../context/LanguageContext'

// 社交链接 - 替换为你的链接
const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: '🐙'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: '💼'
  }
  // 可以添加更多链接
  // { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
  // { name: 'Blog', url: 'https://yourblog.com', icon: '📝' },
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
