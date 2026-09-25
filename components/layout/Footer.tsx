import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { ROUTES } from "@/lib/routes";

const MENU_LINKS = [
  { href: ROUTES.first, label: "初めての方へ" },
  { href: ROUTES.symptoms, label: "お悩み別メニュー" },
  { href: ROUTES.treatments, label: "施術内容" },
  { href: ROUTES.flow, label: "施術の流れ" },
  { href: ROUTES.price, label: "料金案内" },
  { href: ROUTES.staff, label: "院長紹介" },
  { href: ROUTES.voice, label: "利用者の声" },
  { href: ROUTES.column, label: "コラム" },
  { href: ROUTES.faq, label: "よくある質問" },
  { href: ROUTES.trafficAccident, label: "交通事故相談" },
];

const BOOKING_LINKS = [
  { href: ROUTES.reservation, label: "Web予約", external: false },
  { href: clinicInfo.lineUrl, label: "LINE相談", external: true },
  { href: `tel:${clinicInfo.phone}`, label: "電話する", external: false },
  { href: clinicInfo.googleMapUrl, label: "Googleマップ", external: true },
  { href: clinicInfo.instagram, label: "Instagram", external: true },
  { href: clinicInfo.tiktok, label: "TikTok", external: true },
  { href: ROUTES.privacy, label: "プライバシーポリシー", external: false },
];

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/80 pt-14 pb-6" role="contentinfo">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* 院情報 */}
          <div>
            <p className="font-serif text-[20px] font-bold text-white mb-3">
              フリオ天神整骨院
            </p>
            <p className="text-[13px] leading-[1.9] text-white/65 mb-4">
              国家資格者の院長が専任で対応する、天神南エリアのプライベート整骨院です。
              姿勢・骨盤・体幹から、動きやすい毎日をサポートします。
            </p>
            <address className="not-italic text-[12px] leading-[2] text-white/65">
              <p>{clinicInfo.addressDetail}</p>
              <p>
                TEL:{" "}
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="text-[var(--mint-light)] hover:underline"
                >
                  {clinicInfo.phone}
                </a>
              </p>
              {clinicInfo.hours.map((h) => (
                <p key={h.days}>
                  {h.days}：{h.open === "—" ? "定休日" : `${h.open}〜${h.close}`}
                  {h.note ? `（${h.note}）` : ""}
                </p>
              ))}
            </address>
          </div>

          {/* メニューリンク */}
          <nav aria-label="フッターナビゲーション1">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[var(--mint-light)] uppercase mb-3.5">
              メニュー
            </p>
            <ul className="space-y-2">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/65 hover:text-[var(--mint-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 予約・SNSリンク */}
          <nav aria-label="フッターナビゲーション2">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[var(--mint-light)] uppercase mb-3.5">
              ご予約・SNS
            </p>
            <ul className="space-y-2">
              {BOOKING_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/65 hover:text-[var(--mint-light)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/65 hover:text-[var(--mint-light)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between items-center gap-3 text-[11px] text-white/40">
          <span>© 2025 フリオ天神整骨院. All rights reserved.</span>
          <div className="flex gap-4">
            <Link
              href={ROUTES.privacy}
              className="hover:text-[var(--mint-light)] transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-[var(--mint-light)] transition-colors"
            >
              サイトマップ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
