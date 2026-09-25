import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { columns } from "@/data/index";
import { Breadcrumb, CTAButton, LegalNote } from "@/components/ui/index";
import { ReservationCTA } from "@/components/sections/index";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { clinicInfo } from "@/data/clinicInfo";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return columns.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const column = columns.find((c) => c.slug === params.slug);
  if (!column) return {};
  return {
    title: column.title,
    description: column.excerpt,
    alternates: {
      canonical: `https://furio-tenjin.jp/column/${column.slug}`,
    },
  };
}

export default function ColumnDetailPage({ params }: Params) {
  const column = columns.find((c) => c.slug === params.slug);
  if (!column) notFound();

  return (
    <main>
      <SEOJsonLd
        data={buildArticleSchema({
          title: column.title,
          excerpt: column.excerpt,
          publishedAt: column.publishedAt,
          url: `https://furio-tenjin.jp/column/${column.slug}`,
        })}
      />
      <SEOJsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: "https://furio-tenjin.jp" },
          { name: "コラム", url: "https://furio-tenjin.jp/column" },
          {
            name: column.title,
            url: `https://furio-tenjin.jp/column/${column.slug}`,
          },
        ])}
      />

      <div className="max-w-[800px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "コラム", href: ROUTES.column },
            { label: column.title },
          ]}
        />
      </div>

      <article className="max-w-[800px] mx-auto px-5 py-12">
        <header className="mb-8">
          <span className="inline-block text-[10px] font-bold tracking-wide text-[var(--mint)] bg-[var(--mint-pale)] px-2 py-[3px] rounded mb-3">
            {column.category}
          </span>
          <h1 className="font-serif text-[clamp(20px,4vw,30px)] font-bold text-[var(--navy)] leading-relaxed mb-3">
            {column.title}
          </h1>
          <div className="flex gap-3 text-[12px] text-[var(--text-light)]">
            <span>{clinicInfo.name}</span>
            <span>{column.publishedAt}</span>
            <span>約{column.readMinutes}分で読めます</span>
          </div>
        </header>

        {/* 記事プレースホルダー */}
        <div
          className="aspect-video bg-gradient-to-br from-[var(--navy-light)] to-[var(--mint)] rounded-xl flex items-center justify-center text-white/60 text-[13px] mb-8"
          role="img"
          aria-label="アイキャッチ画像（準備中）"
        >
          アイキャッチ画像（準備中）
        </div>

        <div className="prose-like text-[15px] text-[var(--text-secondary)] leading-[2] space-y-5">
          <p>{column.excerpt}</p>
          <p>
            ※このコラムは近日公開予定です。最新情報はInstagram・TikTokでも発信しています。
          </p>
        </div>

        <LegalNote
          className="mt-8 p-3 bg-[var(--beige)] rounded-lg"
          text="※本コラムは一般的な情報提供を目的としており、医療行為・診断に代わるものではありません。症状が気になる方はまずご相談ください。"
        />

        <div className="mt-8 p-5 bg-[var(--mint-pale)] rounded-xl">
          <p className="font-serif text-[16px] font-semibold text-[var(--navy)] mb-3">
            {column.title.includes("スポーツ") || column.title.includes("腰")
              ? "腰・スポーツ不調でお悩みの方へ"
              : "お身体のことでお悩みの方へ"}
          </p>
          <p className="text-[13px] text-[var(--text-secondary)] mb-4">
            気になる症状があれば、まずはお気軽にご相談ください。
          </p>
          <CTAButton href={ROUTES.reservation} variant="primary">
            予約・相談はこちら
          </CTAButton>
        </div>
      </article>

      {/* SNSシェアボタン */}
      <div className="max-w-[800px] mx-auto px-5 pb-12">
        <div className="border-t border-[var(--border)] pt-6">
          <p className="text-[12px] text-[var(--text-light)] mb-3">
            このコラムをシェアする
          </p>
          <div className="flex gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(column.title)}&url=${encodeURIComponent(`https://furio-tenjin.jp/column/${column.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-[12px] font-bold bg-[#1da1f2] text-white"
              aria-label="Xでシェアする"
            >
              𝕏 シェア
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://furio-tenjin.jp/column/${column.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-[12px] font-bold bg-[#1877f2] text-white"
              aria-label="Facebookでシェアする"
            >
              Facebook
            </a>
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://furio-tenjin.jp/column/${column.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-[12px] font-bold bg-[#06C755] text-white"
              aria-label="LINEでシェアする"
            >
              LINE
            </a>
          </div>
        </div>
      </div>

      <ReservationCTA />
    </main>
  );
}
