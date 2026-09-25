// app/first/page.tsx
import type { Metadata } from "next";
import { Breadcrumb, SectionHeading, CTAButton } from "@/components/ui/index";
import { ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";
import { clinicInfo } from "@/data/clinicInfo";

export const metadata: Metadata = {
  title: "初めての方へ",
  description:
    "フリオ天神整骨院への初めてのご来院について。予約方法・服装・所要時間・料金など、初回来院の不安を解消する情報をご案内します。",
};

export default function FirstPage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[{ label: "ホーム", href: ROUTES.home }, { label: "初めての方へ" }]}
        />
      </div>

      {/* ヒーロー */}
      <section
        className="py-[72px]"
        style={{
          background:
            "linear-gradient(135deg, var(--beige) 0%, var(--mint-pale) 100%)",
        }}
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="First Visit"
            ja="初めての方へ"
            desc="フリオ天神整骨院への初めてのご来院について、よくある疑問にお答えします。"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "📅",
                title: "予約方法",
                body: "LINEまたはWebフォームからご予約ください。お電話でも受け付けています。当日予約も可能ですが、事前予約がおすすめです。",
              },
              {
                icon: "👗",
                title: "服装について",
                body: "動きやすい服装が理想ですが、スーツやオフィスカジュアルでもOKです。施術着をご用意していますので、着替えいただくことも可能です。",
              },
              {
                icon: "⏱",
                title: "所要時間",
                body: "初回は問診・姿勢確認・施術で60〜90分を目安にしてください。2回目以降は60分程度が目安です。",
              },
              {
                icon: "💰",
                title: "料金について",
                body: "初回は¥4,400（税込）。施術内容・時間によって料金が異なります。事前にご確認ください。",
              },
              {
                icon: "🔒",
                title: "プライバシー",
                body: "ベッド2台のプライベート空間です。他の方に見られることなく、ゆっくりご相談いただけます。",
              },
              {
                icon: "❤️",
                title: "強引な勧誘はしません",
                body: "回数券や継続コースを強引にお勧めすることはありません。通うかどうかはご自身のペースで決めていただけます。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-[var(--border)]"
              >
                <div className="text-[28px] mb-2" aria-hidden="true">{item.icon}</div>
                <h3 className="font-serif text-[16px] font-semibold text-[var(--navy)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href={ROUTES.reservation} variant="primary" size="lg">
              📅 Web予約
            </CTAButton>
            <CTAButton
              href={clinicInfo.lineUrl}
              variant="line"
              size="lg"
              external
            >
              💬 LINEで相談
            </CTAButton>
            <CTAButton
              href={`tel:${clinicInfo.phone}`}
              variant="outline"
              size="lg"
            >
              📞 電話する
            </CTAButton>
          </div>
        </div>
      </section>

      <ReservationCTA />
    </main>
  );
}
