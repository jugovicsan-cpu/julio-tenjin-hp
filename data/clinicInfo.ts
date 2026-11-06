import type { ClinicInfo } from "@/types";

export const clinicInfo: ClinicInfo = {
  name: "フリオ天神整骨院",
  nameKana: "フリオテンジンセッコツイン",
  tagline: "天神南で、身体と向き合う時間を。",
  subTagline:
    "国家資格者の院長が専任で対応する、落ち着いたプライベート空間の整骨院です。",
  address: "福岡市中央区渡辺通5丁目",
  addressDetail: "福岡県福岡市中央区渡辺通5丁目（天神南エリア）",
  phone: "092-724-5070",
  lineUrl: "https://lin.ee/YrGqhJf",
  reservationUrl: "https://coubic.com/XXXXXXX",
  googleMapUrl: "https://maps.google.com/?q=フリオ天神整骨院",
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6480428765!2d130.40388880000003!3d33.5884864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191891168a3b1%3A0xfefe647bd2874e37!2z44OV44Oq44Kq5aSp56We5pW06aqo6Zmi!5e0!3m2!1sja!2sjp!4v1793975586441!5m2!1sja!2sjp",
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
