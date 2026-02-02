import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">
          {language === 'ja'
            ? `© ${year} あらゆるご提案をお待ちしております`
            : `© ${year} Open to all proposals`}
        </span>
        <span className="footer-cursor cursor-blink"></span>
      </div>
    </footer>
  )
}
