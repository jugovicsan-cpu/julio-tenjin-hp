// ============================================================
// カードコンポーネント集
// ============================================================

import Link from "next/link";
import type { Treatment, Symptom, Voice, Column } from "@/types";

// ---- SymptomCard -------------------------------------------
interface SymptomCardProps {
  symptom: Pick<Symptom, "slug" | "icon" | "title" | "shortDesc">;
}

export function SymptomCard({ symptom }: SymptomCardProps) {
  return (
    <Link
      href={`/symptoms/${symptom.slug}`}
      className="bg-white border-[1.5px] border-[var(--border)] rounded-xl p-5 text-center block transition-all hover:border-[var(--mint)] hover:bg-[var(--mint-pale)] hover:-translate-y-0.5 hover:shadow-md"
      aria-label={`${symptom.title}の詳細を見る`}
    >
      <div className="text-[28px] mb-2" aria-hidden="true">
        {symptom.icon}
      </div>
      <div className="text-[13px] font-bold text-[var(--navy)] leading-snug">
        {symptom.title}
      </div>
      <div className="text-[11px] text-[var(--text-light)] mt-1">
        {symptom.shortDesc}
      </div>
    </Link>
  );
}

// ---- TreatmentCard -----------------------------------------
interface TreatmentCardProps {
  treatment: Pick<
    Treatment,
    "slug" | "icon" | "title" | "shortDesc"
  >;
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg flex flex-col"
      aria-label={`${treatment.title}の詳細を見る`}
    >
      <div
        className="aspect-video bg-gradient-to-br from-[var(--mint-pale)] to-[var(--beige)] flex items-center justify-center text-[40px]"
        aria-hidden="true"
      >
        {treatment.icon}
      </div>
      <div className="p-[18px] flex flex-col flex-1">
        <h3 className="font-serif text-[16px] font-semibold text-[var(--navy)] mb-2">
          {treatment.title}
        </h3>
        <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed flex-1">
          {treatment.shortDesc}
        </p>
        <span className="mt-3.5 text-[12px] font-bold text-[var(--mint)] flex items-center gap-1">
          詳しく見る →
        </span>
      </div>
    </Link>
  );
}

// ---- FeatureCard -------------------------------------------
interface FeatureCardProps {
  num: string;
  title: string;
  body: string;
}

export function FeatureCard({ num, title, body }: FeatureCardProps) {
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6 transition-colors hover:bg-[var(--mint)]/10">
      <div
        className="font-serif text-[32px] font-bold text-[var(--mint)] opacity-50 leading-none mb-2"
        aria-hidden="true"
      >
        {num}
      </div>
      <h3 className="font-serif text-[16px] font-semibold text-white mb-2.5 leading-snug">
        {title}
      </h3>
      <p className="text-[13px] text-white/72 leading-relaxed">{body}</p>
    </div>
  );
}

// ---- VoiceCard ---------------------------------------------
interface VoiceCardProps {
  voice: Voice;
}

export function VoiceCard({ voice }: VoiceCardProps) {
  return (
    <div className="bg-[var(--beige)] rounded-xl p-6 relative">
      {/* 装飾引用符 */}
      <span
        className="absolute top-2.5 left-4 font-['Georgia'] text-[64px] text-[var(--mint)] opacity-30 leading-none select-none"
        aria-hidden="true"
      >
        "
      </span>

      <div className="flex items-start gap-2 mb-3">
        <div>
          <p className="text-[12px] font-bold text-[var(--navy)]">
            {voice.age} {voice.gender}
          </p>
          <p className="text-[11px] text-[var(--text-light)]">
            {voice.occupation}
          </p>
        </div>
        <div className="ml-auto text-[12px] text-amber-400" aria-label={`評価${voice.rating}つ星`}>
          {"★".repeat(voice.rating)}
        </div>
      </div>

      <h3 className="font-serif text-[15px] font-semibold text-[var(--navy)] mb-2 leading-snug">
        {voice.title}
      </h3>
      <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-2.5">
        {voice.body}
      </p>
      <p className="text-[10px] text-[var(--text-light)] border-t border-[var(--border)] pt-2">
        {voice.legalNote}
      </p>
    </div>
  );
}

// ---- ColumnCard --------------------------------------------
interface ColumnCardProps {
  column: Column;
}

const CATEGORY_EMOJI: Record<string, string> = {
  肩こり: "💆",
  腰痛: "🦴",
  スマホ首: "📱",
  姿勢: "🧍",
  骨盤: "⚖️",
  産後: "👶",
  スポーツ: "🏃",
  交通事故: "🚗",
  セルフケア: "💪",
};

export function ColumnCard({ column }: ColumnCardProps) {
  return (
    <Link
      href={`/column/${column.slug}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md flex flex-col"
      aria-label={`コラム「${column.title}」を読む`}
    >
      <div
        className="aspect-video bg-gradient-to-br from-[var(--navy-light)] to-[var(--mint)] flex items-center justify-center text-[36px] text-white/60"
        aria-hidden="true"
      >
        {CATEGORY_EMOJI[column.category] ?? "📝"}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="inline-block text-[10px] font-bold tracking-wide text-[var(--mint)] bg-[var(--mint-pale)] px-2 py-[3px] rounded mb-2">
          {column.category}
        </span>
        <h3 className="font-serif text-[14px] font-semibold text-[var(--navy)] leading-snug flex-1 line-clamp-2">
          {column.title}
        </h3>
        <div className="flex gap-2.5 mt-2 text-[11px] text-[var(--text-light)]">
          <span>{column.publishedAt}</span>
          <span>約{column.readMinutes}分</span>
        </div>
      </div>
    </Link>
  );
}
