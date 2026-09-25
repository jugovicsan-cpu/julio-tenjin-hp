// app/privacy/page.tsx
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/index";
import { ROUTES } from "@/lib/routes";
import { clinicInfo } from "@/data/clinicInfo";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "フリオ天神整骨院のプライバシーポリシーです。",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white py-12">
      <div className="max-w-[800px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "プライバシーポリシー" },
          ]}
        />

        <h1 className="font-serif text-[28px] font-bold text-[var(--navy)] mb-8">
          プライバシーポリシー
        </h1>

        <div className="space-y-8 text-[14px] text-[var(--text-secondary)] leading-[2]">
          <section>
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-3">
              1. 個人情報の収集について
            </h2>
            <p>
              フリオ天神整骨院（以下「当院」）は、予約・お問い合わせ・施術の際に、氏名・連絡先・健康状態等の個人情報をお預かりする場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-3">
              2. 個人情報の利用目的
            </h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>ご予約・施術対応のため</li>
              <li>お問い合わせへの回答のため</li>
              <li>施術記録の管理のため</li>
              <li>当院からのお知らせをお送りするため（同意をいただいた場合）</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-3">
              3. 個人情報の第三者提供
            </h2>
            <p>
              当院は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-3">
              4. 個人情報の管理
            </h2>
            <p>
              個人情報の漏洩・紛失・改ざんを防ぐため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-3">
              5. お問い合わせ
            </h2>
            <p>
              個人情報に関するお問い合わせは、下記までご連絡ください。
            </p>
            <p className="mt-2">
              フリオ天神整骨院<br />
              住所：{clinicInfo.addressDetail}<br />
              TEL：{clinicInfo.phone}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-3">
              6. 免責事項
            </h2>
            <p>
              当サイトの情報は一般的な情報提供を目的としており、医療行為・診断の代わりになるものではありません。
              強い症状がある場合は医療機関へご相談ください。
            </p>
          </section>

          <p className="text-[12px] text-[var(--text-light)]">
            制定日：2025年4月1日
          </p>
        </div>
      </div>
    </main>
  );
}
