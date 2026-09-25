// components/seo/SEOJsonLd.tsx
// JSON-LD 構造化データを <script> タグとして埋め込むコンポーネント

interface SEOJsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function SEOJsonLd({ data }: SEOJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
