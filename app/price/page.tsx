import type { Metadata } from "next";
import { prices } from "@/data/index";
import { SectionHeading, Breadcrumb, LegalNote } from "@/components/ui/index";
import { PriceTable, ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "料金案内",
  description:
    "フリオ天神整骨院の施術料金一覧。初回検査・整体矯正・楽トレ・保険施術・交通事故施術についてご案内します。",
};

export default function PricePage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "料金案内" },
          ]}
        />
      </div>

      <section className="bg-white py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Price"
            ja="料金案内"
            desc="お身体の状態に合わせてご相談します。まずはお気軽にお問い合わせください。"
            center
          />
          <PriceTable items={prices} />

          <div className="mt-8 max-w-[720px] mx-auto">
            <h3 className="font-serif text-[17px] font-semibold text-[var(--navy)] mb-4">
              保険適用について
            </h3>
            <div className="bg-[var(--beige)] rounded-xl p-5 text-[14px] text-[var(--text-secondary)] leading-[2] space-y-3">
              <p>
                整骨院（接骨院）での保険適用（療養費）には条件があります。
                <strong>急性の外傷（打撲・捻挫・挫傷等）</strong>が主な対象です。
              </p>
              <p>
                <strong>慢性的な肩こり・腰痛・疲労</strong>などへの施術は、
                健康保険の適用外となる場合がほとんどです。
              </p>
              <p>
                保険適用については、来院時に詳しくご説明します。ご不明な点はお気軽にご質問ください。
              </p>
            </div>
            <LegalNote
              className="mt-3"
              text="※料金は変更になる場合があります。最新情報はお電話・LINEにてご確認ください。"
            />
          </div>
        </div>
      </section>

      <ReservationCTA />
    </main>
  );
}
