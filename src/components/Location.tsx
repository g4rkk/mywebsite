import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Location() {
  const { t } = useLanguage()
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // 替换为你的时区，例如 'Asia/Tokyo', 'America/New_York' 等
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      const tzOffset = 'GMT+9'
      setTime(`${timeString} ${tzOffset}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="window">
      <div className="window-title">{t.location.title}</div>
      <div className="window-content">
        {/* 替换为你的位置 */}
        <div className="location-place">{t.location.place}</div>
        <div className="location-time">
          <span className="location-clock">{time}</span>
          <span className="location-label">{t.location.localTime}</span>
          <div className="location-flag"></div>
        </div>
      </div>
    </section>
  )
}
