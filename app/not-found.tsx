// app/not-found.tsx
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-[var(--beige)]">
      <div className="text-center px-5">
        <div className="text-[64px] mb-4" aria-hidden="true">🔍</div>
        <h1 className="font-serif text-[32px] font-bold text-[var(--navy)] mb-3">
          ページが見つかりません
        </h1>
        <p className="text-[15px] text-[var(--text-secondary)] mb-6 leading-relaxed">
          お探しのページは移動・削除されたか、URLが間違っている可能性があります。
        </p>
        <Link
          href={ROUTES.home}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--mint)] text-white font-bold text-[14px] hover:bg-[#3da08c] transition-all"
        >
          ← トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
