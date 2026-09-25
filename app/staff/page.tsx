// app/staff/page.tsx
import type { Metadata } from "next";
import { SectionHeading, Breadcrumb } from "@/components/ui/index";
import { StaffProfile, ReservationCTA } from "@/components/sections/index";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "院長紹介",
  description:
    "フリオ天神整骨院 院長 藤澤勇吾。柔道整復師（国家資格）。経験14年。サッカー・フットサル経験を持つ院長が、一人ひとりに丁寧に向き合います。",
};

export default function StaffPage() {
  return (
    <main>
      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[{ label: "ホーム", href: ROUTES.home }, { label: "院長紹介" }]}
        />
      </div>
      <section
        className="py-[72px]"
        style={{ background: "linear-gradient(135deg, var(--beige) 0%, var(--mint-pale) 100%)" }}
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading en="Staff" ja="院長紹介" />
          <StaffProfile />
        </div>
      </section>
      <ReservationCTA />
    </main>
  );
}
