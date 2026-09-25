import type { Metadata } from "next";
import { SectionHeading, Breadcrumb, CTAButton } from "@/components/ui/index";
import { AccessMap, ReservationCTA } from "@/components/sections/index";
import { clinicInfo } from "@/data/clinicInfo";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "アクセス・営業時間",
  description:
    "フリオ天神整骨院のアクセス・営業時間。福岡市中央区渡辺通5丁目、天神南駅から徒歩圏内。",
};

export default function AccessPage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[{ label: "ホーム", href: ROUTES.home }, { label: "アクセス・営業時間" }]}
        />
      </div>
      <section className="bg-[var(--beige)] py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading en="Access" ja="アクセス・営業時間" center />
          <AccessMap />
        </div>
      </section>
      <ReservationCTA />
    </main>
  );
}
