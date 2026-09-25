# フリオ天神整骨院 公式ホームページ 試作版

## 概要

福岡市中央区渡辺通5丁目（天神南エリア）にある「フリオ天神整骨院」の公式ホームページ試作版です。

**Next.js 14 (App Router) + TypeScript + Tailwind CSS** で実装されています。

---

## 素早く確認したい方へ

`index.html` を直接ブラウザで開くと、単一HTMLファイル版のプロトタイプとして動作します（Next.js不要）。

---

## セットアップ（Next.js版）

```bash
npm install
npm run dev
```

`http://localhost:3000` でアクセスできます。

---

## ディレクトリ構成

```
furio-tenjin/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # ルートレイアウト（SEO・フォント・JSON-LD）
│   ├── page.tsx              # トップページ
│   ├── first/page.tsx        # 初めての方へ
│   ├── symptoms/             # お悩み別ページ
│   │   ├── page.tsx          # 一覧
│   │   └── [slug]/page.tsx   # 症状別詳細LP
│   ├── treatments/           # 施術内容ページ（実装拡張予定）
│   ├── sports/page.tsx       # スポーツ整体LP（実装拡張予定）
│   ├── traffic-accident/     # 交通事故LP ★高CVページ
│   ├── price/page.tsx        # 料金案内
│   ├── flow/page.tsx         # 施術の流れ
│   ├── voice/page.tsx        # 利用者の声
│   ├── staff/page.tsx        # 院長紹介
│   ├── access/page.tsx       # アクセス・営業時間
│   ├── column/               # コラム（SEO資産）
│   │   ├── page.tsx          # 一覧
│   │   └── [slug]/page.tsx   # 記事詳細
│   ├── faq/page.tsx          # よくある質問
│   ├── reservation/page.tsx  # Web予約フォーム
│   ├── privacy/page.tsx      # プライバシーポリシー
│   └── not-found.tsx         # 404ページ
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # ヘッダー（スマホメニュー含む）
│   │   ├── Footer.tsx        # フッター
│   │   └── MobileBottomCTA.tsx # スマホ下部固定CTA
│   ├── sections/
│   │   └── index.tsx         # Hero, FlowSteps, FAQAccordion, PriceTable, AccessMap, ReservationCTA, StaffProfile
│   ├── cards/
│   │   └── index.tsx         # SymptomCard, TreatmentCard, FeatureCard, VoiceCard, ColumnCard
│   ├── ui/
│   │   └── index.tsx         # SectionHeading, CTAButton, LegalNote, Breadcrumb
│   └── seo/
│       └── SEOJsonLd.tsx     # JSON-LD構造化データ
│
├── data/                     # コンテンツデータ（将来CMS化しやすい構造）
│   ├── clinicInfo.ts         # 院情報
│   ├── staff.ts              # スタッフ
│   ├── treatments.ts         # 施術内容
│   ├── symptoms.ts           # 症状別データ
│   └── index.ts              # FAQ・声・料金・コラム・お知らせ・法的注記
│
├── types/
│   └── index.ts              # 型定義
│
├── lib/
│   ├── seo.ts                # SEOメタ・JSON-LD生成ユーティリティ
│   └── routes.ts             # ルート定数
│
├── index.html                # 単一HTML版プロトタイプ（デプロイ不要で確認可）
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## デザインガイド

| 要素 | 値 |
|---|---|
| ネイビー（メイン） | `#1a2744` |
| ミント（アクセント） | `#4db6a0` |
| ミントペール（背景） | `#e8f6f3` |
| ベージュ（背景） | `#f5f0e8` |
| 見出しフォント | Shippori Mincho |
| 本文フォント | Noto Sans JP |

---

## SEO・MEO対応

- 各ページの `<title>` / `<description>` / OGP
- LocalBusiness JSON-LD（トップページ）
- FAQPage JSON-LD（FAQ・交通事故・症状別ページ）
- BreadcrumbList JSON-LD（全ページ）
- Article JSON-LD（コラム詳細）
- キーワード：天神 整骨院 / 天神南 整骨院 / 福岡市中央区 整骨院 / etc.

---

## 広告規制・法的対応

- 「必ず治る」「完全改善」「No.1」等の断定・誇大表現を使用しない
- 施術効果には必ず「個人差があります」を記載
- 交通事故LPに医療機関受診を促す注意書きを設置
- 法律・保険の断定は避け「状況により異なります」と記載
- 「LegalNote」コンポーネントで統一的に注記を挿入

---

## 今後の拡張案

### 優先度高
1. **院長・院内写真の差し込み**（プレースホルダーを実写に置換）
2. **予約フォームの本番連携**（Formspree / GAS / Supabase）
3. **Googleマップの埋め込み**（iframe差し込み）
4. **コラム記事の執筆・追加**（SEO資産構築）

### 中期
5. **スポーツ整体LP** (`/sports`) の充実化
6. **施術別LP** (`/treatments/[slug]`) の充実化
7. **コラムカテゴリフィルター**のクライアント実装
8. **SNSフィード埋め込み**（Instagram / TikTok Shorts）

### 将来
9. **microCMS / Sanity 等でのCMS化**（コラム・お知らせ・料金管理）
10. **Google Analytics / Search Console** 連携
11. **採用ページ** (`/recruit`)
12. **LINEミニアプリ・予約システム連携**

---

## 非エンジニア向け説明

### 更新が必要になる箇所

| 更新内容 | ファイル |
|---|---|
| 電話番号・住所・営業時間 | `data/clinicInfo.ts` |
| 料金 | `data/index.ts` の `prices` |
| お知らせ | `data/index.ts` の `newsItems` |
| 利用者の声 | `data/index.ts` の `voices` |
| コラム記事 | `data/index.ts` の `columns` + `app/column/[slug]/page.tsx` |
| LINE URL / SNS URL | `data/clinicInfo.ts` |

### 画像の置き換え方法

現在、院長写真・院内写真は「準備中」プレースホルダーになっています。
`public/images/` フォルダに画像を置き、コンポーネント内の `aria-label` / `role="img"` の箇所を `<Image>` タグに置き換えてください。

---

## ライセンス

本サイトのコンテンツ・コードは、フリオ天神整骨院専用の試作版です。
