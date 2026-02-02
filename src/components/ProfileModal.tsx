import { useLanguage } from '../context/LanguageContext'

interface ProfileModalProps {
  onClose: () => void
}

const profileData = {
  en: {
    title: 'About Me',
    background: 'Background',
    backgroundItems: [
      'Born in Shanghai, China (1995)',
      'Studied abroad in Spain (2013-2014)',
      'Moved to Tokyo (2015)',
      'Graduated from Tokyo Zokei University, Design Department, Photography Major (2016-2020)'
    ],
    interests: 'Interests',
    interestItems: [
      'Movies (2000+ films watched)',
      'Board Games'
    ],
    mbti: 'MBTI',
    mbtiValue: 'ENTP'
  },
  ja: {
    title: '自己紹介',
    background: '経歴',
    backgroundItems: [
      '中国・上海生まれ（1995年）',
      'スペイン留学（2013〜2014年）',
      '東京へ移住（2015年）',
      '東京造形大学 デザイン学部 写真専攻 卒業（2016〜2020年）'
    ],
    interests: '趣味',
    interestItems: [
      '映画鑑賞（2000本以上）',
      'ボードゲーム'
    ],
    mbti: 'MBTI',
    mbtiValue: 'ENTP'
  }
}

export default function ProfileModal({ onClose }: ProfileModalProps) {
  const { language } = useLanguage()
  const data = language === 'ja' ? profileData.ja : profileData.en

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{data.title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>{data.background}</h3>
            <ul>
              {data.backgroundItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>{data.interests}</h3>
            <ul>
              {data.interestItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>{data.mbti}</h3>
            <div className="mbti-badge">{data.mbtiValue}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
