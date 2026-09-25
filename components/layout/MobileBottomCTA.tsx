import { clinicInfo } from "@/data/clinicInfo";
import { ROUTES } from "@/lib/routes";

export function MobileBottomCTA() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[200] grid grid-cols-4 bg-white border-t-2 border-[var(--border)] shadow-[0_-4px_16px_rgba(0,0,0,0.10)] lg:hidden"
      aria-label="モバイル下部クイックアクセス"
    >
      <a
        href={`tel:${clinicInfo.phone}`}
        className="flex flex-col items-center justify-center py-2 gap-[3px] text-[10px] font-bold text-[var(--navy)] bg-[var(--beige)] active:bg-[var(--beige-dark)]"
        aria-label="電話する"
      >
        <span className="text-[20px] leading-none" aria-hidden="true">📞</span>
        <span>電話</span>
      </a>
      <a
        href={clinicInfo.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-2 gap-[3px] text-[10px] font-bold text-white bg-[#06C755] active:bg-[#05a84a]"
        aria-label="LINEで相談する"
      >
        <span className="text-[20px] leading-none" aria-hidden="true">💬</span>
        <span>LINE</span>
      </a>
      <a
        href={ROUTES.reservation}
        className="flex flex-col items-center justify-center py-2 gap-[3px] text-[10px] font-bold text-white bg-[var(--mint)] active:bg-[#3da08c]"
        aria-label="Web予約する"
      >
        <span className="text-[20px] leading-none" aria-hidden="true">📅</span>
        <span>Web予約</span>
      </a>
      <a
        href={clinicInfo.googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-2 gap-[3px] text-[10px] font-bold text-white bg-[var(--navy)] active:bg-[var(--navy-light)]"
        aria-label="Googleマップで見る"
      >
        <span className="text-[20px] leading-none" aria-hidden="true">📍</span>
        <span>地図</span>
      </a>
    </nav>
  );
}
