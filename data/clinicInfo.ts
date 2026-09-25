import type { ClinicInfo } from "@/types";

export const clinicInfo: ClinicInfo = {
  name: "フリオ天神整骨院",
  nameKana: "フリオテンジンセッコツイン",
  tagline: "天神南で、身体と向き合う時間を。",
  subTagline:
    "国家資格者の院長が専任で対応する、落ち着いたプライベート空間の整骨院です。",
  address: "福岡市中央区渡辺通5丁目",
  addressDetail: "福岡県福岡市中央区渡辺通5丁目（天神南エリア）",
  phone: "092-XXX-XXXX",
  lineUrl: "https://lin.ee/YrGqhJf",
  reservationUrl: "https://coubic.com/XXXXXXX",
  googleMapUrl: "https://maps.google.com/?q=フリオ天神整骨院",
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8!2d130.3999!3d33.5870",
  hours: [
    { days: "月・火・水・金", open: "10:00", close: "20:00" },
    { days: "木・土", open: "10:00", close: "18:00" },
    {
      days: "日・祝",
      open: "—",
      close: "—",
      note: "定休日（不定休の場合あり、SNSにて告知）",
    },
  ],
  holidays: "日曜・祝日（不定休あり）",
  nearestStation: "福岡市地下鉄七隈線「天神南駅」",
  walkMinutes: 5,
  instagram: "https://www.instagram.com/furio_tenjin/",
  tiktok: "https://www.tiktok.com/@furio_tenjin",
  youtube: "https://www.youtube.com/@furio_tenjin",
  twitter: "https://twitter.com/furio_tenjin",
  facebook: "https://www.facebook.com/furio.tenjin",
};
