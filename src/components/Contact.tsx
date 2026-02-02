import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  // 替换为你的邮箱
  const email = t.contact.email

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleContact = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section className="window">
      <div className="window-title">{t.contact.title}</div>
      <div className="window-content">
        <div className="contact-email">
          <span>{email}</span>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? t.contact.copied : '📋'}
          </button>
        </div>
        <button className="contact-button" onClick={handleContact}>
          {t.contact.button}
        </button>
      </div>
    </section>
  )
}
