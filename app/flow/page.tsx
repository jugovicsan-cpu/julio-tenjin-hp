// app/flow/page.tsx
import type { Metadata } from "next";
import { SectionHeading, Breadcrumb } from "@/components/ui/index";
import { FlowSteps, ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "施術の流れ",
  description: "フリオ天神整骨院での施術の流れをご紹介します。予約〜カウンセリング〜施術〜セルフケア指導まで丁寧に対応します。",
};

export default function FlowPage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[{ label: "ホーム", href: ROUTES.home }, { label: "施術の流れ" }]}
        />
      </div>
      <section className="bg-white py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="How It Works"
            ja="施術の流れ"
            desc="初回は特に丁寧に状態を確認します。ご不安な点はいつでもご質問ください。"
            center
          />
          <FlowSteps />
        </div>
      </section>
      <ReservationCTA />
    </main>
  );
}
