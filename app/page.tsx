import type { Metadata } from "next";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { treatments } from "@/data/treatments";
import { symptoms } from "@/data/symptoms";
import { faqs } from "@/data/index";
import { voices } from "@/data/index";
import { columns } from "@/data/index";
import { prices } from "@/data/index";
import { newsItems } from "@/data/index";
import {
  Hero,
  FlowSteps,
  FAQAccordion,
  PriceTable,
  AccessMap,
  ReservationCTA,
  StaffProfile,
} from "@/components/sections/index";
import {
  SectionHeading,
  CTAButton,
  LegalNote,
} from "@/components/ui/index";
import {
  SymptomCard,
  TreatmentCard,
  FeatureCard,
  VoiceCard,
  ColumnCard,
} from "@/components/cards/index";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "フリオ天神整骨院 | 福岡市中央区天神南・渡辺通の整骨院",
  description:
    "天神南駅から徒歩圏内。柔道整復師の院長が専任で対応するプライベート整骨院。肩こり・腰痛・骨盤矯正・産後骨盤・スポーツ整体・交通事故後の不調相談。",
  alternates: { canonical: "https://furio-tenjin.jp" },
};

const REASONS = [
  {
    num: "01",
    title: "国家資格者の院長が\n専任で対応",
    body: "柔道整復師（国家資格）を持つ院長が、カウンセリングから施術まで一貫して担当します。施術者が変わることはありません。",
  },
  {
    num: "02",
    title: "姿勢・骨盤・筋肉・体幹を\n総合的に確認",
    body: "一か所だけでなく、身体全体のバランスを見ながら不調の背景を探ります。トリガーポイント・矯正・ストレッチ・楽トレを組み合わせます。",
  },
  {
    num: "03",
    title: "天神南駅徒歩圏で\n通いやすい",
    body: "福岡市地下鉄七隈線「天神南駅」から徒歩圏内。仕事帰り・買い物ついでにも通いやすい場所にあります。",
  },
  {
    num: "04",
    title: "落ち着いた\nプライベート空間",
    body: "2台のベッドによる静かな環境です。「他の人に見られたくない」「ゆっくり話したい」方にも安心していただけます。",
  },
  {
    num: "05",
    title: "強引な回数券の\n勧誘はありません",
    body: "通院の目安はお伝えしますが、決めるのはご自身です。お身体の状態と生活に合わせたペースで通っていただけます。",
  },
  {
    num: "06",
    title: "セルフケアまで\n丁寧にお伝えします",
    body: "施術だけでなく、自宅でできるストレッチや姿勢改善のヒントもお伝えします。日常の変化をサポートするのが目標です。",
  },
];

export default function TopPage() {
  return (
    <main>
      {/* お知らせバー */}
      {newsItems.filter((n) => n.isNew).length > 0 && (
        <div
          className="bg-[var(--beige)] border-b border-[var(--beige-dark)] py-2.5"
          role="complementary"
          aria-label="お知らせ"
        >
          <div className="max-w-[1080px] mx-auto px-5 flex items-center gap-3 text-[13px] flex-wrap">
            <span className="bg-[var(--mint)] text-white text-[10px] font-bold px-2 py-[2px] rounded flex-shrink-0">
              NEW
            </span>
            <span>{newsItems[0].title}</span>
          </div>
        </div>
      )}

      {/* ① ヒーロー */}
      <Hero />

      {/* ② 初めての方へ */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        id="first"
        aria-labelledby="first-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 写真プレースホルダー */}
            <div
              className="rounded-[20px] overflow-hidden aspect-[4/3] bg-gradient-to-br from-[var(--mint-pale)] to-[var(--beige-dark)] flex items-center justify-center text-[var(--text-light)] text-[13px]"
              role="img"
              aria-label="院内の様子（準備中）"
            >
              院内写真（準備中）
            </div>

            <div>
              <SectionHeading
                en="First Visit"
                ja="初めての方へ"
                desc="こんな方に向いています"
              />

              <ul className="space-y-0 mb-6" role="list">
                {[
                  "肩こり・腰痛が慢性的で根本的に何とかしたい",
                  "姿勢の悪さや骨盤の歪みが気になっている",
                  "産後の身体の変化に不安を感じている",
                  "スポーツ由来の不調を繰り返している",
                  "交通事故後の違和感の相談先を探している",
                  "プライベート空間でゆっくり相談したい",
                  "整骨院初めてで少し不安がある",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 py-2.5 border-b border-[var(--beige-dark)] text-[14px] text-[var(--text-primary)]"
                    role="listitem"
                  >
                    <span className="text-[var(--mint)] font-bold flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[14px] text-[var(--text-secondary)] leading-[1.9] mb-5">
                施術前に姿勢・動作・お身体の状態を丁寧に確認します。
                <br />
                回数券や継続コースを強引にお勧めすることはありません。
                <br />
                まずはお気軽にご相談ください。
              </p>

              <div
                className="flex flex-wrap gap-2 mb-6"
                role="list"
                aria-label="来院情報"
              >
                {[
                  { icon: "👗", text: "動きやすい服装でOK（着替えあり）" },
                  { icon: "⏱", text: "初回約60〜90分" },
                  { icon: "📱", text: "LINE・Web予約可" },
                  { icon: "🔒", text: "プライベート空間" },
                ].map((pill) => (
                  <div
                    key={pill.text}
                    className="bg-white border border-[var(--border)] rounded-lg px-3.5 py-2 text-[12px] flex items-center gap-1.5"
                    role="listitem"
                  >
                    <span>{pill.icon}</span>
                    <span>{pill.text}</span>
                  </div>
                ))}
              </div>

              <CTAButton href={ROUTES.reservation} variant="navy" size="lg">
                予約・相談はこちら
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ③ こんなお悩みに */}
      <section
        className="bg-white py-[72px]"
        id="symptoms"
        aria-labelledby="symptoms-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Your Concerns"
            ja="こんなお悩みに向き合います"
            desc="症状や目的に合わせた施術方針をご提案します。まずはお気軽にご相談ください。"
            center
          />

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            role="list"
          >
            {symptoms.map((s) => (
              <SymptomCard key={s.id} symptom={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ④ 選ばれる理由 */}
      <section
        className="bg-[var(--navy)] py-[72px]"
        id="reasons"
        aria-labelledby="reasons-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Why Choose Us"
            ja="フリオ天神整骨院が選ばれる理由"
            desc="一人ひとりに丁寧に向き合うことを、何よりも大切にしています。"
            center
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map((r) => (
              <FeatureCard
                key={r.num}
                num={r.num}
                title={r.title}
                body={r.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ 施術内容 */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        id="treatments"
        aria-labelledby="treatments-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Treatments"
            ja="施術内容"
            desc="お身体の状態に合わせて、複数の方法を組み合わせながら対応します。"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatments.map((t) => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 施術の流れ */}
      <section
        className="bg-white py-[72px]"
        id="flow"
        aria-labelledby="flow-heading"
      >
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

      {/* ⑦ 院長紹介 */}
      <section
        className="py-[72px]"
        id="staff"
        aria-labelledby="staff-heading"
        style={{
          background:
            "linear-gradient(135deg, var(--beige) 0%, var(--mint-pale) 100%)",
        }}
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading en="Staff" ja="院長紹介" />
          <StaffProfile />
        </div>
      </section>

      {/* ⑧ 利用者の声 */}
      <section
        className="bg-white py-[72px]"
        id="voice"
        aria-labelledby="voice-heading"
      >
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

      {/* ⑨ コラム */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        id="column"
        aria-labelledby="column-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Column"
            ja="お悩み解決コラム"
            desc="肩こり・腰痛・姿勢・スポーツ・産後・交通事故… 日常のお悩みに役立つ情報を発信しています。"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns.slice(0, 6).map((c) => (
              <ColumnCard key={c.id} column={c} />
            ))}
          </div>

          <div className="text-center mt-8">
            <CTAButton href={ROUTES.column} variant="outline" size="lg">
              コラムをもっと見る
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ⑩ 料金 */}
      <section
        className="bg-white py-[72px]"
        id="price"
        aria-labelledby="price-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Price"
            ja="料金案内"
            desc="お身体の状態に合わせてご相談します。まずはお気軽にお問い合わせください。"
            center
          />
          <PriceTable items={prices} />
        </div>
      </section>

      {/* SNS */}
      <section
        className="bg-white py-12"
        id="sns"
        aria-labelledby="sns-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="SNS"
            ja="セルフケア情報を発信中"
            desc="肩こり・腰痛・姿勢改善に役立つ情報をSNSで発信しています。フォローお待ちしています。"
            center
          />

          <div
            className="grid grid-cols-3 sm:grid-cols-5 gap-3"
            role="list"
          >
            {[
              {
                href: clinicInfo.instagram,
                icon: "📷",
                label: "Instagram",
                className: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white",
              },
              {
                href: clinicInfo.tiktok,
                icon: "🎵",
                label: "TikTok",
                className: "bg-[#010101] text-white",
              },
              {
                href: clinicInfo.youtube,
                icon: "▶️",
                label: "YouTube",
                className: "bg-[#ff0000] text-white",
              },
              {
                href: clinicInfo.twitter,
                icon: "🐦",
                label: "X(Twitter)",
                className: "bg-[#1da1f2] text-white",
              },
              {
                href: clinicInfo.lineUrl,
                icon: "💬",
                label: "LINE",
                className: "bg-[#06C755] text-white",
              },
            ].map((sns) => (
              <a
                key={sns.label}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1.5 text-[11px] font-bold transition-transform hover:scale-105 ${sns.className}`}
                role="listitem"
                aria-label={`${sns.label}を見る`}
              >
                <span className="text-[28px]" aria-hidden="true">{sns.icon}</span>
                <span>{sns.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ⑪ アクセス */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        id="access"
        aria-labelledby="access-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Access"
            ja="アクセス・営業時間"
            center
          />
          <AccessMap />
        </div>
      </section>

      {/* ⑫ FAQ */}
      <section
        className="bg-white py-[72px]"
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="FAQ"
            ja="よくある質問"
            center
          />
          <div className="max-w-[720px] mx-auto">
            <FAQAccordion faqs={faqs.slice(0, 8)} />
            <div className="text-center mt-6">
              <CTAButton href={ROUTES.faq} variant="outline">
                すべての質問を見る
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ⑬ 予約CTA */}
      <ReservationCTA />
    </main>
  );
}
