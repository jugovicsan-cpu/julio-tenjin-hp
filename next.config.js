/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      // 施術内容の個別ページは未作成のため、トップページの該当セクションへ誘導
      { source: "/treatments", destination: "/#treatments", permanent: false },
      { source: "/treatments/posture", destination: "/symptoms/posture", permanent: false },
      { source: "/treatments/sports", destination: "/symptoms/sports-injury", permanent: false },
      { source: "/treatments/traffic-accident", destination: "/traffic-accident", permanent: false },
      { source: "/treatments/:slug", destination: "/#treatments", permanent: false },
    ];
  },
};

module.exports = nextConfig;
