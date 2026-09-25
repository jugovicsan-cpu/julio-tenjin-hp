// ============================================================
// セクションコンポーネント集
// ============================================================

"use client";

import { useState } from "react";
import type { FAQ, PriceItem } from "@/types";
import { clinicInfo } from "@/data/clinicInfo";
import { CTAButton, LegalNote } from "@/components/ui/index";
import { ROUTES } from "@/lib/routes";

// ---- Hero --------------------------------------------------
export function Hero() {
  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden pb-16"
      style={{
        background:
          "linear-gradient(135deg, #1a2744 0%, #2c3e6b 60%, #1e4a5a 100%)",
      }}
      aria-label="メインビジュアル"
    >
      {/* 背景パターン */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(77,182,160,0.18) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(245,240,232,0.06) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1080px] mx-auto px-5 relative z-10">
        <div className="max-w-[600px] text-white">
          {/* バッジ */}
          <div
            className="inline-flex gap-2 items-center bg-[var(--mint)]/20 border border-[var(--mint)]/50 text-[var(--mint-light)] text-[11px] font-bold tracking-[0.1em] px-3.5 py-1.5 rounded-full mb-6"
            role="note"
          >
            <span>🏥</span>
            <span>天神南駅から徒歩圏内 · 院長専任</span>
          </div>

          <h1 className="font-serif text-[clamp(28px,6vw,48px)] font-bold leading-[1.45] mb-5 tracking-[0.02em]">
            天神南で、<br />
            身体と向き合う<br />
            <span className="text-[var(--mint-light)]">時間</span>を。
          </h1>

          <p className="text-[clamp(14px,2.5vw,16px)] leading-[1.9] text-white/82 mb-8 font-light">
            姿勢・骨盤・筋肉・体幹を総合的に確認する<br />
            プライベート整骨院です。<br />
            国家資格者の院長が最初から最後まで専任対応します。
          </p>

          {/* タグ */}
          <div
            className="flex flex-wrap gap-2 mb-9"
            role="list"
            aria-label="対応症状"
          >
            {[
              "肩こり・首こり",
              "腰痛",
              "骨盤矯正",
              "姿勢改善",
              "産後骨盤",
              "スポーツ整体",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/20 text-white/90 text-[12px] px-3 py-1.5 rounded-full"
                role="listitem"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 items-center">
            <CTAButton href={ROUTES.reservation} variant="primary" size="lg">
              📅 Web予約はこちら
            </CTAButton>
            <a
              href={clinicInfo.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINEで友だち追加"
            >
              <img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="友だち追加"
                height={44}
                style={{ display: "block", borderRadius: "6px" }}
              />
            </a>
            <CTAButton
              href={`tel:${clinicInfo.phone}`}
              variant="white-outline"
              size="lg"
            >
              📞 お電話
            </CTAButton>
          </div>
        </div>
      </div>

      {/* 右側バッジ（PC用） */}
      <div
        className="absolute bottom-20 right-5 lg:right-10 bg-white/7 backdrop-blur-sm border border-white/12 rounded-xl p-4 max-w-[220px] text-white hidden md:block"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.12em] text-[var(--mint-light)] font-bold block mb-1.5">
          当院の特長
        </span>
        <ul className="text-[13px] space-y-0.5">
          {[
            "柔道整復師 資格14年",
            "院長が専任で担当",
            "プライベート空間",
            "天神南駅徒歩圏",
            "回数券の強引勧誘なし",
          ].map((item) => (
            <li key={item} className="before:content-['✓_'] before:text-[var(--mint-light)]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---- FlowSteps ---------------------------------------------
interface FlowStep {
  title: string;
  body: string;
}

const STEPS: FlowStep[] = [
  {
    title: "ご予約",
    body: "LINEまたはWeb予約フォームからご予約ください。当日予約も受け付けていますが、事前予約をおすすめします。",
  },
  {
    title: "問診・カウンセリング",
    body: "気になる症状・いつから・どんな時に辛いかなど、丁寧にお聞きします。生活習慣やお仕事の状況も教えていただけると助かります。",
  },
  {
    title: "姿勢・動作・状態の確認",
    body: "立ち姿勢・動作・筋肉の状態などを確認します。どこに問題が生じている可能性があるか、丁寧にご説明します。",
  },
  {
    title: "施術方針のご説明",
    body: "確認した内容をもとに、どんな施術を行うかをご説明します。わからないことや不安なことはここでご確認ください。",
  },
  {
    title: "施術",
    body: "状態に合わせて、トリガーポイント・矯正・ストレッチ・楽トレを組み合わせながら丁寧に施術します。",
  },
  {
    title: "セルフケア・通院の目安のご説明",
    body: "自宅でできるストレッチや姿勢のポイントをお伝えします。通院ペースの目安もご提案しますが、決めるのはご自身です。",
  },
  {
    title: "次回のご予約・LINE相談",
    body: "次回のご予約または、施術後の状態についてLINEでいつでもご質問いただけます。",
  },
];

export function FlowSteps() {
  return (
    <div
      className="flex flex-col max-w-[640px] mx-auto"
      role="list"
      aria-label="施術の流れ"
    >
      {STEPS.map((step, i) => (
        <div
          key={i}
          className="flex gap-5 pb-8 last:pb-0"
          role="listitem"
        >
          {/* 左：番号と線 */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div
              className="w-11 h-11 rounded-full bg-[var(--navy)] text-white flex items-center justify-center font-serif text-[16px] font-bold z-10"
              aria-label={`ステップ${i + 1}`}
            >
              {i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className="w-0.5 flex-1 mt-1"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--mint), var(--beige-dark))",
                }}
                aria-hidden="true"
              />
            )}
          </div>

          {/* 右：テキスト */}
          <div className="pt-2">
            <h3 className="font-serif text-[16px] font-semibold text-[var(--navy)] mb-1.5">
              {step.title}
            </h3>
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
              {step.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- FAQAccordion ------------------------------------------
interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border-b border-[var(--border)] last:border-b-0"
        >
          <button
            className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-[var(--beige)] transition-colors text-left text-[14px] font-medium text-[var(--navy)] cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span>{faq.question}</span>
            <span
              className="text-[20px] text-[var(--mint)] flex-shrink-0 ml-3 transition-transform duration-200"
              style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          {openIndex === i && (
            <div
              id={`faq-answer-${i}`}
              className="px-5 pb-4 text-[13px] text-[var(--text-secondary)] leading-relaxed bg-[var(--beige)]"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ---- PriceTable --------------------------------------------
interface PriceTableProps {
  items: PriceItem[];
}

export function PriceTable({ items }: PriceTableProps) {
  return (
    <>
      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse text-[14px]"
          role="table"
          aria-label="施術料金表"
        >
          <thead>
            <tr>
              <th
                scope="col"
                className="bg-[var(--navy)] text-white text-left px-4 py-3 text-[13px] font-semibold"
              >
                区分
              </th>
              <th
                scope="col"
                className="bg-[var(--navy)] text-white text-left px-4 py-3 text-[13px] font-semibold"
              >
                メニュー
              </th>
              <th
                scope="col"
                className="bg-[var(--navy)] text-white text-left px-4 py-3 text-[13px] font-semibold"
              >
                料金（税込）
              </th>
              <th
                scope="col"
                className="bg-[var(--navy)] text-white text-left px-4 py-3 text-[13px] font-semibold hidden sm:table-cell"
              >
                目安時間
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={item.id}
                className={i % 2 === 1 ? "bg-[var(--beige)]" : "bg-white"}
              >
                <td className="px-4 py-3.5 align-top">
                  <span className="inline-block text-[10px] font-bold px-2 py-[2px] rounded bg-[var(--mint-pale)] text-[var(--mint)]">
                    {item.category}
                  </span>
                </td>
                <td className="px-4 py-3.5 align-top">
                  <strong className="font-semibold">{item.name}</strong>
                  {item.note && (
                    <p className="text-[11px] text-[var(--text-light)] mt-1">
                      {item.note}
                    </p>
                  )}
                </td>
                <td className="px-4 py-3.5 align-top">
                  <span className="font-serif text-[17px] font-bold text-[var(--navy)]">
                    {item.price}
                  </span>
                </td>
                <td className="px-4 py-3.5 align-top text-[var(--text-secondary)] hidden sm:table-cell">
                  {item.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LegalNote
        text="※料金は変更になる場合があります。最新情報はお電話・LINEにてご確認ください。保険適用については急性の打撲・捻挫・挫傷等が対象です。慢性症状は保険適用外の場合がほとんどです。"
        className="mt-4 p-3 bg-[var(--beige)] rounded-lg border-l-4 border-[var(--mint)]"
      />
    </>
  );
}

// ---- AccessMap ---------------------------------------------
export function AccessMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* 地図プレースホルダー（実装時は iframe に差し替え） */}
      <div
        className="rounded-xl overflow-hidden aspect-[4/3] bg-[var(--beige-dark)] flex items-center justify-center text-[var(--text-light)] text-[13px]"
        role="img"
        aria-label="Googleマップ（準備中）"
      >
        <div className="text-center">
          <p className="text-[32px] mb-2">📍</p>
          <p>Googleマップ</p>
          <p>（実装時に埋め込み）</p>
        </div>
      </div>

      <dl className="space-y-4">
        {[
          { dt: "院名", dd: clinicInfo.name },
          { dt: "住所", dd: clinicInfo.addressDetail },
          {
            dt: "最寄り駅",
            dd: `${clinicInfo.nearestStation}より徒歩${clinicInfo.walkMinutes}分圏内`,
          },
          {
            dt: "電話番号",
            dd: null,
            phone: clinicInfo.phone,
          },
        ].map((item) => (
          <div key={item.dt}>
            <dt className="text-[11px] font-bold tracking-[0.08em] text-[var(--mint)] uppercase mb-1">
              {item.dt}
            </dt>
            <dd className="text-[14px] text-[var(--text-primary)] leading-relaxed">
              {item.phone ? (
                <a
                  href={`tel:${item.phone}`}
                  className="text-[var(--mint)] font-bold hover:underline"
                >
                  {item.phone}
                </a>
              ) : (
                item.dd
              )}
            </dd>
          </div>
        ))}

        {/* 営業時間 */}
        <div>
          <dt className="text-[11px] font-bold tracking-[0.08em] text-[var(--mint)] uppercase mb-1">
            営業時間
          </dt>
          <dd>
            <table className="w-full text-[13px]" aria-label="営業時間">
              <tbody>
                {clinicInfo.hours.map((h) => (
                  <tr
                    key={h.days}
                    className="border-b border-[var(--border)] last:border-0"
                  >
                    <td className="py-1.5 text-[var(--text-secondary)] font-medium pr-4">
                      {h.days}
                    </td>
                    <td className="py-1.5 font-bold text-[var(--navy)] text-right">
                      {h.open === "—"
                        ? "定休日"
                        : `${h.open} 〜 ${h.close}`}
                      {h.note && (
                        <span className="text-[11px] text-[var(--text-light)] ml-1">
                          ※
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] text-[var(--text-light)] mt-1">
              ※不定休あり。SNSにて告知します。
            </p>
          </dd>
        </div>

        <div>
          <dt className="text-[11px] font-bold tracking-[0.08em] text-[var(--mint)] uppercase mb-1">
            駐車場
          </dt>
          <dd className="text-[14px] text-[var(--text-secondary)]">
            専用駐車場なし。近隣のコインパーキングをご利用ください。
          </dd>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-2">
          <CTAButton
            href={clinicInfo.googleMapUrl}
            variant="navy"
            external
          >
            📍 Googleマップで見る
          </CTAButton>
          <CTAButton href={`tel:${clinicInfo.phone}`} variant="outline">
            📞 電話する
          </CTAButton>
        </div>
      </dl>
    </div>
  );
}

// ---- ReservationCTA ----------------------------------------
interface ReservationCTAProps {
  title?: string;
  desc?: string;
  showWarning?: boolean;
}

export function ReservationCTA({
  title = "まずはお気軽にご相談ください",
  desc = "お身体のこと、施術のこと、なんでもお気軽にどうぞ。\nLINEで気軽に相談することもできます。",
  showWarning = true,
}: ReservationCTAProps) {
  return (
    <section
      className="py-[72px] text-center text-white"
      style={{
        background: "linear-gradient(135deg, var(--mint) 0%, #2a8f7b 100%)",
      }}
      aria-labelledby="reservation-cta-heading"
    >
      <div className="max-w-[1080px] mx-auto px-5">
        <h2
          id="reservation-cta-heading"
          className="font-serif text-[clamp(22px,4vw,32px)] font-bold mb-3.5"
        >
          {title}
        </h2>
        <p className="text-[15px] opacity-90 mb-8 leading-relaxed whitespace-pre-line">
          {desc}
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center">
          <CTAButton
            href="https://coubic.com/XXXXXXX"
            variant="white"
            size="lg"
            external
          >
            📅 Web予約はこちら
          </CTAButton>
          <a
            href={clinicInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINEで友だち追加"
          >
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height={44}
              style={{ display: "block", borderRadius: "6px" }}
            />
          </a>
          <CTAButton
            href={`tel:${clinicInfo.phone}`}
            variant="white-outline"
            size="lg"
          >
            📞 {clinicInfo.phone}
          </CTAButton>
        </div>

        {showWarning && (
          <p
            className="text-[12px] opacity-70 mt-5"
            role="note"
          >
            ※強い痛み・しびれ・麻痺等がある場合は、まず医療機関へご相談ください。
          </p>
        )}
      </div>
    </section>
  );
}

// ---- StaffProfile ------------------------------------------
export function StaffProfile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
      {/* 写真 */}
      <div
        className="rounded-[20px] overflow-hidden aspect-[3/4] bg-gradient-to-br from-[var(--navy-light)] to-[var(--mint)] flex items-center justify-center text-white/60 text-[13px] text-center p-5"
        role="img"
        aria-label="院長 藤澤勇吾の写真（準備中）"
      >
        <span>院長写真<br />（準備中）</span>
      </div>

      <div>
        <p className="text-[12px] tracking-[0.12em] text-[var(--mint)] font-bold mb-1.5">
          フリオ天神整骨院 院長
        </p>
        <h3 className="font-serif text-[clamp(22px,4vw,28px)] font-bold text-[var(--navy)] mb-1">
          藤澤 勇吾
        </h3>
        <p className="text-[13px] text-[var(--text-light)] mb-4">ふじさわ ゆうご</p>
        <span className="inline-flex items-center gap-1.5 bg-[var(--navy)] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-full mb-5">
          🏅 柔道整復師（国家資格）
        </span>

        <p className="text-[14px] text-[var(--text-secondary)] leading-[2] mb-5 whitespace-pre-line">
          {`学生時代からサッカー・フットサルを続け、身体づくりや怪我との向き合い方に興味を持ったことが整骨院の道に進むきっかけになりました。
柔道整復師として14年間、大手グループ院での経験とスタッフ指導を経て、「一人ひとりと丁寧に向き合える環境を作りたい」という思いからフリオ天神整骨院を開院しました。

施術では、姿勢・骨盤・筋肉・体幹のバランスに着目し、お客様の日常の動きや生活習慣も含めて一緒に考えるようにしています。
「痛みをとる」だけでなく、「動きやすい毎日をつくる」ためのサポートを大切にしています。

2児の父として、子育て中の方のご不安も身近に感じています。産後の身体の変化や、抱っこ・授乳時の腰・肩の負担についても気軽にご相談ください。`}
        </p>

        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="院長プロフィールタグ"
        >
          {[
            "大分県大分市出身",
            "サッカー・フットサル経験",
            "経験14年",
            "2児の父",
            "大手グループ院での指導経験",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white border border-[var(--border)] rounded-full px-3 py-1 text-[12px] text-[var(--text-secondary)]"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
