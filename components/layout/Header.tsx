"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { ROUTES } from "@/lib/routes";

const NAV_LINKS = [
  { href: ROUTES.symptoms, label: "お悩み" },
  { href: ROUTES.treatments, label: "施術内容" },
  { href: ROUTES.flow, label: "施術の流れ" },
  { href: ROUTES.price, label: "料金" },
  { href: ROUTES.staff, label: "院長紹介" },
  { href: ROUTES.access, label: "アクセス" },
  { href: ROUTES.column, label: "コラム" },
  { href: ROUTES.faq, label: "FAQ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニューが開いているときはbodyのスクロールを無効化
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b border-[var(--border)] transition-shadow ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
        role="banner"
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="flex items-center justify-between h-16">
            {/* ロゴ */}
            <Link
              href={ROUTES.home}
              className="flex flex-col"
              aria-label="フリオ天神整骨院 トップページ"
            >
              <span className="font-serif text-[17px] font-semibold text-[var(--navy)] tracking-wide">
                フリオ天神整骨院
              </span>
              <span className="text-[9px] tracking-[0.15em] text-[var(--text-light)] uppercase">
                Furio Tenjin Seikotsuin
              </span>
            </Link>

            {/* PCナビ */}
            <nav
              className="hidden lg:flex gap-6 items-center text-[13px] font-medium"
              aria-label="グローバルナビゲーション"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--mint)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ヘッダーCTA */}
            <div className="flex gap-2 items-center">
              <a
                href={clinicInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center"
                aria-label="LINEで友だち追加"
              >
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="友だち追加"
                  height={36}
                  style={{ display: "block", borderRadius: "4px" }}
                />
              </a>
              <Link
                href={ROUTES.reservation}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-bold text-white bg-[var(--mint)] hover:bg-[#3da08c] transition-all"
              >
                ご予約
              </Link>

              {/* ハンバーガー */}
              <button
                className="flex flex-col gap-[5px] p-2 lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="メニューを開く"
              >
                <span className="w-[22px] h-[2px] bg-[var(--navy)] rounded-sm block" />
                <span className="w-[22px] h-[2px] bg-[var(--navy)] rounded-sm block" />
                <span className="w-[22px] h-[2px] bg-[var(--navy)] rounded-sm block" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[300] flex"
          role="dialog"
          aria-label="モバイルメニュー"
          aria-modal="true"
        >
          {/* パネル */}
          <nav className="bg-white w-4/5 max-w-xs h-full overflow-y-auto p-6 shadow-2xl animate-[slideIn_0.25s_ease]">
            <div className="mb-5">
              <p className="font-serif text-[16px] font-bold text-[var(--navy)]">
                フリオ天神整骨院
              </p>
              <p className="text-[12px] text-[var(--text-light)]">
                福岡市中央区渡辺通5丁目
              </p>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 border-b border-[var(--border)] text-[15px] font-medium text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ROUTES.trafficAccident}
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-[var(--border)] text-[15px] font-medium text-[var(--text-primary)]"
            >
              交通事故後の不調相談
            </Link>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex justify-center items-center py-3 rounded-lg text-[14px] font-bold text-white bg-[var(--navy)]"
              >
                📞 {clinicInfo.phone}
              </a>
              <a
                href={clinicInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
                aria-label="LINEで友だち追加"
              >
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="友だち追加"
                  height={44}
                  style={{ borderRadius: "8px" }}
                />
              </a>
              <Link
                href={ROUTES.reservation}
                onClick={() => setMobileOpen(false)}
                className="flex justify-center items-center py-3 rounded-lg text-[14px] font-bold text-white bg-[var(--mint)]"
              >
                📅 Web予約
              </Link>
            </div>
          </nav>

          {/* 閉じるボタン・背景 */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
}
