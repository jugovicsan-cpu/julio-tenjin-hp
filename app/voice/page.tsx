// app/voice/page.tsx
import type { Metadata } from "next";
import { voices } from "@/data/index";
import { SectionHeading, Breadcrumb, LegalNote } from "@/components/ui/index";
import { VoiceCard } from "@/components/cards/index";
import { ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "利用者の声",
  description:
    "フリオ天神整骨院をご利用いただいた方の声をご紹介します。",
};

export default function VoicePage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[{ label: "ホーム", href: ROUTES.home }, { label: "利用者の声" }]}
        />
      </div>
      <section className="bg-white py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Voices"
            ja="ご利用いただいた方の声"
            desc="来院された方からいただいた声をご紹介します。"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {voices.map((v) => (
              <VoiceCard key={v.id} voice={v} />
            ))}
          </div>
          <LegalNote
            className="mt-5 text-center p-3 bg-[var(--beige)] rounded-lg"
            text="※上記はご利用いただいた方の個人の感想です。施術の効果には個人差があり、すべての方に同様の結果をお約束するものではありません。"
          />
        </div>
      </section>
      <ReservationCTA />
    </main>
  );
}
