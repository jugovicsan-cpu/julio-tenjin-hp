import { clinicInfo } from "@/data/clinicInfo";

// ========================
// SEO メタデータ生成
// ========================
export interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildTitle(pageTitle?: string): string {
  const base = `${clinicInfo.name} | 福岡市中央区天神南の整骨院`;
  return pageTitle ? `${pageTitle} | ${base}` : base;
}

export function buildMeta(seo: PageSEO) {
  return {
    title: buildTitle(seo.title),
    description: seo.description,
    keywords: seo.keywords?.join(","),
    openGraph: {
      title: buildTitle(seo.title),
      description: seo.description,
      url: seo.canonical,
      siteName: clinicInfo.name,
      locale: "ja_JP",
      type: "website",
    },
    alternates: seo.canonical ? { canonical: seo.canonical } : undefined,
  };
}

// ========================
// JSON-LD 構造化データ
// ========================
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: clinicInfo.name,
    description: clinicInfo.subTagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.addressDetail,
      addressLocality: "福岡市中央区",
      addressRegion: "福岡県",
      addressCountry: "JP",
    },
    telephone: clinicInfo.phone,
    url: "https://furio-tenjin.jp",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      clinicInfo.instagram,
      clinicInfo.tiktok,
    ],
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(article: {
  title: string;
  excerpt: string;
  publishedAt: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    url: article.url,
    publisher: {
      "@type": "Organization",
      name: clinicInfo.name,
    },
  };
}
