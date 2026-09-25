// app/column/page.tsx
import type { Metadata } from "next";
import { columns } from "@/data/index";
import { SectionHeading, Breadcrumb } from "@/components/ui/index";
import { ColumnCard } from "@/components/cards/index";
import { ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";
import type { ColumnCategory } from "@/types";

export const metadata: Metadata = {
  title: "お悩み解決コラム",
  description:
    "肩こり・腰痛・姿勢・スポーツ・産後・交通事故など、身体のお悩みに役立つコラムを発信しています。",
};

const ALL_CATEGORIES: ColumnCategory[] = [
  "肩こり", "腰痛", "スマホ首", "姿勢", "骨盤", "産後", "スポーツ", "交通事故", "セルフケア",
];

export default function ColumnIndexPage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[{ label: "ホーム", href: ROUTES.home }, { label: "コラム" }]}
        />
      </div>

      <section className="bg-[var(--beige)] py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Column"
            ja="お悩み解決コラム"
            desc="肩こり・腰痛・姿勢・スポーツ・産後・交通事故… 日常のお悩みに役立つ情報を発信しています。"
            center
          />

          {/* カテゴリフィルター（静的版） */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="px-4 py-1.5 rounded-full text-[12px] font-bold bg-[var(--navy)] text-white cursor-pointer">
              すべて
            </span>
            {ALL_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-[12px] font-bold bg-white border border-[var(--border)] text-[var(--text-secondary)] cursor-pointer hover:border-[var(--mint)] hover:text-[var(--mint)] transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns.map((c) => (
              <ColumnCard key={c.id} column={c} />
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA />
    </main>
  );
}
