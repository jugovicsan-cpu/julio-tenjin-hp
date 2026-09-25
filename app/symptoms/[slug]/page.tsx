import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { symptoms } from "@/data/symptoms";
import {
  SectionHeading,
  Breadcrumb,
  CTAButton,
  LegalNote,
} from "@/components/ui/index";
import { FAQAccordion, ReservationCTA } from "@/components/sections/index";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { clinicInfo } from "@/data/clinicInfo";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const symptom = symptoms.find((s) => s.slug === params.slug);
  if (!symptom) return {};
  return {
    title: symptom.title,
    description: `${symptom.title}でお悩みの方へ。フリオ天神整骨院では、${symptom.shortDesc}。天神南駅徒歩圏内の整骨院です。`,
    alternates: {
      canonical: `https://furio-tenjin.jp/symptoms/${symptom.slug}`,
    },
  };
}

export default function SymptomPage({ params }: Params) {
  const symptom = symptoms.find((s) => s.slug === params.slug);
  if (!symptom) notFound();

  return (
    <main>
      <SEOJsonLd data={buildFAQSchema(symptom.faq)} />
      <SEOJsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: "https://furio-tenjin.jp" },
          {
            name: "お悩み別メニュー",
            url: "https://furio-tenjin.jp/symptoms",
          },
          {
            name: symptom.title,
            url: `https://furio-tenjin.jp/symptoms/${symptom.slug}`,
          },
        ])}
      />

      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "お悩み別", href: ROUTES.symptoms },
            { label: symptom.title },
          ]}
        />
      </div>

      {/* ヒーロー */}
      <section
        className="py-[72px]"
        style={{
          background:
            "linear-gradient(135deg, var(--navy) 0%, #2c3e6b 60%, #1e4a5a 100%)",
        }}
        aria-labelledby="symptom-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5 text-white">
          <div className="text-[48px] mb-4" aria-hidden="true">
            {symptom.icon}
          </div>
          <h1
            id="symptom-heading"
            className="font-serif text-[clamp(24px,4vw,40px)] font-bold leading-relaxed mb-4"
          >
            {symptom.title}
          </h1>
          <p className="text-[16px] text-white/82 max-w-[560px] leading-relaxed">
            {symptom.shortDesc}
          </p>
        </div>
      </section>

      {/* こんなお悩みに */}
      <section className="bg-[var(--beige)] py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading en="Concerns" ja="こんなお悩みはありませんか？" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[800px]">
            {symptom.concerns.map((c) => (
              <li
                key={c}
                className="bg-white rounded-lg px-4 py-3 text-[14px] text-[var(--text-primary)] flex items-start gap-2.5 border border-[var(--border)]"
              >
                <span className="text-[var(--mint)] font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* よくある原因 */}
      <section className="bg-white py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[720px]">
            <SectionHeading en="Causes" ja="よくある原因" />
            <ul className="space-y-3">
              {symptom.causes.map((c, i) => (
                <li key={i} className="flex gap-3 text-[14px] text-[var(--text-secondary)]">
                  <span
                    className="w-6 h-6 rounded-full bg-[var(--mint-pale)] text-[var(--mint)] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <LegalNote
              className="mt-4"
              text="※原因には個人差があります。「関係している可能性がある」というご参考としてください。"
            />
          </div>
        </div>
      </section>

      {/* 当院での対応方針 */}
      <section
        className="py-[72px]"
        style={{
          background:
            "linear-gradient(135deg, var(--beige) 0%, var(--mint-pale) 100%)",
        }}
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[720px]">
            <SectionHeading
              en="Our Approach"
              ja="フリオ天神整骨院での対応方針"
            />
            <p className="text-[15px] text-[var(--text-secondary)] leading-[2] mb-5">
              {symptom.approach}
            </p>
            <LegalNote text="※施術の効果には個人差があります。状態によって異なりますので、まずはご相談ください。" />
          </div>
        </div>
      </section>

      {/* セルフケア */}
      <section className="bg-white py-[72px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[720px]">
            <SectionHeading en="Self Care" ja="自宅でできるセルフケア" />
            <ul className="space-y-3">
              {symptom.selfCare.map((item, i) => (
                <li
                  key={i}
                  className="bg-[var(--beige)] rounded-lg px-4 py-3.5 text-[14px] text-[var(--text-primary)] flex items-start gap-2.5"
                >
                  <span
                    className="text-[var(--mint)] font-bold flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    💡
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-[var(--text-light)] mt-3">
              ※セルフケアは痛みを感じない範囲で行ってください。強い痛みがある場合は中止し、ご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {symptom.faq.length > 0 && (
        <section className="bg-[var(--beige)] py-[72px]">
          <div className="max-w-[1080px] mx-auto px-5">
            <SectionHeading en="FAQ" ja="よくある質問" center />
            <div className="max-w-[720px] mx-auto">
              <FAQAccordion faqs={symptom.faq} />
            </div>
          </div>
        </section>
      )}

      {/* 予約CTA */}
      <ReservationCTA
        title={`${symptom.title}でお悩みの方へ`}
        desc="まずはお気軽にご相談ください。\n施術前に状態を丁寧に確認し、方針をご説明します。"
      />
    </main>
  );
}
