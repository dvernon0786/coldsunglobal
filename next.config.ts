import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "coldsunenterprise.com" },
      { protocol: "https", hostname: "coldsuncapital.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/salesforce", destination: "/solutions/salesforce", permanent: true },
      { source: "/field-service", destination: "/solutions/field-service", permanent: true },
      { source: "/erp", destination: "/solutions/erp", permanent: true },
      { source: "/ai", destination: "/solutions/agentforce", permanent: true },
    ];
  },
};

export default nextConfig;
