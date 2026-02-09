export type Locale = "ja" | "en";

export interface Translations {
  nav: {
    concept: string;
    business: string;
    medical: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    catch: string;
    catchSub: string;
    sub1: string;
    sub2: string;
    cta1: string;
    cta2: string;
  };
  marquee: {
    row1: string[];
    row2: string[];
  };
  concept: {
    label: string;
    title: string;
    lead: string;
    body1: string;
    body2: string;
  };
  pillars: {
    label: string;
    title: string;
    description: string;
    detailLabel: string;
    items: {
      id: number;
      num: string;
      title: string;
      subtitle: string;
      description: string;
      accent: string;
    }[];
  };
  medical: {
    label: string;
    title: string;
    description: string;
    items: {
      title: string;
      duration: string;
      price: string;
      desc: string;
      accent: string;
    }[];
  };
  stats: {
    items: {
      label: string;
      value: number;
      suffix: string;
      accent: string;
    }[];
  };
  portfolio: {
    label: string;
    title: string;
    description: string;
  };
  cta: {
    label: string;
    title: string;
    description: string;
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
  };
  pillarDetails: {
    back: string;
    contactCta: string;
    hotel: {
      heroTitle: string;
      heroSub: string;
      intro: string;
      services: { title: string; desc: string }[];
      process: { step: string; title: string; desc: string }[];
      processLabel: string;
    };
    brand: {
      heroTitle: string;
      heroSub: string;
      intro: string;
      services: { title: string; desc: string }[];
      strengths: { title: string; desc: string }[];
      strengthsLabel: string;
    };
    franchise: {
      heroTitle: string;
      heroSub: string;
      intro: string;
      services: { title: string; desc: string }[];
      features: { title: string; desc: string }[];
      featuresLabel: string;
    };
  };
  footer: {
    company: string;
    established: string;
    address: string;
    ceo: string;
    directors: string[];
    officer: string;
    links: string[];
    copyright: string;
  };
  pages: {
    privacy: {
      title: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
    terms: {
      title: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
    careers: {
      title: string;
      intro: string;
      values: { title: string; desc: string }[];
      valuesLabel: string;
      positions: { title: string; type: string; desc: string }[];
      positionsLabel: string;
      contactNote: string;
    };
  };
}

export const translations: Record<Locale, Translations> = {
  ja: {
    nav: {
      concept: "コンセプト",
      business: "事業内容",
      medical: "医療パッケージ",
      portfolio: "実績",
      contact: "お問い合わせ",
    },
    hero: {
      catch: "信頼と革新が紡ぐ、",
      catchSub: "至高の滞在体験",
      sub1: "医療・介護の現場で磨かれた「人を支える」という信念。",
      sub2: "私たちは、5つ星のホスピタリティを次なる次元へと導きます。",
      cta1: "事業内容を見る",
      cta2: "お問い合わせ",
    },
    marquee: {
      row1: ["HOSPITALITY", "MEDICAL", "LUXURY", "WELLNESS", "INNOVATION", "TRUST", "EXCELLENCE", "RESORT"],
      row2: ["ホスピタリティ", "医療", "ラグジュアリー", "ウェルネス", "イノベーション", "信頼", "卓越", "リゾート"],
    },
    concept: {
      label: "Concept",
      title: "Legacy of Excellence",
      lead: "医療から、ホスピタリティへ",
      body1: "2012年の創業以来、私たちは医療・介護の分野で「人を支える」ことに真摯に向き合ってきました。その揺るぎない精神を礎に、現在はホテル開発と最先端のクリニックを融合させた、新たなウェルビーイングの形を追求しています。",
      body2: "私たちが提供するのは、単なる宿泊や治療ではありません。ゲストの人生に深く寄り添い、心身ともに満たされる「未来のホスピタリティ」です。",
    },
    pillars: {
      label: "Business",
      title: "三つの事業の柱",
      description: "医療・介護で培った経験を、ホスピタリティの世界で昇華させる。",
      detailLabel: "詳しく見る",
      items: [
        {
          id: 1,
          num: "01",
          title: "ホテル開発事業",
          subtitle: "Hotel Development",
          description: "その土地の物語を紡ぐ、唯一無二の空間。土地の選定から設計、施工、そして運営まで。一気通貫の体制で、その地域の歴史や文化を尊重したラグジュアリーな宿泊施設を創造します。",
          accent: "#c8a2ff",
        },
        {
          id: 2,
          num: "02",
          title: "ブランド誘致事業",
          subtitle: "Brand Affiliation",
          description: "世界と日本をつなぐ、最適なマッチング。国内外の一流ホテルブランドとの強固なネットワークを活かし、プロジェクトの価値を最大化する最適なブランド誘致をコンサルティングします。",
          accent: "#7dd3fc",
        },
        {
          id: 3,
          num: "03",
          title: "FC運営管理事業",
          subtitle: "Franchise Management",
          description: "持続可能な収益と、最高の顧客体験。蓄積された運営ノウハウと独自の厳しいオペレーション基準により、オーナー様の収益性と、ゲストへの世界最高峰のサービスを両立させます。",
          accent: "#fca5a5",
        },
      ],
    },
    medical: {
      label: "Medical & Stay",
      title: "医療・宿泊パッケージ",
      description: "DHPグループが手がけるラグジュアリーホテルでの滞在と、先端医療を組み合わせたエクスクルーシブな体験をご提供します。",
      items: [
        { title: "Premium Beauty", duration: "1泊2日", price: "¥400,000〜", desc: "美容医療と至福の滞在を融合したビューティプラン。", accent: "#c8a2ff" },
        { title: "Executive Rejuvenation", duration: "3泊4日", price: "¥1,200,000〜", desc: "エグゼクティブ向け総合リジュビネーションプログラム。", accent: "#e879f9" },
        { title: "Luxury Total Diet", duration: "7泊8日", price: "¥2,500,000〜", desc: "医学的アプローチによる本格的なトータルダイエットプラン。", accent: "#7dd3fc" },
        { title: "Special Regenerative", duration: "個別カスタマイズ", price: "¥4,600,000〜", desc: "幹細胞治療等を含む、最先端の再生医療メニュー。", accent: "#86efac" },
      ],
    },
    stats: {
      items: [
        { label: "創業", value: 2012, suffix: "", accent: "#c8a2ff" },
        { label: "プロジェクト", value: 50, suffix: "+", accent: "#7dd3fc" },
        { label: "パートナーブランド", value: 12, suffix: "+", accent: "#fca5a5" },
        { label: "サービス評価", value: 5, suffix: "★", accent: "#86efac" },
      ],
    },
    portfolio: {
      label: "Portfolio",
      title: "実績",
      description: "DHP HOSPITALITYがプロデュースする、ホスピタリティの粋を集めた施設をご紹介します。",
    },
    cta: {
      label: "Contact",
      title: "パートナーシップのご相談",
      description: "ホテル開発、ブランド誘致、FC運営管理に関するお問い合わせをお待ちしております。私たちのビジョンに共鳴し、共に未来のホスピタリティを創るパートナーを募集しています。",
      name: "お名前",
      email: "メールアドレス",
      company: "会社名",
      message: "お問い合わせ内容",
      submit: "送信する",
      successTitle: "送信完了",
      successMessage: "24時間以内にご連絡いたします。",
      sendAnother: "もう一度送信",
    },
    pillarDetails: {
      back: "トップへ戻る",
      contactCta: "この事業についてのお問い合わせ",
      hotel: {
        heroTitle: "ホテル開発事業",
        heroSub: "その土地の物語を紡ぐ、唯一無二の空間。",
        intro: "DHP HOSPITALITYのホテル開発事業は、土地の選定からコンセプト策定、設計・施工管理、そしてオープン後の運営支援まで、一気通貫の体制でラグジュアリーホテルを創造します。私たちは「その地域でしか味わえない体験」を最高級の形で提供することを使命としています。",
        services: [
          { title: "用地選定・マーケットリサーチ", desc: "独自のデータ分析と現地調査により、観光需要・インバウンド動向・地域ポテンシャルを総合的に評価。最適な開発候補地を選定します。" },
          { title: "コンセプト策定・企画", desc: "地域の歴史・文化・自然を深くリサーチし、その土地ならではのストーリーを紡ぐコンセプトを策定。競合との差別化を図ります。" },
          { title: "設計・施工管理", desc: "国内外の一流建築家やデザイナーとのコラボレーションにより、機能性と美しさを両立した空間を実現。品質管理を徹底します。" },
          { title: "開業準備・運営支援", desc: "スタッフ採用・研修、オペレーション構築、マーケティング戦略まで、開業前後のトータルサポートを提供します。" },
        ],
        process: [
          { step: "01", title: "調査・分析", desc: "市場調査、用地デューデリジェンス" },
          { step: "02", title: "企画・設計", desc: "コンセプト策定、基本設計・実施設計" },
          { step: "03", title: "施工・管理", desc: "建設工程管理、品質チェック" },
          { step: "04", title: "開業・運営", desc: "プレオープン、運営最適化" },
        ],
        processLabel: "開発プロセス",
      },
      brand: {
        heroTitle: "ブランド誘致事業",
        heroSub: "世界と日本をつなぐ、最適なマッチング。",
        intro: "国内外の一流ホテルブランドとの強固なネットワークを活かし、プロジェクトの価値を最大化するブランドパートナーシップをコンサルティングします。オーナー様の投資目的とブランドの戦略的方向性を的確にマッチングし、Win-Winの関係構築を実現します。",
        services: [
          { title: "ブランド選定コンサルティング", desc: "プロジェクトの立地、規模、ターゲット市場を分析し、最適なホテルブランドを選定。複数ブランドとの比較検討をサポートします。" },
          { title: "契約交渉・条件調整", desc: "フランチャイズ契約、マネジメント契約の交渉を代行。オーナー様に最も有利な条件を引き出します。" },
          { title: "ブランド基準適合サポート", desc: "選定ブランドの設計基準、サービス基準への適合を支援。スムーズなブランド導入を実現します。" },
          { title: "オープン後のリレーション管理", desc: "ブランド本部とオーナー様の良好な関係維持をサポート。定期的なパフォーマンスレビューも実施します。" },
        ],
        strengths: [
          { title: "グローバルネットワーク", desc: "世界の主要ホテルブランド12社以上との直接パートナーシップ" },
          { title: "50+の実績", desc: "国内外50以上のプロジェクトで培った豊富な交渉経験" },
          { title: "ワンストップ対応", desc: "ブランド選定から契約締結、運営開始まで一貫してサポート" },
        ],
        strengthsLabel: "私たちの強み",
      },
      franchise: {
        heroTitle: "FC運営管理事業",
        heroSub: "持続可能な収益と、最高の顧客体験。",
        intro: "ホテル・飲食施設のフランチャイズ運営管理において、蓄積された運営ノウハウと独自のオペレーション基準を駆使し、オーナー様の収益最大化とゲストへの最高級のサービス提供を両立させます。医療・介護分野で培った「人を支える」精神が、私たちのホスピタリティの根幹です。",
        services: [
          { title: "オペレーション管理", desc: "フロント、ハウスキーピング、F&B、施設管理に至るまで、全部門のオペレーションを統括。日々のKPI管理により最高のサービス品質を維持します。" },
          { title: "人材育成・研修", desc: "医療・介護の現場で培った「ホスピタリティの本質」を基盤とした独自の研修プログラム。スタッフ一人ひとりの成長を支援します。" },
          { title: "収益管理・レベニューマネジメント", desc: "最先端のレベニューマネジメントシステムを導入し、ADR・RevPAR・稼働率の最適化を図ります。" },
          { title: "ブランドコンプライアンス", desc: "フランチャイズ契約に基づくブランド基準の遵守を徹底。定期監査と改善提案により、ブランド評価の向上を実現します。" },
        ],
        features: [
          { title: "5★ サービス評価", desc: "全施設で最高評価を獲得" },
          { title: "独自研修プログラム", desc: "医療ホスピタリティ×ホテルサービス" },
          { title: "24時間サポート体制", desc: "オーナー様への迅速な対応" },
        ],
        featuresLabel: "運営の特徴",
      },
    },
    pages: {
      privacy: {
        title: "プライバシーポリシー",
        lastUpdated: "最終更新日：2025年1月1日",
        sections: [
          { heading: "1. 個人情報の収集", body: "当社は、サービスの提供にあたり、お名前、ご連絡先、メールアドレスなどの個人情報を適正な手段で収集いたします。収集は利用目的の達成に必要な範囲に限定し、お客様の同意を得たうえで行います。" },
          { heading: "2. 利用目的", body: "収集した個人情報は、サービスの提供・改善、お問い合わせへの対応、各種ご案内の送付、及び法令に基づく対応のために利用いたします。利用目的の範囲を超えて個人情報を利用することはありません。" },
          { heading: "3. 第三者提供", body: "当社は、法令に定められた場合を除き、お客様の同意を得ることなく個人情報を第三者に提供することはありません。業務委託先に提供する場合は、適切な監督を行います。" },
          { heading: "4. 安全管理措置", body: "当社は、個人情報の漏えい、滅失、き損の防止その他の安全管理のために、組織的・技術的・物理的な安全管理措置を講じます。" },
          { heading: "5. 開示・訂正・削除", body: "お客様ご本人から個人情報の開示、訂正、削除等のご請求があった場合は、本人確認のうえ、合理的な期間内に対応いたします。" },
          { heading: "6. Cookie等の使用", body: "当社ウェブサイトでは、利便性向上やアクセス分析のためにCookieおよび類似技術を使用する場合があります。ブラウザの設定によりCookieを無効にすることも可能ですが、一部サービスが正常にご利用いただけない場合があります。" },
          { heading: "7. ポリシーの変更", body: "当社は、法令の改正やサービスの変更に伴い、本ポリシーを改定する場合があります。重要な変更がある場合は、当社ウェブサイトにて通知いたします。" },
          { heading: "8. お問い合わせ", body: "個人情報の取り扱いに関するお問い合わせは、当社ウェブサイトのお問い合わせフォームよりご連絡ください。" },
        ],
      },
      terms: {
        title: "利用規約",
        lastUpdated: "最終更新日：2025年1月1日",
        sections: [
          { heading: "第1条（適用）", body: "本利用規約は、株式会社DHP Urban Development（以下「当社」）が提供するすべてのサービスに適用されます。ご利用者様は、本規約に同意のうえサービスをご利用ください。" },
          { heading: "第2条（定義）", body: "「サービス」とは、当社が運営するウェブサイト及びそれに関連するすべてのサービスを指します。「利用者」とは、当社のサービスを利用するすべての方を指します。" },
          { heading: "第3条（禁止事項）", body: "利用者は以下の行為を行ってはなりません：法令に違反する行為、当社または第三者の権利を侵害する行為、虚偽の情報を提供する行為、サービスの運営を妨害する行為、その他当社が不適切と判断する行為。" },
          { heading: "第4条（知的財産権）", body: "当社サイト上のすべてのコンテンツ（テキスト、画像、ロゴ、デザイン等）に関する知的財産権は、当社または正当な権利者に帰属します。無断での複製・転載・改変は禁止します。" },
          { heading: "第5条（免責事項）", body: "当社は、サービスの内容の正確性、完全性、有用性について保証するものではありません。サービスの利用により生じた損害について、当社の故意または重大な過失による場合を除き、責任を負いません。" },
          { heading: "第6条（サービスの変更・停止）", body: "当社は、事前の通知なくサービスの内容を変更、または一時的に停止・終了することがあります。これにより利用者に生じた損害について、当社は責任を負いません。" },
          { heading: "第7条（準拠法・管轄）", body: "本規約は日本法に基づき解釈されるものとし、紛争が生じた場合は大阪地方裁判所を第一審の専属的合意管轄裁判所とします。" },
        ],
      },
      careers: {
        title: "採用情報",
        intro: "DHP HOSPITALITYは、ホスピタリティの未来を共に創る仲間を求めています。医療と宿泊の融合という、まだ誰も見たことのないフィールドで、あなたの力を活かしませんか。",
        valuesLabel: "私たちが大切にすること",
        values: [
          { title: "挑戦する姿勢", desc: "前例のないことに果敢に取り組み、新しい価値を創造する意欲を持つ方を歓迎します。" },
          { title: "おもてなしの心", desc: "お客様一人ひとりに寄り添い、期待を超える体験を届けることに情熱を持てる方。" },
          { title: "チームワーク", desc: "多様なバックグラウンドを持つメンバーと協力し、チームとして最高の成果を目指す方。" },
        ],
        positionsLabel: "募集職種",
        positions: [
          { title: "ホテル開発マネージャー", type: "正社員 / 大阪", desc: "新規ホテルプロジェクトの企画・開発から開業まで一気通貫で推進するポジションです。" },
          { title: "ブランド戦略担当", type: "正社員 / 大阪", desc: "国際ホテルブランドとの提携交渉・ブランド基準の適合管理を担当します。" },
          { title: "運営統括マネージャー", type: "正社員 / 奈良", desc: "フランチャイズホテルの運営管理・収益最大化を推進するポジションです。" },
        ],
        contactNote: "ご応募・お問い合わせは、お問い合わせフォームまたはメールにてご連絡ください。",
      },
    },
    footer: {
      company: "株式会社 DHP Urban Development",
      established: "設立：2012年9月",
      address: "〒541-0058 大阪府大阪市中央区南久宝寺町四丁目5番17号 アップウェル船場 2F",
      ceo: "代表取締役　榎本 泰之",
      directors: ["取締役　共田 政世", "取締役　河原 一男", "取締役　吉田 俊輔"],
      officer: "執行役員　田邊 裕之",
      links: ["プライバシーポリシー", "利用規約", "採用情報"],
      copyright: "© 2025 DHP HOSPITALITY. All rights reserved.",
    },
  },
  en: {
    nav: {
      concept: "Concept",
      business: "Business",
      medical: "Medical",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      catch: "Trust & Innovation:",
      catchSub: "Redefining the Pinnacle of Hospitality.",
      sub1: "A conviction to \"support people,\" honed in the fields of healthcare and nursing.",
      sub2: "We elevate five-star hospitality to the next dimension.",
      cta1: "Our Business",
      cta2: "Contact Us",
    },
    marquee: {
      row1: ["HOSPITALITY", "MEDICAL", "LUXURY", "WELLNESS", "INNOVATION", "TRUST", "EXCELLENCE", "RESORT"],
      row2: ["HOTEL", "CLINIC", "PREMIUM", "BRAND", "DEVELOPMENT", "PARTNER", "GLOBAL", "DESIGN"],
    },
    concept: {
      label: "Concept",
      title: "Legacy of Excellence",
      lead: "From Healthcare to Hospitality",
      body1: "Since our founding in 2012, we have been sincerely committed to \"supporting people\" in the fields of healthcare and nursing. Building on that unwavering spirit, we now pursue a new form of well-being that fuses hotel development with state-of-the-art clinics.",
      body2: "What we offer is not mere accommodation or treatment. It is the \"hospitality of the future\" — deeply attuned to each guest's life, fulfilling both body and soul.",
    },
    pillars: {
      label: "Business",
      title: "Our Business Pillars",
      description: "Elevating the experience cultivated in healthcare into the world of hospitality.",
      detailLabel: "Learn More",
      items: [
        {
          id: 1,
          num: "01",
          title: "Hotel Development",
          subtitle: "ホテル開発事業",
          description: "Weaving the story of each locale into one-of-a-kind spaces. From site selection to design, construction, and operation — an integrated approach that creates luxury accommodations respecting local history and culture.",
          accent: "#c8a2ff",
        },
        {
          id: 2,
          num: "02",
          title: "Brand Affiliation",
          subtitle: "ブランド誘致事業",
          description: "The optimal match connecting the world and Japan. Leveraging our robust network with premier hotel brands worldwide, we consult on the ideal brand affiliation to maximize project value.",
          accent: "#7dd3fc",
        },
        {
          id: 3,
          num: "03",
          title: "Franchise Management",
          subtitle: "FC運営管理事業",
          description: "Sustainable revenue and the ultimate guest experience. Through accumulated operational know-how and proprietary quality standards, we achieve both owner profitability and world-class service for guests.",
          accent: "#fca5a5",
        },
      ],
    },
    medical: {
      label: "Medical & Stay",
      title: "Medical & Hospitality Synergy",
      description: "We offer exclusive experiences combining stays at DHP Group luxury hotels with cutting-edge medical treatments.",
      items: [
        { title: "Premium Beauty", duration: "1 Night / 2 Days", price: "¥400,000〜", desc: "A beauty plan fusing aesthetic medicine with blissful accommodation.", accent: "#c8a2ff" },
        { title: "Executive Rejuvenation", duration: "3 Nights / 4 Days", price: "¥1,200,000〜", desc: "A comprehensive rejuvenation program designed for executives.", accent: "#e879f9" },
        { title: "Luxury Total Diet", duration: "7 Nights / 8 Days", price: "¥2,500,000〜", desc: "A medically-guided total diet program for lasting results.", accent: "#7dd3fc" },
        { title: "Special Regenerative", duration: "Custom", price: "¥4,600,000〜", desc: "Cutting-edge regenerative medicine including stem cell therapy.", accent: "#86efac" },
      ],
    },
    stats: {
      items: [
        { label: "Founded", value: 2012, suffix: "", accent: "#c8a2ff" },
        { label: "Projects", value: 50, suffix: "+", accent: "#7dd3fc" },
        { label: "Partner Brands", value: 12, suffix: "+", accent: "#fca5a5" },
        { label: "Service Rating", value: 5, suffix: "★", accent: "#86efac" },
      ],
    },
    portfolio: {
      label: "Portfolio",
      title: "Portfolio",
      description: "Introducing the hospitality properties produced by DHP HOSPITALITY.",
    },
    cta: {
      label: "Contact",
      title: "Partnership Inquiry",
      description: "We welcome inquiries regarding hotel development, brand affiliation, and franchise management. We are seeking partners who share our vision to create the hospitality of the future together.",
      name: "Your Name",
      email: "Email Address",
      company: "Company Name",
      message: "Your Message",
      submit: "Send Message",
      successTitle: "Message Sent!",
      successMessage: "We will get back to you within 24 hours.",
      sendAnother: "Send Another",
    },
    pillarDetails: {
      back: "Back to Top",
      contactCta: "Inquire About This Service",
      hotel: {
        heroTitle: "Hotel Development",
        heroSub: "Weaving the story of each locale into one-of-a-kind spaces.",
        intro: "DHP HOSPITALITY's Hotel Development division creates luxury hotels through an integrated approach — from site selection, concept development, and design management to post-opening operational support. Our mission is to deliver experiences unique to each locale in the most luxurious form possible.",
        services: [
          { title: "Site Selection & Market Research", desc: "Comprehensive evaluation of tourism demand, inbound trends, and regional potential through proprietary data analysis and on-site surveys." },
          { title: "Concept Development & Planning", desc: "Deep research into local history, culture, and nature to craft concepts that tell the unique story of each location." },
          { title: "Design & Construction Management", desc: "Collaboration with world-class architects and designers to realize spaces that balance functionality and beauty." },
          { title: "Pre-Opening & Operational Support", desc: "Total support from staff recruitment and training to operations setup and marketing strategy." },
        ],
        process: [
          { step: "01", title: "Research & Analysis", desc: "Market research, site due diligence" },
          { step: "02", title: "Planning & Design", desc: "Concept development, schematic & detailed design" },
          { step: "03", title: "Construction", desc: "Construction management, quality assurance" },
          { step: "04", title: "Launch & Operations", desc: "Pre-opening, operational optimization" },
        ],
        processLabel: "Development Process",
      },
      brand: {
        heroTitle: "Brand Affiliation",
        heroSub: "The optimal match connecting the world and Japan.",
        intro: "Leveraging our robust network with premier hotel brands worldwide, we consult on brand partnerships that maximize project value. We precisely match owners' investment objectives with brands' strategic directions to create win-win relationships.",
        services: [
          { title: "Brand Selection Consulting", desc: "Analyzing project location, scale, and target market to select the optimal hotel brand. We support comparative evaluation across multiple brands." },
          { title: "Contract Negotiation", desc: "Negotiating franchise and management agreements on behalf of owners to secure the most favorable terms." },
          { title: "Brand Standards Compliance", desc: "Supporting adaptation to selected brand design and service standards for smooth brand implementation." },
          { title: "Post-Opening Relationship Management", desc: "Maintaining positive relationships between brand headquarters and owners with regular performance reviews." },
        ],
        strengths: [
          { title: "Global Network", desc: "Direct partnerships with 12+ major hotel brands worldwide" },
          { title: "50+ Track Record", desc: "Extensive negotiation experience across 50+ domestic and international projects" },
          { title: "One-Stop Service", desc: "Consistent support from brand selection through contract execution to launch" },
        ],
        strengthsLabel: "Our Strengths",
      },
      franchise: {
        heroTitle: "Franchise Management",
        heroSub: "Sustainable revenue and the ultimate guest experience.",
        intro: "In franchise operations management for hotels and dining establishments, we leverage accumulated operational know-how and proprietary standards to maximize owner revenue while delivering the highest level of service to guests. The spirit of 'supporting people,' cultivated in healthcare, is the foundation of our hospitality.",
        services: [
          { title: "Operations Management", desc: "Overseeing all departments from front desk and housekeeping to F&B and facility management. Daily KPI management ensures the highest service quality." },
          { title: "Talent Development & Training", desc: "Proprietary training programs built on the essence of hospitality cultivated in healthcare. Supporting the growth of every team member." },
          { title: "Revenue Management", desc: "Implementing cutting-edge revenue management systems to optimize ADR, RevPAR, and occupancy rates." },
          { title: "Brand Compliance", desc: "Rigorous adherence to franchise brand standards through regular audits and improvement recommendations." },
        ],
        features: [
          { title: "5★ Service Rating", desc: "Top ratings across all properties" },
          { title: "Proprietary Training", desc: "Medical hospitality × hotel service" },
          { title: "24/7 Support", desc: "Rapid response for all owners" },
        ],
        featuresLabel: "Management Features",
      },
    },
    pages: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: January 1, 2025",
        sections: [
          { heading: "1. Collection of Personal Information", body: "We collect personal information such as names, contact details, and email addresses through proper means to the extent necessary for providing our services, with the consent of the individual." },
          { heading: "2. Purpose of Use", body: "Collected personal information is used for providing and improving our services, responding to inquiries, sending various notifications, and responding in accordance with applicable laws. We do not use personal information beyond the stated purposes." },
          { heading: "3. Disclosure to Third Parties", body: "We will not provide personal information to third parties without the consent of the individual, except as required by law. When outsourcing to service providers, we ensure appropriate supervision." },
          { heading: "4. Security Measures", body: "We implement organizational, technical, and physical security measures to prevent leakage, loss, and damage of personal information." },
          { heading: "5. Disclosure, Correction & Deletion", body: "When an individual requests disclosure, correction, or deletion of their personal information, we will respond within a reasonable period after verifying their identity." },
          { heading: "6. Use of Cookies", body: "Our website may use cookies and similar technologies to improve usability and analyze access. You may disable cookies through your browser settings, but some services may not function properly." },
          { heading: "7. Policy Changes", body: "We may revise this policy in response to changes in laws or services. Significant changes will be notified on our website." },
          { heading: "8. Contact", body: "For inquiries regarding the handling of personal information, please contact us through the inquiry form on our website." },
        ],
      },
      terms: {
        title: "Terms of Use",
        lastUpdated: "Last updated: January 1, 2025",
        sections: [
          { heading: "Article 1 (Application)", body: "These Terms of Use apply to all services provided by DHP Urban Development Co., Ltd. (hereinafter \"the Company\"). By using our services, you agree to these terms." },
          { heading: "Article 2 (Definitions)", body: "\"Services\" refers to the website operated by the Company and all related services. \"User\" refers to all persons who use the Company's services." },
          { heading: "Article 3 (Prohibited Actions)", body: "Users shall not engage in the following: violations of laws, infringement of the Company's or third parties' rights, providing false information, obstructing service operations, or any other actions deemed inappropriate by the Company." },
          { heading: "Article 4 (Intellectual Property)", body: "All intellectual property rights to content on our site (text, images, logos, design, etc.) belong to the Company or its rightful owners. Unauthorized reproduction, reprinting, or modification is prohibited." },
          { heading: "Article 5 (Disclaimer)", body: "The Company does not guarantee the accuracy, completeness, or usefulness of service content. The Company is not liable for damages arising from the use of services, except in cases of intentional misconduct or gross negligence." },
          { heading: "Article 6 (Service Changes)", body: "The Company may change, temporarily suspend, or terminate services without prior notice. The Company is not liable for any damages resulting from such actions." },
          { heading: "Article 7 (Governing Law & Jurisdiction)", body: "These terms shall be interpreted in accordance with Japanese law. In the event of a dispute, the Osaka District Court shall serve as the court of exclusive jurisdiction in the first instance." },
        ],
      },
      careers: {
        title: "Careers",
        intro: "DHP HOSPITALITY is looking for passionate individuals to shape the future of hospitality with us. Join us in an unprecedented field where healthcare and luxury accommodation converge.",
        valuesLabel: "Our Values",
        values: [
          { title: "Spirit of Challenge", desc: "We welcome those who boldly tackle unprecedented tasks and are motivated to create new value." },
          { title: "Heart of Hospitality", desc: "Those who are passionate about delivering experiences that exceed expectations, attuned to each guest." },
          { title: "Teamwork", desc: "Those who collaborate with members of diverse backgrounds to achieve the best results as a team." },
        ],
        positionsLabel: "Open Positions",
        positions: [
          { title: "Hotel Development Manager", type: "Full-time / Osaka", desc: "A position that drives new hotel projects from planning and development through to opening." },
          { title: "Brand Strategy Specialist", type: "Full-time / Osaka", desc: "Responsible for negotiating partnerships with international hotel brands and managing brand standard compliance." },
          { title: "Operations General Manager", type: "Full-time / Nara", desc: "A position that manages franchise hotel operations and drives revenue maximization." },
        ],
        contactNote: "To apply or inquire, please contact us through our inquiry form or by email.",
      },
    },
    footer: {
      company: "DHP Urban Development Co., Ltd.",
      established: "Established: September 2012",
      address: "Upwell Senba 2F, 4-5-17 Minami-Kyuhoji-machi, Chuo-ku, Osaka 541-0058",
      ceo: "CEO: Yasuyuki Enomoto",
      directors: ["Director: Masayo Tomoda", "Director: Kazuo Kawahara", "Director: Shunsuke Yoshida"],
      officer: "Executive Officer: Hiroyuki Tanabe",
      links: ["Privacy Policy", "Terms of Use", "Careers"],
      copyright: "© 2025 DHP HOSPITALITY. All rights reserved.",
    },
  },
};
