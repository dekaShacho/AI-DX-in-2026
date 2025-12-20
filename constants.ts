import { Organizer, Guest, EventDetails } from './types';

export const LINKS = {
  form: "https://miyazaki-entime.jp.larksuite.com/share/base/form/shrjpfc4q6fsuU60FN8cKt2NNnb?from=navigation",
  youtube: "https://www.youtube.com/@Lark-qy8lu/videos",
  twitter: "https://x.com/deka_taimu",
  map: "https://maps.google.com/maps?q=大阪府大阪市北区梅田1-2-2+大阪駅前第2ビル15階"
};

export const ORGANIZERS: Organizer[] = [
  {
    name: "たいむ",
    kana: "(寺山 大夢)",
    role: "株式会社Entime 代表取締役 / Lark研究所",
    description: "宮崎県宮崎市出身。元体育会系、教育業界を経て起業。「ITアレルギー」のある中小企業こそDXが必要だと痛感し、株式会社Entimeを設立。YouTube「Lark研究所」では日本一わかりやすい活用術を発信中。",
    imageUrl: "organizer_taimu.jpg",
    socials: {
      youtube: LINKS.youtube,
      twitter: LINKS.twitter
    }
  },
  {
    name: "小出 学",
    role: "株式会社ムーンコーポレー",
    description: "飲食事業やオーダースーツ事業などを多角的に展開する経営者。\n「良い商品を作るだけでは届かない」という課題に対し、自社組織にLarkを導入。アナログな現場業務のDX化を自ら指揮し、経営スピードを劇的に加速させている実践家。",
    imageUrl: "organizer_sub.jpg",
    socials: {
      twitter: "#"
    }
  }
];

export const GUESTS: Guest[] = [
  {
    name: "後藤 和輝",
    tag: "Larkコンサル",
    tagColor: "blue",
    achievement: "事業の柱で受注120万円以上",
    description: "Larkコンサルティングを事業の柱に据え、短期間で大きな受注を獲得。コンサルとしての立ち上げと収益化のリアルを語る。",
    imageUrl: "guest_goto.jpg"
  },
  {
    name: "藤田 由香",
    tag: "オンライン秘書",
    tagColor: "pink",
    achievement: "売上5倍（8万円▶︎40万円）",
    description: "オンライン秘書事業でのLark活用により、顧問先からの信頼を獲得。顧問料単価を大幅にアップさせた付加価値の作り方。",
    imageUrl: "guest_fujita.jpg"
  },
  {
    name: "清水 直也",
    tag: "店舗DX",
    tagColor: "orange",
    achievement: "卒業後1ヶ月で案件獲得",
    description: "福岡の飲食店（Bar・キャバクラ）向けにLarkを展開。スクール卒業からわずか1ヶ月で即戦力として案件を獲得したスピードスター。",
    imageUrl: "guest_shimizu.jpg"
  },
  {
    name: "横倉 猛",
    tag: "UTAGE × Lark",
    tagColor: "purple",
    achievement: "新規事業で50万円受注",
    description: "広告（UTAGE）事業をメインにしつつ、Larkを新規事業として開始。初手から高単価受注と大規模見積もりを実現したクロスセル戦略。",
    imageUrl: "guest_yokokura.jpg"
  },
  {
    name: "滝田 一馬",
    tag: "新規ビジネス",
    tagColor: "green",
    achievement: "kintoneからLarkへ",
    description: "既存のkintone環境からのリプレイス提案で新規受注を獲得。他ツールとの比較や、乗り換え提案のポイントを解説。",
    imageUrl: "guest_takita.jpg"
  },
  {
    name: "原田 敬介",
    tag: "組織変革",
    tagColor: "teal",
    achievement: "変革に必要なLarkの魅力",
    description: "単なるツール導入ではなく「組織を変える」視点でのLark活用。組織変革に必要な要素と、Larkが持つポテンシャルについて深掘り。",
    imageUrl: "guest_harada.jpg"
  }
];

export const EVENT_DETAILS: EventDetails = {
  date: "2026年1月24日（土）",
  time: "10:00 - 18:00",
  placeName: "イオンコンパス大阪駅前会議室",
  address: "大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル15階",
  mapUrl: "https://maps.google.com/maps?q=大阪府大阪市北区梅田1-2-2+大阪駅前第2ビル15階&output=embed&t=m&z=16",
  fee: "無料",
  capacity: "100名"
};