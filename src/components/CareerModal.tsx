import { useLanguage } from '../context/LanguageContext'

interface CareerModalProps {
  careerId: string
  onClose: () => void
}

interface CareerData {
  company: string
  period: string
  role: string
  product: string
  productUrl?: string
  description: string
  responsibilities: string[]
  achievements: string[]
  tech: string[]
}

interface CareerEntry {
  en: CareerData
  ja: CareerData
}

// 职业详情数据
const careerDetails: Record<string, CareerEntry> = {
  game: {
    en: {
      company: 'aisaac Inc.',
      period: '2025.02 ~ Present',
      role: 'Full-stack Engineer (Backend focused)',
      product: 'AI Partner Mobile App "Aimmy"',
      productUrl: 'https://aimmy.jp/',
      description: 'New product launch to operational expansion, continuously improving user experience, profitability, and operational quality.',
      responsibilities: [
        'API/DB design, development, and operations',
        'Infrastructure operations, CI/CD setup',
        'KPI analytics platform (Redash/SQL) operations'
      ],
      achievements: [
        'Led development from 0→1 launch to operational expansion',
        'Contributed to revenue growth from ¥0 to ¥20M/month',
        'Built KPI visualization → issue identification → improvement cycle'
      ],
      tech: ['TypeScript', 'Node.js', 'NestJS', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Redash', 'GCP']
    },
    ja: {
      company: 'aisaac株式会社',
      period: '2025年2月〜現在',
      role: 'フルスタックエンジニア（バックエンド中心）',
      product: 'AIパートナーモバイルアプリ「Aimmy」',
      productUrl: 'https://aimmy.jp/',
      description: '新規プロダクトの立ち上げ〜運用拡大を通じ、ユーザー体験/収益性/運用品質を継続的に改善',
      responsibilities: [
        'API/DB設計、開発、運用',
        'インフラ運用、CI/CD整備',
        'KPI分析基盤（Redash/SQL）運用'
      ],
      achievements: [
        '0→1立ち上げから運用拡大まで一貫して担当',
        '課金売上0円→月商2,000万円規模へ成長に寄与',
        'KPI可視化→課題特定→仕様改善→実装のサイクルを構築'
      ],
      tech: ['TypeScript', 'Node.js', 'NestJS', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Redash', 'GCP']
    }
  },
  web: {
    en: {
      company: 'QuackShift Inc.',
      period: 'Contract',
      role: 'Development Lead',
      product: 'Auto Credit Scoring API',
      description: 'Developed ML-based auto credit scoring API for auto loan companies using CIC credit data.',
      responsibilities: [
        'Lead developer (design → implementation → operations)',
        'Customer communication (requirements, specs alignment)',
        'Data preprocessing, model training with LightGBM'
      ],
      achievements: [
        'Built 0→1 auto scoring API from scratch',
        'Designed RESTful API with proper error handling',
        'Established deployment procedures on AWS'
      ],
      tech: ['Python', 'LightGBM', 'RESTful API', 'AWS']
    },
    ja: {
      company: 'QuackShift株式会社',
      period: '業務委託',
      role: '開発主担当',
      product: '自動審査スコアリングAPI',
      description: '自動車ローン会社向けに、CIC信用情報を活用した機械学習ベースの自動審査スコアリングAPIを開発',
      responsibilities: [
        '開発主担当（設計〜実装〜運用設計）',
        '顧客コミュニケーション（要件確認、仕様すり合わせ）',
        'データ前処理、LightGBMによるモデル学習'
      ],
      achievements: [
        '0→1で自動審査APIを構築',
        '適切なエラーハンドリングを備えたRESTful APIを設計',
        'AWS上でのデプロイ手順を整備'
      ],
      tech: ['Python', 'LightGBM', 'RESTful API', 'AWS']
    }
  },
  app: {
    en: {
      company: 'TechnoPro Inc.',
      period: '2023.07 ~ 2025.01',
      role: 'System Engineer',
      product: 'International Remittance System',
      description: 'Stable operation of remittance processing and quality improvement meeting audit/security requirements.',
      responsibilities: [
        'Basic/detailed design, implementation, testing',
        'Code review and maintenance',
        'Load testing and performance optimization'
      ],
      achievements: [
        'Improved stability and security of remittance processing',
        'Strengthened fraud prevention and audit compliance',
        'Promoted test automation and quality assurance'
      ],
      tech: ['JavaScript', 'Java', 'Oracle', 'Linux', 'Shell', 'SQL', 'JP1']
    },
    ja: {
      company: '株式会社テクノプロ',
      period: '2023年7月〜2025年1月',
      role: 'システムエンジニア',
      product: '海外送金システム',
      description: '送金処理の安定運用と、監査/セキュリティ要求を満たす品質向上',
      responsibilities: [
        '基本設計/詳細設計/実装/テスト',
        'コードレビュー、保守運用',
        '負荷対策の実施'
      ],
      achievements: [
        '送金処理の安定性・セキュリティ向上に貢献',
        '不正送金防止、監査対応強化',
        'テスト自動化/品質保証の推進'
      ],
      tech: ['JavaScript', 'Java', 'Oracle', 'Linux', 'Shell', 'SQL', 'JP1']
    }
  },
  stockfast: {
    en: {
      company: 'Personal Project',
      period: 'Personal',
      role: 'Solo Developer',
      product: 'StockFast',
      productUrl: 'https://apps.apple.com/jp/app/stockfast/id6754393218',
      description: 'A financial information app that tracks portfolio changes of world-renowned investors (Warren Buffett, George Soros, Ray Dalio, Michael Burry, etc.) in real-time.',
      responsibilities: [
        'Real-time notifications of portfolio changes by famous investors',
        'Holdings list with market cap, quarter-over-quarter changes, new buys/sells highlighted',
        'Cross-search by investor name, stock code, or ticker',
        'Daily market news feed with bookmark functionality'
      ],
      achievements: [
        'Released on the App Store',
        'Visualizes SEC official 13F filing data for large investors\' holdings, market cap, and trading activity',
        'Push notification alerts for instant updates'
      ],
      tech: ['React Native', 'Python', 'NestJS', 'Next.js']
    },
    ja: {
      company: '個人プロジェクト',
      period: '個人開発',
      role: '個人開発',
      product: 'StockFast',
      productUrl: 'https://apps.apple.com/jp/app/stockfast/id6754393218',
      description: '世界的著名投資家（ウォーレン・バフェット、ジョージ・ソロス、レイ・ダリオ、マイケル・バーリ等）のポートフォリオ変動をリアルタイムで追跡できる金融情報アプリ。SEC公式の13Fファイリングデータを基に、大口投資家の保有銘柄・時価総額・売買動向を可視化。',
      responsibilities: [
        '著名投資家のポートフォリオ変動をリアルタイム通知',
        '保有銘柄リスト・時価総額・前期比変動・新規買い/売却をハイライト表示',
        '投資家名・銘柄コード・ティッカーでの横断検索',
        '日次マーケットニュース配信 + ブックマーク機能'
      ],
      achievements: [
        'App Storeにてリリース済み',
        'SEC公式13Fファイリングデータを基に大口投資家の保有銘柄・時価総額・売買動向を可視化',
        'プッシュ通知による即時アラート機能を搭載'
      ],
      tech: ['React Native', 'Python', 'NestJS', 'Next.js']
    }
  },
  other: {
    en: {
      company: 'TUOPIC Inc.',
      period: '2020.01 ~ 2023.07',
      role: 'Founder / Representative',
      product: 'Video Production & Board Game E-commerce',
      description: 'Built revenue base for video production and launched new business during COVID-19.',
      responsibilities: [
        'End-to-end video production (planning → shooting → editing → delivery)',
        'Import planning of overseas products, domestic localization',
        'Customer success team establishment'
      ],
      achievements: [
        'Achieved ¥40M annual revenue after incorporation',
        'Diversified business by expanding into board game sales',
        'Built community-driven marketing via SNS'
      ],
      tech: ['Video Production', 'E-commerce', 'SNS Marketing', 'Customer Success']
    },
    ja: {
      company: 'TUOPIC株式会社',
      period: '2020年1月〜2023年7月',
      role: '代表社員',
      product: '映像制作・ボードゲームEC事業',
      description: '映像制作の収益基盤の構築、およびコロナ禍での事業継続のため新規事業を立ち上げ',
      responsibilities: [
        '企画立案〜撮影〜編集〜納品まで一貫して担当',
        '海外商品の輸入企画、国内向けローカライズ',
        'カスタマーサクセス体制の立ち上げ'
      ],
      achievements: [
        '法人化後の年売上4000万円を達成',
        'ボードゲーム販売へ事業拡張し、複線化',
        'SNSでコミュニティ起点の販促を設計'
      ],
      tech: ['映像制作', 'EC運営', 'SNSマーケティング', 'カスタマーサクセス']
    }
  }
}

export default function CareerModal({ careerId, onClose }: CareerModalProps) {
  const { language } = useLanguage()
  const career = careerDetails[careerId as keyof typeof careerDetails]

  if (!career) return null

  const data = language === 'ja' ? career.ja : career.en
  const productUrl = data.productUrl

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{data.company}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-period">{data.period}</span>
            <span className="modal-role">{data.role}</span>
          </div>

          {careerId === 'game' && (
            <div className="modal-product-image">
              <a href={productUrl || '#'} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${import.meta.env.BASE_URL}images/aimmy.png`}
                  alt="Aimmy"
                  className="product-screenshot"
                />
              </a>
            </div>
          )}

          {careerId === 'stockfast' && (
            <div className="modal-product-image">
              <a href={productUrl || '#'} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${import.meta.env.BASE_URL}images/stockfast.png`}
                  alt="StockFast"
                  className="product-screenshot"
                />
              </a>
            </div>
          )}

          <div className="modal-section">
            <h3>{language === 'ja' ? 'プロダクト' : 'Product'}</h3>
            {productUrl ? (
              <a href={productUrl} target="_blank" rel="noopener noreferrer" className="product-link">
                {data.product} ↗
              </a>
            ) : (
              <p>{data.product}</p>
            )}
          </div>

          <div className="modal-section">
            <h3>{language === 'ja' ? '概要' : 'Overview'}</h3>
            <p>{data.description}</p>
          </div>

          <div className="modal-section">
            <h3>{language === 'ja' ? '担当' : 'Responsibilities'}</h3>
            <ul>
              {data.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>{language === 'ja' ? '成果' : 'Achievements'}</h3>
            <ul>
              {data.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>{language === 'ja' ? '技術スタック' : 'Tech Stack'}</h3>
            <div className="tech-tags">
              {data.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
