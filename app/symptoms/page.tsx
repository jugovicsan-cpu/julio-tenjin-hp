// app/symptoms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import { SectionHeading, Breadcrumb } from "@/components/ui/index";
import { ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "お悩み別メニュー",
  description:
    "肩こり・腰痛・骨盤の歪み・産後骨盤・スポーツ由来の不調など、症状別のページをご用意しています。",
};

export default function SymptomsIndexPage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "お悩み別メニュー" },
          ]}
        />
      </div>

      <section className="bg-[var(--beige)] py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Symptoms"
            ja="お悩み別メニュー"
            desc="症状・お悩みから、フリオ天神整骨院でのアプローチを確認できます。"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((s) => (
              <Link
                key={s.id}
                href={`/symptoms/${s.slug}`}
                className="bg-white rounded-xl p-6 border border-[var(--border)] hover:border-[var(--mint)] hover:shadow-md transition-all"
              >
                <div className="text-[32px] mb-3" aria-hidden="true">{s.icon}</div>
                <h2 className="font-serif text-[17px] font-semibold text-[var(--navy)] mb-2">
                  {s.title}
                </h2>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-3">
                  {s.shortDesc}
                </p>
                <span className="text-[12px] font-bold text-[var(--mint)]">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA />
    </main>
  );
}
