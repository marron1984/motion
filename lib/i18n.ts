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
  footer: {
    company: string;
    established: string;
    address: string;
    links: string[];
    copyright: string;
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
    footer: {
      company: "株式会社 DHP Urban Development",
      established: "設立：2012年6月",
      address: "東京都中央区",
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
    footer: {
      company: "DHP Urban Development Co., Ltd.",
      established: "Established: June 2012",
      address: "Chuo-ku, Tokyo",
      links: ["Privacy Policy", "Terms of Use", "Careers"],
      copyright: "© 2025 DHP HOSPITALITY. All rights reserved.",
    },
  },
};
