import { useLanguage } from '../context/LanguageContext'

const languages = [
  { code: 'ja', level: 'native' },
  { code: 'zh', level: 'native' },
  { code: 'en', level: 'business' }
]

export default function Languages() {
  const { t } = useLanguage()

  return (
    <section className="window">
      <div className="window-title">{t.languages.title}</div>
      <div className="window-content">
        <div className="languages-list">
          {languages.map((lang) => {
            const langKey = lang.code as keyof typeof t.languages.items
            const levelKey = lang.level as keyof typeof t.languages.levels
            return (
              <div key={lang.code} className="language-item">
                <span className="language-name">{t.languages.items[langKey]}</span>
                <span className="language-level">{t.languages.levels[levelKey]}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
