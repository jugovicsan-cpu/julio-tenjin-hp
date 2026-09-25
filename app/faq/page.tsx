// app/faq/page.tsx
import type { Metadata } from "next";
import { faqs } from "@/data/index";
import { SectionHeading, Breadcrumb } from "@/components/ui/index";
import { FAQAccordion, ReservationCTA } from "@/components/sections/index";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { buildFAQSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "フリオ天神整骨院へのよくある質問をまとめています。初めての方の不安解消にお役立てください。",
};

export default function FAQPage() {
  return (
    <main>
      <SEOJsonLd data={buildFAQSchema(faqs)} />

      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "よくある質問" },
          ]}
        />
      </div>

      <section className="bg-white py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="FAQ"
            ja="よくある質問"
            center
          />
          <div className="max-w-[720px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <ReservationCTA />
    </main>
  );
}
