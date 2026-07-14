import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kurangi slow filesystem warning dengan mengecualikan folder besar dari file tracing
  outputFileTracingExcludes: {
    "*": [
      "./node_modules/@swc/core-linux-x64-gnu",
      "./node_modules/@swc/core-linux-x64-musl",
      "./node_modules/@esbuild/linux-x64",
    ],
  },
  images: {
    // Daftarkan semua CDN eksternal agar Next.js Image Optimization bisa bekerja
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "playwright.dev",
      },
    ],
  },
};

export default nextConfig;
