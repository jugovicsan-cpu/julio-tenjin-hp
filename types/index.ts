// ============================================================
// フリオ天神整骨院 — 型定義
// ============================================================

export interface ClinicInfo {
  name: string;
  nameKana: string;
  tagline: string;
  subTagline: string;
  address: string;
  addressDetail: string;
  phone: string;
  lineUrl: string;
  reservationUrl: string;
  googleMapUrl: string;
  googleMapEmbedUrl: string;
  hours: HoursEntry[];
  holidays: string;
  nearestStation: string;
  walkMinutes: number;
  instagram: string;
  tiktok: string;
  youtube: string;
  twitter: string;
  facebook: string;
}

export interface HoursEntry {
  days: string;
  open: string;
  close: string;
  note?: string;
}

export interface Staff {
  id: string;
  name: string;
  nameKana: string;
  title: string;
  license: string;
  experience: string;
  origin: string;
  bio: string;
  hobbies: string[];
  family: string;
  imagePlaceholder: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  targets: string[];
  icon: string;
  imagePlaceholder: string;
}

export interface Symptom {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  concerns: string[];
  causes: string[];
  approach: string;
  selfCare: string[];
  faq: FAQ[];
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Voice {
  id: string;
  age: string;
  gender: string;
  occupation: string;
  title: string;
  body: string;
  rating: number;
  legalNote: string;
}

export interface Column {
  id: string;
  slug: string;
  title: string;
  category: ColumnCategory;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  imagePlaceholder: string;
}

export type ColumnCategory =
  | "肩こり"
  | "腰痛"
  | "スマホ首"
  | "姿勢"
  | "骨盤"
  | "産後"
  | "スポーツ"
  | "交通事故"
  | "セルフケア";

export interface PriceItem {
  id: string;
  category: string;
  name: string;
  price: string;
  duration: string;
  note?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  body: string;
  isNew: boolean;
}

export interface SnsLinks {
  instagram: string;
  tiktok: string;
  youtube: string;
  twitter: string;
  facebook: string;
  line: string;
}

export interface AccessInfo {
  address: string;
  stationInfo: string;
  parkingInfo: string;
  googleMapUrl: string;
  googleMapEmbedUrl: string;
}

export interface LegalNote {
  effectDisclaimer: string;
  personalDataPolicy: string;
  advertisingNote: string;
}
