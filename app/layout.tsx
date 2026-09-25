import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { buildLocalBusinessSchema } from "@/lib/seo";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "フリオ天神整骨院 | 福岡市中央区天神南・渡辺通の整骨院",
    template: "%s | フリオ天神整骨院",
  },
  description:
    "天神南駅から徒歩圏内。柔道整復師の院長が専任で対応するプライベート整骨院。姿勢・骨盤矯正・トリガーポイント・楽トレによる体幹強化。肩こり・腰痛・産後骨盤・スポーツ不調・交通事故後の不調相談に対応。",
  keywords: [
    "天神 整骨院",
    "天神南 整骨院",
    "福岡市中央区 整骨院",
    "渡辺通 整骨院",
    "天神 肩こり",
    "天神 腰痛",
    "天神 骨盤矯正",
    "天神 産後骨盤",
    "天神 スポーツ整体",
    "天神 交通事故 整骨院",
    "フリオ天神整骨院",
  ],
  openGraph: {
    title: "フリオ天神整骨院 | 福岡市中央区天神南の整骨院",
    description:
      "天神南駅徒歩圏。院長専任・プライベート空間で、肩こり・腰痛・骨盤・スポーツ不調に丁寧に向き合います。",
    siteName: "フリオ天神整骨院",
    locale: "ja_JP",
    type: "website",
    url: "https://furio-tenjin.jp",
  },
  twitter: {
    card: "summary_large_image",
    title: "フリオ天神整骨院 | 福岡市中央区天神南の整骨院",
    description: "天神南駅徒歩圏。院長専任・プライベート空間の整骨院です。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://furio-tenjin.jp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable}`}
    >
      <body>
        <SEOJsonLd data={buildLocalBusinessSchema()} />
        <Header />
        {children}
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
