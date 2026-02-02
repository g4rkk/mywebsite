import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="header">
      <a href="#projects" className="header-link">
        {t.header.checkProjects}
      </a>
      <div className="language-switch">
        <span>{t.header.language}:</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
        >
          <option value="en">EN</option>
          <option value="ja">JA</option>
        </select>
      </div>
    </header>
  )
}
