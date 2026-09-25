// app/reservation/page.tsx
"use client";

import { useState } from "react";
import { Breadcrumb, SectionHeading, LegalNote } from "@/components/ui/index";
import { clinicInfo } from "@/data/clinicInfo";
import { ROUTES } from "@/lib/routes";

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    symptom: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!agreed) return;
    // 将来 Formspree / GAS / Supabase 等に差し替え
    setSubmitted(true);
  };

  return (
    <main className="bg-[var(--beige)] min-h-screen py-12">
      <div className="max-w-[680px] mx-auto px-5">
        <Breadcrumb
          items={[
            { label: "ホーム", href: ROUTES.home },
            { label: "Web予約" },
          ]}
        />

        <SectionHeading
          en="Reservation"
          ja="Web予約・お問い合わせ"
          desc="ご予約・ご相談はフォームまたはLINE・お電話からどうぞ。"
        />

        {/* LINE / 電話ショートカット */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href={clinicInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-[14px] text-white bg-[#06C755]"
          >
            💬 LINEで予約・相談
          </a>
          <a
            href={`tel:${clinicInfo.phone}`}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-[14px] text-white bg-[var(--navy)]"
          >
            📞 電話する
          </a>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-[48px] mb-4">✅</div>
            <h2 className="font-serif text-[22px] font-bold text-[var(--navy)] mb-3">
              お問い合わせを受け付けました
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
              内容を確認の上、2営業日以内にご連絡します。
              <br />
              お急ぎの方はお電話またはLINEをご利用ください。
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-[18px] font-semibold text-[var(--navy)] mb-5">
              Web予約フォーム
            </h2>

            <div className="space-y-5">
              {/* 氏名 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                >
                  お名前 <span className="text-red-500 text-[11px]">必須</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 花子"
                  className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors"
                />
              </div>

              {/* 電話 */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                >
                  電話番号 <span className="text-red-500 text-[11px]">必須</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="090-XXXX-XXXX"
                  className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors"
                />
              </div>

              {/* メール */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                >
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors"
                />
              </div>

              {/* 希望日時 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                  >
                    ご希望日
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                  >
                    ご希望時間帯
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="午前">午前（10:00〜12:00）</option>
                    <option value="午後早め">午後早め（12:00〜15:00）</option>
                    <option value="夕方">夕方（15:00〜18:00）</option>
                    <option value="夜間">夜間（18:00〜20:00）</option>
                  </select>
                </div>
              </div>

              {/* 症状 */}
              <div>
                <label
                  htmlFor="symptom"
                  className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                >
                  お悩みの症状
                </label>
                <select
                  id="symptom"
                  name="symptom"
                  value={form.symptom}
                  onChange={handleChange}
                  className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors bg-white"
                >
                  <option value="">選択してください（任意）</option>
                  <option>肩こり・首こり</option>
                  <option>腰痛</option>
                  <option>頭痛・眼精疲労</option>
                  <option>猫背・姿勢改善</option>
                  <option>骨盤の歪み</option>
                  <option>産後骨盤矯正</option>
                  <option>スポーツ由来の不調</option>
                  <option>交通事故後の不調</option>
                  <option>体幹強化・楽トレ</option>
                  <option>その他</option>
                </select>
              </div>

              {/* メッセージ */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-bold text-[var(--navy)] mb-1.5"
                >
                  ご質問・ご要望など
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="気になる症状、ご来院の状況など、お気軽にお書きください。"
                  className="w-full border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[var(--mint)] transition-colors resize-none"
                />
              </div>

              {/* 個人情報同意 */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[var(--mint)]"
                />
                <span className="text-[13px] text-[var(--text-secondary)]">
                  <a href={ROUTES.privacy} className="text-[var(--mint)] underline">
                    プライバシーポリシー
                  </a>
                  に同意します（必須）
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={!agreed}
                className={`w-full py-3.5 rounded-xl text-[15px] font-bold text-white transition-all ${
                  agreed
                    ? "bg-[var(--mint)] hover:bg-[#3da08c] hover:-translate-y-0.5 hover:shadow-md"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                送信する
              </button>

              <LegalNote text="ご記入いただいた個人情報は、施術・予約・お問い合わせの対応にのみ使用し、第三者への提供は行いません。" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
