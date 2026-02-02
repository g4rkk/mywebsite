import { useLanguage } from '../context/LanguageContext'

export default function Profile() {
  const { t } = useLanguage()

  return (
    <section className="window">
      <div className="window-title">{t.profile.title}</div>
      <div className="window-content">
        {/* 头像 */}
        <img
          src="/images/avatar.jpg"
          alt="Profile"
          className="profile-image"
        />

        {/* 名字 - 替换为你的名字 */}
        <h1 className="profile-name">{t.profile.name}</h1>

        {/* 简介 */}
        <p className="profile-bio">{t.profile.bio}</p>

        {/* 喜欢的事物 */}
        <h3 className="profile-likes-title">{t.profile.likes}</h3>
        <ul className="profile-likes-list">
          {t.profile.likesList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
