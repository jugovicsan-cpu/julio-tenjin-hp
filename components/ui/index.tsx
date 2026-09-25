// ============================================================
// UI コンポーネント集
// ============================================================

import Link from "next/link";

// ---- SectionHeading ----------------------------------------
interface SectionHeadingProps {
  en: string;
  ja: string;
  desc?: string;
  center?: boolean;
  light?: boolean; // ダークbg用（白文字）
}

export function SectionHeading({
  en,
  ja,
  desc,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <span
        className="text-[11px] font-bold tracking-[0.2em] text-[var(--mint)] uppercase block mb-2"
        aria-hidden="true"
      >
        {en}
      </span>
      <h2
        className={`font-serif text-[clamp(22px,4vw,32px)] font-semibold leading-relaxed ${
          light ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        {ja}
      </h2>
      {desc && (
        <p
          className={`mt-3.5 text-[14px] max-w-[560px] ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[var(--text-secondary)]"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

// ---- CTAButton ---------------------------------------------
interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "navy" | "outline" | "line" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<string, string> = {
  primary: "bg-[var(--mint)] text-white hover:bg-[#3da08c]",
  navy: "bg-[var(--navy)] text-white hover:bg-[var(--navy-light)]",
  outline: "bg-transparent text-[var(--navy)] border-2 border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white",
  line: "bg-[#06C755] text-white hover:bg-[#05a84a]",
  white: "bg-white text-[var(--mint)] hover:bg-[var(--beige)]",
  "white-outline": "bg-transparent text-white border-2 border-white/70 hover:bg-white/12",
};

const SIZE_CLASSES: Record<string, string> = {
  sm: "px-3.5 py-1.5 text-[12px] rounded-lg",
  md: "px-5 py-2.5 text-[13px] rounded-lg",
  lg: "px-7 py-3.5 text-[15px] rounded-xl",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: CTAButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-1.5 font-bold transition-all hover:-translate-y-0.5 hover:shadow-md ${
    VARIANT_CLASSES[variant]
  } ${SIZE_CLASSES[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  );
}

// ---- LegalNote ---------------------------------------------
interface LegalNoteProps {
  text?: string;
  className?: string;
}

export function LegalNote({ text, className = "" }: LegalNoteProps) {
  return (
    <p
      className={`text-[11px] text-[var(--text-light)] leading-relaxed ${className}`}
      role="note"
    >
      {text ??
        "※施術の効果には個人差があります。状態によって異なりますので、まずはご相談ください。"}
    </p>
  );
}

// ---- Breadcrumb --------------------------------------------
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="py-3">
      <ol
        className="flex gap-1.5 flex-wrap text-[12px] text-[var(--text-light)]"
        role="list"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-1.5"
            role="listitem"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-[var(--mint)] hover:underline"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
