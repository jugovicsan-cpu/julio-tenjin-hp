import type { Metadata } from "next";
import { Breadcrumb, SectionHeading, CTAButton, LegalNote } from "@/components/ui/index";
import { FAQAccordion, ReservationCTA } from "@/components/sections/index";
import { clinicInfo } from "@/data/clinicInfo";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "交通事故後の不調相談",
  description:
    "交通事故後の首・肩・腰の違和感でお悩みの方へ。天神南駅近くのフリオ天神整骨院では、むちうち・頸椎捻挫など交通事故後の不調についてご相談いただけます。費用・保険・整形外科との併用についてもお気軽にお問い合わせください。",
  alternates: { canonical: "https://furio-tenjin.jp/traffic-accident" },
};

const ACCIDENT_FAQS = [
  {
    question: "事故直後は痛みがなかったのですが、相談できますか？",
    answer:
      "はい。事故後は時間が経ってから症状が出ることもあります。「なんとなく違和感がある」という段階でも、早めにご相談いただくことをおすすめしています。",
  },
  {
    question: "費用はかかりますか？",
    answer:
      "交通事故（被害者）の場合、状況によって加害者側の自賠責保険や任意保険を使って施術を受けられる場合があります。ただし、保険会社・示談の状況・医療機関との関係によって異なります。まずはご相談ください。",
  },
  {
    question: "仕事帰りに通えますか？",
    answer:
      "平日の夜間（月・火・水・金は20:00まで）もご予約いただけます。お仕事帰りにもご来院いただけます。",
  },
  {
    question: "保険会社とのやり取りを手伝ってもらえますか？",
    answer:
      "法律・保険に関する具体的なアドバイスは専門外ですが、施術に関連する書類への対応など、できる範囲でサポートします。保険会社とのやり取りで不安なことはご相談ください。",
  },
  {
    question: "整形外科にも通っていますが、同時に通えますか？",
    answer:
      "整形外科と整骨院の併用が可能かどうかは、保険会社・担当医・状況によって異なります。事前に担当医・保険会社への確認をおすすめします。ご不明な点はご相談ください。",
  },
  {
    question: "むちうちと診断されましたが対応できますか？",
    answer:
      "むちうち（頸椎捻挫）による首・肩の痛みや張りへのアプローチは行っています。症状の状態を確認しながら、丁寧に対応します。",
  },
  {
    question: "事故からどのくらい経っても通院できますか？",
    answer:
      "事故からの経過時間によって対応が異なる場合があります。保険・示談の状況によっても変わりますので、まずはお電話またはLINEでご相談ください。",
  },
];

const CONCERN_ITEMS = [
  { icon: "😣", name: "首が痛い・重い", sub: "むちうち・頸椎捻挫" },
  { icon: "💆", name: "肩・肩甲骨が張る", sub: "衝撃による筋肉の緊張" },
  { icon: "🦴", name: "腰が痛い", sub: "着座・シートベルトの衝撃" },
  { icon: "🤕", name: "頭痛・頭重感", sub: "首のコリからの影響" },
  { icon: "⚡", name: "手足のしびれ", sub: "※まず整形外科へご相談を" },
  { icon: "😰", name: "不安・ストレス", sub: "事故後の心身への影響" },
];

export default function TrafficAccidentPage() {
  return (
    <main>
      <SEOJsonLd data={buildFAQSchema(ACCIDENT_FAQS)} />
      <SEOJsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: "https://furio-tenjin.jp" },
          {
            name: "交通事故後の不調相談",
            url: "https://furio-tenjin.jp/traffic-accident",
          },
        ])}
      />

      <div className="max-w-[1080px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "交通事故後の不調相談" },
          ]}
        />
      </div>

      {/* ヒーロー */}
      <section
        className="py-[72px]"
        style={{
          background:
            "linear-gradient(135deg, #1a2744 0%, #2d3a5a 100%)",
        }}
        aria-labelledby="accident-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[640px] text-white">
            <div
              className="inline-flex gap-2 items-center bg-[var(--mint)]/20 border border-[var(--mint)]/50 text-[var(--mint-light)] text-[11px] font-bold tracking-[0.1em] px-3.5 py-1.5 rounded-full mb-6"
              role="note"
            >
              <span>🚗</span>
              <span>交通事故後の不調相談</span>
            </div>

            <h1
              id="accident-heading"
              className="font-serif text-[clamp(22px,4vw,36px)] font-bold leading-relaxed mb-4"
            >
              交通事故後の首・肩・腰の<br />
              違和感でお悩みの方へ
            </h1>

            <p className="text-[15px] text-white/82 leading-[1.9] mb-7">
              事故直後は痛みがなくても、数日後から首・肩・腰に違和感が出ることがあります。
              「どこに相談すればいいか分からない」という方も、まずはお気軽にご相談ください。
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <CTAButton
                href={`tel:${clinicInfo.phone}`}
                variant="white"
                size="lg"
              >
                📞 電話で相談
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
                href={ROUTES.reservation}
                variant="white-outline"
                size="lg"
              >
                📅 Web予約
              </CTAButton>
            </div>

            <div
              className="bg-red-500/15 border border-red-400/40 rounded-xl p-4 text-[13px] text-white/88"
              role="alert"
            >
              <strong className="text-red-300">⚠ 緊急の場合は必ず医療機関へ</strong>
              <br />
              強い痛み・しびれ・吐き気・意識障害等がある場合は、すぐに医療機関（救急・整形外科）を受診してください。
            </div>
          </div>
        </div>
      </section>

      {/* 事故後のよくある悩み */}
      <section
        className="bg-white py-[72px]"
        aria-labelledby="concerns-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Your Concerns"
            ja="事故後によくある悩み"
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CONCERN_ITEMS.map((item) => (
              <div
                key={item.name}
                className="bg-white border-[1.5px] border-[var(--border)] rounded-xl p-5 text-center"
              >
                <div className="text-[28px] mb-2" aria-hidden="true">{item.icon}</div>
                <div className="text-[13px] font-bold text-[var(--navy)] leading-snug">
                  {item.name}
                </div>
                <div className="text-[11px] text-[var(--text-light)] mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 早めに相談する重要性 */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        aria-labelledby="early-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[720px] mx-auto">
            <SectionHeading
              en="Why Early"
              ja="早めにご相談いただく大切さ"
            />
            <p className="text-[15px] text-[var(--text-secondary)] leading-[2] mb-4">
              交通事故後の症状は、事故から<strong>数日〜数週間経ってから</strong>出てくることがあります。
              「大したことないだろう」と放置していると、慢性化につながる可能性があります。
            </p>
            <p className="text-[15px] text-[var(--text-secondary)] leading-[2] mb-4">
              気になる症状がある場合は、早めに整形外科での診察を受けるとともに、
              整骨院へのご相談もお早めにすることをおすすめしています。
            </p>
            <div className="bg-[var(--mint-pale)] border-l-4 border-[var(--mint)] rounded-r-lg p-4">
              <p className="text-[13px] text-[var(--text-primary)] font-medium">
                ※症状の程度・経過には個人差があります。強い症状がある場合は必ず医療機関へご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 整形外科との関係 */}
      <section
        className="bg-white py-[72px]"
        aria-labelledby="hospital-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[720px] mx-auto">
            <SectionHeading
              en="With Hospital"
              ja="整形外科との併用について"
            />
            <p className="text-[15px] text-[var(--text-secondary)] leading-[2] mb-4">
              交通事故後は、<strong>まず整形外科での診断を受けること</strong>をおすすめします。
              レントゲン等による骨・関節の状態確認は医師が行うものです。
            </p>
            <p className="text-[15px] text-[var(--text-secondary)] leading-[2] mb-4">
              整形外科と整骨院の<strong>併用は可能な場合があります</strong>が、
              保険会社・医療機関の状況によって異なります。
              整骨院への通院を始める前に、担当医・保険会社にご確認されることをおすすめします。
            </p>
            <div className="bg-[var(--mint-pale)] border-l-4 border-[var(--mint)] rounded-r-lg p-4">
              <p className="text-[13px] text-[var(--text-primary)] font-medium">
                ご不明な点はフリオ天神整骨院にご相談ください。状況を聞きながら、一緒に考えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 費用・保険 */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="max-w-[720px] mx-auto">
            <SectionHeading
              en="Cost"
              ja="費用・保険について"
            />
            <div className="space-y-4">
              {[
                {
                  title: "自賠責保険について",
                  body: "交通事故（被害者）の場合、加害者側の自賠責保険・任意保険によって施術費用がカバーされる場合があります。ただし、状況・示談の進捗・医療機関との関係によって異なります。",
                },
                {
                  title: "健康保険の使用について",
                  body: "交通事故による負傷に健康保険を使う場合は、一般的に手続きが必要です。詳しくはご加入の健康保険組合・保険会社にご確認ください。",
                },
                {
                  title: "費用負担が不安な方へ",
                  body: "「費用がどうなるか分からず不安」という方も、まずはご相談ください。状況を伺いながら、一緒に確認します。当院だけで判断できないことは、保険会社・医療機関へのご確認をおすすめしています。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-[var(--border)]"
                >
                  <h3 className="font-serif text-[15px] font-semibold text-[var(--navy)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <LegalNote
              className="mt-4 p-3 bg-[var(--beige-dark)] rounded-lg"
              text="※費用・保険については状況により異なります。保険会社・医療機関等への確認が必要な場合があります。当院は法律・保険に関する専門機関ではありません。"
            />
          </div>
        </div>
      </section>

      {/* フリオ天神の対応方針 */}
      <section
        className="bg-[var(--navy)] py-[72px]"
        aria-labelledby="approach-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="Our Approach"
            ja="フリオ天神整骨院の対応方針"
            light
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "👂",
                title: "まずはじっくりお話を聞きます",
                body: "事故の状況・症状・お悩みを丁寧にお聞きします。「どこに相談すればいいか分からない」という方も大歓迎です。",
              },
              {
                icon: "🔍",
                title: "身体の状態を丁寧に確認します",
                body: "首・肩・腰の状態を確認し、施術方針をご説明します。強い症状がある場合は医療機関へのご相談をおすすめする場合があります。",
              },
              {
                icon: "📝",
                title: "保険・手続きについても相談できます",
                body: "当院で対応できる範囲でお伝えします。専門的なご相談が必要な場合は、適切な窓口をご案内します。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.06] border border-white/10 rounded-xl p-6"
              >
                <div className="text-[32px] mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-serif text-[16px] font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-white/72 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-white py-[72px]"
        aria-labelledby="accident-faq-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading
            en="FAQ"
            ja="よくある質問"
            center
          />
          <div className="max-w-[720px] mx-auto">
            <FAQAccordion faqs={ACCIDENT_FAQS} />
          </div>
        </div>
      </section>

      {/* アクセス（簡易） */}
      <section
        className="bg-[var(--beige)] py-[72px]"
        aria-labelledby="access-heading"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <SectionHeading en="Access" ja="アクセス・営業時間" center />
          <div className="max-w-[480px] mx-auto text-center">
            <p className="text-[14px] text-[var(--text-secondary)] leading-[2] mb-5">
              {clinicInfo.addressDetail}
              <br />
              {clinicInfo.nearestStation}より徒歩圏内
              <br />
              TEL:{" "}
              <a
                href={`tel:${clinicInfo.phone}`}
                className="text-[var(--mint)] font-bold"
              >
                {clinicInfo.phone}
              </a>
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <CTAButton href={clinicInfo.googleMapUrl} variant="navy" external>
                📍 Googleマップで見る
              </CTAButton>
              <CTAButton href={`tel:${clinicInfo.phone}`} variant="outline">
                📞 電話する
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 予約CTA */}
      <ReservationCTA
        title="交通事故後の不調、まずはご相談ください"
        desc={"「どこに相談すればいいか分からない」という方も、まずはお気軽に。\n状況を聞きながら、一緒に考えます。"}
        showWarning
      />
    </main>
  );
}
